"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek"],
    [global, require("../../StandardImport")],
    peek => {
      let SemanticTree, ExtractToIdentifierStn;
      SemanticTree = require("../../StnRegistry");
      return (ExtractToIdentifierStn = Caf.defClass(
        class ExtractToIdentifierStn extends require("../BaseStn") {},
        function(ExtractToIdentifierStn, classSuper, instanceSuper) {
          this.getter({
            assignToIdentifierStn: function() {
              let cafTemp, cafTemp1;
              return (cafTemp =
                (cafTemp1 = this.extractAs) != null
                  ? cafTemp1
                  : peek(this.extractPathExtensions)) != null
                ? cafTemp
                : this.bastIdentifier;
            },
            extractAs: function() {
              return this.labeledChildren.extractAs;
            },
            extractDefault: function() {
              return this.labeledChildren.extractDefault;
            },
            bastIdentifier: function() {
              return this.labeledChildren.bastIdentifier;
            },
            extractPathExtensions: function() {
              let extractPathExtensions, extractPathExtension;
              ({
                extractPathExtensions,
                extractPathExtension
              } = this.labeledChildren);
              return extractPathExtensions != null
                ? extractPathExtensions
                : extractPathExtension && [extractPathExtension];
            }
          });
          this.prototype.getSourceValueStn = function(extractSource) {
            let stn, extensions;
            stn = SemanticTree.AccessorStn(extractSource, this.bastIdentifier);
            return (extensions = this.extractPathExtensions)
              ? (Caf.each2(
                  extensions,
                  extension => (stn = SemanticTree.AccessorStn(stn, extension))
                ),
                stn)
              : stn;
          };
          this.prototype.getTransformedExtractionStns = function(
            extractSource
          ) {
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
                      this.getSourceValueStn(extractSource)
                    )
                  ),
                  tempIdentifierStn,
                  this.extractDefault.transform()
                )
              : this.getSourceValueStn(extractSource);
          };
          this.prototype.updateScope = function(scope) {
            this.scope = scope;
            this.scope.addIdentifierAssigned(this.children[0].identifier);
            return instanceSuper.updateScope.apply(this, arguments);
          };
        }
      ));
    }
  );
});
