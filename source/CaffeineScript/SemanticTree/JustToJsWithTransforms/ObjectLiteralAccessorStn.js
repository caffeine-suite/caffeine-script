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
        this.prototype.needsParens = false;
        this.getter({
          existanceTest: function() {
            return this.props.existanceTest;
          },
          isAccessor: function() {
            return true;
          }
        });
        this.prototype.toJs = function() {
          let base, cafBase;
          base =
            Caf.exists((cafBase = this.value)) &&
            cafBase.toJsExpression({ dotBase: true });
          return `${Caf.toString(base || "")}[${Caf.toString(
            this.key.toJsExpression()
          )}]`;
        };
      }
    ));
  })();
});
