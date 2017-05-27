"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SwitchStn;
  return SwitchStn = Caf.defClass(
    class SwitchStn extends require("../BaseStn") {},
    function(SwitchStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let condition, switchWhens, switchElse, falsifyCases, options, cases;
        ({ condition, switchWhens, switchElse } = this.labeledChildren);
        falsifyCases = !condition;
        options = { falsifyCases };
        cases = Caf.each(switchWhens, [], (clause, k, into) => {
          into.push(clause.toJs(options));
        });
        if (switchElse) {
          cases.push(`default: ${Caf.toString(switchElse.toJs())}`);
        }
        return `switch (${Caf.toString(this.getConditionJs())}) {${Caf.toString(
          cases.join(" break; ")
        )}}`;
      };
      this.prototype.toJsExpression = function() {
        let condition, switchWhens, switchElse, falsifyCases, options, cases;
        ({ condition, switchWhens, switchElse } = this.labeledChildren);
        falsifyCases = !condition;
        options = { falsifyCases };
        cases = Caf.each(switchWhens, [], (clause, k, into) => {
          into.push(clause.toFunctionBodyJs(options));
        });
        if (switchElse) {
          cases.push(`default: ${Caf.toString(switchElse.toFunctionBodyJs())}`);
        }
        return `(() => {switch (${Caf.toString(
          this.getConditionJs()
        )}) {${Caf.toString(cases.join(" "))}};})()`;
      };
      this.prototype.getConditionJs = function() {
        let condition;
        ({ condition } = this.labeledChildren);
        return condition ? condition.toJsExpression() : "false";
      };
    }
  );
});
