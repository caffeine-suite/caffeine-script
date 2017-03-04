let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BaseStn = require("./BaseStn"),
    Error,
    merge;
  ({ Error, merge } = Caf.i(["Error", "merge"], [StandardImport, global]));
  return SuperStn = Caf.defClass(
    class SuperStn extends BaseStn {
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
      this.prototype.transform = function() {
        let propValue, methodName, m, __, classMethod;
        if (!(propValue = this.findParent("ObjectPropValue"))) {
          throw new Error("super must be used inside an object-literal value");
        }
        methodName = propValue.labeledChildren.propName.props.value;
        if (m = methodName.match(/^(@)(.*)/)) {
          [__, classMethod, methodName] = m;
        }
        return new this.class(
          merge(this.props, {
            methodName: methodName,
            classMethod: !!classMethod
          }),
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
          ? (args = this.props.passArguments
              ? ["...arguments"]
              : Caf.e(args, [], (a, k, into) => {
                  into.push(a.toJsExpression());
                }), `super(${args.join(", ")})`)
          : (objectPropValue = this.findParent(
              "ObjectPropValue"
            ), getSuperInput = (klass = this.findParent("Class"))
              ? (className = klass.labeledChildren.className.toJs(), superObject = this.props.classMethod
                  ? klass.props.classSuperHandle
                  : klass.props.instanceSuperHandle, method = this.props.passArguments
                  ? (args = "arguments", "apply")
                  : (args = Caf.e(args, [], (a, k, into) => {
                      into.push(a.toJsExpression());
                    }), "call"), `${superObject}.${this.props.methodName}.${method}${this.applyRequiredParens(
                  ["this"].concat(args).join(", ")
                )}`)
              : (() => {
                  throw new Error("super not used in class");
                })());
      };
    }
  );
});
