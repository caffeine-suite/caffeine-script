{OperatorHelper} = Neptune.CaffeineScript
{log, w} = Neptune.Art.Foundation

{escapeUnescaped} = Neptune.CaffeineScript.Lib

module.exports = suite:
  escapeUnescaped: ->
    test "escapeUnescaped", ->
      assert.eq ' ', escapeUnescaped " ", " "
