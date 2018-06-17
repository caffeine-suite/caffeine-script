"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, ExtractToIdentifierStn;
    SemanticTree = require("../../StnRegistry");
    return (ExtractToIdentifierStn = Caf.defClass(
      class ExtractToIdentifierStn extends require("../BaseStn") {},
      function(ExtractToIdentifierStn, classSuper, instanceSuper) {
        this.getter({
          assignToIdentifierStn: function() {
            let cafTemp;
            return (cafTemp = this.labeledChildren.extractAs) != null
              ? cafTemp
              : this.children[0];
          },
          assignFromIdentifierStn: function() {
            return this.children[0];
          },
          extractDefault: function() {
            return this.labeledChildren.extractDefault;
          }
        });
        this.prototype.getTransformedExtractionStns = function(extractSource) {
          let AccessorStn,
            AssignmentStn,
            IdentifierStn,
            BinaryOperatorStn,
            UndefinedStn,
            ControlOperatorStn,
            tempIdentifierStn;
          ({
            AccessorStn,
            AssignmentStn,
            IdentifierStn,
            BinaryOperatorStn,
            UndefinedStn,
            ControlOperatorStn
          } = SemanticTree);
          return this.extractDefault
            ? ControlOperatorStn(
                BinaryOperatorStn(
                  UndefinedStn(),
                  { operator: "!==" },
                  AssignmentStn(
                    (tempIdentifierStn = IdentifierStn()),
                    SemanticTree.AccessorStn(
                      extractSource,
                      this.assignFromIdentifierStn
                    )
                  )
                ),
                tempIdentifierStn,
                this.extractDefault.transform()
              )
            : SemanticTree.AccessorStn(
                extractSource,
                this.assignFromIdentifierStn
              );
        };
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          this.scope.addIdentifierAssigned(this.children[0].identifier);
          return instanceSuper.updateScope.apply(this, arguments);
        };
      }
    ));
  })();
});
