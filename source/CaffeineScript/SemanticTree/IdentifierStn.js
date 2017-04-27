"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let IdentiferStn;
  return IdentiferStn = Caf.defClass(
    class IdentiferStn extends require("./BaseStn") {},
    function(IdentiferStn, classSuper, instanceSuper) {
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
      this.prototype.toJs = function() {
        return (this.props.identifierHandle || this.props).identifier;
      };
    }
  );
});
