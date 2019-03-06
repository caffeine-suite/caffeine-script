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
              /^(Class|Comprehesion|FunctionDefinition|While|Switch|ControlOperator)$/
            );
            return !p || !/^(While)/.test(p.type)
              ? (() => {
                  throw new Error(
                    "'break' not allowed in: root, class or comprehesion contexts."
                  );
                })()
              : undefined;
          };
          this.prototype.toSourceNode = function() {
            let p;
            p = this.findParent(/^(While)$/);
            return this.createSourceNode(
              p.usedAsExpression && this.children[0]
                ? ["return ", this.children[0].toSourceNode()]
                : "break"
            );
          };
        }
      ));
    }
  );
});
