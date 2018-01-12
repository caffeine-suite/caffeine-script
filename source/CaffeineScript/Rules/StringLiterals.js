"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions", "StringStn", "InterpolatedStringStn"],
    [
      global,
      require("../StandardImport"),
      require("caffeine-eight"),
      require("../StnRegistry"),
      require("../Lib")
    ],
    (Extensions, StringStn, InterpolatedStringStn) => {
      let wordStringChar, blockStringStartChar;
      return (
        (wordStringChar = /[^\n\s,)\]\}]/),
        (blockStringStartChar = /( |\n|[^.\n\s,)\]\}])/),
        function() {
          this.rule({
            doubleQuote: /"/,
            singleQuote: /'/,
            interpolationStart: /\#\{/,
            interpolationEnd: /\}/,
            dqStringMiddle: /([^"\\#]|\u[0-9a-f]{4}|\u\{[0-9a-f]+\}|\x[0-9a-f]{2}|\\(?:[1-7][0-7]{0,2}|[0-7]{2,3})|\\.|\#(?!\{))*/,
            sqStringMiddle: /([^'\\#]|\u[0-9a-f]{4}|\u\{[0-9a-f]+\}|\x[0-9a-f]{2}|\\(?:[1-7][0-7]{0,2}|[0-7]{2,3})|\\.|\#(?!\{))*/,
            blockStringMiddle: /([^\\#]|\u[0-9a-f]{4}|\u\{[0-9a-f]+\}|\x[0-9a-f]{2}|\\(?:[1-7][0-7]{0,2}|[0-7]{2,3})|\\.|\#(?!\{))*/
          });
          this.rule({
            stringLiteral: [
              {
                pattern: `/""/ tripple:/"/? &/${Caf.toString(
                  blockStringStartChar.source
                )}/ stringBlock`,
                getStn: function() {
                  let ret;
                  ret = this.stringBlock.getStn();
                  if (!this.tripple) {
                    Caf.isF(ret.compactNewLines) && ret.compactNewLines();
                    Caf.isF(ret.trimLeft) && ret.trimLeft();
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
                pattern: RegExp(
                  `:(?!:)${Caf.toString(wordStringChar.source)}+`
                ),
                getStn: function() {
                  return StringStn({ value: this.toString().slice(1) });
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
            stringBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(
              { rule: "stringBlockBody" }
            )
          });
          this.rule(
            {
              stringLiteral: [
                "bracketStart:doubleQuote mid:dqStringMiddle interpolation:dqStringInterpolation? doubleQuote",
                "bracketStart:singleQuote mid:sqStringMiddle interpolation:sqStringInterpolation? singleQuote"
              ],
              stringBlockBody:
                "/ *\n/? mid:blockStringMiddle interpolation:blockStringInterpolation?"
            },
            {
              getStnChildren: function(appendTo = []) {
                let cafBase;
                if (this.mid.matchLength > 0) {
                  appendTo.push(StringStn({ value: this.mid.toString() }));
                }
                Caf.exists((cafBase = this.interpolation)) &&
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
              "interpolationStart expression:requiredValue _end? interpolationEnd"
            ]
          });
          return this.rule(
            {
              dqStringInterpolation:
                "interpolation mid:dqStringMiddle interpolationContinues:dqStringInterpolation?",
              sqStringInterpolation:
                "interpolation mid:sqStringMiddle interpolationContinues:sqStringInterpolation?",
              blockStringInterpolation:
                "interpolation mid:blockStringMiddle interpolationContinues:blockStringInterpolation?"
            },
            {
              getStnChildren: function(appendTo = []) {
                let cafBase;
                appendTo.push(this.interpolation.expression.getStn());
                if (this.mid.matchLength > 0) {
                  appendTo.push(StringStn({ value: this.mid.toString() }));
                }
                Caf.exists((cafBase = this.interpolationContinues)) &&
                  cafBase.getStnChildren(appendTo);
                return appendTo;
              }
            }
          );
        }
      );
    }
  );
});
