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
        function()
          {this.prototype.foo = function() {return 1;};
          return this;});"

    body:
      """
      class Foo extends Bar
        foo: 1
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function()
          {this.prototype.foo = 1;
          return this;});"

      """
      class Foo extends Bar
        @foo: 1
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function()
          {this.foo = 1;
          return this;});"

    withNormalStatemnts:
      """
      class Foo extends Bar
        doSomething()
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function()
          {doSomething();
          return this;});"

    super:
      """
      class Foo extends Bar
        foo: -> super
      """: "Foo = Caf.defClass(class Foo extends Bar {},
        function() {this.prototype.foo = function() {return Caf.getSuper().foo.apply(this, arguments);}; return this;});"

      """
      class Foo extends Bar
        constructor: -> super
      """: "Foo = Caf.defClass(class Foo extends Bar {},
        function() {this.prototype.constructor = function() {return Caf.getSuper().constructor.apply(this, arguments);}; return this;});"

      "foo: -> super":    "({foo: function() {return Caf.getSuper().foo.apply(this, arguments);}});"
      "foo: -> super()":    "({foo: function() {return Caf.getSuper().foo.call(this);}});"
      "@foo: -> super":   '({"@foo": function() {return Caf.getSuper().foo.apply(this, arguments);}});'
      "foo: -> super 1":  "({foo: function() {return Caf.getSuper().foo.call(this, 1);}});"


    unusualProps:
      """
      class Foo extends Bar
        a-b: 1
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function()
          {this.prototype[\"a-b\"] = 1;
        return this;});"

      """
      class Foo extends Bar
        [fooBar()]: 1
      """: "Foo =
        Caf.defClass(class Foo extends Bar {},
        function()
          {this.prototype[fooBar()] = 1;
        return this;});"

    realworld:
      """
      class Foo extends BaseObject
        @getter
          foo: -> @_foo
      """: "
        Foo = Caf.defClass(class Foo extends BaseObject {},
          function()
            {this.getter({foo:
              function() {return this._foo;}});
            return this;});"
