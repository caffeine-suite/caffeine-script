Foundation = require 'art-foundation'

{log, array, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation
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
    existanceTest: -> @props.existanceTest
    isAccessor: -> true

  ###
  OUT:
    either
      in-place transform - doesn't effect parents
    or
      re-rooting transform
      the returned node needs to become the new root
      of the
  ###
  transformAccessorChain: ->
    current = @
    accessorChain = while current?.type == "Accessor"
      accessor = current
      current = current.value
      accessor

    accessorChain = accessorChain.reverse()
    # log transformAccessorChain: {accessorChain}

    @transformAccessorChainR accessorChain[0].value.transform(), accessorChain

  transformAccessorChainR: (value, accessorChain) ->
    # log transformAccessorChainR: {value, accessorChain}
    # TODO: transform value

    for accessor, i in accessorChain
      # TODO: transform key
      {key} = accessor
      key = key.transform()
      if accessor.existanceTest
        reset = accessorChain.slice i

        return @createTransformedExistanceTestStns value, (checkedValueStn) =>
          access =
            SemanticTree.AccessorStn null,
              checkedValueStn
              key
          if i < accessorChain.length - 1
            @transformAccessorChainR access, accessorChain.slice i + 1
          else
            access

      else
        value = SemanticTree.AccessorStn value, key

    value

  createTransformedExistanceTestStns: (value, createRightStn) ->
    {value1:toCheckValue, value2:checkedValueStn} = @getValueWithCapture value

    SemanticTree.BinaryOperatorStn
      operator: "&&"
      SemanticTree.FunctionInvocationStn null,
        SemanticTree.IdentifierStn identifier: "Caf.exists"
        toCheckValue
      createRightStn checkedValueStn

  transform: (options = {})->
    # if transformed = @leftMostExistanceTestTransform options
    #   transformed

    if @value
      @transformAccessorChain()
    else
      # special case for computed-keys in object literals. Ex: [foo]: 123
      # computed-keys may just need its own Stn, it's an awkward overloading
      super

    # if @props.existanceTest
    #   @createTransformedExistanceTestStns @value.transform(), (checkedValueStn) =>
    #     SemanticTree.AccessorStn null,
    #       checkedValueStn
    #       @key.transform()
    # else
    #   super

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
