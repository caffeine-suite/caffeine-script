"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log"],
    [global, require("../../StandardImport")],
    log => {
      let SemanticTree, ExtractStn;
      SemanticTree = require("../../StnRegistry");
      return (ExtractStn = Caf.defClass(
        class ExtractStn extends require("../BaseStn") {},
        function(ExtractStn, classSuper, instanceSuper) {
          this.prototype.transform = function(extractSourceFromParent) {
            let StatementsStn,
              AssignmentStn,
              AccessorStn,
              IdentifierStn,
              extractSource,
              extractActions;
            ({
              StatementsStn,
              AssignmentStn,
              AccessorStn,
              IdentifierStn
            } = SemanticTree);
            ({ extractSource, extractActions } = this.labeledChildren);
            extractSource =
              extractSourceFromParent != null
                ? extractSourceFromParent
                : extractSource;
            return StatementsStn(
              Caf.array(extractActions, (child, i) => {
                let uniqueIdentifier;
                return Caf.is(child, ExtractStn)
                  ? (log({ child }),
                    [
                      AssignmentStn(
                        (uniqueIdentifier = IdentifierStn()),
                        AccessorStn(
                          extractSource,
                          child.labeledChildren.extractSource
                            .assignToIdentifierStn
                        )
                      ),
                      child.transform(uniqueIdentifier)
                    ])
                  : AssignmentStn(
                      child.assignToIdentifierStn,
                      AccessorStn(extractSource, child.assignToIdentifierStn)
                    );
              })
            );
          };
        }
      ));
    }
  );
});
