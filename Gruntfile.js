/*
 After making necessary changes in the settings under responsive_images
 run this with one of these options:
 "grunt" alone creates a new, completed images directory
 "grunt clean" removes the images directory
 "grunt responsive_images" re-processes images without removing the old ones
 */

module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name:'small',
                        width: '30%',
                        height: '30%',
                        suffix: '_small',
                        quality: 60
                    },{
                        name:'medium',
                        width: '50%',
                        height: '50%',
                        suffix: '_medium',
                        quality: 80
                    },{
                        name:'large',
                        width: '100%',
                        height: '100%',
                        suffix: '_large_1x',
                        quality: 100
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,jpeg}'],
                    cwd: 'images_src/',
                    dest: 'images/'
                }]
            }
        },
        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images']
            }
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);
};