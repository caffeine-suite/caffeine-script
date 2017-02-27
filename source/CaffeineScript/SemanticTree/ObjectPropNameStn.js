let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    legalUnquotedPropName,
    BaseStn = require("./BaseStn"),
    escapeJavascriptString;
  ({ escapeJavascriptString } = Caf.i(["escapeJavascriptString"], [
    ArtFoundation,
    global
  ]));
  legalUnquotedPropName = /^(0|[1-9a-z_][0-9_a-z]*)$/i;
  return ObjectPropNameStn = Caf.defClass(
    class ObjectPropNameStn extends BaseStn {
      constructor() {
        let nameStn;
        super(...arguments);
        [nameStn] = this.children;
        this.props.value = nameStn
          ? nameStn.toJs()
          : this.parseTreeNode.toString();
      }
    },
    function(ObjectPropNameStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let nameStn, str, value;
        [nameStn] = this.children;
        return nameStn
          ? (str = nameStn.toJs(), nameStn.children.length > 0
              ? `[${str}]`
              : str)
          : (value = this.parseTreeNode.toString(), !value.match(
              legalUnquotedPropName
            )
              ? value = escapeJavascriptString(value)
              : undefined, value);
      };
    }
  );
});
