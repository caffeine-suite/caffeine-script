"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ArraySpreadElementStn;
    return (ArraySpreadElementStn = Caf.defClass(
      class ArraySpreadElementStn extends require("../BaseStn") {},
      function(ArraySpreadElementStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function() {
          return this.createSourceNode("...", this.childrenToSourceNodes());
        };
      }
    ));
  })();
});
