require './index'
{Parser} = Neptune.CaffeineScript

module.exports = compile: (source) ->
  compiled: js: (new Parser).parse(source).toJs()
