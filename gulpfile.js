const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const sourceMaps = require('gulp-sourcemaps');

function compileSass(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps')).pipe(gulp.dest('./build/styles'));
}

function compressJS(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function compressImg(){
    return gulp.src('./src/images/*').pipe(imagemin()).pipe(gulp.dest('./build/images'))
}


exports.default = function(){
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false}, compileSass);
    gulp.watch('./src/images/*', { ignoreInitial: false}, compressImg);
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false}, compressJS);
};

