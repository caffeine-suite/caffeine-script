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
            let cafTemp, cafTemp1, cafTemp2;
            super(...arguments);
            this.operand = (cafTemp = props.operand) != null ? cafTemp : "if";
            if (this.labeledChildren.expression) {
              this.expression = this.labeledChildren.expression;
              this.body =
                (cafTemp1 = this.labeledChildren.body) != null
                  ? cafTemp1
                  : StnRegistry.UndefinedStn();
              this.elseBody = this.labeledChildren.elseBody;
            } else {
              this.expression = children[0];
              this.body =
                (cafTemp2 = children[1]) != null
                  ? cafTemp2
                  : StnRegistry.UndefinedStn();
              this.elseBody = children[2];
            }
            if (!(this.body.type === "Statements")) {
              (this.body = StnRegistry.StatementsStn(this.body)).parent = this;
            }
            this.validate();
          }
        },
        function(ControlOperatorStn, classSuper, instanceSuper) {
          this.getter({
            whileReturnTempVar: function() {
              let cafTemp;
              return (cafTemp = this._whileReturnTempVar) != null
                ? cafTemp
                : (this._whileReturnTempVar = this.scope.uniqueIdentifier);
            }
          });
          this.prototype.validate = function() {
            return (() => {
              switch (this.operand) {
                case "while":
                case "until":
                  return this.elseBody
                    ? (() => {
                        throw new Error(
                          `else not expected after ${Caf.toString(
                            this.operand
                          )}`
                        );
                      })()
                    : undefined;
                case "if":
                case "unless":
                  return null;
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
          this.prototype.toSourceNode = function(options = {}) {
            let expression,
              returnValueIsIgnored,
              noParens,
              operand,
              applyParens,
              unaryOperator,
              parts,
              tempVarIdentifier,
              cafBase;
            ({ expression, returnValueIsIgnored, noParens } = options);
            ({ operand } = this);
            applyParens = false;
            unaryOperator = "";
            switch (operand) {
              case "until":
              case "unless":
                operand = operand === "until" ? "while" : "if";
                unaryOperator = "!";
            }
            parts = expression
              ? (() => {
                  switch (operand) {
                    case "while":
                      return returnValueIsIgnored
                        ? this.doSourceNode(
                            "while (",
                            unaryOperator,
                            this.expression.toSourceNode({
                              noParens: true,
                              expression: true,
                              dotBase: !!unaryOperator
                            }),
                            ") {",
                            this.body.toSourceNode(),
                            "};"
                          )
                        : ((tempVarIdentifier = this.whileReturnTempVar),
                          this.doSourceNode(
                            "while (",
                            unaryOperator,
                            this.expression.toSourceNode({
                              noParens: true,
                              expression: true,
                              dotBase: !!unaryOperator
                            }),
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
                        unaryOperator,
                        this.expression.toSourceNode({
                          dotBase: true,
                          expression: true
                        }),
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
                  unaryOperator,
                  this.expression.toSourceNode({
                    noParens: true,
                    expression: true,
                    dotBase: !!unaryOperator
                  }),
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
