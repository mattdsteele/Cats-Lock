/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jasmine-runner');


  // Project configuration.
  grunt.initConfig({
    jasmine: {
      src : 'src/**/*.js',
      specs : 'specs/**/*spec.js',
      timeout : 10000,
      junit : {
        output : 'junit/'
      }
    },
    watch: {
      files: ['src/**/*.js', 'specs/**/*.js'],
      tasks: 'jasmine'
    }
  });

  // Default task.
  grunt.registerTask('default', 'jasmine');

};
