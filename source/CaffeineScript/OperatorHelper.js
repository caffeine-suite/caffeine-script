"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let OperatorHelper, Error, arrayWithout;
  ({ Error, arrayWithout } = Caf.import(["Error", "arrayWithout"], [
    require("./StandardImport"),
    global
  ]));
  return OperatorHelper = Caf.defClass(class OperatorHelper {}, function(
    OperatorHelper,
    classSuper,
    instanceSuper
  ) {
    let CoffeeScriptGlobal, infix, validateOperator;
    this.CoffeeScriptGlobal = CoffeeScriptGlobal = "Caf";
    this.operatorMap = {
      "**": function(a, b) {
        return `${Caf.toString(CoffeeScriptGlobal)}.pow(${Caf.toString(
          a
        )}, ${Caf.toString(b)})`;
      },
      "//": function(a, b) {
        return `${Caf.toString(CoffeeScriptGlobal)}.div(${Caf.toString(
          a
        )}, ${Caf.toString(b)})`;
      },
      "%%": function(a, b) {
        return `${Caf.toString(CoffeeScriptGlobal)}.mod(${Caf.toString(
          a
        )}, ${Caf.toString(b)})`;
      },
      in: function(a, b) {
        return `${Caf.toString(CoffeeScriptGlobal)}.in(${Caf.toString(
          a
        )}, ${Caf.toString(b)})`;
      },
      "?": function(a, b) {
        return a.match(/^@?[_a-z0-9]+$/i)
          ? `${Caf.toString(a)} != null ? ${Caf.toString(a)} : ${Caf.toString(
              b
            )}`
          : `${Caf.toString(CoffeeScriptGlobal)}.existsOr(${Caf.toString(
              a
            )}, (() => {return ${Caf.toString(b)}})())`;
      }
    };
    this.infix = infix = function(a, b, op) {
      return `${Caf.toString(a)} ${Caf.toString(op)} ${Caf.toString(b)}`;
    };
    this.precidence = [
      ["left", "?"],
      ["right", "**"],
      ["left", "*", "/", "%", "//", "%%"],
      ["left", "+", "-"],
      ["left", "<<", ">>", ">>>"],
      ["left", "<", "<=", ">", ">=", "instanceof", "in"],
      ["left", "===", "!==", "!=", "=="],
      ["left", "&"],
      ["left", "^"],
      ["left", "|"],
      ["left", "&&"],
      ["left", "||", "?"]
    ];
    this.opsToPrecidence = {};
    this.leftAssociativityByPrecidence = Caf.each(this.precidence, [], (
      v,
      i,
      into
    ) => {
      let leftAssociativityByPrecidence, operators;
      [leftAssociativityByPrecidence, ...operators] = v;
      Caf.each(operators, undefined, (op, k, into) => {
        this.opsToPrecidence[op] = i;
      });
      into.push(leftAssociativityByPrecidence === "left");
    });
    this.validateOperator = validateOperator = operator => {
      if (!this.opsToPrecidence[operator]) {
        throw new Error(
          `OperatorHelper: operator '${Caf.toString(operator)}' is not defined`
        );
      }
      return operator;
    };
    this.getNormalizedOperator = function(operator) {
      return (() => {
        switch (operator = operator.toString().trim()) {
          case "and":
            return "&&";
          case "or":
            return "||";
          case "==":
          case "is":
            return "===";
          case "!=":
          case "isnt":
            return "!==";
          default:
            return validateOperator(operator);
        }
      })();
    };
    this.binaryOperatorToJs = function(operand, a, b) {
      let f;
      f = OperatorHelper.operatorMap[operand] || infix;
      return f(a, b, operand);
    };
    this.getOpPrecidence = op => {
      let p;
      if (!((p = this.opsToPrecidence[op]) != null)) {
        throw new Error(
          `OperatorHelper: operator '${Caf.toString(op)}' not defined`
        );
      }
      return p;
    };
    this.getPrecidenceLevelIsLeftAssociative = p => {
      return this.leftAssociativityByPrecidence[p];
    };
    this.operatorIsInfixJs = operator => {
      return !this.operatorMap[operator];
    };
    this.resolveOperatorPrecidence = (
      operators,
      operands,
      combinerOverride
    ) => {
      let lowestPrecidence,
        firstOccurance,
        lastOccurance,
        p,
        opIndexToResolve,
        opsBefore,
        operandsBefore,
        op,
        operandA,
        operandB,
        combiner;
      if (!(operands.length === operators.length + 1)) {
        throw new Error(
          `expecting: operands.length:${Caf.toString(
            operands.length
          )} == operators.length:${Caf.toString(operators.length)} + 1`
        );
      }
      while (operators.length > 0) {
        lowestPrecidence = this.getOpPrecidence(operators[0]);
        firstOccurance = lastOccurance = 0;
        p = null;
        Caf.each(operators, undefined, (op, i, into) => {
          if (lowestPrecidence > (p = this.getOpPrecidence(op))) {
            firstOccurance = lastOccurance = i;
            lowestPrecidence = p;
          } else {
            if (lowestPrecidence === p) {
              lastOccurance = i;
            }
          }
        });
        opIndexToResolve = this.getPrecidenceLevelIsLeftAssociative(p)
          ? firstOccurance
          : lastOccurance;
        opsBefore = operators;
        operandsBefore = operands;
        op = operators[opIndexToResolve];
        operandA = operands[opIndexToResolve];
        operandB = operands[opIndexToResolve + 1];
        operators = arrayWithout(operators, opIndexToResolve);
        operands = arrayWithout(operands, opIndexToResolve);
        combiner = combinerOverride || this.operatorMap[op] || infix;
        operands[opIndexToResolve] = combiner(operandA, operandB, op);
      }
      if (!(operands.length === 1)) {
        throw new Error();
      }
      return operands[0];
    };
  });
});
