{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite
  notSupported:
    "{a+1}": null
    "{} -foo": null

  ObjectLiterals:
    bracketed:
      "{a}":    "({a});"
      "{a, b}": "({a, b});"

    toEol:
      "{} a":    "({a});"
      "{} a, b": "({a, b});"

    block:
      "{}\n a":     "({a});"
      "{}\n a, b":  "({a, b});"
      "{}\n a\n b": "({a, b});"

    smart:
      "{a: a}":     "({a});"
      "{} a: a":    "({a});"
      "{}\n a: a":  "({a});"

    this:
      "{@}":  "({this: this});"
      "{@a}": "({a: this.a});"

    pathing:
      "{a.b}": "({b: a.b});"
      "{a?.b}": "({b: Caf.exists(a) && a.b});"

    requires:
      "{&ArtStandardLib}": "({ArtStandardLib: require('art-standard-lib')});"
      "{&ArtStandardLib/Core}": "({Core: require('art-standard-lib/Core')});"

    assignment:
      "{abc = 123}": "let abc; ({abc: abc = 123});"

    functionInvocation:
      "{abc 123}": "({abc: abc(123)});"

    reservedWords:
      "{true}":       "({true: true});"
      "{true: true}": "({true: true});"
      "{false}":      "({false: false});"

    complex:
      """
      {}
        @a
        b.c
        d
        e: f
      """: "({a: this.a, c: b.c, d, e: f});"

      """
      {}
        (array v from a when a > 10).length
      """: "({length: Caf.array(a, null, (v) => a > 10).length});"

      "{abc.def 123}": "({def: abc.def(123)});"


    mixed:
      """
      {}
        a, b
        c
      """: "({a, b, c});"

    mixed:
      """
      {}
        a: b, c
        c
      """: "({a: [b, c], c});"

      """
      {}
        a: b, c, c: 4
      """: "({a: [b, c], c: 4});"

      """
      {}
        a: b, c, c: 4
        d
      """: "({a: [b, c], c: 4, d});"

    regressions:
      """
      {} &art-standard-lib
      """: '({"art-standard-lib": require(\'art-standard-lib\')});'
