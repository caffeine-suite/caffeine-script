{CaffeineScript} = Neptune
{log} = Neptune.Art.Foundation
{Parser} = CaffeineScript

module.exports = suite:
  literals: ->
    test "false", -> assert.eq Parser.parse("false").toJs(), "false;"
    test "true", -> assert.eq Parser.parse("true").toJs(), "true;"
    test "0123", -> assert.eq Parser.parse("0123").toJs(), "0123;"
    test '"hi"', -> assert.eq '"hi";', Parser.parse('"hi"').toJs()
    test "'hi'", -> assert.eq "'hi';", Parser.parse("'hi'").toJs()

  operators: ->
    test "1 + 2", -> assert.eq Parser.parse("1 + 2").toJs(), "1 + 2;"
    test "a 1 + 2", -> assert.eq Parser.parse("a 1 + 2").toJs(), "a(1 + 2);"

  values: ->
    test "foo", -> assert.eq Parser.parse("foo").toJs(), "foo;"
    test "foo.bar", -> assert.eq Parser.parse("foo.bar").toJs(), "foo.bar;"
    test "foo[bar]", -> assert.eq Parser.parse("foo[bar]").toJs(), "foo[bar];"

  invocation: ->
    test "foo 1", -> assert.eq Parser.parse("foo 1").toJs(), "foo(1);"
    test "foo 1, 2", -> assert.eq Parser.parse("foo 1, 2").toJs(), "foo(1, 2);"
    test "foo 'bar'", -> assert.eq Parser.parse("foo 'bar'").toJs(), "foo('bar');"
    test "foo bar 2", -> assert.eq Parser.parse("foo bar 2").toJs(), "foo(bar(2));"

  function: ->
    test "-> 321", -> assert.eq Parser.parse("-> 321").toJs(), "(function() {return 321;});"
    test "->\n  321", -> assert.eq Parser.parse("->\n  321").toJs(), "(function() {return 321;});"
    test "->\n  321\n   456", -> assert.eq Parser.parse("->\n  321\n  456").toJs(), "(function() {321;\nreturn 456;});"
    test "->\n  321\n\n   456", -> assert.eq Parser.parse("->\n  321\n\n  456").toJs(), "(function() {321;\nreturn 456;});"

  math: ->
    testMath = (equation) ->
      test equation, ->
        js = Parser.parse(equation).toJs()
        assert.eq eval(js), eval(equation), "toJs: #{js}"

    testMath "1+2"
    testMath "1+2*3"
    testMath "2*3+4"
    testMath "2+4+4"

