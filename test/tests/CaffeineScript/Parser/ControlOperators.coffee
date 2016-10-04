{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:

  if:
    basic: ->
      parseTests
        "if foo\n  bar": "if (foo) {bar;};"
        "if foo then bar": "if (foo) {bar};"

        """
        if foo
          bar
          baz
        """: "if (foo) {bar; baz;};"

        """
        if foo
          bar
        else
          baz
        """: "if (foo) {bar;} else {baz;};"


    expressions: ->
      parseTests
        """
        bar = if foo
          1
        """: "bar = foo ? (1) : undefined;"

        """
        bar = if foo
          1
          2
        """: "bar = foo ? (1, 2) : undefined;"

        "bar = if foo then 1 else 2": "bar = foo ? 1 : 2;"

  unless: ->
    parseTests
      """
      unless foo
        bar
      """: "if (!foo) {bar;};"

      """
      unless foo + bar
        bar
      """: "if (!(foo + bar)) {bar;};"

      """
      unless foo
        bar
      else
        baz
      """: "if (!foo) {bar;} else {baz;};"

  while: ->
    parseTests
      "while foo\n  bar": "while (foo) {bar;};"

  until: ->
    parseTests
      "until foo\n  bar": "while (!foo) {bar;};"

  tail:
    ifUnless: ->
      parseTests
        "foo if bar": "if (bar) {foo};"
        "foo unless bar": "if (!bar) {foo};"

    whileUntil: ->
      parseTests
        "foo while bar": "while (bar) {foo};"
        "foo until bar": "while (!bar) {foo};"

    combined: ->
      parseTests
        "foo if bar unless baz": "if (!baz) {if (bar) {foo}};"
        "foo if bar while baz": "while (baz) {if (bar) {foo}};"
        "foo while bar if baz": "if (baz) {while (bar) {foo}};"

    expressions: ->
      parseTests
        "=>\n foo if bar": "(() => {return bar ? foo : undefined;});"
