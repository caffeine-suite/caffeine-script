"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    DoStn,
    BaseStn = require("./BaseStn");
  return DoStn = Caf.defClass(class DoStn extends BaseStn {}, function(
    DoStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let functionDefinition;
      ({ functionDefinition } = this.labeledChildren);
      return `(${Caf.toString(functionDefinition.toJs())})(${Caf.toString(
        functionDefinition.argumentNames.join(", ")
      )})`;
    };
  });
});
