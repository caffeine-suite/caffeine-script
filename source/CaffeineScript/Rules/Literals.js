let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport");
  return function() {
    this.rule({
      literal: [
        "nullLiteral",
        "boolLiteral",
        "numberLiteral",
        "stringLiteral",
        "regExpLiteral",
        "bracketedObject",
        "brackedArray"
      ]
    });
    return this.rule(
      {
        boolLiteral: ["true", "false"],
        nullLiteral: "/null/",
        numberLiteral: /([-+]?(?!00)[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?|0b[01]+|0o[0-7]+|0x[0-9a-f]+)(?![$\w\u007f-\uffff])(?!\.[0-9])/i,
        true: "/(true|yes|on)(?![a-zA-Z0-9]+)/",
        false: "/(false|no|off)(?![a-zA-Z0-9]+)/"
      },
      {
        stnFactory: "SimpleLiteralStn",
        stnProps: function() {
          let v;
          return {
            value: (() => {
              switch (v = this.toString()) {
                case "true":
                case "yes":
                case "on":
                  return "true";
                case "false":
                case "no":
                case "off":
                  return "false";
                default:
                  return v;
              }
            })()
          };
        }
      }
    );
  };
});
