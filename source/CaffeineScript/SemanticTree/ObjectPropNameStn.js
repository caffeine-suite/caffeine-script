let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    legalUnquotedPropName,
    escapePropName,
    BaseStn = require("./BaseStn"),
    escapeJavascriptString,
    Error;
  ({ escapeJavascriptString, Error } = Caf.i(
    ["escapeJavascriptString", "Error"],
    [ArtFoundation, global]
  ));
  legalUnquotedPropName = /^(0|[1-9a-z_][0-9_a-z]*)$/i;
  escapePropName = function(rawPropName) {
    return rawPropName.match(legalUnquotedPropName)
      ? rawPropName
      : escapeJavascriptString(rawPropName);
  };
  return ObjectPropNameStn = Caf.defClass(
    class ObjectPropNameStn extends BaseStn {
      constructor() {
        let nameStn, base;
        super(...arguments);
        [nameStn] = this.children;
        (base = this.props).value ||
          (base.value = nameStn
            ? nameStn.toJs()
            : this.parseTreeNode.toString());
      }
    },
    function(ObjectPropNameStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let nameStn, str;
        [nameStn] = this.children;
        return nameStn
          ? (str = nameStn.toJs(), nameStn.children.length > 0
              ? `[${str}]`
              : (!(nameStn.type === "String" || nameStn.type === "Identifer")
                  ? (() => {
                      throw new Error(
                        `internal error - should be a StringStn or IdentifierStn. Actual type: ${nameStn.type}`
                      );
                    })()
                  : undefined, str))
          : escapePropName(this.props.value);
      };
    }
  );
});
