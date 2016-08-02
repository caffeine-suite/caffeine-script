Foundation = require "art-foundation"
Compilers = require './compilers'

{log, isString, BaseObject} = Foundation

evalInContext = (js, context) ->
  # Return the results of the in-line anonymous function we .call with the passed context
  (-> eval js).call context

module.exports = class Caffeine extends BaseObject
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
  # @configure: (arg) ->
  #   if isString arg
  #     @compiler = new Compilers[arg]
  #   else
  #     {@compiler} = arg

  @getter "compiler metaCompiler"
  @setter "metaCompiler",
    compiler: (arg) ->
      @_compiler = if isString arg
        new Compilers[arg]
      else
        arg

  constructor: ->
    super
    @_metaCompiler = @
    @_compiler = new Compilers.CoffeeScript

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
      {compiled:{js}} = @compiler.compile metaCode
      evalInContext js, @
      rest && @metaCompiler.compile rest, options
    else
      @compiler.compile code, options
