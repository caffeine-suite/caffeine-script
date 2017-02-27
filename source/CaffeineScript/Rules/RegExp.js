let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("../SemanticTree");
  return {
    regExpLiteral: [
      {
        pattern: "regExpStart regExpMiddle regExpEnd regExpModifiers?",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let base;
          return {
            value: this.regExpMiddle.toString(),
            modifiers: Caf.exists(base = this.regExpModifiers) &&
              base.toString()
          };
        }
      },
      {
        pattern: "'///' multilineRegExpMiddle* '///' regExpModifiers?",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let base;
          return {
            modifiers: Caf.exists(base = this.regExpModifiers) &&
              base.toString()
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
