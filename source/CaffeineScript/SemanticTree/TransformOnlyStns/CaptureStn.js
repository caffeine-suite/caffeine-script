"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, CaptureStn;
    SemanticTree = require("../../StnRegistry");
    return (CaptureStn = Caf.defClass(
      class CaptureStn extends require("../BaseStn") {},
      function(CaptureStn, classSuper, instanceSuper) {
        this.prototype.postTransform = function() {
          return SemanticTree.ObjectStn(
            this.props,
            SemanticTree.ObjectPropValueStn(
              SemanticTree.ObjectPropNameStn({ value: "source" }),
              SemanticTree.StringStn({
                value: this.children[1].parseTreeNode.text
              })
            ),
            SemanticTree.ObjectPropValueStn(
              SemanticTree.ObjectPropNameStn({ value: "value" }),
              this.children[1]
            )
          );
        };
      }
    ));
  })();
});
