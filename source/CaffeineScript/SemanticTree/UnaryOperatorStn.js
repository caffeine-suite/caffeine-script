let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return UnaryOperatorStn = Caf.defClass(
    class UnaryOperatorStn extends BaseStn {},
    function(UnaryOperatorStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.operand === "?"
          ? `${Caf.toString(
              this.applyParens(this.children[0].toJsExpression())
            )} != null`
          : `${Caf.toString(this.normalizedOperand)}${Caf.toString(
              this.applyParens(this.children[0].toJsExpression())
            )}`;
      };
    }
  );
});
