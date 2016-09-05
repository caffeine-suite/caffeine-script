require '../index'
{Mocha} = require "art-foundation/dev_tools/test"

Mocha.run ({assert})->
  self.testAssetRoot = "/test/assets"
  require './tests'
