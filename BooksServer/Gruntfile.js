module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['src/js/utils/**.*', 'src/js/views/**.*', 'src/js/components/**.*', 'src/js/bookClient.js'],
              dest: 'resources/views/concat-app.out.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
}