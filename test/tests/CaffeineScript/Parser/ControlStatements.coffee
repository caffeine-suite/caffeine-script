{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:

  if: ->
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

      "bar = if foo then 1 else 2": "bar = foo ? 1 : 2;"

  unless: ->
    parseTests
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
