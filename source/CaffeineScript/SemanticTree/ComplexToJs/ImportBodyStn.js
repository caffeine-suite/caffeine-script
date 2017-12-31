"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ImportStn, ImportBodyStn;
    return (
      (ImportStn = require("./ImportStn")),
      (ImportBodyStn = Caf.defClass(
        class ImportBodyStn extends require("../ScopeStnMixin")(
          require("../BaseStn")
        ) {},
        function(ImportBodyStn, classSuper, instanceSuper) {
          this.prototype.isImports = true;
          this.prototype.toJs = function(options) {
            return this.children[0].toJs(options);
          };
        }
      ))
    );
  })();
});
