let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    Lib = require("../Lib"),
    BaseStn = require("./BaseStn"),
    isString;
  ({ isString } = Caf.i(["isString"], [ArtFoundation, Lib, global]));
  return RegExpStn = Caf.defClass(
    class RegExpStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        let value, modifiers, str, hasInterpolation;
        ({ value, modifiers } = this.props);
        str = (this.children != null && this.children.length) > 0
          ? (hasInterpolation = Caf.ee(this.children, null, (
              child,
              k,
              into,
              brk
            ) => {
              let _ret;
              return (_ret = !isString(child.props.value)) && (brk(), _ret);
            }), Caf
              .e(this.children, [], (child, k, into) => {
                let v;
                into.push(
                  isString(v = child.props.value)
                    ? hasInterpolation ? v.replace(/([`$\\])/g, "\\$1") : v
                    : `\${${child.toJsExpression()}}`
                );
              })
              .join(""))
          : value;
        return str.length === 0
          ? "/(?:)/"
          : hasInterpolation
              ? modifiers
                  ? `RegExp(\`${str}\`, '${modifiers}')`
                  : `RegExp(\`${str}\`)`
              : `/${str}/${modifiers || ""}`;
      };
      return this;
    }
  );
});
