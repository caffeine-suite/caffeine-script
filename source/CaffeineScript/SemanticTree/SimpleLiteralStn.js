let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let BaseStn = require("./BaseStn");
  return SimpleLiteralStn = Caf.defClass(
    class SimpleLiteralStn extends BaseStn {},
    function() {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.value;
      };
      this.prototype.toJsExpressionWithParens = function(options) {
        let dotBase;
        ({ dotBase } = options);
        return dotBase ? `(${this.toJs()})` : this.toJs();
      };
      return this;
    }
  );
});
