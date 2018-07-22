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
            FunctionInvocationStn,
            ControlOperatorStn,
            extractSource,
            extractActions,
            conditional,
            complexSource,
            doExtract;
          ({
            StatementsStn,
            AssignmentStn,
            AccessorStn,
            IdentifierStn,
            FunctionInvocationStn,
            ControlOperatorStn
          } = SemanticTree);
          ({ extractSource, extractActions } = this.labeledChildren);
          extractSource =
            extractSourceFromParent != null
              ? extractSourceFromParent
              : extractSource;
          ({ conditional } = this.props);
          return StatementsStn(
            !(
              conditional ||
              extractSource.type === "Reference" ||
              extractSource.type === "Identifier"
            )
              ? ((complexSource = extractSource),
                AssignmentStn((extractSource = IdentifierStn()), complexSource))
              : undefined,
            true
              ? ((doExtract = Caf.array(extractActions, (child, i) => {
                  let extractChild, uniqueIdentifier;
                  return Caf.is((extractChild = child), ExtractStn)
                    ? [
                        AssignmentStn(
                          (uniqueIdentifier = IdentifierStn()),
                          extractChild.labeledChildren.extractSource.getTransformedExtractionStns(
                            extractSource
                          )
                        ),
                        extractChild.transform(uniqueIdentifier)
                      ]
                    : AssignmentStn(
                        child.assignToIdentifierStn,
                        child.getTransformedExtractionStns(extractSource)
                      );
                })),
                conditional
                  ? ControlOperatorStn(
                      FunctionInvocationStn(
                        IdentifierStn({ identifier: "Caf.exists" }),
                        extractSource
                      ),
                      doExtract
                    )
                  : doExtract)
              : undefined
          );
        };
      }
    ));
  })();
});
