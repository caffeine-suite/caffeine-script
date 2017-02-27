let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    SemanticTree,
    ValueBaseCaptureStn = require("./ValueBaseCaptureStn"),
    Error;
  ({ Error } = Caf.i(["Error"], [ArtFoundation, global]));
  SemanticTree = require("./namespace");
  return AccessorStn = Caf.defClass(
    class AccessorStn extends ValueBaseCaptureStn {
      constructor(props, children) {
        super(...arguments);
        switch (children.length) {
          case 1:
            this.key = children[0];
            break;
          case 2:
            this.value = children[0];
            this.key = children[1];
            break;
          default:
            throw new Error("expected 1 or 2 children");
        }
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
      this.prototype.transform = function() {
        return this.value
          ? this.transformAccessorChain()
          : instanceSuper.transform.apply(this, arguments);
      };
      this.prototype.toJs = function() {
        let identierString, base;
        return this.value && this.key.isIdentifier
          ? (identierString = this.key.toJs()).match(/['"`]/)
              ? `${this.value.toJsExpressionWithParens()}[${identierString}]`
              : `${this.value.toJsExpressionWithParens({
                  dotBase: true
                })}.${identierString}`
          : `${Caf.exists(base = this.value) &&
              base.toJsExpressionWithParens() ||
              ""}[${this.key.toJsExpression()}]`;
      };
    }
  );
});
