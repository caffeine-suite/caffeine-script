let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    Lib = require("../Lib"),
    BaseStn = require("./BaseStn"),
    escapeJavascriptString,
    deescapeSpaces,
    escapeUnescaped;
  ({ escapeJavascriptString, deescapeSpaces, escapeUnescaped } = Caf.i(
    ["escapeJavascriptString", "deescapeSpaces", "escapeUnescaped"],
    [ArtFoundation, Lib, global]
  ));
  return StringStn = Caf.defClass(
    class StringStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return escapeJavascriptString(deescapeSpaces(this.props.value)).replace(
          /\\\\/g,
          "\\"
        );
      };
      this.prototype.toInterpolatedJsStringPart = function() {
        return deescapeSpaces(escapeUnescaped(this.props.value, "`$\n"));
      };
      return this;
    }
  );
});
