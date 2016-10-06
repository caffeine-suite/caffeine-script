{a, m, w, escapeJavascriptString, log, present} = require "art-foundation"
{ArrayStn} =  require '../SemanticTree'

{Extensions} = require 'babel-bridge'

module.exports = ->
  @rule

    array: a
      pattern: "openBracket_ valueList _comma_? _closeBracket"
      # m pattern: "'[]' _? valueList"
      m pattern: "'[]' _? valueListToEolAndBlock", getImplicitArray: -> false # TODO: I shouldn't need to add this getImplicitArray!
      m pattern: "'[]'"

    implicitArray: a
      pattern: "start:expression _comma_ valueList _comma_?"
      getImplicitArray: -> @
      stnFactory: ArrayStn
      stnProps: implicitArray: true

      m
        pattern: "start:literal _ valueList _comma_?"
        getImplicitArray: -> @
        stnFactory: ArrayStn
        stnProps: implicitArray: true
  ,
    stnFactory: ArrayStn

  @rule
    valueListBlock:         Extensions.IndentBlocks.getPropsToSubparseBlock rule: "valueListBlockSubParse"
    valueListToEolAndBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "valueListBlockSubParse"
    valueListBlockSubParse: "statement*"

  @rule
    valueList: a
      pattern: "element:arrayValue _comma_ valueList",
      m pattern: "element:literal _ valueList"
      m pattern: "element:arrayValue"

  @rule
    arrayValue: a
      pattern: "identifier etc"
      stnFactory: "ArraySpreadElementStn"
      m pattern: "expression"
