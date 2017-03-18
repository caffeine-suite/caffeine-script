let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn");
  return SwitchWhenStn = Caf.defClass(
    class SwitchWhenStn extends BaseStn {},
    function(SwitchWhenStn, classSuper, instanceSuper) {
      this.prototype.toJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${Caf.toString(this.getCasesJs(options))}: ${Caf.toString(
          thenDo.toJs()
        )};`;
      };
      this.prototype.getCasesJs = function(options) {
        let falsifyCases, whenValue, cases;
        ({ falsifyCases } = options);
        ({ whenValue } = this.labeledChildren);
        cases = whenValue.implicitArray
          ? Caf.e(whenValue.children, [], (m, k, into) => {
              into.push(m.toJsExpression());
            })
          : [whenValue.toJsExpression()];
        return falsifyCases
          ? `case !(${Caf.toString(cases.join("): case !("))})`
          : `case ${Caf.toString(cases.join(": case "))}`;
      };
      this.prototype.toFunctionBodyJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${Caf.toString(this.getCasesJs(options))}: ${Caf.toString(
          thenDo.toFunctionBodyJs()
        )};`;
      };
    }
  );
});
