{generateSourceMapParseTest} = require './Helper'

module.exports = suite:
  basics: ->
    generateSourceMapParseTest "simplest", "1"

    generateSourceMapParseTest "two statements", "1;2;"

  stnTypes: ->
    generateSourceMapParseTest "SimpleLiteralStn",  "1"
    generateSourceMapParseTest "StringStn",         ":hi"
    generateSourceMapParseTest "ReferenceStn",      "a"
    generateSourceMapParseTest "AssignmentStn1",    "a = 1"
    generateSourceMapParseTest "AssignmentStn2",    "a += 1"
    generateSourceMapParseTest "AssignmentStn3",    "a ||= 1"
    generateSourceMapParseTest "BinaryOperatorStn", "a + 1"
    generateSourceMapParseTest "BinaryOperatorStn", "->"

  # generateSourceMapParseTest "every SourceTreeNodeType", """
  #   1
  #   :hi
  #   """