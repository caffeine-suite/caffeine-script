"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let DestructuringAssignmentStn;
    return (DestructuringAssignmentStn = Caf.defClass(
      class DestructuringAssignmentStn extends require("../BaseStn") {},
      function(DestructuringAssignmentStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options) {
          let expression, structure, value;
          if (options) {
            ({ expression } = options);
          }
          ({ structure, value } = this.labeledChildren);
          return expression
            ? `(${Caf.toString(structure.toJs())} = ${Caf.toString(
                value.toJsExpression()
              )}, ${Caf.toString(
                structure.toJs({ restructuringStart: true })
              )})`
            : `(${Caf.toString(structure.toJs())} = ${Caf.toString(
                value.toJsExpression()
              )})`;
        };
      }
    ));
  })();
});
