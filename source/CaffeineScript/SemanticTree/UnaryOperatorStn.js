let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return UnaryOperatorStn = Caf.defClass(
    class UnaryOperatorStn extends BaseStn {},
    function(UnaryOperatorStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.operand === "?"
          ? `${this.applyParens(this.children[0].toJsExpression())} != null`
          : `${this.normalizedOperand}${this.applyParens(
              this.children[0].toJsExpression()
            )}`;
      };
    }
  );
});
