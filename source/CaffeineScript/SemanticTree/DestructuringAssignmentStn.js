let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return DestructuringAssignmentStn = Caf.defClass(
    class DestructuringAssignmentStn extends BaseStn {},
    function(DestructuringAssignmentStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let structure, value;
        ({ structure, value } = this.labeledChildren);
        return `(${structure.toJs()} = ${value.toJsExpression()})`;
      };
    }
  );
});
