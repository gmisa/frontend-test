/**
 * Created by misag on 6/7/16.
 */

var gulp = require('gulp');

gulp.task('production', [
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
    'rev-collector-html-prod',
    'final-cleanup-prod'
]);