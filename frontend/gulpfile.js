var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpBrowser = require('gulp-browser');
var gulpBabel = require('gulp-babel');
var vinylSourceStream = require('vinyl-source-stream');
var htmlmin = require('gulp-htmlmin');
var browserify = require('browserify');


gulp.task('default', ['convertJSXtoJS', 'browserify', 'convertSASStoCSS', 'minifyHTML', 'watch']);

gulp.task('convertJSXtoJS', function () {
    gulp.src('./source/js/components/*.jsx')
        .pipe(gulpBabel({
            presets: ['react']
        }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('browserify', function () {
  return browserify('./build/js/app.js')
        .bundle()
        .pipe(vinylSourceStream('main.js'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('convertSASStoCSS', function () {
  return gulp.src('./source/sass/styles.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('minifyHTML', function() {
  return gulp.src('./source/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
    gulp.watch('./source/js/components/*.jsx', ['convertJSXtoJS', 'browserify']);
    gulp.watch('./source/index.html', ['minifyHTML']);
    gulp.watch('./source/sass/styles.scss', ['convertSASStoCSS']);
    });





