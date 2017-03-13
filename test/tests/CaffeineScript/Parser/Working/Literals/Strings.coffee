{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../../Helper'

module.exports = suite: parseTestSuite
  bracketStrings:
    basic:
        '"hi"':   '"hi";'
        "'hi'":   '"hi";'

    empty:
      '""': '"";'
      "''": '"";'

    multiline:
      doubleQuotes:
          '"\na"':    '"a";'
          '"\na\n"':  '"a";'
          '"a\n"':    '"a";'
          '"  a\n"':  '"  a";'
          '"  a\nb"': '"  a b";'
          '"\\\\ "':  '"\\\\ ";'

      singleQuotes:
          "'\na'":    '"a";'
          "'\na\n'":  '"a";'
          "'a\n'":    '"a";'
          "'  a\n'":  '"  a";'
          "'  a\nb'": '"  a b";'

    interpolation:
      '"\#{a b}"':    "`${Caf.toString(a(b))}`;"
      '"a\#{a b}b"':  "`a${Caf.toString(a(b))}b`;"

      "'\#{a b}'":    "`${Caf.toString(a(b))}`;"
      "'a\#{a b}b'":  "`a${Caf.toString(a(b))}b`;"

  unquotedStrings:
    basic:
      ":hi":        '"hi";'

    hashTag:
      "#fff":       '"#fff";'
      "#hashTag":   '"#hashTag";'

      # parses as a comment
      "#-":         ';'

    numberWithUnits:
      "0px":          '"0px";'
      "1px":          '"1px";'
      "10px":         '"10px";'
      "-10px":        '"-10px";'
      ".1px":         '".1px";'
      "-.1px":        '"-.1px";'
      "0.8em":        '"0.8em";'

    unusual:
      ':0':         '"0";'
      ':01':        '"01";'
      ':0a':        '"0a";'
      ':a0':        '"a0";'
      ':10':        '"10";'
      ':10':        '"10";'
      ':#fff':      '"#fff";'
      ':*':         '"*";'

      ':-':         '"-";'

      ':-a':        '"-a";'
      ':a-':        '"a-";'

      ':_a':        '"_a";'
      ':a_':        '"a_";'

      ':hi.there':  '"hi.there";'
      ':hi-there':  '"hi-there";'
      ":80%":       '"80%";'

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
        '"" #{name}':               '`${Caf.toString(name)}`;'
        '"" a#{name}':              '`a${Caf.toString(name)}`;'
        '"" #{name}b':              '`${Caf.toString(name)}b`;'
        '"" #{a}#{b}':              '`${Caf.toString(a)}${Caf.toString(b)}`;'
        '"" - #{a}#{b}':            '`- ${Caf.toString(a)}${Caf.toString(b)}`;'
        '"" #{a} - #{b}':           '`${Caf.toString(a)} - ${Caf.toString(b)}`;'
        '"" #{a}#{b} -':            '`${Caf.toString(a)}${Caf.toString(b)} -`;'
        '"" Hello #{@props.name}.': '`Hello ${Caf.toString(this.props.name)}.`;'

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
          """: '`hi ${Caf.toString(bye(friend))}`;'

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

            ''': '`abc ${Caf.toString(a(b))} def`;'


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
            ''': '`abc\\n${Caf.toString(a(b))}\\ndef`;'

        interpolation:
          """
          ""
            \#{b}
          """: '`${Caf.toString(b)}`;'

          '''
          """
            This
            that and the \#{b}
            thing.
          ''': '`This\\nthat and the ${Caf.toString(b)}\\nthing.`;'

  interpolated:
    basic:
      '"${#{foo}}"':                     '`\\${${Caf.toString(foo)}}`;'
      '"#{foo}"':                        '`${Caf.toString(foo)}`;'
      '"#{foo}after"':                   '`${Caf.toString(foo)}after`;'
      '"before#{foo}"':                  '`before${Caf.toString(foo)}`;'
      '"before#{foo}after"':             '`before${Caf.toString(foo)}after`;'
      '"before#{@foo + bar}after"':      '`before${Caf.toString(this.foo + bar)}after`;'
      '"before#{foo}middle#{bar}after"': '`before${Caf.toString(foo)}middle${Caf.toString(bar)}after`;'

    block:
      """
      "hi\#{
        1
      }there"
      """: "`hi${Caf.toString(1)}there`;"
      """
      "hi\#{
        1
        2
      }there"
      """: "`hi${Caf.toString([1, 2])}there`;"