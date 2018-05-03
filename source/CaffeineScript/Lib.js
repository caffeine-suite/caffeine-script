"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["escapeRegExp", "escapeJavascriptString"],
    [global, require("art-standard-lib")],
    (escapeRegExp, escapeJavascriptString) => {
      let legalUnquotedPropName;
      return {
        deescapeSpaces: function(string) {
          return Caf.each(string.split(/((?:\\\\)+)/), [], (str, i, cafInto) =>
            cafInto.push(Caf.mod(i, 2) === 0 ? str.replace(/\\ /g, " ") : str)
          ).join("");
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
          split = charsToEscape.match(/\\/)
            ? [string]
            : string.split(/((?:\\.)+)/);
          return Caf.each(split, [], (str, i, cafInto) =>
            cafInto.push(
              Caf.mod(i, 2) === 0 ? str.replace(charsRegExp, "\\$1") : str
            )
          ).join("");
        },
        legalUnquotedPropName: (legalUnquotedPropName = /^(0|[1-9][0-9]*|[a-z_][0-9_a-z]*)$/i),
        escapePropName: function(rawPropName) {
          return legalUnquotedPropName.test(rawPropName)
            ? rawPropName
            : escapeJavascriptString(rawPropName);
        },
        identifierRegexp: /^(?!\d)((?!\s)[$\w\u007f-\uffff])+$/
      };
    }
  );
});
