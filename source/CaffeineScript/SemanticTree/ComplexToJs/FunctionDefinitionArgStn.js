"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let FunctionDefinitionArgStn;
  return (FunctionDefinitionArgStn = Caf.defClass(
    class FunctionDefinitionArgStn extends require("../BaseStn") {
      constructor(props, children) {
        super(...arguments);
        this.assignThisProperty = props.assignThisProperty;
        this.rest = props.rest;
        this.target = this.labeledChildren.target || children[0];
        this.defaultValue = children[1];
      }
    },
    function(FunctionDefinitionArgStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.getter({
        argumentName: function() {
          return this.target.name;
        }
      });
      this.prototype.getFunctionPreBodyStatementsJs = function() {
        return this.assignThisProperty
          ? `this.${Caf.toString(this.target.toJs())} = ${Caf.toString(
              this.target.toJs()
            )}`
          : undefined;
      };
      this.prototype.toJs = function() {
        return `${Caf.toString(this.rest ? "..." : "")}${Caf.toString(
          this.target.toJs()
        )}${Caf.toString(
          this.defaultValue
            ? ` = ${Caf.toString(this.defaultValue.toJs())}`
            : ""
        )}`;
      };
    }
  ));
});
