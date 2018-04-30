"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten"],
    [global, require("../../StandardImport"), require("../../Lib")],
    compactFlatten => {
      let StatementsStn;
      return (StatementsStn = Caf.defClass(
        class StatementsStn extends require("../BaseStn") {},
        function(StatementsStn, classSuper, instanceSuper) {
          this.prototype.needsParens = false;
          this.prototype.toSourceNode = function(options) {
            let returnAction, generateStatements;
            if (options) {
              ({ returnAction, generateStatements } = options);
            }
            generateStatements != null
              ? generateStatements
              : (generateStatements = true);
            return this.newSourceNode.add(
              Caf.exists(options) && options.expression
                ? (() => {
                    switch (this.children.length) {
                      case 0:
                        return "undefined";
                      case 1:
                        return this.children[0].toSourceNode(options);
                      default:
                        return compactFlatten([
                          "(",
                          this._getChildrenSourceNodes("", false),
                          ")"
                        ]);
                    }
                  })()
                : this._getChildrenSourceNodes(returnAction, generateStatements)
            );
          };
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
            returnAction = (() => {
              switch (returnAction) {
                case true:
                  return (returnAction = "return");
                case false:
                  return null;
                default:
                  return returnAction;
              }
            })();
            return Caf.each((lines = this.children), [], (c, i, cafInto) => {
              let statement;
              cafInto.push(
                returnAction != null && i === lines.length - 1
                  ? !c.jsExpressionUsesReturn
                    ? returnAction.length > 0
                      ? `${Caf.toString(returnAction)} ${Caf.toString(
                          c.toJsExpression()
                        )}`
                      : c.toJsExpression()
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
          this.prototype._getChildrenSourceNodes = function(
            returnAction,
            generateStatements = true
          ) {
            let lines, out;
            returnAction = (() => {
              switch (returnAction) {
                case true:
                  return (returnAction = "return");
                case false:
                  return null;
                default:
                  return returnAction;
              }
            })();
            Caf.each((lines = this.children), (out = []), (c, i, cafInto) => {
              let childExpression, statement;
              if (i > 0) {
                out.push("; ");
              }
              cafInto.push(
                returnAction != null && i === lines.length - 1
                  ? !c.jsExpressionUsesReturn
                    ? ((childExpression = c.toSourceNode({ expression: true })),
                      returnAction.length > 0
                        ? [returnAction, " ", childExpression]
                        : childExpression)
                    : c.toJs({ generateReturnStatement: true })
                  : generateStatements
                    ? ((statement = c.toSourceNode({ statement: true })),
                      c.type === "FunctionDefinition"
                        ? ["(", statement, ")"]
                        : statement)
                    : c.toSourceNode({
                        expression: true,
                        returnValueIsIgnored: true
                      })
              );
            });
            out.push(";");
            return out;
          };
        }
      ));
    }
  );
});
