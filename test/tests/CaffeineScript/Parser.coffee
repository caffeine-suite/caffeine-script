{CaffeineScript} = Neptune
{Parser} = CaffeineScript

module.exports = suite: ->
  test "literals", ->
    assert.eq Parser.parse("false").toJs(), "false;"
    assert.eq Parser.parse("true").toJs(), "true;"
    assert.eq Parser.parse("0123").toJs(), "0123;"

  testMath = (equation) ->
    test equation, ->
      js = Parser.parse(equation).toJs()
      assert.eq eval(js), eval(equation), "toJs: #{js}"

  testMath "1+2"
  testMath "1+2*3"
  testMath "2*3+4"
  testMath "2+4+4"

