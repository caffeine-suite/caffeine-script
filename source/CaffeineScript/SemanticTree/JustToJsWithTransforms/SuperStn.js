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
            let args, method;
            ({ args } = this);
            return this.props.calledInConstructor
              ? ((args = this.props.passArguments
                  ? ["...arguments"]
                  : Caf.array(args, a => a.toJsExpression())),
                `super(${Caf.toString(args.join(", "))})`)
              : ((method = this.props.passArguments
                  ? ((args = "arguments"), "apply")
                  : ((args = Caf.array(args, a => a.toJsExpression())),
                    "call")),
                `${Caf.toString(this.superObject)}.${Caf.toString(
                  this.props.methodName
                )}.${Caf.toString(method)}${Caf.toString(
                  this.applyRequiredParens(["this"].concat(args).join(", "))
                )}`);
          };
          this.getter({
            klass: function() {
              return this.findParent("Class");
            },
            superObject: function() {
              return this.props.classMethod
                ? this.klass.classSuperHandle
                : this.klass.instanceSuperHandle;
            }
          });
          this.prototype.validate = function() {
            return !(this.props.calledInConstructor || this.klass)
              ? (() => {
                  throw new Error("'super' must be used in a class definition");
                })()
              : undefined;
          };
          this.prototype.toSourceNode = function() {
            let args, passArguments;
            ({ args } = this);
            return this.props.calledInConstructor
              ? ((args = this.props.passArguments
                  ? "...arguments"
                  : this.stnArrayToSourceNodes(args, ", ")),
                this.createSourceNode("super(", args, ")"))
              : (({ passArguments } = this.props),
                this.createSourceNode(
                  this.superObject,
                  ".",
                  this.props.methodName,
                  ".",
                  passArguments ? "apply" : "call",
                  "(this, ",
                  this.props.passArguments
                    ? "arguments"
                    : this.stnArrayToSourceNodes(args, ", "),
                  ")"
                ));
          };
        }
      ));
    }
  );
});
