"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, require("../../StandardImport"), require("../../Lib")],
    Error => {
      let StatementsStn;
      return (StatementsStn = Caf.defClass(
        class StatementsStn extends require("../BaseStn") {},
        function(StatementsStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function(options) {
            let returnAction, generateStatements, expression, classBody, out;
            if (options) {
              ({
                returnAction,
                generateStatements,
                expression,
                classBody
              } = options);
            }
            generateStatements != null
              ? generateStatements
              : (generateStatements = !expression);
            out = this.createSourceNode(
              expression
                ? (() => {
                    switch (this.children.length) {
                      case 0:
                        return !generateStatements && "undefined";
                      case 1:
                        return this.children[0].toSourceNode(options);
                      default:
                        return [
                          "(",
                          this._getChildrenSourceNodes(null, false),
                          ")"
                        ];
                    }
                  })()
                : this._getChildrenSourceNodes(
                    returnAction,
                    generateStatements,
                    classBody
                  )
            );
            return out;
          };
          this.prototype._getChildrenSourceNodes = function(
            returnAction,
            generateStatements = true,
            classBody
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
            Caf.array(
              (lines = this.children),
              (c, i) => {
                let a, childExpression;
                if (i > 0) {
                  out.push(generateStatements ? "; " : ", ");
                }
                a =
                  returnAction != null && i === lines.length - 1
                    ? !c.jsExpressionUsesReturn
                      ? ((childExpression = c.toSourceNode({
                          expression: true
                        })),
                        returnAction.length > 0
                          ? [returnAction, " ", childExpression]
                          : childExpression)
                      : ((() => {
                          throw new Error("what uses this conditional branch?");
                        })(),
                        c.toSourceNode({ generateReturnStatement: true }))
                    : generateStatements
                      ? c.toSourceNode({
                          statement: !classBody,
                          generateStatements: false
                        })
                      : c.toSourceNode({
                          expression: true,
                          returnValueIsIgnored: i < lines.length - 1
                        });
                return a;
              },
              null,
              (out = [])
            );
            if (generateStatements) {
              out.push(";");
            }
            return out;
          };
        }
      ));
    }
  );
});
