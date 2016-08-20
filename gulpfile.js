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
var autoprefixer = require('autoprefixer');
var font = require('postcss-font-magician');
var uglify = require('gulp-uglify');
var stylint = require('gulp-stylelint');
var plumber = require ('gulp-plumber');
browserSync = require('browser-sync');
	reload = browserSync.reload;
  //test

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

gulp.task('styles', function() {
	

return	gulp.src('public/stylesheets/style.styl')
		.pipe(plumber())
		.pipe(stylus({
			use: [typographic(), nib(), rupture(), axis(),  poststylus([lost(), rucksack(), autoprefixer(), font()])]

		}))
		
		.pipe(gulp.dest('public/stylesheets'))
		.pipe(reload({stream: true}));
});


gulp.task('lint', function () {
    return gulp.src('public/stylesheets/style.styl')
        .pipe(stylint(stylelintConfig))
        .pipe(stylint.reporter());
});



gulp.task('watch:styles', function(){
	gulp.watch('**/*.styl', ['styles']);
})

gulp.task('scripts', function() {
	gulp.src('public/javascripts/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('public/javascripts/uglify'))
		.pipe(reload({stream: true}));
})

gulp.task('watch', function() {
	gulp.watch('**/*.styl', ['styles']);
	gulp.watch('public/javascripts/*.js', ['scripts'])
})



gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost:3000'
    });
});


gulp.task('default', ['scripts', 'styles',  'watch', 'browser-sync'])































