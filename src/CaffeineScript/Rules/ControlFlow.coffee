{a, m, w} = require "art-foundation"
{Extensions} = require 'babel-bridge'
{matchBlock} = Extensions.IndentBlocks

upToButNotEol = /[^\n]*/y
module.exports =
  ifUnlessWhile: /if|unless|while/
  thenDo: /then|do/
  expressionWithOneLessBlock:
    parse: (parentNode) ->
      {nextOffset, source} = parentNode
      originalOffset = nextOffset
      upToButNotEol.lastIndex = nextOffset
      if [m] = upToButNotEol.exec source
        endOffset = nextOffset += m.length
        while (match = matchBlock nextOffset: nextOffset, source: source)
          endOffset = nextOffset
          {nextOffset} = match

        expressionSource = source.slice originalOffset, endOffset
        parentNode.subparse expressionSource,
          rule:                 "complexExpression"
          originalOffset:       originalOffset
          originalMatchLength:  endOffset - originalOffset

  controlStatement: a

    pattern: "ifUnlessWhile _ expressionWithOneLessBlock _? block optionalElseClause?"
    toJs: (statement) ->
      testJs = if "unless" == keyword = @ifUnlessWhile.toString()
        keyword = "if"
        "!(#{@expressionWithOneLessBlock.toJs()})"
      else
        if @optionalElseClause && "while" == keyword
          throw new Error "'else' not expected after 'while' (offset: #{@offset})"

        @expressionWithOneLessBlock.toJs()

      if statement
        "#{keyword} (#{testJs}) {#{@block.toJs()}}#{@optionalElseClause?.toJs(true) || ""}"
      else
        "#{testJs} ? #{@block.toJs()}#{@optionalElseClause?.toJs() || " : null"}"
    m
      pattern: "ifUnlessWhile _ expression _ thenDo _ complexExpression optionalElseClause?"
      toJs: (statement) ->
        if statement
          "#{@ifUnlessWhile} (#{@expression.toJs()}) {#{@complexExpression.toJs()}}#{@optionalElseClause?.toJs(true) || ""}"
        else
          "#{@expression.toJs()} ? #{@complexExpression.toJs()}#{@optionalElseClause?.toJs() || " : null"}"

  optionalElseClause: a
    pattern: "_else block"
    toJs: (statement) ->
      if statement
        " else {#{@block.toJs()}}"
      else
        " : #{@block.toJs()}"
    m
      pattern: "_else _ complexExpression"
      toJs: (statement) ->
        if statement
          " else {#{@complexExpression.toJs()}}"
        else
          " : #{@complexExpression.toJs()}"
