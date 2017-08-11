"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SemanticTokenStn, Error, formattedInspect;
  ({ Error, formattedInspect } = Caf.import(
    ["Error", "formattedInspect"],
    [global, require("../../StandardImport")]
  ));
  return (SemanticTokenStn = Caf.defClass(
    class SemanticTokenStn extends require("../BaseStn") {
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
            `SemanticTokenStn is not intended to output Js directly. Token: ${Caf.toString(
              formattedInspect(this.props.token)
            )}`
          );
        })();
      };
    }
  ));
});
