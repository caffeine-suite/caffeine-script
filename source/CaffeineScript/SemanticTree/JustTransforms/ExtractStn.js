"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, ExtractStn;
    SemanticTree = require("../../StnRegistry");
    return (ExtractStn = Caf.defClass(
      class ExtractStn extends require("../BaseStn") {},
      function(ExtractStn, classSuper, instanceSuper) {
        this.prototype.postTransform = function() {
          let StatementsStn,
            AssignmentStn,
            AccessorStn,
            extractSource,
            extractActions;
          ({ StatementsStn, AssignmentStn, AccessorStn } = SemanticTree);
          ({ extractSource, extractActions } = this.labeledChildren);
          return StatementsStn(
            Caf.array(extractActions, child =>
              AssignmentStn(
                child.assignToIdentifierStn,
                AccessorStn(extractSource, child.assignToIdentifierStn)
              )
            )
          );
        };
      }
    ));
  })();
});
