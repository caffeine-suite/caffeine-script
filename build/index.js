module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("caffeine-script-runtime");

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let ArtStandardLib = __webpack_require__(33),
    ArtClassSystem = __webpack_require__(89);
  return ArtStandardLib.merge(ArtStandardLib, ArtClassSystem);
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    createObjectTreeFactory,
    ArtObjectTreeFactory = __webpack_require__(90),
    BaseClass,
    log,
    Object,
    Error,
    objectWithout,
    toInspectedObjects,
    objectKeyCount,
    compactFlatten,
    isString,
    noChildren;
  ({
    BaseClass,
    log,
    Object,
    Error,
    objectWithout,
    toInspectedObjects,
    objectKeyCount,
    compactFlatten,
    isString,
    noChildren
  } = Caf.i(
    [
      "BaseClass",
      "log",
      "Object",
      "Error",
      "objectWithout",
      "toInspectedObjects",
      "objectKeyCount",
      "compactFlatten",
      "isString",
      "noChildren"
    ],
    [StandardImport, global]
  ));
  ({ createObjectTreeFactory } = ArtObjectTreeFactory);
  return BaseStn = Caf.defClass(
    class BaseStn extends BaseClass {
      constructor(props, children = noChildren) {
        super(...arguments);
        this.children = children;
        this.parseTreeNode = props.parseTreeNode;
        this.props = objectWithout(props, "parseTreeNode");
        this.initLabeledChildren();
      }
    },
    function(BaseStn, classSuper, instanceSuper) {
      let CaffeineScriptRuntime = __webpack_require__(0),
        applyRequiredParens,
        applyParens;
      if (!(CaffeineScriptRuntime.getSuper(this) === BaseClass)) {
        log({
          self: this,
          selfName: this.getName(),
          "Object.getPrototypeOf@": Object.getPrototypeOf(this),
          badSuper: CaffeineScriptRuntime.getSuper(this),
          BaseClass: BaseClass,
          "selfIsBaseObject?": this === BaseClass
        });
        throw new Error("bad super");
      }
      this.abstractClass();
      noChildren = [];
      this.prototype.initLabeledChildren = function() {
        this.labeledChildren = this.children && {};
        return Caf.e(this.children, undefined, (child, k, into) => {
          let label, pluralLabel, cafBase;
          child.parent = this;
          ({ label, pluralLabel } = child);
          this.labeledChildren[label] = child;
          if (pluralLabel) {
            ((cafBase = this.labeledChildren)[pluralLabel] ||
              (cafBase[pluralLabel] = [])).push(child);
          }
        });
      };
      this.getter({
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
        inspectedObjects: function() {
          let label, props, name, a;
          ({ label } = this);
          props = objectWithout(this.props, "label", "pluralLabel");
          name = this.class.getName();
          if (label) {
            name = `${Caf.toString(label)}.${Caf.toString(name)}`;
          }
          return {
            [`${Caf.toString(name)}`]: this.children.length === 0
              ? toInspectedObjects(props)
              : (a = [], objectKeyCount(props) > 0
                  ? a.push(props)
                  : undefined, a.concat(
                  Caf.e(this.children, [], (c, k, into) => {
                    into.push(c.inspectedObjects);
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
        return createObjectTreeFactory({ class: this }, (props, children) => {
          return this.newInstance(props, children);
        });
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
          Caf.e(this.children, [], (child, k, into) => {
            into.push(
              child.type.match(stnTypePattern)
                ? child
                : child.find(stnTypePattern)
            );
          })
        );
        return a.length === 0 ? null : a;
      };
      this.prototype.childrenToJs = function(joiner = "") {
        return Caf
          .e(this.children, [], (c, k, into) => {
            into.push(c.toJs());
          })
          .join(joiner);
      };
      this.prototype.toJs = function() {
        return (() => {
          throw new Error(
            `must override one of the toJs* functions: ${Caf.toString(
              this.className
            )}`
          );
        })();
      };
      this.prototype.toJsStatement = function() {
        return this.toJs();
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
      this.prototype.transformChildren = function() {
        let ret;
        ret = null;
        Caf.e(this.children, undefined, (child, i, into) => {
          let newChild;
          if (child !== (newChild = child.transform())) {
            ret != null ? ret : ret = this.children.slice();
            ret[i] = newChild;
          }
        });
        return ret || this.children;
      };
      this.prototype.transform = function() {
        let newChildren;
        return this.children !== (newChildren = this.transformChildren())
          ? new this.class(this.props, newChildren)
          : this;
      };
      this.prototype.toJsExpression = function(returnValueIgnored = false) {
        return this.toJs();
      };
      this.prototype.toJsExpressionWithParens = function() {
        let js;
        js = this.toJsExpression();
        return this.getNeedsParens() ? `(${Caf.toString(js)})` : js;
      };
      this.prototype.toJsParenExpression = function() {
        return this.toJs();
      };
      this.prototype.toInterpolatedJsStringPart = function() {
        return `\${Caf.toString(${Caf.toString(
          this.toJsExpression({ skipParens: true })
        )})}`;
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
      this.applyParens = applyParens = function(expr) {
        return expr.match(
          /^(\([^)]*\)|\[[^\]]*\]|([!~-]*[_a-z0-9.]*)(\([^)]*\))?)$/i
        )
          ? expr
          : `(${Caf.toString(expr)})`;
      };
      this.prototype.applyRequiredParens = applyRequiredParens;
      this.prototype.applyParens = applyParens;
      this.getter({
        normalizedOperand: function() {
          let op;
          return (() => {
            switch (op = this.props.operand) {
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
              default:
                return op;
            }
          })();
        }
      });
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        return Caf.e(this.children, undefined, (child, k, into) => {
          child.updateScope(this.scope);
        });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-bridge");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).addModules({
  AccessorStn: __webpack_require__(20),
  ArrayDestructuringStn: __webpack_require__(58),
  ArraySpreadElementStn: __webpack_require__(59),
  ArrayStn: __webpack_require__(14),
  AssignmentStn: __webpack_require__(21),
  BaseStn: __webpack_require__(3),
  BinaryOperatorStn: __webpack_require__(15),
  CaptureStn: __webpack_require__(60),
  CatchStn: __webpack_require__(61),
  ClassStn: __webpack_require__(62),
  ComprehensionStn: __webpack_require__(63),
  ControlOperatorStn: __webpack_require__(64),
  DestructuringAssignmentStn: __webpack_require__(65),
  DestructuringIdentifierStn: __webpack_require__(66),
  DoStn: __webpack_require__(67),
  FunctionDefinitionArgsStn: __webpack_require__(10),
  FunctionDefinitionArgStn: __webpack_require__(22),
  FunctionDefinitionStn: __webpack_require__(23),
  FunctionInvocationStn: __webpack_require__(68),
  GlobalIdentifierStn: __webpack_require__(69),
  IdentifierStn: __webpack_require__(16),
  ImportStn: __webpack_require__(70),
  InterpolatedStringStn: __webpack_require__(71),
  LabeledDestructuringTargetStn: __webpack_require__(72),
  LetStn: __webpack_require__(24),
  NewInstanceStn: __webpack_require__(73),
  ObjectDestructuringStn: __webpack_require__(74),
  ObjectPropNameStn: __webpack_require__(25),
  ObjectPropValueStn: __webpack_require__(26),
  ObjectStn: __webpack_require__(27),
  ReferenceStn: __webpack_require__(28),
  RegExpStn: __webpack_require__(75),
  RequireStn: __webpack_require__(76),
  RootStn: __webpack_require__(77),
  ScopeStnMixin: __webpack_require__(8),
  SemanticTokenStn: __webpack_require__(78),
  SimpleLiteralStn: __webpack_require__(79),
  StatementsStn: __webpack_require__(9),
  StringStn: __webpack_require__(29),
  SuperStn: __webpack_require__(80),
  SwitchStn: __webpack_require__(81),
  SwitchWhenStn: __webpack_require__(82),
  ThisStn: __webpack_require__(30),
  ThrowStn: __webpack_require__(83),
  TryStn: __webpack_require__(84),
  UnaryOperatorStn: __webpack_require__(85),
  UndefinedStn: __webpack_require__(31),
  UniqueIdentifierHandle: __webpack_require__(11),
  ValueBaseCaptureStn: __webpack_require__(12),
  ValueStn: __webpack_require__(86)
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, SemanticTree,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CaffeineScript = __webpack_require__(17);

module.exports = CaffeineScript.SemanticTree || CaffeineScript.addNamespace('SemanticTree', SemanticTree = (function(superClass) {
  extend(SemanticTree, superClass);

  function SemanticTree() {
    return SemanticTree.__super__.constructor.apply(this, arguments);
  }

  return SemanticTree;

})(Neptune.Base));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2), escapeRegExp;
  ({ escapeRegExp } = Caf.import(["escapeRegExp"], [StandardImport, global]));
  return {
    deescapeSpaces: function(string) {
      return Caf
        .each(string.split(/((?:\\\\)+)/), [], (str, i, into) => {
          into.push(Caf.mod(i, 2) === 0 ? str.replace(/\\ /g, " ") : str);
        })
        .join("");
    },
    escapeNewLines: function(string) {
      return string.replace(/\n/g, "\\n");
    },
    escapeMustEscapes: function(string) {
      return string.replace(/[\n]/g, "\\n");
    },
    escapeUnescaped: function(string, charsToEscape = '"') {
      let charsRegExp, split;
      charsRegExp = RegExp(`([${escapeRegExp(charsToEscape)}])`, "g");
      split = charsToEscape.match(/\\/) ? [string] : string.split(/((?:\\.)+)/);
      return Caf
        .each(split, [], (str, i, into) => {
          into.push(
            Caf.mod(i, 2) === 0 ? str.replace(charsRegExp, "\\$1") : str
          );
        })
        .join("");
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    StatementsStn = __webpack_require__(9),
    LetStn = __webpack_require__(24),
    UniqueIdentifierHandle = __webpack_require__(11),
    lowerCamelCase,
    Error,
    log,
    isString,
    merge,
    mergeInto,
    arrayToTruthMap;
  ({
    lowerCamelCase,
    Error,
    log,
    isString,
    merge,
    mergeInto,
    arrayToTruthMap
  } = Caf.i(
    [
      "lowerCamelCase",
      "Error",
      "log",
      "isString",
      "merge",
      "mergeInto",
      "arrayToTruthMap"
    ],
    [StandardImport, global]
  ));
  StatementsStn;
  LetStn;
  UniqueIdentifierHandle;
  return function(toExtend) {
    return ScopeStnMixin = Caf.defClass(
      class ScopeStnMixin extends toExtend {
        constructor() {
          super(...arguments);
          this._uniqueIdentifierHandles = this._boundUniqueIdentifiers = null;
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
        this.prototype.addIdentifierUsed = function(identifier) {
          if (this._boundUniqueIdentifiers) {
            throw new Error(
              "bindUniqueIdentifier must be called AFTER all calls to addIdentifierUsed"
            );
          }
          return this.identifiersUsed[identifier] = true;
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
                : undefined, this.identifiersAssigned[
                identifier
              ] = initializer || true)
            : undefined;
        };
        this.getter({
          uniqueIdentifier: function(preferredName) {
            preferredName = normalizePerferredName(preferredName);
            return this.getUniqueIdentifierHandle(preferredName).identifier;
          },
          uniqueIdentifierHandle: function(preferredName) {
            preferredName = normalizePerferredName(preferredName);
            return this.addUniqueIdentifierHandle(
              new UniqueIdentifierHandle(preferredName)
            );
          }
        });
        this.prototype.addUniqueIdentifierHandle = function(uih) {
          return !uih.scope
            ? (uih.scope = this, this.uniqueIdentifierHandles.push(uih), uih)
            : undefined;
        };
        this.prototype.bindUniqueIdentifier = function(
          preferredName,
          uniqueIdentifierHandle
        ) {
          let identifier;
          preferredName = normalizePerferredName(preferredName);
          identifier = this.getAvailableIdentifierName(preferredName);
          this.boundUniqueIdentifiers[identifier] = uniqueIdentifierHandle;
          this.identifiersAssigned[identifier] = true;
          return identifier;
        };
        this.prototype.getAvailableIdentifierName = function(preferredName) {
          let identifiersUsed, count, name;
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
            : (identifiersUsed = this.identifiersUsedOrAssigned, !identifiersUsed[
                preferredName
              ]
                ? preferredName
                : (count = 0, (() => {
                    while (
                      identifiersUsed[
                        name = `${Caf.toString(preferredName)}${Caf.toString(
                          count += 1
                        )}`
                      ]
                    ) {
                      name;
                    }
                  })(), name));
        };
        this.prototype.addChildScope = function(child) {
          return !(child === this)
            ? (this.childScopes || (this.childScopes = [])).push(child)
            : undefined;
        };
        this.prototype.bindAllUniqueIdentifiersRequested = function() {
          return this._uniqueIdentifierHandles
            ? Caf.e(this._uniqueIdentifierHandles, undefined, (
                uniqueIdentifierHandle,
                k,
                into
              ) => {
                uniqueIdentifierHandle.identifier;
              })
            : undefined;
        };
        this.prototype.getAutoLets = function() {
          let identifiers;
          this.bindAllUniqueIdentifiersRequested();
          return this.props.identifiersAssigned &&
            (identifiers = this.requiredIdentifierLets).length > 0
            ? `let ${Caf.toString(identifiers.join(", "))}`
            : undefined;
        };
        this.prototype.getBareInitializers = function() {
          let identifiers;
          this.bindAllUniqueIdentifiersRequested();
          return this.props.identifiersAssigned &&
            (identifiers = this.requiredIdentifierLets).length > 0
            ? (identifiers = Caf.e(identifiers, [], (identifier, k, into) => {
                if (identifier.match(/=/)) {
                  into.push(identifier);
                }
              }), identifiers.length > 0
                ? `${Caf.toString(identifiers.join("; "))}`
                : undefined)
            : undefined;
        };
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          this.bindAllUniqueIdentifiersRequested();
          this.scope.addChildScope(this);
          Caf.e(this.getChildrenToUpdateScope(), undefined, (
            child,
            k,
            into
          ) => {
            child.updateScope(this);
          });
          return this._scopeUpdated = true;
        };
        this.getter({
          childrenToUpdateScope: function() {
            return this.children;
          },
          argumentNames: function() {
            return [];
          },
          uniqueIdentifierHandles: function() {
            return this._uniqueIdentifierHandles ||
              (this._uniqueIdentifierHandles = []);
          },
          boundUniqueIdentifiers: function() {
            return this._boundUniqueIdentifiers ||
              (this._boundUniqueIdentifiers = {});
          },
          requiredIdentifierLets: function() {
            let identifiersAssignedInParentScopes;
            ({ identifiersAssignedInParentScopes } = this);
            return Caf.e(this.identifiersAssigned, [], (
              initializer,
              identifier,
              into
            ) => {
              if (
                !identifiersAssignedInParentScopes ||
                !identifiersAssignedInParentScopes[identifier]
              ) {
                into.push(
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
            });
          },
          identifiersUsed: function() {
            let cafBase;
            return (cafBase = this.props).identifiersUsed ||
              (cafBase.identifiersUsed = {});
          },
          identifiersAssigned: function() {
            let cafBase;
            return (cafBase = this.props).identifiersAssigned ||
              (cafBase.identifiersAssigned = {});
          },
          identifiersUsedOrAssigned: function() {
            let out, scope, notDone;
            out = merge(this.identifiersUsed, this.identifiersAssigned);
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
          identifiersUsedButNotAssigned: function() {
            let assigned, ret;
            assigned = this.identifiersAssignedInParentThisOrChildrenScopes;
            ret = Caf.e(this.identifiersUsed, {}, (v, k, into) => {
              if (!assigned[k]) {
                into[k] = true;
              }
            });
            Caf.e(this.childScopes, undefined, (childScope, k, into) => {
              mergeInto(ret, childScope.identifiersUsedButNotAssigned);
            });
            return this.props.identifiersUsedButNotAssigned = ret;
          },
          identifiersAssignedInParentThisOrChildrenScopes: function() {
            return merge(
              this.identifiersAssigned,
              this.identifiersAssignedInParentScopes
            );
          },
          identifiersAssignedInParentScopes: function() {
            return this.scope && this.scope !== this
              ? merge(
                  this.scope.identifiersAssignedInParentScopes,
                  this.scope.identifiersAssigned,
                  arrayToTruthMap(this.argumentNames)
                )
              : undefined;
          }
        });
      }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    Lib = __webpack_require__(7),
    BaseStn = __webpack_require__(3);
  return StatementsStn = Caf.defClass(
    class StatementsStn extends BaseStn {},
    function(StatementsStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return this.getChildrenStatementsJsArray().join("; ");
      };
      this.prototype.toFunctionBodyJs = function(returnAction = true) {
        return this.toFunctionBodyJsArray(returnAction).join("; ");
      };
      this.prototype.toFunctionBodyJsArray = function(returnAction = true) {
        return this.getChildrenStatementsJsArray(returnAction);
      };
      this.prototype.getChildrenStatementsJsArray = function(
        returnAction,
        generateStatements = true
      ) {
        let lines;
        if (returnAction === true) {
          returnAction = "return";
        }
        return Caf.e(lines = this.children, [], (c, i, into) => {
          let statement;
          into.push(
            returnAction && i === lines.length - 1
              ? !c.jsExpressionUsesReturn
                  ? `${Caf.toString(returnAction)} ${Caf.toString(
                      c.toJsExpression()
                    )}`
                  : c.toJs({ generateReturnStatement: true })
              : generateStatements
                  ? (statement = c.toJsStatement(), statement.match(/^function/)
                      ? this.applyRequiredParens(statement)
                      : statement)
                  : c.toJsExpression(true)
          );
        });
      };
      this.prototype.toJsParenExpression = function() {
        return (() => {
          switch (this.children.length) {
            case 0:
              return "undefined";
            case 1:
              return this.children[0].toJsParenExpression();
            default:
              return this.applyRequiredParens(
                this.getChildrenStatementsJsArray("", false).join(", ")
              );
          }
        })();
      };
      this.prototype.toJsExpressionWithParens = function() {
        return this.toJsParenExpression();
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return FunctionDefinitionArgsStn = Caf.defClass(
    class FunctionDefinitionArgsStn extends BaseStn {},
    function(FunctionDefinitionArgsStn, classSuper, instanceSuper) {
      this.getter({
        argumentNames: function() {
          return Caf.e(this.children, [], (c, k, into) => {
            into.push(c.argumentName);
          });
        }
      });
      this.prototype.toJs = function() {
        return `(${Caf.toString(
          Caf
            .e(this.children, [], (c, k, into) => {
              into.push(c.toJs());
            })
            .join(", ")
        )})`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseClass,
    inspectedObjectLiteral,
    inspect;
  ({ BaseClass, inspectedObjectLiteral, inspect } = Caf.i(
    ["BaseClass", "inspectedObjectLiteral", "inspect"],
    [StandardImport, global]
  ));
  return UniqueIdentifierHandle = Caf.defClass(
    class UniqueIdentifierHandle extends BaseClass {
      constructor(preferredName, scope) {
        super(...arguments);
        this.preferredName = preferredName;
        this.scope = scope;
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
          return this._identifier ||
            (this._identifier = this.scope.bindUniqueIdentifier(
              this.preferredName,
              this
            ));
        }
      });
      this.prototype.toString = function() {
        return this.identifier;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BinaryOperatorStn = __webpack_require__(15),
    UniqueIdentifierHandle = __webpack_require__(11),
    SemanticTree,
    BaseStn = __webpack_require__(3),
    mergeInto,
    isArray;
  ({ mergeInto, isArray } = Caf.i(["mergeInto", "isArray"], [
    StandardImport,
    global
  ]));
  BinaryOperatorStn;
  UniqueIdentifierHandle;
  SemanticTree = __webpack_require__(6);
  return ValueBaseCaptureStn = Caf.defClass(
    class ValueBaseCaptureStn extends BaseStn {},
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
          ? ({ AssignmentStn, ReferenceStn, IdentifierStn } = SemanticTree, {
              value,
              key
            } = accessorStn, {
              value1: new accessorStn.class(accessorStn.props, [
                AssignmentStn(
                  IdentifierStn({
                    identifierHandle: baseIdentifierHandle = new UniqueIdentifierHandle(
                      "base"
                    )
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
          : ({ AssignmentStn, ReferenceStn, IdentifierStn } = SemanticTree, {
              value1: AssignmentStn(
                IdentifierStn({
                  identifierHandle: baseIdentifierHandle = new UniqueIdentifierHandle(
                    "base"
                  )
                }),
                accessorStn
              ),
              value2: ReferenceStn({ identifierHandle: baseIdentifierHandle })
            });
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
        while (
          current &&
          (current.type === "Accessor" || current.type === "FunctionInvocation")
        ) {
          accessor = current;
          current = current.value;
          accessorChain.push(accessor);
        }
        return accessorChain.reverse();
      };
      this.prototype._transformAccessorChainR = function(value, accessorChain) {
        let done;
        done = false;
        Caf.e(accessorChain, undefined, (accessor, i, into) => {
          let key, isFunctionInvocation, reset;
          if (!done) {
            ({ key, isFunctionInvocation } = accessor);
            if (isArray(key)) {
              key = Caf.e(key, [], (kk, k, into) => {
                into.push(kk.transform());
              });
            } else {
              key = key.transform();
            }
            if (accessor.existanceTest) {
              reset = accessorChain.slice(i);
              done = true;
              value = this.createExistanceAccessorStn(
                value,
                isFunctionInvocation,
                checkedValueStn => {
                  let access;
                  access = this.createAccessorStn(
                    checkedValueStn,
                    key,
                    isFunctionInvocation
                  );
                  return i < accessorChain.length - 1
                    ? this._transformAccessorChainR(
                        access,
                        accessorChain.slice(i + 1)
                      )
                    : access;
                }
              );
            } else {
              value = this.createAccessorStn(value, key, isFunctionInvocation);
            }
          }
        });
        return value;
      };
      this.prototype.createAccessorStn = function(
        value,
        key,
        isFunctionInvocation
      ) {
        return isFunctionInvocation
          ? SemanticTree.FunctionInvocationStn(value, key)
          : SemanticTree.AccessorStn(value, key);
      };
      this.prototype.createExistanceAccessorStn = function(
        value,
        forFunctionInvocation,
        createRightStn
      ) {
        let res, value1, value2;
        res = forFunctionInvocation
          ? this.getValueWithBaseCapture(value)
          : this.getValueWithCapture(value);
        ({ value1, value2 } = res);
        return SemanticTree.BinaryOperatorStn(
          { operator: "&&" },
          SemanticTree.FunctionInvocationStn(
            SemanticTree.IdentifierStn({
              identifier: forFunctionInvocation ? "Caf.isF" : "Caf.exists"
            }),
            value1
          ),
          createRightStn(value2)
        );
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2), Error, p, arrayWithout;
  ({ Error, p, arrayWithout } = Caf.import(["Error", "p", "arrayWithout"], [
    StandardImport,
    global
  ]));
  return OperatorHelper = Caf.defClass(class OperatorHelper {}, function(
    OperatorHelper,
    classSuper,
    instanceSuper
  ) {
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
      "?": function(a, b) {
        return a.match(/^@?[_a-z0-9]+$/i)
          ? `${Caf.toString(a)} != null ? ${Caf.toString(a)} : ${Caf.toString(
              b
            )}`
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
      ["left", "<", "<=", ">", ">=", "instanceof", "in"],
      ["left", "===", "!==", "!=", "=="],
      ["left", "&"],
      ["left", "^"],
      ["left", "|"],
      ["left", "&&"],
      ["left", "||", "?"]
    ];
    this.opsToPrecidence = {};
    this.leftAssociativityByPrecidence = Caf.each(this.precidence, [], (
      v,
      i,
      into
    ) => {
      let leftAssociativityByPrecidence, operators;
      [leftAssociativityByPrecidence, ...operators] = v;
      Caf.each(operators, undefined, (op, k, into) => {
        this.opsToPrecidence[op] = i;
      });
      into.push(leftAssociativityByPrecidence === "left");
    });
    this.validateOperator = validateOperator = operator => {
      if (!this.opsToPrecidence[operator]) {
        throw new Error(
          `OperatorHelper: operator '${Caf.toString(operator)}' is not defined`
        );
      }
      return operator;
    };
    this.getNormalizedOperator = function(operator) {
      return (() => {
        switch (operator = operator.toString().trim()) {
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
    this.getOpPrecidence = op => {
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
        Caf.each(operators, undefined, (op, i, into) => {
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
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return ArrayStn = Caf.defClass(
    class ArrayStn extends BaseStn {
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
      this.prototype.toJs = function() {
        return `[${Caf.toString(
          Caf
            .e(this.children, [], (c, k, into) => {
              into.push(c.toJsExpression());
            })
            .join(", ")
        )}]`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    OperatorHelper = __webpack_require__(13),
    BaseStn = __webpack_require__(3),
    operatorIsInfixJs,
    binaryOperatorToJs,
    getOpPrecidence,
    getPrecidenceLevelIsLeftAssociative,
    Error,
    formattedInspect;
  ({
    operatorIsInfixJs,
    binaryOperatorToJs,
    getOpPrecidence,
    getPrecidenceLevelIsLeftAssociative,
    Error,
    formattedInspect
  } = Caf.i(
    [
      "operatorIsInfixJs",
      "binaryOperatorToJs",
      "getOpPrecidence",
      "getPrecidenceLevelIsLeftAssociative",
      "Error",
      "formattedInspect"
    ],
    [StandardImport, OperatorHelper, global]
  ));
  return BinaryOperatorStn = Caf.defClass(
    class BinaryOperatorStn extends BaseStn {
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
      this.prototype.toJs = function() {
        return this.toJsExpression();
      };
      this.prototype.toJsStatement = function() {
        return this.toJsExpression({ skipParens: true });
      };
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        if (this.operator === "?" && !this.left.isReference) {
          this.uniqueIdentifierHandle = this.scope.uniqueIdentifierHandle;
        }
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.prototype.toJsExpression = function() {
        let identifier, parentOperatorPrecidence;
        return this.operator === "?" && this.uniqueIdentifierHandle
          ? ({ identifier } = this.uniqueIdentifierHandle, `((${Caf.toString(
              identifier
            )} = ${Caf.toString(
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
              : (parentOperatorPrecidence = getOpPrecidence(
                  this.operator
                ), binaryOperatorToJs(
                  this.operator,
                  this.left.toJsExpressionWithParens({
                    parentOperatorPrecidence: parentOperatorPrecidence,
                    isLeftOperand: true
                  }),
                  this.right.toJsExpressionWithParens({
                    parentOperatorPrecidence: parentOperatorPrecidence,
                    isLeftOperand: false
                  })
                ));
      };
      this.prototype.toJsExpressionWithParens = function(options) {
        let parentOperatorPrecidence, isLeftOperand, operatorPrecidence;
        if (options) {
          ({ parentOperatorPrecidence, isLeftOperand } = options);
        }
        operatorPrecidence = getOpPrecidence(this.operator);
        return parentOperatorPrecidence != null &&
          operatorPrecidence < parentOperatorPrecidence
          ? this.toJsExpression()
          : parentOperatorPrecidence != null &&
              operatorPrecidence === parentOperatorPrecidence &&
              isLeftOperand ===
                getPrecidenceLevelIsLeftAssociative(operatorPrecidence)
              ? this.toJsExpression()
              : `(${Caf.toString(this.toJsExpression())})`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let IdentiferStn, StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return IdentiferStn = Caf.defClass(
    class IdentiferStn extends BaseStn {},
    function(IdentiferStn, classSuper, instanceSuper) {
      this.getter({
        name: function() {
          return this.props.identifier;
        },
        isIdentifier: function() {
          return true;
        },
        explicitIdentifier: function() {
          return this.props.identifier;
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
      this.prototype.toJs = function() {
        return (this.props.identifierHandle || this.props).identifier;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(93);

module.exports = Neptune.CaffeineScript || Neptune.addNamespace('CaffeineScript', CaffeineScript = (function(superClass) {
  extend(CaffeineScript, superClass);

  function CaffeineScript() {
    return CaffeineScript.__super__.constructor.apply(this, arguments);
  }

  return CaffeineScript;

})(Neptune.Base));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    SemanticTree = __webpack_require__(5),
    Nodes,
    isString,
    Error,
    inspect,
    isFunction,
    RootStn;
  ({ Nodes, isString, Error, inspect, isFunction, RootStn } = Caf.import(
    ["Nodes", "isString", "Error", "inspect", "isFunction", "RootStn"],
    [StandardImport, BabelBridge, SemanticTree, global]
  ));
  return CafParseNodeBaseClass = Caf.defClass(
    class CafParseNodeBaseClass extends Nodes.Node {},
    function(CafParseNodeBaseClass, classSuper, instanceSuper) {
      this._createSubclassBase = function() {
        return NodeSubclass = Caf.defClass(class NodeSubclass extends this {});
      };
      this.prototype.isImplicitArray = function() {
        return !!this.getImplicitArray();
      };
      this.prototype.getImplicitArray = function() {
        return Caf.extendedEach(this.matches, undefined, (
          match,
          k,
          into,
          brk
        ) => {
          let cafRet;
          return (cafRet = Caf.isF(match.getImplicitArray) &&
            match.getImplicitArray()) &&
            (brk(), cafRet);
        });
      };
      this.prototype.getMatchStns = function() {
        return Caf.each(this.matches, [], (m, k, into) => {
          if (m = Caf.isF(m.getStn) && m.getStn()) {
            into.push(m);
          }
        });
      };
      this.prototype.getStnFactory = function() {
        if (isString(this.stnFactory) && !SemanticTree[this.stnFactory]) {
          throw new Error(
            `stnFactory not found: ${Caf.toString(inspect(this.stnFactory))}`
          );
        }
        return SemanticTree[this.stnFactory] || this.stnFactory;
      };
      this.prototype.getStnChildren = function(left) {
        return this.stnChildren
          ? isFunction(this.stnChildren) ? this.stnChildren() : this.stnChildren
          : Caf.each(this.nonStnExtensionMatches, [], (m, k, into) => {
              if (m = m.getStn(left)) {
                into.push(m);
              }
            });
      };
      this.getter({
        isStnExtension: function() {
          let cafBase;
          return this.stnExtension ||
            Caf.exists(cafBase = this.presentMatches[0]) &&
              cafBase.isStnExtension;
        },
        stnExtensionMatches: function() {
          return Caf.each(this.presentMatches, [], (m, k, into) => {
            if (m.getStn && m.isStnExtension) {
              into.push(m);
            }
          });
        },
        nonStnExtensionMatches: function() {
          return Caf.each(this.presentMatches, [], (m, k, into) => {
            if (m.getStn && !m.isStnExtension) {
              into.push(m);
            }
          });
        }
      });
      this.prototype.getStn = function(left) {
        let stn, factory, x, currentStnLabel;
        stn = (factory = this.getStnFactory())
          ? factory(
              { parseTreeNode: this },
              Caf.isF(this.stnProps) && this.stnProps() || this.stnProps,
              left,
              this.getStnChildren()
            )
          : (x = this.getStnChildren(left), x.length === 1
              ? x[0]
              : x.length === 0 ? left : x);
        Caf.each(this.stnExtensionMatches, undefined, (extension, k, into) => {
          stn = extension.getStn(stn);
        });
        if (Caf.exists(stn) && stn.props) {
          currentStnLabel = stn.props.label;
          if (!currentStnLabel || this.label) {
            stn.props.label = this.label || this.ruleName;
            stn.props.pluralLabel = this.pluralLabel || this.pluralRuleName;
          }
        }
        return this.isRoot ? RootStn(stn) : stn;
      };
      this.prototype.getTransformedSemanticTree = function() {
        return this.getStn().transform();
      };
      this.prototype.toJs = function() {
        return this.getTransformedSemanticTree().toJs();
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    CafParseNodeBaseClass = __webpack_require__(18),
    Parser,
    isFunction,
    Error;
  ({ Parser, isFunction, Error } = Caf.import(
    ["Parser", "isFunction", "Error"],
    [StandardImport, BabelBridge, CafParseNodeBaseClass, global]
  ));
  return CaffeineScriptParser = Caf.defClass(
    class CaffeineScriptParser extends Parser {},
    function(CaffeineScriptParser, classSuper, instanceSuper) {
      let Rules = __webpack_require__(32),
        mixedIndentationRegexp,
        tabIndentationRegexp,
        spaceIndentationRegexp;
      this.nodeBaseClass = CafParseNodeBaseClass;
      Caf.each(Rules.modules, undefined, (mod, k, into) => {
        if (isFunction(mod)) {
          mod.call(this);
        } else {
          this.rule(mod);
        }
      });
      mixedIndentationRegexp = /(^|\n)( +\t|\t+ )/;
      tabIndentationRegexp = /(^|\n)\t/;
      spaceIndentationRegexp = /(^|\n) /;
      this.prototype.hasMixedIndentation = function(source) {
        return mixedIndentationRegexp.test(source) ||
          tabIndentationRegexp.test(source) &&
            spaceIndentationRegexp.test(source);
      };
      this.prototype.normalizeIndentation = function(source) {
        let e;
        if (this.hasMixedIndentation(source)) {
          e = new Error(
            "file must only contain spaces OR tabs for indentation, not both"
          );
          e.failureIndex = 0;
          throw e;
        }
        return tabIndentationRegexp.test(source)
          ? source.replace(/\t/g, " ")
          : source;
      };
      this.prototype.parse = function(source, options) {
        return instanceSuper.parse.call(
          this,
          this.normalizeIndentation(source),
          options
        );
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    SemanticTree,
    ValueBaseCaptureStn = __webpack_require__(12),
    Error;
  ({ Error } = Caf.i(["Error"], [StandardImport, global]));
  SemanticTree = __webpack_require__(6);
  return AccessorStn = Caf.defClass(
    class AccessorStn extends ValueBaseCaptureStn {
      constructor(props, children) {
        super(...arguments);
        switch (children.length) {
          case 1:
            this.key = children[0];
            break;
          case 2:
            this.value = children[0];
            this.key = children[1];
            break;
          default:
            throw new Error("expected 1 or 2 children");
        }
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
        }
      });
      this.prototype.transform = function() {
        return this.value
          ? this.transformAccessorChain()
          : instanceSuper.transform.apply(this, arguments);
      };
      this.prototype.toJs = function() {
        let identierString, cafBase;
        return this.value && this.key.isIdentifier
          ? (identierString = this.key.toJs()).match(/['"`]/)
              ? `${Caf.toString(
                  this.value.toJsExpressionWithParens()
                )}[${Caf.toString(identierString)}]`
              : `${Caf.toString(
                  this.value.toJsExpressionWithParens({ dotBase: true })
                )}.${Caf.toString(identierString)}`
          : `${Caf.toString(
              Caf.exists(cafBase = this.value) &&
                cafBase.toJsExpressionWithParens() ||
                ""
            )}[${Caf.toString(this.key.toJsExpression())}]`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BinaryOperatorStn = __webpack_require__(15),
    IdentifierStn = __webpack_require__(16),
    ReferenceStn = __webpack_require__(28),
    ArrayStn = __webpack_require__(14),
    SemanticTree,
    supportedOperatorsRegExp,
    ValueBaseCaptureStn = __webpack_require__(12);
  BinaryOperatorStn;
  IdentifierStn;
  ReferenceStn;
  ArrayStn;
  SemanticTree = __webpack_require__(6);
  supportedOperatorsRegExp = /^([-+*\/%]|)$/;
  return AssignmentStn = Caf.defClass(
    class AssignmentStn extends ValueBaseCaptureStn {
      constructor(props, children) {
        super(...arguments);
        this.operator = props.operator || "";
        this.lValue = children[0];
        this.rValue = children[1];
      }
    },
    function(AssignmentStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        let cafBase;
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          Caf.exists(cafBase = this.lValue) && cafBase.explicitIdentifier
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.prototype.transform = function() {
        return instanceSuper.transform
          .apply(this, arguments)
          .postSuperTransform();
      };
      this.prototype.postSuperTransform = function() {
        let value1, value2;
        return !this.operator.match(supportedOperatorsRegExp)
          ? ({ value1, value2 } = this.getValueWithBaseCapture(
              this.lValue
            ), BinaryOperatorStn(
              { operator: this.operator },
              value1,
              SemanticTree.AssignmentStn(value2, this.rValue)
            ))
          : this;
      };
      this.prototype.toJs = function() {
        return this.operator.match(supportedOperatorsRegExp)
          ? `${Caf.toString(this.lValue.toJs())} ${Caf.toString(
              this.operator
            )}= ${Caf.toString(this.rValue.toJsExpression())}`
          : `${Caf.toString(this.lValue.toJsExpression())} ${Caf.toString(
              this.operator
            )} ${Caf.toString(this.lValue.toJs())} = ${Caf.toString(
              this.rValue.toJsExpression()
            )}`;
      };
      this.prototype.toJsParenExpression = function() {
        return `(${Caf.toString(this.toJs())})`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    FunctionDefinitionArgsStn = __webpack_require__(10),
    BaseStn = __webpack_require__(3);
  FunctionDefinitionArgsStn;
  return FunctionDefinitionArgStn = Caf.defClass(
    class FunctionDefinitionArgStn extends BaseStn {
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
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    FunctionDefinitionArgsStn = __webpack_require__(10),
    StatementsStn = __webpack_require__(9),
    ScopeStnMixin = __webpack_require__(8),
    BaseStn = __webpack_require__(3),
    compactFlatten;
  ({ compactFlatten } = Caf.i(["compactFlatten"], [StandardImport, global]));
  FunctionDefinitionArgsStn;
  StatementsStn;
  return FunctionDefinitionStn = Caf.defClass(
    class FunctionDefinitionStn extends ScopeStnMixin(BaseStn) {
      constructor(props, children) {
        let onlyChild;
        if (children.length === 1) {
          [onlyChild] = children;
          if (!(onlyChild instanceof FunctionDefinitionArgsStn.class)) {
            children = [FunctionDefinitionArgsStn(), children[0]];
          }
        }
        super(props, children);
        this.arguments = children[0];
        this.statements = children[1];
      }
    },
    function(FunctionDefinitionStn, classSuper, instanceSuper) {
      this.prototype.cloneWithNewStatements = function(statements) {
        return new this.class(this.props, [
          this.arguments,
          StatementsStn(compactFlatten(statements))
        ]);
      };
      this.getter({
        needsParens: function() {
          return false;
        },
        needsParensAsStatement: function() {
          return !this.props.bound;
        },
        argumentNames: function() {
          let cafBase;
          return Caf.exists(cafBase = this.arguments) &&
            cafBase.argumentNames || [];
        },
        childrenToUpdateScope: function() {
          return compactFlatten([this.statements]);
        }
      });
      this.prototype.transform = function() {
        let foundParent;
        if (this.props.bound === "auto") {
          this.props.bound = (foundParent = this.findParent(
            /Class|FunctionDefinition/
          ))
            ? foundParent.type === "Class" ? false : true
            : false;
        }
        return instanceSuper.transform.apply(this, arguments);
      };
      this.prototype.toJs = function() {
        let returnIgnored,
          isConstructor,
          bound,
          argsDef,
          body,
          statements,
          bodyJs,
          constructorSuperIndex,
          beforeSuper,
          afterSuper,
          superJs;
        ({ returnIgnored, isConstructor, bound } = this.props);
        returnIgnored || (returnIgnored = isConstructor);
        [argsDef, body] = this.children;
        statements = [];
        argsDef = argsDef
          ? (statements = Caf.e(argsDef.children, [], (arg, k, into) => {
              let preBodyStatements;
              if (preBodyStatements = arg.getFunctionPreBodyStatementsJs()) {
                into.push(preBodyStatements);
              }
            }), argsDef.toJs())
          : "()";
        bodyJs = Caf.exists(body) && body.toFunctionBodyJsArray(!returnIgnored);
        if (this.props.isConstructor) {
          constructorSuperIndex = Caf.ee(bodyJs, undefined, (
            v,
            i,
            into,
            brk
          ) => {
            return v.match(/^super\(/) && (brk(), i);
          });
        }
        statements = compactFlatten(
          constructorSuperIndex >= 0
            ? (beforeSuper = bodyJs.slice(
                0,
                constructorSuperIndex
              ), afterSuper = bodyJs.slice(
                constructorSuperIndex + 1,
                bodyJs.length
              ), superJs = bodyJs[constructorSuperIndex], [
                this.getAutoLets(),
                beforeSuper,
                superJs,
                statements,
                afterSuper
              ])
            : [
                this.getAutoLets(),
                isConstructor && "super(...arguments)",
                statements,
                bodyJs
              ]
        );
        body = statements.length > 0
          ? `{${Caf.toString(statements.join("; "))};}`
          : "{}";
        return bound
          ? `${Caf.toString(argsDef)} => ${Caf.toString(body)}`
          : `${Caf.toString(
              isConstructor ? "constructor" : "function"
            )}${Caf.toString(argsDef)} ${Caf.toString(body)}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let Error = global.Error, BaseStn = __webpack_require__(3);
  return LetStn = Caf.defClass(class LetStn extends BaseStn {}, function(
    LetStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let identifiers, identifier;
      ({ identifiers, identifier } = this.props);
      return identifiers
        ? (!(identifiers.length > 0)
            ? (() => {
                throw new Error("LetStn identifiers empty");
              })()
            : undefined, `let ${Caf.toString(identifiers.join(", "))}`)
        : identifier
            ? `let ${Caf.toString(identifier)}`
            : (() => {
                throw new Error("LetStn needs props!");
              })();
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    legalUnquotedPropName,
    escapePropName,
    BaseStn = __webpack_require__(3),
    escapeJavascriptString,
    Error;
  ({ escapeJavascriptString, Error } = Caf.i(
    ["escapeJavascriptString", "Error"],
    [StandardImport, global]
  ));
  legalUnquotedPropName = /^(0|[1-9][0-9]*|[a-z_][0-9_a-z]*)$/i;
  escapePropName = function(rawPropName) {
    return rawPropName.match(legalUnquotedPropName)
      ? rawPropName
      : escapeJavascriptString(rawPropName);
  };
  return ObjectPropNameStn = Caf.defClass(
    class ObjectPropNameStn extends BaseStn {
      constructor() {
        let nameStn, cafBase;
        super(...arguments);
        [nameStn] = this.children;
        (cafBase = this.props).value ||
          (cafBase.value = nameStn
            ? nameStn.toJs()
            : this.parseTreeNode.toString());
      }
    },
    function(ObjectPropNameStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let nameStn, str;
        [nameStn] = this.children;
        return nameStn
          ? (str = nameStn.toJs(), nameStn.children.length > 0
              ? `[${Caf.toString(str)}]`
              : (!(nameStn.type === "String" || nameStn.type === "Identifer")
                  ? (() => {
                      throw new Error(
                        `internal error - should be a StringStn or IdentifierStn. Actual type: ${Caf.toString(
                          nameStn.type
                        )}`
                      );
                    })()
                  : undefined, str))
          : escapePropName(this.props.value);
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return ObjectPropValueStn = Caf.defClass(
    class ObjectPropValueStn extends BaseStn {},
    function(ObjectPropValueStn, classSuper, instanceSuper) {
      this.getter({ isObject: true });
      this.prototype.toJs = function() {
        let prop, value;
        [prop, value] = this.children;
        return `${Caf.toString(prop.toJs())}: ${Caf.toString(
          value.toJsExpression()
        )}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    ArrayStn,
    BaseStn = __webpack_require__(3);
  ArrayStn = __webpack_require__(14);
  return ObjectStn = Caf.defClass(class ObjectStn extends BaseStn {}, function(
    ObjectStn,
    classSuper,
    instanceSuper
  ) {
    let splitObjectsAtSameProps;
    this.prototype.toJs = function() {
      return `{${Caf.toString(
        Caf
          .e(this.children, [], (c, k, into) => {
            into.push(c.toJs());
          })
          .join(", ")
      )}}`;
    };
    this.prototype.toJsStatement = function() {
      return `(${Caf.toString(this.toJs())})`;
    };
    splitObjectsAtSameProps = function(children) {
      let currentDefined, listOfObjectLiterals, currentOrder;
      currentDefined = {};
      listOfObjectLiterals = [currentOrder = []];
      Caf.e(children, undefined, (child, k, into) => {
        let found, value;
        if (found = child.find(/ObjectPropNameStn/)) {
          [{ props: { value } }] = found;
          if (currentDefined[value]) {
            currentDefined = {};
            listOfObjectLiterals.push(currentOrder = []);
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
        : new ArrayStn(
            Caf.e(listOfObjectLiterals, [], (c, k, into) => {
              into.push(new this(props, c));
            })
          );
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return ReferenceStn = Caf.defClass(
    class ReferenceStn extends BaseStn {},
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
        explicitIdentifier: function() {
          let cafBase;
          return Caf.exists(cafBase = this.labeledChildren.identifier) &&
            cafBase.explicitIdentifier;
        }
      });
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        let cafBase;
        return Caf.exists(cafBase = this.props.identifierHandle) &&
          cafBase.identifier ||
          this.labeledChildren.identifier.toJs();
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    Lib = __webpack_require__(7),
    BaseStn = __webpack_require__(3),
    escapeJavascriptString,
    deescapeSpaces,
    escapeUnescaped,
    escapeMustEscapes;
  ({
    escapeJavascriptString,
    deescapeSpaces,
    escapeUnescaped,
    escapeMustEscapes
  } = Caf.i(
    [
      "escapeJavascriptString",
      "deescapeSpaces",
      "escapeUnescaped",
      "escapeMustEscapes"
    ],
    [StandardImport, Lib, global]
  ));
  return StringStn = Caf.defClass(class StringStn extends BaseStn {}, function(
    StringStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      return escapeJavascriptString(deescapeSpaces(this.value)).replace(
        /\\\\/g,
        "\\"
      );
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
    this.prototype.trimRight = function() {
      return this.props.value = this.value.trimRight();
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
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return ThisStn = Caf.defClass(class ThisStn extends BaseStn {}, function(
    ThisStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.needsParens = false;
    this.prototype.toJs = function() {
      return this.children[0]
        ? `this.${Caf.toString(this.children[0].toJs())}`
        : "this";
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return UndefinedStn = Caf.defClass(
    class UndefinedStn extends BaseStn {},
    function(UndefinedStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return "undefined";
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87).addModules({
  Accessors: __webpack_require__(36),
  ArrayLiterals: __webpack_require__(37),
  Blocks: __webpack_require__(38),
  Classes: __webpack_require__(39),
  Comments: __webpack_require__(40),
  Comprehensions: __webpack_require__(41),
  ControlStructures: __webpack_require__(42),
  DestructuringAssignment: __webpack_require__(43),
  Expressions: __webpack_require__(44),
  Functions: __webpack_require__(45),
  KeywordLiterals: __webpack_require__(46),
  Literals: __webpack_require__(47),
  NumberLiterals: __webpack_require__(48),
  ObjectLiterals: __webpack_require__(49),
  Operators: __webpack_require__(50),
  RegExp: __webpack_require__(51),
  Root: __webpack_require__(52),
  Statements: __webpack_require__(53),
  StringLiterals: __webpack_require__(54),
  TagMacros: __webpack_require__(55),
  Tokens: __webpack_require__(56),
  Values: __webpack_require__(57)
});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("art-standard-lib");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17).includeInNamespace(__webpack_require__(35)).addModules({
  CaffeineScriptParser: __webpack_require__(19),
  CafParseNodeBaseClass: __webpack_require__(18),
  Lib: __webpack_require__(7),
  OperatorHelper: __webpack_require__(13),
  StandardImport: __webpack_require__(2)
});

__webpack_require__(32);

__webpack_require__(5);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let ArtStandardLib = __webpack_require__(33), log;
  ({ log } = Caf.import(["log"], [ArtStandardLib, global]));
  return {
    version: __webpack_require__(88).version,
    compile: function(source, options = {}) {
      let parseTree,
        CaffeineScriptParser = __webpack_require__(19),
        stn,
        transformedStn,
        e,
        cafError;
      return (() => {
        try {
          parseTree = CaffeineScriptParser.parse(source, options);
          stn = parseTree.getStn();
          transformedStn = stn.transform();
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
            !(e.location != null ||
              e.sourceFile != null ||
              e.message.match(/parse|expect/i))
          ) {
            log.error({
              parseTree: parseTree,
              stn: stn,
              transformedStn: transformedStn
            });
          }
          return (() => {
            throw e;
          })();
        }
      })();
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2);
  return function() {
    return this.rule(
      {
        dotAccessor: "existanceTest:questionMark? dot key:identifier assignmentExtension?",
        bracketAccessor: "existanceTest:questionMark? openBracket_ key:expression _closeBracket assignmentExtension?"
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
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    Extensions;
  ({ Extensions } = Caf.import(["Extensions"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule(
      {
        array: [
          "openBracket_ valueListBlock _closeBracket",
          {
            pattern: "'[]' _? valueListToEolAndBlock",
            getImplicitArray: function() {
              return false;
            }
          },
          "'[]'"
        ],
        brackedArray: "openBracket_ valueList _comma_? _closeBracket",
        implicitArray: [
          {
            pattern: "start:expression _comma_ valueList _comma_?",
            getImplicitArray: function() {
              return this;
            },
            stnFactory: "ArrayStn",
            stnProps: { implicitArray: true }
          },
          {
            pattern: "start:literal _ valueList _comma_?",
            getImplicitArray: function() {
              return this;
            },
            stnFactory: "ArrayStn",
            stnProps: { implicitArray: true }
          }
        ]
      },
      { stnFactory: "ArrayStn" }
    );
    this.rule({
      valueListBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "valueListBlockSubParse"
      }),
      valueListToEolAndBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(
        { rule: "valueListBlockSubParse" }
      ),
      valueListBlockSubParse: "end* listItemStatement*"
    });
    this.rule({
      valueList: [
        { pattern: "element:listItemExpression _comma_ valueList" },
        { pattern: "element:literal _ valueList" },
        { pattern: "element:listItemExpression" }
      ]
    });
    return this.rule({
      listItemStatement: [
        {
          pattern: "statementWithoutEnd newLineStatementExtension* ellipsis end",
          stnFactory: "ArraySpreadElementStn"
        },
        { pattern: "statementWithoutEnd newLineStatementExtension* end" }
      ],
      listItemExpression: [
        { pattern: "expression ellipsis", stnFactory: "ArraySpreadElementStn" },
        { pattern: "expression" }
      ]
    });
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    Extensions;
  ({ Extensions } = Caf.import(["Extensions"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule({ blocks: "block+" });
    this.rule({
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
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2);
  return {
    classDefinition: {
      pattern: "/class/ _ className:identifier classExtends:_extendsClause? body:actualBlockEmptyOk?",
      stnFactory: "ClassStn"
    },
    _extendsClause: {
      pattern: "_ /extends/ _ expressionWithOneLessBlock",
      toJs: function() {
        return this.expressionWithOneLessBlock.toJs();
      }
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2);
  return function() {
    return this.rule(
      {
        _: "/ +/ comment?",
        end: "lineEndComment",
        comment: [
          { pattern: "/##[^\n]*/ unparsedBlock*" },
          { pattern: /\ *#([^\n$\w\u007f-\uffff]+[^\n]*|(?=\n|$))/ }
        ],
        _end: /( *(\n|; *|$))+/,
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
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2);
  return function() {
    this.rule(
      {
        comprehensionVariableDef_: "!comprehensionIterationType argDef optionalArg? _ &comprehensionIterationType"
      },
      { stnFactory: "FunctionDefinitionArgsStn" }
    );
    this.rule({
      optionalArg: "_comma_? !with argDef",
      comprehensionIterationTypeClause_: "comprehensionIterationType _",
      comprehensionIterable: "expressionWithOneLessBlock",
      comprehensionInto: "_? into _ expressionWithOneLessBlock",
      comprehensionWhen: "_? when _ expressionWithOneLessBlock",
      comprehensionWith: "_? withOrDo _ expression",
      comprehensionBody: ["block", "comprehensionWith"]
    });
    return this.rule(
      {
        comprehension: "outputType:comprehensionOutputType _ variableDefinition:comprehensionVariableDef_? iterationType:comprehensionIterationTypeClause_? iterable:comprehensionIterable into:comprehensionInto? whenClause:comprehensionWhen? body:comprehensionBody?"
      },
      { stnFactory: "ComprehensionStn" }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    Extensions;
  ({ Extensions } = Caf.import(["Extensions"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule(
      {
        controlStatement: [
          "ifUnlessWhileUntil _ expression:expressionWithOneLessBlock body:block             elseBody:elseClause?",
          "ifUnlessWhileUntil _ expression:expressionWithOneLessBlock body:block?            elseBody:elseClause",
          "ifUnlessWhileUntil _ expression:expression _ thenDo _      body:implicitArrayOrExpression elseBody:elseClause?"
        ]
      },
      {
        stnFactory: "ControlOperatorStn",
        stnProps: function() {
          let cafBase;
          return {
            operand: this.ifUnlessWhileUntil.toString(),
            joiner: Caf.exists(cafBase = this.thenDo) && cafBase.toString()
          };
        }
      }
    );
    this.rule(
      {
        controlStatement: [
          "/try/ _ body:implicitArrayOrExpression _? optionalCatch:catchClause?",
          "/try/ body:block optionalCatch:catchClause?"
        ]
      },
      { stnFactory: "TryStn" }
    );
    this.rule(
      {
        catchClause: [
          "_end? /catch/ _ errorIdentifier:identifier body:block?",
          "_end? /catch/ _? body:block?"
        ]
      },
      { stnFactory: "CatchStn" }
    );
    this.rule({
      controlStatement: {
        pattern: "/do/ _ functionDefinition",
        stnFactory: "DoStn"
      }
    });
    this.rule(
      {
        controlStatement: [
          "/switch/ _ condition:expressionWithOneLessBlock? _? switchBodyBlock",
          "/switch/ _ condition:expression? switchBody",
          "/switch/ switchBodyBlock",
          "/switch/ switchBody"
        ]
      },
      { stnFactory: "SwitchStn" }
    );
    this.rule({
      switchBody: "switchWhen:switchWhenClause+ switchElse:elseClause?",
      thenClause: "_ /then/ _ lineOfStatements",
      switchBodyBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "switchBody"
      })
    });
    this.rule(
      {
        switchWhenClause: [
          "end? when _ whenValue:expressionWithOneLessBlock thenDo:block",
          "end? when _ whenValue:implicitArrayOrExpression thenDo:thenClause"
        ]
      },
      { stnFactory: "SwitchWhenStn" }
    );
    return this.rule({
      ifUnlessWhileUntil: /if|unless|while|until/,
      thenDo: /then|do/,
      when: /when/,
      elseClause: [
        "controlStructorClauseJoiner /else/ block",
        "controlStructorClauseJoiner /else/ _ implicitArrayOrExpression"
      ],
      controlStructorClauseJoiner: ["/ +/", "end"]
    });
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2);
  return function() {
    this.rule(
      {
        destructuringAssignment: "structure:destructuringTarget _? '=' _? value:assignedValue"
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
    this.rule({ arrayDestructuring: "'[' _? arrayDestructuringList _? ']'" }, {
      stnFactory: "ArrayDestructuringStn"
    });
    this.rule({
      arrayDestructuringList: [
        {
          pattern: "element:arrayDestructuringElement _comma_ arrayDestructuringList"
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
          pattern: "element:objectDestructuringElement _comma_ objectDestructuringList"
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
        labeledDestructuringTarget: "identifier _? ':' _? arrayDestructuringElement"
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
        destructuringIdentifier: "identifier destructuringDefault:destructuringDefault?"
      },
      { stnFactory: "DestructuringIdentifierStn" }
    );
    return this.rule({ destructuringDefault: "_? '=' _? expression" });
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    SemanticTree = __webpack_require__(5),
    matchBlock,
    upToButNotEol,
    Extensions,
    ArrayStn;
  ({ Extensions, ArrayStn } = Caf.import(["Extensions", "ArrayStn"], [
    StandardImport,
    BabelBridge,
    SemanticTree,
    global
  ]));
  ({ matchBlock } = Extensions.IndentBlocks);
  upToButNotEol = /[^\n]*/y;
  return function() {
    this.rule({
      lineStartExpression: "multilineImplicitObject",
      implicitArrayOrExpression: [
        { pattern: "implicitArray" },
        { pattern: "expression" }
      ],
      expression: [
        "binOpExpression",
        "unaryOpExpression",
        "expressionWithoutBinOps"
      ],
      expressionWithoutBinOps: [
        "controlStatement",
        "comprehension",
        "classDefinition",
        "destructuringAssignment",
        "structuredLiteral",
        "throwExpression",
        "newInstance",
        "functionDefinition",
        "value"
      ],
      structuredLiteral: ["object", "array"]
    });
    this.rule({ newInstance: "new _ expressionWithoutBinOps" }, {
      stnFactory: "NewInstanceStn"
    });
    this.rule({ throwExpression: "throw _ expressionWithoutBinOps" }, {
      stnFactory: "ThrowStn"
    });
    return this.rule({
      expressionWithOneLessBlock: {
        parse: function(parentNode) {
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
            ? ([m] = match, endOffset = offset += m.length, (() => {
                while (match = matchBlock(source, offset)) {
                  endOffset = offset;
                  ({ matchLength } = match);
                  offset += matchLength;
                }
              })(), expressionSource = source.slice(
                originalOffset,
                endOffset
              ), parentNode.subparse(expressionSource, {
                allowPartialMatch: true,
                rule: "implicitArrayOrExpression",
                originalOffset: originalOffset,
                originalMatchLength: endOffset - originalOffset
              }))
            : undefined;
        }
      },
      rValueBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock({
        rule: "rValueBlockSubParse"
      }),
      rValueBlockSubParse: {
        pattern: "root",
        getStn: function() {
          let statements;
          ({ statements } = this.root);
          return statements.length === 1
            ? statements[0].getStn()
            : ArrayStn(this.root.getMatchStns());
        }
      }
    });
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    getPropertySetters,
    Extensions,
    Error;
  ({ Extensions, Error } = Caf.import(["Extensions", "Error"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  getPropertySetters = function(node, list = []) {
    let prop;
    if (node) {
      if (prop = Caf.isF(node.shouldSetProperty) && node.shouldSetProperty()) {
        list.push(prop);
      } else {
        Caf.each(node.matches, undefined, (match, k, into) => {
          getPropertySetters(match, list);
        });
      }
    }
    return list;
  };
  return function() {
    this.rule(
      {
        functionDefinition: {
          pattern: "args:argsDefinition? _arrow_ body:functionDefinitionBodyBlock?"
        }
      },
      {
        stnFactory: "FunctionDefinitionStn",
        stnProps: function() {
          return {
            bound: (() => {
              switch (this._arrow_.text.match(/(=>|~>|->)/)[0]) {
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
    );
    this.rule({
      functionDefinitionBodyBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock()
    });
    this.rule({ argsDefinition: "openParen_ argDefList? _closeParen" }, {
      stnFactory: "FunctionDefinitionArgsStn"
    });
    this.rule({
      argDefList: ["argDef _comma_ argDefList", "argDef _ argDefList", "argDef"]
    });
    this.rule(
      {
        argDef: [
          "at:/@/? target:identifier argIdentifierExtension?",
          "target:destructuringTarget argIdentifierExtension?"
        ]
      },
      {
        stnFactory: "FunctionDefinitionArgStn",
        stnProps: function() {
          let cafBase;
          return {
            rest: !!(Caf.exists(cafBase = this.argIdentifierExtension) &&
              cafBase.ellipsis),
            assignThisProperty: !!this.at
          };
        }
      }
    );
    this.rule({
      argIdentifierExtension: ["defaultValue", "ellipsis"],
      defaultValue: { pattern: "_equals_ expression" }
    });
    this.rule({
      superFunctionInvocation: [
        "openParen_ valueList? _closeParen",
        "_? implicitArrayOrExpression",
        "_? valueListBlock"
      ]
    });
    return this.rule(
      {
        functionInvocation: [
          "existanceTest:questionMark? openParen_ values:valueList? _closeParen",
          "existanceTest:questionMark? !/[-+]/ _? values:valueList",
          "existanceTest:questionMark? _? values:valueListBlock"
        ]
      },
      {
        stnFactory: "FunctionInvocationStn",
        stnExtension: true,
        stnProps: function() {
          return { existanceTest: !!this.existanceTest };
        },
        stnChildren: function() {
          let cafBase;
          return Caf.exists(cafBase = this.values) && cafBase.getStn();
        }
      }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2);
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
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2);
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
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2);
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
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    SemanticTree = __webpack_require__(5),
    Extensions,
    ObjectStn;
  ({ Extensions, ObjectStn } = Caf.import(["Extensions", "ObjectStn"], [
    StandardImport,
    BabelBridge,
    SemanticTree,
    global
  ]));
  return function() {
    this.rule({
      singleOrMultilineImplicitObject: ["multilineImplicitObject", "object"]
    });
    this.rule(
      {
        object: [
          "props:implicitObject",
          "'{}' _? props:propertyList",
          "'{}' _? props:objectLiteralBlock",
          "'{}'"
        ],
        bracketedObject: "openCurly_ props:propertyList _closeCurly",
        multilineImplicitObject: {
          pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression multilineImplicitObjectExtension+"
        }
      },
      {
        getStn: function() {
          let children;
          children = Caf.each(this.getMatchStns(), [], (m, k, into) => {
            into.push(m instanceof ObjectStn.class ? m.children : m);
          });
          return ObjectStn(children);
        }
      }
    );
    this.rule({
      multilineImplicitObjectExtension: "end+ !implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression",
      objectLiteralBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(
        { rule: "singleOrMultilineImplicitObject" }
      ),
      implicitObject: { pattern: "propertyList" },
      implicitObjectWithTwoOrMorePropsOnOneLine: [
        "literalProp _ propertyList",
        "valueProp _comma_ propertyList"
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
        valuePropWithComplexExpression: [
          "propName _colon_ propValue:implicitArrayOrExpression",
          "propName _colon_ propValue:propertyValueBlock"
        ]
      },
      { name: "literalObjectProperty", stnFactory: "ObjectPropValueStn" }
    );
    this.rule({
      propertyValueBlock: "rValueBlock",
      propName: "computedPropName",
      computedPropName: {
        pattern: "openBracket_ expression _closeBracket",
        stnFactory: "AccessorStn"
      }
    });
    this.rule({ stringLiteralPropNameTail: ["_ /:/ !unquotedString", "/:/"] });
    return this.rule(
      {
        propName: [
          "!/then\\s/ str:identifier &_colon_",
          "!/then\\s/ str:unquotedString &/:/",
          "str:stringLiteral &stringLiteralPropNameTail"
        ]
      },
      { stnFactory: "ObjectPropNameStn" }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    OperatorHelper = __webpack_require__(13),
    SemanticTree = __webpack_require__(5),
    Error,
    resolveOperatorPrecidence,
    compactFlatten,
    getNormalizedOperator,
    BinaryOperatorStn,
    UnaryOperatorStn;
  ({
    Error,
    resolveOperatorPrecidence,
    compactFlatten,
    getNormalizedOperator,
    BinaryOperatorStn,
    UnaryOperatorStn
  } = Caf.import(
    [
      "Error",
      "resolveOperatorPrecidence",
      "compactFlatten",
      "getNormalizedOperator",
      "BinaryOperatorStn",
      "UnaryOperatorStn"
    ],
    [StandardImport, OperatorHelper, SemanticTree, global]
  ));
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
          Caf.each(this.binaryOperatorAndExpressions, [], (
            opAndExp,
            k,
            into
          ) => {
            into.push(getNormalizedOperator(opAndExp.binaryOperator));
          }),
          compactFlatten([
            left,
            Caf.each(this.binaryOperatorAndExpressions, [], (
              opAndExp,
              k,
              into
            ) => {
              into.push(opAndExp.rValue.getStn());
            })
          ]),
          function(operandA, operandB, operator) {
            return BinaryOperatorStn(
              { operator: operator },
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
        pattern: "binaryOperator _? binOpExpression",
        stnProps: function() {
          return { operator: getNormalizedOperator(this.binaryOperator) };
        },
        stnFactory: "BinaryOperatorStn",
        stnExtension: true
      },
      {
        pattern: "binaryOperator _? rValueBlock",
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
        Caf.each(this.unaryTailOperators || [], undefined, (
          operand,
          k,
          into
        ) => {
          stn = UnaryOperatorStn({ operand: operand.toString().trim() }, stn);
        });
        Caf.each((this.unaryOperator_s || []).slice().reverse(), undefined, (
          operand,
          k,
          into
        ) => {
          stn = UnaryOperatorStn({ operand: operand.toString().trim() }, stn);
        });
        return stn;
      }
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    SemanticTree = __webpack_require__(5);
  return {
    regExpLiteral: [
      {
        pattern: "regExpStart regExpMiddle regExpEnd regExpModifiers?",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let cafBase;
          return {
            value: this.regExpMiddle.toString(),
            modifiers: Caf.exists(cafBase = this.regExpModifiers) &&
              cafBase.toString()
          };
        }
      },
      {
        pattern: "'///' multilineRegExpMiddle* '///' regExpModifiers?",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let cafBase;
          return {
            modifiers: Caf.exists(cafBase = this.regExpModifiers) &&
              cafBase.toString()
          };
        }
      }
    ],
    regExpStart: "'/' !/[ \\/]/",
    regExpMiddle: /([^\/\\\n]|\\.|\#(?!\{))*/,
    regExpEnd: /\//,
    regExpModifiers: /([igmuy]*)/,
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
      pattern: "interpolationStart expression interpolationEnd"
    },
    multilineRegExpForwardSlashes: {
      pattern: /\/\/?(?!\/)/,
      stnFactory: "StringStn",
      stnProps: function() {
        return { value: this.text.replace(/\//g, "\\/") };
      }
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  return {
    root: {
      pattern: "lineStartComment* statement*",
      stnFactory: "StatementsStn"
    },
    nonEmptyRoot: {
      pattern: "lineStartComment* statement+",
      stnFactory: "StatementsStn"
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    SemanticTree = __webpack_require__(5),
    ControlOperatorStn;
  ({ ControlOperatorStn } = Caf.import(["ControlOperatorStn"], [
    StandardImport,
    BabelBridge,
    SemanticTree,
    global
  ]));
  return {
    statement: [
      "statementWithoutEnd newLineStatementExtension* end",
      "importStatement"
    ],
    tailControlOperator: /\ +(if|while|until|unless) +/,
    tailControlOperatorComplexExpression: "tailControlOperator implicitArrayOrExpression",
    statementWithoutEnd: [
      "lineStartExpression",
      "implicitArrayOrExpression !tailControlOperator",
      {
        pattern: "implicitArrayOrExpression tailControlOperatorComplexExpression+",
        getStn: function() {
          let stn;
          stn = this.implicitArrayOrExpression.getStn();
          Caf.each(this.tailControlOperatorComplexExpressions, undefined, (
            tco,
            k,
            into
          ) => {
            stn = ControlOperatorStn(
              { operand: tco.tailControlOperator.toString().trim() },
              tco.implicitArrayOrExpression.getStn(),
              stn
            );
          });
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
      pattern: "/import/ _ valueList end root",
      stnFactory: "ImportStn"
    },
    newLineStatementExtension: [
      "end lineStartBinaryOperatorAndExpression",
      "end &/\\??\\./ valueExtension+ binaryOperatorSequenceExtension?"
    ],
    lineOfStatements: {
      pattern: "statementSemi* statementWithoutEnd",
      stnFactory: "StatementsStn"
    },
    statementSemi: "statementWithoutEnd _? ';' _?"
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    SemanticTree = __webpack_require__(5),
    Lib = __webpack_require__(7),
    Extensions,
    StringStn,
    InterpolatedStringStn;
  ({ Extensions, StringStn, InterpolatedStringStn } = Caf.import(
    ["Extensions", "StringStn", "InterpolatedStringStn"],
    [StandardImport, BabelBridge, SemanticTree, Lib, global]
  ));
  return function() {
    this.rule({
      doubleQuote: /"/,
      singleQuote: /'/,
      interpolationStart: /\#\{/,
      interpolationEnd: /\}/,
      dqStringMiddle: /([^"\\#]|\\.|\#(?!\{))*/,
      sqStringMiddle: /([^'\\#]|\\.|\#(?!\{))*/,
      blockStringMiddle: /([^\\#]|\\.|\#(?!\{))*/
    });
    this.rule({
      stringLiteral: [
        {
          pattern: '/""/ tripple:/"/? &/ +[^ \\n]| *\\n/ stringBlock',
          getStn: function() {
            let ret;
            ret = this.stringBlock.getStn();
            if (!this.tripple) {
              ret.compactNewLines();
            }
            Caf.isF(ret.trimRight) && ret.trimRight();
            return ret;
          }
        },
        {
          pattern: "/''/ tripple:/'/? &/ +[^ \\n]| *\\n/ unparsedBlock",
          getStn: function() {
            let ret;
            ret = StringStn({ value: this.unparsedBlock.toString() });
            if (!this.tripple) {
              ret.compactNewLines();
            }
            return ret;
          }
        },
        {
          pattern: /:(?!:)[^\\\n\s,)\]\}]+/,
          getStn: function() {
            return StringStn({ value: this.toString().slice(1) });
          }
        },
        {
          pattern: /#[$\w\u007f-\uffff]+/,
          getStn: function() {
            return StringStn({ value: this.toString() });
          }
        },
        {
          pattern: /[-+]?(?!00)[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?[$\w\u007f-\uffff]+/,
          getStn: function() {
            return StringStn({ value: this.toString() });
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
        stringBlockBody: "/[ \\n]*/ mid:blockStringMiddle interpolation:blockStringInterpolation?"
      },
      {
        getStnChildren: function(appendTo = []) {
          let cafBase;
          if (this.mid.matchLength > 0) {
            appendTo.push(StringStn({ value: this.mid.toString() }));
          }
          Caf.exists(cafBase = this.interpolation) &&
            cafBase.getStnChildren(appendTo);
          return appendTo;
        },
        getStn: function() {
          let ret;
          ret = this.interpolation
            ? InterpolatedStringStn(this.getStnChildren())
            : StringStn({ value: this.mid.toString() });
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
        "interpolationStart expression:rValueBlock _end? interpolationEnd"
      ]
    });
    return this.rule(
      {
        dqStringInterpolation: "interpolation mid:dqStringMiddle interpolationContinues:dqStringInterpolation?",
        sqStringInterpolation: "interpolation mid:sqStringMiddle interpolationContinues:sqStringInterpolation?",
        blockStringInterpolation: "interpolation mid:blockStringMiddle interpolationContinues:blockStringInterpolation?"
      },
      {
        getStnChildren: function(appendTo = []) {
          let cafBase;
          appendTo.push(this.interpolation.expression.getStn());
          if (this.mid.matchLength > 0) {
            appendTo.push(StringStn({ value: this.mid.toString() }));
          }
          Caf.exists(cafBase = this.interpolationContinues) &&
            cafBase.getStnChildren(appendTo);
          return appendTo;
        }
      }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    SemanticTree = __webpack_require__(5),
    upperCamelCase,
    Error;
  ({ upperCamelCase, Error } = Caf.import(["upperCamelCase", "Error"], [
    StandardImport,
    global
  ]));
  SemanticTree;
  return {
    tagMacro: {
      pattern: "/</ identifier />/ actualToEolAndBlock",
      getStnFactory: function() {
        let factoryName, factory;
        factoryName = upperCamelCase(this.identifier.text);
        factory = SemanticTree[factoryName] ||
          SemanticTree[factoryName + "Stn"];
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
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  return function() {
    this.rule({
      _equals_: /\ *= */,
      _colon_: /: *| +:( +|(?=\n))/,
      _comma_: /\ *, *\n*/,
      _arrow_: /\ *[-~=]> */,
      openParen_: /\( */,
      _closeParen: /\ *\)/,
      openBracket_: /\[ *(\n*(?!\s))?/,
      _closeBracket: /[ \n]*\]/,
      openCurly_: /\{ */,
      _closeCurly: /\ *\}/,
      _else: /(( *\n)+| +)else/,
      ellipsis: "'...'",
      reservedWord: /(for|yes|no|on|off|instanceof|import|throw|return|break|into|returning|with|do|switch|when|if|until|try|catch|while|unless|then|else|and|or|is|isnt|in|from|not)\b/,
      identifier: {
        pattern: /(?!\d)((?:(?!\s)[$\w\u007f-\uffff])+)/,
        stnFactory: "IdentifierStn",
        stnProps: function() {
          return { identifier: this.toString() };
        }
      },
      pathedRequire: /((?:(?!\s)[\/$\w\u007f-\uffff])+)/,
      unquotedString: /[-~!@\#$%^&*_+=|\\<>?\/.$\w\u007f-\uffff]+/,
      unaryTailOperator: /\?/,
      unaryOperator_: /([!~]|not\b) *|-(?![:])/,
      binaryOperator: /&&|\|\||&(?=\s)|\||\^|\?|((and|or|in|instanceof)\b)|<<|>>>|>>|==|!=|<=|>=|<|>|\/\/|%%|\*\*|[-+*\/%]/,
      _assignmentOperator_: / *(&&|\|\||&|\||\^|\?|((and|or|isnt|is|in)\b)|<<|>>>|>>|\/\/|%%|\*\*|[-+*\/%])?= */,
      new: /new\b/,
      throw: /throw\b/,
      with: /with\b/,
      when: /when\b/,
      into: /(into|returning)\b/,
      withOrDo: /(with|do)\b/
    });
    return this.rule(
      {
        comprehensionOutputType: /(object|array|reduce|each|find)\b/,
        comprehensionIterationType: /(from|in)\b/,
        dot: /\./,
        questionMark: /\?/
      },
      { stnFactory: "SemanticTokenStn" }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(4),
    Extensions;
  ({ Extensions } = Caf.import(["Extensions"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule({ value: "simpleValue valueExtension*" });
    this.rule({
      valueExtension: [
        "dotAccessor",
        "bracketAccessor",
        "functionInvocation",
        "blockValueExtension"
      ],
      simpleValue: [
        "require",
        "tagMacro",
        "globalIdentifier",
        "this",
        "thisProperty",
        "literal",
        "super",
        "unqualifiedIdentifier",
        "parentheticalExpression"
      ]
    });
    this.rule({ parentheticalExpression: "'(' _? expression _? ')'" });
    this.rule({
      require: {
        pattern: "/&/ pathedRequire",
        stnProps: function() {
          return { require: this.pathedRequire.text };
        },
        stnFactory: "RequireStn"
      }
    });
    this.rule({
      unqualifiedIdentifier: {
        pattern: "!reservedWord identifierReference assignmentExtension?"
      }
    });
    this.rule({
      identifierReference: { pattern: "identifier", stnFactory: "ReferenceStn" }
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
        pattern: /(global|require|module|eval)\b/,
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
    this.rule({ assignedValue: ["implicitArrayOrExpression", "rValueBlock"] });
    this.rule(
      {
        assignmentExtension: [
          "assignmentOperator:_assignmentOperator_ _end? implicitArrayOrExpression",
          "assignmentOperator:_assignmentOperator_ rValueBlock"
        ]
      },
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
    return this.rule({
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
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return ArrayDestructuringStn = Caf.defClass(
    class ArrayDestructuringStn extends BaseStn {},
    function(ArrayDestructuringStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `[${Caf.toString(this.childrenToJs(", "))}]`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return ArraySpreadElementStn = Caf.defClass(
    class ArraySpreadElementStn extends BaseStn {},
    function(ArraySpreadElementStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `...${Caf.toString(this.childrenToJs())}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    StringStn = __webpack_require__(29),
    ObjectStn = __webpack_require__(27),
    ObjectPropValueStn = __webpack_require__(26),
    ObjectPropNameStn = __webpack_require__(25),
    BaseStn = __webpack_require__(3);
  StringStn;
  ObjectStn;
  ObjectPropValueStn;
  ObjectPropNameStn;
  return CaptureStn = Caf.defClass(
    class CaptureStn extends BaseStn {},
    function(CaptureStn, classSuper, instanceSuper) {
      this.prototype.transform = function() {
        return ObjectStn(
          this.props,
          ObjectPropValueStn(
            ObjectPropNameStn({ value: "source" }),
            StringStn({ value: this.children[1].parseTreeNode.text })
          ),
          ObjectPropValueStn(
            ObjectPropNameStn({ value: "value" }),
            this.children[1]
          )
        );
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    compactFlatten;
  ({ compactFlatten } = Caf.i(["compactFlatten"], [StandardImport, global]));
  return CatchStn = Caf.defClass(class CatchStn extends BaseStn {}, function(
    CatchStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.updateScope = function(scope) {
      let errorIdentifier, body;
      this.scope = scope;
      ({ errorIdentifier, body } = this.labeledChildren);
      if (errorIdentifier || body) {
        this.uniqueIdentifierHandle = this.scope.getUniqueIdentifierHandle(
          "error"
        );
      }
      if (errorIdentifier) {
        this.scope.addIdentifierAssigned(errorIdentifier.name);
        this.scope.addIdentifierUsed(errorIdentifier.name);
      }
      return instanceSuper.updateScope.apply(this, arguments);
    };
    this.prototype.toJs = function(options = {}) {
      let returnExpression,
        errorIdentifier,
        body,
        errorIdentifierString,
        cafBase;
      ({ returnExpression } = options);
      ({ errorIdentifier, body } = this.labeledChildren);
      body = body && (returnExpression ? body.toFunctionBodyJs() : body.toJs());
      errorIdentifierString = Caf.exists(
        cafBase = this.uniqueIdentifierHandle
      ) &&
        cafBase.identifier ||
        "cafError";
      if (errorIdentifier) {
        body = compactFlatten([
          `${Caf.toString(errorIdentifier.name)} = ${Caf.toString(
            errorIdentifierString
          )}`,
          body
        ]).join("; ");
      }
      body = body ? body + ";" : "";
      return `catch (${Caf.toString(errorIdentifierString)}) {${Caf.toString(
        body
      )}}`;
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    AssignmentStn = __webpack_require__(21),
    AccessorStn = __webpack_require__(20),
    ThisStn = __webpack_require__(30),
    IdentifierStn = __webpack_require__(16),
    StatementsStn = __webpack_require__(9),
    FunctionDefinitionStn = __webpack_require__(23),
    FunctionDefinitionArgsStn = __webpack_require__(10),
    FunctionDefinitionArgStn = __webpack_require__(22),
    UniqueIdentifierHandle = __webpack_require__(11),
    ClassStn,
    BaseStn = __webpack_require__(3),
    Error,
    compactFlatten,
    merge;
  ({ Error, compactFlatten, merge } = Caf.import(
    ["Error", "compactFlatten", "merge"],
    [StandardImport, global]
  ));
  AssignmentStn;
  AccessorStn;
  ThisStn;
  IdentifierStn;
  StatementsStn;
  FunctionDefinitionStn;
  FunctionDefinitionArgsStn;
  FunctionDefinitionArgStn;
  UniqueIdentifierHandle;
  return ClassStn = Caf.defClass(class ClassStn extends BaseStn {}, function(
    ClassStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.updateScope = function(scope) {
      let className;
      this.scope = scope;
      ({ className } = this.labeledChildren);
      this.scope.addIdentifierAssigned(className.toJs());
      return instanceSuper.updateScope.apply(this, arguments);
    };
    this.prototype.transform = function() {
      let className,
        classExtends,
        body,
        constructorStn,
        classSuperHandle,
        instanceSuperHandle,
        statementsToCount,
        statementCount,
        superCallChildren,
        classBody,
        children;
      ({ className, classExtends, body } = this.labeledChildren);
      className = className.transform();
      classExtends = Caf.exists(classExtends) && classExtends.transform();
      if (body = Caf.exists(body) && body.transform()) {
        constructorStn = null;
        body = FunctionDefinitionStn(
          { label: "body", returnIgnored: true },
          FunctionDefinitionArgsStn(
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: className.toJs() })
            ),
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: classSuperHandle = "classSuper" })
            ),
            FunctionDefinitionArgStn(
              IdentifierStn({
                identifier: instanceSuperHandle = "instanceSuper"
              })
            )
          ),
          StatementsStn(
            statementsToCount = Caf.each(body.children, [], (stn, k, into) => {
              into.push(
                stn.type === "Object"
                  ? Caf.each(stn.children, [], (
                      objectPropValueStn,
                      k,
                      into
                    ) => {
                      let propNameStn,
                        propValueStn,
                        assignToStn,
                        propName,
                        m,
                        __,
                        classPropName;
                      [propNameStn, propValueStn] = objectPropValueStn.children;
                      assignToStn = (() => {
                        switch (propNameStn.type) {
                          case "ObjectPropName":
                            propName = propNameStn.toJs();
                            return (m = propName.match(/^"@(.*)"$/))
                              ? ([__, classPropName] = m, ThisStn(
                                  IdentifierStn({ identifier: classPropName })
                                ))
                              : propName === "constructor"
                                  ? (constructorStn = propValueStn, null)
                                  : AccessorStn(
                                      ThisStn(
                                        IdentifierStn({
                                          identifier: "prototype"
                                        })
                                      ),
                                      IdentifierStn({ identifier: propName })
                                    );
                          case "Accessor":
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
                      into.push(
                        assignToStn && AssignmentStn(assignToStn, propValueStn)
                      );
                    })
                  : stn
              );
            })
          )
        );
        statementCount = statementsToCount.length;
        if (constructorStn) {
          statementCount -= 1;
          constructorStn.props.isConstructor = true;
          if (superCallChildren = constructorStn.find("Super")) {
            if (!(superCallChildren.length === 1)) {
              throw new Error("at most one super call in constructor");
            }
            superCallChildren[0].props.calledInConstructor = true;
          }
          classBody = StatementsStn({ label: "classBody" }, constructorStn);
        }
        if (statementsToCount <= 0) {
          body = null;
        }
        children = compactFlatten([className, classExtends, body, classBody]);
      } else {
        children = this.transformChildren();
      }
      return new ClassStn(
        merge(this.props, {
          classSuperHandle: classSuperHandle,
          instanceSuperHandle: instanceSuperHandle
        }),
        children
      );
    };
    this.prototype.toJs = function() {
      let className, classExtends, body, classBody, out, classBodyJs;
      ({ className, classExtends, body, classBody } = this.labeledChildren);
      className = className.toJs();
      out = `${Caf.toString(className)} = Caf.defClass(class ${Caf.toString(
        className
      )}`;
      if (classExtends) {
        out += ` extends ${Caf.toString(classExtends.toJsExpression())}`;
      }
      classBodyJs = `{${Caf.toString(
        Caf.exists(classBody) && classBody.toJs() || ""
      )}}`;
      return body
        ? out + ` ${Caf.toString(classBodyJs)}, ${Caf.toString(body.toJs())})`
        : out + ` ${Caf.toString(classBodyJs)})`;
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    SemanticTree,
    ScopeStnMixin = __webpack_require__(8),
    BaseStn = __webpack_require__(3),
    arrayWithAllButLast,
    peek,
    Error,
    UniqueIdentifierHandle;
  ({ arrayWithAllButLast, peek, Error, UniqueIdentifierHandle } = Caf.i(
    ["arrayWithAllButLast", "peek", "Error", "UniqueIdentifierHandle"],
    [StandardImport, global]
  ));
  SemanticTree = __webpack_require__(6);
  return ComprehensionStn = Caf.defClass(
    class ComprehensionStn extends ScopeStnMixin(BaseStn) {},
    function(ComprehensionStn, classSuper, instanceSuper) {
      this.prototype.transform = function() {
        let outputType,
          variableDefinition,
          body,
          iterable,
          whenClause,
          intoChild,
          iterationFunction,
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
          ValueStn,
          valueIdentifer,
          keyIdentifer,
          intoIdentifer,
          brkIdentifer,
          useExtendedEach,
          valueVarDef,
          keyVarDef,
          intoVarDef,
          lastBodyStatement,
          bodyStatementsExceptLast,
          bodyWithDefault,
          whenClauseWrapper,
          allButLast,
          foundTest,
          baseIdentifierHandle;
        this.children = this.transformChildren();
        this.initLabeledChildren();
        ({
          outputType,
          variableDefinition,
          body,
          iterable,
          whenClause
        } = this.labeledChildren);
        intoChild = this.labeledChildren.into;
        outputType = Caf.exists(outputType) && outputType.props.token;
        iterationFunction = outputType.slice(0, 1);
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
          StatementsStn,
          ValueStn
        } = SemanticTree);
        valueIdentifer = "v";
        keyIdentifer = "k";
        intoIdentifer = "into";
        brkIdentifer = "brk";
        useExtendedEach = (() => {
          switch (outputType) {
            case "find":
              return true;
            default:
              return false;
          }
        })();
        variableDefinition = FunctionDefinitionArgsStn(
          valueVarDef = Caf.exists(variableDefinition) &&
            variableDefinition.children[0] ||
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: valueIdentifer })
            ),
          keyVarDef = Caf.exists(variableDefinition) &&
            variableDefinition.children[1] ||
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: keyIdentifer })
            ),
          intoVarDef = Caf.exists(variableDefinition) &&
            variableDefinition.children[2] ||
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: intoIdentifer })
            ),
          useExtendedEach &&
            FunctionDefinitionArgStn(
              IdentifierStn({ identifier: brkIdentifer })
            )
        );
        if (outputType === "object" || outputType === "array") {
          lastBodyStatement = body
            ? body.className === "StatementsStn"
                ? (bodyStatementsExceptLast = arrayWithAllButLast(
                    body.children
                  ), peek(body.children))
                : body
            : (bodyStatementsExceptLast = null, ValueStn(valueVarDef));
        } else {
          bodyWithDefault = body || ValueStn(valueVarDef);
        }
        whenClauseWrapper = whenClause
          ? actionStn => {
              return ControlOperatorStn(
                { operand: "if" },
                whenClause,
                actionStn
              );
            }
          : actionStn => {
              return actionStn;
            };
        return FunctionInvocationStn(
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
                        AccessorStn(
                          IdentifierStn({ identifier: intoIdentifer }),
                          ValueStn(keyVarDef)
                        ),
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
                          IdentifierStn({ identifier: intoIdentifer }),
                          IdentifierStn({ identifier: "push" })
                        ),
                        lastBodyStatement
                      )
                    )
                  );
                case "each":
                  return whenClauseWrapper(bodyWithDefault);
                case "find":
                  return whenClause
                    ? body
                        ? BinaryOperatorStn(
                            { operator: "&&" },
                            whenClause,
                            StatementsStn(
                              FunctionInvocationStn(
                                IdentifierStn({ identifier: brkIdentifer })
                              ),
                              body
                            )
                          )
                        : BinaryOperatorStn(
                            { operator: "&&" },
                            whenClause,
                            StatementsStn(
                              FunctionInvocationStn(
                                IdentifierStn({ identifier: brkIdentifer })
                              ),
                              valueVarDef
                            )
                          )
                    : body
                        ? (body.type === "Statements" &&
                            body.children.length > 1
                            ? (allButLast = StatementsStn(
                                body.children.slice(0, body.children.length - 1)
                              ), body = peek(body.children))
                            : undefined, foundTest = BinaryOperatorStn(
                            { operator: "&&" },
                            AssignmentStn(
                              IdentifierStn({
                                identifierHandle: baseIdentifierHandle = new UniqueIdentifierHandle(
                                  "_ret"
                                )
                              }),
                              body
                            ),
                            StatementsStn(
                              FunctionInvocationStn(
                                IdentifierStn({ identifier: brkIdentifer })
                              ),
                              IdentifierStn({
                                identifierHandle: baseIdentifierHandle
                              })
                            )
                          ), allButLast
                            ? StatementsStn(allButLast, foundTest)
                            : foundTest)
                        : BinaryOperatorStn(
                            { operator: "&&" },
                            valueVarDef,
                            StatementsStn(
                              FunctionInvocationStn(
                                IdentifierStn({ identifier: brkIdentifer })
                              ),
                              valueVarDef
                            )
                          );
              }
            })()
          )
        );
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    UndefinedStn = __webpack_require__(31),
    BaseStn = __webpack_require__(3),
    Error,
    formattedInspect;
  ({ Error, formattedInspect } = Caf.i(["Error", "formattedInspect"], [
    StandardImport,
    global
  ]));
  UndefinedStn;
  return ControlOperatorStn = Caf.defClass(
    class ControlOperatorStn extends BaseStn {
      constructor(props, children) {
        super(...arguments);
        this.operand = props.operand;
        this.joiner = props.joiner;
        if (this.labeledChildren.expression) {
          this.expression = this.labeledChildren.expression;
          this.body = this.labeledChildren.body || UndefinedStn();
          this.elseBody = this.labeledChildren.elseBody;
        } else {
          this.expression = children[0];
          this.body = children[1] || UndefinedStn();
          this.elseBody = children[2];
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
                      `then not expected after ${Caf.toString(this.operand)}`
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
        let returnExpression,
          returnValueIsIgnored,
          expression,
          operand,
          tempVarIdentifier,
          cafBase,
          cafBase1;
        ({ returnExpression, returnValueIsIgnored } = options);
        expression = this.expression.toJsExpression();
        ({ operand } = this);
        operand = (() => {
          switch (operand) {
            case "until":
            case "unless":
              expression = `!${Caf.toString(this.applyParens(expression))}`;
              return operand === "until" ? "while" : "if";
            default:
              return operand;
          }
        })();
        return returnExpression
          ? operand === "while"
              ? returnValueIsIgnored
                  ? `(() => {while ${Caf.toString(
                      this.applyRequiredParens(expression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(false)
                    )};};})()`
                  : (tempVarIdentifier = this.scope.uniqueIdentifier, `(() => {while ${Caf.toString(
                      this.applyRequiredParens(expression)
                    )} {${Caf.toString(
                      this.body.toFunctionBodyJs(
                        `${Caf.toString(tempVarIdentifier)} =`
                      )
                    )};}; return ${Caf.toString(tempVarIdentifier)}})()`)
              : `${Caf.toString(this.applyParens(expression))} ? ${Caf.toString(
                  this.body.toJsParenExpression()
                )} : ${Caf.toString(
                  Caf.exists(cafBase = this.elseBody) &&
                    cafBase.toJsParenExpression() ||
                    "undefined"
                )}`
          : `${Caf.toString(operand)} ${Caf.toString(
              this.applyRequiredParens(expression)
            )} {${Caf.toString(this.body.toJs())};}${Caf.toString(
              this.elseBody
                ? ` else {${Caf.toString(
                    Caf.exists(cafBase1 = this.elseBody) && cafBase1.toJs()
                  )};}`
                : ""
            )}`;
      };
      this.prototype.toJsParenExpression = function() {
        return this.applyRequiredParens(this.toJs({ returnExpression: true }));
      };
      this.prototype.toJsExpression = function(returnValueIsIgnored) {
        return this.toJs({
          returnExpression: true,
          returnValueIsIgnored: returnValueIsIgnored
        });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return DestructuringAssignmentStn = Caf.defClass(
    class DestructuringAssignmentStn extends BaseStn {},
    function(DestructuringAssignmentStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let structure, value;
        ({ structure, value } = this.labeledChildren);
        return `(${Caf.toString(structure.toJs())} = ${Caf.toString(
          value.toJsExpression()
        )})`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return DestructuringIdentifierStn = Caf.defClass(
    class DestructuringIdentifierStn extends BaseStn {},
    function(DestructuringIdentifierStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          this.labeledChildren.identifier.toJs()
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.prototype.toJs = function() {
        let identifier, destructuringDefault;
        ({ identifier, destructuringDefault } = this.labeledChildren);
        return `${Caf.toString(this.props.ellipsis ? "..." : "")}${Caf.toString(
          identifier.toJs()
        )}${Caf.toString(
          destructuringDefault
            ? ` = ${Caf.toString(destructuringDefault.toJsExpression())}`
            : ""
        )}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return DoStn = Caf.defClass(class DoStn extends BaseStn {}, function(
    DoStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let functionDefinition;
      ({ functionDefinition } = this.labeledChildren);
      return `(${Caf.toString(functionDefinition.toJs())})(${Caf.toString(
        functionDefinition.argumentNames.join(", ")
      )})`;
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    SemanticTree,
    ValueBaseCaptureStn = __webpack_require__(12),
    Error;
  ({ Error } = Caf.i(["Error"], [StandardImport, global]));
  SemanticTree = __webpack_require__(6);
  return FunctionInvocationStn = Caf.defClass(
    class FunctionInvocationStn extends ValueBaseCaptureStn {
      constructor(props, children) {
        let functionValue, argStns, cafBase, cafBase1, cafBase2;
        super(...arguments);
        [functionValue, ...argStns] = children;
        this.key = this.argStns = argStns;
        this.value = this.functionValue = functionValue;
        if (this.argStns.length === 1 && this.argStns[0].props.implicitArray) {
          this.argStns = this.argStns[0].children;
        }
        if (
          Caf.exists(cafBase = this.parseTreeNode) && cafBase.conditional ||
          Caf.exists(cafBase1 = this.parseTreeNode) && cafBase1.existanceTest
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
        }
      });
      this.prototype.transform = function() {
        return this.transformAccessorChain();
      };
      this.prototype.toJs = function() {
        let valueJs;
        if (this.existanceTest) {
          throw new Error("can't be existanceTest here");
        }
        return `${Caf.toString(
          valueJs = this.functionValue.toJsExpression()
        )}${Caf.toString(
          this.applyRequiredParens(
            Caf
              .e(this.argStns, [], (a, k, into) => {
                into.push(a.toJsExpression());
              })
              .join(", ")
          )
        )}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return GlobalIdentifierStn = Caf.defClass(
    class GlobalIdentifierStn extends BaseStn {},
    function(GlobalIdentifierStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.identifier;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    ScopeStnMixin = __webpack_require__(8),
    BaseStn = __webpack_require__(3),
    peek,
    Object;
  ({ peek, Object } = Caf.i(["peek", "Object"], [StandardImport, global]));
  return ImportStn = Caf.defClass(
    class ImportStn extends ScopeStnMixin(BaseStn) {},
    function(ImportStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.bindAllUniqueIdentifiersRequested();
        this.statementsChild = peek(this.children);
        this.importChildren = this.children.slice(0, this.children.length - 1);
        Caf.each(this.importChildren, undefined, (child, k, into) => {
          child.updateScope(this.scope);
        });
        this.scope.addChildScope(this);
        this._scopeUpdated = true;
        this.statementsChild.updateScope(this);
        this.importing = Object.keys(this.identifiersUsedButNotAssigned);
        return Caf.each(this.identifiersUsedButNotAssigned, undefined, (
          v,
          id,
          into
        ) => {
          this.scope.addIdentifierAssigned(id);
        });
      };
      this.prototype.addIdentifierAssigned = function(id, init) {
        return this.scope.addIdentifierAssigned(id, init);
      };
      this.prototype.jsExpressionUsesReturn = true;
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
          return this._importFromCaptureIdentifier ||
            (this._importFromCaptureIdentifier = this.nonImportScope.bindUniqueIdentifier(
              "parentImports"
            ));
        }
      });
      this.prototype.toJs = function(options = {}) {
        let generateReturnStatement,
          importFromCaptureIdentifier,
          p,
          bodyJs,
          importsJs,
          list,
          importingJs,
          imports,
          cafBase;
        ({ generateReturnStatement } = options);
        importFromCaptureIdentifier = null;
        if (p = this.findParent("Import")) {
          ({ importFromCaptureIdentifier } = p);
          true;
        }
        importFromCaptureIdentifier || (importFromCaptureIdentifier = "global");
        bodyJs = this.statementsChild.toFunctionBodyJs(
          !!generateReturnStatement
        );
        importsJs = Caf.each(this.importChildren, [], (c, k, into) => {
          into.push(c.toJsExpression());
        });
        list = Caf.each(this.importing, [], (i, k, into) => {
          into.push(`"${Caf.toString(i)}"`);
        });
        importingJs = `[${Caf.toString(list.join(", "))}]`;
        imports = (Caf.exists(cafBase = this.importing) && cafBase.length) > 0
          ? `({${Caf.toString(
              this.importing.join(", ")
            )}} = Caf.import(${Caf.toString(importingJs)}, ${Caf.toString(
              this._importFromCaptureIdentifier
                ? `${Caf.toString(this._importFromCaptureIdentifier)} = `
                : ""
            )}[${Caf.toString(importsJs.join(", "))}, ${Caf.toString(
              importFromCaptureIdentifier
            )}]));`
          : "";
        return `${Caf.toString(imports)}${Caf.toString(bodyJs)}`;
      };
      this.prototype.toJsExpression = function() {
        return this.toJs({ returnExpression: true });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    peek;
  ({ peek } = Caf.i(["peek"], [StandardImport, global]));
  return InterpolatedStringStn = Caf.defClass(
    class InterpolatedStringStn extends BaseStn {},
    function(InterpolatedStringStn, classSuper, instanceSuper) {
      this.prototype.compactNewLines = function(compactLeft, compactRight) {
        return Caf.e(this.children, undefined, (child, i, into) => {
          if (child.type === "String") {
            child.compactNewLines(
              compactLeft && i === 0,
              compactRight && i === this.children.length - 1
            );
          }
        });
      };
      this.prototype.trimRight = function() {
        let cafBase;
        return Caf.exists(cafBase = peek(this.children)) &&
          (Caf.isF(cafBase.trimRight) && cafBase.trimRight());
      };
      this.prototype.toJs = function() {
        return `\`${Caf.toString(
          Caf
            .e(this.children, [], (c, k, into) => {
              into.push(c.toInterpolatedJsStringPart());
            })
            .join("")
        )}\``;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return LabeledDestructuringTargetStn = Caf.defClass(
    class LabeledDestructuringTargetStn extends BaseStn {},
    function(LabeledDestructuringTargetStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return this.childrenToJs(": ");
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return NewInstanceStn = Caf.defClass(
    class NewInstanceStn extends BaseStn {},
    function(NewInstanceStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `new ${Caf.toString(this.childrenToJs())}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return ObjectDestructuringStn = Caf.defClass(
    class ObjectDestructuringStn extends BaseStn {},
    function(ObjectDestructuringStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `{${Caf.toString(this.childrenToJs(", "))}}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    Lib = __webpack_require__(7),
    BaseStn = __webpack_require__(3),
    isString;
  ({ isString } = Caf.i(["isString"], [StandardImport, Lib, global]));
  return RegExpStn = Caf.defClass(class RegExpStn extends BaseStn {}, function(
    RegExpStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let value, modifiers, str, hasInterpolation, cafBase;
      ({ value, modifiers } = this.props);
      str = (Caf.exists(cafBase = this.children) && cafBase.length) > 0
        ? (hasInterpolation = Caf.ee(this.children, undefined, (
            child,
            k,
            into,
            brk
          ) => {
            let cafRet;
            return (cafRet = !isString(child.props.value)) && (brk(), cafRet);
          }), Caf
            .e(this.children, [], (child, k, into) => {
              let v;
              into.push(
                isString(v = child.props.value)
                  ? hasInterpolation ? v.replace(/([`$\\])/g, "\\$1") : v
                  : `\${${Caf.toString(child.toJsExpression())}}`
              );
            })
            .join(""))
        : value;
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
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    Path = __webpack_require__(94),
    Fs = __webpack_require__(92),
    realRequire,
    findModuleSync,
    BaseStn = __webpack_require__(3),
    peek;
  ({ peek } = Caf.i(["peek"], [StandardImport, global]));
  Path;
  Fs;
  realRequire = eval("require");
  ({ findModuleSync } = __webpack_require__(91));
  return RequireStn = Caf.defClass(
    class RequireStn extends BaseStn {},
    function(RequireStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          this.identifierAssignedName,
          `require('${Caf.toString(this.requireString)}')`
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.getter({
        identifierAssignedName: function() {
          return peek(this.props.require.split("/"));
        },
        rawRequireString: function() {
          return this.props.require;
        },
        requireString: function() {
          return findModuleSync(
            this.rawRequireString,
            this.parser.options
          ).requireString;
        }
      });
      this.prototype.toJs = function() {
        return this.identifierAssignedName;
      };
      this.prototype.toJsExpressionWithParens = function() {
        return this.toJs();
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    StatementsStn = __webpack_require__(9),
    ScopeStnMixin = __webpack_require__(8),
    BaseStn = __webpack_require__(3),
    compactFlatten;
  ({ compactFlatten } = Caf.import(["compactFlatten"], [
    StandardImport,
    global
  ]));
  StatementsStn;
  return RootStn = Caf.defClass(
    class RootStn extends ScopeStnMixin(BaseStn) {
      constructor(props, children) {
        super(...arguments);
        this.statements = children[0];
      }
    },
    function(RootStn, classSuper, instanceSuper) {
      this.prototype.cloneWithNewStatements = function(statements) {
        return new RootStn(this.props, [
          StatementsStn(compactFlatten(statements))
        ]);
      };
      this.prototype.transform = function() {
        let ret;
        ret = instanceSuper.transform.apply(this, arguments);
        ret.updateScope(ret);
        return ret;
      };
      this.prototype.toJsModule = function() {
        let identifiersUsedButNotAssigned, statementsJs, lets, statements;
        ({ identifiersUsedButNotAssigned } = this);
        identifiersUsedButNotAssigned = Caf.each(
          identifiersUsedButNotAssigned,
          [],
          (v, k, into) => {
            into.push(`${Caf.toString(k)} = global.${Caf.toString(k)}`);
          }
        );
        statementsJs = this.statements.toFunctionBodyJs();
        lets = compactFlatten([
          identifiersUsedButNotAssigned,
          this.requiredIdentifierLets
        ]);
        statements = compactFlatten([
          lets.length > 0 ? `let ${Caf.toString(lets.join(", "))}` : undefined,
          statementsJs
        ]);
        return `"use strict"\nlet Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {${Caf.toString(
          statements.join("; ")
        )};});`;
      };
      this.prototype.toJs = function() {
        let statements;
        statements = this.statements.toJs();
        return compactFlatten([this.getAutoLets(), statements]).join("; ") +
          ";";
      };
      this.prototype.toBareJs = function() {
        let statements;
        statements = this.statements.toJs();
        return compactFlatten([
          "Caf = require('caffeine-script-runtime')",
          this.getBareInitializers(),
          statements
        ]).join(";\n") + ";";
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    Error,
    formattedInspect;
  ({ Error, formattedInspect } = Caf.i(["Error", "formattedInspect"], [
    StandardImport,
    global
  ]));
  return SemanticTokenStn = Caf.defClass(
    class SemanticTokenStn extends BaseStn {
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
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let BaseStn = __webpack_require__(3);
  return SimpleLiteralStn = Caf.defClass(
    class SimpleLiteralStn extends BaseStn {},
    function(SimpleLiteralStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.value;
      };
      this.prototype.toJsExpressionWithParens = function(options) {
        let dotBase;
        ({ dotBase } = options);
        return dotBase ? `(${Caf.toString(this.toJs())})` : this.toJs();
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    Error,
    merge;
  ({ Error, merge } = Caf.i(["Error", "merge"], [StandardImport, global]));
  return SuperStn = Caf.defClass(
    class SuperStn extends BaseStn {
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
      this.prototype.transform = function() {
        let propValue, methodName, m, __, classMethod;
        if (!(propValue = this.findParent("ObjectPropValue"))) {
          throw new Error("super must be used inside an object-literal value");
        }
        methodName = propValue.labeledChildren.propName.props.value;
        if (m = methodName.match(/^(@)(.*)/)) {
          [__, classMethod, methodName] = m;
        }
        return new this.class(
          merge(this.props, {
            methodName: methodName,
            classMethod: !!classMethod
          }),
          this.transformChildren()
        );
      };
      this.prototype.toJs = function() {
        let args,
          objectPropValue,
          getSuperInput,
          klass,
          className,
          superObject,
          method;
        ({ args } = this);
        return this.props.calledInConstructor
          ? (args = this.props.passArguments
              ? ["...arguments"]
              : Caf.e(args, [], (a, k, into) => {
                  into.push(a.toJsExpression());
                }), `super(${Caf.toString(args.join(", "))})`)
          : (objectPropValue = this.findParent(
              "ObjectPropValue"
            ), getSuperInput = (klass = this.findParent("Class"))
              ? (className = klass.labeledChildren.className.toJs(), superObject = this.props.classMethod
                  ? klass.props.classSuperHandle
                  : klass.props.instanceSuperHandle, method = this.props.passArguments
                  ? (args = "arguments", "apply")
                  : (args = Caf.e(args, [], (a, k, into) => {
                      into.push(a.toJsExpression());
                    }), "call"), `${Caf.toString(superObject)}.${Caf.toString(
                  this.props.methodName
                )}.${Caf.toString(method)}${Caf.toString(
                  this.applyRequiredParens(["this"].concat(args).join(", "))
                )}`)
              : (() => {
                  throw new Error("super not used in class");
                })());
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return SwitchStn = Caf.defClass(class SwitchStn extends BaseStn {}, function(
    SwitchStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let condition, switchWhens, switchElse, falsifyCases, options, cases;
      ({ condition, switchWhens, switchElse } = this.labeledChildren);
      falsifyCases = !condition;
      options = { falsifyCases: falsifyCases };
      cases = Caf.e(switchWhens, [], (clause, k, into) => {
        into.push(clause.toJs(options));
      });
      if (switchElse) {
        cases.push(`default: ${Caf.toString(switchElse.toJs())}`);
      }
      return `switch (${Caf.toString(this.getConditionJs())}) {${Caf.toString(
        cases.join(" break; ")
      )}}`;
    };
    this.prototype.toJsExpression = function() {
      let condition, switchWhens, switchElse, falsifyCases, options, cases;
      ({ condition, switchWhens, switchElse } = this.labeledChildren);
      falsifyCases = !condition;
      options = { falsifyCases: falsifyCases };
      cases = Caf.e(switchWhens, [], (clause, k, into) => {
        into.push(clause.toFunctionBodyJs(options));
      });
      if (switchElse) {
        cases.push(`default: ${Caf.toString(switchElse.toFunctionBodyJs())}`);
      }
      return `(() => {switch (${Caf.toString(
        this.getConditionJs()
      )}) {${Caf.toString(cases.join(" "))}};})()`;
    };
    this.prototype.getConditionJs = function() {
      let condition;
      ({ condition } = this.labeledChildren);
      return condition ? condition.toJsExpression() : "false";
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return SwitchWhenStn = Caf.defClass(
    class SwitchWhenStn extends BaseStn {},
    function(SwitchWhenStn, classSuper, instanceSuper) {
      this.prototype.toJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${Caf.toString(this.getCasesJs(options))}: ${Caf.toString(
          thenDo.toJs()
        )};`;
      };
      this.prototype.getCasesJs = function(options) {
        let falsifyCases, whenValue, cases;
        ({ falsifyCases } = options);
        ({ whenValue } = this.labeledChildren);
        cases = whenValue.implicitArray
          ? Caf.e(whenValue.children, [], (m, k, into) => {
              into.push(m.toJsExpression());
            })
          : [whenValue.toJsExpression()];
        return falsifyCases
          ? `case !(${Caf.toString(cases.join("): case !("))})`
          : `case ${Caf.toString(cases.join(": case "))}`;
      };
      this.prototype.toFunctionBodyJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${Caf.toString(this.getCasesJs(options))}: ${Caf.toString(
          thenDo.toFunctionBodyJs()
        )};`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return ThrowStn = Caf.defClass(class ThrowStn extends BaseStn {}, function(
    ThrowStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      return `throw ${Caf.toString(this.childrenToJs())}`;
    };
    this.prototype.toJsExpression = function() {
      return `(()=>{${Caf.toString(this.toJs())};})()`;
    };
    this.prototype.toJsParenExpression = function() {
      return this.toJsExpression();
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return TryStn = Caf.defClass(class TryStn extends BaseStn {}, function(
    TryStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function(options = {}) {
      let returnExpression, body, optionalCatch;
      ({ returnExpression } = options);
      ({ body, optionalCatch } = this.labeledChildren);
      body = returnExpression ? body.toFunctionBodyJs() : body.toJs();
      optionalCatch = Caf.exists(optionalCatch) &&
        optionalCatch.toJs(options) ||
        "catch (cafError) {}";
      return `try {${Caf.toString(body)};} ${Caf.toString(optionalCatch)}`;
    };
    this.prototype.toJsExpression = function() {
      return this.doJs(null, this.toJs({ returnExpression: true }));
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BaseStn = __webpack_require__(3);
  return UnaryOperatorStn = Caf.defClass(
    class UnaryOperatorStn extends BaseStn {},
    function(UnaryOperatorStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.operand === "?"
          ? `${Caf.toString(
              this.applyParens(this.children[0].toJsExpression())
            )} != null`
          : `${Caf.toString(this.normalizedOperand)}${Caf.toString(
              this.applyParens(this.children[0].toJsExpression())
            )}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(0);
Caf.defMod(module, () => {
  let BaseStn = __webpack_require__(3);
  return ValueStn = Caf.defClass(class ValueStn extends BaseStn {}, function(
    ValueStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      return this.childrenToJs();
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, Rules,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CaffeineScript = __webpack_require__(17);

module.exports = CaffeineScript.Rules || CaffeineScript.addNamespace('Rules', Rules = (function(superClass) {
  extend(Rules, superClass);

  function Rules() {
    return Rules.__super__.constructor.apply(this, arguments);
  }

  return Rules;

})(Neptune.Base));


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = {
	"author": "Shane Brinkman-Davis Delamore, Imikimi LLC",
	"dependencies": {
		"art-build-configurator": "^1.8.1",
		"art-class-system": "^1.0.1",
		"art-config": "^1.0.0",
		"art-object-tree-factory": "^1.0.0",
		"art-standard-lib": "^1.1.0",
		"art-testbench": "^1.0.0",
		"babel-bridge": "^1.0.0",
		"caffeine-mc": "^1.0.0",
		"caffeine-script-runtime": "^1.0.0",
		"case-sensitive-paths-webpack-plugin": "^1.1.4",
		"coffee-loader": "^0.7.2",
		"coffee-script": "^1.12.3",
		"css-loader": "^0.26.1",
		"json-loader": "^0.5.4",
		"neptune-namespaces": "^1.9.1",
		"script-loader": "^0.7.0",
		"style-loader": "^0.13.1",
		"webpack": "^2.2.1",
		"webpack-dev-server": "^2.3.0",
		"webpack-merge": "^3.0.0"
	},
	"description": "CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that empowers you to get the most out of any JavaScript runtime.",
	"license": "ISC",
	"name": "caffeine-script",
	"scripts": {
		"build": "webpack --progress",
		"perf": "nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf",
		"start": "webpack-dev-server --hot --inline --progress",
		"test": "nn -s;mocha -u tdd --compilers coffee:coffee-script/register"
	},
	"version": "0.40.1"
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("art-class-system");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("art-object-tree-factory");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("caffeine-mc");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("neptune-namespaces");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ })
/******/ ]);