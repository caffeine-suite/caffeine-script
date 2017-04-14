"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    FunctionDefinitionArgsStn,
    BaseStn = require("./BaseStn");
  return FunctionDefinitionArgsStn = Caf.defClass(
    class FunctionDefinitionArgsStn extends BaseStn {},
    function(FunctionDefinitionArgsStn, classSuper, instanceSuper) {
      this.getter({
        argumentNames: function() {
          return Caf.each(this.children, [], (c, k, into) => {
            if (c.argumentName) {
              into.push(c.argumentName);
            }
          });
        }
      });
      this.prototype.toJs = function() {
        return `(${Caf.toString(
          Caf
            .each(this.children, [], (c, k, into) => {
              into.push(c.toJs());
            })
            .join(", ")
        )})`;
      };
    }
  );
});
