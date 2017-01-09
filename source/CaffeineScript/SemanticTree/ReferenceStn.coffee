Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class ReferenceStn extends require './BaseStn'

  updateScope: (@scope) ->
    if @props.identifierHandle
      @scope.addUniqueIdentifierHandle @props.identifierHandle
    else
      @scope.addIdentifierUsed @toJs()
    super

  @getter
    isReference: -> true

  needsParens: false
  toJs: ->
    @props.identifierHandle?.identifier ||
    @labeledChildren.identifier.toJs()