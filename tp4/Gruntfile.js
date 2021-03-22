module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            js: {
                src: ['src/js/human.js', 'src/js/*.js'],
                dest: 'dist/js/script.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/js/script.min.js': ['dist/js/script.js']
                }
            }
        },
        copy: {
            js: {
                files: [
                    // includes files within path
                    { src: ['node_modules/jquery/dist/jquery.min.js'], 
                    dest: 'dist/js/jquery.min.js', 
                    filter: 'isFile' }
                ]
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/css/style.min.css': ['src/css/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('mep', ['concat', 'uglify', 'copy', 'cssmin']);
    grunt.registerTask('mep-js', ['concat:js', 'uglify:js', 'copy:js']);
};