Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation

defineModule module, class FunctionInvocationStn extends require './BaseStn'

  constructor: (props, [@value, @args...]) ->
    # collapse implicit arrays into parents
    if @args.length == 1 && @args[0].props.implicitArray
      @args = @args[0].children
    super

  needsParens: false

  toJs: ->
    invocationJs = "#{valueJs = @value.toJsExpression()}#{@applyRequiredParens (a.toJsExpression() for a in @args).join ', '}"
    if @parseTreeNode.conditional
      "Caf.isF(#{valueJs}) && #{invocationJs}"
    else
      invocationJs

