{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:
  basic: ->
    parseTests
      '"hi"':   '"hi";'
      "'hi'":   "'hi';"
      ":hi":    "'hi';"

  multiLine:
    doubleQuotes: ->
      parseTests
        '"\na"': '"\\na";'
        '"\na\n"': '"\\na\\n";'
        '"a\n"': '"a\\n";'
        '"  a\n"': '"  a\\n";'
        '"  a\nb"': '"  a\\nb";'

    singleQuotes: ->
      parseTests
        "'\na'": "'\\na';"
        "'\na\n'": "'\\na\\n';"
        "'a\n'": "'a\\n';"
        "'  a\n'": "'  a\\n';"
        "'  a\nb'": "'  a\\nb';"

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

  hereDocs: ->
    parseTests
      '"""here"""': '"here";'
      '"""\nhere"""': '"here";'
      '"""    \nhere"""': '"here";'
      '"""here\n"""': '"here";'
      '"""here\n    """': '"here";'

      '''
      """
        here
        there
      """
      ''': '"here\\nthere";'

  toEolStrings:
    "single quote exempt so it can be used in implicit arrays": ->
      parseTests
        "'' 0 '' 2":      "['', 0, '', 2];"
        '"", 0, "", 2':   '["", 0, "", 2];'

    basic: ->
      parseTests
        '"" 0':         '"0";'
        '"" hi.there':  '"hi.there";'
        '"" hi-there':  '"hi-there";'

    interpolation: ->
      parseTests
        '"" #{name}': '`${name}`;'
        '"" a#{name}': '`a${name}`;'
        '"" #{name}b': '`${name}b`;'
        '"" #{a}#{b}': '`${a}${b}`;'
        '"" - #{a}#{b}': '`- ${a}${b}`;'
        '"" #{a} - #{b}': '`${a} - ${b}`;'
        '"" #{a}#{b} -': '`${a}${b} -`;'
        '"" Hello #{@props.name}.': '`Hello ${this.props.name}.`;'

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
        '"" abc'      : '"abc";'

        '""   abc'    : '"abc";'
        '"" abc  '    : '"abc";'
        '""   abc  '  : '"abc";'

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
      '"#{foo}"':                        '`${foo}`;'
      '"#{foo}after"':                   '`${foo}after`;'
      '"before#{foo}"':                  '`before${foo}`;'
      '"before#{foo}after"':             '`before${foo}after`;'
      '"before#{@foo + bar}after"':      '`before${this.foo + bar}after`;'
      '"before#{foo}middle#{bar}after"': '`before${foo}middle${bar}after`;'
