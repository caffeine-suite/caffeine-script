let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return ObjectDestructuringStn = Caf.defClass(
    class ObjectDestructuringStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return `{${this.childrenToJs(", ")}}`;
      };
      return this;
    }
  );
});
