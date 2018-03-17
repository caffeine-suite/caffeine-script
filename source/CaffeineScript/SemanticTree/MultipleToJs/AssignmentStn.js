"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten"],
    [global, require("../../StandardImport")],
    compactFlatten => {
      let SemanticTree, supportedOperatorsRegExp, AssignmentStn;
      return (
        (SemanticTree = require("../../StnRegistry")),
        (supportedOperatorsRegExp = /^([-+*\/%^|]|<<|>>|>>>|)$/),
        (AssignmentStn = Caf.defClass(
          class AssignmentStn extends require("../AccessorChainStn") {
            constructor(props, children) {
              super(...arguments);
              this.operator = props.operator || "";
              this.lValue = children[0];
              this.rValue = children[1];
            }
          },
          function(AssignmentStn, classSuper, instanceSuper) {
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
                Caf.exists((cafBase = this.lValue)) &&
                  cafBase.explicitIdentifier
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
                    SemanticTree.AssignmentStn(value2, this.rValue)
                  ))
                : this;
            };
            this.prototype.toSourceNode = function(options) {
              let out;
              out = supportedOperatorsRegExp.test(this.operator)
                ? [
                    this.lValue.toSourceNode(),
                    ` ${Caf.toString(this.operator)}= `,
                    this.rValue.toSourceNode({ expression: true })
                  ]
                : [
                    this.lValue.toSourceNode({ expression: true }),
                    ` ${Caf.toString(this.operator)} `,
                    this.lValue.toSourceNode(),
                    " = ",
                    this.rValue.toSourceNode({ expression: true })
                  ];
              return this.newSourceNode.add(
                (Caf.exists(options) && options.dotBase) ||
                (Caf.exists(options) && options.subExpression)
                  ? compactFlatten(["(", out, ")"])
                  : out
              );
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
        ))
      );
    }
  );
});
