"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ValueStn;
  return ValueStn = Caf.defClass(
    class ValueStn extends require("./BaseStn") {},
    function(ValueStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return this.childrenToJs();
      };
    }
  );
});
