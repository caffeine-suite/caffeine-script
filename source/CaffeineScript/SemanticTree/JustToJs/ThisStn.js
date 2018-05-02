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
          },
          propName: function() {
            let cafTemp;
            return (cafTemp = this.identifier) != null ? cafTemp : "this";
          }
        });
        this.prototype.toJs = function() {
          let id;
          return (id = this.identifier) ? `this.${Caf.toString(id)}` : "this";
        };
        this.prototype.toSourceNode = function() {
          let id;
          return (id = this.identifier)
            ? this.createSourceNode("this.", id)
            : this.createSourceNode("this");
        };
      }
    ));
  })();
});
