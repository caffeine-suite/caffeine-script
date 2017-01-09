Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class IdentiferStn extends require './BaseStn'

  @getter
    name: -> @props.identifier
    isIdentifier: -> true

  updateScope: (@scope) ->
    if @props.identifierHandle
      @scope.addUniqueIdentifierHandle @props.identifierHandle
    super

  needsParens: false
  toJs: -> (@props.identifierHandle || @props).identifier