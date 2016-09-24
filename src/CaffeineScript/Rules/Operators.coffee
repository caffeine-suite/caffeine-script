{a, m, w, compactFlatten} = require "art-foundation"

module.exports =
  binOpExpression:
    pattern: "expressionWithoutBinOps operatorAndExpression+"
    toJs: ->
      ops = for op in compactFlatten [@expressionWithoutBinOps, @operatorAndExpressions]
        op.toJs()
      ops.join ' '

  operatorAndExpression:
    pattern: "_? operator _? expressionWithoutBinOps"
    toJs: ->
      "#{@operator} #{@expressionWithoutBinOps.toJs()}"

  operator: w "logicOperator shiftOperator compareOperator mathOperator"

  logicOperator:    /// && | \|\| | & | \| | \^ ///
  shiftOperator:    /// << | >> | >>> ///
  compareOperator:  /// == | != | < | > | <= | >= ///
  mathOperator:     /// [-+*/%] | // | %% ///
