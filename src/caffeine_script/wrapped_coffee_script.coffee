Foundation = require 'art-foundation'
CoffeeScript = require 'coffee-script'
{isString} = Foundation

module.exports = class WrappedCoffeeScript

  compile: (code, options) ->
    out = CoffeeScript.compile code, options
    if isString out
      compiled: js: out
    else
      compiled: out
