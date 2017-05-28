"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let TryStn;
  return TryStn = Caf.defClass(
    class TryStn extends require("../BaseStn") {},
    function(TryStn, classSuper, instanceSuper) {
      this.prototype.toJs = function(options = {}) {
        let expression, body, optionalCatch;
        ({ expression } = options);
        ({ body, optionalCatch } = this.labeledChildren);
        body = expression ? body.toFunctionBodyJs() : body.toJs();
        optionalCatch = Caf.exists(optionalCatch) &&
          optionalCatch.toJs(options) ||
          "catch (cafError) {}";
        return `try {${Caf.toString(body)};} ${Caf.toString(optionalCatch)}`;
      };
      this.prototype.toJsExpression = function() {
        return this.doJs(null, this.toJs({ expression: true }));
      };
    }
  );
});
