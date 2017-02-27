let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return SwitchStn = Caf.defClass(class SwitchStn extends BaseStn {}, function(
    SwitchStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let condition, switchWhens, switchElse, falsifyCases, options, cases;
      ({ condition, switchWhens, switchElse } = this.labeledChildren);
      falsifyCases = !condition;
      options = { falsifyCases: falsifyCases };
      cases = Caf.e(switchWhens, [], (clause, k, into) => {
        into.push(clause.toJs(options));
      });
      if (switchElse) {
        cases.push(`default: ${switchElse.toJs()}`);
      }
      return `switch (${this.getConditionJs()}) {${cases.join(" break; ")}}`;
    };
    this.prototype.toJsExpression = function() {
      let condition, switchWhens, switchElse, falsifyCases, options, cases;
      ({ condition, switchWhens, switchElse } = this.labeledChildren);
      falsifyCases = !condition;
      options = { falsifyCases: falsifyCases };
      cases = Caf.e(switchWhens, [], (clause, k, into) => {
        into.push(clause.toFunctionBodyJs(options));
      });
      if (switchElse) {
        cases.push(`default: ${switchElse.toFunctionBodyJs()}`);
      }
      return `(() => {switch (${this.getConditionJs()}) {${cases.join(
        " "
      )}};})()`;
    };
    this.prototype.getConditionJs = function() {
      let condition;
      ({ condition } = this.labeledChildren);
      return condition ? condition.toJsExpression() : "false";
    };
  });
});
