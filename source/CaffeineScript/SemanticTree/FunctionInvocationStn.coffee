Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, escapeJavascriptString, BaseObject} = Foundation
SemanticTree = require './namespace'

defineModule module, class FunctionInvocationStn extends require './ValueBaseCaptureStn'

  constructor: (props, [@functionValue, @args...]) ->
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
      {value1, value2} = @getValueWithBaseCapture @functionValue
      BinaryOperatorStn
        operator: "&&"
        SemanticTree.FunctionInvocationStn null,
          AccessorStn null,
            IdentifierStn identifier: "Caf"
            IdentifierStn identifier: "isF"
          value1
        SemanticTree.FunctionInvocationStn value2, @args...
    else
      super

  toJs: ->
    throw new Error "can't be conditional here" if @conditional
    "#{valueJs = @functionValue.toJsExpression()}#{@applyRequiredParens (a.toJsExpression() for a in @args).join ', '}"

