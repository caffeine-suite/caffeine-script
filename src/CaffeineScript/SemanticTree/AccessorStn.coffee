Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation
SemanticTree = require './namespace'

defineModule module, class AccessorStn extends require './ValueBaseCaptureStn'

  constructor: (props, children) ->
    switch children.length
      when 1 then [@key] = children
      when 2 then [@value, @key] = children
      when 3 then [@value, @dot, @key] = children
      else throw new Error "expected <=3 children"
    super

  needsParens: false

  @getter
    isAccessor: -> true

  transform: ->
    {BinaryOperatorStn, SimpleLiteralStn, SemanticTokenStn} = SemanticTree

    if @dot?.token == "?." || @dot?.token == "?"
      {value1, value2} = @getValueWithBaseCapture @value

      BinaryOperatorStn
        operator: "&&"
        BinaryOperatorStn
          operator: "=="
          value1
          SimpleLiteralStn value: "null"
        AccessorStn.Factory null,
          value2
          @key
    else
      super

  ###
  @value is only ever not set for object literal interpolation.
  ###
  toJs: ->
    if @value && @key.isIdentifier
      if (identierString = @key.toJs()).match /['"`]/
        "#{@value.toJsExpressionWithParens()}[#{identierString}]"
      else
        "#{@value.toJsExpressionWithParens()}.#{identierString}"
    else
      "#{@value?.toJsExpressionWithParens() || ""}[#{@key.toJsExpression()}]"
