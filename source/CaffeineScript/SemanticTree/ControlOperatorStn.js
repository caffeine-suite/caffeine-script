"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let UndefinedStn, ControlOperatorStn, Error, formattedInspect;
  ({ Error, formattedInspect } = Caf.import(["Error", "formattedInspect"], [
    require("../StandardImport"),
    global
  ]));
  UndefinedStn = require("./UndefinedStn");
  return ControlOperatorStn = Caf.defClass(
    class ControlOperatorStn extends require("./BaseStn") {
      constructor(props, children) {
        super(...arguments);
        this.operand = props.operand;
        this.joiner = props.joiner;
        if (this.labeledChildren.expression) {
          this.expression = this.labeledChildren.expression;
          this.body = this.labeledChildren.body || UndefinedStn();
          this.elseBody = this.labeledChildren.elseBody;
        } else {
          this.expression = children[0];
          this.body = children[1] || UndefinedStn();
          this.elseBody = children[2];
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
                      `then not expected after ${Caf.toString(this.operand)}`
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
        let returnExpression,
          returnValueIsIgnored,
          expression,
          operand,
          tempVarIdentifier,
          cafBase,
          cafBase1;
        ({ returnExpression, returnValueIsIgnored } = options);
        expression = this.expression.toJsExpression();
        ({ operand } = this);
        operand = (() => {
          switch (operand) {
            case "until":
            case "unless":
              expression = `!${Caf.toString(this.applyParens(expression))}`;
              return operand === "until" ? "while" : "if";
            default:
              return operand;
          }
        })();
        return returnExpression
          ? operand === "while"
              ? returnValueIsIgnored
                  ? `(() => {while ${Caf.toString(
                      this.applyRequiredParens(expression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(false)
                    )};};})()`
                  : (tempVarIdentifier = this.scope.uniqueIdentifier, `(() => {while ${Caf.toString(
                      this.applyRequiredParens(expression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(
                        `${Caf.toString(tempVarIdentifier)} =`
                      )
                    )};}; return ${Caf.toString(tempVarIdentifier)}})()`)
              : `${Caf.toString(this.applyParens(expression))} ? ${Caf.toString(
                  this.body.toJsParenExpression()
                )} : ${Caf.toString(
                  Caf.exists(cafBase = this.elseBody) &&
                    cafBase.toJsParenExpression() ||
                    "undefined"
                )}`
          : `${Caf.toString(operand)} ${Caf.toString(
              this.applyRequiredParens(expression)
            )} {${Caf.toString(this.body.toJs())};}${Caf.toString(
              this.elseBody
                ? ` else {${Caf.toString(
                    Caf.exists(cafBase1 = this.elseBody) && cafBase1.toJs()
                  )};}`
                : ""
            )}`;
      };
      this.prototype.toJsParenExpression = function() {
        return this.applyRequiredParens(this.toJs({ returnExpression: true }));
      };
      this.prototype.toJsExpression = function(returnValueIsIgnored) {
        return this.toJs({ returnExpression: true, returnValueIsIgnored });
      };
    }
  );
});
