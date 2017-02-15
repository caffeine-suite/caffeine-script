Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class StatementsStn extends require './BaseStn'

  toJs: ->
    @getChildrenStatementsJsArray().join "; "

  toFunctionBodyJs: ->
    @getChildrenStatementsJsArray(true).join "; "

  getChildrenStatementsJsArray: (lastIsExpression = false, useReturn = true)->
    for c, i in lines = @children
      if lastIsExpression && i == lines.length - 1
        if useReturn && !c.jsExpressionUsesReturn
          "return #{c.toJsExpression()}"
        else c.toJsExpression()
      else
        if (statement = c.toJsStatement()).match /^function/
          @applyRequiredParens statement
        else
          statement

  toJsParenExpression: ->
    if @children.length == 1
      @children[0].toJsParenExpression()
    else
      @applyRequiredParens (@getChildrenStatementsJsArray(true, false)).join(", ")

