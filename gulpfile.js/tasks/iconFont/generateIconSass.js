var gulp = require('gulp')
var rename = require('gulp-rename')
var handleErrors = require('../../lib/handleErrors')
var gutil = require('gulp-util')

module.exports = function (config) {
    return function (glyphs, options) {
        gutil.log(gutil.colors.blue('Generating ' + config.sassDest + '/' + config.sassOutputName))
        return gulp.src(config.template)
            .pipe(render({
                icons: glyphs.map(function (glyph) {
                    gutil.log(gutil.colors.green('+ adding ' + glyph.name + ' glyph'))
                    return {
                        name: glyph.name,
                        code: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
                    }
                }),

                fontName: config.options.fontName,
                fontPath: config.fontPath,
                className: config.className,
                comment: '// DO NOT EDIT DIRECTLY!\n  //Generated by gulpfile.js/tasks/iconFont.js\n  //from ' + config.template
            }))
            .on('error', handleErrors)
            .pipe(rename(config.sassOutputName))
            .pipe(gulp.dest(config.sassDest))
    }
}
