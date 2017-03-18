let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    Lib = require("../Lib"),
    BaseStn = require("./BaseStn"),
    isString;
  ({ isString } = Caf.i(["isString"], [StandardImport, Lib, global]));
  return RegExpStn = Caf.defClass(class RegExpStn extends BaseStn {}, function(
    RegExpStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let value, modifiers, str, hasInterpolation, cafBase;
      ({ value, modifiers } = this.props);
      str = (Caf.exists(cafBase = this.children) && cafBase.length) > 0
        ? (hasInterpolation = Caf.ee(this.children, undefined, (
            child,
            k,
            into,
            brk
          ) => {
            let cafRet;
            return (cafRet = !isString(child.props.value)) && (brk(), cafRet);
          }), Caf
            .e(this.children, [], (child, k, into) => {
              let v;
              into.push(
                isString(v = child.props.value)
                  ? hasInterpolation ? v.replace(/([`$\\])/g, "\\$1") : v
                  : `\${${Caf.toString(child.toJsExpression())}}`
              );
            })
            .join(""))
        : value;
      return str.length === 0
        ? "/(?:)/"
        : hasInterpolation
            ? modifiers
                ? `RegExp(\`${Caf.toString(str)}\`, '${Caf.toString(
                    modifiers
                  )}')`
                : `RegExp(\`${Caf.toString(str)}\`)`
            : `/${Caf.toString(str)}/${Caf.toString(modifiers || "")}`;
    };
  });
});
