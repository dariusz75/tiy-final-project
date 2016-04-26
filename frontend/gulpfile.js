var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpBrowser = require('gulp-browser');
var gulpBabel = require('gulp-babel');
var vinylSourceStream = require('vinyl-source-stream');
var browserify = require('browserify');


gulp.task('default', ['convertJSXtoJS', 'browserify', 'convertSASStoCSS', 'watch']);

gulp.task('convertJSXtoJS', function () {
    gulp.src('./source/js/*.jsx')
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

gulp.task('watch', function () {
    gulp.watch('./source/js/*.jsx', ['convertJSXtoJS', 'browserify']);
    //gulp.watch('./build/js/*.js', ['createMainJSfile']);
    gulp.watch('./source/sass/styles.scss', ['convertSASStoCSS']);
    });





