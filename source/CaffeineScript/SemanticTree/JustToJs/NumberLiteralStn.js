"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let NumberLiteralStn;
  return (NumberLiteralStn = Caf.defClass(
    class NumberLiteralStn extends require("../BaseStn") {},
    function(NumberLiteralStn, classSuper, instanceSuper) {
      this.prototype.toSourceNode = function(options) {
        let value;
        ({ value } = this.props);
        return this.createSourceNode(
          Caf.exists(options) && options.dotBase ? ["(", value, ")"] : value
        );
      };
      this.getter({
        propName: function() {
          return this.props.value;
        },
        canBeUsedInES6Structuring: function() {
          return true;
        }
      });
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
