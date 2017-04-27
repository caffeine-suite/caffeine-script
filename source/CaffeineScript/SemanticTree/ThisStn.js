"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ThisStn;
  return ThisStn = Caf.defClass(
    class ThisStn extends require("./BaseStn") {},
    function(ThisStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.children[0]
          ? `this.${Caf.toString(this.children[0].toJs())}`
          : "this";
      };
    }
  );
});
