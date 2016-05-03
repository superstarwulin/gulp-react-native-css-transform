var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

var PLUGIN_NAME = require('./pluginname');

var transform = require('./transform.js')

module.exports = function() {
    return through.obj(function(file, enc, cb) {
        if (file.isStream()) {
            this.emit(
                'error', new PluginError(PLUGIN_NAME, 'Streaming not supported')
            );
        } else if (file.isNull()) {
            this.push(file);
            return cb();
        }

        var data = transform(file.contents.toString());

        file.path = gutil.replaceExtension(file.path, '.js');
        file.contents = new Buffer(data);

        this.push(file);
        cb();
    });
};
