/**
 * Created by misag on 6/8/16.
 */

var templateCache = require('gulp-angular-templatecache');
var gulp = require('gulp');
var config = require('../config');
var sourcemaps = require('gulp-sourcemaps');
var rev = require('gulp-rev');
var TEMPLATE_HEADER = 'angular.module("fenderApp").run(["$templateCache", function($templateCache) {';

gulp.task('templateCache-dev', ['clean', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-dev', 'concat-vendor-css-dev', 'concat-common-js-dev', 'concat-common-css-dev', 'concat-angular-bundle-dev'], function () {
    return gulp.src(config.js.src + "/*.html")
        .pipe(templateCache('templates.js', { templateHeader: TEMPLATE_HEADER }))
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest))
        .pipe(rev.manifest('templates.json', {merge:true}))
        .pipe(gulp.dest(config.dist.src + "/rev/scripts")); // write manifest to build dir
});


gulp.task('templateCache-prod', ['clean', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-dev', 'concat-vendor-css-dev', 'concat-common-js-prod', 'concat-common-css-prod', 'concat-angular-bundle-prod'], function () {
    return gulp.src(config.js.src + "/*.html")
        .pipe(templateCache('templates.js', { templateHeader: TEMPLATE_HEADER }))
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest ))
        .pipe(rev.manifest('templates.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/scripts")); // write manifest to build dir
});

