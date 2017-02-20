Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class GlobalIdentifierStn extends require './BaseStn'

  needsParens: false

  toJs: -> @props.identifier
