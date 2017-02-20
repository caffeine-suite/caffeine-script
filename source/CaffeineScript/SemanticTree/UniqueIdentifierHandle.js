let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BaseObject,
    inspectedObjectLiteral,
    inspect;
  ({ BaseObject, inspectedObjectLiteral, inspect } = Caf.i(
    ["BaseObject", "inspectedObjectLiteral", "inspect"],
    [ArtFoundation, global]
  ));
  return UniqueIdentifierHandle = Caf.defClass(
    class UniqueIdentifierHandle extends BaseObject {
      constructor(preferredName, scope) {
        super(...arguments);
        this.preferredName = preferredName;
        this.scope = scope;
      }
    },
    function() {
      this.getter({
        inspectedObjects: function() {
          return inspectedObjectLiteral(
            `<UniqueIdentifierHandle preferredName: '${this.preferredName}', scopeSet: ${!!this.scope}, _identifier: ${inspect(
              this._identifier
            )}>`
          );
        },
        identifier: function() {
          return this._identifier = this._identifier ||
            this.scope.bindUniqueIdentifier(this.preferredName, this);
        }
      });
      return this;
    }
  );
});
