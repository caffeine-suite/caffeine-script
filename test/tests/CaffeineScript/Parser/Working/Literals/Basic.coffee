{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests} = require '../../../Helper'

module.exports = suite:
  keywordValues: ->
    parseTests
      "true": "true;"
      "yes":  "true;"
      "on":   "true;"
      "null": "null;"

      "false":  "false;"
      "no":     "false;"
      "off":    "false;"
