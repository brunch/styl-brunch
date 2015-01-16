var styl = require('./styl');
var sysPath = require('path');

function StylPlugin(config) {
  // this.path = config.paths.app;
}

StylPlugin.prototype.brunchPlugin = true;
StylPlugin.prototype.type = true;
StylPlugin.prototype.extension = 'styl';

StylPlugin.prototype.compile = function(data, path, callback) {
  var dir = sysPath.dirname(path);
  var result, error;
  try {
    result = styl(data, {whitespace: true, path: dir}).toString();
  } catch (_error) {
    error = _error;
  } finally {
    callback(error, result);
  }
};

module.exports = StylPlugin;
