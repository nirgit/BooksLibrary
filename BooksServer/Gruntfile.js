module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['src/js/utils/**.*', 'src/js/views/**.*', 'src/js/components/**.*'],
              dest: 'resources/views/concat-app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
}