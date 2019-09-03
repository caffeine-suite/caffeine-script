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
      let blockStringStartChar;
      blockStringStartChar = /( |\n|[^.\n\s,)\]\}])/;
      return function() {
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
                ret = StringStn({
                  parseTreeNode: this,
                  value: this.unparsedBlock.toString()
                });
                if (!this.tripple) {
                  ret.compactNewLines();
                }
                return ret;
              }
            },
            {
              pattern: "/\"\"\"|'''/",
              getStn: function() {
                return StringStn({ parseTreeNode: this, value: "" });
              }
            },
            {
              pattern: "/:(?!:)/ unquotedString",
              getStn: function() {
                return StringStn({
                  parseTreeNode: this,
                  value: this.toString().slice(1)
                });
              }
            },
            {
              pattern: "/#(?!#)/ unquotedStringWithoutTrailingColon",
              getStn: function() {
                return StringStn({
                  parseTreeNode: this,
                  value: this.toString()
                });
              }
            },
            {
              pattern: /[-+]?(?!00)[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?[$\w\u007f-\uffff]+/,
              getStn: function() {
                return StringStn({
                  parseTreeNode: this,
                  value: this.toString()
                });
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
            stringBlockBody:
              "/ *\n/? mid:blockStringMiddle interpolation:blockStringInterpolation?"
          },
          {
            getStnChildren: function(appendTo = []) {
              let base;
              if (this.mid.matchLength > 0) {
                appendTo.push(
                  StringStn({ parseTreeNode: this, value: this.mid.toString() })
                );
              }
              Caf.exists((base = this.interpolation)) &&
                base.getStnChildren(appendTo);
              return appendTo;
            },
            getStn: function() {
              let ret;
              ret = this.interpolation
                ? InterpolatedStringStn(this.getStnChildren())
                : StringStn({
                    parseTreeNode: this,
                    value: this.mid.toString()
                  });
              if (this.bracketStart) {
                ret.compactNewLines(true, true);
              }
              return ret;
            }
          }
        );
        this.rule({
          interpolation: [
            "interpolationStart interpolationEnd expression:toEolAndBlock",
            "interpolationStart _OrEnd interpolationEnd",
            "interpolationStart _? expression:root interpolationEnd",
            "interpolationStart expression:block end? interpolationEnd"
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
              let expression, base;
              if ((expression = this.interpolation.expression)) {
                appendTo.push(expression.getStn());
              }
              if (this.mid.matchLength > 0) {
                appendTo.push(
                  StringStn({ parseTreeNode: this, value: this.mid.toString() })
                );
              }
              Caf.exists((base = this.interpolationContinues)) &&
                base.getStnChildren(appendTo);
              return appendTo;
            }
          }
        );
      };
    }
  );
});
