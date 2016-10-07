Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class SuperStn extends require './BaseStn'

  constructor: (props, @args) ->
    # collapse implicit arrays into parents
    if @args.length == 1 && @args[0].props.implicitArray
      @args = @args[0].children
    super

  needsParens: false

  toJs: ->
    "Caf.getSuper().TODO.call#{@applyRequiredParens ['this'].concat((a.toJsExpression() for a in @args)).join ', '}"
