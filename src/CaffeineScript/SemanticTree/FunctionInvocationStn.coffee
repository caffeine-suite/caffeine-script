Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation
SemanticTree = require './namespace'

defineModule module, class FunctionInvocationStn extends require './ValueBaseCaptureStn'

  constructor: (props, [@value, @args...]) ->
    # collapse implicit arrays into parents
    if @args.length == 1 && @args[0].props.implicitArray
      @args = @args[0].children
    super
    @props.conditional ||= true if @parseTreeNode?.conditional

  needsParens: false

  @getter
    conditional: -> @props.conditional

  transform: ->
    {BinaryOperatorStn, AccessorStn, IdentifierStn, SimpleLiteralStn, SemanticTokenStn} = SemanticTree

    if @conditional
      {value1, value2} = @getValueWithBaseCapture @value
      if value1 != value2
        return BinaryOperatorStn
          operator: "&&"
          SemanticTree.FunctionInvocationStn null,
            AccessorStn null,
              IdentifierStn identifier: "Caf"
              IdentifierStn identifier: "isF"
            value1
          SemanticTree.FunctionInvocationStn null, value2, @args...
    super

  toJs: ->
    invocationJs = "#{valueJs = @value.toJsExpression()}#{@applyRequiredParens (a.toJsExpression() for a in @args).join ', '}"
    if @conditional
      "Caf.isF(#{valueJs}) && #{invocationJs}"
    else
      invocationJs

