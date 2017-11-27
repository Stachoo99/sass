var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require('gulp');
cssbeautify = require('gulp-cssbeautify');


gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(cssbeautify())
        .pipe(gulp.dest('app/css'));
});
gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('hello', function () {
    console.log('Hello Adam');
});
