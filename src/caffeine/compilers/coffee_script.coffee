Foundation = require 'art-foundation'
CoffeeScript = require 'coffee-script'
{isString} = Foundation

module.exports = class CoffeeScriptWrapper

  compile: (sourceCode, options) ->
    out = CoffeeScript.compile sourceCode, options
    if isString out
      compiled: js: out
    else
      compiled: out
