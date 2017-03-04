let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BaseStn = require("./BaseStn"),
    Error,
    formattedInspect;
  ({ Error, formattedInspect } = Caf.i(["Error", "formattedInspect"], [
    ArtFoundation,
    global
  ]));
  return SemanticTokenStn = Caf.defClass(
    class SemanticTokenStn extends BaseStn {
      constructor() {
        let cafBase;
        super(...arguments);
        (cafBase = this.props).token ||
          (cafBase.token = this.parseTreeNode.toString());
      }
    },
    function(SemanticTokenStn, classSuper, instanceSuper) {
      this.getter({
        token: function() {
          return this.props.token;
        }
      });
      this.prototype.toJs = function() {
        return (() => {
          throw new Error(
            `SemanticTokenStn is not intended to output Js directly. Token: ${formattedInspect(
              this.props.token
            )}`
          );
        })();
      };
    }
  );
});
