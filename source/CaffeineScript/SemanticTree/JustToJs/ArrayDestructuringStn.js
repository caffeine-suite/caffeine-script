"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ArrayDestructuringStn;
    return (ArrayDestructuringStn = Caf.defClass(
      class ArrayDestructuringStn extends require("../BaseStn") {},
      function(ArrayDestructuringStn, classSuper, instanceSuper) {
        this.prototype.toJs = function() {
          return `[${Caf.toString(this.childrenToJs(", "))}]`;
        };
      }
    ));
  })();
});
