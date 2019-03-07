{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript
{BaseClass} = Neptune.Art.ClassSystem

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  new:
    basic:
      "new Fud":        "new Fud;"
      "new Foo 1":      "new Foo(1);"
      "new Foo.Bar":    "new (Foo.Bar);"
      "(new Foo).Bar":  "(new Foo).Bar;"

    withSmartRequire:
      basic:
        "new &CaffeineEight":                 "new (require('caffeine-eight'));"
        "new &CaffeineEight 123":             "new (require('caffeine-eight'))(123);"

      withAccessor:
        "new &CaffeineEight.foo":             "new (require('caffeine-eight').foo);"
        "new (&CaffeineEight).foo":           "new (require('caffeine-eight').foo);"

      withParenthesis:
        "new &CaffeineEight().foo":           "(new (require('caffeine-eight'))()).foo;"
        "(new &CaffeineEight).foo":           "(new (require('caffeine-eight'))).foo;"

    regressions:
        """
        new Foo
        .bar
        """:             "(new Foo).bar;"

        "new class FakeSocket": "let FakeSocket; new (FakeSocket = Caf.defClass(class FakeSocket extends Object {}));"

    withThisBase:
      "new @":                  "new this;"
      "new @ props, children":  "new this(props, children);"

    withThisProp:
      "new @foo":                  "new this.foo;"
      "new @foo props, children":  "new this.foo(props, children);"

    withLiteralRequire:
      "new require('caffeine-eight').foo":  '(new require("caffeine-eight")).foo;'
      "new require('caffeine-eight') 123":  'new require("caffeine-eight")(123);'
      "new require 'caffeine-eight' 123":   'new require("caffeine-eight", 123);'
      "new require 'caffeine-eight'":       'new require("caffeine-eight");'

  definition:
    basic:
      "class Foo": "let Foo; Foo = Caf.defClass(class Foo extends Object {});"
      "class Foo extends Bar": "let Foo; Foo = Caf.defClass(class Foo extends Bar {});"

      """
      class Foo
        foo: -> 1
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Object {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype.foo = function() {return 1;};});"

    comments:
      """
      class Foo
        # one line
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Object {});"
      """
      class Foo
        ##
          comment block
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Object {});"

    body:
      """
      class Foo extends Bar
        foo: 1
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype.foo = 1;});"

      """
      class Foo extends Bar
        @foo: 1
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.foo = 1;});"

    withNormalStatemnts:
      """
      class Foo extends Bar
        doSomething()
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {doSomething();});"

    constructors:
      """
      class Foo extends Bar
        constructor: ->
      """: "let Foo; Foo = Caf.defClass(class Foo extends Bar
        {constructor() {super(...arguments);};});"

      """
      class Foo extends Bar
        constructor: (@foo) ->
      """: "
        let Foo; Foo = Caf.defClass(class Foo extends Bar
        {constructor(foo) {super(...arguments); this.foo = foo;};});"

      """
      class Foo extends Bar
        constructor: -> super 123
      """: "let Foo; Foo = Caf.defClass(class Foo extends Bar {constructor() {super(123);};});"

      """
      class Foo extends Bar
        constructor: (@foo) -> super 123
      """: "let Foo; Foo = Caf.defClass(class Foo extends Bar
        {constructor(foo) {super(123); this.foo = foo;};});"

    unusualProps:
      """
      class Foo extends Bar
        a-b: 1
        @a-b: 2
        @foo: 3
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype[\"a-b\"] = 1; this[\"a-b\"] = 2; this.foo = 3;});"

      """
      class Foo extends Bar
        [fooBar()]: 1
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype[fooBar()] = 1;});"

    realworld:
      """
      class Foo extends BaseClass
        @getter
          foo: -> @_foo
      """: "
        let Foo; Foo = Caf.defClass(class Foo extends BaseClass {},
          function(Foo, classSuper, instanceSuper)
            {this.getter({foo:
              function() {return this._foo;}});});"

  regressions:

    # We need a better way of handling class-defs so this compiles and
    # makes sense. Basically, the constructor function needs to be in the
    # same scope as the class-body:
    # 2019: Can we solve this by making the inner function NOT a scope?
    """
    class Foo
      b = []
      constructor: (a = b) ->
    """: knownFailing: "let Foo;
      Foo = (function() {let b; Caf.defClass(class Foo extends Object
        {constructor(a = b) {super(...arguments);};},
        function(Foo, classSuper, instanceSuper) {b = [];}))();"

    """
    class FooWithDot
    .bar
    """: "let FooWithDot; (FooWithDot = Caf.defClass(class FooWithDot extends Object {})).bar;"

  super:
    basics:
      "class MyClassA\n foo: -> super":     "let MyClassA; MyClassA = Caf.defClass(class MyClassA extends Object {}, function(MyClassA, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.apply(this, arguments);};});"
      "class MyClassB\n @foo: -> super":     "let MyClassB; MyClassB = Caf.defClass(class MyClassB extends Object {}, function(MyClassB, classSuper, instanceSuper) {this.foo = function() {return classSuper.foo.apply(this, arguments);};});"
      "class MyClassC\n foo: -> super()":    "let MyClassC; MyClassC = Caf.defClass(class MyClassC extends Object {}, function(MyClassC, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this);};});"
      "class MyClassD\n foo: -> super 1":    "let MyClassD; MyClassD = Caf.defClass(class MyClassD extends Object {}, function(MyClassD, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this, 1);};});"
      "class MyClassE\n foo: -> super 1 2":  "let MyClassE; MyClassE = Caf.defClass(class MyClassE extends Object {}, function(MyClassE, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this, 1, 2);};});"
      "class MyClassF\n foo: -> superFoo":   "let MyClassF; MyClassF = Caf.defClass(class MyClassF extends Object {}, function(MyClassF, classSuper, instanceSuper) {this.prototype.foo = function() {return superFoo;};});"

    complex:
      """
      class CaffeineScriptParser

        parse: ->
          super foo 1

      """: "let CaffeineScriptParser;
        CaffeineScriptParser =
        Caf.defClass(class CaffeineScriptParser extends Object {},
        function(CaffeineScriptParser, classSuper, instanceSuper)
        {this.prototype.parse = function() {return instanceSuper.parse.call(this, foo(1));};});"

    constructors:
      """
      class A
        constructor: (@foo) ->
      """: "
        let A;
        A = Caf.defClass(class A extends Object
        {constructor(foo) {super(...arguments); this.foo = foo;};});"

      """
      class B
        constructor: (@foo) ->
          @bar = null
      """: "
        let B;
        B = Caf.defClass(class B extends Object
        {constructor(foo) {super(...arguments); this.foo = foo; this.bar = null;};});"

      """
      class C
        constructor: ->
          @foo = 1
      """: "
        let C;
        C = Caf.defClass(class C extends Object
        {constructor() {super(...arguments); this.foo = 1;};});"


      """
      class D
        constructor: ->
          foo = 1
      """: "
        let D;
        D = Caf.defClass(class D extends Object
        {constructor() {let foo; super(...arguments); foo = 1;};});"

      # """
      # class A
      #   constructor: (a)->
      #     if a > 0
      #       super 1
      #     else
      #       super 2
      # """: "
      #   let A;
      #   A = Caf.defClass(class A extends Object
      #   {constructor() {super(...arguments); this.foo = 1;};});"

    regressions:
      """
      class A
        constructor: ->
          class B
            constructor: -> super 123
      """: "
        let A;
        A = Caf.defClass(class A extends Object
        {constructor() {let B; super(...arguments);
        B = Caf.defClass(class B extends Object {constructor() {super(123);};});};});"

      """
      class C
        constructor: (@foo) ->
          bar()
          super
      """: "
        let C; C = Caf.defClass(class C extends Object {constructor(foo) {bar(); super(...arguments); this.foo = foo;};});
        "

      """
      class Foo
        render: ->
          super
            if true then 123
      """: "
        let Foo;
        Foo = Caf.defClass(class Foo extends Object {},
        function(Foo, classSuper, instanceSuper)
        {this.prototype.render = function()
        {return instanceSuper.render.call(this, true ? 123 : undefined);};});
        "

      """
      class Foo extends Bar || Baz
      """: "let Foo; Foo = Caf.defClass(class Foo extends (Bar || Baz) {});"
