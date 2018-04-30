"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let ArrayStn;
    return (ArrayStn = Caf.defClass(
      class ArrayStn extends require("../BaseStn") {
        constructor(props, children) {
          if (children.length === 1 && children[0].props.implicitArray) {
            children = children[0].children;
          }
          super(props, children);
        }
      },
      function(ArrayStn, classSuper, instanceSuper) {
        this.getter({
          implicitArray: function() {
            return this.props.implicitArray;
          }
        });
        this.prototype.toSourceNode = function(options) {
          let dotBase;
          dotBase = Caf.exists(options) && options.dotBase;
          return this.createSourceNode(
            dotBase ? "([" : "[",
            Caf.each(this.children, [], (c, i, cafInto) => {
              let sn;
              sn = c.toSourceNode();
              cafInto.push(i > 0 ? [", ", sn] : sn);
            }),
            dotBase ? "])" : "]"
          );
        };
        this.prototype.toJs = function(options) {
          let out;
          out = `[${Caf.toString(
            Caf.each(this.children, [], (c, cafK, cafInto) => {
              cafInto.push(c.toJsExpression());
            }).join(", ")
          )}]`;
          return Caf.exists(options) && options.dotBase
            ? `(${Caf.toString(out)})`
            : out;
        };
      }
    ));
  })();
});
