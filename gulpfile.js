/**
 * Created by DanielSilva on 30/06/17.
 */

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var lc = require('child_process');
var jeet = require('jeet');

var message = {
    jekyllBuild: '<span style="color: gray">Executando</span> $ jekyll build'
};

/*
*
* Build do Jekyll
*
**/

gulp.task('jekyll-build', function (done) {
   browserSync.notify(message.jekyllBuild);
   return lc.spawn('bundle', ['exec', 'jekyll build'], {stdio: 'inherit'})
       .on('close', done);
});

/*
*
* Reload das páginas do jekyll com BrowserSync
*
**/

gulp.task('jekyll-reload', ['jekyll-build'], function () {
    browserSync.reload();
});

/*
*
* Start do jekyll com BrowserSync
*
**/
gulp.task('browser-sync', ['jekyll-build'], function () {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});


/*
*
* Configuração do Stylus com Gulp
*
**/
gulp.task('stylus', function () {
   gulp.src('src/styl/main.styl')
       .pipe(plumber())
       .pipe(stylus({
           use:[jeet()],
           compress:true
       }))
       .pipe(gulp.dest('_site/assets/css'))
       .pipe(browserSync.reload({stream:true}))
       .pipe(gulp.dest('assets/css'));
});

/*
*
* Monitoramento do Gulp
*
**/

gulp.task('watch', function () {
   gulp.watch('src/styl/**/*.styl', ['stylus']);
   gulp.watch(['**/*.html', 'index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-reload']);
});

/*
*
* tarefa default do Gulp
*
**/
gulp.task('default', ['stylus', 'browser-sync', 'watch']);