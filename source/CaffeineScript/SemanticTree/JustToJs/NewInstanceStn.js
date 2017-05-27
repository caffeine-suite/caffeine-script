"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let NewInstanceStn;
  return NewInstanceStn = Caf.defClass(
    class NewInstanceStn extends require("../BaseStn") {},
    function(NewInstanceStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `new ${Caf.toString(this.childrenToJs())}`;
      };
    }
  );
});
