let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BaseStn = require("./BaseStn"),
    Error,
    merge;
  ({ Error, merge } = Caf.i(["Error", "merge"], [ArtFoundation, global]));
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
    function() {
      this.prototype.needsParens = false;
      this.prototype.transform = function() {
        let propValue, methodName, m, __;
        if (!(propValue = this.findParent("ObjectPropValue"))) {
          throw new Error("super must be used inside an object-literal value");
        }
        methodName = propValue.labeledChildren.propName.props.value;
        if (m = methodName.match(/^@(.*)/)) {
          [__, methodName] = m;
        }
        return new this.class(
          merge(this.props, { methodName: methodName }),
          this.transformChildren()
        );
      };
      this.prototype.toJs = function() {
        let args, method;
        ({ args } = this);
        return this.props.calledInConstructor
          ? (args = this.props.passArguments
              ? ["...arguments"]
              : Caf.e(args, [], (a, k, into) => {
                  into.push(a.toJsExpression());
                }), `super(${args.join(", ")})`)
          : (method = this.props.passArguments
              ? (args = "arguments", "apply")
              : (args = Caf.e(args, [], (a, k, into) => {
                  into.push(a.toJsExpression());
                }), "call"), `Caf.getSuper(this).${this.props.methodName}.${method}${this.applyRequiredParens(
              ["this"].concat(args).join(", ")
            )}`);
      };
      return this;
    }
  );
});
