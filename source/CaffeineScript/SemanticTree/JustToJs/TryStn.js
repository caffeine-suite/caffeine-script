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
            let cafTemp, cafBase;
            super(...arguments);
            if (!this.labeledChildren.optionalCatch) {
              (this.children[1] =
                (cafTemp = (cafBase = this.labeledChildren).optionalCatch) !=
                null
                  ? cafTemp
                  : (cafBase.optionalCatch = StnRegistry.CatchStn())).parent = this;
            }
          }
        },
        function(TryStn, classSuper, instanceSuper) {
          this.prototype.toJs = function(options = {}) {
            let expression, body, optionalCatch, base;
            ({ expression } = options);
            ({ body, optionalCatch } = this.labeledChildren);
            body = expression ? body.toFunctionBodyJs() : body.toJs();
            base = `try {${Caf.toString(body)};} ${Caf.toString(
              optionalCatch.toJs(options)
            )}`;
            return expression ? this.doJs(null, base) : base;
          };
          this.prototype.toSourceNode = function(options = {}) {
            let expression, body, optionalCatch, base;
            ({ expression } = options);
            ({ body, optionalCatch } = this.labeledChildren);
            base = [
              "try {",
              body.toSourceNode({ returnAction: !!expression }),
              "} ",
              optionalCatch.toSourceNode(options)
            ];
            return expression ? this.doSourceNode(null, [base, ";"]) : base;
          };
        }
      ));
    }
  );
});
