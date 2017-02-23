let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    Lib = require("../Lib"),
    BaseStn = require("./BaseStn"),
    escapeJavascriptString,
    deescapeSpaces,
    escapeUnescaped,
    escapeMustEscapes;
  ({
    escapeJavascriptString,
    deescapeSpaces,
    escapeUnescaped,
    escapeMustEscapes
  } = Caf.i(
    [
      "escapeJavascriptString",
      "deescapeSpaces",
      "escapeUnescaped",
      "escapeMustEscapes"
    ],
    [ArtFoundation, Lib, global]
  ));
  return StringStn = Caf.defClass(
    class StringStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return escapeJavascriptString(deescapeSpaces(this.value)).replace(
          /\\\\/g,
          "\\"
        );
      };
      this.prototype.compactNewLines = function() {
        return this.props.value = this.value.replace(/\ *\n */g, " ");
      };
      this.prototype.trimRight = function() {
        return this.props.value = this.value.trimRight();
      };
      this.getter({
        value: function() {
          return this.props.value;
        }
      });
      this.prototype.toInterpolatedJsStringPart = function() {
        return deescapeSpaces(
          escapeUnescaped(escapeMustEscapes(this.value), "`$\n")
        );
      };
      return this;
    }
  );
});
