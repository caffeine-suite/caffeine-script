"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "SourceMapGenerator", "String", "Array"],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      { SourceMapGenerator: require("./SourceMapGenerator") }
    ],
    (BaseClass, SourceMapGenerator, String, Array) => {
      let SourceNode;
      return (SourceNode = Caf.defClass(
        class SourceNode extends BaseClass {
          constructor(sourceIndex, children) {
            super(...arguments);
            this.sourceIndex = sourceIndex;
            this.children = children;
          }
        },
        function(SourceNode, classSuper, instanceSuper) {
          this.property("sourceIndex", "children");
          this.prototype.generate = function(source) {
            return new SourceMapGenerator(source).add(
              this.children,
              this.sourceIndex
            );
          };
          this.prototype.toString = function(
            source = this.children,
            output = { js: "" }
          ) {
            switch (false) {
              case !Caf.is(source, String):
                output.js += source;
                break;
              case !Caf.is(source, Array):
                Caf.each2(source, child => this.toString(child, output));
                break;
              case !Caf.is(source, SourceNode):
                source.toString(null, output);
            }
            return output;
          };
        }
      ));
    }
  );
});
