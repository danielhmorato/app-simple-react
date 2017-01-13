var gulp = require('gulp');

gulp.task('watch', function(){
    gulp.watch([
        './src/**/*.js',
        './src/**/*.js',
        './src/**/*.scss'
    ], ['webpack']);
});