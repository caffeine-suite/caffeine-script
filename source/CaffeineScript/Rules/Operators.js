"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "Error",
      "resolveOperatorPrecidence",
      "compactFlatten",
      "getNormalizedOperator",
      "BinaryOperatorStn",
      "UnaryOperatorStn"
    ],
    [
      global,
      require("../StandardImport"),
      require("../OperatorHelper"),
      require("../StnRegistry")
    ],
    (
      Error,
      resolveOperatorPrecidence,
      compactFlatten,
      getNormalizedOperator,
      BinaryOperatorStn,
      UnaryOperatorStn
    ) => {
      return {
        binOpExpression: {
          pattern: "unaryOpExpression binaryOperatorSequenceExtension?"
        },
        binaryOperatorSequenceExtension: {
          pattern: "binaryOperatorAndExpression+",
          stnExtension: true,
          getStn: function(left) {
            if (!left) {
              throw new Error("expecting left");
            }
            return resolveOperatorPrecidence(
              Caf.array(this.binaryOperatorAndExpressions, opAndExp =>
                getNormalizedOperator(opAndExp.binaryOperator)
              ),
              compactFlatten([
                left,
                Caf.array(this.binaryOperatorAndExpressions, opAndExp =>
                  opAndExp.rValue.getStn()
                )
              ]),
              (operandA, operandB, operator) =>
                BinaryOperatorStn(
                  { parseTreeNode: this, operator },
                  operandA,
                  operandB
                )
            );
          }
        },
        binaryOperatorAndExpression: [
          "binaryOperator rValue:unaryOpExpression",
          "_? binaryOperator _ rValue:unaryOpExpression",
          "_? binaryOperator _end rValue:unaryOpExpression",
          "_? binaryOperator _? rValue:rValueBlock"
        ],
        lineStartBinaryOperatorAndExpression: [
          {
            pattern:
              "!/[-+][^ ]/ !regExpLiteral binaryOperator _? binOpExpression",
            stnProps: function() {
              return { operator: getNormalizedOperator(this.binaryOperator) };
            },
            stnFactory: "BinaryOperatorStn",
            stnExtension: true
          },
          {
            pattern: "!/[-+][^ ]/ binaryOperator _? rValueBlock",
            stnProps: function() {
              return { operator: getNormalizedOperator(this.binaryOperator) };
            },
            stnFactory: "BinaryOperatorStn",
            stnExtension: true
          }
        ],
        unaryOpExpression: {
          pattern: [
            "!literal unaryOperator_+ expressionWithoutBinOps unaryTailOperator*",
            "expressionWithoutBinOps unaryTailOperator*"
          ],
          getStn: function() {
            let stn;
            stn = this.expressionWithoutBinOps.getStn();
            Caf.each2(
              this.unaryTailOperators || [],
              operand =>
                (stn = UnaryOperatorStn(
                  { operand: operand.toString().trim(), tail: true },
                  stn
                ))
            );
            Caf.each2(
              (this.unaryOperators_ || []).slice().reverse(),
              operand =>
                (stn = UnaryOperatorStn(
                  { operand: operand.toString().trim() },
                  stn
                ))
            );
            return stn;
          }
        }
      };
    }
  );
});
