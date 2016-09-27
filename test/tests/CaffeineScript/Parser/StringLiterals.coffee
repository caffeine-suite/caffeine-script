{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:
  basic: ->
    parseTests
      '"hi"':   '"hi";'
      "'hi'":   "'hi';"
      ":hi":    "'hi';"

  unusualUnquotedStrings: ->
    parseTests
      ":0":         "'0';"
      ":01":        "'01';"
      ":0a":        "'0a';"
      ":a0":        "'a0';"
      ":10":        "'10';"
      ":10":        "'10';"

      ":-a":        "'-a';"
      ":a-":        "'a-';"

      ":_a":        "'_a';"
      ":a_":        "'a_';"

      ":hi.there":  "'hi.there';"
      ":hi-there":  "'hi-there';"

  toEolStrings:
    basic: ->
      parseTests
        '"" 0':         '"0";'
        '"" 01':        '"01";'
        '"" 0a':        '"0a";'
        '"" a0':        '"a0";'
        '"" 10':        '"10";'
        '"" 10':        '"10";'

        '"" -a':        '"-a";'
        '"" a-':        '"a-";'

        '"" _a':        '"_a";'
        '"" a_':        '"a_";'

        '"" hi.there':  '"hi.there";'
        '"" hi-there':  '"hi-there";'

    escaping: ->
      parseTests
        """
        "" \\ abc
        """: '" abc";'

        """
        "" abc\\tdef\\n
        """: '"abc\\tdef\\n";'

    areTrimmed: ->
      parseTests
        """
        "" abc
        """: '"abc";'

        '""abc ': '"abc";'

  blockStrings:
    basic: ->
      parseTests
        """
        ""
          abc
        """: '"abc";'

    quotesDontNeedEscaping: ->
      parseTests
        """
        ""
          "foo"
        """: '"\\"foo\\"";'

      parseTests
        """
        ""
          'foo'
        """: '"\'foo\'";'

      parseTests
        """
        ""
          "
          ""
          ""\"
        """: """
          "\\"\\n\\"\\"\\n\\"\\"\\"";
          """

    escapes:
      escapedNewLines: -> parseTests
        """
        ""
          foo\\nbar
        """: "\"foo\\nbar\";"

        """
        ""
          foo
          bar\\n
        """: "\"foo\\nbar\\n\";"

      escapedTabs: -> parseTests
        """
        ""
          foo\\tbar
        """: "\"foo\\tbar\";"


    whitespace:
      basic: -> parseTests
        """
        ""
          abc
          def
        """: '"abc\\ndef";'

      preNewLine: -> parseTests
        """
        ""

          abc
          def
        """: '"abc\\ndef";'

      postNewLine: -> parseTests

        """
        ""
          abc
          def

        123
        """: '"abc\\ndef"; 123;'

      nonFirstLineExtraIndent: -> parseTests

        """
        ""
          abc
            def
        """: '"abc\\n  def";'

      middleNewLine: -> parseTests
        """
        ""
          abc

          def
        """: '"abc\\n\\ndef";'

  interpolated: ->
    parseTests
      '"#{foo}"': '"" + (foo);'
      '"#{foo}after"': '"" + (foo) + "after";'
      '"before#{foo}"': '"before" + (foo);'
      '"before#{foo}after"': '"before" + (foo) + "after";'
      '"before#{foo + bar}after"': '"before" + (foo + bar) + "after";'
      '"before#{foo}middle#{bar}after"': '"before" + (foo) + "middle" + (bar) + "after";'
