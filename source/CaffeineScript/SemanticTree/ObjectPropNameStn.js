let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    legalUnquotedPropName,
    escapePropName,
    BaseStn = require("./BaseStn"),
    escapeJavascriptString,
    Error;
  ({ escapeJavascriptString, Error } = Caf.i(
    ["escapeJavascriptString", "Error"],
    [StandardImport, global]
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
        let nameStn, cafBase;
        super(...arguments);
        [nameStn] = this.children;
        (cafBase = this.props).value ||
          (cafBase.value = nameStn
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
