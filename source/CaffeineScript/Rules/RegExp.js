let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("../SemanticTree");
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
        pattern: "'///' multilineRegExpMiddle* '///' regExpModifiers?",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let cafBase;
          return {
            modifiers: Caf.exists(cafBase = this.regExpModifiers) &&
              cafBase.toString()
          };
        }
      }
    ],
    regExpStart: "'/' !/[ \\/]/",
    regExpMiddle: /([^\/\\\n]|\\.|\#(?!\{))*/,
    regExpEnd: /\//,
    regExpModifiers: /([igmuy]*)/,
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
      pattern: "interpolationStart expression interpolationEnd"
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
