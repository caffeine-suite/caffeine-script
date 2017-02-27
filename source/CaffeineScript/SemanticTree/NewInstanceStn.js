let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return NewInstanceStn = Caf.defClass(
    class NewInstanceStn extends BaseStn {},
    function(NewInstanceStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `new ${this.childrenToJs()}`;
      };
    }
  );
});
