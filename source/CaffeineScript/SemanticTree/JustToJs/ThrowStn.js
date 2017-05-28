"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ThrowStn;
  return ThrowStn = Caf.defClass(
    class ThrowStn extends require("../BaseStn") {},
    function(ThrowStn, classSuper, instanceSuper) {
      this.prototype.toJs = function(options = {}) {
        return options.expression
          ? `(()=>{${Caf.toString(this.toJs())};})()`
          : `throw ${Caf.toString(this.childrenToJs())}`;
      };
    }
  );
});
