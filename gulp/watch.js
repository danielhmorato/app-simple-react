var gulp = require('gulp');

gulp.task('watch', function(){
    gulp.watch(['./src/**/*.js'], ['webpack']);
    gulp.watch(['./src/**/*.scss'], ['webpack']);
});