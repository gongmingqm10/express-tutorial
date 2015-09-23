var gulp = require('gulp');
var less = require('gulp-less');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');

gulp.task('assets:coffee', function () {
    gulp.src('app/assets/javascripts/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('public/javascripts'))
});

gulp.task('assets:less', function () {
    gulp.src('app/assets/stylesheets/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('assets:images', function () {
    gulp.src('app/assets/images/*')
        .pipe(gulp.dest('public/images'))
});

gulp.task('assets', ['assets:images', 'assets:less', 'assets:coffee']);

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('app/assets/images/*', ['assets:images']);
    gulp.watch('app/assets/stylesheets/*.less', ['assets:less']);
    gulp.watch('app/assets/javascripts/*.coffee', ['assets:coffee']);
});