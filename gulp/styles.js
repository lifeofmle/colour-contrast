var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

// Preprocess SCSS into CSS
gulp.task('sass', function() {
    gulp
	    .src('./assets/scss/**/*.scss')
	    .pipe(sass())
	    .pipe(concat('main.css'))
	    .pipe(gulp.dest('./assets/css'));
});