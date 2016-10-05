Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class StatementsStn extends require './BaseStn'

  toJs: ->
    @getChildrenStatementsJsArray().join("; ") + ";"

  toFunctionBodyJs: ->
    @getChildrenStatementsJsArray(true).join("; ") + ";"

  getChildrenStatementsJsArray: (lastIsExpression = false)->
    for c, i in lines = @children
      if lastIsExpression && isLast = i == lines.length - 1
        "return #{c.toJsExpression()}"
      else
        if (statement = c.toJsStatement()).match /^function/
          @applyRequiredParens statement
        else
          statement

  toJsParenExpression: ->
    @applyRequiredParens (@getChildrenStatementsJsArray()).join(", ")
