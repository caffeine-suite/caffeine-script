"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, require("../../StandardImport")],
    Error => {
      let BreakStatementStn;
      return (BreakStatementStn = Caf.defClass(
        class BreakStatementStn extends require("../BaseStn") {},
        function(BreakStatementStn, classSuper, instanceSuper) {
          this.prototype.validate = function() {
            let p;
            p = this.findParent(
              /^(Class|Comprehension|FunctionDefinition|While|Switch)$/
            );
            return (() => {
              switch (false) {
                case !!(p != null):
                  return (() => {
                    throw new Error("'break' not allowed in root context.");
                  })();
                case !(
                  /^(Comprehension)/.test(p.type) &&
                  p.getGeneratesInlineIteration()
                ):
                  return null;
                case !/^(While)/.test(p.type):
                  return null;
                default:
                  return (() => {
                    throw new Error(
                      "'break' not allowed in these contexts: root, class or comprehesions without an 'in/from-array' or 'in/from-object' clause"
                    );
                  })();
              }
            })();
          };
          this.prototype.toSourceNode = function() {
            let p, temp, base;
            p = this.findParent(/^(While)$/);
            return this.createSourceNode(
              (() => {
                switch (false) {
                  case !p.captureResultsAs:
                    return [
                      p.captureResultsAs.toSourceNode(),
                      " = ",
                      (temp =
                        Caf.exists((base = this.children[0])) &&
                        base.toSourceNode()) != null
                        ? temp
                        : "undefined",
                      "; break"
                    ];
                  case !(p.usedAsExpression && this.children[0]):
                    return ["return ", this.children[0].toSourceNode()];
                  default:
                    return "break";
                }
              })()
            );
          };
        }
      ));
    }
  );
});
