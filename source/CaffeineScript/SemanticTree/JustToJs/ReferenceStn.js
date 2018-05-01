"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ReferenceStn;
    return (ReferenceStn = Caf.defClass(
      class ReferenceStn extends require("../BaseStn") {},
      function(ReferenceStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          if (this.props.identifierHandle) {
            this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
          } else {
            this.scope.addIdentifierUsed(this.toJs());
          }
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.getter({
          isReference: function() {
            return true;
          },
          propName: function() {
            let cafBase;
            return (
              (Caf.exists((cafBase = this.props.identifierHandle)) &&
                cafBase.identifier) ||
              this.labeledChildren.identifier.propName
            );
          },
          explicitIdentifier: function() {
            let cafBase;
            return (
              Caf.exists((cafBase = this.labeledChildren.identifier)) &&
              cafBase.explicitIdentifier
            );
          },
          canBeUsedInES6Structuring: function() {
            return true;
          }
        });
        this.prototype.needsParens = false;
        this.prototype.toSourceNode = function(options) {
          return this.toJs(options);
        };
        this.prototype.toJs = function() {
          let cafBase;
          return (
            (Caf.exists((cafBase = this.props.identifierHandle)) &&
              cafBase.identifier) ||
            this.labeledChildren.identifier.toJs()
          );
        };
      }
    ));
  })();
});
