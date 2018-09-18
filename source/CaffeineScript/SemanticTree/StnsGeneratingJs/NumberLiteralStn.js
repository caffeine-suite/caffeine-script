"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["parseFloat"],
    [global, require("../../StandardImport")],
    parseFloat => {
      let NumberLiteralStn;
      return (NumberLiteralStn = Caf.defClass(
        class NumberLiteralStn extends require("../BaseStn") {},
        function(NumberLiteralStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function(options) {
            let value;
            ({ value } = this.props);
            return this.createSourceNode(
              Caf.exists(options) && options.dotBase
                ? ["(", `${Caf.toString(value)}`, ")"]
                : `${Caf.toString(value)}`
            );
          };
          this.getter({
            propName: function() {
              return this.props.value;
            },
            canBeUsedInES6Structuring: function() {
              return true;
            },
            compileTimeValue: function() {
              return parseFloat(this.props.value);
            }
          });
        }
      ));
    }
  );
});
