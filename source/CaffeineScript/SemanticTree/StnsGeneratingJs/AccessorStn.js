"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, require("../../StandardImport")],
    Error => {
      let AccessorStn;
      return (AccessorStn = Caf.defClass(
        class AccessorStn extends require("../AccessorChainStn") {
          constructor(props, children) {
            super(...arguments);
            if (!(children.length === 2)) {
              throw new Error("expecting 2 children");
            }
            this.value = children[0];
            this.key = children[1];
            if (!this.key) {
              throw new Error("expecting second child to be a key");
            }
          }
        },
        function(AccessorStn, classSuper, instanceSuper) {
          this.getter({
            existanceTest: function() {
              return this.props.existanceTest;
            },
            isAccessor: function() {
              return true;
            },
            propName: function() {
              return this.key.identifier;
            }
          });
          this.prototype.toSourceNode = function() {
            let base;
            base = this.value.toSourceNode({ expression: true, dotBase: true });
            return this.key.isIdentifier
              ? this.createSourceNode(base, ".", this.key.toSourceNode())
              : this.createSourceNode(
                  base,
                  "[",
                  this.key.toSourceNode({ expression: true }),
                  "]"
                );
          };
        }
      ));
    }
  );
});
