Foundation = require "art-foundation"
WrappedCoffeeScript = require './wrapped_coffee_script'

{log} = Foundation

module.exports = class CaffeineScript
  @version: "0.0.1"

  @metaCompiledSectionRegExp: /^(?:\s*\n|)###<\s*\n((?:.|\n)*)\n###>(?:\n((?:.|\n)*)|$)/

  @compile: (code, options = {})->
    new CaffeineScript().compile code, options

  constructor: ->
    Neptune.CaffeineScript.metaCompiler = @
    Neptune.CaffeineScript.compiler = new WrappedCoffeeScript

  ###
  IN:
    code: string
    options:
      sourceMap: t/f
      inlineMap: t/f
      filename:

  OUT: (an object)
    compiled: extension => output map
      extension: string, ex: "js"
      output: string, ex: "alert();"

      If writing to files, we might do:
      for extension, output of compiled
        write originalFileNameWith(extension), output
  ###
  compile: (code, options = {})->
    # log "CaffeineScript.compile", code: code, options: options

    if match = code.match CaffeineScript.metaCompiledSectionRegExp
      [_, metaCode, rest] = match
      {compiled:{js}} = Neptune.CaffeineScript.compiler.compile metaCode
      eval js
      rest && Neptune.CaffeineScript.metaCompiler.compile rest, options
    else
      Neptune.CaffeineScript.compiler.compile code, options
