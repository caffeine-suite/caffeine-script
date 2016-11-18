Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class CatchStn extends require './BaseStn'

  updateScope: (@scope) ->
    if id = @labeledChildren.identifier
      @uniqueIdentifierHandle = @scope.getUniqueIdentifierHandle "error"
      @scope.addIdentifierAssigned id.name
      @scope.addIdentifierUsed id.name
    super

  toJs: (options = {}) ->
    {returnExpression} = options
    {identifier, body} = @labeledChildren
    body = body && if returnExpression then body.toFunctionBodyJs() else body.toJs()
    if identifier
      tempName = @uniqueIdentifierHandle.identifier
      body = compactFlatten(["#{identifier.name} = #{tempName}", body]).join '; '
      "catch (#{tempName}) {#{body};}"
