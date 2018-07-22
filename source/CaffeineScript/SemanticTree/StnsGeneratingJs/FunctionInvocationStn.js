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
            let functionValue, argStns, cafBase, cafBase1, cafBase2;
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
              (Caf.exists((cafBase = this.parseTreeNode)) &&
                cafBase.conditional) ||
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
            },
            propName: function() {
              let cafBase;
              return (
                Caf.exists((cafBase = this.functionValue)) && cafBase.propName
              );
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
