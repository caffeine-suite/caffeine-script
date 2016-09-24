{a, m, w} = require "art-foundation"

module.exports =
  operator: w "logicOperator shiftOperator compareOperator mathOperator"

  logicOperator:    /// && | \|\| | & | \| | \^ ///
  shiftOperator:    /// << | >> | >>> ///
  compareOperator:  /// == | != | < | > | <= | >= ///
  mathOperator:     /// [-+*/%] | // | %% ///
