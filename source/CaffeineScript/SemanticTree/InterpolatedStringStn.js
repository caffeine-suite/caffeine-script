let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BaseStn = require("./BaseStn"),
    peek;
  ({ peek } = Caf.i(["peek"], [ArtFoundation, global]));
  return InterpolatedStringStn = Caf.defClass(
    class InterpolatedStringStn extends BaseStn {},
    function(InterpolatedStringStn, classSuper, instanceSuper) {
      this.prototype.compactNewLines = function(compactLeft, compactRight) {
        return Caf.e(this.children, undefined, (child, i, into) => {
          if (child.type === "String") {
            child.compactNewLines(
              compactLeft && i === 0,
              compactRight && i === this.children.length - 1
            );
          }
        });
      };
      this.prototype.trimRight = function() {
        let base;
        return Caf.exists(base = peek(this.children)) &&
          (Caf.isF(base.trimRight) && base.trimRight());
      };
      this.prototype.toJs = function() {
        return `\`${Caf
          .e(this.children, [], (c, k, into) => {
            into.push(c.toInterpolatedJsStringPart());
          })
          .join("")}\``;
      };
    }
  );
});
