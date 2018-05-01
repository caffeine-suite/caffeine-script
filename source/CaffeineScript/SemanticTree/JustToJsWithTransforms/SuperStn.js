"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "isString", "merge"],
    [global, require("../../StandardImport")],
    (Error, isString, merge) => {
      let SuperStn;
      return (SuperStn = Caf.defClass(
        class SuperStn extends require("../BaseStn") {
          constructor(props, args) {
            super(...arguments);
            this.args = args;
            if (this.args.length === 1 && this.args[0].props.implicitArray) {
              this.args = this.args[0].children;
            }
          }
        },
        function(SuperStn, classSuper, instanceSuper) {
          this.prototype.needsParens = false;
          this.prototype.postTransform = function() {
            let propValue, methodName;
            if (
              !(propValue = this.pretransformedStn.findParent(
                "ObjectPropValue"
              ))
            ) {
              throw new Error(
                "super must be used inside an object-literal value"
              );
            }
            if (!isString((methodName = propValue.propName))) {
              throw new Error(
                "property name in parent object-literal must be constant, not computed"
              );
            }
            return new this.class(
              merge(this.props, {
                methodName,
                classMethod: !!propValue.isThisProp
              }),
              this.children
            );
          };
          this.prototype.toJs = function() {
            let args, getSuperInput, klass, superObject, method;
            ({ args } = this);
            return this.props.calledInConstructor
              ? ((args = this.props.passArguments
                  ? ["...arguments"]
                  : Caf.each(args, [], (a, cafK, cafInto) => {
                      cafInto.push(a.toJsExpression());
                    })),
                `super(${Caf.toString(args.join(", "))})`)
              : (getSuperInput = (klass = this.findParent("Class"))
                  ? ((superObject = this.props.classMethod
                      ? klass.classSuperHandle
                      : klass.instanceSuperHandle),
                    (method = this.props.passArguments
                      ? ((args = "arguments"), "apply")
                      : ((args = Caf.each(args, [], (a, cafK, cafInto) => {
                          cafInto.push(a.toJsExpression());
                        })),
                        "call")),
                    `${Caf.toString(superObject)}.${Caf.toString(
                      this.props.methodName
                    )}.${Caf.toString(method)}${Caf.toString(
                      this.applyRequiredParens(["this"].concat(args).join(", "))
                    )}`)
                  : (() => {
                      throw new Error("super not used in class");
                    })());
          };
        }
      ));
    }
  );
});
