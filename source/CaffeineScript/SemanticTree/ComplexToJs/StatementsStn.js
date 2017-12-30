"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StatementsStn;
  return (StatementsStn = Caf.defClass(
    class StatementsStn extends require("../BaseStn") {},
    function(StatementsStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function(options) {
        return Caf.exists(options) && options.expression
          ? (() => {
              switch (this.children.length) {
                case 0:
                  return "undefined";
                case 1:
                  return this.children[0].toJsExpression();
                default:
                  return this.applyRequiredParens(
                    this._getChildrenStatementsJsArray("", false).join(", ")
                  );
              }
            })()
          : this._getChildrenStatementsJsArray().join("; ");
      };
      this.prototype.toFunctionBodyJs = function(returnAction = true) {
        return this.toFunctionBodyJsArray(returnAction).join("; ");
      };
      this.prototype.toFunctionBodyJsArray = function(returnAction = true) {
        return this._getChildrenStatementsJsArray(returnAction);
      };
      this.prototype._getChildrenStatementsJsArray = function(
        returnAction,
        generateStatements = true
      ) {
        let lines;
        if (returnAction === true) {
          returnAction = "return";
        }
        return Caf.each((lines = this.children), [], (c, i, cafInto) => {
          let statement;
          cafInto.push(
            returnAction && i === lines.length - 1
              ? !c.jsExpressionUsesReturn
                ? `${Caf.toString(returnAction)} ${Caf.toString(
                    c.toJsExpression()
                  )}`
                : c.toJs({ generateReturnStatement: true })
              : generateStatements
                ? ((statement = c.toJs({ statement: true })),
                  statement.match(/^function/)
                    ? this.applyRequiredParens(statement)
                    : statement)
                : c.toJsExpression({ returnValueIsIgnored: true })
          );
        });
      };
    }
  ));
});
