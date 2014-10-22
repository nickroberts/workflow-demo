// Gulpfile.js
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  supervisor = require('gulp-supervisor'),
  del = require('del');

gulp.task('clean:styles', function (cb) {
  return del(['./assets/css'], cb);
});

gulp.task('styles', ['clean:styles'], function () {
  return gulp.src('./assets/src/sass/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('./assets/public/css'));
});

gulp.task('supervisor', function() {
    supervisor('server.js');
});

gulp.task('watch', ['default'], function () {
  gulp.watch('./assets/src/sass/**/*', ['styles']);
});

gulp.task('serve', ['supervisor', 'watch']);

gulp.task('default', ['styles']);

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
