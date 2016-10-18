Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class IdentiferStn extends require './BaseStn'

  @getter name: -> @props.identifier

  needsParens: false
  toJs: -> @props.identifier