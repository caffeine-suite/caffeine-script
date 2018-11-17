"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["isString"],
    [global, require("../../StandardImport"), require("../../Lib")],
    isString => {
      let RegExpStn;
      return (RegExpStn = Caf.defClass(
        class RegExpStn extends require("../BaseStn") {},
        function(RegExpStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function() {
            let value, modifiers, childrenNodes, hasInterpolation, base;
            ({ value, modifiers } = this.props);
            childrenNodes =
              (Caf.exists((base = this.children)) && base.length) > 0
                ? ((hasInterpolation = Caf.find(
                    this.children,
                    child => !isString(child.props.value)
                  )),
                  Caf.array(this.children, child => {
                    let v;
                    return isString((v = child.props.value))
                      ? hasInterpolation
                        ? v.replace(/([`$\\])/g, "\\$1")
                        : v
                      : child.toInterpolatedBodySourceNode();
                  }))
                : value;
            return !childrenNodes || childrenNodes.length === 0
              ? this.createSourceNode("/(?:)/")
              : hasInterpolation
              ? this.createSourceNode(
                  "RegExp(`",
                  childrenNodes,
                  "`",
                  modifiers ? [", '", modifiers, "'"] : undefined,
                  ")"
                )
              : this.createSourceNode("/", childrenNodes, "/", modifiers);
          };
        }
      ));
    }
  );
});
