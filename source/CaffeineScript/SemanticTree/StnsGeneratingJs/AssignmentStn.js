"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "formattedInspect"],
    [global, require("../../StandardImport")],
    (Error, formattedInspect) => {
      let SemanticTree, supportedOperatorsRegExp, AssignmentStn;
      SemanticTree = require("../../StnRegistry");
      supportedOperatorsRegExp = /^([-+*\/%^|]|<<|>>|>>>|)$/;
      return (AssignmentStn = Caf.defClass(
        class AssignmentStn extends require("../AccessorChainStn") {
          constructor(props, children) {
            super(...arguments);
            this.operator = props.operator || "";
            this.lValue = children[0];
            this.rValue = children[1];
            if (!(this.lValue && this.rValue)) {
              throw new Error(
                `AssignmentStn: expected lValue and rValue: ${Caf.toString(
                  formattedInspect({
                    operator: this.operator,
                    lValue: this.lValue,
                    rValue: this.rValue
                  })
                )}`
              );
            }
          }
        },
        function(AssignmentStn, classSuper, instanceSuper) {
          this.getter({
            value: function() {
              return this.lValue;
            },
            key: function() {
              return this.rValue;
            },
            propName: function() {
              let base;
              return Caf.exists((base = this.lValue)) && base.propName;
            }
          });
          this.prototype.updateScope = function(scope, options) {
            let base;
            this.scope = scope;
            this.scope.addIdentifierAssigned(
              Caf.exists((base = this.lValue)) && base.explicitIdentifier,
              undefined,
              Caf.exists(options) && options.insideLet
            );
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.postTransform = function() {
            let value1, value2;
            return !supportedOperatorsRegExp.test(this.operator)
              ? (({ value1, value2 } = this.getValueWithBaseCapture(
                  this.lValue
                )),
                SemanticTree.BinaryOperatorStn(
                  { operator: this.operator },
                  value1,
                  SemanticTree.AssignmentStn(
                    { parseTreeNode: this.parseTreeNode },
                    value2,
                    this.rValue
                  )
                ))
              : this;
          };
          this.prototype.toSourceNode = function(options) {
            let out;
            out = supportedOperatorsRegExp.test(this.operator)
              ? this.createSourceNode(
                  this.lValue.toSourceNode(),
                  ` ${Caf.toString(this.operator)}= `,
                  this.rValue.toSourceNode({ expression: true })
                )
              : this.createSourceNode(
                  this.lValue.toSourceNode({ expression: true }),
                  ` ${Caf.toString(this.operator)} `,
                  this.lValue.toSourceNode(),
                  " = ",
                  this.rValue.toSourceNode({ expression: true })
                );
            return (Caf.exists(options) && options.dotBase) ||
              (Caf.exists(options) && options.subExpression)
              ? this.createSourceNode("(", out, ")")
              : out;
          };
        }
      ));
    }
  );
});
