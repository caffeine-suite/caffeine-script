Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class IdentifierStn extends require './BaseStn'

  toJs: -> @parseTreeNode.toString()