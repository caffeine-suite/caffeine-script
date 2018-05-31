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
/******/ 	return __webpack_require__(__webpack_require__.s = 110);
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
      "log",
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
      log,
      Error,
      isString,
      merge
    ) => {
      let createObjectTreeFactory, SourceNode, binary, BaseStn;
      ({ createObjectTreeFactory } = __webpack_require__(116));
      ({ SourceNode } = __webpack_require__(25));
      ({ binary } = __webpack_require__(115));
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
          let sourceNodeLineColumnScratch, applyRequiredParens, applyParens;
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
            return __webpack_require__(4).register(
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
            log.warn(
              `WARNING: toSourceNode not overridden in ${Caf.toString(
                this.class.name
              )}. Falling back to old toJs().`
            );
            return this.createSourceNode(this.toJs(options));
          };
          this.prototype.toJsUsingSourceNode = function(options = {}) {
            let debug,
              inlineMap,
              source,
              sourceMap,
              sourceFile,
              sourceNode,
              out,
              js;
            ({
              debug,
              inlineMap,
              source = this.source,
              sourceMap,
              sourceFile = this.sourceFile
            } = options);
            sourceNode = this.toSourceNode(options);
            out =
              inlineMap || sourceMap
                ? (({ js, sourceMap } = sourceNode.generate(
                    source,
                    sourceFile
                  )),
                  inlineMap
                    ? (js = `${Caf.toString(
                        js
                      )}\n//# sourceMappingURL=${Caf.toString(
                        binary(sourceMap).toDataUri("application/json", true)
                      )}\n//# sourceURL=${Caf.toString(sourceFile)}`)
                    : undefined,
                  { js, sourceMap })
                : { js: sourceNode.toString() };
            if (debug) {
              out.sourceNode = sourceNode;
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
            return Caf.array(this.children, c => c.toJs(options)).join(joiner);
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
          this.prototype.toFunctionBodyJsArray = function(returnAction = true) {
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return __webpack_require__(6).merge(
    __webpack_require__(10),
    __webpack_require__(8),
    __webpack_require__(6),
    {
      StnRegistry: __webpack_require__(4),
      javaScriptReservedWords: __webpack_require__(20)
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
    [global, __webpack_require__(6), __webpack_require__(10)],
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
/***/ (function(module, exports) {

module.exports = require("art-standard-lib");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var SemanticTree,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(13)).addNamespace('SemanticTree', SemanticTree = (function(superClass) {
  extend(SemanticTree, superClass);

  function SemanticTree() {
    return SemanticTree.__super__.constructor.apply(this, arguments);
  }

  return SemanticTree;

})(Neptune.PackageNamespace));

__webpack_require__(29);

__webpack_require__(30);

__webpack_require__(17);

__webpack_require__(31);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["escapeRegExp", "escapeJavascriptString"],
    [global, __webpack_require__(6)],
    (escapeRegExp, escapeJavascriptString) => {
      let legalUnquotedPropName;
      return {
        deescapeSpaces: function(string) {
          return Caf.array(
            string.split(/((?:\\\\)+)/),
            (str, i) => (Caf.mod(i, 2) === 0 ? str.replace(/\\ /g, " ") : str)
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
          return Caf.array(
            split,
            (str, i) =>
              Caf.mod(i, 2) === 0 ? str.replace(charsRegExp, "\\$1") : str
          ).join("");
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
      UniqueIdentifierHandle = __webpack_require__(12);
      return function(toExtend) {
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
                  this._identifiersAssigned || (this._identifiersAssigned = {})
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
                  (this.identifiersAssigned[identifier] = initializer || true))
                : undefined;
            };
            this.getter({
              uniqueIdentifier: function(preferredName) {
                preferredName = normalizePerferredName(preferredName);
                return this.getUniqueIdentifierHandle(preferredName).identifier;
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
              this.boundUniqueIdentifiers[identifier] = uniqueIdentifierHandle;
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
                ? Caf.each2(
                    this._uniqueIdentifierHandles,
                    uniqueIdentifierHandle => uniqueIdentifierHandle.identifier
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
                ? ((identifiers = Caf.array(identifiers, null, identifier =>
                    identifier.match(/=/)
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
              Caf.each2(this.getChildrenToUpdateScope(), child =>
                child.updateScope(this)
              );
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
              Caf.object(
                this._identifiersUsed,
                null,
                (v, identifier) => !assignedInThisOrParentScope[identifier],
                map
              );
              Caf.each2(
                this._childScopes,
                childScope =>
                  childScope.generateImportMap(
                    map,
                    assignedInThisOrParentScope
                  ),
                childScope => !childScope.isImports
              );
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
                return Caf.array(
                  this.identifiersAssigned,
                  (initializer, identifier) =>
                    isString(initializer)
                      ? `${Caf.toString(identifier)} = ${Caf.toString(
                          initializer
                        )}`
                      : initializer.toJsExpression != null
                        ? `${Caf.toString(identifier)} = ${Caf.toString(
                            initializer.toJsExpression()
                          )}`
                        : identifier,
                  (initializer, identifier) =>
                    !identifiersAssignedInParentScopes ||
                    !identifiersAssignedInParentScopes[identifier]
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
                return Caf.object(
                  this.identifiersUsed,
                  (v, k) => true,
                  (v, k) => !assigned[k]
                );
              },
              identifiersUsedButNotAssigned: function() {
                let assigned, ret;
                assigned = this.identifiersAssignedInThisOrParentScopes;
                ret = Caf.object(
                  this.identifiersUsed,
                  (v, k) => true,
                  (v, k) => !assigned[k]
                );
                Caf.each2(this._childScopes, childScope =>
                  mergeInto(ret, childScope.identifiersUsedButNotAssigned)
                );
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
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("art-class-system");

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
      StnRegistry = __webpack_require__(4);
      return (AccessorChainStn = Caf.defClass(
        class AccessorChainStn extends __webpack_require__(24) {},
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
            Caf.each2(
              accessorChain,
              (accessor, i) => {
                let key, isFunctionInvocation, reset;
                ({ key, isFunctionInvocation } = accessor);
                if (isArray(key)) {
                  key = Caf.array(key, kk => kk.transform());
                } else {
                  key = key.transform();
                }
                return accessor.existanceTest
                  ? ((reset = accessorChain.slice(i)),
                    (done = true),
                    (value = this._createExistanceAccessorStn(
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
                    )))
                  : (value = this._createPostTransformedAccessorStn(
                      value,
                      key,
                      accessor
                    ));
              },
              (accessor, i) => !done
            );
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
      ));
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

var CaffeineScript,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(118)).addNamespace('CaffeineScript', CaffeineScript = (function(superClass) {
  extend(CaffeineScript, superClass);

  function CaffeineScript() {
    return CaffeineScript.__super__.constructor.apply(this, arguments);
  }

  CaffeineScript.version = __webpack_require__(33).version;

  return CaffeineScript;

})(Neptune.PackageNamespace));

__webpack_require__(26);

__webpack_require__(28);

__webpack_require__(7);


/***/ }),
/* 14 */
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
      StnRegistry = __webpack_require__(4);
      return (CafParseNodeBaseClass = Caf.defClass(
        class CafParseNodeBaseClass extends Nodes.Node {},
        function(CafParseNodeBaseClass, classSuper, instanceSuper) {
          this._createSubclassBase = function() {
            let NodeSubclass;
            return (NodeSubclass = Caf.defClass(
              class NodeSubclass extends this {}
            ));
          };
          this.prototype.getMatchStns = function() {
            let stn;
            stn = null;
            return Caf.array(
              this.matches,
              m => stn,
              m => (stn = Caf.isF(m.getStn) && m.getStn())
            );
          };
          this.prototype.getStnFactory = function() {
            return StnRegistry.get(this.stnFactory);
          };
          this.prototype.getStnChildren = function(left) {
            let stn;
            return this.stnChildren
              ? isFunction(this.stnChildren)
                ? this.stnChildren()
                : this.stnChildren
              : ((stn = null),
                Caf.array(
                  this.nonStnExtensionMatches,
                  m => stn,
                  m => (stn = m.getStn(left))
                ));
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
              return Caf.array(
                this.presentMatches,
                null,
                m => m.getStn && m.isStnExtension
              );
            },
            nonStnExtensionMatches: function() {
              return Caf.array(
                this.presentMatches,
                null,
                m => m.getStn && !m.isStnExtension
              );
            }
          });
          this.prototype.getStn = function(left) {
            let stn, factory, x, currentStnLabel;
            stn = (factory = this.getStnFactory())
              ? factory(
                  { parseTreeNode: this },
                  (Caf.isF(this.stnProps) && this.stnProps()) || this.stnProps,
                  left,
                  this.getStnChildren()
                )
              : ((x = this.getStnChildren(left)),
                x.length === 1 ? x[0] : x.length === 0 ? left : x);
            Caf.each2(this.stnExtensionMatches, extension => {
              let sourceIndex;
              ({ sourceIndex } = stn);
              stn = extension.getStn(stn);
              return (stn.sourceIndex = sourceIndex);
            });
            if (Caf.exists(stn) && stn.props) {
              currentStnLabel = stn.props.label;
              if (!currentStnLabel || this.label) {
                stn.props.label = this.label || this.ruleName;
                stn.props.pluralLabel = this.pluralLabel || this.pluralRuleName;
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
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let vlqBaseShift,
      vlqBase,
      vlqBaseMask,
      vlqContinuationBit,
      intToCharMap,
      charMapToInt,
      getBase64char,
      toVlqSigned,
      fromVlqSigned,
      encodeVlq,
      readVlq,
      readVlqSequence;
    return {
      vlqBaseShift: (vlqBaseShift = 5),
      vlqBase: (vlqBase = 1 << vlqBaseShift),
      vlqBaseMask: (vlqBaseMask = vlqBase - 1),
      vlqContinuationBit: (vlqContinuationBit = vlqBase),
      intToCharMap: (intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        ""
      )),
      charMapToInt: (charMapToInt = Caf.object(intToCharMap, (v, k) => k)),
      getBase64char: (getBase64char = function(number) {
        return intToCharMap[number];
      }),
      toVlqSigned: (toVlqSigned = function(value) {
        return value < 0 ? (-value << 1) + 1 : value << 1;
      }),
      fromVlqSigned: (fromVlqSigned = function(value) {
        return value & 1 ? 0 - (value >> 1) : value >> 1;
      }),
      encodeVlq: (encodeVlq = function(value) {
        let encoded, vlq, digit;
        return value === 0
          ? "A"
          : ((encoded = ""),
            (vlq = toVlqSigned(value)),
            (() => {
              while (vlq > 0) {
                digit = vlq & vlqBaseMask;
                encoded += getBase64char(
                  0 < (vlq >>>= vlqBaseShift)
                    ? digit | vlqContinuationBit
                    : digit
                );
              }
            })(),
            encoded);
      }),
      readVlq: (readVlq = function(string, resultObject = { index: 0 }) {
        let index, number, shiftAmount, read;
        ({ index } = resultObject);
        number = 0;
        shiftAmount = 0;
        return charMapToInt[string[index]] != null
          ? ((() => {
              while (
                vlqContinuationBit & (read = charMapToInt[string[index++]])
              ) {
                number += (read & vlqBaseMask) << shiftAmount;
                shiftAmount += vlqBaseShift;
              }
            })(),
            (resultObject.index = index),
            (resultObject.value = fromVlqSigned(
              number + (read << shiftAmount)
            )),
            resultObject)
          : undefined;
      }),
      readVlqSequence: (readVlqSequence = function(
        string,
        resultObject = { index: 0 }
      ) {
        let out, result;
        out = [];
        while ((result = readVlq(string, resultObject))) {
          out.push(result.value);
        }
        return out;
      })
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 16 */
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
          this.leftAssociativityByPrecidence = Caf.array(
            this.precidence,
            (v, i) => {
              let leftAssociativityByPrecidence, operators;
              [leftAssociativityByPrecidence, ...operators] = v;
              Caf.each2(operators, op => (this.opsToPrecidence[op] = i));
              return leftAssociativityByPrecidence === "left";
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
          this.binaryOperatorToSourceNodeArray = function(operand, a, b, aStn) {
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
                  return (() => {
                    switch (aStn.type) {
                      case "This":
                      case "Identifier":
                      case "Reference":
                        return [a, " != null ? ", a, " : ", b];
                      default:
                        return [
                          CoffeeScriptGlobal,
                          ".existsOr(",
                          a,
                          ", (() => {return ",
                          b,
                          "})())"
                        ];
                    }
                  })();
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
          this.getPrecidenceLevelIsLeftAssociative = p =>
            this.leftAssociativityByPrecidence[p];
          this.operatorIsInfixJs = operator => !this.operatorMap[operator];
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
              Caf.each2(
                operators,
                (op, i) =>
                  lowestPrecidence > (p = this.getOpPrecidence(op))
                    ? ((firstOccurance = lastOccurance = i),
                      (lowestPrecidence = p))
                    : lowestPrecidence === p
                      ? (lastOccurance = i)
                      : undefined
              );
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var JustToJsWithTransforms,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(7)).addNamespace('JustToJsWithTransforms', JustToJsWithTransforms = (function(superClass) {
  extend(JustToJsWithTransforms, superClass);

  function JustToJsWithTransforms() {
    return JustToJsWithTransforms.__super__.constructor.apply(this, arguments);
  }

  return JustToJsWithTransforms;

})(Neptune.PackageNamespace));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
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
      __webpack_require__(6),
      __webpack_require__(10),
      __webpack_require__(5),
      __webpack_require__(15)
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
            this._lastSourceIndex = -1;
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
                return merge({
                  version: 3,
                  file: this.generatedFileName,
                  sourceRoot: this.sourceFileName && "",
                  sources: this.sourceFileName && [this.sourceFileName],
                  sourceContent: [this.source],
                  names: [],
                  mappings: this.mappings
                });
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 19 */
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
      __webpack_require__(14)
    ],
    (Parser, isFunction) => {
      let CaffeineScriptParser;
      return (CaffeineScriptParser = Caf.defClass(
        class CaffeineScriptParser extends Parser {},
        function(CaffeineScriptParser, classSuper, instanceSuper) {
          this.nodeBaseClass = __webpack_require__(14);
          Caf.each2(
            __webpack_require__(27).modules,
            mod => (isFunction(mod) ? mod.call(this) : this.rule(mod))
          );
          this.prototype.parse = function(source, options) {
            return instanceSuper.parse.call(
              this,
              __webpack_require__(21).preprocess(source),
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let words, out;
  words = __webpack_require__(6).w(
    "abstract  else        instanceof  super boolean   enum        int         switch break     export      interface   synchronized byte      extends     let         this case      false       long        throw catch     final       native      throws char      finally     new         transient class     float       null        true const     for         package     try continue  function    private     typeof debugger  goto        protected   var default   if          public      void delete    implements  return      volatile do        import      short       while double    in          static      with"
  );
  return Caf.each2(words, word => (out[word] = true), null, (out = {}));
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 21 */
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
          this.hasMixedIndentation = source =>
            mixedIndentationRegexp.test(source) ||
            (tabIndentationRegexp.test(source) &&
              spaceIndentationRegexp.test(source));
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
                Caf.each2(
                  (lines = source.split("\n")),
                  (line, i) => {
                    let indentLevel, commentOnlyLine;
                    indentLevel = getIndentLevel(line);
                    if (indentLevel <= blockCommentIndentLevel) {
                      inBlockComment = false;
                    }
                    return !inBlockComment
                      ? (commentOnlyLine = lineWithOnlyCommentRegexp.test(line))
                        ? (!(lastCommentLineStartIndex >= 0)
                            ? (lastCommentLineStartIndex = i)
                            : undefined,
                          (inBlockComment = blockCommentStartRegexp.test(line))
                            ? (blockCommentIndentLevel = indentLevel)
                            : undefined)
                        : (lastCommentLineStartIndex >= 0
                            ? (fixCommentLines(
                                lines,
                                max(indentLevel, previousIndentLevel),
                                lastCommentLineStartIndex,
                                i
                              ),
                              (lastCommentLineStartIndex = -1))
                            : undefined,
                          (previousIndentLevel = indentLevel))
                      : undefined;
                  },
                  (line, i) => nonBlankLineRegexp.test(line)
                ),
                fixCommentLines(
                  lines,
                  previousIndentLevel,
                  lastCommentLineStartIndex,
                  lines.length
                ),
                lines.join("\n"))
              : source;
          };
          this.preprocess = source =>
            this.normalizeComments(this.normalizeIndentation(source));
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 22 */
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
              bodyMain,
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
                (bodyMain = importBody.toJs({ returnAction: true })),
                (bodyJs = compactFlatten([
                  importBody.getAutoLets(),
                  bodyMain
                ]).join("; ")),
                identifiersToImport.length > 0
                  ? ((importsJs = compactFlatten([
                      importFromCaptureIdentifier || "global",
                      Caf.array(importFromList, c => c.toJsExpression())
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
              bodyMainNodes,
              bodySourceNodes,
              lets,
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
                (bodyMainNodes = importBody.toSourceNode({
                  returnAction: true
                })),
                (bodySourceNodes = [
                  (lets = importBody.getAutoLets()) ? lets + "; " : undefined,
                  bodyMainNodes
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
/* 23 */
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
          let expression, returnAction;
          if (options) {
            ({ expression, returnAction } = options);
          }
          return expression
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
            : this._getChildrenStatementsJsArray(returnAction).join("; ");
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
          return Caf.array((lines = this.children), (c, i) => {
            let statement;
            return returnAction != null && i === lines.length - 1
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
                : c.toJsExpression({ returnValueIsIgnored: true });
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
          Caf.array(
            (lines = this.children),
            (c, i) => {
              let a, childExpression;
              if (i > 0) {
                out.push(generateStatements ? "; " : ", ");
              }
              a =
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
                        returnValueIsIgnored: i < lines.length - 1
                      });
              return a;
            },
            null,
            (out = [])
          );
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let UniqueIdentifierHandle, StnRegistry, ValueBaseCaptureStn;
    UniqueIdentifierHandle = __webpack_require__(12);
    StnRegistry = __webpack_require__(4);
    return (ValueBaseCaptureStn = Caf.defClass(
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
          return accessorStn.isAccessor && !accessorStn.children[0].isReference
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
          let AssignmentStn, ReferenceStn, IdentifierStn, baseIdentifierHandle;
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
                value2: ReferenceStn({ identifierHandle: baseIdentifierHandle })
              });
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);

module.exports.addModules({
  Base64: __webpack_require__(15),
  SourceMapConsumer: __webpack_require__(35),
  SourceMapGenerator: __webpack_require__(18),
  SourceNode: __webpack_require__(36)
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var CafSourceMap,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(13)).addNamespace('CafSourceMap', CafSourceMap = (function(superClass) {
  extend(CafSourceMap, superClass);

  function CafSourceMap() {
    return CafSourceMap.__super__.constructor.apply(this, arguments);
  }

  return CafSourceMap;

})(Neptune.PackageNamespace));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);

module.exports.addModules({
  Accessors: __webpack_require__(38),
  ArrayLiterals: __webpack_require__(39),
  Assignment: __webpack_require__(40),
  Blocks: __webpack_require__(41),
  Classes: __webpack_require__(42),
  Comments: __webpack_require__(43),
  Comprehensions: __webpack_require__(44),
  ControlStructures: __webpack_require__(45),
  DestructuringAssignment: __webpack_require__(46),
  Expressions: __webpack_require__(47),
  Functions: __webpack_require__(48),
  KeywordLiterals: __webpack_require__(49),
  Literals: __webpack_require__(50),
  NumberLiterals: __webpack_require__(51),
  ObjectLiterals: __webpack_require__(52),
  Operators: __webpack_require__(53),
  RegExp: __webpack_require__(54),
  Require: __webpack_require__(55),
  Root: __webpack_require__(56),
  Statements: __webpack_require__(57),
  StringLiterals: __webpack_require__(58),
  TagMacros: __webpack_require__(59),
  Tokens: __webpack_require__(60),
  ValueLists: __webpack_require__(61),
  Values: __webpack_require__(62)
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Rules,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(13)).addNamespace('Rules', Rules = (function(superClass) {
  extend(Rules, superClass);

  function Rules() {
    return Rules.__super__.constructor.apply(this, arguments);
  }

  return Rules;

})(Neptune.PackageNamespace));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var ComplexToJs,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(7)).addNamespace('ComplexToJs', ComplexToJs = (function(superClass) {
  extend(ComplexToJs, superClass);

  function ComplexToJs() {
    return ComplexToJs.__super__.constructor.apply(this, arguments);
  }

  return ComplexToJs;

})(Neptune.PackageNamespace));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var JustToJs,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(7)).addNamespace('JustToJs', JustToJs = (function(superClass) {
  extend(JustToJs, superClass);

  function JustToJs() {
    return JustToJs.__super__.constructor.apply(this, arguments);
  }

  return JustToJs;

})(Neptune.PackageNamespace));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var JustTransforms,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(7)).addNamespace('JustTransforms', JustTransforms = (function(superClass) {
  extend(JustTransforms, superClass);

  function JustTransforms() {
    return JustTransforms.__super__.constructor.apply(this, arguments);
  }

  return JustTransforms;

})(Neptune.PackageNamespace));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

module.exports.addModules({
  AccessorChainStn: __webpack_require__(11),
  BaseStn: __webpack_require__(2),
  ComprehensionValueClauseStn: __webpack_require__(68),
  ScopeStnMixin: __webpack_require__(9),
  UniqueIdentifierHandle: __webpack_require__(12),
  ValueBaseCaptureStn: __webpack_require__(24)
});

__webpack_require__(111);

__webpack_require__(112);

__webpack_require__(113);

__webpack_require__(114);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {"author":"Shane Brinkman-Davis Delamore, Imikimi LLC","config":{"blanket":{"pattern":"source"}},"dependencies":{"art-binary":"*","art-build-configurator":"*","art-class-system":"*","art-config":"*","art-object-tree-factory":"*","art-standard-lib":"*","art-testbench":"*","bluebird":"^3.5.0","caffeine-eight":"*","caffeine-mc":"*","caffeine-script":"*","caffeine-script-runtime":"*","case-sensitive-paths-webpack-plugin":"^2.1.2","chai":"^4.0.1","coffee-loader":"^0.7.3","coffee-script":"^1.12.6","colors":"^1.2.1","commander":"^2.15.1","css-loader":"^0.28.4","dateformat":"^3.0.3","detect-node":"^2.0.3","fs-extra":"^5.0.0","glob":"^7.1.2","glob-promise":"^3.4.0","json-loader":"^0.5.4","mocha":"^3.4.2","neptune-namespaces":"*","script-loader":"^0.7.0","style-loader":"^0.18.1","webpack":"^2.6.1","webpack-dev-server":"^2.4.5","webpack-merge":"^4.1.0","webpack-node-externals":"^1.6.0"},"description":"CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that empowers you to get the most out of any JavaScript runtime.","license":"ISC","name":"caffeine-script","repository":{"type":"git","url":"git@github.com:shanebdavis/caffeine-script.git"},"scripts":{"build":"caf -v -p -C -c cafInCaf -o source","perf":"nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf","start":"webpack-dev-server --hot --inline --progress","test":"nn -s;mocha -u tdd --compilers coffee:coffee-script/register","testInBrowser":"webpack-dev-server --progress"},"version":"0.57.3"}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);

module.exports.includeInNamespace(__webpack_require__(37)).addModules({
  CaffeineScriptParser: __webpack_require__(19),
  CafParseNodeBaseClass: __webpack_require__(14),
  JavaScriptReservedWords: __webpack_require__(20),
  Lib: __webpack_require__(8),
  OperatorHelper: __webpack_require__(16),
  Preprocessors: __webpack_require__(21),
  StandardImport: __webpack_require__(3),
  StnRegistry: __webpack_require__(4)
});

__webpack_require__(25);

__webpack_require__(27);

__webpack_require__(32);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "readVlqSequence", "Error", "String", "JSON"],
    [
      global,
      __webpack_require__(6),
      __webpack_require__(10),
      __webpack_require__(5),
      __webpack_require__(15)
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
            sources: function() {
              return this.sourceMap.sources;
            },
            names: function() {
              return this.sourceMap.names;
            },
            inspectedObjects: function() {
              return {
                sourceMap: this.sourceMap,
                decodedMappings: this.decodedMappings
              };
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
                      result.generatedColumn = 0;
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
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
      __webpack_require__(6),
      __webpack_require__(10),
      { SourceMapGenerator: __webpack_require__(18) }
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "mergeInto"],
    [global, __webpack_require__(6)],
    (log, mergeInto) => {
      __webpack_require__(32);
      return {
        version: __webpack_require__(33).version,
        compile: function(source, options = {}) {
          let bare,
            inlineMap,
            sourceMap,
            sourceFile,
            transformedStn,
            stn,
            parseTree,
            e,
            cafTemp;
          return (() => {
            try {
              ({ bare, inlineMap, sourceMap, sourceFile } = options);
              transformedStn = (stn = (parseTree = __webpack_require__(19).parse(
                source,
                options
              )).getStn())
                .validateAll()
                .transform();
              return {
                compiled: transformedStn.toJsUsingSourceNode({
                  module: !bare,
                  bare,
                  inlineMap,
                  sourceMap,
                  sourceFile
                })
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
                mergeInto(e.info, { options, parseTree, stn, transformedStn });
              }
              return (() => {
                throw e;
              })();
            }
          })();
        }
      };
    }
  );
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    return function() {
      this.rule({
        withOrDo: /(with|do)\b/,
        comprehensionValueClauseType: /(from|in|into|returning|when|with|with-key|to|by|til|do)\b(?!-)/
      });
      this.rule(
        {
          comprehensionOutputType: /(object|array|reduce|each|find)\b/,
          comprehensionIterationType: /(from|in|to|til)\b/
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
        unlabeledFromClause: "keywordLabeledStatementsWithOneLessBlock",
        comprehensionBody: "block"
      });
      return this.rule(
        {
          comprehension:
            "outputType:comprehensionOutputType _ variableDefinition:comprehensionVariableDef_? iterable:unlabeledFromClause? valueClause:comprehensionValueClause* body:comprehensionBody?"
        },
        { stnFactory: "ComprehensionStn" }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 45 */
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
/* 46 */
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
/* 47 */
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
      ({ matchBlock } = Extensions.IndentBlocks);
      upToButNotEol = /[^\n]*/y;
      return function() {
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
        oneLessBlockSubparser = rule =>
          function(parentNode) {
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
          stnFactory: "NumberLiteralStn",
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
/* 52 */
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
                  children = Caf.array(
                    this.getMatchStns(),
                    m => (m instanceof ObjectStn.class ? m.children : m)
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
              { thisPropName: "/@/ unquotedString?" },
              {
                stnFactory: "ThisStn",
                stnProps: function() {
                  return { identifier: this.unquotedString.toString() };
                }
              }
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
/* 53 */
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
      __webpack_require__(16),
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
              Caf.array(this.binaryOperatorAndExpressions, opAndExp =>
                getNormalizedOperator(opAndExp.binaryOperator)
              ),
              compactFlatten([
                left,
                Caf.array(this.binaryOperatorAndExpressions, opAndExp =>
                  opAndExp.rValue.getStn()
                )
              ]),
              (operandA, operandB, operator) =>
                BinaryOperatorStn(
                  { parseTreeNode: this, operator },
                  operandA,
                  operandB
                )
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
            Caf.each2(
              this.unaryTailOperators || [],
              operand =>
                (stn = UnaryOperatorStn(
                  { operand: operand.toString().trim(), tail: true },
                  stn
                ))
            );
            Caf.each2(
              (this.unaryOperator_s || []).slice().reverse(),
              operand =>
                (stn = UnaryOperatorStn(
                  { operand: operand.toString().trim() },
                  stn
                ))
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
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
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
              Caf.each2(
                this.tailControlOperatorComplexExpressions,
                tco =>
                  (stn = ControlOperatorStn(
                    { operand: tco.tailControlOperator.toString().trim() },
                    tco.implicitArrayOrExpression.getStn(),
                    stn
                  ))
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
/* 58 */
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
      wordStringChar = /[^\n\s,)\]\}]/;
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
              pattern: RegExp(`:(?!:)${Caf.toString(wordStringChar.source)}+`),
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
              let cafBase;
              if (this.mid.matchLength > 0) {
                appendTo.push(
                  StringStn({ parseTreeNode: this, value: this.mid.toString() })
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
                  StringStn({ parseTreeNode: this, value: this.mid.toString() })
                );
              }
              Caf.exists((cafBase = this.interpolationContinues)) &&
                cafBase.getStnChildren(appendTo);
              return appendTo;
            }
          }
        );
      };
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
  return Caf.importInvoke(
    ["upperCamelCase", "Error"],
    [global, __webpack_require__(3)],
    (upperCamelCase, Error) => {
      let StnRegistry;
      StnRegistry = __webpack_require__(4);
      return {
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
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 60 */
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
      reservedWord: /(import|true|false|null|undefined|global|require|module|eval|super|class|new|this|delete|instanceof|is|isnt|switch|when|then|else|if|until|while|unless|array|each|find|object|from|in|with|do|into|returning|with-key|to|by|til|try|catch|throw|and|or|not|for|return|break|of|yes|on|no|off|typeof|extract|reduce|inject|promise|await|short|skip|mixin)\b(?![-])/,
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
      unaryOperator_: /([!~]|not\b|delete\b) *|-(?![-:])/,
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
/* 62 */
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
/* 63 */
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
          },
          isSimpleIdentifier: function() {
            return this.target.type === "Identifier";
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let ImportStn, ImportBodyStn;
    ImportStn = __webpack_require__(22);
    return (ImportBodyStn = Caf.defClass(
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
    ));
  })();
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
    ["compactFlatten", "present"],
    [global, __webpack_require__(3)],
    (compactFlatten, present) => {
      let StatementsStn, RootStn;
      StatementsStn = __webpack_require__(23);
      return (RootStn = Caf.defClass(
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
            let identifiersToImport,
              statementsSourceNode,
              lets,
              statementsSourceNodes,
              autoLets;
            this.rootUpdateScope();
            return options.bare
              ? this.createSourceNode(
                  "Caf = global.Caf || require('caffeine-script-runtime');\n",
                  this.getBareInitializers(),
                  this.statementsSourceNodes
                )
              : options.module
                ? ((identifiersToImport = Caf.array(
                    this.generateImportMap(),
                    (v, k) => `${Caf.toString(k)} = global.${Caf.toString(k)}`
                  )),
                  (statementsSourceNode = this.statements.toSourceNode({
                    returnAction: true
                  })),
                  (lets = compactFlatten([
                    identifiersToImport,
                    this.requiredIdentifierLets
                  ])),
                  this.createSourceNode(
                    "\"use strict\"\nlet Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {",
                    lets.length > 0
                      ? `let ${Caf.toString(lets.join(", "))}; `
                      : undefined,
                    statementsSourceNode,
                    "});"
                  ))
                : (({ statementsSourceNodes } = this),
                  this.createSourceNode(
                    present((autoLets = this.getAutoLets()))
                      ? [autoLets, "; "]
                      : undefined,
                    statementsSourceNodes
                  ));
          };
          this.prototype.rootUpdateScope = function() {
            return !this._scopeHasBeenUpdated
              ? ((this._scopeHasBeenUpdated = true), this.updateScope(this))
              : undefined;
          };
          this.prototype.toJsModule = function() {
            let identifiersToImport, statementsJs, lets, statements;
            this.rootUpdateScope();
            identifiersToImport = Caf.array(
              this.generateImportMap(),
              (v, k) => `${Caf.toString(k)} = global.${Caf.toString(k)}`
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
              compactFlatten([this.getAutoLets(), statements]).join("; ") + ";"
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
  return Caf.importInvoke(
    ["deescapeSpaces", "escapeUnescaped", "escapeMustEscapes"],
    [global, __webpack_require__(3), __webpack_require__(8)],
    (deescapeSpaces, escapeUnescaped, escapeMustEscapes) => {
      let StringStn;
      return (StringStn = Caf.defClass(
        class StringStn extends __webpack_require__(2) {},
        function(StringStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function(options) {
            return this.createSourceNode(this.toJs(options));
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
/* 67 */
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
                  falsifyCases ? ": case !" : ": case ",
                  { dotBase: falsifyCases }
                )
              : [whenValue.toSourceNode({ dotBase: falsifyCases })],
            ": ",
            thenDo.toSourceNode({ returnAction })
          );
        };
        this.prototype._getCasesJs = function(options) {
          let falsifyCases, whenValue, cases;
          ({ falsifyCases } = options);
          ({ whenValue } = this.labeledChildren);
          cases = whenValue.implicitArray
            ? Caf.array(whenValue.children, m =>
                m.toJsExpression({ dotBase: falsifyCases })
              )
            : [whenValue.toJsExpression({ dotBase: falsifyCases })];
          return falsifyCases
            ? `case !${Caf.toString(cases.join(": case !"))}`
            : `case ${Caf.toString(cases.join(": case "))}`;
        };
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
            Caf.array(this.children, (c, i) => {
              let sn;
              sn = c.toSourceNode({ expression: true });
              return i > 0 ? [", ", sn] : sn;
            }),
            dotBase ? "])" : "]"
          );
        };
        this.prototype.toJs = function(options) {
          let out;
          out = `[${Caf.toString(
            Caf.array(this.children, c => c.toJsExpression()).join(", ")
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
/* 72 */
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
      "binaryOperatorToJs",
      "getPrecidenceLevelIsLeftAssociative",
      "Error",
      "formattedInspect"
    ],
    [global, __webpack_require__(3), __webpack_require__(16)],
    (
      operatorIsInfixJs,
      binaryOperatorToSourceNodeArray,
      getOpPrecidence,
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
                    this.right.toSourceNode({ expression: true }),
                    this.left
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
                    }),
                    this.left
                  );
              }
            })();
            return options && this._needsParens(options)
              ? this.createSourceNode("(", out, ")")
              : this.createSourceNode(out);
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
/* 73 */
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
/* 74 */
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
          this.getter({
            whileReturnTempVar: function() {
              let cafTemp;
              return (cafTemp = this._whileReturnTempVar) != null
                ? cafTemp
                : (this._whileReturnTempVar = this.scope.uniqueIdentifier);
            }
          });
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
                  : ((tempVarIdentifier = this.whileReturnTempVar),
                    `(() => {while ${Caf.toString(
                      this.applyRequiredParens(jsExpression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(
                        `${Caf.toString(tempVarIdentifier)} =`
                      )
                    )};}; return ${Caf.toString(tempVarIdentifier)};})()`)
                : ((out = `${Caf.toString(
                    this.expression.toJsExpression({ dotBase: true })
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
              parts,
              tempVarIdentifier,
              cafBase;
            ({ expression, returnValueIsIgnored, noParens } = options);
            ({ operand } = this);
            applyParens = false;
            unaryOperator = "";
            switch (operand) {
              case "until":
              case "unless":
                operand = operand === "until" ? "while" : "if";
                unaryOperator = "!";
            }
            parts = expression
              ? (() => {
                  switch (operand) {
                    case "while":
                      return returnValueIsIgnored
                        ? this.doSourceNode(
                            "while (",
                            unaryOperator,
                            this.expression.toSourceNode({
                              noParens: true,
                              expression: true,
                              dotBase: !!unaryOperator
                            }),
                            ") {",
                            this.body.toSourceNode(),
                            "};"
                          )
                        : ((tempVarIdentifier = this.whileReturnTempVar),
                          this.doSourceNode(
                            "while (",
                            unaryOperator,
                            this.expression.toSourceNode({
                              noParens: true,
                              expression: true,
                              dotBase: !!unaryOperator
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
                    expression: true,
                    dotBase: !!unaryOperator
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
/* 75 */
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
            expression = null;
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
            expression = null;
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
/* 76 */
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
/* 77 */
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
/* 78 */
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
            return Caf.array(
              this.children,
              c => c.argumentName,
              c => c.argumentName
            );
          }
        });
        this.prototype.toSourceNode = function(options) {
          return this.createSourceNode(
            "(",
            Caf.array(this.children, (c, i) => {
              let sn;
              sn = c.toSourceNode();
              return i > 0 ? [", ", sn] : sn;
            }),
            ")"
          );
        };
        this.prototype.toJs = function() {
          return `(${Caf.toString(
            Caf.array(this.children, c => c.toJs()).join(", ")
          )})`;
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp"],
    [global, __webpack_require__(3)],
    identifierRegexp => {
      let IdentifierStn;
      return (IdentifierStn = Caf.defClass(
        class IdentifierStn extends __webpack_require__(2) {},
        function(IdentifierStn, classSuper, instanceSuper) {
          this.getter({
            name: function() {
              return this.props.identifier;
            },
            isIdentifier: function() {
              return identifierRegexp.test(this.identifier);
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
  return Caf.importInvoke(
    ["peek"],
    [global, __webpack_require__(3)],
    peek => {
      let InterpolatedStringStn;
      return (InterpolatedStringStn = Caf.defClass(
        class InterpolatedStringStn extends __webpack_require__(2) {},
        function(InterpolatedStringStn, classSuper, instanceSuper) {
          this.prototype.compactNewLines = function(compactLeft, compactRight) {
            return Caf.each2(
              this.children,
              (child, i) =>
                child.compactNewLines(
                  compactLeft && i === 0,
                  compactRight && i === this.children.length - 1
                ),
              (child, i) => child.type === "String"
            );
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
              Caf.array(this.children, c => c.toInterpolatedJsStringPart()),
              "`"
            );
          };
          this.prototype.toJs = function() {
            return `\`${Caf.toString(
              Caf.array(this.children, c =>
                c.toInterpolatedJsStringPart()
              ).join("")
            )}\``;
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 82 */
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
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let NumberLiteralStn;
  return (NumberLiteralStn = Caf.defClass(
    class NumberLiteralStn extends __webpack_require__(2) {},
    function(NumberLiteralStn, classSuper, instanceSuper) {
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
/* 86 */
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp", "peek", "escapePropName"],
    [global, __webpack_require__(3)],
    (identifierRegexp, peek, escapePropName) => {
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
              nameStn = peek(this.children);
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
          this.prototype.toSourceNode = function() {
            let nameStn;
            [nameStn] = this.children;
            return (Caf.exists(nameStn) && nameStn.children.length) > 0
              ? this.createSourceNode("[", nameStn.toSourceNode(), "]")
              : this.createSourceNode(this.simpleName);
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 88 */
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
              let propNameChild, cafTemp, cafBase, cafTemp1, cafTemp2;
              ({ propNameChild } = this);
              return (cafTemp = (cafBase = this.props).propName) != null
                ? cafTemp
                : (cafBase.propName = (() => {
                    switch (this.children.length) {
                      case 2:
                        return (cafTemp1 = propNameChild.propName) != null
                          ? cafTemp1
                          : propNameChild;
                      case 1:
                        return (cafTemp2 = propNameChild.propName) != null
                          ? cafTemp2
                          : (() => {
                              throw new Error(
                                `${Caf.toString(
                                  propNameChild.type
                                )} not allowed when structuring an object. Legal examples: foo.accessors, &requires and identifiers.`
                              );
                            })();
                    }
                  })());
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
            base = valueChild.toSourceNode({ expression: true });
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let StnRegistry, ObjectStn;
    StnRegistry = __webpack_require__(4);
    return (ObjectStn = Caf.defClass(
      class ObjectStn extends __webpack_require__(2) {},
      function(ObjectStn, classSuper, instanceSuper) {
        let splitObjectsAtSameProps;
        this.getter({
          isEmptyObjectLiteral: function() {
            return !this.children || this.children.length === 0;
          }
        });
        this.prototype.toJs = function(options) {
          let out;
          out = `{${Caf.toString(
            Caf.array(this.children, c => c.toJs()).join(", ")
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
          Caf.each2(children, child => {
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
            return currentOrder.push(child);
          });
          return listOfObjectLiterals;
        };
        this.newInstance = function(props, children) {
          let listOfObjectLiterals;
          listOfObjectLiterals = splitObjectsAtSameProps(children);
          return listOfObjectLiterals.length === 1
            ? new this(props, children)
            : new StnRegistry.ArrayStn(
                Caf.array(listOfObjectLiterals, c => new this(props, c))
              );
        };
      }
    ));
  })();
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
          return this.createSourceNode(this.propName);
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
/* 91 */
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
                ? ((hasInterpolation = Caf.find(
                    this.children,
                    child => !isString(child.props.value)
                  )),
                  Caf.array(this.children, child => {
                    let v;
                    return isString((v = child.props.value))
                      ? hasInterpolation
                        ? v.replace(/([`$\\])/g, "\\$1")
                        : v
                      : `\${Caf.toString(${Caf.toString(
                          child.toJsExpression()
                        )})}`;
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
                ? ((hasInterpolation = Caf.find(
                    this.children,
                    child => !isString(child.props.value)
                  )),
                  Caf.array(this.children, child => {
                    let v;
                    return isString((v = child.props.value))
                      ? hasInterpolation
                        ? v.replace(/([`$\\])/g, "\\$1")
                        : v
                      : ["${Caf.toString(", child.toJsExpression(), ")}"];
                  }))
                : value;
            return !childrenNodes || childrenNodes.length === 0
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek"],
    [global, __webpack_require__(3)],
    peek => {
      let findModuleSync, RequireStn;
      ({ findModuleSync } = __webpack_require__(117));
      return (RequireStn = Caf.defClass(
        class RequireStn extends __webpack_require__(2) {},
        function(RequireStn, classSuper, instanceSuper) {
          this.getter({
            rawRequireString: function() {
              return this.props.require;
            },
            propName: function() {
              return /\//.test(this.rawRequireString)
                ? peek(this.rawRequireString.split("/"))
                : this.rawRequireString;
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
      ));
    }
  );
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
/* 94 */
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
        return this.createSourceNode(value);
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
        return value;
      };
    }
  ));
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 95 */
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
              ? ((cases = Caf.array(switchWhens, clause =>
                  clause.toFunctionBodyJs(options)
                )),
                switchElse
                  ? cases.push(
                      `default: ${Caf.toString(switchElse.toFunctionBodyJs())};`
                    )
                  : undefined,
                `(() => {switch (${Caf.toString(
                  this.getConditionJs()
                )}) {${Caf.toString(cases.join(" "))}};})()`)
              : ((cases = Caf.array(switchWhens, clause =>
                  clause.toJs(options)
                )),
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
            cases = Caf.array(switchWhens, clause =>
              clause.toSourceNode(childOptions)
            );
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp", "escapeJavascriptString", "peek"],
    [global, __webpack_require__(3)],
    (identifierRegexp, escapeJavascriptString, peek) => {
      let ThisStn;
      return (ThisStn = Caf.defClass(
        class ThisStn extends __webpack_require__(2) {},
        function(ThisStn, classSuper, instanceSuper) {
          this.prototype.needsParens = false;
          this.getter({
            identifier: function() {
              let id, cafBase;
              return (id = this.props.identifier)
                ? identifierRegexp.test(id)
                  ? id
                  : escapeJavascriptString(id)
                : Caf.exists((cafBase = peek(this.children))) && cafBase.toJs();
            },
            propName: function() {
              let cafTemp;
              return (cafTemp = this.identifier) != null ? cafTemp : "this";
            }
          });
          this.prototype.toJs = function() {
            let id;
            return (id = this.identifier)
              ? identifierRegexp.test(id)
                ? `this.${Caf.toString(id)}`
                : `this[${Caf.toString(id)}]`
              : "this";
          };
          this.prototype.toSourceNode = function() {
            let id;
            return (id = this.identifier)
              ? identifierRegexp.test(id)
                ? this.createSourceNode("this.", id)
                : this.createSourceNode("this[", id, "]")
              : this.createSourceNode("this");
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
/* 98 */
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
/* 99 */
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
                case "not":
                  return "!";
                case "?":
                  return " != null";
                default:
                  return op;
              }
            })();
          },
          isJsNativeUnaryOperand: function() {
            return /^(not|[-!~])$/.test(this.props.operand);
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
          let dotBase, forUnaryOpeartor, childNode, base;
          if (options) {
            ({ dotBase, forUnaryOpeartor } = options);
          }
          childNode = this.children[0].toSourceNode({
            dotBase: true,
            forUnaryOpeartor: true
          });
          base = this.tail
            ? [childNode, this.normalizedOperand]
            : [this.normalizedOperand, childNode];
          return dotBase && (!forUnaryOpeartor || !this.isJsNativeUnaryOperand)
            ? this.createSourceNode("(", base, ")")
            : this.createSourceNode(base);
        };
      }
    ));
  })();
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
    let UndefinedStn;
    return (UndefinedStn = Caf.defClass(
      class UndefinedStn extends __webpack_require__(2) {},
      function(UndefinedStn, classSuper, instanceSuper) {
        this.prototype.needsParens = false;
        this.prototype.toJs = function() {
          return "undefined";
        };
        this.prototype.toSourceNode = function() {
          return this.createSourceNode("undefined");
        };
      }
    ));
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, supportedOperatorsRegExp, AssignmentStn;
    SemanticTree = __webpack_require__(4);
    supportedOperatorsRegExp = /^([-+*\/%^|]|<<|>>|>>>|)$/;
    return (AssignmentStn = Caf.defClass(
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
            ? (({ value1, value2 } = this.getValueWithBaseCapture(this.lValue)),
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
            ? this.createSourceNode(
                this.lValue.toSourceNode(),
                ` ${Caf.toString(this.operator)}= `,
                this.rValue.toSourceNode({ expression: true })
              )
            : this.createSourceNode(
                this.lValue.toSourceNode({ expression: true }),
                ` ${Caf.toString(this.operator)} `,
                this.lValue.toSourceNode(),
                " = ",
                this.rValue.toSourceNode({ expression: true })
              );
          return (Caf.exists(options) && options.dotBase) ||
            (Caf.exists(options) && options.subExpression)
            ? this.createSourceNode("(", out, ")")
            : out;
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
    ));
  })();
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
    ["compactFlatten", "merge", "Error"],
    [global, __webpack_require__(3)],
    (compactFlatten, merge, Error) => {
      let SemanticTree, ClassStn;
      SemanticTree = __webpack_require__(4);
      return (ClassStn = Caf.defClass(
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
            return Caf.each2(
              Caf.exists((cafBase = this.body)) && cafBase.children,
              stn =>
                Caf.each2(stn.children, objectPropValueStn => {
                  let propNameStn, propValueStn;
                  [propNameStn, propValueStn] = objectPropValueStn.children;
                  return propNameStn.type === "ObjectPropName" &&
                    propNameStn.toJs() === "constructor"
                    ? ((propValueStn.props.isConstructor = true),
                      Caf.each2(
                        propValueStn.find(/Super/),
                        superCallChild =>
                          (superCallChild.props.calledInConstructor = true)
                      ))
                    : undefined;
                }),
              stn => stn.type === "Object"
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
                  (statementsToCount = Caf.array(
                    body.children,
                    stn =>
                      stn.type === "Object"
                        ? Caf.array(stn.children, objectPropValueStn => {
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
                                  ({ propName, isThisProp } = propNameStn);
                                  return isThisProp
                                    ? ThisStn(
                                        IdentifierStn({ identifier: propName })
                                      )
                                    : propName === "constructor"
                                      ? ((constructorStn = propValueStn), null)
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
                                      IdentifierStn({ identifier: "prototype" })
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
                            return (
                              assignToStn &&
                              AssignmentStn(assignToStn, propValueStn)
                            );
                          })
                        : stn
                  ))
                )
              );
              statementCount = statementsToCount.length;
              if (constructorStn) {
                statementCount -= 1;
                constructorStn.props.isConstructor = true;
                Caf.each2(
                  constructorStn.find(/Super/),
                  superCallChild =>
                    (superCallChild.props.calledInConstructor = true)
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
                  ` ${Caf.toString(classBodyJs)}, ${Caf.toString(body.toJs())})`
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
      ));
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
  return Caf.importInvoke(
    ["compactFlatten", "merge", "Error"],
    [global, __webpack_require__(3)],
    (compactFlatten, merge, Error) => {
      let StnRegistry, FunctionDefinitionStn;
      StnRegistry = __webpack_require__(4);
      return (FunctionDefinitionStn = Caf.defClass(
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
              ? (Caf.object(this.arguments.argumentNameList, name =>
                  this.addArgumentName(name)
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
            Caf.each2(this.argumentStns, arg => {
              let stn;
              return (stn = arg.generatePreBodyStatementStn())
                ? (preBodyStatements != null
                    ? preBodyStatements
                    : (preBodyStatements = [])
                  ).push(stn)
                : undefined;
            });
            return compactFlatten(
              isConstructor
                ? ((lastSuperContainingStatementIndex = null),
                  Caf.each2(
                    statementStns,
                    (v, i) => (lastSuperContainingStatementIndex = i),
                    (v, i) =>
                      v.type === "Super" ||
                      v.find(/Super/, /FunctionDefinition|Class/)
                  ),
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
            autoLetsForSourceNode: function() {
              let lets;
              return (lets = this.getAutoLets()) ? lets + "; " : undefined;
            },
            bound: function() {
              return this.props.bound;
            },
            simpleBound: function() {
              let statementStns;
              ({ statementStns } = this);
              return (
                this.bound &&
                !this.getAutoLets() &&
                (Caf.exists(statementStns) && statementStns.length) === 1 &&
                statementStns[0].type !== "Object"
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
                Caf.exists((cafBase = this.args)) && cafBase.toSourceNode()) !=
              null
                ? cafTemp
                : "()";
            bodySourceNode = this.simpleBound
              ? this.body.children[0].toSourceNode({ expression: true })
              : Caf.exists((cafBase1 = this.body)) &&
                cafBase1.toSourceNode({ returnAction });
            return bound
              ? this.simpleBound
                ? this.createSourceNode(argsSourceNode, " => ", bodySourceNode)
                : this.createSourceNode(
                    argsSourceNode,
                    " => {",
                    this.autoLetsForSourceNode,
                    bodySourceNode,
                    "}"
                  )
              : this.createSourceNode(
                  statement ? "(" : undefined,
                  isConstructor ? "constructor" : "function",
                  argsSourceNode,
                  " {",
                  this.autoLetsForSourceNode,
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
              cafBase.toFunctionBodyJsArray(!(isConstructor || returnIgnored));
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
      ));
    }
  );
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
    ["Error"],
    [global, __webpack_require__(3)],
    Error => {
      let SemanticTree, FunctionInvocationStn;
      SemanticTree = __webpack_require__(17);
      return (FunctionInvocationStn = Caf.defClass(
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
                Caf.array(this.argStns, a => a.toJsExpression()).join(", ")
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
        this.prototype.toSourceNode = function() {
          let cafBase;
          return this.createSourceNode(
            Caf.exists((cafBase = this.value)) &&
              cafBase.toSourceNode({ dotBase: true }),
            "[",
            this.key.toSourceNode({ expression: true }),
            "]"
          );
        };
      }
    ));
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
                  : Caf.array(args, a => a.toJsExpression())),
                `super(${Caf.toString(args.join(", "))})`)
              : ((method = this.props.passArguments
                  ? ((args = "arguments"), "apply")
                  : ((args = Caf.array(args, a => a.toJsExpression())),
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
                  "(this",
                  this.props.passArguments
                    ? [", ", "arguments"]
                    : args.length > 0
                      ? [", ", this.stnArrayToSourceNodes(args, ", ")]
                      : undefined,
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, CaptureStn;
    SemanticTree = __webpack_require__(4);
    return (CaptureStn = Caf.defClass(
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
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "lowerCamelCase", "StnRegistry", "Object", "String"],
    [global, __webpack_require__(3)],
    (Error, lowerCamelCase, StnRegistry, Object, String) => {
      let SemanticTree, UniqueIdentifierHandle, ComprehensionStn;
      SemanticTree = __webpack_require__(4);
      UniqueIdentifierHandle = __webpack_require__(12);
      return (ComprehensionStn = Caf.defClass(
        class ComprehensionStn extends __webpack_require__(9)(
          __webpack_require__(2)
        ) {},
        function(ComprehensionStn, classSuper, instanceSuper) {
          let clauseAliases;
          this.prototype.validate = function() {
            let valueClauses,
              variableDefinition,
              comprehensionType,
              toClause,
              byClause,
              tilClause,
              fromClause,
              cafBase;
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
            ({ comprehensionType } = this);
            ({
              toClause,
              byClause,
              tilClause,
              fromClause
            } = this.labeledClauses);
            if (
              (toClause || byClause || tilClause) &&
              comprehensionType !== "array"
            ) {
              throw new Error(
                `'to', 'by' and 'til' clauses not supported for '${Caf.toString(
                  comprehensionType
                )}' comprehensions`
              );
            }
            if (!(fromClause || toClause || tilClause)) {
              throw new Error("'from', 'to' or 'til' clause require");
            }
            if (toClause && tilClause) {
              throw new Error("only one 'to' or 'til' clause allowed");
            }
            return byClause && !(tilClause || toClause)
              ? (() => {
                  throw new Error("'to' or 'til' clause required to use 'by'");
                })()
              : undefined;
          };
          clauseAliases = { returning: "into", in: "from", do: "with" };
          this.getter({
            comprehensionType: function() {
              return this.labeledChildren.outputType.props.token;
            },
            labeledClauses: function() {
              let iterable, body, labeledClauses, cafTemp, cafTemp1;
              ({ iterable, body } = this.labeledChildren);
              labeledClauses = {};
              Caf.each2(
                this.labeledChildren.valueClauses,
                ({ type, value }) => {
                  let name, cafTemp;
                  type =
                    (cafTemp = clauseAliases[type]) != null ? cafTemp : type;
                  name = lowerCamelCase(type + "Clause");
                  if (labeledClauses[name]) {
                    throw new Error(
                      `no more than one '${Caf.toString(type)}' clause allowed`
                    );
                  }
                  return (labeledClauses[name] = value);
                }
              );
              (cafTemp = labeledClauses.fromClause) != null
                ? cafTemp
                : (labeledClauses.fromClause = iterable);
              (cafTemp1 = labeledClauses.withClause) != null
                ? cafTemp1
                : (labeledClauses.withClause = body);
              return labeledClauses;
            }
          });
          this.prototype.postTransform = function() {
            let labeledClauses, comprehensionType;
            this.initLabeledChildren();
            ({ labeledClauses, comprehensionType } = this);
            return labeledClauses.toClause || labeledClauses.tilClause
              ? this.generateArrayRange(labeledClauses)
              : (() => {
                  switch (comprehensionType) {
                    case "each":
                    case "array":
                    case "object":
                      return this.generateArrayOrEach(
                        comprehensionType === "each"
                          ? "each2"
                          : comprehensionType,
                        labeledClauses
                      );
                    case "find":
                      return this.generateFind(labeledClauses);
                  }
                })();
          };
          this.prototype.resolveStnParams = function(...params) {
            let SimpleLiteralStn,
              FunctionDefinitionStn,
              variableDefinition,
              lastNonNulIndex,
              Null;
            ({ SimpleLiteralStn, FunctionDefinitionStn } = StnRegistry);
            ({ variableDefinition } = this.labeledChildren);
            lastNonNulIndex = 0;
            params = Caf.array(params, (p, i) => {
              let f;
              p = (() => {
                switch (false) {
                  case !Caf.is(p, Object):
                    ({ f } = p);
                    return f
                      ? FunctionDefinitionStn(
                          { bound: true },
                          variableDefinition,
                          f
                        )
                      : undefined;
                  case !Caf.is(p, String):
                    return SimpleLiteralStn({ value: p });
                  default:
                    return p;
                }
              })();
              if (p != null) {
                lastNonNulIndex = i;
              }
              return p;
            });
            Null = null;
            params = params.slice(0, lastNonNulIndex + 1);
            return Caf.array(
              params,
              p =>
                p != null
                  ? p
                  : Null != null
                    ? Null
                    : (Null = SimpleLiteralStn({ value: "null" }))
            );
          };
          this.prototype.generateArrayRange = function({
            withClause,
            whenClause,
            toClause,
            tilClause,
            byClause,
            fromClause,
            intoClause
          }) {
            let FunctionInvocationStn,
              IdentifierStn,
              FunctionDefinitionStn,
              SimpleLiteralStn;
            ({
              FunctionInvocationStn,
              IdentifierStn,
              FunctionDefinitionStn,
              SimpleLiteralStn
            } = StnRegistry);
            if (tilClause) {
              toClause = tilClause;
              tilClause = "true";
            }
            return FunctionInvocationStn(
              IdentifierStn({ identifier: "Caf.arrayRange" }),
              this.resolveStnParams(
                fromClause != null ? fromClause : "0",
                toClause,
                { f: withClause },
                { f: whenClause },
                byClause,
                tilClause,
                intoClause
              )
            );
          };
          this.prototype.generateFind = function({
            fromClause,
            withClause,
            whenClause
          }) {
            let iterable,
              variableDefinition,
              FunctionInvocationStn,
              IdentifierStn,
              FunctionDefinitionStn,
              SimpleLiteralStn;
            ({ iterable, variableDefinition } = this.labeledChildren);
            ({
              FunctionInvocationStn,
              IdentifierStn,
              FunctionDefinitionStn,
              SimpleLiteralStn
            } = StnRegistry);
            return FunctionInvocationStn(
              IdentifierStn({ identifier: "Caf.find" }),
              this.resolveStnParams(
                fromClause,
                { f: withClause },
                { f: whenClause }
              )
            );
          };
          this.prototype.generateArrayOrEach = function(
            method,
            { fromClause, intoClause, withClause, whenClause, withKeyClause }
          ) {
            let FunctionInvocationStn,
              StatementsStn,
              IdentifierStn,
              SimpleLiteralStn,
              FunctionDefinitionStn,
              variableDefinition,
              cafBase;
            ({
              FunctionInvocationStn,
              StatementsStn,
              IdentifierStn,
              SimpleLiteralStn,
              FunctionDefinitionStn
            } = StnRegistry);
            ({ variableDefinition } = this.labeledChildren);
            if (
              (Caf.exists(variableDefinition) &&
                (Caf.exists((cafBase = variableDefinition.children)) &&
                  cafBase.length)) > 0 &&
              !variableDefinition.children[0].isSimpleIdentifier
            ) {
              withClause != null
                ? withClause
                : (withClause = StatementsStn(variableDefinition.children[0]));
            }
            return FunctionInvocationStn(
              IdentifierStn({ identifier: `Caf.${Caf.toString(method)}` }),
              this.resolveStnParams(
                fromClause,
                { f: withClause },
                { f: whenClause },
                intoClause,
                { f: withKeyClause }
              )
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);

module.exports.addModules({
  FunctionDefinitionArgStn: __webpack_require__(63),
  ImportBodyStn: __webpack_require__(64),
  ImportStn: __webpack_require__(22),
  RootStn: __webpack_require__(65),
  StatementsStn: __webpack_require__(23),
  StringStn: __webpack_require__(66),
  SwitchWhenStn: __webpack_require__(67)
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);

module.exports.addModules({
  ArrayDestructuringStn: __webpack_require__(69),
  ArraySpreadElementStn: __webpack_require__(70),
  ArrayStn: __webpack_require__(71),
  BinaryOperatorStn: __webpack_require__(72),
  CatchStn: __webpack_require__(73),
  ControlOperatorStn: __webpack_require__(74),
  DestructuringAssignmentStn: __webpack_require__(75),
  DestructuringIdentifierStn: __webpack_require__(76),
  DoStn: __webpack_require__(77),
  FunctionDefinitionArgsStn: __webpack_require__(78),
  GlobalIdentifierStn: __webpack_require__(79),
  IdentifierStn: __webpack_require__(80),
  InterpolatedStringStn: __webpack_require__(81),
  LabeledDestructuringTargetStn: __webpack_require__(82),
  LetStn: __webpack_require__(83),
  NewInstanceStn: __webpack_require__(84),
  NumberLiteralStn: __webpack_require__(85),
  ObjectDestructuringStn: __webpack_require__(86),
  ObjectPropNameStn: __webpack_require__(87),
  ObjectPropValueStn: __webpack_require__(88),
  ObjectStn: __webpack_require__(89),
  ReferenceStn: __webpack_require__(90),
  RegExpStn: __webpack_require__(91),
  RequireStn: __webpack_require__(92),
  SemanticTokenStn: __webpack_require__(93),
  SimpleLiteralStn: __webpack_require__(94),
  SwitchStn: __webpack_require__(95),
  ThisStn: __webpack_require__(96),
  ThrowStn: __webpack_require__(97),
  TryStn: __webpack_require__(98),
  UnaryOperatorStn: __webpack_require__(99),
  UndefinedStn: __webpack_require__(100)
});


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);

module.exports.addModules({
  AccessorStn: __webpack_require__(101),
  AssignmentStn: __webpack_require__(102),
  ClassStn: __webpack_require__(103),
  FunctionDefinitionStn: __webpack_require__(104),
  FunctionInvocationStn: __webpack_require__(105),
  ObjectLiteralAccessorStn: __webpack_require__(106),
  SuperStn: __webpack_require__(107)
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);

module.exports.addModules({
  CaptureStn: __webpack_require__(108),
  ComprehensionStn: __webpack_require__(109)
});


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("art-binary");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("art-object-tree-factory");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("caffeine-mc");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("neptune-namespaces");

/***/ })
/******/ ]);