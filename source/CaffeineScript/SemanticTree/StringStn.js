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
  return StringStn = Caf.defClass(class StringStn extends BaseStn {}, function(
    StringStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      return escapeJavascriptString(deescapeSpaces(this.value)).replace(
        /\\\\/g,
        "\\"
      );
    };
    this.prototype.compactNewLines = function(compactLeft, compactRight) {
      if (compactLeft) {
        this.props.value = this.value.replace(/^\ *\n */, "");
      }
      if (compactRight) {
        this.props.value = this.value.replace(/\ *\n *$/, "");
      }
      this.props.value = this.value.replace(/(\ *\n *)+/g, " ");
      return this;
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
  });
});
