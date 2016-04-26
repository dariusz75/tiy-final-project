var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpBrowser = require('gulp-browser');
var gulpBabel = require('gulp-babel');



gulp.task('default', function () {
	gulp.watch('./source/js/*.jsx', ['convertJSXtoJS', 'createMainJSfile']);
	//gulp.watch('./build/js/*.js', ['createMainJSfile']);
    gulp.watch('./source/sass/styles.scss', ['convertSASStoCSS']);
	});

gulp.task('convertJSXtoJS', function () {
    gulp.src('./source/js/*.js')
        .pipe(gulpBabel({
            presets: ['react']
        }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('createMainJSfile',function () {
        return gulp.src('./source/js/app.js')
            .pipe(gulpBrowser.browserify())
            .pipe(gulp.dest('./build/js'));
    });

gulp.task('convertSASStoCSS', function () {
  return gulp.src('./source/sass/styles.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./build/css'));
});





