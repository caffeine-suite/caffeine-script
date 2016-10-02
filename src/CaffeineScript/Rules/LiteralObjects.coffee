{a, m, w, escapeJavascriptString} = require "art-foundation"

{ObjectStn, ObjectPropValueStn} =  require '../SemanticTree'

module.exports = ->
  @rule

    object: a
      pattern: "openCurly_ props:propertyList _closeCurly"

      m pattern: "props:implicitObject"
      m pattern: "'{}' _? props:propertyList"

      m
        pattern: "'{}' _? props:toEolAndBlock"
        toJs: -> @props.toJsList()

      m
        pattern: "'{}'"
        toJs: -> @toString()
  ,
    toJs: -> "{#{@props.toJs()}}"
    getStn: ->
      ObjectStn()

  @rule

    implicitObject: a
      pattern: "implicitObjectWithTwoOrMorePropsOnOneLine"
      m pattern: "multilineImplicitObject &/ *\n|$/"
      # m pattern: "propertyList"

    multilineImplicitObject: a

      pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression /( *\n)+/ multilineImplicitObject"
      toJs: -> "#{@valuePropWithComplexExpression.toJs()}, #{@multilineImplicitObject.toJs()}"
      m
        pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression"

    implicitObjectWithTwoOrMorePropsOnOneLine: a
      pattern: "literalProp _ propertyList",        toJs: -> "#{@literalProp.toJs()}, #{@propertyList.toJs()}"
      m pattern: "valueProp _comma_ propertyList",  toJs: -> "#{@valueProp.toJs()}, #{@propertyList.toJs()}"

    propertyList: a
      pattern: "valueProp _comma_ propertyList",    toJs: -> "#{@valueProp.toJs()}, #{@propertyList.toJs()}"
      m pattern: "literalProp _ propertyList",      toJs: -> "#{@literalProp.toJs()}, #{@propertyList.toJs()}"
      m pattern: "valueProp"

  @rule
    literalProp:  "propName _colon_ propValue:literal"
    valueProp:    "propName _colon_ propValue:expression"

    valuePropWithComplexExpression: a
      pattern:    "propName _colon_ propValue:complexExpression"
      m pattern:  "propName _colon_ propValue:propertyValueBlock"
  ,
    name: "literalObjectProperty"
    toJs: -> "#{@propName.toJs()}: #{@propValue.toJs()}"

  @rule
    propertyValueBlock:
      pattern: "block"
      toJs: -> @block.toImplicitArrayOrValueJs()

    propName: a
      pattern: "identifier &_colon_"
      m pattern: "openBracket_ complexExpression _closeBracket"
      m pattern: "numberLiteral &_colon_", toJs: ->
        number = +(str = @toString())
        if number < 0 || "#{number}" != str
          escapeJavascriptString str
        else
          str
      m pattern: "unquotedString", toJs: -> escapeJavascriptString @toString()

