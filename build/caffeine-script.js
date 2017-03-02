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
/******/ 	return __webpack_require__(__webpack_require__.s = 219);
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(111);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var ref, ref1;

module.exports = ((ref = global.Neptune) != null ? (ref1 = ref.Art) != null ? ref1.Foundation : void 0 : void 0) || __webpack_require__(196);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BaseObject,
    log,
    Object,
    Error,
    objectWithout,
    toInspectedObjects,
    objectKeyCount,
    createObjectTreeFactory,
    compactFlatten,
    isString,
    noChildren;
  ({
    BaseObject,
    log,
    Object,
    Error,
    objectWithout,
    toInspectedObjects,
    objectKeyCount,
    createObjectTreeFactory,
    compactFlatten,
    isString,
    noChildren
  } = Caf.i(
    [
      "BaseObject",
      "log",
      "Object",
      "Error",
      "objectWithout",
      "toInspectedObjects",
      "objectKeyCount",
      "createObjectTreeFactory",
      "compactFlatten",
      "isString",
      "noChildren"
    ],
    [ArtFoundation, global]
  ));
  return BaseStn = Caf.defClass(
    class BaseStn extends BaseObject {
      constructor(props, children = noChildren) {
        super(...arguments);
        this.children = children;
        this.parseTreeNode = props.parseTreeNode;
        this.props = objectWithout(props, "parseTreeNode");
        this.initLabeledChildren();
      }
    },
    function(BaseStn, classSuper, instanceSuper) {
      let CaffeineScriptRuntime = __webpack_require__(1),
        applyRequiredParens,
        applyParens;
      if (!(CaffeineScriptRuntime.getSuper(this) === BaseObject)) {
        log({
          self: this,
          selfName: this.getName(),
          "Object.getPrototypeOf@": Object.getPrototypeOf(this),
          badSuper: CaffeineScriptRuntime.getSuper(this),
          BaseObject: BaseObject,
          "selfIsBaseObject?": this === BaseObject
        });
        throw new Error("bad super");
      }
      this.abstractClass();
      noChildren = [];
      this.prototype.initLabeledChildren = function() {
        this.labeledChildren = this.children && {};
        return Caf.e(this.children, undefined, (child, k, into) => {
          let label, pluralLabel, base;
          child.parent = this;
          ({ label, pluralLabel } = child);
          this.labeledChildren[label] = child;
          if (pluralLabel) {
            ((base = this.labeledChildren)[pluralLabel] ||
              (base[pluralLabel] = [])).push(child);
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
            name = `${label}.${name}`;
          }
          return {
            [`${name}`]: this.children.length === 0
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
            `must override one of the toJs* functions: ${this.className}`
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
        return `(() => {${body};})()`;
      };
      this.prototype.toFunctionBodyJsArray = function(returnAction = true) {
        return returnAction
          ? [`return ${this.toJsExpression()}`]
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
        return this.getNeedsParens() ? `(${js})` : js;
      };
      this.prototype.toJsParenExpression = function() {
        return this.toJs();
      };
      this.prototype.toInterpolatedJsStringPart = function() {
        return `\${${this.toJsExpression({ skipParens: true })}}`;
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
        return `(${expr})`;
      };
      this.applyParens = applyParens = function(expr) {
        return expr.match(
          /^(\([^)]*\)|\[[^\]]*\]|([!~-]*[_a-z0-9.]*)(\([^)]*\))?)$/i
        )
          ? expr
          : `(${expr})`;
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91).includeInNamespace(__webpack_require__(182)).addModules({
  ArrayExtensions: __webpack_require__(24),
  AsyncExtensions: __webpack_require__(80),
  CallStack: __webpack_require__(40),
  Clone: __webpack_require__(81),
  CommonJs: __webpack_require__(25),
  Eq: __webpack_require__(41),
  ErrorWithInfo: __webpack_require__(82),
  Function: __webpack_require__(42),
  Iteration: __webpack_require__(46),
  Log: __webpack_require__(86),
  Map: __webpack_require__(27),
  Math: __webpack_require__(13),
  MinimalBaseObject: __webpack_require__(9),
  ObjectDiff: __webpack_require__(47),
  ObjectExtensions: __webpack_require__(48),
  ParseUrl: __webpack_require__(28),
  Promise: __webpack_require__(29),
  PromisedFileReader: __webpack_require__(87),
  Regexp: __webpack_require__(19),
  Ruby: __webpack_require__(88),
  ShallowClone: __webpack_require__(89),
  StringExtensions: __webpack_require__(10),
  Time: __webpack_require__(90),
  Types: __webpack_require__(6),
  Unique: __webpack_require__(49)
});

__webpack_require__(18);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173).includeInNamespace(__webpack_require__(172)).addModules({
  BaseObject: __webpack_require__(39),
  WebpackHotLoader: __webpack_require__(79)
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var NeptuneLib, Types, isFunction, isJsonAtomicType, isObject, isPlainArray, isPlainObject, isString, ref;

NeptuneLib = __webpack_require__(56);

ref = NeptuneLib.Types, isPlainObject = ref.isPlainObject, isString = ref.isString, isFunction = ref.isFunction, isObject = ref.isObject, isPlainArray = ref.isPlainArray, isJsonAtomicType = ref.isJsonAtomicType;

module.exports = Types = (function() {
  var cloneObjectUpToKey, deepEach, deepEachAll, deepMap, deepMapArray, deepMapObject, functionName, noopMapper, objectName, toJsonStructure, toPostMessageStructure;

  function Types() {}

  NeptuneLib.mergeInto(Types, NeptuneLib.Types);

  Types.gt = function(a, b) {
    if (isFunction(a.gt)) {
      return a.gt(b);
    } else {
      return a > b;
    }
  };

  Types.lt = function(a, b) {
    if (isFunction(a.lt)) {
      return a.lt(b);
    } else {
      return a < b;
    }
  };

  Types.gte = function(a, b) {
    if (isFunction(a.gte)) {
      return a.gte(b);
    } else {
      return a >= b;
    }
  };

  Types.lte = function(a, b) {
    if (isFunction(a.lte)) {
      return a.lte(b);
    } else {
      return a <= b;
    }
  };


  /*
  like RubyOnRails#present:
    "An object is present if it's not blank."
  
  basic:
    present null, undefined or "" returns false (or whatever returnIfNotPresent is set to)
    all other values return something truish - generally themselves
  
  custom:
    for bar where isFunction bar.present
      present bar returns bar.present()
  
  special-case truish results:
    present 0 or false returns true
  
  for any other value foo,
    present foo returns foo
  
  IN:
    obj:
      object tested for presence
    returnIfNotPresent: [false]
      what to return if not present
  
  OUT:
    returnIfNotPresent, true, or the value passed in
  
  If 'obj' has method: obj.present() => obj.present()
   */

  Types.present = function(obj, returnIfNotPresent) {
    var present;
    if (returnIfNotPresent == null) {
      returnIfNotPresent = false;
    }
    present = isFunction(obj != null ? obj.getPresent : void 0) ? obj.getPresent() : isFunction(obj != null ? obj.present : void 0) ? obj.present() : isString(obj) ? !obj.match(/^\s*$/) : obj !== void 0 && obj !== null;
    if (present) {
      return obj || true;
    } else {
      return returnIfNotPresent;
    }
  };

  Types.functionName = functionName = function(f) {
    var matched;
    return f.name || ((matched = ("" + f).match(/function ([a-zA-Z]+)\(/)) && matched[1]) || "function";
  };

  Types.objectName = objectName = function(obj) {
    var a, name, ref1;
    if (!obj) {
      return "" + obj;
    } else if (a = typeof obj.getNamespacePath === "function" ? obj.getNamespacePath() : void 0) {
      return a;
    } else if (a = obj.classPathName) {
      return a;
    } else if (obj.constructor === Object) {
      return "Object";
    } else if (isFunction(obj)) {
      return functionName(obj);
    } else if (isString(name = (ref1 = obj.constructor) != null ? ref1.name : void 0) && name.length > 0) {
      return name;
    } else if (obj instanceof Object) {
      return "(anonymous instanceof Object)";
    } else {
      return "(objectName unknown)";
    }
  };

  Types.isBrowserObject = function(obj) {
    var name;
    if (!Types.isObject(obj)) {
      return false;
    }
    name = Types.objectName(obj);
    return name.slice(0, 4) === "HTML" || name.slice(0, 22) === "CanvasRenderingContext";
  };


  /*
  IN:
    f: (value, [key]) ->
      f is called on every non-plainObject and non-plainArray reachable by traversing
      the plainObject/plainArray structure
      If f is called on a propery of a plainObject, the key for that property is also passed in.
   */

  Types.deepEach = deepEach = function(v, f, key) {
    var j, k, len, subV;
    if (isPlainArray(v)) {
      for (j = 0, len = v.length; j < len; j++) {
        subV = v[j];
        deepEach(subV, f);
      }
    } else if (isPlainObject(v)) {
      for (k in v) {
        subV = v[k];
        deepEach(subV, f, k);
      }
    } else {
      f(v, key);
    }
    return v;
  };


  /*
  deepEachAll: just like deepEach except 'f' gets called on every value found including the initial value.
   */

  Types.deepEachAll = deepEachAll = function(v, f, key) {
    var j, k, len, subV;
    f(v, key);
    if (isPlainArray(v)) {
      for (j = 0, len = v.length; j < len; j++) {
        subV = v[j];
        deepEachAll(subV, f);
      }
    } else if (isPlainObject(v)) {
      for (k in v) {
        subV = v[k];
        deepEachAll(subV, f, k);
      }
    } else {

    }
    return v;
  };


  /*
  only creates a new array if the children changed
   */

  deepMapArray = function(array, mapper, options) {
    var i, j, len, r, res, v;
    res = null;
    for (i = j = 0, len = array.length; j < len; i = ++j) {
      v = array[i];
      r = deepMap(v, mapper, options);
      if (r !== v) {
        res || (res = array.slice());
        res[i] = r;
      }
    }
    return res || array;
  };

  cloneObjectUpToKey = function(obj, k) {
    var k2, res, v;
    res = {};
    for (k2 in obj) {
      v = obj[k2];
      if (k2 === k) {
        break;
      }
      res[k2] = v;
    }
    return res;
  };

  deepMapObject = function(obj, mapper, options) {
    var k, r, res, v;
    res = null;
    for (k in obj) {
      v = obj[k];
      r = deepMap(v, mapper, options);
      if (r !== v || res) {
        res || (res = cloneObjectUpToKey(obj, k));
        res[k] = r;
      }
    }
    return res || obj;
  };

  noopMapper = function(v) {
    return v;
  };


  /*
  Applies "f" to every -value- in a nested structure of plain arrays and objects.
  Pure functional efficient:
    If an array or object, and all its sub values, didn't change, the original array/object is reused.
  
  NOTE: deepMap only yields values to 'mapper' which are NOT plain arrays nor plain objects.
   */

  Types.deepMap = deepMap = function(v, mapper, options) {
    var arrayMapper, objectMapper;
    arrayMapper = (options != null ? options.arrays : void 0) || noopMapper;
    objectMapper = (options != null ? options.objects : void 0) || noopMapper;
    mapper || (mapper = noopMapper);
    if (isPlainArray(v)) {
      return deepMapArray(arrayMapper(v), mapper, options);
    } else if (isPlainObject(v)) {
      return deepMapObject(objectMapper(v), mapper, options);
    } else {
      return mapper(v);
    }
  };

  Types.toPlainStructure = function(o) {
    return deepMap(o, function(o) {
      if (isObject(o)) {
        if (o.toPlainStructure) {
          return o.toPlainStructure();
        } else {
          return objectName(o);
        }
      } else {
        return o;
      }
    });
  };


  /*
  similar to toPlainStructure, except all non-JSON types are converted to strings
   */

  Types.toJsonStructure = toJsonStructure = function(o) {
    return deepMap(o, function(o) {
      if (isObject(o)) {
        if (o.toJsonStructure) {
          return o.toJsonStructure();
        } else {
          return toJsonStructure(o.toPlainStructure ? o.toPlainStructure() : "" + o);
        }
      } else if (isJsonAtomicType(o)) {
        return o;
      } else {
        return "" + o;
      }
    });
  };

  Types.toPostMessageStructure = toPostMessageStructure = function(o) {
    return deepMap(o, function(o) {
      switch (o.constructor) {
        case ArrayBuffer:
        case Date:
        case RegExp:
        case Blob:
        case File:
        case FileList:
        case ImageData:
        case Boolean:
        case String:
          return o;
        default:
          if (isObject(o)) {
            if (o.toPostMessageStructure) {
              return o.toPostMessageStructure();
            } else {
              if (o.toPlainStructure) {
                return toPostMessageStructure(o.toPlainStructure());
              } else {
                return "" + o;
              }
            }
          } else {
            return "" + o;
          }
      }
    });
  };

  return Types;

})();


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14).addModules({
  AccessorStn: __webpack_require__(61),
  ArrayDestructuringStn: __webpack_require__(133),
  ArraySpreadElementStn: __webpack_require__(134),
  ArrayStn: __webpack_require__(34),
  AssignmentStn: __webpack_require__(62),
  BaseStn: __webpack_require__(3),
  BinaryOperatorStn: __webpack_require__(35),
  CaptureStn: __webpack_require__(135),
  CatchStn: __webpack_require__(136),
  ClassStn: __webpack_require__(137),
  ComprehensionStn: __webpack_require__(138),
  ControlOperatorStn: __webpack_require__(139),
  DestructuringAssignmentStn: __webpack_require__(140),
  DestructuringIdentifierStn: __webpack_require__(141),
  DoStn: __webpack_require__(142),
  FunctionDefinitionArgsStn: __webpack_require__(21),
  FunctionDefinitionArgStn: __webpack_require__(63),
  FunctionDefinitionStn: __webpack_require__(64),
  FunctionInvocationStn: __webpack_require__(143),
  GlobalIdentifierStn: __webpack_require__(144),
  IdentifierStn: __webpack_require__(36),
  ImportStn: __webpack_require__(145),
  InterpolatedStringStn: __webpack_require__(146),
  LabeledDestructuringTargetStn: __webpack_require__(147),
  LetStn: __webpack_require__(65),
  NewInstance: __webpack_require__(148),
  NewInstanceStn: __webpack_require__(149),
  ObjectDestructuringStn: __webpack_require__(150),
  ObjectPropNameStn: __webpack_require__(66),
  ObjectPropValueStn: __webpack_require__(67),
  ObjectStn: __webpack_require__(68),
  ReferenceStn: __webpack_require__(69),
  RegExpStn: __webpack_require__(151),
  RequireStn: __webpack_require__(152),
  RootStn: __webpack_require__(153),
  ScopeStnMixin: __webpack_require__(16),
  SemanticTokenStn: __webpack_require__(154),
  SimpleLiteralStn: __webpack_require__(155),
  StatementsStn: __webpack_require__(17),
  StringStn: __webpack_require__(70),
  SuperStn: __webpack_require__(156),
  SwitchStn: __webpack_require__(157),
  SwitchWhenStn: __webpack_require__(158),
  ThisStn: __webpack_require__(71),
  ThrowStn: __webpack_require__(159),
  TryStn: __webpack_require__(160),
  UnaryOperatorStn: __webpack_require__(161),
  UniqueIdentifierHandle: __webpack_require__(22),
  ValueBaseCaptureStn: __webpack_require__(23),
  ValueStn: __webpack_require__(162)
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var MinimalBaseObject, capitalize, isFunction, isPlainObject, isString, ref;

capitalize = Neptune.NeptuneLib.capitalize;

ref = __webpack_require__(6), isFunction = ref.isFunction, isString = ref.isString, isPlainObject = ref.isPlainObject;

module.exports = MinimalBaseObject = (function() {
  var addGetter, addGetters, addProperties, addSetter, addSetters, defProperties, defProperty, propGetterName, propInternalName, propListStringToArray, propSetterName;

  function MinimalBaseObject() {}

  MinimalBaseObject.propInternalName = propInternalName = function(prop) {
    return "_" + prop;
  };


  /*
  IN: arguments is a list of strings or objects
    strings: are just the names of the properties
    objects: map from prop names to getter/setter functions
   */

  MinimalBaseObject.getter = function() {
    return defProperties(this.prototype, arguments, true, false);
  };

  MinimalBaseObject.setter = function() {
    return defProperties(this.prototype, arguments, false, true);
  };

  MinimalBaseObject.addGetter = function(prop, getter) {
    return this._addGetter(this.prototype, prop, getter);
  };

  MinimalBaseObject.addSetter = function(prop, setter) {
    return this._addSetter(this.prototype, prop, setter);
  };

  MinimalBaseObject.addClassGetter = function(prop, getter) {
    return this._addGetter(this, prop, getter);
  };

  MinimalBaseObject.addClassSetter = function(prop, setter) {
    return this._addSetter(this, prop, setter);
  };


  /*
  IN: arguments is a list of strings or objects
    strings: are just the names of the properties
    objects: map from prop names to initializers
   */

  MinimalBaseObject.property = function() {
    return defProperties(this.prototype, arguments, true, true);
  };

  MinimalBaseObject.classGetter = function() {
    return defProperties(this, arguments, true, false);
  };

  MinimalBaseObject.classSetter = function() {
    return defProperties(this, arguments, false, true);
  };

  MinimalBaseObject.classProperty = function() {
    return defProperties(this, arguments, true, true);
  };

  MinimalBaseObject._propGetterName = propGetterName = function(prop) {
    return "get" + capitalize(prop);
  };

  MinimalBaseObject._propSetterName = propSetterName = function(prop) {
    return "set" + capitalize(prop);
  };

  MinimalBaseObject._addGetter = addGetter = function(obj, prop, getter) {
    obj[propGetterName(prop)] = getter;
    if (!isFunction(getter)) {
      getter = (function() {
        return getter;
      });
    }
    Object.defineProperty(obj, prop, {
      get: getter,
      configurable: true
    });
    return prop;
  };

  MinimalBaseObject._addSetter = addSetter = function(obj, prop, setter) {
    obj[propSetterName(prop)] = setter;
    Object.defineProperty(obj, prop, {
      set: setter,
      configurable: true
    });
    return prop;
  };

  MinimalBaseObject._addGetters = addGetters = function(obj, map) {
    var getter, prop;
    for (prop in map) {
      getter = map[prop];
      addGetter(obj, prop, getter);
    }
    return map;
  };

  MinimalBaseObject._addSetters = addSetters = function(obj, map) {
    var prop, setter;
    for (prop in map) {
      setter = map[prop];
      addSetter(obj, prop, setter);
    }
    return map;
  };

  MinimalBaseObject._addProperties = addProperties = function(obj, map) {
    var initializer, prop;
    for (prop in map) {
      initializer = map[prop];
      defProperty(obj, prop, true, true, initializer);
    }
    return map;
  };

  MinimalBaseObject._defProperty = defProperty = function(obj, prop, defineGetter, defineSetter, initializer) {
    var propName;
    propName = propInternalName(prop);
    if (defineGetter) {
      addGetter(obj, prop, obj[propGetterName(prop)] = isFunction(initializer) ? function() {
        if (this[propName] != null) {
          return this[propName];
        } else {
          return this[propName] = initializer();
        }
      } : initializer != null ? function() {
        if (this[propName] != null) {
          return this[propName];
        } else {
          return this[propName] = initializer;
        }
      } : function() {
        return this[propName];
      });
    }
    if (defineSetter) {
      return addSetter(obj, prop, function(v) {
        return this[propName] = v;
      });
    }
  };

  MinimalBaseObject._defProperties = defProperties = function(obj, props, defineGetter, defineSetter) {
    var i, len, prop, propFromString, propMap, results;
    results = [];
    for (i = 0, len = props.length; i < len; i++) {
      prop = props[i];
      if (isPlainObject(propMap = prop)) {
        if (defineGetter && defineSetter) {
          results.push(addProperties(obj, propMap));
        } else if (defineGetter) {
          results.push(addGetters(obj, propMap));
        } else {
          results.push(addSetters(obj, propMap));
        }
      } else if (isString(prop)) {
        results.push((function() {
          var j, len1, ref1, results1;
          ref1 = propListStringToArray(prop);
          results1 = [];
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            propFromString = ref1[j];
            results1.push(defProperty(obj, propFromString, defineGetter, defineSetter, null));
          }
          return results1;
        })());
      } else {
        throw new Error("invalid value. Expected string or plain-object:", prop);
      }
    }
    return results;
  };

  MinimalBaseObject._propListStringToArray = propListStringToArray = function(propList) {
    return propList.match(/[_a-z][_a-z0-9]*/gi);
  };

  return MinimalBaseObject;

})();


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var FoundationMath, StringExtensions, Types, compactFlatten, escapedDoubleQuoteRegex, floor, intRand, isArray, isNumber, isPlainObject, isString, wordsRegex;

FoundationMath = __webpack_require__(13);

Types = __webpack_require__(6);

wordsRegex = __webpack_require__(19).wordsRegex;

intRand = FoundationMath.intRand;

isString = Types.isString, isNumber = Types.isNumber, isPlainObject = Types.isPlainObject, isArray = Types.isArray;

compactFlatten = Neptune.NeptuneLib.compactFlatten;

escapedDoubleQuoteRegex = /[\\]["]/g;

floor = Math.floor;

module.exports = StringExtensions = (function() {
  var base62Characters, consistentJsonStringify, escapeDoubleQuoteJavascriptString, escapeJavascriptString, getPadding, pluralize, repeat, standardIndent;

  function StringExtensions() {}


  /*
  IN: an array and optionally a string, in any order
    joiner: the string
    array-to-flatten-and-join: the array
  
  OUT:
    compactFlatten(array).join joiner || ""
  
  NOTE: this uses Ruby's default value for joining - the empty array, not ',' which is JavaScripts
   */

  StringExtensions.compactFlattenJoin = function(a, b) {
    var array, joiner;
    array = null;
    joiner = isString(a) ? (array = b, a) : (array = a, b || "");
    return compactFlatten(array).join(joiner);
  };

  StringExtensions.base62Characters = base62Characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  StringExtensions.randomString = function(length, chars) {
    var charsLength, i, result;
    if (length == null) {
      length = 32;
    }
    if (chars == null) {
      chars = base62Characters;
    }
    result = '';
    charsLength = chars.length;
    return ((function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = length; j < ref; i = j += 1) {
        results.push(chars[intRand(charsLength)]);
      }
      return results;
    })()).join('');
  };

  StringExtensions.randomBase62Character = function() {
    return base62Characters[intRand(62)];
  };

  StringExtensions.pluralize = pluralize = function(a, b, pluralForm) {
    if (typeof a === "number") {
      return a + " " + (a === 1 ? b : pluralForm || pluralize(b));
    } else if (isString(a || (a = b))) {
      return a + "s";
    }
  };

  StringExtensions.replaceLast = function(str, find, replaceWith) {
    var index;
    index = str.lastIndexOf(find);
    if (index >= 0) {
      return str.substring(0, index) + replaceWith + str.substring(index + find.length);
    } else {
      return str.toString();
    }
  };

  StringExtensions.getPadding = getPadding = function(length, padding) {
    if (padding == null) {
      padding = " ";
    }
    return Array(length).join(padding);
  };

  StringExtensions.pad = function(str, length, padding, alignRight) {
    var exactPadding;
    str = String(str);
    if (str.length >= length) {
      return str;
    }
    exactPadding = getPadding(Math.max(length - str.length + 1, 0), padding);
    if (alignRight) {
      return exactPadding + str;
    } else {
      return str + exactPadding;
    }
  };

  StringExtensions.escapeDoubleQuoteJavascriptString = escapeDoubleQuoteJavascriptString = function(str) {
    var s;
    s = String(str).replace(/[\\"]/g, "\\$&").replace(/[\0\b\f\n\r\t\v\u2028\u2029]/g, function(x) {
      switch (x) {
        case '\0':
          return "\\0";
        case '\b':
          return "\\b";
        case '\f':
          return "\\f";
        case '\n':
          return "\\n";
        case '\r':
          return "\\r";
        case '\t':
          return "\\t";
        case '\v':
          return "\\v";
        case '\u2028':
          return "\\u2028";
        case '\u2029':
          return "\\u2029";
      }
    });
    return s = '"' + s + '"';
  };


  /*
  SBD for a while I only had JSON.stringify here, but I hate seeing: "I said, \"hello.\""
  when I could be seeing: 'I said, "hello."'
  
  Is this going to break anything? I figure if you really need "" only, just use stringify.
   */

  StringExtensions.escapeJavascriptString = escapeJavascriptString = function(str) {
    var s;
    s = JSON.stringify(str);
    if (s.match(escapedDoubleQuoteRegex)) {
      return "'" + (s.replace(escapedDoubleQuoteRegex, '"').replace(/'/g, "\\'").slice(1, -1)) + "'";
    } else {
      return s;
    }
  };

  StringExtensions.allIndexes = function(str, regex) {
    var indexes, lastIndex, result;
    indexes = [];
    if (!((regex instanceof RegExp) && regex.global)) {
      throw new Error("regex must be a global RegExp");
    }
    regex.lastIndex = 0;
    while (result = regex.exec(str)) {
      indexes.push(result.index);
      lastIndex = result;
    }
    return indexes;
  };

  StringExtensions.repeat = repeat = " ".repeat ? function(str, times) {
    return str.repeat(times);
  } : function(str, count) {
    var result;
    count === floor(count);
    result = '';
    if (count > 0 && str.length > 0) {
      while (true) {
        if ((count & 1) === 1) {
          result += str;
        }
        count >>>= 1;
        if (count === 0) {
          break;
        }
        str += str;
      }
    }
    return result;
  };

  StringExtensions.rightAlign = function(str, width) {
    if (str.length >= width) {
      return str;
    } else {
      return repeat(" ", width - str.length) + str;
    }
  };

  StringExtensions.eachMatch = function(str, regex, f) {
    var result;
    regex.lastIndex = 0;
    while (result = regex.exec(str)) {
      f(result);
    }
    return null;
  };

  standardIndent = {
    joiner: ', ',
    openObject: '{',
    openArray: '[',
    closeObject: "}",
    closeArray: "]"
  };

  StringExtensions.consistentJsonStringify = consistentJsonStringify = function(object, indent) {
    var closeArray, closeObject, error, indentObject, joiner, k, lastTotalIndent, openArray, openObject, out, totalIndent, v;
    return out = (function() {
      var ref;
      if (object === false || object === true || object === null || isNumber(object)) {
        return "" + object;
      } else if (isString(object)) {
        return JSON.stringify(object);
      } else {
        indentObject = indent ? typeof indent === "string" ? {
          joiner: ",\n" + indent,
          openObject: "{\n" + indent,
          openArray: "[\n" + indent,
          closeObject: "\n}",
          closeArray: "\n]",
          totalIndent: indent,
          indent: indent
        } : {
          totalIndent: totalIndent = indent.indent + (lastTotalIndent = indent.totalIndent),
          joiner: ",\n" + totalIndent,
          openObject: "{\n" + totalIndent,
          openArray: "[\n" + totalIndent,
          closeObject: "\n" + lastTotalIndent + "}",
          closeArray: "\n" + lastTotalIndent + "]",
          indent: indent.indent
        } : void 0;
        ref = indentObject || standardIndent, joiner = ref.joiner, openObject = ref.openObject, openArray = ref.openArray, closeObject = ref.closeObject, closeArray = ref.closeArray;
        if (isPlainObject(object)) {
          return openObject + ((function() {
            var j, len, ref1, results;
            ref1 = (Object.keys(object)).sort();
            results = [];
            for (j = 0, len = ref1.length; j < len; j++) {
              k = ref1[j];
              if (object[k] !== void 0) {
                results.push(JSON.stringify(k) + ": " + consistentJsonStringify(object[k], indentObject));
              }
            }
            return results;
          })()).join(joiner) + closeObject;
        } else if (isArray(object)) {
          return openArray + ((function() {
            var j, len, results;
            results = [];
            for (j = 0, len = object.length; j < len; j++) {
              v = object[j];
              results.push(consistentJsonStringify(v, indentObject));
            }
            return results;
          })()).join(joiner) + closeArray;
        } else {
          Neptine.Art.Foundation.log.error(error = "invalid object type for Json. Expecting: null, false, true, number, string, plain-object or array", object);
          throw new Error(error);
        }
      }
    })();
  };

  StringExtensions.splitRuns = function(str) {
    var ch, chCount, i, j, lastCh, ref, result;
    if (str.length === 0) {
      return [];
    }
    lastCh = str[0];
    chCount = 1;
    result = [];
    for (i = j = 1, ref = str.length; j < ref; i = j += 1) {
      ch = str[i];
      if (ch === lastCh) {
        chCount++;
      } else {
        result.push([lastCh, chCount]);
        chCount = 1;
      }
      lastCh = ch;
    }
    result.push([lastCh, chCount]);
    return result;
  };

  StringExtensions.eachRunAsCharCodes = function(str, f) {
    var ch, chCount, i, j, lastCh, ref;
    lastCh = str.charCodeAt(0);
    chCount = 1;
    for (i = j = 1, ref = str.length; j < ref; i = j += 1) {
      ch = str.charCodeAt(i);
      if (ch === lastCh) {
        chCount++;
      } else {
        f(lastCh, chCount);
        chCount = 1;
      }
      lastCh = ch;
    }
    f(lastCh, chCount);
    return null;
  };


  /*
  TODO: I think this can be generalized to cover most all ellipsies and word-wrap scenarios:
    a) have an options object with options:
      maxLength: number         # similar to current maxLength
      minLength: number         # currently implied to be maxLength / 2, in additional customizable, it would also be optional
      brokenWordEllipsis: "…"   # used when only part of a word is included
      moreWordsEllipsis: "…"    # used when there are more words, but the last word is whole
      wordLengthFunction: (string) -> string.length
         * can be replaced with, say, the font pixel-width for a string
         * in this way, this function can be used by text-layout
         * minLength and maxLength would then be in pixels
      breakWords: false         # currently, this is effectively true - will break the last word on line in most situations
      breakOnlyWord: true       # even if breakWords is false, if this is the only word on the line and it doesn't fit, should we break it?
                                 * should this even be an option?
       * future:
      wordBreakFunction: (word, maxLength) -> shorterWord
         * given a word and the maximum length of that word, returns
         * a word <= maxLength according to wordLengthFunction
  
    b) Use cases
      - TextLayout - uses pixels for length rather than characters
      - Art.Engine.Element 'flow' layout
        - if the input was an array of "words" and
        - wordLengthFunction returns the Element's width...
        I think this works. We'd need a way to handle margins though. I think this works:
          spaceLength: (leftWord, rightWord) -> 1
      - Shortend user display names:
        Options:
          wordBreakFunction: (word, maxLength) -> word[0]
          brokenWordEllipsis: "." or ""
        Example Output:
          "Shane Delamore", 10 > "Shane D." or
          "Shane Delamore", 10 > "Shane D"
        Or, just leave breakwords: false and get:
          "Shane Delamore", 10 > "Shane"
  
    c) returns both the output string and the "string remaining" - everything not included
    d) alternate input: an array of strings already broken up by words - the "remainging" return value would then also be an array of "words"
      (this would be for efficiency when doing multi-line layout)
  
  Right now, it works as follows:
  The output string is guaranteed to be:
    <= maxLength
    >= maxLength / 2 in almost all secenarios as long as inputString is >= maxLength / 2
   */

  StringExtensions.humanFriendlyShorten = function(inputString, maxLength) {
    var j, len, minLength, part, string, stringParts;
    if (!(maxLength > 0)) {
      throw new error("maxLength must be > 0");
    }
    inputString = inputString.trim();
    if (!(inputString.length > maxLength)) {
      return inputString;
    }
    minLength = maxLength / 2;
    stringParts = inputString.split(/\s+/);
    string = "";
    for (j = 0, len = stringParts.length; j < len; j++) {
      part = stringParts[j];
      if (string.length === 0) {
        string = part;
      } else if ((string.length < minLength) || string.length + part.length + 2 <= maxLength) {
        string += " " + part;
      } else {
        break;
      }
    }
    if (string.length > maxLength) {
      string = string.slice(0, maxLength - 1).trim();
    }
    return string + "…";
  };

  StringExtensions.stripTrailingWhitespace = function(a) {
    return a.split(/[ ]*\n/).join("\n").split(/[ ]*$/)[0].replace(/\n+$/, '');
  };

  return StringExtensions;

})();


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Art, Foundation,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Art = __webpack_require__(197);

module.exports = Art.Foundation || Art.addNamespace('Foundation', Foundation = (function(superClass) {
  extend(Foundation, superClass);

  function Foundation() {
    return Foundation.__super__.constructor.apply(this, arguments);
  }

  return Foundation;

})(Neptune.Base));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, Binary, BinaryString, ClassSystem, InspectedObjectLiteral, StandardLib, Utf8, compactFlatten, encodings, inspect, isFunction, isPlainArray, isString, log, min, pad, readFileAsArrayBuffer, readFileAsDataUrl,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Binary = __webpack_require__(38);

Utf8 = __webpack_require__(75);

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

isString = StandardLib.isString, isFunction = StandardLib.isFunction, isPlainArray = StandardLib.isPlainArray, log = StandardLib.log, min = StandardLib.min, inspect = StandardLib.inspect, readFileAsDataUrl = StandardLib.readFileAsDataUrl, readFileAsArrayBuffer = StandardLib.readFileAsArrayBuffer, compactFlatten = StandardLib.compactFlatten, pad = StandardLib.pad, InspectedObjectLiteral = StandardLib.InspectedObjectLiteral;

BaseObject = ClassSystem.BaseObject, inspect = ClassSystem.inspect;

encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

module.exports = BinaryString = (function(superClass) {
  var binary;

  extend(BinaryString, superClass);

  BinaryString.binary = binary = function(arg) {
    if (arg instanceof BinaryString) {
      return arg;
    } else {
      return new BinaryString(arg);
    }
  };

  BinaryString.binaryFromBlob = function(blob) {
    return readFileAsArrayBuffer(blob).then(function(ab) {
      return binary(ab);
    });
  };

  BinaryString.cloneUint8Array = function(srcU8A) {
    var dstU8A;
    dstU8A = new Uint8Array(new ArrayBuffer(src.length));
    dstU8A.set(srcU8A);
    return dstU8A;
  };

  function BinaryString(arg) {
    this.bytes = (function() {
      if (arg instanceof BinaryString) {
        return BinaryString.cloneUint8Array(arg.bytes);
      } else if (isFunction(arg != null ? arg.uint8Array : void 0)) {
        return arg.uint8Array();
      } else if (isPlainArray(arg)) {
        return new Uint8Array(arg);
      } else if (arg instanceof ArrayBuffer) {
        return new Uint8Array(arg);
      } else if (arg instanceof Uint8Array) {
        return arg;
      } else if (isString(arg)) {
        return Utf8.toBuffer(arg);
      } else if (isFunction(arg.toString)) {
        return Utf8.toBuffer(arg.toString());
      } else {
        throw new Error("invalid Binary string constructor argument: " + (inspect(arg)));
      }
    })();
    this.length = this.bytes.length;
  }

  BinaryString.prototype.slice = function(a, b) {
    return new BinaryString(this.bytes.slice(a, b));
  };

  BinaryString.fromBase64 = function(base64encoding) {
    var byteString, i, j, len, ref, uint8Array;
    byteString = atob(base64encoding);
    len = byteString.length;
    uint8Array = new Uint8Array(new ArrayBuffer(len));
    for (i = j = 0, ref = len; j < ref; i = j += 1) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new BinaryString(uint8Array);
  };

  BinaryString.prototype.toDataUri = function() {
    return readFileAsDataUrl(new Blob([this.bytes]));
  };

  BinaryString.fromDataUri = function(dataURI) {
    var base64encoding, splitDataURI;
    splitDataURI = dataURI.split(',');
    base64encoding = splitDataURI[1];
    return this.fromBase64(base64encoding);
  };

  BinaryString.prototype.toString = function() {
    return Utf8.toString(this.bytes);
  };

  BinaryString.prototype.toArrayBuffer = function() {
    return this.bytes.buffer;
  };

  BinaryString.prototype.toBlob = function() {
    return new Blob([this.bytes]);
  };

  BinaryString.prototype.eq = function(b) {
    return this.compare(b) === 0;
  };

  BinaryString.prototype.compare = function(b) {
    var bytesA, bytesB, diff, i, j, ref;
    bytesA = this.bytes;
    bytesB = b.bytes;
    for (i = j = 0, ref = min(this.length, b.length); 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (0 !== (diff = bytesA[i] - bytesB[i])) {
        return diff;
      }
    }
    return this.length - b.length;
  };

  BinaryString.prototype.inspect = function() {
    return this.getInspectedString();
  };

  BinaryString.getter({
    uint8Array: function() {
      return this.bytes;
    },
    arrayBuffer: function() {
      return this.bytes.buffer;
    },
    blob: function() {
      return new Blob([this.bytes]);
    },
    plainArray: function() {
      var b, j, len1, ref, results;
      ref = this.bytes;
      results = [];
      for (j = 0, len1 = ref.length; j < len1; j++) {
        b = ref[j];
        results.push(b);
      }
      return results;
    },
    byteLength: function() {
      return this.length;
    },
    inspectedObjects: function() {
      var lenStr;
      lenStr = this.length >= 10 * 1024 * 1024 ? (Math.floor(this.length / 1024 * 1024)) + "m" : this.length >= 10 * 1024 ? (Math.floor(this.length / 1024)) + "k" : this.length + "b";
      return new InspectedObjectLiteral("<BinaryString length: " + lenStr + ">");
    },
    inspectedString: function(stride, maxBytes) {
      var characters, count, line, offset;
      if (stride == null) {
        stride = 8;
      }
      if (maxBytes == null) {
        maxBytes = 64;
      }
      count = 0;
      characters = [];
      if (this.length < maxBytes) {
        maxBytes = this.length;
      }
      line = new Array(stride);
      return compactFlatten([
        "BinaryString length: " + this.length + " bytes", maxBytes < this.length ? "First " + maxBytes + " bytes:" : void 0, (function() {
          var j, ref, ref1, results;
          results = [];
          for (offset = j = 0, ref = maxBytes, ref1 = stride; ref1 > 0 ? j < ref : j > ref; offset = j += ref1) {
            results.push(this._inspectLine(offset, stride, maxBytes));
          }
          return results;
        }).call(this)
      ]).join('\n');
    }
  });

  BinaryString.prototype._inspectLine = function(offset, length, maxBytes) {
    var b, characters, end, hexCharacters, i, y;
    end = min(this.length, offset + length);
    if (maxBytes >= 0) {
      end = min(end, maxBytes);
    }
    characters = (function() {
      var j, ref, ref1, results;
      results = [];
      for (i = j = ref = offset, ref1 = end; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
        b = this.bytes[i];
        if (b >= 31 && b <= 127) {
          results.push(String.fromCharCode(b));
        } else {
          results.push('•');
        }
      }
      return results;
    }).call(this);
    hexCharacters = (function() {
      var j, ref, ref1, results;
      results = [];
      for (i = j = ref = offset, ref1 = end; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
        b = this.bytes[i];
        y = b.toString(16);
        if (y.length < 2) {
          y = "0" + y;
        }
        results.push(y);
      }
      return results;
    }).call(this);
    return (pad(hexCharacters.join(' '), length * 3)) + " '" + (characters.join('')) + "'";
  };


  /*
  toBase64 performance
  see: http://localhost:8080/webpack-dev-server/perf?grep=BinaryString
  as-of 2016-02-14, the manual string manipulation version is surprisingly the best on average for FF, Chrome and Safari
    For shorter lengths, toBase64Custom is by far the fastest, but
    toBase64ToDataUri starts to be faster at longer lengths.
   */

  BinaryString.prototype.toBase64 = function() {
    if (this.length > 16 * 1024) {
      return this.toBase64ToDataUri();
    } else {
      return this.toBase64Custom();
    }
  };

  BinaryString.prototype.toBase64ToDataUri = function() {
    return this.toDataUri().then(function(dataUri) {
      return dataUri.split(',')[1];
    });
  };

  BinaryString.prototype.toBase64Custom = function() {
    var a, b, base64, byteLength, byteRemainder, bytes, c, chunk, d, i, j, mainLength, ref;
    bytes = this.bytes;
    base64 = '';
    byteLength = bytes.byteLength;
    byteRemainder = byteLength % 3;
    mainLength = byteLength - byteRemainder;
    for (i = j = 0, ref = mainLength - 1; j <= ref; i = j += 3) {
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
      a = (chunk & 16515072) >> 18;
      b = (chunk & 258048) >> 12;
      c = (chunk & 4032) >> 6;
      d = chunk & 63;
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
    return Promise.resolve((function() {
      switch (byteRemainder) {
        case 0:
          return base64;
        case 1:
          chunk = bytes[mainLength];
          a = (chunk & 252) >> 2;
          b = (chunk & 3) << 4;
          return base64 + encodings[a] + encodings[b] + '==';
        case 2:
          chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
          a = (chunk & 64512) >> 10;
          b = (chunk & 1008) >> 4;
          c = (chunk & 15) << 2;
          return base64 + encodings[a] + encodings[b] + encodings[c] + '=';
      }
    })());
  };

  return BinaryString;

})(BaseObject);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Math, Regexp, abs, ceil, float32Precision, float64Precision, floor, inverseFloat64Precision, inverstFlaot32Precision, max, min, numberRegexp, pow, random, ref, round;

Regexp = __webpack_require__(19);

numberRegexp = Regexp.numberRegexp;

float64Precision = 0.0000000001;

float32Precision = 0.0000001;

inverseFloat64Precision = 1 / float64Precision;

inverstFlaot32Precision = 1 / float32Precision;

ref = self.Math, abs = ref.abs, min = ref.min, max = ref.max, ceil = ref.ceil, floor = ref.floor, round = ref.round, random = ref.random, pow = ref.pow;

module.exports = Math = (function() {
  var bound;

  function Math() {}

  Math.nearInfinity = pow(10, 100);

  Math.nearInfinityResult = pow(10, 50);

  Math.float32Precision = float32Precision;

  Math.float64Precision = float64Precision;

  Math.modulo = function(a, b) {
    var r;
    r = a % b;
    if (r < 0) {
      return r + b;
    } else {
      return r;
    }
  };

  Math.stringToNumberArray = function(string) {
    var a, i, j, len, match, v;
    a = string.split(",");
    for (i = j = 0, len = a.length; j < len; i = ++j) {
      v = a[i];
      match = v.match(numberRegexp);
      a[i] = match != null ? match[0] - 0 : 0;
    }
    return a;
  };

  Math.minMagnitude = function(a, magnitude) {
    if (a < 0) {
      return min(a, -magnitude);
    } else {
      return max(a, magnitude);
    }
  };

  Math.maxMagnitude = function(a, magnitude) {
    return bound(-magnitude, a, magnitude);
  };

  Math.maxChange = function(newValue, oldValue, maxChangeV) {
    return bound(oldValue - maxChangeV, newValue, oldValue + maxChangeV);
  };

  Math.bound = bound = function(a, b, c) {
    if (isNaN(b)) {
      return a;
    }
    if (b < a) {
      return a;
    } else if (b > c) {
      return c;
    } else {
      return b;
    }
  };

  Math.absGt = function(a, b) {
    return abs(a) > abs(b);
  };

  Math.absLt = function(a, b) {
    return abs(a) < abs(b);
  };

  Math.absGte = function(a, b) {
    return abs(a) >= abs(b);
  };

  Math.absLte = function(a, b) {
    return abs(a) <= abs(b);
  };

  Math.abs = abs;

  Math.min = min;

  Math.max = max;

  Math.round = round;

  Math.ceil = function(v, m) {
    if (m == null) {
      m = 1;
    }
    return ceil(v / m) * m;
  };

  Math.floor = function(v, m) {
    if (m == null) {
      m = 1;
    }
    return floor(v / m) * m;
  };

  Math.round = function(v, m) {
    if (m == null) {
      m = 1;
    }
    return round(v / m) * m;
  };

  Math.simplifyNum = function(num) {
    return round(num * inverseFloat64Precision) * float64Precision;
  };

  Math.floatEq = function(n1, n2) {
    return n1 === n2 || float64Precision > abs(n1 - n2);
  };

  Math.float32Eq = function(n1, n2) {
    return n1 === n2 || float32Precision > abs(n1 - n2);
  };

  Math.floatEq0 = function(n) {
    return n === 0 || float64Precision > abs(n);
  };

  Math.float32Eq0 = function(n) {
    return n === 0 || float32Precision > abs(n);
  };

  Math.floatTrue0 = function(n) {
    if (n === 0 || float64Precision > abs(n)) {
      return 0;
    } else {
      return n;
    }
  };

  Math.float32True0 = function(n) {
    if (n === 0 || float32Precision > abs(n)) {
      return 0;
    } else {
      return n;
    }
  };

  Math.random = random;

  Math.intRand = function(max) {
    return random() * max | 0;
  };

  Math.iPart = function(v) {
    return v - (v % 1);
  };

  Math.fPart = function(v) {
    return v % 1;
  };

  Math.commaize = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  Math.cyclingSequenceFunction = function(sequence) {
    var sequencePos;
    sequencePos = sequence.length;
    return function() {
      sequencePos++;
      if (sequencePos >= sequence.length) {
        sequencePos = 0;
      }
      return sequence[sequencePos];
    };
  };

  return Math;

})();


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, SemanticTree,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CaffeineScript = __webpack_require__(55);

module.exports = CaffeineScript.SemanticTree || CaffeineScript.addNamespace('SemanticTree', SemanticTree = (function(superClass) {
  extend(SemanticTree, superClass);

  function SemanticTree() {
    return SemanticTree.__super__.constructor.apply(this, arguments);
  }

  return SemanticTree;

})(Neptune.Base));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), escapeRegExp;
  ({ escapeRegExp } = Caf.i(["escapeRegExp"], [ArtFoundation, global]));
  return {
    deescapeSpaces: function(string) {
      return Caf
        .e(string.split(/((?:\\\\)+)/), [], (str, i, into) => {
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
        .e(split, [], (str, i, into) => {
          into.push(
            Caf.mod(i, 2) === 0 ? str.replace(charsRegExp, "\\$1") : str
          );
        })
        .join("");
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    StatementsStn = __webpack_require__(17),
    LetStn = __webpack_require__(65),
    UniqueIdentifierHandle = __webpack_require__(22),
    Error,
    log,
    isString,
    merge,
    mergeInto,
    arrayToTruthMap;
  ({ Error, log, isString, merge, mergeInto, arrayToTruthMap } = Caf.i(
    ["Error", "log", "isString", "merge", "mergeInto", "arrayToTruthMap"],
    [ArtFoundation, global]
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
        this.abstractClass();
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
          uniqueIdentifier: function(preferredName = "_temp") {
            return this.getUniqueIdentifierHandle(preferredName).identifier;
          },
          uniqueIdentifierHandle: function(preferredName = "_temp") {
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
          identifier = this.getAvailableIdentifierName(preferredName);
          this.boundUniqueIdentifiers[identifier] = uniqueIdentifierHandle;
          this.identifiersAssigned[identifier] = true;
          return identifier;
        };
        this.prototype.getAvailableIdentifierName = function(preferredName) {
          let identifiersUsed, count, name;
          return !this._scopeUpdated
            ? log.error({
                ScopeStnMixin: {
                  getAvailableIdentifierName: [
                    `cannot be called before updateScope completes: ${this.className}`,
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
                      identifiersUsed[name = `${preferredName}${count += 1}`]
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
            ? `let ${identifiers.join(", ")}`
            : undefined;
        };
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          this.bindAllUniqueIdentifiersRequested();
          this.scope.addChildScope(this);
          Caf.e(this.children, undefined, (child, k, into) => {
            child.updateScope(this);
          });
          return this._scopeUpdated = true;
        };
        this.getter({
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
                    ? `${identifier} = ${initializer}`
                    : initializer.toJsExpression != null
                        ? `${identifier} = ${initializer.toJsExpression()}`
                        : identifier
                );
              }
            });
          },
          identifiersUsed: function() {
            let base;
            return (base = this.props).identifiersUsed ||
              (base.identifiersUsed = {});
          },
          identifiersAssigned: function() {
            let base;
            return (base = this.props).identifiersAssigned ||
              (base.identifiersAssigned = {});
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    Lib = __webpack_require__(15),
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
                  ? `${returnAction} ${c.toJsExpression()}`
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45).includeInNamespace(__webpack_require__(175)).addModules({
  FormattedInspect: __webpack_require__(83),
  InspectedObjectLiteral: __webpack_require__(26),
  InspectedObjects: __webpack_require__(43),
  Inspector: __webpack_require__(44),
  Inspector2: __webpack_require__(181),
  PlainObjects: __webpack_require__(85)
});

__webpack_require__(84);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var Regexp;

module.exports = Regexp = (function() {
  function Regexp() {}

  Regexp.escapeRegExp = function(string) {
    return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  };

  Regexp.findUrlProtocolRegexp = /([\w-]+)(:\/\/)/;

  Regexp.findDomainRegexp = /localhost|[\w]+(?:-[\w]+)*(?:\.[\w]+(?:-[\w]+)*)*(?:\.[a-z]{2,20})/;

  Regexp.urlQueryParamsRegexp = /(?:[-+=&*._\w]|%[a-f\d]{2})+/i;

  Regexp.findUrlPathRegexp = /(?:\/~?(?:[-+*._\w]|%[a-f\d]{2})*)*/;

  Regexp.findUrlPortRegexp = /(\:)(\d+)/;

  Regexp.findEmailRegexp = RegExp("([_\\w-]+(?:\\.[_\\w]+)*)@(" + Regexp.findDomainRegexp.source + ")", "i");

  Regexp.emailRegexp = RegExp("^" + Regexp.findEmailRegexp.source + "$", "i");

  Regexp.numberRegexp = /([-]?\.[0-9]+)|([-]?[0-9]+(\.[0-9]+)?)/;

  Regexp.urlProtocolRegexp = RegExp("^" + Regexp.findUrlProtocolRegexp.source + "$", "i");

  Regexp.domainRegexp = RegExp("^" + Regexp.findDomainRegexp.source + "$", "i");

  Regexp.urlPathRegexp = RegExp("^" + Regexp.findUrlPathRegexp.source + "$", "i");

  Regexp.urlQueryRegexp = RegExp("^" + Regexp.urlQueryParamsRegexp.source + "$", "i");

  Regexp.isoDateRegexp = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

  Regexp.hex16ColorRegex = /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i;

  Regexp.hex256ColorRegex = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i;

  Regexp.rgbColorRegex = /rgb *\( *(\d+%?) *, *(\d+%?) *, *(\d+%?) *\)/;

  Regexp.rgbaColorRegex = /rgba *\( *(\d+%?) *, *(\d+%?) *, *(\d+%?) *, *(\d*\.?\d*)\)/;

  Regexp.colorRegex = new RegExp("(" + Regexp.hex16ColorRegex.source + ")|(" + Regexp.hex256ColorRegex.source + ")|(" + Regexp.rgbColorRegex.source + ")|(" + Regexp.rgbaColorRegex.source + ")");

  Regexp.wordsRegex = /[^\s]+/g;

  Regexp.exactlyOneWordRegex = /^[^\s]+$/;


  /*
  match OUTPUT: [url, protocol, '://', domain, ':', port, path, '?', query]
  
  USAGE:
    [__, protocol, __, domain, __, port, path, __, query] = str.match findUrlRegexp
  
  DESIGN NOTE:
    The reason why I included the fixed strings ('://', ':' and '?') was so that
    you can take the matchResult, alter individual elements and create a value url easily by:
  
      matchResult.slice(1).join ''
   */

  Regexp.findUrlRegexp = RegExp("(?:" + Regexp.findUrlProtocolRegexp.source + ")(" + Regexp.findDomainRegexp.source + ")(?:" + Regexp.findUrlPortRegexp.source + ")?(" + Regexp.findUrlPathRegexp.source + ")?(?:(\\?)(" + Regexp.urlQueryParamsRegexp.source + ")?)?", "i");

  Regexp.findSourceReferenceUrlRegexp = RegExp("(" + Regexp.findUrlProtocolRegexp.source + ")(" + Regexp.findDomainRegexp.source + ")?(?:" + Regexp.findUrlPortRegexp.source + ")?(" + Regexp.findUrlPathRegexp.source + ")?(?:(\\?)(" + Regexp.urlQueryParamsRegexp.source + ")?)?(?:\\:(\\d+))?(?:\\:(\\d+))?", "i");

  Regexp.urlRegexp = RegExp("^" + Regexp.findUrlRegexp.source + "$", "i");

  return Regexp;

})();


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101).addModules({
  EmptyNode: __webpack_require__(99),
  EmptyOptionalNode: __webpack_require__(201),
  Node: __webpack_require__(100)
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
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
        return `(${Caf
          .e(this.children, [], (c, k, into) => {
            into.push(c.toJs());
          })
          .join(", ")})`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BaseObject,
    inspectedObjectLiteral,
    inspect;
  ({ BaseObject, inspectedObjectLiteral, inspect } = Caf.i(
    ["BaseObject", "inspectedObjectLiteral", "inspect"],
    [ArtFoundation, global]
  ));
  return UniqueIdentifierHandle = Caf.defClass(
    class UniqueIdentifierHandle extends BaseObject {
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
            `<UniqueIdentifierHandle preferredName: '${this.preferredName}', scopeSet: ${!!this.scope}, _identifier: ${inspect(
              this._identifier
            )}>`
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BinaryOperatorStn = __webpack_require__(35),
    UniqueIdentifierHandle = __webpack_require__(22),
    SemanticTree,
    BaseStn = __webpack_require__(3),
    mergeInto,
    isArray;
  ({ mergeInto, isArray } = Caf.i(["mergeInto", "isArray"], [
    ArtFoundation,
    global
  ]));
  BinaryOperatorStn;
  UniqueIdentifierHandle;
  SemanticTree = __webpack_require__(14);
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
      this.prototype.transformAccessorChain = function(current = this) {
        let accessorChain, accessor, out;
        accessorChain = [];
        while (
          (Caf.exists(current) && current.type) === "Accessor" ||
          (Caf.exists(current) && current.type) === "FunctionInvocation"
        ) {
          accessor = current;
          current = current.value;
          accessorChain.push(accessor);
        }
        accessorChain = accessorChain.reverse();
        out = this.transformAccessorChainR(
          accessorChain[0].value.transform(),
          accessorChain
        );
        mergeInto(out.props, this.props, out.props);
        return out;
      };
      this.prototype.transformAccessorChainR = function(value, accessorChain) {
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
                    ? this.transformAccessorChainR(
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var ArrayExtensions, bound, exactlyOneWordRegex, intRand, isNumber, isString, max, modulo, ref, ref1, ref2, wordsRegex,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

ref = __webpack_require__(13), bound = ref.bound, max = ref.max, intRand = ref.intRand, modulo = ref.modulo;

ref1 = __webpack_require__(6), isNumber = ref1.isNumber, isString = ref1.isString;

ref2 = __webpack_require__(19), wordsRegex = ref2.wordsRegex, exactlyOneWordRegex = ref2.exactlyOneWordRegex;

module.exports = ArrayExtensions = (function() {
  var _moveArrayElementLargeArray, _moveArrayElementSmallArray, a, arrayWithElementMoved, arrayWithInsertedValue, basicCompareFunction, indexOfOrLength, keepAll, keepIfRubyTrue, leftOfIndex, longestCommonSubsequence, moveArrayElement, randomElement, randomSort, rightOfIndex, w;

  function ArrayExtensions() {}


  /*
  Useful compact and compactFlatten keepTester functions
   */

  ArrayExtensions.keepAll = keepAll = function() {
    return true;
  };

  ArrayExtensions.keepIfRubyTrue = keepIfRubyTrue = function(a) {
    return a !== void 0 && a !== null && a !== false;
  };

  ArrayExtensions.reverseForEach = function(array, f) {
    var p, v;
    for (p = array.length - 1; p >= 0; p += -1) {
      v = array[p];
      f(v);
    }
    return array;
  };

  ArrayExtensions.arrayToTruthMap = function(array) {
    var a, len1, p, res;
    res = {};
    for (p = 0, len1 = array.length; p < len1; p++) {
      a = array[p];
      res[a] = true;
    }
    return res;
  };

  ArrayExtensions.arrayToFalseMap = function(array) {
    var a, len1, p, res;
    res = {};
    for (p = 0, len1 = array.length; p < len1; p++) {
      a = array[p];
      res[a] = false;
    }
    return res;
  };

  ArrayExtensions.concatInto = function(array, b) {
    return array.push.apply(array, b);
  };

  ArrayExtensions.uniqueValues = function(sortedArray, eqF) {
    var i, len1, p, results, v;
    if (eqF == null) {
      eqF = (function(a, b) {
        return a === b;
      });
    }
    results = [];
    for (i = p = 0, len1 = sortedArray.length; p < len1; i = ++p) {
      v = sortedArray[i];
      if (i === 0 || !eqF(v, sortedArray[i - 1])) {
        results.push(v);
      }
    }
    return results;
  };


  /*
  IN:
    array: an array or falsy value
    element: anything
  OUT:
    array containing element as the last element
  
  EFFECT:
    if array was falsy, a new length-1 array is returned
    else, array was mutated by pushing the current element
  
  WHY?
    Why write this when arrays alread have push?
  
    1) if array is null, this works as desired
    2) this returns array, not array.length
      Returning the array is what Ruby's push does.
      It makes chaining pushes easy.
   */

  ArrayExtensions.push = function(array, element) {
    if (array) {
      array.push(element);
      return array;
    } else {
      return [element];
    }
  };

  ArrayExtensions.peek = function(array, offset) {
    if (offset == null) {
      offset = -1;
    }
    if (array) {
      return array[array.length + offset];
    } else {
      return void 0;
    }
  };

  basicCompareFunction = function(a, b) {
    return a - b;
  };

  ArrayExtensions.leftOfIndex = leftOfIndex = function(array, index) {
    if (!array) {
      return array;
    }
    return array.slice(0, index);
  };

  ArrayExtensions.rightOfIndex = rightOfIndex = function(array, index) {
    if (!array) {
      return array;
    }
    if (index < 0) {
      index += array.length;
    }
    return array.slice(index + 1);
  };

  indexOfOrLength = function(array, value) {
    var i;
    if (0 > (i = array.indexOf(value))) {
      return array.length;
    } else {
      return i;
    }
  };

  ArrayExtensions.leftOf = function(array, value) {
    return leftOfIndex(array, indexOfOrLength(array, value));
  };

  ArrayExtensions.rightOf = function(array, value) {
    return rightOfIndex(array, indexOfOrLength(array, value));
  };

  ArrayExtensions.splitArray = function(array, value) {
    var index;
    index = indexOfOrLength(array, value);
    return [leftOfIndex(array, index), rightOfIndex(array, index)];
  };


  /*
  findSortedFirst
  
  Acts as-if it sorted the array and returned the first element.
  
  Details:
    tests each element in the array againts the current "smallest"
    returns the element for which tests "smaller" than every other
    element a is "smaller" than b if compareFunction(a, b) returns >0 value
  
  IN:
    array - the array to search or null
    compareFunction - (a, b) -> # standard compare function
      returns:
        0: if a and b are equal
        <0: if b is greater than a
        >0: if a is greater than b
      default: (a, b) -> a - b
  
  OUT:
    largest value in array or undefined if array is null or length 0
   */

  ArrayExtensions.findSortedFirst = function(array, compareFunction) {
    var element, i, p, ref3, returnElement;
    if (compareFunction == null) {
      compareFunction = basicCompareFunction;
    }
    if (!((array != null ? array.length : void 0) > 0)) {
      return void 0;
    }
    returnElement = array[0];
    for (i = p = 1, ref3 = array.length; p < ref3; i = p += 1) {
      if (0 < compareFunction(returnElement, element = array[i])) {
        returnElement = element;
      }
    }
    return returnElement;
  };

  ArrayExtensions.first = function(array) {
    return array[0];
  };

  ArrayExtensions.second = function(array) {
    return array[1];
  };

  ArrayExtensions.third = function(array) {
    return array[2];
  };

  ArrayExtensions.forth = function(array) {
    return array[3];
  };

  ArrayExtensions.fifth = function(array) {
    return array[4];
  };

  ArrayExtensions.last = function(array) {
    if (array) {
      return array[array.length - 1];
    } else {
      return void 0;
    }
  };

  ArrayExtensions.pushIfNotPresent = function(array, item) {
    if (indexOf.call(array, item) >= 0) {
      return false;
    } else {
      array.push(item);
      return true;
    }
  };

  ArrayExtensions.randomElement = randomElement = function(array, fromFirstN) {
    if (fromFirstN == null) {
      fromFirstN = array.length;
    }
    return array[Math.random() * fromFirstN | 0];
  };

  ArrayExtensions.randomSort = randomSort = function(array) {
    var a, i, j, len, p, ref3;
    len = array.length;
    for (i = p = ref3 = len - 1; p >= 0; i = p += -1) {
      j = intRand(i);
      a = array[i];
      array[i] = array[j];
      array[j] = a;
    }
    return array;
  };

  ArrayExtensions.arrayWithRandomSort = function(array) {
    if (array) {
      return randomSort(array.slice());
    } else {
      return [];
    }
  };

  ArrayExtensions.insert = function(array, index, item) {
    if (index < 0) {
      index = array.length + index + 1;
    }
    array.splice(index, 0, item);
    return array;
  };

  ArrayExtensions.arrayWithInsertedValue = arrayWithInsertedValue = function(array, index, item) {
    return ArrayExtensions.insert(array.slice(), index, item);
  };

  ArrayExtensions.withInserted = arrayWithInsertedValue;

  ArrayExtensions.withSort = function(array, sortFunction) {
    array = array.slice();
    return array.sort(sortFunction);
  };

  ArrayExtensions.remove = function(array, index, amount) {
    if (amount == null) {
      amount = 1;
    }
    if (index < 0) {
      index = array.length + index + 1;
    }
    array.splice(index, amount);
    return array;
  };

  ArrayExtensions.removeFirstMatch = function(array, toMatchValue) {
    var index;
    index = array.indexOf(toMatchValue);
    if (index >= 0) {
      return ArrayExtensions.remove(array, index);
    } else {
      return array;
    }
  };

  ArrayExtensions.arrayWithout = function(array, index, amount) {
    if (amount == null) {
      amount = 1;
    }
    if (index == null) {
      index = array.length - 1;
    }
    return ArrayExtensions.remove(array.slice(), index, amount);
  };

  ArrayExtensions.arrayWithoutValue = function(array, value) {
    return ArrayExtensions.remove(array.slice(), array.indexOf(value), 1);
  };

  ArrayExtensions.arrayWith = function(array, value) {
    if (!array) {
      return [value];
    }
    array = array.slice();
    array.push(value);
    return array;
  };

  ArrayExtensions.truncatedArrayWith = function(array, length, value) {
    if (!array) {
      return [value];
    }
    array = array.slice(0, length);
    array.push(value);
    return array;
  };

  ArrayExtensions.poppedArray = function(array) {
    return array.slice(0, array.length - 1);
  };

  ArrayExtensions.arrayWithOne = function(array, value) {
    if (!array) {
      return [value];
    }
    array = array.slice();
    if (indexOf.call(array, value) < 0) {
      array.push(value);
    }
    return array;
  };

  ArrayExtensions.slice = function(a, b, c) {
    return arraySlice.call(a, b, c);
  };

  ArrayExtensions.shuffleArray = function(a) {
    var i, j, t;
    i = a.length;
    while (--i > 0) {
      j = ~~(Math.random() * (i + 1));
      t = a[j];
      a[j] = a[i];
      a[i] = t;
    }
    return a;
  };

  ArrayExtensions._moveArrayElementLargeArray = _moveArrayElementLargeArray = function(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
    return array;
  };

  ArrayExtensions._moveArrayElementSmallArray = _moveArrayElementSmallArray = function(array, from, to) {
    var i, p, q, ref3, ref4, ref5, ref6, tmp;
    from = from | 0;
    to = to | 0;
    tmp = array[from];
    if (from < to) {
      for (i = p = ref3 = from, ref4 = to - 1; p <= ref4; i = p += 1) {
        array[i] = array[i + 1];
      }
    } else {
      for (i = q = ref5 = from, ref6 = to + 1; q >= ref6; i = q += -1) {
        array[i] = array[i - 1];
      }
    }
    array[to] = tmp;
    return array;
  };

  ArrayExtensions.moveArrayElement = moveArrayElement = function(array, from, to) {
    from = modulo(from | 0, array.length);
    to = modulo(to | 0, array.length);
    if (Math.abs(from - to) > 300) {
      _moveArrayElementLargeArray(array, from, to);
    } else {
      _moveArrayElementSmallArray(array, from, to);
    }
    return array;
  };

  ArrayExtensions.arrayWithElementMoved = arrayWithElementMoved = function(array, from, to) {
    from = modulo(from | 0, array.length);
    to = modulo(to | 0, array.length);
    if (from === to) {
      return array;
    }
    array = array.slice();
    return moveArrayElement(array, from, to);
  };

  ArrayExtensions.arrayWithElementValueMoved = function(array, value, to) {
    var from;
    from = array.indexOf(value);
    if (from < 0) {
      return array;
    }
    return arrayWithElementMoved(array, from, to);
  };

  ArrayExtensions.arrayWithElementReplaced = function(array, value, index) {
    array = array.slice();
    array[index] = value;
    return array;
  };

  ArrayExtensions.arrayWithAllButLast = function(array, amount) {
    if (amount == null) {
      amount = 1;
    }
    if (array) {
      return array.slice(0, array.length - amount);
    } else {
      return [];
    }
  };

  ArrayExtensions.stableSort = function(array, compare) {
    var a, b, i, length, notSorted, p, ref3;
    compare || (compare = function(a, b) {
      return a - b;
    });
    notSorted = true;
    length = array.length;
    while (notSorted) {
      notSorted = false;
      for (i = p = 1, ref3 = length; p < ref3; i = p += 1) {
        if (compare(a = array[i - 1], b = array[i]) > 0) {
          array[i - 1] = b;
          array[i] = a;
          notSorted = true;
        }
      }
    }
    return array;
  };

  ArrayExtensions.longestCommonSubsequence = longestCommonSubsequence = function(a, b) {
    var c, diag, i, j, latch, lcs, left, m, n, p, q, r, ref3, ref4, ref5, row, s;
    lcs = [];
    row = [];
    c = [];
    if (m < n) {
      s = a;
      a = b;
      b = s;
    }
    m = a.length;
    n = b.length;
    for (j = p = 0, ref3 = n; p < ref3; j = p += 1) {
      row[j] = 0;
    }
    for (i = q = 0, ref4 = m; q < ref4; i = q += 1) {
      c[i] = row = row.slice();
      diag = 0;
      for (j = r = 0, ref5 = n - 1; r <= ref5; j = r += 1) {
        latch = row[j];
        if (a[i] === b[j]) {
          row[j] = diag + 1;
        } else {
          left = row[j - 1] || 0;
          if (left > row[j]) {
            row[j] = left;
          }
        }
        diag = latch;
      }
    }
    i--;
    j--;
    while (i > -1 && j > -1) {
      switch (c[i][j]) {
        case i && c[i - 1][j]:
          i--;
          continue;
        case j && c[i][j - 1]:
          j--;
          break;
        default:
          j--;
          lcs.unshift(a[i]);
          i--;
          continue;
      }
    }
    return lcs;
  };

  ArrayExtensions.minimumOrderedOverlappingMerge = function(a, b) {
    var ai, bj, c, ck, i, j, k, l, m, n, o, out;
    c = longestCommonSubsequence(a, b);
    m = a.length;
    n = b.length;
    o = c.length;
    out = new Array(n);
    i = 0;
    j = 0;
    k = 0;
    l = 0;
    while (i < m && j < n && k < o) {
      ai = a[i];
      bj = b[j];
      ck = c[k];
      if (ai === ck && bj === ck) {
        i++;
        j++;
        k++;
        out[l++] = ai;
      } else if (ai !== ck) {
        i++;
        if (indexOf.call(b, ai) < 0) {
          out[l++] = ai;
        }
      } else {
        j++;
        out[l++] = bj;
      }
    }
    while (i < m) {
      ai = a[i++];
      if (indexOf.call(b, ai) < 0) {
        out[l++] = ai;
      }
    }
    while (j < n) {
      out[l++] = b[j++];
    }
    return out;
  };

  ArrayExtensions.wordsArray = w = function() {
    var arg, len1, out, p;
    out = [];
    for (p = 0, len1 = arguments.length; p < len1; p++) {
      arg = arguments[p];
      if (isString(arg) && !arg.match(exactlyOneWordRegex)) {
        out = out.concat(arg.match(wordsRegex));
      } else {
        out.push(arg);
      }
    }
    return out;
  };

  ArrayExtensions.wordArray = ArrayExtensions.wordsArray;

  ArrayExtensions.w = ArrayExtensions.wordsArray;

  ArrayExtensions.a = a = function() {
    var arg, len1, out, p;
    out = [];
    for (p = 0, len1 = arguments.length; p < len1; p++) {
      arg = arguments[p];
      out.push(arg);
    }
    return out;
  };

  return ArrayExtensions;

})();


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var CommonJs, isClass, isFunction, ref;

ref = __webpack_require__(6), isClass = ref.isClass, isFunction = ref.isFunction;

module.exports = CommonJs = (function() {
  var definingModule;

  function CommonJs() {}

  definingModule = null;

  CommonJs.getModuleBeingDefined = function() {
    return definingModule;
  };


  /*
  IN:
    defineFunciton ||
   */

  CommonJs.defineModule = function(_module, a) {
    var lastModule, mod, result;
    lastModule = definingModule;
    definingModule = _module;
    mod = isFunction(a) ? isClass(a) ? a : a() : a;
    result = _module.exports = (mod != null ? typeof mod.createWithPostCreate === "function" ? mod.createWithPostCreate(mod) : void 0 : void 0) || mod;
    definingModule = lastModule;
    return result;
  };

  return CommonJs;

})();


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var InspectedObjectLiteral, compare;

compare = __webpack_require__(41).compare;

module.exports = InspectedObjectLiteral = (function() {
  InspectedObjectLiteral.inspectedObjectLiteral = function(literal, isError) {
    return new InspectedObjectLiteral(literal, isError);
  };

  function InspectedObjectLiteral(literal1, isError1) {
    this.literal = literal1;
    this.isError = isError1;
  }

  InspectedObjectLiteral.prototype.getInspectedObjects = function() {
    return this;
  };

  InspectedObjectLiteral.prototype.inspect = function() {
    return this.literal;
  };

  InspectedObjectLiteral.prototype.compare = function(b) {
    return compare(this.literal, b.literal);
  };

  return InspectedObjectLiteral;

})();


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/*
TODO: This is almost identical to ES6's Map: Switch to using a Polyfill like:
  https://github.com/paulmillr/es6-shim

Map is a Key-Value map which preserves order.

Unlike Javascript objects, you can use any object or value as keys. This includes:

  Strings
  Numbers
  null
  undefined
  Arrays
  Objects

Arrays and Objects are assigned a unique id using the Foundation.Unique library.
"0", "", null, undefined and 0 are all different unique keys and can each have unique values.
 */
var Map, MinimalBaseObject, Node, Unique,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Unique = __webpack_require__(49);

MinimalBaseObject = __webpack_require__(9);

Node = (function() {
  function Node(key, value, prev, next) {
    this.key = key;
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
    if (prev) {
      prev.next = this;
    }
    if (next) {
      next.prev = this;
    }
  }

  Node.prototype.remove = function() {
    var n, p;
    n = this.next;
    p = this.prev;
    if (p) {
      p.next = n;
      this.prev = null;
    }
    if (n) {
      n.prev = p;
      return this.next = null;
    }
  };

  return Node;

})();

module.exports = Map = (function(superClass) {
  extend(Map, superClass);

  Map.inverseMap = function(array) {
    var i, k, len, result, v;
    result = new Map;
    for (k = i = 0, len = array.length; i < len; k = ++i) {
      v = array[k];
      result.set(v, k);
    }
    return result;
  };

  function Map() {
    this._length = 0;
    this._map = {};
    this._first = this._last = null;
  }

  Map.getter({
    length: function() {
      return this._length;
    },
    nodes: function() {
      var n, result;
      result = [];
      n = this._first;
      while (n) {
        result.push(n);
        n = n.next;
      }
      return result;
    },
    keys: function() {
      var i, len, node, ref, results;
      ref = this.nodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        results.push(node.key);
      }
      return results;
    },
    values: function() {
      var i, len, node, ref, results;
      ref = this.nodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        results.push(node.value);
      }
      return results;
    }
  });

  Map.prototype.get = function(key) {
    var node;
    node = this._map[Unique.id(key)];
    return node && node.value;
  };

  Map.prototype.set = function(key, value) {
    var id;
    id = Unique.id(key);
    if (this._map[id]) {
      this._map[id].value = value;
    } else {
      this._length++;
      this._last = this._map[id] = new Node(key, value, this._last);
      if (!this._first) {
        this._first = this._last;
      }
    }
    return value;
  };

  Map.prototype._remove = function(key) {
    var id, n;
    id = Unique.id(key);
    if (n = this._map[id]) {
      this._length--;
      delete this._map[id];
      if (this._first === n) {
        this._first = n.next;
      }
      if (this._last === n) {
        this._last = n.prev;
      }
      n.remove();
      return n;
    } else {
      return void 0;
    }
  };

  Map.prototype.remove = function(key) {
    var n;
    if (n = this._remove(key)) {
      return n.value;
    } else {
      return void 0;
    }
  };

  Map.prototype["delete"] = function(key) {
    return !!this._remove(key);
  };

  Map.prototype.exists = function(key) {
    return this._map[Unique.id(key)];
  };

  Map.prototype.forEach = function(f) {
    var i, len, node, ref;
    ref = this.nodes;
    for (i = 0, len = ref.length; i < len; i++) {
      node = ref[i];
      f(node.value);
    }
    return this;
  };

  Map.prototype.findFirst = function(testF) {
    var i, len, node, ref;
    ref = this.nodes;
    for (i = 0, len = ref.length; i < len; i++) {
      node = ref[i];
      if (testF(node.value)) {
        return node.value;
      }
    }
    return void 0;
  };

  Map.prototype.each = function(f) {
    var i, len, node, ref;
    ref = this.nodes;
    for (i = 0, len = ref.length; i < len; i++) {
      node = ref[i];
      f(node.key, node.value);
    }
    return this;
  };

  Map.prototype.map = function(f) {
    var i, len, node, ref, results;
    ref = this.nodes;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      node = ref[i];
      results.push(f(node.key, node.value));
    }
    return results;
  };

  Map.prototype.inspect = function(inspector) {
    var _inspect, first;
    Neptune.Art.Foundation.log("inspect map");
    if (!inspector) {
      return Neptune.Art.Foundation.inspect(this);
    }
    _inspect = function(o) {
      if (typeof o === "string" && o.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
        return inspector.put(o);
      } else {
        return inspector.inspect(o);
      }
    };
    inspector.put("{Map ");
    first = true;
    this.map(function(k, v) {
      if (!first) {
        inspector.put(", ");
      }
      _inspect(k);
      inspector.put(": ");
      inspector.inspect(v);
      return first = false;
    });
    return inspector.put("}");
  };

  Map.prototype.verifyNodes = function() {
    var inspect, length, node, prev;
    inspect = Neptune.Art.Foundation.inspect;
    if ((this._first == null) && (this._last == null) && this._length === 0) {
      return;
    }
    if (this._length === 0 && this._first) {
      throw new Error("length == " + this.length + " but @_first is not null");
    }
    if (this._length === 0 && this._last) {
      throw new Error("length == " + this.length + " but @_last is not null");
    }
    if (!this._first) {
      throw new Error("length == " + this.length + " and @_first is null");
    }
    if (!this._last) {
      throw new Error("length == " + this.length + " and @_last is null");
    }
    if (this._first.prev) {
      throw new Error("@_first has prev");
    }
    if (this._last.next) {
      throw new Error("@_last has next");
    }
    length = 0;
    prev = null;
    node = this._first;
    while (node) {
      length++;
      if (node.prev !== prev) {
        throw new Error("node.prev != prev. " + (inspect({
          lenght: length,
          nodePrev: node.prev,
          prev: prev
        }, 1)));
      }
      prev = node;
      node = node.next;
    }
    if (this.length !== length) {
      throw new Error("@length is " + this.length + ", but it should be " + length);
    }
  };

  return Map;

})(MinimalBaseObject);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var ParseUrl;

module.exports = ParseUrl = (function() {
  var generateQuery;

  function ParseUrl() {}

  ParseUrl.getEnv = function() {
    var ref, ref1, ret;
    ret = ((ref = global.location) != null ? ref.search : void 0) ? ParseUrl.parseQuery() : (ref1 = global.process) != null ? ref1.env : void 0;
    return ret || {};
  };

  ParseUrl.parseQuery = function(qs) {
    var i, j, key, len, obj, pair, ref, ref1, val;
    if (qs == null) {
      qs = ((ref = global.location) != null ? ref.search : void 0) || "";
    }
    obj = {};
    ref1 = qs.replace(/^\?/, '').split('&');
    for (j = 0, len = ref1.length; j < len; j++) {
      pair = ref1[j];
      i = pair.indexOf('=');
      key = pair.slice(0, i);
      val = pair.slice(i + 1);
      if (key.length > 0) {
        obj[key] = decodeURIComponent(val);
      }
    }
    return obj;
  };

  ParseUrl.generateQuery = generateQuery = function(o) {
    var k, parts, v;
    parts = (function() {
      var results;
      results = [];
      for (k in o) {
        v = o[k];
        results.push((encodeURIComponent(k)) + "=" + (encodeURIComponent(v)));
      }
      return results;
    })();
    return parts.join("&");
  };

  ParseUrl.appendQuery = function(uri, o) {
    var str;
    str = generateQuery(o);
    return "" + uri + (uri.match(/\?/) ? "&" : "?") + str;
  };

  ParseUrl.parseUrl = function(url) {
    var __, a, anchor, fileName, host, hostWithPort, m, password, path, pathName, port, protocol, query, username;
    m = url.match(/(([A-Za-z]+):(\/\/)?)?(([\-;&=\+\$,\w]+)(:([\-;:&=\+\$,\w]+))?@)?([A-Za-z0-9\.\-]+)(:([0-9]+))?(\/[\+~%\/\.\w\-]*)?(\?([\-\+=&;%@\.\w,]*))?(\#([\.\!\/\\\w]*))?/);
    if (!m) {
      return void 0;
    }
    __ = m[0], __ = m[1], protocol = m[2], __ = m[3], __ = m[4], username = m[5], __ = m[6], password = m[7], host = m[8], __ = m[9], port = m[10], pathName = m[11], __ = m[12], query = m[13], __ = m[14], anchor = m[15];
    if (pathName) {
      a = pathName.split("/");
      fileName = a[a.length - 1];
      path = (a.slice(0, a.length - 1)).join("/");
    }
    host = host.toLowerCase();
    hostWithPort = host;
    if (port) {
      hostWithPort += ":" + port;
    }
    return {
      protocol: protocol,
      username: username,
      password: password,
      hostWithPort: hostWithPort,
      host: host,
      port: port,
      pathName: pathName,
      path: path,
      fileName: fileName,
      query: query && ParseUrl.parseQuery(query),
      anchor: anchor
    };
  };

  return ParseUrl;

})();


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BlueBirdPromise, ErrorWithInfo, deepEach, deepMap, defineModule, getEnv, isFunction, isPlainObject, promiseDebug, ref;

BlueBirdPromise = __webpack_require__(215);

ref = __webpack_require__(6), deepMap = ref.deepMap, deepEach = ref.deepEach, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject;

defineModule = __webpack_require__(25).defineModule;

getEnv = __webpack_require__(28).getEnv;

if (promiseDebug = getEnv().artPromiseDebug) {
  console.log("Art.Foundation.Promise: BlueBirdPromise debug ENABLED");
}

BlueBirdPromise.config({
  warnings: promiseDebug,
  longStackTraces: promiseDebug,
  cancellation: promiseDebug,
  monitoring: promiseDebug
});

ErrorWithInfo = __webpack_require__(82);


/*
ArtPromise extends ES6 Promises in the following ways:

- constructing a promise with no parameters is allowed
- promise.resolve and promise.reject are supported as
  alternative ways to resolve or reject a promise

If native promises are supported, they are used,
otherwise a polyfill is used.

TODO:
  ES6 says Promises are designed to be extensible:
  http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects

  If I properly extend Promise, will my new methods be available on all promise objects... ???
    At least all promises chained off of one created using my Promise class... ???

  But I had problems doing that. Maybe it's how CoffeeScript extends things?

TODO:
  I want a way to do 'then' and 'catch' without effecting any following 'thens' or 'caches'

  It's easy to implement, but what to call it? Leaning towards tapThen. If I had Ruby's 'tap', then
  I could do this effectively with:

    .tap (a) -> a.then ->
    but
    .tapThen ->
    is even nicer

  Will it be available on returned promises?
    (see ES6 Promise extension above)

  tapThen: (successF, failF) ->
    @then successF, failF
    @ # return the current promise, not the one returned from the then-call above
 */

defineModule(module, function() {
  var ArtPromise, k, v;
  ArtPromise = (function() {
    var deepAll, isPromise, noop;

    function ArtPromise() {}

    ArtPromise.isPromise = isPromise = function(f) {
      return isFunction(f != null ? f.then : void 0);
    };

    ArtPromise.testPromise = function(promise) {
      promise.then(function(v) {
        return console.log("promise.resolve", v);
      });
      return promise["catch"](function(v) {
        return console.log("promise.reject", v);
      });
    };

    ArtPromise.mapAll = function(map) {
      var key, keys;
      keys = Object.keys(map);
      return Promise.all((function() {
        var j, len, results;
        results = [];
        for (j = 0, len = keys.length; j < len; j++) {
          key = keys[j];
          results.push(map[key]);
        }
        return results;
      })()).then(function(values) {
        var i, j, key, len, out;
        out = {};
        for (i = j = 0, len = keys.length; j < len; i = ++j) {
          key = keys[i];
          out[key] = values[i];
        }
        return out;
      });
    };

    ArtPromise.containsPromises = function(plainStructure) {
      var containsPromises;
      containsPromises = false;
      deepEach(plainStructure, function(v) {
        return containsPromises || (containsPromises = isPromise(v));
      });
      return containsPromises;
    };


    /*
    For use with Node-style callbacks:
      IN: (error, data) ->
        error: null or set if there was an error
        data: set if error is null
    
    Example:
      Promise.withCallback (callback) ->
        doAsyncStuff -> callback()
     */

    ArtPromise.withCallback = function(startPromiseBodyFunction) {
      return new BlueBirdPromise(function(resolve, reject) {
        var callback;
        callback = function(err, data) {
          if (err) {
            return reject(new Error(err));
          }
          return resolve(data);
        };
        return startPromiseBodyFunction(callback);
      });
    };

    ArtPromise.newExternallyResolvable = function() {
      var out, p;
      out = {};
      p = new BlueBirdPromise(function(resolve, reject) {
        out.resolve = resolve;
        return out.reject = reject;
      });
      p.resolve = out.resolve;
      p.reject = out.reject;
      return p;
    };

    noop = function(a) {
      return a;
    };

    ArtPromise.deepAll = deepAll = function(plainStructure, resolvedResultPreprocessor) {
      var promises;
      if (resolvedResultPreprocessor == null) {
        resolvedResultPreprocessor = noop;
      }
      promises = [];
      deepEach(plainStructure, function(v) {
        if (isPromise(v)) {
          return promises.push(v);
        }
      });
      return Promise.all(promises).then(function(resolved) {
        var i;
        i = 0;
        return deepMap(plainStructure, function(v) {
          if (isPromise(v)) {
            return resolvedResultPreprocessor(resolved[i++]);
          } else {
            return v;
          }
        });
      });
    };

    ArtPromise.deepResolve = deepAll;


    /*
    Serializer makes it easy to ensure promise-returning functions are invoked in order, after each
    promise is resolved.
    
    USAGE:
    
       * EXAMPLE 1: Basic - not too different from normal Promise sequences
      serializer = new ArtPromise.Serializer
      serializer.then -> doA()
    
       * then execute sometime later, possbly asynchronously:
      serializer.then -> doB()
    
       * then execute sometime later, possbly asynchronously:
      serializer.then (doBResult) ->
         * doA and doB have completed and any returning promises resolved
         * the result of the last 'then' is passed in
    
       * EXAMPLE 2: apply the same async function serially to each element in list
       * - list's order is preserved
       * - each invocation waits for the previous one to complete
      serializer = new ArtPromise.Serializer
      list.forEach serializer.serialize f = (element) -> # do something with element, possibly returning a promise
      serializer.then (lastFResult) ->
         * do something after the last invocation of f completes
         * the result of the last invocation of 'f' is passed in
    
       * EXAMPLE 3: mix multiple serialized functions and manual @then invocations
       * - invocation order is perserved
      serializer = new ArtPromise.Serializer
      serializedA = serializer.serialize aFunction
      serializedB = serializer.serialize bFunction
    
      serializedB()
      serializer.then -> @cFunction()
      serializedB()
      serializedA()
      serializedB()
    
      serializer.then (lastBFunctionResult) ->
         * this is invoked AFTER:
         * evaluating, in order, waiting for any promises:
         *   bFunction, cFunction, bFunction, aFunction, bFunction
     */

    ArtPromise.Serializer = (function() {
      function Serializer() {
        this._lastPromise = BlueBirdPromise.resolve();
      }


      /*
      Returns a new function, serializedF, that acts just like 'f'
        - f is forced to be async:
          - if f doesn't return a promise, a promise wrapping f's result is returned
        - invoking serializedF queues f in this serializer instance's sequence via @then
      IN: any function with any signature
      OUT: (f's signature) -> promise.then (fResult) ->
      
      Example with Comparison:
      
         * all asyncActionReturningPromise(element)s get called immediately
         * and may complete randomly at some later event
        myArray.forEach (element) ->
          asyncActionReturningPromise element
      
         * VS
      
         * asyncActionReturningPromise(element) only gets called
         * after the previous call completes.
         * If a previous call failes, the remaining calls never happen.
        serializer = new Promise.Serializer
        myArray.forEach serializer.serialize (element) ->
          asyncActionReturningPromise element
      
         * bonus, you can do things when all the promises complete:
        serializer.then =>
      
         * or if anything fails
        serializer.catch =>
      
         * VS - shortcut
      
         * Just insert "Promise.serialize" before your forEach function to ensure serial invocations.
         * However, you don't get the full functionality of the previous example.
        myArray.forEach Promise.serialize (element) ->
          asyncActionReturningPromise element
       */

      Serializer.prototype.serialize = function(f) {
        return (function(_this) {
          return function() {
            var args;
            args = arguments;
            return _this.then(function() {
              return f.apply(null, args);
            });
          };
        })(this);
      };

      Serializer.prototype.then = function(resolved, rejected) {
        return this._lastPromise = this._lastPromise.then(resolved, rejected);
      };

      Serializer.prototype["catch"] = function(rejected) {
        return this._lastPromise = this._lastPromise["catch"](rejected);
      };

      Serializer.prototype.always = function(f) {
        return this._lastPromise = this._lastPromise["catch"]((function(_this) {
          return function() {
            return null;
          };
        })(this)).then(f);
      };


      /*
      OUT: promise that resolves / rejects only when there are no more
        pending tasks queued with the serializer.
      
        .then (lastResult) ->
        .catch (lastError) ->
      
      NOTE: allDonePromise could complete, then more tasks could be queued with the serializer.
        Promises can't be resolved/rejected twice, so when the more-tasks complete, the first
        allDonePromise won't do anything.
        However, you can call allDonePromise again once the tasks are queued and get notified
        when THEY are done.
       */

      Serializer.prototype.allDonePromise = function() {
        var currentLastPromise;
        currentLastPromise = this._lastPromise;
        return currentLastPromise.then((function(_this) {
          return function(lastResult) {
            if (currentLastPromise === _this._lastPromise) {
              return lastResult;
            } else {
              return _this.allDonePromise();
            }
          };
        })(this))["catch"]((function(_this) {
          return function(lastError) {
            if (currentLastPromise === _this._lastPromise) {
              throw lastError;
            } else {
              return _this.allDonePromise();
            }
          };
        })(this));
      };

      return Serializer;

    })();


    /*
    OUT: serializedF = -> Promise.resolve f arguments...
      IN: any arguments
      EFFECT: f is invoked with arguments passed in AFTER the last invocation of serializedF completes.
      OUT: promise.then -> results from f
    
    NOTE: 'f' can return a promise, but it doesn't have to. If it does return a promise, the next
      'f' invocation will not start until and if the previous one's promise completes.
    
    USAGE:
      serializedF = Promise.serialize f = -> # do something, possibly returning a promise
      serializedF()
      serializedF()
      serializedF()
      .then (resultOfLastF)->
         * executed after f was executed and any returned promises resolved, 3 times, sequentially
    
    OR
      serializedF = Promise.serialize f = (element) -> # do something with element, possibly returning a promise
      Promise.all (serializedF item for item in list)
      .then (results) ->
         * f was excuted list.length times sequentially
         * results contains the result values from each execution, in order
     */

    ArtPromise.serialize = function(f) {
      return new ArtPromise.Serializer().serialize(f);
    };

    ArtPromise.invert = function(promise) {
      return promise.then(function(e) {
        throw new ErrorWithInfo("" + e, e);
      }, function(v) {
        return v;
      });
    };

    ArtPromise["finally"] = function(promise, action) {
      return BlueBirdPromise.resolve(promise)["finally"](action);
    };

    ArtPromise.then = BlueBirdPromise["try"];

    return ArtPromise;

  })();
  for (k in ArtPromise) {
    v = ArtPromise[k];
    BlueBirdPromise[k] || (BlueBirdPromise[k] = v);
  }
  return BlueBirdPromise;
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var StandardLib, WebWorker, log;

StandardLib = __webpack_require__(4);

log = StandardLib.log;


/*
SRC:
  http://jsfiddle.net/uqcFM/49/
  http://stackoverflow.com/a/10372280/2121000
 */

module.exports = WebWorker = (function() {
  var startWorkerFromJsString;

  function WebWorker() {}

  WebWorker.echoWebWorker = "self.onmessage=function(e){postMessage('Worker: '+e.data);}";

  WebWorker.isBrowser = !!(self.window && self.navigator && self.document);

  WebWorker.isWebWorker = !WebWorker.isBrowser && self.importScripts;

  WebWorker.startWorkerFromJsString = startWorkerFromJsString = function(workerSource) {
    return new Worker(URL.createObjectURL(new Blob([workerSource], {
      type: 'application/javascript'
    })));
  };

  WebWorker.startWorkerFromFunction = function(workerFunction) {
    return startWorkerFromJsString("(" + workerFunction + ")();");
  };

  return WebWorker;

})();


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var ArrayCompactFlatten;

module.exports = ArrayCompactFlatten = (function() {
  var arraySlice, compact, compactFlattenIfNeeded, deepArrayEach, doFlattenInternal, flatten, isArguments, isArrayOrArguments, keepAll, keepUnlessNullOrUndefined, needsFlatteningOrCompacting;

  function ArrayCompactFlatten() {}

  ArrayCompactFlatten.isArguments = isArguments = function(o) {
    return o.constructor === Object && (typeof o.callee === "function") && (typeof o.length === "number");
  };

  ArrayCompactFlatten.isArrayOrArguments = isArrayOrArguments = function(o) {
    return o && (o.constructor === Array || isArguments(o));
  };

  ArrayCompactFlatten.needsFlatteningOrCompacting = needsFlatteningOrCompacting = function(array, keepTester) {
    var a, i, len;
    for (i = 0, len = array.length; i < len; i++) {
      a = array[i];
      if (isArrayOrArguments(a) || !keepTester(a)) {
        return true;
      }
    }
    return false;
  };

  ArrayCompactFlatten.keepUnlessNullOrUndefined = keepUnlessNullOrUndefined = function(a) {
    return a !== null && a !== void 0;
  };


  /*
  IN:
    array: array or arguments-object
    keepTester: (value) -> true/false
      OUT: return true if that element should be in the output
  
  OUT: array where all elements test true to keepTester
  NOTE: NOT recursive - just does a shallow pass
   */

  ArrayCompactFlatten.compact = compact = function(array, keepTester) {
    var a, i, len;
    if (keepTester == null) {
      keepTester = keepUnlessNullOrUndefined;
    }
    for (i = 0, len = array.length; i < len; i++) {
      a = array[i];
      if (!keepTester(a)) {
        return (function() {
          var j, len1, results;
          results = [];
          for (j = 0, len1 = array.length; j < len1; j++) {
            a = array[j];
            if (keepTester(a)) {
              results.push(a);
            }
          }
          return results;
        })();
      }
    }
    return array;
  };


  /*
  IN: accepts any number of arguments
  NOTE: RECURSIVE: recurses into all arry or arguments-objects and adds their contents
    to the top level (flatten)
   */

  ArrayCompactFlatten.flatten = flatten = function(firstArg) {
    return compactFlattenIfNeeded(arguments.length === 1 ? isArrayOrArguments(firstArg) ? firstArg : [firstArg] : arguments);
  };


  /*
  IN: array: any object that has a length
  
  EFFECT:
    itterates over array and recurse over any element which isArrayOrArguments
    invokes f on every element that is not isArrayOrArguments
  OUT: array (same as passed in)
   */

  ArrayCompactFlatten.deepArrayEach = deepArrayEach = function(array, f) {
    var el, i, len;
    for (i = 0, len = array.length; i < len; i++) {
      el = array[i];
      if (isArrayOrArguments(el)) {
        deepArrayEach(el, f);
      } else {
        f(el);
      }
    }
    return array;
  };


  /*
  IN:
    array: array or arguments-object
    keepTester: (value) -> true/false
      OUT: return true if that element should be in the output
  
  OUT: array where all elements test true to keepTester
  NOTE: RECURSIVE: recurses into all arry or arguments-objects and adds their contents
    to the top level (flatten)
   */

  ArrayCompactFlatten.compactFlatten = function(array, keepTester) {
    if (keepTester == null) {
      keepTester = keepUnlessNullOrUndefined;
    }
    return compactFlattenIfNeeded(array, keepTester);
  };

  arraySlice = Array.prototype.slice;

  doFlattenInternal = function(array, keepTester) {
    var output;
    output = [];
    deepArrayEach(array, function(el) {
      if (keepTester(el)) {
        return output.push(el);
      }
    });
    return output;
  };

  keepAll = function() {
    return true;
  };

  compactFlattenIfNeeded = function(array, keepTester) {
    if (keepTester == null) {
      keepTester = keepAll;
    }
    if (needsFlatteningOrCompacting(array, keepTester)) {
      return doFlattenInternal(array, keepTester);
    } else if (array.constructor !== Array) {
      return arraySlice.call(array);
    } else {
      return array;
    }
  };

  return ArrayCompactFlatten;

})();


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), Error, op, p, arrayWithout;
  ({ Error, op, p, arrayWithout } = Caf.i(
    ["Error", "op", "p", "arrayWithout"],
    [ArtFoundation, global]
  ));
  return OperatorHelper = Caf.defClass(class OperatorHelper {}, function(
    OperatorHelper,
    classSuper,
    instanceSuper
  ) {
    let CoffeeScriptGlobal, infix, validateOperator;
    this.CoffeeScriptGlobal = CoffeeScriptGlobal = "Caf";
    this.operatorMap = {
      "**": function(a, b) {
        return `${CoffeeScriptGlobal}.pow(${a}, ${b})`;
      },
      "//": function(a, b) {
        return `${CoffeeScriptGlobal}.div(${a}, ${b})`;
      },
      "%%": function(a, b) {
        return `${CoffeeScriptGlobal}.mod(${a}, ${b})`;
      },
      in: function(a, b) {
        return `${CoffeeScriptGlobal}.in(${a}, ${b})`;
      },
      "?": function(a, b) {
        return a.match(/^@?[_a-z0-9]+$/i)
          ? `${a} != null ? ${a} : ${b}`
          : `${CoffeeScriptGlobal}.existsOr(${a}, (() => {return ${b}})())`;
      }
    };
    this.infix = infix = function(a, b, op) {
      return `${a} ${op} ${b}`;
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
    this.leftAssociativityByPrecidence = Caf.e(this.precidence, [], (
      v,
      i,
      into
    ) => {
      let leftAssociativityByPrecidence, operators;
      [leftAssociativityByPrecidence, ...operators] = v;
      Caf.e(operators, undefined, (op, k, into) => {
        this.opsToPrecidence[op] = i;
      });
      into.push(leftAssociativityByPrecidence === "left");
    });
    this.validateOperator = validateOperator = operator => {
      if (!this.opsToPrecidence[operator]) {
        throw new Error(
          `OperatorHelper: operator '${operator}' is not defined`
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
        throw new Error(`OperatorHelper: operator '${op}' not defined`);
      }
      return p;
    };
    this.getPrecidenceLevelIsLeftAssociative = p => {
      return this.leftAssociativityByPrecidence[p];
    };
    this.operatorIsInfixJs = operator => {
      return !this.operatorMap[op];
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
        operandA,
        operandB,
        combiner;
      if (!(operands.length === operators.length + 1)) {
        throw new Error(
          `expecting: operands.length:${operands.length} == operators.length:${operators.length} + 1`
        );
      }
      while (operators.length > 0) {
        lowestPrecidence = this.getOpPrecidence(operators[0]);
        firstOccurance = lastOccurance = 0;
        Caf.e(operators, undefined, (op, i, into) => {
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
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
        return `[${Caf
          .e(this.children, [], (c, k, into) => {
            into.push(c.toJsExpression());
          })
          .join(", ")}]`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    OperatorHelper = __webpack_require__(33),
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
    [ArtFoundation, OperatorHelper, global]
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
            `left and right required: ${formattedInspect({
              left: this.left,
              right: this.right
            })}`
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
          ? ({
              identifier
            } = this.uniqueIdentifierHandle, `((${identifier} = ${this.left.toJsExpression()}) != null ? ${identifier} : ${this.right.toJsExpression()})`)
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
              : `(${this.toJsExpression()})`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var BinaryString, File, Promise, StandardLib;

StandardLib = __webpack_require__(4);

Promise = StandardLib.Promise;

BinaryString = __webpack_require__(12);

module.exports = File = (function() {
  var readAsArrayBuffer;

  function File() {}

  File._readWithPromise = function(readFunction) {
    return function(file) {
      return new Promise(function(resolve, reject) {
        var fr;
        fr = new FileReader;
        fr[readFunction](file);
        fr.onerror = reject;
        return fr.onload = (function(_this) {
          return function(event) {
            return resolve(event.target.result);
          };
        })(this);
      });
    };
  };

  File.readAsArrayBuffer = readAsArrayBuffer = File._readWithPromise("readAsArrayBuffer");

  File.readAsDataURL = File._readWithPromise("readAsDataURL");

  File.readAsBinaryString = function(file) {
    return readAsArrayBuffer(file).then(function(arrayBuffer) {
      return new BinaryString(arrayBuffer);
    });
  };

  return File;

})();


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Binary, Foundation,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(11);

module.exports = Foundation.Binary || Foundation.addNamespace('Binary', Binary = (function(superClass) {
  extend(Binary, superClass);

  function Binary() {
    return Binary.__super__.constructor.apply(this, arguments);
  }

  return Binary;

})(Neptune.Base));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, Log, MinimalBaseObject, StandardLib, Unique, WebpackHotLoader, callStack, capitalize, clone, concatInto, decapitalize, extendClone, functionName, getModuleBeingDefined, inspectedObjectLiteral, isFunction, isPlainArray, isPlainObject, isString, log, mergeInto, nextUniqueObjectId, object, objectName,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

StandardLib = __webpack_require__(4);

WebpackHotLoader = __webpack_require__(79);

capitalize = StandardLib.capitalize, decapitalize = StandardLib.decapitalize, log = StandardLib.log, extendClone = StandardLib.extendClone, clone = StandardLib.clone, isFunction = StandardLib.isFunction, objectName = StandardLib.objectName, isPlainObject = StandardLib.isPlainObject, functionName = StandardLib.functionName, isString = StandardLib.isString, isPlainArray = StandardLib.isPlainArray, Unique = StandardLib.Unique, callStack = StandardLib.callStack, Log = StandardLib.Log, inspectedObjectLiteral = StandardLib.inspectedObjectLiteral, MinimalBaseObject = StandardLib.MinimalBaseObject, getModuleBeingDefined = StandardLib.getModuleBeingDefined, concatInto = StandardLib.concatInto, mergeInto = StandardLib.mergeInto, isString = StandardLib.isString, object = StandardLib.object;

nextUniqueObjectId = Unique.nextUniqueObjectId;

module.exports = BaseObject = (function(superClass) {
  var arrayPropertyExtender, createWithPostCreate, excludedKeys, getOwnProperty, imprintObject, mixInto, objectPropertyExtender, warnedAboutIncludeOnce;

  extend(BaseObject, superClass);

  BaseObject.objectsCreated = 0;

  BaseObject.objectsCreatedByType = {};

  BaseObject.resetStats = function() {
    BaseObject.objectsCreated = 0;
    return BaseObject.objectsCreatedByType = {};
  };

  BaseObject._name = null;


  /*
  NOTE: only hasOwnProperties are considered! Inherited properties are not touched.
  IN:
    toObject:   object will be altered to be an "imprint" of fromObject
    fromObject: object pattern used to imprint toObject
    preserveState:
      false:
        toObject has every property updated to exactly match fromObject
  
        This includes:
          1. delete properties in toObject that are not in fromObject
          2. add every property in fromObject but not in toObject
          3. overwriting every property in toObject also in fromObject
  
      true:
        Attempts to preserve the state of toObject while updating its functionality.
        This means properties which are functions in either object are updated.
  
        WARNING: This is a grey area for JavaScript. It is not entirely clear what is
          state and what is 'functionality'. I, SBD, have made the following heuristic decisions:
  
        Imprint actions taken when preserving State:
  
        1. DO NOTHING to properties in toObject that are not in fromObject
        2. add every property in fromObject but not in toObject
        3. properties in toObject that are also in fromObject are updated
          if one of the following are true:
          - isFunction fromObject[propName]
          - isFunction toObject[propName]
          - !toObject.hasOwnProperty propName
          - propName does NOT start with "_"
   */

  BaseObject.imprintObject = imprintObject = function(toObject, fromObject, preserveState) {
    var fromValue, k, v;
    if (preserveState == null) {
      preserveState = false;
    }
    if (!preserveState) {
      for (k in toObject) {
        v = toObject[k];
        if (!fromObject.hasOwnProperty(k)) {
          delete toObject[k];
        }
      }
    }
    for (k in fromObject) {
      fromValue = fromObject[k];
      if (fromObject.hasOwnProperty(k)) {
        if (!preserveState || isFunction(fromValue) || isFunction(toObject[k]) || !k.match(/^_/) || !toObject.hasOwnProperty(k)) {
          toObject[k] = fromValue;
        }
      }
    }
    return fromObject;
  };


  /*
  imprints both the class and its prototype.
  
  preserved in spite of imprintObject's rules:
    @namespace
    @::constructor
   */

  BaseObject.imprintFromClass = function(updatedKlass) {
    var _name, namespace, namespacePath, oldConstructor, ref;
    if (updatedKlass !== this) {
      ref = this, namespace = ref.namespace, namespacePath = ref.namespacePath, _name = ref._name;
      oldConstructor = this.prototype.constructor;
      imprintObject(this, updatedKlass, true);
      imprintObject(this.prototype, updatedKlass.prototype, false);
      this.prototype.constructor = oldConstructor;
      this.namespace = namespace;
      this.namespacePath = namespacePath;
      this._name = _name;
    }
    return this;
  };


  /*
  IN:
    _module should be the CommonJS 'module'
    klass: class object which extends BaseObject
  
  liveClass:
    On the first load, liveClass gets set.
    Each subsequent hot-load UPDATES liveClass,
    but liveClass always points to the initially created class object.
  
  OUT: the result of the call to liveClass.postCreate()
  
  postCreate is passed:
    hotReloaded:            # true if this is anything but the initial load
    classModuleState:
      liveClass:            # the original liveClass
      hotUpdatedFromClass:  # the most recently hot-loaded class
      hotReloadVersion:     # number starting at 0 and incremented with each hot reload
    _module:                # the CommonJs module
  
  EFFECTS:
    The following two methods are invoked on liveClass:
  
      if hot-reloading
        liveClass.imprintFromClass klass
  
       * always:
      liveClass.postCreate hotReloaded, classModuleState, _module
   */

  BaseObject.createWithPostCreate = createWithPostCreate = function(a, b) {
    var _module, klass;
    klass = b ? (_module = a, b) : a;
    _module || (_module = getModuleBeingDefined());
    if (!(klass != null ? klass.postCreate : void 0)) {
      return klass;
    }
    if (!(_module != null ? _module.hot : void 0)) {
      return klass.postCreate({
        hotReloadEnabled: false,
        hotReloaded: false,
        classModuleState: {},
        module: _module
      }) || klass;
    }
    return WebpackHotLoader.runHot(_module, function(moduleState) {
      var classModuleState, hotReloaded, liveClass;
      if (classModuleState = moduleState[klass.getName()]) {
        liveClass = classModuleState.liveClass;
        hotReloaded = true;
        classModuleState.hotReloadVersion++;
        classModuleState.hotUpdatedFromClass = klass;
        liveClass.namespace._setChildNamespaceProps(liveClass.getName(), klass);
        klass._name = liveClass._name;
        liveClass.imprintFromClass(klass);
        Log.log({
          "Foundation.BaseObject: class hot-reload": {
            "class": liveClass.getNamespacePath(),
            version: classModuleState.hotReloadVersion
          }
        });
      } else {
        hotReloaded = false;
        klass._hotClassModuleState = moduleState[klass.getName()] = classModuleState = {
          liveClass: liveClass = klass,
          hotUpdatedFromClass: null,
          hotReloadVersion: 0
        };
      }
      return liveClass.postCreate({
        hotReloadEnabled: true,
        hotReloaded: hotReloaded,
        classModuleState: classModuleState,
        module: _module
      });
    });
  };

  BaseObject.createHotWithPostCreate = function(a, b) {
    log.error("createHotWithPostCreate is DEPRICATED");
    return createWithPostCreate(a, b);
  };


  /*
  called every load
  IN: options:
    NOTE: hot-loading inputs are only set if this class created as follows:
      createHotWithPostCreate module, class Foo extends BaseObject
  
    hotReload: true/false
      true if this class was hot-reloaded
  
    hotReloadEnabled: true/false
  
    classModuleState:
      liveClass:            the first-loaded version of the class.
                            This is the official version of the class at all times.
                            The hot-reloaded version of the class is "imprinted" onto the liveClass
                            but otherwise is not used (but can be accessed via classModuleState.hotUpdatedFromClass)
      hotUpdatedFromClass:  The most recently loaded version of the class.
      hotReloadVersion:     number, starting at 1, and counting up each load
  
      classModuleState is a plain-object specific to the class and its CommonJS module. If there is
      more than one hot-loaded class in the same module, each will have its own classModuleState.
  
      SBD NOTE: Though we could allow clients to add fields to classModuleState, I think it works
      just as well, and is cleaner, if any state is stored in the actual class objects and
      persisted via postCreate.
  
    module: the CommonJs module object.
  
  {hotReloadEnabled, hotReloaded, classModuleState, module} = options
   */

  BaseObject.postCreate = function(options) {
    if (this.getIsAbstractClass()) {
      return this.postCreateAbstractClass(options);
    } else {
      return this.postCreateConcreteClass(options);
    }
  };

  BaseObject.postCreateAbstractClass = function(options) {
    return this;
  };

  BaseObject.postCreateConcreteClass = function(options) {
    return this;
  };

  excludedKeys = ["__super__", "namespace", "namespacePath"].concat(Object.keys(Neptune.Base));

  BaseObject.mixInto = mixInto = function() {
    var i, intoClass, k, keys, klass, len, v;
    intoClass = arguments[0], klass = arguments[1], keys = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    log.error("DEPRICATED: mixInto");
    if (keys.length === 0) {
      keys = Object.keys(klass);
    }
    for (i = 0, len = keys.length; i < len; i++) {
      k = keys[i];
      if (!(indexOf.call(excludedKeys, k) < 0)) {
        continue;
      }
      v = klass[k];
      if (intoClass[k]) {
        log.error("Foundation.mixInto - mix " + (getClassName(klass)) + " into " + (getClassName(intoClass)) + ": " + k + " already exists.");
      }
      intoClass[k] = v;
    }
    return intoClass;
  };

  BaseObject.createAllClass = function() {
    var All, arg, args, i, len, namespace;
    namespace = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    log.error("DEPRICATED: createAllClass. Use Neptune-Namespace feature: create file in directory that is the same name as the directory.");
    for (i = 0, len = args.length; i < len; i++) {
      arg = args[i];
      if (arg.prototype instanceof BaseObject) {
        log.error("createAllClass arguments cannot be subclasses of BaseObject: " + (getClassName(namespace)) + ":" + (getClassName(arg)));
      }
      mixInto(namespace, arg);
    }
    return All = (function(superClass1) {
      extend(All, superClass1);

      function All() {
        return All.__super__.constructor.apply(this, arguments);
      }

      return All;

    })(namespace);
  };

  function BaseObject() {
    this.__uniqueId = null;
  }

  BaseObject.implementsInterface = function(object, methods) {
    var i, len, method;
    for (i = 0, len = methods.length; i < len; i++) {
      method = methods[i];
      if (typeof object[method] !== "function") {
        return false;
      }
    }
    return true;
  };


  /*
  mix-in class methods
  Define getters/setters example:
    class MyMixin
      included: ->
        @getter foo: -> @_foo
        @setter foo: (v) -> @_foo = v
  
  NOTE! This will NOT include any properties you defined with getter or setter!
  NOTE! This only copies over values if there aren't already values in the included-into class
    This somewhat mirrors Ruby's include where the included-into-class's methods take precidence.
    However, if you include two modules in a row, the first module gets priority here.
    In ruby the second module gets priority (I believe).
  
  DEPRICATED!!!
  Time to do it "right" - and it's just a simple pattern:
    Justin Fagnani figured this out. Thanks!
    Read More:
      http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
  
  To define a mixin:
  
    MyMixin = (superClass) ->
      class MyMixin extends superClass
        ... write your mixin as-if it were part of the normal inheritance hierachy
  
  To use a mixin:
  
    class MyClass extends MyMixin MySuperClass
  
  To use two mixins:
  
    class MyClass extends MyMixin1 MyMixin2 MySuperClass
   */

  warnedAboutIncludeOnce = false;

  BaseObject.include = function(obj) {
    var key, ref, value;
    log.error("DEPRICATED: BaseObject.include. Use pattern.");
    if (!warnedAboutIncludeOnce) {
      warnedAboutIncludeOnce = true;
      console.warn("Mixin pattern:\n\n  To define a mixin:\n\n    MyMixin = (superClass) ->\n      class MyMixin extends superClass\n        ... write your mixin as-if it were part of the normal inheritance hierachy\n\n  To use a mixin:\n\n    class MyClass extends MyMixin MySuperClass\n\n  To use two mixins:\n\n    class MyClass extends MyMixin1 MyMixin2 MySuperClass");
    }
    for (key in obj) {
      value = obj[key];
      if (key !== 'included') {
        if (!this[key]) {
          this[key] = value;
        }
      }
    }
    ref = obj.prototype;
    for (key in ref) {
      value = ref[key];
      if (key) {
        if (!this.prototype[key]) {
          this.prototype[key] = value;
        }
      }
    }
    if (typeof obj.included === "function") {
      obj.included(this);
    }
    return this;
  };


  /*
  Allows you to define properties on the prototype that inherit their data from
  their super-classes prototype.
  
  By default, uses extendClone to init. extendClone has these semantics:
    Object properties actually create a parallel inheritance structure such that
      later-changes on the super-object are reflected in the inheriting object.
      They ARE updated with later parent-changes
    Array properties inherit the values in the super-class array at declaration time,
      They ARE NOT updated with any later parent-changes!
      If we ever need that functionality, we'll need to make a special Object-type
      that extendClone recognizes that handles the logic of "ExtendableArray".
   */

  BaseObject.getPrototypePropertyExtendedByInheritance = function(propertyName, defaultStructure, _clone) {
    if (_clone == null) {
      _clone = extendClone;
    }
    log.error("DEPRICATED: getPrototypePropertyExtendedByInheritance. use extendableProperty");
    return getOwnProperty(this.prototype, propertyName, function(object) {
      return _clone(object[propertyName] || defaultStructure);
    });
  };


  /*
  IN
    object: any object
    property: string, property name
    init:
      (object) -> returning initial value for object
      OR
        initial value is computed by:
        clone object[property] || init
  
  EFFECT:
    if object.hasOwnProperty property, return its current value
    otherwise, initialize and return it with init()
   */

  BaseObject.getOwnProperty = getOwnProperty = function(object, property, init) {
    if (object.hasOwnProperty(property)) {
      return object[property];
    } else {
      return object[property] = isFunction(init) ? init(object) : clone(object[property] || init);
    }
  };


  /*
  objectPropertyExtender
  
  IN: @ is set to the property-value to extend
  
  API 1:
    IN: map
    EFFECT: mergeInto propValue, map
  
  API 2:
    IN: key, value
    EFFECT: propValue[key] = valuee
  
  OUT: ignore
   */

  BaseObject.objectPropertyExtender = objectPropertyExtender = function(mapOrKey, value) {
    if (isString(mapOrKey)) {
      this[mapOrKey] = value;
    } else if (isPlainObject(mapOrKey)) {
      mergeInto(this, mapOrKey);
    } else {
      throw new Error("first value argument must be a plain object or string");
    }
    return this;
  };


  /*
  arrayPropertyExtender
  
  IN: @ is set to the property-value to extend
  
  API 1:
    IN: array
    EFFECT: concatInto propValue, array
  
  API 2:
    IN: value
    EFFECT: propValue.push value
  
  NOTE: if you want to concat an array-as-a-value to the end of propValue, do this:
    arrayPropertyExtender.call propValue, [arrayAsValue]
  
  OUT: ignore
   */

  BaseObject.arrayPropertyExtender = arrayPropertyExtender = function(arrayOrValue) {
    if (isPlainArray(arrayOrValue)) {
      concatInto(this, arrayOrValue);
    } else {
      this.push(arrayOrValue);
    }
    return this;
  };


  /*
  Extendable Properties
  
  EXAMPLE:
    class Foo extends BaseObject
      @extendableProperty foo: {}
  
  Extendable properties work like inheritance:
  
    When any subclass or instance extends an extendable property, they
    inherit a clone of the property from up the inheritance tree, and then
    add their own extensions without effecting the parent copy.
  
    With Object property types, this can just be a parallel prototype chain.
    (It isn't currently: if you modify a parent after extending it to a child,
    the child won't get updates.)
  
    BUT, you can also have array or other types of extend-properties, which
    JavaScript doesn't have any built-in mechanisms for inheriting.
  
  BASIC API:
  @extendableProperty: (map, propertyExtender = defaultPropertyExtender) -> ...
  
  IN: map
  IN: propertyExtender = (args...) ->
    IN: @ is propValue
    IN: 1 or more args
    OUT: new property value
    EFFECT:
      Can optionaly modify @ directly. If you do, just return @.
      @ is always the a unique clone for the current Class or Instance.
  
  EFFECT: for each {foo: defaultValue} in map, extendableProperty:
    defines standard getters:
      @class.getFoo()
      @prototype.getFoo()
      @prototype.foo # getter
      WARNING:
        !!! Don't modify the object returned by a getter !!!
  
        Getters only return the current, most-extended property value. It may not be extended to the
        current subclass or instance! Instead, call @extendFoo() if you wish to manually modify
        the extended property.
  
    defines extender functions:
      @class.extendFoo value      # extends the property on the PROTOTYPE object
      @prototype.extendFoo value  # extends the property on the INSTANCE object (which inherits from the prototype)
  
      EFFECT: extends the property if not already extended
      OUT: extendedPropValue
  
      API 1: IN: 0 args
        NO ADDITIONAL EFFECT - just returns the extended property
      API 2: IN: 1 or more args
        In addition to extending and returning the extended property:
        calls: propExtender extendedPropValue, args...
  
    NOTE: gthe prototype getters call the class getter for extension purposes.
      The result is each instance won't get its own version of the property.
      E.G. Interitance is done at the Class level, not the Instance level.
   */

  BaseObject.extendableProperty = function(map, propertyExtender) {
    var defaultValue, prop, results;
    results = [];
    for (prop in map) {
      defaultValue = map[prop];
      if (!(isPlainArray(defaultValue) || isPlainObject(defaultValue))) {
        throw new Error("only plain objects or plain arrays supported for defaultValue");
      }
      results.push((function(_this) {
        return function(prop, defaultValue) {
          var extenderName, getterName, internalName, propExtender, ucProp;
          propExtender = propertyExtender || (function() {
            if (isPlainObject(defaultValue)) {
              return objectPropertyExtender;
            } else if (isPlainArray(defaultValue)) {
              return arrayPropertyExtender;
            } else {
              throw new Error("Unsupported property type for extendableProperty: " + (inspect(defaultValue)) + ". Please specify a custom propertyExtender function.");
            }
          })();
          internalName = _this.propInternalName(prop);
          ucProp = capitalize(prop);
          getterName = "get" + ucProp;
          extenderName = "extend" + ucProp;
          _this[getterName] = function() {
            return this.prototype[internalName] || defaultValue;
          };
          _this.addGetter(prop, function() {
            return this[internalName] || defaultValue;
          });
          _this[extenderName] = function(value) {
            var propValue;
            propValue = getOwnProperty(this.prototype, internalName, defaultValue);
            if (arguments.length > 0) {
              this.prototype[internalName] = propExtender.apply(propValue, arguments);
            }
            return propValue;
          };
          return _this.prototype[extenderName] = function(value) {
            var propValue;
            propValue = getOwnProperty(this, internalName, defaultValue);
            if (arguments.length > 0) {
              this[internalName] = propExtender.apply(propValue, arguments);
            }
            return propValue;
          };
        };
      })(this)(prop, defaultValue));
    }
    return results;
  };

  BaseObject.getNamespacePath = function() {
    var ref, ref1;
    if (!this.namespacePath) {
      return this.namespacePath = (this.getName()) + " extends " + (this.__super__["class"].getNamespacePath());
    } else if (((ref = this.__super__) != null ? (ref1 = ref["class"]) != null ? ref1.namespacePath : void 0 : void 0) === this.namespacePath) {
      return this.namespacePath = (this.getName()) + " extends " + (this.__super__["class"].getNamespacePath());
    } else {
      return this.namespacePath;
    }
  };

  BaseObject.getClassName = function(klass) {
    if (klass == null) {
      klass = this;
    }
    return (typeof klass.getName === "function" ? klass.getName() : void 0) || klass.name;
  };


  /*
  inspect: ->
  IN: ()
  OUT: string
  
  Can override with same or alternate, recursion-block-supported signature:
    IN: (inspector) ->
    OUT: if inspector then null else string
  
    To handle the case where the inspector is not set, we
    recommneded declaring your 'inspect' as follows:
      inspect: (inspector) ->
        return Foundation.inspect @ unless inspector
         * ...
         * custom code which writes all output to inspector.put
         * and uses inspector.inspect for inspecting sub-objects
         * ...
        null
  
    EFFECT:
      call inspector.put one or multiple times with strings to add to the inspected output
      call inspector.inspect foo to sub-inspect other objects WITH RECURSION BLOCK
  
   * Example 1:
  inspect: (inspector) ->
    return Foundation.inspect @ unless inspector
    inspector.put @getNamespacePath()
  
   * Example 2:
  inspect: ->
    @getNamespacePath()
   */

  BaseObject.inspect = function() {
    return this.getNamespacePath();
  };

  BaseObject.prototype.inspect = function() {
    return "<" + this["class"].namespacePath + ">";
  };


  /*
  getInspectedObjects: -> plainObjects
  
  usually implemented this way:
  @getter inspectedObjects: -> plainObjects or objects which implement "inspect"
  
  TODO: I think I want to refactor inspectedObjects to ONLY return near-JSON-compatible objects:
    1. strings
    2. maps
    3. arrays
  
    Everything else should be rendered to a string. In general, strings should Eval to the object
    they represent:
  
      toInspectedObject(null):                    'null' # null becomes a string
      toInspectedObject(true):                    'true' # true becomes a string
      toInspectedObject(false):                   'false' # false becomes a string
      toInspectedObject(undefined):               'undefined' # undefined becomes a string
      toInspectedObject('hi'):                    '"hi"' # ESCAPED
      toInspectedObject((a) -> a):                'function(a){return a;}'
      toInspectedObject(rgbColor())               "rgbColor('#000000')"
  
    NOTE: inspectedObjects differs from plainObjects. The latter should be 100% JSON,
      and should return actual values where JSON allows, otherwise, return JSON data structures
      that encode the object's information in a human-readable format, ideally one that can be
      used as an input to the constructor of the object's class to recreate the original object.
  
      plainObjects:
        null:         null
        true:         true
        false:        false
        'str':        'str' # NOT escaped
        undefined:    null
        ((a) -> a):   'function(a){return a;}'
        rgbColor():   r: 0, g: 0, b: 0, a: 0
  
  You can provide this function for fine-grained control of what Inspector2 outputs and hence
  what DomConsole displays.
  
  If you would like for a string to appear without quotes, use:
    {inspect: -> 'your string without quotes here'}
   */

  BaseObject.getter({
    inspectObjects: function() {
      console.warn("inspectObjects/getInspectObjects is DEPRICATED. Use: inspectedObjects/getInspectedObjects");
      return this.getInspectedObjects();
    },
    inspectedObjects: function() {
      var ref;
      return inspectedObjectLiteral("<" + ((ref = this["class"]) != null ? ref.getNamespacePath() : void 0) + ">");
    }
  });

  BaseObject.classGetter({
    inspectedObjects: function() {
      return inspectedObjectLiteral(this.getNamespacePath());
    }
  });


  /*
  Define this class as an abstract class. Implicitly it means
  any class it extends is also abstract, at least in this context.
  
  Definition: Abstract classes are not intended to every be instantiated.
    i.e.: never do: new MyAbstractClass
  
  TODO: in Debug mode, in the constructor:
    throw new Error "cannot instantiate abstract classes" if @class.getIsAbstractClass()
   */

  BaseObject.abstractClass = function() {
    if (this.getIsSingletonClass()) {
      throw new Error("abstract classes cannot also be singleton");
    }
    return this._firstAbstractAncestor = this;
  };

  BaseObject.classGetter({
    isAbstractClass: function() {
      return !(this.prototype instanceof this._firstAbstractAncestor);
    },
    abstractPrototype: function() {
      return this._firstAbstractAncestor.prototype;
    },
    firstAbstractAncestor: function() {
      return this._firstAbstractAncestor;
    },
    isSingletonClass: function() {
      return !!this.getSingleton;
    },
    concretePrototypeProperties: function() {
      var abstractClassPrototype;
      abstractClassPrototype = this.getAbstractClass().prototype;
      return object(this.prototype, {
        when: function(v, k) {
          return k !== "constructor" && abstractClassPrototype[k] !== v;
        }
      });
    }
  });

  BaseObject.getAbstractClass = function() {
    return this._firstAbstractAncestor;
  };

  BaseObject.abstractClass();

  BaseObject.propertyIsAbstract = function(propName) {
    return this.getAbstractClass().prototype[propName] === this.prototype[propName];
  };

  BaseObject.propertyIsConcrete = function(propName) {
    return this.getAbstractClass().prototype[propName] !== this.prototype[propName];
  };


  /*
  creates the classGetter "singleton" which returns a single instance of the current class.
  
  IN: args are passed to the singleton constructor
  OUT: null
  
  The singleton instance is created on demand the first time it is accessed.
   */

  BaseObject.singletonClass = function() {
    var args, map;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (this.getIsAbstractClass()) {
      throw new Error("singleton classes cannot be abstract");
    }
    map = {
      singleton: function() {
        var ref;
        if (((ref = this._singleton) != null ? ref["class"] : void 0) === this) {
          return this._singleton;
        } else {
          return this._singleton = (function(func, args, ctor) {
            ctor.prototype = func.prototype;
            var child = new ctor, result = func.apply(child, args);
            return Object(result) === result ? result : child;
          })(this, args, function(){});
        }
      }
    };
    map[decapitalize(functionName(this))] = function() {
      return this.getSingleton();
    };
    this.classGetter(map);
    return null;
  };

  BaseObject.getter({
    className: function() {
      return this["class"].getClassName();
    },
    "class": function() {
      return this.constructor;
    },
    keys: function() {
      return Object.keys(this);
    },
    namespacePath: function() {
      return this["class"].getNamespacePath();
    },
    classPathNameAndId: function() {
      return this.classPathName + ":" + this.objectId;
    },
    uniqueId: function() {
      return this.__uniqueId || (this.__uniqueId = nextUniqueObjectId());
    },
    objectId: function() {
      return this.__uniqueId || (this.__uniqueId = nextUniqueObjectId());
    }
  });

  BaseObject.prototype.implementsInterface = function(methods) {
    return Function.BaseObject.implementsInterface(this, methods);
  };

  BaseObject.prototype.tap = function(f) {
    f(this);
    return this;
  };

  BaseObject.rawLog = function() {
    return Log.rawLog.apply(Log, arguments);
  };

  BaseObject.log = function() {
    var a, stack, toLog;
    stack = callStack();
    toLog = (function() {
      var i, len, results;
      if (arguments.length > 1) {
        results = [];
        for (i = 0, len = arguments.length; i < len; i++) {
          a = arguments[i];
          results.push(a);
        }
        return results;
      } else {
        return arguments[0];
      }
    }).apply(this, arguments);
    Log.logCore(toLog, stack, {
      className: this.className
    });
    return arguments[arguments.length - 1];
  };

  BaseObject.prototype.log = BaseObject.log;

  BaseObject.prototype.rawLog = BaseObject.rawLog;

  return BaseObject;

})(MinimalBaseObject);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var CallStack, inspect, isString, parseUrl;

isString = __webpack_require__(6).isString;

parseUrl = __webpack_require__(28).parseUrl;

inspect = __webpack_require__(18).inspect;

module.exports = CallStack = (function() {
  var CallStackLine;

  function CallStack() {}

  CallStack.errorToString = function(error) {
    return (error != null ? error.error : void 0) || (error != null ? error.message : void 0) || (isString(error) && error) || Neptune.Art.Foundation.formattedInspect(error);
  };

  CallStack.CallStackLine = CallStackLine = (function() {
    CallStackLine.getter = function(map) {
      var getter, prop, results;
      results = [];
      for (prop in map) {
        getter = map[prop];
        results.push(Object.defineProperty(this.prototype, prop, {
          get: getter,
          configurable: true
        }));
      }
      return results;
    };

    CallStackLine.setter = function(map) {
      var prop, results, setter;
      results = [];
      for (prop in map) {
        setter = map[prop];
        results.push(Object.defineProperty(this.prototype, prop, {
          set: setter,
          configurable: true
        }));
      }
      return results;
    };

    function CallStackLine(line) {
      this.original = line;
      this["function"] = null;
      this.source = null;
      this["class"] = null;
      this.classPath = null;
      this.sourceFileName = null;
      this.sourcePath = null;
      this.sourceHostWithPort = null;
      this.sourceLine = 0;
      this.sourceColumn = 0;
      if (this.parseLineWithFunction(line)) {

      } else {
        this.parseLineWithoutFunction(line);
      }
      this.subParseFunction();
      this.subParseSource();
    }

    CallStackLine.prototype.toString = function() {
      return this.original;
    };

    CallStackLine.getter({
      fileWithLocation: function() {
        return this._fileWithLocation || (this._fileWithLocation = this.sourceFileName ? this.sourcePath + "/" + this.sourceFileName + ":" + this.sourceLine + ":" + this.sourceColumn : this.original);
      }
    });

    CallStackLine.prototype.parseLineWithFunction = function(line) {
      var r;
      if (r = line.match(/\s*at\s((new\s)?[a-zA-Z0-9_.<>]+)\s\(([^)]*):([0-9]+):([0-9]+)\)/)) {
        this["function"] = r[1];
        this.source = r[3];
        this.sourceLine = r[4] | 0;
        return this.sourceColumn = r[5] | 0;
      }
    };

    CallStackLine.prototype.parseLineWithoutFunction = function(line) {
      var r;
      if (r = line.match(/\s*at\s([^)]*):([0-9]+):([0-9]+)/)) {
        this.source = r[1];
        this.sourceLine = r[2] | 0;
        return this.sourceColumn = r[3] | 0;
      }
    };

    CallStackLine.prototype.subParseSource = function() {
      var url;
      if (this.source) {
        url = parseUrl(this.source);
        this.sourceFileName = url.fileName;
        this.sourcePath = url.path;
        return this.sourceHostWithPort = url.hostWithPort;
      }
    };

    CallStackLine.prototype.subParseFunction = function() {
      var f;
      if (this["function"]) {
        f = this["function"].split(".");
        this["function"] = f[f.length - 1];
        if (this["function"] === "<anonymous>") {
          this["function"] = void 0;
        }
        this["class"] = f[f.length - 2];
        return this.classPath = f.slice(0, f.length - 2);
      }
    };

    return CallStackLine;

  })();

  CallStack.rawCallStack = (new Error).stack ? function(ignoreTop) {
    if (ignoreTop == null) {
      ignoreTop = 0;
    }
    return (new Error).stack.split(/\n  */).slice(ignoreTop + 2);
  } : function(ignoreTop) {
    var e;
    if (ignoreTop == null) {
      ignoreTop = 0;
    }
    try {
      throw new Error;
    } catch (error1) {
      e = error1;
      return e.stack.split(/\n  */).slice(ignoreTop + 2);
    }
  };

  CallStack.callStack = function(ignoreTop) {
    var i, len, line, ref, results;
    if (ignoreTop == null) {
      ignoreTop = 0;
    }
    ref = CallStack.rawCallStack(ignoreTop + 1);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      line = ref[i];
      results.push(new CallStackLine(line));
    }
    return results;
  };

  return CallStack;

})();


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var Eq, floatTrue0, isNumber, isString, min, objectKeyCount, ref, remove,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

remove = __webpack_require__(24).remove;

objectKeyCount = __webpack_require__(48).objectKeyCount;

floatTrue0 = __webpack_require__(13).floatTrue0;

ref = __webpack_require__(6), isString = ref.isString, isNumber = ref.isNumber;

min = Math.min;

module.exports = Eq = (function() {
  var plainObjectsDeepDiff, plainObjectsDeepEq;

  function Eq() {}


  /*
  IN: see @compare
  OUT:
    true: if a and b are structurally equal
    false: otherwise
   */

  Eq.eq = function(a, b) {
    return 0 === Eq.compare(a, b, true);
  };

  Eq.neq = function(a, b) {
    return 0 !== Eq.compare(a, b, true);
  };

  Eq.fastEq = function(a, b) {
    return 0 === Eq.compare(a, b, false);
  };

  Eq.fastNeq = function(a, b) {
    return 0 !== Eq.compare(a, b, false);
  };

  Eq._compareArray = function(a, b, recursionBlockArray) {
    var aLength, av, bLength, bv, i, j, ref1, val;
    aLength = a.length;
    bLength = b.length;
    for (i = j = 0, ref1 = Math.min(aLength, bLength); j < ref1; i = j += 1) {
      av = a[i];
      bv = b[i];
      if (0 !== (val = Eq._compare(av, bv, recursionBlockArray))) {
        return val;
      }
    }
    return aLength - bLength;
  };

  Eq._compareObject = function(a, b, recursionBlockArray) {
    var aLength, av, bv, compared, k, val;
    aLength = 0;
    compared = 0;
    for (k in a) {
      av = a[k];
      aLength++;
      av = a[k];
      bv = b[k];
      if (bv !== void 0 || b.hasOwnProperty(k)) {
        compared++;
        if (0 !== (val = Eq._compare(av, bv, recursionBlockArray))) {
          return val;
        }
      }
    }
    if (aLength === compared && compared === objectKeyCount(b)) {
      return 0;
    } else {
      return 0/0;
    }
  };


  /*
  compare is recursive. However, it only recurses for 'plain' objects and arrays.
  
  If you want to compare custom objects deeply, you must add an .eq or .compare function to your custom objects.
    signature: a.eq b, recursionBlockArray => truthy if a equals b
    signature: a.compare b, recursionBlockArray => NaN / <0 / 0 / >0 for incomparable / a<b / a==b / a>b respectively
    IN:
      a: => this/@
      b: compared with a
      recursionBlockArray: an array of objects already on the stack being tested, pass this to
    It is an array of every object recursively currently being tested - don't test an object in this array
    recursionBlockArray can be altered, but should be returned in its original state. It may be null.
  
  IN:
    a and b: compare a and b
    recursionBlockEnabled:
      truthy: recursive structures will be handled correctly
      falsey: (default) faster, but recursive structures result in infinite recursion
  OUT:
    NaN:
      a and b are different types
      a and b are otherwise not comparable
  
    <0: a < b
    0:  a == b
    >0: a > b
   */

  Eq.compare = function(a, b, recursionBlockEnabled) {
    return Eq._compare(a, b, recursionBlockEnabled && []);
  };

  Eq._compare = function(a, b, recursionBlockArray) {
    var _constructor;
    if (a === b) {
      return 0;
    }
    if ((a != null) && (b != null) && a.constructor === (_constructor = b.constructor)) {
      if (isString(a)) {
        return a.localeCompare(b);
      }
      if (isNumber(a)) {
        return floatTrue0(a - b);
      }
      if (recursionBlockArray) {
        if (indexOf.call(recursionBlockArray, a) >= 0 || indexOf.call(recursionBlockArray, b) >= 0) {
          return 0;
        }
        recursionBlockArray.push(a);
        recursionBlockArray.push(b);
      }
      if (a.compare) {
        return a.compare(b, recursionBlockArray);
      }
      if (_constructor === Array) {
        return Eq._compareArray(a, b, recursionBlockArray);
      }
      if (_constructor === Object) {
        return Eq._compareObject(a, b, recursionBlockArray);
      }
      if (a.eq && a.eq(b, recursionBlockArray)) {
        return 0;
      }
      if (recursionBlockArray) {
        remove(recursionBlockArray, recursionBlockArray.length - 2, 2);
      }
    }
    return 0/0;
  };

  Eq.plainObjectsDeepEqArray = function(a, b) {
    var av, i, j, len1;
    if (a.length !== b.length) {
      return false;
    }
    for (i = j = 0, len1 = a.length; j < len1; i = ++j) {
      av = a[i];
      if (!Eq.plainObjectsDeepEq(av, b[i])) {
        return false;
      }
    }
    return true;
  };

  Eq.plainObjectsDeepEqObject = function(a, b) {
    var aLength, av, bv, k;
    aLength = 0;
    for (k in a) {
      av = a[k];
      aLength++;
      bv = b[k];
      if (!((bv !== void 0 || b.hasOwnProperty(k)) && Eq.plainObjectsDeepEq(av, bv))) {
        return false;
      }
    }
    return aLength === objectKeyCount(b);
  };

  Eq.plainObjectsDeepEq = plainObjectsDeepEq = function(a, b) {
    var _constructor;
    if (a === b) {
      return true;
    } else if (a && b && a.constructor === (_constructor = b.constructor)) {
      if (a.eq) {
        return a.eq(b);
      } else if (_constructor === Array) {
        return Eq.plainObjectsDeepEqArray(a, b);
      } else if (_constructor === Object) {
        return Eq.plainObjectsDeepEqObject(a, b);
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  Eq.propsEq = plainObjectsDeepEq;

  Eq.plainObjectsDeepDiffArray = function(before, after) {
    var diff, i, j, l, len, m, ref1, ref2, ref3, ref4, ref5, res;
    res = null;
    len = min(before.length, after.length);
    for (i = j = 0, ref1 = len; 0 <= ref1 ? j < ref1 : j > ref1; i = 0 <= ref1 ? ++j : --j) {
      if (!(diff = plainObjectsDeepDiff(before[i], after[i]))) {
        continue;
      }
      res || (res = {});
      res[i] = diff;
    }
    if (len < before.length) {
      for (i = l = ref2 = len, ref3 = before.length; ref2 <= ref3 ? l < ref3 : l > ref3; i = ref2 <= ref3 ? ++l : --l) {
        res || (res = {});
        res[i] = {
          removed: before[i]
        };
      }
    }
    if (len < after.length) {
      for (i = m = ref4 = len, ref5 = after.length; ref4 <= ref5 ? m < ref5 : m > ref5; i = ref4 <= ref5 ? ++m : --m) {
        res || (res = {});
        res[i] = {
          added: after[i]
        };
      }
    }
    return res;
  };

  Eq.plainObjectsDeepDiffObject = function(before, after) {
    var afterV, beforeV, diff, k, res;
    res = null;
    for (k in before) {
      beforeV = before[k];
      if (after.hasOwnProperty(k)) {
        if (diff = plainObjectsDeepDiff(beforeV, after[k])) {
          res || (res = {});
          res[k] = diff;
        }
      } else {
        res || (res = {});
        res[k] = {
          removed: beforeV
        };
      }
    }
    for (k in after) {
      afterV = after[k];
      if (!(!before.hasOwnProperty(k))) {
        continue;
      }
      res || (res = {});
      res[k] = {
        added: afterV
      };
    }
    return res;
  };

  Eq.plainObjectsDeepDiff = plainObjectsDeepDiff = function(before, after) {
    var _constructor;
    if (before === after) {
      return null;
    } else if (before && after && before.constructor === (_constructor = after.constructor)) {
      if (before.eq) {
        if (before.eq(after)) {
          return null;
        } else {
          return {
            before: before,
            after: after
          };
        }
      } else if (_constructor === Array) {
        return Eq.plainObjectsDeepDiffArray(before, after);
      } else if (_constructor === Object) {
        return Eq.plainObjectsDeepDiffObject(before, after);
      } else {
        return {
          before: before,
          after: after
        };
      }
    } else {
      return {
        before: before,
        after: after
      };
    }
  };

  Eq.diff = plainObjectsDeepDiff;

  Eq.shallowEq = function(a, b) {
    return a === b || (a && b && a.eq && a.eq(b));
  };

  return Eq;

})();


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var Function;

module.exports = Function = (function() {
  function Function() {}

  Function.fastBind = function(fn, _this) {
    switch (fn.length) {
      case 0:
        return function() {
          return fn.call(_this);
        };
      case 1:
        return function(a) {
          return fn.call(_this, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(_this, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(_this, a, b, c);
        };
      case 4:
        return function(a, b, c, d) {
          return fn.call(_this, a, b, c, d);
        };
      case 5:
        return function(a, b, c, d, e) {
          return fn.call(_this, a, b, c, d, e);
        };
      case 6:
        return function(a, b, c, d, e, f) {
          return fn.call(_this, a, b, c, d, e, f);
        };
      case 7:
        return function(a, b, c, d, e, f, g) {
          return fn.call(_this, a, b, c, d, e, f, g);
        };
      case 8:
        return function(a, b, c, d, e, f, g, h) {
          return fn.call(_this, a, b, c, d, e, f, g, h);
        };
      case 9:
        return function(a, b, c, d, e, f, g, h, i) {
          return fn.call(_this, a, b, c, d, e, f, g, h, i);
        };
      case 10:
        return function(a, b, c, d, e, f, g, h, i, j) {
          return fn.call(_this, a, b, c, d, e, f, g, h, i, j);
        };
      default:
        return function() {
          return fn.apply(_this, arguments);
        };
    }
  };

  return Function;

})();


/*
TODO:

The above options are not hot-reload compatible. However, this alternative would be:

  name = fn.name
  -> _this[name].apply _this, arguments

I need to perf-test this. Or, I need to finally start using a global "debug" mode that could use this
in debug mode and the faster(?), non hot-reload options in production mode.
 */


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var InspectedObjects, deepMap, escapeJavascriptString, inspectedObjectLiteral, isFunction, isPlainArray, isPlainObject, isPromise, isString, ref;

ref = __webpack_require__(6), deepMap = ref.deepMap, isPlainArray = ref.isPlainArray, isPlainObject = ref.isPlainObject, isString = ref.isString, isFunction = ref.isFunction, isPromise = ref.isPromise;

escapeJavascriptString = __webpack_require__(10).escapeJavascriptString;

inspectedObjectLiteral = __webpack_require__(26).inspectedObjectLiteral;

module.exports = InspectedObjects = (function() {
  var toInspectedObjects;

  function InspectedObjects() {}

  InspectedObjects.toInspectedObjects = toInspectedObjects = function(m) {
    var functionString, literal, oldm, out, reducedFunctionString;
    if (m == null) {
      return m;
    }
    oldm = m;
    if (m === global) {
      return inspectedObjectLiteral("global");
    } else if (out = typeof m.getInspectedObjects === "function" ? m.getInspectedObjects() : void 0) {
      return out;
    } else if (isPromise(m)) {
      return inspectedObjectLiteral("Promise");
    } else if (isPlainObject(m) || isPlainArray(m)) {
      return deepMap(m, function(v) {
        return toInspectedObjects(v);
      });
    } else if (m instanceof Error) {
      literal = inspectedObjectLiteral(m.stack || m.toString(), true);
      if (m.info) {
        return toInspectedObjects({
          Error: {
            info: m.info,
            stack: literal
          }
        });
      } else {
        return {
          Error: {
            stack: literal
          }
        };
      }
    } else if (isFunction(m)) {
      functionString = "" + m;
      reducedFunctionString = functionString.replace(/\s+/g, ' ').replace(/^function (\([^)]*\))/, "$1 ->").replace(/^\(\)\s*/, '');
      return inspectedObjectLiteral(reducedFunctionString.length < 80 ? reducedFunctionString : functionString.slice(0, 5 * 80));
    } else {
      return m;
    }
  };

  return InspectedObjects;

})();


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Inspector, Map, escapeJavascriptString, isArray, isBrowserObject, isClass, isFunction, isObject, isPlainArray, isPlainObject, isString, objectName, ref,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Map = __webpack_require__(27);

escapeJavascriptString = __webpack_require__(10).escapeJavascriptString;

ref = __webpack_require__(6), objectName = ref.objectName, isString = ref.isString, isArray = ref.isArray, isFunction = ref.isFunction, isObject = ref.isObject, isClass = ref.isClass, isBrowserObject = ref.isBrowserObject, isPlainObject = ref.isPlainObject, isPlainArray = ref.isPlainArray;

module.exports = Inspector = (function() {
  var inspect;

  Inspector.unquotablePropertyRegex = /^([0-9]+|[_a-zA-Z][_0-9a-zA-Z]*)$/;

  Inspector.customInspectable = function(obj) {
    return obj.inspect && !(typeof obj === "function");
  };

  Inspector.parentString = function(distance) {
    switch (distance) {
      case 0:
        return "parent";
      case 1:
        return "grandparent";
      case 2:
        return "great grandparent";
      default:
        return "great^" + (distance - 1) + " grandparent";
    }
  };

  function Inspector(options) {
    if (options == null) {
      options = {};
    }
    this.inspect = bind(this.inspect, this);
    this.inspectInternal = bind(this.inspectInternal, this);
    this.inspectObject = bind(this.inspectObject, this);
    this.inspectArray = bind(this.inspectArray, this);
    this.maxLength = options.maxLength || 10000;
    this.allowCustomInspectors = !options.noCustomInspectors;
    this.maxDepth = options.maxDepth != null ? options.maxDepth : 10;
    this.outArray = [];
    this.length = 0;
    this.depth = 0;
    this.inspectingMap = new Map;
    this.done = false;
  }

  Inspector.inspect = inspect = function(obj, options) {
    var inspector;
    if (options == null) {
      options = {};
    }
    if (this !== global) {
      return Neptune.Base.inspect.call(this);
    }
    inspector = new Inspector(options);
    inspector.inspect(obj);
    return inspector.getResult();
  };

  Inspector.shallowInspect = function(obj) {
    if (obj == null) {
      return "" + obj;
    } else if (Inspector.customInspectable(obj)) {
      return Inspector.inspect(obj);
    } else if (isString(obj)) {
      return escapeJavascriptString(obj);
    } else if (isArray(obj)) {
      return "<<Array length: " + obj.length + ">>";
    } else if (isFunction(obj) && obj.name === "") {
      return "<<function args: " + obj.length + ">>";
    } else {
      return "<<" + (typeof obj) + ": " + (obj.name || obj) + ">>";
    }
  };

  Inspector.inspectLean = function(object, options) {
    var fullInspect, match;
    fullInspect = inspect(object, options);
    if (!isFunction(object != null ? object.inspect : void 0) && (isPlainObject(object) || (isPlainArray(object) && (object.length > 1 || (options != null ? options.forArgs : void 0))))) {
      match = fullInspect.match(/^\[(.+)\]$|^\{(.+)\}$/);
      if (match) {
        return match[1] || match[2] || match[3];
      } else {
        return fullInspect;
      }
    } else {
      return fullInspect;
    }
  };

  Inspector.prototype.put = function(s) {
    var remaining;
    if (this.done) {
      return;
    }
    if (this.length + s.length > this.maxLength) {
      this.done = true;
      remaining = this.maxLength - this.length;
      s = (s.slice(0, remaining)) + "<... first " + remaining + "/" + s.length + ">";
    }
    this.length += s.length;
    this.outArray.push(s);
    return s;
  };

  Inspector.prototype.getResult = function() {
    return this.outArray.join("");
  };

  Inspector.prototype.maxDepthOutput = function(obj) {
    var keys, name;
    switch (typeof obj) {
      case "string":
      case "number":
      case "boolean":
      case "undefined":
        return this.inspectInternal(obj);
      case "function":
        return this.put(objectName(obj));
      case "object":
        return this.put(obj === null ? "null" : isArray(obj) ? "[" + obj.length + " elements]" : (keys = Object.keys(obj), name = objectName(obj), name === "Object" ? "{" + keys.length + " keys}" : keys.length > 0 ? "{" + name + " " + keys.length + " keys}" : name));
    }
  };

  Inspector.prototype.inspectArray = function(array) {
    var first, i, len, obj;
    this.put("[");
    first = true;
    for (i = 0, len = array.length; i < len; i++) {
      obj = array[i];
      if (!first) {
        this.put(", ");
      }
      this.inspect(obj);
      first = false;
    }
    return this.put("]");
  };

  Inspector.prototype.inspectObject = function(obj) {
    var attributes, first, i, k, keys, len, name, v;
    attributes = [];
    keys = Object.keys(obj);
    name = objectName(obj);
    if (isFunction(obj) && keys.length === 0) {
      return this.put(name + "()");
    } else if (isBrowserObject(obj)) {
      return this.put("{" + name + "}");
    } else {
      this.put("{");
      if (obj.constructor !== Object) {
        this.put(name + " ");
      }
      first = true;
      for (i = 0, len = keys.length; i < len; i++) {
        k = keys[i];
        if (!(k !== "__uniqueId")) {
          continue;
        }
        if (!first) {
          this.put(", ");
        }
        v = obj[k];
        if (Inspector.unquotablePropertyRegex.test(k)) {
          this.put(k);
        } else {
          this.inspect(k);
        }
        this.put(": ");
        this.inspect(v);
        first = false;
      }
      return this.put("}");
    }
  };

  Inspector.prototype.inspectInternal = function(obj) {
    if (obj == null) {
      return this.put("" + obj);
    } else if (isString(obj)) {
      return this.put(escapeJavascriptString(obj));
    } else if (isArray(obj)) {
      return this.inspectArray(obj);
    } else if (isClass(obj)) {
      return this.put(objectName(obj));
    } else if (this.allowCustomInspectors && Inspector.customInspectable(obj)) {
      if (obj.inspect.length > 0) {
        return obj.inspect(this);
      } else {
        return this.put(obj.inspect());
      }
    } else if (obj instanceof RegExp) {
      return this.put("" + obj);
    } else if (isObject(obj) || isFunction(obj)) {
      return this.inspectObject(obj);
    } else {
      return this.put("" + obj);
    }
  };

  Inspector.prototype.inspect = function(obj) {
    var objDepth;
    if (this.done) {
      return;
    }
    if (objDepth = this.inspectingMap.get(obj)) {
      this.put("<" + (Inspector.parentString(this.depth - objDepth)) + ">");
      return null;
    }
    if (this.depth >= this.maxDepth) {
      this.maxDepthOutput(obj);
    } else {
      this.depth++;
      this.inspectingMap.set(obj, this.depth);
      this.inspectInternal(obj);
      this.inspectingMap["delete"](obj);
      this.depth--;
    }
    return null;
  };

  return Inspector;

})();


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var Inspect, StandardLib,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(91);

module.exports = StandardLib.Inspect || StandardLib.addNamespace('Inspect', Inspect = (function(superClass) {
  extend(Inspect, superClass);

  function Inspect() {
    return Inspect.__super__.constructor.apply(this, arguments);
  }

  return Inspect;

})(Neptune.Base));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Iteration, compactFlatten, deepArrayEach, isArrayOrArguments, isFunction, isObject, isPlainArray, isPlainObject, log, mergeInto, ref, ref1;

ref = Neptune.NeptuneLib, compactFlatten = ref.compactFlatten, deepArrayEach = ref.deepArrayEach, isArrayOrArguments = ref.isArrayOrArguments, mergeInto = ref.mergeInto;

ref1 = __webpack_require__(6), isPlainObject = ref1.isPlainObject, isObject = ref1.isObject, isFunction = ref1.isFunction, isPlainArray = ref1.isPlainArray;

log = function() {
  var ref2;
  return (ref2 = Neptune.Art.Foundation).log.apply(ref2, arguments);
};

module.exports = Iteration = (function() {
  var arrayIterableTest, emptyOptions, invokeNormalizedIteration, normalizedArray, normalizedEach, normalizedEachWhile, normalizedFind, normalizedInject, normalizedObject, returnFirst, returnSecond;

  function Iteration() {}

  returnFirst = function(a) {
    return a;
  };

  returnSecond = function(a, b) {
    return b;
  };

  arrayIterableTest = function(source) {
    return (source != null ? source.length : void 0) >= 0;
  };

  emptyOptions = {};


  /*
  COMMON API:
  
  IN: (source, withBlock = returnFirst) ->
  IN: (source, options) ->
  IN: (source, into, withBlock = returnFirst) ->
  IN: (source, into, options) ->
  
  source:
    array-like (see arrayIterableTest)
      use indexes to iterate
  
    non-null
  
  options:
    with: withBlock
    when: whenBlock
    into: into
  
  withBlock: (value, key, into, whenBlockResult) -> value
    Generally, this generates the 'value' used for each part of the iteration.
    When constructing a new collection, this is the value for each entry.
    'find' and 'reduce' use this differently.
  
  OUT: into
  
  TODO:
    - support ES6 iterables and iterators
    - flatten: true - if source is an array, recurse into any sub-arrays
    - compact: effectively `when: (v) -> v?` except you can also have your own when-function in addition, run after this one.
    - skip: N - skip the first N values
    - short: N - stop short N values
    - until: () -> T/F - same args as withBlock, loop stops when true, executed after first withBlock
    - while: () -> T/F - same args as withBlock, loop stops when false, executed before first whenBlock
    - by: N -
        N>0: only stop at every Nth value
        N<0: iterate in reverse order, only stop at every abs(N)th value
   */


  /*
  each differences from the common-api:
  
  1) into defaults to source
   */

  Iteration.each = function(source, a, b) {
    return invokeNormalizedIteration(normalizedEach, source, a, b);
  };

  normalizedEach = function(source, into, withBlock, options) {
    var i, j, k, len, len1, v, w, whenBlock;
    if (into === void 0) {
      into = source;
    }
    if (options) {
      whenBlock = options.when;
    }
    if (arrayIterableTest(source)) {
      if (whenBlock) {
        for (k = i = 0, len = source.length; i < len; k = ++i) {
          v = source[k];
          if (w = whenBlock(v, k)) {
            withBlock(v, k, into, w);
          }
        }
      } else {
        for (k = j = 0, len1 = source.length; j < len1; k = ++j) {
          v = source[k];
          withBlock(v, k, into);
        }
      }
    } else {
      if (whenBlock) {
        for (k in source) {
          v = source[k];
          if (w = whenBlock(v, k)) {
            withBlock(v, k, into, w);
          }
        }
      } else {
        for (k in source) {
          v = source[k];
          withBlock(v, k, into);
        }
      }
    }
    return into;
  };


  /*
  eachWhile differences from the common-api:
  
  1) into defaults to source
  2) stops when withBlock returns false
   */

  Iteration.eachWhile = function(source, a, b) {
    return invokeNormalizedIteration(normalizedEachWhile, source, a, b);
  };

  normalizedEachWhile = function(source, into, withBlock, options) {
    var i, j, k, len, len1, v, w, whenBlock;
    if (into === void 0) {
      into = source;
    }
    if (options) {
      whenBlock = options.when;
    }
    if (arrayIterableTest(source)) {
      if (whenBlock) {
        for (k = i = 0, len = source.length; i < len; k = ++i) {
          v = source[k];
          if (w = whenBlock(v, k)) {
            if (!withBlock(v, k, into, w)) {
              break;
            }
          }
        }
      } else {
        for (k = j = 0, len1 = source.length; j < len1; k = ++j) {
          v = source[k];
          if (!withBlock(v, k, into)) {
            break;
          }
        }
      }
    } else {
      if (whenBlock) {
        for (k in source) {
          v = source[k];
          if (w = whenBlock(v, k)) {
            if (!withBlock(v, k, into, w)) {
              break;
            }
          }
        }
      } else {
        for (k in source) {
          v = source[k];
          if (!withBlock(v, k, into)) {
            break;
          }
        }
      }
    }
    return into;
  };


  /*
  reduce differences from the common-api:
  
  1) The with-block has a different argument order. Into is passed first instead of last:
    with: (into, value, key, whenReturnValue) ->
    This allows you to drop-in functions that take two arguments and reduce them to one like:
      Math.max
      add = (a, b) -> a + b
  
    The default with-block still returns value (which is now the second argument).
  
  1) if into starts out undefined:
    for v = the first value (if whenBlock is present, the first value when whenBlock is true)
      into = v
      skip: withBlock
  
  2) when withBlock is executed, into is updated:
    into = withBlock()
   */

  Iteration.reduce = function(source, a, b) {
    return invokeNormalizedIteration(normalizedInject, source, a, b);
  };

  normalizedInject = function(source, into, withBlock, options) {
    var intoSet;
    if (source == null) {
      return into;
    }
    normalizedEach(source, void 0, (intoSet = into !== void 0) ? function(v, k, __, w) {
      return into = withBlock(into, v, k, w);
    } : function(v, k, __, w) {
      return into = intoSet ? withBlock(into, v, k, w) : (intoSet = true, v);
    }, options);
    return into;
  };


  /*
  object differences from the common-api:
  
  IN:
    options.key: (value, key, into, whenBlockResult) -> value
  
  1) into defaults to a new object ({}) (if into == undefined)
  
  2) when withBlock is executed, into is updated:
    if source is array-like:
      into[v] = withBlock()
    else
      into[k] = withBlock()
   */

  Iteration.object = function(source, a, b) {
    return invokeNormalizedIteration(normalizedObject, source, a, b);
  };

  normalizedObject = function(source, into, withBlock, options) {
    var keyFunction;
    keyFunction = options.key || (arrayIterableTest(source) ? returnFirst : returnSecond);
    return normalizedEach(source, into != null ? into : {}, function(v, k, into, w) {
      return into[keyFunction(v, k, into, w)] = withBlock(v, k, into, w);
    }, options);
  };


  /*
  array differences from the common-api:
  
  1) into defaults to a new array ([]) (if into == undefined)
  
  2) when withBlock is executed, into is updated:
    into.push withBlock()
   */

  Iteration.array = function(source, a, b) {
    return invokeNormalizedIteration(normalizedArray, source, a, b);
  };

  normalizedArray = function(source, into, withBlock, options) {
    return normalizedEach(source, into != null ? into : [], function(v, k, into, w) {
      return into.push(withBlock(v, k, into, w));
    }, options);
  };


  /*
  differs from common api:
  
  1) returns the last value returned by withBlock or undefined if withBlock was never executed
  2) stops if
    a) whenBlock?:  and it returned true (stops after withBlock is evaluated)
    b) !whenBlock?: withBlock returns a truish value
   */

  Iteration.find = function(source, a, b) {
    return invokeNormalizedIteration(normalizedFind, source, a, b);
  };

  normalizedFind = function(source, into, withBlock, options) {
    var found;
    normalizedEachWhile(source, found = void 0, options.whenBlock ? function(v, k, into, w) {
      found = withBlock(v, k, null, w);
      return false;
    } : function(v, k, into, w) {
      return !(found = withBlock(v, k, null, w));
    }, options);
    return found;
  };


  /*
  Normalizes input params for the 'iteration' function.
  Since this normalizes multile params, and therefor would need to return
  an new array or new object otherwise, we pass IN the iteration function
  and pass the params directly to it. This keeps the computed params on the
  stack and doesn't create new objects.
  
  IN signature 1: (iteration, source, into, withBlock) ->
  IN signature 2: (iteration, source, into, options) ->
  IN signature 3: (iteration, source, withBlock) ->
  IN signature 4: (iteration, source, options) ->
  IN signature 5: (iteration, source) ->
  
  IN:
    iteration: (source, into, withBlock, options) -> out
  
      The iteration function is invoked last with the computed args.
      Its retults are returned.
  
      IN:
        source:     passed directly through from inputs
        into:       passed directly through from inputs OR from options.into
        withBlock:  passed directly through from inputs OR from options.with
        options:    passed direftly through from inputs OR {}
                    (guaranteed to be set and a plainObject)
  
    source: the source collection to be iterated over. Passed streight through.
  
    into:       passed through to 'iteration'
    withBlock:  passed through to 'iteration'
    options:    passed through to 'iteration' AND:
  
      into:     set 'into' from the options object
      with:     set 'withBlock' from the options object
  
  OUT: out
   */

  invokeNormalizedIteration = function(iteration, source, a, b) {
    var into, options, withBlock;
    options = b ? (into = a, b) : a;
    if (isPlainObject(options)) {
      if (into == null) {
        into = options.into;
      }
      withBlock = options["with"];
    } else {
      if (isFunction(options)) {
        withBlock = options;
      }
      options = emptyOptions;
    }
    return iteration(source, into, withBlock || returnFirst, options);
  };

  return Iteration;

})();


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var ObjectDiff;

module.exports = ObjectDiff = (function() {
  var defaultEq;

  function ObjectDiff() {}

  defaultEq = function(a, b) {
    return a === b;
  };


  /*
  SBD this has been thouroughly benchmarked on Safari and Chrome as of 2015-11-06
  This is as fast as I could make it.
  
  IN:
    newObj:   the changed-to object   (must be set)
    oldObj:   the changed-from object (default: {})
    added:    (key, newValue) -> null
              called for each key in newObj that was not in oldObj
    removed:  (key, oldValue) -> null
              called for each key in oldObj that is not in newObj
    changed:  (key, newValue, oldValue) -> null
              called for each key in both where the value changed
    noChange: (key, value) -> null
              called for each key in both where the value stayed the same
    eq:       (a, b) -> true if a is equal to b
              DEFAULT: use javascript ===
              provided for custom concepts of equality
    oldObjKeyCount: null or a the number of keys in oldObj
      This last field provides an opportunity for further performance improvement.
      If you have previously computed the number of keys in oldObj, pass it in.
      Counting the number of keys in an object can be slow. If we know the number
      of keys this routine can be more efficient.
  
      NOTE that this function returns the key-count of the new object. That way if you
      are calling objecfDiff several times over a sequence of object changes, can you keep
      the results from this function, you already have the oldObjKeyCount for the next call.
  
  OUT: newObjKeyCount - number of keys in the new object
   */

  ObjectDiff.objectDiff = function(newObj, oldObj, added, removed, changed, noChange, eq, oldObjKeyCount) {
    var k, newObjKeyCount, newValue, oldObjKeyCountIsAtLeast, oldValue;
    if (eq == null) {
      eq = defaultEq;
    }
    newObjKeyCount = 0;
    if (!oldObj) {
      for (k in newObj) {
        newValue = newObj[k];
        newObjKeyCount++;
        added(k, newValue);
      }
      return newObjKeyCount;
    }
    oldObjKeyCountIsAtLeast = 0;
    for (k in newObj) {
      newValue = newObj[k];
      newObjKeyCount++;
      if (typeof (oldValue = oldObj[k]) !== "undefined" || oldObj.hasOwnProperty(k)) {
        oldObjKeyCountIsAtLeast++;
        if (!eq(newValue, oldValue)) {
          changed(k, newValue, oldValue);
        } else {
          if (typeof noChange === "function") {
            noChange(k, newValue);
          }
        }
      } else {
        added(k, newValue);
      }
    }
    if (!(oldObjKeyCount != null) || oldObjKeyCountIsAtLeast !== oldObjKeyCount) {
      for (k in oldObj) {
        if (!(typeof newObj[k] !== "undefined" || newObj.hasOwnProperty(k))) {
          removed(k, oldObj[k]);
        }
      }
    }
    return newObjKeyCount;
  };

  return ObjectDiff;

})();


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var ObjectExtensions, compactFlatten, deepArrayEach, isArrayOrArguments, isFunction, isObject, isPlainArray, isPlainObject, mergeInto, object, present, ref, ref1,
  slice = [].slice,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

ref = Neptune.NeptuneLib, compactFlatten = ref.compactFlatten, deepArrayEach = ref.deepArrayEach, isArrayOrArguments = ref.isArrayOrArguments, mergeInto = ref.mergeInto;

ref1 = __webpack_require__(6), isPlainObject = ref1.isPlainObject, isObject = ref1.isObject, isFunction = ref1.isFunction, isPlainArray = ref1.isPlainArray, present = ref1.present;

object = __webpack_require__(46).object;

module.exports = ObjectExtensions = (function() {
  var expandPathedProperties, objectKeyCount, propertyIsPathed, setPathedProperty, toObjectInternal, withPropertyPath;

  function ObjectExtensions() {}

  ObjectExtensions.countKeys = function(o) {
    return Object.keys(o).length;
  };

  ObjectExtensions.objectKeyCount = objectKeyCount = function(o) {
    var count, k, v;
    count = 0;
    for (k in o) {
      v = o[k];
      count++;
    }
    return count;
  };

  ObjectExtensions.objectHasKeys = function(o) {
    var b, k;
    for (k in o) {
      b = o[k];
      return true;
    }
    return false;
  };

  ObjectExtensions.objectLength = objectKeyCount;


  /*
  NOTE:
    null and undefined keys are NOT SUPPORTED
  
    They should be converted to strings, first,
    which is what they would become anyway.
  
  IN: 0 or more arguments
    out = {}
    list = arguments
  
    for element in list
      objects: merge into out
      arrays or argument lists: recurse using element as the list
      null or undefined: skip
      else out[element] = next element (or undefined if none)
  
  OUT: plain object
   */

  toObjectInternal = function(list, out) {
    var element, j, key, len;
    key = null;
    for (j = 0, len = list.length; j < len; j++) {
      element = list[j];
      if (key) {
        out[key] = element;
        key = null;
      } else if (isPlainObject(element)) {
        mergeInto(out, element);
      } else if (isArrayOrArguments(element)) {
        toObjectInternal(element, out);
      } else if (element != null) {
        key = element;
      }
    }
    if (key) {
      return out[key] = void 0;
    }
  };

  ObjectExtensions.toObject = function() {
    var out;
    out = {};
    toObjectInternal(arguments, out);
    return out;
  };


  /*
  IN:
    inputArray: any array
    transformFunction: (element) -> [key, value]
      default: transforms an array of the form: [[key1, value1], [key2, value2], etc...]
   */

  ObjectExtensions.arrayToMap = function(inputArray, transformFunction) {
    var element, j, key, len, outputMap, ref2, value;
    if (transformFunction == null) {
      transformFunction = function(element) {
        return element;
      };
    }
    outputMap = {};
    for (j = 0, len = inputArray.length; j < len; j++) {
      element = inputArray[j];
      ref2 = transformFunction(element), key = ref2[0], value = ref2[1];
      outputMap[key] = value;
    }
    return outputMap;
  };


  /*
  IN:
    obj: the object to select fields from
  
    2nd argument can be:
      selectFunction: (value, key) -> true / false
  
    OR obj can be followed by any number of strings or arrays in any nesting, possibly with null fields
   */

  ObjectExtensions.select = function(obj, a) {
    var j, k, len, prop, properties, result, v;
    if (!obj) {
      return {};
    }
    result = {};
    if (isFunction(a)) {
      if (a.length === 1) {
        for (k in obj) {
          v = obj[k];
          if (a(v)) {
            result[k] = v;
          }
        }
      } else {
        for (k in obj) {
          v = obj[k];
          if (a(k, v)) {
            result[k] = v;
          }
        }
      }
    } else {
      properties = compactFlatten(Array.prototype.slice.call(arguments, 1));
      for (j = 0, len = properties.length; j < len; j++) {
        prop = properties[j];
        if (((v = obj[prop]) != null) || obj.hasOwnProperty(prop)) {
          result[prop] = v;
        }
      }
    }
    return result;
  };

  ObjectExtensions.selectAll = function() {
    var j, len, obj, prop, properties, ref2, result;
    obj = arguments[0], properties = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (!obj) {
      return {};
    }
    result = {};
    ref2 = compactFlatten(properties);
    for (j = 0, len = ref2.length; j < len; j++) {
      prop = ref2[j];
      result[prop] = obj[prop];
    }
    return result;
  };

  ObjectExtensions.objectWithDefinedValues = function(obj) {
    return object(obj, {
      when: function(v) {
        return v !== void 0;
      }
    });
  };

  ObjectExtensions.objectWithExistingValues = function(obj) {
    return object(obj, {
      when: function(v) {
        return v != null;
      }
    });
  };

  ObjectExtensions.objectWithPresentValues = function(obj) {
    return object(obj, {
      when: function(v) {
        return present(v);
      }
    });
  };

  ObjectExtensions.objectWithout = function() {
    var anythingToDo, j, len, obj, prop, properties, result, v;
    obj = arguments[0], properties = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (!obj) {
      return {};
    }
    if (properties.length === 1 && !(typeof properties[0] === "string")) {
      properties = properties[0];
    }
    anythingToDo = false;
    for (j = 0, len = properties.length; j < len; j++) {
      prop = properties[j];
      if (obj.hasOwnProperty(prop)) {
        anythingToDo = true;
        break;
      }
    }
    if (anythingToDo) {
      result = {};
      for (prop in obj) {
        v = obj[prop];
        if (indexOf.call(properties, prop) < 0) {
          result[prop] = v;
        }
      }
      return result;
    } else {
      return obj;
    }
  };

  ObjectExtensions.propertyIsPathed = propertyIsPathed = function(key) {
    return !!key.match(/[\s\.\/]/);
  };

  ObjectExtensions.withPropertyPath = withPropertyPath = function(obj, propertyPath, action) {
    var i, j, key, len;
    propertyPath = propertyPath.match(/[^\s\.\/]+/g);
    for (i = j = 0, len = propertyPath.length; j < len; i = ++j) {
      key = propertyPath[i];
      if (i === propertyPath.length - 1) {
        action(obj, key);
      } else {
        obj = obj[key] || (obj[key] = {});
      }
    }
    return obj;
  };

  ObjectExtensions.setPathedProperty = setPathedProperty = function(obj, propertyPath, value) {
    withPropertyPath(obj, propertyPath, function(o, k) {
      return o[k] = value;
    });
    return obj;
  };

  ObjectExtensions.expandPathedProperties = expandPathedProperties = function(obj, into, pathExpansionEnabled) {
    var k, v;
    if (into == null) {
      into = {};
    }
    if (pathExpansionEnabled == null) {
      pathExpansionEnabled = true;
    }
    for (k in obj) {
      v = obj[k];
      if (pathExpansionEnabled && propertyIsPathed(k)) {
        withPropertyPath(into, k, function(o, finalKey) {
          if (isPlainObject(v)) {
            return expandPathedProperties(v, o[finalKey] || (o[finalKey] = {}), true);
          } else {
            return o[finalKey] = v;
          }
        });
      } else if (isPlainObject(v)) {
        expandPathedProperties(v, into[k] || (into[k] = {}), false);
      } else {
        into[k] = v;
      }
    }
    return into;
  };

  return ObjectExtensions;

})();


/***/ }),
/* 49 */
/***/ (function(module, exports) {

var Unique, nextId;

nextId = 1;

module.exports = Unique = (function() {
  var nextUniqueObjectId, objectId;

  function Unique() {}

  Unique.nextUniqueObjectId = nextUniqueObjectId = function() {
    return "object_" + nextId++;
  };

  Unique.objectId = objectId = function(o) {
    if (o.hasOwnProperty("__uniqueId")) {
      return o.__uniqueId || (o.__uniqueId = nextUniqueObjectId());
    } else {
      Object.defineProperty(o, "__uniqueId", {
        enumerable: false,
        value: nextUniqueObjectId()
      });
      return o.__uniqueId;
    }
  };

  Unique.id = function(key) {
    if (typeof key === "object" || typeof key === "function") {
      if (key) {
        if (typeof key.getUniqueId === "function") {
          return key.getUniqueId();
        } else {
          return objectId(key);
        }
      } else {
        return "null";
      }
    } else if (typeof key === "number") {
      return "" + key;
    } else if (typeof key === "string") {
      return "string_" + key;
    } else if (typeof key === "boolean") {
      if (key) {
        return "true";
      } else {
        return "false";
      }
    } else if (key === void 0) {
      return "undefined";
    } else {
      return (typeof key) + "_" + key;
    }
  };

  return Unique;

})();


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BaseObject, ConfigRegistry, Promise, deepMerge, defineModule, expandPathedProperties, formattedInspect, inspect, isPlainObject, isString, log, merge, mergeInto, parseQuery, pushIfNotPresent, ref, upperCamelCase,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

ref = __webpack_require__(4), defineModule = ref.defineModule, log = ref.log, Promise = ref.Promise, inspect = ref.inspect, formattedInspect = ref.formattedInspect, merge = ref.merge, deepMerge = ref.deepMerge, mergeInto = ref.mergeInto, parseQuery = ref.parseQuery, pushIfNotPresent = ref.pushIfNotPresent, isPlainObject = ref.isPlainObject, isString = ref.isString, upperCamelCase = ref.upperCamelCase, expandPathedProperties = ref.expandPathedProperties;

BaseObject = __webpack_require__(5).BaseObject;

defineModule(module, ConfigRegistry = (function(superClass) {
  var defaultArtConfigName;

  extend(ConfigRegistry, superClass);

  function ConfigRegistry() {
    return ConfigRegistry.__super__.constructor.apply(this, arguments);
  }

  ConfigRegistry.artConfigName = defaultArtConfigName = "Development";

  ConfigRegistry.artConfig = {};

  ConfigRegistry.configurables = [];

  ConfigRegistry.configs = {};

  ConfigRegistry.registerConfig = function(name, config) {
    if (!isPlainObject(config)) {
      throw new Error("config must be a plain object");
    }
    return ConfigRegistry.configs[name] = config;
  };

  ConfigRegistry.registerConfigurable = function(configurable) {
    return pushIfNotPresent(ConfigRegistry.configurables, configurable);
  };


  /*
  IN: configureOptions:
    artConfigName: string
      can be passed in:
        as an argument
        via process.env
        via the browser query string
  
      default: "Development"
  
      EFFECT:
        @artConfigName =
          externalEnvironment.artConfigName ||
          artConfigName
  
    artConfig: JSON string OR plain object structure
      can be passed in:
        as an argument
        via process.env
        via the browser query string
  
      default: {}
  
      EFFECT:
        mergeInto @artConfig, deepMerge
          @configs[artConfigName]
          global.artConfig
          artConfig
          externalEnvironment.artConfig
  
    IF artConfig IS NOT SET:
      artConfig is set to a clone of configureOptions with artConfigName removed.
  
  EFFECTS:
    callback @artConfig for callback in @configurables
  
  Note the priority order of artConfig sources:
  
  Priority:
    #1. externalEnvironment.artConfig
    #2. the artConfig passed into configure
  
  
  EXAMPLES:
     * artConfig = verbose: true
    ConfigRegistry.configure
      verbose: true
  
     * artConfig = verbose: true
     * artConfigName = "Production"
    ConfigRegistry.configure
      artConfigName: "Production"
      verbose: true
  
     * artConfig = verbose: true
     * artConfigName = "Production"
    ConfigRegistry.configure
      artConfigName: "Production"
      artConfig: verbose: true
  
  TEST INPUTS: the second and third inputs are env and
    queryString, and are only there as mocks for testing.
   */

  ConfigRegistry.configure = function() {
    var __testEnv, __testQueryString, artConfigArgument, artConfigGlobal, artConfigNameArgument, c, conf, config, configureOptions, externalEnvironment, i, j, len, len1, name, obj, obj1, ref1, ref2, ref3, ref4, verbose;
    configureOptions = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    ref1 = ConfigRegistry.configureOptions = deepMerge.apply(null, configureOptions), artConfigNameArgument = ref1.artConfigName, artConfigArgument = ref1.artConfig, __testEnv = ref1.__testEnv, __testQueryString = ref1.__testQueryString;
    if (!artConfigArgument) {
      artConfigArgument = merge(ConfigRegistry.configureOptions);
      delete artConfigArgument.artConfigName;
    }
    artConfigGlobal = global.artConfig;
    externalEnvironment = ConfigRegistry.getExternalEnvironment(__testEnv, __testQueryString);
    ConfigRegistry.artConfigName = externalEnvironment.artConfigName || artConfigNameArgument || global.artConfigName;
    ConfigRegistry.artConfigName = ConfigRegistry.normalizeArtConfigName(ConfigRegistry.artConfigName);
    if (ConfigRegistry.artConfigName && !ConfigRegistry.configs[ConfigRegistry.artConfigName]) {
      throw new Error("no config registered with name: " + ConfigRegistry.artConfigName);
    }
    ConfigRegistry.artConfigName || (ConfigRegistry.artConfigName = defaultArtConfigName);
    ConfigRegistry.resetCurrentConfig();
    ref2 = [ConfigRegistry.configs[ConfigRegistry.artConfigName], artConfigGlobal, artConfigArgument, externalEnvironment.artConfig];
    for (i = 0, len = ref2.length; i < len; i++) {
      conf = ref2[i];
      expandPathedProperties(conf, ConfigRegistry.artConfig);
    }
    verbose = ConfigRegistry.artConfig.verbose;
    if (verbose) {
      log("------------- ConfigRegistry: inputs");
      log({
        ConfigRegistry: {
          configs: Object.keys(ConfigRegistry.configs),
          configurables: (function() {
            var j, len1, ref3, results;
            ref3 = this.configurables;
            results = [];
            for (j = 0, len1 = ref3.length; j < len1; j++) {
              c = ref3[j];
              results.push(c.namespacePath);
            }
            return results;
          }).call(ConfigRegistry),
          artConfigName: {
            algorithm: "select first non-null",
            inputs: {
              fromExternalEnvironment: externalEnvironment.artConfigName,
              fromArguments: artConfigNameArgument,
              "default": defaultArtConfigName
            }
          },
          artConfig: {
            algorithm: "deep merge all, last has priority",
            inputs: {
              selected_config: (
                obj = {},
                obj["" + ConfigRegistry.artConfigName] = ConfigRegistry.configs[ConfigRegistry.artConfigName],
                obj
              ),
              "global.artConfig": artConfigGlobal,
              "arguments": artConfigArgument,
              environment: externalEnvironment.artConfig
            }
          }
        }
      });
    }
    verbose && log("------------- ConfigRegistry: combined config");
    verbose && log({
      ConfigRegistry: {
        artConfigName: ConfigRegistry.artConfigName,
        artConfig: ConfigRegistry.artConfig
      }
    });
    verbose && log("------------- ConfigRegistry: configuring Configurables...");
    ConfigRegistry._configureAllConfigurables();
    verbose && log("------------- ConfigRegistry: Configurables configured");
    if (verbose) {
      ref3 = ConfigRegistry.configurables;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        ref4 = ref3[j], name = ref4.name, config = ref4.config;
        log((
          obj1 = {},
          obj1["" + name] = config,
          obj1
        ));
      }
    }
    return verbose && log("------------- ConfigRegistry: done");
  };

  ConfigRegistry.resetCurrentConfig = function() {
    var k, ref1, results, v;
    ref1 = ConfigRegistry.artConfig;
    results = [];
    for (k in ref1) {
      v = ref1[k];
      results.push(delete ConfigRegistry.artConfig[k]);
    }
    return results;
  };

  ConfigRegistry.reload = function() {
    return ConfigRegistry.configure(ConfigRegistry.configureOptions);
  };

  ConfigRegistry.getExternalEnvironment = function(env, queryString) {
    var artConfig, artConfigName, e, externalEnvironment, ref1, ref2, ref3;
    if (env == null) {
      env = (ref1 = global.process) != null ? ref1.env : void 0;
    }
    if (queryString == null) {
      queryString = (ref2 = global.location) != null ? ref2.search : void 0;
    }
    ref3 = externalEnvironment = env || parseQuery(queryString) || {}, artConfig = ref3.artConfig, artConfigName = ref3.artConfigName;
    artConfig = (function() {
      if (isPlainObject(artConfig)) {
        return artConfig;
      } else if (isString(artConfig)) {
        try {
          return JSON.parse(artConfig);
        } catch (error) {
          e = error;
          log.error("\nInvalid 'artConfig' from externalEnvironment. Must be valid JSON.\n\n" + (formattedInspect({
            externalEnvironment: externalEnvironment
          })) + "\n\nartConfig: " + (formattedInspect(artConfig)) + "\n\nerror: " + e + "\n");
          return null;
        }
      }
    })();
    return {
      artConfig: artConfig,
      artConfigName: artConfigName
    };
  };


  /*
  normalized:
    map standard aliases (dev and prod)
    upperCamelCase
   */

  ConfigRegistry.normalizeArtConfigName = function(artConfigName) {
    switch (artConfigName) {
      case "dev":
        return "Development";
      case "prod":
        return "Production";
      default:
        return artConfigName && upperCamelCase(artConfigName);
    }
  };

  ConfigRegistry._configureAllConfigurables = function() {
    var configurable, i, j, len, len1, ref1, ref2, results;
    ref1 = this.configurables;
    for (i = 0, len = ref1.length; i < len; i++) {
      configurable = ref1[i];
      configurable.configure(this.artConfig);
    }
    ref2 = this.configurables;
    results = [];
    for (j = 0, len1 = ref2.length; j < len1; j++) {
      configurable = ref2[j];
      results.push(configurable.configured());
    }
    return results;
  };

  return ConfigRegistry;

})(BaseObject));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports) {


/*
A core set of status-codes that code can reason about easily.

Goal:

  Minimal set of codes so Clients can reason about network requests in a
  consistant way.

Strategy:

  Have a small, simple set of status codes for our programs to reason about,
  and, if necessary, allow the communication channel to return additional
  information in the form of a 'message' that humans can look at to get more
  information about any failures.

Summary:

  6 statuses:

  success:        yay!
  missing:        these are not the droids you are looking for
  clientFailure:  fix client code or user inputs
  serverFailure:  fix server code
  networkFailure: retry when network is working
  failure:        boo! Unknown failure type

Automatic actions the Client can take on behalf of the user:

  status:
    missing:
      alert "The resoure is not available."

  failureTypes:
    network:
      automatic retries
      test a known-good URL to validate if there is any network connection at all
      alert "Please check your network connection."

    client:
      assuming the client is bug-free, ask the user to fix their submission (Ex: wrong password)
      alert "Yikes! That's not quite right. Please try again."

    server:
      alert "Ooops! We're sorry, but something went wrong on our servers.
        We'll fix it ASAP! In the mean time, how about some tea?"

Why not HTTP Status codes?

  1) They cover so much, most of which automatic code cannot do anything about
  other than report an error, possibly to be viewed by a human later.

  2) there is no HTTP status code for network failure.

  3) 404 isn't really a client-error or a server-error, it's its own thing: status: missing

    By definition:
      a client-error means there is something the client can do to fix it.
      a server-error means there is something the server can do to fix it.

    Unless the 404-response itself was a bug, 404 fits in neither of those categories.

    Example: If the client requests a resource once and it works, then
    fires the exact same request again and the resource is now 404, it's not the client's
    fault.

Note, these status-codes are used at the core of other Art Libs:

  ArtFlux
  ArtEry
  Art.Foundation.RestClient
 */
var CommunicationStatus;

module.exports = CommunicationStatus = (function() {
  function CommunicationStatus() {}


  /*
  status: success
  
  * An unqualified success.
  * I guess it could be qualified, with additional information in another field,
    but the 'expected' data should be present.
   */

  CommunicationStatus.success = "success";


  /*
  status: pending
  
  * The request is proceeding.
  * No errors so far.
   */

  CommunicationStatus.pending = "pending";


  /*
  status: missing
  
  * The request was properly formatted.
  * There were no network errors.
  * There were no server errors.
  * The only problem is the server could not find the requested resource.
   */

  CommunicationStatus.missing = "missing";


  /*
  status: failure
  
  * catch-all failure
   */

  CommunicationStatus.failure = "failure";


  /*
  OUT: true if status is a valid status-string
   */

  CommunicationStatus.validStatus = function(status) {
    return CommunicationStatus[status] === status;
  };

  CommunicationStatus.networkFailure = "networkFailure";

  CommunicationStatus.clientFailure = "clientFailure";

  CommunicationStatus.serverFailure = "serverFailure";

  CommunicationStatus.decodeHttpStatus = function(httpStatus) {
    var ft, httpStatusCategory;
    if (httpStatus == null) {
      return {
        status: CommunicationStatus.networkFailure,
        message: "network failure"
      };
    }
    httpStatusCategory = httpStatus / 100 | 0;
    if (httpStatus === 404) {
      return {
        status: CommunicationStatus.missing,
        httpStatus: httpStatus
      };
    }
    if (httpStatusCategory === 2) {
      return {
        status: CommunicationStatus.success,
        httpStatus: httpStatus
      };
    }
    return {
      status: ft = (function() {
        switch (httpStatusCategory) {
          case 4:
            return this.clientFailure;
          case 5:
            return this.serverFailure;
          default:
            return this.failure;
        }
      }).call(CommunicationStatus),
      httpStatus: httpStatus,
      message: ft + " (" + httpStatus + ")"
    };
  };

  return CommunicationStatus;

})();


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ObjectTreeFactory, compactFlatten, fastBind, isFunction, mergeIntoBasic, ref, upperCamelCase;

ref = __webpack_require__(56), compactFlatten = ref.compactFlatten, upperCamelCase = ref.upperCamelCase;

mergeIntoBasic = function(into, source) {
  var k, v;
  for (k in source) {
    v = source[k];
    into[k] = v;
  }
  return into;
};

isFunction = __webpack_require__(6).isFunction;

fastBind = __webpack_require__(42).fastBind;

module.exports = ObjectTreeFactory = (function() {
  var compactFlattenObjectTreeNodeNames, deepArgsProcessing, nodeNameRegexp, preprocessElementBasic;

  function ObjectTreeFactory() {}

  deepArgsProcessing = function(array, children) {
    var el, i, len;
    for (i = 0, len = array.length; i < len; i++) {
      el = array[i];
      if (el) {
        if (el.constructor === Array) {
          deepArgsProcessing(el, children);
        } else {
          children.push(el);
        }
      }
    }
    return null;
  };


  /*
  IN:
    options:
      mergePropsInto: (props, ...) ->
        function to merge arguments 1 on into props
        default: mergeIntoBasic
  
      inspectedName: string
        for introspection:
          Factory.getName() == inspectedName
  
      class: a class
        if specified, additioanl properties will be set on the Factory function:
          Factory.class = class
          Factory._name = class.getName() + "Factory"
  
          all concrete class-methods are made available in the Factory
          (see BaseObject.abstractClass)
  
      bind: string or array of strings
        NODE: class must be set
        list of method-names to bind from class onto the factory
  
      preprocessElement: (element) -> element
        can do custom preprocssing of each argument to the factory.
  
  
        defualt: preprocessElementBasic (no-op)
    nodeFactory: ->
      IN:
        props:    plain object mapping props to prop-values
        children: flat, compacted array of children nodes
      OUT:
        node
  
  OUT: objectTreeFactory = ->
    IN:
      Arguments are compacted and flattened
      The resulting list of arguments can be any combination of:
        plainObjects for props (merged in the order they appear)
        other objects which become the 'children'
  
    OUT:
      object-tree-node generated by the nodeFactory
   */

  preprocessElementBasic = function(a) {
    return a;
  };

  ObjectTreeFactory.createObjectTreeFactory = function(options, nodeFactory) {
    var Factory, abstractClass, bindList, i, inspectedName, k, klass, len, mergePropsInto, preprocessElement, v;
    if (!nodeFactory) {
      nodeFactory = options;
      options = {};
    }
    mergePropsInto = options.mergePropsInto, inspectedName = options.inspectedName, preprocessElement = options.preprocessElement;
    mergePropsInto || (mergePropsInto = mergeIntoBasic);
    preprocessElement || (preprocessElement = preprocessElementBasic);
    Factory = function() {
      var children, el, i, len, oneProps, props;
      oneProps = null;
      props = null;
      children = [];
      for (i = 0, len = arguments.length; i < len; i++) {
        el = arguments[i];
        if (el = preprocessElement(el)) {
          switch (el.constructor) {
            case Object:
              if (oneProps) {
                props = {};
                mergePropsInto(props, oneProps);
                oneProps = null;
              }
              if (props) {
                mergePropsInto(props, el);
              } else {
                oneProps = el;
              }
              break;
            case Array:
              deepArgsProcessing(el, children);
              break;
            default:
              children.push(el);
          }
        }
      }
      props || (props = oneProps || {});
      return nodeFactory(props, children);
    };
    if (klass = options["class"]) {
      Factory["class"] = klass;
      klass.Factory = Factory;
      abstractClass = klass.getAbstractClass();
      bindList = compactFlatten([
        (function() {
          var results;
          results = [];
          for (k in klass) {
            v = klass[k];
            if (!abstractClass[k] && isFunction(v)) {
              results.push(k);
            }
          }
          return results;
        })(), options.bind
      ]);
      inspectedName || (inspectedName = klass.getName() + "Factory");
      for (i = 0, len = bindList.length; i < len; i++) {
        k = bindList[i];
        Factory[k] = fastBind(klass[k], klass);
      }
    }
    if (inspectedName) {
      Factory._name = inspectedName;
    }
    Factory.inspect = function() {
      return "<" + (inspectedName || 'ObjectTreeFactory') + ">";
    };
    return Factory;
  };


  /*
  IN:
    list: a string or abitrary structure of arrays, nulls and strings
      each string is split into tokens and each token is used as the nodeTypeName to create a Tree-factory
    nodeFactory: (nodeTypeName, props, children) -> node
      IN:
        nodeTypeName: node-type name
        props:    plain object mapping props to prop-values
        children: flat, compacted array of children nodes
      OUT:
        node
  OUT:
    map from nodeNames (upperCamelCased) to the factories returned from createObjectTreeFactory
  
  TODO:
    PERFORMANCE TEST:
      createObjectTreeFactoriesFromFactories
      vs
      createObjectTreeFactoriesFromFactoryFactories
  
      The latter is probably faster. It is also more powerful and generally cleaner.
   */

  ObjectTreeFactory.createObjectTreeFactories = function(options, list, nodeFactory) {
    var ref1;
    if (!nodeFactory) {
      ref1 = [options, list], list = ref1[0], nodeFactory = ref1[1];
      options = {};
    }
    if (nodeFactory.length === 1) {
      return ObjectTreeFactory._createObjectTreeFactoriesFromFactoryFactories(options, list, nodeFactory);
    } else {
      return ObjectTreeFactory._createObjectTreeFactoriesFromFactories(options, list, nodeFactory);
    }
  };

  ObjectTreeFactory._createObjectTreeFactoriesFromFactories = function(options, list, nodeFactory) {
    var fn, i, len, nodeTypeName, out, ref1, suffix;
    suffix = options.suffix || '';
    out = {};
    ref1 = compactFlattenObjectTreeNodeNames(list);
    fn = function(nodeTypeName) {
      options.inspectedName = nodeTypeName;
      return out[upperCamelCase(nodeTypeName) + suffix] = ObjectTreeFactory.createObjectTreeFactory(options, function(props, children) {
        return nodeFactory(nodeTypeName, props, children);
      });
    };
    for (i = 0, len = ref1.length; i < len; i++) {
      nodeTypeName = ref1[i];
      fn(nodeTypeName);
    }
    return out;
  };

  nodeNameRegexp = /[a-z0-9_]+/ig;

  ObjectTreeFactory._compactFlattenObjectTreeNodeNames = compactFlattenObjectTreeNodeNames = function(list) {
    var i, len, out, ref1, str;
    if (typeof list === "string") {
      return list.match(nodeNameRegexp);
    }
    out = [];
    ref1 = compactFlatten(list);
    for (i = 0, len = ref1.length; i < len; i++) {
      str = ref1[i];
      out = out.concat(str.match(nodeNameRegexp));
    }
    return out;
  };

  ObjectTreeFactory._createObjectTreeFactoriesFromFactoryFactories = function(options, list, nodeFactoryFactory) {
    var i, len, name, nodeFactory, nodeTypeName, out, ref1, suffix;
    suffix = options.suffix || '';
    out = {};
    ref1 = compactFlattenObjectTreeNodeNames(list);
    for (i = 0, len = ref1.length; i < len; i++) {
      nodeTypeName = ref1[i];
      nodeFactory = nodeFactoryFactory(nodeTypeName);
      name = upperCamelCase(nodeTypeName) + suffix;
      options.inspectedName = name;
      out[name] = ObjectTreeFactory.createObjectTreeFactory(options, nodeFactory);
    }
    return out;
  };

  return ObjectTreeFactory;

})();


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98).includeInNamespace(__webpack_require__(193)).addModules({
  Analytics: __webpack_require__(183),
  AsyncLocalStorage: __webpack_require__(93),
  BatchLoader: __webpack_require__(187),
  CommunicationStatus: __webpack_require__(51),
  DateFormat: __webpack_require__(58),
  Epoch: __webpack_require__(188),
  GlobalCounts: __webpack_require__(94),
  InstanceFunctionBindingMixin: __webpack_require__(189),
  JsonStore: __webpack_require__(190),
  ObjectTreeFactory: __webpack_require__(52),
  ProgressAdapter: __webpack_require__(95),
  RestClient: __webpack_require__(191),
  SingleObjectTransaction: __webpack_require__(96),
  Stat: __webpack_require__(192),
  Transaction: __webpack_require__(194),
  Validator: __webpack_require__(195),
  WebWorker: __webpack_require__(30),
  WorkerRpc: __webpack_require__(97)
});

__webpack_require__(92);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var BabelBridge, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(31);

module.exports = Neptune.BabelBridge || Neptune.addNamespace('BabelBridge', BabelBridge = (function(superClass) {
  extend(BabelBridge, superClass);

  function BabelBridge() {
    return BabelBridge.__super__.constructor.apply(this, arguments);
  }

  return BabelBridge;

})(Neptune.Base));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(31);

module.exports = Neptune.CaffeineScript || Neptune.addNamespace('CaffeineScript', CaffeineScript = (function(superClass) {
  extend(CaffeineScript, superClass);

  function CaffeineScript() {
    return CaffeineScript.__super__.constructor.apply(this, arguments);
  }

  return CaffeineScript;

})(Neptune.Base));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(207);


/***/ }),
/* 57 */
/***/ (function(module, exports) {

var Types;

module.exports = Types = (function() {
  var _functionsPrototype, hasOwnProperties, hasProperties, isArray, isClass, isDirectPrototypeOf, isExtendedClass, isFunction, isJsonAtomicType, isNonNegativeInt, isNumber, isObject, isPlainObject, isString;

  function Types() {}

  Types.isPromise = function(obj) {
    return isFunction(obj != null ? obj.then : void 0);
  };

  Types.isRegExp = function(obj) {
    return obj instanceof RegExp;
  };

  Types.isNumber = isNumber = function(obj) {
    return typeof obj === "number";
  };

  Types.isDate = function(obj) {
    return obj && obj.constructor === Date;
  };

  Types.isString = isString = function(obj) {
    return typeof obj === "string";
  };

  Types.isFunction = isFunction = function(obj) {
    return typeof obj === "function";
  };

  Types.isEmptyObject = function(obj) {
    return Object.keys(obj).length === 0;
  };

  Types.isBoolean = function(obj) {
    return obj === true || obj === false;
  };

  _functionsPrototype = Object.getPrototypeOf(function() {});

  Types.isClass = isClass = function(obj) {
    var prototype;
    return !!(typeof obj === "function" && ((typeof obj.__super__ === "object") || ((typeof (prototype = Object.getPrototypeOf(obj)) === "function") && prototype !== _functionsPrototype) || (hasOwnProperties(obj)) || (obj.prototype && hasProperties(obj.prototype))));
  };

  Types.isExtendedClass = isExtendedClass = function(obj) {
    var prototype;
    return !!(typeof obj === "function" && ((typeof obj.__super__ === "object") || ((typeof (prototype = Object.getPrototypeOf(obj)) === "function") && prototype !== _functionsPrototype)));
  };

  Types.isArray = isArray = Array.isArray;

  Types.isPlainArray = isArray;

  Types.isNonNegativeInt = isNonNegativeInt = function(x) {
    return (x | 0 === x) && x >= 0;
  };

  Types.isArrayIterable = function(source) {
    return !!(source && isNonNegativeInt(source.length));
  };

  Types.isJsonAtomicType = isJsonAtomicType = function(a) {
    return isString(a) || isNumber(a) || a === true || a === false || a === null;
  };

  Types.isJsonType = function(a) {
    return isJsonAtomicType(a) || isPlainObject(a) || isArray(a);
  };

  Types.isObject = isObject = function(obj) {
    return !!obj && typeof obj === "object" && !isArray(obj);
  };

  Types.isDirectPrototypeOf = isDirectPrototypeOf = function(o, prototype) {
    return !isFunction(o) && prototype.constructor === o.constructor;
  };


  /*
  NOTE:
    getSuper doesn't work in CoffeeScript classes objects, but it does on ES6 classes.
    getSuper does work on CoffeeScript class instance objects.
  
  All about getSuper in ES6 land:
  
    class A {}
    class B extends A {}
    class C extends B {}
  
    a = new A
    b = new B
    c = new C
  
    getSuper(B) == A
    getSuper(C) == B
  
    getSuper(A.prototype) == Object.prototype
    getSuper(B.prototype) == A.prototype
    getSuper(C.prototype) == B.prototype
  
    getSuper(b) == A.prototype
    getSuper(c) == B.prototype
  
  prototype map:
  
  KEY:
    <->
       <-- .constructor
       --> .prototype
    ^  Object.prototypeOf
  
  MAP:
    A <-> aPrototype
  
    ^     ^     ^
    |     |     a
    |     |
  
    B <-> bPrototype
  
    ^     ^     ^
    |     |     b
    |     |
  
    C <-> cPrototype
  
                ^
                c
  
  Definition of super:
  
    if instance then prototype's prototype
    else prototype
   */

  Types.getSuper = function(o) {
    var _super;
    if (!((typeof o === "object") || (typeof o === "function"))) {
      throw new Error("getSuper expecting an object");
    }
    _super = Object.getPrototypeOf(o);
    if (isDirectPrototypeOf(o, _super)) {
      _super = Object.getPrototypeOf(_super);
    }
    return _super;
  };

  Types.isPlainObject = isPlainObject = function(v) {
    return !!v && null === Object.getPrototypeOf(Object.getPrototypeOf(v));
  };

  Types.hasProperties = hasProperties = function(o) {
    var k;
    for (k in o) {
      return true;
    }
    return false;
  };

  Types.hasOwnProperties = hasOwnProperties = function(o) {
    var k;
    for (k in o) {
      if (o.hasOwnProperty(k)) {
        return true;
      }
    }
    return false;
  };

  return Types;

})();


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/*
 * http://blog.stevenlevithan.com/archives/date-time-format
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    timezoneClip = /[^-+\dA-Z]/g,
    pad = function (val, len) {
      val = String(val);
      len = len || 2;
      while (val.length < len) val = "0" + val;
      return val;
    };

  // Regexes and supporting functions are cached through closure
  return function (date, mask, utc) {
    var dF = dateFormat;

    // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
    if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
      mask = date;
      date = undefined;
    }

    // Passing date through Date applies Date.parse, if necessary
    date = date ? new Date(date) : new Date;
    if (isNaN(date)) throw SyntaxError("invalid date");

    mask = String(dF.masks[mask] || mask || dF.masks["default"]);

    // Allow setting the utc argument via the mask
    if (mask.slice(0, 4) == "UTC:") {
      mask = mask.slice(4);
      utc = true;
    }

    var _ = utc ? "getUTC" : "get",
      d = date[_ + "Date"](),
      D = date[_ + "Day"](),
      m = date[_ + "Month"](),
      y = date[_ + "FullYear"](),
      H = date[_ + "Hours"](),
      M = date[_ + "Minutes"](),
      s = date[_ + "Seconds"](),
      L = date[_ + "Milliseconds"](),
      o = utc ? 0 : date.getTimezoneOffset(),
      flags = {
        d:    d,
        dd:   pad(d),
        ddd:  dF.i18n.dayNames[D],
        dddd: dF.i18n.dayNames[D + 7],
        m:    m + 1,
        mm:   pad(m + 1),
        mmm:  dF.i18n.monthNames[m],
        mmmm: dF.i18n.monthNames[m + 12],
        yy:   String(y).slice(2),
        yyyy: y,
        h:    H % 12 || 12,
        hh:   pad(H % 12 || 12),
        H:    H,
        HH:   pad(H),
        M:    M,
        MM:   pad(M),
        s:    s,
        ss:   pad(s),
        l:    pad(L, 3),
        L:    pad(L > 99 ? Math.round(L / 10) : L),
        t:    H < 12 ? "a"  : "p",
        tt:   H < 12 ? "am" : "pm",
        T:    H < 12 ? "A"  : "P",
        TT:   H < 12 ? "AM" : "PM",
        Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
        o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
        S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
      };

    return mask.replace(token, function ($0) {
      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
    });
  };
}();

// Some common format strings
dateFormat.masks = {
  "default":      "ddd mmm dd yyyy HH:MM:ss",
  shortDate:      "m/d/yy",
  mediumDate:     "mmm d, yyyy",
  longDate:       "mmmm d, yyyy",
  fullDate:       "dddd, mmmm d, yyyy",
  shortTime:      "h:MM TT",
  mediumTime:     "h:MM:ss TT",
  longTime:       "h:MM:ss TT Z",
  isoDate:        "yyyy-mm-dd",
  isoTime:        "HH:MM:ss",
  isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
  dayNames: [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ],
  monthNames: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
};

// For convenience...
// Date.prototype.format = function (mask, utc) {
//   return dateFormat(this, mask, utc);
// };

module.exports = {dateFormat: dateFormat};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    SemanticTree = __webpack_require__(8),
    Nodes,
    isString,
    Error,
    inspect,
    isFunction,
    RootStn;
  ({ Nodes, isString, Error, inspect, isFunction, RootStn } = Caf.i(
    ["Nodes", "isString", "Error", "inspect", "isFunction", "RootStn"],
    [ArtFoundation, BabelBridge, SemanticTree, global]
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
        return Caf.ee(this.matches, undefined, (match, k, into, brk) => {
          let _ret;
          return (_ret = Caf.isF(match.getImplicitArray) &&
            match.getImplicitArray()) &&
            (brk(), _ret);
        });
      };
      this.prototype.getMatchStns = function() {
        return Caf.e(this.matches, [], (m, k, into) => {
          if (m = Caf.isF(m.getStn) && m.getStn()) {
            into.push(m);
          }
        });
      };
      this.prototype.getStnFactory = function() {
        if (isString(this.stnFactory) && !SemanticTree[this.stnFactory]) {
          throw new Error(`stnFactory not found: ${inspect(this.stnFactory)}`);
        }
        return SemanticTree[this.stnFactory] || this.stnFactory;
      };
      this.prototype.getStnChildren = function(left) {
        return this.stnChildren
          ? isFunction(this.stnChildren) ? this.stnChildren() : this.stnChildren
          : Caf.e(this.nonStnExtensionMatches, [], (m, k, into) => {
              if (m = m.getStn(left)) {
                into.push(m);
              }
            });
      };
      this.getter({
        isStnExtension: function() {
          let base;
          return this.stnExtension ||
            Caf.exists(base = this.presentMatches[0]) && base.isStnExtension;
        },
        stnExtensionMatches: function() {
          return Caf.e(this.presentMatches, [], (m, k, into) => {
            if (m.getStn && m.isStnExtension) {
              into.push(m);
            }
          });
        },
        nonStnExtensionMatches: function() {
          return Caf.e(this.presentMatches, [], (m, k, into) => {
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
        Caf.e(this.stnExtensionMatches, undefined, (extension, k, into) => {
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    CafParseNodeBaseClass = __webpack_require__(59),
    Parser,
    isFunction;
  ({ Parser, isFunction } = Caf.i(["Parser", "isFunction"], [
    ArtFoundation,
    BabelBridge,
    CafParseNodeBaseClass,
    global
  ]));
  return CaffeineScriptParser = Caf.defClass(
    class CaffeineScriptParser extends Parser {},
    function(CaffeineScriptParser, classSuper, instanceSuper) {
      let Rules = __webpack_require__(107);
      this.nodeBaseClass = CafParseNodeBaseClass;
      Caf.e(Rules.modules, undefined, (mod, k, into) => {
        if (isFunction(mod)) {
          mod.call(this);
        } else {
          this.rule(mod);
        }
      });
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    SemanticTree,
    ValueBaseCaptureStn = __webpack_require__(23),
    Error;
  ({ Error } = Caf.i(["Error"], [ArtFoundation, global]));
  SemanticTree = __webpack_require__(14);
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
        let identierString, base;
        return this.value && this.key.isIdentifier
          ? (identierString = this.key.toJs()).match(/['"`]/)
              ? `${this.value.toJsExpressionWithParens()}[${identierString}]`
              : `${this.value.toJsExpressionWithParens({
                  dotBase: true
                })}.${identierString}`
          : `${Caf.exists(base = this.value) &&
              base.toJsExpressionWithParens() ||
              ""}[${this.key.toJsExpression()}]`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BinaryOperatorStn = __webpack_require__(35),
    IdentifierStn = __webpack_require__(36),
    ReferenceStn = __webpack_require__(69),
    ArrayStn = __webpack_require__(34),
    SemanticTree,
    supportedOperatorsRegExp,
    ValueBaseCaptureStn = __webpack_require__(23);
  BinaryOperatorStn;
  IdentifierStn;
  ReferenceStn;
  ArrayStn;
  SemanticTree = __webpack_require__(14);
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
        let base;
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          Caf.exists(base = this.lValue) && base.explicitIdentifier
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
          ? `${this.lValue.toJs()} ${this.operator}= ${this.rValue.toJsExpression()}`
          : `${this.lValue.toJsExpression()} ${this.operator} ${this.lValue.toJs()} = ${this.rValue.toJsExpression()}`;
      };
      this.prototype.toJsParenExpression = function() {
        return `(${this.toJs()})`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    FunctionDefinitionArgsStn = __webpack_require__(21),
    BaseStn = __webpack_require__(3);
  FunctionDefinitionArgsStn;
  return FunctionDefinitionArgStn = Caf.defClass(
    class FunctionDefinitionArgStn extends BaseStn {
      constructor(props, children) {
        super(...arguments);
        this.assignThisProperty = props.assignThisProperty;
        this.rest = props.rest;
        this.identifier = children[0];
        this.defaultValue = children[1];
      }
    },
    function(FunctionDefinitionArgStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.getter({
        argumentName: function() {
          return this.identifier.name;
        }
      });
      this.prototype.getFunctionPreBodyStatementsJs = function() {
        return this.assignThisProperty
          ? `this.${this.identifier.toJs()} = ${this.identifier.toJs()}`
          : undefined;
      };
      this.prototype.toJs = function() {
        return `${this.rest
          ? "..."
          : ""}${this.identifier.toJs()}${this.defaultValue
          ? ` = ${this.defaultValue.toJs()}`
          : ""}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    FunctionDefinitionArgsStn = __webpack_require__(21),
    StatementsStn = __webpack_require__(17),
    ScopeStnMixin = __webpack_require__(16),
    BaseStn = __webpack_require__(3),
    compactFlatten;
  ({ compactFlatten } = Caf.i(["compactFlatten"], [ArtFoundation, global]));
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
          let base;
          return Caf.exists(base = this.arguments) && base.argumentNames || [];
        }
      });
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
        body = statements.length > 0 ? `{${statements.join("; ")};}` : "{}";
        return bound
          ? `${argsDef} => ${body}`
          : `${isConstructor ? "constructor" : "function"}${argsDef} ${body}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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
            : undefined, `let ${identifiers.join(", ")}`)
        : identifier
            ? `let ${identifier}`
            : (() => {
                throw new Error("LetStn needs props!");
              })();
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    legalUnquotedPropName,
    escapePropName,
    BaseStn = __webpack_require__(3),
    escapeJavascriptString,
    Error;
  ({ escapeJavascriptString, Error } = Caf.i(
    ["escapeJavascriptString", "Error"],
    [ArtFoundation, global]
  ));
  legalUnquotedPropName = /^(0|[1-9a-z_][0-9_a-z]*)$/i;
  escapePropName = function(rawPropName) {
    return rawPropName.match(legalUnquotedPropName)
      ? rawPropName
      : escapeJavascriptString(rawPropName);
  };
  return ObjectPropNameStn = Caf.defClass(
    class ObjectPropNameStn extends BaseStn {
      constructor() {
        let nameStn, base;
        super(...arguments);
        [nameStn] = this.children;
        (base = this.props).value ||
          (base.value = nameStn
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
              ? `[${str}]`
              : (!(nameStn.type === "String" || nameStn.type === "Identifer")
                  ? (() => {
                      throw new Error(
                        `internal error - should be a StringStn: ${nameStn.type}`
                      );
                    })()
                  : undefined, str))
          : escapePropName(this.props.value);
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return ObjectPropValueStn = Caf.defClass(
    class ObjectPropValueStn extends BaseStn {},
    function(ObjectPropValueStn, classSuper, instanceSuper) {
      this.getter({ isObject: true });
      this.prototype.toJs = function() {
        let prop, value;
        [prop, value] = this.children;
        return `${prop.toJs()}: ${value.toJsExpression()}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    ArrayStn,
    BaseStn = __webpack_require__(3);
  ArrayStn = __webpack_require__(34);
  return ObjectStn = Caf.defClass(class ObjectStn extends BaseStn {}, function(
    ObjectStn,
    classSuper,
    instanceSuper
  ) {
    let splitObjectsAtSameProps;
    this.prototype.toJs = function() {
      return `{${Caf
        .e(this.children, [], (c, k, into) => {
          into.push(c.toJs());
        })
        .join(", ")}}`;
    };
    this.prototype.toJsStatement = function() {
      return `(${this.toJs()})`;
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
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
          let base;
          return Caf.exists(base = this.labeledChildren.identifier) &&
            base.explicitIdentifier;
        }
      });
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        let base;
        return Caf.exists(base = this.props.identifierHandle) &&
          base.identifier ||
          this.labeledChildren.identifier.toJs();
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    Lib = __webpack_require__(15),
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
    [ArtFoundation, Lib, global]
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return ThisStn = Caf.defClass(class ThisStn extends BaseStn {}, function(
    ThisStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.needsParens = false;
    this.prototype.toJs = function() {
      return this.children[0] ? `this.${this.children[0].toJs()}` : "this";
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var DataUri, Promise, StandardLib, binary, isString, readAsDataURL;

StandardLib = __webpack_require__(4);

binary = __webpack_require__(12).binary;

readAsDataURL = __webpack_require__(37).readAsDataURL;

Promise = StandardLib.Promise, isString = StandardLib.isString;

module.exports = DataUri = (function() {
  var isDataUri;

  function DataUri() {}

  DataUri.isDataUri = isDataUri = function(dataString) {
    return isString(dataString) && dataString.slice(0, 5) === "data:";
  };


  /*
  IN: data can be any of
    File: HTML File object is read as ArrayBuffer
    DataURI string: if it is already a data-uri string it is just returned as a successful promise
    any type 'binary' accepts
  
  OUT:
    promise.then (dataUri) ->
    , (errorEventOrErrorObject) ->
   */

  DataUri.toDataUri = function(data) {
    if (!data) {
      throw new Error("data not set");
    }
    if (data instanceof self.File) {
      return readAsDataURL(data);
    }
    if (isDataUri(data)) {
      return Promise.resolve(data);
    }
    return binary(data).toBase64().then(function(base64) {
      return "data:image/png;base64," + base64;
    });
  };

  return DataUri;

})();


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, Binary, ClassSystem, Stream, binary,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ClassSystem = __webpack_require__(5);

Binary = __webpack_require__(38);

BaseObject = ClassSystem.BaseObject;

binary = __webpack_require__(12).binary;

module.exports = Stream = (function(superClass) {
  extend(Stream, superClass);

  Stream.stream = function(arg) {
    if (arg instanceof Stream) {
      return arg;
    } else if (arg instanceof ArrayBuffer) {
      return Stream.fromArrayBuffer(arg);
    } else if (arg instanceof Uint8Array) {
      return new Stream(arg);
    } else {
      return new Stream(binary(arg).bytes);
    }
  };

  Stream.fromArrayBuffer = function(arrayBuffer) {
    return new Stream(new Uint8Array(arrayBuffer, 0, arrayBuffer.byteLength));
  };

  function Stream(byteView) {
    this.byteView = byteView;
    this.pos = 0;
  }

  Stream.prototype.readByte = function() {
    return this.byteView[this.pos++];
  };

  Stream.prototype.readAsi = function() {
    var ret, shift, val;
    ret = 0;
    shift = 0;
    val = 128;
    while (val >= 128) {
      val = this.readByte();
      ret += (val % 128) << shift;
      shift += 7;
    }
    return ret;
  };

  Stream.prototype.uint8Array = function() {
    return this.byteView;
  };

  Stream.prototype.read = function(length) {
    var begin, end;
    begin = this.pos;
    this.pos += length;
    end = this.pos;
    return new Stream(this.byteView.subarray(begin, end));
  };

  Stream.prototype.inspect = function() {
    return "{Stream pos=" + this.pos + " byteOffset=" + this.byteView.byteOffset + " length=" + this.byteView.length + "}";
  };

  Stream.prototype.readAsiString = function() {
    return this.read(this.readAsi());
  };

  Stream.prototype.done = function() {
    return this.pos >= this.byteView.length;
  };

  Stream.getter({
    isDone: function() {
      return this.pos >= this.byteView.length;
    },
    binaryString: function() {
      return binary(this.byteView);
    },
    inspectedString: function() {
      return this.binaryString.inspectedString;
    }
  });

  Stream.prototype.toString = function() {
    return this.binaryString.toString();
  };

  return Stream;

})(BaseObject);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var base, base1, base10, base11, base2, base3, base4, base5, base6, base7, base8, base9, bound, genericSlice, ref, ref1;

bound = __webpack_require__(4).bound;

(base = Uint8Array.prototype).slice || (base.slice = genericSlice = function(start, end) {
  var i, j, length, out, outIndex, ref, ref1;
  if (end == null) {
    end = this.length;
  }
  if (start < 0) {
    start += this.length;
  }
  if (end < 0) {
    end += this.length;
  }
  start = bound(0, start, this.length);
  end = bound(0, end, this.length);
  out = new Uint8Array(length = end - start);
  outIndex = 0;
  for (i = j = ref = start, ref1 = end; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
    out[outIndex++] = this[i];
  }
  return out;
});

(base1 = Int8Array.prototype).slice || (base1.slice = genericSlice);

(base2 = Uint8Array.prototype).slice || (base2.slice = genericSlice);

(base3 = Int16Array.prototype).slice || (base3.slice = genericSlice);

(base4 = Uint16Array.prototype).slice || (base4.slice = genericSlice);

(base5 = Int32Array.prototype).slice || (base5.slice = genericSlice);

(base6 = Uint32Array.prototype).slice || (base6.slice = genericSlice);

(base7 = Float32Array.prototype).slice || (base7.slice = genericSlice);

(base8 = Float64Array.prototype).slice || (base8.slice = genericSlice);

if ((ref = self.Uint8ClampedArray) != null) {
  (base9 = ref.prototype).slice || (base9.slice = genericSlice);
}

if ((ref1 = self.CanvasPixelArray) != null) {
  (base10 = ref1.prototype).slice || (base10.slice = genericSlice);
}

(base11 = ArrayBuffer.prototype).slice || (base11.slice = function(start, end) {
  return (new Uint8Array(this)).slice(start, end).buffer;
});


/***/ }),
/* 75 */
/***/ (function(module, exports) {

var Utf8;

module.exports = Utf8 = (function() {
  function Utf8() {}

  Utf8.toBuffer = function(string) {
    return new Uint8Array(this.toArray(string));
  };

  Utf8.toArray = function(string) {
    var char, i, out, uriEncoded;
    uriEncoded = encodeURIComponent(string);
    i = 0;
    out = (function() {
      var results;
      results = [];
      while (i < uriEncoded.length) {
        char = uriEncoded.charCodeAt(i++);
        if (char === 0x25) {
          i += 2;
          results.push(parseInt(uriEncoded.substr(i - 2, 2), 16));
        } else {
          results.push(char);
        }
      }
      return results;
    })();
    return out;
  };

  Utf8.toString = function(a) {
    var error, x, y;
    if (a === void 0) {
      return "<undefined>";
    }
    if (a === null) {
      return "<null>";
    }
    try {
      if (a instanceof ArrayBuffer) {
        a = new Uint8Array(a);
      }
      return decodeURIComponent(((function() {
        var j, len, results;
        results = [];
        for (j = 0, len = a.length; j < len; j++) {
          x = a[j];
          y = x.toString(16);
          if (y.length < 2) {
            y = "0" + y;
          }
          y = "%" + y;
          results.push(y);
        }
        return results;
      })()).join(''));
    } catch (error1) {
      error = error1;
      console.warn(error.toString(), error);
      return "<" + a.length + " binary bytes>";
    }
  };

  return Utf8;

})();


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38).includeInNamespace(__webpack_require__(164)).addModules({
  BinaryString: __webpack_require__(12),
  DataUri: __webpack_require__(72),
  EncodedImage: __webpack_require__(165),
  File: __webpack_require__(37),
  Stream: __webpack_require__(73),
  TypedarraySlicePolyfill: __webpack_require__(74),
  Utf8: __webpack_require__(75),
  WriteStream: __webpack_require__(166)
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var Dom, DomElementFactories, isString;

DomElementFactories = __webpack_require__(78);

isString = __webpack_require__(4).isString;

module.exports = Dom = (function() {
  function Dom() {}

  Dom.createElementFromHtml = function(html) {
    var div;
    div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  };

  Dom.createDomElementFactories = DomElementFactories.createDomElementFactories;

  Dom.getDevicePixelRatio = function() {
    return ((self.devicePixelRatio != null) && self.devicePixelRatio) || 1;
  };

  Dom.zIndex = function(target, setZIndex) {
    var element, value;
    if (!(target instanceof HTMLElement)) {
      target = document.getElementById(target);
    }
    if (setZIndex !== void 0) {
      return target.style.zIndex = setZIndex;
    }
    element = target;
    while (element && element !== document) {
      switch (element.style.position) {
        case "absolute":
        case "relative":
        case "fixed":
          value = parseInt(element.style.zIndex);
          if (value < 0 || value > 0) {
            return value;
          }
      }
      element = element.parentElement;
    }
    return 0;
  };

  Dom.domElementOffset = function(element) {
    var body, box, clientLeft, clientTop, documentElement, left, scrollLeft, scrollTop, top;
    box = element.getBoundingClientRect();
    body = document.body, documentElement = document.documentElement;
    scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
    scrollLeft = window.pageXOffset || documentElement.scrollLeft || body.scrollLeft;
    clientTop = documentElement.clientTop || body.clientTop || 0;
    clientLeft = documentElement.clientLeft || body.clientLeft || 0;
    top = box.top + scrollTop - clientTop;
    left = box.left + scrollLeft - clientLeft;
    return {
      top: Math.round(top),
      left: Math.round(left)
    };
  };

  return Dom;

})();


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var DomElementFactories, supportLibs,
  slice = [].slice;

supportLibs = [Neptune.NeptuneLib, __webpack_require__(47), __webpack_require__(52)];


/*
DomElementFactories allows for Art.React-style creation of DOM elements.

 * HOW TO LOAD:
 * -- IF: you are already using Art.Foundation
Foundation = require 'art-foundation'
{DomElementFactories} = Foundation.Browser

 * -- IF: You have the Art.Foundation NPM but only want DomElementFactories:
DomElementFactories = require 'art-foundation/dom_element_factories'

 * -- IF: You just have dom_element_factories.js
 * first, load it prior via a <script> tag, then:
 * window.DomElementFactories will be set.

Usage:

{Div, Span, B, Em} = DomElementFactories

mySharedTextStyle =
  style:
    fontSize: "16pt"
    color: "#444"
    fontFamily: "Times"

Div
  class: "foo"
  id:    "123"

Span
  class: "dude"
  "This is some really"
  B "bold"
  "text."
  "Also, here is some"
  Em "emphasized"
  "text."

Span mySharedTextStyle,
  internalHTML: "Or you can do <b>this</b> and <em>this</em>."

Div mySharedTextStyle,
  style:
    bottom:          0
    height:          "50px"
    left:            "100px"
    right:           "100px"
    position:        "fixed"
    backgroundColor: "white"
    textAlign:       "center"
  "Styles are easy, too."

VERSION HISTORY:
  1.1.1 - added H2-H6
  1.1.0 - new-lines in text-children become <BR> tags
  1.0.0 - initial
 */

module.exports = DomElementFactories = (function() {
  var isPlainObject, isString, j, k, len, mergeInto, ref, supportLib, v;

  function DomElementFactories() {}

  DomElementFactories.version = "1.1.1";

  DomElementFactories.src = "https://github.com/imikimi/art-foundation";

  for (j = 0, len = supportLibs.length; j < len; j++) {
    supportLib = supportLibs[j];
    for (k in supportLib) {
      v = supportLib[k];
      if (supportLib.hasOwnProperty(k) && k.match(/^[^_]/)) {
        DomElementFactories[k] = v;
      }
    }
  }

  DomElementFactories.isString = isString = function(obj) {
    return typeof obj === "string";
  };

  DomElementFactories.isPlainObject = isPlainObject = function(obj) {
    return obj.constructor === Object;
  };

  DomElementFactories.mergeInto = mergeInto = function(into, source) {
    if (into == null) {
      into = {};
    }
    for (k in source) {
      v = source[k];
      into[k] = v;
    }
    return into;
  };

  DomElementFactories.setDomElementProp = function(element, prop, value, oldValue) {
    var clearStyle, setStyle, style;
    switch (prop) {
      case "class":
        return element.className = value || "";
      case "id":
        return element.id = value || "";
      case "innerHTML":
        return element.innerHTML = value || "";
      case "on":
        if (!isPlainObject(value)) {
          throw new Error("object expected for 'on' property");
        }
        setStyle = function(eventType, newEventListener) {
          return element.addEventListener(eventType, newEventListener);
        };
        clearStyle = function(eventType, oldEventListener) {
          return element.removeEventListner(eventType, oldEventListener);
        };
        return DomElementFactories.objectDiff(value, oldValue, setStyle, clearStyle, setStyle);
      case "style":
        if (!isPlainObject(value)) {
          throw new Error("object expected for 'style' property");
        }
        style = element.style;
        setStyle = function(k, v) {
          return style[k] = v;
        };
        clearStyle = function(k) {
          return style[k] = "";
        };
        return DomElementFactories.objectDiff(value, oldValue, setStyle, clearStyle, setStyle);
      default:
        return element.setAttribute(prop, value);
    }
  };

  DomElementFactories.setDomElementProps = function(element, props) {
    var results;
    results = [];
    for (k in props) {
      v = props[k];
      results.push(this.setDomElementProp(element, k, v));
    }
    return results;
  };

  DomElementFactories.setDomElementChildren = function(element, children) {
    var child, i, l, len1, message, ref, ref1, ref2, results, text;
    results = [];
    for (l = 0, len1 = children.length; l < len1; l++) {
      child = children[l];
      if (isString(child)) {
        results.push((function() {
          var len2, m, ref, results1;
          ref = child.split("\n");
          results1 = [];
          for (i = m = 0, len2 = ref.length; m < len2; i = ++m) {
            text = ref[i];
            if (i > 0) {
              element.appendChild(document.createElement("br"));
            }
            results1.push(element.appendChild(document.createTextNode(text)));
          }
          return results1;
        })());
      } else {
        if (!(child instanceof Node)) {
          message = "DomElementFactory:" + nodeName + ": Child is not a string or instance of Node. Child: " + child;
          (typeof Neptune !== "undefined" && Neptune !== null ? (ref = Neptune.Art) != null ? (ref1 = ref.Foundation) != null ? (ref2 = ref1.log) != null ? typeof ref2.error === "function" ? ref2.error(message, child) : void 0 : void 0 : void 0 : void 0 : void 0) || console.log(message, child);
          throw new Error(message);
        }
        results.push(element.appendChild(child));
      }
    }
    return results;
  };


  /*
  IN: any combination of arrays and strings
  OUT: All element-names found in all strings are used to generate dom-element-factory-functions
    for elements with those names.
    The output is a plain Object where they keys are the upperCamelCase version of the element-names
    passed in. The values are the element-factories.
   */

  DomElementFactories.createDomElementFactories = function() {
    var list;
    list = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return DomElementFactories.createObjectTreeFactories({
      mergePropsInto: function(into, source) {
        var results;
        results = [];
        for (k in source) {
          v = source[k];
          results.push(into[k] = k === "style" ? mergeInto(into[k], v) : v);
        }
        return results;
      }
    }, list, function(nodeName, props, children) {
      var element;
      element = document.createElement(nodeName);
      DomElementFactories.setDomElementProps(element, props);
      DomElementFactories.setDomElementChildren(element, children);
      return element;
    });
  };

  DomElementFactories.allDomElementNames = "A Abbr Acronym Address Applet Area Article Aside Audio B Base BaseFont Bdi Bdo Big BlockQuote Body Br Button Canvas Caption Center Cite Code Col ColGroup DataList Dd Del Details Dfn Dialog Dir Div Dl Dt Em Embed FieldSet FigCaption Figure Font Footer Form Frame FrameSet H1 H2 H3 H4 H5 H6 Head Header Hr Html I IFrame Img Input Ins Kbd KeyGen Label Legend Li Link Main Map Mark Menu MenuItem Meta Meter Nav NoFrames NoScript Object Ol OptGroup Option Output P Param Pre Progress Q Rp Rt Ruby S Samp Script Section Select Small Source Span Strike Strong Style Sub Summary Sup Table TBody Td TextArea TFoot Th THead Time Title Tr Track Tt U Ul Var Video Wbr";

  ref = DomElementFactories.createDomElementFactories(DomElementFactories.allDomElementNames);
  for (k in ref) {
    v = ref[k];
    DomElementFactories[k] = v;
  }

  return DomElementFactories;

})();


/***/ }),
/* 79 */
/***/ (function(module, exports) {

var WebpackHotLoader;

module.exports = WebpackHotLoader = (function() {
  function WebpackHotLoader() {}


  /*
  IN:
    _module should be the CommonJS 'module'
    modulePostLoadAction: (moduleState) -> ignored internally, returned from @runHot
  
  OUT: modulePostLoadAction moduleState
  
  EFFECT:
    modulePostLoadAction is run every time the module is loaded.
  
    Initially, moduleState is {}.
  
    moduleState is the same object every load:
      modulePostLoadAction can modify moduleState and it will persist through every reload.
  
    modulePostLoadAction is responsible for any and all
    update actions required due to the module load.
  
  NOTE:
    If _module is not hot, modulePostLoadAction will be invoked once with an empty {}.
   */

  WebpackHotLoader.runHot = function(_module, modulePostLoadAction) {
    var base, moduleState;
    if (!(_module != null ? _module.hot : void 0)) {
      return modulePostLoadAction({});
    }
    moduleState = (((base = _module.hot).data || (base.data = {
      moduleState: {}
    }))).moduleState;
    _module.hot.accept();
    _module.hot.dispose(function(data) {
      return data.moduleState = moduleState;
    });
    return modulePostLoadAction(moduleState);
  };

  return WebpackHotLoader;

})();


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var AsyncExtensions, Promise;

Promise = __webpack_require__(29);

module.exports = AsyncExtensions = (function() {
  var timeout;

  function AsyncExtensions() {}

  AsyncExtensions.timeout = timeout = function(ms, f) {
    return new Promise(function(resolve) {
      return setTimeout(function() {
        if (typeof f === "function") {
          f();
        }
        return resolve();
      }, ms);
    });
  };

  AsyncExtensions.requestAnimationFrame = self.requestAnimationFrame || self.webkitRequestAnimationFrame || self.mozRequestAnimationFrame || self.oRequestAnimationFrame || self.msRequestAnimationFrame || function(f) {
    return setTimeout(f, 1000 / 60);
  };

  AsyncExtensions.nextTick = function(f) {
    return Promise.resolve().then(function() {
      return typeof f === "function" ? f() : void 0;
    });
  };

  AsyncExtensions.throwErrorOutOfStack = function(e) {
    return timeout(0, function() {
      throw e;
    });
  };

  AsyncExtensions.evalAndThrowErrorsOutOfStack = function(f) {
    var e;
    try {
      return f();
    } catch (error) {
      e = error;
      Neptune.Art.Foundation.log.error("evalAndThrowErrorsOutOfStack", e);
      return AsyncExtensions.throwErrorOutOfStack(e);
    }
  };

  return AsyncExtensions;

})();


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


/*
This current iteration of clone relies on some singleton variables shared across all invocations of clone.
This is fine as long as javascript stays single-threaded.
It also introduces a little bit of uglyness initializing clonedMap necessitating the "top" variable.

FUTURE
A potentially better solution would be to create a new closer each time clone is called at the top-most level,
but when recursing, pass in a new function bound to that closure which is different from the global clone function.

populateClone would need to take an additional argument - the clone function to use for recursive cloning.
 */
var Clone, Map, Unique, byProperties, byStructure, clonedMap, inspect, topObject, uniquePropertyName;

Map = __webpack_require__(27);

Unique = __webpack_require__(49);

inspect = __webpack_require__(18).inspect;

uniquePropertyName = Unique.PropertyName;

clonedMap = null;

byStructure = false;

byProperties = false;

topObject = null;

module.exports = Clone = (function() {
  var clone, cloneArray, cloneByProperties, cloneByStructure, cloneObject, emptyClone;

  function Clone() {}

  cloneArray = function(array) {
    var clonedArray, i, index, len, value;
    clonedArray = clonedMap.set(array, array.slice());
    for (index = i = 0, len = clonedArray.length; i < len; index = ++i) {
      value = clonedArray[index];
      clonedArray[index] = clone(value);
    }
    return clonedArray;
  };

  cloneObject = function(obj) {
    var clonedObject, k, v;
    clonedObject = clonedMap.set(obj, emptyClone(obj));
    if ((obj !== topObject || !byProperties) && obj.populateClone) {
      obj.populateClone(clonedObject);
    } else {
      for (k in obj) {
        v = obj[k];
        clonedObject[k] = clone(v);
      }
    }
    return clonedObject;
  };

  Clone.emptyClone = emptyClone = function(obj) {
    if (obj.constructor === Array) {
      return [];
    } else {
      return Object.create(Object.getPrototypeOf(obj));
    }
  };

  Clone.clone = clone = function(obj, mode) {
    var clonedObject, got;
    switch (mode) {
      case "byStructure":
        byStructure = true;
        break;
      case "byProperties":
        byProperties = true;
    }
    if (obj === null || obj === void 0 || typeof obj !== "object") {
      return obj;
    }
    if (byStructure && (obj.constructor !== Array && obj.constructor !== Object)) {
      return obj;
    }
    if (clonedMap) {
      if (got = clonedMap.get(obj)) {
        return got;
      }
    } else {
      topObject = obj;
      clonedMap = new Map;
    }
    clonedObject = obj.constructor === Array ? cloneArray(obj) : cloneObject(obj);
    if (topObject === obj) {
      byStructure = false;
      byProperties = false;
      topObject = null;
      clonedMap = null;
    }
    return clonedObject;
  };

  Clone.cloneByProperties = cloneByProperties = function(obj) {
    return clone(obj, "byProperties");
  };

  Clone.cloneByStructure = cloneByStructure = function(obj) {
    return clone(obj, "byStructure");
  };

  return Clone;

})();


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var defineModule, formattedInspect;

defineModule = __webpack_require__(25).defineModule;

formattedInspect = __webpack_require__(18).formattedInspect;

defineModule(module, function() {
  var ErrorWithInfo;
  ErrorWithInfo = function(message, info) {
    this.message = message != null ? message : "see info";
    this.info = info;
    this.name = 'ErrorWithInfo';
    this.stack = (new Error()).stack;
    this.toString = function() {
      return "ErrorWithInfo:\n  message: " + (formattedInspect(this.message)) + "\n  info:\n    " + (formattedInspect(this.info).replace(/\n/g, "\n    ")) + "\n" + this.stack;
    };
    return this;
  };
  ErrorWithInfo.prototype = Object.create(Error.prototype);
  ErrorWithInfo.prototype.constructor = ErrorWithInfo;
  return ErrorWithInfo;
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var FormattedInspect, alignTabs, escapeJavascriptString, formattedInspectArray, formattedInspectObject, formattedInspectRecursive, formattedInspectString, indentLength, indentString, inspect, isFunction, isNumber, isPlainArray, isPlainObject, isString, max, newLineWithIndentString, pad, postWhitespaceFormatting, ref, ref1, stripTrailingWhitespace, toInspectedObjects;

ref = __webpack_require__(6), isString = ref.isString, isPlainObject = ref.isPlainObject, isPlainArray = ref.isPlainArray, isFunction = ref.isFunction, isNumber = ref.isNumber;

max = Math.max;

ref1 = __webpack_require__(10), pad = ref1.pad, stripTrailingWhitespace = ref1.stripTrailingWhitespace, escapeJavascriptString = ref1.escapeJavascriptString;

inspect = __webpack_require__(44).inspect;

toInspectedObjects = __webpack_require__(43).toInspectedObjects;

indentString = '  ';

indentLength = indentString.length;

newLineWithIndentString = "\n" + indentString;

formattedInspectObject = function(m, maxLineLength) {
  var finalInspectedValues, forceMultilineOutput, index, inspected, inspectedLength, inspectedValues, k, key, keyCount, shouldBeOnOwnLine, v, value;
  inspectedLength = 0;
  forceMultilineOutput = false;
  shouldBeOnOwnLine = false;
  keyCount = 0;
  inspectedValues = (function() {
    var results;
    results = [];
    for (key in m) {
      value = m[key];
      keyCount++;
      inspected = formattedInspectRecursive(value, maxLineLength - indentLength);
      if (inspected.match(/\n/)) {
        inspected = inspected.match(/^- /) ? "\n" + inspected : newLineWithIndentString + inspected.replace(/\n/g, newLineWithIndentString);
        inspected += "\n";
      } else if (inspected.length > maxLineLength - (key.length + 2)) {
        inspected = "" + newLineWithIndentString + inspected + "\n";
      }
      if (!key.match(/^[-._a-zA-Z[_a-zA-Z0-9]*$/)) {
        key = inspect(key);
      }
      inspectedLength += inspected.length + key.length + 2;
      forceMultilineOutput || (forceMultilineOutput = shouldBeOnOwnLine);
      shouldBeOnOwnLine = !inspected.match(/^([^,:]|\(.*\)|\{.*\}|\".*\"|\'.*\'|\[.*\])*$/);
      results.push([key, inspected]);
    }
    return results;
  })();
  if (keyCount === 0) {
    return "{}";
  }
  index = 0;
  finalInspectedValues = (function() {
    var j, len, ref2, results;
    results = [];
    for (j = 0, len = inspectedValues.length; j < len; j++) {
      ref2 = inspectedValues[j], k = ref2[0], v = ref2[1];
      results.push(k + ":\t" + v);
    }
    return results;
  })();
  return finalInspectedValues.join(!forceMultilineOutput && maxLineLength >= inspectedLength + (inspectedValues.length - 1) * 2 ? ",\t" : "\n");
};

formattedInspectArray = function(m, maxLineLength, implicitRepresentationOk) {
  var _isPlainObject, containsConsecutiveArrays, containsConsecutiveObjects, i, indentedInspectedArray, inspected, inspectedEl, inspectedLength, inspectedValues, lastWasArray, lastWasObject, value;
  inspectedLength = 0;
  lastWasObject = false;
  lastWasArray = false;
  containsConsecutiveObjects = false;
  containsConsecutiveArrays = false;
  inspectedValues = (function() {
    var j, len, results;
    results = [];
    for (j = 0, len = m.length; j < len; j++) {
      value = m[j];
      implicitRepresentationOk = true;
      if (_isPlainObject = isPlainObject(value)) {
        containsConsecutiveObjects || (containsConsecutiveObjects = lastWasObject);
        lastWasObject = true;
      } else {
        lastWasObject = false;
      }
      if (isPlainArray(value)) {
        implicitRepresentationOk = false;
        containsConsecutiveArrays || (containsConsecutiveArrays = lastWasArray);
        lastWasArray = true;
      }
      inspected = formattedInspectRecursive(value, maxLineLength - indentLength, implicitRepresentationOk);
      if (inspected.match(/\n/)) {
        inspected = inspected.replace(/\n/g, newLineWithIndentString) + "\n";
      }
      inspectedLength += inspected.length;
      results.push(inspected);
    }
    return results;
  })();
  if (!containsConsecutiveArrays && !containsConsecutiveObjects && maxLineLength >= inspectedLength + (inspectedValues.length - 1) * 2) {
    if (inspectedValues.length === 0) {
      return "[]";
    } else if (inspectedValues.length <= 1) {
      return "- " + (inspectedValues.join(",\t"));
    } else {
      return inspectedValues.join(",\t");
    }
  } else {
    indentedInspectedArray = (function() {
      var j, len, results;
      results = [];
      for (i = j = 0, len = inspectedValues.length; j < len; i = ++j) {
        inspectedEl = inspectedValues[i];
        results.push("- " + inspectedEl);
      }
      return results;
    })();
    return "" + (indentedInspectedArray.join("\n"));
  }
};

formattedInspectString = function(m) {
  if (m.length > 10 && m.match(/\n/) && !m.match(/\ (\n|$)/)) {
    return ['"""', m.replace(/"""/g, '""\\"').replace(/\\/g, '\\\\'), '"""'].join('\n');
  } else {
    return escapeJavascriptString(m);
  }
};

formattedInspectRecursive = function(m, maxLineLength, implicitRepresentationOk) {
  if (isPlainObject(m)) {
    return formattedInspectObject(m, maxLineLength);
  } else if (isPlainArray(m)) {
    return formattedInspectArray(m, maxLineLength, implicitRepresentationOk);
  } else if (isString(m)) {
    return formattedInspectString(m);
  } else {
    return inspect(m);
  }
};

alignTabs = function(maxLineLength, linesString) {
  var alignedLines, el, elements, expandAmount, i, j, l, len, len1, line, lines, maxColumnSizes, maxColumnWidth, numColumnsToPad, r, spaceAvailable, tabStops;
  tabStops = 1;
  lines = linesString.split("\n");
  numColumnsToPad = null;
  maxColumnSizes = [];
  maxColumnWidth = maxLineLength / 2;
  for (j = 0, len = lines.length; j < len; j++) {
    line = lines[j];
    if (!((elements = line.split("\t")).length > 1)) {
      continue;
    }
    if (numColumnsToPad == null) {
      numColumnsToPad = elements.length - 1;
    } else if (numColumnsToPad !== elements.length - 1) {
      numColumnsToPad = 1;
    }
    for (i = l = 0, len1 = elements.length; l < len1; i = ++l) {
      el = elements[i];
      if (!(i < elements.length - 1 && (i === 0 || el.length < maxColumnWidth))) {
        continue;
      }
      if (maxColumnSizes.length === i) {
        maxColumnSizes.push(0);
      }
      maxColumnSizes[i] = max(maxColumnSizes[i], el.length + 1);
    }
  }
  alignedLines = (function() {
    var len2, n, results;
    results = [];
    for (n = 0, len2 = lines.length; n < len2; n++) {
      line = lines[n];
      spaceAvailable = maxLineLength - line.length;
      elements = line.split("\t");
      r = (function() {
        var len3, o, results1;
        if (elements.length > 1) {
          results1 = [];
          for (i = o = 0, len3 = elements.length; o < len3; i = ++o) {
            el = elements[i];
            if (i === elements.length - 1) {
              results1.push(el);
            } else if ((maxColumnSizes[i] != null) && (expandAmount = maxColumnSizes[i] - el.length - 1) <= spaceAvailable) {
              spaceAvailable -= expandAmount;
              results1.push(pad(el, maxColumnSizes[i]));
            } else {
              spaceAvailable = 0;
              results1.push(el + " ");
            }
          }
          return results1;
        } else {
          return elements;
        }
      })();
      results.push(r.join(""));
    }
    return results;
  })();
  return alignedLines.join("\n");
};

postWhitespaceFormatting = function(maxLineLength, string) {
  var alignTabsInSameIndentGroup, indent, j, lastIndent, len, line, outLines, ref2, sameIndentGroup;
  lastIndent = 0;
  sameIndentGroup = [];
  outLines = [];
  alignTabsInSameIndentGroup = function() {
    var str;
    if (!(sameIndentGroup.length > 0)) {
      return;
    }
    str = sameIndentGroup.join("\n");
    sameIndentGroup = [];
    return outLines.push(alignTabs(maxLineLength, str));
  };
  ref2 = string.split("\n");
  for (j = 0, len = ref2.length; j < len; j++) {
    line = ref2[j];
    line = line.replace(/\s+$/g, '');
    if (lastIndent !== (indent = line.match(/^ *-?/)[0].length)) {
      alignTabsInSameIndentGroup();
    }
    sameIndentGroup.push(line);
    lastIndent = indent;
  }
  alignTabsInSameIndentGroup();
  return outLines.join('\n');
};

module.exports = FormattedInspect = (function() {
  function FormattedInspect() {}

  FormattedInspect.formattedInspect = function(toInspect, options) {
    var error, maxLineLength, out;
    if (options == null) {
      options = {};
    }
    try {
      maxLineLength = isNumber(options) ? options : options.maxLineLength || 80;
      return out = postWhitespaceFormatting(maxLineLength, formattedInspectRecursive(toInspectedObjects(toInspect), maxLineLength)).replace(/\n\n\n+/g, "\n\n").replace(/\n\n$/, "\n");
    } catch (error1) {
      error = error1;
      console.error(out = "Error in formattedInspect", {
        error: error,
        toInspect: toInspect,
        options: options
      });
      return out;
    }
  };

  return FormattedInspect;

})();


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(180).addModules({
  Array: __webpack_require__(176),
  Core: __webpack_require__(177),
  Object: __webpack_require__(178),
  String: __webpack_require__(179)
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var PlainObjects, deepMap, inspectedObjectLiteral, isFunction, isPlainArray, isPlainObject, ref;

ref = __webpack_require__(6), deepMap = ref.deepMap, isPlainArray = ref.isPlainArray, isPlainObject = ref.isPlainObject, isFunction = ref.isFunction;

inspectedObjectLiteral = __webpack_require__(26).inspectedObjectLiteral;

module.exports = PlainObjects = (function() {
  var toPlainObjects;

  function PlainObjects() {}

  PlainObjects.toPlainObjects = toPlainObjects = function(m) {
    var functionString, oldm, out, reducedFunctionString;
    if (m == null) {
      return m;
    }
    oldm = m;
    if (out = typeof m.getPlainObjects === "function" ? m.getPlainObjects() : void 0) {
      return out;
    } else if (isPlainObject(m) || isPlainArray(m)) {
      return deepMap(m, function(v) {
        return toPlainObjects(v);
      });
    } else if (isFunction(m)) {
      functionString = "" + m;
      reducedFunctionString = functionString.replace(/\s+/g, ' ').replace(/^function (\([^)]*\))/, "$1 ->").replace(/^\(\)\s*/, '');
      return inspectedObjectLiteral(reducedFunctionString.length < 80 ? reducedFunctionString : functionString.slice(0, 5 * 80));
    } else {
      return m;
    }
  };

  return PlainObjects;

})();


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var Inspect, Log, callStack, isString, peek,
  slice = [].slice;

Inspect = __webpack_require__(45);

callStack = __webpack_require__(40).callStack;

isString = __webpack_require__(6).isString;

peek = __webpack_require__(24).peek;

module.exports = Log = (function() {
  var getLogger, noOptions;

  function Log() {}

  Log.contextString = function(stack, defaultContext) {
    var caller, context;
    if (stack && (caller = stack[1])) {
      if (caller.original) {
        return caller.original;
      } else {
        context = caller["function"] ? caller["class"] ? caller["class"] + "::" + caller["function"] + "()" : caller["function"] + "()" : defaultContext ? defaultContext + ":" : "";
        if (caller.sourceFileName) {
          return "at " + caller.sourceFileName + ("-" + caller.sourceLine + ": ") + context;
        }
      }
    } else {
      return "at " + (defaultContext || "(unknown context)");
    }
  };

  Log.autoSizedIndepect = function(toInspect, maxLength, maxDepth) {
    var depth, inspected;
    if (maxLength == null) {
      maxLength = 512;
    }
    if (maxDepth == null) {
      maxDepth = 10;
    }
    inspected = null;
    depth = maxDepth;
    while ((inspected = Inspect.inspectLean(toInspect, {
        maxDepth: depth,
        maxLength: maxLength
      })).match(/\.\.\.$/)) {
      depth--;
    }
    return inspected;
  };

  Log.loggedParamsString = function(params) {
    if (typeof params === "string") {
      return params;
    } else {
      return Log.autoSizedIndepect(params);
    }
  };

  Log.hideLogging = function() {
    return Log.loggingHidden = true;
  };

  Log.showLogging = function() {
    return Log.loggingHidden = false;
  };

  Log.rawLog = function() {
    if (!Log.loggingHidden) {
      return console.log.apply(console, arguments);
    }
  };

  Log.rawErrorLog = function() {
    var a, out, str;
    if (Log.loggingHidden) {
      return;
    }
    if (Neptune.isNode && "".red) {
      str = arguments.length > 1 ? (out = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = arguments.length; i < len; i++) {
          a = arguments[i];
          results.push(a);
        }
        return results;
      }).apply(Log, arguments), out.join(' ')) : arguments[0];
      return console.error(str.red);
    } else {
      return console.error.apply(console, arguments);
    }
  };

  Log.rawWarningLog = function() {
    var a, out, str;
    if (Log.loggingHidden) {
      return;
    }
    if (Neptune.isNode && "".red) {
      str = arguments.length > 1 ? (out = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = arguments.length; i < len; i++) {
          a = arguments[i];
          results.push(a);
        }
        return results;
      }).apply(Log, arguments), out.join(' ')) : arguments[0];
      return console.warn(str.yellow);
    } else {
      return console.warn.apply(console, arguments);
    }
  };

  noOptions = {};

  getLogger = function(arg) {
    var isError, isWarning;
    isError = arg.isError, isWarning = arg.isWarning;
    if (isError) {
      return Log.rawErrorLog;
    } else if (isWarning) {
      return Log.rawWarningLog;
    } else {
      return Log.rawLog;
    }
  };

  Log.logCore = function(m, stack, options) {
    var className, logger;
    if (options == null) {
      options = noOptions;
    }
    className = options.className;
    if (Log.alternativeLogger) {
      Log.alternativeLogger.logCore(m, stack, options);
    }
    logger = getLogger(options);
    if (Neptune.isNode) {
      return logger(isString(m) ? m : Inspect.formattedInspect(m, process.stdout.columns));
    } else {
      return logger(m, "\n# Foundation.log called " + Log.contextString(stack, className));
    }
  };

  Log.log = function() {
    var args, m, stack;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    m = args.length === 1 ? args[0] : args;
    stack = callStack();
    Log.logCore(m, stack);
    return peek(args);
  };


  /*
  
  IN:
    labelString, value
    OR object with one or more properties (usually just one)
      returns the last value of the objects last key-value pair
  
  EX:
    log.withLabel foo: myObject
     * out: myObject
  
    log.withLabel "foo", myObject
     * out: myObject
   */

  Log.log.withLabel = function(a, b) {
    var k, obj, ret, v;
    if (isString(a)) {
      obj = {};
      obj[a] = b;
      Log.log(obj);
      return b;
    } else {
      ret = null;
      for (k in a) {
        v = a[k];
        ret = v;
      }
      Log.log(obj);
      return ret;
    }
  };

  Log.log.labeled = Log.log.withLabel;

  Log.log.error = function() {
    var args, m, stack;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    m = args.length === 1 ? args[0] : args;
    stack = callStack();
    Log.logCore(m, stack, {
      isError: true
    });
    return peek(args);
  };

  Log.log.warn = function() {
    var args, m, stack;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    m = args.length === 1 ? args[0] : args;
    stack = callStack();
    Log.logCore(m, stack, {
      isWarning: true
    });
    return peek(args);
  };

  Log.logL = function(obj) {
    var k, ret, v;
    console.warn("DEPRICATED: logL. USE log.labeled");
    ret = null;
    for (k in obj) {
      v = obj[k];
      ret = v;
    }
    Log.log(obj);
    return ret;
  };

  return Log;

})();


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var Promise, PromisedFileReader;

Promise = __webpack_require__(29);

module.exports = PromisedFileReader = (function() {
  function PromisedFileReader() {}

  PromisedFileReader.readFileAsDataUrl = function(file) {
    return new Promise(function(resolve, reject) {
      var reader;
      reader = new FileReader;
      reader.readAsDataURL(file);
      reader.onload = (function(_this) {
        return function(e) {
          return resolve(e.target.result);
        };
      })(this);
      return reader.onerror = (function(_this) {
        return function(e) {
          return reject(error);
        };
      })(this);
    });
  };

  PromisedFileReader.readFileAsArrayBuffer = function(file) {
    return new Promise(function(resolve, reject) {
      var reader;
      reader = new FileReader;
      reader.readAsArrayBuffer(file);
      reader.onload = (function(_this) {
        return function(e) {
          return resolve(e.target.result);
        };
      })(this);
      return reader.onerror = (function(_this) {
        return function(e) {
          return reject(error);
        };
      })(this);
    });
  };

  return PromisedFileReader;

})();


/***/ }),
/* 88 */
/***/ (function(module, exports) {

var Ruby,
  hasProp = {}.hasOwnProperty;

module.exports = Ruby = (function() {
  var rubyTrue;

  function Ruby() {}

  Ruby.rubyTrue = rubyTrue = function(a) {
    return a !== void 0 && a !== null && a !== false;
  };

  Ruby.rubyFalse = function(a) {
    return a === void 0 || a === null || a === false;
  };

  Ruby.rubyOr = function(a, b) {
    var i, len;
    if (arguments.length === 2) {
      if (rubyTrue(a)) {
        return a;
      } else {
        return b;
      }
    } else {
      for (i = 0, len = arguments.length; i < len; i++) {
        a = arguments[i];
        if (rubyTrue(a)) {
          break;
        }
      }
      return a;
    }
  };

  Ruby.rubyAnd = function(a, b) {
    var i, len;
    if (arguments.length === 2) {
      if (rubyTrue(a)) {
        return b;
      } else {
        return a;
      }
    } else {
      for (i = 0, len = arguments.length; i < len; i++) {
        a = arguments[i];
        if (!rubyTrue(a)) {
          break;
        }
      }
      return a;
    }
  };

  Ruby.reopenInstanceProps = function(klass, instanceProps) {
    var k, results, v;
    results = [];
    for (k in instanceProps) {
      if (!hasProp.call(instanceProps, k)) continue;
      v = instanceProps[k];
      results.push(klass.prototype[k] = v);
    }
    return results;
  };

  Ruby.reopenClassProps = function(klass, classProps) {
    var k, results, v;
    results = [];
    for (k in classProps) {
      if (!hasProp.call(classProps, k)) continue;
      v = classProps[k];
      results.push(klass[k] = v);
    }
    return results;
  };

  return Ruby;

})();


/***/ }),
/* 89 */
/***/ (function(module, exports) {


/*
This current iteration of clone relies on some singleton variables shared across all invocations of clone.
This is fine as long as javascript stays single-threaded.
It also introduces a little bit of uglyness initializing clonedMap necessitating the "top" variable.

FUTURE
A potentially better solution would be to create a new closer each time clone is called at the top-most level,
but when recursing, pass in a new function bound to that closure which is different from the global clone function.

populateClone would need to take an additional argument - the clone function to use for recursive cloning.
 */
var ShallowClone;

module.exports = ShallowClone = (function() {
  function ShallowClone() {}

  ShallowClone.extendClone = function(obj) {
    if (obj.constructor === Array) {
      return obj.slice();
    } else {
      return Object.create(obj);
    }
  };

  ShallowClone.shallowClone = function(obj) {
    var k, ret, v;
    if (!obj) {
      return obj;
    }
    if (obj.constructor === Array) {
      return obj.slice();
    } else {
      ret = {};
      for (k in obj) {
        v = obj[k];
        ret[k] = v;
      }
      return ret;
    }
  };

  return ShallowClone;

})();


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Time, base, commaize, dateSecondMinusPerformanceSecond, initDateSecond, initPerformanceSecond;

commaize = __webpack_require__(13).commaize;

self.performance || (self.performance = {});

(base = self.performance).now || (base.now = self.performance.mozNow || self.performance.msNow || self.performance.oNow || self.performance.webkitNow || function() {
  return new Date().getTime();
});

initPerformanceSecond = self.performance.now() / 1000;

initDateSecond = new Date().getTime() / 1000;

dateSecondMinusPerformanceSecond = initDateSecond - initPerformanceSecond;

module.exports = Time = (function() {
  var currentSecond, multiples, timerStack;

  function Time() {}

  multiples = [["mo", 30 * 24 * 60 * 60], ["d", 24 * 60 * 60], ["h", 60 * 60], ["m", 60], ["s", 1], ["ms", .001], ["μs", .000001], ["ns", .000000001]];

  Time.dateSecondToPerformanceSecond = function(dateSecond) {
    return dateSecond - dateSecondMinusPerformanceSecond;
  };

  Time.performanceSecondToDateSecond = function(performanceSecond) {
    return performanceSecond + dateSecondMinusPerformanceSecond;
  };

  Time.timeStampToPerformanceSecond = function(htmlEventTimeStamp) {
    return htmlEventTimeStamp / 1000 - dateSecondMinusPerformanceSecond;
  };

  Time.durationString = function(seconds) {
    var i, len, multiplier, name, ref;
    for (i = 0, len = multiples.length; i < len; i++) {
      ref = multiples[i], name = ref[0], multiplier = ref[1];
      if (seconds >= multiplier) {
        return "" + ((seconds / multiplier) | 0) + name;
      }
    }
    return "0";
  };

  Time.dateAgeInSeconds = function(date) {
    return ((new Date) - date) * .001;
  };

  Time.dateToSeconds = function(date) {
    return post.getTime() * .001;
  };

  Time.perTimeString = function(secondsPerRun) {
    var perTime;
    perTime = 1 / secondsPerRun;
    if (perTime > 100) {
      return (commaize(perTime | 0)) + "/s";
    } else if (perTime * 60 > 100) {
      return (commaize(perTime * 60 | 0)) + "/m";
    } else {
      return (commaize(perTime * 3600 | 0)) + "/h";
    }
  };

  Time.currentMillisecond = function() {
    return self.performance.now();
  };

  Time.currentSecond = currentSecond = function() {
    return self.performance.now() / 1000;
  };

  Time.currentDateSecond = function() {
    return new Date().getTime() / 1000;
  };

  Time.time = function(a, b) {
    var f, fResult, start, timeResult;
    f = b || a;
    start = currentSecond();
    fResult = f();
    timeResult = currentSecond() - start;
    if (b) {
      Neptune.Art.Foundation.log("time: " + a + " took " + (Time.durationString(timeResult)));
      return fResult;
    } else {
      return timeResult;
    }
  };

  timerStack = [];

  Time.stackTime = function(f) {
    var start, subTimeTotal, timeResult, tsl;
    start = currentSecond();
    timerStack.push(0);
    f();
    subTimeTotal = timerStack.pop();
    timeResult = currentSecond() - start;
    if ((tsl = timerStack.length) > 0) {
      timerStack[tsl - 1] += timeResult;
    }
    return {
      count: 1,
      total: timeResult,
      subTimeTotal: subTimeTotal,
      remainder: timeResult - subTimeTotal
    };
  };

  Time.logTimeSinceLast = function(a) {
    var time;
    time = Time.currentSecond();
    console.log(a + " (" + (Time.lastTime ? Time.durationString(time - Time.lastTime) : void 0) + ")");
    return Time.lastTime = time;
  };

  return Time;

})();


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var Foundation, StandardLib,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(11);

module.exports = Foundation.StandardLib || Foundation.addNamespace('StandardLib', StandardLib = (function(superClass) {
  extend(StandardLib, superClass);

  function StandardLib() {
    return StandardLib.__super__.constructor.apply(this, arguments);
  }

  return StandardLib;

})(Neptune.Base));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(186).addModules({
  Config: __webpack_require__(184),
  ConfigRegistry: __webpack_require__(50),
  Configurable: __webpack_require__(185)
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var Promise, defineModule, isWebWorker, log, objectKeyCount, ref, workerRpc;

ref = __webpack_require__(4), defineModule = ref.defineModule, Promise = ref.Promise, log = ref.log, objectKeyCount = ref.objectKeyCount;

isWebWorker = __webpack_require__(30).isWebWorker;

workerRpc = __webpack_require__(97).workerRpc;


/*
AsyncLocalStorage defines a consistent API for localStorage across web-workers and the main thread.

API:
  AsyncLocalStorage.
    getItem:    (path)        -> promise.then -> item at path
    setItem:    (path, value) -> promise.then -> success
    removeItem: (path)        -> promise.then -> success
    clear:                    -> promise.then -> success
 */

defineModule(module, function() {
  var AsyncLocalStorage, LocalStorageShimForNode, localStorage;
  localStorage = global.localStorage;
  localStorage || (localStorage = LocalStorageShimForNode = (function() {
    function LocalStorageShimForNode() {}

    LocalStorageShimForNode.store = {};

    LocalStorageShimForNode.getItem = function(k) {
      return LocalStorageShimForNode.store[k];
    };

    LocalStorageShimForNode.setItem = function(k, v) {
      return LocalStorageShimForNode.store[k] = v;
    };

    LocalStorageShimForNode.removeItem = function(k) {
      return delete LocalStorageShimForNode.store[k];
    };

    LocalStorageShimForNode.clear = function() {
      return LocalStorageShimForNode.store = {};
    };

    LocalStorageShimForNode.key = function(i) {
      return Object.keys(LocalStorageShimForNode.store)[i];
    };

    LocalStorageShimForNode.getLength = function() {
      return objectKeyCount(LocalStorageShimForNode.store);
    };

    return LocalStorageShimForNode;

  })());
  if (isWebWorker) {
    return workerRpc.bindWithPromises({
      localStorage: ["getItem", "setItem", "removeItem", "clear", "key"]
    });
  } else {
    workerRpc.register({
      localStorage: localStorage
    });
    return AsyncLocalStorage = (function() {
      function AsyncLocalStorage() {}

      AsyncLocalStorage.getItem = function(path) {
        return Promise.then(function() {
          return localStorage.getItem(path);
        });
      };

      AsyncLocalStorage.setItem = function(path, value) {
        return Promise.then(function() {
          return localStorage.setItem(path, value);
        });
      };

      AsyncLocalStorage.removeItem = function(path) {
        return Promise.then(function() {
          return localStorage.removeItem(path);
        });
      };

      AsyncLocalStorage.clear = function() {
        return Promise.then(function() {
          return localStorage.clear();
        });
      };

      AsyncLocalStorage.key = function(index) {
        return Promise.then(function() {
          return localStorage.key(index);
        });
      };

      AsyncLocalStorage.getLength = function() {
        return Promise.then(function() {
          return localStorage.length;
        });
      };

      return AsyncLocalStorage;

    })();
  }
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var GlobalCounts, StandardLib, currentSecond, isPlainObject, log;

StandardLib = __webpack_require__(4);

isPlainObject = StandardLib.isPlainObject, currentSecond = StandardLib.currentSecond, log = StandardLib.log;

module.exports = GlobalCounts = (function() {
  var globalTime;

  function GlobalCounts() {}

  GlobalCounts.globalCounts = {};

  globalTime = null;

  GlobalCounts.resetGlobalCounts = function() {
    globalTime = currentSecond();
    return GlobalCounts.globalCounts = {};
  };

  GlobalCounts.globalCount = function(name, amount) {
    var k, last, results, v;
    if (amount == null) {
      amount = 1;
    }
    if (isPlainObject(amount)) {
      if (last = GlobalCounts.globalCounts[name]) {
        results = [];
        for (k in amount) {
          v = amount[k];
          results.push(last[k] += v);
        }
        return results;
      } else {
        return GlobalCounts.globalCounts[name] = amount;
      }
    } else {
      return GlobalCounts.globalCounts[name] = (GlobalCounts.globalCounts[name] || 0) + amount;
    }
  };

  GlobalCounts.countStep = function() {
    var nextTime;
    nextTime = currentSecond();
    if (nextTime - globalTime > .002) {
      log.error("GlobalCounts gap");
    }
    globalTime = nextTime;
    return GlobalCounts.globalCount("step");
  };

  return GlobalCounts;

})();


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, ClassSystem, ProgressAdapter, StandardLib, isArray, isFunction, isNumber, log, max, min,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

BaseObject = ClassSystem.BaseObject;

isNumber = StandardLib.isNumber, isFunction = StandardLib.isFunction, isArray = StandardLib.isArray, log = StandardLib.log, max = StandardLib.max, min = StandardLib.min;

module.exports = ProgressAdapter = (function(superClass) {
  extend(ProgressAdapter, superClass);


  /*
  IN:
    stepWeights can be a positive integer or an aray of positive, real numbers.
  
      integer N: specifies progress will be made in N even steps from 0 to 1
  
      array of numbers A: specifies progress will be made in A.length steps which
        may not be even. Each step has its own "weight."
  
        Example: stepWeights = [850, 50, 100]
        Will become:
          steps:
            0: 0.00 to 0.85
            1: 0.85 to 0.90
            2: 0.90 to 1.00
  
        Example: stepWeights = [1, 2, 1]
        Will become:
          steps:
            0: 0.00 to 0.25
            1: 0.25 to 0.75
            2: 0.75 to 1.00
  
    progressCallback: progressCallback is a function which is invoked with a number
      between 0 and 1. It is invoked immediatly with 0, then it is invoked by makeProgress()
      and makeProgressCallback()(). It always increments or stays the same. It will
      never go backwards.
   */

  function ProgressAdapter(stepWeights, progressCallback1) {
    this.stepWeights = stepWeights;
    this.progressCallback = progressCallback1;
    if (!(isFunction(this.progressCallback) && (isArray(this.stepWeights) || isNumber(this.stepWeights)))) {
      throw new Error("invalid params");
    }
    this._currentStep = 0;
    this._generateSteps();
    this._currentProgress = 0;
    this._warningCount = 0;
    this.setCurrentProgress(0);
  }

  ProgressAdapter.getter("steps currentStep currentProgress warningCount", {
    currentProgressPercent: function() {
      return (this._currentProgress * 100 | 0) + "%";
    },
    currentProgressBase: function() {
      if (this._currentStep <= 0) {
        return 0;
      } else if (this._currentStep >= this._steps.length) {
        return 1;
      } else {
        return this._steps[this._currentStep];
      }
    }
  });

  ProgressAdapter.setter({
    currentProgress: function(p) {
      return typeof this.progressCallback === "function" ? this.progressCallback(min(1, this._currentProgress = max(p, this._currentProgress))) : void 0;
    }
  });

  ProgressAdapter.prototype.makeProgress = function() {
    this._currentStep++;
    if (this._currentStep > this._steps.length) {
      this._warningCount++;
      console.warn("ProgressAdapter: makeProgress/Callback called too many times!", {
        currentStep: this._currentStep,
        steps: this._steps,
        stepWeights: this.stepWeights
      });
    }
    return this.setCurrentProgress(this.currentProgressBase);
  };

  ProgressAdapter.prototype.makeProgressCallback = function() {
    var rangeEnd, rangeStart;
    this._finishLastProgress();
    rangeStart = this.currentProgressBase;
    this._currentStep++;
    rangeEnd = this.currentProgressBase;
    return (function(_this) {
      return function(progress) {
        return _this.setCurrentProgress(rangeStart + (rangeEnd - rangeStart) * progress);
      };
    })(this);
  };

  ProgressAdapter.prototype._finishLastProgress = function() {
    var progress;
    if (this._currentProgress < (progress = this.currentProgressBase)) {
      return this.setCurrentProgress(progress);
    }
  };

  ProgressAdapter.prototype._executePromiseSequence = function(sequence, lastResult, index, resolve) {
    if (index >= sequence.length) {
      this._finishLastProgress();
      return resolve(lastResult);
    }
    return Promise.resolve(sequence[index](lastResult, this.makeProgressCallback())).then((function(_this) {
      return function(nextResult) {
        return _this._executePromiseSequence(sequence, nextResult, index + 1, resolve);
      };
    })(this));
  };

  ProgressAdapter.prototype.executePromiseSequence = function(sequence) {
    return new Promise((function(_this) {
      return function(resolve) {
        return _this._executePromiseSequence(sequence, null, 0, resolve);
      };
    })(this));
  };


  /*
  IN: (progressCallback, promiseSequence) ->
     * stepWeights implicitly == promiseSequence.length
  IN: (progressCallback, stepWeights, promiseSequence) ->
   */

  ProgressAdapter.executePromiseSequence = function(progressCallback, a, b) {
    var pa, sequence, weights;
    if (b) {
      weights = a;
      sequence = b;
    } else {
      sequence = a;
      weights = sequence.length;
    }
    pa = new ProgressAdapter(weights, progressCallback);
    return pa.executePromiseSequence(sequence);
  };

  ProgressAdapter.prototype._generateSteps = function() {
    var i, j, len, numSteps, ref, s, step, total, w;
    if (isNumber(numSteps = this.stepWeights)) {
      return this._steps = (function() {
        var j, ref, results;
        results = [];
        for (i = j = 0, ref = numSteps; j < ref; i = j += 1) {
          results.push(i / numSteps);
        }
        return results;
      })();
    } else {
      total = 0;
      ref = this.stepWeights;
      for (j = 0, len = ref.length; j < len; j++) {
        w = ref[j];
        total += w;
      }
      step = 0;
      return this._steps = (function() {
        var k, len1, ref1, results;
        ref1 = this.stepWeights;
        results = [];
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          w = ref1[k];
          s = step;
          step += w / total;
          results.push(s);
        }
        return results;
      }).call(this);
    }
  };

  return ProgressAdapter;

})(BaseObject);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, ClassSystem, Map, SingleObjectTransaction, StandardLib, cloneByStructure, eq, inspect, removeFirstMatch, rubyTrue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

Map = StandardLib.Map, cloneByStructure = StandardLib.cloneByStructure, removeFirstMatch = StandardLib.removeFirstMatch, eq = StandardLib.eq, inspect = StandardLib.inspect, rubyTrue = StandardLib.rubyTrue;

BaseObject = ClassSystem.BaseObject;

module.exports = SingleObjectTransaction = (function(superClass) {
  var setValues;

  extend(SingleObjectTransaction, superClass);

  function SingleObjectTransaction(a) {
    var options;
    SingleObjectTransaction.__super__.constructor.apply(this, arguments);
    this.object = (function() {
      if (a.constructor === Array) {
        if (a.length !== 2) {
          throw new Error("new SingleObjectTransaction: expected length-2 array like: [obj, optionsMap]");
        }
        this.options = a[1];
        return a[0];
      } else {
        this.options = {};
        return a;
      }
    }).call(this);
    if (this.object == null) {
      throw new Error("object must not be null or undefined");
    }
    this.props = [];
    this.from = {};
    options = this.options;
    if (options.properties) {
      this.addProperties(options.properties);
    }
    if (options.property) {
      this.addProp(options.property);
    }
    if (options.from) {
      this.addFromValues(options.from);
    }
    if (options.to) {
      this.addToValues(options.to);
    }
  }

  SingleObjectTransaction.prototype.toString = function() {
    return (inspect(this.object, 0)) + " from:" + (inspect(this.from, 1)) + " to:" + (inspect(this.to, 1));
  };

  SingleObjectTransaction.prototype.inspect = function(inspector) {
    var i, k, len, ref, results;
    if (!inspector) {
      return ClassSystem.Inspect.inspect(this);
    }
    inspector.put(this.object.classPathName + ":");
    ref = this.props;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      k = ref[i];
      inspector.put("\n    " + k + ": ");
      if (rubyTrue(this.from && this.from[k])) {
        inspector.inspect(this.from[k], 1);
      }
      inspector.put(" ... ");
      if (rubyTrue(this.to && this.to[k])) {
        results.push(inspector.inspect(this.to[k], 1));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  SingleObjectTransaction.getter({
    properties: function() {
      return this.props;
    },
    hasToValues: function() {
      return !!this.to;
    },
    valuesChanged: function() {
      var fromValue, k, ref, toValue;
      ref = this.from;
      for (k in ref) {
        fromValue = ref[k];
        toValue = this.to[k];
        if (!eq(fromValue, toValue)) {
          return true;
        }
      }
      return false;
    }
  });

  SingleObjectTransaction.prototype.addFromValues = function(from) {
    var base, k, v;
    for (k in from) {
      v = from[k];
      this.addProp(k);
      this.from[k] = v;
    }
    return typeof (base = this.object).preprocessProperties === "function" ? base.preprocessProperties(this.from) : void 0;
  };

  SingleObjectTransaction.prototype.addToValues = function(to) {
    var base, k, v;
    this.to || (this.to = {});
    for (k in to) {
      v = to[k];
      this.addProp(k);
      this.to[k] = v;
    }
    return typeof (base = this.object).preprocessProperties === "function" ? base.preprocessProperties(this.to) : void 0;
  };

  SingleObjectTransaction.prototype.addProperties = function(props) {
    var i, len, prop, results, results1, v;
    if (props.constructor === Array) {
      results = [];
      for (i = 0, len = props.length; i < len; i++) {
        prop = props[i];
        results.push(this.addProp(prop));
      }
      return results;
    } else {
      results1 = [];
      for (prop in props) {
        v = props[prop];
        results1.push(this.addProp(prop));
      }
      return results1;
    }
  };

  SingleObjectTransaction.prototype.addProp = function(propName) {
    if (indexOf.call(this.props, propName) < 0) {
      return this.props.push(propName);
    }
  };

  SingleObjectTransaction.prototype.deleteProp = function(propName) {
    removeFirstMatch(this.props, propName);
    delete this.from[propName];
    return delete this.to[propName];
  };

  SingleObjectTransaction.prototype.saveValues = function(saveTo) {
    var getterName, i, len, metaProperties, prop, ref, ref1, value;
    this.clearOptimizations();
    metaProperties = this.object.metaProperties;
    ref = this.props;
    for (i = 0, len = ref.length; i < len; i++) {
      prop = ref[i];
      if (!saveTo.hasOwnProperty(prop)) {
        value = saveTo[prop] = cloneByStructure((getterName = metaProperties != null ? (ref1 = metaProperties[prop]) != null ? ref1.getterName : void 0 : void 0) ? this.object[getterName]() : this.object[prop]);
      }
    }
    return null;
  };

  SingleObjectTransaction.prototype.saveFromValues = function() {
    return this.saveValues(this.from || (this.from = {}));
  };

  SingleObjectTransaction.prototype.saveToValues = function() {
    return this.saveValues(this.to || (this.to = {}));
  };

  SingleObjectTransaction._setValues = setValues = function(o, values, f) {
    var metaProperties, prop, ref, setterName, v;
    metaProperties = o.metaProperties;
    for (prop in values) {
      v = values[prop];
      if (f) {
        v = f(prop, v);
      }
      if (setterName = metaProperties != null ? (ref = metaProperties[prop]) != null ? ref.setterName : void 0 : void 0) {
        o[setterName](v);
      } else {
        o[prop] = v;
      }
    }
    return null;
  };

  SingleObjectTransaction.prototype.rollBack = function() {
    return setValues(this.object, this.from);
  };

  SingleObjectTransaction.prototype.rollForward = function() {
    return setValues(this.object, this.to);
  };

  SingleObjectTransaction.prototype.clearOptimizations = function() {
    return this.numberDeltas = this.interpolateToObjects = null;
  };

  SingleObjectTransaction.prototype.optimizeInterpolation = function() {
    var field, from, ref, results, to;
    this.numberDeltas = {};
    this.interpolateToObjects = {};
    this.nonInterpolatingFields = {
      to: {},
      from: {}
    };
    ref = this.from;
    results = [];
    for (field in ref) {
      from = ref[field];
      to = this.to[field];
      if (typeof from === "number") {
        results.push(this.numberDeltas[field] = to - from);
      } else if (typeof (from != null ? from.interpolate : void 0) === "function") {
        results.push(this.interpolateToObjects[field] = to);
      } else {
        this.nonInterpolatingFields.from[field] = from;
        results.push(this.nonInterpolatingFields.to[field] = to);
      }
    }
    return results;
  };

  SingleObjectTransaction.prototype.interpolateNumberFields = function(p) {
    return setValues(this.object, this.numberDeltas, (function(_this) {
      return function(field, delta) {
        return _this.from[field] + delta * p;
      };
    })(this));
  };

  SingleObjectTransaction.prototype.interpolateObjectFields = function(p) {
    var e;
    try {
      return setValues(this.object, this.interpolateToObjects, (function(_this) {
        return function(field, toObject) {
          return _this.from[field].interpolate(toObject, p);
        };
      })(this));
    } catch (error) {
      e = error;
      this.log("Art.Foundation.Transaction#interpolateObjectFields(p=" + p + "): error " + e + " deltas: " + (inspect(this.interpolateToObjects)) + " from:   " + (inspect(this.from)) + " to:     " + (inspect(this.to)));
      throw e;
    }
  };

  SingleObjectTransaction.prototype.setNonInterpolatingFields = function(p) {
    return setValues(this.object, this.nonInterpolatingFields[p >= 1 ? "to" : "from"]);
  };

  SingleObjectTransaction.prototype.interpolate = function(p) {
    if (!this.numberDeltas) {
      this.optimizeInterpolation();
    }
    this.interpolateNumberFields(p);
    this.interpolateObjectFields(p);
    return this.setNonInterpolatingFields(p);
  };

  SingleObjectTransaction.getter({
    noChanges: function() {
      return this.props.length === 0;
    }
  });

  SingleObjectTransaction.prototype.optimizeProperties = function() {
    var i, len, prop, ref, results;
    this.clearOptimizations();
    ref = this.props;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      prop = ref[i];
      if (!this.from.hasOwnProperty(prop) || !this.to.hasOwnProperty(prop) || eq(this.from[prop], this.to[prop])) {
        results.push(this.deleteProp(prop));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  return SingleObjectTransaction;

})(BaseObject);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, ClassSystem, Promise, StandardLib, WebWorker, WorkerRpc, debugPrefix, isFunction, isPlainArray, isString, isWebWorker, log, mergeInto,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

WebWorker = __webpack_require__(30);

Promise = StandardLib.Promise, log = StandardLib.log, isPlainArray = StandardLib.isPlainArray, isFunction = StandardLib.isFunction, isString = StandardLib.isString, mergeInto = StandardLib.mergeInto;

BaseObject = ClassSystem.BaseObject;

isWebWorker = WebWorker.isWebWorker;


/*
WorkerRPC has two modes: singleton and instanced.

SINGLETON:
  Including WorkerRPC automatically creates the singleton instance.
  In a worker, the singleton automatically binds to the worker's self.onmessage and starts listenting.
  In workers or the browser, any handler registered with the singleton will be available to respond
  to any message received by the singleton OR ANY OTHER INSTANCE of WorkerRPC in that thread.
  You can think of the singleton as the global registry for handlers.

In practice:
  In browser:
     * to register all your handlers, call this one or more times:
    WorkerRpc.register ...

     * call for each each worker you want to listen for RPC calls from,
     * and bind any remote procedures you want to be able to invoke on that specific worker-thread
    aBoundWorker = new WorkerRpc worker,
      bind: ...
      bindWithPromises: ...

     * to make remote-procedure-calls to the worker:
     * NOTE: if registered with bindWithPromises, will return a promise for the RPC's result.
    aBoundWorker.MyWorkerNamespace.myWorkerFunction ...

  In worker:
     * to register all your handlers, call this one or more times:
    WorkerRpc.register ...

     * bind any remote procedures you want to be able to invoke on the browser-thread
    WorkerRpc.bind ...
    WorkerRpc.bindWithPromises ...

NOTES:
  registered functions are invoked with @/this set to the namespace. That way you can invoke
  callback functions you previously bound back to the specific worker that invoked the
  function with: @MyWorkerNamespace.myWorkerFunction()

Real world example:

  Suppose you want to access the localStorage object on the browser thread from your worker.
  The 6 lines of code below create the 'self.asyncLocalStorage' object which works just like
  'localStorage' except it returns Art.Foundation.Promises for the function results.

  browser: (before starting the worker)
    {WorkerRpc} = Art.Foundation
    WorkerRpc.register localStorage: localStorage
    new WorkerRpc workerSourcePath

  worker:
    {workerRpc} = Art.Foundation.WorkerRpc
    workerRpc.bindWithPromises localStorage: ["getItem", "setItem", "removeItem", "clear"]
    self.asyncLocalStorage = workerRpc.localStorage

  SBD: Isn't that nice! So streamlined!

General examples:

Usage with no return value expected:
  browser thread:

    new WorkerRpc (new Worker workerUrl),
      register:
        MyMainNamespace:
          doWork: (a) -> ...

  worker thread:

    {MyMainNamespace} = new WorkerRpc self,
      bind:
        MyMainNamespace: ["doWork"]

    MyMainNamespace.doWork myStructuredData

Usage with promises:

  browser thread:

    new WorkerRpc (new Worker workerUrl),
      register:
        MyMainNamespace:
          concatStrings: (a, b) ->
            a + b
             * equivelent to: Promise.resolve a + b
             * if the result is not a Promse, Promise.resolve(result) is automatically applied

  worker thread:

    {MyMainNamespace} = new WorkerRpc self,
      bindWithPromises:
        MyMainNamespace: ["concatStrings"]

    MyMainNamespace.concatStrings "hi ", "Shane"
    .then (result) ->
       * result == "hi Shane"

Usage with arbitrary response messages:

  Sometimes you want a handle to the workerRpc instance for the thread that just send
  you the message inside your registered response functions. You can access that
  via the global: WorkerRpc.lastMessageReceivedFrom.

  browser thread:

    new WorkerRpc (new Worker workerUrl),
      register:
        MyMainNamespace:
          doWorkAndRespond: (key) ->
            count == 0
            invokeThreeTimes =>
              count++
              WorkerRpc.lastMessageReceivedFrom.MyWorkerNamespace.respond key, count

  worker thread:

    {MyMainNamespace} = new WorkerRpc self,
      register:
        MyWorkerNamespace:
          respond: (key, count) -> console.log "MyWorkerNamespace#respond: #{key} #{count}"
      bind:
        MyMainNamespace: ["doWorkAndRespond"]

    MyMainNamespace.doWorkAndRespond "myKey"

Usage - add to global registery:

  WorkerRpc.register
    MyGlobalClass:
      doSomethingNoMatterWhoCalls: ->
        ...
 */

debugPrefix = isWebWorker ? "WorkerRpc(worker)" : "WorkerRpc(browser)";

module.exports = WorkerRpc = (function(superClass) {
  var workerRpcChannelIdString;

  extend(WorkerRpc, superClass);

  WorkerRpc.singletonClass();

  WorkerRpc.workerRpcChannelIdString = workerRpcChannelIdString = "Art.Foundation.WorkerRpcChannel";

  WorkerRpc.register = function(toRegister) {
    return WorkerRpc.singleton.register(toRegister);
  };

  WorkerRpc.bind = function(toBind) {
    return WorkerRpc.singleton._bind(toBind, false);
  };

  WorkerRpc.bindWithPromises = function(toBind) {
    return WorkerRpc.singleton._bind(toBind, true);
  };


  /*
  INPUT:
    thread:
      must implement onmessage= and postMessage or be null
      In a webworker, this gets set to self if it is null.
    options:
      bind: map # invokes: @bind map
      bindWithPromises: map # invokes: @bindWithPromises map
   */

  function WorkerRpc(thread, options) {
    if (isString(thread)) {
      log("WorkerRpc starting worker: " + thread);
      thread = new Worker(thread);
      log("WorkerRpc starting worker: " + thread + ", started?:", thread);
    }
    if (!(thread || self === self.window)) {
      thread = self;
    }
    this._reset();
    this._bindOnmessage(this._thread = thread);
    if (options) {
      this._applyOptions(options);
    }
  }

  WorkerRpc.prototype.register = function(toRegister) {
    var functionMap, namespaceName;
    if (!toRegister) {
      return;
    }
    for (namespaceName in toRegister) {
      functionMap = toRegister[namespaceName];
      if (this._registry.hasOwnProperty(namespaceName)) {
        mergeInto(this._registry[namespaceName], functionMap);
      } else {
        this._registry[namespaceName] = functionMap;
      }
    }
    return this._registry;
  };


  /*
  Creates functions to make specific remote-procedure-calls.
  
  IN:
    toBind: map to arrays of strings
      Each key in the map specifies a namespace.
      The array of strings specify the names of each RPC you want to be able to invoke.
  
  For a given namespaceName and functionName, this binds the function so you can
  invoke it as follows:
    @myNamespaceName.myFunctionName()
  
  The created functions are one-way. They return null as soon as the message has been sent
  to the remote thread. If you want the results, see @bindWithPromises
   */

  WorkerRpc.prototype.bind = function(toBind) {
    return this._bind(toBind, false);
  };


  /*
  Same as @bind except each function created will return a promise which will return
  the results return from the remote procedure call when they are ready.
   */

  WorkerRpc.prototype.bindWithPromises = function(toBind) {
    return this._bind(toBind, true);
  };

  WorkerRpc.prototype._bind = function(toBind, withPromises) {
    var functionName, functionNames, i, len, namespace, namespaceName, ref;
    if (!isFunction((ref = this._thread) != null ? ref.postMessage : void 0)) {
      throw new Error("@_thread.postMessage required for remote requests");
    }
    if (!toBind) {
      return;
    }
    namespace = null;
    for (namespaceName in toBind) {
      functionNames = toBind[namespaceName];
      if (!this.hasOwnProperty(namespaceName)) {
        this[namespaceName] = {};
      }
      namespace = this[namespaceName];
      for (i = 0, len = functionNames.length; i < len; i++) {
        functionName = functionNames[i];
        namespace[functionName] = withPromises ? this._newRemoteRequestFunctionWithPromise(namespaceName, functionName) : this._newRemoteRequestFunction(namespaceName, functionName);
      }
    }
    return namespace;
  };

  WorkerRpc.prototype._reset = function() {
    return this._registry = {
      promiseCallback: {
        success: (function(_this) {
          return function(promiseId, result) {
            return WorkerRpc._resolvePromise(promiseId, result);
          };
        })(this),
        error: (function(_this) {
          return function(promiseId, error) {
            return WorkerRpc._rejectPromise(promiseId, error);
          };
        })(this)
      }
    };
  };

  WorkerRpc.prototype._applyOptions = function(arg) {
    var bind, bindWithPromises, register;
    register = arg.register, bind = arg.bind, bindWithPromises = arg.bindWithPromises;
    this.register(register);
    this.bind(bind);
    this.bindWithPromises(bindWithPromises);
    return this;
  };

  WorkerRpc.prototype._send = function(namespaceName, functionName, promiseId, args) {
    return this._thread.postMessage([workerRpcChannelIdString, namespaceName, functionName, promiseId, args]);
  };

  WorkerRpc.prototype._newRemoteRequestFunctionWithPromise = function(namespaceName, functionName) {
    return (function(_this) {
      return function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return WorkerRpc._bindPromise(function(promiseId) {
          return _this._send(namespaceName, functionName, promiseId, args);
        });
      };
    })(this);
  };

  WorkerRpc.prototype._newRemoteRequestFunction = function(namespaceName, functionName) {
    return (function(_this) {
      return function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return _this._send(namespaceName, functionName, null, args);
      };
    })(this);
  };

  WorkerRpc.prototype._bindOnmessage = function(thread) {
    var handler;
    if (!thread) {
      return;
    }
    handler = (function(_this) {
      return function(arg) {
        var args, data, functionName, namespaceName, promiseId, testWorkerRpcChannelIdString;
        data = arg.data;
        if (!isPlainArray(data)) {
          return;
        }
        testWorkerRpcChannelIdString = data[0], namespaceName = data[1], functionName = data[2], promiseId = data[3], args = data[4];
        if (testWorkerRpcChannelIdString !== workerRpcChannelIdString) {
          return;
        }
        return _this._invokeLocalFunction(namespaceName, functionName, promiseId, args);
      };
    })(this);
    if (thread.addEventListener) {
      return thread.addEventListener('message', handler);
    } else {
      return thread.onmessage = handler;
    }
  };

  WorkerRpc.prototype._invokeLocalFunction = function(namespaceName, functionName, promiseId, args) {
    var localFunction, namespace, singleton;
    if (!((namespace = this._registry[namespaceName]) && (localFunction = namespace[functionName]))) {
      singleton = WorkerRpc.singleton;
      if (this !== singleton && (namespace = singleton._registry[namespaceName])) {
        localFunction = namespace[functionName];
      }
    }
    if (!localFunction) {
      console.warn(debugPrefix + "_onmessage: could not find: '" + namespaceName + "." + functionName + "'\n\nnamespaces: " + (Object.keys(this._registry).join(', ')) + "\nglobal namespaces: " + (singleton === this ? "(same)" : Object.keys(singleton._registry).join(', ')));
    }
    if (localFunction) {
      WorkerRpc.lastMessageReceivedFrom = this;
      return this._resolveOrRejectRemotePromise(promiseId, localFunction.apply(namespace, args));
    }
  };

  WorkerRpc.prototype._resolveOrRejectRemotePromise = function(promiseId, result) {
    if (promiseId == null) {
      return;
    }
    return Promise.resolve(result).then((function(_this) {
      return function(result) {
        return _this._send("promiseCallback", "success", null, [promiseId, result], function(error) {
          return _this._send("promiseCallback", "error", null, [promiseId, error]);
        });
      };
    })(this));
  };


  /*
  IN:   f: (promiseId) -> ignored
  OUT:  promise
  
  Creates a new promise, addes it to @_promises with a unique id, and invokes f, passing in
  the promise's id.
   */

  WorkerRpc._promises = {};

  WorkerRpc._nextPromiseId = 0;

  WorkerRpc._bindPromise = function(f) {
    var promise, promiseId;
    this._promises[promiseId = this._nextPromiseId++] = promise = Promise.newExternallyResolvable();
    f(promiseId);
    return promise;
  };

  WorkerRpc._resolvePromise = function(promiseId, result) {
    var ref;
    if ((ref = this._promises[promiseId]) != null) {
      ref.resolve(result);
    }
    return delete this._promises[promiseId];
  };

  WorkerRpc._rejectPromise = function(promiseId, error) {
    var ref;
    if ((ref = this._promises[promiseId]) != null) {
      ref.reject(error);
    }
    return delete this._promises[promiseId];
  };

  return WorkerRpc;

})(BaseObject);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Foundation, Tools,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(11);

module.exports = Foundation.Tools || Foundation.addNamespace('Tools', Tools = (function(superClass) {
  extend(Tools, superClass);

  function Tools() {
    return Tools.__super__.constructor.apply(this, arguments);
  }

  return Tools;

})(Neptune.Base));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var EmptyNode,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = EmptyNode = (function(superClass) {
  extend(EmptyNode, superClass);

  function EmptyNode() {
    return EmptyNode.__super__.constructor.apply(this, arguments);
  }

  EmptyNode.getter({
    present: function() {
      return false;
    }
  });

  return EmptyNode;

})(__webpack_require__(100));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, Foundation, Node, Nodes, array, arrayWith, compactFlatten, inspectedObjectLiteral, isPlainArray, isPlainObject, log, merge, mergeInto, objectWithout, peek, push,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(2);

arrayWith = Foundation.arrayWith, array = Foundation.array, peek = Foundation.peek, log = Foundation.log, push = Foundation.push, compactFlatten = Foundation.compactFlatten, objectWithout = Foundation.objectWithout, BaseObject = Foundation.BaseObject, isPlainArray = Foundation.isPlainArray, isPlainObject = Foundation.isPlainObject, inspectedObjectLiteral = Foundation.inspectedObjectLiteral, merge = Foundation.merge, mergeInto = Foundation.mergeInto;

Nodes = __webpack_require__(101);

module.exports = Node = (function(superClass) {
  extend(Node, superClass);

  function Node(_parent, options) {
    this._parent = _parent;
    Node.__super__.constructor.apply(this, arguments);
    this._parser = this._parent._parser;
    if (options) {
      this.offset = options.offset, this.matchLength = options.matchLength, this.ruleVariant = options.ruleVariant;
    }
    if (this._offset == null) {
      this._offset = this._parent.getNextOffset();
    }
    this._matchLength || (this._matchLength = 0);
    this._lastMatch = null;
    this._matches = null;
    this._matchPatterns = null;
    this._labelsApplied = false;
    this._ruleName = null;
    this._pluralRuleName = null;
    this._label = null;
    this._pluralLabel = null;
    this._pattern = null;
    this._nonMatch = false;
  }

  Node._createSubclassBase = function() {
    var NodeSubclass;
    return NodeSubclass = (function(superClass1) {
      extend(NodeSubclass, superClass1);

      function NodeSubclass() {
        return NodeSubclass.__super__.constructor.apply(this, arguments);
      }

      return NodeSubclass;

    })(this);
  };

  Node.createSubclass = function(options) {
    var klass;
    klass = this._createSubclassBase();
    if (options.name) {
      klass._name = klass.prototype._name = options.name;
    }
    if (options.ruleVarient) {
      klass.ruleVarient = options.ruleVarient;
      klass.rule = klass.ruleVariant.rule;
    }
    mergeInto(klass.prototype, objectWithout(options, "getter"));
    if (options.getter) {
      klass.getter(options.getter);
    }
    return klass;
  };

  Node.prototype.toString = function() {
    return this.text;
  };

  Node.setter("matches offset matchLength ruleVariant pattern");

  Node.getter("parent parser offset matchLength label pluralLabel ruleName pluralRuleName pattern nonMatch", {
    name: function() {
      return this._name || this.ruleName || this["class"].getName();
    },
    present: function() {
      return this._matchLength > 0 || this._nonMatch;
    },
    matches: function() {
      return this._matches || (this._matches = []);
    },
    source: function() {
      return this._parser.source;
    },
    isRoot: function() {
      return this._parser === this._parent;
    },
    absoluteOffset: function() {
      return this._parser.offsetInRootParserSource(this._offset);
    },
    ancestors: function(into) {
      if (into == null) {
        into = [];
      }
      this.parent.getAncestors(into);
      into.push(this);
      return into;
    },
    parseInfo: function() {
      if (this.subparseInfo) {
        return "subparse:" + this.ruleName + ":" + this.offset;
      } else {
        return this.ruleName + ":" + this.offset;
      }
    },
    rulePath: function() {
      var ancestor, ancestorRuleNames;
      ancestorRuleNames = (function() {
        var j, len, ref, results;
        ref = this.ancestors;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          ancestor = ref[j];
          results.push(ancestor.parseInfo);
        }
        return results;
      }).call(this);
      return ancestorRuleNames.join(" > ");
    },
    nextOffset: function() {
      return this.offset + this.matchLength;
    },
    text: function() {
      var matchLength, offset, ref, source;
      ref = this.subparseInfo || this, matchLength = ref.matchLength, offset = ref.offset, source = ref.source;
      if (matchLength === 0) {
        return "";
      } else {
        return source.slice(offset, offset + matchLength);
      }
    },
    ruleVariant: function() {
      var ref;
      return this._ruleVariant || ((ref = this._parent) != null ? ref.ruleVariant : void 0);
    },
    ruleName: function() {
      var ref;
      return this.ruleNameOrNull || ((ref = this.parent) != null ? ref.ruleName : void 0) || ("" + (this.pattern || 'no rule'));
    },
    ruleNameOrNull: function() {
      var ref, ref1;
      return ((ref = this["class"].rule) != null ? ref.getName() : void 0) || ((ref1 = this._ruleVariant) != null ? ref1.rule.getName() : void 0);
    },
    ruleNameOrPattern: function() {
      var ref;
      return this.ruleNameOrNull || ("" + (((ref = this.pattern) != null ? ref.pattern : void 0) || 'no rule'));
    },
    isRuleNode: function() {
      return this["class"].rule;
    },
    isPassThrough: function() {
      var ref;
      return (ref = this.ruleVariant) != null ? ref.isPassThrough : void 0;
    },
    nonPassThrough: function() {
      var ref;
      return !((ref = this.ruleVariant) != null ? ref.isPassThrough : void 0);
    }
  });

  Node.prototype.getNextText = function(length) {
    var nextOffset;
    nextOffset = this.nextOffset;
    return this.source.slice(nextOffset, nextOffset + length);
  };

  Node.prototype.formattedInspect = function() {
    return "CUSTOM";
  };

  Node.getter({
    parseTreePath: function() {
      var ref;
      return compactFlatten([(ref = this.parent) != null ? ref.parseTreePath : void 0, this["class"].getName()]);
    },
    presentMatches: function() {
      var j, len, m, ref, results;
      ref = this.matches;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        m = ref[j];
        if (typeof m.getPresent === "function" ? m.getPresent() : void 0) {
          results.push(m);
        }
      }
      return results;
    },
    isNonMatch: function() {
      return !!this.nonMatch;
    },
    isPartialMatch: function() {
      var j, len, match, ref;
      if (!this.nonMatch) {
        return false;
      }
      ref = this.presentMatches;
      for (j = 0, len = ref.length; j < len; j++) {
        match = ref[j];
        if (!match.nonMatch) {
          return true;
        }
      }
      return false;
    },
    isMatch: function() {
      return !this.nonMatch;
    },
    nonMatchingLeaf: function() {
      return this.nonMatch && this.matches.length === 1 && this.matches[0];
    },
    firstPartialMatchParent: function() {
      if (this.parent === this.parser || this.isPartialMatch) {
        return this;
      } else {
        return this.parent.firstPartialMatchParent;
      }
    },
    inspectedObjects: function() {
      var children, hasOneOrMoreMatchingChildren, label, match, matches, nonMatch, obj, parts, path, ref, ref1, ref2, ret, ruleName;
      match = this;
      matches = this.presentMatches;
      if (matches.length > 0) {
        path = [];
        while (matches.length === 1 && ((ref = matches[0].matches) != null ? ref.length : void 0) > 0) {
          path.push("" + (match.label ? match.label + ":" : "") + match.ruleName);
          match = matches[0];
          matches = match.presentMatches;
        }
        label = match.label, ruleName = match.ruleName, nonMatch = match.nonMatch;
        path = path.length === 1 ? path[0] : path.join(" > ");
        hasOneOrMoreMatchingChildren = false;
        children = (function() {
          var j, len, results;
          results = [];
          for (j = 0, len = matches.length; j < len; j++) {
            match = matches[j];
            if (!match.nonMatch) {
              hasOneOrMoreMatchingChildren = true;
            }
            results.push(match.inspectedObjects);
          }
          return results;
        })();
        parts = compactFlatten([
          path.length > 0 ? {
            path: path
          } : void 0, label ? {
            label: label
          } : void 0, children.length > 0 ? children : match.toString()
        ]);
        if (parts.length === 1) {
          parts = parts[0];
        }
        ret = (
          obj = {},
          obj["" + (nonMatch ? hasOneOrMoreMatchingChildren ? 'partialMatch-' : 'nonMatch-' : '') + ruleName] = parts,
          obj
        );
        return ret;
      } else if (this.nonMatch) {
        return {
          nonMatch: {
            offset: this.offset,
            pattern: "" + ((ref1 = this.pattern) != null ? ref1.pattern : void 0)
          }
        };
      } else {
        return {
          token: {
            offset: this.offset,
            length: this.matchLength,
            text: this.text,
            pattern: "" + ((ref2 = this.pattern) != null ? ref2.pattern : void 0),
            "class": this["class"].getName(),
            ruleName: this.ruleName
          }
        };
      }
    },
    detailedInspectedObjects: function() {
      var children, match, matches, ret;
      matches = this.matches;
      if (matches.length > 0) {
        children = (function() {
          var j, len, results;
          results = [];
          for (j = 0, len = matches.length; j < len; j++) {
            match = matches[j];
            results.push(match.detailedInspectedObjects);
          }
          return results;
        })();
        ret = {};
        ret[this.name] = children.length === 1 ? children[0] : children;
        return ret;
      } else {
        return this.text;
      }
    },
    plainObjects: function() {
      var match, ref, ret;
      ret = [
        {
          inspect: (function(_this) {
            return function() {
              return _this["class"].getName();
            };
          })(this)
        }
      ];
      if (((ref = this._matches) != null ? ref.length : void 0) > 0) {
        ret = ret.concat((function() {
          var j, len, ref1, results;
          ref1 = this.matches;
          results = [];
          for (j = 0, len = ref1.length; j < len; j++) {
            match = ref1[j];
            results.push(match.getPlainObjects());
          }
          return results;
        }).call(this));
      } else {
        ret = this.text;
      }
      return ret;
    }
  });

  Node.prototype.find = function(searchName, out) {
    var j, len, m, ref;
    if (out == null) {
      out = [];
    }
    ref = this.matches;
    for (j = 0, len = ref.length; j < len; j++) {
      m = ref[j];
      if (m.getName() === searchName) {
        out.push(m);
      } else {
        m.find(searchName, out);
      }
    }
    return out;
  };

  Node.prototype.subparse = function(subSource, options) {
    return this._parser.subparse(subSource, merge(options, {
      parentNode: this
    }));
  };


  /*
  IN: pattern, match - instanceof Node
  OUT: true if match was added
   */

  Node.prototype.addMatch = function(pattern, match) {
    if (!match) {
      return false;
    }
    this._matches = push(this._matches, this._lastMatch = match);
    this._matchPatterns = push(this._matchPatterns, pattern);
    this._matchLength = match.nextOffset - this.offset;
    return true;
  };

  Node.prototype.applyLabels = function() {
    if (!this._matches || this._labelsApplied) {
      return;
    }
    this._labelsApplied = true;
    return array(this._matches, (function(_this) {
      return function(match, i) {
        var label, pattern, pluralLabel, pluralRuleName, ruleName;
        pattern = _this._matchPatterns[i];
        match._parent = _this;
        if (pattern) {
          label = pattern.label, ruleName = pattern.ruleName;
          match._pattern = pattern;
          match._label = label;
          match._ruleName = ruleName;
        }
        if (label) {
          match._pluralLabel = pluralLabel = _this.parser.pluralize(label);
        }
        if (ruleName) {
          match._pluralRuleName = pluralRuleName = _this.parser.pluralize(ruleName);
        }
        label || (label = ruleName);
        pluralLabel || (pluralLabel = pluralRuleName);
        if (label && !(match instanceof Nodes.EmptyNode)) {
          _this._bindToLabelLists(pluralLabel, match);
          _this._bindToSingleLabels(label, match);
        }
        return match.applyLabels();
      };
    })(this));
  };

  Node.prototype._bindToLabelLists = function(pluralLabel, match) {
    if (this.__proto__[pluralLabel] == null) {
      return this[pluralLabel] = push(this[pluralLabel], match);
    }
  };

  Node.prototype._bindToSingleLabels = function(label, match) {
    if (this.__proto__[label] == null) {
      return this[label] = match;
    }
  };

  Node.prototype._addNonMatch = function(node) {
    return (this._nonMatches || (this._nonMatches = [])).push(node);
  };

  Node.prototype._addToParentAsNonMatch = function() {
    if (this._matchLength === 0) {
      this._matchLength = 1;
    }
    if (this.parent) {
      if (this.parent.matches) {
        if (!(0 <= this.parent.matches.indexOf(this))) {
          this._nonMatch = true;
          this.parent.matches.push(this);
          this.parent._presentMatches = null;
          if (this.parent._matchLength === 0) {
            this.parent._matchLength = 1;
          }
        }
        return this.parent._addToParentAsNonMatch();
      } else {
        return this;
      }
    } else {
      return this;
    }
  };

  return Node;

})(BaseObject);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var BabelBridge, Nodes,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BabelBridge = __webpack_require__(54);

module.exports = BabelBridge.Nodes || BabelBridge.addNamespace('Nodes', Nodes = (function(superClass) {
  extend(Nodes, superClass);

  function Nodes() {
    return Nodes.__super__.constructor.apply(this, arguments);
  }

  return Nodes;

})(Neptune.Base));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BaseObject, NonMatch, defineModule, log, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(2), log = ref.log, defineModule = ref.defineModule, BaseObject = ref.BaseObject;

defineModule(module, NonMatch = (function(superClass) {
  extend(NonMatch, superClass);

  function NonMatch(_node, _patternElement) {
    this._node = _node;
    this._patternElement = _patternElement;
  }

  NonMatch.getter("node patternElement", {
    inspectedObjects: function() {
      return {
        NonMatch: {
          patternElement: this.toString(),
          offset: this.node.offset
        }
      };
    }
  });

  NonMatch.prototype.toString = function() {
    return this.patternElement.ruleVariant.toString();
  };

  return NonMatch;

})(BaseObject));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, EmptyNode, EmptyOptionalNode, Foundation, Node, PatternElement, inspect, isPlainObject, isRegExp, isString, log, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(2);

ref = __webpack_require__(20), Node = ref.Node, EmptyNode = ref.EmptyNode, EmptyOptionalNode = ref.EmptyOptionalNode;

BaseObject = Foundation.BaseObject, isPlainObject = Foundation.isPlainObject, isString = Foundation.isString, isRegExp = Foundation.isRegExp, inspect = Foundation.inspect, log = Foundation.log;

module.exports = PatternElement = (function(superClass) {
  var escapeRegExp;

  extend(PatternElement, superClass);

  PatternElement.escapeRegExp = escapeRegExp = function(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  };

  PatternElement.regExpRegExp = /\/((?:[^\\\/]|\\.)+)\//;

  PatternElement.ruleRegExp = /([a-zA-Z0-9_]+)/;

  PatternElement.singleQuotedStringRegExp = /'((?:[^\\']|\\.)+)'/;

  PatternElement.doubleQuotedStringRegExp = /"((?:[^\\"]|\\.)+)"/;

  PatternElement.labelRegExp = /([a-zA-Z0-9_]+)\:/;

  PatternElement.patternElementRegExp = RegExp("(?:" + PatternElement.labelRegExp.source + ")?([!&])?(?:" + PatternElement.ruleRegExp.source + "|" + PatternElement.regExpRegExp.source + "|" + PatternElement.singleQuotedStringRegExp.source + "|" + PatternElement.doubleQuotedStringRegExp.source + ")([?*+])?");

  PatternElement.allPatternElementsRegExp = RegExp("" + PatternElement.patternElementRegExp.source, "g");

  function PatternElement(pattern1, arg) {
    this.pattern = pattern1;
    this.ruleVariant = (arg != null ? arg : {}).ruleVariant;
    PatternElement.__super__.constructor.apply(this, arguments);
    this.parse = null;
    this._init();
  }

  PatternElement.prototype.toString = function() {
    return "PatternElement(" + this.pattern + ")";
  };

  PatternElement.getter("isTokenPattern");

  PatternElement.property({
    label: null,
    optional: false,
    negative: false,
    couldMatch: false,
    zeroOrMore: false,
    oneOrMore: false,
    pattern: null,
    ruleName: null
  });

  PatternElement.getter({
    isBasicRulePattern: function() {
      return this.ruleName && !this.optional && !this.negative && !this.zeroOrMore && !this.oneOrMore && !this.couldMatch;
    },
    inspectedObjects: function() {
      return {
        PatternElement: this.props
      };
    },
    props: function() {
      var props;
      props = {
        pattern: this.pattern
      };
      if (this.ruleName) {
        props.ruleName = this.ruleName;
      }
      if (this.negative) {
        props.negative = true;
      }
      if (this.zeroOrMore) {
        props.zeroOrMore = true;
      }
      if (this.oneOrMore) {
        props.oneOrMore = true;
      }
      if (this.couldMatch) {
        props.couldMatch = true;
      }
      return props;
    }
  });

  PatternElement.prototype.parse = function(parentNode) {
    throw new Error("should be overridden");
  };

  PatternElement.prototype.parseInto = function(parentNode) {
    return !!parentNode.addMatch(this, this.parse(parentNode));
  };

  PatternElement.prototype._applyParseFlags = function() {
    var singleParser;
    singleParser = this.parse;
    if (this._optional) {
      this.parse = function(parentNode) {
        var match;
        if (match = singleParser(parentNode)) {
          return match;
        } else {
          return new EmptyOptionalNode(parentNode);
        }
      };
    }
    if (this._negative) {
      this.parse = function(parentNode) {
        return parentNode.parser._matchNegative(function() {
          var match;
          if (match = singleParser(parentNode)) {
            return null;
          } else {
            return new EmptyNode(parentNode);
          }
        });
      };
    }
    if (this.couldMatch) {
      this.parse = function(parentNode) {
        if (singleParser(parentNode)) {
          return new EmptyNode(parentNode);
        }
      };
    }
    if (this._zeroOrMore) {
      this.parseInto = (function(_this) {
        return function(parentNode) {
          var m, matchCount;
          matchCount = 0;
          while (parentNode.addMatch(_this, m = singleParser(parentNode))) {
            matchCount++;
            if (m.matchLength === 0) {
              break;
            }
          }
          return true;
        };
      })(this);
    }
    if (this._oneOrMore) {
      return this.parseInto = (function(_this) {
        return function(parentNode) {
          var m, matchCount;
          matchCount = 0;
          while (parentNode.addMatch(_this, m = singleParser(parentNode))) {
            matchCount++;
            if (m.matchLength === 0) {
              break;
            }
          }
          return matchCount > 0;
        };
      })(this);
    }
  };

  PatternElement.prototype._init = function() {
    var __, doubleQuotedString, pattern, prefix, ref1, regExp, res, singleQuotedString, string, suffix;
    this._isTokenPattern = false;
    pattern = this.pattern;
    if (isPlainObject(pattern)) {
      this._initPlainObject(pattern);
    } else if (isString(pattern)) {
      ref1 = res = pattern.match(PatternElement.patternElementRegExp), __ = ref1[0], this.label = ref1[1], prefix = ref1[2], this.ruleName = ref1[3], regExp = ref1[4], singleQuotedString = ref1[5], doubleQuotedString = ref1[6], suffix = ref1[7];
      if (prefix && suffix) {
        throw new Error("pattern can only have one prefix: !/& or one suffix: ?/+/*");
      }
      switch (prefix) {
        case "!":
          this.negative = true;
          break;
        case "&":
          this.couldMatch = true;
      }
      switch (suffix) {
        case "?":
          this.optional = true;
          break;
        case "+":
          this.oneOrMore = true;
          break;
        case "*":
          this.zeroOrMore = true;
      }
      string = singleQuotedString || doubleQuotedString;
      if (this.ruleName) {
        this._initRule(this.ruleName);
      } else if (regExp) {
        this._initRegExp(new RegExp(regExp));
      } else if (string) {
        this._initRegExp(new RegExp(escapeRegExp(string)));
      } else {
        throw new Error("invalid pattern: " + pattern);
      }
    } else if (isRegExp(pattern)) {
      this._initRegExp(pattern);
    } else {
      throw new Error("invalid pattern type: " + (inspect(pattern)));
    }
    return this._applyParseFlags();
  };

  PatternElement.prototype._initPlainObject = function(object) {
    var parseInto;
    this.negative = object.negative, this.oneOrMore = object.oneOrMore, this.zeroOrMore = object.zeroOrMore, this.optional = object.optional, this.parse = object.parse, parseInto = object.parseInto;
    if (parseInto) {
      this.parseInto = parseInto;
    }
    if (!(this.parse || parseInto)) {
      throw new Error("plain-object pattern definition requires 'parse' or 'parseInto'");
    }
  };

  PatternElement.prototype._initRule = function(ruleName) {
    return this.parse = function(parentNode) {
      var matchRule;
      matchRule = parentNode.parser.rules[ruleName];
      if (!matchRule) {
        throw new Error("no rule for " + ruleName);
      }
      return matchRule.parse(parentNode);
    };
  };

  PatternElement.prototype._initRegExp = function(regExp) {
    var flags;
    this._isTokenPattern = true;
    flags = "y";
    if (regExp.ignoreCase) {
      flags += "i";
    }
    regExp = RegExp(regExp.source, flags);
    return this.parse = function(parentNode) {
      var match, nextOffset, source;
      nextOffset = parentNode.nextOffset, source = parentNode.source;
      regExp.lastIndex = nextOffset;
      if (match = regExp.exec(source)) {
        return new Node(parentNode, {
          offset: nextOffset,
          matchLength: match[0].length
        });
      }
    };
  };

  return PatternElement;

})(BaseObject);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, Foundation, Rule, RuleVariant, log, merge, objectName, upperCamelCase,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(2);

RuleVariant = __webpack_require__(105);

BaseObject = Foundation.BaseObject, merge = Foundation.merge, upperCamelCase = Foundation.upperCamelCase, objectName = Foundation.objectName, log = Foundation.log;

module.exports = Rule = (function(superClass) {
  extend(Rule, superClass);

  function Rule(_name, _parserClass, _variants) {
    this._name = _name;
    this._parserClass = _parserClass;
    this._variants = _variants != null ? _variants : [];
  }

  Rule.getter("nodeClassName name variantNodeClasses", {
    numVariants: function() {
      return this._variants.length;
    }
  });

  Rule.prototype.addVariant = function(options) {
    var v;
    this._variants.push(v = new RuleVariant(merge(options, {
      variantNumber: this._variants.length + 1,
      rule: this,
      parserClass: this._parserClass
    })));
    return v;
  };

  Rule.getter({
    inspectObjects: function() {
      return [
        {
          inspect: (function(_this) {
            return function() {
              return "<Rule: " + _this._name + ">";
            };
          })(this)
        }, this._variants
      ];
    }
  });

  Rule.prototype.clone = function() {
    return new Rule(this._name, this._parserClass, this._variants.slice());
  };


  /*
  IN:
    parentNode: node instance
      This provides critical info:
        parentNode.source:      the source string
        parentNode.nextOffset:  the index in the source where parsing starts
        parentNode.parser:      access to the parser object
  
  EFFECT: If returning a new Node, it is expected that node's parent is already set to parentNode
  OUT: Node instance if parsing was successful
   */

  Rule.prototype.parse = function(parentNode) {
    var cached, i, len, match, nextOffset, parser, ref, v;
    parser = parentNode.parser, nextOffset = parentNode.nextOffset;
    if (cached = parser._cached(this.name, nextOffset)) {
      if (cached === "no_match") {
        return null;
      } else {
        return cached;
      }
    }
    ref = this._variants;
    for (i = 0, len = ref.length; i < len; i++) {
      v = ref[i];
      if (match = v.parse(parentNode)) {
        return parser._cacheMatch(this.name, match);
      }
    }
    return parser._cacheNoMatch(this.name, nextOffset);
  };

  return Rule;

})(BaseObject);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, Foundation, Node, PatternElement, RuleVariant, allPatternElementsRegExp, compactFlatten, inspect, isPlainObject, isString, log, merge, pad, upperCamelCase,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(2);

PatternElement = __webpack_require__(103);

Node = __webpack_require__(20).Node;

BaseObject = Foundation.BaseObject, log = Foundation.log, isPlainObject = Foundation.isPlainObject, isString = Foundation.isString, compactFlatten = Foundation.compactFlatten, inspect = Foundation.inspect, pad = Foundation.pad, upperCamelCase = Foundation.upperCamelCase, merge = Foundation.merge;

allPatternElementsRegExp = PatternElement.allPatternElementsRegExp;

module.exports = RuleVariant = (function(superClass) {
  extend(RuleVariant, superClass);

  function RuleVariant(options1) {
    var ref;
    this.options = options1;
    this._toString = null;
    if (!isPlainObject(this.options)) {
      this.options = {
        pattern: this.options
      };
    }
    ref = this.options, this.pattern = ref.pattern, this.rule = ref.rule, this.parserClass = ref.parserClass;
    this._variantNodeClassName = this.options.variantNodeClassName;
    this._initVariantNodeClass(this.options);
    if (this.options.parse) {
      this.parse = this.options.parse;
    }
  }

  RuleVariant.property({
    passThroughRuleName: null
  });

  RuleVariant.setter("variantNodeClassName");

  RuleVariant.getter({
    isPassThrough: function() {
      return this._passThroughRuleName;
    },
    name: function() {
      return this.variantNodeClassName + "Variant";
    },
    numVariants: function() {
      return this.rule.numVariants;
    },
    patternElements: function() {
      return this._patternElements || (this._patternElements = this._generatePatternElements());
    }
  });

  RuleVariant.prototype._generatePatternElements = function() {
    var part, parts, pes;
    pes = (function() {
      var i, len, results;
      if (isString(this.pattern)) {
        parts = this.pattern.match(allPatternElementsRegExp);
        if (!parts) {
          throw new Error("no pattern-parts found in: " + (inspect(this.pattern)));
        }
        results = [];
        for (i = 0, len = parts.length; i < len; i++) {
          part = parts[i];
          results.push(new PatternElement(part, {
            ruleVariant: this
          }));
        }
        return results;
      } else {
        return [
          new PatternElement(this.pattern, {
            ruleVariant: this
          })
        ];
      }
    }).call(this);
    pes = compactFlatten(pes);
    if (pes.length === 1 && pes[0].isBasicRulePattern) {
      this.passThroughRuleName = pes[0].ruleName;
    }
    return pes;
  };

  RuleVariant.prototype.inspect = function() {
    return this.toString();
  };

  RuleVariant.prototype.toString = function() {
    return this._toString || (this._toString = this.name + ": " + this.patternString);
  };

  RuleVariant.getter({
    patternString: function() {
      return this.pattern || (this.options.parse && 'function()');
    }
  });


  /*
  see: BabelBridge.Rule#parse
   */

  RuleVariant.prototype.parse = function(parentNode) {
    var i, len, node, parser, patternElement, ref;
    node = new this.VariantNodeClass(parentNode, {
      ruleVariant: this
    });
    parser = parentNode.parser;
    ref = this.patternElements;
    for (i = 0, len = ref.length; i < len; i++) {
      patternElement = ref[i];
      if (!parser.tryPatternElement(patternElement, node, this)) {
        return false;
      }
    }
    return node;
  };

  RuleVariant.getter({
    variantNodeClassName: function() {
      var baseName, ref;
      if (this._variantNodeClassName) {
        return this._variantNodeClassName;
      }
      baseName = upperCamelCase(this.rule.name) + "Rule" + (this.pattern ? upperCamelCase(((ref = ("" + this.pattern).match(/[a-zA-Z0-9_]+/g)) != null ? ref.join('_') : void 0) || "") : this.parse ? "CustomParser" : void 0);
      return this._variantNodeClassName = baseName;
    }
  });


  /*
  OPTIONS:
  
    node / nodeClass
      TODO: pick one, I like 'node' today
  
    extends / baseClass / nodeBaseClass
      TODO: pick one, I like 'extends' today
   */

  RuleVariant.prototype._initVariantNodeClass = function(options) {
    var nodeBaseClass, nodeSubclassOptions, rule;
    rule = options.rule;
    nodeSubclassOptions = options.node || options.nodeClass || options;
    nodeBaseClass = options["extends"] || options.baseClass || options.nodeBaseClass || Node;
    return this.VariantNodeClass = (typeof nodeClass !== "undefined" && nodeClass !== null ? nodeClass.prototype : void 0) instanceof Node ? nodeClass : nodeBaseClass.createSubclass(merge({
      name: this.variantNodeClassName,
      ruleVarient: this.ruleVarient
    }, nodeSubclassOptions));
  };

  return RuleVariant;

})(BaseObject);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var Foundation, Tools, peek;

Foundation = __webpack_require__(2);

peek = Foundation.peek;

module.exports = Tools = (function() {
  var getLineColumn;

  function Tools() {}

  Tools.getLineColumn = getLineColumn = function(string, offset) {
    var lines;
    if (string.length === 0 || offset === 0) {
      return {
        line: 1,
        column: 1
      };
    }
    lines = (string.slice(0, offset - 1) + " ").split("\n");
    return {
      line: lines.length,
      column: peek(lines).length
    };
  };

  Tools.getLineColumnString = function(string, offset) {
    var column, line, ref;
    ref = getLineColumn(string, offset), line = ref.line, column = ref.column;
    return line + ":" + column;
  };

  return Tools;

})();


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(204).addModules({
  Accessors: __webpack_require__(113),
  Blocks: __webpack_require__(114),
  Classes: __webpack_require__(115),
  Comments: __webpack_require__(116),
  Comprehensions: __webpack_require__(117),
  ControlStructures: __webpack_require__(118),
  DestructuringAssignment: __webpack_require__(119),
  Expressions: __webpack_require__(120),
  Functions: __webpack_require__(121),
  LiteralArrays: __webpack_require__(122),
  LiteralObjects: __webpack_require__(123),
  Literals: __webpack_require__(125),
  LiteralStrings: __webpack_require__(124),
  Operators: __webpack_require__(126),
  RegExp: __webpack_require__(127),
  Root: __webpack_require__(128),
  Statements: __webpack_require__(129),
  TagMacros: __webpack_require__(130),
  Tokens: __webpack_require__(131),
  Values: __webpack_require__(132)
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var Merge, compactFlatten, isPlainObject;

compactFlatten = __webpack_require__(32).compactFlatten;

isPlainObject = __webpack_require__(57).isPlainObject;

module.exports = Merge = (function() {
  var deepMerge, merge, mergeInto, pureMerge;

  function Merge() {}


  /*
  
  merge "flattens" its arguments and then adds all keys from all objects in
  the list into a new object which is returned.
  
  return: new object
  
  The first object's keys are added first. If two or more objects have the same
  keys, the value set in the result is the last object's in the list with that key.
   */

  Merge.merge = merge = function() {
    return mergeInto({}, arguments);
  };


  /*
  The same as 'merge' with one difference:
  
  Instead of a new object, all objects are merged into the first object in the list.
  
  return: first object in the flattened list
  return: null if no source objects
   */

  Merge.mergeInto = mergeInto = function() {
    var i, j, k, ref, result, source, sources, v;
    sources = compactFlatten(arguments);
    if (sources.length === 0) {
      return null;
    }
    result = sources[0] || {};
    for (i = j = 1, ref = sources.length; j < ref; i = j += 1) {
      source = sources[i];
      for (k in source) {
        v = source[k];
        result[k] = v;
      }
    }
    return result;
  };


  /*
  Just like mergeInfo except only merge into the result object UNLESS result.hasOwnProperty
  
  if
    mergeInfo a, b is just like merge a, b except it modifies and returns a instead of returning a new object
  then
    mergeIntoUnless b, a is just like merge a, b except it modifies and returns b instead of returning a new object
  
  Note: mergeIntoUnless a, b, c, d, e, f is like merge f, e, d, c, b, a
   */

  Merge.mergeIntoUnless = function() {
    var i, j, k, ref, result, source, sources, v;
    sources = compactFlatten(arguments);
    if (sources.length === 0) {
      return null;
    }
    result = sources[0] || {};
    for (i = j = 1, ref = sources.length; j < ref; i = j += 1) {
      source = sources[i];
      for (k in source) {
        v = source[k];
        if (!result.hasOwnProperty(k)) {
          result[k] = v;
        }
      }
    }
    return result;
  };

  Merge.deepMerge = deepMerge = function() {
    var k, list, out, v, val;
    list = compactFlatten(arguments);
    out = merge(list);
    for (k in out) {
      v = out[k];
      if (isPlainObject(v)) {
        out[k] = deepMerge((function() {
          var j, len, results;
          results = [];
          for (j = 0, len = list.length; j < len; j++) {
            val = list[j];
            results.push(val[k]);
          }
          return results;
        })());
      }
    }
    return out;
  };

  Merge.hasAllProps = function(o1, o2) {
    var k, v;
    for (k in o1) {
      v = o1[k];
      if (!o2.hasOwnProperty(k)) {
        return false;
      }
    }
    return true;
  };

  Merge.pureMerge = pureMerge = function() {
    var j, last, len, source, sources;
    sources = compactFlatten(arguments);
    if (sources.length === 0) {
      return null;
    }
    if (sources.length === 1) {
      return sources[0];
    }
    last = sources[sources.length - 1];
    for (j = 0, len = sources.length; j < len; j++) {
      source = sources[j];
      if (source !== last) {
        if (!Merge.hasAllProps(source, last)) {
          return Merge.merge(sources);
        }
      }
    }
    return last;
  };


  /*
  I might consider adding "o" - which works like Object-Tree constructors:
    First, it compact-flattens args
    Second, it gathers up and merges all plain-objects in its arguments list
    Last, all remaining items get added to the "children" list
  The question is, what does it return? Options:
  
    OPTION: If only plain-objects after compact-flatten, just return the merged object ELSE:
  
  Options if both objects and non-object values are present:
    a. return compactFlatten [plainObject, nonObjectValues]
    b. return merge plainObject, children: nonObjectValues
    c. return new MClass plainObject, nonObjectValues
      class MClass extends BaseObject
        @properties "props children"
        constructor: (@props, @children) ->
   */

  Merge.m = pureMerge;

  return Merge;

})();


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var StringCase, compactFlatten;

compactFlatten = __webpack_require__(32).compactFlatten;

module.exports = StringCase = (function() {
  function StringCase() {}

  StringCase.getCodeWords = function(str) {
    var _words, word, words;
    _words = str.match(/[a-zA-Z][a-zA-Z0-9]*/g);
    if (!_words) {
      return [];
    }
    words = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = _words.length; i < len; i++) {
        word = _words[i];
        results.push(word.match(/(?:[A-Z]{2,}(?![a-z]))|[A-Z][a-z0-9]*|[a-z0-9]+/g));
      }
      return results;
    })();
    return compactFlatten(words);
  };

  StringCase.capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  StringCase.decapitalize = function(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  StringCase.getLowerCaseCodeWords = function(str) {
    var i, len, ref, results, word;
    ref = StringCase.getCodeWords(str);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      word = ref[i];
      results.push(word.toLowerCase());
    }
    return results;
  };

  StringCase.upperCamelCase = function(str) {
    var word;
    return ((function() {
      var i, len, ref, results;
      ref = this.getLowerCaseCodeWords(str);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        word = ref[i];
        results.push(this.capitalize(word));
      }
      return results;
    }).call(StringCase)).join("");
  };

  StringCase.lowerCamelCase = function(str) {
    return StringCase.decapitalize(StringCase.upperCamelCase(str));
  };

  StringCase.snakeCase = function(str) {
    return (StringCase.getLowerCaseCodeWords(str)).join("_");
  };

  StringCase.dashCase = function(str) {
    return (StringCase.getLowerCaseCodeWords(str)).join("-");
  };

  return StringCase;

})();


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(205);


/***/ }),
/* 111 */
/***/ (function(module, exports) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var ArrayCompactFlatten, arraySlice, doFlattenInternal, flattenIfNeeded, isArguments, isArrayOrArguments, isPlainArray, keepAll, keepUnlessNullOrUndefined, needsFlatteningOrCompacting;

arraySlice = Array.prototype.slice;

isArguments = function(o) {
  return o && (typeof o.callee === "function") && (typeof o.length === "number");
};

isPlainArray = Array.isArray || (function(_this) {
  return function(o) {
    return o.constructor === Array;
  };
})(this);

isArrayOrArguments = function(o) {
  return o && (isPlainArray(o) || isArguments(o));
};

doFlattenInternal = function(array, keepTester, output) {
  var a, i, len;
  output || (output = []);
  for (i = 0, len = array.length; i < len; i++) {
    a = array[i];
    if (isArrayOrArguments(a)) {
      flattenIfNeeded(a, keepTester, output);
    } else if (keepTester(a)) {
      output.push(a);
    }
  }
  return output;
};

needsFlatteningOrCompacting = function(array, keepTester) {
  var a, i, len;
  for (i = 0, len = array.length; i < len; i++) {
    a = array[i];
    if (isArrayOrArguments(a) || !keepTester(a)) {
      return true;
    }
  }
  return false;
};

flattenIfNeeded = function(array, keepTester, output) {
  var i, len, v;
  if (needsFlatteningOrCompacting(array, keepTester)) {
    return doFlattenInternal(array, keepTester, output);
  } else if (output) {
    for (i = 0, len = array.length; i < len; i++) {
      v = array[i];
      output.push(v);
    }
    return output;
  } else if (array.constructor !== Array) {
    return arraySlice.call(array);
  } else {
    return array;
  }
};

keepAll = function() {
  return true;
};

keepUnlessNullOrUndefined = function(a) {
  return a !== null && a !== void 0;
};

module.exports = ArrayCompactFlatten = (function() {
  function ArrayCompactFlatten() {}

  ArrayCompactFlatten.compact = function(array, keepTester) {
    var a, i, len;
    if (keepTester == null) {
      keepTester = keepUnlessNullOrUndefined;
    }
    for (i = 0, len = array.length; i < len; i++) {
      a = array[i];
      if (!keepTester(a)) {
        return (function() {
          var j, len1, results;
          results = [];
          for (j = 0, len1 = array.length; j < len1; j++) {
            a = array[j];
            if (keepTester(a)) {
              results.push(a);
            }
          }
          return results;
        })();
      }
    }
    return array;
  };

  ArrayCompactFlatten.flatten = function(firstArg) {
    return flattenIfNeeded(arguments.length === 1 ? isArrayOrArguments(firstArg) ? firstArg : [firstArg] : arguments, keepAll);
  };

  ArrayCompactFlatten.compactFlatten = function(array, keepTester) {
    if (keepTester == null) {
      keepTester = keepUnlessNullOrUndefined;
    }
    return flattenIfNeeded(array, keepTester);
  };

  return ArrayCompactFlatten;

})();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var arrayIterableTest, each, extendedEach, isNonNegativeInt;

isNonNegativeInt = function(x) {
  return ((x | 0) === x) && x >= 0;
};

arrayIterableTest = function(source) {
  return source && isNonNegativeInt(source.length) && source.constructor !== Object;
};


/*
Notes:

Comprehension loop variables are always going to mask any variables
defined in a higher scope.

With e/ee we put all the when, with and key blocks in the same function,
so they naturally share one loop-scope.
 */

module.exports = {

  /*
  IN:
    source:
      array-like (source.length is a number >= 0)
      null or undefined
      otherwise, properties are iterated
  
    out: the value that will be returned.
      out is initialized to source if out == undefined.
      This is for convenience and code-reduction in the "each-without-into-set" case.
  
    withBlock: (currentIterationValue, currentIterationKey, returning) -> ignored
  
  USE: object, array, each
   */
  each: each = function(source, out, withBlock) {
    var i, k, len, v;
    if (out === "undefined") {
      out = source;
    }
    if (source != null) {
      if (arrayIterableTest(source)) {
        for (k = i = 0, len = source.length; i < len; k = ++i) {
          v = source[k];
          withBlock(v, k, out);
        }
      } else {
        for (k in source) {
          v = source[k];
          withBlock(v, k, out);
        }
      }
    }
    return out;
  },
  e: each,

  /*
  enhanced-each
  
  Different from each :
    updating-out:   out is updated with the result of every withBlock call
    break-support:  withBlock is passed a forth argument: setShouldBreak
  
    NOTE: out is only initialized to source, if out == undefined. Any updated out
    could be set to undefined and that would be returned.
  
  setShouldBreak:
    IN: ()
    OUT: the undefined value
    EFFECT: this will be the last call to withBlock &
      the value returned by this last call will be the result
      of ee.
  
  This should be enough for all features:
    - "return" - requires a setShouldReturn function in the enclosing scope, and setShouldBreak
    - "next" - becomes a return-statement in withBlock - this works with the basic "e"
    - "break" - setShouldBreak();return out;
    - "break value" - setShouldBreak();return value;
    - "reduce" iteration - needs updating-out
    - "find" iteration - needs break-with-value
  
  Cons:
    possible performance and code-size hit:
    - ee requires more code in the withBlock: {...; return out;}
    - ee creates a setShouldBreak function every time
  
    But, with testing, we may decided those don't really matter.
  
  EXAMPLES:
  
    find v from o with v > 10
  
    Caf.ee o, null, (v, k, out, brk) ->
      brk v if v > 10
  
  
    reduce v1, v2 from o with f v1, v2
  
     * I think we need to remove the out = source default.
  
    Caf.ee o, undefined, (v2, k, v1, brk) ->
      if v1 == undefined
        v2
      else
        f v1, v2
  
     * example: object v from o with v + 1
    Caf.e(o, {}, function(v, k, into) {
      return into[k] = v + 1;
    });
  
     * example: object v from o when v > 3 with v + 1
    Caf.e(o, {}, function(v, k, into) {
      if( v > 3 ) {
        return into[k] = v + 1;
      };
    });
  
     * example: object o
    Caf.e(o, {}, function(v, k, into) {
      return into[k] = v;
    });
   */
  extendedEach: extendedEach = function(source, out, withBlock) {
    var i, k, len, setShouldBreak, shouldBreak, v;
    if (out === "undefined") {
      out = source;
    }
    if (source != null) {
      shouldBreak = false;
      setShouldBreak = function() {
        shouldBreak = true;
        return void 0;
      };
      if (arrayIterableTest(source)) {
        for (k = i = 0, len = source.length; i < len; k = ++i) {
          v = source[k];
          out = withBlock(v, k, out, setShouldBreak);
          if (shouldBreak) {
            break;
          }
        }
      } else {
        for (k in source) {
          v = source[k];
          out = withBlock(v, k, out, setShouldBreak);
          if (shouldBreak) {
            break;
          }
        }
      }
    }
    return out;
  },
  ee: extendedEach
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _import, compactFlatten, definingModule, getSuper, isDirectPrototypeOf, isFalse, isFunction, isTrue,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

compactFlatten = __webpack_require__(0).compactFlatten;

definingModule = null;

module.exports = {
  "in": function(a, b) {
    return indexOf.call(b, a) >= 0;
  },
  mod: function(a, b) {
    return modulo(a, b);
  },
  div: function(a, b) {
    return Math.floor(a / b);
  },
  pow: function(a, b) {
    return Math.pow(a, b);
  },
  existsOr: function(a, b) {
    return a != null ? a : b();
  },
  exists: function(a) {
    return (a !== null && a !== void 0) || void 0;
  },

  /*
  Implements the 'import' function.
  
  IN:
    importNames: array of strings of identifiers to import
    libs: array of objects to import from, first has highest priority.
  
  OUT: and object with one property per importName
   */
  "import": _import = function(importNames, libs) {
    var i, importName, j, len, len1, lib, out, v;
    out = {};
    libs = compactFlatten(libs);
    for (i = 0, len = importNames.length; i < len; i++) {
      importName = importNames[i];
      for (j = 0, len1 = libs.length; j < len1; j++) {
        lib = libs[j];
        if ((v = lib[importName]) != null) {
          out[importName] = v;
          break;
        }
      }
    }
    return out;
  },
  isTrue: isTrue = function(a) {
    return (a != null) && a !== false;
  },
  isFalse: isFalse = function(a) {
    return a === false || (a == null);
  },
  isFunction: isFunction = function(a) {
    return typeof a === "function";
  },
  isDirectPrototypeOf: isDirectPrototypeOf = function(o, prototype) {
    return !isFunction(o) && prototype.constructor === o.constructor;
  },

  /*
  All about getSuper in ES6 land:
  
    class A {}
    class B extends A {}
    class C extends B {}
  
    a = new A
    b = new B
    c = new C
  
    getSuper(B) == A
    getSuper(C) == B
  
    getSuper(A.prototype) == Object.prototype
    getSuper(B.prototype) == A.prototype
    getSuper(C.prototype) == B.prototype
  
    getSuper(b) == A.prototype
    getSuper(c) == B.prototype
  
  prototype map:
  
  KEY:
    <->
       <-- .constructor
       --> .prototype
    ^  Object.prototypeOf
  
  MAP:
    A <-> aPrototype
  
    ^     ^     ^
    |     |     a
    |     |
  
    B <-> bPrototype
  
    ^     ^     ^
    |     |     b
    |     |
  
    C <-> cPrototype
  
                ^
                c
  
  Definition of super:
  
    if instance then prototype's prototype
    else prototype
   */
  getSuper: getSuper = function(o) {
    var _super, out;
    if (!((typeof o === "object") || (typeof o === "function"))) {
      throw new Error("getSuper expecting an object");
    }
    _super = Object.getPrototypeOf(o);
    out = _super === Function.prototype && o.__super__ ? o.__super__.constructor : isDirectPrototypeOf(o, _super) ? Object.getPrototypeOf(_super) : _super;
    return out;
  },

  /*
  IN:
    klass a new class-function object
    init: (klass) -> outKlass
  
  OUT: if isF outKlass.createWithPostCreate
    outKlass.createWithPostCreate outKlass
  OR
    outKlass (from init)
  
  EFFECT:
    outKlass.createWithPostCreate?(outKlass) ? outKlass
   */
  defClass: function(klass, init) {
    var ref;
    if (init != null) {
      init.call(klass, klass, getSuper(klass), getSuper(klass.prototype));
    }
    return (ref = typeof klass.createWithPostCreate === "function" ? klass.createWithPostCreate(klass) : void 0) != null ? ref : klass;
  },
  getModuleBeingDefined: function() {
    return definingModule;
  },

  /*
  IN:
    defineFunciton ||
   */
  defMod: function(_module, a) {
    var lastModule, result;
    lastModule = definingModule;
    definingModule = _module;
    result = _module.exports = a();
    definingModule = lastModule;
    return result;
  },
  i: _import,
  t: isTrue,
  f: isFalse,
  isF: isFunction
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var k, out, ref, ref1, ref2, v;

module.exports = out = {};

ref = __webpack_require__(0);
for (k in ref) {
  v = ref[k];
  out[k] = v;
}

ref1 = __webpack_require__(2);
for (k in ref1) {
  v = ref1[k];
  out[k] = v;
}

ref2 = __webpack_require__(3);
for (k in ref2) {
  v = ref2[k];
  out[k] = v;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let Package = __webpack_require__(213);
  return {
    version: Package.version,
    compile: function(source, options) {
      let CaffeineScriptParser = __webpack_require__(60);
      return {
        compiled: {
          js: CaffeineScriptParser.parse(source, options)
            .getStn()
            .transform()
            .toJsModule()
        }
      };
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let BabelBridge = __webpack_require__(7), Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [BabelBridge, global]));
  return function() {
    this.rule({ blocks: "block+" });
    this.rule({
      block: "_? block:actualBlock",
      toEolAndBlock: "_? block:actualToEolAndBlock"
    });
    return this.rule({
      actualBlock: Extensions.IndentBlocks.getPropsToSubparseBlock(),
      actualToEolAndBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(),
      unparsedBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "anything"
      }),
      anything: { pattern: /(.|\n)*$/ }
    });
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2);
  return {
    classDefinition: {
      pattern: "/class/ _ className:identifier classExtends:_extendsClause? body:block?",
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2);
  return function() {
    return this.rule(
      {
        _: "/ +/ comment?",
        end: "lineEndComment",
        comment: [
          { pattern: "/##[^\n]*/ unparsedBlock*" },
          { pattern: "/#(?!#)[^\n]*/" }
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    ArtFoundation,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule(
      {
        controlStatement: [
          {
            pattern: "ifUnlessWhileUntil _ expressionWithOneLessBlock block elseClause?"
          },
          {
            pattern: "ifUnlessWhileUntil _ expression _ thenDo _ complexExpression elseClause?"
          }
        ]
      },
      {
        stnFactory: "ControlOperatorStn",
        stnProps: function() {
          let base;
          return {
            operand: this.ifUnlessWhileUntil.toString(),
            joiner: Caf.exists(base = this.thenDo) && base.toString()
          };
        }
      }
    );
    this.rule(
      {
        controlStatement: [
          {
            pattern: "/try/ _ body:complexExpression _? optionalCatch:catchClause?"
          },
          { pattern: "/try/ body:block" }
        ]
      },
      { stnFactory: "TryStn" }
    );
    this.rule({ catchClause: "/catch(?=[ \n])/ _? identifier? body:block?" }, {
      stnFactory: "CatchStn"
    });
    this.rule({
      controlStatement: {
        pattern: "/do/ _ functionDefinition",
        stnFactory: "DoStn"
      }
    });
    this.rule(
      {
        controlStatement: [
          {
            pattern: "/switch/ _ condition:expressionWithOneLessBlock? _? switchBodyBlock"
          },
          { pattern: "/switch/ _ condition:expression? switchBody" },
          { pattern: "/switch/ switchBodyBlock" },
          { pattern: "/switch/ switchBody" }
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
          {
            pattern: "end? when _ whenValue:expressionWithOneLessBlock thenDo:block"
          },
          {
            pattern: "end? when _ whenValue:complexExpression thenDo:thenClause"
          }
        ]
      },
      { stnFactory: "SwitchWhenStn" }
    );
    return this.rule({
      ifUnlessWhileUntil: /if|unless|while|until/,
      thenDo: /then|do/,
      when: /when/,
      elseClause: [
        { pattern: "_else block" },
        { pattern: "_else _ complexExpression" }
      ]
    });
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2);
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
          { pattern: "identifier _? etc" },
          { pattern: "identifier destructuringDefault:destructuringDefault?" }
        ]
      },
      {
        stnFactory: "DestructuringIdentifierStn",
        stnProps: function() {
          return { etc: !!this.etc };
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    SemanticTree = __webpack_require__(8),
    matchBlock,
    upToButNotEol,
    Extensions,
    ArrayStn;
  ({ Extensions, ArrayStn } = Caf.i(["Extensions", "ArrayStn"], [
    ArtFoundation,
    BabelBridge,
    SemanticTree,
    global
  ]));
  ({ matchBlock } = Extensions.IndentBlocks);
  upToButNotEol = /[^\n]*/y;
  return function() {
    this.rule({
      lineStartExpression: "multilineImplicitObject",
      complexExpression: [
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
                rule: "complexExpression",
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
        pattern: "statement*",
        getStn: function() {
          return this.statements.length === 1
            ? this.statements[0].getStn()
            : ArrayStn(this.getMatchStns());
        }
      }
    });
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    getPropertySetters,
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    ArtFoundation,
    BabelBridge,
    global
  ]));
  getPropertySetters = function(node, list = []) {
    let prop;
    if (node) {
      if (prop = Caf.isF(node.shouldSetProperty) && node.shouldSetProperty()) {
        list.push(prop);
      } else {
        Caf.e(node.matches, undefined, (match, k, into) => {
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
          return { bound: this._arrow_.text.match(/=>/) };
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
      argDefList: [
        "argDef _comma_ argDefList",
        "argDef _ argDefList",
        "argDef"
      ],
      argDef: {
        pattern: "at:/@/? identifier argIdentifierExtension?",
        stnFactory: "FunctionDefinitionArgStn",
        stnProps: function() {
          let base;
          return {
            rest: !!(Caf.exists(base = this.argIdentifierExtension) &&
              base.etc),
            assignThisProperty: !!this.at
          };
        }
      },
      argIdentifierExtension: ["defaultValue", "etc"],
      defaultValue: { pattern: "_equals_ expression" }
    });
    this.rule({ etc: "'...'" });
    this.rule({
      superFunctionInvocation: [
        "openParen_ valueList? _closeParen",
        "_? complexExpression",
        "_? valueListBlock"
      ]
    });
    return this.rule(
      {
        functionInvocation: [
          "existanceTest:questionMark? openParen_ values:valueList? _closeParen",
          "existanceTest:questionMark? _? values:complexExpression",
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
          let base;
          return Caf.exists(base = this.values) && base.getStn();
        }
      }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    ArtFoundation,
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
      valueListBlockSubParse: "end* statement*"
    });
    this.rule({
      valueList: [
        { pattern: "element:arrayValue _comma_ valueList" },
        { pattern: "element:literal _ valueList" },
        { pattern: "element:arrayValue" }
      ]
    });
    return this.rule({
      arrayValue: [
        { pattern: "identifier etc", stnFactory: "ArraySpreadElementStn" },
        { pattern: "expression" }
      ]
    });
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    SemanticTree = __webpack_require__(8),
    Extensions,
    ObjectStn;
  ({ Extensions, ObjectStn } = Caf.i(["Extensions", "ObjectStn"], [
    ArtFoundation,
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
          children = Caf.e(this.getMatchStns(), [], (m, k, into) => {
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
          "propName _colon_ propValue:complexExpression",
          "propName _colon_ propValue:propertyValueBlock"
        ]
      },
      { name: "literalObjectProperty", stnFactory: "ObjectPropValueStn" }
    );
    this.rule({
      propertyValueBlock: "rValueBlock",
      propName: { pattern: "computedPropName" },
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    SemanticTree = __webpack_require__(8),
    Lib = __webpack_require__(15),
    Extensions,
    StringStn,
    InterpolatedStringStn;
  ({ Extensions, StringStn, InterpolatedStringStn } = Caf.i(
    ["Extensions", "StringStn", "InterpolatedStringStn"],
    [ArtFoundation, BabelBridge, SemanticTree, Lib, global]
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
          pattern: "':' string:unquotedString",
          getStn: function() {
            return StringStn({ value: this.string.toString() }).compactNewLines(
              true,
              true
            );
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
          let base;
          if (this.mid.matchLength > 0) {
            appendTo.push(StringStn({ value: this.mid.toString() }));
          }
          Caf.exists(base = this.interpolation) &&
            base.getStnChildren(appendTo);
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
    return this.rule(
      {
        dqStringInterpolation: "interpolationStart expression interpolationEnd mid:dqStringMiddle interpolation:dqStringInterpolation?",
        sqStringInterpolation: "interpolationStart expression interpolationEnd mid:sqStringMiddle interpolation:sqStringInterpolation?",
        blockStringInterpolation: "interpolationStart expression interpolationEnd mid:blockStringMiddle interpolation:blockStringInterpolation?"
      },
      {
        getStnChildren: function(appendTo = []) {
          let base;
          appendTo.push(this.expression.getStn());
          if (this.mid.matchLength > 0) {
            appendTo.push(StringStn({ value: this.mid.toString() }));
          }
          Caf.exists(base = this.interpolation) &&
            base.getStnChildren(appendTo);
          return appendTo;
        }
      }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2);
  return function() {
    this.rule({
      literal: [
        "nullLiteral",
        "boolLiteral",
        "numberLiteral",
        "stringLiteral",
        "regExpLiteral",
        "bracketedObject",
        "brackedArray"
      ]
    });
    return this.rule(
      {
        boolLiteral: ["true", "false"],
        nullLiteral: "/null/",
        numberLiteral: /-?[0-9]+/,
        true: "/(true|yes|on)(?![a-zA-Z0-9]+)/",
        false: "/(false|no|off)(?![a-zA-Z0-9]+)/"
      },
      {
        stnFactory: "SimpleLiteralStn",
        stnProps: function() {
          let v;
          return {
            value: (() => {
              switch (v = this.toString()) {
                case "true":
                case "yes":
                case "on":
                  return "true";
                case "false":
                case "no":
                case "off":
                  return "false";
                default:
                  return v;
              }
            })()
          };
        }
      }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    OperatorHelper = __webpack_require__(33),
    SemanticTree = __webpack_require__(8),
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
  } = Caf.i(
    [
      "Error",
      "resolveOperatorPrecidence",
      "compactFlatten",
      "getNormalizedOperator",
      "BinaryOperatorStn",
      "UnaryOperatorStn"
    ],
    [ArtFoundation, OperatorHelper, SemanticTree, global]
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
          Caf.e(this.binaryOperatorAndExpressions, [], (opAndExp, k, into) => {
            into.push(getNormalizedOperator(opAndExp.binaryOperator));
          }),
          compactFlatten([
            left,
            Caf.e(this.binaryOperatorAndExpressions, [], (
              opAndExp,
              k,
              into
            ) => {
              into.push(opAndExp.unaryOpExpression.getStn());
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
    binaryOperatorAndExpression: {
      pattern: "_? binaryOperator _? unaryOpExpression"
    },
    lineStartBinaryOperatorAndExpression: {
      pattern: "binaryOperator _? binOpExpression",
      stnProps: function() {
        return { operator: getNormalizedOperator(this.binaryOperator) };
      },
      stnFactory: "BinaryOperatorStn",
      stnExtension: true
    },
    unaryOpExpression: {
      pattern: "unaryOperator_* expressionWithoutBinOps unaryTailOperator*",
      getStn: function() {
        let stn;
        stn = this.expressionWithoutBinOps.getStn();
        Caf.e(this.unaryTailOperators || [], undefined, (operand, k, into) => {
          stn = UnaryOperatorStn({ operand: operand.toString().trim() }, stn);
        });
        Caf.e((this.unaryOperator_s || []).slice().reverse(), undefined, (
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    SemanticTree = __webpack_require__(8);
  return {
    regExpLiteral: [
      {
        pattern: "regExpStart regExpMiddle regExpEnd regExpModifiers?",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let base;
          return {
            value: this.regExpMiddle.toString(),
            modifiers: Caf.exists(base = this.regExpModifiers) &&
              base.toString()
          };
        }
      },
      {
        pattern: "'///' multilineRegExpMiddle* '///' regExpModifiers?",
        stnFactory: "RegExpStn",
        stnProps: function() {
          let base;
          return {
            modifiers: Caf.exists(base = this.regExpModifiers) &&
              base.toString()
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return {
    root: {
      pattern: "lineStartComment* statement*",
      stnFactory: "StatementsStn"
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BabelBridge = __webpack_require__(7),
    SemanticTree = __webpack_require__(8),
    ControlOperatorStn;
  ({ ControlOperatorStn } = Caf.i(["ControlOperatorStn"], [
    ArtFoundation,
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
    tailControlOperatorComplexExpression: "tailControlOperator complexExpression",
    statementWithoutEnd: [
      "lineStartExpression",
      "complexExpression !tailControlOperator",
      {
        pattern: "complexExpression tailControlOperatorComplexExpression+",
        getStn: function() {
          let stn;
          stn = this.complexExpression.getStn();
          Caf.e(this.tailControlOperatorComplexExpressions, undefined, (
            tco,
            k,
            into
          ) => {
            stn = ControlOperatorStn(
              { operand: tco.tailControlOperator.toString().trim() },
              tco.complexExpression.getStn(),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    SemanticTree = __webpack_require__(8),
    upperCamelCase,
    Error;
  ({ upperCamelCase, Error } = Caf.i(["upperCamelCase", "Error"], [
    ArtFoundation,
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
            `TagMacro: cannot find factory for: ${this.identifier.text}`
          );
        }
        return factory;
      }
    }
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  return function() {
    this.rule({
      _equals_: /\ *= */,
      _colon_: /\ *: */,
      _comma_: /\ *, *\n*/,
      _arrow_: /\ *[-=]> */,
      openParen_: /\( */,
      _closeParen: /\ *\)/,
      openBracket_: /\[ *(\n*(?!\s))?/,
      _closeBracket: /[ \n]*\]/,
      openCurly_: /\{ */,
      _closeCurly: /\ *\}/,
      _else: /(( *\n)+| +)else/,
      reservedWord: /(for|instanceof|import|throw|return|break|into|with|do|switch|when|if|until|try|catch|while|unless|then|else|and|or|is|isnt|in|not)\b/,
      identifier: {
        pattern: /(?!\d)((?:(?!\s)[$\w\x7f-\uffff])+)/,
        stnFactory: "IdentifierStn",
        stnProps: function() {
          return { identifier: this.toString() };
        }
      },
      unquotedString: /((?!\s)[-~!@\#$%^&*_+=|\\<>?\/.$\w\x7f-\uffff])+/,
      unaryTailOperator: /\?/,
      unaryOperator_: /(!|~|not\b) */,
      binaryOperator: /&&|\|\||&(?=\s)|\||\^|\?|((and|or|isnt|is|in|instanceof)\b)|<<|>>>|>>|==|!=|<=|>=|<|>|\/\/|%%|\*\*|[-+*\/%]/,
      _assignmentOperator_: / *(&&|\|\||&|\||\^|\?|((and|or|isnt|is|in)\b)|<<|>>>|>>|\/\/|%%|\*\*|[-+*\/%])?= */,
      new: /new/,
      throw: /throw/,
      with: /with/,
      when: /when/,
      into: /into/,
      withOrDo: /with|do/
    });
    return this.rule(
      {
        comprehensionOutputType: /object|array|reduce|each|find/,
        comprehensionIterationType: /from|in\b/,
        dot: /\./,
        questionMark: /\?/
      },
      { stnFactory: "SemanticTokenStn" }
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {let ArtFoundation = __webpack_require__(2), BabelBridge = __webpack_require__(7), Extensions; ({Extensions} = Caf.i(["Extensions"], [ArtFoundation, BabelBridge, global]));return function() {this.rule({value: "simpleValue valueExtension*"}); this.rule({valueExtension: ["dotAccessor", "bracketAccessor", "functionInvocation", "blockValueExtension"], simpleValue: ["require", "tagMacro", "globalIdentifier", "this", "thisProperty", "literal", "super", "unqualifiedIdentifier", "parentheticalExpression"]}); this.rule({parentheticalExpression: "'(' _? expression _? ')'"}); this.rule({require: {pattern: "/&/ identifier", stnFactory: "RequireStn"}}); this.rule({unqualifiedIdentifier: {pattern: "!reservedWord identifierReference assignmentExtension?"}}); this.rule({identifierReference: {pattern: "identifier", stnFactory: "ReferenceStn"}}); this.rule({this: "/@/ !identifier", thisProperty: "/@/ identifier assignmentExtension?"}, {stnFactory: "ThisStn"}); this.rule({globalIdentifier: {pattern: /(global|require|module|eval)\b/, stnFactory: "GlobalIdentifierStn", stnProps: function() {return {identifier: this.text};}}}); this.rule({super: {pattern: "/super\\b/ superFunctionInvocation", stnFactory: "SuperStn"}}); this.rule({super: {pattern: /super\b/, stnFactory: "SuperStn", stnProps: {passArguments: true}}}); this.rule({assignedValue: ["complexExpression", "rValueBlock"]}); this.rule({assignmentExtension: "assignmentOperator:_assignmentOperator_ assignedValue"}, {stnFactory: "AssignmentStn", stnExtension: true, stnProps: function() {let rawOp, match; rawOp = this.assignmentOperator.toString(); return {operator: (match = rawOp.match(/(\S*)=/)) && match[1]};}}); return this.rule({blockValueExtension: "_? blockValueExtensionBlock", blockValueExtensionBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({rule: "blockValueExtensionSubparse"}), blockValueExtensionSubparse: ["lineStartComment* &dotOrQuestionDot valueExtension+ binaryOperatorSequenceExtension? newLineStatementExtension* end", "lineStartComment* lineStartBinaryOperatorAndExpression newLineStatementExtension* end"], dotOrQuestionDot: /\??\./});};});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return ArrayDestructuringStn = Caf.defClass(
    class ArrayDestructuringStn extends BaseStn {},
    function(ArrayDestructuringStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `[${this.childrenToJs(", ")}]`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return ArraySpreadElementStn = Caf.defClass(
    class ArraySpreadElementStn extends BaseStn {},
    function(ArraySpreadElementStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `...${this.childrenToJs()}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    StringStn = __webpack_require__(70),
    ObjectStn = __webpack_require__(68),
    ObjectPropValueStn = __webpack_require__(67),
    ObjectPropNameStn = __webpack_require__(66),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    compactFlatten;
  ({ compactFlatten } = Caf.i(["compactFlatten"], [ArtFoundation, global]));
  return CatchStn = Caf.defClass(class CatchStn extends BaseStn {}, function(
    CatchStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.updateScope = function(scope) {
      let id;
      this.scope = scope;
      if (id = this.labeledChildren.identifier) {
        this.uniqueIdentifierHandle = this.scope.getUniqueIdentifierHandle(
          "error"
        );
        this.scope.addIdentifierAssigned(id.name);
        this.scope.addIdentifierUsed(id.name);
      }
      return instanceSuper.updateScope.apply(this, arguments);
    };
    this.prototype.toJs = function(options = {}) {
      let returnExpression, identifier, body, tempName;
      ({ returnExpression } = options);
      ({ identifier, body } = this.labeledChildren);
      body = body && (returnExpression ? body.toFunctionBodyJs() : body.toJs());
      return identifier
        ? (tempName = this.uniqueIdentifierHandle.identifier, body = compactFlatten(
            [`${identifier.name} = ${tempName}`, body]
          ).join("; "), `catch (${tempName}) {${body};}`)
        : undefined;
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    AssignmentStn = __webpack_require__(62),
    AccessorStn = __webpack_require__(61),
    ThisStn = __webpack_require__(71),
    IdentifierStn = __webpack_require__(36),
    StatementsStn = __webpack_require__(17),
    FunctionDefinitionStn = __webpack_require__(64),
    FunctionDefinitionArgsStn = __webpack_require__(21),
    FunctionDefinitionArgStn = __webpack_require__(63),
    UniqueIdentifierHandle = __webpack_require__(22),
    BaseStn = __webpack_require__(3),
    Error,
    compactFlatten,
    merge;
  ({ Error, compactFlatten, merge } = Caf.i(
    ["Error", "compactFlatten", "merge"],
    [ArtFoundation, global]
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
    this.prototype.transform = function() {
      let className,
        classExtends,
        body,
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
        constructor = null;
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
            statementsToCount = Caf.e(body.children, [], (stn, k, into) => {
              into.push(
                stn.type === "Object"
                  ? Caf.e(stn.children, [], (objectPropValueStn, k, into) => {
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
                                  ? (constructor = propValueStn, null)
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
                                `unknown object property name Stn type: ${propNameStn.type}`
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
        if (constructor) {
          statementCount -= 1;
          constructor.props.isConstructor = true;
          if (superCallChildren = constructor.find("Super")) {
            if (!(superCallChildren.length === 1)) {
              throw new Error("at most one super call in constructor");
            }
            superCallChildren[0].props.calledInConstructor = true;
          }
          classBody = StatementsStn({ label: "classBody" }, constructor);
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
      out = `${className} = Caf.defClass(class ${className}`;
      if (classExtends) {
        out += ` extends ${classExtends.toJsExpression()}`;
      }
      classBodyJs = `{${Caf.exists(classBody) && classBody.toJs() || ""}}`;
      return body
        ? out + ` ${classBodyJs}, ${body.toJs()})`
        : out + ` ${classBodyJs})`;
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    SemanticTree,
    ScopeStnMixin = __webpack_require__(16),
    BaseStn = __webpack_require__(3),
    arrayWithAllButLast,
    peek,
    Error,
    compactFlatten,
    UniqueIdentifierHandle;
  ({
    arrayWithAllButLast,
    peek,
    Error,
    compactFlatten,
    UniqueIdentifierHandle
  } = Caf.i(
    [
      "arrayWithAllButLast",
      "peek",
      "Error",
      "compactFlatten",
      "UniqueIdentifierHandle"
    ],
    [ArtFoundation, global]
  ));
  SemanticTree = __webpack_require__(14);
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
          ? (function(actionStn) {
              return ControlOperatorStn(
                { operand: "if" },
                whenClause,
                actionStn
              );
            })
          : (function(actionStn) {
              return actionStn;
            });
        return FunctionInvocationStn(
          IdentifierStn({ identifier: `Caf.${useExtendedEach ? "ee" : "e"}` }),
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
                    throw new Error(`not supported yet: ${outputType}`);
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
                      compactFlatten([
                        bodyStatementsExceptLast,
                        AssignmentStn(
                          AccessorStn(
                            IdentifierStn({ identifier: intoIdentifer }),
                            ValueStn(keyVarDef)
                          ),
                          lastBodyStatement
                        )
                      ])
                    )
                  );
                case "array":
                  return whenClauseWrapper(
                    StatementsStn(
                      compactFlatten([
                        bodyStatementsExceptLast,
                        FunctionInvocationStn(
                          AccessorStn(
                            IdentifierStn({ identifier: intoIdentifer }),
                            IdentifierStn({ identifier: "push" })
                          ),
                          lastBodyStatement
                        )
                      ])
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    Error,
    formattedInspect;
  ({ Error, formattedInspect } = Caf.i(["Error", "formattedInspect"], [
    ArtFoundation,
    global
  ]));
  return ControlOperatorStn = Caf.defClass(
    class ControlOperatorStn extends BaseStn {
      constructor(props, children) {
        super(...arguments);
        this.operand = props.operand;
        this.joiner = props.joiner;
        this.expression = children[0];
        this.body = children[1];
        this.elseBody = children[2];
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
                throw new Error(`else not expected after ${this.operand}`);
              }
              return this.joiner === "then"
                ? (() => {
                    throw new Error(`then not expected after ${this.operand}`);
                  })()
                : undefined;
            case "if":
            case "unless":
              return this.joiner === "do"
                ? (() => {
                    throw new Error(`do not expected after ${this.operand}`);
                  })()
                : undefined;
            default:
              return (() => {
                throw new Error(
                  `INTERNAL: invalid control-operator: ${formattedInspect(
                    this.operand
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
          base,
          base1;
        ({ returnExpression, returnValueIsIgnored } = options);
        expression = this.expression.toJsExpression();
        ({ operand } = this);
        operand = (() => {
          switch (operand) {
            case "until":
            case "unless":
              expression = `!${this.applyParens(expression)}`;
              return operand === "until" ? "while" : "if";
            default:
              return operand;
          }
        })();
        return returnExpression
          ? operand === "while"
              ? returnValueIsIgnored
                  ? `(() => {while ${this.applyRequiredParens(
                      expression
                    )} {${this.body.toFunctionBodyJs(false)};};})()`
                  : (tempVarIdentifier = this.scope.uniqueIdentifier, `(() => {while ${this.applyRequiredParens(
                      expression
                    )} {${this.body.toFunctionBodyJs(
                      `${tempVarIdentifier} =`
                    )};}; return ${tempVarIdentifier}})()`)
              : `${this.applyParens(
                  expression
                )} ? ${this.body.toJsParenExpression()} : ${Caf.exists(
                  base = this.elseBody
                ) &&
                  base.toJsParenExpression() ||
                  "undefined"}`
          : `${operand} ${this.applyRequiredParens(
              expression
            )} {${this.body.toJs()};}${this.elseBody
              ? ` else {${Caf.exists(base1 = this.elseBody) && base1.toJs()};}`
              : ""}`;
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return DestructuringAssignmentStn = Caf.defClass(
    class DestructuringAssignmentStn extends BaseStn {},
    function(DestructuringAssignmentStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        let structure, value;
        ({ structure, value } = this.labeledChildren);
        return `(${structure.toJs()} = ${value.toJsExpression()})`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
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
        return `${this.props.etc
          ? "..."
          : ""}${identifier.toJs()}${destructuringDefault
          ? ` = ${destructuringDefault.toJsExpression()}`
          : ""}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return DoStn = Caf.defClass(class DoStn extends BaseStn {}, function(
    DoStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let functionDefinition;
      ({ functionDefinition } = this.labeledChildren);
      return `(${functionDefinition.toJs()})(${functionDefinition.argumentNames.join(
        ", "
      )})`;
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    SemanticTree,
    ValueBaseCaptureStn = __webpack_require__(23),
    Error;
  ({ Error } = Caf.i(["Error"], [ArtFoundation, global]));
  SemanticTree = __webpack_require__(14);
  return FunctionInvocationStn = Caf.defClass(
    class FunctionInvocationStn extends ValueBaseCaptureStn {
      constructor(props, children) {
        let functionValue, argStns, base, base1, base2;
        super(...arguments);
        [functionValue, ...argStns] = children;
        this.key = this.argStns = argStns;
        this.value = this.functionValue = functionValue;
        if (this.argStns.length === 1 && this.argStns[0].props.implicitArray) {
          this.argStns = this.argStns[0].children;
        }
        if (
          Caf.exists(base = this.parseTreeNode) && base.conditional ||
          Caf.exists(base1 = this.parseTreeNode) && base1.existanceTest
        ) {
          (base2 = this.props).existanceTest || (base2.existanceTest = true);
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
        return `${valueJs = this.functionValue.toJsExpression()}${this.applyRequiredParens(
          Caf
            .e(this.argStns, [], (a, k, into) => {
              into.push(a.toJsExpression());
            })
            .join(", ")
        )}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    ScopeStnMixin = __webpack_require__(16),
    BaseStn = __webpack_require__(3),
    peek,
    Object;
  ({ peek, Object } = Caf.i(["peek", "Object"], [ArtFoundation, global]));
  return ImportStn = Caf.defClass(
    class ImportStn extends ScopeStnMixin(BaseStn) {},
    function(ImportStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.bindAllUniqueIdentifiersRequested();
        this.statementsChild = peek(this.children);
        this.importChildren = this.children.slice(0, this.children.length - 1);
        Caf.e(this.importChildren, undefined, (child, k, into) => {
          child.updateScope(this.scope);
        });
        this.scope.addChildScope(this);
        this._scopeUpdated = true;
        this.statementsChild.updateScope(this);
        this.importing = Object.keys(this.identifiersUsedButNotAssigned);
        return Caf.e(this.identifiersUsedButNotAssigned, undefined, (
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
          base;
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
        importsJs = Caf.e(this.importChildren, [], (c, k, into) => {
          into.push(c.toJsExpression());
        });
        list = Caf.e(this.importing, [], (i, k, into) => {
          into.push(`"${i}"`);
        });
        importingJs = `[${list.join(", ")}]`;
        imports = (Caf.exists(base = this.importing) && base.length) > 0
          ? `({${this.importing.join(
              ", "
            )}} = Caf.i(${importingJs}, ${this._importFromCaptureIdentifier
              ? `${this._importFromCaptureIdentifier} = `
              : ""}[${importsJs.join(", ")}, ${importFromCaptureIdentifier}]));`
          : "";
        return `${imports}${bodyJs}`;
      };
      this.prototype.toJsExpression = function() {
        return this.toJs({ returnExpression: true });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    peek;
  ({ peek } = Caf.i(["peek"], [ArtFoundation, global]));
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
        let base;
        return Caf.exists(base = peek(this.children)) &&
          (Caf.isF(base.trimRight) && base.trimRight());
      };
      this.prototype.toJs = function() {
        return `\`${Caf
          .e(this.children, [], (c, k, into) => {
            into.push(c.toInterpolatedJsStringPart());
          })
          .join("")}\``;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return LabeledDestructuringTargetStn = Caf.defClass(
    class LabeledDestructuringTargetStn extends BaseStn {},
    function(LabeledDestructuringTargetStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return this.childrenToJs(": ");
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return NewInstanceStn = Caf.defClass(
    class NewInstanceStn extends BaseStn {},
    function() {
      this.prototype.toJs = function() {
        return `new ${this.childrenToJs()}`;
      };
      return this;
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return NewInstanceStn = Caf.defClass(
    class NewInstanceStn extends BaseStn {},
    function(NewInstanceStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `new ${this.childrenToJs()}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return ObjectDestructuringStn = Caf.defClass(
    class ObjectDestructuringStn extends BaseStn {},
    function(ObjectDestructuringStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return `{${this.childrenToJs(", ")}}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    Lib = __webpack_require__(15),
    BaseStn = __webpack_require__(3),
    isString;
  ({ isString } = Caf.i(["isString"], [ArtFoundation, Lib, global]));
  return RegExpStn = Caf.defClass(class RegExpStn extends BaseStn {}, function(
    RegExpStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      let value, modifiers, str, hasInterpolation, base;
      ({ value, modifiers } = this.props);
      str = (Caf.exists(base = this.children) && base.length) > 0
        ? (hasInterpolation = Caf.ee(this.children, undefined, (
            child,
            k,
            into,
            brk
          ) => {
            let _ret;
            return (_ret = !isString(child.props.value)) && (brk(), _ret);
          }), Caf
            .e(this.children, [], (child, k, into) => {
              let v;
              into.push(
                isString(v = child.props.value)
                  ? hasInterpolation ? v.replace(/([`$\\])/g, "\\$1") : v
                  : `\${${child.toJsExpression()}}`
              );
            })
            .join(""))
        : value;
      return str.length === 0
        ? "/(?:)/"
        : hasInterpolation
            ? modifiers
                ? `RegExp(\`${str}\`, '${modifiers}')`
                : `RegExp(\`${str}\`)`
            : `/${str}/${modifiers || ""}`;
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    Path = __webpack_require__(218),
    Fs = __webpack_require__(217),
    realRequire,
    BaseStn = __webpack_require__(3),
    upperCamelCase,
    dashCase;
  ({ upperCamelCase, dashCase } = Caf.i(["upperCamelCase", "dashCase"], [
    ArtFoundation,
    global
  ]));
  Path;
  Fs;
  realRequire = eval("require");
  return RequireStn = Caf.defClass(
    class RequireStn extends BaseStn {},
    function(RequireStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          this.rawIdentifier,
          `require('${this.requireString}')`
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.getter({
        normalizedIdentifier: function() {
          return upperCamelCase(this.rawIdentifier);
        },
        npmIdentifier: function() {
          let name;
          realRequire.resolve(name = dashCase(this.rawIdentifier));
          return name;
        },
        rawIdentifier: function() {
          return this.children[0].props.identifier;
        },
        requireString: function() {
          let relativeFile;
          return (relativeFile = this.findFileInPackage())
            ? relativeFile
            : this.npmIdentifier;
        }
      });
      this.prototype.findFileInPackage = function(
        options = this.parser.options
      ) {
        let sourceFile,
          sourceFiles,
          sourceRoot,
          normalizedIdentifier,
          directory,
          sourceDir,
          found,
          shouldContinue,
          files;
        ({ sourceFile, sourceFiles, sourceRoot } = options);
        return (sourceFile ||
          (sourceFile = Caf.exists(sourceFiles) && sourceFiles[0])) &&
          sourceRoot
          ? ({
              normalizedIdentifier
            } = this, directory = sourceDir = Path.resolve(
              Path.dirname(sourceFile)
            ), sourceRoot = Path.resolve(
              sourceRoot
            ), found = null, shouldContinue = true, (() => {
              while (shouldContinue) {
                found = Caf.ee(files = Fs.readdirSync(directory), undefined, (
                  name,
                  k,
                  into,
                  brk
                ) => {
                  let baseName, normalizedName, relative, _ret;
                  [baseName] = name.split(".");
                  normalizedName = upperCamelCase(baseName);
                  return (_ret = normalizedName === normalizedIdentifier
                    ? (relative = Path.relative(
                        sourceDir,
                        directory
                      ), relative = Path.join(
                        relative,
                        baseName
                      ), !relative.match(/^\./)
                        ? relative = `./${relative}`
                        : undefined, relative)
                    : undefined) &&
                    (brk(), _ret);
                });
                if (found || directory === sourceRoot) {
                  shouldContinue = false;
                }
                directory = Path.dirname(directory);
              }
            })(), found)
          : undefined;
      };
      this.prototype.toJs = function() {
        return this.rawIdentifier;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    StatementsStn = __webpack_require__(17),
    ScopeStnMixin = __webpack_require__(16),
    BaseStn = __webpack_require__(3),
    compactFlatten;
  ({ compactFlatten } = Caf.i(["compactFlatten"], [ArtFoundation, global]));
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
        identifiersUsedButNotAssigned = Caf.e(
          identifiersUsedButNotAssigned,
          [],
          (v, k, into) => {
            into.push(`${k} = global.${k}`);
          }
        );
        statementsJs = this.statements.toFunctionBodyJs();
        lets = compactFlatten([
          identifiersUsedButNotAssigned,
          this.requiredIdentifierLets
        ]);
        statements = compactFlatten([
          lets.length > 0 ? `let ${lets.join(", ")}` : undefined,
          statementsJs
        ]);
        return `let Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {${statements.join(
          "; "
        )};});`;
      };
      this.prototype.toJs = function() {
        let statementsJs;
        statementsJs = this.statements.toJs();
        return compactFlatten([this.getAutoLets(), statementsJs]).join("; ") +
          ";";
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    Error,
    formattedInspect;
  ({ Error, formattedInspect } = Caf.i(["Error", "formattedInspect"], [
    ArtFoundation,
    global
  ]));
  return SemanticTokenStn = Caf.defClass(
    class SemanticTokenStn extends BaseStn {
      constructor() {
        let base;
        super(...arguments);
        (base = this.props).token ||
          (base.token = this.parseTreeNode.toString());
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
            `SemanticTokenStn is not intended to output Js directly. Token: ${formattedInspect(
              this.props.token
            )}`
          );
        })();
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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
        return dotBase ? `(${this.toJs()})` : this.toJs();
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2),
    BaseStn = __webpack_require__(3),
    Error,
    merge;
  ({ Error, merge } = Caf.i(["Error", "merge"], [ArtFoundation, global]));
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
                }), `super(${args.join(", ")})`)
          : (objectPropValue = this.findParent(
              "ObjectPropValue"
            ), getSuperInput = (klass = this.findParent("Class"))
              ? (className = klass.labeledChildren.className.toJs(), superObject = this.props.classMethod
                  ? klass.props.classSuperHandle
                  : klass.props.instanceSuperHandle, method = this.props.passArguments
                  ? (args = "arguments", "apply")
                  : (args = Caf.e(args, [], (a, k, into) => {
                      into.push(a.toJsExpression());
                    }), "call"), `${superObject}.${this.props.methodName}.${method}${this.applyRequiredParens(
                  ["this"].concat(args).join(", ")
                )}`)
              : (() => {
                  throw new Error("super not used in class");
                })());
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
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
        cases.push(`default: ${switchElse.toJs()}`);
      }
      return `switch (${this.getConditionJs()}) {${cases.join(" break; ")}}`;
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
        cases.push(`default: ${switchElse.toFunctionBodyJs()}`);
      }
      return `(() => {switch (${this.getConditionJs()}) {${cases.join(
        " "
      )}};})()`;
    };
    this.prototype.getConditionJs = function() {
      let condition;
      ({ condition } = this.labeledChildren);
      return condition ? condition.toJsExpression() : "false";
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return SwitchWhenStn = Caf.defClass(
    class SwitchWhenStn extends BaseStn {},
    function(SwitchWhenStn, classSuper, instanceSuper) {
      this.prototype.toJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${this.getCasesJs(options)}: ${thenDo.toJs()};`;
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
          ? `case !(${cases.join("): case !(")})`
          : `case ${cases.join(": case ")}`;
      };
      this.prototype.toFunctionBodyJs = function(options) {
        let thenDo;
        ({ thenDo } = this.labeledChildren);
        return `${this.getCasesJs(options)}: ${thenDo.toFunctionBodyJs()};`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return ThrowStn = Caf.defClass(class ThrowStn extends BaseStn {}, function(
    ThrowStn,
    classSuper,
    instanceSuper
  ) {
    this.prototype.toJs = function() {
      return `throw ${this.childrenToJs()}`;
    };
    this.prototype.toJsExpression = function() {
      return `(()=>{${this.toJs()};})()`;
    };
    this.prototype.toJsParenExpression = function() {
      return this.toJsExpression();
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
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
        "catch (error) {}";
      return `try {${body};} ${optionalCatch}`;
    };
    this.prototype.toJsExpression = function() {
      return this.doJs(null, this.toJs({ returnExpression: true }));
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtFoundation = __webpack_require__(2), BaseStn = __webpack_require__(3);
  return UnaryOperatorStn = Caf.defClass(
    class UnaryOperatorStn extends BaseStn {},
    function(UnaryOperatorStn, classSuper, instanceSuper) {
      this.prototype.needsParens = false;
      this.prototype.toJs = function() {
        return this.props.operand === "?"
          ? `${this.applyParens(this.children[0].toJsExpression())} != null`
          : `${this.normalizedOperand}${this.applyParens(
              this.children[0].toJsExpression()
            )}`;
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var ArtFoundationConfig, Configurable, Promise, Validator, defineModule, mergeInto, ref, w,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(4), w = ref.w, Validator = ref.Validator, defineModule = ref.defineModule, mergeInto = ref.mergeInto, Promise = ref.Promise;

Configurable = __webpack_require__(53).Configurable;

defineModule(module, ArtFoundationConfig = (function(superClass) {
  extend(ArtFoundationConfig, superClass);

  function ArtFoundationConfig() {
    return ArtFoundationConfig.__super__.constructor.apply(this, arguments);
  }

  return ArtFoundationConfig;

})(Configurable));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);

module.exports = [
  __webpack_require__(37), {
    stream: (__webpack_require__(73)).stream
  }, [__webpack_require__(12), "binary binaryFromBlob"]
];


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var EncodedImage, ErrorWithInfo, Promise, StandardLib, readFileAsDataUrl, toDataUri;

StandardLib = __webpack_require__(4);

toDataUri = __webpack_require__(72).toDataUri;

Promise = StandardLib.Promise, readFileAsDataUrl = StandardLib.readFileAsDataUrl, ErrorWithInfo = StandardLib.ErrorWithInfo;

module.exports = EncodedImage = (function() {
  var get;

  function EncodedImage() {}


  /*
  OUT:
    promise.then (fullyLoadedHtmlImage) ->
    , (htmlImageOnerrorEvent) ->
   */

  EncodedImage.get = get = function(url, options) {
    return Promise.resolve().then(function() {
      if (options) {
        return Neptune.Art.Foundation.RestClient.getArrayBuffer(url, options).then(function(arrayBuffer) {
          return readFileAsDataUrl(new Blob([arrayBuffer]));
        }).then((function(_this) {
          return function(dataUri) {
            return url = dataUri;
          };
        })(this));
      }
    }).then(function() {
      return new Promise(function(resolve, reject) {
        var image;
        image = new Image;
        if (!url.match(/^(file|data)\:/i)) {
          image.crossOrigin = "Anonymous";
        }

        /*
        crossOrigin = "Anonymous" required to getImageData and avoid this error
          "The canvas has been tainted by cross-origin data."
        
        NOTE:
          file: urls break with crossOrigin in WkWebKit
          data: urls break with crossOrigin in Safari
         */
        image.onload = function() {
          return resolve(image);
        };
        image.onerror = function(event) {
          return reject(new ErrorWithInfo("image load error", event));
        };
        return image.src = url;
      });
    });
  };

  EncodedImage.loadImage = function(url) {
    console.warn(this.namespacePath + "#loadImage DEPRICATED. Use #get");
    return get(url);
  };

  EncodedImage.toImage = function(encodedImageData) {
    return toDataUri(encodedImageData).then((function(_this) {
      return function(dataUri) {
        return get(dataUri);
      };
    })(this));
  };

  return EncodedImage;

})();


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, ClassSystem, Promise, StandardLib, WriteStream, binary, bound, bufferSize, log, readFileAsArrayBuffer,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

binary = __webpack_require__(12).binary;

Promise = StandardLib.Promise, readFileAsArrayBuffer = StandardLib.readFileAsArrayBuffer, bound = StandardLib.bound;

BaseObject = ClassSystem.BaseObject, log = ClassSystem.log;

bufferSize = 1024;

module.exports = WriteStream = (function(superClass) {
  extend(WriteStream, superClass);

  function WriteStream() {
    this._written = [];
    this._writeBuffer = new Uint8Array(bufferSize);
    this._pos = 0;
    this._writtenLength = 0;
  }

  WriteStream.prototype.writeByte = function(byte) {
    if (this._pos === bufferSize) {
      this._commitHead();
    }
    return this._writeBuffer[this._pos++] = byte;
  };

  WriteStream.prototype.writeAsi = function(number) {
    var nextByte, results;
    if (!(number >= 0)) {
      throw new Error("expected number >= 0");
    }
    results = [];
    while (true) {
      nextByte = number & 0x7F;
      number >>= 7;
      if (number > 0) {
        results.push(this.writeByte(nextByte | 0x80));
      } else {
        this.writeByte(nextByte);
        break;
      }
    }
    return results;
  };

  WriteStream.prototype.write = function(string) {
    var binaryString;
    binaryString = binary(string);
    if (this._pos + binaryString.length <= bufferSize) {
      this._writeBuffer.set(binaryString.uint8Array, this._pos);
      return this._pos += binaryString.length;
    } else {
      this._commitHead();
      this._writtenLength += binaryString.length;
      return this._written.push(binaryString.uint8Array);
    }
  };

  WriteStream.prototype.writeAsiString = function(string) {
    var binaryString;
    binaryString = binary(string);
    this.writeAsi(binaryString.length);
    return this.write(binaryString);
  };

  WriteStream.getter({
    arrayBufferPromise: function() {
      return this._compact().then(function(uint8Array) {
        return uint8Array.buffer;
      });
    },
    binaryStringPromise: function() {
      return this.arrayBufferPromise.then(function(ab) {
        return binary(ab);
      });
    },
    length: function() {
      return this._pos + this._writtenLength;
    }
  });


  /*
  Using new Blob is much faster, thus we use Promises since it is async
    http://jsperf.com/appending-arraybuffers
  
  OUT: promise.then (compactedUint8Array) ->
  EFFECT:
    head was committed
    if @_written.length <= 1 then it isn't changed
    else @_written = [compactedUint8Array]
   */

  WriteStream.prototype._compact = function() {
    this._commitHead();
    switch (this._written.length) {
      case 0:
        return new Promise(function(resolve) {
          return resolve(new Uint8Array(0));
        });
      case 1:
        return new Promise((function(_this) {
          return function(resolve) {
            return resolve(_this._written[0]);
          };
        })(this));
      default:
        return readFileAsArrayBuffer(new Blob(this._written)).then((function(_this) {
          return function(ab) {
            _this._written = [new Uint8Array(ab)];
            return _this._written[0];
          };
        })(this));
    }
  };

  WriteStream.prototype._commitHead = function() {
    if (!(this._pos > 0)) {
      return;
    }
    this._writtenLength += this._pos;
    this._written.push(this._writeBuffer.slice(0, this._pos));
    return this._pos = 0;
  };

  return WriteStream;

})(BaseObject);


/***/ }),
/* 167 */
/***/ (function(module, exports) {

var Browser;

module.exports = Browser = (function() {
  var browserIsMobile, isMobileBrowserRegExp1, isMobileBrowserRegExp2;

  function Browser() {}

  isMobileBrowserRegExp1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;

  isMobileBrowserRegExp2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|agent wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|agent|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)agent|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[agent-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(agent|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-agent|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

  browserIsMobile = null;

  Browser.isMobileBrowser = function() {
    var agent, check;
    if (browserIsMobile != null) {
      return browserIsMobile;
    }
    check = false;
    agent = navigator.userAgent || navigator.vendor || window.opera;
    return browserIsMobile = !!(isMobileBrowserRegExp1.test(agent) || isMobileBrowserRegExp2.test(agent.substr(0, 4)));
  };

  return Browser;

})();


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, ClassSystem, Cookie, StandardLib, getCookie, isPlainArray, isPlainObject, isString, log, setCookie,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

log = StandardLib.log, isString = StandardLib.isString, isPlainArray = StandardLib.isPlainArray, isPlainObject = StandardLib.isPlainObject;

BaseObject = ClassSystem.BaseObject;

setCookie = function(cookieName, cookieValue, arg) {
  var cookieString, d, expires, path;
  expires = arg.expires, path = arg.path;
  if (!isString(cookieValue)) {
    if (!(isPlainArray(cookieValue) || isPlainObject(cookieValue))) {
      throw new Error("cookieValue must be a string, array or object");
    }
    cookieValue = JSON.stringify(cookieValue);
  }
  cookieString = cookieName + "=" + cookieValue;
  if (expires) {
    d = new Date();
    d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
    cookieString += "; expires=" + (d.toUTCString());
  }
  if (path) {
    cookieString += "; path=" + path;
  }
  return document.cookie = cookieString;
};

getCookie = function(cookieName) {
  var c, ca, i, len, name, value;
  name = cookieName + "=";
  ca = document.cookie.split(';');
  for (i = 0, len = ca.length; i < len; i++) {
    c = ca[i];
    while (' ' === c.charAt(0)) {
      c = c.substring(1);
    }
    if (0 === c.indexOf(name)) {
      value = c.substring(name.length, c.length);
      if (value.match(/^[{[]/)) {
        value = JSON.parse(value);
      }
      return value;
    }
  }
  return "";
};

module.exports = Cookie = (function(superClass) {
  extend(Cookie, superClass);

  function Cookie() {
    return Cookie.__super__.constructor.apply(this, arguments);
  }

  Cookie.set = function(name, value, options) {
    return setCookie(name, value, options);
  };

  Cookie.get = function(name) {
    return getCookie(name);
  };

  Cookie.remove = function(name, options) {
    return setCookie(name, {
      path: options.path,
      expires: -1
    });
  };

  return Cookie;

})(BaseObject);


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var File, Promise, StandardLib, createElementFromHtml;

StandardLib = __webpack_require__(4);

createElementFromHtml = __webpack_require__(77).createElementFromHtml;

Promise = StandardLib.Promise;

module.exports = File = (function() {
  function File() {}

  File.request = function(options) {
    if (options == null) {
      options = {};
    }
    return new Promise(function(resolve, reject) {
      var accept, body, fileInput, multiple, onChange, ref;
      accept = options.accept, multiple = options.multiple, onChange = options.onChange;
      if ((ref = this.hiddenDivForFileInput) != null) {
        ref.parentNode.removeChild(this.hiddenDivForFileInput);
      }
      this.hiddenDivForFileInput = createElementFromHtml("<div style='height: 0px;width: 0px; overflow:hidden; position:absolute;'/>");
      body = document.body;
      fileInput = createElementFromHtml("<input type='file' " + (accept ? 'accept=' + accept : void 0) + " " + (multiple ? 'multiple=true' : void 0) + "/>");
      this.hiddenDivForFileInput.appendChild(fileInput);
      body.appendChild(this.hiddenDivForFileInput);
      fileInput.onchange = function(e) {
        var file, fileList, fileSizes, fileTypes;
        fileList = (function() {
          var i, len, ref1, results;
          ref1 = fileInput.files;
          results = [];
          for (i = 0, len = ref1.length; i < len; i++) {
            file = ref1[i];
            results.push(file);
          }
          return results;
        })();
        fileTypes = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = fileList.length; i < len; i++) {
            file = fileList[i];
            results.push(file.type);
          }
          return results;
        })();
        fileSizes = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = fileList.length; i < len; i++) {
            file = fileList[i];
            results.push(file.size);
          }
          return results;
        })();
        if (fileList.length > 0 && fileList[0]) {
          onChange && onChange(fileList);
          return resolve(fileList);
        } else {
          return reject("no files returned");
        }
      };
      return fileInput.click();
    });
  };

  return File;

})();


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171).includeInNamespace(__webpack_require__(167)).addModules({
  Cookie: __webpack_require__(168),
  Dom: __webpack_require__(77),
  DomElementFactories: __webpack_require__(78),
  File: __webpack_require__(169)
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var Browser, Foundation,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(11);

module.exports = Foundation.Browser || Foundation.addNamespace('Browser', Browser = (function(superClass) {
  extend(Browser, superClass);

  function Browser() {
    return Browser.__super__.constructor.apply(this, arguments);
  }

  return Browser;

})(Neptune.Base));


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [
  {
    createWithPostCreate: __webpack_require__(39).createWithPostCreate
  }, [__webpack_require__(39), "mixInto createAllClass  createHotWithPostCreate"]
];


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var ClassSystem, Foundation,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(11);

module.exports = Foundation.ClassSystem || Foundation.addNamespace('ClassSystem', ClassSystem = (function(superClass) {
  extend(ClassSystem, superClass);

  function ClassSystem() {
    return ClassSystem.__super__.constructor.apply(this, arguments);
  }

  return ClassSystem;

})(Neptune.Base));


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var _package;

module.exports = [
  __webpack_require__(4), __webpack_require__(76), __webpack_require__(5), __webpack_require__(53), {
    "package": _package = __webpack_require__(212),
    version: _package.version
  }
];


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {


/*
TODO: refactor so nothing in inspect/* uses BaseObject
Then, move into StandardLib.
 */
module.exports = [[__webpack_require__(44), "shallowInspect inspectLean inspect"], __webpack_require__(83), __webpack_require__(43), __webpack_require__(85), __webpack_require__(26)];


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var Array, MinimalBaseObject,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(9);

module.exports = Array = (function(superClass) {
  extend(Array, superClass);

  function Array(inspectedArray) {
    Array.__super__.constructor.apply(this, arguments);
    this.array = inspectedArray;
  }

  Array.getter({
    arrayOfStrings: function() {
      var i, len, ref, results, v;
      ref = this.array;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        v = ref[i];
        results.push(v.toString());
      }
      return results;
    },
    children: function() {
      return this.array.slice();
    }
  });

  Array.prototype.delimitedString = function(delimiter) {
    if (delimiter == null) {
      delimiter = ", ";
    }
    return this.arrayOfStrings.join(", ");
  };

  Array.prototype.toString = function() {
    return "[" + (this.delimitedString()) + "]";
  };

  return Array;

})(MinimalBaseObject);


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var Core, MinimalBaseObject,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(9);

module.exports = Core = (function(superClass) {
  extend(Core, superClass);

  function Core(value) {
    Core.__super__.constructor.apply(this, arguments);
    this.value = value;
    if (value && value.constructor.name === "HTMLImageElement") {
      this.image = value;
    }
  }

  Core.getter({
    children: function() {
      return null;
    }
  });

  Core.prototype.toString = function() {
    return "" + this.value;
  };

  return Core;

})(MinimalBaseObject);


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var MinimalBaseObject, Object,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(9);

module.exports = Object = (function(superClass) {
  extend(Object, superClass);

  function Object(properties, instanceOf, originalObject) {
    this.properties = properties;
    this.instanceOf = instanceOf;
    this.originalObject = originalObject;
    Object.__super__.constructor.apply(this, arguments);
    this.length = this.properties ? self.Object.keys(this.properties).length : 0;
  }

  Object.getter({
    arrayOfStrings: function() {
      var k, ref, results, v;
      ref = this.properties;
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push(k + ": " + v);
      }
      return results;
    },
    children: function() {
      var k, ref, ret, v;
      ret = {};
      ref = this.properties;
      for (k in ref) {
        v = ref[k];
        ret[k] = v;
      }
      return ret;
    }
  });

  Object.prototype.delimitedString = function(delimiter) {
    if (delimiter == null) {
      delimiter = ", ";
    }
    return this.arrayOfStrings.join(", ");
  };

  Object.prototype.toString = function() {
    if (this.inspected) {
      return this.inspected;
    } else if (this.instanceOf) {
      return "{" + this.instanceOf + " " + (this.delimitedString()) + "}";
    } else {
      return "{" + (this.delimitedString()) + "}";
    }
  };

  return Object;

})(MinimalBaseObject);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var MinimalBaseObject, String, escapeJavascriptString,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(9);

escapeJavascriptString = __webpack_require__(10).escapeJavascriptString;

module.exports = String = (function(superClass) {
  extend(String, superClass);

  function String(clonedString) {
    String.__super__.constructor.apply(this, arguments);
    this.string = clonedString;
  }

  String.prototype.toString = function() {
    return escapeJavascriptString(this.string);
  };

  return String;

})(MinimalBaseObject);


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var Inspect, Inspected,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Inspect = __webpack_require__(45);

module.exports = Inspect.Inspected || Inspect.addNamespace('Inspected', Inspected = (function(superClass) {
  extend(Inspected, superClass);

  function Inspected() {
    return Inspected.__super__.constructor.apply(this, arguments);
  }

  return Inspected;

})(Neptune.Base));


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var Inspected, Inspector2, Map, MinimalBaseObject, escapeJavascriptString, isArray, isBrowserObject, isClass, isDate, isFunction, isHTMLImageElement, isObject, isPlainObject, isRegExp, isString, objectName, parentString, ref,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(9);

Map = __webpack_require__(27);

Inspected = __webpack_require__(84);

escapeJavascriptString = __webpack_require__(10).escapeJavascriptString;

ref = __webpack_require__(6), isString = ref.isString, isArray = ref.isArray, isFunction = ref.isFunction, isObject = ref.isObject, isPlainObject = ref.isPlainObject, isClass = ref.isClass, isDate = ref.isDate, isRegExp = ref.isRegExp, objectName = ref.objectName, isBrowserObject = ref.isBrowserObject;

isHTMLImageElement = self.HTMLImageElement ? function(obj) {
  return obj instanceof HTMLImageElement;
} : function() {
  return false;
};

parentString = (function(_this) {
  return function(distance) {
    switch (distance) {
      case 0:
        return "parent";
      case 1:
        return "grandparent";
      case 2:
        return "great grandparent";
      default:
        return "great^" + (distance - 1) + " grandparent";
    }
  };
})(this);

module.exports = Inspector2 = (function(superClass) {
  extend(Inspector2, superClass);

  function Inspector2(options) {
    if (options == null) {
      options = {};
    }
    this.inspectObject = bind(this.inspectObject, this);
    this.inspectWithToImage = bind(this.inspectWithToImage, this);
    this.inspectHTMLImageElement = bind(this.inspectHTMLImageElement, this);
    this.inspectArray = bind(this.inspectArray, this);
    this.withImages = options.withImages;
    this.maxLength = options.maxLength || 1000;
    this.allowCustomInspectors = !options.noCustomInspectors;
    this.maxDepth = options.maxDepth != null ? options.maxDepth : 10;
    this.outArray = [];
    this.length = 0;
    this.depth = 0;
    this.inspectingMap = new Map;
  }

  Inspector2.prototype.inspectArray = function(array) {
    var a;
    return new Inspected.Array((function() {
      var i, len, results;
      results = [];
      for (i = 0, len = array.length; i < len; i++) {
        a = array[i];
        results.push(this.inspectInternal(a));
      }
      return results;
    }).call(this));
  };

  Inspector2.prototype.inspectHTMLImageElement = function(obj) {
    var res;
    res = new Inspected.Object({}, "HTMLImageElement", obj);
    if (!(res.image = obj).complete) {
      this.addPendingTask();
      obj.onload = (function(_this) {
        return function() {
          return _this.completePendingTask();
        };
      })(this);
    }
    return res;
  };

  Inspector2.prototype.inspectWithToImage = function(obj) {
    var name, res;
    name = objectName(obj);
    if (typeof obj.classPathName === "string") {
      name = obj.classPathName;
    }
    if (name === "Object") {
      name = null;
    }
    res = new Inspected.Object({}, name, obj);
    this.addPendingTask();
    obj.toImage().then((function(_this) {
      return function(image) {
        res.image = image;
        return _this.completePendingTask();
      };
    })(this));
    return res;
  };

  Inspector2.prototype.inspectObject = function(obj, recurse) {
    var attributes, i, k, keys, len, name, res, result;
    if (recurse == null) {
      recurse = true;
    }
    attributes = [];
    keys = Object.keys(obj);
    name = objectName(obj);
    if (isFunction(obj) && keys.length === 0) {
      return new Inspected.Core(name + "()");
    } else {
      if (typeof obj.classPathName === "string") {
        name = obj.classPathName;
      }
      if (name === "Object") {
        name = null;
      }
      result = {};
      if (recurse) {
        for (i = 0, len = keys.length; i < len; i++) {
          k = keys[i];
          result[k] = this.inspectInternal(obj[k]);
        }
      }
      res = new Inspected.Object(result, name, obj);
      if (isFunction(obj.inspect)) {
        res.inspected = obj.inspect();
      }
      return res;
    }
  };

  Inspector2.prototype.addPendingTask = function() {
    return this.pendingTasks++;
  };

  Inspector2.prototype.completePendingTask = function() {
    this.pendingTasks--;
    if (this.pendingTasks === 0) {
      return this.completionCallBack();
    }
  };

  Inspector2.prototype.inspectByType = function(obj) {
    if (isFunction(obj != null ? obj.getInspectedObjects : void 0)) {
      obj = obj.getInspectedObjects();
    }
    if (obj === null || obj === void 0 || obj === true || obj === false || typeof obj === "number") {
      return new Inspected.Core(obj);
    } else if (obj === self) {
      return new Inspected.Core("self");
    } else if (isRegExp(obj)) {
      return new Inspected.Core(obj.toString());
    } else if (isString(obj)) {
      return new Inspected.String(obj);
    } else if (isArray(obj)) {
      return this.inspectArray(obj);
    } else if (isClass(obj)) {
      return new Inspected.Core(objectName(obj));
    } else if (isHTMLImageElement(obj)) {
      return this.inspectHTMLImageElement(obj);
    } else if (isDate(obj)) {
      return new Inspected.Core(obj.toString());
    } else if (isBrowserObject(obj)) {
      return new Inspected.Core(objectName(obj));
    } else if (this.withImages && typeof obj.toImage === "function" && !isFunction(obj)) {
      return this.inspectWithToImage(obj);
    } else if (isPlainObject(obj) || isFunction(obj)) {
      return this.inspectObject(obj);
    } else if (isObject(obj)) {
      return this.inspectObject(obj, false);
    } else {
      return new Inspected.Core(objectName(obj));
    }
  };

  Inspector2.prototype.inspectInternal = function(obj) {
    var objDepth, res;
    if (objDepth = this.inspectingMap.get(obj)) {
      return new Inspected.Core("<" + (parentString(this.depth - objDepth)) + ">");
    } else if (this.depth >= this.maxDepth) {
      return new Inspected.Core("<maxDepth reached: " + this.maxDepth + ">");
    } else {
      this.depth++;
      this.inspectingMap.set(obj, this.depth);
      res = this.inspectByType(obj);
      this.inspectingMap["delete"](obj);
      this.depth--;
      return res;
    }
  };

  Inspector2.prototype.inspect = function(obj, callBack) {
    var res;
    this.pendingTasks = 0;
    if (this.withImages && typeof callBack !== "function") {
      throw new Error("callBack required if withImages requested");
    }
    this.completionCallBack = (function(_this) {
      return function() {
        return callBack && callBack(res);
      };
    })(this);
    res = this.inspectInternal(obj);
    if (this.pendingTasks === 0) {
      this.completionCallBack();
    }
    return res;
  };

  return Inspector2;

})(MinimalBaseObject);


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [[__webpack_require__(29), "testPromise", "containsPromises", "deepAll"], __webpack_require__(56), __webpack_require__(24), __webpack_require__(80), __webpack_require__(48), __webpack_require__(10), __webpack_require__(41), __webpack_require__(42), __webpack_require__(47), __webpack_require__(13), __webpack_require__(28), __webpack_require__(87), __webpack_require__(19), __webpack_require__(88), __webpack_require__(89), __webpack_require__(90), __webpack_require__(6), __webpack_require__(25), __webpack_require__(46), __webpack_require__(18), __webpack_require__(81), __webpack_require__(86), __webpack_require__(40)];


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var Analytics, BaseObject, ClassSystem, StandardLib, inspectLean,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

BaseObject = ClassSystem.BaseObject;

inspectLean = StandardLib.inspectLean;

Analytics = (function(superClass) {
  extend(Analytics, superClass);

  function Analytics() {
    return Analytics.__super__.constructor.apply(this, arguments);
  }

  Analytics.defaultCategory = "Foundation.Analytics";

  Analytics.event = function(options) {
    var action, category, label, noninteraction, value;
    if (options == null) {
      options = {};
    }
    category = options.category || this.defaultCategory;
    action = options.action;
    label = options.label;
    value = options.value;
    noninteraction = !!options.noninteraction;
    if (self._gaq) {
      self._gaq.push(['_trackEvent', category, action, label, value, noninteraction]);
      return this.rawLog("ANALYTICS-EVENT: " + (inspectLean(options)));
    } else {
      return this.rawLog("(no)ANALYTICS-EVENT: " + (inspectLean(options)));
    }
  };

  return Analytics;

})(BaseObject);


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BaseObject, Config, ConfigRegistry, defineModule, log, merge, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(4), defineModule = ref.defineModule, log = ref.log, merge = ref.merge;

BaseObject = __webpack_require__(5).BaseObject;

ConfigRegistry = __webpack_require__(50);

defineModule(module, Config = (function(superClass) {
  extend(Config, superClass);

  function Config() {
    return Config.__super__.constructor.apply(this, arguments);
  }

  Config.abstractClass();

  Config.register = function() {
    return ConfigRegistry.registerConfig(this.getName(), this.getProps());
  };

  Config.postCreateConcreteClass = function(arg) {
    var hotReloaded;
    hotReloaded = arg.hotReloaded;
    this.register();
    if (hotReloaded) {
      ConfigRegistry.reload();
    }
    return Config.__super__.constructor.postCreateConcreteClass.apply(this, arguments);
  };

  Config.getProps = function() {
    return this.getConcretePrototypeProperties();
  };

  return Config;

})(BaseObject));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BaseObject, ConfigRegistry, Configurable, defineModule, isPlainObject, log, merge, mergeInto, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

ref = __webpack_require__(4), defineModule = ref.defineModule, log = ref.log, merge = ref.merge, isPlainObject = ref.isPlainObject, mergeInto = ref.mergeInto;

BaseObject = __webpack_require__(5).BaseObject;

ConfigRegistry = __webpack_require__(50);


/*

TO USE:
1) Inherit from Configurable and
2) OPTIONAL: call @defaults to set configuration defaults
3) OPTIONAL, override one of:
  @configure
  @preprocessConfig
  @configured
 */

defineModule(module, Configurable = (function(superClass) {
  extend(Configurable, superClass);

  function Configurable() {
    return Configurable.__super__.constructor.apply(this, arguments);
  }

  Configurable.abstractClass();

  Configurable.defaults = function() {
    var defaults;
    defaults = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return this.defaultConfig = merge.apply(null, defaults);
  };

  Configurable.getDefaults = function() {
    return this.defaultConfig;
  };

  Configurable.reset = function() {
    var k, ref1, ref2, v;
    if (this.config) {
      ref1 = this.config;
      for (k in ref1) {
        v = ref1[k];
        delete this.config[k];
      }
    } else {
      this.config = {};
    }
    if (this.defaultConfig) {
      mergeInto(this.config, this.defaultConfig);
    }
    if ((ref2 = this.namespace) != null) {
      ref2.config = this.config;
    }
    return this.config;
  };

  Configurable.getInspectedObjects = function() {
    var obj;
    return (
      obj = {},
      obj["" + (this.getConfigurationPath().join('.'))] = this.config,
      obj
    );
  };

  Configurable.configure = function(config) {
    var k, ref1, results, v;
    this.reset();
    ref1 = this.getPathedConfiguration(config);
    results = [];
    for (k in ref1) {
      v = ref1[k];
      if (k.match(/^[^A-Z]/)) {
        results.push(this.config[k] = v);
      }
    }
    return results;
  };

  Configurable.configured = function() {};

  Configurable.getConfigurationPath = function() {
    var _Configurable, _Neptune, i, path, ref1;
    ref1 = this.getNamespacePath().split('.'), _Neptune = ref1[0], path = 3 <= ref1.length ? slice.call(ref1, 1, i = ref1.length - 1) : (i = 1, []), _Configurable = ref1[i++];
    return path;
  };

  Configurable.getPathedConfiguration = function(globalConfig) {
    var el, i, len, ref1;
    ref1 = this.getConfigurationPath();
    for (i = 0, len = ref1.length; i < len; i++) {
      el = ref1[i];
      globalConfig = globalConfig != null ? globalConfig[el] : void 0;
    }
    return globalConfig;
  };

  Configurable._register = function() {
    this.reset();
    return ConfigRegistry.registerConfigurable(this);
  };

  Configurable.postCreateConcreteClass = function(arg) {
    var hotReloaded;
    hotReloaded = arg.hotReloaded;
    if (hotReloaded) {
      ConfigRegistry.reload();
    } else {
      this._register();
    }
    return Configurable.__super__.constructor.postCreateConcreteClass.apply(this, arguments);
  };

  return Configurable;

})(BaseObject));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var ArtConfig, Tools,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Tools = __webpack_require__(98);

module.exports = Tools.ArtConfig || Tools.addNamespace('ArtConfig', ArtConfig = (function(superClass) {
  extend(ArtConfig, superClass);

  function ArtConfig() {
    return ArtConfig.__super__.constructor.apply(this, arguments);
  }

  return ArtConfig;

})(Neptune.Base));


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, BatchLoader, ClassSystem, StandardLib, inspect, log, nextTick, timeout,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

BaseObject = ClassSystem.BaseObject;

log = StandardLib.log, inspect = StandardLib.inspect, nextTick = StandardLib.nextTick, timeout = StandardLib.timeout;

module.exports = BatchLoader = (function(superClass) {
  extend(BatchLoader, superClass);

  function BatchLoader(loadFunction) {
    this.assets = {};
    this.loadingAssets = {};
    this.loadFunction = loadFunction;
  }

  BatchLoader.prototype.load = function(sources, onLoad) {
    if (typeof sources === "string") {
      sources = [sources];
    }
    return this.loadAssets(sources, onLoad);
  };

  BatchLoader.prototype.addAsset = function(source, asset) {
    var base;
    if (asset == null) {
      throw new Error("not a valid asset: " + (inspect(asset)));
    }
    delete this.loadingAssets[source];
    (base = this.assets)[source] || (base[source] = asset);
    return this.notifyListeners();
  };

  BatchLoader.getter({
    blankInfo: function() {
      return {
        loadedFromCache: 0,
        loadedAsynchronously: 0,
        alreadyLoadingAsynchronously: 0
      };
    }
  });

  BatchLoader.prototype.loadAssets = function(sources, onLoad) {
    var info;
    info = this.blankInfo;
    sources.forEach((function(_this) {
      return function(src) {
        if (_this.assets[src] != null) {
          return info.loadedFromCache++;
        } else if (_this.loadingAssets[src]) {
          info.loadedAsynchronously++;
          return info.alreadyLoadingAsynchronously++;
        } else {
          info.loadedAsynchronously++;
          _this.loadingAssets[src] = true;
          return _this.loadFunction(src, function(src, asset) {
            return _this.addAsset(src, asset);
          });
        }
      };
    })(this));
    this.addLoaderListener(sources, onLoad, info);
    return nextTick((function(_this) {
      return function() {
        return _this.notifyListeners();
      };
    })(this));
  };

  BatchLoader.prototype.addLoaderListener = function(sources, onLoad, info) {
    this.loadingListeners || (this.loadingListeners = []);
    return this.loadingListeners.push({
      sources: sources,
      onLoad: onLoad,
      info: info
    });
  };

  BatchLoader.prototype.notifyListeners = function() {
    var allLoaded, i, j, len, len1, listener, oldloadingListeners, ref, source;
    if (!this.loadingListeners) {
      return;
    }
    oldloadingListeners = this.loadingListeners;
    this.loadingListeners = [];
    for (i = 0, len = oldloadingListeners.length; i < len; i++) {
      listener = oldloadingListeners[i];
      allLoaded = true;
      ref = listener.sources;
      for (j = 0, len1 = ref.length; j < len1; j++) {
        source = ref[j];
        if (!this.assets[source]) {
          allLoaded = false;
        }
      }
      if (allLoaded) {
        listener.onLoad(this.assets, listener.sources, listener.info);
      } else {
        this.loadingListeners.push(listener);
      }
    }
    return this.loadingListeners;
  };

  return BatchLoader;

})(BaseObject);


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, ClassSystem, Epoch, Foundation, Promise, StandardLib, evalAndThrowErrorsOutOfStack, inspect, requestAnimationFrame,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Foundation = __webpack_require__(11);

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

BaseObject = ClassSystem.BaseObject;

inspect = StandardLib.inspect, Promise = StandardLib.Promise, requestAnimationFrame = StandardLib.requestAnimationFrame, evalAndThrowErrorsOutOfStack = StandardLib.evalAndThrowErrorsOutOfStack;

module.exports = Epoch = (function(superClass) {
  extend(Epoch, superClass);

  function Epoch(options) {
    if (options == null) {
      options = {};
    }
    Epoch.__super__.constructor.apply(this, arguments);
    this._emptyQueueAfterProcessing = !!options.emptyQueueAfterProcessing;
    this._queuedItems = [];
    this._nextReadyQueue = [];
    this._epochQueued = false;
    this._processingEpoch = false;
    this._epochCount = 0;
    this._frameSecond = 0;
  }

  Epoch.getter("processingEpoch epochQueued epochCount emptyQueueAfterProcessing frameSecond", {
    epochLength: function() {
      return this._queuedItems.length;
    }
  });

  Epoch.prototype.updateGlobalCounts = function() {
    Foundation.globalCount(this["class"].name + "_queuedItems", this._queuedItems.length);
    return Foundation.globalCount(this["class"].name + "_nextReadyQueue", this._nextReadyQueue.length);
  };


  /*
  This guarantess there will be a next "ready" event.
  If there were no setStates this epoch, then there won't be a next "ready" - unless you use this method.
  
  IN:
    f: an optional function to invoke on-next-ready
      mostly this is provided as a shortcut:
        @onNextReady =>
      is directly equivelent to:
        @onNextReady().then =>
  
  OUT: promise.then (result of calling f() or null if no f) ->
   */

  Epoch.prototype.onNextReady = function(f, forceNextEpoch, passThroughArgument) {
    if (forceNextEpoch == null) {
      forceNextEpoch = true;
    }
    if (forceNextEpoch && !this._processingEpoch) {
      this.queueNextEpoch();
    }
    return new Promise((function(_this) {
      return function(resolve) {
        return _this._nextReadyQueue.push(function() {
          return resolve(f ? f(passThroughArgument) : passThroughArgument);
        });
      };
    })(this));
  };

  Epoch.prototype._ready = function() {
    var f, i, len, nrq, results;
    if (!((nrq = this._nextReadyQueue).length > 0)) {
      return;
    }
    this._nextReadyQueue = [];
    results = [];
    for (i = 0, len = nrq.length; i < len; i++) {
      f = nrq[i];
      results.push(evalAndThrowErrorsOutOfStack((function(_this) {
        return function() {
          return f();
        };
      })(this)));
    }
    return results;
  };

  Epoch.prototype.queueItem = function(item) {
    if (item) {
      this._queuedItems.push(item);
      this.queueNextEpoch();
    }
    return item;
  };

  Epoch.prototype.isItemQueued = function(item) {
    return indexOf.call(this._queuedItems, item) >= 0;
  };

  Epoch.prototype.queueNextEpoch = function() {
    if (!this._epochQueued) {
      this._epochQueued = true;
      return requestAnimationFrame((function(_this) {
        return function(frameTimeMs) {
          _this._frameSecond = frameTimeMs / 1000;
          _this._epochQueued = false;
          return _this.processEpoch();
        };
      })(this));
    }
  };

  Epoch.prototype.flushEpochNow = function() {
    return this.processEpoch();
  };

  Epoch.prototype.processEpoch = function() {
    var items;
    this._processingEpoch = true;
    items = this._queuedItems;
    if (this._emptyQueueAfterProcessing) {
      this.processEpochItemsWithErrorHandling(items);
      this._queuedItems = [];
    } else {
      this._queuedItems = [];
      this.processEpochItemsWithErrorHandling(items);
    }
    this._processingEpoch = false;
    this._epochCount++;
    return this._ready();
  };

  Epoch.prototype.processEpochItemsWithErrorHandling = function(items) {
    return evalAndThrowErrorsOutOfStack((function(_this) {
      return function() {
        return _this.processEpochItems(items);
      };
    })(this));
  };

  Epoch.prototype.processEpochItems = function(items) {
    var i, item, len, results;
    results = [];
    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      results.push(item());
    }
    return results;
  };

  return Epoch;

})(BaseObject);


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var defineModule, fastBind, isFunction, log, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

ref = __webpack_require__(4), defineModule = ref.defineModule, isFunction = ref.isFunction, fastBind = ref.fastBind, log = ref.log;

defineModule(module, function() {
  return function(superClass) {
    var InstanceFunctionBindingMixin;
    return InstanceFunctionBindingMixin = (function(superClass1) {
      extend(InstanceFunctionBindingMixin, superClass1);

      function InstanceFunctionBindingMixin() {
        return InstanceFunctionBindingMixin.__super__.constructor.apply(this, arguments);
      }

      InstanceFunctionBindingMixin.getFunctionsToBindList = function() {
        if (this.hasOwnProperty("_functionsToBindList")) {
          return this._functionsToBindList;
        } else {
          return this._functionsToBindList = this.getFunctionsToBindList();
        }
      };

      InstanceFunctionBindingMixin.getFunctionsToBindList = function() {
        var k, ref1, results, v;
        ref1 = this.prototype;
        results = [];
        for (k in ref1) {
          v = ref1[k];
          if (k !== "constructor" && isFunction(v) && this.propertyIsConcrete(k) && (!this.nonBindingFunctions || indexOf.call(this.nonBindingFunctions, k) < 0)) {
            results.push(k);
          }
        }
        return results;
      };

      InstanceFunctionBindingMixin.prototype.getBoundFunctionList = function() {
        return this._boundFunctionList;
      };

      InstanceFunctionBindingMixin.prototype.bindFunctionsToInstance = function() {
        var functionsToBindList, i, j, k, len, len1, prototype, ref1;
        functionsToBindList = this["class"].getFunctionsToBindList();
        if (this._boundFunctionList) {
          ref1 = this._boundFunctionList;
          for (i = 0, len = ref1.length; i < len; i++) {
            k = ref1[i];
            if (indexOf.call(functionsToBindList, k) < 0) {
              delete this[k];
            }
          }
        }
        prototype = this["class"].prototype;
        for (j = 0, len1 = functionsToBindList.length; j < len1; j++) {
          k = functionsToBindList[j];
          this[k] = fastBind(prototype[k], this);
        }
        return this._boundFunctionList = functionsToBindList;
      };

      return InstanceFunctionBindingMixin;

    })(superClass);
  };
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var AsyncLocalStorage, BaseObject, ClassSystem, JsonStore, Promise, isNumber, log, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(4), log = ref.log, Promise = ref.Promise, isNumber = ref.isNumber;

ClassSystem = __webpack_require__(5);

AsyncLocalStorage = __webpack_require__(93);

BaseObject = ClassSystem.BaseObject;

module.exports = JsonStore = (function(superClass) {
  extend(JsonStore, superClass);

  function JsonStore(store) {
    if (store == null) {
      store = AsyncLocalStorage;
    }
    this.store = store;
  }

  JsonStore.prototype.setItem = function(k, v) {
    return Promise.then((function(_this) {
      return function() {
        return _this.store.setItem(k, JSON.stringify(v));
      };
    })(this));
  };

  JsonStore.prototype.getItem = function(key) {
    return Promise.resolve(this.store.getItem(key)).then((function(_this) {
      return function(jsonValue) {
        return Promise.then(function() {
          return jsonValue && JSON.parse(jsonValue);
        })["catch"](function(error) {
          log.error({
            JsonStore: {
              key: key,
              jsonValue: jsonValue,
              error: error
            }
          });
          throw error;
        });
      };
    })(this));
  };

  JsonStore.prototype.removeItem = function(k) {
    return Promise.then((function(_this) {
      return function() {
        return _this.store.removeItem(k);
      };
    })(this));
  };

  JsonStore.prototype.clear = function() {
    return Promise.then((function(_this) {
      return function() {
        return _this.store.clear();
      };
    })(this));
  };

  JsonStore.prototype.key = function(i) {
    return Promise.then((function(_this) {
      return function() {
        return _this.store.key(i);
      };
    })(this));
  };

  JsonStore.prototype.getLength = function() {
    return Promise.then((function(_this) {
      return function() {
        if (isNumber(_this.store.length)) {
          return _this.store.length;
        } else {
          return _this.store.getLength();
        }
      };
    })(this));
  };

  return JsonStore;

})(BaseObject);


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var ErrorWithInfo, Promise, RestClient, StandardLib, appendQuery, decodeHttpStatus, failure, failureTypes, isNumber, log, merge, object, objectKeyCount, present, ref, serverFailure, success, timeout;

StandardLib = __webpack_require__(4);

present = StandardLib.present, Promise = StandardLib.Promise, merge = StandardLib.merge, isNumber = StandardLib.isNumber, timeout = StandardLib.timeout, log = StandardLib.log, objectKeyCount = StandardLib.objectKeyCount, appendQuery = StandardLib.appendQuery, object = StandardLib.object, ErrorWithInfo = StandardLib.ErrorWithInfo;

ref = __webpack_require__(51), success = ref.success, serverFailure = ref.serverFailure, failure = ref.failure, failureTypes = ref.failureTypes, decodeHttpStatus = ref.decodeHttpStatus;

module.exports = RestClient = (function() {
  function RestClient() {}

  RestClient.legalVerbs = {
    get: "GET",
    GET: "GET",
    put: "PUT",
    PUT: "PUT",
    post: "POST",
    POST: "POST",
    "delete": "DELETE",
    DELETE: "DELETE"
  };


  /*
  get/put/post/delete
  
  IN:
    url: valid url string
  
    data: (only on PUT/POST requests)
      data to send
      NOTE: must be null if using formData
  
    options:
  
      formData: plain object of key-value pairs to submit as form-data
        You can even use this for "get" requests.
        NOTE: "data" must be null if using "formData"
  
      headers: plain object of additional HTTP headers to set
  
      onProgress: (restRequestStatus) -> null
        called each time progress is made
        NOTE: restRequestStatus.progress contains a 0-to-1 number that indicates how much progress has been made.
          progress indicates DOWNLOAD progress for GET requests and UPLOAD progress for all others.
  
      responseType: "arraybuffer", "blob", "document", "json", or "text"
        default: "text"
        NOTE: "json" is handled manually since IE11 and iOS7 don't support the "json" option.
        https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
  
  OUT: Promise:
    resolved: (responseData) ->
    rejected: (restRequestStatus) ->
  
  responseData:
    a String, or the type specified by the responseType option
  
  restRequestStatus:
    event:    # the HTML event object
    request:  # the XMLHttpRequest
    options:  # the restRequest options: verb, url, data, headers, onProgress, responseType, formData
    httpStatus:   # the HTML status code, if the request completed
    response: # responseData
    status:       a valid CommunicationStatus
    error:    # Error object or string-explaination of why the request was rejected
    progress:
      a value between 0 and 1
      If the progress is indeterminant, this is 0
      If this isn't an onProgress event, this is the amount of progress
      that was made up to the point of the event.
   */

  RestClient.get = function(url, options) {
    return RestClient.restRequest(merge(options, {
      verb: "GET",
      url: url
    }));
  };

  RestClient.put = function(url, data, options) {
    return RestClient.restRequest(merge(options, {
      verb: "PUT",
      url: url,
      data: data
    }));
  };

  RestClient.post = function(url, data, options) {
    return RestClient.restRequest(merge(options, {
      verb: "POST",
      url: url,
      data: data
    }));
  };

  RestClient["delete"] = function(url, options) {
    return RestClient.restRequest(merge(options, {
      verb: "DELETE",
      url: url
    }));
  };

  RestClient.getArrayBuffer = function(url, options) {
    return this.get(url, merge(options, {
      responseType: "arraybuffer"
    }));
  };


  /*
  get/put/post/deleteJson
  
  same as get/put/post/delete above
  
  except:
    sent data should be plain objects which are JSON.stringified
    response data is automatically JSON.parsed
  
    additional options are set:
      responseType: "json"
      headers:      Accept: 'application/json'
   */

  RestClient.getJson = function(url, options) {
    return RestClient.restJsonRequest(merge(options, {
      verb: "get",
      url: url
    }));
  };

  RestClient.deleteJson = function(url, options) {
    return RestClient.restJsonRequest(merge(options, {
      verb: "delete",
      url: url
    }));
  };

  RestClient.putJson = function(url, data, options) {
    return RestClient.restJsonRequest(merge(options, {
      verb: "put",
      url: url,
      data: data
    }));
  };

  RestClient.postJson = function(url, data, options) {
    return RestClient.restJsonRequest(merge(options, {
      verb: "post",
      url: url,
      data: data
    }));
  };


  /*
  IN:
    options:
      verb: "GET", "PUT", "POST"
      method: alias for verb
  
      data: data to restRequest - passed to xmlHttpRequest.restRequest
  
      plus all the options for get/put/post listed above
      showProgressAfter: milliseconds (default: 100)
        only show progress after # milliseconds
  
      onProgress: (requestStatus) ->
        see "All callbacks" below for details about inputs.
        Note that onProgress is triggered a little differently than
        the normal XMLHttpRequest progress events:
          - it will only be called after showProgressAfter ms
          - it is guaranteed to be called after showProgressAfter ms if the request hasn't completed
          - if the request completes before showProgressAfter ms, it will never be called
  
  OUT: see get/put/post above
  
  All callbacks look like this: (requestStatus) ->
    requestStatus:
      request:  XMLHttpRequest
      progress: number # between 0 and 1
      options:  options # passed-in options object
      event:    the most recent event
      response: # the processed response data, if ready
      error:    # if any
      httpStatus:   number # HTTP status code, if the request is complete
  
  EFFECT:
   */

  RestClient.restRequest = function(options) {
    var data, formData, headers, k, method, onProgress, responseType, showProgressAfter, specifiedVerb, url, v, verb;
    verb = options.verb, method = options.method, url = options.url, data = options.data, headers = options.headers, onProgress = options.onProgress, responseType = options.responseType, formData = options.formData, showProgressAfter = options.showProgressAfter;
    if (!isNumber(showProgressAfter)) {
      showProgressAfter = 100;
    }
    verb || (verb = method);
    if (!(verb = RestClient.legalVerbs[specifiedVerb = verb])) {
      throw new Error("invalid verb: " + specifiedVerb);
    }
    if (formData) {
      if (data) {
        throw new Error("can't specify both 'data' and 'formData'");
      }
      data = new FormData;
      for (k in formData) {
        v = formData[k];
        data.append(k, v);
      }
    } else {
      data = (data != null ? typeof data.toArrayBuffer === "function" ? data.toArrayBuffer() : void 0 : void 0) || data;
    }
    return new Promise(function(resolve, reject) {
      var getErrorResponse, getResponse, initialProgressCalled, lastProgressEvent, progressCallbackInternal, request, requestResolved, restRequestStatus;
      if (verb === "GET" && data) {
        log.error({
          RestClient_restRequest: {
            info: "can't GET with data",
            options: options
          }
        });
        throw new Error("With their ultimate wisdom, the HTTP gods decree: NO DATA WITH GET");
      }
      restRequestStatus = {
        request: request = new XMLHttpRequest,
        progress: 0,
        options: options
      };
      getErrorResponse = function() {
        var error;
        try {
          return {
            response: getResponse()
          };
        } catch (error1) {
          error = error1;
          return {
            status: serverFailure,
            rawResponse: request.response,
            message: "Error parsing server's response: " + error
          };
        }
      };
      getResponse = function() {
        var response;
        response = request.response;
        if (response && responseType === "json") {
          return JSON.parse(response);
        } else {
          return response;
        }
      };
      request.open(verb, url, true);
      if (present(responseType) && responseType !== "json") {
        request.responseType = responseType;
      }
      if (headers) {
        for (k in headers) {
          v = headers[k];
          request.setRequestHeader(k, v);
        }
      }
      requestResolved = false;
      request.addEventListener("error", function(event) {
        requestResolved = true;
        return reject(new ErrorWithInfo("XMLHttpRequest error event triggered", merge(restRequestStatus, {
          event: event
        }, decodeHttpStatus())));
      });
      request.addEventListener("load", function(event) {
        var decodedHttpStatus, httpStatus;
        requestResolved = true;
        decodedHttpStatus = decodeHttpStatus(httpStatus = request.status);
        if (!((decodedHttpStatus.status === success) && ((function() {
          try {
            resolve(getResponse());
            return true;
          } catch (error1) {}
        })()))) {
          return reject(new ErrorWithInfo("error processing response", merge(restRequestStatus, decodedHttpStatus, {
            event: event
          }, getErrorResponse())));
        }
      });
      if (onProgress) {
        initialProgressCalled = showProgressAfter <= 0;
        lastProgressEvent = null;
        timeout(showProgressAfter, function() {
          initialProgressCalled = true;
          return progressCallbackInternal(lastProgressEvent || {});
        });
        progressCallbackInternal = function(event) {
          var loaded, ref1, total;
          ref1 = lastProgressEvent = event, total = ref1.total, loaded = ref1.loaded;
          if (initialProgressCalled && !requestResolved) {
            return typeof onProgress === "function" ? onProgress(restRequestStatus = merge(restRequestStatus, {
              event: event,
              progress: total > 0 ? loaded / total : 0
            })) : void 0;
          }
        };
        if (verb === "GET") {
          request.addEventListener("progress", progressCallbackInternal);
        } else {
          request.upload.addEventListener("progress", progressCallbackInternal);
        }
      }
      return request.send(data);
    });
  };

  RestClient.restJsonRequest = function(options) {
    var data, headers, method, verb;
    verb = options.verb, method = options.method, data = options.data, headers = options.headers;
    verb = RestClient.legalVerbs[verb || method];
    if (data && objectKeyCount(data) === 0) {
      data = null;
    }
    if (verb === "GET" && options.data) {
      options = merge(options, {
        url: appendQuery(options.url, object(data, function(v) {
          return JSON.stringify(v);
        }))
      });
      data = null;
    } else {
      data && (data = JSON.stringify(data));
    }
    return this.restRequest(merge(options, {
      responseType: "json",
      headers: merge({
        Accept: 'application/json'
      }, headers),
      data: data
    }));
  };

  return RestClient;

})();


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, ClassSystem, StandardLib, Stat, inspect, max, min, round,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

BaseObject = ClassSystem.BaseObject;

min = StandardLib.min, max = StandardLib.max, round = StandardLib.round, inspect = StandardLib.inspect;

module.exports = Stat = (function(superClass) {
  extend(Stat, superClass);

  function Stat() {
    this.reset();
  }

  Stat.prototype.reset = function() {
    this.values = [];
    this.sum = 0;
    return this.max = this.min = null;
  };

  Stat.getter({
    length: function() {
      return this.values.length;
    },
    average: function() {
      return this.sum / this.values.length;
    },
    median: function() {
      return this.values.slice().sort()[this.length / 2 | 0];
    }
  });

  Stat.prototype.percential = function(zeroToOneHundred) {
    var i, sorted;
    i = ((this.length - 1) * zeroToOneHundred / 100) | 0;
    sorted = this.values.slice().sort(function(v1, v2) {
      return v2 - v1;
    });
    return sorted[i];
  };

  Stat.prototype.histogram = function(divisions, min, max) {
    var bin, delta, hist, j, k, len, mul, ref, ref1, v;
    if (min == null) {
      min = this.min;
    }
    if (max == null) {
      max = this.max;
    }
    delta = max - min;
    mul = divisions / delta;
    hist = {};
    for (v = j = 0, ref = divisions; j < ref; v = j += 1) {
      hist[min + v / mul] = 0;
    }
    ref1 = this.values;
    for (k = 0, len = ref1.length; k < len; k++) {
      v = ref1[k];
      bin = (v - min) * mul | 0;
      if (bin < 0) {
        bin = 0;
      }
      if (bin >= divisions) {
        bin = divisions - 1;
      }
      hist[min + bin / mul]++;
    }
    return hist;
  };

  Stat.prototype.toString = function() {
    return inspect({
      length: this.length,
      average: this.average,
      median: this.median,
      min: this.min,
      max: this.max
    });
  };

  Stat.prototype.toInfoMap = function() {
    return {
      length: this.length,
      average: this.average,
      median: this.median,
      min: this.min,
      max: this.max,
      p90: this.percential(90),
      p95: this.percential(95),
      p99: this.percential(99)
    };
  };

  Stat.prototype.toIntInfoMap = function() {
    return {
      length: this.length,
      average: round(this.average),
      median: round(this.median),
      min: round(this.min),
      max: round(this.max),
      p90: round(this.percential(90)),
      p95: round(this.percential(95)),
      p99: round(this.percential(99))
    };
  };

  Stat.prototype.toIntString = function() {
    return inspect(this.toIntInfoMap());
  };

  Stat.prototype.add = function(v) {
    this.values.push(v);
    this.sum += v;
    if (this.values.length === 1) {
      return this.max = this.min = v;
    } else {
      this.max = max(this.max, v);
      return this.min = min(this.min, v);
    }
  };

  return Stat;

})(BaseObject);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [[__webpack_require__(95), "executePromiseSequence"], __webpack_require__(30), __webpack_require__(94), __webpack_require__(52), __webpack_require__(58), __webpack_require__(92)];


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {


/*
Transaction provides a manual, yet easy way to log the before and after values
of fields over many objects.

It is "manual" in that you must:

  Pre-specify all objects you wish to track.
  Specify the properties you wish to track for all objects and/or uniquely for each object.
  Pass in the "from" values or call saveFromValues
  Pass in the "to" values or call saveToValues

Once you have capture the "from" and "to" values of the transaction, you can:

  rollBack and set all properties to their "from" values
  rollForward and set all properties to their "to" values
  interpolate(p) and set all properties to their linearly interpolated value
    between their saved "from" (p=0) and "to" (p=1) values.
    If you use interpolate:
      to/from values should be pair-wise the same type
      only to/from values of the following types will be interpolated:
        numbers
        objects implementing: a.add(b), a.sub(b) and a.mul(number)
      Non-interpolatable types are handled as follows:
        switch p
          when 0 then set to "from" values
          when 1 then set to "to" values
          else left unchanged

Example initializers:

   * example-a: track obj's "foo" and "bar" properties
  new Transaction obj, properties: ["foo", "bar"]

   * same as example-a, but also initialize obj's from-values as obj.foo=1 and obj.bar=2
  new Transaction obj, from: foo:1, bar:2

   * same as example-a, but also initialize obj's to-values as obj.foo=1 and obj.bar=2
  new Transaction obj, to: foo:1, bar:2

   * track obj1 and obj2's "foo" and "bar" properties
  new Transaction [obj1, obj2], properties: ["foo", "bar"]

   * track:
   *   obj1's foo, bar, noo and mar properties, with both from and to values initialized
   *   obj2's goo, har, noo and mar properties, with both from and to values initialized
  new Transaction [
      [obj1,
        from: foo:1, bar:2
        to:   foo:2, bar:3
      ],
      [obj2,
        from: goo:1, har:2
        to:   goo:2, har:3
      ]
    ],
    from: noo:4, mar:5
    to:   noo:4, mar:5
 */
var BaseObject, ClassSystem, Map, SingleObjectTransaction, StandardLib, Transaction, cloneByStructure, eq, inspect, rubyTrue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(4);

ClassSystem = __webpack_require__(5);

SingleObjectTransaction = __webpack_require__(96);

rubyTrue = StandardLib.rubyTrue, eq = StandardLib.eq, inspect = StandardLib.inspect, Map = StandardLib.Map, cloneByStructure = StandardLib.cloneByStructure;

BaseObject = ClassSystem.BaseObject;

module.exports = Transaction = (function(superClass) {
  extend(Transaction, superClass);

  Transaction.SingleObjectTransaction = SingleObjectTransaction;

  function Transaction(objects, options) {
    if (options == null) {
      options = {};
    }
    Transaction.__super__.constructor.apply(this, arguments);
    this._objects = new Map;
    if (objects.constructor === Array) {
      this.addObjects(objects);
    } else {
      this.addObject(objects);
    }
    if (options.properties) {
      this.addProperties(options.properties);
    }
    if (options.property) {
      this.addProperties([options.property]);
    }
    if (options.from) {
      this.addFromValues(options.from);
    }
    if (options.to) {
      this.addToValues(options.to);
    }
    this.saveFromValues();
  }

  Transaction.prototype.inspect = function(inspector) {
    if (!inspector) {
      return ClassSystem.Inspect.inspect(this);
    }
    inspector.put(this.classPathName + ":");
    return this.inspectParts(inspector);
  };

  Transaction.prototype.inspectParts = function(inspector) {
    return this._objects.each((function(_this) {
      return function(k, v) {
        inspector.put("\n  ");
        return inspector.inspect(v);
      };
    })(this));
  };

  Transaction.getter({
    objects: function() {
      return this._objects.keys;
    }
  });

  Transaction.prototype.properties = function(obj) {
    return this._objects.get(obj).properties;
  };

  Transaction.prototype.from = function(obj) {
    return this._objects.get(obj).from;
  };

  Transaction.prototype.to = function(obj) {
    return this._objects.get(obj).to;
  };

  Transaction.prototype.rollBack = function() {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.rollBack();
      };
    })(this));
  };

  Transaction.prototype.rollForward = function() {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.rollForward();
      };
    })(this));
  };

  Transaction.prototype.interpolate = function(p) {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.interpolate(p);
      };
    })(this));
  };

  Transaction.prototype.optimize = function() {
    this.optimizeProperties();
    return this.optimizeObjects();
  };

  Transaction.getter({
    hasToValues: function() {
      var result;
      result = false;
      this._objects.forEach((function(_this) {
        return function(oi) {
          if (oi.hasToValues) {
            return result = true;
          }
        };
      })(this));
      return result;
    },
    valuesChanged: function() {
      var result;
      result = false;
      this._objects.forEach((function(_this) {
        return function(object) {
          if (object.valuesChanged) {
            return result = true;
          }
        };
      })(this));
      return result;
    }
  });

  Transaction.prototype.toString = function() {
    return (this.className + "\n  ") + (this._objects.map(function(obj, single) {
      return single.toString();
    })).join("  \n");
  };

  Transaction.prototype.addFromValues = function(from) {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.addFromValues(from);
      };
    })(this));
  };

  Transaction.prototype.addToValues = function(to) {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.addToValues(to);
      };
    })(this));
  };

  Transaction.prototype.addProperties = function(properties) {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.addProperties(properties);
      };
    })(this));
  };

  Transaction.prototype.addObject = function(obj) {
    var oi;
    oi = new SingleObjectTransaction(obj);
    return this._objects.set(oi.object, oi);
  };

  Transaction.prototype.addObjects = function(objects) {
    var i, len, obj, results;
    results = [];
    for (i = 0, len = objects.length; i < len; i++) {
      obj = objects[i];
      results.push(this.addObject(obj));
    }
    return results;
  };

  Transaction.prototype.saveFromValues = function() {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.saveFromValues();
      };
    })(this));
  };

  Transaction.prototype.saveToValues = function() {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.saveToValues();
      };
    })(this));
  };

  Transaction.prototype.optimizeProperties = function() {
    return this._objects.forEach((function(_this) {
      return function(oi) {
        return oi.optimizeProperties();
      };
    })(this));
  };

  Transaction.prototype.optimizeObjects = function() {
    var objs;
    objs = this._objects;
    this._objects = new Map;
    return objs.forEach((function(_this) {
      return function(oi) {
        if (!oi.noChanges) {
          return _this._objects.set(oi.object, oi);
        }
      };
    })(this));
  };

  return Transaction;

})(BaseObject);


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, ErrorWithInfo, Promise, StandardLib, Validator, array, clone, emailRegexp, formattedInspect, isBoolean, isFunction, isHexColor, isId, isNumber, isPlainArray, isPlainObject, isString, log, merge, mergeIntoUnless, present, select, shallowClone, validStatus, w,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(4);

merge = StandardLib.merge, log = StandardLib.log, BaseObject = StandardLib.BaseObject, shallowClone = StandardLib.shallowClone, isNumber = StandardLib.isNumber, isString = StandardLib.isString, isPlainObject = StandardLib.isPlainObject, isPlainArray = StandardLib.isPlainArray, Promise = StandardLib.Promise, isBoolean = StandardLib.isBoolean, formattedInspect = StandardLib.formattedInspect, present = StandardLib.present, select = StandardLib.select, emailRegexp = StandardLib.emailRegexp, mergeIntoUnless = StandardLib.mergeIntoUnless, w = StandardLib.w, isFunction = StandardLib.isFunction, clone = StandardLib.clone, ErrorWithInfo = StandardLib.ErrorWithInfo, array = StandardLib.array;

validStatus = __webpack_require__(51).validStatus;


/*
NOTES:

  validators are evaluated before preprocessors

  preprocessors should NOT throw validation-related errors

  TODO?: We could add postValidators to allow you to validate AFTER the preprocessor...

USAGE:
  new Validator validatorFieldsProps, options

    IN:
      validatorFieldsProps:
        plain object with zero or more field-validations defined:
          fieldName: fieldProps
      options:
        exclusive: true/false
          if true, only fields listed in validatorFieldsProps are allowed.

    fieldProps:
      string or plainObject
      string: selects fieldProps from one of the standard @fieldTypes (see below)
      plainObject: (all fields are optional)

        validate: (v) -> true/false
          whenever this field is included in an update OR create operation,
            validate() must return true
          NOTE: is evaluated BEFORE preprocess

        preprocess: (v1) -> v2
          whenever this field is included in an update OR create operation,
            after validation succeeds,
            value = preprocess value

        required: true/false/string
          if true/string
            when creating records, this field must be included
          if string
            fieldProps = merge fieldProps, fieldTypes[string]

        present: true/false
          if true
            when creating records, this field must be include and 'present' (see Art.Foundation.present)

        fieldType: string
          fieldProps = merge fieldTypes[string], fieldProps

        dataType: string
          sepecify which of the standard Json data-types this field contains
          This is not used by Validator itself, but is available for clients to reflect on field-types.
          Must be one of the values in: @dataTypes

        instanceof: class
          in addition to passing validate(), if present, the value must also be an instance of the
          specified class

EXAMPLES:
  new
 */

BaseObject = __webpack_require__(5).BaseObject;

isId = function(v) {
  return isString(v) && v.match(/^[-_a-z0-9]+$/i);
};

isHexColor = function(v) {
  return isString(v) && v.match(/^#([a-f0-9]{3})|([a-f0-9]{6})/i);
};

module.exports = Validator = (function(superClass) {
  var arrayDataType, booleanDataType, dataTypes, fieldTypes, k, normalizeDepricatedProps, normalizeFieldProps, normalizeFieldTypeProp, normalizeInstanceOfProp, normalizePlainObjectProps, numberDataType, objectDataType, preCreate, preCreateSync, stringDataType, v;

  extend(Validator, superClass);


  /*
  @dataTypes only includes the Standard Json types:
    except 'null':
      no field has the type of 'null'
      instead, it has some other type and can be 'null' unless it is 'required'
   */

  Validator.dataTypes = dataTypes = {
    boolean: {
      validate: function(a) {
        return isBoolean(a);
      }
    },
    number: {
      validate: function(a) {
        return isNumber(a);
      }
    },
    string: {
      validate: function(a) {
        return isString(a);
      }
    },
    object: {
      validate: function(a) {
        return isPlainObject(a);
      }
    },
    array: {
      validate: function(a) {
        return isPlainArray(a);
      }
    },
    "function": {
      validate: function(a) {
        return isFunction(a);
      }
    }
  };

  booleanDataType = "boolean";

  numberDataType = "number";

  stringDataType = "string";

  objectDataType = "object";

  arrayDataType = "array";


  /*
  standard FieldType props:
    validate: (v) -> true/false
    preprocess: (v1) -> v2
    required: true/false
    dataType: one of @dataTypes, default: 'string'
  
  You can add your own, too, but they are ignored by this class.
   */

  Validator.fieldTypes = fieldTypes = {
    boolean: {
      dataType: booleanDataType
    },
    number: {
      dataType: numberDataType
    },
    string: {},
    object: {
      dataType: objectDataType
    },
    array: {
      dataType: arrayDataType
    },
    count: {
      dataType: numberDataType,
      "default": 0
    },
    id: {
      required: true,
      validate: function(v) {
        return isId(v);
      }
    },
    date: {
      validate: function(v) {
        return isString(v) || (v instanceof Date);
      },
      preprocess: function(v) {
        if (isString(v)) {
          return new Date(v);
        } else {
          return v;
        }
      }
    },
    timestamp: {
      dataType: numberDataType,
      validate: function(v) {
        return isNumber(v) || (v instanceof Date);
      },
      preprocess: function(v) {
        if (v instanceof Date) {
          return v - 0;
        } else {
          return v;
        }
      }
    },
    color: {
      validate: function(v) {
        return isHexColor(v);
      }
    },
    email: {
      validate: function(v) {
        return isString(v) && v.trim().match(emailRegexp);
      },
      preprocess: function(v) {
        return v.trim().toLowerCase();
      }
    },
    url: {
      validate: function(v) {
        return isString(v) && v.match(urlRegexp);
      },
      preprocess: function(v) {
        return normalizeUrl(v);
      }
    },
    communicationStatus: {
      validate: function(v) {
        return validStatus(v);
      }
    },
    trimmedString: {
      validate: function(v) {
        return isString(v);
      },
      preprocess: function(v) {
        return v.trim();
      }
    },
    "function": {
      dataType: "function"
    }
  };

  for (k in fieldTypes) {
    v = fieldTypes[k];
    v.dataType || (v.dataType = stringDataType);
    v.validate || (v.validate = dataTypes[v.dataType].validate);
  }

  normalizeInstanceOfProp = function(ft) {
    var _instanceof, validate;
    if (_instanceof = ft["instanceof"]) {
      validate = ft.validate;
      return merge(ft, {
        validate: function(v) {
          return (v instanceof _instanceof) && (!validate || validate(v));
        }
      });
    } else {
      return ft;
    }
  };

  normalizePlainObjectProps = function(ft) {
    var out, subObject;
    out = null;
    for (k in ft) {
      v = ft[k];
      if (isPlainObject(subObject = v)) {
        if (!out) {
          out = shallowClone(ft);
        }
        out[k] = true;
        mergeIntoUnless(out, normalizePlainObjectProps(subObject));
      }
    }
    return out || ft;
  };

  normalizeDepricatedProps = function(ft) {
    if (ft.requiredPresent) {
      throw new Error("DEPRICATED: requiredPresent. Use: present: true");
    }
    if (isString(ft.required)) {
      throw new Error("DEPRICATED: required can no longer specifiy the field-type. Use: required: fieldType: myFieldTypeString OR 'required myFieldTypeString'");
    }
    if (isString(ft.present)) {
      throw new Error("DEPRICATED: present can no longer specifiy the field-type. Use: present: fieldType: myFieldTypeString OR 'present myFieldTypeString'");
    }
    return ft;
  };

  normalizeFieldTypeProp = function(ft) {
    if (ft.fieldType) {
      return merge(normalizeFieldProps(ft.fieldType), ft);
    } else {
      return ft;
    }
  };

  Validator.normalizeFieldProps = normalizeFieldProps = function(ft) {
    var ftArray, processed, string, strings, subFt;
    ft = (function() {
      var i, len, ref;
      if (isPlainObject(ft)) {
        return normalizeFieldTypeProp(normalizeInstanceOfProp(normalizeDepricatedProps(normalizePlainObjectProps(ft))));
      } else if (isPlainArray(ftArray = ft)) {
        processed = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = ftArray.length; i < len; i++) {
            ft = ftArray[i];
            results.push(normalizeFieldProps(ft));
          }
          return results;
        })();
        return merge.apply(null, processed);
      } else if (isString(strings = ft)) {
        ft = {};
        ref = w(strings);
        for (i = 0, len = ref.length; i < len; i++) {
          string = ref[i];
          if (subFt = fieldTypes[string]) {
            mergeIntoUnless(ft, subFt);
          } else {
            ft[string] = true;
          }
        }
        return ft;
      } else {
        throw new Error("fieldType must be a string or plainObject: " + (formattedInspect(ft)));
      }
    })();
    return merge(fieldTypes[ft.fieldType], ft);
  };

  function Validator(fieldDeclarationMap, options) {
    this._fieldProps = {};
    this._requiredFieldsMap = {};
    this.addFields(fieldDeclarationMap);
    if (options) {
      this.exclusive = options.exclusive, this.context = options.context;
    }
  }

  Validator.property("exclusive");

  Validator.prototype.addFields = function(fieldDeclarationMap) {
    var field, fieldOptions;
    for (field in fieldDeclarationMap) {
      fieldOptions = fieldDeclarationMap[field];
      fieldOptions = this._addField(field, fieldOptions);
      if (fieldOptions.required) {
        this._requiredFieldsMap[field] = void 0;
      }
    }
    return null;
  };


  /*
  IN:
    fields: object with fields to validate OR Promise returning said object
  
  OUT:
    promise.then (validatedPreprocessedFields) ->
    .catch (validationFailureInfoObject) ->
   */

  Validator.prototype.preCreate = preCreate = function(fields, options) {
    return Promise.resolve(fields).then((function(_this) {
      return function(fields) {
        return _this.preCreateSync(fields, options);
      };
    })(this));
  };

  Validator.prototype.validate = preCreate;


  /*
  IN:
    fields: object with fields to validate OR Promise returning said object
  
  OUT:
    promise.then (validatedPreprocessedFields) ->
    .catch (validationFailureInfoObject) ->
   */

  Validator.prototype.preUpdate = function(fields, options) {
    return Promise.resolve(fields).then((function(_this) {
      return function(fields) {
        return _this.preUpdateSync(fields, options);
      };
    })(this));
  };


  /*
  IN:
    fields: - the object to check
    options:
      context: string - included in validation errors for reference
      logErrors: false - if true, will log.error errors
  
  OUT: preprocessed fields - if they pass, otherwise error is thrown
   */

  Validator.prototype.preCreateSync = preCreateSync = function(fields, options) {
    if (this.requiredFieldsPresent(fields) && this.presentFieldsValid(fields)) {
      return this.preprocessFields(fields, true);
    } else {
      return this._throwError(fields, options, true);
    }
  };

  Validator.prototype.validateSync = preCreateSync;


  /*
  OUT: preprocessed fields - if they pass, otherwise error is thrown
   */

  Validator.prototype.preUpdateSync = function(fields, options) {
    if (this.presentFieldsValid(fields)) {
      return this.preprocessFields(fields);
    } else {
      return this._throwError(fields, options);
    }
  };

  Validator.prototype._throwError = function(fields, options, forCreate) {
    var errors, info, message, messageFields;
    info = {
      errors: errors = {}
    };
    messageFields = [];
    array(this.invalidFields(fields), messageFields, function(f) {
      errors[f] = "invalid";
      return "invalid " + f;
    });
    forCreate && array(this.missingFields(fields), messageFields, function(f) {
      errors[f] = "missing";
      return "missing " + f;
    });
    if (options != null ? options.logErrors : void 0) {
      log.error({
        Validator_preCreate_errors: {
          options: options,
          info: info
        }
      });
    }
    message = "Invalid fields for " + ((options != null ? options.context : void 0) || this.context || "Validator") + " " + (forCreate ? 'create' : 'update') + ": " + (messageFields.join(', '));
    info.fields = fields;
    throw new ErrorWithInfo(message, info);
  };

  Validator.prototype.presentFieldValid = function(fields, fieldName) {
    var fieldProps, validate, value;
    if (fieldProps = this._fieldProps[fieldName]) {
      validate = fieldProps.validate;
      return !validate || ((value = fields[fieldName]) == null) || value === null || value === void 0 || validate(value, fieldName, fields);
    } else {
      return !this.exclusive;
    }
  };

  Validator.prototype.requiredFieldPresent = function(fields, fieldName) {
    var fieldProps;
    if (!(fieldProps = this._fieldProps[fieldName])) {
      return true;
    }
    if (fieldProps.required && (fields[fieldName] == null)) {
      return false;
    }
    if (fieldProps.present && !present(fields[fieldName])) {
      return false;
    }
    return true;
  };

  Validator.prototype.presentFieldsValid = function(fields) {
    var __, fieldName;
    for (fieldName in fields) {
      __ = fields[fieldName];
      if (!this.presentFieldValid(fields, fieldName)) {
        return false;
      }
    }
    return true;
  };

  Validator.prototype.requiredFieldsPresent = function(fields) {
    var __, fieldName, ref;
    ref = this._fieldProps;
    for (fieldName in ref) {
      __ = ref[fieldName];
      if (!this.requiredFieldPresent(fields, fieldName)) {
        return false;
      }
    }
    return true;
  };

  Validator.prototype.preprocessFields = function(fields, applyDefaults) {
    var fieldName, oldValue, preprocess, processedFields, props, value;
    processedFields = null;
    if (applyDefaults) {
      fields || (fields = {});
    }
    fields && (function() {
      var ref, ref1, results;
      ref = this._fieldProps;
      results = [];
      for (fieldName in ref) {
        props = ref[fieldName];
        preprocess = props.preprocess;
        value = (ref1 = (oldValue = fields[fieldName])) != null ? ref1 : applyDefaults && props["default"];
        if (preprocess && (value != null)) {
          value = preprocess(value);
        }
        if (value !== oldValue) {
          processedFields || (processedFields = shallowClone(fields));
          results.push(processedFields[fieldName] = value);
        } else {
          results.push(void 0);
        }
      }
      return results;
    }).call(this);
    return processedFields || fields;
  };

  Validator.prototype.invalidFields = function(fields) {
    var results;
    results = [];
    for (k in fields) {
      v = fields[k];
      if (!this.presentFieldValid(fields, k)) {
        results.push(k);
      }
    }
    return results;
  };

  Validator.prototype.missingFields = function(fields) {
    var results;
    fields = merge(this._requiredFieldsMap, fields);
    results = [];
    for (k in fields) {
      v = fields[k];
      if (!this.requiredFieldPresent(fields, k)) {
        results.push(k);
      }
    }
    return results;
  };

  Validator.prototype._addField = function(field, options) {
    return this._fieldProps[field] = normalizeFieldProps(options);
  };

  return Validator;

})(BaseObject);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11).includeInNamespace(__webpack_require__(174)).addModules({
  ArtFoundationConfig: __webpack_require__(163)
});

__webpack_require__(76);

__webpack_require__(170);

__webpack_require__(5);

__webpack_require__(4);

__webpack_require__(53);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var Art, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(31);

module.exports = Neptune.Art || Neptune.addNamespace('Art', Art = (function(superClass) {
  extend(Art, superClass);

  function Art() {
    return Art.__super__.constructor.apply(this, arguments);
  }

  return Art;

})(Neptune.Base));


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var Node, array, defineModule, escapeJavascriptString, find, log, merge, ref;

ref = __webpack_require__(2), array = ref.array, defineModule = ref.defineModule, log = ref.log, merge = ref.merge, escapeJavascriptString = ref.escapeJavascriptString, find = ref.find;

Node = __webpack_require__(20).Node;

defineModule(module, function() {
  var IndentBlocks;
  return IndentBlocks = (function() {
    var blockLinesRegExp, blockStartRegExp, computeSubsourceToParentSourceMap, matchBlock, matchToEolAndBlock, toEolContent;

    function IndentBlocks() {}

    blockStartRegExp = /\n(?: *\n)*( +)(?=$|[^ \n])/y;

    toEolContent = /(\ *)((?:\ *[^ \n]+)+)\ */y;

    blockLinesRegExp = function(indent) {
      return RegExp("((?:\\s*\\n)(?:" + indent + " *[^\\n ][^\\n]*))+", "y");
    };


    /*
    TODO:
      for matchBlock and matchToEolAndBlock
    
      We also need a source-offset mapper from the new source back to the old-source.
    
      I think the map should just be part of the returned object
     */

    IndentBlocks.matchBlock = matchBlock = function(source, sourceOffset, returnRawMatch) {
      var __, indent, length, linesRegExp, match, rawSubsource, replaceRegExp, replaceWith, subsource, subsourceToParentSourceMap;
      if (returnRawMatch == null) {
        returnRawMatch = false;
      }
      blockStartRegExp.lastIndex = sourceOffset;
      if (match = blockStartRegExp.exec(source)) {
        __ = match[0], indent = match[1];
        length = indent.length;
        linesRegExp = blockLinesRegExp(indent);
        linesRegExp.lastIndex = sourceOffset;
        rawSubsource = linesRegExp.exec(source)[0];
        replaceRegExp = RegExp("(?:^\\n" + indent + ")|(\\n)(?:" + indent + ")", "g");
        replaceWith = "$1";
        subsourceToParentSourceMap = null;
        subsource = returnRawMatch ? rawSubsource : rawSubsource.replace(replaceRegExp, "$1");
        return {
          matchLength: rawSubsource.length,
          subsource: subsource,
          sourceMap: returnRawMatch ? function(suboffset) {
            return suboffset + sourceOffset;
          } : function(suboffset) {
            var bestMapEntry;
            subsourceToParentSourceMap || (subsourceToParentSourceMap = computeSubsourceToParentSourceMap(sourceOffset, replaceRegExp, indent, rawSubsource));
            bestMapEntry = find(subsourceToParentSourceMap, function(entry) {
              if (suboffset < entry.subsourceEndOffset) {
                return entry;
              }
            });
            return suboffset + bestMapEntry.toSourceDelta;
          }
        };
      }
    };

    computeSubsourceToParentSourceMap = function(sourceBaseOffset, replaceRegExp, indent, rawSubsource) {
      var indentLength, indentWithNewLineLength, indexes, keptLength, match, matchLength, ref1, removedLength, sourceEndOffset, sourceOffset, subsourceEndOffset, subsourceOffset, toSourceDelta;
      indentLength = indent.length;
      indentWithNewLineLength = indentLength + 1;
      indexes = [];
      sourceOffset = toSourceDelta = sourceBaseOffset;
      subsourceOffset = subsourceEndOffset = 0;
      while (match = replaceRegExp.exec(rawSubsource)) {
        matchLength = match[0].length;
        keptLength = ((ref1 = match[1]) != null ? ref1.length : void 0) || 0;
        removedLength = matchLength - keptLength;
        sourceEndOffset = match.index + sourceBaseOffset + matchLength;
        subsourceEndOffset += sourceEndOffset - sourceOffset - removedLength;
        indexes.push({
          keptLength: keptLength,
          removedLength: removedLength,
          sourceOffset: sourceOffset,
          subsourceOffset: subsourceOffset,
          toSourceDelta: toSourceDelta,
          sourceEndOffset: sourceEndOffset,
          subsourceEndOffset: subsourceEndOffset
        });
        toSourceDelta += removedLength;
        sourceOffset = sourceEndOffset;
        subsourceOffset = subsourceEndOffset;
      }
      sourceEndOffset = sourceBaseOffset + rawSubsource.length;
      subsourceEndOffset = sourceEndOffset - sourceOffset + sourceOffset;
      indexes.push({
        sourceOffset: sourceOffset,
        subsourceOffset: subsourceOffset,
        toSourceDelta: toSourceDelta,
        sourceEndOffset: sourceEndOffset,
        subsourceEndOffset: subsourceEndOffset
      });
      return indexes;
    };

    IndentBlocks.matchToEolAndBlock = matchToEolAndBlock = function(source, offset) {
      var blockMatch, eolMatch, matchLength, sourceMatched, spaces;
      toEolContent.lastIndex = offset;
      if (eolMatch = toEolContent.exec(source)) {
        sourceMatched = eolMatch[0], spaces = eolMatch[1];
        matchLength = sourceMatched.length;
        if (blockMatch = matchBlock(source, offset + matchLength, true)) {
          matchLength += blockMatch.matchLength;
        }
        return {
          subsource: source.slice(offset + spaces.length, offset + matchLength),
          sourceMap: function(suboffset) {
            return offset + spaces.length + suboffset;
          },
          matchLength: matchLength
        };
      } else {
        return matchBlock(source, offset);
      }
    };

    IndentBlocks.getParseFunction = function(matcher, subparseOptions) {
      return {
        parse: function(parentNode) {
          var block, matchLength, offset, source, sourceMap, subsource;
          offset = parentNode.nextOffset, source = parentNode.source;
          if (block = matcher(source, offset)) {
            subsource = block.subsource, matchLength = block.matchLength, sourceMap = block.sourceMap;
            return parentNode.subparse(subsource, merge(subparseOptions, {
              originalOffset: offset,
              originalMatchLength: matchLength,
              sourceMap: sourceMap
            }));
          }
        }
      };
    };

    IndentBlocks.getPropsToSubparseBlock = function(subparseOptions) {
      if (subparseOptions == null) {
        subparseOptions = {};
      }
      return IndentBlocks.getParseFunction(IndentBlocks.matchBlock, subparseOptions);
    };

    IndentBlocks.getPropsToSubparseToEolAndBlock = function(subparseOptions) {
      if (subparseOptions == null) {
        subparseOptions = {};
      }
      return IndentBlocks.getParseFunction(IndentBlocks.matchToEolAndBlock, subparseOptions);
    };

    return IndentBlocks;

  })();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(200).addModules({
  IndentBlocks: __webpack_require__(198)
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var BabelBridge, Extensions,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BabelBridge = __webpack_require__(54);

module.exports = BabelBridge.Extensions || BabelBridge.addNamespace('Extensions', Extensions = (function(superClass) {
  extend(Extensions, superClass);

  function Extensions() {
    return Extensions.__super__.constructor.apply(this, arguments);
  }

  return Extensions;

})(Neptune.Base));


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var EmptyOptionalNode,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = EmptyOptionalNode = (function(superClass) {
  extend(EmptyOptionalNode, superClass);

  function EmptyOptionalNode() {
    return EmptyOptionalNode.__super__.constructor.apply(this, arguments);
  }

  EmptyOptionalNode.getter({
    present: function() {
      return false;
    }
  });

  return EmptyOptionalNode;

})(__webpack_require__(99));


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject, Foundation, Node, NonMatch, Parser, Rule, compactFlatten, formattedInspect, getLineColumn, getLineColumnString, inspect, inspectLean, isClass, isFunction, isPlainArray, isPlainObject, log, max, merge, mergeInto, objectLength, objectWithout, peek, pluralize, pushIfNotPresent, ref, uniqueValues, upperCamelCase,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Foundation = __webpack_require__(2);

Rule = __webpack_require__(104);

ref = __webpack_require__(106), getLineColumn = ref.getLineColumn, getLineColumnString = ref.getLineColumnString;

Node = __webpack_require__(20).Node;

NonMatch = __webpack_require__(102);

BaseObject = Foundation.BaseObject, isFunction = Foundation.isFunction, peek = Foundation.peek, log = Foundation.log, isPlainObject = Foundation.isPlainObject, isPlainArray = Foundation.isPlainArray, merge = Foundation.merge, compactFlatten = Foundation.compactFlatten, objectLength = Foundation.objectLength, inspect = Foundation.inspect, inspectLean = Foundation.inspectLean, pluralize = Foundation.pluralize, isClass = Foundation.isClass, isPlainArray = Foundation.isPlainArray, upperCamelCase = Foundation.upperCamelCase, mergeInto = Foundation.mergeInto, objectWithout = Foundation.objectWithout, uniqueValues = Foundation.uniqueValues, formattedInspect = Foundation.formattedInspect, max = Foundation.max, inspect = Foundation.inspect, pushIfNotPresent = Foundation.pushIfNotPresent;

module.exports = Parser = (function(superClass) {
  var addToExpectingInfo, firstLines, instanceRulesFunction, lastLines, rulesFunction;

  extend(Parser, superClass);

  Parser.parse = function(_source, options) {
    this._source = _source;
    if (options == null) {
      options = {};
    }
    return (new this).parse(this._source, options);
  };

  Parser.classGetter({
    rootRuleName: function() {
      return this._rootRuleName || "root";
    },
    rootRule: function() {
      return this.getRules()[this._rootRuleName];
    }
  });

  Parser.extendableProperty({
    rules: {}
  }, function(extendableRules, newRules) {
    var newRule, ruleName;
    for (ruleName in a) {
      newRule = a[ruleName];
      extendableRules[ruleName] = newRule.clone();
    }
    return newRule;
  });

  Parser.addRule = function(ruleName, definitions, nodeBaseClass) {
    var array, base, definition, i, len, results, rule;
    if (nodeBaseClass == null) {
      nodeBaseClass = this.nodeBaseClass;
    }
    rule = (base = this.extendRules())[ruleName] || (base[ruleName] = new Rule(ruleName, this));
    if (definitions.root) {
      if (this._rootRuleName) {
        throw new Error("root rule already defined! was: " + this._rootRuleName + ", wanted: " + ruleName);
      }
      this._rootRuleName = ruleName;
    }
    if (!isPlainArray(array = definitions)) {
      definitions = [definitions];
    }
    results = [];
    for (i = 0, len = definitions.length; i < len; i++) {
      definition = definitions[i];
      results.push(rule.addVariant(isPlainObject(definition) ? merge({
        nodeBaseClass: nodeBaseClass
      }, definition) : {
        pattern: definition,
        nodeBaseClass: nodeBaseClass
      }));
    }
    return results;
  };


  /*
  IN:
    rules: plain object mapping rule-names to definitions
    nodeClass: optional, must extend BabelBridge.Node or be a plain object
   */

  Parser.rule = rulesFunction = function(a, b) {
    var definition, results, ruleName, rules, sharedNodeBaseClass;
    if (isClass(a)) {
      sharedNodeBaseClass = a;
      rules = b;
    } else {
      rules = a;
      sharedNodeBaseClass = b;
    }
    if (isPlainObject(sharedNodeBaseClass)) {
      sharedNodeBaseClass = (this.nodeBaseClass || Node).createSubclass(sharedNodeBaseClass);
    }
    results = [];
    for (ruleName in rules) {
      definition = rules[ruleName];
      results.push(this.addRule(ruleName, definition, sharedNodeBaseClass || this.nodeBaseClass));
    }
    return results;
  };

  Parser.rules = rulesFunction;

  Parser.prototype.rule = instanceRulesFunction = function(a, b) {
    return this["class"].rule(a, b);
  };

  Parser.prototype.rules = instanceRulesFunction;

  Parser.property("subparseInfo options");

  Parser.getter("source parser", {
    rootRuleName: function() {
      return this["class"].getRootRuleName();
    },
    rootRule: function() {
      return this["class"].getRootRule();
    },
    nextOffset: function() {
      return 0;
    },
    rootParser: function() {
      var ref1;
      return ((ref1 = this.parentParser) != null ? ref1.rootParser : void 0) || this;
    },
    ancestors: function(into) {
      into.push(this);
      return into;
    },
    parseInfo: function() {
      return "Parser";
    }
  });

  function Parser() {
    Parser.__super__.constructor.apply(this, arguments);
    this._options = null;
    this._parser = this;
    this._subparseInfo = null;
    this._source = null;
    this._resetParserTracking();
  }

  Parser._pluralNames = {};

  Parser.pluralize = function(name) {
    var base;
    return (base = this._pluralNames)[name] || (base[name] = pluralize(name));
  };

  Parser.prototype.pluralize = function(name) {
    return this["class"].pluralize(name);
  };


  /*
  IN:
    subsource:
      any string what-so-ever
    options:
      [all of @parse's options plus:]
      parentNode: (required)
        the resulting Node's parent
  
      originalMatchLength: (required)
        matchLength from @source that subsource was generated from.
  
      originalOffset: starting offset in parentParser.source
  
      sourceMap: (subsourceOffset) -> parentSourceOffset
  
    The original source we are sub-parsing from must be:
  
      parentNode.getNextText originalMatchLength
  
  OUT: a Node with offset and matchLength
   */

  Parser.prototype.subparse = function(subsource, options) {
    var failureIndex, k, match, matchLength, nonMatch, offset, originalMatchLength, originalOffset, parentNode, parser, ref1, rootNode, source, sourceMap, subparser;
    if (options == null) {
      options = {};
    }
    subparser = new this["class"];
    originalMatchLength = options.originalMatchLength, parentNode = options.parentNode, sourceMap = options.sourceMap, originalOffset = options.originalOffset;
    options.parentParser = this;
    if (match = subparser.parse(subsource, merge(options, {
      isSubparse: true
    }))) {
      offset = match.offset, matchLength = match.matchLength, source = match.source, parser = match.parser;
      match.subparseInfo = {
        offset: offset,
        matchLength: matchLength,
        source: source,
        parser: parser
      };
      if (match.matchLength < subsource.length) {
        if (match.text !== parentNode.getNextText(match.matchLength)) {
          throw new Error("INTERNAL TODO: SubParse was a partial match, but a source-map is required to determine the matchLength in the original source.");
        }
        originalMatchLength = match.matchLength;
      }
      match.offset = parentNode.nextOffset;
      match.matchLength = originalMatchLength;
      match._parent = parentNode;
      return match;
    } else {
      failureIndex = subparser.failureIndexInParentParser;
      ref1 = subparser._nonMatches;
      for (k in ref1) {
        nonMatch = ref1[k];
        rootNode = nonMatch.node;
        while (rootNode !== parentNode && rootNode.parent instanceof Node) {
          rootNode = rootNode.parent;
        }
        if (rootNode !== parentNode) {
          rootNode._parent = parentNode;
        }
        this._addNonMatch(failureIndex, nonMatch);
      }
      return null;
    }
  };

  Parser.prototype.offsetInParentParserSource = function(suboffset) {
    var originalOffset, ref1, ref2, sourceMap;
    ref1 = this.options, sourceMap = ref1.sourceMap, originalOffset = (ref2 = ref1.originalOffset) != null ? ref2 : 0;
    if (sourceMap) {
      return sourceMap(suboffset);
    } else if (this.parentParser) {
      return this.options.originalOffset + suboffset;
    } else {
      return suboffset;
    }
  };

  Parser.prototype.offsetInRootParserSource = function(suboffset) {
    if (this.parentParser) {
      return this.parentParser.offsetInRootParserSource(this.offsetInParentParserSource(suboffset));
    } else {
      return suboffset;
    }
  };

  Parser.getter({
    failureIndexInParentParser: function() {
      return this.offsetInParentParserSource(this._failureIndex);
    }
  });


  /*
  OUT: on success, root Node of the parse tree, else null
  options:
    allowPartialMatch: true/false
   */

  Parser.prototype.parse = function(_source, options1) {
    var allowPartialMatch, isSubparse, ref1, result, rule, ruleName, rules, startRule;
    this._source = _source;
    this.options = options1 != null ? options1 : {};
    ref1 = this.options, this.parentParser = ref1.parentParser, allowPartialMatch = ref1.allowPartialMatch, rule = ref1.rule, isSubparse = ref1.isSubparse;
    this._resetParserTracking();
    ruleName = rule || this.rootRuleName;
    rules = this.rules;
    if (!ruleName) {
      throw new Error("No root rule defined.");
    }
    startRule = rules[ruleName];
    if (!startRule) {
      throw new Error("Could not find rule: " + ruleName);
    }
    if (result = startRule.parse(this)) {
      if (result.matchLength === this._source.length || (allowPartialMatch && result.matchLength > 0)) {
        if (!isSubparse) {
          result.applyLabels();
        }
        return result;
      } else {
        return !isSubparse && (function() {
          throw new Error("parse only matched " + result.matchLength + " of " + this._source.length + " characters\n" + (this.getParseFailureInfo(this.options)));
        }).call(this);
      }
    } else {
      return !isSubparse && (function() {
        throw new Error(this.getParseFailureInfo(this.options));
      }).call(this);
    }
  };

  addToExpectingInfo = function(node, into, value) {
    var m, name1, p, pm, ref1;
    if (node.parent) {
      into = addToExpectingInfo(node.parent, into);
    }
    return into[name1 = node.parseInfo] || (into[name1] = value ? value : (p = {}, ((ref1 = (pm = node.presentMatches)) != null ? ref1.length : void 0) > 0 ? p.matches = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = pm.length; i < len; i++) {
        m = pm[i];
        results.push(m.parseInfo);
      }
      return results;
    })() : void 0, p));
  };

  lastLines = function(string, count) {
    var a;
    if (count == null) {
      count = 5;
    }
    a = string.split("\n");
    return a.slice(max(0, a.length - count), a.length).join("\n");
  };

  firstLines = function(string, count) {
    var a;
    if (count == null) {
      count = 5;
    }
    a = string.split("\n");
    return a.slice(0, count).join("\n");
  };

  Parser.getter("nonMatches", {
    parseFailureInfo: function(options) {
      var left, out, right, sourceAfter, sourceBefore, verbose;
      if (!this._source) {
        return;
      }
      verbose = options != null ? options.verbose : void 0;
      sourceBefore = lastLines(left = this._source.slice(0, this._failureIndex));
      sourceAfter = firstLines(right = this._source.slice(this._failureIndex));
      out = compactFlatten([
        "Parsing error at " + (this.options.sourceFile || '') + ":" + (getLineColumnString(this._source, this._failureIndex)) + "\n\nSource:\n...\n" + sourceBefore + "<HERE>" + sourceAfter + "\n...\n", this.expectingInfo, verbose ? [
          "", formattedInspect({
            "partial-parse-tree": this.partialParseTree
          })
        ] : void 0, ""
      ]);
      return out.join("\n");
    },
    partialParseTreeLeafNodes: function() {
      if (this._partialParseTreeNodes) {
        return this._partialParseTreeNodes;
      }
      this.getPartialParseTree();
      return this._partialParseTreeNodes;
    },
    partialParseTree: function() {
      var expectingInfoTree, k, n, node, patternElement, rootNode;
      if (this._partialParseTree) {
        return this._partialParseTree;
      }
      expectingInfoTree = {};
      this._partialParseTreeNodes = (function() {
        var ref1, ref2, results;
        ref1 = this._nonMatches;
        results = [];
        for (k in ref1) {
          ref2 = ref1[k], patternElement = ref2.patternElement, node = ref2.node;
          addToExpectingInfo(node, expectingInfoTree, patternElement.pattern.toString());
          n = new Node(node);
          n.pattern = patternElement;
          rootNode = n._addToParentAsNonMatch();
          results.push(n);
        }
        return results;
      }).call(this);
      return this._partialParseTree = rootNode;
    },
    expectingInfo: function() {
      var child, couldMatchRuleNames, couldMatchRules, firstPartialMatchParent, i, len, newOutput, node, partialMatchingParents, pmp, ref1, ruleName, v;
      if (!(objectLength(this._nonMatches) > 0)) {
        return null;
      }

      /*
      I know how to do this right!
      
      1) I want to add all the non-match nodes to the parse-tree
      2) I want to further improve the parse-tree inspect
        - it may be time to do a custom inspect
       */
      partialMatchingParents = [];
      ref1 = this.partialParseTreeLeafNodes;
      for (i = 0, len = ref1.length; i < len; i++) {
        node = ref1[i];
        firstPartialMatchParent = node.firstPartialMatchParent;
        pushIfNotPresent(partialMatchingParents, firstPartialMatchParent);
      }
      couldMatchRuleNames = [];
      newOutput = (function() {
        var j, len1, results;
        results = [];
        for (j = 0, len1 = partialMatchingParents.length; j < len1; j++) {
          pmp = partialMatchingParents[j];
          results.push((function() {
            var l, len2, ref2, results1;
            ref2 = pmp.matches;
            results1 = [];
            for (l = 0, len2 = ref2.length; l < len2; l++) {
              child = ref2[l];
              if (!child.isNonMatch) {
                continue;
              }
              if (ruleName = child.nonMatchingLeaf.ruleNameOrNull) {
                couldMatchRuleNames.push(ruleName);
              }
              results1.push("  " + (formattedInspect(child.nonMatchingLeaf.ruleNameOrPattern)) + " to complete '" + pmp.ruleName + "' (which started at " + (getLineColumnString(this._source, pmp.absoluteOffset)) + ")");
            }
            return results1;
          }).call(this));
        }
        return results;
      }).call(this);
      if (couldMatchRuleNames.length > 1) {
        couldMatchRules = [
          "", "rules:", (function() {
            var j, len1, results;
            results = [];
            for (j = 0, len1 = couldMatchRuleNames.length; j < len1; j++) {
              ruleName = couldMatchRuleNames[j];
              results.push((function() {
                var l, len2, ref2, results1;
                ref2 = this.rules[ruleName]._variants;
                results1 = [];
                for (l = 0, len2 = ref2.length; l < len2; l++) {
                  v = ref2[l];
                  results1.push("  " + ruleName + ": " + (formattedInspect(v.patternString)));
                }
                return results1;
              }).call(this));
            }
            return results;
          }).call(this)
        ];
      }
      newOutput = compactFlatten([newOutput, couldMatchRules]);
      if (!(newOutput.length > 0)) {
        newOutput = "  end of input";
      }
      return compactFlatten(["expecting:", newOutput]);
    }
  });

  Parser.prototype.tryPatternElement = function(patternElement, parseIntoNode, ruleVariant) {
    if (patternElement.parseInto(parseIntoNode)) {
      return true;
    } else {
      this._logParsingFailure(parseIntoNode, patternElement);
      return false;
    }
  };

  Parser.prototype._getRuleParseCache = function(ruleName) {
    var base;
    return (base = this._parseCache)[ruleName] || (base[ruleName] = {});
  };

  Parser.prototype._cached = function(ruleName, offset) {
    return this._getRuleParseCache(ruleName)[offset];
  };

  Parser.prototype._cacheMatch = function(ruleName, matchingNode) {
    this._getRuleParseCache(ruleName)[matchingNode.offset] = matchingNode;
    return matchingNode;
  };

  Parser.prototype._cacheNoMatch = function(ruleName, offset) {
    this._getRuleParseCache(ruleName)[offset] = "no_match";
    return null;
  };

  Parser.prototype._resetParserTracking = function() {
    this._partialParseTreeNodes = null;
    this._partialParseTree = null;
    this._matchingNegativeDepth = 0;
    this._parsingDidNotMatchEntireInput = false;
    this._failureIndex = 0;
    this._nonMatches = {};
    this._parseCache = {};
    return this._parentParserRootOffset = null;
  };

  Parser.getter({
    failureIndex: function() {
      return this._failureIndex;
    },
    isMatchingNegative: function() {
      return this._matchingNegativeDepth > 0;
    }
  });

  Parser.prototype._matchNegative = function(f) {
    var result;
    this._matchingNegativeDepth++;
    result = f();
    this._matchingNegativeDepth--;
    return result;
  };

  Parser.prototype._logParsingFailure = function(parseIntoNode, patternElement) {
    if (!(this._matchingNegativeDepth === 0 && parseIntoNode.offset >= this._failureIndex && patternElement.isTokenPattern)) {
      return;
    }
    return this._addNonMatch(parseIntoNode.offset, new NonMatch(parseIntoNode, patternElement));
  };

  Parser.prototype._addNonMatch = function(offset, nonMatch) {
    if (offset > this._failureIndex) {
      this._failureIndex = offset;
      this._nonMatches = {};
    }
    return this._nonMatches[nonMatch] = nonMatch;
  };

  return Parser;

})(BaseObject);


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54).addModules({
  NonMatch: __webpack_require__(102),
  Parser: __webpack_require__(202),
  PatternElement: __webpack_require__(103),
  Rule: __webpack_require__(104),
  RuleVariant: __webpack_require__(105),
  Tools: __webpack_require__(106)
});

__webpack_require__(199);

__webpack_require__(20);


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, Rules,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CaffeineScript = __webpack_require__(55);

module.exports = CaffeineScript.Rules || CaffeineScript.addNamespace('Rules', Rules = (function(superClass) {
  extend(Rules, superClass);

  function Rules() {
    return Rules.__super__.constructor.apply(this, arguments);
  }

  return Rules;

})(Neptune.Base));


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55).includeInNamespace(__webpack_require__(112)).addModules({
  CaffeineScriptParser: __webpack_require__(60),
  CafParseNodeBaseClass: __webpack_require__(59),
  Lib: __webpack_require__(15),
  OperatorHelper: __webpack_require__(33)
});

__webpack_require__(107);

__webpack_require__(8);


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(32), __webpack_require__(109), __webpack_require__(108)];


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(208).includeInNamespace(__webpack_require__(206)).addModules({
  ArrayCompactFlatten: __webpack_require__(32),
  Merge: __webpack_require__(108),
  StringCase: __webpack_require__(109),
  Types: __webpack_require__(57)
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var Neptune, NeptuneLib,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(31);

module.exports = Neptune.NeptuneLib || Neptune.addNamespace('NeptuneLib', NeptuneLib = (function(superClass) {
  extend(NeptuneLib, superClass);

  function NeptuneLib() {
    return NeptuneLib.__super__.constructor.apply(this, arguments);
  }

  return NeptuneLib;

})(Neptune.Base));


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {


/*
TODO: Make NN ugifly-mangler friendly. In order to do that, we need
to stop using the function.name attribute.

I think we can do that with one change: addNamespace needs to
change to take a name argument: @addNamespace: (name, namespace) ->
 */
var Base, Neptune, NeptuneLib, isExtendedClass, isFunction, isPlainArray, ref,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

__webpack_require__(211);

__webpack_require__(210);

ref = __webpack_require__(57), isFunction = ref.isFunction, isPlainArray = ref.isPlainArray, isExtendedClass = ref.isExtendedClass;

NeptuneLib = null;

Base = (function() {
  var excludedPropNames;

  function Base() {}

  Base.allNamespaces = {};

  Base.getAllNamespacePaths = function() {
    return Object.keys(Base.allNamespaces).sort();
  };

  Base.toString = function() {
    return this.namespacePath;
  };

  Base.inspect = function() {
    return this.namespacePath;
  };

  Base._name = "Base";

  Base.namespacePath = "Neptune.Base";

  Base.namespace = null;

  Base.namespaces = {};

  Base.modules = {};

  Base.getNamespacePath = function() {
    return this.namespacePath;
  };

  Base.getNamespaceNames = function() {
    return Object.keys(this.namespaces).sort();
  };

  Base.getModuleNames = function() {
    return Object.keys(this.modules).sort();
  };

  Base.getNeptuneLib = function() {
    return Neptune.NeptuneLib;
  };

  Base.getInspectedObjects = function(includeModules) {
    var name, namespace, obj;
    if (includeModules == null) {
      includeModules = true;
    }
    return (
      obj = {},
      obj["" + this.namespacePath] = this.getNeptuneLib().merge(this.version ? {
        version: this.version
      } : void 0, (function() {
        var ref1, results;
        ref1 = this.namespaces;
        results = [];
        for (name in ref1) {
          namespace = ref1[name];
          results.push(namespace.getInspectedObjects(includeModules));
        }
        return results;
      }).call(this), includeModules && this.getModuleNames().length > 0 ? {
        modules: this.getModuleNames().join(', ')
      } : void 0),
      obj
    );
  };

  Base.getVersions = function() {
    var key, out, recurse, ref1, subNamespace;
    out = {};
    if (this === Neptune) {
      out.version = this.version;
    }
    ref1 = this.namespaces;
    for (key in ref1) {
      subNamespace = ref1[key];
      if (0 < Object.keys(recurse = subNamespace.getVersions()).length) {
        out[key] = recurse;
      }
      if (subNamespace.version != null) {
        (out[key] || (out[key] = {})).version = subNamespace.version;
      }
    }
    return out;
  };

  Base.addNamespace = function(name, namespace) {
    return this.allNamespaces[namespace.namespacePath] = this.namespaces[name] = this[name] = namespace._init(name, this);
  };

  Base.addModules = function(map) {
    var modName, module, name;
    for (name in map) {
      module = map[name];
      this._setChildNamespaceProps(name, module);
      if (isExtendedClass(module) && name !== (modName = module.getName())) {
        console.warn("NN: module name (" + this.namespacePath + "." + name + ") does not match module.exports.getName(): " + modName);
      }
      if (!name.match(/^-/)) {
        this.modules[name] = this[name] = module;
      }
    }
    return this;
  };


  /*
  IN: any combination of objects or arrays
    object: all properties in the object are added to the namespace
  
    array: [fromObject, property names as one or more strings]
      for propName in every sub-string in args matching: /[0-9a-z_]+/ig
        @_addToNamespace propName, fromObject
  
      Each string is parsed to find everything that matches: /[0-9a-z_]+/ig
      All resulting property names are concated into a one list.
      Every property in fromObject that matches one of the property-names is added to the namespace.
   */

  Base.includeInNamespace = function() {
    var arg, args, fromObject, i, j, k, l, len, len1, propName, ref1, ref2, v;
    args = arguments.length === 1 && isPlainArray(arguments[0]) ? arguments[0] : arguments;
    for (j = 0, len = args.length; j < len; j++) {
      arg = args[j];
      if (arg) {
        if (isPlainArray(arg)) {
          fromObject = arg[0];
          for (i = k = 1, ref1 = arg.length; 1 <= ref1 ? k < ref1 : k > ref1; i = 1 <= ref1 ? ++k : --k) {
            ref2 = arg[i].match(/[0-9a-z_]+/ig);
            for (l = 0, len1 = ref2.length; l < len1; l++) {
              propName = ref2[l];
              this._addToNamespace(propName, fromObject);
            }
          }
        } else {
          for (propName in arg) {
            v = arg[propName];
            this._addToNamespace(propName, arg);
          }
        }
      }
    }
    return this;
  };


  /*
  Every child of a namespace gets these properties:
  
    namespace:      pointer to the parent namespace
    namespacePath:  string path from global to child
  
  NOTE: only modules which return a class or function
    get their namespace-props set.
   */

  Base._setChildNamespaceProps = function(name, child) {
    if (isFunction(child)) {
      if (isFunction(child["class"])) {
        this._setChildNamespaceProps(name, child["class"]);
      }
      child.namespace = this;
      return child.namespacePath = this.namespacePath + "." + name;
    }
  };


  /*
  CoffeeScript classes copy all class props when inheriting,
  but some props need to be unique to each instance. This
  function initializes those props.
   */

  Base._init = function(name, namespace1) {
    this.namespace = namespace1;
    this._name = name;
    this.modules = {};
    this.namespaces = {};
    this.namespace._setChildNamespaceProps(name, this);
    return this;
  };

  excludedPropNames = ["__super__"].concat(Object.keys(Base));


  /*
  Helper for includeInNamespace.
  Add anything to the namespace.
  
  IN:
    propName:   property name to  value will be assigned to in the namespace (string)
    addingFrom: object
      used for reporting errors if attempting to overwrite an
      existing item.
  
  EFFECT:
    Only adds value if @[propName] is not already set.
    Otherwise, reports error and continues.
  
  OUT: value
   */

  Base._addToNamespace = function(propName, addingFrom) {
    var addingFromString, value;
    if (propName === "inspect" && (value = addingFrom[propName]).length > 0) {
      return this[propName] = value;
    }
    if (indexOf.call(excludedPropNames, propName) >= 0) {
      return;
    }
    if (!(value = addingFrom[propName])) {
      return;
    }
    if (this[propName]) {
      if (this[propName] !== value) {
        addingFromString = addingFrom.namespacePath || addingFrom.propName || (Object.keys(addingFrom)).join(', ');
        console.error(this.namespacePath + " already has key: " + propName + ". Adding from: " + addingFromString);
      }
      return this[propName];
    } else {
      return this[propName] = value;
    }
  };

  return Base;

})();

module.exports = global.Neptune || (global.Neptune = Neptune = (function(superClass) {
  var _package;

  extend(Neptune, superClass);

  function Neptune() {
    return Neptune.__super__.constructor.apply(this, arguments);
  }

  Neptune.Base = Base;

  Neptune.namespacePath = "Neptune";

  Neptune.namespace = null;

  Neptune.isNamespace = function(klass) {
    return (klass != null ? klass.prototype : void 0) instanceof Base;
  };

  Neptune.isNode = __webpack_require__(216);

  Neptune["package"] = _package = __webpack_require__(214);

  Neptune.version = _package.version;

  return Neptune;

})(Base));

Base.namespace = Neptune;


/***/ }),
/* 210 */
/***/ (function(module, exports) {

if ((function() {}).name == null) {
  Object.defineProperty(global.Function.prototype, 'name', {
    get: function() {
      var matches, name;
      name = (matches = this.toString().match(/^\s*function\s*([^\s(]+)/)) ? matches[1] : "";
      Object.defineProperty(this, 'name', {
        value: name
      });
      return name;
    }
  });
}

global.Function.prototype.getName = function() {
  return this._name || this.name || "anonymousFunction";
};

global.Function.prototype.hasName = function() {
  return !!(this._name || this.name);
};


/***/ }),
/* 211 */
/***/ (function(module, exports) {

var g;

g = typeof window !== "undefined" && window !== null ? window : typeof self !== "undefined" && self !== null ? self : global;

g.self || (g.self = g);

g.global || (g.global = g);


/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = {
	"author": "Shane Brinkman-Davis Delamore, Imikimi LLC",
	"dependencies": {
		"atob": "^2.0.3",
		"bluebird": "^3.4.6",
		"case-sensitive-paths-webpack-plugin": "^1.1.4",
		"chai": "^3.5.0",
		"coffee-loader": "^0.7.2",
		"coffee-script": "^1.12.3",
		"commander": "^2.9.0",
		"css-loader": "^0.26.1",
		"json-loader": "^0.5.4",
		"mocha": "^3.2.0",
		"neptune-namespaces": "^1.7.4",
		"script-loader": "^0.7.0",
		"sourcemapped-stacktrace": "^1.1.5",
		"style-loader": "^0.13.1",
		"webpack": "^2.2.1",
		"webpack-dev-server": "^2.3.0"
	},
	"description": "Foundation classes for the Art framework. Javascript extensions.",
	"license": "ISC",
	"name": "art-foundation",
	"scripts": {
		"build": "webpack --progress",
		"start": "webpack-dev-server --hot --inline --progress",
		"test": "webpack-dev-server --progress"
	},
	"version": "1.63.0"
};

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = {
	"author": "Shane Brinkman-Davis Delamore, Imikimi LLC",
	"dependencies": {
		"art-foundation": "git://github.com/imikimi/art-foundation.git",
		"babel-bridge": "git@github.com:shanebdavis/babel-bridge-js.git",
		"bluebird": "^3.4.7",
		"caffeine-mc": "git@github.com:shanebdavis/caffeine-mc.git",
		"caffeine-script-runtime": "git@github.com:shanebdavis/caffeine-script-runtime.git",
		"case-sensitive-paths-webpack-plugin": "^1.1.4",
		"chai": "^3.5.0",
		"coffee-loader": "^0.7.2",
		"coffee-script": "^1.12.3",
		"colors": "^1.1.2",
		"css-loader": "^0.26.1",
		"json-loader": "^0.5.4",
		"mocha": "^3.2.0",
		"neptune-namespaces": "^1.7.4",
		"pretty-error": "^2.0.1",
		"script-loader": "^0.7.0",
		"sourcemapped-stacktrace": "^1.1.5",
		"style-loader": "^0.13.1",
		"webpack": "^2.2.1",
		"webpack-dev-server": "^2.3.0"
	},
	"description": "atomic data-types such as Color, Point, Rectangle and Matrix",
	"license": "ISC",
	"name": "caffeine-script",
	"scripts": {
		"build": "webpack --progress",
		"nn": "nn -s",
		"perf": "nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf",
		"start": "webpack-dev-server --hot --inline --progress",
		"test": "nn -s;mocha -u tdd --compilers coffee:coffee-script/register"
	},
	"version": "0.27.2"
};

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = {
	"name": "neptune-namespaces",
	"version": "1.8.1",
	"description": "Generate index.coffee and namespace.coffee files from directory structures",
	"scripts": {
		"test": "neptune-namespaces --std;mocha -u tdd --compilers coffee:coffee-script/register -w"
	},
	"author": "Shane Brinkman-Davis Delamore",
	"license": "MIT",
	"preferGlobal": true,
	"bin": {
		"nn": "./nn",
		"neptune-namespaces": "./nn"
	},
	"repository": {
		"type": "git",
		"url": "https://github.com/imikimi/neptune-namespaces"
	},
	"main": "index.coffee",
	"dependencies": {
		"coffee-loader": "^0.7.2",
		"coffee-script": "^1.10.0",
		"colors": "^1.1.2",
		"detect-node": "^2.0.3",
		"fs-promise": "^1.0.0",
		"commander": "^2.9.0",
		"glob-promise": "^3.1.0"
	},
	"devDependencies": {
		"chai": "^3.5.0",
		"mocha": "^2.5.3"
	}
};

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = require("bluebird/js/browser/bluebird.core");

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("detect-node");

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ })
/******/ ]);