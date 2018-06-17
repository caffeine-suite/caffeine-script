"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
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
            extractActions,
            complexSource;
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
            !(
              (complexSource = extractSource).type === "Reference" ||
              extractSource.type === "Identifier"
            )
              ? AssignmentStn((extractSource = IdentifierStn()), complexSource)
              : undefined,
            Caf.array(extractActions, (child, i) => {
              let uniqueIdentifier;
              return Caf.is(child, ExtractStn)
                ? [
                    AssignmentStn(
                      (uniqueIdentifier = IdentifierStn()),
                      child.labeledChildren.extractSource.getTransformedExtractionStns(
                        extractSource
                      )
                    ),
                    child.transform(uniqueIdentifier)
                  ]
                : AssignmentStn(
                    child.assignToIdentifierStn,
                    child.getTransformedExtractionStns(extractSource)
                  );
            })
          );
        };
      }
    ));
  })();
});
