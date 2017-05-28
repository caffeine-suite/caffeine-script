"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArrayStn;
  return ArrayStn = Caf.defClass(
    class ArrayStn extends require("../BaseStn") {
      constructor(props, children) {
        if (children.length === 1 && children[0].props.implicitArray) {
          children = children[0].children;
        }
        super(props, children);
      }
    },
    function(ArrayStn, classSuper, instanceSuper) {
      this.getter({
        implicitArray: function() {
          return this.props.implicitArray;
        }
      });
      this.prototype.toJs = function(options) {
        let out;
        out = `[${Caf.toString(
          Caf
            .each(this.children, [], (c, k, into) => {
              into.push(c.toJsExpression());
            })
            .join(", ")
        )}]`;
        return Caf.exists(options) && options.dotBase
          ? `(${Caf.toString(out)})`
          : out;
      };
    }
  );
});
