"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let DestructuringIdentifierStn;
    return (DestructuringIdentifierStn = Caf.defClass(
      class DestructuringIdentifierStn extends require("../BaseStn") {},
      function(DestructuringIdentifierStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          this.scope.addIdentifierAssigned(
            this.labeledChildren.identifier.toJs()
          );
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.prototype.toJs = function(options) {
          let restructuring, identifier, destructuringDefault;
          if (options) {
            ({ restructuring } = options);
          }
          ({ identifier, destructuringDefault } = this.labeledChildren);
          return restructuring
            ? identifier.toJs()
            : `${Caf.toString(this.props.ellipsis ? "..." : "")}${Caf.toString(
                identifier.toJs()
              )}${Caf.toString(
                destructuringDefault
                  ? ` = ${Caf.toString(destructuringDefault.toJsExpression())}`
                  : ""
              )}`;
        };
      }
    ));
  })();
});
