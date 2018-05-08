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
            this._sourceLineColumnMap = new SourceLineColumnMap(this.source);
          }
        },
        function(SourceMapGenerator, classSuper, instanceSuper) {
          let reusableColLine;
          this.property("source", "sourceFileName", "generatedFileName");
          this.getter("js", "mappings", {
            sourceMap: function() {
              return JSON.stringify(this.rawSourceMap);
            },
            rawSourceMap: function() {
              return merge(
                {
                  version: 3,
                  file: this.generatedFileName,
                  sources: [this.sourceFileName]
                },
                this.mappings
              );
            }
          });
          this.prototype.addLine = function() {
            this._mappings += ";";
            this._lastGeneratedColumn = 0;
            return (this._firstSegment = true);
          };
          reusableColLine = {};
          this.prototype.addSegment = function(sourceIndex) {
            let line, column, out;
            ({ line, column } = this._sourceLineColumnMap.getLineColumn(
              sourceIndex,
              reusableColLine
            ));
            out =
              encodeVlq(this._nextGeneratedColumn - this._lastGeneratedColumn) +
              "A" +
              encodeVlq(line - this._lastSourceLine) +
              encodeVlq(column - this._lastSourceColumn);
            this._lastGeneratedColumn = this._nextGeneratedColum;
            this._lastSourceLine = line;
            this._lastSourceColumn = column;
            if (!this._firstSegment) {
              this._firstSegment = false;
              this._mappings += ",";
            }
            return (this._mappings += out);
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
          this.prototype.add = function(output, sourceIndex) {
            let children;
            switch (false) {
              case !Caf.is(output, String):
                this.addSegment(sourceIndex);
                this._js += output;
                this.advance(output);
                break;
              case !(Caf.exists(output) && output.children):
                ({ sourceIndex, children } = output);
                this.add(sourceIndex, children);
                break;
              case !Caf.is(output, Array):
                Caf.each2(output, child => this.add(sourceIndex, output));
            }
            return this;
          };
        }
      ));
    }
  );
});
