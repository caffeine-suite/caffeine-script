{CaffeineScript} = Neptune
{isNumber, each, object, array, isArray, log, formattedInspect, isPlainObject, merge, object, stringCount, isString} = Neptune.Art.StandardLib
{CaffeineScriptParser} = CaffeineScript
require "colors"

module.exports =
  parseToAst: (map) ->
    for k, v of map
      do (k, v) ->
        test "ast: " + k.replace(/\n/g, "\\n"), ->
          p = CaffeineScriptParser.parse k, verbose: true
          assert.eq p.getStn(), v

  parseTests: parseTests = (a, b) ->
    map = if b
      {compileModule} = options = a
      b
    else
      a

    parseOptions = merge options, verbose: true
    knownFailing = false

    object map, (expectedJs, source) ->
      testFunction = if isString expectedJs?.knownFailing
        expectedJs = expectedJs?.knownFailing
        knownFailing = true
        skipKnownFailingTest
      else
        test

      expectFailure = !expectedJs?

      expectedFailure = null
      testFunction name = "#{source} >> #{expectedJs || 'ILLEGAL'}".replace(/\n/g, "\\n"), ->
        js = try
          stn = (p = CaffeineScriptParser.parse(source, parseOptions)).getStn()
          transformedStn = stn.transform()
          if compileModule
            transformedStn.toJsModule()
          else
            transformedStn.toJs()
        catch error
          if expectFailure && isNumber error.failureIndex
            expectedFailure = error
            error = null
          else
            log.error error

          null

        showInfo = if expectFailure
          js || !expectedFailure
        else
          js != expectedJs

        if showInfo && !knownFailing
          log "\nFAIL: #{name}".red
          log info:
            js:js
            expectedJs: expectedJs
            parseTree: p
            semanticTree: stn
            transformedSemanticTree: if transformedStn != stn then transformedStn else "no change"
          log "\n"

        throw error if error

        if expectFailure
          assert.eq js, null
        else
          assert.eq js, expectedJs

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
        test "illegal: #{source.replace(/\n/g, "\\n")}", ->
          assert.rejects -> CaffeineScriptParser.parse source

    else if isArray a
      object a, illegalSyntaxTests

    else if isPlainObject a
      object (a), (v, k) ->
        illegalSyntaxTests v

    else throw new Error "invalid type: #{formattedInspect a}"
