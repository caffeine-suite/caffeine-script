let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    OperatorHelper = require("../OperatorHelper"),
    BaseStn = require("./BaseStn"),
    operatorIsInfixJs,
    binaryOperatorToJs,
    getOpPrecidence,
    getPrecidenceLevelIsLeftAssociative,
    Error,
    formattedInspect;
  ({
    operatorIsInfixJs,
    binaryOperatorToJs,
    getOpPrecidence,
    getPrecidenceLevelIsLeftAssociative,
    Error,
    formattedInspect
  } = Caf.i(
    [
      "operatorIsInfixJs",
      "binaryOperatorToJs",
      "getOpPrecidence",
      "getPrecidenceLevelIsLeftAssociative",
      "Error",
      "formattedInspect"
    ],
    [ArtFoundation, OperatorHelper, global]
  ));
  return BinaryOperatorStn = Caf.defClass(
    class BinaryOperatorStn extends BaseStn {
      constructor(props, children) {
        super(...arguments);
        this.operator = props.operator;
        this.left = children[0];
        this.right = children[1];
        if (!(this.left && this.right)) {
          throw new Error(
            `left and right required: ${formattedInspect({
              left: this.left,
              right: this.right
            })}`
          );
        }
      }
    },
    function() {
      this.prototype.toJs = function() {
        return this.toJsExpression();
      };
      this.prototype.toJsStatement = function() {
        return this.toJsExpression({ skipParens: true });
      };
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        if (this.operator === "?" && !this.left.isReference) {
          this.uniqueIdentifierHandle = this.scope.uniqueIdentifierHandle;
        }
        return Caf.getSuper(this).updateScope.apply(this, arguments);
      };
      this.prototype.toJsExpression = function() {
        let identifier, parentOperatorPrecidence;
        return this.operator === "?" && this.uniqueIdentifierHandle
          ? ({
              identifier
            } = this.uniqueIdentifierHandle, `((${identifier} = ${this.left.toJsExpression()}) != null ? ${identifier} : ${this.right.toJsExpression()})`)
          : !operatorIsInfixJs(this.operator)
              ? binaryOperatorToJs(
                  this.operator,
                  this.left.toJsExpression(),
                  this.right.toJsExpression()
                )
              : (parentOperatorPrecidence = getOpPrecidence(
                  this.operator
                ), binaryOperatorToJs(
                  this.operator,
                  this.left.toJsExpressionWithParens({
                    parentOperatorPrecidence: parentOperatorPrecidence,
                    isLeftOperand: true
                  }),
                  this.right.toJsExpressionWithParens({
                    parentOperatorPrecidence: parentOperatorPrecidence,
                    isLeftOperand: false
                  })
                ));
      };
      this.prototype.toJsExpressionWithParens = function(options) {
        let parentOperatorPrecidence, isLeftOperand, operatorPrecidence;
        if (options) {
          ({ parentOperatorPrecidence, isLeftOperand } = options);
        }
        operatorPrecidence = getOpPrecidence(this.operator);
        return parentOperatorPrecidence != null &&
          operatorPrecidence < parentOperatorPrecidence
          ? this.toJsExpression()
          : parentOperatorPrecidence != null &&
              operatorPrecidence === parentOperatorPrecidence &&
              isLeftOperand ===
                getPrecidenceLevelIsLeftAssociative(operatorPrecidence)
              ? this.toJsExpression()
              : `(${this.toJsExpression()})`;
      };
      return this;
    }
  );
});
