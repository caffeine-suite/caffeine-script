"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ArrayDestructuringStn;
    return (ArrayDestructuringStn = Caf.defClass(
      class ArrayDestructuringStn extends require("../BaseStn") {},
      function(ArrayDestructuringStn, classSuper, instanceSuper) {
        this.getter({
          valueStn: function() {
            return this.structuringStn;
          },
          structuringStn: function() {
            return require("./ArrayStn")(
              Caf.array(this.children, child => child.getStructuringStn())
            );
          }
        });
        this.prototype.toSourceNode = function(options) {
          let restructuring, restructuringStart, subOptions, base;
          if (options) {
            ({ restructuring, restructuringStart } = options);
          }
          if (restructuringStart || restructuring) {
            subOptions = { restructuring: true };
          }
          base = this.childrenToSourceNodes(", ", subOptions);
          return restructuring ? base : this.createSourceNode("[", base, "]");
        };
      }
    ));
  })();
});
