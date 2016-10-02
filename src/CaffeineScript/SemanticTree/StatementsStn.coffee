Foundation = require 'art-foundation'
{escapeUnEscapedQuotes, escapeNewLines} = require '../Lib'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class StatementsStn extends require './BaseStn'

  toJs: ->
    (c.toJsStatement() for c in @children).join("; ") + ";"