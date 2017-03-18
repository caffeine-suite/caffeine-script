let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return UndefinedStn = Caf.defClass(
    class UndefinedStn extends BaseStn {},
    function(UndefinedStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return "undefined";
      };
    }
  );
});
