log = (args...) -> console.log args...
PrettyError = require('pretty-error');
# try
if true
  {Mocha} = require "art-foundation/dev_tools/test"
  require 'caffeine-mc/register'
  require '../index'

  Mocha.run ({assert})->
    self.testAssetRoot = "/test/assets"
    require './tests'
# catch error
#   pe = new PrettyError
#   pe.skip (traceLine, lineNumber) ->
#     lineNumber > 4 || !traceLine.path.match "babel-bridge"

#   # TODO - search up Path to find the package.json dir, then only keep from there down
#   # looks like this source will get me most the way there: https://github.com/3rd-Eden/find-package-json/blob/master/index.js
#   # until then, this will do:
#   pe.filter (traceLine, lineNumber) ->
#     [__, __, rest] = traceLine.shortenedAddr.split /(npm|node_modules)\//
#     traceLine.shortenedAddr = rest if rest

#   # colors: https://github.com/AriaMinaei/RenderKid
#   pe.appendStyle
#     'pretty-error > header > title > kind':   background: 'none', color: "bright-red"
#     'pretty-error > header > message':        color: "red"
#     'pretty-error > trace > item > header > what': color: 'grey'
#     'pretty-error > trace > item > footer > addr': color: 'white'

#   console.log pe.render error
#   console.log "total error stack lines: #{error.stack.split("\n").length}"
