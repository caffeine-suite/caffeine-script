{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite
  bracketStrings:
    basic:
      '"hi"':   '"hi";'
      "'hi'":   '"hi";'

    empty:
      '""':         '"";'
      "''":         '"";'
      '("")':       '"";'
      '[""]':       '[""];'
      '["", 1]':    '["", 1];'
      '{a:""}':     '({a: ""});'

    dotAccessor:
      '"".length':    '("").length;'
      '"a".length':   '("a").length;'

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
    wordStrings:
      basic:
        ":hi":        '"hi";'

      illegal:
        ":(":   null
        ":{":   null
        ":[":   null

      escaped:
        ":hi\\tthere":  '"hi\\tthere";'
        ":hi\\nthere":  '"hi\\nthere";'
        ":\\.":         '"\\.";'
        ":\\ ":         '" ";'
        ":\\\\":        '"\\\\";'
        ":_":           '"_";'
        ":\\_":         '" ";'
        ":\\s":         '"\\s";'
        ":Hi\\_there":  '"Hi there";'
        ":Hi\\sthere":  '"Hi\\sthere";'
        ":Hi\\ there":  '"Hi there";'
        # ":(and\\)":     '"(and)";'
        # ":[and\\]":     '"[and]";'
        # ":{and\\}":     '"{and}";'
        # ":this\\,that": '"this.that";'

      interpolation:
        ":a\#{123}":   null # illegal now, but will be: "`a${Caf.toString(123)}`;"

      regressions:
        ":git@github.com:shanebdavis/caffeine-script.git": '"git@github.com:shanebdavis/caffeine-script.git";'

    hashStrings:
      basic:
        "#fff":       '"#fff";'
        "#hashTag":   '"#hashTag";'

        # no longer parses as a comment
        "#-":         '"#-";'

      escaped:
        "#hi\\tthere":    '"#hi\\tthere";'
        "#\\.":           '"#\\.";'
        "#\\_":           '"# ";'
        "#\\ ":           '"# ";'
        "#Hi\\_there.":   '"#Hi there.";'
        "#Hi\\ there.":   '"#Hi there.";'

      interpolation:
        "#a\#{123}":   null # illegal now, but will be: "`a${Caf.toString(123)}`;"

    _10UnitStrings:
      "0px":        '"0px";'
      "1px":        '"1px";'
      "10px":       '"10px";'
      "-10px":      '"-10px";'
      ".1px":       '".1px";'
      "-.1px":      '"-.1px";'
      "0.8em":      '"0.8em";'

    unusual:
      ':0':         '"0";'
      ':01':        '"01";'
      ':0a':        '"0a";'
      ':a0':        '"a0";'
      ':10':        '"10";'
      ':10':        '"10";'
      ':#fff':      '"#fff";'
      ':*':         '"*";'
      ':h:mmtt':    '"h:mmtt";'
      ':h:':        '"h:";'

      ':-':         '"-";'
      ':\\n':       '"\\n";'
      ':a\\tb':      '"a\\tb";'

      ':-a':        '"-a";'
      ':a-':        '"a-";'

      ':_a':        '"_a";'
      ':a_':        '"a_";'

      ':hi.there':  '"hi.there";'
      ':hi-there':  '"hi-there";'
      ":80%":       '"80%";'
      ':http://cafscript.com': '"http://cafscript.com";'

    regressions:
      'if currentUsersMessage then "right" else "left"':  'if (currentUsersMessage) {"right";} else {"left";};'
      'if currentUsersMessage then "right" else :left':   'if (currentUsersMessage) {"right";} else {"left";};'
      'if currentUsersMessage then "right" else (:left)': 'if (currentUsersMessage) {"right";} else {"left";};'
      'if currentUsersMessage then :right else :left':    'if (currentUsersMessage) {"right";} else {"left";};'

      "(:a)":           '"a";'
      "[:a]":           '["a"];'
      ":<div>":         '"<div>";'
      "{a: :a}":        '({a: "a"});'

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

    regressions:
      '[] "", 1':   '["", 1];'
      '[] "" , 1':  '[", 1"];'

    interpolation:
        '""#{name}':                '`${Caf.toString(name)}`;'
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

    blankLines:
      double:
        """
        ""

          abc
        """: '"abc";'

        """
        ""


          abc
        """: '"abc";'

      tripple:
        '''
        """

          abc
        ''': '"\\nabc";'

        '''
        """


          abc
        ''': '"\\n\\nabc";'

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
        null:
          "'foo\\0hi'": '"foo\\0hi";'

        octal:
          "'foo\\01hi'": '"foo\\01hi";'
          "'foo\\012hi'": '"foo\\012hi";'
          "'foo\\12hi'": '"foo\\12hi";'
          "'foo\\123hi'": '"foo\\123hi";'

        hex:
          "'foo\\xabhi'": '"foo\\xabhi";'

        unicode:
          "'foo\\ubeefhi'":   '"foo\\ubeefhi";'
          "'foo\\u{b}hi'":    '"foo\\u{b}hi";'
          "'foo\\u{beef}hi'": '"foo\\u{beef}hi";'

        spaces:
          "'foo\\ bar'": '"foo bar";'
          "'foo\\_bar'": '"foo bar";'

          "'foo\\\\ bar'": '"foo\\\\ bar";'
          "'foo\\\\_bar'": '"foo\\\\_bar";'

        regressions:
          """
          'a"b\\'c'
          """: """
            'a"b\\'c';
            """

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
            ''': '"\\nabc\\ndef";'

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

    regressions:
      """
      ""
        # looks like a comment but its not
      """: '"# looks like a comment but its not";'

      '''
      """
        abc
          ## should be indented in string
      ''': '"abc\\n  ## should be indented in string";'

      '"""':  '"";'
      "'''":  '"";'
      '""':   '"";'
      "''":   '"";'

      """
      ""
      foo
      """: '""; foo;'

  interpolated:
    basic:
      '"${#{foo}}"':                     '`\\${${Caf.toString(foo)}}`;'
      '"#{foo}"':                        '`${Caf.toString(foo)}`;'
      '"#{foo}after"':                   '`${Caf.toString(foo)}after`;'
      '"before#{foo}"':                  '`before${Caf.toString(foo)}`;'
      '"before#{foo}after"':             '`before${Caf.toString(foo)}after`;'
      '"before#{@foo + bar}after"':      '`before${Caf.toString(this.foo + bar)}after`;'
      '"before#{foo}middle#{bar}after"': '`before${Caf.toString(foo)}middle${Caf.toString(bar)}after`;'

    whitespace:
      '"#{ foo}"':                        '`${Caf.toString(foo)}`;'
      '"#{foo }"':                        '`${Caf.toString(foo)}`;'
    # block:
    #   """
    #   "hi\#{
    #     1
    #   }there"
    #   """: "`hi${Caf.toString(1)}there`;"
    #   """
    #   "hi\#{
    #     1
    #     2
    #   }there"
    #   """: "`hi${Caf.toString([1, 2])}there`;"


    lineBreaks:
      '"before\#{\na\n}after"': "`before${Caf.toString(a)}after`;"
      '"before\#{\na}after"': "`before${Caf.toString(a)}after`;"
      '"before\#{a\n}after"': "`before${Caf.toString(a)}after`;"

    comments:
      """
      "before\#{
      # comment
      1 + 2
      }after"
      """: "`before${Caf.toString(1 + 2)}after`;"

    empty:
      '"before\#{ }after"': "`beforeafter`;"

      """
      "before\#{
      # comment
      }after"
      """: "`beforeafter`;"

    multiline:
      """
      "before\#{
      1
      2
      }after"
      """: "`before${Caf.toString((1, 2))}after`;"

      """
      "before\#{a
      b
      }after"
      """: "`before${Caf.toString((a, b))}after`;"

      """
      "before\#{a
        b
      }after"
      """: "`before${Caf.toString(a(b))}after`;"

    block:
      indented:
        """
        "before\#{}
          1
        after"
        """: "`before${Caf.toString(1)} after`;"

        """
        "before\#{}
          a
          b
        after"
        """: "`before${Caf.toString((a, b))} after`;"


        """
        "before\#{}
          a
          b

        after"
        """: "`before${Caf.toString((a, b))} after`;"

        """
        "before\#{}
          a
          b


        after"
        """: "`before${Caf.toString((a, b))} after`;"

        """
        "before\#{} a
          b

        after"
        """: "`before${Caf.toString(a(b))} after`;"

        """
        ""
          before\#{}
            a
            b

          after
        """: "`before${Caf.toString((a, b))} after`;"

        '''
        """
          before\#{}
            a
            b
          after
        ''': "`before${Caf.toString((a, b))}\\nafter`;"

        '''
        """
          before\#{}
            a
            b

          after
        ''': "`before${Caf.toString((a, b))}\\n\\nafter`;"

      toEol:
        '"before\#{} 1\nafter"': "`before${Caf.toString(1)} after`;"
        '"" before\#{} 1': "`before${Caf.toString(1)}`;"
      matched:
        """
        "before\#{
          a
          b
        }after"
        """: "`before${Caf.toString((a, b))}after`;"

    # empty:
    #   '"Hi \\\#{}."': "`Hi \#{}.`;"
    #   '"Hi #{}."': "`Hi .`;"
      # '"Hi #{  }."': "Hi ."
      # '"Hi #{;}."': "Hi ."
