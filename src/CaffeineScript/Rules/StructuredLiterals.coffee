{a, m, w} = require "art-foundation"

module.exports =
  structuredLiteral: w "array object"

  array: a
    pattern: "'[' _? valueList _? ']'"
    toJs: -> "[#{@valueList.toJs()}]"
    m
      pattern: "'[]' _? valueList"
      toJs: -> "[#{@valueList.toJs()}]"
    m
      pattern: "'[]' _? block"
      toJs: -> "[#{@block.toJsList()}]"
    m
      pattern: "'[]'"
      toJs: -> @toString()


  implicitArray: a
    pattern: "expressionWithoutImplicitArray / *, */ valueList"
    toJs: -> "[#{@expressionWithoutImplicitArray.toJs()}, #{@valueList.toJs()}]"
    m
      pattern: "literal _ valueList"
      toJs: -> "[#{@literal.toJs()}, #{@valueList.toJs()}]"

  implicitObject:
    pattern: "propertyList"

  object: a
    pattern: "'{' _? propertyList _? '}'"
    toJs: -> "{#{@propertyList.toJs()}}"
    m
      pattern: "implicitObjectWithTwoOrMorePropsOnOneLine"
      toJs: -> "{#{@implicitObjectWithTwoOrMorePropsOnOneLine.toJs()}}"

    m
      pattern: "multiLineImplicitObject &/ *\n|$/"
      toJs: -> "{#{@multiLineImplicitObject.toJs()}}"

    m
      pattern: "implicitObject"
      toJs: -> "{#{@implicitObject.toJs()}}"

    m
      pattern: "'{}' _? propertyList"
      toJs: -> "{#{@propertyList.toJs()}}"

    m
      pattern: "'{}' _? block"
      toJs: -> @block.toJsList()

    m
      pattern: "'{}'"
      toJs: -> @toString()

  multiLineImplicitObject: a

    pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropertyWithImplicitArrays /( *\n)+/ multiLineImplicitObject"
    toJs: -> "#{@valuePropertyWithImplicitArrays.toJs()}, #{@multiLineImplicitObject.toJs()}"
    m
      pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropertyWithImplicitArrays"


  implicitObjectWithTwoOrMorePropsOnOneLine:
    pattern: "valueProperty comma propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"

  propertyList: a
    pattern: "valueProperty comma propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"
    m pattern: "literalProperty _ propertyList", toJs: -> "#{@literalProperty.toJs()}, #{@propertyList.toJs()}"
    m pattern: "valueProperty"

  valueProperty:
    pattern: "identifier colon expressionWithoutImplicitArray", toJs: -> "#{@identifier.toJs()}: #{@expressionWithoutImplicitArray.toJs()}"

  valuePropertyWithImplicitArrays: a
    pattern: "identifier colon expression", toJs: -> "#{@identifier.toJs()}: #{@expression.toJs()}"
    m pattern: "identifier colon block",    toJs: -> "#{@identifier.toJs()}: #{@block.toImplicitArrayOrValueJs()}"

  literalProperty:
    pattern: "identifier colon literal", toJs: -> "#{@identifier.toJs()}: #{@literal.toJs()}"

  valueList: a
    pattern: "expressionWithoutImplicitArray comma valueList", toJs: -> "#{@expressionWithoutImplicitArray.toJs()}, #{@valueList.toJs()}"
    m pattern: "literal _ valueList", toJs: -> "#{@literal.toJs()}, #{@valueList.toJs()}"
    m pattern: "expressionWithoutImplicitArray", toJs: -> @expressionWithoutImplicitArray.toJs()
