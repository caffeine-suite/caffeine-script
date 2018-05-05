"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let UnaryOperatorStn;
    return (UnaryOperatorStn = Caf.defClass(
      class UnaryOperatorStn extends require("../BaseStn") {},
      function(UnaryOperatorStn, classSuper, instanceSuper) {
        this.getter({
          normalizedOperand: function() {
            let op;
            return (() => {
              switch ((op = this.props.operand)) {
                case "delete":
                  return "delete ";
                case "not":
                  return "!";
                case "?":
                  return " != null";
                default:
                  return op;
              }
            })();
          },
          isJsNativeUnaryOperand: function() {
            return /^(not|[-!~])$/.test(this.props.operand);
          }
        });
        this.getter({
          tail: function() {
            return this.props.tail || this.props.operand === "?";
          }
        });
        this.prototype.needsParens = false;
        this.prototype.toJs = function() {
          let childrenJs;
          childrenJs = this.applyParens(this.children[0].toJsExpression());
          return this.props.operand === "?"
            ? `${Caf.toString(childrenJs)} != null`
            : this.props.tail
              ? `${Caf.toString(childrenJs)}${Caf.toString(
                  this.normalizedOperand
                )}`
              : `${Caf.toString(this.normalizedOperand)}${Caf.toString(
                  childrenJs
                )}`;
        };
        this.prototype.toSourceNode = function(options) {
          let dotBase, forUnaryOpeartor, childNode, base;
          if (options) {
            ({ dotBase, forUnaryOpeartor } = options);
          }
          childNode = this.children[0].toSourceNode({
            dotBase: true,
            forUnaryOpeartor: true
          });
          base = this.tail
            ? [childNode, this.normalizedOperand]
            : [this.normalizedOperand, childNode];
          return dotBase && (!forUnaryOpeartor || !this.isJsNativeUnaryOperand)
            ? this.createSourceNode("(", base, ")")
            : this.createSourceNode(base);
        };
      }
    ));
  })();
});
