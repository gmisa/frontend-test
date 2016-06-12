/**
 * Created by misag on 6/7/16.
 */

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function () {
    return del([
        config.dist.src + '/**/*.*',
        config.less.dest + '/*.css',
    ]);
});

