"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SwitchStn;
  return SwitchStn = Caf.defClass(
    class SwitchStn extends require("../BaseStn") {},
    function(SwitchStn, classSuper, instanceSuper) {
      this.prototype.toJs = function(options) {
        let expression, condition, switchWhens, switchElse, falsifyCases, cases;
        if (options) {
          ({ expression } = options);
        }
        ({ condition, switchWhens, switchElse } = this.labeledChildren);
        falsifyCases = !condition;
        options = { falsifyCases };
        return expression
          ? (cases = Caf.each(switchWhens, [], (clause, k, into) => {
              into.push(clause.toFunctionBodyJs(options));
            }), switchElse
              ? cases.push(
                  `default: ${Caf.toString(switchElse.toFunctionBodyJs())}`
                )
              : undefined, `(() => {switch (${Caf.toString(
              this.getConditionJs()
            )}) {${Caf.toString(cases.join(" "))}};})()`)
          : (cases = Caf.each(switchWhens, [], (clause, k, into) => {
              into.push(clause.toJs(options));
            }), switchElse
              ? cases.push(`default: ${Caf.toString(switchElse.toJs())}`)
              : undefined, `switch (${Caf.toString(
              this.getConditionJs()
            )}) {${Caf.toString(cases.join(" break; "))}}`);
      };
      this.prototype.getConditionJs = function() {
        let condition;
        ({ condition } = this.labeledChildren);
        return condition ? condition.toJsExpression() : "false";
      };
    }
  );
});
