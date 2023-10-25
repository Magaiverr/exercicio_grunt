module.exports = function (grunt) {

    grunt.initConfig({
        less: {
        development: {
            options: {
            paths: ["assets/css"],
            },
            files: {
            "dist/css/style.css": "src/less/style.less",
            },
        },
        },

        uglify: {
        my_target: {
            files: {
            "dist/js/app.min.js": ["src/js/*.js"],
            },
        },
        },
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["less", "uglify"]);
};