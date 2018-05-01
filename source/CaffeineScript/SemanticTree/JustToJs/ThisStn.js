"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ThisStn;
    return (ThisStn = Caf.defClass(
      class ThisStn extends require("../BaseStn") {},
      function(ThisStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.getter({
          identifier: function() {
            let cafBase;
            return Caf.exists((cafBase = this.children[0])) && cafBase.toJs();
          }
        });
        this.prototype.toJs = function() {
          let id;
          return (id = this.identifier) ? `this.${Caf.toString(id)}` : "this";
        };
      }
    ));
  })();
});
