var gulp = require('gulp');

var rncss = require('../index');

gulp.task('css2js', function () {
    gulp.src(['*.css'])
        .pipe(rncss())
        .pipe(gulp.dest('./rnStyle'));

});

gulp.task('default', ['css2js'], function () {
    gulp.watch(['*.css'], ['css2js']);
});