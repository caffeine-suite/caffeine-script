let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    OperatorHelper = require("../OperatorHelper"),
    SemanticTree = require("../SemanticTree"),
    Error,
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
  } = Caf.i(
    [
      "Error",
      "resolveOperatorPrecidence",
      "compactFlatten",
      "getNormalizedOperator",
      "BinaryOperatorStn",
      "UnaryOperatorStn"
    ],
    [ArtFoundation, OperatorHelper, SemanticTree, global]
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
          Caf.e(this.binaryOperatorAndExpressions, [], (opAndExp, k, into) => {
            return into.push(getNormalizedOperator(opAndExp.binaryOperator));
          }),
          compactFlatten([
            left,
            Caf.e(this.binaryOperatorAndExpressions, [], (
              opAndExp,
              k,
              into
            ) => {
              return into.push(opAndExp.unaryOpExpression.getStn());
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
    binaryOperatorAndExpression: {
      pattern: "_? binaryOperator _? unaryOpExpression"
    },
    lineStartBinaryOperatorAndExpression: {
      pattern: "binaryOperator _? binOpExpression",
      stnProps: function() {
        return { operator: getNormalizedOperator(this.binaryOperator) };
      },
      stnFactory: "BinaryOperatorStn",
      stnExtension: true
    },
    unaryOpExpression: {
      pattern: "unaryOperator_* expressionWithoutBinOps unaryTailOperator*",
      getStn: function() {
        let stn;
        stn = this.expressionWithoutBinOps.getStn();
        Caf.e(this.unaryTailOperators || [], undefined, (operand, k, into) => {
          return stn = UnaryOperatorStn(
            { operand: operand.toString().trim() },
            stn
          );
        });
        Caf.e((this.unaryOperator_s || []).slice().reverse(), undefined, (
          operand,
          k,
          into
        ) => {
          return stn = UnaryOperatorStn(
            { operand: operand.toString().trim() },
            stn
          );
        });
        return stn;
      }
    }
  };
});
