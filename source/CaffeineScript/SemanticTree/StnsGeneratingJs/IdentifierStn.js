"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp", "UniqueIdentifierHandle", "String", "merge"],
    [
      global,
      require("../../StandardImport"),
      { UniqueIdentifierHandle: require("../UniqueIdentifierHandle") }
    ],
    (identifierRegexp, UniqueIdentifierHandle, String, merge) => {
      let IdentifierStn;
      return (IdentifierStn = Caf.defClass(
        class IdentifierStn extends require("../BaseStn") {
          constructor(props, children) {
            let identifier, temp, base;
            if (Caf.is((identifier = children[0]), String)) {
              props = merge(props, { identifier });
              children = [];
            }
            super(props, children);
            if (!this.props.identifier) {
              (temp = (base = this.props).identifierHandle) != null
                ? temp
                : (base.identifierHandle = new UniqueIdentifierHandle(
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
            identifierHandle: function() {
              return this.props.identifierHandle;
            },
            isUniqueIdentifier: function() {
              return Caf.is(this.identifierHandle, UniqueIdentifierHandle);
            },
            propName: function() {
              return this.identifier;
            },
            identifier: function() {
              return (this.identifierHandle || this.props).identifier;
            },
            explicitIdentifier: function() {
              return this.props.identifier;
            },
            canBeUsedInES6Structuring: function() {
              return true;
            },
            valueStn: function() {
              return require("./ReferenceStn")(this);
            }
          });
          this.prototype.updateScope = function(scope) {
            this.scope = scope;
            if (this.identifierHandle) {
              this.scope.addUniqueIdentifierHandle(this.identifierHandle);
            }
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              (this.identifierHandle || this.props).identifier
            );
          };
        }
      ));
    }
  );
});
