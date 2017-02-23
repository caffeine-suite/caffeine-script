{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../../Helper'

module.exports = suite: parseTestSuite
  basic:
      '"hi"':   '"hi";'
      "'hi'":   '"hi";'
      ":hi":    '"hi";'

  empty:
    '""': '"";'
    "''": '"";'

  multiline:
    doubleQuotes:
        '"\na"':    '"\\na";'
        '"\na\n"':  '"\\na\\n";'
        '"a\n"':    '"a\\n";'
        '"  a\n"':  '"  a\\n";'
        '"  a\nb"': '"  a\\nb";'
        '"\\\\ "':  '"\\\\ ";'

    singleQuotes:
        '"\na"': '"\\na";'
        '"\na\n"': '"\\na\\n";'
        '"a\n"': '"a\\n";'
        '"  a\n"': '"  a\\n";'
        '"  a\nb"': '"  a\\nb";'

  unusualUnquotedStrings:
      ':0':         '"0";'
      ':01':        '"01";'
      ':0a':        '"0a";'
      ':a0':        '"a0";'
      ':10':        '"10";'
      ':10':        '"10";'
      ':#fff':      '"#fff";'
      ':*':         '"*";'

      ':-a':        '"-a";'
      ':a-':        '"a-";'

      ':_a':        '"_a";'
      ':a_':        '"a_";'

      ':hi.there':  '"hi.there";'
      ':hi-there':  '"hi-there";'

  toEolStrings:
    "single quote exempt so it can be used in implicit arrays":
        "''  0, '', 2":   '["", 0, "", 2];'
        "'', 0, '', 2":   '["", 0, "", 2];'

        '""  0, "", 2':   '\'0, "", 2\';'
        '"", 0, "", 2':   '["", 0, "", 2];'

    basic:
        '"" 0':         '"0";'
        '"" hi.there':  '"hi.there";'
        '"" hi-there':  '"hi-there";'

    interpolation:
        '"" #{name}':               '`${name}`;'
        '"" a#{name}':              '`a${name}`;'
        '"" #{name}b':              '`${name}b`;'
        '"" #{a}#{b}':              '`${a}${b}`;'
        '"" - #{a}#{b}':            '`- ${a}${b}`;'
        '"" #{a} - #{b}':           '`${a} - ${b}`;'
        '"" #{a}#{b} -':            '`${a}${b} -`;'
        '"" Hello #{@props.name}.': '`Hello ${this.props.name}.`;'

    escaping:
        """
        "" \\ abc
        """: '" abc";'

        """
        "" abc\\tdef\\n
        """: '"abc\\tdef\\n";'

    areTrimmed:
        '"" abc'      : '"abc";'

        '""   abc'    : '"abc";'
        '"" abc  '    : '"abc";'
        '""   abc  '  : '"abc";'

  blockStrings:
    singleQuotes:
      basic:
        """
        ''
          hi
        """: '"hi";'

        """
        ''
          hi\\n
        """: '"hi\\n";'

        """
        ''
          hi
            \#{bye friend}
        """: '"hi \#{bye friend}";'

        """
        '''
          hi
            \#{bye friend}
        """: '"hi\\n  \#{bye friend}";'

    doubleQuotes:
      basic:
          """
          ""
            abc
          """: '"abc";'

          '''
          """
            abc

          ''': '"abc";'
          """
          ""
            hi
              \#{bye friend}
          """: '`hi ${bye(friend)}`;'

      quotesDontNeedEscaping:
          """
          ""
            "foo"
          """: """
            '"foo"';
            """

          """
          ""
            'foo'
          """: """
            "'foo'";
            """

          """
          ""
            "
            ""
            ""\"
          """: '''
            '" "" """';
            '''

      escapes:
        escapedNewLines:
          """
          ""
            foo\\nbar
          """: "\"foo\\nbar\";"

          '''
          """
            foo
            bar\\n
          ''': "\"foo\\nbar\\n\";"

        escapedTabs:
          """
          ""
            foo\\tbar
          """: "\"foo\\tbar\";"


      whitespace:
        twoDoubleQuote:
          basic:
            '''
            ""
              abc
              def
            ''': '"abc def";'

            '''
            ""

              abc
              def

            ''': '"abc def";'

            '''
            ""

              abc
                asdf
              def

            ''': '"abc asdf def";'

            '''
            ""

              abc
                \#{a b}
              def

            ''': '`abc ${a(b)} def`;'


        threeDoubleQuote:
          basic:
            '''
            """
              abc
              def
            ''': '"abc\\ndef";'

          preNewLine:
            '''
            """

              abc
              def
            ''': '"abc\\ndef";'

          postNewLine:

            '''
            """
              abc
              def

            123
            ''': '"abc\\ndef"; 123;'

          nonFirstLineExtraIndent:

            '''
            """
              abc
                def
            ''': '"abc\\n  def";'

          middleNewLine:
            '''
            """
              abc

              def
            ''': '"abc\\n\\ndef";'

          interpolation:
            '''
            """
              abc
              #{a b}
              def
            ''': '`abc\\n${a(b)}\\ndef`;'

        interpolation:
          """
          ""
            \#{b}
          """: '`${b}`;'

          '''
          """
            This
            that and the \#{b}
            thing.
          ''': '`This\\nthat and the ${b}\\nthing.`;'

  interpolated:
      '"#{foo}"':                        '`${foo}`;'
      '"${#{foo}}"':                     '`\\${${foo}}`;'
      '"#{foo}after"':                   '`${foo}after`;'
      '"before#{foo}"':                  '`before${foo}`;'
      '"before#{foo}after"':             '`before${foo}after`;'
      '"before#{@foo + bar}after"':      '`before${this.foo + bar}after`;'
      '"before#{foo}middle#{bar}after"': '`before${foo}middle${bar}after`;'
