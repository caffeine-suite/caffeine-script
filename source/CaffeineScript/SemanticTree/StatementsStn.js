let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    Lib = require("../Lib"),
    BaseStn = require("./BaseStn");
  return StatementsStn = Caf.defClass(
    class StatementsStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return this.getChildrenStatementsJsArray().join("; ");
      };
      this.prototype.toFunctionBodyJs = function(returnAction = true) {
        return this.toFunctionBodyJsArray(returnAction).join("; ");
      };
      this.prototype.toFunctionBodyJsArray = function(returnAction = true) {
        return this.getChildrenStatementsJsArray(true, returnAction);
      };
      this.prototype.getChildrenStatementsJsArray = function(
        returnLastValue = false,
        returnAction = "return",
        generateStatements = true
      ) {
        let lines;
        if (returnAction === true) {
          returnAction = "return";
        }
        return Caf.e(lines = this.children, [], (c, i, into) => {
          let statement;
          return into.push(
            returnLastValue && i === lines.length - 1
              ? returnAction && !c.jsExpressionUsesReturn
                  ? `${returnAction} ${c.toJsExpression()}`
                  : c.toJsExpression()
              : generateStatements
                  ? (statement = c.toJsStatement(), statement.match(/^function/)
                      ? this.applyRequiredParens(statement)
                      : statement)
                  : c.toJsExpression(true)
          );
        });
      };
      this.prototype.toJsParenExpression = function() {
        return this.children.length === 1
          ? this.children[0].toJsParenExpression()
          : this.applyRequiredParens(
              this.getChildrenStatementsJsArray(true, false, false).join(", ")
            );
      };
      return this;
    }
  );
});
