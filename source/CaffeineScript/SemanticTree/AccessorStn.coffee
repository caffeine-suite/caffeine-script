Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation
SemanticTree = require './namespace'

defineModule module, class AccessorStn extends require './ValueBaseCaptureStn'

  constructor: (props, children) ->
    super
    switch children.length
      when 1 then @key = children[0]
      when 2
        @value = children[0]
        @key = children[1]
      else throw new Error "expected 1 or 2 children"

    unless @key
      log {@props, @children}
      throw new Error "need key"

  needsParens: false

  @getter
    isAccessor: -> true

  transform: ->
    {BinaryOperatorStn, IdentifierStn, SimpleLiteralStn, SemanticTokenStn, FunctionInvocationStn} = SemanticTree

    dot = @dot?.transform()
    value = @value?.transform()
    key = @key?.transform()

    if @props.existanceTest
      {value1, value2} = @getValueWithBaseCapture value

      BinaryOperatorStn
        operator: "&&"
        FunctionInvocationStn null,
          IdentifierStn identifier: "Caf.exists"
          value1
        AccessorStn.Factory null,
          value2
          key
    else
      super

  ###
  @value is only ever not set for object literal computed property names.
  ###
  toJs: ->
    if @value && @key.isIdentifier
      if (identierString = @key.toJs()).match /['"`]/
        "#{@value.toJsExpressionWithParens()}[#{identierString}]"
      else
        "#{@value.toJsExpressionWithParens dotBase: true}.#{identierString}"
    else
      "#{@value?.toJsExpressionWithParens() || ""}[#{@key.toJsExpression()}]"
