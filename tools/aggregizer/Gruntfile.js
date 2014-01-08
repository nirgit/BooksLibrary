/*
 * grunt-aggregizer
 * 
 *
 * Copyright (c) 2014 Nir Moav
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.file.defaultEncoding = 'utf8';

    grunt.registerTask("aggregizer", function() {
        var dir         = grunt.config.get('aggregizer').path[0] ;
        var outputFile  = grunt.config.get('aggregizer').outputFile ;
        if(!dir) {
            grunt.log.error("ABORTING! Must define 'path' in 'aggregizer' config");
            return ;
        }
        grunt.file.base = dir ;
        var graph = getAllGraphNodes(dir) ;
        var sortedGraph = sortGraphUsingDAG(graph) ;
        var concatenatedResult = getFileContentsAccordingToGraph(sortedGraph) ;
        grunt.file.write(outputFile, concatenatedResult) ;
        grunt.log.writeln("Finished successfully! \n\n\n Contents written to %s", outputFile) ;
    }) ;

    function getFileContentsAccordingToGraph(fileListToReadAndConcat) {
        var result = "" ;
        for(var f=0; f < fileListToReadAndConcat.length; f++) {
            var fileName = fileListToReadAndConcat[f].name ;
            result += grunt.file.read(fileName) ;
        }
        return result ;
    };

    function getAllGraphNodes(dir) {
        var graph = [] ;
        grunt.file.recurse(dir, function(abspath, rootdir, subdir, filename) {
            // TODO NMO 1/7/14 1:12 AM - perform a DAG algorithm on the files in order to sort them.
            if(filename.indexOf(".js") >= 0) {
                var fileContents = readFileContents(abspath) ;
                var parentClass  = getParentClass(fileContents) ;
                graph.push({'name': abspath, 'extends': parentClass}) ;
            }
        }) ;
        return graph ;
    } ;

    function getParentClass(fileContents) {
        var parentClassRegex = new RegExp("[ ]*def.extends[ ]*=[ ]*[\"'](.*)['\"]") ;
        var result = parentClassRegex.exec(fileContents) ;
        if(result) {
            return result[1] ;
        } else {
            return null ;
        }
    } ;

    function sortGraphUsingDAG(graph) {
        var loaded = [] ;
        for(var index=0; index < graph.length; index++) {
            var item = graph[index] ;
            loadExtendChainForItem(item, graph, loaded) ;
        }
        return loaded ;
    } ;

    function loadExtendChainForItem(itemToLoad, unSortedGraph, loadedItems) {
        if(isItemToLoadAlreadyLoaded(itemToLoad, loadedItems)) {
            return ;
        }
        var parentClass = itemToLoad.extends ;
        if(parentClass === null) {
            loadedItems.push(itemToLoad) ;
            return true ;
        } else {
            var isParentChainLoaded = isClassLoaded(parentClass, loadedItems) ;
            if(isParentChainLoaded) {
                loadedItems.push(itemToLoad) ;
                return true ;
            } else {
                for(var i=0; i < unSortedGraph.length; i++) {
                    if(getClassNameFromFile(unSortedGraph[i].name) === parentClass) {
                        isParentChainLoaded = loadExtendChainForItem(unSortedGraph[i], unSortedGraph, loadedItems);
                        break ;
                    }
                }
                if(isParentChainLoaded) {
                    loadedItems.push(itemToLoad) ;
                    return true ;
                } else {
                    grunt.log.error("Parent class %s cannot be found for %s", parentClass, itemToLoad.name) ;
                    return false ;
                }
            }
        }
    }

    function isItemToLoadAlreadyLoaded(itemToLoad, loadedItems) {
        var result = false ;
        for(var k=0; k < loadedItems.length; k++) {
            if(loadedItems[k].name === itemToLoad.name &&
               loadedItems[k].extends === itemToLoad.extends) {
               result = true;
               break ;
           }
        }
        return result ;
    } ;

    function isClassLoaded(className, loadedItems) {
        for(var j=0; j < loadedItems.length; j++) {
            var loadedFileName = loadedItems[j].name ;
            var loadedFileClassName = getClassNameFromFile(loadedFileName) ;
            if(loadedFileClassName === className) {
                return true ;
            }
        }
        return false ;
    }

    function getClassNameFromFile(fileName) {
        var loadedFileContent = readFileContents(fileName) ;
        var classNameRegex = new RegExp("[ ]*define.Class[ ]*[\(][ ]*['\"](.*)['\"][ ]*,") ;
        var result = classNameRegex.exec(loadedFileContent) ;
        if(result === null) {
            return null ;
        } else {
            return result[1] ;
        }
    }

    function readFileContents(absPath) {
        if(!absPath) {
            return null ;
        }
        return grunt.file.read(absPath) ;
    } ;
}
