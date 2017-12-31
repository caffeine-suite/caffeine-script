"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let FunctionDefinitionArgsStn;
    return (FunctionDefinitionArgsStn = Caf.defClass(
      class FunctionDefinitionArgsStn extends require("../BaseStn") {},
      function(FunctionDefinitionArgsStn, classSuper, instanceSuper) {
        this.getter({
          argumentNameList: function() {
            return Caf.each(this.children, [], (c, cafK, cafInto) => {
              if (c.argumentName) {
                cafInto.push(c.argumentName);
              }
            });
          }
        });
        this.prototype.toJs = function() {
          return `(${Caf.toString(
            Caf.each(this.children, [], (c, cafK, cafInto) => {
              cafInto.push(c.toJs());
            }).join(", ")
          )})`;
        };
      }
    ));
  })();
});
