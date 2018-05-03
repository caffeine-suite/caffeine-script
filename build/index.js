module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("caffeine-script-runtime");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "BaseClass",
      "objectWithout",
      "toInspectedObjects",
      "objectKeyCount",
      "compactFlatten",
      "log",
      "JSON",
      "Error",
      "isString",
      "merge"
    ],
    [global, __webpack_require__(3)],
    (
      BaseClass,
      objectWithout,
      toInspectedObjects,
      objectKeyCount,
      compactFlatten,
      log,
      JSON,
      Error,
      isString,
      merge
    ) => {
      let createObjectTreeFactory, SourceNode, binary, BaseStn;
      return (
        ({ createObjectTreeFactory } = __webpack_require__(121)),
        ({ SourceNode } = __webpack_require__(119)),
        ({ binary } = __webpack_require__(120)),
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
            this.setter("parseTreeNode");
            this.getter({
              parseTreeNode: function() {
                let cafTemp, cafBase;
                return (cafTemp = this._parseTreeNode) != null
                  ? cafTemp
                  : Caf.exists((cafBase = this.parent)) &&
                      cafBase.parseTreeNode;
              }
            });
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
              return __webpack_require__(4).register(
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
            this.prototype.find = function(
              stnTypePattern,
              stnTypeStopPattern,
              _foundList = []
            ) {
              Caf.each(this.children, undefined, child => {
                if (stnTypePattern.test(child.type)) {
                  _foundList.push(child);
                } else {
                  if (
                    !(
                      Caf.exists(stnTypeStopPattern) &&
                      stnTypeStopPattern.test(child.type)
                    )
                  ) {
                    child.find(stnTypePattern, stnTypeStopPattern, _foundList);
                  }
                }
              });
              return _foundList.length === 0 ? null : _foundList;
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
            this.prototype.createSourceNode = function(...args) {
              return this.newSourceNode.add(compactFlatten(args));
            };
            this.prototype.toSourceNode = function(options) {
              log.warn(
                `WARNING: toSourceNode not overridden in ${Caf.toString(
                  this.class.name
                )}. Falling back to old toJs().`
              );
              return this.createSourceNode(this.toJs(options));
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
                  "application/json",
                  true
                )
              )}\n//# sourceURL=${Caf.toString(this.sourceFile)}`;
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
              return Caf.each(stnArray, (out = []), (c, i, cafInto) => {
                if (joiner != null && i > 0) {
                  out.push(joiner);
                }
                cafInto.push(c.toSourceNode(options));
              });
            };
            this.prototype.doSourceNode = function(...body) {
              return this.createSourceNode("(() => {", body, "})()");
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
                Caf.each(this.children, undefined, child => {
                  child.setDefaultParseTreeNode(parseTreeNode);
                });
              }
              return this;
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
              let e;
              try {
                this.validate();
              } catch (cafError) {
                e = cafError;
                throw this.parseTreeNode.parser.generateCompileError({
                  failureIndex: this.sourceOffset,
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return __webpack_require__(7).merge(
    __webpack_require__(34),
    __webpack_require__(8),
    __webpack_require__(7),
    {
      StnRegistry: __webpack_require__(4),
      javaScriptReservedWords: __webpack_require__(18)
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "isFunction", "isString", "Error", "formattedInspect"],
    [global, __webpack_require__(7), __webpack_require__(34)],
    (BaseClass, isFunction, isString, Error, formattedInspect) => {
      let StnRegistry;
      return (StnRegistry = Caf.defClass(
        class StnRegistry extends BaseClass {},
        function(StnRegistry, classSuper, instanceSuper) {
          this.register = function(stn) {
            return (this[stn.class.getName()] = stn);
          };
          this.get = function(stnFactoryName) {
            let out;
            return isFunction(stnFactoryName)
              ? stnFactoryName
              : isString(stnFactoryName)
                ? (!(out = this[stnFactoryName])
                    ? (() => {
                        throw new Error(
                          `stnFactoryName not found: ${Caf.toString(
                            formattedInspect(stnFactoryName)
                          )}`
                        );
                      })()
                    : undefined,
                  out)
                : undefined;
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("caffeine-eight");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var SemanticTree,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(16)).addNamespace('SemanticTree', SemanticTree = (function(superClass) {
  extend(SemanticTree, superClass);

  function SemanticTree() {
    return SemanticTree.__super__.constructor.apply(this, arguments);
  }

  return SemanticTree;

})(Neptune.PackageNamespace));

__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(15);

__webpack_require__(27);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("art-standard-lib");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["escapeRegExp", "escapeJavascriptString"],
    [global, __webpack_require__(7)],
    (escapeRegExp, escapeJavascriptString) => {
      let legalUnquotedPropName;
      return {
        deescapeSpaces: function(string) {
          return Caf.each(
            string.split(/((?:\\\\)+)/),
            [],
            (str, i, cafInto) => {
              cafInto.push(
                Caf.mod(i, 2) === 0 ? str.replace(/\\ /g, " ") : str
              );
            }
          ).join("");
        },
        escapeNewLines: function(string) {
          return string.replace(/\n/g, "\\n");
        },
        escapeMustEscapes: function(string) {
          return string.replace(/[\n]/g, "\\n");
        },
        escapeUnescaped: function(string, charsToEscape = '"') {
          let charsRegExp, split;
          charsRegExp = RegExp(
            `([${Caf.toString(escapeRegExp(charsToEscape))}])`,
            "g"
          );
          split = charsToEscape.match(/\\/)
            ? [string]
            : string.split(/((?:\\.)+)/);
          return Caf.each(split, [], (str, i, cafInto) => {
            cafInto.push(
              Caf.mod(i, 2) === 0 ? str.replace(charsRegExp, "\\$1") : str
            );
          }).join("");
        },
        legalUnquotedPropName: (legalUnquotedPropName = /^(0|[1-9][0-9]*|[a-z_][0-9_a-z]*)$/i),
        escapePropName: function(rawPropName) {
          return legalUnquotedPropName.test(rawPropName)
            ? rawPropName
            : escapeJavascriptString(rawPropName);
        },
        identifierRegexp: /^(?!\d)((?!\s)[$\w\u007f-\uffff])+$/
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["lowerCamelCase", "merge", "Error", "log", "isString", "mergeInto"],
    [global, __webpack_require__(3)],
    (lowerCamelCase, merge, Error, log, isString, mergeInto) => {
      let UniqueIdentifierHandle;
      return (
        (UniqueIdentifierHandle = __webpack_require__(12)),
        function(toExtend) {
          let ScopeStnMixin;
          return (ScopeStnMixin = Caf.defClass(
            class ScopeStnMixin extends toExtend {
              constructor() {
                super(...arguments);
                this._uniqueIdentifierHandles = this._boundUniqueIdentifiers = this._identifiersUsedButNotAssigned = this._argumentNames = this._identifiersUsed = this._identifiersAssigned = this._childScopes = this._identifiersInScope = null;
                this._scopeUpdated = false;
              }
            },
            function(ScopeStnMixin, classSuper, instanceSuper) {
              let normalizePerferredName;
              this.abstractClass();
              this.normalizePerferredName = normalizePerferredName = function(
                preferredName = "temp"
              ) {
                return lowerCamelCase(
                  preferredName.match(/^caf/i)
                    ? preferredName
                    : `caf ${Caf.toString(preferredName)}`
                );
              };
              this.getter({
                childScopes: function() {
                  return this._childScopes || (this._childScopes = []);
                },
                argumentNames: function() {
                  return this._argumentNames || (this._argumentNames = {});
                },
                identifiersUsed: function() {
                  return this._identifiersUsed || (this._identifiersUsed = {});
                },
                identifiersAssigned: function() {
                  return (
                    this._identifiersAssigned ||
                    (this._identifiersAssigned = {})
                  );
                },
                identifiersInScope: function() {
                  return (
                    this._identifiersInScope || (this._identifiersInScope = {})
                  );
                }
              });
              this.prototype.getInspectedProps = function() {
                return merge(
                  instanceSuper.getInspectedProps.apply(this, arguments),
                  {
                    scope: merge({
                      argumentNames: this.argumentNames,
                      identifiersUsed: this.identifiersUsed,
                      identifiersAssigned: this.identifiersAssigned,
                      identifiersInScope: this.identifiersInScope
                    })
                  }
                );
              };
              this.prototype.addArgumentName = function(identifier) {
                this.identifiersInScope[identifier] = true;
                return (this.argumentNames[identifier] = true);
              };
              this.prototype.addIdentifierUsed = function(identifier) {
                if (this._boundUniqueIdentifiers) {
                  throw new Error(
                    "bindUniqueIdentifier must be called AFTER all calls to addIdentifierUsed"
                  );
                }
                this.identifiersInScope[identifier] = true;
                return (this.identifiersUsed[identifier] = true);
              };
              this.prototype.addIdentifierAssigned = function(
                identifier,
                initializer
              ) {
                return identifier
                  ? (this._boundUniqueIdentifiers
                      ? (() => {
                          throw new Error(
                            "bindUniqueIdentifier must be called AFTER all calls to addIdentifierAssigned"
                          );
                        })()
                      : undefined,
                    (this.identifiersInScope[identifier] = true),
                    (this.identifiersAssigned[identifier] =
                      initializer || true))
                  : undefined;
              };
              this.getter({
                uniqueIdentifier: function(preferredName) {
                  preferredName = normalizePerferredName(preferredName);
                  return this.getUniqueIdentifierHandle(preferredName)
                    .identifier;
                },
                uniqueIdentifierHandle: function(preferredName, addToLets) {
                  preferredName = normalizePerferredName(preferredName);
                  return this.addUniqueIdentifierHandle(
                    new UniqueIdentifierHandle(preferredName, addToLets)
                  );
                }
              });
              this.prototype.addUniqueIdentifierHandle = function(uih) {
                return !uih.scope
                  ? ((uih.scope = this),
                    this.uniqueIdentifierHandles.push(uih),
                    uih)
                  : undefined;
              };
              this.prototype.bindUniqueIdentifier = function(
                preferredName,
                uniqueIdentifierHandle,
                addToLets = true
              ) {
                let identifier;
                preferredName = normalizePerferredName(preferredName);
                identifier = this.getAvailableIdentifierName(preferredName);
                this.boundUniqueIdentifiers[
                  identifier
                ] = uniqueIdentifierHandle;
                this.identifiersInScope[identifier] = true;
                if (addToLets) {
                  this.identifiersAssigned[identifier] = true;
                }
                return identifier;
              };
              this.prototype.getAvailableIdentifierName = function(
                preferredName
              ) {
                let identifiersActiveInScope, count, name;
                preferredName = normalizePerferredName(preferredName);
                return !this._scopeUpdated
                  ? log.error({
                      ScopeStnMixin: {
                        getAvailableIdentifierName: [
                          `cannot be called before updateScope completes: ${Caf.toString(
                            this.className
                          )}`,
                          new Error()
                        ]
                      }
                    })
                  : (({ identifiersActiveInScope } = this),
                    !identifiersActiveInScope[preferredName]
                      ? preferredName
                      : ((count = 0),
                        (() => {
                          while (
                            identifiersActiveInScope[
                              (name = `${Caf.toString(
                                preferredName
                              )}${Caf.toString((count += 1))}`)
                            ]
                          ) {
                            name;
                          }
                        })(),
                        name));
              };
              this.prototype.addChildScope = function(child) {
                return !(child === this)
                  ? this.childScopes.push(child)
                  : undefined;
              };
              this.prototype.bindAllUniqueIdentifiersRequested = function() {
                return this._uniqueIdentifierHandles
                  ? Caf.each(
                      this._uniqueIdentifierHandles,
                      undefined,
                      uniqueIdentifierHandle => {
                        uniqueIdentifierHandle.identifier;
                      }
                    )
                  : undefined;
              };
              this.prototype.getAutoLets = function() {
                let identifiers;
                this.bindAllUniqueIdentifiersRequested();
                return this._identifiersAssigned &&
                  (identifiers = this.requiredIdentifierLets).length > 0
                  ? `let ${Caf.toString(identifiers.join(", "))}`
                  : undefined;
              };
              this.prototype.getBareInitializers = function() {
                let identifiers;
                this.bindAllUniqueIdentifiersRequested();
                return this._identifiersAssigned &&
                  (identifiers = this.requiredIdentifierLets).length > 0
                  ? ((identifiers = Caf.each(
                      identifiers,
                      [],
                      (identifier, cafK, cafInto) => {
                        if (identifier.match(/=/)) {
                          cafInto.push(identifier);
                        }
                      }
                    )),
                    identifiers.length > 0
                      ? `${Caf.toString(identifiers.join("; "))}`
                      : undefined)
                  : undefined;
              };
              this.prototype.updateScope = function(scope) {
                this.scope = scope;
                this.bindAllUniqueIdentifiersRequested();
                this.scope.addChildScope(this);
                Caf.each(this.getChildrenToUpdateScope(), undefined, child => {
                  child.updateScope(this);
                });
                return (this._scopeUpdated = true);
              };
              this.prototype.generateImportMap = function(
                map = {},
                assignedInParentScope = this.identifiersAssignedInParentScopes
              ) {
                let assignedInThisOrParentScope;
                assignedInThisOrParentScope = merge(
                  assignedInParentScope,
                  this._identifiersAssigned,
                  this._argumentNames
                );
                Caf.each(
                  this._identifiersUsed,
                  map,
                  (v, identifier, cafInto) => {
                    if (!assignedInThisOrParentScope[identifier]) {
                      cafInto[identifier] = v;
                    }
                  }
                );
                Caf.each(this._childScopes, undefined, childScope => {
                  if (!childScope.isImports) {
                    childScope.generateImportMap(
                      map,
                      assignedInThisOrParentScope
                    );
                  }
                });
                return map;
              };
              this.getter({
                childrenToUpdateScope: function() {
                  return this.children;
                },
                uniqueIdentifierHandles: function() {
                  return (
                    this._uniqueIdentifierHandles ||
                    (this._uniqueIdentifierHandles = [])
                  );
                },
                boundUniqueIdentifiers: function() {
                  return (
                    this._boundUniqueIdentifiers ||
                    (this._boundUniqueIdentifiers = {})
                  );
                },
                requiredIdentifierLets: function() {
                  let identifiersAssignedInParentScopes;
                  ({ identifiersAssignedInParentScopes } = this);
                  return Caf.each(
                    this.identifiersAssigned,
                    [],
                    (initializer, identifier, cafInto) => {
                      if (
                        !identifiersAssignedInParentScopes ||
                        !identifiersAssignedInParentScopes[identifier]
                      ) {
                        cafInto.push(
                          isString(initializer)
                            ? `${Caf.toString(identifier)} = ${Caf.toString(
                                initializer
                              )}`
                            : initializer.toJsExpression != null
                              ? `${Caf.toString(identifier)} = ${Caf.toString(
                                  initializer.toJsExpression()
                                )}`
                              : identifier
                        );
                      }
                    }
                  );
                },
                identifiersActiveInScope: function() {
                  let out, scope, notDone;
                  out = merge(this._identifiersInScope);
                  ({ scope } = this);
                  notDone = true;
                  while (scope && notDone) {
                    mergeInto(out, scope.identifiersAssigned);
                    if (scope === scope.scope) {
                      notDone = false;
                    } else {
                      ({ scope } = scope);
                    }
                  }
                  return out;
                },
                identifiersUsedInThisScopeButNotAssigned: function() {
                  let assigned;
                  assigned = this.identifiersAssignedInThisOrParentScopes;
                  return Caf.each(this.identifiersUsed, {}, (v, k, cafInto) => {
                    if (!assigned[k]) {
                      cafInto[k] = true;
                    }
                  });
                },
                identifiersUsedButNotAssigned: function() {
                  let assigned, ret;
                  assigned = this.identifiersAssignedInThisOrParentScopes;
                  ret = Caf.each(this.identifiersUsed, {}, (v, k, cafInto) => {
                    if (!assigned[k]) {
                      cafInto[k] = true;
                    }
                  });
                  Caf.each(this._childScopes, undefined, childScope => {
                    mergeInto(ret, childScope.identifiersUsedButNotAssigned);
                  });
                  return (this._identifiersUsedButNotAssigned = ret);
                },
                identifiersAssignedInThisOrParentScopes: function() {
                  return merge(
                    this._argumentNames,
                    this._identifiersAssigned,
                    this.identifiersAssignedInParentScopes
                  );
                },
                identifiersAssignedInParentScopes: function() {
                  return this.scope && this.scope !== this
                    ? merge(
                        this.scope.identifiersAssignedInParentScopes,
                        this.scope._identifiersAssigned,
                        this._argumentNames
                      )
                    : undefined;
                }
              });
            }
          ));
        }
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

const MAX_CACHED_INPUTS = 32;

/**
 * Takes some function `f(input) -> result` and returns a memoized version of
 * `f`.
 *
 * We keep at most `MAX_CACHED_INPUTS` memoized results of `f` alive. The
 * memoization is a dumb-simple, linear least-recently-used cache.
 */
function lruMemoize(f) {
  const cache = [];

  return function (input) {
    for (var i = 0; i < cache.length; i++) {
      if (cache[i].input === input) {
        var temp = cache[0];
        cache[0] = cache[i];
        cache[i] = temp;
        return cache[0].result;
      }
    }

    var result = f(input);

    cache.unshift({
      input,
      result,
    });

    if (cache.length > MAX_CACHED_INPUTS) {
      cache.pop();
    }

    return result;
  };
}

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
var normalize = lruMemoize(function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  // Split the path into parts between `/` characters. This is much faster than
  // using `.split(/\/+/g)`.
  var parts = [];
  var start = 0;
  var i = 0;
  while (true) {
    start = i;
    i = path.indexOf("/", start);
    if (i === -1) {
      parts.push(path.slice(start));
      break;
    } else {
      parts.push(path.slice(start, i));
      while (i < path.length && path[i] === "/") {
        i++;
      }
    }
  }

  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
});
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["mergeInto", "isArray", "compactFlatten"],
    [global, __webpack_require__(3)],
    (mergeInto, isArray, compactFlatten) => {
      let StnRegistry, AccessorChainStn;
      return (
        (StnRegistry = __webpack_require__(4)),
        (AccessorChainStn = Caf.defClass(
          class AccessorChainStn extends __webpack_require__(22) {},
          function(AccessorChainStn, classSuper, instanceSuper) {
            this.abstractClass();
            this.prototype.transform = function() {
              return this.transformAccessorChain().setDefaultParseTreeNode(
                this.parseTreeNode
              );
            };
            this.prototype.transformAccessorChain = function() {
              let accessorChain, out;
              accessorChain = this.getLeftAccessorChain();
              out = this._transformAccessorChainR(
                accessorChain[0].value.transform(),
                accessorChain
              );
              mergeInto(out.props, this.props, out.props);
              return out;
            };
            this.prototype.getLeftAccessorChain = function() {
              let current, accessorChain, accessor;
              current = this;
              accessorChain = [];
              while (current && current instanceof AccessorChainStn) {
                accessor = current;
                current = current.value;
                accessorChain.push(accessor);
              }
              return accessorChain.reverse();
            };
            this.prototype._transformAccessorChainR = function(
              value,
              accessorChain
            ) {
              let done;
              done = false;
              Caf.each(accessorChain, undefined, (accessor, i) => {
                let key, isFunctionInvocation, reset;
                if (!done) {
                  ({ key, isFunctionInvocation } = accessor);
                  if (isArray(key)) {
                    key = Caf.each(key, [], (kk, cafK, cafInto) => {
                      cafInto.push(kk.transform());
                    });
                  } else {
                    key = key.transform();
                  }
                  if (accessor.existanceTest) {
                    reset = accessorChain.slice(i);
                    done = true;
                    value = this._createExistanceAccessorStn(
                      value,
                      isFunctionInvocation,
                      checkedValueStn => {
                        let access;
                        access = this._createPostTransformedAccessorStn(
                          checkedValueStn,
                          key,
                          accessor
                        );
                        access.props.existanceTest = false;
                        return i < accessorChain.length - 1
                          ? this._transformAccessorChainR(
                              access,
                              accessorChain.slice(i + 1)
                            )
                          : access;
                      }
                    );
                  } else {
                    value = this._createPostTransformedAccessorStn(
                      value,
                      key,
                      accessor
                    );
                  }
                }
              });
              return value;
            };
            this.prototype._createPostTransformedAccessorStn = function(
              value,
              key,
              oldStn
            ) {
              return oldStn
                .newTransformedInstance(
                  oldStn.props,
                  compactFlatten([value, key]),
                  oldStn
                )
                .postTransform();
            };
            this.prototype._createExistanceAccessorStn = function(
              value,
              forFunctionInvocation,
              createRightStn
            ) {
              let res, value1, value2;
              res = forFunctionInvocation
                ? this.getValueWithBaseCapture(value)
                : this.getValueWithCapture(value);
              ({ value1, value2 } = res);
              return StnRegistry.BinaryOperatorStn(
                { operator: "&&" },
                StnRegistry.FunctionInvocationStn(
                  StnRegistry.IdentifierStn({
                    identifier: forFunctionInvocation ? "Caf.isF" : "Caf.exists"
                  }),
                  value1
                ),
                createRightStn(value2)
              );
            };
          }
        ))
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "inspectedObjectLiteral", "inspect"],
    [global, __webpack_require__(3)],
    (BaseClass, inspectedObjectLiteral, inspect) => {
      let UniqueIdentifierHandle;
      return (UniqueIdentifierHandle = Caf.defClass(
        class UniqueIdentifierHandle extends BaseClass {
          constructor(preferredName, addToLets = true) {
            super(...arguments);
            this.preferredName = preferredName;
            this.addToLets = addToLets;
            this._scope = null;
          }
        },
        function(UniqueIdentifierHandle, classSuper, instanceSuper) {
          this.getter({
            inspectedObjects: function() {
              return inspectedObjectLiteral(
                `<UniqueIdentifierHandle preferredName: '${Caf.toString(
                  this.preferredName
                )}', scopeSet: ${Caf.toString(
                  !!this.scope
                )}, _identifier: ${Caf.toString(inspect(this._identifier))}>`
              );
            },
            identifier: function() {
              return (
                this._identifier ||
                (this._identifier = this.scope.bindUniqueIdentifier(
                  this.preferredName,
                  this,
                  this.addToLets
                ))
              );
            }
          });
          this.prototype.toString = function() {
            return this.identifier;
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Nodes", "isFunction", "RootStn"],
    [
      global,
      __webpack_require__(3),
      __webpack_require__(5),
      __webpack_require__(4)
    ],
    (Nodes, isFunction, RootStn) => {
      let StnRegistry, CafParseNodeBaseClass;
      return (
        (StnRegistry = __webpack_require__(4)),
        (CafParseNodeBaseClass = Caf.defClass(
          class CafParseNodeBaseClass extends Nodes.Node {},
          function(CafParseNodeBaseClass, classSuper, instanceSuper) {
            this._createSubclassBase = function() {
              let NodeSubclass;
              return (NodeSubclass = Caf.defClass(
                class NodeSubclass extends this {}
              ));
            };
            this.prototype.getMatchStns = function() {
              return Caf.each(this.matches, [], (m, cafK, cafInto) => {
                if ((m = Caf.isF(m.getStn) && m.getStn())) {
                  cafInto.push(m);
                }
              });
            };
            this.prototype.getStnFactory = function() {
              return StnRegistry.get(this.stnFactory);
            };
            this.prototype.getStnChildren = function(left) {
              return this.stnChildren
                ? isFunction(this.stnChildren)
                  ? this.stnChildren()
                  : this.stnChildren
                : Caf.each(
                    this.nonStnExtensionMatches,
                    [],
                    (m, cafK, cafInto) => {
                      if ((m = m.getStn(left))) {
                        cafInto.push(m);
                      }
                    }
                  );
            };
            this.getter({
              isStnExtension: function() {
                let cafBase;
                return (
                  this.stnExtension ||
                  (Caf.exists((cafBase = this.presentMatches[0])) &&
                    cafBase.isStnExtension)
                );
              },
              stnExtensionMatches: function() {
                return Caf.each(this.presentMatches, [], (m, cafK, cafInto) => {
                  if (m.getStn && m.isStnExtension) {
                    cafInto.push(m);
                  }
                });
              },
              nonStnExtensionMatches: function() {
                return Caf.each(this.presentMatches, [], (m, cafK, cafInto) => {
                  if (m.getStn && !m.isStnExtension) {
                    cafInto.push(m);
                  }
                });
              }
            });
            this.prototype.getStn = function(left) {
              let stn, factory, x, currentStnLabel;
              stn = (factory = this.getStnFactory())
                ? factory(
                    { parseTreeNode: this },
                    (Caf.isF(this.stnProps) && this.stnProps()) ||
                      this.stnProps,
                    left,
                    this.getStnChildren()
                  )
                : ((x = this.getStnChildren(left)),
                  x.length === 1 ? x[0] : x.length === 0 ? left : x);
              Caf.each(this.stnExtensionMatches, undefined, extension => {
                stn = extension.getStn(stn);
              });
              if (Caf.exists(stn) && stn.props) {
                currentStnLabel = stn.props.label;
                if (!currentStnLabel || this.label) {
                  stn.props.label = this.label || this.ruleName;
                  stn.props.pluralLabel =
                    this.pluralLabel || this.pluralRuleName;
                }
              }
              return this.isRoot ? RootStn(stn, { parseTreeNode: this }) : stn;
            };
            this.prototype.getTransformedSemanticTree = function() {
              return this.getStn().transform();
            };
            this.prototype.toJs = function() {
              return this.getTransformedSemanticTree().toJs();
            };
          }
        ))
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "arrayWithout"],
    [global, __webpack_require__(3)],
    (Error, arrayWithout) => {
      let OperatorHelper;
      return (OperatorHelper = Caf.defClass(
        class OperatorHelper extends Object {},
        function(OperatorHelper, classSuper, instanceSuper) {
          let CoffeeScriptGlobal, infix, validateOperator;
          this.CoffeeScriptGlobal = CoffeeScriptGlobal = "Caf";
          this.operatorMap = {
            "**": function(a, b) {
              return `${Caf.toString(CoffeeScriptGlobal)}.pow(${Caf.toString(
                a
              )}, ${Caf.toString(b)})`;
            },
            "//": function(a, b) {
              return `${Caf.toString(CoffeeScriptGlobal)}.div(${Caf.toString(
                a
              )}, ${Caf.toString(b)})`;
            },
            "%%": function(a, b) {
              return `${Caf.toString(CoffeeScriptGlobal)}.mod(${Caf.toString(
                a
              )}, ${Caf.toString(b)})`;
            },
            in: function(a, b) {
              return `${Caf.toString(CoffeeScriptGlobal)}.in(${Caf.toString(
                a
              )}, ${Caf.toString(b)})`;
            },
            is: function(a, b) {
              return `${Caf.toString(CoffeeScriptGlobal)}.is(${Caf.toString(
                a
              )}, ${Caf.toString(b)})`;
            },
            isnt: function(a, b) {
              return `!${Caf.toString(CoffeeScriptGlobal)}.is(${Caf.toString(
                a
              )}, ${Caf.toString(b)})`;
            },
            "?": function(a, b) {
              return a.match(/^@?[_a-z0-9]+$/i)
                ? `${Caf.toString(a)} != null ? ${Caf.toString(
                    a
                  )} : ${Caf.toString(b)}`
                : `${Caf.toString(CoffeeScriptGlobal)}.existsOr(${Caf.toString(
                    a
                  )}, (() => {return ${Caf.toString(b)}})())`;
            }
          };
          this.infix = infix = function(a, b, op) {
            return `${Caf.toString(a)} ${Caf.toString(op)} ${Caf.toString(b)}`;
          };
          this.precidence = [
            ["left", "?"],
            ["right", "**"],
            ["left", "*", "/", "%", "//", "%%"],
            ["left", "+", "-"],
            ["left", "<<", ">>", ">>>"],
            ["left", "<", "<=", ">", ">=", "instanceof", "in", "is", "isnt"],
            ["left", "===", "!==", "!=", "=="],
            ["left", "&"],
            ["left", "^"],
            ["left", "|"],
            ["left", "&&"],
            ["left", "||", "?"]
          ];
          this.opsToPrecidence = {};
          this.leftAssociativityByPrecidence = Caf.each(
            this.precidence,
            [],
            (v, i, cafInto) => {
              let leftAssociativityByPrecidence, operators;
              [leftAssociativityByPrecidence, ...operators] = v;
              Caf.each(operators, undefined, op => {
                this.opsToPrecidence[op] = i;
              });
              cafInto.push(leftAssociativityByPrecidence === "left");
            }
          );
          this.validateOperator = validateOperator = operator => {
            if (!this.opsToPrecidence[operator]) {
              throw new Error(
                `OperatorHelper: operator '${Caf.toString(
                  operator
                )}' is not defined`
              );
            }
            return operator;
          };
          this.getNormalizedOperator = function(operator) {
            return (() => {
              switch ((operator = operator.toString().trim())) {
                case "and":
                  return "&&";
                case "or":
                  return "||";
                case "==":
                  return "===";
                case "!=":
                  return "!==";
                default:
                  return validateOperator(operator);
              }
            })();
          };
          this.binaryOperatorToJs = function(operand, a, b) {
            let f;
            f = OperatorHelper.operatorMap[operand] || infix;
            return f(a, b, operand);
          };
          this.binaryOperatorToSourceNodeArray = function(operand, a, b) {
            return (() => {
              switch (operand) {
                case "**":
                  return [
                    `${Caf.toString(CoffeeScriptGlobal)}.pow(`,
                    a,
                    ", ",
                    b,
                    ")"
                  ];
                case "//":
                  return [
                    `${Caf.toString(CoffeeScriptGlobal)}.div(`,
                    a,
                    ", ",
                    b,
                    ")"
                  ];
                case "%%":
                  return [
                    `${Caf.toString(CoffeeScriptGlobal)}.mod(`,
                    a,
                    ", ",
                    b,
                    ")"
                  ];
                case "in":
                  return [
                    `${Caf.toString(CoffeeScriptGlobal)}.in(`,
                    a,
                    ", ",
                    b,
                    ")"
                  ];
                case "is":
                  return [
                    `${Caf.toString(CoffeeScriptGlobal)}.is(`,
                    a,
                    ", ",
                    b,
                    ")"
                  ];
                case "isnt":
                  return [
                    `!${Caf.toString(CoffeeScriptGlobal)}.is(`,
                    a,
                    ", ",
                    b,
                    ")"
                  ];
                case "?":
                  return a.match(/^@?[_a-z0-9]+$/i)
                    ? [a, " != null ? ", a, " : ", b]
                    : [
                        CoffeeScriptGlobal,
                        ".existsOr(",
                        a,
                        ", (() => {return ",
                        b,
                        "})())"
                      ];
                default:
                  return [a, ` ${Caf.toString(operand)} `, b];
              }
            })();
          };
          this.getOpPrecidence = op => {
            let p;
            if (!((p = this.opsToPrecidence[op]) != null)) {
              throw new Error(
                `OperatorHelper: operator '${Caf.toString(op)}' not defined`
              );
            }
            return p;
          };
          this.getPrecidenceLevelIsLeftAssociative = p => {
            return this.leftAssociativityByPrecidence[p];
          };
          this.operatorIsInfixJs = operator => {
            return !this.operatorMap[operator];
          };
          this.resolveOperatorPrecidence = (
            operators,
            operands,
            combinerOverride
          ) => {
            let lowestPrecidence,
              firstOccurance,
              lastOccurance,
              p,
              opIndexToResolve,
              opsBefore,
              operandsBefore,
              op,
              operandA,
              operandB,
              combiner;
            if (!(operands.length === operators.length + 1)) {
              throw new Error(
                `expecting: operands.length:${Caf.toString(
                  operands.length
                )} == operators.length:${Caf.toString(operators.length)} + 1`
              );
            }
            while (operators.length > 0) {
              lowestPrecidence = this.getOpPrecidence(operators[0]);
              firstOccurance = lastOccurance = 0;
              p = null;
              Caf.each(operators, undefined, (op, i) => {
                if (lowestPrecidence > (p = this.getOpPrecidence(op))) {
                  firstOccurance = lastOccurance = i;
                  lowestPrecidence = p;
                } else {
                  if (lowestPrecidence === p) {
                    lastOccurance = i;
                  }
                }
              });
              opIndexToResolve = this.getPrecidenceLevelIsLeftAssociative(p)
                ? firstOccurance
                : lastOccurance;
              opsBefore = operators;
              operandsBefore = operands;
              op = operators[opIndexToResolve];
              operandA = operands[opIndexToResolve];
              operandB = operands[opIndexToResolve + 1];
              operators = arrayWithout(operators, opIndexToResolve);
              operands = arrayWithout(operands, opIndexToResolve);
              combiner = combinerOverride || this.operatorMap[op] || infix;
              operands[opIndexToResolve] = combiner(operandA, operandB, op);
            }
            if (!(operands.length === 1)) {
              throw new Error();
            }
            return operands[0];
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var JustToJsWithTransforms,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(6)).addNamespace('JustToJsWithTransforms', JustToJsWithTransforms = (function(superClass) {
  extend(JustToJsWithTransforms, superClass);

  function JustToJsWithTransforms() {
    return JustToJsWithTransforms.__super__.constructor.apply(this, arguments);
  }

  return JustToJsWithTransforms;

})(Neptune.PackageNamespace));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(124)).addNamespace('CaffeineScript', CaffeineScript = (function(superClass) {
  extend(CaffeineScript, superClass);

  function CaffeineScript() {
    return CaffeineScript.__super__.constructor.apply(this, arguments);
  }

  CaffeineScript.version = __webpack_require__(29).version;

  return CaffeineScript;

})(Neptune.PackageNamespace));

__webpack_require__(24);

__webpack_require__(6);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Parser", "isFunction"],
    [
      global,
      __webpack_require__(3),
      __webpack_require__(5),
      __webpack_require__(13)
    ],
    (Parser, isFunction) => {
      let CaffeineScriptParser;
      return (CaffeineScriptParser = Caf.defClass(
        class CaffeineScriptParser extends Parser {},
        function(CaffeineScriptParser, classSuper, instanceSuper) {
          this.nodeBaseClass = __webpack_require__(13);
          Caf.each(__webpack_require__(23).modules, undefined, mod => {
            if (isFunction(mod)) {
              mod.call(this);
            } else {
              this.rule(mod);
            }
          });
          this.prototype.parse = function(source, options) {
            return instanceSuper.parse.call(
              this,
              __webpack_require__(19).preprocess(source),
              options
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let words, out;
  words = __webpack_require__(7).w(
    "abstract  else        instanceof  super boolean   enum        int         switch break     export      interface   synchronized byte      extends     let         this case      false       long        throw catch     final       native      throws char      finally     new         transient class     float       null        true const     for         package     try continue  function    private     typeof debugger  goto        protected   var default   if          public      void delete    implements  return      volatile do        import      short       while double    in          static      with"
  );
  return Caf.each(words, (out = {}), word => {
    out[word] = true;
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "getPadding", "max"],
    [global, __webpack_require__(3)],
    (Error, getPadding, max) => {
      let Preprocessors;
      return (Preprocessors = Caf.defClass(
        class Preprocessors extends Object {},
        function(Preprocessors, classSuper, instanceSuper) {
          let mixedIndentationRegexp,
            tabIndentationRegexp,
            spaceIndentationRegexp,
            lineWithOnlyCommentRegexp,
            blockCommentStartRegexp,
            nonBlankLineRegexp,
            fixCommentLines,
            getIndentLevel;
          mixedIndentationRegexp = /(^|\n)( +\t|\t+ )/;
          tabIndentationRegexp = /(^|\n)\t/;
          spaceIndentationRegexp = /(^|\n) /;
          this.hasMixedIndentation = source => {
            return (
              mixedIndentationRegexp.test(source) ||
              (tabIndentationRegexp.test(source) &&
                spaceIndentationRegexp.test(source))
            );
          };
          this.normalizeIndentation = source => {
            let e;
            if (this.hasMixedIndentation(source)) {
              e = new Error(
                "file must only contain spaces OR tabs for indentation, not both"
              );
              e.failureIndex = 0;
              throw e;
            }
            return source.replace(/\t/g, " ");
          };
          lineWithOnlyCommentRegexp = /(^|\n) *#([^{\n$\w\u007f-\uffff]+[^\n]*|(?=\n|$))/;
          blockCommentStartRegexp = /(^|\n) *##/;
          nonBlankLineRegexp = /[^ ]/;
          fixCommentLines = function(
            lines,
            indentLevel,
            commentLineIndex,
            stopIndex
          ) {
            let indentChange,
              padding,
              blockCommentIndentLevel,
              inBlockComment,
              i,
              line,
              lineIndentLevel,
              commentOnlyLine,
              cafTemp;
            return commentLineIndex >= 0
              ? ((indentChange = 0),
                (padding = null),
                (blockCommentIndentLevel = -1),
                (inBlockComment = false),
                (i = commentLineIndex),
                (() => {
                  while (i < stopIndex) {
                    line = lines[i];
                    if (nonBlankLineRegexp.test(line)) {
                      lineIndentLevel = getIndentLevel(line);
                      if (lineIndentLevel <= blockCommentIndentLevel) {
                        inBlockComment = false;
                      }
                      if (!inBlockComment) {
                        if (
                          (commentOnlyLine = lineWithOnlyCommentRegexp.test(
                            line
                          ))
                        ) {
                          indentChange = indentLevel - lineIndentLevel;
                          padding =
                            indentChange > 0 ? getPadding(indentChange) : null;
                        }
                        if (
                          (inBlockComment = blockCommentStartRegexp.test(line))
                        ) {
                          blockCommentIndentLevel = lineIndentLevel;
                        }
                      }
                      if (indentChange !== 0) {
                        lines[i] =
                          indentChange > 0
                            ? padding + line
                            : line.slice(-indentChange, line.length);
                      }
                    }
                    cafTemp = i++;
                  }
                  return cafTemp;
                })())
              : undefined;
          };
          getIndentLevel = function(line) {
            return line.search(/[^\ ]/);
          };
          this.normalizeComments = source => {
            let previousIndentLevel,
              blockCommentIndentLevel,
              lastCommentLineStartIndex,
              inBlockComment,
              lines;
            return lineWithOnlyCommentRegexp.test(source)
              ? ((previousIndentLevel = 0),
                (blockCommentIndentLevel = 0),
                (lastCommentLineStartIndex = -1),
                (inBlockComment = false),
                Caf.each((lines = source.split("\n")), undefined, (line, i) => {
                  let indentLevel, commentOnlyLine;
                  if (nonBlankLineRegexp.test(line)) {
                    indentLevel = getIndentLevel(line);
                    if (indentLevel <= blockCommentIndentLevel) {
                      inBlockComment = false;
                    }
                    if (!inBlockComment) {
                      if (
                        (commentOnlyLine = lineWithOnlyCommentRegexp.test(line))
                      ) {
                        if (!(lastCommentLineStartIndex >= 0)) {
                          lastCommentLineStartIndex = i;
                        }
                        if (
                          (inBlockComment = blockCommentStartRegexp.test(line))
                        ) {
                          blockCommentIndentLevel = indentLevel;
                        }
                      } else {
                        if (lastCommentLineStartIndex >= 0) {
                          fixCommentLines(
                            lines,
                            max(indentLevel, previousIndentLevel),
                            lastCommentLineStartIndex,
                            i
                          );
                          lastCommentLineStartIndex = -1;
                        }
                        previousIndentLevel = indentLevel;
                      }
                    }
                  }
                }),
                fixCommentLines(
                  lines,
                  previousIndentLevel,
                  lastCommentLineStartIndex,
                  lines.length
                ),
                lines.join("\n"))
              : source;
          };
          this.preprocess = source => {
            return this.normalizeComments(this.normalizeIndentation(source));
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["arrayWithoutLast", "Object", "compactFlatten"],
    [global, __webpack_require__(3)],
    (arrayWithoutLast, Object, compactFlatten) => {
      let ImportStn;
      return (ImportStn = Caf.defClass(
        class ImportStn extends __webpack_require__(2) {},
        function(ImportStn, classSuper, instanceSuper) {
          this.getter({
            nonImportScope: function() {
              let scope;
              ({ scope } = this);
              while (scope.type === "Import") {
                ({ scope } = scope);
              }
              return scope;
            },
            importFromCaptureIdentifier: function() {
              return (
                this._importFromCaptureIdentifier ||
                (this._importFromCaptureIdentifier = this.nonImportScope.bindUniqueIdentifier(
                  "parentImports"
                ))
              );
            }
          });
          this.prototype.toJs = function(options = {}) {
            let importFromCaptureIdentifier,
              p,
              importBody,
              importFromList,
              identifiersToImport,
              bodyJs,
              importsJs;
            importFromCaptureIdentifier = null;
            if ((p = this.findParent(/^Import$/))) {
              ({ importFromCaptureIdentifier } = p);
              true;
            }
            ({ importBody } = this.labeledChildren);
            importFromList = arrayWithoutLast(this.children);
            return importBody
              ? ((identifiersToImport = Object.keys(
                  importBody.generateImportMap()
                )),
                (bodyJs = compactFlatten([
                  importBody.getAutoLets(),
                  importBody.toFunctionBodyJs(true)
                ]).join("; ")),
                identifiersToImport.length > 0
                  ? ((importsJs = compactFlatten([
                      importFromCaptureIdentifier || "global",
                      Caf.each(importFromList, [], (c, cafK, cafInto) => {
                        cafInto.push(c.toJsExpression());
                      })
                    ])),
                    `Caf.importInvoke(["${Caf.toString(
                      identifiersToImport.join('", "')
                    )}"], ${Caf.toString(
                      this._importFromCaptureIdentifier
                        ? `${Caf.toString(
                            this._importFromCaptureIdentifier
                          )} = `
                        : ""
                    )}[${Caf.toString(importsJs.join(", "))}], (${Caf.toString(
                      identifiersToImport.join(", ")
                    )}) => {${Caf.toString(bodyJs)};})`)
                  : `(() => {${Caf.toString(bodyJs)};})()`)
              : "undefined";
          };
          this.getter({
            parentImport: function() {
              return this.findParent(/^Import$/);
            }
          });
          this.prototype.toSourceNode = function(options = {}) {
            let importFromCaptureIdentifier,
              p,
              importBody,
              importFromList,
              identifiersToImport,
              bodySourceNodes,
              importsSourceNodes;
            importFromCaptureIdentifier = null;
            if ((p = this.parentImport)) {
              ({ importFromCaptureIdentifier } = p);
              true;
            }
            ({ importBody } = this.labeledChildren);
            importFromList = arrayWithoutLast(this.children);
            return importBody
              ? ((identifiersToImport = Object.keys(
                  importBody.generateImportMap()
                )),
                (bodySourceNodes = [
                  importBody.getAutoLets(),
                  importBody.toSourceNode({ returnAction: true })
                ]),
                identifiersToImport.length > 0
                  ? ((importsSourceNodes = compactFlatten([
                      importFromCaptureIdentifier || "global",
                      ", ",
                      this.stnArrayToSourceNodes(importFromList, ", ")
                    ])),
                    this.createSourceNode(
                      'Caf.importInvoke(["',
                      identifiersToImport.join('", "'),
                      '"], ',
                      this._importFromCaptureIdentifier
                        ? [this._importFromCaptureIdentifier, " = "]
                        : undefined,
                      "[",
                      importsSourceNodes,
                      "], (",
                      identifiersToImport.join(", "),
                      ") => {",
                      bodySourceNodes,
                      "})"
                    ))
                  : this.createSourceNode(this.doSourceNode(bodySourceNodes)))
              : "undefined";
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let StatementsStn;
    return (StatementsStn = Caf.defClass(
      class StatementsStn extends __webpack_require__(2) {},
      function(StatementsStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.prototype.toSourceNode = function(options) {
          let returnAction, generateStatements, expression, classBody, out;
          if (options) {
            ({
              returnAction,
              generateStatements,
              expression,
              classBody
            } = options);
          }
          generateStatements != null
            ? generateStatements
            : (generateStatements = expression != null ? expression : true);
          out = this.createSourceNode(
            expression
              ? (() => {
                  switch (this.children.length) {
                    case 0:
                      return !generateStatements && "undefined";
                    case 1:
                      return this.children[0].toSourceNode(options);
                    default:
                      return [
                        "(",
                        this._getChildrenSourceNodes(null, false),
                        ")"
                      ];
                  }
                })()
              : this._getChildrenSourceNodes(
                  returnAction,
                  generateStatements,
                  classBody
                )
          );
          return out;
        };
        this.prototype.toJs = function(options) {
          return Caf.exists(options) && options.expression
            ? (() => {
                switch (this.children.length) {
                  case 0:
                    return "undefined";
                  case 1:
                    return this.children[0].toJsExpression();
                  default:
                    return this.applyRequiredParens(
                      this._getChildrenStatementsJsArray("", false).join(", ")
                    );
                }
              })()
            : this._getChildrenStatementsJsArray().join("; ");
        };
        this.prototype.toFunctionBodyJs = function(returnAction = true) {
          return this.toFunctionBodyJsArray(returnAction).join("; ");
        };
        this.prototype.toFunctionBodyJsArray = function(returnAction = true) {
          return this._getChildrenStatementsJsArray(returnAction);
        };
        this.prototype._getChildrenStatementsJsArray = function(
          returnAction,
          generateStatements = true
        ) {
          let lines;
          returnAction = (() => {
            switch (returnAction) {
              case true:
                return (returnAction = "return");
              case false:
                return null;
              default:
                return returnAction;
            }
          })();
          return Caf.each((lines = this.children), [], (c, i, cafInto) => {
            let statement;
            cafInto.push(
              returnAction != null && i === lines.length - 1
                ? !c.jsExpressionUsesReturn
                  ? returnAction.length > 0
                    ? `${Caf.toString(returnAction)} ${Caf.toString(
                        c.toJsExpression()
                      )}`
                    : c.toJsExpression()
                  : c.toJs({ generateReturnStatement: true })
                : generateStatements
                  ? ((statement = c.toJs({ statement: true })),
                    statement.match(/^function/)
                      ? this.applyRequiredParens(statement)
                      : statement)
                  : c.toJsExpression({ returnValueIsIgnored: true })
            );
          });
        };
        this.prototype._getChildrenSourceNodes = function(
          returnAction,
          generateStatements = true,
          classBody
        ) {
          let lines, out;
          returnAction = (() => {
            switch (returnAction) {
              case true:
                return (returnAction = "return");
              case false:
                return null;
              default:
                return returnAction;
            }
          })();
          Caf.each((lines = this.children), (out = []), (c, i, cafInto) => {
            let childExpression;
            if (i > 0) {
              out.push(generateStatements ? "; " : ", ");
            }
            cafInto.push(
              returnAction != null && i === lines.length - 1
                ? !c.jsExpressionUsesReturn
                  ? ((childExpression = c.toSourceNode({ expression: true })),
                    returnAction.length > 0
                      ? [returnAction, " ", childExpression]
                      : childExpression)
                  : c.toJs({ generateReturnStatement: true })
                : generateStatements
                  ? c.toSourceNode({ statement: !classBody })
                  : c.toSourceNode({
                      expression: true,
                      returnValueIsIgnored: true
                    })
            );
          });
          if (generateStatements) {
            out.push(";");
          }
          return out;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let UniqueIdentifierHandle, StnRegistry, ValueBaseCaptureStn;
    return (
      (UniqueIdentifierHandle = __webpack_require__(12)),
      (StnRegistry = __webpack_require__(4)),
      (ValueBaseCaptureStn = Caf.defClass(
        class ValueBaseCaptureStn extends __webpack_require__(2) {},
        function(ValueBaseCaptureStn, classSuper, instanceSuper) {
          this.abstractClass();
          this.prototype.getValueWithBaseCapture = function(accessorStn) {
            let AssignmentStn,
              ReferenceStn,
              IdentifierStn,
              value,
              key,
              baseIdentifierHandle;
            return accessorStn.isAccessor &&
              !accessorStn.children[0].isReference
              ? (({ AssignmentStn, ReferenceStn, IdentifierStn } = StnRegistry),
                ({ value, key } = accessorStn),
                {
                  value1: new accessorStn.class(accessorStn.props, [
                    AssignmentStn(
                      IdentifierStn({
                        identifierHandle: (baseIdentifierHandle = new UniqueIdentifierHandle(
                          "base"
                        ))
                      }),
                      value
                    ),
                    key
                  ]),
                  value2: new accessorStn.class(accessorStn.props, [
                    ReferenceStn({ identifierHandle: baseIdentifierHandle }),
                    key
                  ])
                })
              : accessorStn.isAccessor || accessorStn.type === "This"
                ? { value1: accessorStn, value2: accessorStn }
                : this.getValueWithCapture(accessorStn);
          };
          this.prototype.getValueWithCapture = function(accessorStn) {
            let AssignmentStn,
              ReferenceStn,
              IdentifierStn,
              baseIdentifierHandle;
            return accessorStn.type === "Identifier" ||
              accessorStn.type === "Reference"
              ? { value1: accessorStn, value2: accessorStn }
              : (({ AssignmentStn, ReferenceStn, IdentifierStn } = StnRegistry),
                {
                  value1: AssignmentStn(
                    IdentifierStn({
                      identifierHandle: (baseIdentifierHandle = new UniqueIdentifierHandle(
                        "base"
                      ))
                    }),
                    accessorStn
                  ),
                  value2: ReferenceStn({
                    identifierHandle: baseIdentifierHandle
                  })
                });
          };
        }
      ))
    );
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);

module.exports.addModules({
  Accessors: __webpack_require__(37),
  ArrayLiterals: __webpack_require__(38),
  Assignment: __webpack_require__(39),
  Blocks: __webpack_require__(40),
  Classes: __webpack_require__(41),
  Comments: __webpack_require__(42),
  Comprehensions: __webpack_require__(43),
  ControlStructures: __webpack_require__(44),
  DestructuringAssignment: __webpack_require__(45),
  Expressions: __webpack_require__(46),
  Functions: __webpack_require__(47),
  KeywordLiterals: __webpack_require__(48),
  Literals: __webpack_require__(49),
  NumberLiterals: __webpack_require__(50),
  ObjectLiterals: __webpack_require__(51),
  Operators: __webpack_require__(52),
  RegExp: __webpack_require__(53),
  Require: __webpack_require__(54),
  Root: __webpack_require__(55),
  Statements: __webpack_require__(56),
  StringLiterals: __webpack_require__(57),
  TagMacros: __webpack_require__(58),
  Tokens: __webpack_require__(59),
  ValueLists: __webpack_require__(60),
  Values: __webpack_require__(61)
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Rules,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(16)).addNamespace('Rules', Rules = (function(superClass) {
  extend(Rules, superClass);

  function Rules() {
    return Rules.__super__.constructor.apply(this, arguments);
  }

  return Rules;

})(Neptune.PackageNamespace));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var ComplexToJs,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(6)).addNamespace('ComplexToJs', ComplexToJs = (function(superClass) {
  extend(ComplexToJs, superClass);

  function ComplexToJs() {
    return ComplexToJs.__super__.constructor.apply(this, arguments);
  }

  return ComplexToJs;

})(Neptune.PackageNamespace));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var JustToJs,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(6)).addNamespace('JustToJs', JustToJs = (function(superClass) {
  extend(JustToJs, superClass);

  function JustToJs() {
    return JustToJs.__super__.constructor.apply(this, arguments);
  }

  return JustToJs;

})(Neptune.PackageNamespace));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var JustTransforms,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(6)).addNamespace('JustTransforms', JustTransforms = (function(superClass) {
  extend(JustTransforms, superClass);

  function JustTransforms() {
    return JustTransforms.__super__.constructor.apply(this, arguments);
  }

  return JustTransforms;

})(Neptune.PackageNamespace));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

module.exports.addModules({
  AccessorChainStn: __webpack_require__(11),
  BaseStn: __webpack_require__(2),
  ComprehensionValueClauseStn: __webpack_require__(67),
  ScopeStnMixin: __webpack_require__(9),
  UniqueIdentifierHandle: __webpack_require__(12),
  ValueBaseCaptureStn: __webpack_require__(22)
});

__webpack_require__(109);

__webpack_require__(110);

__webpack_require__(111);

__webpack_require__(112);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"author":"Shane Brinkman-Davis Delamore, Imikimi LLC","config":{"blanket":{"pattern":"source"}},"dependencies":{"art-binary":"*","art-build-configurator":"*","art-class-system":"*","art-config":"*","art-object-tree-factory":"*","art-standard-lib":"*","art-testbench":"*","bluebird":"^3.5.0","caffeine-eight":"*","caffeine-mc":"*","caffeine-script":"*","caffeine-script-runtime":"*","case-sensitive-paths-webpack-plugin":"^2.1.2","chai":"^4.0.1","coffee-loader":"^0.7.3","coffee-script":"^1.12.6","colors":"^1.2.1","commander":"^2.15.1","css-loader":"^0.28.4","dateformat":"^3.0.3","detect-node":"^2.0.3","fs-extra":"^5.0.0","glob":"^7.1.2","glob-promise":"^3.4.0","json-loader":"^0.5.4","mocha":"^3.4.2","neptune-namespaces":"*","script-loader":"^0.7.0","style-loader":"^0.18.1","webpack":"^2.6.1","webpack-dev-server":"^2.4.5","webpack-merge":"^4.1.0","webpack-node-externals":"^1.6.0"},"description":"CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that empowers you to get the most out of any JavaScript runtime.","license":"ISC","name":"caffeine-script","repository":{"type":"git","url":"git@github.com:shanebdavis/caffeine-script.git"},"scripts":{"build":"caf -v -p -C -c cafInCaf -o source","perf":"nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf","start":"webpack-dev-server --hot --inline --progress","test":"nn -s;mocha -u tdd --compilers coffee:coffee-script/register","testInBrowser":"webpack-dev-server --progress"},"version":"0.54.3"}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(10);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(113);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {if (typeof fetch === "function") {
  // Web version of reading a wasm file into an array buffer.

  let mappingsWasmUrl = null;

  module.exports = function readWasm() {
    if (typeof mappingsWasmUrl !== "string") {
      throw new Error("You must provide the URL of lib/mappings.wasm by calling " +
                      "SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) " +
                      "before using SourceMapConsumer");
    }

    return fetch(mappingsWasmUrl)
      .then(response => response.arrayBuffer());
  };

  module.exports.initialize = url => mappingsWasmUrl = url;
} else {
  // Node version of reading a wasm file into an array buffer.
  const fs = __webpack_require__(123);
  const path = __webpack_require__(125);

  module.exports = function readWasm() {
    return new Promise((resolve, reject) => {
      const wasmPath = path.join(__dirname, "mappings.wasm");
      fs.readFile(wasmPath, null, (error, data) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(data.buffer);
      });
    });
  };

  module.exports.initialize = _ => {
    console.debug("SourceMapConsumer.initialize is a no-op when running in node.js");
  };
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(31);
var util = __webpack_require__(10);
var ArraySet = __webpack_require__(30).ArraySet;
var MappingList = __webpack_require__(115).MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = this._mappings.toArray().length > 0
      ? new ArraySet()
      : this._sources;
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("art-class-system");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);

module.exports.includeInNamespace(__webpack_require__(36)).addModules({
  CaffeineScriptParser: __webpack_require__(17),
  CafParseNodeBaseClass: __webpack_require__(13),
  JavaScriptReservedWords: __webpack_require__(18),
  Lib: __webpack_require__(8),
  OperatorHelper: __webpack_require__(14),
  Preprocessors: __webpack_require__(19),
  StandardImport: __webpack_require__(3),
  StnRegistry: __webpack_require__(4)
});

__webpack_require__(23);

__webpack_require__(28);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "mergeInto"],
    [global, __webpack_require__(7)],
    (log, mergeInto) => {
      return (
        __webpack_require__(28),
        {
          version: __webpack_require__(29).version,
          compile: function(source, options = {}) {
            let transformedStn, stn, parseTree, e, cafTemp;
            return (() => {
              try {
                transformedStn = (stn = (parseTree = __webpack_require__(17).parse(
                  source,
                  options
                )).getStn())
                  .validateAll()
                  .transform();
                return {
                  compiled: {
                    js: options.bare
                      ? transformedStn.toBareJs()
                      : transformedStn.toJsModule()
                  }
                };
              } catch (cafError) {
                e = cafError;
                if (
                  !(
                    e.location != null ||
                    e.sourceFile != null ||
                    e.message.match(/parse|expect/i)
                  )
                ) {
                  log.error({
                    CaffeineScriptBETA: {
                      message:
                        "Uh-oh! There was an internal error compiling your file. We'd love to fix it. Could you submit an issue with a copy of the code that won't compile?\n\nSubmit issues here: https://github.com/caffeine-suite/caffeine-script/issues\n\nSorry for the inconvenience. Thank you so much for trying CaffeineScript!",
                      options,
                      parseTree,
                      stn,
                      transformedStn
                    }
                  });
                }
                if (options.debug) {
                  (cafTemp = e.info) != null ? cafTemp : (e.info = {});
                  mergeInto(e.info, {
                    options,
                    parseTree,
                    stn,
                    transformedStn
                  });
                }
                return (() => {
                  throw e;
                })();
              }
            })();
          }
        }
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          dotAccessor:
            "existanceTest:questionMark? dot key:identifier assignmentExtension?",
          bracketAccessor:
            "existanceTest:questionMark? openBracket_ key:expression _closeBracket assignmentExtension?"
        },
        {
          stnFactory: "AccessorStn",
          stnExtension: true,
          stnProps: function() {
            return { existanceTest: !!this.existanceTest };
          },
          stnChildren: function() {
            return this.key.getStn();
          }
        }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          array: ["'[]' _? valueList", "'[]'"],
          brackedArray: "openBracket_ valueList _comma_? _closeBracket",
          implicitArray: [
            {
              pattern: "start:expression _comma_ simpleValueList _comma_?",
              stnFactory: "ArrayStn",
              stnProps: { implicitArray: true }
            },
            {
              pattern: "start:literal _ simpleValueList _comma_?",
              stnFactory: "ArrayStn",
              stnProps: { implicitArray: true }
            }
          ]
        },
        { stnFactory: "ArrayStn" }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        { assignmentExtension: "_? assignmentOperator requiredValue" },
        {
          stnFactory: "AssignmentStn",
          stnExtension: true,
          stnProps: function() {
            let rawOp, match;
            rawOp = this.assignmentOperator.toString();
            return { operator: (match = rawOp.match(/(\S*)=/)) && match[1] };
          }
        }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(3), __webpack_require__(5)],
    Extensions => {
      return function() {
        this.rule({ blocks: "block+" });
        this.rule({
          statementBlock: "block",
          block: "_? block:actualBlock",
          blockEmptyOk: "_? block:actualBlockEmptyOk",
          toEolAndBlock: "_? block:actualToEolAndBlock"
        });
        return this.rule({
          actualBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
            rule: "nonEmptyRoot"
          }),
          actualBlockEmptyOk: Extensions.IndentBlocks.getPropsToSubparseBlock({
            rule: "root"
          }),
          actualToEolAndBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(
            { rule: "nonEmptyRoot" }
          ),
          unparsedBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
            rule: "anything"
          }),
          anything: { pattern: /(.|\n)*$/ }
        });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return {
      classDefinition: {
        pattern:
          "/class/ _ className:identifier classExtends:_extendsClause? _? body:actualBlockEmptyOk?",
        stnFactory: "ClassStn"
      },
      _extendsClause: {
        pattern: "_ /extends/ _ expressionWithOneLessBlock",
        toJs: function() {
          return this.expressionWithOneLessBlock.toJs();
        }
      }
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          _: "/ +/ comment?",
          end: "lineEndComment",
          comment: [
            { pattern: "/##[^\n]*/ unparsedBlock*" },
            { pattern: /\ *#([^\n$\w\u007f-\uffff]+[^\n]*|(?=\n|$))/ }
          ],
          _end: /( *(\n|; *|$))+|( *(?=\)))/,
          lineStartComment: ["comment _end", "_end"],
          lineEndComment: "_? comment? _end lineStartComment*"
        },
        {
          getPresent: function() {
            return false;
          }
        }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      this.rule({
        withOrDo: /(with|do)\b/,
        comprehensionValueClauseType: /(into|returning|when)\b/
      });
      this.rule(
        {
          comprehensionOutputType: /(object|array|reduce|each|find)\b/,
          comprehensionIterationType: /(from|in)\b/
        },
        { stnFactory: "SemanticTokenStn" }
      );
      this.rule({
        comprehensionValueClause: [
          "_? comprehensionValueClauseType _? value:keywordLabeledStatementsWithOneLessBlock",
          {
            stnFactory: "ComprehensionValueClauseStn",
            stnProps: function() {
              return { type: this.comprehensionValueClauseType.toString() };
            }
          }
        ],
        comprehensionValueClauses: "comprehensionValueClause+"
      });
      this.rule(
        {
          comprehensionVariableDef_:
            "!comprehensionIterationType argDef optionalArg? _ &comprehensionIterationType"
        },
        { stnFactory: "FunctionDefinitionArgsStn" }
      );
      this.rule({
        optionalArg: "_comma_ !withOrDo argDef",
        comprehensionIterationTypeClause_: "comprehensionIterationType _?",
        comprehensionIterable: "keywordLabeledStatementsWithOneLessBlock",
        comprehensionWith: "_? withOrDo _? lineOfStatementsOrBlock",
        comprehensionBody: ["block", "comprehensionWith"]
      });
      return this.rule(
        {
          comprehension:
            "outputType:comprehensionOutputType _ variableDefinition:comprehensionVariableDef_? iterationType:comprehensionIterationTypeClause_? iterable:comprehensionIterable valueClause:comprehensionValueClause* body:comprehensionBody?"
        },
        { stnFactory: "ComprehensionStn" }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(3), __webpack_require__(5)],
    Extensions => {
      return {
        controlStatement: [
          {
            stnFactory: "ControlOperatorStn",
            pattern: [
              "ifUnlessWhileUntil _ expression:expressionWithOneLessBlock body:block  elseBody:elseClause?",
              "ifUnlessWhileUntil _ expression:expressionWithOneLessBlock body:block? elseBody:elseClause",
              "ifUnlessWhileUntil _ expression:expression                 thenClause  elseBody:elseClause?"
            ],
            stnProps: function() {
              let cafBase;
              return {
                operand: this.ifUnlessWhileUntil.toString(),
                joiner:
                  Caf.exists((cafBase = this.thenDo)) && cafBase.toString()
              };
            }
          },
          {
            stnFactory: "TryStn",
            pattern:
              "try _? body:lineOfStatementsOrBlock optionalCatch:catchClause?"
          },
          { stnFactory: "DoStn", pattern: "/do/ _ functionDefinition" },
          {
            stnFactory: "SwitchStn",
            pattern: [
              "/switch/ _ condition:expressionWithOneLessBlock? _? switchBodyBlock",
              "/switch/ _ condition:expression? switchBody",
              "/switch/ switchBodyBlock",
              "/switch/ switchBody"
            ]
          }
        ],
        catchClause: [
          "controlStructorClauseJoiner catch _? errorIdentifier:identifier? body:lineOfStatementsOrBlock?",
          { stnFactory: "CatchStn" }
        ],
        switchBody: "switchWhen:switchWhenClause+ switchElse:elseClause?",
        switchBodyBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
          rule: "switchBody"
        }),
        switchWhenClause: [
          "end? when _ whenValue:expressionWithOneLessBlock thenDo:block",
          "end? when _ whenValue:implicitArrayOrExpression  thenDo:thenClause",
          { stnFactory: "SwitchWhenStn" }
        ],
        thenClause:
          "controlStructorClauseJoiner thenDo _? body:lineOfStatementsOrBlock",
        elseClause:
          "controlStructorClauseJoiner else   _? lineOfStatementsOrBlock",
        controlStructorClauseJoiner: ["_", "end"],
        catch: /catch\b/,
        try: /try\b/,
        ifUnlessWhileUntil: /(if|unless|while|until)\b/,
        thenDo: /(then|do)\b/,
        when: /when\b/,
        else: /else\b/
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      this.rule(
        {
          destructuringAssignment:
            "structure:destructuringTarget _? '=' _? value:requiredValue"
        },
        { stnFactory: "DestructuringAssignmentStn" }
      );
      this.rule({
        destructuringTarget: ["objectDestructuring", "arrayDestructuring"]
      });
      this.rule(
        { objectDestructuring: "'{' _? objectDestructuringList _? '}'" },
        { stnFactory: "ObjectDestructuringStn" }
      );
      this.rule(
        { arrayDestructuring: "'[' _? arrayDestructuringList _? ']'" },
        { stnFactory: "ArrayDestructuringStn" }
      );
      this.rule({
        arrayDestructuringList: [
          {
            pattern:
              "element:arrayDestructuringElement _comma_ arrayDestructuringList"
          },
          { pattern: "element:arrayDestructuringElement" }
        ],
        arrayDestructuringElement: [
          "arrayDestructuringIdentifier",
          "destructuringTarget"
        ]
      });
      this.rule({
        objectDestructuringList: [
          {
            pattern:
              "element:objectDestructuringElement _comma_ objectDestructuringList"
          },
          { pattern: "element:objectDestructuringElement" }
        ],
        objectDestructuringElement: [
          "labeledDestructuringTarget",
          "destructuringIdentifier"
        ]
      });
      this.rule(
        {
          labeledDestructuringTarget:
            "identifier _? ':' _? arrayDestructuringElement"
        },
        { stnFactory: "LabeledDestructuringTargetStn" }
      );
      this.rule(
        {
          arrayDestructuringIdentifier: [
            { pattern: "identifier _? ellipsis" },
            { pattern: "identifier destructuringDefault:destructuringDefault?" }
          ]
        },
        {
          stnFactory: "DestructuringIdentifierStn",
          stnProps: function() {
            return { ellipsis: !!this.ellipsis };
          }
        }
      );
      this.rule(
        {
          destructuringIdentifier:
            "identifier destructuringDefault:destructuringDefault?"
        },
        { stnFactory: "DestructuringIdentifierStn" }
      );
      return this.rule({ destructuringDefault: "_? '=' _? expression" });
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [
      global,
      __webpack_require__(3),
      __webpack_require__(5),
      __webpack_require__(4)
    ],
    Extensions => {
      let matchBlock, upToButNotEol;
      return (
        ({ matchBlock } = Extensions.IndentBlocks),
        (upToButNotEol = /[^\n]*/y),
        function() {
          let oneLessBlockSubparser;
          this.rule({
            lineStartExpression: "multilineImplicitObject",
            implicitArrayOrExpression: ["implicitArray", "expression"],
            expression: [
              "binOpExpression",
              "unaryOpExpression",
              "expressionWithoutBinOps"
            ],
            expressionWithoutBinOps: [
              "incDecUnaryExpression",
              "controlStatement",
              "comprehension",
              "classDefinition",
              "destructuringAssignment",
              "structuredLiteral",
              "throwExpression",
              "functionDefinition",
              "value"
            ],
            structuredLiteral: ["object", "array"]
          });
          this.rule({
            incDecUnaryExpression: [
              "prefix:/\\+\\+|--/ assignableValue",
              "assignableValue postfix:/\\+\\+|--/",
              {
                stnFactory: "UnaryOperatorStn",
                stnProps: function() {
                  let cafBase;
                  return {
                    operand: (this.prefix || this.postfix).toString(),
                    tail: !!(
                      Caf.exists((cafBase = this.postfix)) && cafBase.toString()
                    )
                  };
                }
              }
            ]
          });
          this.rule(
            { throwExpression: "throw _ expressionWithoutBinOps" },
            { stnFactory: "ThrowStn" }
          );
          oneLessBlockSubparser = rule => {
            return function(parentNode) {
              let nextOffset,
                source,
                offset,
                originalOffset,
                match,
                m,
                endOffset,
                matchLength,
                expressionSource;
              ({ nextOffset, source } = parentNode);
              offset = nextOffset;
              originalOffset = offset;
              upToButNotEol.lastIndex = offset;
              return (match = upToButNotEol.exec(source))
                ? (([m] = match),
                  (endOffset = offset += m.length),
                  (() => {
                    while ((match = matchBlock(source, offset))) {
                      endOffset = offset;
                      ({ matchLength } = match);
                      offset += matchLength;
                    }
                  })(),
                  (expressionSource = source.slice(originalOffset, endOffset)),
                  parentNode.subparse(expressionSource, {
                    allowPartialMatch: true,
                    rule,
                    originalOffset,
                    originalMatchLength: endOffset - originalOffset
                  }))
                : undefined;
            };
          };
          return this.rule({
            expressionWithOneLessBlock: {
              parse: oneLessBlockSubparser("implicitArrayOrExpression")
            },
            lineOfStatementsWithOneLessBlock: {
              parse: oneLessBlockSubparser("lineOfStatementsOrBlock")
            },
            keywordLabeledStatementsWithOneLessBlock: [
              "lineOfStatementsWithOneLessBlock",
              "statementBlock"
            ]
          });
        }
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions", "Error"],
    [global, __webpack_require__(3), __webpack_require__(5)],
    (Extensions, Error) => {
      return {
        functionDefinition: [
          "args:argsDefinition? _arrow _? body:functionDefinitionBodyBlock?",
          {
            stnFactory: "FunctionDefinitionStn",
            stnProps: function() {
              return {
                bound: (() => {
                  switch (this._arrow.text.match(/(=>|~>|->)/)[0]) {
                    case "=>":
                      return true;
                    case "~>":
                      return false;
                    case "->":
                      return "auto";
                    default:
                      return (() => {
                        throw new Error();
                      })();
                  }
                })()
              };
            }
          }
        ],
        functionDefinitionBodyBlock: [
          Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(),
          Extensions.IndentBlocks.getPropsToSubparseToEol({
            allowPartialMatch: true
          })
        ],
        argsDefinition: [
          "openParen_ argDefList? _closeParen",
          { stnFactory: "FunctionDefinitionArgsStn" }
        ],
        argDefList: [
          "argDef _comma_ argDefList",
          "argDef _ argDefList",
          "argDef"
        ],
        argDef: [
          "at:/@/? target:identifier argIdentifierExtension?",
          "target:destructuringTarget argIdentifierExtension?",
          {
            stnFactory: "FunctionDefinitionArgStn",
            stnProps: function() {
              let cafBase;
              return {
                rest: !!(
                  Caf.exists((cafBase = this.argIdentifierExtension)) &&
                  cafBase.ellipsis
                ),
                assignThisProperty: !!this.at
              };
            }
          }
        ],
        argIdentifierExtension: ["defaultValue", "ellipsis"],
        defaultValue: { pattern: "_equals_ expression" },
        superFunctionInvocation: [
          "openParen_ simpleValueList? _closeParen",
          "_? valueList"
        ],
        functionInvocationExtension: [
          "existanceTest:questionMark? openParen_ values:simpleValueList? _closeParen",
          "existanceTest:questionMark? !/[-+]/ _? values:valueList",
          {
            stnFactory: "FunctionInvocationStn",
            stnExtension: true,
            stnProps: function() {
              return { existanceTest: !!this.existanceTest };
            },
            stnChildren: function() {
              let cafBase;
              return Caf.exists((cafBase = this.values)) && cafBase.getStn();
            }
          }
        ]
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        { keywordLiteral: /(undefined|NaN|null|true|false)(?![a-zA-Z0-9]+)/ },
        {
          stnFactory: "SimpleLiteralStn",
          stnProps: function() {
            return { value: this.toString() };
          }
        }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return {
      literal: [
        "keywordLiteral",
        "numberLiteral",
        "stringLiteral",
        "regExpLiteral",
        "bracketedObject",
        "brackedArray"
      ]
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      return this.rule(
        {
          numberLiteral: /([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?|0b[01]+|0o[0-7]+|0x[0-9a-f]+)(?![$\w\u007f-\uffff])(?!\.[0-9])/i
        },
        {
          stnFactory: "SimpleLiteralStn",
          stnProps: function() {
            return { value: this.toString().replace(/^0+(\d)/, "$1") };
          }
        }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let cafParentImports;
  return Caf.importInvoke(
    ["Extensions"],
    (cafParentImports = [
      global,
      __webpack_require__(3),
      __webpack_require__(5),
      __webpack_require__(4)
    ]),
    Extensions => {
      return Caf.importInvoke(
        ["IndentBlocks", "ObjectStn"],
        [cafParentImports, Extensions],
        (IndentBlocks, ObjectStn) => {
          return function() {
            this.rule({
              object: ["implicitObject", "explicitObject"],
              objectLiteralBlock: IndentBlocks.getPropsToSubparseToEolAndBlock({
                rule: "explicitObjectBlock"
              }),
              explicitObjectBlock: "end* singleOrMultilineExplicitObject end*",
              singleOrMultilineExplicitObject: [
                "multilineExplicitObject",
                "oneLineExplicitObject"
              ]
            });
            this.rule(
              {
                implicitObject: "props:propertyList",
                oneLineExplicitObject: "props:explicitPropertyList",
                explicitObject: [
                  "'{}' _? props:explicitPropertyList",
                  "'{}' _? props:objectLiteralBlock",
                  "'{}'"
                ],
                bracketedObject:
                  "openCurly_ props:explicitPropertyList _closeCurly",
                multilineImplicitObject: {
                  pattern:
                    "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression multilineImplicitObjectExtension+"
                },
                multilineExplicitObject: {
                  pattern:
                    '!implicitObjectWithTwoOrMorePropsOnOneLine explicitValuePropWithComplexExpression multilineExplicitObjectExtension+"'
                }
              },
              {
                getStn: function() {
                  let children;
                  children = Caf.each(
                    this.getMatchStns(),
                    [],
                    (m, cafK, cafInto) => {
                      cafInto.push(
                        m instanceof ObjectStn.class ? m.children : m
                      );
                    }
                  );
                  return ObjectStn(children);
                }
              }
            );
            this.rule({
              multilineImplicitObjectExtension:
                "end+ !implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression",
              multilineExplicitObjectExtension:
                "end+ !implicitObjectWithTwoOrMorePropsOnOneLine explicitValuePropWithComplexExpression",
              implicitObjectWithTwoOrMorePropsOnOneLine: [
                "literalProp _ propertyList",
                "valueProp _comma_ propertyList"
              ],
              explicitPropertyList: [
                "valueProp _comma_ explicitPropertyList",
                "literalProp _ explicitPropertyList",
                "structurableProp _comma_ explicitPropertyList",
                "explicitValuePropWithComplexExpression"
              ],
              propertyList: [
                "valueProp _comma_ propertyList",
                "literalProp _ propertyList",
                "valuePropWithComplexExpression"
              ]
            });
            this.rule(
              {
                literalProp: "propName _colon_ propValue:literal",
                valueProp: "propName _colon_ propValue:expression",
                valuePropWithComplexExpression:
                  "propName _colon_ propValue:requiredValue"
              },
              {
                name: "literalObjectProperty",
                stnFactory: "ObjectPropValueStn"
              }
            );
            this.rule({
              explicitValuePropWithComplexExpression: [
                "valuePropWithComplexExpression",
                "structurableProp"
              ],
              structurableProp: [
                "expression",
                { stnFactory: "ObjectPropValueStn" }
              ]
            });
            this.rule({
              propName: "computedPropName",
              computedPropName: {
                pattern: "openBracket_ expression _closeBracket",
                stnFactory: "ObjectLiteralAccessorStn"
              }
            });
            this.rule({
              stringLiteralPropNameTail: ["_ /:/ !unquotedString", "/:/"]
            });
            this.rule(
              { thisPropName: "/@/ identifier?" },
              { stnFactory: "ThisStn" }
            );
            this.rule(
              { propName: "!/then\\s/ str:thisPropName &_colon_" },
              {
                stnFactory: "ObjectPropNameStn",
                stnProps: function() {
                  return { isThisProp: true };
                }
              }
            );
            return this.rule(
              {
                propName: [
                  "!/then\\s/ str:identifier &_colon_",
                  "!/then\\s/ str:unquotedString &/:/",
                  "quotedString:stringLiteral &stringLiteralPropNameTail"
                ]
              },
              {
                stnFactory: "ObjectPropNameStn",
                stnProps: function() {
                  let cafBase;
                  return {
                    value:
                      Caf.exists((cafBase = this.str)) && cafBase.toString(),
                    isThisProp: false
                  };
                }
              }
            );
          };
        }
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "Error",
      "resolveOperatorPrecidence",
      "compactFlatten",
      "getNormalizedOperator",
      "BinaryOperatorStn",
      "UnaryOperatorStn"
    ],
    [
      global,
      __webpack_require__(3),
      __webpack_require__(14),
      __webpack_require__(4)
    ],
    (
      Error,
      resolveOperatorPrecidence,
      compactFlatten,
      getNormalizedOperator,
      BinaryOperatorStn,
      UnaryOperatorStn
    ) => {
      return {
        binOpExpression: {
          pattern: "unaryOpExpression binaryOperatorSequenceExtension?"
        },
        binaryOperatorSequenceExtension: {
          pattern: "binaryOperatorAndExpression+",
          stnExtension: true,
          getStn: function(left) {
            if (!left) {
              throw new Error("expecting left");
            }
            return resolveOperatorPrecidence(
              Caf.each(
                this.binaryOperatorAndExpressions,
                [],
                (opAndExp, cafK, cafInto) => {
                  cafInto.push(getNormalizedOperator(opAndExp.binaryOperator));
                }
              ),
              compactFlatten([
                left,
                Caf.each(
                  this.binaryOperatorAndExpressions,
                  [],
                  (opAndExp, cafK, cafInto) => {
                    cafInto.push(opAndExp.rValue.getStn());
                  }
                )
              ]),
              (operandA, operandB, operator) => {
                return BinaryOperatorStn(
                  { parseTreeNode: this, operator },
                  operandA,
                  operandB
                );
              }
            );
          }
        },
        binaryOperatorAndExpression: [
          "_? binaryOperator _? _end? rValue:unaryOpExpression",
          "_? binaryOperator _? rValue:rValueBlock"
        ],
        lineStartBinaryOperatorAndExpression: [
          {
            pattern:
              "!/[-+][^ ]/ !regExpLiteral binaryOperator _? binOpExpression",
            stnProps: function() {
              return { operator: getNormalizedOperator(this.binaryOperator) };
            },
            stnFactory: "BinaryOperatorStn",
            stnExtension: true
          },
          {
            pattern: "!/[-+][^ ]/ binaryOperator _? rValueBlock",
            stnProps: function() {
              return { operator: getNormalizedOperator(this.binaryOperator) };
            },
            stnFactory: "BinaryOperatorStn",
            stnExtension: true
          }
        ],
        unaryOpExpression: {
          pattern: [
            "!literal unaryOperator_+ expressionWithoutBinOps unaryTailOperator*",
            "expressionWithoutBinOps unaryTailOperator*"
          ],
          getStn: function() {
            let stn;
            stn = this.expressionWithoutBinOps.getStn();
            Caf.each(this.unaryTailOperators || [], undefined, operand => {
              stn = UnaryOperatorStn(
                { operand: operand.toString().trim(), tail: true },
                stn
              );
            });
            Caf.each(
              (this.unaryOperator_s || []).slice().reverse(),
              undefined,
              operand => {
                stn = UnaryOperatorStn(
                  { operand: operand.toString().trim() },
                  stn
                );
              }
            );
            return stn;
          }
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [
      global,
      __webpack_require__(3),
      __webpack_require__(5),
      __webpack_require__(4)
    ],
    Extensions => {
      return {
        regExpLiteral: [
          "regExpStart regExpMiddle regExpEnd regExpModifiers?",
          "'///' regExpBlockModifiers regExpBlock?",
          "'///' ?/$|\\n/",
          {
            stnFactory: "RegExpStn",
            stnProps: function() {
              let cafBase, cafBase1, cafBase2;
              return this.regExpMiddle
                ? {
                    value: this.regExpMiddle.toString(),
                    modifiers:
                      Caf.exists((cafBase = this.regExpModifiers)) &&
                      cafBase.toString()
                  }
                : {
                    modifiers:
                      Caf.exists((cafBase1 = this.regExpBlockModifiers)) &&
                      (Caf.exists((cafBase2 = cafBase1.regExpModifiers)) &&
                        cafBase2.toString())
                  };
            }
          }
        ],
        regExpBlockModifiers: ["regExpModifiers", /(?=[ \n])/],
        regExpBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock({
          rule: "regExpBlockPattern"
        }),
        regExpBlockPattern: "multilineRegExpMiddle*",
        regExpStart: "'/' !/[ \\/]/",
        regExpMiddle: /([^\/\\\n]|\\.|\#(?!\{))*/,
        regExpEnd: /\//,
        regExpModifiers: /([igmuy]+)/,
        multilineRegExpMiddle: [
          "multilineRegExpText",
          "multilineRegExpEscape",
          "multilineRegExpForwardSlashes",
          "multilineRegExpInterpolation",
          "multilineRegExpComment"
        ],
        multilineRegExpText: {
          pattern: /((?!((^|\n|\s)#|#\{))[^\\\/])+/,
          stnFactory: "StringStn",
          stnProps: function() {
            return { value: this.text.replace(/[\n\s]+/g, "") };
          }
        },
        multilineRegExpEscape: {
          pattern: /(\\.)/,
          stnFactory: "StringStn",
          stnProps: function() {
            return { value: this.text === "\\ " ? " " : this.text };
          }
        },
        multilineRegExpComment: {
          pattern: "/^|\\n|\\s/ comment",
          stnFactory: "StringStn",
          stnProps: function() {
            return { value: "" };
          }
        },
        multilineRegExpInterpolation: {
          pattern: "/ */ interpolationStart expression interpolationEnd"
        },
        multilineRegExpForwardSlashes: {
          pattern: /\/\/?(?!\/)/,
          stnFactory: "StringStn",
          stnProps: function() {
            return { value: this.text.replace(/\//g, "\\/") };
          }
        }
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return {
    require: {
      pattern: "/&/ pathedRequire",
      stnProps: function() {
        return { require: this.pathedRequire.text };
      },
      stnFactory: "RequireStn"
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return {
    root: {
      pattern: "lineStartComment* statement:lineStartStatement*",
      stnFactory: "StatementsStn"
    },
    nonEmptyRoot: {
      pattern: "lineStartComment* statement:lineStartStatement+",
      stnFactory: "StatementsStn"
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ControlOperatorStn"],
    [
      global,
      __webpack_require__(3),
      __webpack_require__(5),
      __webpack_require__(4)
    ],
    ControlOperatorStn => {
      return {
        lineStartStatement: [
          "lineStartStatementWithoutEnd newLineStatementExtension* end",
          "importStatement"
        ],
        tailControlOperator: /\ *\b(if|while|until|unless) +/,
        tailControlOperatorComplexExpression:
          "tailControlOperator implicitArrayOrExpression",
        lineStartStatementWithoutEnd: [
          "lineStartExpression",
          "statementWithoutEnd"
        ],
        statementWithoutEnd: [
          "implicitArrayOrExpression !tailControlOperator",
          {
            pattern:
              "implicitArrayOrExpression tailControlOperatorComplexExpression+",
            getStn: function() {
              let stn;
              stn = this.implicitArrayOrExpression.getStn();
              Caf.each(
                this.tailControlOperatorComplexExpressions,
                undefined,
                tco => {
                  stn = ControlOperatorStn(
                    { operand: tco.tailControlOperator.toString().trim() },
                    tco.implicitArrayOrExpression.getStn(),
                    stn
                  );
                }
              );
              return stn;
            }
          }
        ],
        newLineStart: {
          pattern: /( *\n)+/,
          getPresent: function() {
            return false;
          }
        },
        importStatement: {
          pattern: "/import/ _? importFromList:valueList end importBody",
          stnFactory: "ImportStn"
        },
        importBody: ["root", { stnFactory: "ImportBodyStn" }],
        newLineStatementExtension: [
          "end lineStartBinaryOperatorAndExpression",
          "end &/\\??\\./ valueExtension+ binaryOperatorSequenceExtension?"
        ],
        lineOfStatements: {
          pattern: [
            "statementSemi+ statementWithoutEnd",
            "statementWithoutEnd"
          ],
          stnFactory: "StatementsStn"
        },
        lineOfStatementsOrBlock: ["lineOfStatements", "statementBlock"],
        statementSemi: "statementWithoutEnd _? ';' _?"
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions", "StringStn", "InterpolatedStringStn"],
    [
      global,
      __webpack_require__(3),
      __webpack_require__(5),
      __webpack_require__(4),
      __webpack_require__(8)
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
                pattern: RegExp(
                  `:(?!:)${Caf.toString(wordStringChar.source)}+`
                ),
                getStn: function() {
                  return StringStn({
                    parseTreeNode: this,
                    value: this.toString().slice(1)
                  });
                }
              },
              {
                pattern: /#[$\w\u007f-\uffff]+/,
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
                  appendTo.push(
                    StringStn({
                      parseTreeNode: this,
                      value: this.mid.toString()
                    })
                  );
                }
                Caf.exists((cafBase = this.interpolation)) &&
                  cafBase.getStnChildren(appendTo);
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
                  appendTo.push(
                    StringStn({
                      parseTreeNode: this,
                      value: this.mid.toString()
                    })
                  );
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["upperCamelCase", "Error"],
    [global, __webpack_require__(3)],
    (upperCamelCase, Error) => {
      let StnRegistry;
      return (
        (StnRegistry = __webpack_require__(4)),
        {
          tagMacro: {
            pattern: "/</ identifier />/ actualToEolAndBlock",
            getStnFactory: function() {
              let factoryName, factory;
              factoryName = upperCamelCase(this.identifier.text);
              factory =
                StnRegistry[factoryName] || StnRegistry[factoryName + "Stn"];
              if (!factory) {
                throw new Error(
                  `TagMacro: cannot find factory for: ${Caf.toString(
                    this.identifier.text
                  )}`
                );
              }
              return factory;
            }
          }
        }
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return function() {
    let assignmentOperator;
    this.rule({
      _equals_: /\ *= */,
      _colon_: /: *| +:( +|(?=\n))/,
      _comma_: /\ *, *\n*/,
      _arrow: /\ *[-~=]>/,
      openParen_: /\( */,
      _closeParen: /\ *\)/,
      openBracket_: /\[ *(\n*(?!\s))?/,
      _closeBracket: /[ \n]*\]/,
      openCurly_: /\{ */,
      _closeCurly: /\ *\}/,
      _else: /(( *\n)+| +)else/,
      ellipsis: "'...'",
      reservedWord: /(import|true|false|null|undefined|global|require|module|eval|super|class|new|this|delete|instanceof|is|isnt|switch|when|then|else|if|until|while|unless|array|each|find|object|from|in|with|do|into|returning|try|catch|throw|and|or|not|for|return|break|of|yes|on|no|off|typeof|extract|reduce|inject|promise|await|to|by|short|skip|mixin)\b/,
      identifier: [
        /(?!\d)((?!\s)[$\w\u007f-\uffff])+/,
        {
          stnFactory: "IdentifierStn",
          stnProps: function() {
            return { identifier: this.toString() };
          }
        }
      ],
      pathedRequire: /((?!\s)[-\/$\w\u007f-\uffff])+/,
      unquotedString: /[-~!@\#$%^&*_+=|\\<>?\/.$\w\u007f-\uffff]+/,
      unaryTailOperator: /\?/,
      unaryOperator_: /([!~]|not\b|delete\b) *|-(?![:])/,
      binaryOperator: /&&|\|\||&(?=\s)|\||\^|\?|((and|or|in|is|isnt|instanceof)\b)|<<|>>>|>>|==|!=|<=|>=|<|>|\/\/|%%|\*\*|[-+*\/%]/,
      assignmentOperator: (assignmentOperator = /(&&|\|\||&|\||\^|\?|((and|or|isnt|is|in)\b)|<<|>>>|>>|\/\/|%%|\*\*|[-+*\/%])?=/),
      new: /new\b/,
      throw: /throw\b/
    });
    return this.rule(
      { dot: /\./, questionMark: /\?/ },
      { stnFactory: "SemanticTokenStn" }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(3), __webpack_require__(5)],
    Extensions => {
      return function() {
        this.rule({ valueList: ["simpleValueList", "valueListBlock"] });
        this.rule({
          valueListBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
            rule: "valueListBlockSubParse"
          }),
          valueListBlockSubParse: "end* listItemStatement*"
        });
        this.rule({
          simpleValueList: [
            "element:listItemExpression _comma_ simpleValueList",
            "element:listItemExpression _? ',' _? valueListBlock",
            "element:literal _ simpleValueList",
            "element:listItemExpression"
          ]
        });
        return this.rule({
          listItemStatement: [
            {
              pattern:
                "statementWithoutEnd newLineStatementExtension* ellipsis end",
              stnFactory: "ArraySpreadElementStn"
            },
            {
              pattern:
                "lineStartStatementWithoutEnd newLineStatementExtension* end"
            }
          ],
          listItemExpression: [
            {
              pattern: "expression ellipsis",
              stnFactory: "ArraySpreadElementStn"
            },
            { pattern: "expression" }
          ]
        });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(3), __webpack_require__(5)],
    Extensions => {
      return function() {
        this.rule({
          value: [
            'valueBase blockValueExtension*"',
            "newInstance valueExtension*"
          ],
          valueBase: [
            "nonAssignableValue !accessorExtension",
            "assignableValue assignmentExtension?"
          ],
          simpleAssignableValue: ["thisProperty", "identifierReference"],
          assignableValue: [
            "simpleAssignableValue accessorExtension* !functionInvocationExtension",
            "'(' _? assignableValue _? ')' accessorExtension* !functionInvocationExtension",
            "parentheticalExpression accessorExtension+",
            "nonAssignableValue accessorExtension+"
          ],
          accessorExtension: ["dotAccessor", "bracketAccessor"],
          nonAssignableValue: [
            "functionInvocation",
            "parentheticalExpression",
            "simpleNonAssignableValue"
          ],
          simpleValue: ["simpleNonAssignableValue", "simpleAssignableValue"],
          simpleNonAssignableValue: [
            "require",
            "tagMacro",
            "globalIdentifier",
            "this",
            "literal",
            "super"
          ],
          functionInvocation: [
            "simpleValue extendedFunctionInvocationExtension+",
            "parentheticalExpression extendedFunctionInvocationExtension+"
          ],
          extendedFunctionInvocationExtension:
            "accessorExtension* functionInvocationExtension"
        });
        this.rule({
          simpleNewValue: [
            "this",
            "thisProperty",
            "globalIdentifier",
            "identifierReference",
            "require"
          ],
          newValue: [
            "simpleNewValue accessorExtension*",
            "parentheticalExpression accessorExtension*"
          ],
          explicitNewFunctionInvocation: "newValue functionInvocationExtension",
          newInstance: [
            "new _ explicitNewFunctionInvocation",
            "new _ newValue",
            { stnFactory: "NewInstanceStn" }
          ]
        });
        this.rule({
          parentheticalExpression: "'(' _? expression _? ')'",
          valueExtension: [
            "dotAccessor",
            "bracketAccessor",
            "functionInvocationExtension",
            "blockValueExtension"
          ]
        });
        this.rule({
          identifierReference: {
            pattern: "!reservedWord identifier",
            stnFactory: "ReferenceStn"
          }
        });
        this.rule(
          {
            this: "/@/ !identifier",
            thisProperty: "/@/ identifier assignmentExtension?"
          },
          { stnFactory: "ThisStn" }
        );
        this.rule({
          globalIdentifier: {
            pattern: /(global|require|module|eval|this)\b/,
            stnFactory: "GlobalIdentifierStn",
            stnProps: function() {
              return { identifier: this.text };
            }
          }
        });
        this.rule({
          super: {
            pattern: "/super\\b/ superFunctionInvocation",
            stnFactory: "SuperStn"
          }
        });
        this.rule({
          super: {
            pattern: /super\b/,
            stnFactory: "SuperStn",
            stnProps: { passArguments: true }
          }
        });
        this.rule({
          blockValueExtension: "_? blockValueExtensionBlock",
          blockValueExtensionBlock: Extensions.IndentBlocks.getPropsToSubparseBlock(
            { rule: "blockValueExtensionSubparse" }
          ),
          blockValueExtensionSubparse: [
            "lineStartComment* &dotOrQuestionDot valueExtension+ binaryOperatorSequenceExtension? newLineStatementExtension* end",
            "lineStartComment* lineStartBinaryOperatorAndExpression newLineStatementExtension* end"
          ],
          dotOrQuestionDot: /\??\./
        });
        return this.rule({
          requiredValue: [
            "_? _end? implicitArrayOrExpression",
            "/ */ comment? rValueBlock"
          ],
          rValueBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
            rule: "rValueBlockSubParse"
          }),
          rValueBlockSubParse: {
            pattern: "root",
            getStn: function() {
              let statements;
              ({ statements } = this.root);
              return statements.length === 1
                ? statements[0].getStn()
                : __webpack_require__(4).ArrayStn(this.root.getMatchStns());
            }
          }
        });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let FunctionDefinitionArgStn;
    return (FunctionDefinitionArgStn = Caf.defClass(
      class FunctionDefinitionArgStn extends __webpack_require__(2) {
        constructor(props, children) {
          super(...arguments);
          this.assignThisProperty = props.assignThisProperty;
          this.rest = props.rest;
          this.target = this.labeledChildren.target || children[0];
          this.defaultValue = children[1];
        }
      },
      function(FunctionDefinitionArgStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.getter({
          argumentName: function() {
            return this.target.name;
          }
        });
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(
            this.rest ? "..." : undefined,
            this.target.toSourceNode(),
            this.defaultValue
              ? [" = ", this.defaultValue.toSourceNode()]
              : undefined
          );
        };
        this.prototype.generatePreBodyStatementStn = function() {
          let IdentifierStn,
            AssignmentStn,
            ThisStn,
            ReferenceStn,
            identifierStn,
            identifier;
          return this.assignThisProperty
            ? (({
                IdentifierStn,
                AssignmentStn,
                ThisStn,
                ReferenceStn
              } = __webpack_require__(4)),
              (identifierStn = IdentifierStn(
                (({ identifier } = this.target.props), { identifier })
              )),
              AssignmentStn(ThisStn(identifierStn), identifierStn))
            : undefined;
        };
        this.prototype.getFunctionPreBodyStatementsJs = function() {
          return this.assignThisProperty
            ? `this.${Caf.toString(this.target.toJs())} = ${Caf.toString(
                this.target.toJs()
              )}`
            : undefined;
        };
        this.prototype.toJs = function() {
          return `${Caf.toString(this.rest ? "..." : "")}${Caf.toString(
            this.target.toJs()
          )}${Caf.toString(
            this.defaultValue
              ? ` = ${Caf.toString(this.defaultValue.toJs())}`
              : ""
          )}`;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ImportStn, ImportBodyStn;
    return (
      (ImportStn = __webpack_require__(20)),
      (ImportBodyStn = Caf.defClass(
        class ImportBodyStn extends __webpack_require__(9)(
          __webpack_require__(2)
        ) {},
        function(ImportBodyStn, classSuper, instanceSuper) {
          this.prototype.isImports = true;
          this.prototype.toJs = function(options) {
            return this.children[0].toJs(options);
          };
          this.prototype.toSourceNode = function(options) {
            return this.children[0].toSourceNode(options);
          };
        }
      ))
    );
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "present"],
    [global, __webpack_require__(3)],
    (compactFlatten, present) => {
      let StatementsStn, RootStn;
      return (
        (StatementsStn = __webpack_require__(21)),
        (RootStn = Caf.defClass(
          class RootStn extends __webpack_require__(9)(
            __webpack_require__(2)
          ) {
            constructor(props, children) {
              super(...arguments);
              this._scopeHasBeenUpdated = false;
              this.statements = children[0];
            }
          },
          function(RootStn, classSuper, instanceSuper) {
            this.prototype.isImports = true;
            this.getter({
              statementsSourceNodes: function() {
                return this.statements.toSourceNode();
              }
            });
            this.prototype.toSourceNode = function(options = {}) {
              let identifiersToImport, lets, autoLets;
              this.rootUpdateScope();
              return this.createSourceNode(
                options.bare
                  ? [this.getBareInitializers(), this.statementsSourceNodes]
                  : options.module
                    ? ((identifiersToImport = Caf.each(
                        this.generateImportMap(),
                        [],
                        (v, k, cafInto) => {
                          cafInto.push(
                            `${Caf.toString(k)} = global.${Caf.toString(k)}`
                          );
                        }
                      )),
                      (lets = compactFlatten([
                        identifiersToImport,
                        this.requiredIdentifierLets
                      ])),
                      [
                        "\"use strict\"\nlet Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {",
                        lets.length > 0
                          ? `let ${Caf.toString(lets.join(", "))}; `
                          : undefined,
                        this.statements.toSourceNode({ returnAction: true }),
                        "});"
                      ])
                    : [
                        present((autoLets = this.getAutoLets()))
                          ? [autoLets, "; "]
                          : undefined,
                        this.statementsSourceNodes
                      ]
              );
            };
            this.prototype.rootUpdateScope = function() {
              return !this._scopeHasBeenUpdated
                ? ((this._scopeHasBeenUpdated = true), this.updateScope(this))
                : undefined;
            };
            this.prototype.toJsModule = function() {
              let identifiersToImport, statementsJs, lets, statements;
              this.rootUpdateScope();
              identifiersToImport = Caf.each(
                this.generateImportMap(),
                [],
                (v, k, cafInto) => {
                  cafInto.push(
                    `${Caf.toString(k)} = global.${Caf.toString(k)}`
                  );
                }
              );
              statementsJs = this.statements.toFunctionBodyJs();
              lets = compactFlatten([
                identifiersToImport,
                this.requiredIdentifierLets
              ]);
              statements = compactFlatten([
                lets.length > 0
                  ? `let ${Caf.toString(lets.join(", "))}`
                  : undefined,
                statementsJs
              ]);
              return `"use strict"\nlet Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {${Caf.toString(
                statements.join("; ")
              )};});`;
            };
            this.prototype.toJs = function() {
              let statements;
              this.rootUpdateScope();
              statements = this.statements.toJs();
              return (
                compactFlatten([this.getAutoLets(), statements]).join("; ") +
                ";"
              );
            };
            this.prototype.toBareJs = function() {
              let statements;
              this.rootUpdateScope();
              statements = this.statements.toJs();
              return (
                compactFlatten([
                  "Caf = global.Caf || require('caffeine-script-runtime')",
                  this.getBareInitializers(),
                  statements
                ]).join(";\n") + ";"
              );
            };
          }
        ))
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["deescapeSpaces", "escapeUnescaped", "escapeMustEscapes"],
    [global, __webpack_require__(3), __webpack_require__(8)],
    (deescapeSpaces, escapeUnescaped, escapeMustEscapes) => {
      let StringStn;
      return (StringStn = Caf.defClass(
        class StringStn extends __webpack_require__(2) {},
        function(StringStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function(options) {
            return this.toJs(options);
          };
          this.getter({
            propName: function() {
              return this.toJs();
            }
          });
          this.prototype.toJs = function(options) {
            let base, quotes, singleCount, doubleCount, out;
            base = deescapeSpaces(this.value);
            quotes = /"/.test(base)
              ? "'"
              : /'/.test(base)
                ? ((singleCount = base.split("'").length - 1),
                  (doubleCount = base.split('"').length - 1),
                  doubleCount <= singleCount ? '"' : "'")
                : '"';
            out =
              quotes +
              escapeUnescaped(base.replace(/\n/g, "\\n"), quotes) +
              quotes;
            return Caf.exists(options) && options.dotBase
              ? `(${Caf.toString(out)})`
              : out;
          };
          this.prototype.compactNewLines = function(compactLeft, compactRight) {
            if (compactLeft) {
              this.props.value = this.value.replace(/^\ *\n */, "");
            }
            if (compactRight) {
              this.props.value = this.value.replace(/\ *\n *$/, "");
            }
            this.props.value = this.value.replace(/(\ *\n *)+/g, " ");
            return this;
          };
          this.prototype.trimLeft = function() {
            return (this.props.value = this.value.trimLeft());
          };
          this.prototype.trimRight = function() {
            return (this.props.value = this.value.trimRight());
          };
          this.getter({
            value: function() {
              return this.props.value;
            }
          });
          this.prototype.toInterpolatedJsStringPart = function() {
            return deescapeSpaces(
              escapeUnescaped(escapeMustEscapes(this.value), "`$\n")
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let SwitchWhenStn;
    return (SwitchWhenStn = Caf.defClass(
      class SwitchWhenStn extends __webpack_require__(2) {},
      function(SwitchWhenStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options) {
          let thenDo;
          ({ thenDo } = this.labeledChildren);
          return `${Caf.toString(this._getCasesJs(options))}: ${Caf.toString(
            thenDo.toJs()
          )};`;
        };
        this.prototype.toFunctionBodyJs = function(options) {
          let thenDo;
          ({ thenDo } = this.labeledChildren);
          return `${Caf.toString(this._getCasesJs(options))}: ${Caf.toString(
            thenDo.toFunctionBodyJs()
          )};`;
        };
        this.prototype.toSourceNode = function(options) {
          let falsifyCases, returnAction, whenValue, thenDo;
          ({ falsifyCases, returnAction } = options);
          ({ whenValue, thenDo } = this.labeledChildren);
          return this.createSourceNode(
            falsifyCases ? "case !" : "case ",
            whenValue.implicitArray
              ? this.stnArrayToSourceNodes(
                  whenValue.children,
                  falsifyCases ? "): case !(" : ": case "
                )
              : [whenValue.toSourceNode()],
            ": ",
            thenDo.toSourceNode({ returnAction })
          );
        };
        this.prototype._getCasesJs = function(options) {
          let falsifyCases, whenValue, cases;
          ({ falsifyCases } = options);
          ({ whenValue } = this.labeledChildren);
          cases = whenValue.implicitArray
            ? Caf.each(whenValue.children, [], (m, cafK, cafInto) => {
                cafInto.push(m.toJsExpression());
              })
            : [whenValue.toJsExpression()];
          return falsifyCases
            ? `case !(${Caf.toString(cases.join("): case !("))})`
            : `case ${Caf.toString(cases.join(": case "))}`;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ComprehensionValueClauseStn;
    return (ComprehensionValueClauseStn = Caf.defClass(
      class ComprehensionValueClauseStn extends __webpack_require__(2) {},
      function(ComprehensionValueClauseStn, classSuper, instanceSuper) {
        this.getter({
          type: function() {
            return this.props.type;
          },
          value: function() {
            return this.labeledChildren.value;
          }
        });
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ArrayDestructuringStn;
    return (ArrayDestructuringStn = Caf.defClass(
      class ArrayDestructuringStn extends __webpack_require__(2) {},
      function(ArrayDestructuringStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function(options) {
          let restructuring, restructuringStart, subOptions, base;
          if (options) {
            ({ restructuring, restructuringStart } = options);
          }
          if (restructuringStart || restructuring) {
            subOptions = { restructuring: true };
          }
          base = this.childrenToSourceNodes(", ", subOptions);
          return restructuring ? base : this.createSourceNode("[", base, "]");
        };
        this.prototype.toJs = function(options) {
          let restructuring, restructuringStart, subOptions;
          if (options) {
            ({ restructuring, restructuringStart } = options);
          }
          if (restructuringStart || restructuring) {
            subOptions = { restructuring: true };
          }
          return restructuring
            ? `${Caf.toString(this.childrenToJs(", ", subOptions))}`
            : `[${Caf.toString(this.childrenToJs(", ", subOptions))}]`;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ArraySpreadElementStn;
    return (ArraySpreadElementStn = Caf.defClass(
      class ArraySpreadElementStn extends __webpack_require__(2) {},
      function(ArraySpreadElementStn, classSuper, instanceSuper) {
        this.prototype.toJs = function() {
          return `...${Caf.toString(this.childrenToJs())}`;
        };
        this.prototype.toSourceNode = function() {
          return this.createSourceNode("...", this.childrenToSourceNodes());
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ArrayStn;
    return (ArrayStn = Caf.defClass(
      class ArrayStn extends __webpack_require__(2) {
        constructor(props, children) {
          if (children.length === 1 && children[0].props.implicitArray) {
            children = children[0].children;
          }
          super(props, children);
        }
      },
      function(ArrayStn, classSuper, instanceSuper) {
        this.getter({
          implicitArray: function() {
            return this.props.implicitArray;
          }
        });
        this.prototype.toSourceNode = function(options) {
          let dotBase;
          dotBase = Caf.exists(options) && options.dotBase;
          return this.createSourceNode(
            dotBase ? "([" : "[",
            Caf.each(this.children, [], (c, i, cafInto) => {
              let sn;
              sn = c.toSourceNode();
              cafInto.push(i > 0 ? [", ", sn] : sn);
            }),
            dotBase ? "])" : "]"
          );
        };
        this.prototype.toJs = function(options) {
          let out;
          out = `[${Caf.toString(
            Caf.each(this.children, [], (c, cafK, cafInto) => {
              cafInto.push(c.toJsExpression());
            }).join(", ")
          )}]`;
          return Caf.exists(options) && options.dotBase
            ? `(${Caf.toString(out)})`
            : out;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "operatorIsInfixJs",
      "binaryOperatorToSourceNodeArray",
      "getOpPrecidence",
      "compactFlatten",
      "binaryOperatorToJs",
      "getPrecidenceLevelIsLeftAssociative",
      "Error",
      "formattedInspect"
    ],
    [global, __webpack_require__(3), __webpack_require__(14)],
    (
      operatorIsInfixJs,
      binaryOperatorToSourceNodeArray,
      getOpPrecidence,
      compactFlatten,
      binaryOperatorToJs,
      getPrecidenceLevelIsLeftAssociative,
      Error,
      formattedInspect
    ) => {
      let BinaryOperatorStn;
      return (BinaryOperatorStn = Caf.defClass(
        class BinaryOperatorStn extends __webpack_require__(2) {
          constructor(props, children) {
            super(...arguments);
            this.operator = props.operator;
            this.left = children[0];
            this.right = children[1];
            if (!(this.left && this.right)) {
              throw new Error(
                `left and right required: ${Caf.toString(
                  formattedInspect({ left: this.left, right: this.right })
                )}`
              );
            }
          }
        },
        function(BinaryOperatorStn, classSuper, instanceSuper) {
          this.prototype.updateScope = function(scope) {
            this.scope = scope;
            if (this.operator === "?" && !this.left.isReference) {
              this.uniqueIdentifierHandle = this.scope.uniqueIdentifierHandle;
            }
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.toSourceNode = function(options) {
            let out, identifier, parentOperatorPrecidence;
            out = (() => {
              switch (false) {
                case !(this.operator === "?" && this.uniqueIdentifierHandle):
                  ({ identifier } = this.uniqueIdentifierHandle);
                  return [
                    "((",
                    identifier,
                    " = ",
                    this.left.toSourceNode({ expression: true }),
                    ") != null ? ",
                    identifier,
                    " : ",
                    this.right.toSourceNode({ expression: true }),
                    ")"
                  ];
                case !!operatorIsInfixJs(this.operator):
                  return binaryOperatorToSourceNodeArray(
                    this.operator,
                    this.left.toSourceNode({ expression: true }),
                    this.right.toSourceNode({ expression: true })
                  );
                default:
                  parentOperatorPrecidence = getOpPrecidence(this.operator);
                  return binaryOperatorToSourceNodeArray(
                    this.operator,
                    this.left.toSourceNode({
                      expression: true,
                      subExpression: true,
                      parentOperatorPrecidence,
                      isLeftOperand: true
                    }),
                    this.right.toSourceNode({
                      expression: true,
                      subExpression: true,
                      parentOperatorPrecidence,
                      isLeftOperand: false
                    })
                  );
              }
            })();
            return this.createSourceNode(
              options && this._needsParens(options)
                ? compactFlatten(["(", out, ")"])
                : out
            );
          };
          this.prototype.toJs = function(options) {
            let out, identifier, parentOperatorPrecidence;
            out =
              this.operator === "?" && this.uniqueIdentifierHandle
                ? (({ identifier } = this.uniqueIdentifierHandle),
                  `((${Caf.toString(identifier)} = ${Caf.toString(
                    this.left.toJsExpression()
                  )}) != null ? ${Caf.toString(identifier)} : ${Caf.toString(
                    this.right.toJsExpression()
                  )})`)
                : !operatorIsInfixJs(this.operator)
                  ? binaryOperatorToJs(
                      this.operator,
                      this.left.toJsExpression(),
                      this.right.toJsExpression()
                    )
                  : ((parentOperatorPrecidence = getOpPrecidence(
                      this.operator
                    )),
                    binaryOperatorToJs(
                      this.operator,
                      this.left.toJs({
                        expression: true,
                        subExpression: true,
                        parentOperatorPrecidence,
                        isLeftOperand: true
                      }),
                      this.right.toJs({
                        expression: true,
                        subExpression: true,
                        parentOperatorPrecidence,
                        isLeftOperand: false
                      })
                    ));
            return options
              ? this._needsParens(options)
                ? `(${Caf.toString(out)})`
                : out
              : out;
          };
          this.prototype._needsParens = function(toJsOptions) {
            let dotBase,
              parentOperatorPrecidence,
              isLeftOperand,
              operatorPrecidence;
            if (toJsOptions) {
              ({
                dotBase,
                parentOperatorPrecidence,
                isLeftOperand
              } = toJsOptions);
            }
            return !(parentOperatorPrecidence != null)
              ? dotBase
              : ((operatorPrecidence = getOpPrecidence(this.operator)),
                parentOperatorPrecidence &&
                operatorPrecidence < parentOperatorPrecidence
                  ? false
                  : parentOperatorPrecidence &&
                    operatorPrecidence === parentOperatorPrecidence &&
                    isLeftOperand ===
                      getPrecidenceLevelIsLeftAssociative(operatorPrecidence)
                    ? false
                    : true);
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten"],
    [global, __webpack_require__(3)],
    compactFlatten => {
      let CatchStn;
      return (CatchStn = Caf.defClass(
        class CatchStn extends __webpack_require__(2) {},
        function(CatchStn, classSuper, instanceSuper) {
          this.prototype.updateScope = function(scope) {
            let errorIdentifier, body;
            this.scope = scope;
            ({ errorIdentifier, body } = this.labeledChildren);
            this.uniqueIdentifierHandle = this.scope.getUniqueIdentifierHandle(
              "error",
              false
            );
            if (errorIdentifier) {
              this.scope.addIdentifierAssigned(errorIdentifier.name);
              this.scope.addIdentifierUsed(errorIdentifier.name);
            }
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.toJs = function(options = {}) {
            let expression, errorIdentifier, body, errorIdentifierString;
            ({ expression } = options);
            ({ errorIdentifier, body } = this.labeledChildren);
            body = body && (expression ? body.toFunctionBodyJs() : body.toJs());
            errorIdentifierString = this.uniqueIdentifierHandle.identifier;
            if (errorIdentifier) {
              body = compactFlatten([
                `${Caf.toString(errorIdentifier.name)} = ${Caf.toString(
                  errorIdentifierString
                )}`,
                body
              ]).join("; ");
            }
            body = body ? body + ";" : "";
            return `catch (${Caf.toString(
              errorIdentifierString
            )}) {${Caf.toString(body)}}`;
          };
          this.prototype.toSourceNode = function(options = {}) {
            let expression, errorIdentifier, body, errorIdentifierString;
            ({ expression } = options);
            ({ errorIdentifier, body } = this.labeledChildren);
            body =
              Caf.exists(body) &&
              body.toSourceNode({ returnAction: !!expression });
            errorIdentifierString = this.uniqueIdentifierHandle.identifier;
            if (errorIdentifier) {
              body = [
                `${Caf.toString(errorIdentifier.name)} = ${Caf.toString(
                  errorIdentifierString
                )};`,
                body ? " " : undefined,
                body
              ];
            }
            return this.createSourceNode(
              "catch (",
              errorIdentifierString,
              ") {",
              body,
              "}"
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "formattedInspect", "StnRegistry"],
    [global, __webpack_require__(3)],
    (Error, formattedInspect, StnRegistry) => {
      let ControlOperatorStn;
      return (ControlOperatorStn = Caf.defClass(
        class ControlOperatorStn extends __webpack_require__(2) {
          constructor(props, children) {
            super(...arguments);
            this.operand = props.operand;
            this.joiner = props.joiner;
            if (this.labeledChildren.expression) {
              this.expression = this.labeledChildren.expression;
              this.body =
                this.labeledChildren.body || StnRegistry.UndefinedStn();
              this.elseBody = this.labeledChildren.elseBody;
            } else {
              this.expression = children[0];
              this.body = children[1] || StnRegistry.UndefinedStn();
              this.elseBody = children[2];
            }
            if (!(this.body.type === "Statements")) {
              (this.body = StnRegistry.StatementsStn(this.body)).parent = this;
            }
            this.validate();
          }
        },
        function(ControlOperatorStn, classSuper, instanceSuper) {
          this.prototype.validate = function() {
            return (() => {
              switch (this.operand) {
                case "while":
                case "until":
                  if (this.elseBody) {
                    throw new Error(
                      `else not expected after ${Caf.toString(this.operand)}`
                    );
                  }
                  return this.joiner === "then"
                    ? (() => {
                        throw new Error(
                          `then not expected after ${Caf.toString(
                            this.operand
                          )}`
                        );
                      })()
                    : undefined;
                case "if":
                case "unless":
                  return this.joiner === "do"
                    ? (() => {
                        throw new Error(
                          `do not expected after ${Caf.toString(this.operand)}`
                        );
                      })()
                    : undefined;
                default:
                  return (() => {
                    throw new Error(
                      `INTERNAL: invalid control-operator: ${Caf.toString(
                        formattedInspect(this.operand)
                      )}`
                    );
                  })();
              }
            })();
          };
          this.prototype.toJs = function(options = {}) {
            let expression,
              returnValueIsIgnored,
              jsExpression,
              operand,
              tempVarIdentifier,
              out,
              cafBase,
              cafBase1;
            ({ expression, returnValueIsIgnored } = options);
            jsExpression = this.expression.toJsExpression();
            ({ operand } = this);
            operand = (() => {
              switch (operand) {
                case "until":
                case "unless":
                  jsExpression = `!${Caf.toString(
                    this.applyParens(jsExpression)
                  )}`;
                  return operand === "until" ? "while" : "if";
                default:
                  return operand;
              }
            })();
            return expression
              ? operand === "while"
                ? returnValueIsIgnored
                  ? `(() => {while ${Caf.toString(
                      this.applyRequiredParens(jsExpression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(false)
                    )};};})()`
                  : ((tempVarIdentifier = this.scope.uniqueIdentifier),
                    `(() => {while ${Caf.toString(
                      this.applyRequiredParens(jsExpression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(
                        `${Caf.toString(tempVarIdentifier)} =`
                      )
                    )};}; return ${Caf.toString(tempVarIdentifier)}})()`)
                : ((out = `${Caf.toString(
                    this.applyParens(jsExpression)
                  )} ? ${Caf.toString(
                    this.body.toJsExpression()
                  )} : ${Caf.toString(
                    (Caf.exists((cafBase = this.elseBody)) &&
                      cafBase.toJsExpression()) ||
                      "undefined"
                  )}`),
                  options.subExpression || options.dotBase
                    ? (out = `(${Caf.toString(out)})`)
                    : out)
              : `${Caf.toString(operand)} ${Caf.toString(
                  this.applyRequiredParens(jsExpression)
                )} {${Caf.toString(this.body.toJs())};}${Caf.toString(
                  this.elseBody
                    ? ` else {${Caf.toString(
                        Caf.exists((cafBase1 = this.elseBody)) &&
                          cafBase1.toJs()
                      )};}`
                    : ""
                )}`;
          };
          this.prototype.toSourceNode = function(options = {}) {
            let expression,
              returnValueIsIgnored,
              noParens,
              operand,
              applyParens,
              unaryOperator,
              expressionSourceNode,
              parts,
              tempVarIdentifier,
              cafBase;
            ({ expression, returnValueIsIgnored, noParens } = options);
            ({ operand } = this);
            applyParens = false;
            unaryOperator = "";
            expressionSourceNode = (() => {
              switch (operand) {
                case "until":
                case "unless":
                  operand = operand === "until" ? "while" : "if";
                  return (unaryOperator = "!");
              }
            })();
            parts = expression
              ? (() => {
                  switch (operand) {
                    case "while":
                      return returnValueIsIgnored
                        ? this.doSourceNode(
                            "while(",
                            unaryOperator,
                            this.expression.toSourceNode({
                              noParens: true,
                              expression: true
                            }),
                            ") {",
                            this.body.toSourceNode(),
                            "};"
                          )
                        : ((tempVarIdentifier = this.scope.uniqueIdentifier),
                          this.doSourceNode(
                            `let ${Caf.toString(tempVarIdentifier)}; while(`,
                            unaryOperator,
                            this.expression.toSourceNode({
                              noParens: true,
                              expression: true
                            }),
                            ") {",
                            this.body.toSourceNode({
                              returnAction: `${Caf.toString(
                                tempVarIdentifier
                              )} =`
                            }),
                            `}; return ${Caf.toString(tempVarIdentifier)};`
                          ));
                    case "if":
                      applyParens = options.subExpression || options.dotBase;
                      return [
                        unaryOperator,
                        this.expression.toSourceNode({
                          dotBase: true,
                          expression: true
                        }),
                        " ? ",
                        this.body.toSourceNode({ expression: true }),
                        " : ",
                        (Caf.exists((cafBase = this.elseBody)) &&
                          cafBase.toSourceNode({ expression: true })) ||
                          "undefined"
                      ];
                  }
                })()
              : [
                  operand,
                  " (",
                  unaryOperator,
                  this.expression.toSourceNode({
                    noParens: true,
                    expression: true
                  }),
                  ") {",
                  this.body.toSourceNode(),
                  "}",
                  this.elseBody
                    ? [" else {", this.elseBody.toSourceNode(), "}"]
                    : undefined
                ];
            return this.createSourceNode(
              applyParens && !noParens ? "(" : undefined,
              parts,
              applyParens && !noParens ? ")" : undefined
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let DestructuringAssignmentStn;
    return (DestructuringAssignmentStn = Caf.defClass(
      class DestructuringAssignmentStn extends __webpack_require__(2) {},
      function(DestructuringAssignmentStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function(options) {
          let expression, returnValueIsIgnored, noParens, structure, value;
          if (options) {
            ({ expression, returnValueIsIgnored, noParens } = options);
          }
          ({ structure, value } = this.labeledChildren);
          if (returnValueIsIgnored) {
            expression = false;
          }
          return this.createSourceNode(
            !noParens ? "(" : undefined,
            structure.toSourceNode(),
            " = ",
            value.toSourceNode({ expression: true }),
            expression && ", ",
            expression && structure.toSourceNode({ restructuringStart: true }),
            !noParens ? ")" : undefined
          );
        };
        this.prototype.toJs = function(options) {
          let expression, returnValueIsIgnored, structure, value;
          if (options) {
            ({ expression, returnValueIsIgnored } = options);
          }
          ({ structure, value } = this.labeledChildren);
          if (returnValueIsIgnored) {
            expression = false;
          }
          return expression
            ? `(${Caf.toString(structure.toJs())} = ${Caf.toString(
                value.toJsExpression()
              )}, ${Caf.toString(
                structure.toJs({ restructuringStart: true })
              )})`
            : `(${Caf.toString(structure.toJs())} = ${Caf.toString(
                value.toJsExpression()
              )})`;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let DestructuringIdentifierStn;
    return (DestructuringIdentifierStn = Caf.defClass(
      class DestructuringIdentifierStn extends __webpack_require__(2) {},
      function(DestructuringIdentifierStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          this.scope.addIdentifierAssigned(
            this.labeledChildren.identifier.toJs()
          );
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.prototype.toSourceNode = function(options) {
          let restructuring, identifier, destructuringDefault;
          if (options) {
            ({ restructuring } = options);
          }
          ({ identifier, destructuringDefault } = this.labeledChildren);
          return restructuring
            ? identifier.toSourceNode()
            : this.createSourceNode(
                this.props.ellipsis ? "..." : undefined,
                identifier.toSourceNode(),
                destructuringDefault
                  ? ` = ${Caf.toString(
                      destructuringDefault.toSourceNode({ expression: true })
                    )}`
                  : undefined
              );
        };
        this.prototype.toJs = function(options) {
          let restructuring, identifier, destructuringDefault;
          if (options) {
            ({ restructuring } = options);
          }
          ({ identifier, destructuringDefault } = this.labeledChildren);
          return restructuring
            ? identifier.toJs()
            : `${Caf.toString(this.props.ellipsis ? "..." : "")}${Caf.toString(
                identifier.toJs()
              )}${Caf.toString(
                destructuringDefault
                  ? ` = ${Caf.toString(destructuringDefault.toJsExpression())}`
                  : ""
              )}`;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Object"],
    [global, __webpack_require__(3)],
    Object => {
      let DoStn;
      return (DoStn = Caf.defClass(
        class DoStn extends __webpack_require__(2) {},
        function(DoStn, classSuper, instanceSuper) {
          this.prototype.toJs = function() {
            let functionDefinition;
            ({ functionDefinition } = this.labeledChildren);
            return `(${Caf.toString(functionDefinition.toJs())})(${Caf.toString(
              Object.keys(functionDefinition.argumentNames).join(", ")
            )})`;
          };
          this.prototype.toSourceNode = function() {
            let functionDefinition;
            ({ functionDefinition } = this.labeledChildren);
            return this.createSourceNode(
              "(",
              functionDefinition.toSourceNode(),
              ")(",
              Object.keys(functionDefinition.argumentNames).join(", "),
              ")"
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let FunctionDefinitionArgsStn;
    return (FunctionDefinitionArgsStn = Caf.defClass(
      class FunctionDefinitionArgsStn extends __webpack_require__(2) {},
      function(FunctionDefinitionArgsStn, classSuper, instanceSuper) {
        this.getter({
          argumentNameList: function() {
            return Caf.each(this.children, [], (c, cafK, cafInto) => {
              if (c.argumentName) {
                cafInto.push(c.argumentName);
              }
            });
          }
        });
        this.prototype.toSourceNode = function(options) {
          return this.createSourceNode(
            "(",
            Caf.each(this.children, [], (c, i, cafInto) => {
              let sn;
              sn = c.toSourceNode();
              cafInto.push(i > 0 ? [", ", sn] : sn);
            }),
            ")"
          );
        };
        this.prototype.toJs = function() {
          return `(${Caf.toString(
            Caf.each(this.children, [], (c, cafK, cafInto) => {
              cafInto.push(c.toJs());
            }).join(", ")
          )})`;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let GlobalIdentifierStn;
    return (GlobalIdentifierStn = Caf.defClass(
      class GlobalIdentifierStn extends __webpack_require__(2) {},
      function(GlobalIdentifierStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(this.props.identifier);
        };
        this.prototype.toJs = function() {
          return this.props.identifier;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let IdentifierStn;
    return (IdentifierStn = Caf.defClass(
      class IdentifierStn extends __webpack_require__(2) {},
      function(IdentifierStn, classSuper, instanceSuper) {
        this.getter({
          name: function() {
            return this.props.identifier;
          },
          isIdentifier: function() {
            return true;
          },
          propName: function() {
            return this.identifier;
          },
          identifier: function() {
            return (this.props.identifierHandle || this.props).identifier;
          },
          explicitIdentifier: function() {
            return this.props.identifier;
          },
          canBeUsedInES6Structuring: function() {
            return true;
          }
        });
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          if (this.props.identifierHandle) {
            this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
          }
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.prototype.needsParens = false;
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(
            (this.props.identifierHandle || this.props).identifier
          );
        };
        this.prototype.toJs = function() {
          return (this.props.identifierHandle || this.props).identifier;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek"],
    [global, __webpack_require__(3)],
    peek => {
      let InterpolatedStringStn;
      return (InterpolatedStringStn = Caf.defClass(
        class InterpolatedStringStn extends __webpack_require__(2) {},
        function(InterpolatedStringStn, classSuper, instanceSuper) {
          this.prototype.compactNewLines = function(compactLeft, compactRight) {
            return Caf.each(this.children, undefined, (child, i) => {
              if (child.type === "String") {
                child.compactNewLines(
                  compactLeft && i === 0,
                  compactRight && i === this.children.length - 1
                );
              }
            });
          };
          this.prototype.trimLeft = function() {
            let cafBase;
            return (
              Caf.exists((cafBase = this.children[0])) &&
              (Caf.isF(cafBase.trimLeft) && cafBase.trimLeft())
            );
          };
          this.prototype.trimRight = function() {
            let cafBase;
            return (
              Caf.exists((cafBase = peek(this.children))) &&
              (Caf.isF(cafBase.trimRight) && cafBase.trimRight())
            );
          };
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              "`",
              Caf.each(this.children, [], (c, cafK, cafInto) => {
                cafInto.push(c.toInterpolatedJsStringPart());
              }),
              "`"
            );
          };
          this.prototype.toJs = function() {
            return `\`${Caf.toString(
              Caf.each(this.children, [], (c, cafK, cafInto) => {
                cafInto.push(c.toInterpolatedJsStringPart());
              }).join("")
            )}\``;
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let LabeledDestructuringTargetStn;
    return (LabeledDestructuringTargetStn = Caf.defClass(
      class LabeledDestructuringTargetStn extends __webpack_require__(2) {},
      function(LabeledDestructuringTargetStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options) {
          return Caf.exists(options) && options.restructuring
            ? this.children[1].toJs(options)
            : this.childrenToJs(": ");
        };
        this.prototype.toSourceNode = function(options) {
          return Caf.exists(options) && options.restructuring
            ? this.children[1].toSourceNode(options)
            : this.childrenToSourceNodes(": ");
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let Error = global.Error,
    LetStn;
  return (LetStn = Caf.defClass(
    class LetStn extends __webpack_require__(2) {},
    function(LetStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let identifiers, identifier;
        ({ identifiers, identifier } = this.props);
        return identifiers
          ? (!(identifiers.length > 0)
              ? (() => {
                  throw new Error("LetStn identifiers empty");
                })()
              : undefined,
            `let ${Caf.toString(identifiers.join(", "))}`)
          : identifier
            ? `let ${Caf.toString(identifier)}`
            : (() => {
                throw new Error("LetStn needs props!");
              })();
      };
    }
  ));
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let NewInstanceStn;
    return (NewInstanceStn = Caf.defClass(
      class NewInstanceStn extends __webpack_require__(2) {},
      function(NewInstanceStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options) {
          let child, childJs;
          [child] = this.children;
          childJs = (() => {
            switch (child.type) {
              case "FunctionInvocation":
              case "Reference":
              case "GlobalIdentifier":
              case "This":
                return child.toJs({ newObjectFunctionInvocation: true });
              default:
                return `(${Caf.toString(child.toJs())})`;
            }
          })();
          return Caf.exists(options) && options.dotBase
            ? `(new ${Caf.toString(childJs)})`
            : `new ${Caf.toString(childJs)}`;
        };
        this.prototype.toSourceNode = function(options) {
          let noParens, child, childNodes;
          if (options) {
            ({ noParens } = options);
          }
          [child] = this.children;
          childNodes = (() => {
            switch (child.type) {
              case "FunctionInvocation":
              case "Reference":
              case "GlobalIdentifier":
              case "This":
                return child.toSourceNode({
                  newObjectFunctionInvocation: true
                });
              default:
                return ["(", child.toSourceNode(), ")"];
            }
          })();
          return Caf.exists(options) && options.dotBase
            ? this.createSourceNode(
                !noParens ? "(" : undefined,
                "new ",
                childNodes,
                !noParens ? ")" : undefined
              )
            : this.createSourceNode("new ", childNodes);
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ObjectDestructuringStn;
    return (ObjectDestructuringStn = Caf.defClass(
      class ObjectDestructuringStn extends __webpack_require__(2) {},
      function(ObjectDestructuringStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function(options) {
          let restructuring, restructuringStart, subOptions, base;
          if (options) {
            ({ restructuring, restructuringStart } = options);
          }
          if (restructuringStart || restructuring) {
            subOptions = { restructuring: true };
          }
          base = this.childrenToSourceNodes(", ", subOptions);
          return restructuring ? base : this.createSourceNode("{", base, "}");
        };
        this.prototype.toJs = function(options) {
          let restructuring, restructuringStart, subOptions;
          if (options) {
            ({ restructuring, restructuringStart } = options);
          }
          if (restructuringStart || restructuring) {
            subOptions = { restructuring: true };
          }
          return restructuring
            ? `${Caf.toString(this.childrenToJs(", ", subOptions))}`
            : `{${Caf.toString(this.childrenToJs(", ", subOptions))}}`;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp", "escapePropName"],
    [global, __webpack_require__(3)],
    (identifierRegexp, escapePropName) => {
      let ObjectPropNameStn;
      return (ObjectPropNameStn = Caf.defClass(
        class ObjectPropNameStn extends __webpack_require__(2) {},
        function(ObjectPropNameStn, classSuper, instanceSuper) {
          this.getter({
            canBeUsedInES6Structuring: function() {
              let name;
              return (name = this.simpleName)
                ? identifierRegexp.test(name)
                : undefined;
            },
            isThisProp: function() {
              return this.props.isThisProp;
            },
            simpleName: function() {
              let nameStn;
              [nameStn] = this.children;
              return nameStn
                ? nameStn.propName
                : escapePropName(this.props.value);
            },
            propName: function() {
              return this.simpleName;
            }
          });
          this.prototype.toJs = function() {
            let nameStn;
            [nameStn] = this.children;
            return (Caf.exists(nameStn) && nameStn.children.length) > 0
              ? `[${Caf.toString(nameStn.toJs())}]`
              : this.simpleName;
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "peek",
      "Error",
      "javaScriptReservedWords",
      "identifierRegexp",
      "isString",
      "present"
    ],
    [global, __webpack_require__(3)],
    (
      peek,
      Error,
      javaScriptReservedWords,
      identifierRegexp,
      isString,
      present
    ) => {
      let ObjectPropValueStn;
      return (ObjectPropValueStn = Caf.defClass(
        class ObjectPropValueStn extends __webpack_require__(2) {},
        function(ObjectPropValueStn, classSuper, instanceSuper) {
          this.getter({
            isObject: true,
            propNameChild: function() {
              return this.children[0];
            },
            valueChild: function() {
              return peek(this.children);
            },
            isThisProp: function() {
              let cafBase;
              return (
                Caf.exists((cafBase = this.propNameChild)) && cafBase.isThisProp
              );
            },
            propName: function() {
              let propNameChild, cafTemp, cafTemp1;
              ({ propNameChild } = this);
              return (() => {
                switch (this.children.length) {
                  case 2:
                    return (cafTemp = propNameChild.propName) != null
                      ? cafTemp
                      : propNameChild;
                  case 1:
                    return (cafTemp1 = propNameChild.propName) != null
                      ? cafTemp1
                      : (() => {
                          throw new Error(
                            `${Caf.toString(
                              propNameChild.type
                            )} not allowed when structuring an object. Legal examples: foo.accessors, &requires and identifiers.`
                          );
                        })();
                }
              })();
            },
            canBeUsedInES6Structuring: function() {
              let propName;
              return (
                (propName = this.propNameChild.propName) &&
                !javaScriptReservedWords[propName] &&
                identifierRegexp.test(propName) &&
                this.valueChild.canBeUsedInES6Structuring &&
                this.valueChild.propName === propName
              );
            }
          });
          this.prototype.toJs = function() {
            let valueChild, propName, base;
            ({ valueChild, propName } = this);
            base = this.valueChild.toJsExpression();
            if (!isString(propName)) {
              propName = propName.toJs();
            }
            return this.canBeUsedInES6Structuring
              ? base
              : `${Caf.toString(propName)}: ${Caf.toString(base)}`;
          };
          this.prototype.validate = function() {
            return !present(this.propName)
              ? (() => {
                  throw new Error("no prop name");
                })()
              : undefined;
          };
          this.prototype.toSourceNode = function() {
            let valueChild, propName, base;
            ({ valueChild, propName } = this);
            base = valueChild.toSourceNode();
            if (!isString(propName)) {
              propName = propName.toSourceNode();
            }
            return this.canBeUsedInES6Structuring
              ? base
              : this.createSourceNode(propName, ": ", base);
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let StnRegistry, ObjectStn;
    return (
      (StnRegistry = __webpack_require__(4)),
      (ObjectStn = Caf.defClass(
        class ObjectStn extends __webpack_require__(2) {},
        function(ObjectStn, classSuper, instanceSuper) {
          let splitObjectsAtSameProps;
          this.prototype.toJs = function(options) {
            let out;
            out = `{${Caf.toString(
              Caf.each(this.children, [], (c, cafK, cafInto) => {
                cafInto.push(c.toJs());
              }).join(", ")
            )}}`;
            return (Caf.exists(options) && options.dotBase) ||
              (Caf.exists(options) && options.statement)
              ? `(${Caf.toString(out)})`
              : out;
          };
          this.prototype.toSourceNode = function(options) {
            let base;
            base = [
              "{",
              this.childrenToSourceNodes(", ", { expression: true }),
              "}"
            ];
            return (Caf.exists(options) && options.dotBase) ||
              (Caf.exists(options) && options.statement)
              ? this.createSourceNode("(", base, ")")
              : this.createSourceNode(base);
          };
          splitObjectsAtSameProps = function(children) {
            let currentDefined, listOfObjectLiterals, currentOrder;
            currentDefined = {};
            listOfObjectLiterals = [(currentOrder = [])];
            Caf.each(children, undefined, child => {
              let found, value;
              if ((found = child.find(/ObjectPropNameStn/))) {
                [
                  {
                    props: { value }
                  }
                ] = found;
                if (currentDefined[value]) {
                  currentDefined = {};
                  listOfObjectLiterals.push((currentOrder = []));
                }
                currentDefined[value] = true;
              }
              currentOrder.push(child);
            });
            return listOfObjectLiterals;
          };
          this.newInstance = function(props, children) {
            let listOfObjectLiterals;
            listOfObjectLiterals = splitObjectsAtSameProps(children);
            return listOfObjectLiterals.length === 1
              ? new this(props, children)
              : new StnRegistry.ArrayStn(
                  Caf.each(listOfObjectLiterals, [], (c, cafK, cafInto) => {
                    cafInto.push(new this(props, c));
                  })
                );
          };
        }
      ))
    );
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ReferenceStn;
    return (ReferenceStn = Caf.defClass(
      class ReferenceStn extends __webpack_require__(2) {},
      function(ReferenceStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          if (this.props.identifierHandle) {
            this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
          } else {
            this.scope.addIdentifierUsed(this.toJs());
          }
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.getter({
          isReference: function() {
            return true;
          },
          propName: function() {
            let cafBase;
            return (
              (Caf.exists((cafBase = this.props.identifierHandle)) &&
                cafBase.identifier) ||
              this.labeledChildren.identifier.propName
            );
          },
          explicitIdentifier: function() {
            let cafBase;
            return (
              Caf.exists((cafBase = this.labeledChildren.identifier)) &&
              cafBase.explicitIdentifier
            );
          },
          canBeUsedInES6Structuring: function() {
            return true;
          }
        });
        this.prototype.needsParens = false;
        this.prototype.toSourceNode = function(options) {
          return this.toJs(options);
        };
        this.prototype.toJs = function() {
          let cafBase;
          return (
            (Caf.exists((cafBase = this.props.identifierHandle)) &&
              cafBase.identifier) ||
            this.labeledChildren.identifier.toJs()
          );
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["isString"],
    [global, __webpack_require__(3), __webpack_require__(8)],
    isString => {
      let RegExpStn;
      return (RegExpStn = Caf.defClass(
        class RegExpStn extends __webpack_require__(2) {},
        function(RegExpStn, classSuper, instanceSuper) {
          this.prototype.toJs = function() {
            let value, modifiers, str, hasInterpolation, cafBase;
            ({ value, modifiers } = this.props);
            str =
              (Caf.exists((cafBase = this.children)) && cafBase.length) > 0
                ? ((hasInterpolation = Caf.extendedEach(
                    this.children,
                    undefined,
                    (child, cafK, cafInto, cafBrk) => {
                      let cafRet;
                      return (
                        (cafRet = !isString(child.props.value)) &&
                        (cafBrk(), cafRet)
                      );
                    }
                  )),
                  Caf.each(this.children, [], (child, cafK, cafInto) => {
                    let v;
                    cafInto.push(
                      isString((v = child.props.value))
                        ? hasInterpolation
                          ? v.replace(/([`$\\])/g, "\\$1")
                          : v
                        : `\${Caf.toString(${Caf.toString(
                            child.toJsExpression()
                          )})}`
                    );
                  }).join(""))
                : value != null
                  ? value
                  : "";
            return str.length === 0
              ? "/(?:)/"
              : hasInterpolation
                ? modifiers
                  ? `RegExp(\`${Caf.toString(str)}\`, '${Caf.toString(
                      modifiers
                    )}')`
                  : `RegExp(\`${Caf.toString(str)}\`)`
                : `/${Caf.toString(str)}/${Caf.toString(modifiers || "")}`;
          };
          this.prototype.toSourceNode = function() {
            let value, modifiers, childrenNodes, hasInterpolation, cafBase;
            ({ value, modifiers } = this.props);
            childrenNodes =
              (Caf.exists((cafBase = this.children)) && cafBase.length) > 0
                ? ((hasInterpolation = Caf.extendedEach(
                    this.children,
                    undefined,
                    (child, cafK, cafInto, cafBrk) => {
                      let cafRet;
                      return (
                        (cafRet = !isString(child.props.value)) &&
                        (cafBrk(), cafRet)
                      );
                    }
                  )),
                  Caf.each(this.children, [], (child, cafK, cafInto) => {
                    let v;
                    cafInto.push(
                      isString((v = child.props.value))
                        ? hasInterpolation
                          ? v.replace(/([`$\\])/g, "\\$1")
                          : v
                        : ["${Caf.toString(", child.toJsExpression(), ")}"]
                    );
                  }))
                : value;
            return childrenNodes.length === 0
              ? this.createSourceNode("/(?:)/")
              : hasInterpolation
                ? this.createSourceNode(
                    "RegExp(`",
                    childrenNodes,
                    "`",
                    modifiers ? [", '", modifiers, "'"] : undefined,
                    ")"
                  )
                : this.createSourceNode("/", childrenNodes, "/", modifiers);
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let findModuleSync, RequireStn;
    return (
      ({ findModuleSync } = __webpack_require__(122)),
      (RequireStn = Caf.defClass(
        class RequireStn extends __webpack_require__(2) {},
        function(RequireStn, classSuper, instanceSuper) {
          this.getter({
            rawRequireString: function() {
              return this.props.require;
            },
            propName: function() {
              return this.rawRequireString;
            },
            requireString: function() {
              return findModuleSync(this.rawRequireString, this.parser.options)
                .requireString;
            }
          });
          this.prototype.validate = function() {
            return this.requireString;
          };
          this.prototype.toJs = function() {
            return `require('${Caf.toString(this.requireString)}')`;
          };
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              `require('${Caf.toString(this.requireString)}')`
            );
          };
        }
      ))
    );
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "formattedInspect"],
    [global, __webpack_require__(3)],
    (Error, formattedInspect) => {
      let SemanticTokenStn;
      return (SemanticTokenStn = Caf.defClass(
        class SemanticTokenStn extends __webpack_require__(2) {
          constructor() {
            let cafBase;
            super(...arguments);
            (cafBase = this.props).token ||
              (cafBase.token = this.parseTreeNode.toString());
          }
        },
        function(SemanticTokenStn, classSuper, instanceSuper) {
          this.getter({
            token: function() {
              return this.props.token;
            }
          });
          this.prototype.toJs = function() {
            return (() => {
              throw new Error(
                `SemanticTokenStn is not intended to output Js directly. Token: ${Caf.toString(
                  formattedInspect(this.props.token)
                )}`
              );
            })();
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let SimpleLiteralStn;
  return (SimpleLiteralStn = Caf.defClass(
    class SimpleLiteralStn extends __webpack_require__(2) {},
    function(SimpleLiteralStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toSourceNode = function(options) {
        let value;
        ({ value } = this.props);
        return this.createSourceNode(
          Caf.exists(options) && options.dotBase ? ["(", value, ")"] : value
        );
      };
      this.getter({
        propName: function() {
          return this.props.value;
        },
        canBeUsedInES6Structuring: function() {
          return true;
        }
      });
      this.prototype.toJs = function(options) {
        let value;
        ({ value } = this.props);
        return Caf.exists(options) && options.dotBase
          ? `(${Caf.toString(value)})`
          : value;
      };
    }
  ));
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["arrayBetweenEach"],
    [global, __webpack_require__(3)],
    arrayBetweenEach => {
      let SwitchStn;
      return (SwitchStn = Caf.defClass(
        class SwitchStn extends __webpack_require__(2) {},
        function(SwitchStn, classSuper, instanceSuper) {
          this.prototype.toJs = function(options) {
            let expression,
              condition,
              switchWhens,
              switchElse,
              falsifyCases,
              cases;
            if (options) {
              ({ expression } = options);
            }
            ({ condition, switchWhens, switchElse } = this.labeledChildren);
            falsifyCases = !condition;
            options = { falsifyCases };
            return expression
              ? ((cases = Caf.each(switchWhens, [], (clause, cafK, cafInto) => {
                  cafInto.push(clause.toFunctionBodyJs(options));
                })),
                switchElse
                  ? cases.push(
                      `default: ${Caf.toString(switchElse.toFunctionBodyJs())};`
                    )
                  : undefined,
                `(() => {switch (${Caf.toString(
                  this.getConditionJs()
                )}) {${Caf.toString(cases.join(" "))}};})()`)
              : ((cases = Caf.each(switchWhens, [], (clause, cafK, cafInto) => {
                  cafInto.push(clause.toJs(options));
                })),
                switchElse
                  ? cases.push(`default: ${Caf.toString(switchElse.toJs())};`)
                  : undefined,
                `switch (${Caf.toString(
                  this.getConditionJs()
                )}) {${Caf.toString(cases.join(" break; "))}}`);
          };
          this.prototype.getConditionJs = function() {
            let condition;
            ({ condition } = this.labeledChildren);
            return condition ? condition.toJsExpression() : "false";
          };
          this.prototype.toSourceNode = function(options) {
            let expression,
              condition,
              switchWhens,
              switchElse,
              falsifyCases,
              childOptions,
              cases,
              conditionSourceNode,
              cafTemp;
            if (options) {
              ({ expression } = options);
            }
            ({ condition, switchWhens, switchElse } = this.labeledChildren);
            falsifyCases = !condition;
            childOptions = { falsifyCases, returnAction: expression };
            cases = Caf.each(switchWhens, [], (clause, cafK, cafInto) => {
              cafInto.push(clause.toSourceNode(childOptions));
            });
            if (switchElse) {
              cases.push(["default: ", switchElse.toSourceNode(childOptions)]);
            }
            conditionSourceNode =
              (cafTemp =
                Caf.exists(condition) &&
                condition.toSourceNode({ expression: true })) != null
                ? cafTemp
                : "false";
            return expression
              ? this.createSourceNode(
                  "(() => {",
                  "switch (",
                  conditionSourceNode,
                  ") {",
                  arrayBetweenEach(cases, " "),
                  "}",
                  ";})()"
                )
              : this.createSourceNode(
                  "switch (",
                  conditionSourceNode,
                  ") {",
                  arrayBetweenEach(cases, " break; "),
                  "}"
                );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ThisStn;
    return (ThisStn = Caf.defClass(
      class ThisStn extends __webpack_require__(2) {},
      function(ThisStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.getter({
          identifier: function() {
            let cafBase;
            return Caf.exists((cafBase = this.children[0])) && cafBase.toJs();
          },
          propName: function() {
            let cafTemp;
            return (cafTemp = this.identifier) != null ? cafTemp : "this";
          }
        });
        this.prototype.toJs = function() {
          let id;
          return (id = this.identifier) ? `this.${Caf.toString(id)}` : "this";
        };
        this.prototype.toSourceNode = function() {
          let id;
          return (id = this.identifier)
            ? this.createSourceNode("this.", id)
            : this.createSourceNode("this");
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ThrowStn;
    return (ThrowStn = Caf.defClass(
      class ThrowStn extends __webpack_require__(2) {},
      function(ThrowStn, classSuper, instanceSuper) {
        this.prototype.toJs = function(options = {}) {
          return options.expression
            ? `(() => {${Caf.toString(this.toJs())};})()`
            : `throw ${Caf.toString(this.childrenToJs())}`;
        };
        this.prototype.toSourceNode = function({ expression }) {
          let base;
          base = ["throw ", this.childrenToSourceNodes()];
          return this.createSourceNode(
            expression ? this.doSourceNode(base, ";") : base
          );
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["StnRegistry"],
    [global, __webpack_require__(3)],
    StnRegistry => {
      let TryStn;
      return (TryStn = Caf.defClass(
        class TryStn extends __webpack_require__(2) {
          constructor() {
            let cafTemp, cafBase;
            super(...arguments);
            if (!this.labeledChildren.optionalCatch) {
              (this.children[1] =
                (cafTemp = (cafBase = this.labeledChildren).optionalCatch) !=
                null
                  ? cafTemp
                  : (cafBase.optionalCatch = StnRegistry.CatchStn())).parent = this;
            }
          }
        },
        function(TryStn, classSuper, instanceSuper) {
          this.prototype.toJs = function(options = {}) {
            let expression, body, optionalCatch, base;
            ({ expression } = options);
            ({ body, optionalCatch } = this.labeledChildren);
            body = expression ? body.toFunctionBodyJs() : body.toJs();
            base = `try {${Caf.toString(body)};} ${Caf.toString(
              optionalCatch.toJs(options)
            )}`;
            return expression ? this.doJs(null, base) : base;
          };
          this.prototype.toSourceNode = function(options = {}) {
            let expression, body, optionalCatch, base;
            ({ expression } = options);
            ({ body, optionalCatch } = this.labeledChildren);
            base = [
              "try {",
              body.toSourceNode({ returnAction: !!expression }),
              "} ",
              optionalCatch.toSourceNode(options)
            ];
            return expression ? this.doSourceNode(null, [base, ";"]) : base;
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let UnaryOperatorStn;
    return (UnaryOperatorStn = Caf.defClass(
      class UnaryOperatorStn extends __webpack_require__(2) {},
      function(UnaryOperatorStn, classSuper, instanceSuper) {
        this.getter({
          normalizedOperand: function() {
            let op;
            return (() => {
              switch ((op = this.props.operand)) {
                case "delete":
                  return "delete ";
                case "and":
                  return "&&";
                case "or":
                  return "||";
                case "==":
                case "is":
                  return "===";
                case "!=":
                case "isnt":
                  return "!==";
                case "not":
                  return "!";
                case "?":
                  return " != null";
                default:
                  return op;
              }
            })();
          }
        });
        this.getter({
          tail: function() {
            return this.props.tail || this.props.operand === "?";
          }
        });
        this.prototype.needsParens = false;
        this.prototype.toJs = function() {
          let childrenJs;
          childrenJs = this.applyParens(this.children[0].toJsExpression());
          return this.props.operand === "?"
            ? `${Caf.toString(childrenJs)} != null`
            : this.props.tail
              ? `${Caf.toString(childrenJs)}${Caf.toString(
                  this.normalizedOperand
                )}`
              : `${Caf.toString(this.normalizedOperand)}${Caf.toString(
                  childrenJs
                )}`;
        };
        this.prototype.toSourceNode = function(options) {
          let childNode, base;
          childNode = this.children[0].toSourceNode({ dotBase: true });
          base = this.tail
            ? [childNode, this.normalizedOperand]
            : [this.normalizedOperand, childNode];
          return Caf.exists(options) && options.dotBase
            ? this.createSourceNode("(", base, ")")
            : this.createSourceNode(base);
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let UndefinedStn;
    return (UndefinedStn = Caf.defClass(
      class UndefinedStn extends __webpack_require__(2) {},
      function(UndefinedStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.prototype.toJs = function() {
          return "undefined";
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, __webpack_require__(3)],
    Error => {
      let AccessorStn;
      return (AccessorStn = Caf.defClass(
        class AccessorStn extends __webpack_require__(11) {
          constructor(props, children) {
            super(...arguments);
            if (!(children.length === 2)) {
              throw new Error("2 children");
            }
            this.value = children[0];
            this.key = children[1];
            if (!this.key) {
              throw new Error("need key");
            }
          }
        },
        function(AccessorStn, classSuper, instanceSuper) {
          this.prototype.needsParens = false;
          this.getter({
            existanceTest: function() {
              return this.props.existanceTest;
            },
            isAccessor: function() {
              return true;
            },
            propName: function() {
              return this.key.toJs();
            }
          });
          this.prototype.toJs = function() {
            let base, identifierString;
            base = this.value.toJsExpression({ dotBase: true });
            return this.key.isIdentifier
              ? (identifierString = this.key.toJs()).match(/['"`]/)
                ? `${Caf.toString(base)}[${Caf.toString(identifierString)}]`
                : `${Caf.toString(base)}.${Caf.toString(identifierString)}`
              : `${Caf.toString(base)}[${Caf.toString(
                  this.key.toJsExpression()
                )}]`;
          };
          this.prototype.toSourceNode = function() {
            let base;
            base = this.value.toSourceNode({ expression: true, dotBase: true });
            return this.key.isIdentifier
              ? this.createSourceNode(base, ".", this.key.toSourceNode())
              : this.createSourceNode(base, "[", this.key.toSourceNode(), "]");
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, supportedOperatorsRegExp, AssignmentStn;
    return (
      (SemanticTree = __webpack_require__(4)),
      (supportedOperatorsRegExp = /^([-+*\/%^|]|<<|>>|>>>|)$/),
      (AssignmentStn = Caf.defClass(
        class AssignmentStn extends __webpack_require__(11) {
          constructor(props, children) {
            super(...arguments);
            this.operator = props.operator || "";
            this.lValue = children[0];
            this.rValue = children[1];
          }
        },
        function(AssignmentStn, classSuper, instanceSuper) {
          this.getter({
            value: function() {
              return this.lValue;
            },
            key: function() {
              return this.rValue;
            },
            propName: function() {
              let cafBase;
              return Caf.exists((cafBase = this.lValue)) && cafBase.propName;
            }
          });
          this.prototype.updateScope = function(scope) {
            let cafBase;
            this.scope = scope;
            this.scope.addIdentifierAssigned(
              Caf.exists((cafBase = this.lValue)) && cafBase.explicitIdentifier
            );
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.postTransform = function() {
            let value1, value2;
            return !supportedOperatorsRegExp.test(this.operator)
              ? (({ value1, value2 } = this.getValueWithBaseCapture(
                  this.lValue
                )),
                SemanticTree.BinaryOperatorStn(
                  { operator: this.operator },
                  value1,
                  SemanticTree.AssignmentStn(
                    { parseTreeNode: this.parseTreeNode },
                    value2,
                    this.rValue
                  )
                ))
              : this;
          };
          this.prototype.toSourceNode = function(options) {
            let out;
            out = supportedOperatorsRegExp.test(this.operator)
              ? [
                  this.lValue.toSourceNode(),
                  ` ${Caf.toString(this.operator)}= `,
                  this.rValue.toSourceNode({ expression: true })
                ]
              : [
                  this.lValue.toSourceNode({ expression: true }),
                  ` ${Caf.toString(this.operator)} `,
                  this.lValue.toSourceNode(),
                  " = ",
                  this.rValue.toSourceNode({ expression: true })
                ];
            return this.createSourceNode(
              (Caf.exists(options) && options.dotBase) ||
              (Caf.exists(options) && options.subExpression)
                ? ["(", out, ")"]
                : out
            );
          };
          this.prototype.toJs = function(options) {
            let out;
            out = supportedOperatorsRegExp.test(this.operator)
              ? `${Caf.toString(this.lValue.toJs())} ${Caf.toString(
                  this.operator
                )}= ${Caf.toString(this.rValue.toJsExpression())}`
              : `${Caf.toString(this.lValue.toJsExpression())} ${Caf.toString(
                  this.operator
                )} ${Caf.toString(this.lValue.toJs())} = ${Caf.toString(
                  this.rValue.toJsExpression()
                )}`;
            return (Caf.exists(options) && options.dotBase) ||
              (Caf.exists(options) && options.subExpression)
              ? `(${Caf.toString(out)})`
              : out;
          };
        }
      ))
    );
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "merge", "Error"],
    [global, __webpack_require__(3)],
    (compactFlatten, merge, Error) => {
      let SemanticTree, ClassStn;
      return (
        (SemanticTree = __webpack_require__(4)),
        (ClassStn = Caf.defClass(
          class ClassStn extends __webpack_require__(2) {},
          function(ClassStn, classSuper, instanceSuper) {
            this.getter({
              className: function() {
                return this.props.className;
              },
              classSuperHandle: function() {
                return this.props.classSuperHandle;
              },
              instanceSuperHandle: function() {
                return this.props.instanceSuperHandle;
              },
              body: function() {
                return this.labeledChildren.body;
              }
            });
            this.prototype.decorate = function() {
              let cafBase;
              return Caf.each(
                Caf.exists((cafBase = this.body)) && cafBase.children,
                undefined,
                stn => {
                  if (stn.type === "Object") {
                    Caf.each(stn.children, undefined, objectPropValueStn => {
                      let propNameStn, propValueStn;
                      [propNameStn, propValueStn] = objectPropValueStn.children;
                      if (
                        propNameStn.type === "ObjectPropName" &&
                        propNameStn.toJs() === "constructor"
                      ) {
                        propValueStn.props.isConstructor = true;
                        Caf.each(
                          propValueStn.find(/Super/),
                          undefined,
                          superCallChild => {
                            superCallChild.props.calledInConstructor = true;
                          }
                        );
                      }
                    });
                  }
                }
              );
            };
            this.prototype.postTransform = function() {
              let classNameStn,
                classExtends,
                body,
                FunctionDefinitionArgsStn,
                StatementsStn,
                FunctionDefinitionStn,
                IdentifierStn,
                FunctionDefinitionArgStn,
                AssignmentStn,
                AccessorStn,
                ThisStn,
                className,
                constructorStn,
                classSuperHandle,
                instanceSuperHandle,
                statementsToCount,
                statementCount,
                classBody,
                children;
              ({
                className: classNameStn,
                classExtends,
                body
              } = this.labeledChildren);
              ({
                FunctionDefinitionArgsStn,
                StatementsStn,
                FunctionDefinitionStn,
                IdentifierStn,
                FunctionDefinitionArgStn,
                AssignmentStn,
                AccessorStn,
                ThisStn
              } = SemanticTree);
              className = classNameStn.toJs();
              if (body) {
                constructorStn = null;
                body = FunctionDefinitionStn(
                  { label: "body", returnIgnored: true },
                  FunctionDefinitionArgsStn(
                    FunctionDefinitionArgStn(
                      IdentifierStn({ identifier: className })
                    ),
                    FunctionDefinitionArgStn(
                      IdentifierStn({
                        identifier: (classSuperHandle = "classSuper")
                      })
                    ),
                    FunctionDefinitionArgStn(
                      IdentifierStn({
                        identifier: (instanceSuperHandle = "instanceSuper")
                      })
                    )
                  ),
                  StatementsStn(
                    (statementsToCount = Caf.each(
                      body.children,
                      [],
                      (stn, cafK, cafInto) => {
                        cafInto.push(
                          stn.type === "Object"
                            ? Caf.each(
                                stn.children,
                                [],
                                (objectPropValueStn, cafK, cafInto) => {
                                  let propNameStn,
                                    propValueStn,
                                    assignToStn,
                                    propName,
                                    isThisProp;
                                  [
                                    propNameStn,
                                    propValueStn
                                  ] = objectPropValueStn.children;
                                  assignToStn = (() => {
                                    switch (propNameStn.type) {
                                      case "ObjectPropName":
                                        ({
                                          propName,
                                          isThisProp
                                        } = propNameStn);
                                        return isThisProp
                                          ? ThisStn(
                                              IdentifierStn({
                                                identifier: propName
                                              })
                                            )
                                          : propName === "constructor"
                                            ? ((constructorStn = propValueStn),
                                              null)
                                            : AccessorStn(
                                                ThisStn(
                                                  IdentifierStn({
                                                    identifier: "prototype"
                                                  })
                                                ),
                                                IdentifierStn({
                                                  identifier: propName
                                                })
                                              );
                                      case "ObjectLiteralAccessor":
                                        return AccessorStn(
                                          ThisStn(
                                            IdentifierStn({
                                              identifier: "prototype"
                                            })
                                          ),
                                          propNameStn.children
                                        );
                                      default:
                                        return (() => {
                                          throw new Error(
                                            `unknown object property name Stn type: ${Caf.toString(
                                              propNameStn.type
                                            )}`
                                          );
                                        })();
                                    }
                                  })();
                                  cafInto.push(
                                    assignToStn &&
                                      AssignmentStn(assignToStn, propValueStn)
                                  );
                                }
                              )
                            : stn
                        );
                      }
                    ))
                  )
                );
                statementCount = statementsToCount.length;
                if (constructorStn) {
                  statementCount -= 1;
                  constructorStn.props.isConstructor = true;
                  Caf.each(
                    constructorStn.find(/Super/),
                    undefined,
                    superCallChild => {
                      superCallChild.props.calledInConstructor = true;
                    }
                  );
                  classBody = StatementsStn(
                    { label: "classBody" },
                    constructorStn
                  );
                }
                if (statementsToCount <= 0) {
                  body = null;
                }
                children = compactFlatten([
                  classNameStn,
                  classExtends,
                  body,
                  classBody
                ]);
              } else {
                children = this.children;
              }
              return new AssignmentStn(
                new IdentifierStn({ identifier: className }),
                new ClassStn(
                  merge(this.props, {
                    className,
                    classSuperHandle,
                    instanceSuperHandle
                  }),
                  children
                )
              );
            };
            this.prototype.toJs = function() {
              let className, classExtends, body, classBody, out, classBodyJs;
              ({
                className,
                classExtends,
                body,
                classBody
              } = this.labeledChildren);
              className = className.toJs();
              out = `Caf.defClass(class ${Caf.toString(
                className
              )} extends ${Caf.toString(
                (Caf.exists(classExtends) && classExtends.toJsExpression()) ||
                  "Object"
              )}`;
              classBodyJs = classBody
                ? `{${Caf.toString(classBody.toJs())};}`
                : "{}";
              return body
                ? out +
                    ` ${Caf.toString(classBodyJs)}, ${Caf.toString(
                      body.toJs()
                    )})`
                : out + ` ${Caf.toString(classBodyJs)})`;
            };
            this.prototype.toSourceNode = function() {
              let className, classExtends, body, classBody, cafTemp;
              ({
                className,
                classExtends,
                body,
                classBody
              } = this.labeledChildren);
              return this.createSourceNode(
                "Caf.defClass(class ",
                className.toSourceNode(),
                " extends ",
                (cafTemp =
                  Caf.exists(classExtends) &&
                  classExtends.toSourceNode({ expression: true })) != null
                  ? cafTemp
                  : "Object",
                " {",
                Caf.exists(classBody) &&
                  classBody.toSourceNode({ classBody: true }),
                "}",
                body ? [", ", body.toSourceNode()] : undefined,
                ")"
              );
            };
          }
        ))
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "merge", "Error"],
    [global, __webpack_require__(3)],
    (compactFlatten, merge, Error) => {
      let StnRegistry, FunctionDefinitionStn;
      return (
        (StnRegistry = __webpack_require__(4)),
        (FunctionDefinitionStn = Caf.defClass(
          class FunctionDefinitionStn extends __webpack_require__(9)(
            __webpack_require__(2)
          ) {
            constructor(props, children, pretransformedStn) {
              let onlyChild;
              if (children.length === 1) {
                [onlyChild] = children;
                if (
                  !(
                    onlyChild instanceof
                    StnRegistry.FunctionDefinitionArgsStn.class
                  )
                ) {
                  children = [
                    StnRegistry.FunctionDefinitionArgsStn(),
                    children[0]
                  ];
                }
              }
              super(props, children, pretransformedStn);
              this.arguments = children[0];
              this.statements = children[1];
              if (this.statements) {
                if (!(this.statements.type === "Statements")) {
                  throw new Error(
                    `statements must be type Statements (is: ${Caf.toString(
                      this.statements.type
                    )})`
                  );
                }
              }
              this._updatingArgumentScope = false;
            }
          },
          function(FunctionDefinitionStn, classSuper, instanceSuper) {
            this.getter({
              needsParens: function() {
                return false;
              },
              needsParensAsStatement: function() {
                return !this.props.bound;
              },
              childrenToUpdateScope: function() {
                return compactFlatten([this.statements]);
              },
              body: function() {
                return this.children[1];
              },
              args: function() {
                return this.children[0];
              },
              statementStns: function() {
                let cafBase;
                return Caf.exists((cafBase = this.body)) && cafBase.children;
              },
              argumentStns: function() {
                let cafBase;
                return Caf.exists((cafBase = this.args)) && cafBase.children;
              }
            });
            this.prototype.updateScope = function() {
              instanceSuper.updateScope.apply(this, arguments);
              return this.arguments
                ? (Caf.each(
                    this.arguments.argumentNameList,
                    {},
                    (name, cafK, cafInto) => {
                      cafInto[cafK] = this.addArgumentName(name);
                    }
                  ),
                  (this._updatingArgumentScope = true),
                  this.arguments.updateScope(this),
                  (this._updatingArgumentScope = false))
                : undefined;
            };
            this.prototype.addIdentifierAssigned = function(identifier) {
              return this._updatingArgumentScope
                ? this.addArgumentName(identifier)
                : instanceSuper.addIdentifierAssigned.apply(this, arguments);
            };
            this.prototype.postTransform = function() {
              let foundParent, newStatementStns, StatementsStn, cafBase;
              if (this.props.bound === "auto") {
                this.props.bound = (foundParent = this.pretransformedStn.findParent(
                  /Class|FunctionDefinition/
                ))
                  ? foundParent.type === "Class"
                    ? false
                    : true
                  : false;
              }
              return this.statementStns !==
                (newStatementStns = this.getPostTransformStatementStns())
                ? (({
                    FunctionDefinitionStn,
                    StatementsStn
                  } = __webpack_require__(4)),
                  FunctionDefinitionStn(
                    (Caf.exists((cafBase = this.body)) &&
                      cafBase.children.length) > 0
                      ? this.props
                      : merge(this.props, { returnIgnored: true }),
                    this.children[0],
                    StatementsStn(newStatementStns)
                  ))
                : instanceSuper.postTransform.apply(this, arguments);
            };
            this.prototype.getPostTransformStatementStns = function() {
              let SuperStn,
                ArraySpreadElementStn,
                ReferenceStn,
                IdentifierStn,
                isConstructor,
                statementStns,
                preBodyStatements,
                lastSuperContainingStatementIndex;
              ({
                SuperStn,
                ArraySpreadElementStn,
                ReferenceStn,
                IdentifierStn
              } = __webpack_require__(4));
              ({ isConstructor } = this.props);
              ({ statementStns } = this);
              preBodyStatements = null;
              Caf.each(this.argumentStns, undefined, arg => {
                let stn;
                if ((stn = arg.generatePreBodyStatementStn())) {
                  (preBodyStatements != null
                    ? preBodyStatements
                    : (preBodyStatements = [])
                  ).push(stn);
                }
              });
              return compactFlatten(
                isConstructor
                  ? ((lastSuperContainingStatementIndex = null),
                    Caf.each(statementStns, undefined, (v, i) => {
                      if (
                        v.type === "Super" ||
                        v.find(/Super/, /FunctionDefinition|Class/)
                      ) {
                        lastSuperContainingStatementIndex = i;
                      }
                    }),
                    lastSuperContainingStatementIndex != null &&
                    lastSuperContainingStatementIndex >= 0
                      ? preBodyStatements
                        ? [
                            statementStns.slice(
                              0,
                              lastSuperContainingStatementIndex + 1
                            ),
                            preBodyStatements,
                            statementStns.slice(
                              lastSuperContainingStatementIndex + 1,
                              statementStns.length
                            )
                          ]
                        : statementStns
                      : [
                          SuperStn(
                            ArraySpreadElementStn(
                              IdentifierStn({ identifier: "arguments" })
                            )
                          ),
                          preBodyStatements,
                          statementStns
                        ])
                  : preBodyStatements
                    ? [preBodyStatements, statementStns]
                    : statementStns
              );
            };
            this.getter({
              autoLetsForSouceNode: function() {
                let lets;
                return (lets = this.getAutoLets()) ? lets + "; " : undefined;
              },
              bound: function() {
                return this.props.bound;
              },
              simpleBound: function() {
                let cafBase;
                return (
                  this.bound &&
                  !this.getAutoLets() &&
                  (Caf.exists((cafBase = this.statementStns)) &&
                    cafBase.length) === 1
                );
              }
            });
            this.prototype.toSourceNode = function(options) {
              let isConstructor,
                bound,
                returnIgnored,
                statement,
                returnAction,
                argsSourceNode,
                bodySourceNode,
                cafTemp,
                cafBase,
                cafBase1;
              ({ isConstructor, bound, returnIgnored } = this.props);
              if (options) {
                ({ statement } = options);
              }
              returnAction = !(isConstructor || returnIgnored);
              argsSourceNode =
                (cafTemp =
                  Caf.exists((cafBase = this.args)) &&
                  cafBase.toSourceNode()) != null
                  ? cafTemp
                  : "()";
              bodySourceNode = this.simpleBound
                ? this.body.children[0].toSourceNode({ expression: true })
                : Caf.exists((cafBase1 = this.body)) &&
                  cafBase1.toSourceNode({ returnAction });
              return bound
                ? this.simpleBound
                  ? this.createSourceNode(
                      statement ? "(" : undefined,
                      argsSourceNode,
                      " => ",
                      bodySourceNode,
                      statement ? ")" : undefined
                    )
                  : this.createSourceNode(
                      statement ? "(" : undefined,
                      argsSourceNode,
                      " => {",
                      this.autoLetsForSouceNode,
                      bodySourceNode,
                      "}",
                      statement ? ")" : undefined
                    )
                : this.createSourceNode(
                    statement ? "(" : undefined,
                    isConstructor ? "constructor" : "function",
                    argsSourceNode,
                    " {",
                    this.autoLetsForSouceNode,
                    bodySourceNode,
                    "}",
                    statement ? ")" : undefined
                  );
            };
            this.prototype.getBodyJs = function() {
              let returnIgnored, isConstructor, statements, lets, cafBase;
              ({ returnIgnored, isConstructor } = this.props);
              statements =
                Caf.exists((cafBase = this.body)) &&
                cafBase.toFunctionBodyJsArray(
                  !(isConstructor || returnIgnored)
                );
              if ((lets = this.getAutoLets())) {
                statements = compactFlatten([lets, statements]);
              }
              return (Caf.exists(statements) && statements.length) > 0
                ? `${Caf.toString(statements.join("; "))};`
                : "";
            };
            this.prototype.getArgsJs = function() {
              let cafTemp, cafBase;
              return (cafTemp =
                Caf.exists((cafBase = this.children[0])) && cafBase.toJs()) !=
                null
                ? cafTemp
                : "()";
            };
            this.prototype.toJs = function() {
              let isConstructor, bound;
              ({ isConstructor, bound } = this.props);
              return bound
                ? this.simpleBound
                  ? `${Caf.toString(this.getArgsJs())} => ${Caf.toString(
                      this.statementStns[0].toJsExpression()
                    )}`
                  : `${Caf.toString(this.getArgsJs())} => {${Caf.toString(
                      this.getBodyJs()
                    )}}`
                : `${Caf.toString(
                    isConstructor ? "constructor" : "function"
                  )}${Caf.toString(this.getArgsJs())} {${Caf.toString(
                    this.getBodyJs()
                  )}}`;
            };
          }
        ))
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, __webpack_require__(3)],
    Error => {
      let SemanticTree, FunctionInvocationStn;
      return (
        (SemanticTree = __webpack_require__(15)),
        (FunctionInvocationStn = Caf.defClass(
          class FunctionInvocationStn extends __webpack_require__(11) {
            constructor(props, children) {
              let functionValue, argStns, cafBase, cafBase1, cafBase2;
              super(...arguments);
              [functionValue, ...argStns] = children;
              this.key = this.argStns = argStns;
              this.value = this.functionValue = functionValue;
              if (
                this.argStns.length === 1 &&
                this.argStns[0].props.implicitArray
              ) {
                this.argStns = this.argStns[0].children;
              }
              if (
                (Caf.exists((cafBase = this.parseTreeNode)) &&
                  cafBase.conditional) ||
                (Caf.exists((cafBase1 = this.parseTreeNode)) &&
                  cafBase1.existanceTest)
              ) {
                (cafBase2 = this.props).existanceTest ||
                  (cafBase2.existanceTest = true);
              }
            }
          },
          function(FunctionInvocationStn, classSuper, instanceSuper) {
            this.prototype.needsParens = false;
            this.getter({
              existanceTest: function() {
                return this.props.existanceTest;
              },
              isFunctionInvocation: function() {
                return true;
              },
              propName: function() {
                let cafBase;
                return (
                  Caf.exists((cafBase = this.functionValue)) && cafBase.propName
                );
              }
            });
            this.prototype.toJs = function(options) {
              let newObjectFunctionInvocation, valueJs;
              if (options) {
                ({ newObjectFunctionInvocation } = options);
              }
              if (this.existanceTest) {
                throw new Error("can't be existanceTest here");
              }
              valueJs = this.functionValue.toJsExpression();
              if (newObjectFunctionInvocation) {
                switch (this.functionValue.type) {
                  case "Reference":
                  case "GlobalIdentifier":
                  case "This":
                    null;
                    break;
                  default:
                    valueJs = `(${Caf.toString(valueJs)})`;
                }
              }
              return `${Caf.toString(valueJs)}${Caf.toString(
                this.applyRequiredParens(
                  Caf.each(this.argStns, [], (a, cafK, cafInto) => {
                    cafInto.push(a.toJsExpression());
                  }).join(", ")
                )
              )}`;
            };
            this.prototype.toSourceNode = function(options) {
              let newObjectFunctionInvocation, noParens, valueSourceNode;
              if (options) {
                ({ newObjectFunctionInvocation, noParens } = options);
              }
              if (this.existanceTest) {
                throw new Error("internal error: can't be existanceTest here");
              }
              valueSourceNode = this.functionValue.toSourceNode();
              if (newObjectFunctionInvocation) {
                switch (this.functionValue.type) {
                  case "Reference":
                  case "GlobalIdentifier":
                  case "This":
                    null;
                    break;
                  default:
                    if (!noParens) {
                      valueSourceNode = ["(", valueSourceNode, ")"];
                    }
                }
              }
              return this.createSourceNode(
                valueSourceNode,
                "(",
                this.stnArrayToSourceNodes(this.argStns, ", ", {
                  expression: true
                }),
                ")"
              );
            };
          }
        ))
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ObjectLiteralAccessorStn;
    return (ObjectLiteralAccessorStn = Caf.defClass(
      class ObjectLiteralAccessorStn extends __webpack_require__(2) {
        constructor(props, children) {
          super(...arguments);
          this.key = children[0];
        }
      },
      function(ObjectLiteralAccessorStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.getter({
          existanceTest: function() {
            return this.props.existanceTest;
          },
          isAccessor: function() {
            return true;
          }
        });
        this.prototype.toJs = function() {
          let base, cafBase;
          base =
            Caf.exists((cafBase = this.value)) &&
            cafBase.toJsExpression({ dotBase: true });
          return `${Caf.toString(base || "")}[${Caf.toString(
            this.key.toJsExpression()
          )}]`;
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "isString", "merge"],
    [global, __webpack_require__(3)],
    (Error, isString, merge) => {
      let SuperStn;
      return (SuperStn = Caf.defClass(
        class SuperStn extends __webpack_require__(2) {
          constructor(props, args) {
            super(...arguments);
            this.args = args;
            if (this.args.length === 1 && this.args[0].props.implicitArray) {
              this.args = this.args[0].children;
            }
          }
        },
        function(SuperStn, classSuper, instanceSuper) {
          this.prototype.needsParens = false;
          this.prototype.postTransform = function() {
            let propValue, methodName;
            if (
              !(propValue = this.pretransformedStn.findParent(
                "ObjectPropValue"
              ))
            ) {
              throw new Error(
                "super must be used inside an object-literal value"
              );
            }
            if (!isString((methodName = propValue.propName))) {
              throw new Error(
                "property name in parent object-literal must be constant, not computed"
              );
            }
            return new this.class(
              merge(this.props, {
                methodName,
                classMethod: !!propValue.isThisProp
              }),
              this.children
            );
          };
          this.prototype.toJs = function() {
            let args, method;
            ({ args } = this);
            return this.props.calledInConstructor
              ? ((args = this.props.passArguments
                  ? ["...arguments"]
                  : Caf.each(args, [], (a, cafK, cafInto) => {
                      cafInto.push(a.toJsExpression());
                    })),
                `super(${Caf.toString(args.join(", "))})`)
              : ((method = this.props.passArguments
                  ? ((args = "arguments"), "apply")
                  : ((args = Caf.each(args, [], (a, cafK, cafInto) => {
                      cafInto.push(a.toJsExpression());
                    })),
                    "call")),
                `${Caf.toString(this.superObject)}.${Caf.toString(
                  this.props.methodName
                )}.${Caf.toString(method)}${Caf.toString(
                  this.applyRequiredParens(["this"].concat(args).join(", "))
                )}`);
          };
          this.getter({
            klass: function() {
              return this.findParent("Class");
            },
            superObject: function() {
              return this.props.classMethod
                ? this.klass.classSuperHandle
                : this.klass.instanceSuperHandle;
            }
          });
          this.prototype.validate = function() {
            return !(this.props.calledInConstructor || this.klass)
              ? (() => {
                  throw new Error("'super' must be used in a class definition");
                })()
              : undefined;
          };
          this.prototype.toSourceNode = function() {
            let args, passArguments;
            ({ args } = this);
            return this.props.calledInConstructor
              ? ((args = this.props.passArguments
                  ? "...arguments"
                  : this.stnArrayToSourceNodes(args, ", ")),
                this.createSourceNode("super(", args, ")"))
              : (({ passArguments } = this.props),
                this.createSourceNode(
                  this.superObject,
                  ".",
                  this.props.methodName,
                  ".",
                  passArguments ? "apply" : "call",
                  "(this, ",
                  this.props.passArguments
                    ? "arguments"
                    : this.stnArrayToSourceNodes(args, ", "),
                  ")"
                ));
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, CaptureStn;
    return (
      (SemanticTree = __webpack_require__(4)),
      (CaptureStn = Caf.defClass(
        class CaptureStn extends __webpack_require__(2) {},
        function(CaptureStn, classSuper, instanceSuper) {
          this.prototype.postTransform = function() {
            return SemanticTree.ObjectStn(
              this.props,
              SemanticTree.ObjectPropValueStn(
                SemanticTree.ObjectPropNameStn({ value: "source" }),
                SemanticTree.StringStn({
                  value: this.children[1].parseTreeNode.text
                })
              ),
              SemanticTree.ObjectPropValueStn(
                SemanticTree.ObjectPropNameStn({ value: "value" }),
                this.children[1]
              )
            );
          };
        }
      ))
    );
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "arrayWithAllButLast", "peek", "StnRegistry"],
    [global, __webpack_require__(3)],
    (Error, arrayWithAllButLast, peek, StnRegistry) => {
      let SemanticTree, UniqueIdentifierHandle, ComprehensionStn;
      return (
        (SemanticTree = __webpack_require__(4)),
        (UniqueIdentifierHandle = __webpack_require__(12)),
        (ComprehensionStn = Caf.defClass(
          class ComprehensionStn extends __webpack_require__(9)(
            __webpack_require__(2)
          ) {},
          function(ComprehensionStn, classSuper, instanceSuper) {
            this.prototype.validate = function() {
              let valueClauseChildren,
                valueClauses,
                variableDefinition,
                cafBase;
              valueClauseChildren = {};
              ({ valueClauses, variableDefinition } = this.labeledChildren);
              if (
                (Caf.exists(variableDefinition) &&
                  variableDefinition.children.length) > 2
              ) {
                throw new Error(
                  `Can define at most two loop variables (value followed optionally by key). You defined: ${Caf.toString(
                    Caf.exists((cafBase = variableDefinition.parseTreeNode)) &&
                      cafBase.toString()
                  )}.`
                );
              }
              return Caf.each(valueClauses, undefined, valueClause => {
                let type;
                ({ type } = valueClause);
                if (valueClauseChildren[type]) {
                  throw new Error(
                    `no more than one '${Caf.toString(type)}' clause allowed`
                  );
                }
                valueClauseChildren[type] = true;
              });
            };
            this.prototype.postTransform = function() {
              let outputType,
                variableDefinition,
                body,
                iterable,
                intoChild,
                whenClause,
                AccessorStn,
                ArrayStn,
                AssignmentStn,
                BinaryOperatorStn,
                ControlOperatorStn,
                FunctionDefinitionArgsStn,
                FunctionDefinitionArgStn,
                FunctionDefinitionStn,
                FunctionInvocationStn,
                IdentifierStn,
                ObjectStn,
                SimpleLiteralStn,
                StatementsStn,
                useExtendedEach,
                basicEach,
                valueVarDef,
                keyVarDef,
                intoIdentifer,
                brkIdentifer,
                lastBodyStatement,
                bodyStatementsExceptLast,
                bodyWithDefault,
                whenClauseWrapper,
                allButLast,
                foundTest,
                baseIdentifierHandle;
              this.initLabeledChildren();
              ({
                outputType,
                variableDefinition,
                body,
                iterable
              } = this.labeledChildren);
              intoChild = whenClause = null;
              Caf.each(
                this.labeledChildren.valueClauses,
                undefined,
                valueClause => {
                  let type, value;
                  ({ type, value } = valueClause);
                  switch (type) {
                    case "into":
                    case "returning":
                      intoChild = value;
                      break;
                    case "when":
                      whenClause = value;
                  }
                }
              );
              outputType = Caf.exists(outputType) && outputType.props.token;
              ({
                AccessorStn,
                ArrayStn,
                AssignmentStn,
                BinaryOperatorStn,
                ControlOperatorStn,
                FunctionDefinitionArgsStn,
                FunctionDefinitionArgStn,
                FunctionDefinitionStn,
                FunctionInvocationStn,
                IdentifierStn,
                ObjectStn,
                SimpleLiteralStn,
                StatementsStn
              } = SemanticTree);
              useExtendedEach = (() => {
                switch (outputType) {
                  case "find":
                    return true;
                  default:
                    return false;
                }
              })();
              basicEach = outputType === "each";
              variableDefinition = FunctionDefinitionArgsStn(
                (valueVarDef =
                  (Caf.exists(variableDefinition) &&
                    variableDefinition.children[0]) ||
                  (!basicEach &&
                    FunctionDefinitionArgStn(
                      IdentifierStn({
                        identifierHandle: new UniqueIdentifierHandle("v", false)
                      })
                    ))),
                (keyVarDef =
                  (Caf.exists(variableDefinition) &&
                    variableDefinition.children[1]) ||
                  (!basicEach &&
                    FunctionDefinitionArgStn(
                      IdentifierStn({
                        identifierHandle: new UniqueIdentifierHandle("k", false)
                      })
                    ))),
                (useExtendedEach || !basicEach) &&
                  FunctionDefinitionArgStn(
                    (intoIdentifer = IdentifierStn({
                      identifierHandle: new UniqueIdentifierHandle(
                        "into",
                        false
                      )
                    }))
                  ),
                useExtendedEach &&
                  FunctionDefinitionArgStn(
                    (brkIdentifer = IdentifierStn({
                      identifierHandle: new UniqueIdentifierHandle("brk", false)
                    }))
                  )
              );
              return false
                ? this.generateEach({
                    variableDefinition,
                    valueVarDef,
                    keyVarDef,
                    whenClause,
                    intoChild
                  })
                : (outputType === "object" || outputType === "array"
                    ? (lastBodyStatement = body
                        ? body.className === "StatementsStn"
                          ? ((bodyStatementsExceptLast = arrayWithAllButLast(
                              body.children
                            )),
                            peek(body.children))
                          : body
                        : ((bodyStatementsExceptLast = null), valueVarDef))
                    : (bodyWithDefault = body || valueVarDef),
                  (whenClauseWrapper = whenClause
                    ? actionStn => {
                        return StatementsStn(
                          ControlOperatorStn(
                            { operand: "if" },
                            whenClause,
                            actionStn
                          )
                        );
                      }
                    : actionStn => {
                        return actionStn;
                      }),
                  FunctionInvocationStn(
                    IdentifierStn({
                      identifier: `Caf.${Caf.toString(
                        useExtendedEach ? "extendedEach" : "each"
                      )}`
                    }),
                    iterable,
                    intoChild ||
                      (() => {
                        switch (outputType) {
                          case "object":
                            return ObjectStn();
                          case "array":
                            return ArrayStn();
                          case "each":
                            return SimpleLiteralStn({ value: "undefined" });
                          case "find":
                            return SimpleLiteralStn({ value: "undefined" });
                          case "reduce":
                            return null;
                          default:
                            return (() => {
                              throw new Error(
                                `not supported yet: ${Caf.toString(outputType)}`
                              );
                            })();
                        }
                      })(),
                    FunctionDefinitionStn(
                      { bound: true, returnIgnored: outputType !== "find" },
                      variableDefinition,
                      (() => {
                        switch (outputType) {
                          case "object":
                            return whenClauseWrapper(
                              StatementsStn(
                                bodyStatementsExceptLast,
                                AssignmentStn(
                                  AccessorStn(intoIdentifer, keyVarDef),
                                  lastBodyStatement
                                )
                              )
                            );
                          case "array":
                            return whenClauseWrapper(
                              StatementsStn(
                                bodyStatementsExceptLast,
                                FunctionInvocationStn(
                                  AccessorStn(
                                    intoIdentifer,
                                    IdentifierStn({ identifier: "push" })
                                  ),
                                  lastBodyStatement
                                )
                              )
                            );
                          case "each":
                            return whenClauseWrapper(body);
                          case "find":
                            return whenClause
                              ? body
                                ? StatementsStn(
                                    BinaryOperatorStn(
                                      { operator: "&&" },
                                      whenClause,
                                      StatementsStn(
                                        FunctionInvocationStn(brkIdentifer),
                                        body
                                      )
                                    )
                                  )
                                : StatementsStn(
                                    BinaryOperatorStn(
                                      { operator: "&&" },
                                      whenClause,
                                      StatementsStn(
                                        FunctionInvocationStn(brkIdentifer),
                                        valueVarDef
                                      )
                                    )
                                  )
                              : body
                                ? (body.type === "Statements" &&
                                  body.children.length > 1
                                    ? ((allButLast = body.children.slice(
                                        0,
                                        body.children.length - 1
                                      )),
                                      (body = peek(body.children)))
                                    : undefined,
                                  (foundTest =
                                    body.type === "Reference"
                                      ? BinaryOperatorStn(
                                          { operator: "&&" },
                                          body,
                                          StatementsStn(
                                            FunctionInvocationStn(brkIdentifer),
                                            body
                                          )
                                        )
                                      : BinaryOperatorStn(
                                          { operator: "&&" },
                                          AssignmentStn(
                                            IdentifierStn({
                                              identifierHandle: (baseIdentifierHandle = new UniqueIdentifierHandle(
                                                "_ret"
                                              ))
                                            }),
                                            body
                                          ),
                                          StatementsStn(
                                            FunctionInvocationStn(brkIdentifer),
                                            IdentifierStn({
                                              identifierHandle: baseIdentifierHandle
                                            })
                                          )
                                        )),
                                  StatementsStn(allButLast, foundTest))
                                : StatementsStn(
                                    BinaryOperatorStn(
                                      { operator: "&&" },
                                      valueVarDef,
                                      StatementsStn(
                                        FunctionInvocationStn(brkIdentifer),
                                        valueVarDef
                                      )
                                    )
                                  );
                        }
                      })()
                    )
                  ));
            };
            this.prototype.generateEach = function({
              variableDefinition,
              valueVarDef,
              keyVarDef,
              whenClause,
              intoChild
            }) {
              let FunctionInvocationStn,
                IdentifierStn,
                SimpleLiteralStn,
                FunctionDefinitionStn,
                withClause,
                iterable;
              ({
                FunctionInvocationStn,
                IdentifierStn,
                SimpleLiteralStn,
                FunctionDefinitionStn
              } = StnRegistry);
              ({ body: withClause, iterable } = this.labeledChildren);
              return FunctionInvocationStn(
                IdentifierStn({ identifier: "Caf.each2" }),
                iterable,
                intoChild != null
                  ? intoChild
                  : withClause || whenClause
                    ? SimpleLiteralStn({ value: "null" })
                    : undefined,
                withClause &&
                  FunctionDefinitionStn(
                    { bound: true },
                    variableDefinition,
                    withClause
                  ),
                whenClause &&
                  FunctionDefinitionStn(
                    { bound: true },
                    variableDefinition,
                    whenClause
                  )
              );
            };
          }
        ))
      );
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);

module.exports.addModules({
  FunctionDefinitionArgStn: __webpack_require__(62),
  ImportBodyStn: __webpack_require__(63),
  ImportStn: __webpack_require__(20),
  RootStn: __webpack_require__(64),
  StatementsStn: __webpack_require__(21),
  StringStn: __webpack_require__(65),
  SwitchWhenStn: __webpack_require__(66)
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);

module.exports.addModules({
  ArrayDestructuringStn: __webpack_require__(68),
  ArraySpreadElementStn: __webpack_require__(69),
  ArrayStn: __webpack_require__(70),
  BinaryOperatorStn: __webpack_require__(71),
  CatchStn: __webpack_require__(72),
  ControlOperatorStn: __webpack_require__(73),
  DestructuringAssignmentStn: __webpack_require__(74),
  DestructuringIdentifierStn: __webpack_require__(75),
  DoStn: __webpack_require__(76),
  FunctionDefinitionArgsStn: __webpack_require__(77),
  GlobalIdentifierStn: __webpack_require__(78),
  IdentifierStn: __webpack_require__(79),
  InterpolatedStringStn: __webpack_require__(80),
  LabeledDestructuringTargetStn: __webpack_require__(81),
  LetStn: __webpack_require__(82),
  NewInstanceStn: __webpack_require__(83),
  ObjectDestructuringStn: __webpack_require__(84),
  ObjectPropNameStn: __webpack_require__(85),
  ObjectPropValueStn: __webpack_require__(86),
  ObjectStn: __webpack_require__(87),
  ReferenceStn: __webpack_require__(88),
  RegExpStn: __webpack_require__(89),
  RequireStn: __webpack_require__(90),
  SemanticTokenStn: __webpack_require__(91),
  SimpleLiteralStn: __webpack_require__(92),
  SwitchStn: __webpack_require__(93),
  ThisStn: __webpack_require__(94),
  ThrowStn: __webpack_require__(95),
  TryStn: __webpack_require__(96),
  UnaryOperatorStn: __webpack_require__(97),
  UndefinedStn: __webpack_require__(98)
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

module.exports.addModules({
  AccessorStn: __webpack_require__(99),
  AssignmentStn: __webpack_require__(100),
  ClassStn: __webpack_require__(101),
  FunctionDefinitionStn: __webpack_require__(102),
  FunctionInvocationStn: __webpack_require__(103),
  ObjectLiteralAccessorStn: __webpack_require__(104),
  SuperStn: __webpack_require__(105)
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);

module.exports.addModules({
  CaptureStn: __webpack_require__(106),
  ComprehensionStn: __webpack_require__(107)
});


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(10);

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a negligible overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(10);
var binarySearch = __webpack_require__(114);
var ArraySet = __webpack_require__(30).ArraySet;
var base64VLQ = __webpack_require__(31);
var readWasm = __webpack_require__(32);
var wasm = __webpack_require__(118);

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return Promise.resolve().then(_ => {
    return sourceMap.sections != null
      ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
      : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
  });
}

SourceMapConsumer.initialize = opts => {
  readWasm.initialize(opts["lib/mappings.wasm"]);
};

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * Construct a new `SourceMapConsumer` from `rawSourceMap` and `sourceMapUrl`
 * (see the `SourceMapConsumer` constructor for details. Then, invoke the `async
 * function f(SourceMapConsumer) -> T` with the newly constructed consumer, wait
 * for `f` to complete, call `destroy` on the consumer, and return `f`'s return
 * value.
 *
 * You must not use the consumer after `f` completes!
 *
 * By using `with`, you do not have to remember to manually call `destroy` on
 * the consumer, since it will be called automatically once `f` completes.
 *
 * ```js
 * const xSquared = await SourceMapConsumer.with(
 *   myRawSourceMap,
 *   null,
 *   async function (consumer) {
 *     // Use `consumer` inside here and don't worry about remembering
 *     // to call `destroy`.
 *
 *     const x = await whatever(consumer);
 *     return x * x;
 *   }
 * );
 *
 * // You may not use that `consumer` anymore out here; it has
 * // been destroyed. But you can use `xSquared`.
 * console.log(xSquared);
 * ```
 */
SourceMapConsumer.with = function(rawSourceMap, sourceMapUrl, f) {
  // Note: The `acorn` version that `webpack` currently depends on doesn't
  // support `async` functions, and the nodes that we support don't all have
  // `.finally`. Therefore, this is written a bit more convolutedly than it
  // should really be.

  let consumer = null;
  const promise = new SourceMapConsumer(rawSourceMap, sourceMapUrl);
  return promise
    .then(c => {
      consumer = c;
      return f(c);
    })
    .then(x => {
      if (consumer) {
        consumer.destroy();
      }
      return x;
    }, e => {
      if (consumer) {
        consumer.destroy();
      }
      throw e;
    });
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    throw new Error("Subclasses must implement eachMapping");
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    throw new Error("Subclasses must implement allGeneratedPositionsFor");
  };

SourceMapConsumer.prototype.destroy =
  function SourceMapConsumer_destroy() {
    throw new Error("Subclasses must implement destroy");
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;

  this._computedColumnSpans = false;
  this._mappingsPtr = 0;
  this._wasm = null;

  return wasm().then(wasm => {
    this._wasm = wasm;
    return this;
  });
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    return new BasicSourceMapConsumer(aSourceMap.toString());
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

BasicSourceMapConsumer.prototype._getMappingsPtr = function () {
  if (this._mappingsPtr === 0) {
    this._parseMappings(this._mappings, this.sourceRoot);
  }

  return this._mappingsPtr;
};

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function BasicSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    const size = aStr.length;

    const mappingsBufPtr = this._wasm.exports.allocate_mappings(size);
    const mappingsBuf = new Uint8Array(this._wasm.exports.memory.buffer, mappingsBufPtr, size);
    for (var i = 0; i < size; i++) {
      mappingsBuf[i] = aStr.charCodeAt(i);
    }

    const mappingsPtr = this._wasm.exports.parse_mappings(mappingsBufPtr);

    if (!mappingsPtr) {
      const error = this._wasm.exports.get_last_error();
      let msg = `Error parsing mappings (code ${error}): `;

      // XXX: keep these error codes in sync with `fitzgen/source-map-mappings`.
      switch (error) {
        case 1:
          msg += "the mappings contained a negative line, column, source index, or name index";
          break;
        case 2:
          msg += "the mappings contained a number larger than 2**32";
          break;
        case 3:
          msg += "reached EOF while in the middle of parsing a VLQ";
          break;
        case 4:
          msg += "invalid base 64 character while parsing a VLQ";
          break
        default:
          msg += "unknown error code";
          break;
      }

      throw new Error(msg);
    }

    this._mappingsPtr = mappingsPtr;
  };

BasicSourceMapConsumer.prototype.eachMapping =
  function BasicSourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var sourceRoot = this.sourceRoot;

    this._wasm.withMappingCallback(
      mapping => {
        if (mapping.source !== null) {
          mapping.source = this._sources.at(mapping.source);
          mapping.source = util.computeSourceURL(sourceRoot, mapping.source, this._sourceMapURL);

          if (mapping.name !== null) {
            mapping.name = this._names.at(mapping.name);
          }
        }

        aCallback.call(context, mapping);
      },
      () => {
        switch (order) {
        case SourceMapConsumer.GENERATED_ORDER:
          this._wasm.exports.by_generated_location(this._getMappingsPtr());
          break;
        case SourceMapConsumer.ORIGINAL_ORDER:
          this._wasm.exports.by_original_location(this._getMappingsPtr());
          break;
        default:
          throw new Error("Unknown order of iteration.");
        }
      }
    );
  };

BasicSourceMapConsumer.prototype.allGeneratedPositionsFor =
  function BasicSourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    var originalLine = util.getArg(aArgs, 'line');
    var originalColumn = aArgs.column || 0;

    source = this._findSourceIndex(source);
    if (source < 0) {
      return [];
    }

    if (originalLine < 1) {
      throw new Error("Line numbers must be >= 1");
    }

    if (originalColumn < 0) {
      throw new Error("Column numbers must be >= 0");
    }

    var mappings = [];

    this._wasm.withMappingCallback(
      m => {
        let lastColumn = m.lastGeneratedColumn;
        if (this._computedColumnSpans && lastColumn === null) {
          lastColumn = Infinity;
        }
        mappings.push({
          line: m.generatedLine,
          column: m.generatedColumn,
          lastColumn,
        });
      }, () => {
        this._wasm.exports.all_generated_locations_for(
          this._getMappingsPtr(),
          source,
          originalLine - 1,
          'column' in aArgs,
          originalColumn
        );
      }
    );

    return mappings;
  };

BasicSourceMapConsumer.prototype.destroy =
  function BasicSourceMapConsumer_destroy() {
    if (this._mappingsPtr !== 0) {
      this._wasm.exports.free_mappings(this._mappingsPtr);
      this._mappingsPtr = 0;
    }
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    if (this._computedColumnSpans) {
      return;
    }

    this._wasm.exports.compute_column_spans(this._getMappingsPtr());
    this._computedColumnSpans = true;
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    if (needle.generatedLine < 1) {
      throw new Error("Line numbers must be >= 1");
    }

    if (needle.generatedColumn < 0) {
      throw new Error("Column numbers must be >= 0");
    }

    var bias = util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND);
    if (bias == null) {
      bias = SourceMapConsumer.GREATEST_LOWER_BOUND;
    }

    var mapping;
    this._wasm.withMappingCallback(m => mapping = m, () => {
      this._wasm.exports.original_location_for(
        this._getMappingsPtr(),
        needle.generatedLine - 1,
        needle.generatedColumn,
        bias
      );
    });

    if (mapping) {
      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }

        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }

        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    if (needle.originalLine < 1) {
      throw new Error("Line numbers must be >= 1");
    }

    if (needle.originalColumn < 0) {
      throw new Error("Column numbers must be >= 0");
    }

    var bias = util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND);
    if (bias == null) {
      bias = SourceMapConsumer.GREATEST_LOWER_BOUND;
    }

    var mapping;
    this._wasm.withMappingCallback(m => mapping = m, () => {
      this._wasm.exports.generated_location_for(
        this._getMappingsPtr(),
        needle.source,
        needle.originalLine - 1,
        needle.originalColumn,
        bias
      );
    });

    if (mapping) {
      if (mapping.source === needle.source) {
        let lastColumn = mapping.lastGeneratedColumn;
        if (this._computedColumnSpans && lastColumn === null) {
          lastColumn = Infinity;
        }
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn,
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  return Promise.all(sections.map(s => {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    const consumer = new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL);
    return consumer.then(consumer => {
      return {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: offsetLine + 1,
          generatedColumn: offsetColumn + 1
        },
        consumer: consumer
      };
    });
  })).then(sections => {
    this._sections = sections;
    return this;
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

IndexedSourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(IndexedSourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._sortGeneratedMappings();
    }

    return this.__generatedMappings;
  }
});

IndexedSourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(IndexedSourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._sortOriginalMappings();
    }

    return this.__originalMappings;
  }
});

IndexedSourceMapConsumer.prototype.__generatedMappingsUnsorted = null;
Object.defineProperty(IndexedSourceMapConsumer.prototype, '_generatedMappingsUnsorted', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappingsUnsorted) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappingsUnsorted;
  }
});

IndexedSourceMapConsumer.prototype.__originalMappingsUnsorted = null;
Object.defineProperty(IndexedSourceMapConsumer.prototype, '_originalMappingsUnsorted', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappingsUnsorted) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappingsUnsorted;
  }
});

IndexedSourceMapConsumer.prototype._sortGeneratedMappings =
  function IndexedSourceMapConsumer_sortGeneratedMappings() {
    const mappings = this._generatedMappingsUnsorted;
    mappings.sort(util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = mappings;
  };

IndexedSourceMapConsumer.prototype._sortOriginalMappings =
  function IndexedSourceMapConsumer_sortOriginalMappings() {
    const mappings = this._originalMappingsUnsorted;
    mappings.sort(util.compareByOriginalPositions);
    this.__originalMappings = mappings;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    const generatedMappings = this.__generatedMappingsUnsorted = [];
    const originalMappings = this.__originalMappingsUnsorted = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var sectionMappings = [];
      section.consumer.eachMapping(m => sectionMappings.push(m));

      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          this._names.add(mapping.name);
          name = this._names.indexOf(mapping.name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          originalMappings.push(adjustedMapping);
        }
      }
    }
  };

IndexedSourceMapConsumer.prototype.eachMapping =
  function IndexedSourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = null;
      if (mapping.source !== null) {
        source = this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      }
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
IndexedSourceMapConsumer.prototype._findMapping =
  function IndexedSourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                                aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

IndexedSourceMapConsumer.prototype.allGeneratedPositionsFor =
  function IndexedSourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    if (needle.originalLine < 1) {
      throw new Error("Line numbers must be >= 1");
    }

    if (needle.originalColumn < 0) {
      throw new Error("Column numbers must be >= 0");
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          let lastColumn = mapping.lastGeneratedColumn;
          if (this._computedColumnSpans && lastColumn === null) {
            lastColumn = Infinity;
          }
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn,
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          let lastColumn = mapping.lastGeneratedColumn;
          if (this._computedColumnSpans && lastColumn === null) {
            lastColumn = Infinity;
          }
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn,
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

IndexedSourceMapConsumer.prototype.destroy =
  function IndexedSourceMapConsumer_destroy() {
    for (var i = 0; i < this._sections.length; i++) {
      this._sections[i].consumer.destroy();
    }
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(33).SourceMapGenerator;
var util = __webpack_require__(10);

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

const readWasm = __webpack_require__(32);

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.lastGeneratedColumn = null;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

let cachedWasm = null;

module.exports = function wasm() {
  if (cachedWasm) {
    return cachedWasm;
  }

  let currentCallback = null;

  cachedWasm = readWasm().then(buffer => {
      return WebAssembly.instantiate(buffer, {
        env: {
          mapping_callback: function (
            generatedLine,
            generatedColumn,

            hasLastGeneratedColumn,
            lastGeneratedColumn,

            hasOriginal,
            source,
            originalLine,
            originalColumn,

            hasName,
            name
          ) {
            const mapping = new Mapping;
            // JS uses 1-based line numbers, wasm uses 0-based.
            mapping.generatedLine = generatedLine + 1;
            mapping.generatedColumn = generatedColumn;

            if (hasLastGeneratedColumn) {
              // JS uses inclusive last generated column, wasm uses exclusive.
              mapping.lastGeneratedColumn = lastGeneratedColumn - 1;
            }

            if (hasOriginal) {
              mapping.source = source;
              // JS uses 1-based line numbers, wasm uses 0-based.
              mapping.originalLine = originalLine + 1;
              mapping.originalColumn = originalColumn;

              if (hasName) {
                mapping.name = name;
              }
            }

            currentCallback(mapping);
          },

          start_all_generated_locations_for: function () { console.time("all_generated_locations_for"); },
          end_all_generated_locations_for: function () { console.timeEnd("all_generated_locations_for"); },

          start_compute_column_spans: function () { console.time("compute_column_spans"); },
          end_compute_column_spans: function () { console.timeEnd("compute_column_spans"); },

          start_generated_location_for: function () { console.time("generated_location_for"); },
          end_generated_location_for: function () { console.timeEnd("generated_location_for"); },

          start_original_location_for: function () { console.time("original_location_for"); },
          end_original_location_for: function () { console.timeEnd("original_location_for"); },

          start_parse_mappings: function () { console.time("parse_mappings"); },
          end_parse_mappings: function () { console.timeEnd("parse_mappings"); },

          start_sort_by_generated_location: function () { console.time("sort_by_generated_location"); },
          end_sort_by_generated_location: function () { console.timeEnd("sort_by_generated_location"); },

          start_sort_by_original_location: function () { console.time("sort_by_original_location"); },
          end_sort_by_original_location: function () { console.timeEnd("sort_by_original_location"); },
        }
      });
  }).then(wasm => {
    return {
      exports: wasm.instance.exports,
      withMappingCallback: (mappingCallback, f) => {
        currentCallback = mappingCallback;
        try {
          f();
        } finally {
          currentCallback = null;
        }
      }
    };
  }).then(null, e => {
    cachedWasm = null;
    throw e;
  });

  return cachedWasm;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(33).SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(116).SourceMapConsumer;
exports.SourceNode = __webpack_require__(117).SourceNode;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("art-binary");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("art-object-tree-factory");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("caffeine-mc");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("neptune-namespaces");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);