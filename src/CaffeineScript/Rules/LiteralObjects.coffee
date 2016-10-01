{a, m, w, escapeJavascriptString} = require "art-foundation"

module.exports = ->
  @rule

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

      pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropertyWithComplexExpression /( *\n)+/ multiLineImplicitObject"
      toJs: -> "#{@valuePropertyWithComplexExpression.toJs()}, #{@multiLineImplicitObject.toJs()}"
      m
        pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropertyWithComplexExpression"

    implicitObjectWithTwoOrMorePropsOnOneLine: a
      pattern: "literalProperty _ propertyList", toJs: -> "#{@literalProperty.toJs()}, #{@propertyList.toJs()}"
      m pattern: "valueProperty _comma_ propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"

    propertyList: a
      pattern: "valueProperty _comma_ propertyList", toJs: -> "#{@valueProperty.toJs()}, #{@propertyList.toJs()}"
      m pattern: "literalProperty _ propertyList", toJs: -> "#{@literalProperty.toJs()}, #{@propertyList.toJs()}"
      m pattern: "valueProperty"


  @rule
    literalProperty:  "propertyName _colon_ propValue:literal"
    valueProperty:    "propertyName _colon_ propValue:expression"

    valuePropertyWithComplexExpression: a
      pattern:        "propertyName _colon_ propValue:complexExpression"
      m pattern:      "propertyName _colon_ propValue:propertyValueBlock"
  ,
    type: "valueProperty"
    toJs: -> "#{@propertyName.toJs()}: #{@propValue.toJs()}"

  @rule
    propertyValueBlock:
      pattern: "block"
      toJs: -> @block.toImplicitArrayOrValueJs()

    propertyName: a
      pattern: "identifier &_colon_"
      m pattern: "numberLiteral &_colon_", toJs: ->
        number = +(str = @toString())
        if number < 0 || "#{number}" != str
          escapeJavascriptString str
        else
          str
      m pattern: "unquotedString", toJs: -> escapeJavascriptString @toString()
