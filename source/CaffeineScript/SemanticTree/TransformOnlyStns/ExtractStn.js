"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, ExtractStn;
    SemanticTree = require("../../StnRegistry");
    return (ExtractStn = Caf.defClass(
      class ExtractStn extends require("../BaseStn") {},
      function(ExtractStn, classSuper, instanceSuper) {
        this.getter({
          extractSource: function() {
            return this.labeledChildren.extractSource;
          },
          extractActions: function() {
            return this.labeledChildren.extractActions;
          }
        });
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
            captureBase,
            conditionalSource,
            doExtract,
            temp;
          ({
            StatementsStn,
            AssignmentStn,
            AccessorStn,
            IdentifierStn,
            FunctionInvocationStn,
            ControlOperatorStn
          } = SemanticTree);
          temp = this;
          extractSource = temp.extractSource;
          extractActions = temp.extractActions;
          extractSource =
            extractSourceFromParent != null
              ? extractSourceFromParent
              : Caf.exists(extractSource) && extractSource.transform();
          ({ conditional } = this.props);
          return StatementsStn(
            (conditional || extractActions.length > 1) &&
              (extractSource.type !== "Reference" &&
                extractSource.type !== "Identifier")
              ? ((complexSource = extractSource),
                (captureBase = AssignmentStn(
                  (extractSource = IdentifierStn()),
                  complexSource
                )),
                conditional
                  ? ((conditionalSource = captureBase), null)
                  : captureBase)
              : undefined,
            true
              ? ((doExtract = Caf.array(extractActions, (child, i) => {
                  let extractToIdentifier, extractChild, doSingleExtract;
                  extractToIdentifier = Caf.is(child, ExtractStn)
                    ? (extractChild = child).extractSource
                    : child;
                  doSingleExtract = AssignmentStn(
                    extractToIdentifier.assignToIdentifierStn,
                    extractToIdentifier.getTransformedExtractionStns(
                      extractSource
                    )
                  );
                  return extractChild
                    ? [
                        doSingleExtract,
                        extractChild.transform(
                          extractToIdentifier.assignToIdentifierStn
                        )
                      ]
                    : doSingleExtract;
                })),
                conditional
                  ? ControlOperatorStn(
                      FunctionInvocationStn(
                        IdentifierStn({ identifier: "Caf.exists" }),
                        conditionalSource != null
                          ? conditionalSource
                          : extractSource
                      ),
                      StatementsStn(doExtract)
                    )
                  : doExtract)
              : undefined
          );
        };
      }
    ));
  })();
});
