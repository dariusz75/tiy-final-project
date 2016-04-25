var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpBrowser = require("gulp-browser");
var gulpReact = require('gulp-react');


gulp.task('default', function() {
	gulp.watch('./css/styles.scss', ['convertSASStoCSS']);
	gulp.watch('./src/*.js', ['createMainJSfile']);
	gulp.watch('./src/*.jsx', ['convertJSXtoJS']);
	});

gulp.task('createMainJSfile',function() {
        return gulp.src('./src/*.js')
            .pipe(gulpBrowser.browserify())
            .pipe(gulp.dest("./"));
    });

gulp.task('convertSASStoCSS', function () {
  return gulp.src('./css/styles.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('convertJSXtoJS', function () {
	return gulp.src('./src/*.jsx')
		.pipe(gulpReact())
		.pipe(gulp.dest('./src'));
}); 


	
