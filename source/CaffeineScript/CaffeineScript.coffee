Parser = require './Parser'
module.exports =
  compile: (source, options) ->
    compiled: js: Parser.parse(source, options).getStn().transform().toJsModule()
