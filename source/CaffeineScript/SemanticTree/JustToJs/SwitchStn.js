"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["arrayBetweenEach"],
    [global, require("../../StandardImport")],
    arrayBetweenEach => {
      let SwitchStn;
      return (SwitchStn = Caf.defClass(
        class SwitchStn extends require("../BaseStn") {},
        function(SwitchStn, classSuper, instanceSuper) {
          this.prototype.toJs = function(options) {
            let expression,
              condition,
              switchWhens,
              switchElse,
              falsifyCases,
              cases;
            if (options) {
              ({ expression } = options);
            }
            ({ condition, switchWhens, switchElse } = this.labeledChildren);
            falsifyCases = !condition;
            options = { falsifyCases };
            return expression
              ? ((cases = Caf.array(switchWhens, clause =>
                  clause.toFunctionBodyJs(options)
                )),
                switchElse
                  ? cases.push(
                      `default: ${Caf.toString(switchElse.toFunctionBodyJs())};`
                    )
                  : undefined,
                `(() => {switch (${Caf.toString(
                  this.getConditionJs()
                )}) {${Caf.toString(cases.join(" "))}};})()`)
              : ((cases = Caf.array(switchWhens, clause =>
                  clause.toJs(options)
                )),
                switchElse
                  ? cases.push(`default: ${Caf.toString(switchElse.toJs())};`)
                  : undefined,
                `switch (${Caf.toString(
                  this.getConditionJs()
                )}) {${Caf.toString(cases.join(" break; "))}}`);
          };
          this.prototype.getConditionJs = function() {
            let condition;
            ({ condition } = this.labeledChildren);
            return condition ? condition.toJsExpression() : "false";
          };
          this.prototype.toSourceNode = function(options) {
            let expression,
              condition,
              switchWhens,
              switchElse,
              falsifyCases,
              childOptions,
              cases,
              conditionSourceNode,
              cafTemp;
            if (options) {
              ({ expression } = options);
            }
            ({ condition, switchWhens, switchElse } = this.labeledChildren);
            falsifyCases = !condition;
            childOptions = { falsifyCases, returnAction: expression };
            cases = Caf.array(switchWhens, clause =>
              clause.toSourceNode(childOptions)
            );
            if (switchElse) {
              cases.push(["default: ", switchElse.toSourceNode(childOptions)]);
            }
            conditionSourceNode =
              (cafTemp =
                Caf.exists(condition) &&
                condition.toSourceNode({ expression: true })) != null
                ? cafTemp
                : "false";
            return expression
              ? this.createSourceNode(
                  "(() => {",
                  "switch (",
                  conditionSourceNode,
                  ") {",
                  arrayBetweenEach(cases, " "),
                  "}",
                  ";})()"
                )
              : this.createSourceNode(
                  "switch (",
                  conditionSourceNode,
                  ") {",
                  arrayBetweenEach(cases, " break; "),
                  "}"
                );
          };
        }
      ));
    }
  );
});
