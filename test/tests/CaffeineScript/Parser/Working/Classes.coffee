{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTestSuite} = require '../../Helper'

module.exports = suite: parseTestSuite

  new:
    basic:
      "new Foo": "new Foo;"
      "new Foo 1": "new Foo(1);"
      "new Foo.Bar": "new Foo.Bar;"

  definition:
    basic:
      "class Foo": "Foo = Caf.defClass(class Foo {});"
      "class Foo extends Bar": "Foo = Caf.defClass(class Foo extends Bar {});"

      """
      class Foo
        foo: -> 1
      """: "Foo =
        Caf.defClass(class Foo {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype.foo = function() {return 1;};});"

    comments:
      """
      class Foo
        # one line
      """: "Foo =
        Caf.defClass(class Foo {});"
      """
      class Foo
        ##
          comment block
      """: "Foo =
        Caf.defClass(class Foo {});"

    body:
      """
      class Foo extends Bar
        foo: 1
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype.foo = 1;});"

      """
      class Foo extends Bar
        @foo: 1
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.foo = 1;});"

    withNormalStatemnts:
      """
      class Foo extends Bar
        doSomething()
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {doSomething();});"

    super:
      # """
      # class Foo extends Bar
      #   foo: -> super
      # """: "Foo = Caf.defClass(class Foo extends Bar {},
      #   function() {this.prototype.foo = function() {return Caf.getSuper(this).foo.apply(this, arguments);}; return this;});"

      "class MyClass\n foo: -> super":      "MyClass = Caf.defClass(class MyClass {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.apply(this, arguments);};});"
      "class MyClass\n @foo: -> super":     "MyClass = Caf.defClass(class MyClass {}, function(MyClass, classSuper, instanceSuper) {this.foo = function() {return classSuper.foo.apply(this, arguments);};});"
      "class MyClass\n foo: -> super()":    "MyClass = Caf.defClass(class MyClass {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this);};});"
      "class MyClass\n foo: -> super 1":    "MyClass = Caf.defClass(class MyClass {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this, 1);};});"
      "class MyClass\n foo: -> super 1 2":  "MyClass = Caf.defClass(class MyClass {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return instanceSuper.foo.call(this, 1, 2);};});"
      "class MyClass\n foo: -> superFoo":   "MyClass = Caf.defClass(class MyClass {}, function(MyClass, classSuper, instanceSuper) {this.prototype.foo = function() {return superFoo;};});"

    constructors:
      """
      class Foo extends Bar
        constructor: ->
      """: "Foo = Caf.defClass(class Foo extends Bar
        {constructor() {super(...arguments);}});"

      """
      class Foo extends Bar
        constructor: (@foo) ->
      """: "
        Foo = Caf.defClass(class Foo extends Bar
        {constructor(foo) {super(...arguments); this.foo = foo;}});"

      """
      class Foo extends Bar
        constructor: -> super 123
      """: "Foo = Caf.defClass(class Foo extends Bar {constructor() {super(123);}});"

      """
      class Foo extends Bar
        constructor: (@foo) -> super 123
      """: "Foo = Caf.defClass(class Foo extends Bar
        {constructor(foo) {super(123); this.foo = foo;}});"

    unusualProps:
      """
      class Foo extends Bar
        a-b: 1
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype[\"a-b\"] = 1;});"

      """
      class Foo extends Bar
        [fooBar()]: 1
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function(Foo, classSuper, instanceSuper)
          {this.prototype[fooBar()] = 1;});"

    realworld:
      """
      class Foo extends BaseObject
        @getter
          foo: -> @_foo
      """: "
        Foo = Caf.defClass(class Foo extends BaseObject {},
          function(Foo, classSuper, instanceSuper)
            {this.getter({foo:
              function() {return this._foo;}});});"
