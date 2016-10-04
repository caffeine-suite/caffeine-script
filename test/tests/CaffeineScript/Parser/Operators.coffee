{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:
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
      "a.b ?  b":   "Caf.existsOr(a.b, (()=>{return b})());"
      "1 and  2":   "1 && 2;"
      "1 or   2":   "1 || 2;"
      "1 isnt 2":   "1 !== 2;"
      "1 is   2":   "1 === 2;"
      "1 in   2":   "Caf.in(1, 2);"

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
        """: "(foo = baz.dood(1, 2)) || bar;"

        """
        foo
        || bar
        || baz
        """: "(foo || bar) || baz;"

    withIndent: ->
      parseTests
        """
        foo + bar
        || baz
        """: "(foo + bar) || baz;"

      parseTests
        """
        foo + bar
          || baz
        """: "(foo) || bar;"

      parseTests
        """
        foo + bar
          baz
        """: "foo + bar(baz);"


    invocation: ->
      parseTests
        """
        foo
        (bar)
        """: "(foo)(bar);"

    access: ->
      parseTests
        """
        foo
        .bar
        """: "(foo).bar;"

        """
        foo
        .bar = c
        """: "(foo).bar = c;"

        """
        foo
        .bar().baz = c
        """: "(foo).bar().baz = c;"

        """
        foo
        .bar 1
        """: "(foo).bar(1);"

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
        """: "((foo = baz.dood(1, 2)).then((function() {return 123;}))).catch((function() {return 456;}));"


