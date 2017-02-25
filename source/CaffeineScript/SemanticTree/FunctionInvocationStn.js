let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    SemanticTree,
    ValueBaseCaptureStn = require("./ValueBaseCaptureStn"),
    Error;
  ({ Error } = Caf.i(["Error"], [ArtFoundation, global]));
  SemanticTree = require("./namespace");
  return FunctionInvocationStn = Caf.defClass(
    class FunctionInvocationStn extends ValueBaseCaptureStn {
      constructor(props, children) {
        let functionValue, argStns, base;
        super(...arguments);
        [functionValue, ...argStns] = children;
        this.key = this.argStns = argStns;
        this.value = this.functionValue = functionValue;
        if (this.argStns.length === 1 && this.argStns[0].props.implicitArray) {
          this.argStns = this.argStns[0].children;
        }
        if (
          Caf.exists(this.parseTreeNode) && this.parseTreeNode.conditional ||
          Caf.exists(this.parseTreeNode) && this.parseTreeNode.existanceTest
        ) {
          (base = this.props).existanceTest || (base.existanceTest = true);
        }
      }
    },
    function() {
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
        return `${valueJs = this.functionValue.toJsExpression()}${this.applyRequiredParens(
          Caf
            .e(this.argStns, [], (a, k, into) => {
              into.push(a.toJsExpression());
            })
            .join(", ")
        )}`;
      };
      return this;
    }
  );
});
