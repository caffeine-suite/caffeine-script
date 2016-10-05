{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../../Helper'

module.exports = suite:

  basic: ->

    parseTests
      "123": "123;"

      """
      123

      """: "123;"

      """
      123
      456
      """: "123; 456;"

      """
      123
      [456]
      """: "123; [456];"

      """
      123;456
      """: "123; 456;"
