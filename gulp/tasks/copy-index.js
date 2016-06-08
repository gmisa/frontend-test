/**
 * Created by misag on 6/7/16.
 */


var gulp = require('gulp');
var config = require('../config');
var gutil = require('gulp-util');

gulp.task('copy-index', ['clean'], function () {
    return gulp.src(config.src + '/index.html')
        .pipe(gulp.dest(config.dist.src));
});