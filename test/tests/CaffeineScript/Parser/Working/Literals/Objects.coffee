{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../../../Helper'

module.exports = suite: parseTestSuite

  basic:
    "{}"          : "({});"
    "{a:1}"       : "({a: 1});"
    "{a:1, b:2}"  : "({a: 1, b: 2});"

  computedKeys:
    "{[a]:1}"     : "({[a]: 1});"
    "[a]:1"       : "({[a]: 1});"
    "[a] : 1"     : "({[a]: 1});"
    '"#{a}" : 1'  : "({[`${a}`]: 1});"
    """
    b: 1
    [a]:2
    """           : "({b: 1, [a]: 2});"
    """
    b: 1 [a]:2
    """           : "({b: 1, [a]: 2});"

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

    implicitObjects:
      "a.b:1":   '({"a.b": 1});'
      "-:1":     '({"-": 1});'
      "*:1":     '({"*": 1});'
      "/:1":     '({"/": 1});'
      "+:1":     '({"+": 1});'
      "?:1":     '({"?": 1});'
      "%:1":     '({"%": 1});'

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
    b: :dude :this :is :cool
    """: '({a: ["shut", "the", "frell", "up"], b: ["dude", "this", "is", "cool"]});'

  # this is a narrow feature we don't need yet
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
