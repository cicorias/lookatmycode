module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        clean: ["bin", "public"],
        copy: {
            main: {
                files: [
                    {src: ['**'], dest: 'public/lib', cwd: 'src/lib/', expand: true},
                    {src: ['**'], dest: 'public/img', cwd: 'img/', expand: true}
                ]
            }
        },
        coffeelint:{
            compile: {
                options: {
                    'max_line_length': {
                        'level': 'ignore'
                    },
                    'indentation': {
                        'level': 'ignore'
                    }
                },
                files: {
                    src: ["src/*.coffee"]
                }
            }
        },
        coffee: {
            compile:{
                options:{
                    bare: true
                },
                files: {
                    "server.js": ["src/config.coffee", "src/languages.coffee", "src/server.coffee"],
                    "public/scripts.js": "src/client.coffee"
                }
            }
        },
        less: {
            "public/styles.css": 'src/*.less',
            options: {
                compress: false
            }
        },
        watch: {
            css: {
                files: 'src/*.less',
                tasks: 'less'
            },
            coffee:{
                files: 'src/*.coffee',
                tasks: ['coffeelint', 'coffee']
            }
        },
    });

    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-coffeelint');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean', 'copy', 'less', 'coffeelint', 'coffee']);
    // grunt.registerTask('default', ['clean', 'copy', 'concat', 'less', 'coffeelint', 'coffee', 'includes']);
    // grunt.registerTask('deploy', ['clean', 'copy', 'concat', 'less','coffeelint','coffee','includes','cssmin', 'uglify'])

};

/*
    "grunt": "latest",
    "grunt-contrib-concat": "*",
    "grunt-contrib-watch": "*",
    "grunt-contrib-coffee": "*",
    "grunt-contrib-concat": "*",
    "grunt-contrib-uglify": "*",
    "grunt-contrib-less": "*",
    "grunt-contrib-clean": "*",
    "grunt-contrib-cssmin": "*",
    "grunt-coffeelint": "*",
    "grunt-includes": "*",
    "grunt-contrib-copy": "*",
    "grunt-contrib-htmlmin": "*"
*/
