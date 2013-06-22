styl = require 'styl'

module.exports = class StylPlugin
  brunchPlugin: true

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    result = error = null
    try
      result = styl(data, whitespace: true).toString()
    catch err
      error = err
    finally
      callback error, result
