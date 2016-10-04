Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class DotAccessorStn extends require './BaseStn'

  toJs: ->
    ".#{@children[0].toJs()}"
