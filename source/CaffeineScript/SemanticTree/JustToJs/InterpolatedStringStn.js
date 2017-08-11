"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let InterpolatedStringStn, peek;
  ({ peek } = Caf.import(["peek"], [global, require("../../StandardImport")]));
  return (InterpolatedStringStn = Caf.defClass(
    class InterpolatedStringStn extends require("../BaseStn") {},
    function(InterpolatedStringStn, classSuper, instanceSuper) {
      this.prototype.compactNewLines = function(compactLeft, compactRight) {
        return Caf.each(this.children, undefined, (child, i, into) => {
          if (child.type === "String") {
            child.compactNewLines(
              compactLeft && i === 0,
              compactRight && i === this.children.length - 1
            );
          }
        });
      };
      this.prototype.trimLeft = function() {
        let cafBase;
        return (
          Caf.exists((cafBase = this.children[0])) &&
          (Caf.isF(cafBase.trimLeft) && cafBase.trimLeft())
        );
      };
      this.prototype.trimRight = function() {
        let cafBase;
        return (
          Caf.exists((cafBase = peek(this.children))) &&
          (Caf.isF(cafBase.trimRight) && cafBase.trimRight())
        );
      };
      this.prototype.toJs = function() {
        return `\`${Caf.toString(
          Caf.each(this.children, [], (c, k, into) => {
            into.push(c.toInterpolatedJsStringPart());
          }).join("")
        )}\``;
      };
    }
  ));
});
