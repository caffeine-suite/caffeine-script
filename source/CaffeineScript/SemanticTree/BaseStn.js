"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "objectWithout",
      "toInspectedObjects",
      "objectKeyCount",
      "createObjectTreeFactory",
      "SourceNode",
      "Error",
      "binary",
      "log"
    ],
    [
      global,
      require("../StandardImport"),
      require("art-object-tree-factory"),
      require("caffeine-source-map"),
      require("art-binary")
    ],
    (
      BaseClass,
      objectWithout,
      toInspectedObjects,
      objectKeyCount,
      createObjectTreeFactory,
      SourceNode,
      Error,
      binary,
      log
    ) => {
      let BaseStn;
      return (BaseStn = Caf.defClass(
        class BaseStn extends BaseClass {
          constructor(props, children = [], pretransformedStn) {
            let e, cafTemp, cafBase, cafTemp1, cafTemp2, cafBase1, cafBase2;
            super(...arguments);
            this.children = children;
            this.pretransformedStn = pretransformedStn;
            this.parseTreeNode =
              (cafTemp =
                Caf.exists((cafBase = this.pretransformedStn)) &&
                cafBase.parseTreeNode) != null
                ? cafTemp
                : props.parseTreeNode;
            this.pretransformedStn || (this.pretransformedStn = this);
            this.props = objectWithout(props, "parseTreeNode");
            try {
              (cafTemp1 = this._sourceIndex) != null
                ? cafTemp1
                : (this._sourceIndex =
                    (cafTemp2 =
                      Caf.exists((cafBase1 = this.pretransformedStn)) &&
                      cafBase1.sourceIndex) != null
                      ? cafTemp2
                      : Caf.exists((cafBase2 = this.parseTreeNode)) &&
                        cafBase2.absoluteOffset);
            } catch (cafError) {
              e = cafError;
              log({
                sourceIndexFailure: { parseTreeNode: this.parseTreeNode }
              });
              throw e;
            }
            this.initLabeledChildren();
          }
        },
        function(BaseStn, classSuper, instanceSuper) {
          let sourceNodeLineColumnScratch;
          this.abstractClass();
          this.setter("parseTreeNode");
          this.getter({
            parseTreeNode: function() {
              let cafTemp, cafBase;
              return (cafTemp = this._parseTreeNode) != null
                ? cafTemp
                : Caf.exists((cafBase = this.parent)) && cafBase.parseTreeNode;
            }
          });
          this.prototype.initLabeledChildren = function() {
            this.labeledChildren = this.children && {};
            return Caf.each2(this.children, child => {
              let label, pluralLabel, cafBase;
              child.parent = this;
              ({ label, pluralLabel } = child);
              this.labeledChildren[label] = child;
              return pluralLabel
                ? (
                    (cafBase = this.labeledChildren)[pluralLabel] ||
                    (cafBase[pluralLabel] = [])
                  ).push(child)
                : undefined;
            });
          };
          this.prototype.getInspectedProps = function() {
            return objectWithout(this.props, "label", "pluralLabel");
          };
          this.getter({
            sourceOffset: function() {
              return this.parseTreeNode.offset;
            },
            parser: function() {
              return this.parseTreeNode.parser.rootParser;
            },
            sourceFile: function() {
              return this.parser.sourceFile;
            },
            label: function() {
              return this.props.label;
            },
            pluralLabel: function() {
              return this.props.pluralLabel;
            },
            root: function() {
              let cafTemp, cafBase;
              return (cafTemp =
                Caf.exists((cafBase = this.parent)) && cafBase.root) != null
                ? cafTemp
                : this;
            },
            inspectedObjects: function() {
              let label, props, name, a;
              ({ label } = this);
              props = this.getInspectedProps();
              name = this.class.getName();
              if (label) {
                name = `${Caf.toString(label)}.${Caf.toString(name)}`;
              }
              return {
                [`${Caf.toString(name)}`]:
                  this.children.length === 0
                    ? toInspectedObjects(props)
                    : ((a = []),
                      objectKeyCount(props) > 0 ? a.push(props) : undefined,
                      a.concat(
                        Caf.array(this.children, c => c.inspectedObjects)
                      ))
              };
            },
            type: function() {
              return this.class.type;
            }
          });
          this.postCreate = function() {
            let s;
            s = this.getName().split(/Stn$/);
            this.type = s[0];
            return classSuper.postCreate.apply(this, arguments);
          };
          this.newInstance = function(props, children) {
            return new this(props, children);
          };
          this.postCreateConcreteClass = function(options) {
            let classModuleState, hotReloadEnabled;
            ({ classModuleState, hotReloadEnabled } = options);
            classSuper.postCreateConcreteClass.apply(this, arguments);
            return require("../StnRegistry").register(
              createObjectTreeFactory({ class: this }, (props, children) =>
                this.newInstance(props, children)
              )
            );
          };
          this.prototype.findParent = function(stnTypePattern) {
            let parent, found;
            ({ parent } = this);
            found = null;
            while (parent && !found) {
              if (parent.type.match(stnTypePattern)) {
                found = parent;
              } else {
                ({ parent } = parent);
              }
            }
            return found;
          };
          this.prototype.find = function(
            stnTypePattern,
            stnTypeStopPattern,
            _foundList = []
          ) {
            Caf.each2(
              this.children,
              child =>
                stnTypePattern.test(child.type)
                  ? _foundList.push(child)
                  : !(
                      Caf.exists(stnTypeStopPattern) &&
                      stnTypeStopPattern.test(child.type)
                    )
                    ? child.find(stnTypePattern, stnTypeStopPattern, _foundList)
                    : undefined
            );
            return _foundList.length === 0 ? null : _foundList;
          };
          sourceNodeLineColumnScratch = {};
          this.property("sourceIndex");
          this.getter({
            source: function() {
              return this.parseTreeNode.parser.source;
            },
            sourceLineColumn: function() {
              return this.parseTreeNode.parser.getLineColumn(
                this.sourceIndex,
                sourceNodeLineColumnScratch
              );
            }
          });
          this.getter({
            sourceFile: function() {
              let cafTemp, cafBase;
              return (cafTemp =
                Caf.exists((cafBase = this.parseTreeNode)) &&
                cafBase.sourceFile) != null
                ? cafTemp
                : "caffeine-script";
            }
          });
          this.prototype.createSourceNode = function(...children) {
            return new SourceNode(this.sourceIndex, children);
          };
          this.prototype.toSourceNode = function(options) {
            return (() => {
              throw new Error(
                `toSourceNode not overridden in ${Caf.toString(
                  this.class.name
                )}. Falling back to old toJs().`
              );
            })();
          };
          this.prototype.toJsUsingSourceNode = function(options = {}) {
            let debug,
              inlineMap,
              source,
              sourceMap,
              sourceFile,
              sourceNode,
              out,
              js,
              props;
            ({
              debug,
              inlineMap,
              source = this.source,
              sourceMap,
              sourceFile = this.sourceFile
            } = options);
            sourceNode = this.toSourceNode(options);
            out = {
              compiled:
                inlineMap || sourceMap
                  ? (({ js, sourceMap } = sourceNode.generate(
                      source,
                      sourceFile
                    )),
                    inlineMap
                      ? {
                          js: `${Caf.toString(
                            js
                          )}\n//# sourceMappingURL=${Caf.toString(
                            binary(sourceMap).toDataUri(
                              "application/json",
                              true
                            )
                          )}\n//# sourceURL=${Caf.toString(sourceFile)}`
                        }
                      : sourceMap
                        ? { js, sourceMap }
                        : { js })
                  : { js: sourceNode.toString() }
            };
            if (debug) {
              out.sourceNode = sourceNode;
            }
            if ((props = sourceNode.mergedProps)) {
              out.props = props;
            }
            return out;
          };
          this.prototype.childrenToSourceNodes = function(joiner, options) {
            return this.stnArrayToSourceNodes(this.children, joiner, options);
          };
          this.prototype.stnArrayToSourceNodes = function(
            stnArray,
            joiner,
            options
          ) {
            let out;
            return Caf.array(
              stnArray,
              (c, i) => {
                if (joiner != null && i > 0) {
                  out.push(joiner);
                }
                return c.toSourceNode(options);
              },
              null,
              (out = [])
            );
          };
          this.prototype.doSourceNode = function(...body) {
            return this.createSourceNode("(() => {", body, "})()");
          };
          this.prototype.toInterpolatedBodySourceNode = function() {
            return [
              "${Caf.toString(",
              this.toSourceNode({ expression: true }),
              ")}"
            ];
          };
          this.prototype.transformChildren = function() {
            let ret;
            ret = null;
            Caf.each2(this.children, (child, i) => {
              let newChild;
              return child !== (newChild = child.transform())
                ? (ret != null ? ret : (ret = this.children.slice()),
                  (newChild.props.label = child.label),
                  (ret[i] = newChild))
                : undefined;
            });
            return ret || this.children;
          };
          this.prototype.postTransform = function() {
            return this;
          };
          this.prototype.decorate = function() {};
          this.prototype.newTransformedInstance = function(
            newProps,
            newChildren
          ) {
            return new this.class(newProps, newChildren, this);
          };
          this.prototype.transform = function() {
            let newChildren;
            this.decorate();
            return (this.children !== (newChildren = this.transformChildren())
              ? this.newTransformedInstance(this.props, newChildren)
              : this
            )
              .postTransform()
              .setDefaultParseTreeNode(this.parseTreeNode);
          };
          this.prototype.setDefaultParseTreeNode = function(parseTreeNode) {
            if (!this.parseTreeNode) {
              this.parseTreeNode = parseTreeNode;
              Caf.each2(this.children, child =>
                child.setDefaultParseTreeNode(parseTreeNode)
              );
            }
            return this;
          };
          this.prototype.validate = function() {};
          this.prototype.validateAll = function() {
            let e, ce;
            try {
              this.validate();
            } catch (cafError) {
              e = cafError;
              ce = this.parseTreeNode.parser.generateCompileError({
                failureIndex: this.sourceOffset,
                errorType: "Validation",
                message: e.message,
                info: e.info
              });
              ce.stack = e.stack;
              throw ce;
            }
            Caf.each2(this.children, child => child.validateAll());
            return this;
          };
          this.prototype.updateScope = function(scope) {
            this.scope = scope;
            return Caf.each2(this.children, child =>
              child.updateScope(this.scope)
            );
          };
        }
      ));
    }
  );
});
