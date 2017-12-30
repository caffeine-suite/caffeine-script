"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let escapeRegExp;
  ({ escapeRegExp } = Caf.import(
    ["escapeRegExp"],
    [global, require("./StandardImport")]
  ));
  return {
    deescapeSpaces: function(string) {
      return Caf.each(string.split(/((?:\\\\)+)/), [], (str, i, cafInto) => {
        cafInto.push(Caf.mod(i, 2) === 0 ? str.replace(/\\ /g, " ") : str);
      }).join("");
    },
    escapeNewLines: function(string) {
      return string.replace(/\n/g, "\\n");
    },
    escapeMustEscapes: function(string) {
      return string.replace(/[\n]/g, "\\n");
    },
    escapeUnescaped: function(string, charsToEscape = '"') {
      let charsRegExp, split;
      charsRegExp = RegExp(
        `([${Caf.toString(escapeRegExp(charsToEscape))}])`,
        "g"
      );
      split = charsToEscape.match(/\\/) ? [string] : string.split(/((?:\\.)+)/);
      return Caf.each(split, [], (str, i, cafInto) => {
        cafInto.push(
          Caf.mod(i, 2) === 0 ? str.replace(charsRegExp, "\\$1") : str
        );
      }).join("");
    }
  };
});
