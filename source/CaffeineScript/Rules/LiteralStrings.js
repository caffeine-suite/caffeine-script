let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("../SemanticTree"),
    Lib = require("../Lib"),
    Extensions,
    StringStn,
    InterpolatedStringStn;
  ({ Extensions, StringStn, InterpolatedStringStn } = Caf.i(
    ["Extensions", "StringStn", "InterpolatedStringStn"],
    [StandardImport, BabelBridge, SemanticTree, Lib, global]
  ));
  return function() {
    this.rule({
      doubleQuote: /"/,
      singleQuote: /'/,
      interpolationStart: /\#\{/,
      interpolationEnd: /\}/,
      dqStringMiddle: /([^"\\#]|\\.|\#(?!\{))*/,
      sqStringMiddle: /([^'\\#]|\\.|\#(?!\{))*/,
      blockStringMiddle: /([^\\#]|\\.|\#(?!\{))*/
    });
    this.rule({
      stringLiteral: [
        {
          pattern: '/""/ tripple:/"/? &/ +[^ \\n]| *\\n/ stringBlock',
          getStn: function() {
            let ret;
            ret = this.stringBlock.getStn();
            if (!this.tripple) {
              ret.compactNewLines();
            }
            Caf.isF(ret.trimRight) && ret.trimRight();
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
        },
        {
          pattern: "':' string:unquotedString",
          getStn: function() {
            return StringStn({ value: this.string.toString() });
          }
        },
        {
          pattern: /#[$\w\u007f-\uffff]+/,
          getStn: function() {
            return StringStn({ value: this.toString() });
          }
        },
        {
          pattern: /[-+]?(?!00)[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?[$\w\u007f-\uffff]+/,
          getStn: function() {
            return StringStn({ value: this.toString() });
          }
        }
      ],
      stringBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock({
        rule: "stringBlockBody"
      })
    });
    this.rule(
      {
        stringLiteral: [
          "bracketStart:doubleQuote mid:dqStringMiddle interpolation:dqStringInterpolation? doubleQuote",
          "bracketStart:singleQuote mid:sqStringMiddle interpolation:sqStringInterpolation? singleQuote"
        ],
        stringBlockBody: "/[ \\n]*/ mid:blockStringMiddle interpolation:blockStringInterpolation?"
      },
      {
        getStnChildren: function(appendTo = []) {
          let cafBase;
          if (this.mid.matchLength > 0) {
            appendTo.push(StringStn({ value: this.mid.toString() }));
          }
          Caf.exists(cafBase = this.interpolation) &&
            cafBase.getStnChildren(appendTo);
          return appendTo;
        },
        getStn: function() {
          let ret;
          ret = this.interpolation
            ? InterpolatedStringStn(this.getStnChildren())
            : StringStn({ value: this.mid.toString() });
          if (this.bracketStart) {
            ret.compactNewLines(true, true);
          }
          return ret;
        }
      }
    );
    this.rule({
      interpolation: [
        "interpolationStart expression interpolationEnd",
        "interpolationStart expression:rValueBlock _end? interpolationEnd"
      ]
    });
    return this.rule(
      {
        dqStringInterpolation: "interpolation mid:dqStringMiddle interpolationContinues:dqStringInterpolation?",
        sqStringInterpolation: "interpolation mid:sqStringMiddle interpolationContinues:sqStringInterpolation?",
        blockStringInterpolation: "interpolation mid:blockStringMiddle interpolationContinues:blockStringInterpolation?"
      },
      {
        getStnChildren: function(appendTo = []) {
          let cafBase;
          appendTo.push(this.interpolation.expression.getStn());
          if (this.mid.matchLength > 0) {
            appendTo.push(StringStn({ value: this.mid.toString() }));
          }
          Caf.exists(cafBase = this.interpolationContinues) &&
            cafBase.getStnChildren(appendTo);
          return appendTo;
        }
      }
    );
  };
});
