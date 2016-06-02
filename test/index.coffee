{Mocha} = require "art-standard-lib/dev_tools/test"

Mocha.run ({assert})->
  self.testAssetRoot = "/test/assets"
  require './tests'
