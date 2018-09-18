"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let LetStn;
    return (LetStn = Caf.defClass(
      class LetStn extends require("../BaseStn") {},
      function(LetStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          return Caf.each2(this.children, child =>
            child.updateScope(this.scope, { insideLet: true })
          );
        };
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(
            "let ",
            Caf.array(this.children, (child, i) => {
              let c;
              c = child.toSourceNode();
              return i > 0 ? [", ", c] : c;
            })
          );
        };
      }
    ));
  })();
});
