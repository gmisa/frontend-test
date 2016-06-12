/**
 * Created by misag on 6/7/16.
 */

var less = require('gulp-less');
var gulp = require('gulp');
var config = require('../config');

gulp.task('less', ['clean', 'copy-index','optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome'], function () {
    return gulp.src(config.less.src)
        .pipe(less({ paths: config.lessPath }))
        .pipe(gulp.dest(config.less.dest));
});