{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../Helper'

module.exports = suite:

  definition: ->
    parseTests
      "class Foo": "class Foo {};"
      "class Foo extends Bar": "class Foo extends Bar {};"
      """
      class Foo extends Bar
        foo: 123
      """: ""