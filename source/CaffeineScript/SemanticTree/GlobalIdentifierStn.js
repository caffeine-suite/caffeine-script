"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    GlobalIdentifierStn,
    BaseStn = require("./BaseStn");
  return GlobalIdentifierStn = Caf.defClass(
    class GlobalIdentifierStn extends BaseStn {},
    function(GlobalIdentifierStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.identifier;
      };
    }
  );
});
