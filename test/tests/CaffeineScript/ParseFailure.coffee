{CaffeineScript} = Neptune
{isNumber, each, object, array, isArray, log, formattedInspect, isPlainObject, merge, object, stringCount, isString} = Neptune.Art.StandardLib
{CaffeineScriptParser} = CaffeineScript

module.exports = suite:
	inFunctionBlocks: ->
    # # skipKnownFailingTest
    test "failure position with nested blocks", ->
      source = """
        -> ->
          ->
            123
            (1
        """

      parser = new CaffeineScriptParser

      (assert.rejects -> parser.parse source)
      .then (rejectsWith)->
        {nonMatches, failureIndex} = parser
        assert.selectedEq
          line: 3
          column: 6
          rejectsWith.info


    test "no block", ->
      source = """
        123
        (1
        """

      parser = new CaffeineScriptParser

      (assert.rejects -> parser.parse source)
      .then (rejectsWith)->
        assert.selectedEq
          line: 1
          column: 2
          rejectsWith.info
        assert.match JSON.stringify(rejectsWith.info.expectingInfo), /parentheticalExpression/

    test "one block", ->
      source = """
        ->
          123
          (1
        """

      parser = new CaffeineScriptParser

      (assert.rejects -> parser.parse source)
      .then (rejectsWith)->
        assert.selectedEq
          line: 2
          column: 4
          rejectsWith.info
        assert.match JSON.stringify(rejectsWith.info.expectingInfo), /parentheticalExpression/

  withComments: ->

    test "one block", ->
      source = """
        -> # there
          123 # hi
          (1
        """

      parser = new CaffeineScriptParser

      (assert.rejects -> parser.parse source)
      .then (rejectsWith)->
        {nonMatches, failureIndex} = parser
        assert.selectedEq
          line: 2
          column: 4
          rejectsWith.info
        assert.match JSON.stringify(rejectsWith.info.expectingInfo), /parentheticalExpression/

    test "nested blocks", ->
      source = """
        -> -> # hi
          ->  # there
            123 # friend
            (1
        """

      parser = new CaffeineScriptParser

      (assert.rejects -> parser.parse source)
      .then (rejectsWith)->
        {nonMatches, failureIndex} = parser
        assert.selectedEq
          line: 3
          column: 6
          rejectsWith.info


