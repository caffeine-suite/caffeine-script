let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return GlobalIdentifierStn = Caf.defClass(
    class GlobalIdentifierStn extends BaseStn {},
    function() {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.identifier;
      };
      return this;
    }
  );
});
