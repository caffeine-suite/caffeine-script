"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let UndefinedStn;
    return (UndefinedStn = Caf.defClass(
      class UndefinedStn extends require("../BaseStn") {},
      function(UndefinedStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function() {
          return this.createSourceNode("undefined");
        };
      }
    ));
  })();
});
