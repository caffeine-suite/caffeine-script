"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SimpleLiteralStn;
  return (SimpleLiteralStn = Caf.defClass(
    class SimpleLiteralStn extends require("../BaseStn") {},
    function(SimpleLiteralStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toSourceNode = function(options) {
        let value;
        ({ value } = this.props);
        return this.createSourceNode(
          Caf.exists(options) && options.dotBase ? ["(", value, ")"] : value
        );
      };
      this.prototype.toJs = function(options) {
        let value;
        ({ value } = this.props);
        return Caf.exists(options) && options.dotBase
          ? `(${Caf.toString(value)})`
          : value;
      };
    }
  ));
});
