{CaffeineScript} = Neptune
{log} = Neptune.Art.Foundation
{Parser} = CaffeineScript

parseTests = (map) ->
  for k, v of map
    do (k, v) ->
      test k.replace(/\n/g, "\\n"), -> assert.eq Parser.parse(k).toJs(), v

module.exports = suite:
  literals: ->
    test "false", -> assert.eq Parser.parse("false").toJs(), "false;"
    test "true", -> assert.eq Parser.parse("true").toJs(), "true;"
    test "0123", -> assert.eq Parser.parse("0123").toJs(), "0123;"
    test '"hi"', -> assert.eq '"hi";', Parser.parse('"hi"').toJs()
    test "'hi'", -> assert.eq "'hi';", Parser.parse("'hi'").toJs()

  operators: ->
    parseTests
      "1 + 2":    "1 + 2;"
      "a 1 + 2":  "a(1 + 2);"

  values: ->
    parseTests
      "foo"     : "foo;"
      "foo.bar" : "foo.bar;"
      "foo[bar]": "foo[bar];"

  invocation: ->
    parseTests
      "foo 1"    : "foo(1);"
      "foo 1, 2" : "foo(1, 2);"
      "foo 'bar'": "foo('bar');"
      "foo bar 2": "foo(bar(2));"

  function: ->
    parseTests
      "-> 321"             : "(function() {return 321;});"
      "->\n  321"          : "(function() {return 321;});"
      "->\n  321\n  456"   : "(function() {321;\nreturn 456;});"
      "->\n  321\n\n  456" : "(function() {321;\nreturn 456;});"

  assignment: ->
    parseTests
      "a=b":        "a = b;"
      "a   =    b": "a = b;"
      "a[1] = b":   "a[1] = b;"
      "a.b = b":    "a.b = b;"

  statements: ->
    parseTests
      """
      123
      456
      """:
        """
        123;
        456;
        """

      # on liner function followed immediately by another statement
      """
      -> 123
      456
      """:
        """
        (function() {return 123;});
        456;
        """

  controlStatements: ->
    parseTests
      """
      if foo
        bar
      """: "if (foo) {bar;};"

      """
      if foo
        bar
      else
        baz
      """: "if (foo) {bar;} else {baz;};"

      """
      unless foo
        bar
      """: "if (!(foo)) {bar;};"

      """
      unless foo + bar
        bar
      """: "if (!(foo + bar)) {bar;};"

      """
      unless foo
        bar
      else
        baz
      """: "if (!(foo)) {bar;} else {baz;};"

  math: ->
    testMath = (equation) ->
      test equation, ->
        js = Parser.parse(equation).toJs()
        assert.eq eval(js), eval(equation), "toJs: #{js}"

    testMath "1+2"
    testMath "1+2*3"
    testMath "2*3+4"
    testMath "2+4+4"
