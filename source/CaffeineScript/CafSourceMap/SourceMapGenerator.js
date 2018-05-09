"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "JSON",
      "merge",
      "encodeVlq",
      "String",
      "Array",
      "SourceLineColumnMap"
    ],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      require("caffeine-eight"),
      require("./Base64")
    ],
    (BaseClass, JSON, merge, encodeVlq, String, Array, SourceLineColumnMap) => {
      let SourceMapGenerator;
      return (SourceMapGenerator = Caf.defClass(
        class SourceMapGenerator extends BaseClass {
          constructor(source, sourceFileName, generatedFileName) {
            super(...arguments);
            this.source = source;
            this.sourceFileName = sourceFileName;
            this.generatedFileName = generatedFileName;
            this._js = "";
            this._mappings = "";
            this._lastSourceLine = this._lastSourceColumn = this._lastGeneratedColumn = this._nextGeneratedColumn = 0;
            this._firstSegment = true;
            this._lastSourceIndex = 0;
            this._sourceLineColumnMap = new SourceLineColumnMap(this.source);
          }
        },
        function(SourceMapGenerator, classSuper, instanceSuper) {
          let reusableColLine;
          this.property("source", "sourceFileName", "generatedFileName");
          this.getter(
            "js",
            "mappings",
            "lastSourceLine",
            "lastSourceColumn",
            "lastGeneratedColumn",
            "nextGeneratedColumn",
            {
              status: function() {
                return {
                  lastSourceLine: this.lastSourceLine,
                  lastSourceColumn: this.lastSourceColumn,
                  lastGeneratedColumn: this.lastGeneratedColumn,
                  nextGeneratedColumn: this.nextGeneratedColumn,
                  mappings: this.mappings
                };
              },
              sourceMap: function() {
                return JSON.stringify(this.rawSourceMap);
              },
              rawSourceMap: function() {
                return merge(
                  {
                    version: 3,
                    file: this.generatedFileName,
                    mappings: this.mappings
                  },
                  this.sourceFileName
                    ? { sources: [this.sourceFileName] }
                    : undefined,
                  { sourceContent: [this.source], names: [], sourceRoot: "" }
                );
              },
              inspectedObjects: function() {
                return this.rawSourceMap;
              }
            }
          );
          this.prototype.addLine = function() {
            this._mappings += ";";
            this._lastGeneratedColumn = 0;
            return (this._firstSegment = true);
          };
          reusableColLine = {};
          this.prototype.addSegment = function(sourceIndex) {
            let line, column, out;
            return sourceIndex != null && sourceIndex !== this._lastSourceIndex
              ? ((this._lastSourceIndex = sourceIndex),
                ({ line, column } = this._sourceLineColumnMap.getLineColumn(
                  sourceIndex,
                  reusableColLine
                )),
                (out =
                  encodeVlq(
                    this._nextGeneratedColumn - this._lastGeneratedColumn
                  ) +
                  "A" +
                  encodeVlq(line - this._lastSourceLine) +
                  encodeVlq(column - this._lastSourceColumn)),
                (this._lastGeneratedColumn = this._nextGeneratedColumn),
                (this._lastSourceLine = line),
                (this._lastSourceColumn = column),
                this._firstSegment
                  ? (this._firstSegment = false)
                  : (this._mappings += ","),
                (this._mappings += out))
              : undefined;
          };
          this.prototype.advance = function(generatedString) {
            let index, lineAdded, lastStartIndex;
            index = -1;
            lineAdded = false;
            while (
              0 <=
              (index = generatedString.indexOf(
                "\n",
                (lastStartIndex = index + 1)
              ))
            ) {
              lineAdded = true;
              this.addLine();
            }
            return lineAdded
              ? (this._nextGeneratedColumn =
                  generatedString.length - lastStartIndex)
              : (this._nextGeneratedColumn += generatedString.length);
          };
          this.prototype.add = function(output) {
            let sourceIndex, children;
            switch (false) {
              case !Caf.is(output, String):
                this._js += output;
                this.advance(output);
                break;
              case !(Caf.exists(output) && output.children):
                ({ sourceIndex, children } = output);
                this.addSegment(sourceIndex);
                this.add(children);
                break;
              case !Caf.is(output, Array):
                Caf.each2(
                  output,
                  child => this.add(child),
                  child => child != null
                );
            }
            return this;
          };
        }
      ));
    }
  );
});
