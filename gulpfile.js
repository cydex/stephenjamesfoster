var gulp = require('gulp');
var plumber = require('gulp-plumber');
var lbInclude = require('gulp-lb-include');

gulp.task('default', function() {
  // place code for your default task here
});

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var lbInclude = require('gulp-lb-include');
 
gulp.task('include', function ()
{
    return gulp.src('./*.html')
        .pipe(plumber())
        .pipe(lbInclude())
        .pipe(gulp.dest('./build/'));
});