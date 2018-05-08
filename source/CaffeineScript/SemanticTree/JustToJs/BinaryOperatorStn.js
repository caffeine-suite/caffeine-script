"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "operatorIsInfixJs",
      "binaryOperatorToSourceNodeArray",
      "getOpPrecidence",
      "binaryOperatorToJs",
      "getPrecidenceLevelIsLeftAssociative",
      "Error",
      "formattedInspect"
    ],
    [global, require("../../StandardImport"), require("../../OperatorHelper")],
    (
      operatorIsInfixJs,
      binaryOperatorToSourceNodeArray,
      getOpPrecidence,
      binaryOperatorToJs,
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
          this.prototype.toSourceNode = function(options) {
            let out, identifier, parentOperatorPrecidence;
            out = (() => {
              switch (false) {
                case !(this.operator === "?" && this.uniqueIdentifierHandle):
                  ({ identifier } = this.uniqueIdentifierHandle);
                  return [
                    "((",
                    identifier,
                    " = ",
                    this.left.toSourceNode({ expression: true }),
                    ") != null ? ",
                    identifier,
                    " : ",
                    this.right.toSourceNode({ expression: true }),
                    ")"
                  ];
                case !!operatorIsInfixJs(this.operator):
                  return binaryOperatorToSourceNodeArray(
                    this.operator,
                    this.left.toSourceNode({ expression: true }),
                    this.right.toSourceNode({ expression: true }),
                    this.left
                  );
                default:
                  parentOperatorPrecidence = getOpPrecidence(this.operator);
                  return binaryOperatorToSourceNodeArray(
                    this.operator,
                    this.left.toSourceNode({
                      expression: true,
                      subExpression: true,
                      parentOperatorPrecidence,
                      isLeftOperand: true
                    }),
                    this.right.toSourceNode({
                      expression: true,
                      subExpression: true,
                      parentOperatorPrecidence,
                      isLeftOperand: false
                    }),
                    this.left
                  );
              }
            })();
            return options && this._needsParens(options)
              ? this.createSourceNode("(", out, ")")
              : this.createSourceNode(out);
          };
          this.prototype.toJs = function(options) {
            let out, identifier, parentOperatorPrecidence;
            out =
              this.operator === "?" && this.uniqueIdentifierHandle
                ? (({ identifier } = this.uniqueIdentifierHandle),
                  `((${Caf.toString(identifier)} = ${Caf.toString(
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
                  : ((parentOperatorPrecidence = getOpPrecidence(
                      this.operator
                    )),
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
                    ));
            return options
              ? this._needsParens(options)
                ? `(${Caf.toString(out)})`
                : out
              : out;
          };
          this.prototype._needsParens = function(toJsOptions) {
            let dotBase,
              parentOperatorPrecidence,
              isLeftOperand,
              operatorPrecidence;
            if (toJsOptions) {
              ({
                dotBase,
                parentOperatorPrecidence,
                isLeftOperand
              } = toJsOptions);
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
