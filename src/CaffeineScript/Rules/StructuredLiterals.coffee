{a, m, w} = require "art-foundation"

module.exports =
  structuredLiteral: w "array object"

  array: a
    pattern: "openBracket_ valueList _closeBracket"
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

  object: a
    pattern: "openCurly_ propertyList _closeCurly"
    toJs: -> "{#{@propertyList.toJs()}}"

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

  implicitArray: a
    pattern: "expression _comma_ valueList"
    toJs: -> "[#{@expression.toJs()}, #{@valueList.toJs()}]"
    m
      pattern: "literal _ valueList"
      toJs: -> "[#{@literal.toJs()}, #{@valueList.toJs()}]"

  implicitObject: a
    pattern: "implicitObjectWithTwoOrMorePropsOnOneLine"
    m pattern: "multiLineImplicitObject &/ *\n|$/"
    # m pattern: "propertyList"

  multiLineImplicitObject: a

    pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropertyWithImplicitArrays /( *\n)+/ multiLineImplicitObject"
    toJs: -> "#{@valuePropertyWithImplicitArrays.toJs()}, #{@multiLineImplicitObject.toJs()}"
    m
      pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropertyWithImplicitArrays"

  implicitObjectWithTwoOrMorePropsOnOneLine: a
    pattern: "literalProperty _ propertyList", toJs: -> "#{@literalProperty.toJs()}, #{@propertyList.toJs()}"
    m pattern: "valueProperty _comma_ propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"

  propertyList: a
    pattern: "valueProperty _comma_ propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"
    m pattern: "literalProperty _ propertyList", toJs: -> "#{@literalProperty.toJs()}, #{@propertyList.toJs()}"
    m pattern: "valueProperty"

  valueProperty:
    pattern: "identifier _colon_ expression", toJs: -> "#{@identifier.toJs()}: #{@expression.toJs()}"

  valuePropertyWithImplicitArrays: a
    pattern: "identifier _colon_ complexExpression", toJs: -> "#{@identifier.toJs()}: #{@complexExpression.toJs()}"
    m pattern: "identifier _colon_ block",    toJs: -> "#{@identifier.toJs()}: #{@block.toImplicitArrayOrValueJs()}"

  literalProperty:
    pattern: "identifier _colon_ literal", toJs: -> "#{@identifier.toJs()}: #{@literal.toJs()}"

  valueList: a
    pattern: "expression _comma_ valueList", toJs: -> "#{@expression.toJs()}, #{@valueList.toJs()}"
    m pattern: "literal _ valueList", toJs: -> "#{@literal.toJs()}, #{@valueList.toJs()}"
    m pattern: "expression", toJs: -> @expression.toJs()
