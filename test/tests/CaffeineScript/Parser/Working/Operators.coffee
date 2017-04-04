{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite
  binary:
    basic:
      # + and - are in the signedNumberConstantInterference section
      "1 *   2":    "1 * 2;"
      "1 /   2":    "1 / 2;"
      "1 %   2":    "1 % 2;"

      "1 **  2":    "Caf.pow(1, 2);"
      "1 //  2":    "Caf.div(1, 2);"
      "1 %%  2":    "Caf.mod(1, 2);"

      "1 <<  2":    "1 << 2;"
      "1 >>  2":    "1 >> 2;"
      "1 >>> 2":    "1 >>> 2;"
      "1 ==  2":    "1 === 2;"
      "1 !=  2":    "1 !== 2;"
      "1 <   2":    "1 < 2;"
      "1 >   2":    "1 > 2;"
      "1 <=  2":    "1 <= 2;"
      "1 >=  2":    "1 >= 2;"

      "1 &&   2":   "1 && 2;"
      "1 ||   2":   "1 || 2;"
      "1 &    2":   "1 & 2;"
      "1 |    2":   "1 | 2;"
      "1 ^    2":   "1 ^ 2;"

      "a ?    b":   "a != null ? a : b;"
      "a.b ?  b":   "let cafTemp; ((cafTemp = a.b) != null ? cafTemp : b);"
      "1 and  2":   "1 && 2;"
      "1 or   2":   "1 || 2;"
      "1 != 2":   "1 !== 2;"
      "1 ==   2":   "1 === 2;"
      "1 in   2":   "Caf.in(1, 2);"
      "a instanceof b": "a instanceof b;"

    precedence:
      "1 +  2 +  3":  "1 + 2 + 3;";
      "1 ** 2 ** 3":  "Caf.pow(1, Caf.pow(2, 3));";
      "1 +  2 *  3":  "1 + 2 * 3;";
      "1 *  2 +  3":  "1 * 2 + 3;";
      "(1 + 2) * 3":  "(1 + 2) * 3;";
      "1 * (2  + 3)": "1 * (2 + 3);";

    regressions:
      "(a-1)/a": "(a - 1) / a;"
      "((a-1)/a)**100": "Caf.pow((a - 1) / a, 100);"

    signedNumberConstantInterference:
      parseAsBinop:
        "1+2":        "1 + 2;"
        "1-2":        "1 - 2;"
        "1+ 2":       "1 + 2;"
        "1- 2":       "1 - 2;"
        "1 + 2":      "1 + 2;"
        "1 - 2":      "1 - 2;"

        "a+2":        "a + 2;"
        "a-2":        "a - 2;"
        "a+ 2":       "a + 2;"
        "a- 2":       "a - 2;"
        "a + 2":      "a + 2;"
        "a - 2":      "a - 2;"

      parsesAsImplicitArray:
        "1 2":       "[1, 2];"
        "1 -2":      "[1, -2];"
        "1 +2":      "[1, +2];"

      parsesAsFunctionInvocation:
        "a 2":       "a(2);"
        "a -2":      "a(-2);"
        "a +2":      "a(+2);"

  unary:
    basic:
      "!true": "!true;"
      "!!true": "!!true;"

      "not true": "!true;"

      "nottrue": "nottrue;"

    tail:
      "foo?": "foo != null;"

  multilineBinary:

    newLineAfterOp:
      basic:
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
      basic:
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

      mixed:
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

      comments:
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

    block:
      basic:
        """
        foo
          || bar
        """: "foo || bar;"

        """
        foo && bar
          || baz
        """: "foo && (bar || baz);"

      mixed:
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

      precedence:
        """
        foo
          || bar + 2 * 3
        """: "foo || bar + 2 * 3;"

        """
        foo
          || bar * 2 + 3
        """: "foo || bar * 2 + 3;"

      comments:
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

    contrasted:
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

    englishOperators:
      """
      a or b
      and c or d
      """: "(a || b) && (c || d);"

    mixed:
      justOperators:
        simple:
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

        precedence:
          """
          a || b
          && c || d
          && e || f
          """: "(a || b) && (c || d) && (e || f);"

          """
          a + b
          || c + d
            || e + f
          """: "a + b || c + (d || e + f);"

          """
          a || b
            && c || d
          && e || f
          """: "(a || b && (c || d)) && (e || f);"

          """
          a || b
            && c || d
            && e || f
          """: "a || b && (c || d) && (e || f);"

          """
          a || b && c || d && e || f
          """: "a || b && c || d && e || f;"

      operatorsAndAccess:
        newLineOnly:
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

        mixedMultiline:
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

      withAssignment:
        """
        a && b = c
        """: "let b; a && (b = c);"