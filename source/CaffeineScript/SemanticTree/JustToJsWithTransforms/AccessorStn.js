"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let AccessorStn, Error;
  ({ Error } = Caf.import(
    ["Error"],
    [global, require("../../StandardImport")]
  ));
  return (AccessorStn = Caf.defClass(
    class AccessorStn extends require("../AccessorChainStn") {
      constructor(props, children) {
        super(...arguments);
        if (!(children.length === 2)) {
          throw new Error("2 children");
        }
        this.value = children[0];
        this.key = children[1];
        if (!this.key) {
          throw new Error("need key");
        }
      }
    },
    function(AccessorStn, classSuper, instanceSuper) {
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
        let base, identierString;
        base = this.value.toJsExpression({ dotBase: true });
        return this.key.isIdentifier
          ? (identierString = this.key.toJs()).match(/['"`]/)
            ? `${Caf.toString(base)}[${Caf.toString(identierString)}]`
            : `${Caf.toString(base)}.${Caf.toString(identierString)}`
          : `${Caf.toString(base)}[${Caf.toString(this.key.toJsExpression())}]`;
      };
    }
  ));
});
