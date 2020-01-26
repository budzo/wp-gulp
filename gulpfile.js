var gulp = require('gulp'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat');
    browserSync = require('browser-sync');

var jsSources = ['scripts/*.js'],
    sassSources = ['scss/*.scss'];

var prefixerOptions = {
  browsers: ['last 2 versions']
};

gulp.task('sass', function() {
  gulp.src(sassSources)
  .pipe(sass({outputStyle: 'compressed'}))
    .on('error', gutil.log)
  .pipe(prefix(prefixerOptions))
  .pipe(gulp.dest('./'))
});

gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('scripts.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('js'))
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
});

gulp.task('browser-sync', function() {
    browserSync.init(['style.css', '*.php', 'js/scripts.min.js'], {
        proxy: 'localhost:8888/wordpress'
    });
});

gulp.task('default', ['js', 'sass', 'browser-sync', 'watch']);
