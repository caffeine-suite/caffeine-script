Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation
SemanticTree = require './namespace'

defineModule module, class AccessorStn extends require './ValueBaseCaptureStn'

  constructor: (props, [@value, @dot, @key]) ->
    unless @key
      throw new Error "no token, no!" if @dot.token
      @key = @dot
      @dot = null
    throw new Error "no key" unless @key
    throw new Error "no value" unless @value
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

  toJs: ->
    throw new Error "value and identier expected" unless @value and @key
    if @key.isIdentifier
      if (identierString = @key.toJs()).match /['"`]/
        "#{@value.toJsExpressionWithParens()}[#{identierString}]"
      else
        "#{@value.toJsExpressionWithParens()}.#{identierString}"
    else
      "#{@value.toJsExpressionWithParens()}[#{@key.toJsExpression()}]"
