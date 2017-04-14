"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    StringStn = require("./StringStn"),
    ObjectStn = require("./ObjectStn"),
    ObjectPropValueStn = require("./ObjectPropValueStn"),
    ObjectPropNameStn = require("./ObjectPropNameStn"),
    CaptureStn,
    BaseStn = require("./BaseStn");
  StringStn;
  ObjectStn;
  ObjectPropValueStn;
  ObjectPropNameStn;
  return CaptureStn = Caf.defClass(
    class CaptureStn extends BaseStn {},
    function(CaptureStn, classSuper, instanceSuper) {
      this.prototype.transform = function() {
        return ObjectStn(
          this.props,
          ObjectPropValueStn(
            ObjectPropNameStn({ value: "source" }),
            StringStn({ value: this.children[1].parseTreeNode.text })
          ),
          ObjectPropValueStn(
            ObjectPropNameStn({ value: "value" }),
            this.children[1]
          )
        );
      };
    }
  );
});
