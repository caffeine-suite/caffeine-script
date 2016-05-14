module.exports = class CaffeineScript
  @version: "0.0.1"

  @metaCompiledSectionRegExp: /^(?:\s*\n|)###<\s*\n((?:.|\n)*)\n###>\n((?:.|\n)*)/

  @compile: (code, options = {})->
    new CaffeineScript().compiler code, options

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
    Neptune.CaffeineScript.metaCompiler = @
    Neptune.CaffeineScript.compiler = new WrappedCoffeeScript
    .compi
    if [_, metaCode, rest] = code.match CaffeineScript.metaCompiledSectionRegExp
      {compiled:{js}} = Neptune.CaffeineScript.compiler.compile metaCode
      eval js
      Neptune.CaffeineScript.metaCompiler.compile rest, options
    else
      Neptune.CaffeineScript.compiler.compile code, options
