"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp"],
    [global, require("../../StandardImport")],
    identifierRegexp => {
      let IdentifierStn;
      return (IdentifierStn = Caf.defClass(
        class IdentifierStn extends require("../BaseStn") {
          constructor() {
            let cafTemp, cafBase;
            super(...arguments);
            if (!this.props.identifier) {
              (cafTemp = (cafBase = this.props).identifierHandle) != null
                ? cafTemp
                : (cafBase.identifierHandle = new (require("../UniqueIdentifierHandle"))(
                    this.props.preferredIdentifier,
                    this.props.addToLets
                  ));
            }
          }
        },
        function(IdentifierStn, classSuper, instanceSuper) {
          this.getter({
            name: function() {
              return this.props.identifier;
            },
            isIdentifier: function() {
              return identifierRegexp.test(this.identifier);
            },
            propName: function() {
              return this.identifier;
            },
            identifier: function() {
              return (this.props.identifierHandle || this.props).identifier;
            },
            explicitIdentifier: function() {
              return this.props.identifier;
            },
            canBeUsedInES6Structuring: function() {
              return true;
            }
          });
          this.prototype.updateScope = function(scope) {
            this.scope = scope;
            if (this.props.identifierHandle) {
              this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
            }
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              (this.props.identifierHandle || this.props).identifier
            );
          };
        }
      ));
    }
  );
});
