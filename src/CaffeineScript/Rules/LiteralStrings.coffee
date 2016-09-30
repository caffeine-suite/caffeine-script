{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"

dqStringStartRegexp = /// " ( [^\\"\#] | \\[\s\S] | \#(?!\{) )* ///

normalizeString = (string) ->
  string = escapeJavascriptString string.toString().trim()
  string = string.replace /\\\\/g, "\\"
  string = string.replace /\\ /g, " "

deescapeSpaces = (string) ->
  string.replace /\\ /g, ' '

escapeNewLines = (string) -> string.replace /\n/g, "\\n"

escapeUnEscapedQuotes = (string, quote = '"') ->
  string.replace ///
  (
    [^#{quote}\\]*
    (?:
      \\.[^#{quote}\\]*
    )*
  )#{quote}
  ///g, "$1#{quote}"
###
Notes:

  1) generate ES6 interpolations: `foo#{bar}`
  2) unparsedBlock needs to be interpolated (create a new block-type that starts the sub-parse on rule: stringBlock)
  3) "" EOL needs interpolation
  4) """ and ''' need interpolation
###
module.exports = ->

  @rule
    literal: w "boolLiteral numberLiteral stringLiteral"
    stringLiteral:
      pattern: '/"" */ unparsedBlock'
      toJs: -> normalizeString @unparsedBlock


  @rule
    stringLiteral: a
      pattern: "hereDocDqStringStart mid:hereDocDqStringMiddle interpolation:hereDocDqStringInterpolation? hereDoc:hereDocDqStringEnd"
      m pattern: "hereDocSqStringStart mid:hereDocSqStringMiddle interpolation:hereDocSqStringInterpolation? hereDoc:hereDocSqStringEnd"
      m pattern: 'eolStringStart mid:eolStringMiddle interpolation:eolStringInterpolation? eolStringEnd'
      m pattern: "dqStringStart mid:dqStringMiddle interpolation:dqStringInterpolation? dqStringEnd"
  , toJs: ->
      out = if @interpolation
        """
        `#{@mid.toEscapedBackTicks()}#{@interpolation.toJs()}`
        """
      else
        """
        "#{@mid.toEscapedDoubleQuotes()}"
        """
      if @hereDoc
        indents = out.match /\n *(?=\S)*/g
        if indents?.length > 0
          minIndent = null
          for i in indents
            len = i.length - 1
            minIndent = len if !minIndent? || len < minIndent
          out = out.replace ///\n\ {#{minIndent}}///g, "\n"
        out = out.replace /^"\n/, '"'

      escapeNewLines out

  @rule

    stringLiteral: a

      pattern:   /// ' ( [^\\'] | \\. )* ' ///, toJs: -> escapeNewLines @toString()

      m pattern: "':' unquotedString", toJs: -> "'#{@unquotedString.toString()}'"


  @rule
    hereDocDqStringStart: /"""( *(?=\n))?/
    hereDocSqStringStart: /'''( *(?=\n))?/
    eolStringStart: /"" +/
    dqStringStart: /"/

    interpolationStart: /\#\{/
    interpolationEnd: /\}/

  @rule
    eolStringMiddle: /// ( ([\ ]*(?=\S)) | [^\ \n\\#] | \\[^\n] | \#(?!\{) )* ///
    dqStringMiddle:  /// ( [^"\\#] | \\. | \#(?!\{) )* ///
    hereDocDqStringMiddle:  /// ((?!(\n\ *)?""") ( [^\\#] | \\. | \#(?!\{) )) * ///
    hereDocSqStringMiddle:  /// ((?!(\n\ *)?''') ( [^\\#] | \\. | \#(?!\{) )) * ///
  ,
    toEscapedQuotes: (quote) -> deescapeSpaces escapeUnEscapedQuotes @toString(), quote

    toEscapedBackTicks:    -> deescapeSpaces escapeUnEscapedQuotes @toString(), '`'
    toEscapedDoubleQuotes: -> deescapeSpaces escapeUnEscapedQuotes @toString(), '"'

  @rule
    dqStringInterpolation: "interpolationStart expression interpolationEnd mid:dqStringMiddle end:dqStringInterpolation?"
    eolStringInterpolation: "interpolationStart expression interpolationEnd mid:eolStringMiddle end:eolStringInterpolation?"
    hereDocDqStringInterpolation: "interpolationStart expression interpolationEnd mid:hearDocDqStringMiddle end:hearDocDqStringInterpolation?"
    hereDocSqStringInterpolation: "interpolationStart expression interpolationEnd mid:hearDocDqStringMiddle end:hearDocDqStringInterpolation?"
  ,
    toJs: -> "${#{@expression.toJs()}}#{@mid.toEscapedBackTicks()}#{@end?.toJs() || ''}"

  @rule
    hereDocDqStringEnd: /(\n *)?"""/
    hereDocSqStringEnd: /(\n *)?'''/
    dqStringEnd: /"/
    eolStringEnd: / *(?=\n|$)/