Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class TryStn extends require './BaseStn'

  toJs: (options = {})->
    {returnExpression} = options
    {body, optionalCatch} = @labeledChildren
    body = if returnExpression then body.toFunctionBodyJs() else body.toJs();
    optionalCatch = optionalCatch?.toJs(options) || "catch (error) {}"
    "try {#{body}} #{optionalCatch}"

  toJsExpression: ->
    @doJs null, @toJs returnExpression: true

