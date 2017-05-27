"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let UnaryOperatorStn;
  return UnaryOperatorStn = Caf.defClass(
    class UnaryOperatorStn extends require("../BaseStn") {},
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
