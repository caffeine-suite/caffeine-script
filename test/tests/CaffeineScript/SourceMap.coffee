{generateSourceMapParseTest} = require './Helper'

module.exports = suite:
  basics: ->
    generateSourceMapParseTest "simplest", "1"

    generateSourceMapParseTest "two statements", "1;2;"

  modules: ->
    generateSourceMapParseTest "SimpleLiteralStn",      "1", compileModule: true
    generateSourceMapParseTest "ImportStn",
      """
      import &ArtStandardLib
      foo
      """
      compileModule: true

  stnTypes: ->
    generateSourceMapParseTest "SimpleLiteralStn",      "1"
    generateSourceMapParseTest "StringStn",             ":hi"
    generateSourceMapParseTest "StringStn",             '"#{hi()}"'
    generateSourceMapParseTest "ReferenceStn",          "a"
    generateSourceMapParseTest "ReferenceStn",          "!a"
    generateSourceMapParseTest "ReferenceStn",          "a + b"
    generateSourceMapParseTest "AssignmentStn1",        "a = 1"
    generateSourceMapParseTest "AssignmentStn2",        "a += 1"
    generateSourceMapParseTest "AssignmentStn3",        "a ||= 1"
    generateSourceMapParseTest "BinaryOperatorStn",     "a + 1"
    generateSourceMapParseTest "FunctionDefinitionStn", "->"
    generateSourceMapParseTest "RegExpStn", "/foo/"
    generateSourceMapParseTest "RegExpStn", "/foo/i"
    generateSourceMapParseTest "RegExpStn", '/// foo #{bar}'
    generateSourceMapParseTest "RegExpStn", '///i foo #{bar}'
    generateSourceMapParseTest "DoStn", "do (a) -> a"
    generateSourceMapParseTest "RequireStn", "&ArtStandardLib"
    generateSourceMapParseTest "GlobalIdentifierStn",   "undefined"
    generateSourceMapParseTest "GlobalIdentifierStn",   "null"
    generateSourceMapParseTest "GlobalIdentifierStn",   "true"
    generateSourceMapParseTest "GlobalIdentifierStn",   "global"
    generateSourceMapParseTest "ThisStn",               "this"
    generateSourceMapParseTest "ThisStn",               "@"
    generateSourceMapParseTest "ThisStn",               "@foo"
    generateSourceMapParseTest "InterpolatedStringStn", '"#{a}"'
    generateSourceMapParseTest "NewInstanceStn",        'new Foo'
    generateSourceMapParseTest "AccessorStn",           'a.b'
    generateSourceMapParseTest "ThrowStn",             'throw new Error "foo"'
    generateSourceMapParseTest "ThrowStn",             'a && throw new Error "foo"'
    generateSourceMapParseTest "ObjectStn",             'a: 1'
    generateSourceMapParseTest "ObjectStn",             '{} a'
    generateSourceMapParseTest "ObjectStn",             '{} a.b'
    generateSourceMapParseTest "ObjectStn",             '{a} = b'
    generateSourceMapParseTest "ObjectStn",             '{a:c} = b'
    generateSourceMapParseTest "FunctionInvocationStn", 'a b'
    generateSourceMapParseTest "ComprehensionStn", 'array b'
    generateSourceMapParseTest "ComprehensionStn", 'find a in b when a'
    generateSourceMapParseTest "ComprehensionStn", 'array b from c'
    generateSourceMapParseTest "ComprehensionStn", 'array b from c when b'
    generateSourceMapParseTest "ComprehensionStn", 'array b from c with 1'
    generateSourceMapParseTest "ComprehensionStn", """
      find a
        b
        c
      """

    generateSourceMapParseTest "SwitchStn", """
      switch a
      when b then c
      else d
      """

    generateSourceMapParseTest "SwitchStn", """
      foo = switch a
      when b then c
      else d
      """

  classes: ->
    generateSourceMapParseTest "ClassStn", "class Foo"
    generateSourceMapParseTest "ClassStn", "class Foo extends Bar"
    generateSourceMapParseTest "ClassStn", """
      class Foo extends Baz

        constructor: ->
          @wow = true
      """

    generateSourceMapParseTest "ClassStn", """
      class Foo extends BaseClass
        @getter
          foo: -> @_foo
      """


  control: ->
    generateSourceMapParseTest "ControlOperatorStn",
      """
      a = if b
        c
        d
      """

    generateSourceMapParseTest "ControlOperatorStn",
      """
      a = whilte b
        c
      """

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
