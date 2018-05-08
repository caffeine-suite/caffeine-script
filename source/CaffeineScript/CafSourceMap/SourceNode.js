"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "toInspectedObjects",
      "SourceMapGenerator",
      "String",
      "Array"
    ],
    [
      global,
      require("art-standard-lib"),
      require("art-class-system"),
      { SourceMapGenerator: require("./SourceMapGenerator") }
    ],
    (BaseClass, toInspectedObjects, SourceMapGenerator, String, Array) => {
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
          this.getter({
            inspectedObjects: function() {
              return {
                sourceIndex: this.sourceIndex,
                children: toInspectedObjects(this.children)
              };
            }
          });
          this.prototype.generate = function(source, sourceFileName) {
            return new SourceMapGenerator(source, sourceFileName).add(this);
          };
          this.prototype.toString = function(source, output = { js: "" }) {
            source != null ? source : (source = this.children);
            switch (false) {
              case !Caf.is(source, String):
                output.js += source;
                break;
              case !Caf.is(source, Array):
                Caf.each2(
                  source,
                  child => this.toString(child, output),
                  child => child != null
                );
                break;
              case !Caf.is(source, SourceNode):
                source.toString(null, output);
            }
            return output.js;
          };
        }
      ));
    }
  );
});
