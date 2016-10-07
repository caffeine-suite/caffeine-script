{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:

  definition:
    basic: ->
      parseTests
        "class Foo": "Foo = Caf.defClass(class Foo {});"
        "class Foo extends Bar": "Foo = Caf.defClass(class Foo extends Bar {});"

    body: ->
      parseTests
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

    withNormalStatemnts: ->
      parseTests
        """
        class Foo extends Bar
          doSomething()
        """: "Foo =
          Caf.defClass(class Foo extends Bar {},
          function()
            {doSomething();
            return this;});"

    unusualProps: ->
      parseTests
        """
        class Foo extends Bar
          a-b: 1
        """: "Foo =
          Caf.defClass(class Foo extends Bar {},
          function()
            {this.prototype[\"a-b\"] = 1;
          return this;});"

      parseTests
        """
        class Foo extends Bar
          [fooBar()]: 1
        """: "Foo =
          Caf.defClass(class Foo extends Bar {},
          function()
            {this.prototype[fooBar()] = 1;
          return this;});"

    realworld: ->
      parseTests
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
