/**
 * Created by misag on 6/7/16.
 */

var gulp = require('gulp');
var revCollector = require('gulp-rev-collector');
var config = require('../config');

gulp.task('rev-collector-css-dev', ['clean','optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less','concat-vendor-js-dev', 'concat-vendor-css-dev', 'concat-common-js-dev', 'concat-common-css-dev'], function () {
    return gulp.src([config.dist.src + '/rev/**/*.json', config.css.dest + '/*.css'])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
                'styles': '/dist/styles',
                'scripts': '/dist/scripts'
            }
        }));
});

gulp.task('rev-collector-css-prod', ['clean','optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less','concat-vendor-js-prod', 'concat-vendor-css-prod', 'concat-common-js-prod', 'concat-common-css-prod'], function () {
    return gulp.src([config.dist.src + '/rev/**/*.json', config.css.dest + '/*.css'])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
                'styles': '/dist/styles',
                'scripts': '/dist/scripts'
            }
        }));
});

gulp.task('rev-collector-html-dev', ['clean', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-dev', 'concat-vendor-css-dev', 'concat-common-js-dev', 'concat-common-css-dev', 'rev-collector-css-dev'], function () {
    return gulp.src([config.dist.src + '/rev/**/*.json', config.dist.src + '/index.html'])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
                'styles': '/dist/styles',
                'scripts': '/dist/scripts'
            }
        }));
});


gulp.task('rev-collector-html-prod', ['clean', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-dev', 'concat-vendor-css-dev', 'concat-common-js-prod', 'concat-common-css-prod', 'rev-collector-css-prod'], function () {
    return gulp.src([config.dist.src + '/rev/**/*.json', config.dist.src + '/index.html'])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
                'styles': '/dist/styles',
                'scripts': '/dist/scripts'
            }
        }));
});

