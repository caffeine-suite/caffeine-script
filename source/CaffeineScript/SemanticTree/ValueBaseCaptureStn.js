"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let UniqueIdentifierHandle, StnRegistry, ValueBaseCaptureStn;
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
            ? (({ AssignmentStn, ReferenceStn, IdentifierStn } = StnRegistry),
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
              })
            : accessorStn.isAccessor || accessorStn.type === "This"
            ? { value1: accessorStn, value2: accessorStn }
            : this.getValueWithCapture(accessorStn);
        };
        this.prototype.getValueWithCapture = function(accessorStn) {
          let AssignmentStn, ReferenceStn, IdentifierStn, baseIdentifierHandle;
          return accessorStn.type === "Identifier" ||
            accessorStn.type === "Reference"
            ? { value1: accessorStn, value2: accessorStn }
            : (({ AssignmentStn, ReferenceStn, IdentifierStn } = StnRegistry),
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
              });
        };
      }
    ));
  })();
});
