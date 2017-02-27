let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    StringStn = require("./StringStn"),
    ObjectStn = require("./ObjectStn"),
    ObjectPropValueStn = require("./ObjectPropValueStn"),
    ObjectPropNameStn = require("./ObjectPropNameStn"),
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
