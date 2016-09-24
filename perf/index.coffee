require 'caffeine-mc/register'
require '../index'

{Mocha, Perf} = require "art-foundation/dev_tools/test"
self.benchmark = Perf.benchmark
self.asyncBenchmark = Perf.asyncBenchmark

Mocha.run ({assert})->
  self.testAssetRoot = "/test/assets"
  require './perfs'
