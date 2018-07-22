"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ObjectLiteralAccessorStn;
    return (ObjectLiteralAccessorStn = Caf.defClass(
      class ObjectLiteralAccessorStn extends require("../BaseStn") {
        constructor(props, children) {
          super(...arguments);
          this.key = children[0];
        }
      },
      function(ObjectLiteralAccessorStn, classSuper, instanceSuper) {
        this.getter({
          existanceTest: function() {
            return this.props.existanceTest;
          },
          isAccessor: function() {
            return true;
          }
        });
        this.prototype.toSourceNode = function() {
          let cafBase;
          return this.createSourceNode(
            Caf.exists((cafBase = this.value)) &&
              cafBase.toSourceNode({ dotBase: true }),
            "[",
            this.key.toSourceNode({ expression: true }),
            "]"
          );
        };
      }
    ));
  })();
});
