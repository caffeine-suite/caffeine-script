"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StatementsStn;
  return StatementsStn = Caf.defClass(
    class StatementsStn extends require("./BaseStn") {},
    function(StatementsStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return this.getChildrenStatementsJsArray().join("; ");
      };
      this.prototype.toFunctionBodyJs = function(returnAction = true) {
        return this.toFunctionBodyJsArray(returnAction).join("; ");
      };
      this.prototype.toFunctionBodyJsArray = function(returnAction = true) {
        return this.getChildrenStatementsJsArray(returnAction);
      };
      this.prototype.getChildrenStatementsJsArray = function(
        returnAction,
        generateStatements = true
      ) {
        let lines;
        if (returnAction === true) {
          returnAction = "return";
        }
        return Caf.each(lines = this.children, [], (c, i, into) => {
          let statement;
          into.push(
            returnAction && i === lines.length - 1
              ? !c.jsExpressionUsesReturn
                  ? `${Caf.toString(returnAction)} ${Caf.toString(
                      c.toJsExpression()
                    )}`
                  : c.toJs({ generateReturnStatement: true })
              : generateStatements
                  ? (statement = c.toJsStatement(), statement.match(/^function/)
                      ? this.applyRequiredParens(statement)
                      : statement)
                  : c.toJsExpression(true)
          );
        });
      };
      this.prototype.toJsExpression = function() {
        return this.toJsParenExpression();
      };
      this.prototype.toJsParenExpression = function() {
        return (() => {
          switch (this.children.length) {
            case 0:
              return "undefined";
            case 1:
              return this.children[0].toJsParenExpression();
            default:
              return this.applyRequiredParens(
                this.getChildrenStatementsJsArray("", false).join(", ")
              );
          }
        })();
      };
      this.prototype.toJsExpressionWithParens = function() {
        return this.toJsParenExpression();
      };
    }
  );
});
