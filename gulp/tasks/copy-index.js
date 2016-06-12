/**
 * Created by misag on 6/7/16.
 */


var gulp = require('gulp');
var config = require('../config');

gulp.task('copy-index', ['clean'], function () {
    return gulp.src(config.dev.src + '/index.ejs')
        .pipe(gulp.dest(config.dist.src));
});

