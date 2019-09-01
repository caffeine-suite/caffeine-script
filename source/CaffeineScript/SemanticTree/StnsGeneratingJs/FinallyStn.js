"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let FinallyStn;
    return (FinallyStn = Caf.defClass(
      class FinallyStn extends require("../BaseStn") {},
      function(FinallyStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function(options = {}) {
          let base;
          return this.createSourceNode(
            "finally {",
            Caf.exists((base = this.labeledChildren.body)) &&
              base.toSourceNode(),
            "}"
          );
        };
      }
    ));
  })();
});
