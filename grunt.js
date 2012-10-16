/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jasmine-runner');


  // Project configuration.
  grunt.initConfig({
    jasmine: {
      src : ['lib/**/*.js','specs/lib/jasmine-jquery.js', 'src/**/*.js'],
      specs : 'specs/**/*spec.js',
      timeout : 10000,
      junit : {
        output : 'target/junit/'
      }
    },
    watch: {
      files: ['src/**/*.js', 'specs/**/*.js'],
      tasks: 'jasmine'
    }
  });

  // Default task.
  grunt.registerTask('default', 'jasmine');
  // Travis task
  grunt.registerTask('travis', 'jasmine');

};
