var gulp = require('gulp');

var rncss = require('../index');

var path = '/Users/zhuzhuxia/WebstormProjects/hpk/app/ytmallApp/ytmallApp/';

var sourceArray = [path+'src/*.css',path+'src/**/*.css',path+'src/**/**/*.css'];

gulp.task('css2js', function () {
    gulp.src(sourceArray)
        .pipe(rncss())
        .pipe(gulp.dest(path + 'src'));
});

gulp.task('default', ['css2js'], function () {
    gulp.watch(sourceArray, ['css2js']);
});