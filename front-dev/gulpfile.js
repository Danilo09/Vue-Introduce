'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');

sass.compiler = require('node-sass');

const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

const {src, dest, series, watch} = require('gulp');

const dirs = {
    baseAssets: '../static/assets',
    js: {
      "src": "./assets/js",
      "dist": "./assets/js/dist"
    },
    css: {
      "src": "./assets/css",
      "dist": "./assets/css"
    },
    scss: {
      "src": "./assets/scss"
    }
  }


const cssminTasks = {

    minCSS: function (cb) {
      return src([`${dirs.scss.src}/main.scss`])
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(dirs.css.dist));
    }
  }

const buildCSS = series(cssminTasks.minCSS);


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    
});

function watchStyles() {
    watch('assets/**/*.scss', buildCSS);
    //watch('assets/img/store/**/*.**', b64);
  }

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

exports.watchStyles = watchStyles;
exports.default = watchStyles;