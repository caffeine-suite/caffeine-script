"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Extensions;
  ({ Extensions } = Caf.import(["Extensions"], [
    require("../StandardImport"),
    require("babel-bridge"),
    require("../SemanticTree"),
    global
  ]));
  return {
    regExpLiteral: [
      {
        pattern: "regExpStart regExpMiddle regExpEnd regExpModifiers?",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let cafBase;
          return {
            value: this.regExpMiddle.toString(),
            modifiers: Caf.exists(cafBase = this.regExpModifiers) &&
              cafBase.toString()
          };
        }
      },
      {
        pattern: "'///' regExpBlockModifiers regExpBlock ",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let cafBase, cafBase1;
          return {
            modifiers: Caf.exists(cafBase = this.regExpBlockModifiers) &&
              (Caf.exists(cafBase1 = cafBase.regExpModifiers) &&
                cafBase1.toString())
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
    multilineRegExpComment: {
      pattern: "/^|\\n|\\s/ comment",
      stnFactory: "StringStn",
      stnProps: function() {
        return { value: "" };
      }
    },
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
});
