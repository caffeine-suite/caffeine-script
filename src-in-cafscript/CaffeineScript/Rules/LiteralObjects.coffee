{a, m, w, escapeJavascriptString} = require "art-foundation"

{ObjectStn} =  require '../SemanticTree'
{Extensions} = require 'babel-bridge'

module.exports = ->
  @rule

    object: a
      pattern: "openCurly_ props:propertyList _closeCurly"

      m pattern: "props:implicitObject"
      m pattern: "'{}' _? props:propertyList"
      m pattern: "'{}' _? props:objectLiteralBlock"
      m pattern: "'{}'"
  ,
    getStn: ->
      children = for m in @getMatchStns()
        if m instanceof ObjectStn.class
          m.children
        else
          m

      ObjectStn children

  @rule
    objectLiteralBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "object"

    implicitObject: a
      pattern: "implicitObjectWithTwoOrMorePropsOnOneLine"
      m pattern: "multilineImplicitObject &/ *\n|$/"
      # m pattern: "propertyList"

    multilineImplicitObject: a

      pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression /( *\n)+/ multilineImplicitObject"
      m pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression"

    implicitObjectWithTwoOrMorePropsOnOneLine: a
      pattern: "literalProp _ propertyList"
      m pattern: "valueProp _comma_ propertyList"

    propertyList: a
      pattern: "valueProp _comma_ propertyList"
      m pattern: "literalProp _ propertyList"
      m pattern: "valueProp"

  @rule
    literalProp:  "propName _colon_ propValue:literal"
    valueProp:    "propName _colon_ propValue:expression"

    valuePropWithComplexExpression: a
      pattern:    "propName _colon_ propValue:complexExpression"
      m pattern:  "propName _colon_ propValue:propertyValueBlock"
  ,
    name: "literalObjectProperty"
    stnFactory: "ObjectPropValueStn"

  @rule
    propertyValueBlock: "rValueBlock"
    propName: pattern: "computedPropName"
    computedPropName:
      pattern: "openBracket_ expression _closeBracket"
      stnFactory: "BracketAccessorStn"


  @rule
    propName: a
      pattern: "str:identifier &_colon_"
      m pattern: "str:numberLiteral &_colon_"
      m pattern: "str:unquotedString"
  ,
    stnFactory: "ObjectPropNameStn"
    stnProps: -> value: @str.toString()

