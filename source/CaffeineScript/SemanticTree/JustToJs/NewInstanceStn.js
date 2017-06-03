"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let NewInstanceStn;
  return (NewInstanceStn = Caf.defClass(
    class NewInstanceStn extends require("../BaseStn") {},
    function(NewInstanceStn, classSuper, instanceSuper) {
      this.prototype.toJs = function(options) {
        return Caf.exists(options) && options.dotBase
          ? `(new ${Caf.toString(this.childrenToJs())})`
          : `new ${Caf.toString(this.childrenToJs())}`;
      };
    }
  ));
});
