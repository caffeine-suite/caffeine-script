"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let SuperStn, Error, merge;
  ({ Error, merge } = Caf.import(
    ["Error", "merge"],
    [global, require("../../StandardImport")]
  ));
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
        let propValue, methodName, m, __, classMethod;
        if (!(propValue = this.findParent("ObjectPropValue"))) {
          throw new Error("super must be used inside an object-literal value");
        }
        methodName = propValue.labeledChildren.propName.props.value;
        if ((m = methodName.match(/^(@)(.*)/))) {
          [__, classMethod, methodName] = m;
        }
        return new this.class(
          merge(this.props, { methodName, classMethod: !!classMethod }),
          this.transformChildren()
        );
      };
      this.prototype.toJs = function() {
        let args,
          objectPropValue,
          getSuperInput,
          klass,
          className,
          superObject,
          method;
        ({ args } = this);
        return this.props.calledInConstructor
          ? ((args = this.props.passArguments
              ? ["...arguments"]
              : Caf.each(args, [], (a, k, into) => {
                  into.push(a.toJsExpression());
                })),
            `super(${Caf.toString(args.join(", "))})`)
          : ((objectPropValue = this.findParent("ObjectPropValue")),
            (getSuperInput = (klass = this.findParent("Class"))
              ? ((className = klass.labeledChildren.className.toJs()),
                (superObject = this.props.classMethod
                  ? klass.props.classSuperHandle
                  : klass.props.instanceSuperHandle),
                (method = this.props.passArguments
                  ? ((args = "arguments"), "apply")
                  : ((args = Caf.each(args, [], (a, k, into) => {
                      into.push(a.toJsExpression());
                    })),
                    "call")),
                `${Caf.toString(superObject)}.${Caf.toString(
                  this.props.methodName
                )}.${Caf.toString(method)}${Caf.toString(
                  this.applyRequiredParens(["this"].concat(args).join(", "))
                )}`)
              : (() => {
                  throw new Error("super not used in class");
                })()));
      };
    }
  ));
});
