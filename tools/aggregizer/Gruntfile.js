/*
 * grunt-aggregizer
 * 
 *
 * Copyright (c) 2014 Nir Moav
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerTask("aggregize", function() {
        var defaults = ["some string as default..."] ;

        var aggConfig = grunt.config('aggregize')["rootDir"] ;
        if(!aggConfig) {
            grunt.log.error("ABORTING! Must define 'rootDir' in 'aggregize' config");
            return ;
        }


        grunt.log.writeln(aggConfig) ;
        grunt.log.writeln("Running Aggregization!!!!!!!!!!!") ;
    })
};
