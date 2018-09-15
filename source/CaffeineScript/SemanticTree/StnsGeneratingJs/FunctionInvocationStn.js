"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, require("../../StandardImport")],
    Error => {
      let SemanticTree, FunctionInvocationStn;
      SemanticTree = require("./namespace");
      return (FunctionInvocationStn = Caf.defClass(
        class FunctionInvocationStn extends require("../AccessorChainStn") {
          constructor(props, children) {
            let functionValue, argStns, base, base1, base2;
            super(...arguments);
            [functionValue, ...argStns] = children;
            this.key = this.argStns = argStns;
            this.value = this.functionValue = functionValue;
            if (
              this.argStns.length === 1 &&
              this.argStns[0].props.implicitArray
            ) {
              this.argStns = this.argStns[0].children;
            }
            if (
              (Caf.exists((base = this.parseTreeNode)) && base.conditional) ||
              (Caf.exists((base1 = this.parseTreeNode)) && base1.existanceTest)
            ) {
              (base2 = this.props).existanceTest ||
                (base2.existanceTest = true);
            }
          }
        },
        function(FunctionInvocationStn, classSuper, instanceSuper) {
          this.getter({
            existanceTest: function() {
              return this.props.existanceTest;
            },
            isFunctionInvocation: function() {
              return true;
            },
            propName: function() {
              let base;
              return Caf.exists((base = this.functionValue)) && base.propName;
            }
          });
          this.prototype.toSourceNode = function(options) {
            let newObjectFunctionInvocation, noParens, valueSourceNode;
            if (options) {
              ({ newObjectFunctionInvocation, noParens } = options);
            }
            if (this.existanceTest) {
              throw new Error("internal error: can't be existanceTest here");
            }
            valueSourceNode = this.functionValue.toSourceNode();
            if (newObjectFunctionInvocation) {
              switch (this.functionValue.type) {
                case "Reference":
                case "GlobalIdentifier":
                case "This":
                  null;
                  break;
                default:
                  if (!noParens) {
                    valueSourceNode = ["(", valueSourceNode, ")"];
                  }
              }
            }
            return this.createSourceNode(
              valueSourceNode,
              "(",
              this.stnArrayToSourceNodes(this.argStns, ", ", {
                expression: true
              }),
              ")"
            );
          };
        }
      ));
    }
  );
});
