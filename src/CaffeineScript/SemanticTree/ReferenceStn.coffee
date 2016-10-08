Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class ReferenceStn extends require './BaseStn'

  updateScope: (@scope) ->
    @scope.addIdentifierUsed @toJs()
    super

  needsParens: false
  toJs: ->
    @labeledChildren.identifier.toJs()