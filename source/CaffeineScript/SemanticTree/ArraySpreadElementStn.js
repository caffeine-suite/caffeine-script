let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return ArraySpreadElementStn = Caf.defClass(
    class ArraySpreadElementStn extends BaseStn {},
    function(ArraySpreadElementStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `...${this.childrenToJs()}`;
      };
    }
  );
});
