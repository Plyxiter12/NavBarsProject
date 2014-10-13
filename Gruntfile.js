// Generated on 2014-10-08 using
// generator-webapp 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['src/scripts/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:dev']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['jshint']
            }
        },

        // The actual grunt server settings
        connect: {
            server: {
                options: {
                    port: 9000,
                    open: true,
                    livereload: 35729,
                    // Change this to '0.0.0.0' to access the server from outside
                    hostname: 'localhost'
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        less: {
            dev: {
                options: {
                    paths: ['src/styles'],
                    cleanncss: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/styles',
                        src: ['**/*.less'],
                        dest: 'src/styles/css',
                        ext: '.css'
                    }
                ]
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'src/scripts/{,*/}*.js',
                'src/scripts/vendor/*'
            ]
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: 'src/styles/css/*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            styles: {
                expand: true,
                dot: true,
                cwd: 'src/styles',
                dest: '.tmp/styles/',
                src: '/**/*.css'
            }
        }

    });


    grunt.registerTask('build', ['less:dev', 'autoprefixer', 'jshint', 'copy']);
    grunt.registerTask('serve', [ 'jshint', 'clean', 'connect', 'watch']);
};
