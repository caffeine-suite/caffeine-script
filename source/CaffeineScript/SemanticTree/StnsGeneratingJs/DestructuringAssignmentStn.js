"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let DestructuringAssignmentStn;
    return (DestructuringAssignmentStn = Caf.defClass(
      class DestructuringAssignmentStn extends require("../BaseStn") {},
      function(DestructuringAssignmentStn, classSuper, instanceSuper) {
        this.getter({
          structuringStn: function() {
            return this.labeledChildren.structure.getStructuringStn();
          }
        });
        this.prototype.toSourceNode = function(options) {
          let expression, returnValueIsIgnored, noParens, structure, value;
          if (options) {
            ({ expression, returnValueIsIgnored, noParens } = options);
          }
          ({ structure, value } = this.labeledChildren);
          if (returnValueIsIgnored) {
            expression = null;
          }
          structure != null ? structure : (structure = this.children[0]);
          value != null ? value : (value = this.children[1]);
          return this.createSourceNode(
            !noParens ? "(" : undefined,
            structure.toSourceNode(),
            " = ",
            value.toSourceNode({ expression: true }),
            expression && ", ",
            expression && structure.toSourceNode({ restructuringStart: true }),
            !noParens ? ")" : undefined
          );
        };
      }
    ));
  })();
});
