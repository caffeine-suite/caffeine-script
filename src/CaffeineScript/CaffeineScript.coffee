Parser = require './Parser'
module.exports =
  compile: (source) ->
    compiled: js: (new Parser).parse(source).toJs()
