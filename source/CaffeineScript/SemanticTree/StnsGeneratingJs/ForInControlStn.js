"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ForInControlStn;
    return (ForInControlStn = Caf.defClass(
      class ForInControlStn extends require("../BaseStn") {},
      function(ForInControlStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function() {
          let varStn, fromStn;
          [varStn, fromStn] = this.children;
          return this.createSourceNode(
            this.props.let ? "let " : undefined,
            varStn.toSourceNode(),
            " in ",
            fromStn.toSourceNode({ expression: true })
          );
        };
      }
    ));
  })();
});
