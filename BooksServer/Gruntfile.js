module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
          tasks: ['default']
        },

        aggregizer: {
            path: ["src/js"],
            orderedFiles: ["loader.js", "define.js", "domUtils.js", "utils.js", "authentication.js"],
            outputFile: "./resources/views/app.js"
        },

        uglify: {
            my_target: {
              files: {
                './resources/views/app.min.js': ["./resources/views/app.js"]
              }
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Custom tasks (local plugin)
    grunt.loadNpmTasks('grunt-aggregizer');

    grunt.registerTask('default', ['aggregizer', 'uglify']);
}