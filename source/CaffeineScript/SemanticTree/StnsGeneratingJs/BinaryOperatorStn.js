"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "operatorIsInfixJs",
      "binaryOperatorToSourceNodeArray",
      "getOpPrecidence",
      "merge",
      "getPrecidenceLevelIsLeftAssociative",
      "Error",
      "formattedInspect"
    ],
    [global, require("../../StandardImport"), require("../../OperatorHelper")],
    (
      operatorIsInfixJs,
      binaryOperatorToSourceNodeArray,
      getOpPrecidence,
      merge,
      getPrecidenceLevelIsLeftAssociative,
      Error,
      formattedInspect
    ) => {
      let BinaryOperatorStn;
      return (BinaryOperatorStn = Caf.defClass(
        class BinaryOperatorStn extends require("../BaseStn") {
          constructor(props, children) {
            super(...arguments);
            this.operator = props.operator;
            this.left = this.children[0];
            this.right = this.children[1];
            if (!(this.left && this.right)) {
              throw new Error(
                `BinaryOperatorStn (${Caf.toString(
                  this.operator
                )}): left and right required: ${Caf.toString(
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
          this.prototype.toSourceNode = function(options) {
            let commonSubToSourceNodeProps,
              out,
              identifier,
              parentOperatorPrecidence;
            commonSubToSourceNodeProps = { expression: true, isOperand: true };
            out = (() => {
              switch (false) {
                case !(this.operator === "?" && this.uniqueIdentifierHandle):
                  ({ identifier } = this.uniqueIdentifierHandle);
                  return [
                    "((",
                    identifier,
                    " = ",
                    this.left.toSourceNode(commonSubToSourceNodeProps),
                    ") != null ? ",
                    identifier,
                    " : ",
                    this.right.toSourceNode(commonSubToSourceNodeProps),
                    ")"
                  ];
                case !!operatorIsInfixJs(this.operator):
                  return binaryOperatorToSourceNodeArray(
                    this.operator,
                    this.left.toSourceNode(commonSubToSourceNodeProps),
                    this.right.toSourceNode(commonSubToSourceNodeProps),
                    this.left
                  );
                default:
                  parentOperatorPrecidence = getOpPrecidence(this.operator);
                  return binaryOperatorToSourceNodeArray(
                    this.operator,
                    this.left.toSourceNode(
                      merge(commonSubToSourceNodeProps, {
                        parentOperatorPrecidence,
                        subExpression: true,
                        isLeftOperand: true
                      })
                    ),
                    this.right.toSourceNode(
                      merge(commonSubToSourceNodeProps, {
                        parentOperatorPrecidence,
                        subExpression: true,
                        isLeftOperand: false
                      })
                    ),
                    this.left
                  );
              }
            })();
            return options && this._needsParens(options)
              ? this.createSourceNode("(", out, ")")
              : this.createSourceNode(out);
          };
          this.prototype._needsParens = function(toJsOptions) {
            let dotBase,
              parentOperatorPrecidence,
              isLeftOperand,
              isSub,
              operatorPrecidence;
            if (Caf.exists(toJsOptions)) {
              dotBase = toJsOptions.dotBase;
              parentOperatorPrecidence = toJsOptions.parentOperatorPrecidence;
              isLeftOperand = toJsOptions.isLeftOperand;
              isSub = toJsOptions.isSub;
            }
            return !(parentOperatorPrecidence != null)
              ? dotBase
              : ((operatorPrecidence = getOpPrecidence(this.operator)),
                parentOperatorPrecidence &&
                operatorPrecidence < parentOperatorPrecidence
                  ? false
                  : parentOperatorPrecidence &&
                    operatorPrecidence === parentOperatorPrecidence &&
                    isLeftOperand ===
                      getPrecidenceLevelIsLeftAssociative(operatorPrecidence)
                  ? false
                  : true);
          };
        }
      ));
    }
  );
});
