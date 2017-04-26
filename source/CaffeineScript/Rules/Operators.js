"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Error,
    resolveOperatorPrecidence,
    compactFlatten,
    getNormalizedOperator,
    BinaryOperatorStn,
    UnaryOperatorStn;
  ({
    Error,
    resolveOperatorPrecidence,
    compactFlatten,
    getNormalizedOperator,
    BinaryOperatorStn,
    UnaryOperatorStn
  } = Caf.import(
    [
      "Error",
      "resolveOperatorPrecidence",
      "compactFlatten",
      "getNormalizedOperator",
      "BinaryOperatorStn",
      "UnaryOperatorStn"
    ],
    [
      require("../StandardImport"),
      require("../OperatorHelper"),
      require("../SemanticTree"),
      global
    ]
  ));
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
          Caf.each(this.binaryOperatorAndExpressions, [], (
            opAndExp,
            k,
            into
          ) => {
            into.push(getNormalizedOperator(opAndExp.binaryOperator));
          }),
          compactFlatten([
            left,
            Caf.each(this.binaryOperatorAndExpressions, [], (
              opAndExp,
              k,
              into
            ) => {
              into.push(opAndExp.rValue.getStn());
            })
          ]),
          function(operandA, operandB, operator) {
            return BinaryOperatorStn(
              { operator: operator },
              operandA,
              operandB
            );
          }
        );
      }
    },
    binaryOperatorAndExpression: [
      "_? binaryOperator _? _end? rValue:unaryOpExpression",
      "_? binaryOperator _? rValue:rValueBlock"
    ],
    lineStartBinaryOperatorAndExpression: [
      {
        pattern: "!/[-+][^ ]/ binaryOperator _? binOpExpression",
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
        Caf.each(this.unaryTailOperators || [], undefined, (
          operand,
          k,
          into
        ) => {
          stn = UnaryOperatorStn({ operand: operand.toString().trim() }, stn);
        });
        Caf.each((this.unaryOperator_s || []).slice().reverse(), undefined, (
          operand,
          k,
          into
        ) => {
          stn = UnaryOperatorStn({ operand: operand.toString().trim() }, stn);
        });
        return stn;
      }
    }
  };
});
