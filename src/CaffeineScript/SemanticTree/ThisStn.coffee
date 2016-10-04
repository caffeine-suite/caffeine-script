Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class ThisStn extends require './BaseStn'

  toJs: ->
    if @children[0]
      "this.#{@children[0].toJs()}"
    else
      "this"
