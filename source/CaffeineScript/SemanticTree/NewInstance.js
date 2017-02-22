let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return NewInstanceStn = Caf.defClass(
    class NewInstanceStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return `new ${this.childrenToJs()}`;
      };
      return this;
    }
  );
});
