let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return DestructuringIdentifierStn = Caf.defClass(
    class DestructuringIdentifierStn extends BaseStn {},
    function(DestructuringIdentifierStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          this.labeledChildren.identifier.toJs()
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.prototype.toJs = function() {
        let identifier, destructuringDefault;
        ({ identifier, destructuringDefault } = this.labeledChildren);
        return `${Caf.toString(this.props.ellipsis ? "..." : "")}${Caf.toString(
          identifier.toJs()
        )}${Caf.toString(
          destructuringDefault
            ? ` = ${Caf.toString(destructuringDefault.toJsExpression())}`
            : ""
        )}`;
      };
    }
  );
});
