{generateSourceMapParseTest} = require './Helper'

module.exports = suite:
  basics: ->
    generateSourceMapParseTest "simplest", "1"

    generateSourceMapParseTest "two statements", "1;2;"

  stnTypes: ->
    generateSourceMapParseTest "SimpleLiteralStn",  "1"
    generateSourceMapParseTest "StringStn",         ":hi"
    generateSourceMapParseTest "ReferenceStn",      "a"
    generateSourceMapParseTest "AssignmentStn",      "a=1"

  # generateSourceMapParseTest "every SourceTreeNodeType", """
  #   1
  #   :hi
  #   """
