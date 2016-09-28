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

  multiLineAccess: ->
    parseTests
      """
      foo
      .bar
      """: "(foo).bar;"

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
      """: "(foo = baz.dood(1, 2)).bar;"


  unary: ->
    parseTests
      "!true": "!true;"
      "!!true": "!!true;"

      "not true": "!true;"

      "nottrue": "nottrue;"
