"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let StnRegistry, ObjectStn;
    StnRegistry = require("../../StnRegistry");
    return (ObjectStn = Caf.defClass(
      class ObjectStn extends require("../BaseStn") {},
      function(ObjectStn, classSuper, instanceSuper) {
        let splitObjectsAtSameProps;
        this.getter({
          isEmptyObjectLiteral: function() {
            return !this.children || this.children.length === 0;
          }
        });
        this.prototype.toSourceNode = function(options) {
          let base;
          base = [
            "{",
            this.childrenToSourceNodes(", ", { expression: true }),
            "}"
          ];
          return (Caf.exists(options) && options.dotBase) ||
            (Caf.exists(options) && options.statement)
            ? this.createSourceNode("(", base, ")")
            : this.createSourceNode(base);
        };
        splitObjectsAtSameProps = function(children) {
          let currentDefined, listOfObjectLiterals, currentOrder;
          currentDefined = {};
          listOfObjectLiterals = [(currentOrder = [])];
          Caf.each2(children, child => {
            let found, value;
            if ((found = child.find(/ObjectPropNameStn/))) {
              [
                {
                  props: { value }
                }
              ] = found;
              if (currentDefined[value]) {
                currentDefined = {};
                listOfObjectLiterals.push((currentOrder = []));
              }
              currentDefined[value] = true;
            }
            return currentOrder.push(child);
          });
          return listOfObjectLiterals;
        };
        this.newInstance = function(props, children) {
          let listOfObjectLiterals;
          listOfObjectLiterals = splitObjectsAtSameProps(children);
          return listOfObjectLiterals.length === 1
            ? new this(props, children)
            : new StnRegistry.ArrayStn(
                Caf.array(listOfObjectLiterals, c => new this(props, c))
              );
        };
      }
    ));
  })();
});
