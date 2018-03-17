"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "merge",
      "objectWithout",
      "toInspectedObjects",
      "objectKeyCount",
      "compactFlatten",
      "log",
      "JSON",
      "Error",
      "isString"
    ],
    [global, require("../StandardImport")],
    (
      BaseClass,
      merge,
      objectWithout,
      toInspectedObjects,
      objectKeyCount,
      compactFlatten,
      log,
      JSON,
      Error,
      isString
    ) => {
      let createObjectTreeFactory, SourceNode, binary, BaseStn;
      return (
        ({ createObjectTreeFactory } = require("art-object-tree-factory")),
        ({ SourceNode } = require("source-map")),
        ({ binary } = require("art-foundation").Binary),
        (BaseStn = Caf.defClass(
          class BaseStn extends BaseClass {
            constructor(props, children = [], pretransformedStn) {
              let cafTemp, cafBase;
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
              this.initLabeledChildren();
            }
          },
          function(BaseStn, classSuper, instanceSuper) {
            let sourceNodeLineColumnScratch, applyRequiredParens, applyParens;
            this.abstractClass();
            this.prototype.initLabeledChildren = function() {
              this.labeledChildren = this.children && {};
              return Caf.each(this.children, undefined, child => {
                let label, pluralLabel, cafBase;
                child.parent = this;
                ({ label, pluralLabel } = child);
                this.labeledChildren[label] = child;
                if (pluralLabel) {
                  (
                    (cafBase = this.labeledChildren)[pluralLabel] ||
                    (cafBase[pluralLabel] = [])
                  ).push(child);
                }
              });
            };
            this.prototype.getInspectedProps = function() {
              return merge(objectWithout(this.props, "label", "pluralLabel"), {
                parseTreeNode: !!this.parseTreeNode
              });
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
                          Caf.each(this.children, [], (c, cafK, cafInto) => {
                            cafInto.push(c.inspectedObjects);
                          })
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
                createObjectTreeFactory({ class: this }, (props, children) => {
                  return this.newInstance(props, children);
                })
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
            this.prototype.find = function(stnTypePattern) {
              let a;
              a = compactFlatten(
                Caf.each(this.children, [], (child, cafK, cafInto) => {
                  cafInto.push(
                    child.type.match(stnTypePattern)
                      ? child
                      : child.find(stnTypePattern)
                  );
                })
              );
              return a.length === 0 ? null : a;
            };
            sourceNodeLineColumnScratch = {};
            this.getter({
              sourceFile: function() {
                let cafTemp, cafBase;
                return (cafTemp =
                  Caf.exists((cafBase = this.parseTreeNode)) &&
                  cafBase.sourceFile) != null
                  ? cafTemp
                  : "caffeine-script";
              },
              newSourceNode: function() {
                let line, column;
                ({ line, column } = this.parseTreeNode.getSourceLineColumn(
                  sourceNodeLineColumnScratch
                ));
                return new SourceNode(
                  line + 1,
                  column,
                  this.parseTreeNode.sourceFile
                );
              }
            });
            this.prototype.toSourceNode = function(options) {
              log.warn(
                `WARNING: sourceMap generation not fully supported (SemanticTreeNode: ${Caf.toString(
                  this.type
                )})`
              );
              return this.newSourceNode.add(this.toJs(options));
            };
            this.prototype.toJsWithInlineSourceMap = function(options = {}) {
              let code, map;
              ({ code, map } = this.toSourceNode(options).toStringWithSourceMap(
                { file: Caf.exists(options) && options.outputFile }
              ));
              if (options.verbose) {
                log({ sourceMap: map.toString(), sourceFile: this.sourceFile });
              }
              return `${Caf.toString(
                code
              )}\n//# sourceMappingURL=${Caf.toString(
                binary(JSON.stringify(map.toString())).toDataUri(
                  "application/json"
                )
              )}\n//# sourceURL=${Caf.toString(this.sourceFile)}`;
            };
            null;
            this.prototype.toJs = function(options) {
              return (() => {
                throw new Error(
                  `must override one of the toJs* functions: ${Caf.toString(
                    this.className
                  )}`
                );
              })();
            };
            this.prototype.childrenToJs = function(joiner = "", options) {
              return Caf.each(this.children, [], (c, cafK, cafInto) => {
                cafInto.push(c.toJs(options));
              }).join(joiner);
            };
            this.prototype.doJs = function(args, body) {
              if (args) {
                throw "TODO";
              }
              if (!isString(body)) {
                body = body.toFunctionBodyJs();
              }
              return `(() => {${Caf.toString(body)};})()`;
            };
            this.prototype.toFunctionBodyJsArray = function(
              returnAction = true
            ) {
              return returnAction
                ? [`return ${Caf.toString(this.toJsExpression())}`]
                : [this.toJs()];
            };
            this.prototype.toFunctionBodyJs = function(returnAction = true) {
              return this.toFunctionBodyJsArray(returnAction).join("");
            };
            this.prototype.toJsExpression = function(options) {
              return this.toJs(merge(options, { expression: true }));
            };
            this.prototype.toInterpolatedJsStringPart = function() {
              return `\${Caf.toString(${Caf.toString(this.toJsExpression())})}`;
            };
            this.prototype.transformChildren = function() {
              let ret;
              ret = null;
              Caf.each(this.children, undefined, (child, i) => {
                let newChild;
                if (child !== (newChild = child.transform())) {
                  ret != null ? ret : (ret = this.children.slice());
                  newChild.props.label = child.label;
                  ret[i] = newChild;
                }
              });
              return ret || this.children;
            };
            this.prototype.postTransform = function() {
              return this;
            };
            this.prototype.newTransformedInstance = function(
              newProps,
              newChildren
            ) {
              return new this.class(newProps, newChildren, this);
            };
            this.prototype.transform = function() {
              let newChildren;
              return (this.children !== (newChildren = this.transformChildren())
                ? this.newTransformedInstance(this.props, newChildren)
                : this
              ).postTransform();
            };
            this.prototype.needsParens = true;
            this.prototype.needsParensAsStatement = false;
            this.prototype.getNeedsParens = function() {
              return this.needsParens;
            };
            this.prototype.getNeedsParensAsStatement = function() {
              return this.needsParensAsStatement;
            };
            this.applyRequiredParens = applyRequiredParens = function(expr) {
              return `(${Caf.toString(expr)})`;
            };
            this.prototype.applyRequiredParens = applyRequiredParens;
            this.applyParens = applyParens = function(expr) {
              return expr.match(
                /^(\([^)]*\)|\[[^\]]*\]|([!~-]*[_a-z0-9.]*)(\([^)]*\))?)$/i
              )
                ? expr
                : `(${Caf.toString(expr)})`;
            };
            this.prototype.applyParens = applyParens;
            this.prototype.validate = function() {};
            this.prototype.validateAll = function() {
              let e, cafError;
              try {
                this.validate();
              } catch (cafError) {
                e = cafError;
                throw this.parseTreeNode.parser.generateCompileError({
                  failureOffset: this.sourceOffset,
                  errorType: "Validation",
                  message: e.message,
                  info: e.info
                });
              }
              Caf.each(this.children, undefined, child => {
                child.validateAll();
              });
              return this;
            };
            this.prototype.updateScope = function(scope) {
              this.scope = scope;
              return Caf.each(this.children, undefined, child => {
                child.updateScope(this.scope);
              });
            };
          }
        ))
      );
    }
  );
});
