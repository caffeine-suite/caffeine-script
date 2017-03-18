let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return DestructuringAssignmentStn = Caf.defClass(
    class DestructuringAssignmentStn extends BaseStn {},
    function(DestructuringAssignmentStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let structure, value;
        ({ structure, value } = this.labeledChildren);
        return `(${Caf.toString(structure.toJs())} = ${Caf.toString(
          value.toJsExpression()
        )})`;
      };
    }
  );
});
