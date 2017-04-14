"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    ArrayDestructuringStn,
    BaseStn = require("./BaseStn");
  return ArrayDestructuringStn = Caf.defClass(
    class ArrayDestructuringStn extends BaseStn {},
    function(ArrayDestructuringStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `[${Caf.toString(this.childrenToJs(", "))}]`;
      };
    }
  );
});
