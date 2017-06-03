"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SemanticTree, FunctionInvocationStn, Error;
  ({ Error } = Caf.import(
    ["Error"],
    [require("../../StandardImport"), global]
  ));
  SemanticTree = require("./namespace");
  return (FunctionInvocationStn = Caf.defClass(
    class FunctionInvocationStn extends require("../ValueBaseCaptureStn") {
      constructor(props, children) {
        let functionValue, argStns, cafBase, cafBase1, cafBase2;
        super(...arguments);
        [functionValue, ...argStns] = children;
        this.key = this.argStns = argStns;
        this.value = this.functionValue = functionValue;
        if (this.argStns.length === 1 && this.argStns[0].props.implicitArray) {
          this.argStns = this.argStns[0].children;
        }
        if (
          (Caf.exists((cafBase = this.parseTreeNode)) && cafBase.conditional) ||
          (Caf.exists((cafBase1 = this.parseTreeNode)) &&
            cafBase1.existanceTest)
        ) {
          (cafBase2 = this.props).existanceTest ||
            (cafBase2.existanceTest = true);
        }
      }
    },
    function(FunctionInvocationStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.getter({
        existanceTest: function() {
          return this.props.existanceTest;
        },
        isFunctionInvocation: function() {
          return true;
        }
      });
      this.prototype.transform = function() {
        return this.transformAccessorChain();
      };
      this.prototype.toJs = function() {
        let valueJs;
        if (this.existanceTest) {
          throw new Error("can't be existanceTest here");
        }
        return `${Caf.toString(
          (valueJs = this.functionValue.toJsExpression())
        )}${Caf.toString(
          this.applyRequiredParens(
            Caf.each(this.argStns, [], (a, k, into) => {
              into.push(a.toJsExpression());
            }).join(", ")
          )
        )}`;
      };
    }
  ));
});
