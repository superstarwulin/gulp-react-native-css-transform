# gulp-react-native-css-transform

[![npm](https://img.shields.io/npm/v/gulp-react-native-css-transform.svg?style=flat-square)](https://www.npmjs.com/package/gulp-react-native-css-transform)
[![npm](https://img.shields.io/npm/dt/gulp-react-native-css-transform.svg?style=flat-square)](https://www.npmjs.com/package/gulp-react-native-css-transform)

see: [https://github.com/AngusFu/react-native-css-transform](https://github.com/AngusFu/react-native-css-transform)


```bash

$ npm install gulp-react-native-css-transform

```


```javascript

gulp.task('css2js', function () {
    gulp.src(['*.css'])
        .pipe(rncss())
        .pipe(gulp.dest('./rnStyle'));

});

```