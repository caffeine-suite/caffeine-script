"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["JavaScriptReservedWords", "Error"],
    [
      global,
      require("../../StandardImport"),
      { JavaScriptReservedWords: require("../../JavaScriptReservedWords") }
    ],
    (JavaScriptReservedWords, Error) => {
      let DestructuringIdentifierStn;
      return (DestructuringIdentifierStn = Caf.defClass(
        class DestructuringIdentifierStn extends require("../BaseStn") {},
        function(DestructuringIdentifierStn, classSuper, instanceSuper) {
          this.prototype.updateScope = function(scope, options) {
            this.scope = scope;
            this.scope.addIdentifierAssigned(
              this.labeledChildren.identifier.identifier,
              undefined,
              Caf.exists(options) && options.insideLet
            );
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.validate = function() {
            return JavaScriptReservedWords[this.identifier]
              ? (() => {
                  throw new Error(
                    `'${Caf.toString(
                      this.identifier
                    )}' is reserved by JavaScript and cannot be used for destructuring.`
                  );
                })()
              : undefined;
          };
          this.getter({
            identifier: function() {
              return this.labeledChildren.identifier.identifier;
            },
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
    }
  );
});
