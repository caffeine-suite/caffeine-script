let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return ObjectDestructuringStn = Caf.defClass(
    class ObjectDestructuringStn extends BaseStn {},
    function(ObjectDestructuringStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `{${this.childrenToJs(", ")}}`;
      };
    }
  );
});
