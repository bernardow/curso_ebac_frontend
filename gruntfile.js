module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './dev/styles/main.css': './src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    './dist/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        replace: {
            dev: {    
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: '../styles/main.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flattern: true,
                        src: ['./src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: '../styles/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flattern: true,
                        src: ['./src/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        uglify: {
            target: {
                files: {
                    './dist/src/scripts/main.min.js' : './src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less:development', 'replace:dev']);
    grunt.registerTask('build', ['less:production', 'replace:dist', 'uglify']);
}