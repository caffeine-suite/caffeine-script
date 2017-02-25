let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return ArraySpreadElementStn = Caf.defClass(
    class ArraySpreadElementStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return `...${this.childrenToJs()}`;
      };
      return this;
    }
  );
});
