/**
 * Created by misag on 6/7/16.
 */

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var rev = require('gulp-rev');
var config = require('../config');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

/* VENDOR JS */

gulp.task('concat-vendor-js-dev', ['clean', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less'], function () {
    return gulp.src(config.concat['vendor'].scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat({ path: 'vendor.js', cwd: '' }))
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.js.dest))
        .pipe(rev.manifest('vendor.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/scripts")); // write manifest to build dir
});



gulp.task('concat-vendor-js-prod', ['clean', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less'], function () {
    return gulp.src(config.concat['vendor'].scripts)
        .pipe(uglify())
        .pipe(concat({ path: 'vendor.js', cwd: '' }))
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest))
        .pipe(rev.manifest('vendor.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/scripts")); // write manifest to build dir
});


/* VENDOR CSS */

gulp.task('concat-vendor-css-dev', ['clean', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-dev'], function () {
    return gulp.src(config.concat['vendor'].css)
        .pipe(concat({ path: 'vendor.css', cwd: '' }))
        .pipe(rev())
        .pipe(gulp.dest(config.css.dest))
        .pipe(rev.manifest('vendor.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/styles")); // write manifest to build dir
});

gulp.task('concat-vendor-css-prod', ['clean', 'copy-index', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-prod'], function () {
    return gulp.src(config.concat['vendor'].css)
        .pipe(concat({ path: 'vendor.css', cwd: '' }))
        .pipe(cleanCSS())
        .pipe(rev())
        .pipe(gulp.dest(config.css.dest))
        .pipe(rev.manifest('vendor.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/styles")); // write manifest to build dir
});

/* COMMON JS */

gulp.task('concat-common-js-dev', ['clean','copy-index', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-dev', 'concat-vendor-css-dev'], function () {
    return gulp.src(config.concat['common'].scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat({ path: 'common.js', cwd: '' }))
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.js.dest))
        .pipe(rev.manifest('common.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/scripts")); // write manifest to build dir
});



gulp.task('concat-common-js-prod', ['clean','copy-index', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-prod', 'concat-vendor-css-prod'], function () {
    return gulp.src(config.concat['vendor'].scripts)
        .pipe(uglify())
        .pipe(concat({ path: 'common.js', cwd: '' }))
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest))
        .pipe(rev.manifest('common.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/scripts")); // write manifest to build dir
});



/* COMMON CSS */

gulp.task('concat-common-css-dev', ['clean','copy-index', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-dev', 'concat-vendor-css-dev', 'concat-common-js-dev'], function () {
    return gulp.src(config.concat['common'].css)
        .pipe(concat({ path: 'common.css', cwd: '' }))
        .pipe(rev())
        .pipe(gulp.dest(config.css.dest))
        .pipe(rev.manifest('common.json', {merge: true}))
        .pipe( gulp.dest(config.dist.src + '/rev/styles'));
});

gulp.task('concat-common-css-prod', ['clean', 'copy-index','optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-prod', 'concat-vendor-css-prod', 'concat-common-js-prod'], function () {
    return gulp.src(config.concat['assets'].css)
        .pipe(concat({ path: 'common.css', cwd: '' }))
        .pipe(cleanCSS({ keepBreaks: true }))
        .pipe(rev())
        .pipe(gulp.dest(config.css.dest))
        .pipe(rev.manifest('common.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + '/rev/styles')); // write manifest to build dir
});


/* ANGULAR BUNDLE */

gulp.task('concat-angular-bundle-dev', ['clean', 'copy-index', 'optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-dev', 'concat-vendor-css-dev', 'concat-common-js-dev', 'concat-common-css-dev'], function () {
    return gulp.src(config.concat['angular-bundle'].scripts)
        .pipe(concat({ path: 'angular-bundle.js', cwd: '' }))
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest))
        .pipe(rev.manifest('angular.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/scripts")); // write manifest to build dir
});

gulp.task('concat-angular-bundle-prod', ['clean', 'copy-index','optimize-images', 'copy-font-bootstrap', 'copy-font-fontawesome', 'less', 'concat-vendor-js-prod', 'concat-vendor-css-prod', 'concat-common-js-prod', 'concat-common-css-prod'], function () {
    return gulp.src(config.concat['angular-bundle'].scripts)
        .pipe(uglify())
        .pipe(concat({ path: 'angular-bundle.js', cwd: '' }))
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest))
        .pipe(rev.manifest('angular.json', {merge: true}))
        .pipe(gulp.dest(config.dist.src + "/rev/scripts")); // write manifest to build dir
});

