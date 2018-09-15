"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["String"],
    [global, require("../../StandardImport")],
    String => {
      let PureJsStn;
      return (PureJsStn = Caf.defClass(
        class PureJsStn extends require("../BaseStn") {
          constructor(props, children) {
            let js;
            if (Caf.is((js = children[0]), String)) {
              props = { js };
              children = [];
            }
            super(props, children);
          }
        },
        function(PureJsStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(this.props.js);
          };
        }
      ));
    }
  );
});
