"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ReferenceStn;
    return (ReferenceStn = Caf.defClass(
      class ReferenceStn extends require("../BaseStn") {},
      function(ReferenceStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          let base;
          this.scope = scope;
          if (this.props.identifierHandle) {
            this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
          } else {
            if (
              !(Caf.exists((base = this.identifier)) && base.isUniqueIdentifier)
            ) {
              this.scope.addIdentifierUsed(this.propName);
            }
          }
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.getter({
          isReference: function() {
            return true;
          },
          identifier: function() {
            return this.labeledChildren.identifier || this.children[0];
          },
          propName: function() {
            let base;
            return (
              (Caf.exists((base = this.props.identifierHandle)) &&
                base.identifier) ||
              this.identifier.propName
            );
          },
          explicitIdentifier: function() {
            let base;
            return (
              Caf.exists((base = this.identifier)) && base.explicitIdentifier
            );
          },
          canBeUsedInES6Structuring: function() {
            return true;
          }
        });
        this.prototype.toSourceNode = function(options) {
          return this.createSourceNode(this.propName);
        };
      }
    ));
  })();
});
