"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ObjectDestructuringStn;
  return (ObjectDestructuringStn = Caf.defClass(
    class ObjectDestructuringStn extends require("../BaseStn") {},
    function(ObjectDestructuringStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `{${Caf.toString(this.childrenToJs(", "))}}`;
      };
    }
  ));
});
