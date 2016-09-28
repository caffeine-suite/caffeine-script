{a, m, w, escapeJavascriptString} = require "art-foundation"

module.exports =

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
    pattern: "propertyName _colon_ expression", toJs: -> "#{@propertyName.toJs()}: #{@expression.toJs()}"

  valuePropertyWithImplicitArrays: a
    pattern: "propertyName _colon_ complexExpression", toJs: -> "#{@propertyName.toJs()}: #{@complexExpression.toJs()}"
    m pattern: "propertyName _colon_ block",    toJs: -> "#{@propertyName.toJs()}: #{@block.toImplicitArrayOrValueJs()}"

  literalProperty:
    pattern: "propertyName _colon_ literal", toJs: -> "#{@propertyName.toJs()}: #{@literal.toJs()}"

  propertyName: a
    pattern: "identifier &_colon_"
    m pattern: "numberLiteral &_colon_", toJs: ->
      number = +(str = @toString())
      if number < 0 || "#{number}" != str
        escapeJavascriptString str
      else
        str
    m pattern: "unquotedString", toJs: -> escapeJavascriptString @toString()
    # m pattern: "stringLiteral"
