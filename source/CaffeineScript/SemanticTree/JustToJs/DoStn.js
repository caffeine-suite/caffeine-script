"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let DoStn, Object;
  ({ Object } = Caf.import(["Object"], [
    require("../../StandardImport"),
    global
  ]));
  return DoStn = Caf.defClass(
    class DoStn extends require("../BaseStn") {},
    function(DoStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let functionDefinition;
        ({ functionDefinition } = this.labeledChildren);
        return `(${Caf.toString(functionDefinition.toJs())})(${Caf.toString(
          Object.keys(functionDefinition.argumentNames).join(", ")
        )})`;
      };
    }
  );
});
