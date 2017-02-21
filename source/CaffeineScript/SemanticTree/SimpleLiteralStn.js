let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let BaseStn = require("./BaseStn");
  return SimpleLiteralStn = Caf.defClass(
    class SimpleLiteralStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return this.props.value;
      };
      return this;
    }
  );
});
