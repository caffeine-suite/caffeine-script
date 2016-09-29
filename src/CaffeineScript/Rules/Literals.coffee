{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"

dqStringStartRegexp = /// " ( [^\\"\#] | \\[\s\S] | \#(?!\{) )* ///

normalizeString = (string) ->
  string = escapeJavascriptString string.toString().trim()
  string = string.replace /\\\\/g, "\\"
  string = string.replace /\\ /g, " "

module.exports =
  literal: w "boolLiteral numberLiteral stringLiteral"

  boolLiteral:   w "true false"
  numberLiteral: pattern: /-?[0-9]+/,   toJs: -> @toString()

  true:   pattern: "/(true|yes|on)(?![a-zA-Z0-9]+)/",   toJs: -> "true"
  false:  pattern: "/(false|no|off)(?![a-zA-Z0-9]+)/",  toJs: -> "false"
