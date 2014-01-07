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
        var dir = grunt.config.get('aggregizer').path[0] ;
        if(!dir) {
            grunt.log.error("ABORTING! Must define 'path' in 'aggregizer' config");
            return ;
        }

        grunt.log.writeln("Root dir is: " + dir) ;
        var allFilesBuf = "" ;

        grunt.file.base = dir ;

        grunt.file.recurse(dir, function(abspath, rootdir, subdir, filename) {
            // TODO NMO 1/7/14 1:12 AM - perform a DAG algorithm on the files in order to sort them.
            if(filename.indexOf(".js") >= 0) {
                grunt.log.writeln(abspath) ;
            }
//            var fileContents = grunt.file.read(filename, {encoding: "utf8"}) ;
//            allFilesBuf+=fileContents;
        }) ;

        grunt.log.writeln("Contents = " + allFileBuf) ;
    }) ;
};
