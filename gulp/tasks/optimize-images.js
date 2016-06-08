/**
 * Created by misag on 6/7/16.
 */

var gulp       = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../config');
var newer = require('gulp-newer');
var rev = require('gulp-rev');

gulp.task('optimize-images', ['clean', 'copy-index'], function () {
    return gulp.src(config.images.src + '/**/*.*')
        .pipe(newer(config.images.dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(rev())
        .pipe(gulp.dest(config.images.dest))
        .pipe(rev.manifest('images.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + '/rev/img'));
});




