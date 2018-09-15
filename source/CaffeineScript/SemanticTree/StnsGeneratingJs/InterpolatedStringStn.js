"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek"],
    [global, require("../../StandardImport")],
    peek => {
      let InterpolatedStringStn;
      return (InterpolatedStringStn = Caf.defClass(
        class InterpolatedStringStn extends require("../BaseStn") {},
        function(InterpolatedStringStn, classSuper, instanceSuper) {
          this.prototype.compactNewLines = function(compactLeft, compactRight) {
            return Caf.each2(
              this.children,
              (child, i) =>
                child.compactNewLines(
                  compactLeft && i === 0,
                  compactRight && i === this.children.length - 1
                ),
              (child, i) => child.type === "String"
            );
          };
          this.prototype.trimLeft = function() {
            let base;
            return (
              Caf.exists((base = this.children[0])) &&
              (Caf.isF(base.trimLeft) && base.trimLeft())
            );
          };
          this.prototype.trimRight = function() {
            let base;
            return (
              Caf.exists((base = peek(this.children))) &&
              (Caf.isF(base.trimRight) && base.trimRight())
            );
          };
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              "`",
              Caf.array(this.children, c => c.toInterpolatedBodySourceNode()),
              "`"
            );
          };
        }
      ));
    }
  );
});
