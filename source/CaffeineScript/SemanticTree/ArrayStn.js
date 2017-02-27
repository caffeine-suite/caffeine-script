let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return ArrayStn = Caf.defClass(
    class ArrayStn extends BaseStn {
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
      this.prototype.toJs = function() {
        return `[${Caf
          .e(this.children, [], (c, k, into) => {
            into.push(c.toJsExpression());
          })
          .join(", ")}]`;
      };
    }
  );
});
