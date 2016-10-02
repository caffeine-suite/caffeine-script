{a, m, w, log, formattedInspect, escapeJavascriptString, createObjectTreeFactory} = require "art-foundation"

dqStringStartRegexp = /// " ( [^\\"\#] | \\[\s\S] | \#(?!\{) )* ///
{StringStn, InterpolatedStringStn} =  require '../SemanticTree'

normalizeString = (string) ->
  string = escapeJavascriptString string.toString().trim()
  string = string.replace /\\\\/g, "\\"
  string = string.replace /\\ /g, " "

deescapeSpaces = (string) ->
  string.replace /\\ /g, ' '

{escapeNewLines, escapeUnEscapedQuotes} = require '../Lib'

###
Notes:

  1) generate ES6 interpolations: `foo#{bar}`
  2) unparsedBlock needs to be interpolated (create a new block-type that starts the sub-parse on rule: stringBlock)
  3) "" EOL needs interpolation
  4) """ and ''' need interpolation
###
module.exports = ->

  @rule
    stringLiteral: a
      pattern: '/"" */ unparsedBlock'
      toJs: -> normalizeString @unparsedBlock

  @rule
    stringLiteral: a
      pattern: "hereDocDqStringStart mid:hereDocDqStringMiddle interpolation:hereDocDqStringInterpolation? hereDoc:hereDocDqStringEnd"
      m pattern: "hereDocSqStringStart mid:hereDocSqStringMiddle interpolation:hereDocSqStringInterpolation? hereDoc:hereDocSqStringEnd"
      m pattern: 'eolStringStart mid:eolStringMiddle interpolation:eolStringInterpolation? eolStringEnd'
      m pattern: "dqStringStart mid:dqStringMiddle interpolation:dqStringInterpolation? dqStringEnd"
  ,
    toJs: ->
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

    getStnChildren: (appendTo = [])->
      appendTo.push StringStn value: @mid.toString() if @mid.matchLength > 0
      @interpolation?.getStnChildren appendTo
      appendTo

    getStn: ->
      if @interpolation
        InterpolatedStringStn @getStnChildren()
      else
        StringStn value: @mid.toString()

  @rule

    stringLiteral: a

      pattern:   "/'/ string:/([^\\']|\\.)*/ /'/", toJs: -> escapeNewLines @toString()

      m pattern: "':' string:unquotedString",
  ,
    toJs: -> "'#{escapeNewLines @string.toString()}'"
    getStn: -> StringStn value: @string.toString()

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
    dqStringInterpolation: "interpolationStart expression interpolationEnd mid:dqStringMiddle interpolation:dqStringInterpolation?"
    eolStringInterpolation: "interpolationStart expression interpolationEnd mid:eolStringMiddle interpolation:eolStringInterpolation?"
    hereDocDqStringInterpolation: "interpolationStart expression interpolationEnd mid:hearDocDqStringMiddle interpolation:hearDocDqStringInterpolation?"
    hereDocSqStringInterpolation: "interpolationStart expression interpolationEnd mid:hearDocDqStringMiddle interpolation:hearDocDqStringInterpolation?"
  ,
    toJs: -> "${#{@expression.toJs()}}#{@mid.toEscapedBackTicks()}#{@interpolation?.toJs() || ''}"
    getStnChildren: (appendTo = [])->
      appendTo.push @expression.getStn()
      appendTo.push StringStn value: @mid.toString() if @mid.matchLength > 0
      @interpolation?.getStnChildren appendTo
      appendTo

  @rule
    hereDocDqStringEnd: /(\n *)?"""/
    hereDocSqStringEnd: /(\n *)?'''/
    dqStringEnd: /"/
    eolStringEnd: / *(?=\n|$)/