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
        this.argStns = argStns;
        this.functionValue = functionValue;
        if (this.argStns.length === 1 && this.argStns[0].props.implicitArray) {
          this.argStns = this.argStns[0].children;
        }
        if (this.parseTreeNode != null && this.parseTreeNode.conditional) {
          (base = this.props).conditional || (base.conditional = true);
        }
      }
    },
    function() {
      this.prototype.needsParens = false;
      this.getter({
        conditional: function() {
          return this.props.conditional;
        }
      });
      this.prototype.transform = function() {
        let BinaryOperatorStn,
          AccessorStn,
          IdentifierStn,
          SimpleLiteralStn,
          SemanticTokenStn,
          value1,
          value2;
        ({
          BinaryOperatorStn,
          AccessorStn,
          IdentifierStn,
          SimpleLiteralStn,
          SemanticTokenStn
        } = SemanticTree);
        return this.conditional
          ? ({ value1, value2 } = this.getValueWithBaseCapture(
              this.functionValue
            ), BinaryOperatorStn(
              { operator: "&&" },
              SemanticTree.FunctionInvocationStn(
                AccessorStn(
                  IdentifierStn({ identifier: "Caf" }),
                  IdentifierStn({ identifier: "isF" })
                ),
                value1
              ),
              SemanticTree.FunctionInvocationStn(value2, this.argStns)
            ))
          : Caf.getSuper(this).transform.apply(this, arguments);
      };
      this.prototype.toJs = function() {
        let valueJs;
        if (this.conditional) {
          throw new Error("can't be conditional here");
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
