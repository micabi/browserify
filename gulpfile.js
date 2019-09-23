var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function(){
  return browserify('./js/main.js', { debug: true })
  .transform(babelify, {presets: ["@babel/preset-env"]})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./js'));
});

gulp.task('watch', function(){
  return gulp.watch('./js/main.js', gulp.parallel('build'));
});