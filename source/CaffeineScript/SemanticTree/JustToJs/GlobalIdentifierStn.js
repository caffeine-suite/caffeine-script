"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let GlobalIdentifierStn;
    return (GlobalIdentifierStn = Caf.defClass(
      class GlobalIdentifierStn extends require("../BaseStn") {},
      function(GlobalIdentifierStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(this.props.identifier);
        };
      }
    ));
  })();
});
