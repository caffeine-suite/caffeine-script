let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return ArrayDestructuringStn = Caf.defClass(
    class ArrayDestructuringStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return `[${this.childrenToJs(", ")}]`;
      };
      return this;
    }
  );
});
