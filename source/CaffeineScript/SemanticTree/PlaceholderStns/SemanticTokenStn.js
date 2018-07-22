"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let SemanticTokenStn;
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
      }
    ));
  })();
});
