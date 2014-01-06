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
        },

        jshint: {
              src: ['Gruntfile.js', 'src/js/**/*.js'],
              options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                  require: true,
                  define: true,
                  requirejs: true,
                  describe: true,
                  expect: true,
                  it: true
                }
              }
            },

        watch: {
          files: '<%= jshint.src %>',
          tasks: ['jshint']
        },

        aggregize: {
            rootDir: ["src/js"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadTasks('../tools/aggregizer');

//    grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', ['aggregize']);
}