"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Object"],
    [global, require("../../StandardImport")],
    Object => {
      let DoStn;
      return (DoStn = Caf.defClass(
        class DoStn extends require("../BaseStn") {},
        function(DoStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function() {
            let functionDefinition;
            ({ functionDefinition } = this.labeledChildren);
            return this.createSourceNode(
              "(",
              functionDefinition.toSourceNode(),
              ")(",
              Object.keys(functionDefinition.argumentNames).join(", "),
              ")"
            );
          };
        }
      ));
    }
  );
});
