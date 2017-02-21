let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Error = global.Error, BaseStn = require("./BaseStn");
  return SemanticTokenStn = Caf.defClass(
    class SemanticTokenStn extends BaseStn {
      constructor() {
        let base;
        super(...arguments);
        (base = this.props).token ||
          (base.token = this.parseTreeNode.toString());
      }
    },
    function() {
      this.getter({
        token: function() {
          return this.props.token;
        }
      });
      this.prototype.toJs = function() {
        return (() => {
          throw new Error(
            "SemanticTokenStn is not intended to output Js directly"
          );
        })();
      };
      return this;
    }
  );
});
