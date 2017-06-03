{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript
{BaseClass} = Neptune.Art.ClassSystem

{parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite

  new:
    basic:
      "new Foo": "new Foo;"
      "new Foo 1": "new Foo(1);"
      "new Foo.Bar": "new Foo.Bar;"

    regressions:
      "new &BabelBridge 123":             knownFailing: "(new require('babel-bridge'))(123)"
      "new BabelBridge 123":              "new BabelBridge(123);"

      "new require('babel-bridge') 123":  knownFailing: "(new require('babel-bridge'))(123)"
      "new require 'babel-bridge' 123":   'new require("babel-bridge", 123);'
      "new require 'babel-bridge'":       'new require("babel-bridge");'

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

    super:
      # """
      # class Foo extends Bar
      #   foo: -> super
      # """: "Foo = Caf.defClass(class Foo extends Bar {},
      #   function() {this.prototype.foo = function() {return Caf.getSuper(this).foo.apply(this, arguments);}; return this;});"

      "class MyClass\n foo: -> super":      "let MyClass; MyClass = Caf.defClass(class MyClass extends Object {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.apply(this, arguments);};});"
      "class MyClass\n @foo: -> super":     "let MyClass; MyClass = Caf.defClass(class MyClass extends Object {}, function(MyClass, classSuper, instanceSuper) {this.foo = function() {return classSuper.foo.apply(this, arguments);};});"
      "class MyClass\n foo: -> super()":    "let MyClass; MyClass = Caf.defClass(class MyClass extends Object {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this);};});"
      "class MyClass\n foo: -> super 1":    "let MyClass; MyClass = Caf.defClass(class MyClass extends Object {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this, 1);};});"
      "class MyClass\n foo: -> super 1 2":  "let MyClass; MyClass = Caf.defClass(class MyClass extends Object {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this, 1, 2);};});"
      "class MyClass\n foo: -> superFoo":   "let MyClass; MyClass = Caf.defClass(class MyClass extends Object {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return superFoo;};});"

    constructors:
      """
      class Foo extends Bar
        constructor: ->
      """: "let Foo; Foo = Caf.defClass(class Foo extends Bar
        {constructor() {super(...arguments);}});"

      """
      class Foo extends Bar
        constructor: (@foo) ->
      """: "
        let Foo; Foo = Caf.defClass(class Foo extends Bar
        {constructor(foo) {super(...arguments); this.foo = foo;}});"

      """
      class Foo extends Bar
        constructor: -> super 123
      """: "let Foo; Foo = Caf.defClass(class Foo extends Bar {constructor() {super(123);}});"

      """
      class Foo extends Bar
        constructor: (@foo) -> super 123
      """: "let Foo; Foo = Caf.defClass(class Foo extends Bar
        {constructor(foo) {super(123); this.foo = foo;}});"

    unusualProps:
      """
      class Foo extends Bar
        a-b: 1
      """: "let Foo; Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype[\"a-b\"] = 1;});"

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
    """
    class Foo
      b = []
      constructor: (a = b) ->
    """: knownFailing: "let Foo;
      Foo = (function() {let b; Caf.defClass(class Foo extends Object
        {constructor(a = b) {super(...arguments);}},
        function(Foo, classSuper, instanceSuper) {b = [];}))();"

    """
    class FooWithDot
    .bar
    """: "let FooWithDot; (FooWithDot = Caf.defClass(class FooWithDot extends Object {})).bar;"
