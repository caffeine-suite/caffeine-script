"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let LabeledDestructuringTargetStn;
    return (LabeledDestructuringTargetStn = Caf.defClass(
      class LabeledDestructuringTargetStn extends require("../BaseStn") {},
      function(LabeledDestructuringTargetStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function(options) {
          return Caf.exists(options) && options.restructuring
            ? this.children[1].toSourceNode(options)
            : this.childrenToSourceNodes(": ");
        };
      }
    ));
  })();
});
