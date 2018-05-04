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
          this.prototype.toJs = function() {
            let value, modifiers, str, hasInterpolation, cafBase;
            ({ value, modifiers } = this.props);
            str =
              (Caf.exists((cafBase = this.children)) && cafBase.length) > 0
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
                      : `\${Caf.toString(${Caf.toString(
                          child.toJsExpression()
                        )})}`;
                  }).join(""))
                : value != null
                  ? value
                  : "";
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
          this.prototype.toSourceNode = function() {
            let value, modifiers, childrenNodes, hasInterpolation, cafBase;
            ({ value, modifiers } = this.props);
            childrenNodes =
              (Caf.exists((cafBase = this.children)) && cafBase.length) > 0
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
                      : ["${Caf.toString(", child.toJsExpression(), ")}"];
                  }))
                : value;
            return childrenNodes.length === 0
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
