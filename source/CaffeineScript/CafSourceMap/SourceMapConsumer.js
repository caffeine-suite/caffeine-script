"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "readVlqSequence", "Error", "String", "JSON"],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      require("caffeine-eight"),
      require("./Base64")
    ],
    (BaseClass, readVlqSequence, Error, String, JSON) => {
      let SourceMapConsumer;
      return (SourceMapConsumer = Caf.defClass(
        class SourceMapConsumer extends BaseClass {
          constructor(sourceMap) {
            super(...arguments);
            if (Caf.is(sourceMap, String)) {
              sourceMap = JSON.parse(sourceMap);
            }
            this.sourceMap = sourceMap;
          }
        },
        function(SourceMapConsumer, classSuper, instanceSuper) {
          this.getter({
            mappings: function() {
              return this.sourceMap.mappings;
            },
            decodedMappings: function() {
              let out, result;
              out = [];
              while ((result = this.readMapping(this.mappings, result))) {
                if (result.mapping) {
                  out.push(result.mapping);
                }
              }
              return out;
            }
          });
          this.prototype.readMapping = function(
            mappings = this.mappings,
            result
          ) {
            let index,
              genColDelta,
              srcDelta,
              srcLineDelta,
              srcColDelta,
              nameDelta,
              m;
            ({ index } =
              result != null
                ? result
                : (result = {
                    index: 0,
                    generatedLine: 0,
                    generatedColumn: 0,
                    sourceLine: 0,
                    sourceColumn: 0,
                    source: 0,
                    sourceNameIndex: 0,
                    mapping: null
                  }));
            result.mapping = null;
            return index < mappings.length
              ? ((() => {
                  switch (mappings[index]) {
                    case ";":
                      result.index++;
                      return result.generatedLine++;
                    case ",":
                      return result.index++;
                    default:
                      [
                        genColDelta,
                        srcDelta,
                        srcLineDelta,
                        srcColDelta,
                        nameDelta
                      ] = readVlqSequence(mappings, result);
                      if (!(genColDelta != null)) {
                        throw new Error(
                          `invalid mapping at ${Caf.toString(
                            index
                          )}, char: ${Caf.toString(mappings[index])}`
                        );
                      }
                      m = result.mapping = {};
                      m.generatedLine = result.generatedLine;
                      m.generatedColumn = result.generatedColumn += genColDelta;
                      if (srcDelta != null) {
                        m.source = result.source += srcDelta;
                      }
                      if (srcLineDelta != null) {
                        m.sourceLine = result.sourceLine += srcLineDelta;
                      }
                      if (srcColDelta != null) {
                        m.sourceColumn = result.sourceColumn += srcColDelta;
                      }
                      return nameDelta != null
                        ? (m.sourceNameIndex = result.sourceNameIndex += nameDelta)
                        : undefined;
                  }
                })(),
                result)
              : undefined;
          };
        }
      ));
    }
  );
});
