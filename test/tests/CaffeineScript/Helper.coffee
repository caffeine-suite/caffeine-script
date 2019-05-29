{CaffeineScript} = Neptune
{isNumber, eq, each, object, array, isArray, log, formattedInspect, isPlainObject, merge, object, stringCount, isString} = Neptune.Art.StandardLib
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

    niceTest "#{name}: #{source}", ->
      # log "TEST sourceNode"
      try
        parseTree               = CaffeineScriptParser.parse source, merge parseOptions, sourceFile: "mySourceFile.caf"
        semanticTree            = parseTree.getStn()
        transformedSemanticTree = semanticTree.validateAll().transform()

        # oldToJs =
        #   if compileModule
        #     transformedSemanticTree.toJsModule()
        #   else
        #     transformedSemanticTree.toJs()

        withSourceMapJs =
          transformedSemanticTree.toJsUsingSourceNode
            inlineMap:  true
            module:     compileModule
          .compiled.js

      catch error
        log "\nFAIL: #{name}".red
        transformedSemanticTree = "no change" if transformedSemanticTree == semanticTree
        log info: {parseTree, semanticTree, transformedSemanticTree}
        throw error
      # log "HERE5"
      try
        [newJs] = withSourceMapJs.split "\n//# sourceMappingURL"
        # assert.equal newJs, oldToJs
        assert.match withSourceMapJs, ///
          //\#\ sourceMappingURL=data:application/json;base64,[a-z0-9]+
          ///i
        assert.match withSourceMapJs, ///
          //\#\ sourceURL=[a-z0-9]+.caf
          ///i
      catch error

        log {
          parseTree
          semanticTree
          transformedSemanticTree
          name
          source
          options
          # oldToJs
          withSourceMapJs
        }

        throw error

      # assert.equal true, !!sourceNode

  compileAndReportErrors: compileAndReportErrors = (source, {name, expectedJs, expectFailure, knownFailing, parseOptions, compileModule}) ->
    expectedFailure = null

    js = try
      parseTree = CaffeineScriptParser.parse source, parseOptions
      semanticTree = parseTree.getStn()
      transformedSemanticTree = semanticTree.validateAll().transform()

      transformedSemanticTree.toJsUsingSourceNode module: compileModule
      .compiled.js
      # if compileModule
      #   transformedSemanticTree.toJsModule()
      # else
      #   transformedSemanticTree.toJs()

    catch error
      if expectFailure && isNumber error.failureIndex
        expectedFailure = error
        error = null
      else
        log.error error unless knownFailing

      null

    showInfo = if expectFailure
      js || !expectedFailure

    else if expectedJs
      js != expectedJs

    if showInfo && !knownFailing
      log "\nFAIL: #{name}".red
      transformedSemanticTree = "no change" if transformedSemanticTree == semanticTree
      log info: {js, expectedJs, parseTree, semanticTree, transformedSemanticTree}
      log "\n"

    throw error if error

    if expectFailure
      assert.eq js, null
    else if expectedJs
      assert.eq js, expectedJs

    {js, expectedJs, parseTree, semanticTree, transformedSemanticTree}

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

      compileAndReportErrors source, {name, expectedJs, expectFailure, knownFailing, parseOptions, compileModule}

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

  ###
  semanticTestSuite:

  IN: (options, map) OR (map)

    options: not used yet
    map:
      An arbitrary plain object structure where:

        prop-keys:
          are either suite-labels for sub-test-suites OR
          the source CaffeineScript for a test
          -- depending on the prop-value

        prop-values: are either sub-maps OR
          the expecting-values for the tests

      If the prop-value is not a plainObject, it is an expecting-value.
      If the prop-value has either a 'value' key or 'knownFailing' key,
        If 'value': the prop-value for the value-key is used as the expecting-balue.
        If 'knownFailing': the test is a 'knownFailing' test (see elsewhere what that means)
          Also, this isn't currently supported here, bit it probably will be.

  ###
  semanticTestSuite: semanticTestSuite = (a, b) ->
    map = if b
      options = a
      b
    else
      options = {}
      a

    hasTestValues = hasOther = false
    for k, v of map
      if !isPlainObject(v) || v.knownFailing || v.value
        hasTestValues = true
      else
        hasOther = true

    if hasTestValues && hasOther
      throw new Error "either pass all test-values (any non-plain-object, or plain-objects with value: or knownFailing: props) or all sub-suites as plain-objects withouth knownFailing fields!"

    if hasTestValues
      ->
        object map, (jsControl, cafSource) ->
          expectingValue = if isPlainObject jsControl
            {value, knownFailing} = jsControl
            value
          else
            jsControl

          niceTest name = "#{cafSource} >> #{(expectingValue && formattedInspect expectingValue) ? 'ILLEGAL'}".replace(/\n/g, "\\n"), ->
            {js} = compileAndReportErrors cafSource, {name}
            try
              cafOutput = eval """
                let Caf = require(\'caffeine-script-runtime\');
                #{js}
                """
            catch error
              log.error {cafSource, jsOutput: js}
              assert.fail error
            unless eq expectingValue, cafOutput
              assert.eq expectingValue, cafOutput, {cafSource, jsOutput: js}

    else
      object map, (v) -> semanticTestSuite options, v

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
