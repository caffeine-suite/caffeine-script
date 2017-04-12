require 'caffeine-mc/register'
require '../index.coffee'
require "art-testbench/testing"
.init
  synchronous: true
  defineTests: -> require './tests'
