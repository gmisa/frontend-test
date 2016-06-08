/**
 * Created by misag on 6/7/16.
 */

var dest = './dist';
var src = './src';
var glob = require('glob').sync;

module.exports = {
    dev: {
        src: src
    },
    dist : {
        src: dest
    },
    less : {
        src: [src + '/styles/*.less', '!' + src + '/styles/_*.less'],
        dest: src + '/styles'
    },
    lessPath: [
        './bower_components'
    ],
    images: {
        src: src + '/img',
        dest: dest + "/img"
    },
    css: {
        src: src + '/css/**/*.css',
        dest: dest + '/styles'
    },
    js: {
        src: src + '/js/**/*.js',
        dest: dest + '/scripts'
    },
    concat: {
        'vendor': {
            scripts: [
                './bower_components/modernizr/modernizr.js',
                './bower_components/respond/src/respond.js',
                './bower_components/bootstrap/dist/js/bootstrap.js',
            ],
            css: [
                './bower_components/animate.css/animate.css',
                src + '/styles/base.css'
            ]
        },
        'common': {
            scripts: src + '/scripts/*.js',
            css: src + '/styles/common.css'
        },
        'angular-bundle': {
            scripts: [
                './bower_components/angular/angular.js',
                './bower_components/angular-resource/angular-resource.js',
                './bower_components/angular-sanitize/angular-sanitize.js',
                './bower_components/angular-route/angular-route.js',
                './bower_components/angular-ui-tinymce/src/tinymce.js',
                './bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
            ]
        }
    },
    fonts: {
        fontawesome: {
            src: './bower_components/font-awesome/fonts',
            dest: dest + '/fonts'
        },
        bootstrap: {
            src: './bower_components/bootstrap/dist/fonts',
            dest: dest + '/fonts'
        }
    },
};
