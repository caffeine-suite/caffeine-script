let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    Lib = require("../Lib"),
    BaseStn = require("./BaseStn");
  return StatementsStn = Caf.defClass(
    class StatementsStn extends BaseStn {},
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
        return Caf.e(lines = this.children, [], (c, i, into) => {
          let statement;
          into.push(
            returnAction && i === lines.length - 1
              ? !c.jsExpressionUsesReturn
                  ? `${returnAction} ${c.toJsExpression()}`
                  : c.toJs({ generateReturnStatement: true })
              : generateStatements
                  ? (statement = c.toJsStatement(), statement.match(/^function/)
                      ? this.applyRequiredParens(statement)
                      : statement)
                  : c.toJsExpression(true)
          );
        });
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
