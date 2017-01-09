log = (args...) -> console.log args...

global.logPrettyError = (error) ->
  console.log "#{error.stack.split("\n").slice(0, 10).join '\n'})"

require 'caffeine-mc/register'
require '../'

require "art-foundation/testing"
.init
  synchronous: true
  defineTests: -> require './tests'
