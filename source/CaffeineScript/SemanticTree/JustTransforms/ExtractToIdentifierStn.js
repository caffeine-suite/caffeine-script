"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log"],
    [global, require("../../StandardImport")],
    log => {
      let SemanticTree, ExtractToIdentifierStn;
      SemanticTree = require("../../StnRegistry");
      return (ExtractToIdentifierStn = Caf.defClass(
        class ExtractToIdentifierStn extends require("../BaseStn") {},
        function(ExtractToIdentifierStn, classSuper, instanceSuper) {
          this.getter({
            assignToIdentifierStn: function() {
              return this.children[0];
            }
          });
          this.prototype.updateScope = function(scope) {
            this.scope = scope;
            log("REALLY HERE");
            log({
              ExtractToIdentifierStn: { labeledChidlren: this.labeledChidlren }
            });
            this.scope.addIdentifierAssigned(this.children[0].identifier);
            return instanceSuper.updateScope.apply(this, arguments);
          };
        }
      ));
    }
  );
});
