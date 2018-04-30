"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let IdentifierStn;
    return (IdentifierStn = Caf.defClass(
      class IdentifierStn extends require("../BaseStn") {},
      function(IdentifierStn, classSuper, instanceSuper) {
        this.getter({
          name: function() {
            return this.props.identifier;
          },
          isIdentifier: function() {
            return true;
          },
          explicitIdentifier: function() {
            return this.props.identifier;
          }
        });
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          if (this.props.identifierHandle) {
            this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
          }
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.prototype.needsParens = false;
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(
            (this.props.identifierHandle || this.props).identifier
          );
        };
        this.prototype.toJs = function() {
          return (this.props.identifierHandle || this.props).identifier;
        };
      }
    ));
  })();
});
