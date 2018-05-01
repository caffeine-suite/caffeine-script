{generateSourceMapParseTest} = require './Helper'

module.exports = suite:
  basics: ->
    generateSourceMapParseTest "simplest", "1"

    generateSourceMapParseTest "two statements", "1;2;"

  stnTypes: ->
    generateSourceMapParseTest "SimpleLiteralStn",      "1"
    generateSourceMapParseTest "StringStn",             ":hi"
    generateSourceMapParseTest "StringStn",             '"#{hi()}"'
    generateSourceMapParseTest "ReferenceStn",          "a"
    generateSourceMapParseTest "AssignmentStn1",        "a = 1"
    generateSourceMapParseTest "AssignmentStn2",        "a += 1"
    generateSourceMapParseTest "AssignmentStn3",        "a ||= 1"
    generateSourceMapParseTest "BinaryOperatorStn",     "a + 1"
    generateSourceMapParseTest "FunctionDefinitionStn", "->"
    generateSourceMapParseTest "DoStn", "do (a) -> a"
    generateSourceMapParseTest "GlobalIdentifierStn",   "global"
    generateSourceMapParseTest "InterpolatedStringStn", '"#{a}"'
    generateSourceMapParseTest "NewInstanceStn",        'new Foo'
    generateSourceMapParseTest "AccessorStn",           'a.b'
    generateSourceMapParseTest "ObjectStn",             'a: 1'
    generateSourceMapParseTest "ObjectStn",             '{} a'
    generateSourceMapParseTest "ObjectStn",             '{} a.b'
    generateSourceMapParseTest "ObjectStn",             '{a} = b'
    generateSourceMapParseTest "ObjectStn",             '{a:c} = b'
    generateSourceMapParseTest "FunctionInvocationStn", 'a b'
    generateSourceMapParseTest "FunctionInvocationStn", 'array b'


  control: ->
    generateSourceMapParseTest "ControlOperatorStn",    "a if b"
    generateSourceMapParseTest "ControlOperatorStn",    "a while b"
    generateSourceMapParseTest "ControlOperatorStn",    "a unless b"
    generateSourceMapParseTest "ControlOperatorStn",    "a until b"
    generateSourceMapParseTest "ControlOperatorStn",    """
      if b
        a
      """

    generateSourceMapParseTest "ControlOperatorStn",    """
      if b
        a
      else
        c
      """

    generateSourceMapParseTest "ControlOperatorStn",    """
      while b
        a
      """

    generateSourceMapParseTest "Try",    """
      try
        foo
      """

    generateSourceMapParseTest "Try Catch",    """
      try
        foo
      catch e
        bar
      """

    generateSourceMapParseTest "Try Catch",    """
      a = try
        foo
      catch e
        bar
      """

  data: ->
    generateSourceMapParseTest "ArrayStn",              "[] 1"
    generateSourceMapParseTest "ArrayStn",              "[] a..."
    generateSourceMapParseTest "ArrayStn",              "[] 1 2"

  destructuring: ->
    generateSourceMapParseTest "ArrayDestructuringStn", "[a] = b"
    generateSourceMapParseTest "ArrayDestructuringStn", "[a = 2] = b"
    generateSourceMapParseTest "ArrayDestructuringStn", "[a, b] = c"
    generateSourceMapParseTest "ObjectDestructuringStn", "{a} = b"
    generateSourceMapParseTest "ObjectDestructuringStn", "{a, b} = c"
    generateSourceMapParseTest "ObjectDestructuringStn", "{a = 2} = c"
    generateSourceMapParseTest "ObjectDestructuringStn", "{a: b} = c"
    generateSourceMapParseTest "ObjectDestructuringStn", "{a: [c, d]} = b"

  functionDefinition: ->
    generateSourceMapParseTest "FunctionDefinitionStn", "-> 1"
    generateSourceMapParseTest "FunctionDefinitionStn", """
      ->
        a = 1
        a
      """

  # generateSourceMapParseTest "every SourceTreeNodeType", """
  #   1
  #   :hi
  #   """
