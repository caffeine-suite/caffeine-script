let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BinaryOperatorStn = require("./BinaryOperatorStn"),
    IdentifierStn = require("./IdentifierStn"),
    ReferenceStn = require("./ReferenceStn"),
    ArrayStn = require("./ArrayStn"),
    SemanticTree,
    supportedOperatorsRegExp,
    ValueBaseCaptureStn = require("./ValueBaseCaptureStn");
  BinaryOperatorStn;
  IdentifierStn;
  ReferenceStn;
  ArrayStn;
  SemanticTree = require("./namespace");
  supportedOperatorsRegExp = /^([-+*\/%]|)$/;
  return AssignmentStn = Caf.defClass(
    class AssignmentStn extends ValueBaseCaptureStn {
      constructor(props, children) {
        super(...arguments);
        this.operator = props.operator || "";
        this.lValue = children[0];
        this.rValue = children[1];
      }
    },
    function(AssignmentStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        let cafBase;
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          Caf.exists(cafBase = this.lValue) && cafBase.explicitIdentifier
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.prototype.transform = function() {
        return instanceSuper.transform
          .apply(this, arguments)
          .postSuperTransform();
      };
      this.prototype.postSuperTransform = function() {
        let value1, value2;
        return !this.operator.match(supportedOperatorsRegExp)
          ? ({ value1, value2 } = this.getValueWithBaseCapture(
              this.lValue
            ), BinaryOperatorStn(
              { operator: this.operator },
              value1,
              SemanticTree.AssignmentStn(value2, this.rValue)
            ))
          : this;
      };
      this.prototype.toJs = function() {
        return this.operator.match(supportedOperatorsRegExp)
          ? `${this.lValue.toJs()} ${this.operator}= ${this.rValue.toJsExpression()}`
          : `${this.lValue.toJsExpression()} ${this.operator} ${this.lValue.toJs()} = ${this.rValue.toJsExpression()}`;
      };
      this.prototype.toJsParenExpression = function() {
        return `(${this.toJs()})`;
      };
    }
  );
});
