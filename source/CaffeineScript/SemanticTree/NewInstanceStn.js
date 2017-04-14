"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    NewInstanceStn,
    BaseStn = require("./BaseStn");
  return NewInstanceStn = Caf.defClass(
    class NewInstanceStn extends BaseStn {},
    function(NewInstanceStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `new ${Caf.toString(this.childrenToJs())}`;
      };
    }
  );
});
