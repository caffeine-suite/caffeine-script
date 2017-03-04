let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return DoStn = Caf.defClass(class DoStn extends BaseStn {}, function(
    DoStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let functionDefinition;
      ({ functionDefinition } = this.labeledChildren);
      return `(${functionDefinition.toJs()})(${functionDefinition.argumentNames.join(
        ", "
      )})`;
    };
  });
});
