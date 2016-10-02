{a, m, w, escapeJavascriptString, log, present} = require "art-foundation"
{ArrayStn} =  require '../SemanticTree'

{Extensions} = require 'babel-bridge'

module.exports = ->
  @rule

    array: a
      pattern: "openBracket_ valueList _comma_? _closeBracket"
      # m pattern: "'[]' _? valueList"
      m pattern: "'[]' _? arrayLiteralBlock", getImplicitArray: -> false # TODO: I shouldn't need to add this getImplicitArray!
      m pattern: "'[]'"

    implicitArray: a
      pattern: "start:expression _comma_ valueList _comma_?"
      # toJs: ->
      #   if present vlJs = @valueList.toJs()
      #     "[#{@start.toJs()}, #{vlJs}]"
      #   else
      #     "[#{@start.toJs()}]"
      getImplicitArray: -> @
      stnFactory: ArrayStn
      stnProps: implicitArray: true

      m
        pattern: "start:literal _ valueList _comma_?"
        getImplicitArray: -> @
        stnFactory: ArrayStn
        stnProps: implicitArray: true
     # toJs: -> "[#{@start.toJs()}, #{@valueList.toJs()}]"
  ,
    toJs: -> #@getStn().toJs()
      "[#{(el.toJs() for el in @getArrayElements()).join ', '}]"

    getArrayElements: ->
      if @valueList
        if @start
          [@start].concat @valueList.getArrayElements()
        else
          @valueList.getArrayElements()
      else if @arrayLiteralBlock
        statements = @arrayLiteralBlock.getStatements()
        if statements.length == 1 && implicitArray = statements[0].getImplicitArray()
          # log implicitArray: true
          implicitArray.getArrayElements()
        else
          # log implicitArray: false
          statements
      else
        []

    stnFactory: ArrayStn
    # getStn: -> ArrayStn (el.getStn() for el in @getArrayElements())

  @rule
    arrayLiteralBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock rule: "arrayBlockSubParse"
    arrayBlockSubParse: "statement*"

  @rule
    valueList: a
      pattern: "element:arrayValue _comma_ valueList",
      toJs: ->
        js = @element.toJs()
        js += ", #{vlJs}" if present vlJs = @valueList.toJs()
        js

      m
        pattern: "element:literal _ valueList"
        toJs: -> "#{@element.toJs()}, #{@valueList.toJs()}"

      m
        pattern: "element:arrayValue"
  ,
    getArrayElements: (res = []) ->
      res.push @element
      if @valueList
        @valueList.getArrayElements res
      else
        res

  @rule
    arrayValue: a
      pattern: "identifier etc"
      toJs: -> "...#{@identifier}"
      stnFactory: "ArraySpreadElementStn"
      m pattern: "expression"
