const gulp = require('gulp'),
    args = require('yargs').argv,
    path = require('path'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*', 'autoprefixer', 'path']
    });

const basePaths = {
};

const paths = {
    sass: {
        src: [`./**/*.scss`,`!./node_modules/**/*.scss`],
        dest: `.`,
        watch: [`./**/*.scss`,`!./node_modules/**/*.scss`],
        lintFiles: [`./**/*.scss`,`!./node_modules/**/*.scss`],
        autoprefixerBrowsers: [`last 3 version`]
    }
};

gulp.task('sass', () => {
    return gulp.src(paths.sass.src)
        .pipe($.sass({
            outputStyle: 'expanded',
            precision: 9
        }).on('error', $.sass.logError))
        .pipe($.postcss([
            $.autoprefixer({
                browsers: paths.sass.autoprefixerBrowsers
            }),
        ]))
        .pipe(gulp.dest(paths.sass.dest))
});

gulp.task('watch', () => {
  gulp.watch(paths.sass.watch, ['sass', 'sasslint']);
});

gulp.task('sasslint', () => {
    return gulp.src(paths.sass.lintFiles)
        .pipe($.stylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true
                }
            ]
        }));
});

gulp.task('default', ['sass']);
