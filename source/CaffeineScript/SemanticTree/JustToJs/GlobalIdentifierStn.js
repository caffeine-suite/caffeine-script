"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let GlobalIdentifierStn;
  return GlobalIdentifierStn = Caf.defClass(
    class GlobalIdentifierStn extends require("../BaseStn") {},
    function(GlobalIdentifierStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.identifier;
      };
    }
  );
});
