"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
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
        this.prototype.toSourceNode = function(options) {
          let falsifyCases, returnAction, whenValue, thenDo;
          ({ falsifyCases, returnAction } = options);
          ({ whenValue, thenDo } = this.labeledChildren);
          return this.createSourceNode(
            falsifyCases ? "case !" : "case ",
            whenValue.implicitArray
              ? this.stnArrayToSourceNodes(
                  whenValue.children,
                  falsifyCases ? "): case !(" : ": case "
                )
              : [whenValue.toSourceNode()],
            ": ",
            thenDo.toSourceNode({ returnAction })
          );
        };
        this.prototype._getCasesJs = function(options) {
          let falsifyCases, whenValue, cases;
          ({ falsifyCases } = options);
          ({ whenValue } = this.labeledChildren);
          cases = whenValue.implicitArray
            ? Caf.each(whenValue.children, [], (m, cafK, cafInto) => {
                cafInto.push(m.toJsExpression());
              })
            : [whenValue.toJsExpression()];
          return falsifyCases
            ? `case !(${Caf.toString(cases.join("): case !("))})`
            : `case ${Caf.toString(cases.join(": case "))}`;
        };
      }
    ));
  })();
});
