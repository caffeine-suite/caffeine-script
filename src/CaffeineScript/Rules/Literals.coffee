{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"
{SimpleLiteralStn} =  require '../SemanticTree'

module.exports = ->
  @rule
    literal: w "boolLiteral numberLiteral stringLiteral"

  @rule
    boolLiteral:   w "true false"
    numberLiteral: pattern: /-?[0-9]+/

    true:   pattern: "/(true|yes|on)(?![a-zA-Z0-9]+)/",   toJs: -> "true"
    false:  pattern: "/(false|no|off)(?![a-zA-Z0-9]+)/",  toJs: -> "false"
  ,
    getStn: ->
      SimpleLiteralStn value: @toJs()
