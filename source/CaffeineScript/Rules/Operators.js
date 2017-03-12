let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
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
    [StandardImport, OperatorHelper, SemanticTree, global]
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
            into.push(getNormalizedOperator(opAndExp.binaryOperator));
          }),
          compactFlatten([
            left,
            Caf.e(this.binaryOperatorAndExpressions, [], (
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
          stn = UnaryOperatorStn({ operand: operand.toString().trim() }, stn);
        });
        Caf.e((this.unaryOperator_s || []).slice().reverse(), undefined, (
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
