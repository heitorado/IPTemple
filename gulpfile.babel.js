/* ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
♥
♥					Gulp main file
♥
♥					@author ovictoraurelio
♥					@github http://github.com/ovictoraurelio
♥
♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ */
'use strict';

import run from 'run-sequence';
import gulp from 'gulp';
import liveServer from 'gulp-live-server';
import babel from 'gulp-babel';

const paths = {
  server: {
    jsFiles: 'routes/**/*.js',    
    eJS: 'views/**/*.ejs'
  },
  dest: 'dist'
};

let server = liveServer('./bin/www',{env: {NODE_ENV: 'development'}});

//Transform back-end ES6 to ES5
//only transform features not supported by node v5
gulp.task('babel', cb => {
  return gulp.src(paths.server.jsFiles)
  .pipe(babel({
    presets: ['es2015-node5']
  }))
  .pipe(gulp.dest(paths.dest));
});
/*
  Server
*/
gulp.task('start', () => {  
  server.start();
});
/*
  Restart
*/
gulp.task('restart', (file) =>{
  server.notify.apply(server, [file]);
});

/*
  Watching for changes
*/
gulp.task('watch', cb => {
    gulp.watch([
      paths.server.jsFiles,
      paths.server.eJS
    ], function(file){
      console.log('\x1b[33m%s\x1b[0m', 'changed file: ' + file.path);
      server.start.bind(server)();
    });
});

/*
  Task thats run the application
*/
gulp.task('default', cb => {
    run('babel', 'start', 'watch', cb);
});