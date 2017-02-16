Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class DestructuringIdentifierStn extends require './BaseStn'

  updateScope: (@scope) ->
    @scope.addIdentifierAssigned @labeledChildren.identifier.toJs()
    super

  # TODO: check that etc is only used on the last element of an array destructure - javascript limitations

  toJs: ->
    {identifier, destructuringDefault} = @labeledChildren
    "#{if @props.etc then '...' else ''}#{identifier.toJs()}#{if destructuringDefault then " = #{destructuringDefault.toJsExpression()}" else ""}"
