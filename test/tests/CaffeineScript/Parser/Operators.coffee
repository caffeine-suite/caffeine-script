{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:
  binary: ->
    parseTests
      "1 + 2": "1 + 2;"

  multiLine: ->
    parseTests
      """
      foo
      || bar
      """: "(foo) || bar;"

      """
      foo = baz.dood
        1
        2
      || bar
      """: "(foo = baz.dood(1, 2)) || bar;"

      """
      foo
      || bar
      || baz
      """: "((foo) || bar) || baz;"

  multiLineInvocation: ->
    parseTests
      """
      foo
      (bar)
      """: "(foo)(bar);"

  multiLineAccess: ->
    parseTests
      """
      foo
      .bar
      """: "(foo).bar;"

      """
      foo
      .bar = c
      """: "(foo).bar = c;"

      """
      foo
      .bar().baz = c
      """: "(foo).bar().baz = c;"

      """
      foo
      .bar 1
      """: "(foo).bar(1);"

      """
      foo = baz.dood
        1
        2
      .bar
      """: "(foo = baz.dood(1, 2)).bar;"

      """
      foo = baz.dood
        1
        2
      .then -> 123
      .catch -> 456
      """: "((foo = baz.dood(1, 2)).then((function() {return 123;}))).catch((function() {return 456;}));"


  unary: ->
    parseTests
      "!true": "!true;"
      "!!true": "!!true;"

      "not true": "!true;"

      "nottrue": "nottrue;"
