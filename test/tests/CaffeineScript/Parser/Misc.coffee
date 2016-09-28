{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:
  literals: ->
    parseTests
      "0123":   "0123;"

  operators: ->
    parseTests
      "1 + 2":    "1 + 2;"
      "a 1 + 2":  "a(1 + 2);"

  values: ->
    parseTests
      "foo"     : "foo;"
      "foo.bar" : "foo.bar;"
      "foo[bar]": "foo[bar];"

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
        "123; 456;"

      # on liner function followed immediately by another statement
      """
      -> 123
      456
      """:
        "(function() {return 123;}); 456;"

  math: ->
    testMath = (equation) ->
      test equation, ->
        js = Parser.parse(equation).toJs()
        assert.eq eval(js), eval(equation), "toJs: #{js}"

    testMath "1+2"
    testMath "1+2*3"
    testMath "2*3+4"
    testMath "2+4+4"
