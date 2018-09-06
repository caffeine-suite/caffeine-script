"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [
      global,
      require("../StandardImport"),
      require("caffeine-eight"),
      require("../StnRegistry")
    ],
    Extensions => {
      return {
        regExpLiteral: [
          "regExpStart regExpMiddle regExpEnd regExpModifiers?",
          "'///' regExpBlockModifiers regExpBlock?",
          "'///' ?/$|\\n/",
          {
            stnFactory: "RegExpStn",
            stnProps: function() {
              let cafBase, cafBase1, cafBase2;
              return this.regExpMiddle
                ? {
                    value: this.regExpMiddle.toString(),
                    modifiers:
                      Caf.exists((cafBase = this.regExpModifiers)) &&
                      cafBase.toString()
                  }
                : {
                    modifiers:
                      Caf.exists((cafBase1 = this.regExpBlockModifiers)) &&
                      (Caf.exists((cafBase2 = cafBase1.regExpModifiers)) &&
                        cafBase2.toString())
                  };
            }
          }
        ],
        regExpBlockModifiers: ["regExpModifiers", /(?=[ \n])/],
        regExpBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock({
          rule: "regExpBlockPattern"
        }),
        regExpBlockPattern: "multilineRegExpMiddle*",
        regExpStart: "'/' !/[ \\/]/",
        regExpMiddle: /([^\/\\\n]|\\.|\#(?!\{))*/,
        regExpEnd: /\//,
        regExpModifiers: /([igmuy]+)/,
        multilineRegExpMiddle: [
          "multilineRegExpText",
          "multilineRegExpEscape",
          "multilineRegExpForwardSlashes",
          "multilineRegExpInterpolation",
          "multilineRegExpComment"
        ],
        multilineRegExpText: {
          pattern: /((?!((^|\n|\s)#|#\{))[^\\\/])+/,
          stnFactory: "StringStn",
          stnProps: function() {
            return { value: this.text.replace(/[\n\s]+/g, "") };
          }
        },
        multilineRegExpEscape: {
          pattern: /(\\.)/,
          stnFactory: "StringStn",
          stnProps: function() {
            return { value: this.text === "\\ " ? " " : this.text };
          }
        },
        multilineRegExpComment: { pattern: "/^|\\n|\\s/ comment" },
        multilineRegExpInterpolation: {
          pattern: "/ */ interpolationStart expression interpolationEnd"
        },
        multilineRegExpForwardSlashes: {
          pattern: /\/\/?(?!\/)/,
          stnFactory: "StringStn",
          stnProps: function() {
            return { value: this.text.replace(/\//g, "\\/") };
          }
        }
      };
    }
  );
});
