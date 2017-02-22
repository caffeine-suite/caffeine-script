let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"), BaseStn = require("./BaseStn");
  return InterpolatedStringStn = Caf.defClass(
    class InterpolatedStringStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return `\`${Caf
          .e(this.children, [], (c, k, into) => {
            into.push(c.toInterpolatedJsStringPart());
          })
          .join("")}\``;
      };
      return this;
    }
  );
});
