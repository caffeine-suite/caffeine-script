{a, m, w, log} = require "art-foundation"
{Extensions} = require 'babel-bridge'
{matchBlock} = Extensions.IndentBlocks

upToButNotEol = /[^\n]*/y
module.exports = ->
  @rule
    controlStatement: a
      pattern: "ifUnlessWhileUntil _ expressionWithOneLessBlock _? block optionalElseClause?"
      m
        pattern: "ifUnlessWhileUntil _ expression _ thenDo _ complexExpression optionalElseClause?"
  ,
    stnFactory: "ControlOperatorStn"
    stnProps: ->
      operand: @ifUnlessWhileUntil.toString()
      joiner: @thenDo?.toString()

  @rule
    ifUnlessWhileUntil: /if|unless|while|until/
    thenDo: /then|do/

    expressionWithOneLessBlock:
      parse: (parentNode) ->
        {nextOffset:offset, source} = parentNode
        originalOffset = offset
        upToButNotEol.lastIndex = offset
        if match = upToButNotEol.exec source
          [m] = match
          endOffset = offset += m.length

          while (match = matchBlock source, offset)
            endOffset = offset
            {matchLength} = match
            offset += matchLength

          expressionSource = source.slice originalOffset, endOffset
          parentNode.subparse expressionSource,
            rule:                 "complexExpression"
            originalOffset:       originalOffset
            originalMatchLength:  endOffset - originalOffset

    optionalElseClause: a
      pattern: "_else block"
      m pattern: "_else _ complexExpression"
