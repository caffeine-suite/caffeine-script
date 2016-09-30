{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"

dqStringStartRegexp = /// " ( [^\\"\#] | \\[\s\S] | \#(?!\{) )* ///

normalizeString = (string) ->
  string = escapeJavascriptString string.toString().trim()
  string = string.replace /\\\\/g, "\\"
  string = string.replace /\\ /g, " "

module.exports =
  classDefinition:
    pattern: "/class/ _ identifier _extendsClause? block?"
    toJs: ->
      out = "class #{@identifier.toJs()} "
      if @_extendsClause
        out += "extends #{@_extendsClause.toJs()} "
      out + if @block
        "{#{@block.toJs()}}"
      else
        "{}"

  _extendsClause:
    pattern: "/ +extends/ _ expressionWithOneLessBlock"
    toJs: -> @expressionWithOneLessBlock.toJs()