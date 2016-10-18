{a, m, w, log, formattedInspect, escapeJavascriptString, createObjectTreeFactory} = require "art-foundation"

dqStringStartRegexp = /// " ( [^\\"\#] | \\[\s\S] | \#(?!\{) )* ///
{StringStn, InterpolatedStringStn} =  require '../SemanticTree'

normalizeString = (string) ->
  string = escapeJavascriptString string.toString().trim()
  string = string.replace /\\\\/g, "\\"
  string = string.replace /\\ /g, " "

{escapeNewLines, escapeUnEscapedQuotes, deescapeSpaces} = require '../Lib'

normalizeHereDoc = (hereDoc) ->
  [all, firstLine, rest] = hereDoc.match /^([^\n]*)(?=\n|$)((?:.|\n)*)/

  return firstLine if !rest || rest.length == 0

  indents = rest.match /\n *(?=[^ \n])/g

  if indents?.length > 0
    minIndent = null
    for i in indents
      len = i.length - 1
      minIndent = len if !minIndent? || len < minIndent
    rest = rest.replace ///\n\ {#{minIndent}}///g, "\n"

  rest = rest.replace /^\n/, ''
  unless !firstLine || firstLine?.match /\ */
    rest = firstLine + "\\n" + rest
  rest

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
      getStn: ->
        StringStn value: @unparsedBlock.toString().trim()

  @rule
    stringLiteral: a
      pattern: "hereDocDqStringStart mid:hereDocDqStringMiddle interpolation:hereDocDqStringInterpolation? hereDoc:hereDocDqStringEnd"
      m pattern: "hereDocSqStringStart mid:hereDocSqStringMiddle interpolation:hereDocSqStringInterpolation? hereDoc:hereDocSqStringEnd"
      m pattern: 'eolStringStart mid:eolStringMiddle interpolation:eolStringInterpolation? eolStringEnd'
      m pattern: "dqStringStart mid:dqStringMiddle interpolation:dqStringInterpolation? dqStringEnd"
  ,

    getStnChildren: (appendTo = [])->
      appendTo.push StringStn value: @mid.toString() if @mid.matchLength > 0
      @interpolation?.getStnChildren appendTo
      appendTo

    getStn: ->
      if @hereDoc
        StringStn value: normalizeHereDoc @mid.toString()
      else if @interpolation
        InterpolatedStringStn @getStnChildren()
      else
        StringStn value: @mid.toString()

  @rule

    stringLiteral: a

      pattern:   "/'/ string:/([^\\']|\\.)*/ /'/"
      m pattern: "':' string:unquotedString"
  ,
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