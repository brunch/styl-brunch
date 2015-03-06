var styl = require('./styl');
var functions = require('rework-plugin-function');
var sysPath = require('path');
var progeny = require('progeny');

function StylPlugin(config) {
  if (!config) config = {};
  this.rootPath = (config.paths || {}).root || '.';
  var plg = config.plugins || {};
  var styl = plg.styl || {};
  this.config = styl;
  if (styl.functions) {
    this.functions = functions(styl.functions);
  }
}

StylPlugin.prototype.brunchPlugin = true;
StylPlugin.prototype.type = 'stylesheet';
StylPlugin.prototype.extension = 'styl';

StylPlugin.prototype.compile = function(data, path, callback) {
  var dir = sysPath.dirname(path);
  var options = {
    whitespace: true,
    path: [dir, this.rootPath],
    functions: this.functions
  };
  try {
    styl(data, options).compile(callback);
  } catch (_error) {
    callback(_error);
  }
};

module.exports = StylPlugin;
