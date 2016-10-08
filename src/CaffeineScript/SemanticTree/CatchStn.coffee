Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class CatchStn extends require './BaseStn'

  updateScope: (@scope) ->
    if id = @labeledChildren.identifier
      @scope.addIdentifierAssigned id.name
    super

  toJs: (options = {}) ->
    {returnExpression} = options
    {identifier, body} = @labeledChildren
    body = body && if returnExpression then body.toFunctionBodyJs() else body.toJs()
    if identifier
      tempName = @getUnusedVariableName "error"
      body = compactFlatten(["#{identifier.name} = #{tempName}", body]).join '; '
      "catch (#{tempName}) {#{body}}"
