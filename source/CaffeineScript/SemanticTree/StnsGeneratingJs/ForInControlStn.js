"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ForInControlStn;
    return (ForInControlStn = Caf.defClass(
      class ForInControlStn extends require("../BaseStn") {},
      function(ForInControlStn, classSuper, instanceSuper) {
        this.getter({
          varStn: function() {
            return this.children[0];
          },
          fromStn: function() {
            return this.children[1];
          }
        });
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(
            this.props.let ? "let " : undefined,
            this.varStn.toSourceNode(),
            " in ",
            this.fromStn.toSourceNode({ expression: true })
          );
        };
      }
    ));
  })();
});
