{a, m, w, log, formattedInspect, escapeJavascriptString} = require "art-foundation"
{Extensions} = require 'babel-bridge'
{getPropsToMatchBlock} = Extensions.IndentBlocks
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
        ###
        scan statements:

        if its just one object literal
        and all values are functions
        then do a "normal" class def.

        Otherwise, do an advanced
        ###
        log statements: matches = @block.find "multiLineStatement"
        log simplifiedStatements: (m.simplifiedInspectedObjects for m in matches)

        "{#{@block.toJs()}}"
      else
        "{}"

  # classBlock: getPropsToMatchBlock rule: "classBlockInternals"

  # classBlockInternals: "classDefinitionLine*"

  # classDefinitionLine: w "prototypePropDefinition multiLineStatement blankLine"

  # prototypePropDefinition:

  _extendsClause:
    pattern: "/ +extends/ _ expressionWithOneLessBlock"
    toJs: -> @expressionWithOneLessBlock.toJs()