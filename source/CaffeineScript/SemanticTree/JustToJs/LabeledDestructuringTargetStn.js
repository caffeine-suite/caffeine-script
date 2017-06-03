"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let LabeledDestructuringTargetStn;
  return (LabeledDestructuringTargetStn = Caf.defClass(
    class LabeledDestructuringTargetStn extends require("../BaseStn") {},
    function(LabeledDestructuringTargetStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return this.childrenToJs(": ");
      };
    }
  ));
});
