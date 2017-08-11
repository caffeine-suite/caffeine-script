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
    [global, require("../../StandardImport"), require("../../OperatorHelper")]
  ));
  return (BinaryOperatorStn = Caf.defClass(
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
          ? (
              ({ identifier } = this.uniqueIdentifierHandle),
              `((${Caf.toString(identifier)} = ${Caf.toString(
                this.left.toJsExpression()
              )}) != null ? ${Caf.toString(identifier)} : ${Caf.toString(
                this.right.toJsExpression()
              )})`
            )
          : !operatorIsInfixJs(this.operator)
            ? binaryOperatorToJs(
                this.operator,
                this.left.toJsExpression(),
                this.right.toJsExpression()
              )
            : (
                (parentOperatorPrecidence = getOpPrecidence(this.operator)),
                binaryOperatorToJs(
                  this.operator,
                  this.left.toJs({
                    expression: true,
                    subExpression: true,
                    parentOperatorPrecidence,
                    isLeftOperand: true
                  }),
                  this.right.toJs({
                    expression: true,
                    subExpression: true,
                    parentOperatorPrecidence,
                    isLeftOperand: false
                  })
                )
              );
        return options
          ? this._needsParens(options) ? `(${Caf.toString(out)})` : out
          : out;
      };
      this.prototype._needsParens = function(toJsOptions) {
        let dotBase,
          parentOperatorPrecidence,
          isLeftOperand,
          operatorPrecidence;
        if (toJsOptions) {
          ({ dotBase, parentOperatorPrecidence, isLeftOperand } = toJsOptions);
        }
        return !(parentOperatorPrecidence != null)
          ? dotBase
          : (
              (operatorPrecidence = getOpPrecidence(this.operator)),
              parentOperatorPrecidence &&
                operatorPrecidence < parentOperatorPrecidence
                ? false
                : parentOperatorPrecidence &&
                    operatorPrecidence === parentOperatorPrecidence &&
                    isLeftOperand ===
                      getPrecidenceLevelIsLeftAssociative(operatorPrecidence)
                  ? false
                  : true
            );
      };
    }
  ));
});
