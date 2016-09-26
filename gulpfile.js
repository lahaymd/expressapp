var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');
var rupture = require('rupture');
var axis = require('axis');
var lost = require('lost');
var postcss = require('gulp-postcss');
var poststylus = require('poststylus');
var rucksack = require('rucksack-css');
// var autoprefixer = require('autoprefixer');
var font = require('postcss-font-magician');
var uglify = require('gulp-uglify');
//var stylint = require('gulp-stylelint');
var plumber = require ('gulp-plumber');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var	reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');


/**
 * Compile jade files into HTML
 */
gulp.task('templates', function() {
    return gulp.src('views/**/*.jade')
        .pipe(plumber())
        .pipe(jade())
        // .pipe(gulp.dest('dist/views'))
        .pipe(reload({stream: true}));
});


var stylelintConfig = {
    "rules": {
      "block-no-empty": true,
      "color-no-invalid-hex": true,
      "declaration-colon-space-after": "always",
      "declaration-colon-space-before": "never",
      "function-comma-space-after": "always",
      "function-url-quotes": "double",
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-no-vendor-prefix": true,
      "max-empty-lines": 5,
      "number-leading-zero": "never",
      "number-no-trailing-zeros": true,
      "property-no-vendor-prefix": true,
      "rule-no-duplicate-properties": true,
      "declaration-block-no-single-line": true,
      "rule-trailing-semicolon": "always",
      "selector-list-comma-space-before": "never",
      "selector-list-comma-newline-after": "always",
      "selector-no-id": true,
      "string-quotes": "double",
      "value-no-vendor-prefix": true
    }
  }
/**
 * Important!!
 * Separate task for the reaction to `.jade` files
 */
gulp.task('jade-watch', ['templates'], reload);




var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({

    // nodemon our expressjs server
    script: './bin/www',

    // watch core server file(s) that require server restart on change
    watch: ['app.js']
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reLoad() {
        reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {

  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({

    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',

    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000,

    // open the proxied app in chrome
    browser: ['google chrome']
  });
});

gulp.task('scripts', function() {
  return gulp.src('public/javascripts/*.js')
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(concat('scripts.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/distribution/scripts'))
    .pipe(reload({stream: true}));
})


gulp.task('cu', function() {
  return gulp.src(['public/javascripts/*.js', '!public/javascripts/**/*.min.js'])
    .pipe(plumber())
    
    // .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    
 

    .pipe(reload({stream: true}));
})




gulp.task('styles', function() {
    return  gulp.src('public/stylesheets/style.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [typographic(), nib(), rupture(), axis(),  poststylus([lost(), rucksack(), font()])]

    }))
    
    .pipe(gulp.dest('public/stylesheets'))
    .pipe(reload({stream: true}));
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('**/*.js',   ['scripts', reload]);
  gulp.watch('public/stylesheets/**/*.styl',  ['styles']);
  gulp.watch('views/**/*.jade', ['jade-watch']);
});



gulp.task('imagemin', function() {
    return gulp.src('public/images/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('public/distribution/images'));
});




