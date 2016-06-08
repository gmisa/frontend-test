/**
 * Created by misag on 6/7/16.
 */

var gulp = require('gulp');
var config = require('../config');

gulp.task('copy-font-bootstrap', ['clean', 'copy-index', 'optimize-images'], function () {
    return gulp.src(config.fonts.bootstrap.src + '/**/*.*')
        .pipe(gulp.dest(config.fonts.bootstrap.dest));
});

gulp.task('copy-font-fontawesome', ['clean', 'copy-index','optimize-images', 'copy-font-bootstrap'], function () {
    return gulp.src(config.fonts.fontawesome.src + '/**/*.*')
        .pipe(gulp.dest(config.fonts.fontawesome.dest));
});

