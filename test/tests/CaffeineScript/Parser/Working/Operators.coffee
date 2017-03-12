{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:
  basic:
    binary: ->
      parseTests
        "1+2":       "1 + 2;"
        "1 +   2":   "1 + 2;"
        "1 -   2":   "1 - 2;"
        "1 *   2":   "1 * 2;"
        "1 /   2":   "1 / 2;"
        "1 %   2":   "1 % 2;"

        "1 **  2":   "Caf.pow(1, 2);"
        "1 //  2":   "Caf.div(1, 2);"
        "1 %%  2":   "Caf.mod(1, 2);"

        "1 <<  2":   "1 << 2;"
        "1 >>  2":   "1 >> 2;"
        "1 >>> 2":   "1 >>> 2;"
        "1 ==  2":   "1 === 2;"
        "1 !=  2":   "1 !== 2;"
        "1 <   2":   "1 < 2;"
        "1 >   2":   "1 > 2;"
        "1 <=  2":   "1 <= 2;"
        "1 >=  2":   "1 >= 2;"

        "1 &&   2":   "1 && 2;"
        "1 ||   2":   "1 || 2;"
        "1 &    2":   "1 & 2;"
        "1 |    2":   "1 | 2;"
        "1 ^    2":   "1 ^ 2;"

        "a ?    b":   "a != null ? a : b;"
        "a.b ?  b":   "let cafTemp; ((cafTemp = a.b) != null ? cafTemp : b);"
        "1 and  2":   "1 && 2;"
        "1 or   2":   "1 || 2;"
        "1 isnt 2":   "1 !== 2;"
        "1 is   2":   "1 === 2;"
        "1 in   2":   "Caf.in(1, 2);"
        "a instanceof b": "a instanceof b;"

    precedence: ->
      parseTests
        "1 +  2 +  3":  "1 + 2 + 3;";
        "1 ** 2 ** 3":  "Caf.pow(1, Caf.pow(2, 3));";
        "1 +  2 *  3":  "1 + 2 * 3;";
        "1 *  2 +  3":  "1 * 2 + 3;";
        "(1 + 2) * 3":  "(1 + 2) * 3;";
        "1 * (2  + 3)": "1 * (2 + 3);";

    unary: ->
      parseTests
        "!true": "!true;"
        "!!true": "!!true;"

        "not true": "!true;"

        "nottrue": "nottrue;"

    unaryTail: ->
      parseTests
        "foo?": "foo != null;"

  multiline:

    newLineAfterOp:
      basic: ->
        parseTests
          """
          foo ||
            bar
          """: "foo || bar;"
          """
          foo ||
            bar
            baz
          """: "foo || ([bar, baz]);"
          """
          foo ||
          bar
          """: "foo || bar;"

    newLine:
      basic: ->
        parseTests
          """
          foo
          || bar
          """: "foo || bar;"

          """
          foo = baz.dood
            1
            2
          || bar
          """: "let foo; (foo = baz.dood(1, 2)) || bar;"

          """
          foo
          || bar
          || baz
          """: "foo || bar || baz;"

      mixed: ->
        parseTests
          """
          foo
          || bar
          .baz
          """: "(foo || bar).baz;"

          """
          foo
          .bar
          || baz
          """: "foo.bar || baz;"

      comments: ->
        parseTests
          """
          foo # 1
          || bar
          """: "foo || bar;"

        parseTests
          """
          foo
          # 1
          || bar
          """: "foo || bar;"

        parseTests
          """
          foo
          || bar # 1
          """: "foo || bar;"

    block:
      basic: ->
        parseTests
          """
          foo
            || bar
          """: "foo || bar;"

          """
          foo && bar
            || baz
          """: "foo && (bar || baz);"

      mixed: ->
        parseTests
          """
          foo
            || bar
              .baz
          """: "foo || bar.baz;"

          """
          foo
            .bar
              || baz
          """: "foo.bar || baz;"

      precedence: ->
        parseTests
          """
          foo
            || bar + 2 * 3
          """: "foo || bar + 2 * 3;"

          """
          foo
            || bar * 2 + 3
          """: "foo || bar * 2 + 3;"

      comments: ->
        parseTests
          """
          foo # 1
            || bar
          """: "foo || bar;"

          """
          foo
            # 1
            || bar
          """: "foo || bar;"

          """
          foo
            || bar # 1
          """: "foo || bar;"

          """
          foo
            || bar
            # 1
          """: "foo || bar;"

          """
          foo # 1
            # 2
            || bar # 3
            # 4
          """: "foo || bar;"

    contrasted: ->
      parseTests
        """
        a && b
        || c && d
        """: "a && b || c && d;"

        """
        a && b
          || c && d
        """: "a && (b || c && d);"

        """
        a || b
        && c || d
        """: "(a || b) && (c || d);"

        """
        a || b
          && c || d
        """: "a || b && (c || d);"

    englishOperators: ->
      parseTests
        """
        a or b
        and c or d
        """: "(a || b) && (c || d);"


    mixed:
      justOperators:
        simple: ->
          parseTests
            """
            foo
            || bar
              || baz
            """: "foo || (bar || baz);"

            """
            foo
              || bar
            || baz
            """: "foo || bar || baz;"

            """
            foo
              || bar
              || baz
            """: "foo || bar || baz;"

            """
            foo
            || bar
            || baz
            """: "foo || bar || baz;"

            """
            foo
              || bar
                || baz
            """: "foo || (bar || baz);"

        precedence: ->
          parseTests
            """
            a || b
            && c || d
            && e || f
            """: "(a || b) && (c || d) && (e || f);"

          parseTests
            """
            a + b
            || c + d
              || e + f
            """: "a + b || c + (d || e + f);"

          parseTests
            """
            a || b
              && c || d
            && e || f
            """: "(a || b && (c || d)) && (e || f);"

          parseTests
            """
            a || b
              && c || d
              && e || f
            """: "a || b && (c || d) && (e || f);"

          parseTests
            """
            a || b && c || d && e || f
            """: "a || b && c || d && e || f;"

      operatorsAndAccess:
        newLineOnly: ->
          parseTests
            """
            a || b
            && c || d
            .e || f
            """: "((a || b) && (c || d)).e || f;"

            """
            a || b
            .c || d
            && e || f
            """: "((a || b).c || d) && (e || f);"

        mixedMultiline: ->
          parseTests
            """
            a || b
            && c || d
              .e || f
            """: "(a || b) && (c || (d.e || f));"

            """
            a || b
            .c || d
              && e || f
            """: "(a || b).c || d && (e || f);"

            """
            a || b
              && c || d
            .e || f
            """: "(a || b && (c || d)).e || f;"

            """
            a || b
              .c || d
            && e || f
            """: "(a || (b.c || d)) && (e || f);"

            """
            a || b
              && c || d
              .e || f
            """: "a || ((b && (c || d)).e || f);"

            """
            a || b
              .c || d
              && e || f
            """: "a || (b.c || d) && (e || f);"

      withAssignment: ->
        parseTests
          """
          a && b = c
          """: "let b; a && (b = c);"