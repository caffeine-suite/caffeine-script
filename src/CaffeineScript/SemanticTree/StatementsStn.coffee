Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class StatementsStn extends require './BaseStn'

  toJs: ->
    (c.toJsStatement() for c in @children).join("; ") + ";"

  toFunctionBodyJs: ->
    (for c, i in lines = @children
      if i < lines.length - 1
        c.toJsStatement()
      else
        "return #{c.toJsExpression skipParens: true}"
    ).join("; ") + ";"

  toJsParenExpression: ->
    @applyRequiredParens (c.toJsStatement() for c in @children).join(", ")
