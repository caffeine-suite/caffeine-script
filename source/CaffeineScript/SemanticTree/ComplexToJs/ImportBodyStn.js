"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ImportStn, ImportBodyStn;
    ImportStn = require("./ImportStn");
    return (ImportBodyStn = Caf.defClass(
      class ImportBodyStn extends require("../ScopeStnMixin")(
        require("../BaseStn")
      ) {},
      function(ImportBodyStn, classSuper, instanceSuper) {
        this.prototype.isImports = true;
        this.prototype.toSourceNode = function(options) {
          return this.children[0].toSourceNode(options);
        };
      }
    ));
  })();
});
