"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let SwitchWhenStn;
    return (SwitchWhenStn = Caf.defClass(
      class SwitchWhenStn extends require("../BaseStn") {},
      function(SwitchWhenStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function(options) {
          let falsifyCases, returnAction, whenValue, thenDo;
          ({ falsifyCases, returnAction } = options);
          ({ whenValue, thenDo } = this.labeledChildren);
          return this.createSourceNode(
            falsifyCases ? "case !" : "case ",
            whenValue.implicitArray
              ? this.stnArrayToSourceNodes(
                  whenValue.children,
                  falsifyCases ? ": case !" : ": case ",
                  { dotBase: falsifyCases }
                )
              : [whenValue.toSourceNode({ dotBase: falsifyCases })],
            ": ",
            thenDo ? thenDo.toSourceNode({ returnAction }) : "undefined"
          );
        };
      }
    ));
  })();
});
