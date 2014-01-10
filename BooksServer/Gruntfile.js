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

        aggregizer: {
            path: ["src/js"],
            orderedFiles: ["loader.js", "define.js"],
            outputFile: "./build/js/concat-app.out.js"
        },

        uglify: {
            my_target: {
              files: {
                './resources/views/app.min.js': ["./build/js/concat-app.out.js"]
              }
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Custom tasks (local plugin)
    grunt.loadTasks('../tools/aggregizer');

    grunt.registerTask('default', ['aggregizer', 'uglify']);
}