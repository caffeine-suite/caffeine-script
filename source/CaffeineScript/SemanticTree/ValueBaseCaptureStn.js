"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let UniqueIdentifierHandle,
    StnRegistry,
    ValueBaseCaptureStn,
    mergeInto,
    isArray;
  ({ mergeInto, isArray } = Caf.import(
    ["mergeInto", "isArray"],
    [require("../StandardImport"), global]
  ));
  UniqueIdentifierHandle = require("./UniqueIdentifierHandle");
  StnRegistry = require("../StnRegistry");
  return (ValueBaseCaptureStn = Caf.defClass(
    class ValueBaseCaptureStn extends require("./BaseStn") {},
    function(ValueBaseCaptureStn, classSuper, instanceSuper) {
      this.abstractClass();
      this.prototype.getValueWithBaseCapture = function(accessorStn) {
        let AssignmentStn,
          ReferenceStn,
          IdentifierStn,
          value,
          key,
          baseIdentifierHandle;
        return accessorStn.isAccessor && !accessorStn.children[0].isReference
          ? (
              ({ AssignmentStn, ReferenceStn, IdentifierStn } = StnRegistry),
              ({ value, key } = accessorStn),
              {
                value1: new accessorStn.class(accessorStn.props, [
                  AssignmentStn(
                    IdentifierStn({
                      identifierHandle: (baseIdentifierHandle = new UniqueIdentifierHandle(
                        "base"
                      ))
                    }),
                    value
                  ),
                  key
                ]),
                value2: new accessorStn.class(accessorStn.props, [
                  ReferenceStn({ identifierHandle: baseIdentifierHandle }),
                  key
                ])
              }
            )
          : accessorStn.isAccessor || accessorStn.type === "This"
            ? { value1: accessorStn, value2: accessorStn }
            : this.getValueWithCapture(accessorStn);
      };
      this.prototype.getValueWithCapture = function(accessorStn) {
        let AssignmentStn, ReferenceStn, IdentifierStn, baseIdentifierHandle;
        return accessorStn.type === "Identifier" ||
          accessorStn.type === "Reference"
          ? { value1: accessorStn, value2: accessorStn }
          : (
              ({ AssignmentStn, ReferenceStn, IdentifierStn } = StnRegistry),
              {
                value1: AssignmentStn(
                  IdentifierStn({
                    identifierHandle: (baseIdentifierHandle = new UniqueIdentifierHandle(
                      "base"
                    ))
                  }),
                  accessorStn
                ),
                value2: ReferenceStn({ identifierHandle: baseIdentifierHandle })
              }
            );
      };
      this.prototype.transformAccessorChain = function() {
        let accessorChain, out;
        accessorChain = this.getLeftAccessorChain();
        out = this._transformAccessorChainR(
          accessorChain[0].value.transform(),
          accessorChain
        );
        mergeInto(out.props, this.props, out.props);
        return out;
      };
      this.prototype.getLeftAccessorChain = function() {
        let current, accessorChain, accessor;
        current = this;
        accessorChain = [];
        while (
          current &&
          (current.type === "Accessor" || current.type === "FunctionInvocation")
        ) {
          accessor = current;
          current = current.value;
          accessorChain.push(accessor);
        }
        return accessorChain.reverse();
      };
      this.prototype._transformAccessorChainR = function(value, accessorChain) {
        let done;
        done = false;
        Caf.each(accessorChain, undefined, (accessor, i, into) => {
          let key, isFunctionInvocation, reset;
          if (!done) {
            ({ key, isFunctionInvocation } = accessor);
            if (isArray(key)) {
              key = Caf.each(key, [], (kk, k, into) => {
                into.push(kk.transform());
              });
            } else {
              key = key.transform();
            }
            if (accessor.existanceTest) {
              reset = accessorChain.slice(i);
              done = true;
              value = this.createExistanceAccessorStn(
                value,
                isFunctionInvocation,
                checkedValueStn => {
                  let access;
                  access = this.createAccessorStn(
                    checkedValueStn,
                    key,
                    isFunctionInvocation
                  );
                  return i < accessorChain.length - 1
                    ? this._transformAccessorChainR(
                        access,
                        accessorChain.slice(i + 1)
                      )
                    : access;
                }
              );
            } else {
              value = this.createAccessorStn(value, key, isFunctionInvocation);
            }
          }
        });
        return value;
      };
      this.prototype.createAccessorStn = function(
        value,
        key,
        isFunctionInvocation
      ) {
        return isFunctionInvocation
          ? StnRegistry.FunctionInvocationStn(value, key)
          : StnRegistry.AccessorStn(value, key);
      };
      this.prototype.createExistanceAccessorStn = function(
        value,
        forFunctionInvocation,
        createRightStn
      ) {
        let res, value1, value2;
        res = forFunctionInvocation
          ? this.getValueWithBaseCapture(value)
          : this.getValueWithCapture(value);
        ({ value1, value2 } = res);
        return StnRegistry.BinaryOperatorStn(
          { operator: "&&" },
          StnRegistry.FunctionInvocationStn(
            StnRegistry.IdentifierStn({
              identifier: forFunctionInvocation ? "Caf.isF" : "Caf.exists"
            }),
            value1
          ),
          createRightStn(value2)
        );
      };
    }
  ));
});
