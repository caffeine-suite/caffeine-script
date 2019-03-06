"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, require("../../StandardImport")],
    Error => {
      let ReturnStatementStn;
      return (ReturnStatementStn = Caf.defClass(
        class ReturnStatementStn extends require("../BaseStn") {},
        function(ReturnStatementStn, classSuper, instanceSuper) {
          this.prototype.validate = function() {
            let p;
            p = this.findParent(
              /^(Class|Comprehesion|FunctionDefinition|While|Switch|ControlOperator)$/
            );
            return !p || /^(Class|Comprehesion)/.test(p.type)
              ? (() => {
                  throw new Error(
                    "'return' not allowed in: root, class or comprehesion contexts."
                  );
                })()
              : undefined;
          };
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              this.children[0]
                ? ["return ", this.children[0].toSourceNode()]
                : "return"
            );
          };
        }
      ));
    }
  );
});
