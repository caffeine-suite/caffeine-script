{CaffeineScript} = Neptune
{isNumber, each, object, array, isArray, log, formattedInspect, isPlainObject, merge, object, stringCount, isString} = Neptune.Art.StandardLib
{CaffeineScriptParser} = CaffeineScript

module.exports = suite: 
	regressions: ->
		skipKnownFailingTest "failure position with nested blocks", ->
			source = """
				-> -> # <-- remove one of the "->" and the output is correct
				  ->  # <-- known-failing puts the parse-failure line here
				    123
				    (	# <-- failure should be just before the (
				"""

			parser = new CaffeineScriptParser

			assert.rejects -> parser.parse source
			.then (rejectsWith) ->
				assert.eq 4, rejectsWith.info.line
