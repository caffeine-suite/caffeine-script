"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SimpleLiteralStn;
  return (SimpleLiteralStn = Caf.defClass(
    class SimpleLiteralStn extends require("../BaseStn") {},
    function(SimpleLiteralStn, classSuper, instanceSuper) {
      this.prototype.toSourceNode = function(options) {
        let value;
        ({ value } = this.props);
        return this.createSourceNode(value);
      };
      this.getter({
        propName: function() {
          return this.props.value;
        },
        canBeUsedInES6Structuring: function() {
          return true;
        }
      });
    }
  ));
});
