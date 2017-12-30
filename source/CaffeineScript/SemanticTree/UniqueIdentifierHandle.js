"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let UniqueIdentifierHandle, BaseClass, inspectedObjectLiteral, inspect;
  ({ BaseClass, inspectedObjectLiteral, inspect } = Caf.import(
    ["BaseClass", "inspectedObjectLiteral", "inspect"],
    [global, require("../StandardImport")]
  ));
  return (UniqueIdentifierHandle = Caf.defClass(
    class UniqueIdentifierHandle extends BaseClass {
      constructor(preferredName, addToLets = true) {
        super(...arguments);
        this.preferredName = preferredName;
        this.addToLets = addToLets;
        this._scope = null;
      }
    },
    function(UniqueIdentifierHandle, classSuper, instanceSuper) {
      this.getter({
        inspectedObjects: function() {
          return inspectedObjectLiteral(
            `<UniqueIdentifierHandle preferredName: '${Caf.toString(
              this.preferredName
            )}', scopeSet: ${Caf.toString(
              !!this.scope
            )}, _identifier: ${Caf.toString(inspect(this._identifier))}>`
          );
        },
        identifier: function() {
          return (
            this._identifier ||
            (this._identifier = this.scope.bindUniqueIdentifier(
              this.preferredName,
              this,
              this.addToLets
            ))
          );
        }
      });
      this.prototype.toString = function() {
        return this.identifier;
      };
    }
  ));
});
