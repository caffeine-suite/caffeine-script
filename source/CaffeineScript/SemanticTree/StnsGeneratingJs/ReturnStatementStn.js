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
            p = this.findParent(/^(Class|Comprehension|FunctionDefinition)$/);
            while (
              p &&
              p.type === "Comprehension" &&
              p.getGeneratesInlineIteration()
            ) {
              p = p.findParent(/^(Class|Comprehension|FunctionDefinition)$/);
            }
            return !(p != null)
              ? (() => {
                  throw new Error("'return' not allowed in root context.");
                })()
              : p.type !== "FunctionDefinition"
              ? (() => {
                  throw new Error(
                    "'return' must be inside a function context and NOT inside certain comprehesions (any without an 'in/from-array' or 'in/from-object' clause)"
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
