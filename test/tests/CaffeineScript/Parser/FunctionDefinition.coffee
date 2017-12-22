{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTestSuite, illegalSyntaxTests} = require '../Helper'

module.exports = suite: parseTestSuite
  unbound:
    "-> 321"             : "(function() {return 321;});"
    "~> 321"             : "(function() {return 321;});"
    "(foo) -> 321"       : "(function(foo) {return 321;});"
    "(foo, bar) -> 321"  : "(function(foo, bar) {return 321;});"
    "->\n  321"          : "(function() {return 321;});"
    "->\n  321\n  456"   : "(function() {321; return 456;});"
    "->\n  321\n\n  456" : "(function() {321; return 456;});"

  auto:
    inFunction:
      "-> ~> 321": "(function() {return function() {return 321;};});"
      "-> -> 321": "(function() {return () => {return 321;};});"
      "-> => 321": "(function() {return () => {return 321;};});"

    inClass:
      "class Foo\n  foo: ~> 123": "let Foo; Foo = Caf.defClass(class Foo extends Object {}, function(Foo, classSuper, instanceSuper) {this.prototype.foo = function() {return 123;};});"
      "class Foo\n  foo: => 123": "let Foo; Foo = Caf.defClass(class Foo extends Object {}, function(Foo, classSuper, instanceSuper) {this.prototype.foo = () => {return 123;};});"
      "class Foo\n  foo: -> 123": "let Foo; Foo = Caf.defClass(class Foo extends Object {}, function(Foo, classSuper, instanceSuper) {this.prototype.foo = function() {return 123;};});"

  dontMissParse:
    "foo -> 321"         : "foo(function() {return 321;});"
    "foo => 321"         : "foo(() => {return 321;});"

  bound:
    "=>"                 : "() => {};"
    "=> 321"             : "() => {return 321;};"
    "(foo) => 321"       : "(foo) => {return 321;};"
    "(foo, bar) => 321"  : "(foo, bar) => {return 321;};"
    "=>\n  321"          : "() => {return 321;};"
    "=>\n  321\n  456"   : "() => {321; return 456;};"
    "=>\n  321\n\n  456" : "() => {321; return 456;};"

  splatsRest:
    "(a...) =>":      "(...a) => {};"
    "(b, a...) =>":   "(b, ...a) => {};"

  # illegalSyntaxTests:
  #   "(b..., a) =>": knownFailing: null

  blankLine:
    """
    (a) ->

      a
    """: "(function(a) {return a;});"

  defaultArguments:
    "(a = 1) =>":         "(a = 1) => {};"
    "(a, b = 1) =>":      "(a, b = 1) => {};"
    "(a = 1, b) =>":      "(a = 1, b) => {};"
    "(a = 1, b = 2) =>":  "(a = 1, b = 2) => {};"

  thisAssignmentInArguments:
    "(@foo) =>":          "(foo) => {this.foo = foo;};"
    "(@foo) => foo + 1":  "(foo) => {this.foo = foo; return foo + 1;};"
    "(@foo = 123) =>":    "(foo = 123) => {this.foo = foo;};"
    "(@foo...) =>":       "(...foo) => {this.foo = foo;};"
    "(@foo, @bar) =>":    "(foo, bar) => {this.foo = foo; this.bar = bar;};"

  oneliners:
    onestatement:
      "-> 1":                 "(function() {return 1;});"
      "-> a b":               "(function() {return a(b);});"
      "-> a(); 2":            "(function() {a(); return 2;});"

    comments:
      "-> 1 # with comment":                "(function() {return 1;});"
      "-> 1 ##\n with comment":             "(function() {return 1;});"
      "-> 1   ;   2    ##\n with comment":  "(function() {1; return 2;});"

    insideParens:
      "(-> 1)":       "(function() {return 1;});"
      # "(-> (~> 1))":  "(function() {return function() {return 1;};});"

    multistatement:
      "-> 1; 2":      "(function() {1; return 2;});"

    regressions:
      """
      a: ~> b: 1
      c: 2
      """: "({a: function() {return {b: 1};}, c: 2});"

  argDestructuring:
    basic:
      "({a}) =>":       "({a}) => {};"
      "({a: b}) =>":    "({a: b}) => {};"
      "({a, b}) =>":    "({a, b}) => {};"

      "([a]) =>":       "([a]) => {};"
      "([a, b]) =>":    "([a, b]) => {};"

      "([a...]) =>":    "([...a]) => {};"
      "([a, b...]) =>": "([a, ...b]) => {};"

      "({a} = foo) =>": "({a} = foo) => {};"

    nesting:
      "([[a]]) =>":       "([[a]]) => {};"
      "([{a}]) =>":       "([{a}]) => {};"

      "({a:[b]}) =>":     "({a: [b]}) => {};"
      "({a:{b}}) =>":     "({a: {b}}) => {};"

    # TODO: these actually do fail, but now with Structuring, they fail POORLY - need to improve, then re-enable these tests.
    # NOTE: these tests are CORRECT, and they are TECHNICALY PASSING, but they actually cause test-suite-failures.
    # illegalNesting:
    #   "({[a]}) =>":       null
    #   "({{a}}) =>":       null

    scope:
      "({a}) => b = a": "({a}) => {let b; return b = a;};"

    regressions:
      "({a}) -> a = a + 1": "(function({a}) {return a = a + 1;});"

  regressions:
    """
    ->
      (c) -> @b c
    """: "(function() {return (c) => {return this.b(c);};});"

