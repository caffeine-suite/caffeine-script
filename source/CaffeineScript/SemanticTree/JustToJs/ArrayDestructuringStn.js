"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ArrayDestructuringStn;
    return (ArrayDestructuringStn = Caf.defClass(
      class ArrayDestructuringStn extends require("../BaseStn") {},
      function(ArrayDestructuringStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options) {
          let restructuring, restructuringStart, subOptions;
          if (options) {
            ({ restructuring, restructuringStart } = options);
          }
          if (restructuringStart || restructuring) {
            subOptions = { restructuring: true };
          }
          return restructuring
            ? `${Caf.toString(this.childrenToJs(", ", subOptions))}`
            : `[${Caf.toString(this.childrenToJs(", ", subOptions))}]`;
        };
      }
    ));
  })();
});
