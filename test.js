var expect = require('chai').expect;
var Plugin = require('./');

describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });


  describe('#compile', function() {
    it('should has #compile method', function() {
      expect(plugin.compile).to.be.an.instanceof(Function);
    });

    it('should compile and produce valid result', function(done) {
      var content = 'body\n  transition: height';
      var expected = 'body {\n  transition: height;\n}';

      plugin.compile(content, 'a.styl', function(error, data) {
        expect(error).to.equal();
        expect(data).to.equal(expected)
        done();
      });
    });
  });
});
