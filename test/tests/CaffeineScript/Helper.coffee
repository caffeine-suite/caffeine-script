{CaffeineScript} = Neptune
{isNumber, each, object, array, isArray, log, formattedInspect, isPlainObject, merge, object, stringCount, isString} = Neptune.Art.StandardLib
{CaffeineScriptParser} = CaffeineScript
require "colors"

module.exports =


  niceTest: niceTest = (testName, testFunction) ->
    test testName.replace(/\t/g, "\\t").replace(/\n/g, "\\n"), testFunction

  parseToAst: (map) ->
    for k, v of map
      do (k, v) ->
        niceTest "ast: " + k.replace(/\n/g, "\\n"), ->
          p = CaffeineScriptParser.parse k, verbose: true
          assert.eq p.getStn(), v

  generateSourceMapParseTest: (name, source, options) ->
    {compileModule, parseOptions} = options if options

    niceTest name, ->
      # log "TEST sourceNode"
      try
        parseTree               = CaffeineScriptParser.parse source, merge parseOptions, sourceFile: "mySourceFile.caf"
        semanticTree            = parseTree.getStn()
        transformedSemanticTree = semanticTree.validateAll().transform()

        log {
          compileModule
          compareWith: oldJs =
            if compileModule
              transformedSemanticTree.toJsModule()
            else
              transformedSemanticTree.toJs()

          toJsWithInlineSourceMap: withSourceMapJs = transformedSemanticTree.toJsWithInlineSourceMap
            verbose: true
            module: compileModule
        }

      catch error
        log "\nFAIL: #{name}".red
        transformedSemanticTree = "no change" if transformedSemanticTree == semanticTree
        log info: {parseTree, semanticTree, transformedSemanticTree}
        throw error
      # log "HERE5"
      [newJs] = withSourceMapJs.split "\n//# sourceMappingURL"
      assert.equal oldJs, newJs

      # assert.equal true, !!sourceNode

  generateParseTest: generateParseTest = (expectedJs, source, options) ->
    {compileModule, parseOptions} = options if options

    testFunction = if isString expectedJs?.knownFailing
      expectedJs = expectedJs?.knownFailing
      knownFailing = true
      skipKnownFailingTest
    else
      niceTest

    expectFailure = !expectedJs?

    testFunction name = "#{source} >> #{expectedJs || 'ILLEGAL'}".replace(/\n/g, "\\n"), ->
      expectedFailure = null

      js = try
        parseTree = CaffeineScriptParser.parse source, parseOptions
        semanticTree = parseTree.getStn()
        transformedSemanticTree = semanticTree.validateAll().transform()

        if compileModule
          transformedSemanticTree.toJsModule()
        else
          transformedSemanticTree.toJs()

      catch error
        if expectFailure && isNumber error.failureIndex
          expectedFailure = error
          error = null
        else
          log.error error unless knownFailing

        null

      showInfo = if expectFailure
        js || !expectedFailure
      else
        js != expectedJs

      if showInfo && !knownFailing
        log "\nFAIL: #{name}".red
        transformedSemanticTree = "no change" if transformedSemanticTree == semanticTree
        log info: {js, expectedJs, parseTree, semanticTree, transformedSemanticTree}
        log "\n"

      throw error if error

      if expectFailure
        assert.eq js, null
      else
        assert.eq js, expectedJs

  parseTests: parseTests = (a, b) ->
    map = if b
      {compileModule} = options = a
      b
    else
      a

    options =
      compileModule: compileModule
      parseOptions: merge options, verbose: true

    object map, (expectedJs, source) -> generateParseTest expectedJs, source, options

  parseTestSuite: parseTestSuite = (a, b) ->
    map = if b
      options = a
      b
    else
      options = {}
      a

    hasTestValues = hasOther = false
    for k, v of map
      if !v? || v?.knownFailing || isString v
        hasTestValues = true
      else
        hasOther = true

    throw new Error "either pass all null/string/{knownFailing:string} or all sub-suites as objects withouth knownFailing fields!" if hasTestValues && hasOther
    if hasTestValues
      -> parseTests options, map
    else
      object map, (v) -> parseTestSuite options, v


  applyModuleWrapper: (body) ->
    """
    "use strict"
    let Caf = require(\'caffeine-script-runtime\');
    Caf.defMod(module, () => {#{body}});
    """

  illegalSyntaxTests: illegalSyntaxTests = (a) ->
    # log illegalSyntaxTests: {a}
    if isString source = a
      ->
        niceTest "illegal: #{source.replace(/\n/g, "\\n")}", ->
          assert.rejects ->
            CaffeineScriptParser.parse source
            .getStn()
            .validateAll()

    else if isArray a
      object a, illegalSyntaxTests

    else if isPlainObject a
      object (a), (v, k) ->
        illegalSyntaxTests v

    else throw new Error "invalid type: #{formattedInspect a}"
