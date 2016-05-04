var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpBrowser = require('gulp-browser');
var gulpBabel = require('gulp-babel');
var vinylSourceStream = require('vinyl-source-stream');
var htmlmin = require('gulp-htmlmin');
var browserify = require('browserify');


gulp.task('default', ['convertJSXtoJS', 'convertSASStoCSS', 'minifyHTML', 'watch']);


gulp.task('convertJSXtoJS', function () {
  return browserify('./source/js/app.jsx')
        .transform('babelify', { presets: ['react'] })
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
    gulp.watch('./source/js/components/*.jsx', ['convertJSXtoJS']);
    gulp.watch('./source/index.html', ['minifyHTML']);
    gulp.watch('./source/sass/styles.scss', ['convertSASStoCSS']);
    });





