"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    LabeledDestructuringTargetStn,
    BaseStn = require("./BaseStn");
  return LabeledDestructuringTargetStn = Caf.defClass(
    class LabeledDestructuringTargetStn extends BaseStn {},
    function(LabeledDestructuringTargetStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return this.childrenToJs(": ");
      };
    }
  );
});
