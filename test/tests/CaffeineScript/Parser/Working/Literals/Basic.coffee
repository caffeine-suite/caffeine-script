{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.Foundation
{Parser} = CaffeineScript

{parseTests} = require '../../../Helper'

module.exports = suite:
  keywordValues: ->
    parseTests
      "true": "true;"
      "yes":  "true;"
      "on":   "true;"

      "false":  "false;"
      "no":     "false;"
      "off":    "false;"
