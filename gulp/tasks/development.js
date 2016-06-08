/**
 * Created by misag on 6/7/16.
 */

var gulp = require('gulp');

gulp.task('development', [
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
    //'templateCache-local',
    'rev-collector-css-dev',
    'rev-collector-html-dev'
]);