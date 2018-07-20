{object, max, min, log} = require 'art-standard-lib'
{generateSourceMapParseTest} = require './Helper'
{CaffeineScript} = Neptune
{SourceMapConsumer} = require 'caffeine-source-map'
{presentSourceLocation, SourceLineColumnMap} = require 'caffeine-eight'
SourceMapNpm = require 'source-map'

testSourceMappingUsingExternalNpm = (rawSourceMap, testMappings) ->
  if global.WebAssembly
    SourceMapNpm.SourceMapConsumer.with rawSourceMap, null, (consumer) =>

      log
        rawSourceMap: rawSourceMap
        sources: consumer.sources

      consumer.eachMapping (m) ->
        log mapping: m

      object testMappings, ({sourceLine, sourceColumn, generatedLine, generatedColumn}) ->
        log test: {sourceLine, sourceColumn, generatedLine, generatedColumn}

        log mapped: consumer.originalPositionFor log
          line:   generatedLine + 1
          column: generatedColumn
          # // { source: 'http://example.com/www/js/two.js',
          # //   line: 2,
          # //   column: 10,
          # //   name: 'n' }

module.exports = suite:
  validate: ->
    test "simplest", ->

      source = "foo = bar\nbaz"
      sourceFile = "myFile.caf"
      {compiled:{js, sourceMap}} = out = CaffeineScript.compile source,
        sourceFile: sourceFile
        sourceMap:  true

      assert.isString js, jsTest:{out}
      assert.isString sourceMap, sourceMapTest:{out}

      smc = new SourceMapConsumer sourceMap
      log {source, js, smc}

      assert.eq smc.decodedMappings, [
        {generatedLine: 0, generatedColumn: 0, source: 0, sourceLine: 0, sourceColumn: 0}
        {generatedLine: 2, generatedColumn: 77, source: 0, sourceLine: 0, sourceColumn: 6}
        {generatedLine: 2, generatedColumn: 89, source: 0, sourceLine: 1, sourceColumn: 0}
      ]

    test "if", ->
      source = """
        1
      """
      sourceFile = "myFile.caf"

      {compiled:{js, sourceMap, sourceNode}} = out = CaffeineScript.compile source,
        sourceFile: sourceFile
        sourceMap:  true
        debug: true

      log {sourceNode}

      assert.isString js, jsTest:{out}
      assert.isString sourceMap, sourceMapTest:{out}

      smc = new SourceMapConsumer sourceMap
      log {source, js, smc}

    test "complex", ->
      source = """
        if true
          throw new Error "here"
        console.log :hi
        """
      sourceFile = "myFile.caf"

      {compiled:{js, sourceMap, sourceNode}} = out = CaffeineScript.compile source,
        sourceFile: sourceFile
        sourceMap:  true
        debug: true

      log {sourceNode}

      assert.isString js, jsTest:{out}
      assert.isString sourceMap, sourceMapTest:{out}

      smc = new SourceMapConsumer sourceMap
      log {source, js, smc}

      testSourceMappingUsingExternalNpm sourceMap,
        new:
          generatedLine: 2, generatedColumn: 96, source: 0, sourceLine: 0, sourceColumn: 6


      # assert.eq smc.decodedMappings, [
      #   {generatedLine: 2, generatedColumn: 77, source: 0, sourceLine: 0, sourceColumn: 6}
      #   {generatedLine: 2, generatedColumn: 89, source: 0, sourceLine: 1, sourceColumn: 0}
      # ]

  modes: ->
    commonSource = "import &ArtStandardLib;a = upperCamelCase 'foo bar'"
    test "module", ->
      assert.eq (CaffeineScript.compile commonSource, module: true).compiled.js,
        """
        "use strict"
        let Caf = require('caffeine-script-runtime');
        Caf.defMod(module, () => {return Caf.importInvoke(["upperCamelCase"], [global, require('art-standard-lib')], (upperCamelCase) => {let a; return a = upperCamelCase("foo bar");});});
        """

    test "bare with import", ->
      assert.eq (CaffeineScript.compile commonSource, bare: true).compiled.js,
        """
        Caf = global.Caf || require('caffeine-script-runtime');
        Caf.importInvoke(["upperCamelCase"], [global, require('art-standard-lib')], (upperCamelCase) => {let a; return a = upperCamelCase("foo bar");});
        """

    test "bare without import", ->
      assert.eq (CaffeineScript.compile "a = 10", bare: true).compiled.js,
        """
        Caf = global.Caf || require('caffeine-script-runtime');
        a = 10;
        """


  basics: ->
    generateSourceMapParseTest "simplest", "1"

    generateSourceMapParseTest "two statements", "1;2;"

  modules: ->
    generateSourceMapParseTest "SimpleLiteralStn",      "1", compileModule: true
    # generateSourceMapParseTest "ImportStn",
    #   """
    #   import &ArtStandardLib
    #   foo
    #   """
    #   compileModule: true

    generateSourceMapParseTest "ImportStn",
      """
      import &ArtStandardLib
      foo
      bar
      """
      compileModule: true

    # generateSourceMapParseTest "ImportStn",
    #   """
    #   import Foo
    #   a = global
    #   """
    #   compileModule: true

  stnTypes: ->
    generateSourceMapParseTest "SimpleLiteralStn",      "!true"
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
    generateSourceMapParseTest "BinaryOperatorStn",     "a ? b"
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
    generateSourceMapParseTest "GlobalIdentifierStn",   "true.a"
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
    generateSourceMapParseTest "ObjectStn",             '[a]: b'
    generateSourceMapParseTest "ObjectStn",             '"#{a}": b'
    generateSourceMapParseTest "ObjectStn",             '[a+1]: b'
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


    generateSourceMapParseTest "ClassStn", """
      class Foo extends BaseClass
        @foo: 1
        bar: 1
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
      a = if true
        c
        d
      """

    generateSourceMapParseTest "ControlOperatorStn",
      """
      a = while b
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

    generateSourceMapParseTest "FunctionDefinitionStn", "=> foo: 1"

  # generateSourceMapParseTest "every SourceTreeNodeType", """
  #   1
  #   :hi
  #   """

  regressions: ->
    generateSourceMapParseTest "ControlOperatorStn", "foo() unless answer == false"
    generateSourceMapParseTest "SwitchStn", "!(source < 60)"
    generateSourceMapParseTest "SwitchStn", """
      switch
      when score < 60 then 'F'
      """

    generateSourceMapParseTest "SwitchStn", """
      switch foo
      when "bar" then 'F'
      """

    generateSourceMapParseTest "SwitchStn", """
      switch
      when score < 60, score > 100 then 'F'
      """

    generateSourceMapParseTest "SwitchStn", """
      switch
      when foo, bar then 'F'
      """

    generateSourceMapParseTest "ClassStn", """
      class Foo
        @a-b: 1
      """

    generateSourceMapParseTest "AccessorStn", """
      @prototype["@a-b"] = 1
      """


    generateSourceMapParseTest "ObjectStn", """
      foo: if bar then a: 1
      bar: 999
      """

    generateSourceMapParseTest "ObjectStn", """
      bar: 999
      foo: if bar then a: 1
      """

    generateSourceMapParseTest "ArrayStn", """
      []
        b if c
      """

  regressions: ->
    generateSourceMapParseTest "1", """
        -> 1
      """
      # sourceFile = "myFile.caf"
      # {compiled:{js, sourceMap}} = out = CaffeineScript.compile source,
      #   sourceFile: sourceFile
      #   sourceMap:  true
