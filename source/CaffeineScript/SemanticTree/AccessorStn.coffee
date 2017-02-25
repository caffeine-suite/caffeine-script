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

  leftMostExistanceTestTransform: ->
    leftMostExistanceTest = null
    current = @
    leftValues = while current
      leftMostExistanceTest = current if current.props.existanceTest
      current = current.value

    if leftMostExistanceTest
      log leftMostExistanceTestTransform: needsFix: {self: @, leftMostExistanceTest, leftValues}

      {parent} = leftMostExistanceTest

      # needs a-fix'n
      leftMostExistanceTest.createTransformedExistanceTestStns (checkedValueStn) =>

        if leftMostExistanceTest == @
          SemanticTree.AccessorStn null,
            checkedValueStn
            @key.transform()

        else

          # replace parent's value-child with checkedValueStn
          parent.value = checkedValueStn
          parent.children = array parent.children, (child) ->
            if child == leftMostExistanceTest
              checkedValueStn
            else
              child

          @transform()


  createTransformedExistanceTestStns: (createRightStn) ->
    throw new Error unless @props.existanceTest
    value = @value?.transform()
    {value1:toCheckValue, value2:checkedValueStn} = @getValueWithBaseCapture value

    SemanticTree.BinaryOperatorStn
      operator: "&&"
      SemanticTree.FunctionInvocationStn null,
        SemanticTree.IdentifierStn identifier: "Caf.exists"
        toCheckValue
      createRightStn checkedValueStn

  transform: ->
    # if transformed = @leftMostExistanceTestTransform()
    #   transformed

    # else
    if @props.existanceTest
      @createTransformedExistanceTestStns (checkedValueStn) =>
        SemanticTree.AccessorStn null,
          checkedValueStn
          @key.transform()
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
