var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var styleWatch = './css/style.css';
var jsWatch = './script/script.js';
var reload = browserSync.reload;
//Css 


// Static server
gulp.task('serve',function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(styleWatch).on("change", reload);
    gulp.watch(jsWatch).on("change", reload);
    gulp.watch("*.html").on("change", reload);
});

