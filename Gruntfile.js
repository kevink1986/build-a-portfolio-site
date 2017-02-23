module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        responsive_images: {
          dev: {
            options: {
              engine: 'im',
              sizes: [{
                    name: '750x400',
                    width: 750,
                    height: 400,
                    quality: 60
              },
              {
                    name: '320x200',
                    width: 320,
                    height: 200,
                    quality: 60
              }
              ]
            },

            /*
            You don't need to change this part if you don't change
            the directory structure.
            */
            files: [{
              expand: true,
              src: ['*.{gif,jpg,jpeg,png}'],
              cwd: 'images_src/',
              dest: 'images/'
            }]
          }
        }
    });

    grunt.registerTask('default', [
        'responsive_images'
    ]);

}