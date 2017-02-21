let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return SwitchWhenStn = Caf.defClass(
    class SwitchWhenStn extends BaseStn {},
    function() {
      this.prototype.toJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${this.getCasesJs(options)}: ${thenDo.toJs()};`;
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
          ? `case !(${cases.join("): case !(")})`
          : `case ${cases.join(": case ")}`;
      };
      this.prototype.toFunctionBodyJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${this.getCasesJs(options)}: ${thenDo.toFunctionBodyJs()};`;
      };
      return this;
    }
  );
});
