"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let DestructuringAssignmentStn;
    return (DestructuringAssignmentStn = Caf.defClass(
      class DestructuringAssignmentStn extends require("../BaseStn") {},
      function(DestructuringAssignmentStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options) {
          let expression, returnValueIsIgnored, structure, value;
          if (options) {
            ({ expression, returnValueIsIgnored } = options);
          }
          ({ structure, value } = this.labeledChildren);
          if (returnValueIsIgnored) {
            expression = false;
          }
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
