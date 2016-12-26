var gulp = require('gulp'),
	sass = require('gulp-sass');

var srcFile = './daterangepicker.scss';

gulp.task('sass', function(){
	return gulp.src(srcFile)
		.pipe(sass())
		.pipe(gulp.dest('./'))
});

gulp.task('default', function(){
	gulp.watch(srcFile, ['sass'])
});