let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("../SemanticTree"),
    Lib = require("../Lib"),
    dqStringStartRegexp,
    Extensions,
    peek,
    StringStn,
    InterpolatedStringStn,
    deescapeSpaces,
    escapeUnescaped;
  ({
    Extensions,
    peek,
    StringStn,
    InterpolatedStringStn,
    deescapeSpaces,
    escapeUnescaped
  } = Caf.i(
    [
      "Extensions",
      "peek",
      "StringStn",
      "InterpolatedStringStn",
      "deescapeSpaces",
      "escapeUnescaped"
    ],
    [ArtFoundation, BabelBridge, SemanticTree, Lib, global]
  ));
  dqStringStartRegexp = /"([^\\"\#]|\\[\s\S]|\#(?!\{))*/;
  return function() {
    this.rule({
      stringLiteral: [
        {
          pattern: '/""/ tripple:/"/? &/ +[^ \\n]| *\\n/ stringBlock',
          getStn: function() {
            let ret, base;
            ret = Caf.getSuper(this).getStn.apply(this, arguments);
            if (!this.tripple) {
              if (ret.type === "String") {
                ret.compactNewLines();
              } else {
                Caf.e(ret.children, undefined, (child, k, into) => {
                  if (child.type === "String") {
                    child.compactNewLines();
                  }
                });
              }
            }
            Caf.isF((base = peek(ret.children) || ret).trimRight) &&
              base.trimRight();
            return ret;
          }
        },
        {
          pattern: "/''/ tripple:/'/? &/ +[^ \\n]| *\\n/ unparsedBlock",
          getStn: function() {
            let ret;
            ret = StringStn({ value: this.unparsedBlock.toString() });
            if (!this.tripple) {
              ret.compactNewLines();
            }
            return ret;
          }
        }
      ],
      stringBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock({
        rule: "stringBlockBody"
      })
    });
    this.rule(
      {
        stringLiteral: "dqStringStart mid:dqStringMiddle interpolation:dqStringInterpolation? dqStringEnd",
        stringBlockBody: "/[ \\n]*/ mid:blockStringMiddle interpolation:blockStringInterpolation?"
      },
      {
        getStnChildren: function(appendTo = []) {
          if (this.mid.matchLength > 0) {
            appendTo.push(StringStn({ value: this.mid.toString() }));
          }
          this.interpolation != null &&
            this.interpolation.getStnChildren(appendTo);
          return appendTo;
        },
        getStn: function() {
          return this.interpolation
            ? InterpolatedStringStn(this.getStnChildren())
            : StringStn({ value: this.mid.toString() });
        }
      }
    );
    this.rule(
      {
        stringLiteral: [
          "/'/ string:/([^\\']|\\.)*/ /'/",
          "':' string:unquotedString"
        ]
      },
      {
        getStn: function() {
          return StringStn({ value: this.string.toString() });
        }
      }
    );
    this.rule({
      dqStringStart: /"/,
      interpolationStart: /\#\{/,
      interpolationEnd: /\}/
    });
    this.rule(
      {
        dqStringMiddle: /([^"\\#]|\\.|\#(?!\{))*/,
        blockStringMiddle: /([^\\#]|\\.|\#(?!\{))*/
      },
      {
        toEscapedQuotes: function(quote) {
          return deescapeSpaces(escapeUnescaped(this.toString(), quote));
        },
        toEscapedBackTicks: function() {
          return deescapeSpaces(escapeUnescaped(this.toString(), "`"));
        },
        toEscapedDoubleQuotes: function() {
          return deescapeSpaces(escapeUnescaped(this.toString(), '"'));
        }
      }
    );
    this.rule(
      {
        dqStringInterpolation: "interpolationStart expression interpolationEnd mid:dqStringMiddle interpolation:dqStringInterpolation?",
        blockStringInterpolation: "interpolationStart expression interpolationEnd mid:blockStringMiddle interpolation:blockStringInterpolation?"
      },
      {
        getStnChildren: function(appendTo = []) {
          appendTo.push(this.expression.getStn());
          if (this.mid.matchLength > 0) {
            appendTo.push(StringStn({ value: this.mid.toString() }));
          }
          this.interpolation != null &&
            this.interpolation.getStnChildren(appendTo);
          return appendTo;
        }
      }
    );
    return this.rule({ dqStringEnd: /"/ });
  };
});
