let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return ReferenceStn = Caf.defClass(
    class ReferenceStn extends BaseStn {},
    function() {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        if (this.props.identifierHandle) {
          this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
        } else {
          this.scope.addIdentifierUsed(this.toJs());
        }
        return Caf.getSuper(this).updateScope.apply(this, arguments);
      };
      this.getter({
        isReference: function() {
          return true;
        },
        explicitIdentifier: function() {
          let base;
          return Caf.exists(base = this.labeledChildren.identifier) &&
            base.explicitIdentifier;
        }
      });
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        let base;
        return Caf.exists(base = this.props.identifierHandle) &&
          base.identifier ||
          this.labeledChildren.identifier.toJs();
      };
      return this;
    }
  );
});
