"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SemanticTree, supportedOperatorsRegExp, AssignmentStn;
  SemanticTree = require("../../StnRegistry");
  supportedOperatorsRegExp = /^([-+*\/%]|)$/;
  return (AssignmentStn = Caf.defClass(
    class AssignmentStn extends require("../ValueBaseCaptureStn") {
      constructor(props, children) {
        super(...arguments);
        this.operator = props.operator || "";
        this.lValue = children[0];
        this.rValue = children[1];
      }
    },
    function(AssignmentStn, classSuper, instanceSuper) {
      this.prototype.transform = function() {
        return this.transformAccessorChain();
      };
      this.getter({
        value: function() {
          return this.lValue;
        },
        key: function() {
          return this.rValue;
        }
      });
      this.prototype.updateScope = function(scope) {
        let cafBase;
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          Caf.exists((cafBase = this.lValue)) && cafBase.explicitIdentifier
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.prototype.postTransform = function() {
        let value1, value2;
        return !supportedOperatorsRegExp.test(this.operator)
          ? (({ value1, value2 } = this.getValueWithBaseCapture(this.lValue)),
            SemanticTree.BinaryOperatorStn(
              { operator: this.operator },
              value1,
              SemanticTree.AssignmentStn(value2, this.rValue)
            ))
          : this;
      };
      this.prototype.toJs = function(options) {
        let out;
        out = supportedOperatorsRegExp.test(this.operator)
          ? `${Caf.toString(this.lValue.toJs())} ${Caf.toString(
              this.operator
            )}= ${Caf.toString(this.rValue.toJsExpression())}`
          : `${Caf.toString(this.lValue.toJsExpression())} ${Caf.toString(
              this.operator
            )} ${Caf.toString(this.lValue.toJs())} = ${Caf.toString(
              this.rValue.toJsExpression()
            )}`;
        return (Caf.exists(options) && options.dotBase) ||
          (Caf.exists(options) && options.subExpression)
          ? `(${Caf.toString(out)})`
          : out;
      };
      this.prototype.toJsParenExpression = function() {
        return `(${Caf.toString(this.toJs())})`;
      };
    }
  ));
});
