"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ThrowStn;
    return (ThrowStn = Caf.defClass(
      class ThrowStn extends require("../BaseStn") {},
      function(ThrowStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options = {}) {
          return options.expression
            ? `(() => {${Caf.toString(this.toJs())};})()`
            : `throw ${Caf.toString(this.childrenToJs())}`;
        };
        this.prototype.toSourceNode = function({ expression }) {
          let base;
          base = ["throw ", this.childrenToSourceNodes()];
          return this.createSourceNode(
            expression ? this.doSourceNode(base, ";") : base
          );
        };
      }
    ));
  })();
});
