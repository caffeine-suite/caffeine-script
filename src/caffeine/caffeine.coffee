Foundation = require "art-foundation"
Compilers = require './compilers'

{log, isString} = Foundation

module.exports = class Caffeine
  @version: "0.0.1"

  @oneLineMetaCompiledSectionRegExp:   /^(?:\s*\n|)###<>([^\n]*)(?:\n((?:.|\n)*)|$)/
  @multiLineMetaCompiledSectionRegExp: /^(?:\s*\n|)###<\s*\n((?:.|\n)*)\n###>(?:\n((?:.|\n)*)|$)/

  @compile: (code, options = {})->
    new Caffeine().compile code, options

  ###
  IN:
    string: configure to use one of the CaffeineCompiler classes
    object:
      compiler: custom compiler instance. Must implement:
        compile: (sourceCode, options) ->
          IN:
            sourceCode: string
            options: {}
          ERROR: throw errors
          OUT:
            compiled: object
              # Consists of one or more output "files" specified as pairs:
              #   extension: outputString
  ###
  @configure: (arg) ->
    if isString arg
      @compiler = new Compilers[arg]
    else
      {@compiler} = arg

  constructor: ->
    Neptune.Caffeine.metaCompiler = @
    Neptune.Caffeine.compiler = new Compilers.CoffeeScript

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
    # log "Caffeine.compile", code: code, options: options

    if match = code.match(Caffeine.multiLineMetaCompiledSectionRegExp) || code.match(Caffeine.oneLineMetaCompiledSectionRegExp)
      [_, metaCode, rest] = match
      {compiled:{js}} = Neptune.Caffeine.compiler.compile metaCode
      eval js
      rest && Neptune.Caffeine.metaCompiler.compile rest, options
    else
      Neptune.Caffeine.compiler.compile code, options
