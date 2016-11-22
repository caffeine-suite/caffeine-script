log = (args...) -> console.log args...

global.logPrettyError = (error) ->
  console.log "#{error.stack.split("\n").slice(0, 10).join '\n'})"

try
# if true
  {Mocha} = require "art-foundation/dev_tools/test"
  require 'caffeine-mc/register'
  require '../'

  Mocha.run ({assert})->
    self.testAssetRoot = "/test/assets"
    require './tests'
catch error
  logPrettyError error
