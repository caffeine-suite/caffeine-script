require 'caffeine-mc/register'
require '../index'

require('art-testbench/benchmark')
.init
  defineTests: -> require './perfs'

