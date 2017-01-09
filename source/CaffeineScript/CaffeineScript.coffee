Parser = require './Parser'
module.exports =
  compile: (source) ->
    compiled: js: Parser.parse(source).getStn().transform().toJsModule()
