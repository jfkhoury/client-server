"use strict";

var gulp = require("gulp");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watchify = require("watchify");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var connect = require("gulp-connect");
var open = require("gulp-open");
var watch = require("gulp-watch");

var URL_TO_RUNNER_HTML = "http://localtest.me:8020";

var SASS_PATH_LIST = [
    "./public/sass/**/*.scss",
    "./lib/**/*.scss"];
var IMAGE_PATH_LIST = ["./lib/ui/**/images/*.{gif,png,svg}"];

gulp.task("browserify", function () {
    function onError(e) {
        console.error(e.message);
    }

    function bundle() {
        return b.bundle()
            .on("error", onError)
            .pipe(source("bundle.js"))
            .pipe(gulp.dest("./public/js"));
    }

    var options = watchify.args;
    options.debug = true;

    var b = watchify(browserify(["./lib/index.js"], options))
        .transform(babelify)
        .on("update", bundle);

    return bundle();
});

gulp.task("styles", function () {
    return gulp.src(SASS_PATH_LIST)
        .pipe(sass({
            errLogToConsole: true,
        }))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task("sassify", function () {
    return gulp.watch(SASS_PATH_LIST, ["styles"]);
});

gulp.task("copyimages", function () {
    return gulp.src(IMAGE_PATH_LIST)
        .pipe(gulp.dest("./public/css/images"));
});

gulp.task("connect", function () {
    return connect.server({
        root: "public",
        port: 8020,
        livereload: true
    });
});

gulp.task("reload", function () {
    return gulp.src("./public/**/*.js")
        .pipe(connect.reload());
});


gulp.task("livereload", ["open"], function () {
    return gulp.watch("./public/js/bundle.js", ["reload"]);
});

gulp.task("open", ["build"], function () {
    return gulp.src("./public/index.html")
        .pipe(open("", { url: URL_TO_RUNNER_HTML }));
});

gulp.task("build", ["browserify", "styles", "sassify", "copyimages"]);

gulp.task("server", ["build", "livereload", "connect", "open"]);

gulp.task("default", ["build"], function () {
    connect.serverClose();
});
