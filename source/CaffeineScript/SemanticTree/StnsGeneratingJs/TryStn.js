"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["StnRegistry"],
    [global, require("../../StandardImport")],
    StnRegistry => {
      let TryStn;
      return (TryStn = Caf.defClass(
        class TryStn extends require("../BaseStn") {
          constructor() {
            let temp, base;
            super(...arguments);
            if (
              !(
                this.labeledChildren.optionalCatch ||
                this.labeledChildren.optionalFinally
              )
            ) {
              (this.children[1] =
                (temp = (base = this.labeledChildren).optionalCatch) != null
                  ? temp
                  : (base.optionalCatch = StnRegistry.CatchStn())).parent = this;
            }
          }
        },
        function(TryStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function(options = {}) {
            let expression, body, optionalCatch, optionalFinally, base;
            ({ expression } = options);
            ({ body, optionalCatch, optionalFinally } = this.labeledChildren);
            base = [
              "try {",
              body.toSourceNode({ returnAction: !!expression }),
              "} ",
              Caf.exists(optionalCatch) && optionalCatch.toSourceNode(options),
              Caf.exists(optionalFinally) &&
                optionalFinally.toSourceNode(options)
            ];
            return expression ? this.doSourceNode(null, [base, ";"]) : base;
          };
        }
      ));
    }
  );
});
