let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    Error,
    OperatorHelper,
    arrayWithout;
  ({ Error, OperatorHelper, arrayWithout } = Caf.i(
    ["Error", "OperatorHelper", "arrayWithout"],
    [ArtFoundation, global]
  ));
  return OperatorHelper = Caf.defClass(class OperatorHelper {}, function() {
    let CoffeeScriptGlobal, infix, validateOperator;
    this.CoffeeScriptGlobal = CoffeeScriptGlobal = "Caf";
    this.operatorMap = {
      "**": function(a, b) {
        return `${CoffeeScriptGlobal}.pow(${a}, ${b})`;
      },
      "//": function(a, b) {
        return `${CoffeeScriptGlobal}.div(${a}, ${b})`;
      },
      "%%": function(a, b) {
        return `${CoffeeScriptGlobal}.mod(${a}, ${b})`;
      },
      in: function(a, b) {
        return `${CoffeeScriptGlobal}.in(${a}, ${b})`;
      },
      "?": function(a, b) {
        return a.match(/^@?[_a-z0-9]+$/i)
          ? `${a} != null ? ${a} : ${b}`
          : `${CoffeeScriptGlobal}.existsOr(${a}, (() => {return ${b}})())`;
      }
    };
    this.infix = infix = function(a, b, op) {
      return `${a} ${op} ${b}`;
    };
    this.precidence = [
      ["left", "?"],
      ["right", "**"],
      ["left", "*", "/", "%", "//", "%%"],
      ["left", "+", "-"],
      ["left", "<<", ">>", ">>>"],
      ["left", "<", "<=", ">", ">=", "instanceof", "in"],
      ["left", "===", "!=="],
      ["left", "&"],
      ["left", "^"],
      ["left", "|"],
      ["left", "&&"],
      ["left", "||", "?"]
    ];
    this.opsToPrecidence = {};
    this.direction = Caf.e(this.precidence, [], (v, i, into) => {
      let direction, operators;
      [direction, ...operators] = v;
      Caf.e(operators, undefined, (op, k, into) => {
        return this.opsToPrecidence[op] = i;
      });
      return into.push(direction);
    });
    this.validateOperator = validateOperator = operator => {
      if (!this.opsToPrecidence[operator]) {
        throw new Error(
          `OperatorHelper: operator '${operator}' is not defined`
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
        throw new Error(`OperatorHelper: operator '${op}' not defined`);
      }
      return p;
    };
    this.resolveOperatorPrecidence = (
      operators,
      operands,
      combinerOverride
    ) => {
      let lowestPrecidence,
        firstOccurance,
        lastOccurance,
        opIndexToResolve,
        opsBefore,
        operandsBefore,
        op,
        operandA,
        operandB,
        combiner;
      if (!(operands.length === operators.length + 1)) {
        throw new Error(
          `expecting: operands.length:${operands.length} == operators.length:${operators.length} + 1`
        );
      }
      while (operators.length > 0) {
        lowestPrecidence = this.getOpPrecidence(operators[0]);
        firstOccurance = lastOccurance = 0;
        Caf.e(operators, undefined, (op, i, into) => {
          let p;
          return lowestPrecidence > (p = this.getOpPrecidence(op))
            ? (firstOccurance = lastOccurance = i, lowestPrecidence = p)
            : lowestPrecidence === p ? lastOccurance = i : undefined;
        });
        opIndexToResolve = this.direction[lowestPrecidence] === "left"
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
    return this;
  });
});