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
                case "and":
                  return "&&";
                case "or":
                  return "||";
                case "==":
                case "is":
                  return "===";
                case "!=":
                case "isnt":
                  return "!==";
                case "not":
                  return "!";
                case "?":
                  return " != null";
                default:
                  return op;
              }
            })();
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
          let childNode, base;
          childNode = this.children[0].toSourceNode({ dotBase: true });
          base = this.tail
            ? [childNode, this.normalizedOperand]
            : [this.normalizedOperand, childNode];
          return Caf.exists(options) && options.dotBase
            ? this.createSourceNode("(", base, ")")
            : this.createSourceNode(base);
        };
      }
    ));
  })();
});
