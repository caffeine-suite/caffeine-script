"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "formattedInspect", "StnRegistry"],
    [global, require("../../StandardImport")],
    (Error, formattedInspect, StnRegistry) => {
      let ControlOperatorStn;
      return (ControlOperatorStn = Caf.defClass(
        class ControlOperatorStn extends require("../BaseStn") {
          constructor(props, children) {
            super(...arguments);
            this.operand = props.operand;
            this.joiner = props.joiner;
            if (this.labeledChildren.expression) {
              this.expression = this.labeledChildren.expression;
              this.body =
                this.labeledChildren.body || StnRegistry.UndefinedStn();
              this.elseBody = this.labeledChildren.elseBody;
            } else {
              this.expression = children[0];
              this.body = children[1] || StnRegistry.UndefinedStn();
              this.elseBody = children[2];
            }
            if (!(this.body.type === "Statements")) {
              (this.body = StnRegistry.StatementsStn(this.body)).parent = this;
            }
            this.validate();
          }
        },
        function(ControlOperatorStn, classSuper, instanceSuper) {
          this.prototype.validate = function() {
            return (() => {
              switch (this.operand) {
                case "while":
                case "until":
                  if (this.elseBody) {
                    throw new Error(
                      `else not expected after ${Caf.toString(this.operand)}`
                    );
                  }
                  return this.joiner === "then"
                    ? (() => {
                        throw new Error(
                          `then not expected after ${Caf.toString(
                            this.operand
                          )}`
                        );
                      })()
                    : undefined;
                case "if":
                case "unless":
                  return this.joiner === "do"
                    ? (() => {
                        throw new Error(
                          `do not expected after ${Caf.toString(this.operand)}`
                        );
                      })()
                    : undefined;
                default:
                  return (() => {
                    throw new Error(
                      `INTERNAL: invalid control-operator: ${Caf.toString(
                        formattedInspect(this.operand)
                      )}`
                    );
                  })();
              }
            })();
          };
          this.prototype.toJs = function(options = {}) {
            let expression,
              returnValueIsIgnored,
              jsExpression,
              operand,
              tempVarIdentifier,
              out,
              cafBase,
              cafBase1;
            ({ expression, returnValueIsIgnored } = options);
            jsExpression = this.expression.toJsExpression();
            ({ operand } = this);
            operand = (() => {
              switch (operand) {
                case "until":
                case "unless":
                  jsExpression = `!${Caf.toString(
                    this.applyParens(jsExpression)
                  )}`;
                  return operand === "until" ? "while" : "if";
                default:
                  return operand;
              }
            })();
            return expression
              ? operand === "while"
                ? returnValueIsIgnored
                  ? `(() => {while ${Caf.toString(
                      this.applyRequiredParens(jsExpression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(false)
                    )};};})()`
                  : ((tempVarIdentifier = this.scope.uniqueIdentifier),
                    `(() => {while ${Caf.toString(
                      this.applyRequiredParens(jsExpression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(
                        `${Caf.toString(tempVarIdentifier)} =`
                      )
                    )};}; return ${Caf.toString(tempVarIdentifier)}})()`)
                : ((out = `${Caf.toString(
                    this.applyParens(jsExpression)
                  )} ? ${Caf.toString(
                    this.body.toJsExpression()
                  )} : ${Caf.toString(
                    (Caf.exists((cafBase = this.elseBody)) &&
                      cafBase.toJsExpression()) ||
                      "undefined"
                  )}`),
                  options.subExpression || options.dotBase
                    ? (out = `(${Caf.toString(out)})`)
                    : out)
              : `${Caf.toString(operand)} ${Caf.toString(
                  this.applyRequiredParens(jsExpression)
                )} {${Caf.toString(this.body.toJs())};}${Caf.toString(
                  this.elseBody
                    ? ` else {${Caf.toString(
                        Caf.exists((cafBase1 = this.elseBody)) &&
                          cafBase1.toJs()
                      )};}`
                    : ""
                )}`;
          };
          this.prototype.toSourceNode = function(options = {}) {
            let expression,
              returnValueIsIgnored,
              noParens,
              operand,
              negate,
              applyParens,
              expressionSourceNode,
              parts,
              tempVarIdentifier,
              cafBase;
            ({ expression, returnValueIsIgnored, noParens } = options);
            ({ operand } = this);
            negate = applyParens = false;
            expressionSourceNode = expressionSourceNode = (() => {
              switch (operand) {
                case "until":
                case "unless":
                  operand = operand === "until" ? "while" : "if";
                  return (expressionSourceNode = [
                    "!",
                    this.expression.toSourceNode({ dotBase: true })
                  ]);
                default:
                  return this.expression.toSourceNode({ noParens: true });
              }
            })();
            parts = expression
              ? (() => {
                  switch (operand) {
                    case "while":
                      return returnValueIsIgnored
                        ? this.doSourceNode(
                            "while(",
                            expressionSourceNode,
                            ") {",
                            this.body.toSourceNode(),
                            "};"
                          )
                        : ((tempVarIdentifier = this.scope.uniqueIdentifier),
                          this.doSourceNode(
                            `let ${Caf.toString(tempVarIdentifier)}; while(`,
                            expressionSourceNode,
                            ") {",
                            this.body.toSourceNode({
                              returnAction: `${Caf.toString(
                                tempVarIdentifier
                              )} =`
                            }),
                            `}; return ${Caf.toString(tempVarIdentifier)};`
                          ));
                    case "if":
                      applyParens = options.subExpression || options.dotBase;
                      return [
                        "(",
                        expressionSourceNode,
                        ")",
                        " ? ",
                        this.body.toSourceNode({ expression: true }),
                        " : ",
                        (Caf.exists((cafBase = this.elseBody)) &&
                          cafBase.toSourceNode({ expression: true })) ||
                          "undefined"
                      ];
                  }
                })()
              : [
                  operand,
                  " (",
                  expressionSourceNode,
                  ") {",
                  this.body.toSourceNode(),
                  "}",
                  this.elseBody
                    ? [" else {", this.elseBody.toSourceNode(), "}"]
                    : undefined
                ];
            return this.createSourceNode(
              applyParens && !noParens ? "(" : undefined,
              parts,
              applyParens && !noParens ? ")" : undefined
            );
          };
        }
      ));
    }
  );
});
