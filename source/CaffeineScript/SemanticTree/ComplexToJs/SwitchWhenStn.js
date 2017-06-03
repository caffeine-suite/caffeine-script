"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SwitchWhenStn;
  return (SwitchWhenStn = Caf.defClass(
    class SwitchWhenStn extends require("../BaseStn") {},
    function(SwitchWhenStn, classSuper, instanceSuper) {
      this.prototype.toJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${Caf.toString(this._getCasesJs(options))}: ${Caf.toString(
          thenDo.toJs()
        )};`;
      };
      this.prototype.toFunctionBodyJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${Caf.toString(this._getCasesJs(options))}: ${Caf.toString(
          thenDo.toFunctionBodyJs()
        )};`;
      };
      this.prototype._getCasesJs = function(options) {
        let falsifyCases, whenValue, cases;
        ({ falsifyCases } = options);
        ({ whenValue } = this.labeledChildren);
        cases = whenValue.implicitArray
          ? Caf.each(whenValue.children, [], (m, k, into) => {
              into.push(m.toJsExpression());
            })
          : [whenValue.toJsExpression()];
        return falsifyCases
          ? `case !(${Caf.toString(cases.join("): case !("))})`
          : `case ${Caf.toString(cases.join(": case "))}`;
      };
    }
  ));
});
