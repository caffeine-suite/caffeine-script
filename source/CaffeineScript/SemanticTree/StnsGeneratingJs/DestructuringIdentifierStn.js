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
            this.labeledChildren.identifier.identifier
          );
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.getter({
          structuringStn: function() {
            return this.labeledChildren.identifier;
          }
        });
        this.prototype.toSourceNode = function(options) {
          let restructuring, identifier, destructuringDefault;
          if (options) {
            ({ restructuring } = options);
          }
          ({ identifier, destructuringDefault } = this.labeledChildren);
          return restructuring
            ? identifier.toSourceNode()
            : this.createSourceNode(
                this.props.ellipsis ? "..." : undefined,
                identifier.toSourceNode(),
                destructuringDefault
                  ? ` = ${Caf.toString(
                      destructuringDefault.toSourceNode({ expression: true })
                    )}`
                  : undefined
              );
        };
      }
    ));
  })();
});
