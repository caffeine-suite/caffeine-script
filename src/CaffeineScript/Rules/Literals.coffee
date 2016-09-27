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

  stringLiteral: a
    pattern: '/"" */ toEolString', toJs: -> normalizeString @toEolString
    m pattern: '/"" */ unparsedBlock', toJs: -> normalizeString @unparsedBlock

    m pattern:   /// ' ( [^\\'] | \\[\s\S] )* ' ///, toJs: -> @toString()
    m
      pattern: "/\"/ dqStringMiddle interpolatedDqStringEnd"
      toJs: -> '"' + @dqStringMiddle.toJs() + @interpolatedDqStringEnd.toJs()
    # m pattern: /// " ( [^\\"\#] | \\[\s\S] |           \#(?!\{) )*" ///
    m pattern: "':' unquotedString", toJs: -> "'#{@unquotedString.toString()}'"
    # /// ( [^\\']  | \\[\s\S] | '(?!'')            )* ///
    # /// ( [^\\"#] | \\[\s\S] | "(?!"") | \#(?!\{) )* ///

  toEolString: /[^\n]+/

  dqStringMiddle: /// ( [^\\"\#] | \\[\s\S] | \#(?!\{) )* ///
  # interpolatedDqStringStart: /// " ( [^\\"\#] | \\[\s\S] | \#(?!\{) )* ///

  interpolationStart: /\#\{/
  interpolationEnd: /\}/
  interpolatedDqStringEnd: a
    pattern: "interpolationStart expression interpolationEnd dqStringMiddle interpolatedDqStringEnd"
    toJs: -> "
      \" +
      (#{@expression.toJs()})#{
        if '"' == endJs = @dqStringMiddle.toJs() + @interpolatedDqStringEnd.toJs()
          ""
        else ' + "' + endJs
      }
      "
    m pattern: /"/

  # interpolatedString a
  #   pattern: