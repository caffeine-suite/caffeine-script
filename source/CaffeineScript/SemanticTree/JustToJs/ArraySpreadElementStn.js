"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ArraySpreadElementStn;
    return (ArraySpreadElementStn = Caf.defClass(
      class ArraySpreadElementStn extends require("../BaseStn") {},
      function(ArraySpreadElementStn, classSuper, instanceSuper) {
        this.prototype.toJs = function() {
          return `...${Caf.toString(this.childrenToJs())}`;
        };
      }
    ));
  })();
});
