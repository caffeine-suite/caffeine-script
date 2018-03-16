{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite

  basic:
    "{}"          : "({});"
    "{a:1}"       : "({a: 1});"
    "{a:1, b:2}"  : "({a: 1, b: 2});"
    "1: 2"        : "({1: 2});"

  computedKeys:
    "{[a]:1}"     : "({[a]: 1});"
    "[a]:1"       : "({[a]: 1});"
    "[a] : 1"     : "({[a]: 1});"
    '"#{a}" : 1'  : "({[`${Caf.toString(a)}`]: 1});"
    """
    b: 1
    [a]:2
    """           : "({b: 1, [a]: 2});"
    """
    b: 1 [a]:2
    """           : "({b: 1, [a]: 2});"

  parseFailures:
    """
    a:
    """: null
    # TODO: fail nicer:
    # """
    # a:
    #   # foo
    # """: null

  colonDisambiguation:
    "a  :1":    'a("1");'
    "a:  1":    "({a: 1});"
    "a : 1":    "({a: 1});"
    "a:\n  1":  "({a: 1});"


  unusualKeys:
    explicitObjects:
      "{0:1}"       : '({0: 1});'
      "{10:1}"      : '({10: 1});'
      "{1.0:1}"     : '({"1.0": 1});'
      "{1.1:1}"     : '({"1.1": 1});'
      "{01:1}"      : '({"01": 1});'
      "{-1:1}"      : '({"-1": 1});'
      "{0a:1}"      : '({"0a": 1});'
      "{a.b:1}"     : '({"a.b": 1});'
      "{a-b:1}"     : '({"a-b": 1});'
      "{a-b:1}"     : '({"a-b": 1});'
      "{2d:1}"      : '({"2d": 1});'

    implicitObjects:
      "2d: 1":   '({"2d": 1});'
      "a.b:1":   '({"a.b": 1});'
      "-:1":     '({"-": 1});'
      "*:1":     '({"*": 1});'
      "/:1":     '({"/": 1});'
      "+:1":     '({"+": 1});'
      "?:1":     '({"?": 1});'
      "%:1":     '({"%": 1});'

    regressions:
      """
      #f00: 1
      """: '({"#f00": 1});'

      """
      a:
        #f00: 1
      """: '({a: {"#f00": 1}});'

      "a:-b": "({a: -b});"

      """
      foo: 1 if bar
      """: "if (bar) {{foo: 1};};"

      """
      foo: 1 if bar
      baz: 2
      """: "if (bar) {{foo: 1};}; ({baz: 2});"


      """
      baz: 2
      foo: 1 if bar
      """: null
        ###
        NOTE: this could reasonably be interpreted as:
          if bar
            baz: 2
            foo: 1

        All we need to do is let lineStartExpression be followed by a tailControlOperator.
        Further note, this is how we already interpret this:

          if foo
            1
          else 2 if baz

          # interpreted as
          if bax
            if foo
              1
            else
              2

        BUT - coffeeScript finally go it right, and I want it right, too:

          a: b if c
          d: 1
          e: f if g

        should be

          ({
            a: c ? b : void 0,
            e: g ? f : void 0
          });

        ###
      """
      foo:
        bar
        /1/
      """:"({foo: [bar, /1/]});"


    quotedKeys:
      "{'hi mom':1}": '({"hi mom": 1});'
      "'hi mom':1":   '({"hi mom": 1});'

  toEol:
    "{} a:1"       : "({a: 1});"
    "{} a:1, b:2"  : "({a: 1, b: 2});"

  toEolNesting:
    "{} a: {} b:2"      : "({a: {b: 2}});"
    "{} a:\n {} b:2"    : "({a: {b: 2}});"
    "{} a:\n {}\n b:2"  : "({a: [{}, {b: 2}]});"

  explicitBlock:
    "{}\n a:1"        : "({a: 1});"
    "{}\n a:1\n b:2"  : "({a: 1, b: 2});"
    """
    {}
      # comment on first line
      a: 1
    """: "({a: 1});"

  implicit:
    basic:
      "a:1"           : "({a: 1});"

    oneLine:
      "a:1, b:2"      : "({a: 1, b: 2});"
      "a:1 + 2, b:2"  : "({a: 1 + 2, b: 2});"
      "a: 1 b: 2"     : "({a: 1, b: 2});"

    multiline:
      "a:1\nb:2"      : "({a: 1, b: 2});"

      """
      a: 1 # comment
      c: 2
      """: '({a: 1, c: 2});'

    both:
      """
      a:1, b:2
      c:3, d:4
      """: "({a: 1, b: 2}); ({c: 3, d: 4});"

      """
      a:1
      b:3, c:4
      """: "({a: 1}); ({b: 3, c: 4});"

    nesting:
      """
      a: b: 1
      c: 2
      """: '({a: {b: 1}, c: 2});'

      """
      a: b: 1 d: 3
      c: 2
      """: '({a: {b: 1, d: 3}, c: 2});'

      """
      a: b: 1 d: 3
      """: '({a: {b: 1, d: 3}});'

      """
      c: 2
      a: b: 1
      """: '({c: 2, a: {b: 1}});'


  withExplicitArrays:
    "a: []":      "({a: []});"
    "b: [1, 2]":  "({b: [1, 2]});"
    "c: [] 3, 4": "({c: [3, 4]});"
    """
    d: []
      5
      6
    """: "({d: [5, 6]});"

  withExpressions:
    "d: 1 + 2": "({d: 1 + 2});"
    "d: a b":   "({d: a(b)});"

  withImplicitArrays:
    "d: 5, 6": "({d: [5, 6]});"
    "d: 5 6":  "({d: [5, 6]});"

    """
    a: :shut :the :frell :up
    b: :dude :this :== :cool
    """: '({a: ["shut", "the", "frell", "up"], b: ["dude", "this", "==", "cool"]});'

  # this == a narrow feature we don't need yet
  # withDiplicatPropNames:
  #     """
  #     a =
  #       foo: 1
  #       foo: 10
  #     """: 'let a; a = [{foo: 1}, {foo: 10}]'

  #     """
  #     []
  #       foo: 1
  #       foo: 10
  #     """: '[{foo: 1}, {foo: 10}]'

  optionalCommas:
    "{a:1} {b:2}":    "[{a: 1}, {b: 2}];"
    "c {a:1} {b:2}":  "c({a: 1}, {b: 2});"

  withBlockValues:
    """
    a:
      1
    """: "({a: 1});"

    """
    a:
      ## first line comment
      1
    """: "({a: 1});"

    """
    a:
      1
      2
      3
    b:
      1
    """: "({a: [1, 2, 3], b: 1});"

    """
    a:
      1 2 3
      4 5 6
      7 8 9
    """: "({a: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]});"

    """
    match:
      pattern: :blah   action:  :boring
      pattern: :zoom   action:  :fast
    """: '
      ({match:
        [{pattern: "blah", action: "boring"},
        {pattern: "zoom", action: "fast"}]});'

  regressions:
    """
    b =
      # comment here
      a: 1
    """: "let b; b = {a: 1};"

  withTailControl:
    """
    foo: if bar then a: 1
    bar: 999
    """: "({foo: bar ? {a: 1} : undefined, bar: 999});"

    """
    bar: 999
    foo: if bar then a: 1
    """: "({bar: 999, foo: bar ? {a: 1} : undefined});"

