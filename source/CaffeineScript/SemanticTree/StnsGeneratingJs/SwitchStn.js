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
          this.prototype.toSourceNode = function(options) {
            let expression,
              condition,
              switchWhens,
              switchElse,
              falsifyCases,
              childOptions,
              cases,
              conditionSourceNode,
              temp;
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
              (temp =
                Caf.exists(condition) &&
                condition.toSourceNode({ expression: true })) != null
                ? temp
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
