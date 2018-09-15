"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "peek",
      "AccessorStn",
      "ControlOperatorStn",
      "BinaryOperatorStn",
      "UndefinedStn",
      "AssignmentStn",
      "IdentifierStn"
    ],
    [global, require("./StandardImport")],
    (
      peek,
      AccessorStn,
      ControlOperatorStn,
      BinaryOperatorStn,
      UndefinedStn,
      AssignmentStn,
      IdentifierStn
    ) => {
      let ExtractToIdentifierStn;
      return (ExtractToIdentifierStn = Caf.defClass(
        class ExtractToIdentifierStn extends require("../BaseStn") {},
        function(ExtractToIdentifierStn, classSuper, instanceSuper) {
          this.getter({
            assignToIdentifierStn: function() {
              let temp, temp1;
              return (temp =
                (temp1 = this.extractAs) != null
                  ? temp1
                  : peek(this.extractPathExtensions)) != null
                ? temp
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
            stn = AccessorStn(extractSource, this.bastIdentifier);
            return (extensions = this.extractPathExtensions)
              ? (Caf.each2(
                  extensions,
                  extension => (stn = AccessorStn(stn, extension))
                ),
                stn)
              : stn;
          };
          this.prototype.getTransformedExtractionStns = function(
            extractSource
          ) {
            let tempIdentifierStn;
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
