log = (args...) -> console.log args...
PrettyError = require('pretty-error');

pe = new PrettyError
pe.skip (traceLine, lineNumber) ->
  lineNumber > 6

# TODO - search up Path to find the package.json dir, then only keep from there down
# looks like this source will get me most the way there: https://github.com/3rd-Eden/find-package-json/blob/master/index.js
# until then, this will do:
pe.filter (traceLine, lineNumber) ->
  [__, __, rest] = traceLine.shortenedAddr.split /(npm|node_modules)\//
  if what = traceLine.what?.split "."
    if what.length > 2
      traceLine.what = what = (what.slice what.length - 2).join '.'
      log traceLine:what

  traceLine.shortenedAddr = rest if rest

# colors: https://github.com/AriaMinaei/RenderKid
pe.appendStyle
  'pretty-error':
    display: 'block'
    marginLeft: 0

  'pretty-error > header':
    display: 'block'

  'pretty-error > header > title > kind':
    background: 'red'
    color: 'grey'

  'pretty-error > header > title > wrapper':
    marginRight: '1'
    color: 'grey'

  'pretty-error > header > colon':
    color: 'grey'
    marginRight: 1

  'pretty-error > trace':
    display: 'block'
    marginTop: 1

  'pretty-error > trace > item':
    display: 'block'
    marginBottom: 1
    marginLeft: 2
    bullet: ''#'"<grey>-</grey>"'

  'pretty-error > trace > item > header':
    display: 'block'

  'pretty-error > trace > item > header > pointer > file':
    color: 'black'
    display: 'none'

  'pretty-error > trace > item > header > pointer > colon':
    color: 'grey'
    marginRight: 1
    display: 'none'

  'pretty-error > trace > item > header > pointer > line':
    color: 'black'
    marginRight: 1
    display: 'none'

  'pretty-error > trace > item > header > what':
    color: 'black'

  'pretty-error > trace > item > footer':
    display: 'block'
    marginLeft: 2

  'pretty-error > trace > item > footer > addr':
    display: 'block'
    color: 'grey'

  'pretty-error > trace > item > footer > extra':
    display: 'block'
    color: 'grey'

  'pretty-error > header > title > kind':   background: 'none', color: "red"
  'pretty-error > header > message':        color: "red"
  # 'pretty-error > trace > item > header > what': color: 'blue'
  # 'pretty-error > trace > item > footer > addr': color: 'grey'
  # 'pretty-error > trace > item > header > pointer > file': color: "black"

global.logPrettyError = (error) ->
  console.log pe.render error
  console.log "  (total error stack lines: #{error.stack.split("\n").length})\n"

try
# if true
  {Mocha} = require "art-foundation/dev_tools/test"
  require 'caffeine-mc/register'
  require '../index'

  Mocha.run ({assert})->
    self.testAssetRoot = "/test/assets"
    require './tests'
catch error
  logPrettyError error
