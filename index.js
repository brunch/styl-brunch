var styl = require('./styl');
var sysPath = require('path');

function StylPlugin(config) {
  this.rootPath = config.paths.root;
}

StylPlugin.prototype.brunchPlugin = true;
StylPlugin.prototype.type = true;
StylPlugin.prototype.extension = 'styl';

StylPlugin.prototype.compile = function(data, path, callback) {
  var dir = sysPath.dirname(path);
  var options = {whitespace: true, path: [dir, this.rootPath]};
  var result, error;
  try {
    result = styl(data, options).toString();
  } catch (_error) {
    error = _error;
  } finally {
    callback(error, result);
  }
};

module.exports = StylPlugin;
