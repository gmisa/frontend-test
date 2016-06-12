/**
 * Created by misag on 6/7/16.
 */

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('final-cleanup-dev', [
    'clean',
    'copy-index',
    'optimize-images',
    'copy-font-bootstrap',
    'copy-font-fontawesome',
    'less',
    'concat-vendor-js-dev',
    'concat-vendor-css-dev',
    'concat-common-js-dev',
    'concat-common-css-dev',
    'concat-angular-bundle-dev',
    'templateCache-dev',
    'rev-collector-css-dev',
    'rev-collector-html-dev'], function () {
    return del([
        config.css.src
    ]);
});

gulp.task('final-cleanup-prod', [
    'clean',
    'copy-index',
    'optimize-images',
    'copy-font-bootstrap',
    'copy-font-fontawesome',
    'less',
    'concat-vendor-js-prod',
    'concat-vendor-css-prod',
    'concat-common-js-prod',
    'concat-common-css-prod',
    'concat-angular-bundle-prod',
    'templateCache-prod',
    'rev-collector-css-prod',
    'rev-collector-html-prod'], function () {
    return del([
        config.css.src 
    ]);
});