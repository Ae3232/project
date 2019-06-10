var gulp      = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){ 
    return gulp.src('src/styles/main.scss') 
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src(['src/js/common.js'])
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('src/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
    gulp.watch('src/*.scss', gulp.parallel('sass'));
    gulp.watch('src/*.html', gulp.parallel('code'));
});

gulp.task('dev', gulp.parallel('sass', 'browser-sync', 'watch'));
