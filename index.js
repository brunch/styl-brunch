var styl = require('styl');

function StylPlugin(config) {}

StylPlugin.prototype.brunchPlugin = true;

StylPlugin.prototype.compile = function(data, path, callback) {
  var result, error;
  try {
    result = styl(data, {whitespace: true}).toString();
  } catch (_error) {
    error = _error;
  } finally {
    callback(error, result);
  }
};

module.exports = StylPlugin;
