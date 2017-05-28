"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let BinaryOperatorStn,
    operatorIsInfixJs,
    binaryOperatorToJs,
    getOpPrecidence,
    getPrecidenceLevelIsLeftAssociative,
    Error,
    formattedInspect;
  ({
    operatorIsInfixJs,
    binaryOperatorToJs,
    getOpPrecidence,
    getPrecidenceLevelIsLeftAssociative,
    Error,
    formattedInspect
  } = Caf.import(
    [
      "operatorIsInfixJs",
      "binaryOperatorToJs",
      "getOpPrecidence",
      "getPrecidenceLevelIsLeftAssociative",
      "Error",
      "formattedInspect"
    ],
    [require("../../StandardImport"), require("../../OperatorHelper"), global]
  ));
  return BinaryOperatorStn = Caf.defClass(
    class BinaryOperatorStn extends require("../BaseStn") {
      constructor(props, children) {
        super(...arguments);
        this.operator = props.operator;
        this.left = children[0];
        this.right = children[1];
        if (!(this.left && this.right)) {
          throw new Error(
            `left and right required: ${Caf.toString(
              formattedInspect({ left: this.left, right: this.right })
            )}`
          );
        }
      }
    },
    function(BinaryOperatorStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        if (this.operator === "?" && !this.left.isReference) {
          this.uniqueIdentifierHandle = this.scope.uniqueIdentifierHandle;
        }
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.prototype.toJs = function(options) {
        let out, identifier, parentOperatorPrecidence;
        out = this.operator === "?" && this.uniqueIdentifierHandle
          ? ({ identifier } = this.uniqueIdentifierHandle, `((${Caf.toString(
              identifier
            )} = ${Caf.toString(
              this.left.toJsExpression()
            )}) != null ? ${Caf.toString(identifier)} : ${Caf.toString(
              this.right.toJsExpression()
            )})`)
          : !operatorIsInfixJs(this.operator)
              ? binaryOperatorToJs(
                  this.operator,
                  this.left.toJsExpression(),
                  this.right.toJsExpression()
                )
              : (parentOperatorPrecidence = getOpPrecidence(
                  this.operator
                ), binaryOperatorToJs(
                  this.operator,
                  this.left.toJsExpressionWithParens({
                    parentOperatorPrecidence,
                    isLeftOperand: true
                  }),
                  this.right.toJsExpressionWithParens({
                    parentOperatorPrecidence,
                    isLeftOperand: false
                  })
                ));
        return Caf.exists(options) && options.dotBase
          ? `(${Caf.toString(out)})`
          : out;
      };
      this.prototype.toJsExpressionWithParens = function(options) {
        let parentOperatorPrecidence, isLeftOperand, operatorPrecidence;
        if (options) {
          ({ parentOperatorPrecidence, isLeftOperand } = options);
        }
        operatorPrecidence = getOpPrecidence(this.operator);
        return parentOperatorPrecidence != null &&
          operatorPrecidence < parentOperatorPrecidence
          ? this.toJsExpression()
          : parentOperatorPrecidence != null &&
              operatorPrecidence === parentOperatorPrecidence &&
              isLeftOperand ===
                getPrecidenceLevelIsLeftAssociative(operatorPrecidence)
              ? this.toJsExpression()
              : `(${Caf.toString(this.toJsExpression())})`;
      };
    }
  );
});
