const gulp = require('gulp');
const pug = require('gulp-pug');
const gulpSass = require('gulp-sass')(require('sass'));
const CleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const replace = require('gulp-replace');
const cheerio = require('gulp-cheerio');

const browserSync = require('browser-sync').create();

function images() {
    return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
}

function clean() {
    return del('dist')
}

function puggy() {
    return gulp.src('src/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
}

function scss() {
    return gulp.src('src/sass/style.scss')
    .pipe(gulpSass())
    .pipe(CleanCSS())
    .pipe(gulp.dest('dist/style/'))
    .pipe(browserSync.stream())
}

function script() {
    return gulp.src('src/js/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
}

function svgSpriteBuild () {
    return gulp.src('src/images/**/*.svg')
	.pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
    .pipe(cheerio({
        run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
        mode: {
            symbol: {
                sprite: "../sprite.svg",
                render: {
                    scss: {
                        dest:'/dist/images',
                        template:"src/sass/style.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest('dist/images'));
};


function watch() {
    browserSync.init({
        server: { baseDir: 'dist' },
		notify: true,
		online: true
    });
    
    gulp.watch("./src/images/**/*.svg", svgSpriteBuild)
    gulp.watch("./src/sass/**/*.scss", scss)
    gulp.watch("./src/**/*.pug", puggy)
    gulp.watch("./src/images/**/*", images)
    gulp.watch("dist/*.html").on('change', browserSync.reload)
}



exports.default = gulp.series(clean, puggy, scss, script, images, svgSpriteBuild, watch)