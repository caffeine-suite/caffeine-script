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
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
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

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtStandardLib = __webpack_require__(65),
    ArtClassSystem = __webpack_require__(150);
  return ArtStandardLib.merge(ArtStandardLib, ArtClassSystem);
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    createObjectTreeFactory,
    ArtObjectTreeFactory = __webpack_require__(182),
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
      let CaffeineScriptRuntime = __webpack_require__(1),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Core, Types, isFunction, isJsonAtomicType, isObject, isPlainArray, isPlainObject, isString, mergeInto, ref;

ref = Core = __webpack_require__(8), isPlainObject = ref.isPlainObject, mergeInto = ref.mergeInto, isString = ref.isString, isFunction = ref.isFunction, isObject = ref.isObject, isPlainArray = ref.isPlainArray, isJsonAtomicType = ref.isJsonAtomicType;

module.exports = Types = (function() {
  var cloneObjectUpToKey, deepEach, deepEachAll, deepMap, deepMapArray, deepMapObject, functionName, noopMapper, objectName, toJsonStructure, toPostMessageStructure;

  function Types() {}

  mergeInto(Types, Core.Types);

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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("art-standard-lib");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-bridge");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13).addModules({
  AccessorStn: __webpack_require__(52),
  ArrayDestructuringStn: __webpack_require__(119),
  ArraySpreadElementStn: __webpack_require__(120),
  ArrayStn: __webpack_require__(35),
  AssignmentStn: __webpack_require__(53),
  BaseStn: __webpack_require__(3),
  BinaryOperatorStn: __webpack_require__(36),
  CaptureStn: __webpack_require__(121),
  CatchStn: __webpack_require__(122),
  ClassStn: __webpack_require__(123),
  ComprehensionStn: __webpack_require__(124),
  ControlOperatorStn: __webpack_require__(125),
  DestructuringAssignmentStn: __webpack_require__(126),
  DestructuringIdentifierStn: __webpack_require__(127),
  DoStn: __webpack_require__(128),
  FunctionDefinitionArgsStn: __webpack_require__(21),
  FunctionDefinitionArgStn: __webpack_require__(54),
  FunctionDefinitionStn: __webpack_require__(55),
  FunctionInvocationStn: __webpack_require__(129),
  GlobalIdentifierStn: __webpack_require__(130),
  IdentifierStn: __webpack_require__(37),
  ImportStn: __webpack_require__(131),
  InterpolatedStringStn: __webpack_require__(132),
  LabeledDestructuringTargetStn: __webpack_require__(133),
  LetStn: __webpack_require__(56),
  NewInstanceStn: __webpack_require__(134),
  ObjectDestructuringStn: __webpack_require__(135),
  ObjectPropNameStn: __webpack_require__(57),
  ObjectPropValueStn: __webpack_require__(58),
  ObjectStn: __webpack_require__(59),
  ReferenceStn: __webpack_require__(60),
  RegExpStn: __webpack_require__(136),
  RequireStn: __webpack_require__(137),
  RootStn: __webpack_require__(138),
  ScopeStnMixin: __webpack_require__(15),
  SemanticTokenStn: __webpack_require__(139),
  SimpleLiteralStn: __webpack_require__(140),
  StatementsStn: __webpack_require__(16),
  StringStn: __webpack_require__(61),
  SuperStn: __webpack_require__(141),
  SwitchStn: __webpack_require__(142),
  SwitchWhenStn: __webpack_require__(143),
  ThisStn: __webpack_require__(62),
  ThrowStn: __webpack_require__(144),
  TryStn: __webpack_require__(145),
  UnaryOperatorStn: __webpack_require__(146),
  UndefinedStn: __webpack_require__(63),
  UniqueIdentifierHandle: __webpack_require__(22),
  ValueBaseCaptureStn: __webpack_require__(23),
  ValueStn: __webpack_require__(147)
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(157).includeInNamespace(__webpack_require__(156)).addModules({
  ArrayCompactFlatten: __webpack_require__(27),
  Merge: __webpack_require__(68),
  StringCase: __webpack_require__(69),
  Types: __webpack_require__(39)
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("art-class-system");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var MinimalBaseObject, capitalize, isFunction, isPlainObject, isString, ref;

capitalize = __webpack_require__(8).capitalize;

ref = __webpack_require__(4), isFunction = ref.isFunction, isString = ref.isString, isPlainObject = ref.isPlainObject;

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var FoundationMath, StringExtensions, Types, compactFlatten, escapedDoubleQuoteRegex, floor, intRand, isArray, isNumber, isPlainObject, isString, wordsRegex;

FoundationMath = __webpack_require__(12);

Types = __webpack_require__(4);

wordsRegex = __webpack_require__(18).wordsRegex;

intRand = FoundationMath.intRand;

isString = Types.isString, isNumber = Types.isNumber, isPlainObject = Types.isPlainObject, isArray = Types.isArray;

compactFlatten = __webpack_require__(8).compactFlatten;

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
          Neptine.Art.StandardLib.log.error(error = "invalid object type for Json. Expecting: null, false, true, number, string, plain-object or array", object);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var MathExtensions, Regexp, abs, ceil, float32Precision, float64Precision, floor, inverseFloat64Precision, inverstFlaot32Precision, max, min, numberRegexp, pow, random, ref, round;

Regexp = __webpack_require__(18);

numberRegexp = Regexp.numberRegexp;

float64Precision = 0.0000000001;

float32Precision = 0.0000001;

inverseFloat64Precision = 1 / float64Precision;

inverstFlaot32Precision = 1 / float32Precision;

ref = self.Math, abs = ref.abs, min = ref.min, max = ref.max, ceil = ref.ceil, floor = ref.floor, round = ref.round, random = ref.random, pow = ref.pow;

module.exports = MathExtensions = (function() {
  var bound;

  function MathExtensions() {}

  MathExtensions.nearInfinity = pow(10, 100);

  MathExtensions.nearInfinityResult = pow(10, 50);

  MathExtensions.float32Precision = float32Precision;

  MathExtensions.float64Precision = float64Precision;

  MathExtensions.modulo = function(a, b) {
    var r;
    r = a % b;
    if (r < 0) {
      return r + b;
    } else {
      return r;
    }
  };

  MathExtensions.stringToNumberArray = function(string) {
    var a, i, j, len, match, v;
    a = string.split(",");
    for (i = j = 0, len = a.length; j < len; i = ++j) {
      v = a[i];
      match = v.match(numberRegexp);
      a[i] = match != null ? match[0] - 0 : 0;
    }
    return a;
  };

  MathExtensions.minMagnitude = function(a, magnitude) {
    if (a < 0) {
      return min(a, -magnitude);
    } else {
      return max(a, magnitude);
    }
  };

  MathExtensions.maxMagnitude = function(a, magnitude) {
    return bound(-magnitude, a, magnitude);
  };

  MathExtensions.maxChange = function(newValue, oldValue, maxChangeV) {
    return bound(oldValue - maxChangeV, newValue, oldValue + maxChangeV);
  };

  MathExtensions.bound = bound = function(a, b, c) {
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

  MathExtensions.absGt = function(a, b) {
    return abs(a) > abs(b);
  };

  MathExtensions.absLt = function(a, b) {
    return abs(a) < abs(b);
  };

  MathExtensions.absGte = function(a, b) {
    return abs(a) >= abs(b);
  };

  MathExtensions.absLte = function(a, b) {
    return abs(a) <= abs(b);
  };

  MathExtensions.abs = abs;

  MathExtensions.min = min;

  MathExtensions.max = max;

  MathExtensions.round = round;

  MathExtensions.ceil = function(v, m) {
    if (m == null) {
      m = 1;
    }
    return ceil(v / m) * m;
  };

  MathExtensions.floor = function(v, m) {
    if (m == null) {
      m = 1;
    }
    return floor(v / m) * m;
  };

  MathExtensions.round = function(v, m) {
    if (m == null) {
      m = 1;
    }
    return round(v / m) * m;
  };

  MathExtensions.simplifyNum = function(num) {
    return round(num * inverseFloat64Precision) * float64Precision;
  };

  MathExtensions.floatEq = function(n1, n2) {
    return n1 === n2 || float64Precision > abs(n1 - n2);
  };

  MathExtensions.float32Eq = function(n1, n2) {
    return n1 === n2 || float32Precision > abs(n1 - n2);
  };

  MathExtensions.floatEq0 = function(n) {
    return n === 0 || float64Precision > abs(n);
  };

  MathExtensions.float32Eq0 = function(n) {
    return n === 0 || float32Precision > abs(n);
  };

  MathExtensions.floatTrue0 = function(n) {
    if (n === 0 || float64Precision > abs(n)) {
      return 0;
    } else {
      return n;
    }
  };

  MathExtensions.float32True0 = function(n) {
    if (n === 0 || float32Precision > abs(n)) {
      return 0;
    } else {
      return n;
    }
  };

  MathExtensions.random = random;

  MathExtensions.intRand = function(max) {
    return random() * max | 0;
  };

  MathExtensions.iPart = function(v) {
    return v - (v % 1);
  };

  MathExtensions.fPart = function(v) {
    return v % 1;
  };

  MathExtensions.commaize = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  MathExtensions.cyclingSequenceFunction = function(sequence) {
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

  return MathExtensions;

})();


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, SemanticTree,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CaffeineScript = __webpack_require__(49);

module.exports = CaffeineScript.SemanticTree || CaffeineScript.addNamespace('SemanticTree', SemanticTree = (function(superClass) {
  extend(SemanticTree, superClass);

  function SemanticTree() {
    return SemanticTree.__super__.constructor.apply(this, arguments);
  }

  return SemanticTree;

})(Neptune.Base));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    StatementsStn = __webpack_require__(16),
    LetStn = __webpack_require__(56),
    UniqueIdentifierHandle = __webpack_require__(22),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    Lib = __webpack_require__(14),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43).includeInNamespace(__webpack_require__(158)).addModules({
  FormattedInspect: __webpack_require__(72),
  InspectedObjectLiteral: __webpack_require__(28),
  InspectedObjects: __webpack_require__(41),
  Inspector: __webpack_require__(42),
  Inspector2: __webpack_require__(164),
  PlainObjects: __webpack_require__(74)
});

__webpack_require__(73);


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85).addModules({
  EmptyNode: __webpack_require__(83),
  EmptyOptionalNode: __webpack_require__(172),
  Node: __webpack_require__(84),
  ScratchNode: __webpack_require__(173)
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Stats,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = Stats = (function(superClass) {
  extend(Stats, superClass);

  function Stats() {
    return Stats.__super__.constructor.apply(this, arguments);
  }

  Stats._stats = {};

  Stats.reset = function() {
    return this._stats = {};
  };

  Stats.add = function(statName, amount) {
    if (amount == null) {
      amount = 1;
    }
    return this._stats[statName] = (this._stats[statName] || 0) + amount;
  };

  Stats.get = function() {
    return this._stats;
  };

  return Stats;

})(__webpack_require__(9).BaseClass);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BinaryOperatorStn = __webpack_require__(36),
    UniqueIdentifierHandle = __webpack_require__(22),
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
  SemanticTree = __webpack_require__(13);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var BaseClass, Log, MinimalBaseObject, StandardLib, Unique, WebpackHotLoader, callStack, capitalize, clone, concatInto, decapitalize, extendClone, functionName, getModuleBeingDefined, inspectedObjectLiteral, isFunction, isPlainArray, isPlainObject, isString, log, mergeInto, nextUniqueObjectId, object, objectName,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

StandardLib = __webpack_require__(5);

WebpackHotLoader = __webpack_require__(64);

capitalize = StandardLib.capitalize, decapitalize = StandardLib.decapitalize, log = StandardLib.log, extendClone = StandardLib.extendClone, clone = StandardLib.clone, isFunction = StandardLib.isFunction, objectName = StandardLib.objectName, isPlainObject = StandardLib.isPlainObject, functionName = StandardLib.functionName, isString = StandardLib.isString, isPlainArray = StandardLib.isPlainArray, Unique = StandardLib.Unique, callStack = StandardLib.callStack, Log = StandardLib.Log, log = StandardLib.log, inspectedObjectLiteral = StandardLib.inspectedObjectLiteral, MinimalBaseObject = StandardLib.MinimalBaseObject, getModuleBeingDefined = StandardLib.getModuleBeingDefined, concatInto = StandardLib.concatInto, mergeInto = StandardLib.mergeInto, isString = StandardLib.isString, object = StandardLib.object;

nextUniqueObjectId = Unique.nextUniqueObjectId;

module.exports = BaseClass = (function(superClass) {
  var arrayPropertyExtender, createWithPostCreate, excludedKeys, getOwnProperty, imprintObject, objectPropertyExtender, warnedAboutIncludeOnce;

  extend(BaseClass, superClass);

  BaseClass.objectsCreated = 0;

  BaseClass.objectsCreatedByType = {};

  BaseClass.resetStats = function() {
    BaseClass.objectsCreated = 0;
    return BaseClass.objectsCreatedByType = {};
  };

  BaseClass._name = null;


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

  BaseClass.imprintObject = imprintObject = function(toObject, fromObject, preserveState) {
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

  BaseClass.imprintFromClass = function(updatedKlass) {
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
    klass: class object which extends BaseClass
  
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

  BaseClass.createWithPostCreate = createWithPostCreate = function(a, b) {
    var _module, klass;
    klass = b ? (_module = a, b) : a;
    _module || (_module = getModuleBeingDefined() || global.__definingModule);
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
        log({
          "Art.ClassSystem.BaseClass: class hot-reload": {
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

  BaseClass.createHotWithPostCreate = function(a, b) {
    log.error("createHotWithPostCreate is DEPRICATED");
    return createWithPostCreate(a, b);
  };


  /*
  called every load
  IN: options:
    NOTE: hot-loading inputs are only set if this class created as follows:
      createHotWithPostCreate module, class Foo extends BaseClass
  
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

  BaseClass.postCreate = function(options) {
    if (this.getIsAbstractClass()) {
      return this.postCreateAbstractClass(options);
    } else {
      return this.postCreateConcreteClass(options);
    }
  };

  BaseClass.postCreateAbstractClass = function(options) {
    return this;
  };

  BaseClass.postCreateConcreteClass = function(options) {
    return this;
  };

  excludedKeys = ["__super__", "namespace", "namespacePath"].concat(Object.keys(Neptune.Base));

  function BaseClass() {
    this.__uniqueId = null;
  }

  BaseClass.implementsInterface = function(object, methods) {
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

  BaseClass.include = function(obj) {
    var key, ref, value;
    log.error("DEPRICATED: BaseClass.include. Use pattern.");
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

  BaseClass.getPrototypePropertyExtendedByInheritance = function(propertyName, defaultStructure, _clone) {
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

  BaseClass.getOwnProperty = getOwnProperty = function(object, property, init) {
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

  BaseClass.objectPropertyExtender = objectPropertyExtender = function(mapOrKey, value) {
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

  BaseClass.arrayPropertyExtender = arrayPropertyExtender = function(arrayOrValue) {
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
    class Foo extends BaseClass
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

  BaseClass.extendableProperty = function(map, propertyExtender) {
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

  BaseClass.getNamespacePath = function() {
    var ref, ref1;
    if (!this.namespacePath) {
      return this.namespacePath = (this.getName()) + " extends " + (this.__super__["class"].getNamespacePath());
    } else if (((ref = this.__super__) != null ? (ref1 = ref["class"]) != null ? ref1.namespacePath : void 0 : void 0) === this.namespacePath) {
      return this.namespacePath = (this.getName()) + " extends " + (this.__super__["class"].getNamespacePath());
    } else {
      return this.namespacePath;
    }
  };

  BaseClass.getClassName = function(klass) {
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
        return StandardLib.inspect @ unless inspector
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
    return StandardLib.inspect @ unless inspector
    inspector.put @getNamespacePath()
  
   * Example 2:
  inspect: ->
    @getNamespacePath()
   */

  BaseClass.inspect = function() {
    return this.getNamespacePath();
  };

  BaseClass.prototype.inspect = function() {
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

  BaseClass.getter({
    inspectObjects: function() {
      console.warn("inspectObjects/getInspectObjects is DEPRICATED. Use: inspectedObjects/getInspectedObjects");
      return this.getInspectedObjects();
    },
    inspectedObjects: function() {
      var ref;
      return inspectedObjectLiteral("<" + ((ref = this["class"]) != null ? ref.getNamespacePath() : void 0) + ">");
    }
  });

  BaseClass.classGetter({
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

  BaseClass.abstractClass = function() {
    if (this.getIsSingletonClass()) {
      throw new Error("abstract classes cannot also be singleton");
    }
    return this._firstAbstractAncestor = this;
  };

  BaseClass.classGetter({
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

  BaseClass.getAbstractClass = function() {
    return this._firstAbstractAncestor;
  };

  BaseClass.abstractClass();

  BaseClass.propertyIsAbstract = function(propName) {
    return this.getAbstractClass().prototype[propName] === this.prototype[propName];
  };

  BaseClass.propertyIsConcrete = function(propName) {
    return this.getAbstractClass().prototype[propName] !== this.prototype[propName];
  };


  /*
  creates the classGetter "singleton" which returns a single instance of the current class.
  
  IN: args are passed to the singleton constructor
  OUT: null
  
  The singleton instance is created on demand the first time it is accessed.
   */

  BaseClass.singletonClass = function() {
    var args, obj1;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (args.length > 0) {
      log.error({
        args: args
      });
      if (args.length > 0) {
        throw new Error("singletonClass args are DEPRICATED");
      }
    }
    if (this.getIsAbstractClass()) {
      throw new Error("singleton classes cannot be abstract");
    }
    this.classGetter((
      obj1 = {
        singleton: function() {
        var ref;
        if (((ref = this._singleton) != null ? ref["class"] : void 0) === this) {
          return this._singleton;
        } else {
          return this._singleton = new this;
        }
      }
      },
      obj1["" + (decapitalize(functionName(this)))] = function() {
        return this.getSingleton();
      },
      obj1
    ));
    return null;
  };

  BaseClass.getter({
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

  BaseClass.prototype.implementsInterface = function(methods) {
    return Function.BaseClass.implementsInterface(this, methods);
  };

  BaseClass.prototype.tap = function(f) {
    f(this);
    return this;
  };

  BaseClass.rawLog = function() {
    return Log.rawLog.apply(Log, arguments);
  };

  BaseClass.log = function() {
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

  BaseClass.prototype.log = BaseClass.log;

  BaseClass.prototype.rawLog = BaseClass.rawLog;

  return BaseClass;

})(MinimalBaseObject);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var ArrayExtensions, bound, exactlyOneWordRegex, intRand, isNumber, isString, max, modulo, ref, ref1, ref2, wordsRegex,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

ref = __webpack_require__(12), bound = ref.bound, max = ref.max, intRand = ref.intRand, modulo = ref.modulo;

ref1 = __webpack_require__(4), isNumber = ref1.isNumber, isString = ref1.isString;

ref2 = __webpack_require__(18), wordsRegex = ref2.wordsRegex, exactlyOneWordRegex = ref2.exactlyOneWordRegex;

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
    if (array != null) {
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

  ArrayExtensions.arrayWithoutLast = function(array, amount) {
    if (amount == null) {
      amount = 1;
    }
    if ((array != null) && amount < array.length) {
      return array.slice(0, array.length - amount);
    } else {
      return [];
    }
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var CommonJs, isClass, isFunction, ref;

ref = __webpack_require__(4), isClass = ref.isClass, isFunction = ref.isFunction;

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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var InspectedObjectLiteral, compare;

compare = __webpack_require__(40).compare;

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
/* 29 */
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

Arrays and Objects are assigned a unique id using the StandardLib.Unique library.
"0", "", null, undefined and 0 are all different unique keys and can each have unique values.
 */
var Map, MinimalBaseObject, Node, Unique,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Unique = __webpack_require__(45);

MinimalBaseObject = __webpack_require__(10);

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
    Neptune.Art.StandardLib.log("inspect map");
    if (!inspector) {
      return Neptune.Art.StandardLib.inspect(this);
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
    inspect = Neptune.Art.StandardLib.inspect;
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var ObjectExtensions, compactFlatten, deepArrayEach, isArrayOrArguments, isFunction, isObject, isPlainArray, isPlainObject, mergeInto, object, present, ref, ref1,
  slice = [].slice,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

ref = __webpack_require__(8), compactFlatten = ref.compactFlatten, deepArrayEach = ref.deepArrayEach, isArrayOrArguments = ref.isArrayOrArguments, mergeInto = ref.mergeInto;

ref1 = __webpack_require__(4), isPlainObject = ref1.isPlainObject, isObject = ref1.isObject, isFunction = ref1.isFunction, isPlainArray = ref1.isPlainArray, present = ref1.present;

object = __webpack_require__(44).object;

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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BlueBirdPromise, ErrorWithInfo, deepEach, deepMap, defineModule, getEnv, isFunction, isPlainObject, promiseDebug, ref;

BlueBirdPromise = __webpack_require__(148);

ref = __webpack_require__(4), deepMap = ref.deepMap, deepEach = ref.deepEach, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject;

defineModule = __webpack_require__(26).defineModule;

getEnv = __webpack_require__(31).getEnv;

if (promiseDebug = getEnv().artPromiseDebug) {
  console.log("Art.StandardLib.Promise: BlueBirdPromise debug ENABLED");
}

BlueBirdPromise.config({
  warnings: promiseDebug,
  longStackTraces: promiseDebug,
  cancellation: promiseDebug,
  monitoring: promiseDebug
});

ErrorWithInfo = __webpack_require__(70);


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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("neptune-namespaces");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    OperatorHelper = __webpack_require__(34),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var CallStack, inspect, isString, parseUrl;

isString = __webpack_require__(4).isString;

parseUrl = __webpack_require__(31).parseUrl;

inspect = __webpack_require__(17).inspect;

module.exports = CallStack = (function() {
  var CallStackLine;

  function CallStack() {}

  CallStack.errorToString = function(error) {
    return (error != null ? error.error : void 0) || (error != null ? error.message : void 0) || (isString(error) && error) || Neptune.Art.StandardLib.formattedInspect(error);
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
/* 39 */
/***/ (function(module, exports) {


/*
Set: global.ArtStandardLibMultipleContextTypeSupport = true
Before the first time you require this file if you need to be able to test objects
from multiple contexts.

When do you need this?
  - when working with iFrames
  - when working with Node's 'repl' or 'vm'

What is the differences?
  With: slower, but other-wise the same
  Without: plain-arrays and plain-objects from other contexts
    are not detected with isArray, isPlainArray, isPlainObject
 */
var ArtStandardLibMultipleContextTypeSupport, Types;

ArtStandardLibMultipleContextTypeSupport = global.ArtStandardLibMultipleContextTypeSupport;

module.exports = Types = (function() {
  var _functionsPrototype, hasOwnProperties, hasProperties, isArray, isClass, isDirectPrototypeOf, isExtendedClass, isFunction, isJsonAtomicType, isNonNegativeInt, isNumber, isObject, isPlainObject, isString;

  function Types() {}

  Types.isPromise = function(obj) {
    return isFunction(obj != null ? obj.then : void 0);
  };

  Types.isRegExp = ArtStandardLibMultipleContextTypeSupport ? function(obj) {
    return obj.constructor.name === "RegExp";
  } : function(obj) {
    return obj.constructor === RegExp;
  };

  Types.isNumber = isNumber = function(obj) {
    return typeof obj === "number";
  };

  Types.prototype.isNonNegativeInt = function(x) {
    return ((x | 0) === x) && x >= 0;
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

  Types.isArray = isArray = ArtStandardLibMultipleContextTypeSupport ? function(o) {
    return Array.isArray(o);
  } : function(o) {
    return (o != null) && o.constructor === Array;
  };

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

  Types.isPlainObject = isPlainObject = ArtStandardLibMultipleContextTypeSupport ? function(v) {
    return (v != null) && null === Object.getPrototypeOf(Object.getPrototypeOf(v));
  } : function(v) {
    return (v != null) && v.constructor === Object;
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Eq, floatTrue0, isNumber, isString, min, objectKeyCount, ref, remove,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

remove = __webpack_require__(25).remove;

objectKeyCount = __webpack_require__(30).objectKeyCount;

floatTrue0 = __webpack_require__(12).floatTrue0;

ref = __webpack_require__(4), isString = ref.isString, isNumber = ref.isNumber;

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var InspectedObjects, dateFormat, deepMap, escapeJavascriptString, inspectedObjectLiteral, isClass, isDate, isFunction, isNonNegativeInt, isPlainArray, isPlainObject, isPromise, isRegExp, isString, ref;

ref = __webpack_require__(4), isDate = ref.isDate, deepMap = ref.deepMap, isNonNegativeInt = ref.isNonNegativeInt, isClass = ref.isClass, isPlainArray = ref.isPlainArray, isPlainObject = ref.isPlainObject, isString = ref.isString, isFunction = ref.isFunction, isPromise = ref.isPromise, isRegExp = ref.isRegExp;

escapeJavascriptString = __webpack_require__(11).escapeJavascriptString;

inspectedObjectLiteral = __webpack_require__(28).inspectedObjectLiteral;

dateFormat = __webpack_require__(94);

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
            "class": toInspectedObjects(m.constructor),
            stack: literal
          }
        };
      }
    } else if (isRegExp(m)) {
      return inspectedObjectLiteral("" + m);
    } else if (isDate(m)) {
      return inspectedObjectLiteral(dateFormat(m, "UTC:yyyy-mm-dd HH:MM:ss Z"));
    } else if (isClass(m)) {
      return inspectedObjectLiteral("<" + ((typeof m.getName === "function" ? m.getName() : void 0) || m.name) + ">");
    } else if (isFunction(m)) {
      functionString = "" + m;
      reducedFunctionString = functionString.replace(/\s+/g, ' ').replace(/^function (\([^)]*\))/, "$1 ->").replace(/^\(\)\s*/, '');
      return inspectedObjectLiteral(reducedFunctionString.length < 80 ? reducedFunctionString : functionString.slice(0, 5 * 80));
    } else if (m && !isString(m)) {
      if (isNonNegativeInt(m.length)) {
        return inspectedObjectLiteral("{" + m.constructor.name + " length: " + m.length + "}");
      } else if (isNonNegativeInt(m.byteLength)) {
        return inspectedObjectLiteral("{" + m.constructor.name + " byteLength: " + m.byteLength + "}");
      } else {
        return m;
      }
    } else {
      return m;
    }
  };

  return InspectedObjects;

})();


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Inspector, Map, escapeJavascriptString, isArray, isBrowserObject, isClass, isFunction, isObject, isPlainArray, isPlainObject, isString, objectName, ref,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Map = __webpack_require__(29);

escapeJavascriptString = __webpack_require__(11).escapeJavascriptString;

ref = __webpack_require__(4), objectName = ref.objectName, isString = ref.isString, isArray = ref.isArray, isFunction = ref.isFunction, isObject = ref.isObject, isClass = ref.isClass, isBrowserObject = ref.isBrowserObject, isPlainObject = ref.isPlainObject, isPlainArray = ref.isPlainArray;

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
    } else if (isFunction(obj != null ? obj.toString : void 0)) {
      return this.put(obj.toString());
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Inspect, StandardLib,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(46);

module.exports = StandardLib.Inspect || StandardLib.addNamespace('Inspect', Inspect = (function(superClass) {
  extend(Inspect, superClass);

  function Inspect() {
    return Inspect.__super__.constructor.apply(this, arguments);
  }

  return Inspect;

})(Neptune.Base));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Iteration, compactFlatten, deepArrayEach, isArrayOrArguments, isFunction, isObject, isPlainArray, isPlainObject, log, mergeInto, ref, ref1;

ref = __webpack_require__(8), compactFlatten = ref.compactFlatten, deepArrayEach = ref.deepArrayEach, isArrayOrArguments = ref.isArrayOrArguments, mergeInto = ref.mergeInto;

ref1 = __webpack_require__(4), isPlainObject = ref1.isPlainObject, isObject = ref1.isObject, isFunction = ref1.isFunction, isPlainArray = ref1.isPlainArray;

log = function() {
  var ref2;
  return (ref2 = Neptune.Art.StandardLib).log.apply(ref2, arguments);
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
/* 45 */
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
    } else if (typeof key === "symbol") {
      return key.toString();
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Art, StandardLib,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Art = __webpack_require__(167);

module.exports = Art.StandardLib || Art.addNamespace('StandardLib', StandardLib = (function(superClass) {
  extend(StandardLib, superClass);

  function StandardLib() {
    return StandardLib.__super__.constructor.apply(this, arguments);
  }

  return StandardLib;

})(Neptune.Base));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var Repl, defineModule, formattedInspect, isClass, log, ref;

ref = __webpack_require__(5), defineModule = ref.defineModule, formattedInspect = ref.formattedInspect, isClass = ref.isClass, log = ref.log;

__webpack_require__(180);

defineModule(module, Repl = (function() {
  function Repl() {}

  Repl.babelBridgeRepl = function(parser) {
    if (isClass(parser)) {
      parser = new parser;
    }
    return __webpack_require__(186).start({
      prompt: ((parser.getClassName()) + "> ").grey,
      "eval": function(command, context, filename, callback) {
        var e, parsed, result;
        try {
          parsed = parser.parse(command.trim());
          try {
            if (result = typeof parsed.evaluate === "function" ? parsed.evaluate() : void 0) {
              return callback(null, result);
            } else {
              log(formattedInspect(parsed, {
                color: true
              }));
              return callback();
            }
          } catch (error) {
            e = error;
            return callback(e);
          }
        } catch (error) {
          e = error;
          return callback(parser.getParseFailureInfo({
            color: true
          }).replace("<HERE>", "<HERE>".red));
        }
      }
    });
  };

  return Repl;

})());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var BabelBridge, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(33);

module.exports = Neptune.BabelBridge || Neptune.addNamespace('BabelBridge', BabelBridge = (function(superClass) {
  extend(BabelBridge, superClass);

  function BabelBridge() {
    return BabelBridge.__super__.constructor.apply(this, arguments);
  }

  return BabelBridge;

})(Neptune.Base));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(33);

module.exports = Neptune.CaffeineScript || Neptune.addNamespace('CaffeineScript', CaffeineScript = (function(superClass) {
  extend(CaffeineScript, superClass);

  function CaffeineScript() {
    return CaffeineScript.__super__.constructor.apply(this, arguments);
  }

  return CaffeineScript;

})(Neptune.Base));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(81),
    SemanticTree = __webpack_require__(7),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(81),
    CafParseNodeBaseClass = __webpack_require__(50),
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
      let Rules = __webpack_require__(91),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    SemanticTree,
    ValueBaseCaptureStn = __webpack_require__(23),
    Error;
  ({ Error } = Caf.i(["Error"], [StandardImport, global]));
  SemanticTree = __webpack_require__(13);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BinaryOperatorStn = __webpack_require__(36),
    IdentifierStn = __webpack_require__(37),
    ReferenceStn = __webpack_require__(60),
    ArrayStn = __webpack_require__(35),
    SemanticTree,
    supportedOperatorsRegExp,
    ValueBaseCaptureStn = __webpack_require__(23);
  BinaryOperatorStn;
  IdentifierStn;
  ReferenceStn;
  ArrayStn;
  SemanticTree = __webpack_require__(13);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    FunctionDefinitionArgsStn = __webpack_require__(21),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    FunctionDefinitionArgsStn = __webpack_require__(21),
    StatementsStn = __webpack_require__(16),
    ScopeStnMixin = __webpack_require__(15),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 56 */
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
            : undefined, `let ${Caf.toString(identifiers.join(", "))}`)
        : identifier
            ? `let ${Caf.toString(identifier)}`
            : (() => {
                throw new Error("LetStn needs props!");
              })();
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    ArrayStn,
    BaseStn = __webpack_require__(3);
  ArrayStn = __webpack_require__(35);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    Lib = __webpack_require__(14),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var ref, ref1;

module.exports = (ref = typeof Neptune !== "undefined" && Neptune !== null ? (ref1 = Neptune.Art) != null ? ref1.StandardLib : void 0 : void 0) != null ? ref : __webpack_require__(166);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var AsyncExtensions, Promise;

Promise = __webpack_require__(32);

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
      Neptune.Art.StandardLib.log.error("evalAndThrowErrorsOutOfStack", e);
      return AsyncExtensions.throwErrorOutOfStack(e);
    }
  };

  return AsyncExtensions;

})();


/***/ }),
/* 67 */
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

Map = __webpack_require__(29);

Unique = __webpack_require__(45);

inspect = __webpack_require__(17).inspect;

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var Merge, compactFlatten, isPlainObject;

compactFlatten = __webpack_require__(27).compactFlatten;

isPlainObject = __webpack_require__(39).isPlainObject;

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var StringCase, compactFlatten;

compactFlatten = __webpack_require__(27).compactFlatten;

module.exports = StringCase = (function() {
  function StringCase() {}

  StringCase.getCodeWords = function(str) {
    var _words, word, words;
    _words = str.match(/[a-zA-Z][a-zA-Z0-9]*|[0-9]+/g);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var ErrorWithInfo, defineModule, formattedInspect, isFunction, mergeInto, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

defineModule = __webpack_require__(26).defineModule;

formattedInspect = __webpack_require__(17).formattedInspect;

ref = __webpack_require__(8), mergeInto = ref.mergeInto, isFunction = ref.isFunction;

defineModule(module, ErrorWithInfo = (function(superClass) {
  extend(ErrorWithInfo, superClass);

  function ErrorWithInfo(message, info, name) {
    this.info = info;
    this.name = name;
    ErrorWithInfo.__super__.constructor.apply(this, arguments);
    this.name || (this.name = "ErrorWithInfo");
    mergeInto(this, this.info);
    this.message = message;
    if (isFunction(Error.captureStackTrace)) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error).stack;
    }
  }

  return ErrorWithInfo;

})(Error));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var FormattedInspect, alignTabs, ansiRegex, ansiSafeStringLength, escapeForBlockString, escapeJavascriptString, formattedInspectArray, formattedInspectObject, formattedInspectRecursive, formattedInspectString, indentLength, indentString, inspect, isFunction, isNumber, isPlainArray, isPlainObject, isString, max, newLineWithIndentString, objectKeyCount, pad, postWhitespaceFormatting, ref, ref1, stripAnsi, stripTrailingWhitespace, toInspectedObjects;

ref = __webpack_require__(4), isString = ref.isString, isPlainObject = ref.isPlainObject, isPlainArray = ref.isPlainArray, isFunction = ref.isFunction, isNumber = ref.isNumber;

max = Math.max;

ref1 = __webpack_require__(11), pad = ref1.pad, stripTrailingWhitespace = ref1.stripTrailingWhitespace, escapeJavascriptString = ref1.escapeJavascriptString;

inspect = __webpack_require__(42).inspect;

objectKeyCount = __webpack_require__(30).objectKeyCount;

toInspectedObjects = __webpack_require__(41).toInspectedObjects;

indentString = '  ';

indentLength = indentString.length;

newLineWithIndentString = "\n" + indentString;

formattedInspectObject = function(m, maxLineLength, options) {
  var finalInspectedValues, forceMultilineOutput, index, inspected, inspectedLength, inspectedValues, k, key, keyCount, objectStart, shouldBeOnOwnLine, v, value;
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
      inspected = formattedInspectRecursive(value, maxLineLength - indentLength, options);
      if (inspected.match(/\n/)) {
        inspected = inspected.match(/^\[\]/) ? "" + inspected : newLineWithIndentString + inspected.replace(/\n/g, newLineWithIndentString);
        inspected += "\n";
      } else if (ansiSafeStringLength(inspected) > maxLineLength - (key.length + 2)) {
        inspected = "" + newLineWithIndentString + inspected + "\n";
      }
      if (!/^[-~!@\#$%^&*_+=|\\<>?\/.$\w\u007f-\uffff]+$/.test(key)) {
        key = inspect(key);
      }
      inspectedLength += ansiSafeStringLength(inspected) + key.length + 2;
      forceMultilineOutput || (forceMultilineOutput = shouldBeOnOwnLine);
      shouldBeOnOwnLine = !inspected.match(/^([^,:]|\(.*\)|\{.*\}|\".*\"|\'.*\'|\[.*\])*$/);
      results.push([key, inspected, value]);
    }
    return results;
  })();
  objectStart = "{}";
  if (options.color) {
    objectStart = objectStart.grey;
  }
  if (keyCount === 0) {
    return objectStart;
  } else {
    index = 0;
    finalInspectedValues = (function() {
      var j, len, ref2, results;
      results = [];
      for (j = 0, len = inspectedValues.length; j < len; j++) {
        ref2 = inspectedValues[j], k = ref2[0], v = ref2[1], value = ref2[2];
        key = k + ":";
        if (options.color) {
          key = key.blue;
        }
        if (isPlainObject(value) && objectKeyCount(value) === 1) {
          results.push(key + " " + v);
        } else {
          results.push(key + "\t" + v);
        }
      }
      return results;
    })();
    return finalInspectedValues.join(!forceMultilineOutput && maxLineLength >= inspectedLength + (inspectedValues.length - 1) * 2 ? ",\t" : "\n");
  }
};

formattedInspectArray = function(m, maxLineLength, options) {
  var arrayStart, i, inspected, inspectedHasNewlines, inspectedValues, inspectedValuesContainNewlines, j, lastWasArray, lastWasObject, len, lengthOfCommas, lengthOfInspectedValues, lengthOfStartBrackets, objectStart, objectsMustBeExplicit, oneLinerOk, value;
  lengthOfInspectedValues = 0;
  lastWasObject = false;
  lastWasArray = false;
  objectsMustBeExplicit = false;
  oneLinerOk = true;
  inspectedValuesContainNewlines = false;
  for (i = j = 0, len = m.length; j < len; i = ++j) {
    value = m[i];
    if (isPlainObject(value)) {
      if (i < m.length - 1) {
        oneLinerOk = false;
      }
      if (lastWasObject) {
        objectsMustBeExplicit = true;
      }
      lastWasObject = true;
    } else {
      lastWasObject = false;
    }
  }
  inspectedValues = (function() {
    var l, len1, results;
    results = [];
    for (l = 0, len1 = m.length; l < len1; l++) {
      value = m[l];
      if (lastWasArray) {
        oneLinerOk = false;
      }
      if (isPlainArray(value)) {
        lastWasArray = true;
      }
      inspected = formattedInspectRecursive(value, maxLineLength - indentLength, options);
      inspectedHasNewlines = /\n/.test(inspected);
      if (objectsMustBeExplicit && isPlainObject(value)) {
        objectStart = "{}";
        if (options.color) {
          objectStart = objectStart.grey;
        }
        inspected = inspectedHasNewlines ? "" + objectStart + newLineWithIndentString + (inspected.replace(/\n/g, newLineWithIndentString)) : objectStart + " " + inspected;
      }
      if (inspectedHasNewlines) {
        oneLinerOk = false;
        inspected = inspected.replace(/\n/g, newLineWithIndentString) + "\n";
      }
      lengthOfInspectedValues += ansiSafeStringLength(inspected);
      results.push(inspected);
    }
    return results;
  })();
  lengthOfCommas = (inspectedValues.length - 1) * 2;
  lengthOfStartBrackets = 3;
  arrayStart = "[]";
  if (options.color) {
    arrayStart = arrayStart.grey;
  }
  if (oneLinerOk && maxLineLength >= lengthOfStartBrackets + lengthOfCommas + lengthOfInspectedValues) {
    if (inspectedValues.length === 0) {
      return arrayStart;
    } else {
      return arrayStart + " " + (inspectedValues.join(",\t"));
    }
  } else {
    return arrayStart + "\n  " + (inspectedValues.join("\n  "));
  }
};

escapeForBlockString = (function(_this) {
  return function(str) {
    return String(str).replace(/[\\\0\b\f\r\t\v\u001b\u2028\u2029]/g, function(x) {
      switch (x) {
        case '\\':
          return '\\\\';
        case '\0':
          return "\\0";
        case '\b':
          return "\\b";
        case '\f':
          return "\\f";
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
        case '\u001b':
          return '\\u001b';
      }
    });
  };
})(this);

formattedInspectString = function(m, options) {
  var out;
  out = m.match(/\n/) && !m.match(/\ (\n|$)/) ? ['"""', escapeForBlockString(m).replace(/\n/g, newLineWithIndentString)].join('\n  ') : escapeJavascriptString(m);
  if (options.color) {
    return out.green;
  } else {
    return out;
  }
};

formattedInspectRecursive = function(m, maxLineLength, options) {
  var out;
  if (isPlainObject(m)) {
    return formattedInspectObject(m, maxLineLength, options);
  } else if (isPlainArray(m)) {
    return formattedInspectArray(m, maxLineLength, options);
  } else if (isString(m)) {
    return formattedInspectString(m, options);
  } else {
    out = inspect(m);
    if (options.color) {
      return out.yellow;
    } else {
      return out;
    }
  }
};

alignTabs = function(linesString, maxLineLength) {
  var alignedLines, el, elLength, elements, expandAmount, i, j, l, len, len1, line, lines, maxColumnSizes, maxColumnWidth, numColumnsToPad, r, spaceAvailable, tabStops;
  if (maxLineLength == null) {
    maxLineLength = 10000;
  }
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
      if (!(i < elements.length - 1 && (i === 0 || ansiSafeStringLength(el) < maxColumnWidth))) {
        continue;
      }
      if (maxColumnSizes.length === i) {
        maxColumnSizes.push(0);
      }
      maxColumnSizes[i] = max(maxColumnSizes[i], ansiSafeStringLength(el) + 1);
    }
  }
  alignedLines = (function() {
    var len2, n, results;
    results = [];
    for (n = 0, len2 = lines.length; n < len2; n++) {
      line = lines[n];
      spaceAvailable = maxLineLength - ansiSafeStringLength(line);
      elements = line.split("\t");
      r = (function() {
        var len3, o, results1;
        if (elements.length > 1) {
          results1 = [];
          for (i = o = 0, len3 = elements.length; o < len3; i = ++o) {
            el = elements[i];
            elLength = ansiSafeStringLength(el);
            if (i === elements.length - 1) {
              results1.push(el);
            } else if ((maxColumnSizes[i] != null) && (expandAmount = maxColumnSizes[i] - elLength - 1) <= spaceAvailable) {
              spaceAvailable -= expandAmount;
              results1.push(el + pad('', maxColumnSizes[i] - elLength));
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

ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;

stripAnsi = function(str) {
  if (ansiRegex.test(str)) {
    return str.replace(ansiRegex, '');
  } else {
    return str;
  }
};

ansiSafeStringLength = function(str) {
  if (!isString(str)) {
    throw new Error("not string");
  }
  if (ansiRegex.test(str)) {
    str = str.replace(ansiRegex, '');
  }
  return str.length;
};

postWhitespaceFormatting = function(maxLineLength, string) {
  var alignTabsInSameIndentGroup, indent, j, lastIndent, len, line, outLines, ref2, sameIndentGroup;
  lastIndent = 0;
  sameIndentGroup = [];
  outLines = [];
  alignTabsInSameIndentGroup = function() {
    var str;
    if (!(0 < sameIndentGroup.length)) {
      return;
    }
    str = sameIndentGroup.join("\n");
    sameIndentGroup = [];
    return outLines.push(alignTabs(str, maxLineLength));
  };
  ref2 = string.split("\n");
  for (j = 0, len = ref2.length; j < len; j++) {
    line = ref2[j];
    line = line.replace(/\s+$/g, '');
    if (lastIndent !== (indent = ansiSafeStringLength(line.match(/^ *-?/)[0]))) {
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

  FormattedInspect.ansiRegex = ansiRegex;

  FormattedInspect.stripAnsi = stripAnsi;

  FormattedInspect.ansiSafeStringLength = ansiSafeStringLength;

  FormattedInspect.alignTabs = alignTabs;

  FormattedInspect.formattedInspect = function(toInspect, options) {
    var error, maxLineLength, out, ref2, ref3;
    if (options == null) {
      options = {};
    }
    try {
      if (isNumber(options)) {
        options = {
          maxLineLength: options
        };
      }
      if (options.maxLineLength == null) {
        options.maxLineLength = ((ref2 = global.process) != null ? (ref3 = ref2.stdout) != null ? ref3.columns : void 0 : void 0) || 80;
      }
      maxLineLength = options.maxLineLength;
      return out = postWhitespaceFormatting(maxLineLength, formattedInspectRecursive(toInspectedObjects(toInspect), maxLineLength, options)).replace(/\n\n\n+/g, "\n\n").replace(/\n\n$/, "\n");
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163).addModules({
  Array: __webpack_require__(159),
  Core: __webpack_require__(160),
  Object: __webpack_require__(161),
  String: __webpack_require__(162)
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var PlainObjects, deepMap, hasKeys, inspectedObjectLiteral, isClass, isFunction, isPlainArray, isPlainObject, ref;

ref = __webpack_require__(4), deepMap = ref.deepMap, hasKeys = ref.hasKeys, isPlainArray = ref.isPlainArray, isPlainObject = ref.isPlainObject, isFunction = ref.isFunction, isClass = ref.isClass;

inspectedObjectLiteral = __webpack_require__(28).inspectedObjectLiteral;

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
    } else if (isClass(m)) {
      return inspectedObjectLiteral("<" + (m.getName()) + ">");
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Inspect, Log, callStack, isString, peek,
  slice = [].slice;

Inspect = __webpack_require__(43);

callStack = __webpack_require__(38).callStack;

isString = __webpack_require__(4).isString;

peek = __webpack_require__(25).peek;

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
      return logger(m, "\n# StandardLib.log called " + Log.contextString(stack, className));
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
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var Promise, PromisedFileReader;

Promise = __webpack_require__(32);

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
/* 78 */
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var Time, base, commaize, dateSecondMinusPerformanceSecond, initDateSecond, initPerformanceSecond;

commaize = __webpack_require__(12).commaize;

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
      Neptune.Art.StandardLib.log("time: " + a + " took " + (Time.durationString(timeResult)));
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BabelBridgeCompileError, ErrorWithInfo, defineModule, formattedInspect, isFunction, log, mergeInto, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(5), defineModule = ref.defineModule, log = ref.log, mergeInto = ref.mergeInto, isFunction = ref.isFunction, formattedInspect = ref.formattedInspect, ErrorWithInfo = ref.ErrorWithInfo;

defineModule(module, BabelBridgeCompileError = (function(superClass) {
  extend(BabelBridgeCompileError, superClass);

  function BabelBridgeCompileError(message, info) {
    BabelBridgeCompileError.__super__.constructor.call(this, message, info, "BabelBridgeCompileError");
  }

  return BabelBridgeCompileError;

})(ErrorWithInfo));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 83 */
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

})(__webpack_require__(84));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var BaseClass, Node, Nodes, Stats, array, arrayWith, compactFlatten, inspectedObjectLiteral, isPlainArray, isPlainObject, log, merge, mergeInto, objectWithout, peek, push, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(5), arrayWith = ref.arrayWith, array = ref.array, peek = ref.peek, log = ref.log, push = ref.push, compactFlatten = ref.compactFlatten, objectWithout = ref.objectWithout, isPlainArray = ref.isPlainArray, isPlainObject = ref.isPlainObject, inspectedObjectLiteral = ref.inspectedObjectLiteral, merge = ref.merge, mergeInto = ref.mergeInto;

Nodes = __webpack_require__(85);

BaseClass = __webpack_require__(9).BaseClass;

Stats = __webpack_require__(20);

module.exports = Node = (function(superClass) {
  var emptyArray;

  extend(Node, superClass);

  function Node(parent, options) {
    var ref1;
    Node.__super__.constructor.apply(this, arguments);
    Stats.add("newNode");
    this._parent = parent;
    this._parser = parent._parser;
    this._offset = ((ref1 = options != null ? options.offset : void 0) != null ? ref1 : this._parent.getNextOffset()) | 0;
    this._matchLength = 0;
    this._ruleName = this._pluralRuleName = this._label = this._pluralLabel = this._pattern = this._nonMatches = this._ruleVariant = this._matches = this._matchPatterns = null;
    this._labelsApplied = this._nonMatch = false;
    if (options) {
      this._matchLength = (options.matchLength || 0) | 0;
      this._ruleVariant = options.ruleVariant;
      this._matches = options.matches;
      this._matchPatterns = options.matchPatterns;
    }
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

  emptyArray = [];

  Node.setter("matches offset matchLength ruleVariant pattern matchPatterns");

  Node.getter("parent parser offset matchLength matchPatterns label pluralLabel ruleName pluralRuleName pattern nonMatch", {
    realNode: function() {
      return this;
    },
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
        var j, len, ref1, results;
        ref1 = this.ancestors;
        results = [];
        for (j = 0, len = ref1.length; j < len; j++) {
          ancestor = ref1[j];
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
      var matchLength, offset, ref1, source;
      ref1 = this.subparseInfo || this, matchLength = ref1.matchLength, offset = ref1.offset, source = ref1.source;
      if (matchLength === 0) {
        return "";
      } else {
        return source.slice(offset, offset + matchLength);
      }
    },
    ruleVariant: function() {
      var ref1;
      return this._ruleVariant || ((ref1 = this._parent) != null ? ref1.ruleVariant : void 0);
    },
    ruleName: function() {
      var ref1;
      return this.ruleNameOrNull || ((ref1 = this.parent) != null ? ref1.ruleName : void 0) || ("" + (this.pattern || 'no rule'));
    },
    ruleNameOrNull: function() {
      var ref1, ref2;
      return ((ref1 = this["class"].rule) != null ? ref1.getName() : void 0) || ((ref2 = this._ruleVariant) != null ? ref2.rule.getName() : void 0);
    },
    ruleNameOrPattern: function() {
      var ref1;
      return this.ruleNameOrNull || ("" + (((ref1 = this.pattern) != null ? ref1.pattern : void 0) || 'no rule'));
    },
    isRuleNode: function() {
      return this["class"].rule;
    },
    isPassThrough: function() {
      var ref1;
      return (ref1 = this.ruleVariant) != null ? ref1.isPassThrough : void 0;
    },
    nonPassThrough: function() {
      var ref1;
      return !((ref1 = this.ruleVariant) != null ? ref1.isPassThrough : void 0);
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
      var ref1;
      return compactFlatten([(ref1 = this.parent) != null ? ref1.parseTreePath : void 0, this["class"].getName()]);
    },
    presentMatches: function() {
      var j, len, m, ref1, results;
      ref1 = this.matches;
      results = [];
      for (j = 0, len = ref1.length; j < len; j++) {
        m = ref1[j];
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
      var j, len, match, ref1;
      if (!this.nonMatch) {
        return false;
      }
      ref1 = this.presentMatches;
      for (j = 0, len = ref1.length; j < len; j++) {
        match = ref1[j];
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
      return this.nonMatch && peek(this.matches);
    },
    firstPartialMatchParent: function() {
      if (this.parent === this.parser || this.isPartialMatch) {
        return this;
      } else {
        return this.parent.firstPartialMatchParent;
      }
    },
    inspectedObjects: function(verbose) {
      var children, hasOneOrMoreMatchingChildren, label, match, matches, nonMatch, obj, parts, path, ref1, ref2, ref3, ruleName;
      match = this;
      matches = this.presentMatches;
      if (matches.length > 0) {
        path = [];
        while (matches.length === 1 && ((ref1 = matches[0].matches) != null ? ref1.length : void 0) > 0) {
          path.push("" + (match.label ? match.label + ":" : "") + match.ruleName);
          match = matches[0];
          matches = match.presentMatches;
        }
        label = match.label, ruleName = match.ruleName, nonMatch = match.nonMatch;
        path.push(ruleName);
        path = path.join('.');
        hasOneOrMoreMatchingChildren = false;
        children = (function() {
          var j, len, results;
          results = [];
          for (j = 0, len = matches.length; j < len; j++) {
            match = matches[j];
            if (!match.nonMatch) {
              hasOneOrMoreMatchingChildren = true;
            }
            results.push(match.getInspectedObjects(verbose));
          }
          return results;
        })();
        parts = compactFlatten([
          label ? {
            label: label
          } : void 0, children.length > 0 ? children : match.toString()
        ]);
        if (parts.length === 1) {
          parts = parts[0];
        }
        return (
          obj = {},
          obj["" + (nonMatch ? hasOneOrMoreMatchingChildren ? 'partialMatch-' : 'nonMatch-' : '') + path] = parts,
          obj
        );
      } else if (this.nonMatch) {
        return {
          nonMatch: {
            offset: this.offset,
            pattern: "" + ((ref2 = this.pattern) != null ? ref2.pattern : void 0)
          }
        };
      } else {
        if (verbose) {
          return {
            token: {
              offset: this.offset,
              length: this.matchLength,
              text: this.text,
              pattern: "" + ((ref3 = this.pattern) != null ? ref3.pattern : void 0),
              "class": this["class"].getName(),
              ruleName: this.ruleName
            }
          };
        } else {
          return this.text;
        }
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
      var match, ref1, ret;
      ret = [
        {
          inspect: (function(_this) {
            return function() {
              return _this["class"].getName();
            };
          })(this)
        }
      ];
      if (((ref1 = this._matches) != null ? ref1.length : void 0) > 0) {
        ret = ret.concat((function() {
          var j, len, ref2, results;
          ref2 = this.matches;
          results = [];
          for (j = 0, len = ref2.length; j < len; j++) {
            match = ref2[j];
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
    var j, len, m, ref1;
    if (out == null) {
      out = [];
    }
    ref1 = this.matches;
    for (j = 0, len = ref1.length; j < len; j++) {
      m = ref1[j];
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
    this._matches = push(this._matches, match);
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

})(BaseClass);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var BabelBridge, Nodes,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BabelBridge = __webpack_require__(48);

module.exports = BabelBridge.Nodes || BabelBridge.addNamespace('Nodes', Nodes = (function(superClass) {
  extend(Nodes, superClass);

  function Nodes() {
    return Nodes.__super__.constructor.apply(this, arguments);
  }

  return Nodes;

})(Neptune.Base));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BaseClass, NonMatch, defineModule, log, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(5), log = ref.log, defineModule = ref.defineModule;

BaseClass = __webpack_require__(9).BaseClass;

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

})(BaseClass));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var EmptyNode, EmptyOptionalNode, Node, PatternElement, inspect, isPlainObject, isRegExp, isString, log, ref, ref1,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(19), Node = ref.Node, EmptyNode = ref.EmptyNode, EmptyOptionalNode = ref.EmptyOptionalNode;

ref1 = __webpack_require__(5), isPlainObject = ref1.isPlainObject, isString = ref1.isString, isRegExp = ref1.isRegExp, inspect = ref1.inspect, log = ref1.log;

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
    var __, doubleQuotedString, pattern, prefix, ref2, regExp, res, singleQuotedString, string, suffix;
    this.parse = this.label = this.ruleName = null;
    this.negative = this.couldMatch = this.oneOrMore = this.optional = this.zeroOrMore = false;
    this._isTokenPattern = false;
    pattern = this.pattern;
    if (isPlainObject(pattern)) {
      this._initPlainObject(pattern);
    } else if (isString(pattern)) {
      ref2 = res = pattern.match(PatternElement.patternElementRegExp), __ = ref2[0], this.label = ref2[1], prefix = ref2[2], this.ruleName = ref2[3], regExp = ref2[4], singleQuotedString = ref2[5], doubleQuotedString = ref2[6], suffix = ref2[7];
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
    var matchRule;
    matchRule = null;
    return this.parse = function(parentNode) {
      matchRule || (matchRule = parentNode.parser.getRule(ruleName));
      return matchRule.parse(parentNode);
    };
  };


  /*
  NOTE: regExp.test is 3x faster than .exec in Safari, but about the
    same in node/chrome. Safari is 2.5x faster than Chrome/Node in this.
  
    Regexp must have the global flag set, even if we are using the y-flag,
    to make .test() set .lastIndex correctly.
  
  SEE: https://jsperf.com/regex-match-length
   */

  PatternElement.prototype._initRegExp = function(regExp) {
    var flags;
    this._isTokenPattern = true;
    flags = "yg";
    if (regExp.ignoreCase) {
      flags += "i";
    }
    regExp = RegExp(regExp.source, flags);
    return this.parse = function(parentNode) {
      var nextOffset, source;
      nextOffset = parentNode.nextOffset, source = parentNode.source;
      regExp.lastIndex = nextOffset;
      if (regExp.test(source)) {
        return new Node(parentNode, {
          offset: nextOffset,
          matchLength: regExp.lastIndex - nextOffset
        });
      }
    };
  };

  return PatternElement;

})(__webpack_require__(9).BaseClass);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Rule, RuleVariant, Stats, log, merge, objectName, ref, upperCamelCase,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

RuleVariant = __webpack_require__(89);

Stats = __webpack_require__(20);

ref = __webpack_require__(5), merge = ref.merge, upperCamelCase = ref.upperCamelCase, objectName = ref.objectName, log = ref.log;

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
    var cached, i, len, match, nextOffset, parser, ref1, v;
    Stats.add("parseRule");
    parser = parentNode.parser, nextOffset = parentNode.nextOffset;
    if (cached = parser._cached(this.name, nextOffset)) {
      if (cached === "no_match") {
        Stats.add("cacheHitNoMatch");
        return null;
      } else {
        Stats.add("cacheHit");
        return cached;
      }
    }
    ref1 = this._variants;
    for (i = 0, len = ref1.length; i < len; i++) {
      v = ref1[i];
      if (match = v.parse(parentNode)) {
        return parser._cacheMatch(this.name, match);
      }
    }
    return parser._cacheNoMatch(this.name, nextOffset);
  };

  return Rule;

})(__webpack_require__(9).BaseClass);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var BaseClass, Node, PatternElement, RuleVariant, ScratchNode, Stats, allPatternElementsRegExp, compactFlatten, inspect, isPlainObject, isString, log, merge, pad, push, ref, ref1, toInspectedObjects, upperCamelCase,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PatternElement = __webpack_require__(87);

Stats = __webpack_require__(20);

ref = __webpack_require__(19), Node = ref.Node, ScratchNode = ref.ScratchNode;

ref1 = __webpack_require__(5), log = ref1.log, toInspectedObjects = ref1.toInspectedObjects, isPlainObject = ref1.isPlainObject, push = ref1.push, isString = ref1.isString, compactFlatten = ref1.compactFlatten, inspect = ref1.inspect, pad = ref1.pad, upperCamelCase = ref1.upperCamelCase, merge = ref1.merge;

allPatternElementsRegExp = PatternElement.allPatternElementsRegExp;

BaseClass = __webpack_require__(9).BaseClass;

module.exports = RuleVariant = (function(superClass) {
  extend(RuleVariant, superClass);

  function RuleVariant(options1) {
    var ref2;
    this.options = options1;
    this._toString = null;
    if (!isPlainObject(this.options)) {
      this.options = {
        pattern: this.options
      };
    }
    ref2 = this.options, this.pattern = ref2.pattern, this.rule = ref2.rule, this.parserClass = ref2.parserClass;
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
    var i, len, parser, patternElement, ref2, scratchNode;
    Stats.add("parseVariant");
    scratchNode = ScratchNode.checkout(parentNode, this);
    parser = parentNode.parser;
    ref2 = this.patternElements;
    for (i = 0, len = ref2.length; i < len; i++) {
      patternElement = ref2[i];
      if (!parser.tryPatternElement(patternElement, scratchNode, this)) {
        scratchNode.checkin();
        return false;
      }
    }
    scratchNode.checkin();
    return scratchNode.getRealNode();
  };

  RuleVariant.getter({
    variantNodeClassName: function() {
      var baseName, ref2;
      if (this._variantNodeClassName) {
        return this._variantNodeClassName;
      }
      baseName = upperCamelCase(this.rule.name) + "Rule" + (this.pattern ? upperCamelCase(((ref2 = ("" + this.pattern).match(/[a-zA-Z0-9_]+/g)) != null ? ref2.join('_') : void 0) || "") : this.parse ? "CustomParser" : void 0);
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

})(BaseClass);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Tools, peek;

peek = __webpack_require__(5).peek;

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
    lines = (string.slice(0, offset)).split("\n");
    return {
      line: lines.length,
      column: peek(lines).length + 1
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176).addModules({
  Accessors: __webpack_require__(97),
  ArrayLiterals: __webpack_require__(98),
  Blocks: __webpack_require__(99),
  Classes: __webpack_require__(100),
  Comments: __webpack_require__(101),
  Comprehensions: __webpack_require__(102),
  ControlStructures: __webpack_require__(103),
  DestructuringAssignment: __webpack_require__(104),
  Expressions: __webpack_require__(105),
  Functions: __webpack_require__(106),
  KeywordLiterals: __webpack_require__(107),
  Literals: __webpack_require__(108),
  NumberLiterals: __webpack_require__(109),
  ObjectLiterals: __webpack_require__(110),
  Operators: __webpack_require__(111),
  RegExp: __webpack_require__(112),
  Root: __webpack_require__(113),
  Statements: __webpack_require__(114),
  StringLiterals: __webpack_require__(115),
  TagMacros: __webpack_require__(116),
  Tokens: __webpack_require__(117),
  Values: __webpack_require__(118)
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(93);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
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

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
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
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? 'a'  : 'p',
          tt:   H < 12 ? 'am' : 'pm',
          T:    H < 12 ? 'A'  : 'P',
          TT:   H < 12 ? 'AM' : 'PM',
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occured and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return dateFormat;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = dateFormat;
  } else {
    global.dateFormat = dateFormat;
  }
})(this);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49).includeInNamespace(__webpack_require__(96)).addModules({
  CaffeineScriptParser: __webpack_require__(51),
  CafParseNodeBaseClass: __webpack_require__(50),
  Lib: __webpack_require__(14),
  OperatorHelper: __webpack_require__(34),
  StandardImport: __webpack_require__(2)
});

__webpack_require__(91);

__webpack_require__(7);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let ArtStandardLib = __webpack_require__(65), log;
  ({ log } = Caf.import(["log"], [ArtStandardLib, global]));
  return {
    version: __webpack_require__(181).version,
    compile: function(source, options = {}) {
      let parseTree,
        CaffeineScriptParser = __webpack_require__(51),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
    SemanticTree = __webpack_require__(7),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
    SemanticTree = __webpack_require__(7),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    OperatorHelper = __webpack_require__(34),
    SemanticTree = __webpack_require__(7),
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
      pattern: "unaryOperator_* expressionWithoutBinOps unaryTailOperator*",
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
    SemanticTree = __webpack_require__(7);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
    SemanticTree = __webpack_require__(7),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
    SemanticTree = __webpack_require__(7),
    Lib = __webpack_require__(14),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    SemanticTree = __webpack_require__(7),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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
      unaryOperator_: /(!|~|not\b) */,
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    BabelBridge = __webpack_require__(6),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    StringStn = __webpack_require__(61),
    ObjectStn = __webpack_require__(59),
    ObjectPropValueStn = __webpack_require__(58),
    ObjectPropNameStn = __webpack_require__(57),
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    AssignmentStn = __webpack_require__(53),
    AccessorStn = __webpack_require__(52),
    ThisStn = __webpack_require__(62),
    IdentifierStn = __webpack_require__(37),
    StatementsStn = __webpack_require__(16),
    FunctionDefinitionStn = __webpack_require__(55),
    FunctionDefinitionArgsStn = __webpack_require__(21),
    FunctionDefinitionArgStn = __webpack_require__(54),
    UniqueIdentifierHandle = __webpack_require__(22),
    BaseStn = __webpack_require__(3),
    Error,
    compactFlatten,
    merge;
  ({ Error, compactFlatten, merge } = Caf.i(
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    SemanticTree,
    ScopeStnMixin = __webpack_require__(15),
    BaseStn = __webpack_require__(3),
    arrayWithAllButLast,
    peek,
    Error,
    UniqueIdentifierHandle;
  ({ arrayWithAllButLast, peek, Error, UniqueIdentifierHandle } = Caf.i(
    ["arrayWithAllButLast", "peek", "Error", "UniqueIdentifierHandle"],
    [StandardImport, global]
  ));
  SemanticTree = __webpack_require__(13);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    UndefinedStn = __webpack_require__(63),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    SemanticTree,
    ValueBaseCaptureStn = __webpack_require__(23),
    Error;
  ({ Error } = Caf.i(["Error"], [StandardImport, global]));
  SemanticTree = __webpack_require__(13);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    ScopeStnMixin = __webpack_require__(15),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    Lib = __webpack_require__(14),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    Path = __webpack_require__(185),
    Fs = __webpack_require__(184),
    realRequire,
    findModuleSync,
    BaseStn = __webpack_require__(3),
    peek;
  ({ peek } = Caf.i(["peek"], [StandardImport, global]));
  Path;
  Fs;
  realRequire = eval("require");
  ({ findModuleSync } = __webpack_require__(183));
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
Caf.defMod(module, () => {
  let StandardImport = __webpack_require__(2),
    StatementsStn = __webpack_require__(16),
    ScopeStnMixin = __webpack_require__(15),
    BaseStn = __webpack_require__(3),
    compactFlatten;
  ({ compactFlatten } = Caf.i(["compactFlatten"], [StandardImport, global]));
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
        return `let Caf = require('caffeine-script-runtime');\nCaf.defMod(module, () => {${Caf.toString(
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 140 */
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
        return dotBase ? `(${Caf.toString(this.toJs())})` : this.toJs();
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let Caf = __webpack_require__(1);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 147 */
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2015 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.4.7
 * Features enabled: core
 * Features disabled: race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Promise=t()}}(function(){var t,e,n;return function r(t,e,n){function i(a,s){if(!e[a]){if(!t[a]){var c="function"==typeof _dereq_&&_dereq_;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=e[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n?n:e)},u,u.exports,r,t,e,n)}return e[a].exports}for(var o="function"==typeof _dereq_&&_dereq_,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(t,e,n){"use strict";function r(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new u(16),this._normalQueue=new u(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var t=this;this.drainQueues=function(){t._drainQueues()},this._schedule=l}function i(t,e,n){this._lateQueue.push(t,e,n),this._queueTick()}function o(t,e,n){this._normalQueue.push(t,e,n),this._queueTick()}function a(t){this._normalQueue._pushOne(t),this._queueTick()}var s;try{throw new Error}catch(c){s=c}var l=t("./schedule"),u=t("./queue"),p=t("./util");r.prototype.setScheduler=function(t){var e=this._schedule;return this._schedule=t,this._customScheduler=!0,e},r.prototype.hasCustomScheduler=function(){return this._customScheduler},r.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},r.prototype.disableTrampolineIfNecessary=function(){p.hasDevTools&&(this._trampolineEnabled=!1)},r.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},r.prototype.fatalError=function(t,e){e?(process.stderr.write("Fatal "+(t instanceof Error?t.stack:t)+"\n"),process.exit(2)):this.throwLater(t)},r.prototype.throwLater=function(t,e){if(1===arguments.length&&(e=t,t=function(){throw e}),"undefined"!=typeof setTimeout)setTimeout(function(){t(e)},0);else try{this._schedule(function(){t(e)})}catch(n){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},p.hasDevTools?(r.prototype.invokeLater=function(t,e,n){this._trampolineEnabled?i.call(this,t,e,n):this._schedule(function(){setTimeout(function(){t.call(e,n)},100)})},r.prototype.invoke=function(t,e,n){this._trampolineEnabled?o.call(this,t,e,n):this._schedule(function(){t.call(e,n)})},r.prototype.settlePromises=function(t){this._trampolineEnabled?a.call(this,t):this._schedule(function(){t._settlePromises()})}):(r.prototype.invokeLater=i,r.prototype.invoke=o,r.prototype.settlePromises=a),r.prototype._drainQueue=function(t){for(;t.length()>0;){var e=t.shift();if("function"==typeof e){var n=t.shift(),r=t.shift();e.call(n,r)}else e._settlePromises()}},r.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,this._drainQueue(this._lateQueue)},r.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},r.prototype._reset=function(){this._isTickUsed=!1},e.exports=r,e.exports.firstLineError=s},{"./queue":17,"./schedule":18,"./util":21}],2:[function(t,e,n){"use strict";e.exports=function(t,e,n,r){var i=!1,o=function(t,e){this._reject(e)},a=function(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(o,o,null,this,t)},s=function(t,e){0===(50397184&this._bitField)&&this._resolveCallback(e.target)},c=function(t,e){e.promiseRejectionQueued||this._reject(t)};t.prototype.bind=function(o){i||(i=!0,t.prototype._propagateFrom=r.propagateFromFunction(),t.prototype._boundValue=r.boundValueFunction());var l=n(o),u=new t(e);u._propagateFrom(this,1);var p=this._target();if(u._setBoundTo(l),l instanceof t){var f={promiseRejectionQueued:!1,promise:u,target:p,bindingPromise:l};p._then(e,a,void 0,u,f),l._then(s,c,void 0,u,f),u._setOnCancel(l)}else u._resolveCallback(p);return u},t.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=2097152|this._bitField,this._boundTo=t):this._bitField=-2097153&this._bitField},t.prototype._isBound=function(){return 2097152===(2097152&this._bitField)},t.bind=function(e,n){return t.resolve(n).bind(e)}}},{}],3:[function(t,e,n){"use strict";function r(){try{Promise===o&&(Promise=i)}catch(t){}return o}var i;"undefined"!=typeof Promise&&(i=Promise);var o=t("./promise")();o.noConflict=r,e.exports=o},{"./promise":15}],4:[function(t,e,n){"use strict";e.exports=function(e,n,r,i){var o=t("./util"),a=o.tryCatch,s=o.errorObj,c=e._async;e.prototype["break"]=e.prototype.cancel=function(){if(!i.cancellation())return this._warn("cancellation is disabled");for(var t=this,e=t;t._isCancellable();){if(!t._cancelBy(e)){e._isFollowing()?e._followee().cancel():e._cancelBranched();break}var n=t._cancellationParent;if(null==n||!n._isCancellable()){t._isFollowing()?t._followee().cancel():t._cancelBranched();break}t._isFollowing()&&t._followee().cancel(),t._setWillBeCancelled(),e=t,t=n}},e.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},e.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0},e.prototype._cancelBy=function(t){return t===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),this._enoughBranchesHaveCancelled()?(this._invokeOnCancel(),!0):!1)},e.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),c.invoke(this._cancelPromises,this,void 0))},e.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},e.prototype._unsetOnCancel=function(){this._onCancelField=void 0},e.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},e.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},e.prototype._doInvokeOnCancel=function(t,e){if(o.isArray(t))for(var n=0;n<t.length;++n)this._doInvokeOnCancel(t[n],e);else if(void 0!==t)if("function"==typeof t){if(!e){var r=a(t).call(this._boundValue());r===s&&(this._attachExtraTrace(r.e),c.throwLater(r.e))}}else t._resultCancelled(this)},e.prototype._invokeOnCancel=function(){var t=this._onCancel();this._unsetOnCancel(),c.invoke(this._doInvokeOnCancel,this,t)},e.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},e.prototype._resultCancelled=function(){this.cancel()}}},{"./util":21}],5:[function(t,e,n){"use strict";e.exports=function(e){function n(t,n,s){return function(c){var l=s._boundValue();t:for(var u=0;u<t.length;++u){var p=t[u];if(p===Error||null!=p&&p.prototype instanceof Error){if(c instanceof p)return o(n).call(l,c)}else if("function"==typeof p){var f=o(p).call(l,c);if(f===a)return f;if(f)return o(n).call(l,c)}else if(r.isObject(c)){for(var h=i(p),_=0;_<h.length;++_){var d=h[_];if(p[d]!=c[d])continue t}return o(n).call(l,c)}}return e}}var r=t("./util"),i=t("./es5").keys,o=r.tryCatch,a=r.errorObj;return n}},{"./es5":10,"./util":21}],6:[function(t,e,n){"use strict";e.exports=function(t){function e(){this._trace=new e.CapturedTrace(r())}function n(){return i?new e:void 0}function r(){var t=o.length-1;return t>=0?o[t]:void 0}var i=!1,o=[];return t.prototype._promiseCreated=function(){},t.prototype._pushContext=function(){},t.prototype._popContext=function(){return null},t._peekContext=t.prototype._peekContext=function(){},e.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,o.push(this._trace))},e.prototype._popContext=function(){if(void 0!==this._trace){var t=o.pop(),e=t._promiseCreated;return t._promiseCreated=null,e}return null},e.CapturedTrace=null,e.create=n,e.deactivateLongStackTraces=function(){},e.activateLongStackTraces=function(){var n=t.prototype._pushContext,o=t.prototype._popContext,a=t._peekContext,s=t.prototype._peekContext,c=t.prototype._promiseCreated;e.deactivateLongStackTraces=function(){t.prototype._pushContext=n,t.prototype._popContext=o,t._peekContext=a,t.prototype._peekContext=s,t.prototype._promiseCreated=c,i=!1},i=!0,t.prototype._pushContext=e.prototype._pushContext,t.prototype._popContext=e.prototype._popContext,t._peekContext=t.prototype._peekContext=r,t.prototype._promiseCreated=function(){var t=this._peekContext();t&&null==t._promiseCreated&&(t._promiseCreated=this)}},e}},{}],7:[function(t,e,n){"use strict";e.exports=function(e,n){function r(t,e){return{promise:e}}function i(){return!1}function o(t,e,n){var r=this;try{t(e,n,function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+I.toString(t));r._attachCancellationCallback(t)})}catch(i){return i}}function a(t){if(!this._isCancellable())return this;var e=this._onCancel();void 0!==e?I.isArray(e)?e.push(t):this._setOnCancel([e,t]):this._setOnCancel(t)}function s(){return this._onCancelField}function c(t){this._onCancelField=t}function l(){this._cancellationParent=void 0,this._onCancelField=void 0}function u(t,e){if(0!==(1&e)){this._cancellationParent=t;var n=t._branchesRemainingToCancel;void 0===n&&(n=0),t._branchesRemainingToCancel=n+1}0!==(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}function p(t,e){0!==(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}function f(){var t=this._boundTo;return void 0!==t&&t instanceof e?t.isFulfilled()?t.value():void 0:t}function h(){this._trace=new x(this._peekContext())}function _(t,e){if(H(t)){var n=this._trace;if(void 0!==n&&e&&(n=n._parent),void 0!==n)n.attachExtraTrace(t);else if(!t.__stackCleaned__){var r=E(t);I.notEnumerableProp(t,"stack",r.message+"\n"+r.stack.join("\n")),I.notEnumerableProp(t,"__stackCleaned__",!0)}}}function d(t,e,n,r,i){if(void 0===t&&null!==e&&X){if(void 0!==i&&i._returnedNonUndefined())return;if(0===(65535&r._bitField))return;n&&(n+=" ");var o="",a="";if(e._trace){for(var s=e._trace.stack.split("\n"),c=C(s),l=c.length-1;l>=0;--l){var u=c[l];if(!V.test(u)){var p=u.match(Q);p&&(o="at "+p[1]+":"+p[2]+":"+p[3]+" ");break}}if(c.length>0)for(var f=c[0],l=0;l<s.length;++l)if(s[l]===f){l>0&&(a="\n"+s[l-1]);break}}var h="a promise was created in a "+n+"handler "+o+"but was not returned from it, see http://goo.gl/rRqMUw"+a;r._warn(h,!0,e)}}function v(t,e){var n=t+" is deprecated and will be removed in a future version.";return e&&(n+=" Use "+e+" instead."),y(n)}function y(t,n,r){if(ot.warnings){var i,o=new U(t);if(n)r._attachExtraTrace(o);else if(ot.longStackTraces&&(i=e._peekContext()))i.attachExtraTrace(o);else{var a=E(o);o.stack=a.message+"\n"+a.stack.join("\n")}tt("warning",o)||k(o,"",!0)}}function g(t,e){for(var n=0;n<e.length-1;++n)e[n].push("From previous event:"),e[n]=e[n].join("\n");return n<e.length&&(e[n]=e[n].join("\n")),t+"\n"+e.join("\n")}function m(t){for(var e=0;e<t.length;++e)(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--)}function b(t){for(var e=t[0],n=1;n<t.length;++n){for(var r=t[n],i=e.length-1,o=e[i],a=-1,s=r.length-1;s>=0;--s)if(r[s]===o){a=s;break}for(var s=a;s>=0;--s){var c=r[s];if(e[i]!==c)break;e.pop(),i--}e=r}}function C(t){for(var e=[],n=0;n<t.length;++n){var r=t[n],i="    (No stack trace)"===r||q.test(r),o=i&&nt(r);i&&!o&&(M&&" "!==r.charAt(0)&&(r="    "+r),e.push(r))}return e}function w(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),n=0;n<e.length;++n){var r=e[n];if("    (No stack trace)"===r||q.test(r))break}return n>0&&"SyntaxError"!=t.name&&(e=e.slice(n)),e}function E(t){var e=t.stack,n=t.toString();return e="string"==typeof e&&e.length>0?w(t):["    (No stack trace)"],{message:n,stack:"SyntaxError"==t.name?e:C(e)}}function k(t,e,n){if("undefined"!=typeof console){var r;if(I.isObject(t)){var i=t.stack;r=e+G(i,t)}else r=e+String(t);"function"==typeof L?L(r,n):("function"==typeof console.log||"object"==typeof console.log)&&console.log(r)}}function j(t,e,n,r){var i=!1;try{"function"==typeof e&&(i=!0,"rejectionHandled"===t?e(r):e(n,r))}catch(o){B.throwLater(o)}"unhandledRejection"===t?tt(t,n,r)||i||k(n,"Unhandled rejection "):tt(t,r)}function F(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{e=t&&"function"==typeof t.toString?t.toString():I.toString(t);var n=/\[object [a-zA-Z0-9$_]+\]/;if(n.test(e))try{var r=JSON.stringify(t);e=r}catch(i){}0===e.length&&(e="(empty array)")}return"(<"+T(e)+">, no stack trace)"}function T(t){var e=41;return t.length<e?t:t.substr(0,e-3)+"..."}function P(){return"function"==typeof it}function R(t){var e=t.match(rt);return e?{fileName:e[1],line:parseInt(e[2],10)}:void 0}function S(t,e){if(P()){for(var n,r,i=t.stack.split("\n"),o=e.stack.split("\n"),a=-1,s=-1,c=0;c<i.length;++c){var l=R(i[c]);if(l){n=l.fileName,a=l.line;break}}for(var c=0;c<o.length;++c){var l=R(o[c]);if(l){r=l.fileName,s=l.line;break}}0>a||0>s||!n||!r||n!==r||a>=s||(nt=function(t){if(D.test(t))return!0;var e=R(t);return e&&e.fileName===n&&a<=e.line&&e.line<=s?!0:!1})}}function x(t){this._parent=t,this._promisesCreated=0;var e=this._length=1+(void 0===t?0:t._length);it(this,x),e>32&&this.uncycle()}var O,A,L,N=e._getDomain,B=e._async,U=t("./errors").Warning,I=t("./util"),H=I.canAttachTrace,D=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,V=/\((?:timers\.js):\d+:\d+\)/,Q=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,q=null,G=null,M=!1,W=!(0==I.env("BLUEBIRD_DEBUG")||!I.env("BLUEBIRD_DEBUG")&&"development"!==I.env("NODE_ENV")),$=!(0==I.env("BLUEBIRD_WARNINGS")||!W&&!I.env("BLUEBIRD_WARNINGS")),z=!(0==I.env("BLUEBIRD_LONG_STACK_TRACES")||!W&&!I.env("BLUEBIRD_LONG_STACK_TRACES")),X=0!=I.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&($||!!I.env("BLUEBIRD_W_FORGOTTEN_RETURN"));e.prototype.suppressUnhandledRejections=function(){var t=this._target();t._bitField=-1048577&t._bitField|524288},e.prototype._ensurePossibleRejectionHandled=function(){0===(524288&this._bitField)&&(this._setRejectionIsUnhandled(),B.invokeLater(this._notifyUnhandledRejection,this,void 0))},e.prototype._notifyUnhandledRejectionIsHandled=function(){j("rejectionHandled",O,void 0,this)},e.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},e.prototype._returnedNonUndefined=function(){return 0!==(268435456&this._bitField)},e.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue();this._setUnhandledRejectionIsNotified(),j("unhandledRejection",A,t,this)}},e.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},e.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField},e.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},e.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},e.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},e.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},e.prototype._warn=function(t,e,n){return y(t,e,n||this)},e.onPossiblyUnhandledRejection=function(t){var e=N();A="function"==typeof t?null===e?t:I.domainBind(e,t):void 0},e.onUnhandledRejectionHandled=function(t){var e=N();O="function"==typeof t?null===e?t:I.domainBind(e,t):void 0};var K=function(){};e.longStackTraces=function(){if(B.haveItemsQueued()&&!ot.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!ot.longStackTraces&&P()){var t=e.prototype._captureStackTrace,r=e.prototype._attachExtraTrace;ot.longStackTraces=!0,K=function(){if(B.haveItemsQueued()&&!ot.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");e.prototype._captureStackTrace=t,e.prototype._attachExtraTrace=r,n.deactivateLongStackTraces(),B.enableTrampoline(),ot.longStackTraces=!1},e.prototype._captureStackTrace=h,e.prototype._attachExtraTrace=_,n.activateLongStackTraces(),B.disableTrampolineIfNecessary()}},e.hasLongStackTraces=function(){return ot.longStackTraces&&P()};var J=function(){try{if("function"==typeof CustomEvent){var t=new CustomEvent("CustomEvent");return I.global.dispatchEvent(t),function(t,e){var n=new CustomEvent(t.toLowerCase(),{detail:e,cancelable:!0});return!I.global.dispatchEvent(n)}}if("function"==typeof Event){var t=new Event("CustomEvent");return I.global.dispatchEvent(t),function(t,e){var n=new Event(t.toLowerCase(),{cancelable:!0});return n.detail=e,!I.global.dispatchEvent(n)}}var t=document.createEvent("CustomEvent");return t.initCustomEvent("testingtheevent",!1,!0,{}),I.global.dispatchEvent(t),function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t.toLowerCase(),!1,!0,e),!I.global.dispatchEvent(n)}}catch(e){}return function(){return!1}}(),Y=function(){return I.isNode?function(){return process.emit.apply(process,arguments)}:I.global?function(t){var e="on"+t.toLowerCase(),n=I.global[e];return n?(n.apply(I.global,[].slice.call(arguments,1)),!0):!1}:function(){return!1}}(),Z={promiseCreated:r,promiseFulfilled:r,promiseRejected:r,promiseResolved:r,promiseCancelled:r,promiseChained:function(t,e,n){return{promise:e,child:n}},warning:function(t,e){return{warning:e}},unhandledRejection:function(t,e,n){return{reason:e,promise:n}},rejectionHandled:r},tt=function(t){var e=!1;try{e=Y.apply(null,arguments)}catch(n){B.throwLater(n),e=!0}var r=!1;try{r=J(t,Z[t].apply(null,arguments))}catch(n){B.throwLater(n),r=!0}return r||e};e.config=function(t){if(t=Object(t),"longStackTraces"in t&&(t.longStackTraces?e.longStackTraces():!t.longStackTraces&&e.hasLongStackTraces()&&K()),"warnings"in t){var n=t.warnings;ot.warnings=!!n,X=ot.warnings,I.isObject(n)&&"wForgottenReturn"in n&&(X=!!n.wForgottenReturn)}if("cancellation"in t&&t.cancellation&&!ot.cancellation){if(B.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");e.prototype._clearCancellationData=l,e.prototype._propagateFrom=u,e.prototype._onCancel=s,e.prototype._setOnCancel=c,e.prototype._attachCancellationCallback=a,e.prototype._execute=o,et=u,ot.cancellation=!0}return"monitoring"in t&&(t.monitoring&&!ot.monitoring?(ot.monitoring=!0,e.prototype._fireEvent=tt):!t.monitoring&&ot.monitoring&&(ot.monitoring=!1,e.prototype._fireEvent=i)),e},e.prototype._fireEvent=i,e.prototype._execute=function(t,e,n){try{t(e,n)}catch(r){return r}},e.prototype._onCancel=function(){},e.prototype._setOnCancel=function(t){},e.prototype._attachCancellationCallback=function(t){},e.prototype._captureStackTrace=function(){},e.prototype._attachExtraTrace=function(){},e.prototype._clearCancellationData=function(){},e.prototype._propagateFrom=function(t,e){};var et=p,nt=function(){return!1},rt=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;I.inherits(x,Error),n.CapturedTrace=x,x.prototype.uncycle=function(){var t=this._length;if(!(2>t)){for(var e=[],n={},r=0,i=this;void 0!==i;++r)e.push(i),i=i._parent;t=this._length=r;for(var r=t-1;r>=0;--r){var o=e[r].stack;void 0===n[o]&&(n[o]=r)}for(var r=0;t>r;++r){var a=e[r].stack,s=n[a];if(void 0!==s&&s!==r){s>0&&(e[s-1]._parent=void 0,e[s-1]._length=1),e[r]._parent=void 0,e[r]._length=1;var c=r>0?e[r-1]:this;t-1>s?(c._parent=e[s+1],c._parent.uncycle(),c._length=c._parent._length+1):(c._parent=void 0,c._length=1);for(var l=c._length+1,u=r-2;u>=0;--u)e[u]._length=l,l++;return}}}},x.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var e=E(t),n=e.message,r=[e.stack],i=this;void 0!==i;)r.push(C(i.stack.split("\n"))),i=i._parent;b(r),m(r),I.notEnumerableProp(t,"stack",g(n,r)),I.notEnumerableProp(t,"__stackCleaned__",!0)}};var it=function(){var t=/^\s*at\s*/,e=function(t,e){return"string"==typeof t?t:void 0!==e.name&&void 0!==e.message?e.toString():F(e)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,q=t,G=e;var n=Error.captureStackTrace;return nt=function(t){return D.test(t)},function(t,e){Error.stackTraceLimit+=6,n(t,e),Error.stackTraceLimit-=6}}var r=new Error;if("string"==typeof r.stack&&r.stack.split("\n")[0].indexOf("stackDetection@")>=0)return q=/@/,G=e,M=!0,function(t){t.stack=(new Error).stack};var i;try{throw new Error}catch(o){i="stack"in o}return"stack"in r||!i||"number"!=typeof Error.stackTraceLimit?(G=function(t,e){return"string"==typeof t?t:"object"!=typeof e&&"function"!=typeof e||void 0===e.name||void 0===e.message?F(e):e.toString()},null):(q=t,G=e,function(t){Error.stackTraceLimit+=6;try{throw new Error}catch(e){t.stack=e.stack}Error.stackTraceLimit-=6})}([]);"undefined"!=typeof console&&"undefined"!=typeof console.warn&&(L=function(t){console.warn(t)},I.isNode&&process.stderr.isTTY?L=function(t,e){var n=e?"[33m":"[31m";console.warn(n+t+"[0m\n")}:I.isNode||"string"!=typeof(new Error).stack||(L=function(t,e){console.warn("%c"+t,e?"color: darkorange":"color: red")}));var ot={warnings:$,longStackTraces:!1,cancellation:!1,monitoring:!1};return z&&e.longStackTraces(),{longStackTraces:function(){return ot.longStackTraces},warnings:function(){return ot.warnings},cancellation:function(){return ot.cancellation},monitoring:function(){return ot.monitoring},propagateFromFunction:function(){return et},boundValueFunction:function(){return f},checkForgottenReturns:d,setBounds:S,warn:y,deprecated:v,CapturedTrace:x,fireDomEvent:J,fireGlobalEvent:Y}}},{"./errors":9,"./util":21}],8:[function(t,e,n){"use strict";e.exports=function(t){function e(){return this.value}function n(){throw this.reason}t.prototype["return"]=t.prototype.thenReturn=function(n){return n instanceof t&&n.suppressUnhandledRejections(),this._then(e,void 0,void 0,{value:n},void 0)},t.prototype["throw"]=t.prototype.thenThrow=function(t){return this._then(n,void 0,void 0,{reason:t},void 0)},t.prototype.catchThrow=function(t){if(arguments.length<=1)return this._then(void 0,n,void 0,{reason:t},void 0);var e=arguments[1],r=function(){throw e};return this.caught(t,r)},t.prototype.catchReturn=function(n){if(arguments.length<=1)return n instanceof t&&n.suppressUnhandledRejections(),this._then(void 0,e,void 0,{value:n},void 0);var r=arguments[1];r instanceof t&&r.suppressUnhandledRejections();var i=function(){return r};return this.caught(n,i)}}},{}],9:[function(t,e,n){"use strict";function r(t,e){function n(r){return this instanceof n?(p(this,"message","string"==typeof r?r:e),p(this,"name",t),void(Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this))):new n(r)}return u(n,Error),n}function i(t){return this instanceof i?(p(this,"name","OperationalError"),p(this,"message",t),this.cause=t,this.isOperational=!0,void(t instanceof Error?(p(this,"message",t.message),p(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor))):new i(t)}var o,a,s=t("./es5"),c=s.freeze,l=t("./util"),u=l.inherits,p=l.notEnumerableProp,f=r("Warning","warning"),h=r("CancellationError","cancellation error"),_=r("TimeoutError","timeout error"),d=r("AggregateError","aggregate error");try{o=TypeError,a=RangeError}catch(v){o=r("TypeError","type error"),a=r("RangeError","range error")}for(var y="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),g=0;g<y.length;++g)"function"==typeof Array.prototype[y[g]]&&(d.prototype[y[g]]=Array.prototype[y[g]]);s.defineProperty(d.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),d.prototype.isOperational=!0;var m=0;d.prototype.toString=function(){var t=Array(4*m+1).join(" "),e="\n"+t+"AggregateError of:\n";m++,t=Array(4*m+1).join(" ");for(var n=0;n<this.length;++n){for(var r=this[n]===this?"[Circular AggregateError]":this[n]+"",i=r.split("\n"),o=0;o<i.length;++o)i[o]=t+i[o];r=i.join("\n"),e+=r+"\n"}return m--,e},u(i,Error);var b=Error.__BluebirdErrorTypes__;b||(b=c({CancellationError:h,TimeoutError:_,OperationalError:i,RejectionError:i,AggregateError:d}),s.defineProperty(Error,"__BluebirdErrorTypes__",{value:b,writable:!1,enumerable:!1,configurable:!1})),e.exports={Error:Error,TypeError:o,RangeError:a,CancellationError:b.CancellationError,OperationalError:b.OperationalError,TimeoutError:b.TimeoutError,AggregateError:b.AggregateError,Warning:f}},{"./es5":10,"./util":21}],10:[function(t,e,n){var r=function(){"use strict";return void 0===this}();if(r)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:r,propertyIsWritable:function(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return!(n&&!n.writable&&!n.set)}};else{var i={}.hasOwnProperty,o={}.toString,a={}.constructor.prototype,s=function(t){var e=[];for(var n in t)i.call(t,n)&&e.push(n);return e},c=function(t,e){return{value:t[e]}},l=function(t,e,n){return t[e]=n.value,t},u=function(t){return t},p=function(t){try{return Object(t).constructor.prototype}catch(e){return a}},f=function(t){try{return"[object Array]"===o.call(t)}catch(e){return!1}};e.exports={isArray:f,keys:s,names:s,defineProperty:l,getDescriptor:c,freeze:u,getPrototypeOf:p,isES5:r,propertyIsWritable:function(){return!0}}}},{}],11:[function(t,e,n){"use strict";e.exports=function(e,n){function r(t,e,n){this.promise=t,this.type=e,this.handler=n,this.called=!1,this.cancelPromise=null}function i(t){this.finallyHandler=t}function o(t,e){return null!=t.cancelPromise?(arguments.length>1?t.cancelPromise._reject(e):t.cancelPromise._cancel(),t.cancelPromise=null,!0):!1}function a(){return c.call(this,this.promise._target()._settledValue())}function s(t){return o(this,t)?void 0:(p.e=t,p)}function c(t){var r=this.promise,c=this.handler;if(!this.called){this.called=!0;var l=this.isFinallyHandler()?c.call(r._boundValue()):c.call(r._boundValue(),t);if(void 0!==l){r._setReturnedNonUndefined();var f=n(l,r);if(f instanceof e){if(null!=this.cancelPromise){if(f._isCancelled()){var h=new u("late cancellation observer");return r._attachExtraTrace(h),p.e=h,p}f.isPending()&&f._attachCancellationCallback(new i(this))}return f._then(a,s,void 0,this,void 0)}}}return r.isRejected()?(o(this),p.e=t,p):(o(this),t)}var l=t("./util"),u=e.CancellationError,p=l.errorObj;return r.prototype.isFinallyHandler=function(){return 0===this.type},i.prototype._resultCancelled=function(){o(this.finallyHandler)},e.prototype._passThrough=function(t,e,n,i){return"function"!=typeof t?this.then():this._then(n,i,void 0,new r(this,e,t),void 0)},e.prototype.lastly=e.prototype["finally"]=function(t){return this._passThrough(t,0,c,c)},e.prototype.tap=function(t){return this._passThrough(t,1,c)},r}},{"./util":21}],12:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o,a){var s=t("./util");s.canEvaluate,s.tryCatch,s.errorObj;e.join=function(){var t,e=arguments.length-1;if(e>0&&"function"==typeof arguments[e]){t=arguments[e];var r}var i=[].slice.call(arguments);t&&i.pop();var r=new n(i).promise();return void 0!==t?r.spread(t):r}}},{"./util":21}],13:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o){var a=t("./util"),s=a.tryCatch;e.method=function(t){if("function"!=typeof t)throw new e.TypeError("expecting a function but got "+a.classString(t));return function(){var r=new e(n);r._captureStackTrace(),r._pushContext();var i=s(t).apply(this,arguments),a=r._popContext();return o.checkForgottenReturns(i,a,"Promise.method",r),r._resolveFromSyncValue(i),r}},e.attempt=e["try"]=function(t){if("function"!=typeof t)return i("expecting a function but got "+a.classString(t));var r=new e(n);r._captureStackTrace(),r._pushContext();var c;if(arguments.length>1){o.deprecated("calling Promise.try with more than 1 argument");var l=arguments[1],u=arguments[2];c=a.isArray(l)?s(t).apply(u,l):s(t).call(u,l)}else c=s(t)();var p=r._popContext();return o.checkForgottenReturns(c,p,"Promise.try",r),r._resolveFromSyncValue(c),r},e.prototype._resolveFromSyncValue=function(t){t===a.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0)}}},{"./util":21}],14:[function(t,e,n){"use strict";function r(t){return t instanceof Error&&u.getPrototypeOf(t)===Error.prototype}function i(t){var e;if(r(t)){e=new l(t),e.name=t.name,e.message=t.message,e.stack=t.stack;for(var n=u.keys(t),i=0;i<n.length;++i){var o=n[i];p.test(o)||(e[o]=t[o])}return e}return a.markAsOriginatingFromRejection(t),t}function o(t,e){return function(n,r){if(null!==t){if(n){var o=i(s(n));t._attachExtraTrace(o),t._reject(o)}else if(e){var a=[].slice.call(arguments,1);t._fulfill(a)}else t._fulfill(r);t=null}}}var a=t("./util"),s=a.maybeWrapAsError,c=t("./errors"),l=c.OperationalError,u=t("./es5"),p=/^(?:name|message|stack|cause)$/;e.exports=o},{"./errors":9,"./es5":10,"./util":21}],15:[function(t,e,n){"use strict";e.exports=function(){function n(){}function r(t,e){if("function"!=typeof e)throw new g("expecting a function but got "+h.classString(e));if(t.constructor!==i)throw new g("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n")}function i(t){this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,t!==b&&(r(this,t),this._resolveFromExecutor(t)),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function o(t){this.promise._resolveCallback(t)}function a(t){this.promise._rejectCallback(t,!1)}function s(t){var e=new i(b);e._fulfillmentHandler0=t,e._rejectionHandler0=t,e._promise0=t,e._receiver0=t}var c,l=function(){return new g("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},u=function(){return new i.PromiseInspection(this._target())},p=function(t){return i.reject(new g(t))},f={},h=t("./util");c=h.isNode?function(){var t=process.domain;return void 0===t&&(t=null),t}:function(){return null},h.notEnumerableProp(i,"_getDomain",c);var _=t("./es5"),d=t("./async"),v=new d;_.defineProperty(i,"_async",{value:v});var y=t("./errors"),g=i.TypeError=y.TypeError;i.RangeError=y.RangeError;var m=i.CancellationError=y.CancellationError;i.TimeoutError=y.TimeoutError,i.OperationalError=y.OperationalError,i.RejectionError=y.OperationalError,i.AggregateError=y.AggregateError;var b=function(){},C={},w={},E=t("./thenables")(i,b),k=t("./promise_array")(i,b,E,p,n),j=t("./context")(i),F=(j.create,t("./debuggability")(i,j)),T=(F.CapturedTrace,t("./finally")(i,E)),P=t("./catch_filter")(w),R=t("./nodeback"),S=h.errorObj,x=h.tryCatch;return i.prototype.toString=function(){return"[object Promise]"},i.prototype.caught=i.prototype["catch"]=function(t){var e=arguments.length;if(e>1){var n,r=new Array(e-1),i=0;for(n=0;e-1>n;++n){var o=arguments[n];if(!h.isObject(o))return p("expecting an object but got A catch statement predicate "+h.classString(o));r[i++]=o}return r.length=i,t=arguments[n],this.then(void 0,P(r,t,this))}return this.then(void 0,t)},i.prototype.reflect=function(){return this._then(u,u,void 0,this,void 0)},i.prototype.then=function(t,e){if(F.warnings()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var n=".then() only accepts functions but was passed: "+h.classString(t);arguments.length>1&&(n+=", "+h.classString(e)),this._warn(n)}return this._then(t,e,void 0,void 0,void 0)},i.prototype.done=function(t,e){var n=this._then(t,e,void 0,void 0,void 0);n._setIsFinal()},i.prototype.spread=function(t){return"function"!=typeof t?p("expecting a function but got "+h.classString(t)):this.all()._then(t,void 0,void 0,C,void 0)},i.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t},i.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new k(this).promise();
},i.prototype.error=function(t){return this.caught(h.originatesFromRejection,t)},i.getNewLibraryCopy=e.exports,i.is=function(t){return t instanceof i},i.fromNode=i.fromCallback=function(t){var e=new i(b);e._captureStackTrace();var n=arguments.length>1?!!Object(arguments[1]).multiArgs:!1,r=x(t)(R(e,n));return r===S&&e._rejectCallback(r.e,!0),e._isFateSealed()||e._setAsyncGuaranteed(),e},i.all=function(t){return new k(t).promise()},i.cast=function(t){var e=E(t);return e instanceof i||(e=new i(b),e._captureStackTrace(),e._setFulfilled(),e._rejectionHandler0=t),e},i.resolve=i.fulfilled=i.cast,i.reject=i.rejected=function(t){var e=new i(b);return e._captureStackTrace(),e._rejectCallback(t,!0),e},i.setScheduler=function(t){if("function"!=typeof t)throw new g("expecting a function but got "+h.classString(t));return v.setScheduler(t)},i.prototype._then=function(t,e,n,r,o){var a=void 0!==o,s=a?o:new i(b),l=this._target(),u=l._bitField;a||(s._propagateFrom(this,3),s._captureStackTrace(),void 0===r&&0!==(2097152&this._bitField)&&(r=0!==(50397184&u)?this._boundValue():l===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,s));var p=c();if(0!==(50397184&u)){var f,_,d=l._settlePromiseCtx;0!==(33554432&u)?(_=l._rejectionHandler0,f=t):0!==(16777216&u)?(_=l._fulfillmentHandler0,f=e,l._unsetRejectionIsUnhandled()):(d=l._settlePromiseLateCancellationObserver,_=new m("late cancellation observer"),l._attachExtraTrace(_),f=e),v.invoke(d,l,{handler:null===p?f:"function"==typeof f&&h.domainBind(p,f),promise:s,receiver:r,value:_})}else l._addCallbacks(t,e,s,r,p);return s},i.prototype._length=function(){return 65535&this._bitField},i.prototype._isFateSealed=function(){return 0!==(117506048&this._bitField)},i.prototype._isFollowing=function(){return 67108864===(67108864&this._bitField)},i.prototype._setLength=function(t){this._bitField=-65536&this._bitField|65535&t},i.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},i.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},i.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},i.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},i.prototype._isFinal=function(){return(4194304&this._bitField)>0},i.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField},i.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},i.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},i.prototype._setAsyncGuaranteed=function(){v.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},i.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[4*t-4+3];return e===f?void 0:void 0===e&&this._isBound()?this._boundValue():e},i.prototype._promiseAt=function(t){return this[4*t-4+2]},i.prototype._fulfillmentHandlerAt=function(t){return this[4*t-4+0]},i.prototype._rejectionHandlerAt=function(t){return this[4*t-4+1]},i.prototype._boundValue=function(){},i.prototype._migrateCallback0=function(t){var e=(t._bitField,t._fulfillmentHandler0),n=t._rejectionHandler0,r=t._promise0,i=t._receiverAt(0);void 0===i&&(i=f),this._addCallbacks(e,n,r,i,null)},i.prototype._migrateCallbackAt=function(t,e){var n=t._fulfillmentHandlerAt(e),r=t._rejectionHandlerAt(e),i=t._promiseAt(e),o=t._receiverAt(e);void 0===o&&(o=f),this._addCallbacks(n,r,i,o,null)},i.prototype._addCallbacks=function(t,e,n,r,i){var o=this._length();if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=n,this._receiver0=r,"function"==typeof t&&(this._fulfillmentHandler0=null===i?t:h.domainBind(i,t)),"function"==typeof e&&(this._rejectionHandler0=null===i?e:h.domainBind(i,e));else{var a=4*o-4;this[a+2]=n,this[a+3]=r,"function"==typeof t&&(this[a+0]=null===i?t:h.domainBind(i,t)),"function"==typeof e&&(this[a+1]=null===i?e:h.domainBind(i,e))}return this._setLength(o+1),o},i.prototype._proxy=function(t,e){this._addCallbacks(void 0,void 0,e,t,null)},i.prototype._resolveCallback=function(t,e){if(0===(117506048&this._bitField)){if(t===this)return this._rejectCallback(l(),!1);var n=E(t,this);if(!(n instanceof i))return this._fulfill(t);e&&this._propagateFrom(n,2);var r=n._target();if(r===this)return void this._reject(l());var o=r._bitField;if(0===(50397184&o)){var a=this._length();a>0&&r._migrateCallback0(this);for(var s=1;a>s;++s)r._migrateCallbackAt(this,s);this._setFollowing(),this._setLength(0),this._setFollowee(r)}else if(0!==(33554432&o))this._fulfill(r._value());else if(0!==(16777216&o))this._reject(r._reason());else{var c=new m("late cancellation observer");r._attachExtraTrace(c),this._reject(c)}}},i.prototype._rejectCallback=function(t,e,n){var r=h.ensureErrorObject(t),i=r===t;if(!i&&!n&&F.warnings()){var o="a promise was rejected with a non-error: "+h.classString(t);this._warn(o,!0)}this._attachExtraTrace(r,e?i:!1),this._reject(t)},i.prototype._resolveFromExecutor=function(t){var e=this;this._captureStackTrace(),this._pushContext();var n=!0,r=this._execute(t,function(t){e._resolveCallback(t)},function(t){e._rejectCallback(t,n)});n=!1,this._popContext(),void 0!==r&&e._rejectCallback(r,!0)},i.prototype._settlePromiseFromHandler=function(t,e,n,r){var i=r._bitField;if(0===(65536&i)){r._pushContext();var o;e===C?n&&"number"==typeof n.length?o=x(t).apply(this._boundValue(),n):(o=S,o.e=new g("cannot .spread() a non-array: "+h.classString(n))):o=x(t).call(e,n);var a=r._popContext();i=r._bitField,0===(65536&i)&&(o===w?r._reject(n):o===S?r._rejectCallback(o.e,!1):(F.checkForgottenReturns(o,a,"",r,this),r._resolveCallback(o)))}},i.prototype._target=function(){for(var t=this;t._isFollowing();)t=t._followee();return t},i.prototype._followee=function(){return this._rejectionHandler0},i.prototype._setFollowee=function(t){this._rejectionHandler0=t},i.prototype._settlePromise=function(t,e,r,o){var a=t instanceof i,s=this._bitField,c=0!==(134217728&s);0!==(65536&s)?(a&&t._invokeInternalOnCancel(),r instanceof T&&r.isFinallyHandler()?(r.cancelPromise=t,x(e).call(r,o)===S&&t._reject(S.e)):e===u?t._fulfill(u.call(r)):r instanceof n?r._promiseCancelled(t):a||t instanceof k?t._cancel():r.cancel()):"function"==typeof e?a?(c&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(e,r,o,t)):e.call(r,o,t):r instanceof n?r._isResolved()||(0!==(33554432&s)?r._promiseFulfilled(o,t):r._promiseRejected(o,t)):a&&(c&&t._setAsyncGuaranteed(),0!==(33554432&s)?t._fulfill(o):t._reject(o))},i.prototype._settlePromiseLateCancellationObserver=function(t){var e=t.handler,n=t.promise,r=t.receiver,o=t.value;"function"==typeof e?n instanceof i?this._settlePromiseFromHandler(e,r,o,n):e.call(r,o,n):n instanceof i&&n._reject(o)},i.prototype._settlePromiseCtx=function(t){this._settlePromise(t.promise,t.handler,t.receiver,t.value)},i.prototype._settlePromise0=function(t,e,n){var r=this._promise0,i=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,t,i,e)},i.prototype._clearCallbackDataAtIndex=function(t){var e=4*t-4;this[e+2]=this[e+3]=this[e+0]=this[e+1]=void 0},i.prototype._fulfill=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(t===this){var n=l();return this._attachExtraTrace(n),this._reject(n)}this._setFulfilled(),this._rejectionHandler0=t,(65535&e)>0&&(0!==(134217728&e)?this._settlePromises():v.settlePromises(this))}},i.prototype._reject=function(t){var e=this._bitField;if(!((117506048&e)>>>16))return this._setRejected(),this._fulfillmentHandler0=t,this._isFinal()?v.fatalError(t,h.isNode):void((65535&e)>0?v.settlePromises(this):this._ensurePossibleRejectionHandled())},i.prototype._fulfillPromises=function(t,e){for(var n=1;t>n;n++){var r=this._fulfillmentHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e)}},i.prototype._rejectPromises=function(t,e){for(var n=1;t>n;n++){var r=this._rejectionHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e)}},i.prototype._settlePromises=function(){var t=this._bitField,e=65535&t;if(e>0){if(0!==(16842752&t)){var n=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,n,t),this._rejectPromises(e,n)}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,t),this._fulfillPromises(e,r)}this._setLength(0)}this._clearCancellationData()},i.prototype._settledValue=function(){var t=this._bitField;return 0!==(33554432&t)?this._rejectionHandler0:0!==(16777216&t)?this._fulfillmentHandler0:void 0},i.defer=i.pending=function(){F.deprecated("Promise.defer","new Promise");var t=new i(b);return{promise:t,resolve:o,reject:a}},h.notEnumerableProp(i,"_makeSelfResolutionError",l),t("./method")(i,b,E,p,F),t("./bind")(i,b,E,F),t("./cancel")(i,k,p,F),t("./direct_resolve")(i),t("./synchronous_inspection")(i),t("./join")(i,k,E,b,v,c),i.Promise=i,i.version="3.4.7",h.toFastProperties(i),h.toFastProperties(i.prototype),s({a:1}),s({b:2}),s({c:3}),s(1),s(function(){}),s(void 0),s(!1),s(new i(b)),F.setBounds(d.firstLineError,h.lastLineError),i}},{"./async":1,"./bind":2,"./cancel":4,"./catch_filter":5,"./context":6,"./debuggability":7,"./direct_resolve":8,"./errors":9,"./es5":10,"./finally":11,"./join":12,"./method":13,"./nodeback":14,"./promise_array":16,"./synchronous_inspection":19,"./thenables":20,"./util":21}],16:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o){function a(t){switch(t){case-2:return[];case-3:return{}}}function s(t){var r=this._promise=new e(n);t instanceof e&&r._propagateFrom(t,3),r._setOnCancel(this),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var c=t("./util");c.isArray;return c.inherits(s,o),s.prototype.length=function(){return this._length},s.prototype.promise=function(){return this._promise},s.prototype._init=function l(t,n){var o=r(this._values,this._promise);if(o instanceof e){o=o._target();var s=o._bitField;if(this._values=o,0===(50397184&s))return this._promise._setAsyncGuaranteed(),o._then(l,this._reject,void 0,this,n);if(0===(33554432&s))return 0!==(16777216&s)?this._reject(o._reason()):this._cancel();o=o._value()}if(o=c.asArray(o),null===o){var u=i("expecting an array or an iterable object but got "+c.classString(o)).reason();return void this._promise._rejectCallback(u,!1)}return 0===o.length?void(-5===n?this._resolveEmptyArray():this._resolve(a(n))):void this._iterate(o)},s.prototype._iterate=function(t){var n=this.getActualLength(t.length);this._length=n,this._values=this.shouldCopyValues()?new Array(n):this._values;for(var i=this._promise,o=!1,a=null,s=0;n>s;++s){var c=r(t[s],i);c instanceof e?(c=c._target(),a=c._bitField):a=null,o?null!==a&&c.suppressUnhandledRejections():null!==a?0===(50397184&a)?(c._proxy(this,s),this._values[s]=c):o=0!==(33554432&a)?this._promiseFulfilled(c._value(),s):0!==(16777216&a)?this._promiseRejected(c._reason(),s):this._promiseCancelled(s):o=this._promiseFulfilled(c,s)}o||i._setAsyncGuaranteed()},s.prototype._isResolved=function(){return null===this._values},s.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},s.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},s.prototype._reject=function(t){this._values=null,this._promise._rejectCallback(t,!1)},s.prototype._promiseFulfilled=function(t,e){this._values[e]=t;var n=++this._totalResolved;return n>=this._length?(this._resolve(this._values),!0):!1},s.prototype._promiseCancelled=function(){return this._cancel(),!0},s.prototype._promiseRejected=function(t){return this._totalResolved++,this._reject(t),!0},s.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values;if(this._cancel(),t instanceof e)t.cancel();else for(var n=0;n<t.length;++n)t[n]instanceof e&&t[n].cancel()}},s.prototype.shouldCopyValues=function(){return!0},s.prototype.getActualLength=function(t){return t},s}},{"./util":21}],17:[function(t,e,n){"use strict";function r(t,e,n,r,i){for(var o=0;i>o;++o)n[o+r]=t[o+e],t[o+e]=void 0}function i(t){this._capacity=t,this._length=0,this._front=0}i.prototype._willBeOverCapacity=function(t){return this._capacity<t},i.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1);var n=this._front+e&this._capacity-1;this[n]=t,this._length=e+1},i.prototype.push=function(t,e,n){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(n);var i=this._front+r-3;this._checkCapacity(r);var o=this._capacity-1;this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=n,this._length=r},i.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},i.prototype.length=function(){return this._length},i.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<1)},i.prototype._resizeTo=function(t){var e=this._capacity;this._capacity=t;var n=this._front,i=this._length,o=n+i&e-1;r(this,0,this,e,o)},e.exports=i},{}],18:[function(t,e,n){"use strict";var r,i=t("./util"),o=function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")},a=i.getNativePromise();if(i.isNode&&"undefined"==typeof MutationObserver){var s=global.setImmediate,c=process.nextTick;r=i.isRecentNode?function(t){s.call(global,t)}:function(t){c.call(process,t)}}else if("function"==typeof a&&"function"==typeof a.resolve){var l=a.resolve();r=function(t){l.then(t)}}else r="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)?"undefined"!=typeof setImmediate?function(t){setImmediate(t)}:"undefined"!=typeof setTimeout?function(t){setTimeout(t,0)}:o:function(){var t=document.createElement("div"),e={attributes:!0},n=!1,r=document.createElement("div"),i=new MutationObserver(function(){t.classList.toggle("foo"),n=!1});i.observe(r,e);var o=function(){n||(n=!0,r.classList.toggle("foo"))};return function(n){var r=new MutationObserver(function(){r.disconnect(),n()});r.observe(t,e),o()}}();e.exports=r},{"./util":21}],19:[function(t,e,n){"use strict";e.exports=function(t){function e(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValueField=t._isFateSealed()?t._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}e.prototype._settledValue=function(){return this._settledValueField};var n=e.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},r=e.prototype.error=e.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},i=e.prototype.isFulfilled=function(){return 0!==(33554432&this._bitField)},o=e.prototype.isRejected=function(){return 0!==(16777216&this._bitField)},a=e.prototype.isPending=function(){return 0===(50397184&this._bitField)},s=e.prototype.isResolved=function(){return 0!==(50331648&this._bitField)};e.prototype.isCancelled=function(){return 0!==(8454144&this._bitField)},t.prototype.__isCancelled=function(){return 65536===(65536&this._bitField)},t.prototype._isCancelled=function(){return this._target().__isCancelled()},t.prototype.isCancelled=function(){return 0!==(8454144&this._target()._bitField)},t.prototype.isPending=function(){return a.call(this._target())},t.prototype.isRejected=function(){return o.call(this._target())},t.prototype.isFulfilled=function(){return i.call(this._target())},t.prototype.isResolved=function(){return s.call(this._target())},t.prototype.value=function(){return n.call(this._target())},t.prototype.reason=function(){var t=this._target();return t._unsetRejectionIsUnhandled(),r.call(t)},t.prototype._value=function(){return this._settledValue()},t.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},t.PromiseInspection=e}},{}],20:[function(t,e,n){"use strict";e.exports=function(e,n){function r(t,r){if(u(t)){if(t instanceof e)return t;var i=o(t);if(i===l){r&&r._pushContext();var c=e.reject(i.e);return r&&r._popContext(),c}if("function"==typeof i){if(a(t)){var c=new e(n);return t._then(c._fulfill,c._reject,void 0,c,null),c}return s(t,i,r)}}return t}function i(t){return t.then}function o(t){try{return i(t)}catch(e){return l.e=e,l}}function a(t){try{return p.call(t,"_promise0")}catch(e){return!1}}function s(t,r,i){function o(t){s&&(s._resolveCallback(t),s=null)}function a(t){s&&(s._rejectCallback(t,p,!0),s=null)}var s=new e(n),u=s;i&&i._pushContext(),s._captureStackTrace(),i&&i._popContext();var p=!0,f=c.tryCatch(r).call(t,o,a);return p=!1,s&&f===l&&(s._rejectCallback(f.e,!0,!0),s=null),u}var c=t("./util"),l=c.errorObj,u=c.isObject,p={}.hasOwnProperty;return r}},{"./util":21}],21:[function(t,e,n){"use strict";function r(){try{var t=R;return R=null,t.apply(this,arguments)}catch(e){return P.e=e,P}}function i(t){return R=t,r}function o(t){return null==t||t===!0||t===!1||"string"==typeof t||"number"==typeof t}function a(t){return"function"==typeof t||"object"==typeof t&&null!==t}function s(t){return o(t)?new Error(v(t)):t}function c(t,e){var n,r=t.length,i=new Array(r+1);for(n=0;r>n;++n)i[n]=t[n];return i[n]=e,i}function l(t,e,n){if(!F.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var r=Object.getOwnPropertyDescriptor(t,e);return null!=r?null==r.get&&null==r.set?r.value:n:void 0}function u(t,e,n){if(o(t))return t;var r={value:n,configurable:!0,enumerable:!1,writable:!0};return F.defineProperty(t,e,r),t}function p(t){throw t}function f(t){try{if("function"==typeof t){var e=F.names(t.prototype),n=F.isES5&&e.length>1,r=e.length>0&&!(1===e.length&&"constructor"===e[0]),i=A.test(t+"")&&F.names(t).length>0;if(n||r||i)return!0}return!1}catch(o){return!1}}function h(t){function e(){}e.prototype=t;for(var n=8;n--;)new e;return t}function _(t){return L.test(t)}function d(t,e,n){for(var r=new Array(t),i=0;t>i;++i)r[i]=e+i+n;return r}function v(t){try{return t+""}catch(e){return"[no string representation]"}}function y(t){return null!==t&&"object"==typeof t&&"string"==typeof t.message&&"string"==typeof t.name}function g(t){try{u(t,"isOperational",!0)}catch(e){}}function m(t){return null==t?!1:t instanceof Error.__BluebirdErrorTypes__.OperationalError||t.isOperational===!0}function b(t){return y(t)&&F.propertyIsWritable(t,"stack")}function C(t){return{}.toString.call(t)}function w(t,e,n){for(var r=F.names(t),i=0;i<r.length;++i){var o=r[i];if(n(o))try{F.defineProperty(e,o,F.getDescriptor(t,o))}catch(a){}}}function E(t){return H?process.env[t]:void 0}function k(){if("function"==typeof Promise)try{var t=new Promise(function(){});if("[object Promise]"==={}.toString.call(t))return Promise}catch(e){}}function j(t,e){return t.bind(e)}var F=t("./es5"),T="undefined"==typeof navigator,P={e:{}},R,S="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0!==this?this:null,x=function(t,e){function n(){this.constructor=t,this.constructor$=e;for(var n in e.prototype)r.call(e.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=e.prototype[n])}var r={}.hasOwnProperty;return n.prototype=e.prototype,t.prototype=new n,t.prototype},O=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var n=0;n<t.length;++n)if(t[n]===e)return!0;return!1};if(F.isES5){var n=Object.getOwnPropertyNames;return function(t){for(var r=[],i=Object.create(null);null!=t&&!e(t);){var o;try{o=n(t)}catch(a){return r}for(var s=0;s<o.length;++s){var c=o[s];if(!i[c]){i[c]=!0;var l=Object.getOwnPropertyDescriptor(t,c);null!=l&&null==l.get&&null==l.set&&r.push(c)}}t=F.getPrototypeOf(t)}return r}}var r={}.hasOwnProperty;return function(n){if(e(n))return[];var i=[];t:for(var o in n)if(r.call(n,o))i.push(o);else{for(var a=0;a<t.length;++a)if(r.call(t[a],o))continue t;i.push(o)}return i}}(),A=/this\s*\.\s*\S+\s*=/,L=/^[a-z$_][a-z$_0-9]*$/i,N=function(){return"stack"in new Error?function(t){return b(t)?t:new Error(v(t))}:function(t){if(b(t))return t;try{throw new Error(v(t))}catch(e){return e}}}(),B=function(t){return F.isArray(t)?t:null};if("undefined"!=typeof Symbol&&Symbol.iterator){var U="function"==typeof Array.from?function(t){return Array.from(t)}:function(t){for(var e,n=[],r=t[Symbol.iterator]();!(e=r.next()).done;)n.push(e.value);return n};B=function(t){return F.isArray(t)?t:null!=t&&"function"==typeof t[Symbol.iterator]?U(t):null}}var I="undefined"!=typeof process&&"[object process]"===C(process).toLowerCase(),H="undefined"!=typeof process&&"undefined"!=typeof process.env,D={isClass:f,isIdentifier:_,inheritedDataKeys:O,getDataPropertyOrDefault:l,thrower:p,isArray:F.isArray,asArray:B,notEnumerableProp:u,isPrimitive:o,isObject:a,isError:y,canEvaluate:T,errorObj:P,tryCatch:i,inherits:x,withAppended:c,maybeWrapAsError:s,toFastProperties:h,filledRange:d,toString:v,canAttachTrace:b,ensureErrorObject:N,originatesFromRejection:m,markAsOriginatingFromRejection:g,classString:C,copyDescriptors:w,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:I,hasEnvVariables:H,env:E,global:S,getNativePromise:k,domainBind:j};D.isRecentNode=D.isNode&&function(){var t=process.versions.node.split(".").map(Number);return 0===t[0]&&t[1]>10||t[0]>0}(),D.isNode&&D.toFastProperties(process);try{throw new Error}catch(V){D.lastLineError=V}e.exports=D},{"./es5":10}]},{},[3])(3)}),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise);

/***/ }),
/* 149 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var BaseObject,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = BaseObject = (function(superClass) {
  extend(BaseObject, superClass);

  function BaseObject() {
    return BaseObject.__super__.constructor.apply(this, arguments);
  }

  return BaseObject;

})(__webpack_require__(24));


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [
  {
    createWithPostCreate: __webpack_require__(24).createWithPostCreate
  }, [__webpack_require__(24), "mixInto createAllClass  createHotWithPostCreate"]
];


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154).includeInNamespace(__webpack_require__(152)).addModules({
  BaseClass: __webpack_require__(24),
  BaseObject: __webpack_require__(151),
  WebpackHotLoader: __webpack_require__(64)
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var Art, ClassSystem,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Art = __webpack_require__(155);

module.exports = Art.ClassSystem || Art.addNamespace('ClassSystem', ClassSystem = (function(superClass) {
  extend(ClassSystem, superClass);

  function ClassSystem() {
    return ClassSystem.__super__.constructor.apply(this, arguments);
  }

  return ClassSystem;

})(Neptune.Base));


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var Art, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(33);

module.exports = Neptune.Art || Neptune.addNamespace('Art', Art = (function(superClass) {
  extend(Art, superClass);

  function Art() {
    return Art.__super__.constructor.apply(this, arguments);
  }

  return Art;

})(Neptune.Base));


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(27), __webpack_require__(69), __webpack_require__(68), __webpack_require__(39)];


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var Core, StandardLib,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

StandardLib = __webpack_require__(46);

module.exports = StandardLib.Core || StandardLib.addNamespace('Core', Core = (function(superClass) {
  extend(Core, superClass);

  function Core() {
    return Core.__super__.constructor.apply(this, arguments);
  }

  return Core;

})(Neptune.Base));


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {


/*
TODO: refactor so nothing in inspect/* uses BaseObject
Then, move into StandardLib.
 */
module.exports = [[__webpack_require__(42), "shallowInspect inspectLean inspect"], __webpack_require__(72), __webpack_require__(41), __webpack_require__(74), __webpack_require__(28)];


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var Array, MinimalBaseObject,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(10);

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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var Core, MinimalBaseObject,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(10);

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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var MinimalBaseObject, Object,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(10);

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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var MinimalBaseObject, String, escapeJavascriptString,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(10);

escapeJavascriptString = __webpack_require__(11).escapeJavascriptString;

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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var Inspect, Inspected,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Inspect = __webpack_require__(43);

module.exports = Inspect.Inspected || Inspect.addNamespace('Inspected', Inspected = (function(superClass) {
  extend(Inspected, superClass);

  function Inspected() {
    return Inspected.__super__.constructor.apply(this, arguments);
  }

  return Inspected;

})(Neptune.Base));


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var Inspected, Inspector2, Map, MinimalBaseObject, escapeJavascriptString, isArray, isBrowserObject, isClass, isDate, isFunction, isHTMLImageElement, isObject, isPlainObject, isRegExp, isString, objectName, parentString, ref,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MinimalBaseObject = __webpack_require__(10);

Map = __webpack_require__(29);

Inspected = __webpack_require__(73);

escapeJavascriptString = __webpack_require__(11).escapeJavascriptString;

ref = __webpack_require__(4), isString = ref.isString, isArray = ref.isArray, isFunction = ref.isFunction, isObject = ref.isObject, isPlainObject = ref.isPlainObject, isClass = ref.isClass, isDate = ref.isDate, isRegExp = ref.isRegExp, objectName = ref.objectName, isBrowserObject = ref.isBrowserObject;

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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [
  __webpack_require__(8), [__webpack_require__(32), "testPromise", "containsPromises", "deepAll"], __webpack_require__(25), __webpack_require__(66), __webpack_require__(30), __webpack_require__(11), __webpack_require__(40), __webpack_require__(71), __webpack_require__(76), __webpack_require__(12), __webpack_require__(31), __webpack_require__(77), __webpack_require__(18), __webpack_require__(78), __webpack_require__(79), __webpack_require__(80), __webpack_require__(4), __webpack_require__(26), __webpack_require__(44), __webpack_require__(17), __webpack_require__(67), __webpack_require__(75), __webpack_require__(38), {
    dateFormat: __webpack_require__(94)
  }
];


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46).includeInNamespace(__webpack_require__(165)).addModules({
  ArrayExtensions: __webpack_require__(25),
  AsyncExtensions: __webpack_require__(66),
  CallStack: __webpack_require__(38),
  Clone: __webpack_require__(67),
  CommonJs: __webpack_require__(26),
  Eq: __webpack_require__(40),
  ErrorWithInfo: __webpack_require__(70),
  Function: __webpack_require__(71),
  Iteration: __webpack_require__(44),
  Log: __webpack_require__(75),
  Map: __webpack_require__(29),
  MathExtensions: __webpack_require__(12),
  MinimalBaseObject: __webpack_require__(10),
  ObjectDiff: __webpack_require__(76),
  ObjectExtensions: __webpack_require__(30),
  ParseUrl: __webpack_require__(31),
  Promise: __webpack_require__(32),
  PromisedFileReader: __webpack_require__(77),
  Regexp: __webpack_require__(18),
  Ruby: __webpack_require__(78),
  ShallowClone: __webpack_require__(79),
  StringExtensions: __webpack_require__(11),
  Time: __webpack_require__(80),
  TypesExtended: __webpack_require__(4),
  Unique: __webpack_require__(45)
});

__webpack_require__(8);

__webpack_require__(17);


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var Art, Neptune,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Neptune = __webpack_require__(33);

module.exports = Neptune.Art || Neptune.addNamespace('Art', Art = (function(superClass) {
  extend(Art, superClass);

  function Art() {
    return Art.__super__.constructor.apply(this, arguments);
  }

  return Art;

})(Neptune.Base));


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var isClass, log, ref;

ref = __webpack_require__(5), isClass = ref.isClass, log = ref.log;

module.exports = __webpack_require__(47);


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var Node, array, defineModule, escapeJavascriptString, find, log, merge, ref;

ref = __webpack_require__(5), array = ref.array, defineModule = ref.defineModule, log = ref.log, merge = ref.merge, escapeJavascriptString = ref.escapeJavascriptString, find = ref.find;

Node = __webpack_require__(19).Node;

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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171).addModules({
  IndentBlocks: __webpack_require__(169)
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var BabelBridge, Extensions,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BabelBridge = __webpack_require__(48);

module.exports = BabelBridge.Extensions || BabelBridge.addNamespace('Extensions', Extensions = (function(superClass) {
  extend(Extensions, superClass);

  function Extensions() {
    return Extensions.__super__.constructor.apply(this, arguments);
  }

  return Extensions;

})(Neptune.Base));


/***/ }),
/* 172 */
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

})(__webpack_require__(83));


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var BaseClass, ScratchNode, compactFlatten, defineModule, inspect, isPlainObject, isString, log, merge, pad, push, ref, toInspectedObjects, upperCamelCase,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(5), log = ref.log, defineModule = ref.defineModule, toInspectedObjects = ref.toInspectedObjects, isPlainObject = ref.isPlainObject, push = ref.push, isString = ref.isString, compactFlatten = ref.compactFlatten, inspect = ref.inspect, pad = ref.pad, upperCamelCase = ref.upperCamelCase, merge = ref.merge;

BaseClass = __webpack_require__(9).BaseClass;

defineModule(module, ScratchNode = (function(superClass) {
  extend(ScratchNode, superClass);

  ScratchNode._scatchNodes = [];

  ScratchNode._scatchNodesInUse = 0;

  ScratchNode.checkout = function(parentNode, ruleVariant) {
    if (this._scatchNodesInUse >= this._scatchNodes.length) {
      return this._scatchNodes[this._scatchNodesInUse++] = new ScratchNode(parentNode, ruleVariant);
    } else {
      return this._scatchNodes[this._scatchNodesInUse++].reset(parentNode, ruleVariant);
    }
  };

  ScratchNode.checkin = function(scratchNode) {
    if (scratchNode !== this._scatchNodes[--this._scatchNodesInUse]) {
      throw new Error("WTF");
    }
  };

  function ScratchNode(parent, ruleVariant) {
    this.matches = [];
    this.matchPatterns = [];
    this.reset(parent, ruleVariant);
  }

  ScratchNode.prototype.reset = function(parent1, ruleVariant1) {
    this.parent = parent1;
    this.ruleVariant = ruleVariant1;
    this._parser = this.parent._parser;
    this.offset = this.parent.getNextOffset() | 0;
    this.matchesLength = this.matchPatternsLength = this.matchLength = 0;
    this.variantNode = null;
    return this;
  };

  ScratchNode.getter("parser", {
    source: function() {
      return this._parser.source;
    },
    nextOffset: function() {
      return this.offset + this.matchLength;
    },
    inspectedObjects: function() {
      return {
        offset: this.offset,
        matchLength: this.matchLength,
        matches: toInspectedObjects(this.matches),
        matchPatterns: toInspectedObjects(this.matchPatterns)
      };
    }
  });

  ScratchNode.prototype.getNextText = function(length) {
    var nextOffset;
    nextOffset = this.getNextOffset();
    return this.source.slice(nextOffset, nextOffset + length);
  };

  ScratchNode.getter({
    firstPartialMatchParent: function() {
      return this.realNode.firstPartialMatchParent;
    },
    realNode: function() {
      return this.variantNode || (this.variantNode = new this.ruleVariant.VariantNodeClass(this.parent.realNode || this._parser, {
        ruleVariant: this.ruleVariant,
        matchLength: this.matchLength,
        matches: this.matchesLength > 0 && this.matches.slice(0, this.matchesLength),
        matchPatterns: this.matchPatternsLength > 0 && this.matchPatterns.slice(0, this.matchPatternsLength)
      }));
    }
  });

  ScratchNode.prototype.checkin = function() {
    return ScratchNode.checkin(this);
  };

  ScratchNode.prototype.subparse = function(subSource, options) {
    return this._parser.subparse(subSource, merge(options, {
      parentNode: this
    }));
  };

  ScratchNode.prototype.addMatch = function(pattern, match) {
    var ref1;
    if (!match) {
      return false;
    }
    if ((ref1 = this.variantNode) != null) {
      ref1.addMatch(pattern, match);
    }
    this.matches[this.matchesLength++] = match;
    this.matchPatterns[this.matchPatternsLength++] = pattern;
    this.matchLength = match.nextOffset - this.offset;
    return true;
  };

  ScratchNode.prototype._addToParentAsNonMatch = function() {
    return this.realNode._addToParentAsNonMatch();
  };

  return ScratchNode;

})(BaseClass));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var BabelBridgeCompileError, Node, NonMatch, Parser, Rule, Stats, compactFlatten, formattedInspect, getLineColumn, getLineColumnString, inspect, inspectLean, isClass, isFunction, isPlainArray, isPlainObject, log, max, merge, mergeInto, objectHasKeys, objectLength, objectWithout, peek, pluralize, pushIfNotPresent, ref, ref1, uniqueValues, upperCamelCase,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Rule = __webpack_require__(88);

ref = __webpack_require__(90), getLineColumn = ref.getLineColumn, getLineColumnString = ref.getLineColumnString;

Node = __webpack_require__(19).Node;

NonMatch = __webpack_require__(86);

Stats = __webpack_require__(20);

ref1 = __webpack_require__(5), isFunction = ref1.isFunction, peek = ref1.peek, log = ref1.log, isPlainObject = ref1.isPlainObject, isPlainArray = ref1.isPlainArray, merge = ref1.merge, compactFlatten = ref1.compactFlatten, objectLength = ref1.objectLength, inspect = ref1.inspect, inspectLean = ref1.inspectLean, pluralize = ref1.pluralize, isClass = ref1.isClass, isPlainArray = ref1.isPlainArray, upperCamelCase = ref1.upperCamelCase, mergeInto = ref1.mergeInto, objectWithout = ref1.objectWithout, uniqueValues = ref1.uniqueValues, formattedInspect = ref1.formattedInspect, max = ref1.max, inspect = ref1.inspect, pushIfNotPresent = ref1.pushIfNotPresent, uniqueValues = ref1.uniqueValues, objectHasKeys = ref1.objectHasKeys;

BabelBridgeCompileError = __webpack_require__(82);

module.exports = Parser = (function(superClass) {
  var addToExpectingInfo, firstLines, instanceRulesFunction, lastLines, rulesFunction;

  extend(Parser, superClass);

  Parser.repl = function() {
    return (__webpack_require__(47)).babelBridgeRepl(this);
  };

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
      nodeBaseClass = this.getNodeBaseClass();
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
      sharedNodeBaseClass = this.getNodeBaseClass().createSubclass(sharedNodeBaseClass);
    }
    results = [];
    for (ruleName in rules) {
      definition = rules[ruleName];
      results.push(this.addRule(ruleName, definition, sharedNodeBaseClass || this.getNodeBaseClass()));
    }
    return results;
  };

  Parser.rules = rulesFunction;

  Parser.prototype.rule = instanceRulesFunction = function(a, b) {
    return this["class"].rule(a, b);
  };

  Parser.prototype.rules = instanceRulesFunction;

  Parser.getNodeBaseClass = function() {
    return this._nodeBaseClass || (this._nodeBaseClass = isPlainObject(this.nodeBaseClass) ? (log({
      create: this.getName() + "NodeBaseClass"
    }), Node.createSubclass(merge({
      name: this.getName() + "NodeBaseClass"
    }, this.nodeBaseClass))) : this.nodeBaseClass || Node);
  };

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
      var ref2;
      return ((ref2 = this.parentParser) != null ? ref2.rootParser : void 0) || this;
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
    var failureIndex, k, match, matchLength, nonMatch, offset, originalMatchLength, originalOffset, parentNode, parser, ref2, rootNode, source, sourceMap, subparser;
    if (options == null) {
      options = {};
    }
    Stats.add("subparse");
    subparser = new this["class"];
    originalMatchLength = options.originalMatchLength, parentNode = options.parentNode, sourceMap = options.sourceMap, originalOffset = options.originalOffset;
    options.parentParser = this;
    if (match = subparser.parse(subsource, merge(options, {
      isSubparse: true,
      logParsingFailures: this._logParsingFailures
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
      ref2 = subparser._nonMatches;
      for (k in ref2) {
        nonMatch = ref2[k];
        rootNode = nonMatch.node;
        while (rootNode !== parentNode && rootNode.parent instanceof Node) {
          rootNode = rootNode.parent;
        }
        if (rootNode !== parentNode) {
          rootNode._parent = parentNode;
        }
        if (this._logParsingFailures) {
          this._addNonMatch(failureIndex, nonMatch);
        } else {
          this._failureIndex = max(this._failureIndex, failureIndex);
        }
      }
      return null;
    }
  };

  Parser.prototype.offsetInParentParserSource = function(suboffset) {
    var originalOffset, ref2, ref3, sourceMap;
    ref2 = this.options, sourceMap = ref2.sourceMap, originalOffset = (ref3 = ref2.originalOffset) != null ? ref3 : 0;
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

  Parser.prototype.colorString = function(clr, str) {
    if (this.options.color) {
      return ("" + str)[clr];
    } else {
      return str;
    }
  };


  /*
  OUT: on success, root Node of the parse tree, else null
  options:
    allowPartialMatch: true/false
   */

  Parser.prototype.parse = function(_source, options1) {
    var allowPartialMatch, isSubparse, logParsingFailures, ref2, result, rule, startRule;
    this._source = _source;
    this.options = options1 != null ? options1 : {};
    ref2 = this.options, this.parentParser = ref2.parentParser, allowPartialMatch = ref2.allowPartialMatch, rule = ref2.rule, isSubparse = ref2.isSubparse, logParsingFailures = ref2.logParsingFailures;
    startRule = this.getRule(rule);
    this._resetParserTracking();
    this._logParsingFailures = logParsingFailures;
    if ((result = startRule.parse(this)) && (result.matchLength === this._source.length || (allowPartialMatch && result.matchLength > 0))) {
      if (!isSubparse) {
        result.applyLabels();
      }
      return result;
    } else {
      if (!isSubparse) {
        if (logParsingFailures) {
          throw new BabelBridgeCompileError(result ? [this.colorString("gray", (this["class"].name + " only parsed: ") + this.colorString("black", (result.matchLength + " of " + this._source.length + " ") + this.colorString("gray", "characters"))), this.getParseFailureInfo(this.options)].join("\n") : this.getParseFailureInfo(this.options), this.parseFailureInfoObject);
        } else {
          return this.parse(this._source, merge(this.options, {
            logParsingFailures: true
          }));
        }
      }
    }
  };

  Parser.prototype.getRule = function(ruleName) {
    var rule;
    ruleName || (ruleName = this.rootRuleName);
    if (!ruleName) {
      throw new Error("No root rule defined.");
    }
    if (!(rule = this.rules[ruleName])) {
      throw new Error("Could not find rule: " + ruleName);
    }
    return rule;
  };

  addToExpectingInfo = function(node, into, value) {
    var m, name1, p, pm, ref2;
    if (node.parent) {
      into = addToExpectingInfo(node.parent, into);
    }
    return into[name1 = node.parseInfo] || (into[name1] = value ? value : (p = {}, ((ref2 = (pm = node.presentMatches)) != null ? ref2.length : void 0) > 0 ? p.matches = (function() {
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
    failureUrl: function() {
      return (this.options.sourceFile || '') + ":" + (getLineColumnString(this._source, this._failureIndex));
    },
    parseFailureInfoObject: function() {
      return merge({
        sourceFile: this.options.sourceFile,
        failureIndex: this._failureIndex,
        location: this.failureUrl
      }, getLineColumn(this._source, this._failureIndex));
    },
    parseFailureInfo: function(options) {
      var left, out, right, sourceAfter, sourceBefore, verbose;
      if (!this._source) {
        return;
      }
      verbose = options != null ? options.verbose : void 0;
      sourceBefore = lastLines(left = this._source.slice(0, this._failureIndex));
      sourceAfter = firstLines(right = this._source.slice(this._failureIndex));
      out = compactFlatten([
        "", this.colorString("gray", "Parsing error at " + (this.colorString("red", this.failureUrl))), "", this.colorString("gray", "Source:"), this.colorString("gray", "..."), "" + sourceBefore + (this.colorString("red", "<HERE>")) + (sourceAfter.replace(/[\s\n]+$/, '')), this.colorString("gray", "..."), "", this.getExpectingInfo(options), verbose ? formattedInspect({
          "partial-parse-tree": this.partialParseTree
        }, options) : void 0, ""
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
        var ref2, ref3, results;
        ref2 = this._nonMatches;
        results = [];
        for (k in ref2) {
          ref3 = ref2[k], patternElement = ref3.patternElement, node = ref3.node;
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
    expectingInfo: function(options) {
      var child, couldMatchRuleNames, expecting, firstPartialMatchParent, i, j, l, len, len1, len2, node, out, partialMatchingParents, pmp, ref2, ref3, ruleName, v;
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
      ref2 = this.partialParseTreeLeafNodes;
      for (i = 0, len = ref2.length; i < len; i++) {
        node = ref2[i];
        firstPartialMatchParent = node.firstPartialMatchParent;
        pushIfNotPresent(partialMatchingParents, firstPartialMatchParent);
      }
      couldMatchRuleNames = [];
      expecting = {};
      for (j = 0, len1 = partialMatchingParents.length; j < len1; j++) {
        pmp = partialMatchingParents[j];
        ref3 = pmp.matches;
        for (l = 0, len2 = ref3.length; l < len2; l++) {
          child = ref3[l];
          if (!child.isNonMatch) {
            continue;
          }
          if (ruleName = child.nonMatchingLeaf.ruleNameOrNull) {
            couldMatchRuleNames.push(ruleName);
          }
          expecting[child.nonMatchingLeaf.ruleNameOrPattern] = {
            "to-continue": pmp.ruleName,
            "started-at": getLineColumnString(this._source, pmp.absoluteOffset)
          };
        }
      }
      expecting = (function() {
        var len3, len4, o, q, ref4;
        if (objectHasKeys(expecting)) {
          out = {
            expecting: expecting
          };
          if (couldMatchRuleNames.length > 1) {
            out.rules = {};
            for (o = 0, len3 = couldMatchRuleNames.length; o < len3; o++) {
              ruleName = couldMatchRuleNames[o];
              ref4 = this.rules[ruleName]._variants;
              for (q = 0, len4 = ref4.length; q < len4; q++) {
                v = ref4[q];
                out.rules[ruleName] = v.patternString;
              }
            }
          }
          return out;
        } else {
          return {
            expecting: "end of input"
          };
        }
      }).call(this);
      return formattedInspect(expecting, options);
    }
  });

  Parser.prototype.tryPatternElement = function(patternElement, parseIntoNode, ruleVariant) {
    Stats.add("tryPatternElement");
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
    Stats.add("cacheMatch");
    this._getRuleParseCache(ruleName)[matchingNode.offset] = matchingNode;
    return matchingNode;
  };

  Parser.prototype._cacheNoMatch = function(ruleName, offset) {
    Stats.add("cacheNoMatch");
    this._getRuleParseCache(ruleName)[offset] = "no_match";
    return null;
  };

  Parser.prototype._resetParserTracking = function() {
    this._subparseInfo = null;
    this._logParsingFailures = false;
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
    var offset;
    if (!(this._matchingNegativeDepth === 0 && parseIntoNode.offset >= this._failureIndex && patternElement.isTokenPattern)) {
      return;
    }
    offset = parseIntoNode.offset;
    if (this._logParsingFailures) {
      parseIntoNode = parseIntoNode.getRealNode();
      return this._addNonMatch(offset, new NonMatch(parseIntoNode, patternElement));
    } else {
      return this._failureIndex = offset;
    }
  };

  Parser.prototype._addNonMatch = function(offset, nonMatch) {
    if (offset > this._failureIndex) {
      this._failureIndex = offset;
      this._nonMatches = {};
    }
    return this._nonMatches[nonMatch] = nonMatch;
  };

  return Parser;

})(__webpack_require__(9).BaseClass);


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48).includeInNamespace(__webpack_require__(168)).addModules({
  BabelBridgeCompileError: __webpack_require__(82),
  NonMatch: __webpack_require__(86),
  Parser: __webpack_require__(174),
  PatternElement: __webpack_require__(87),
  Repl: __webpack_require__(47),
  Rule: __webpack_require__(88),
  RuleVariant: __webpack_require__(89),
  Stats: __webpack_require__(20),
  Tools: __webpack_require__(90)
});

__webpack_require__(170);

__webpack_require__(19);


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript, Rules,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CaffeineScript = __webpack_require__(49);

module.exports = CaffeineScript.Rules || CaffeineScript.addNamespace('Rules', Rules = (function(superClass) {
  extend(Rules, superClass);

  function Rules() {
    return Rules.__super__.constructor.apply(this, arguments);
  }

  return Rules;

})(Neptune.Base));


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(92);
var route = __webpack_require__(178);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(92);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

// https://jsperf.com/object-keys-vs-for-in-with-closure/3
var models = Object.keys(conversions);

function buildGraph() {
	var graph = {};

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(93);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\D+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var clone = __webpack_require__(149);
var convert = __webpack_require__(177);
var string = __webpack_require__(179);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		if (this.values.alpha !== 1) {
			return this.values.hwb.concat([this.values.alpha]);
		}
		return this.values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var rgb = this.values.rgb;
		return rgb.concat([this.values.alpha]);
	},
	rgbaArrayNormalized: function () {
		var rgb = this.values.rgb;
		var glRgba = [];
		for (var i = 0; i < 3; i++) {
			glRgba[i] = rgb[i] / 255;
		}
		glRgba.push(this.values.alpha);
		return glRgba;
	},
	hslaArray: function () {
		var hsl = this.values.hsl;
		return hsl.concat([this.values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		this.values.hsl[2] += this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	darken: function (ratio) {
		this.values.hsl[2] -= this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	saturate: function (ratio) {
		this.values.hsl[1] += this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	desaturate: function (ratio) {
		this.values.hsl[1] -= this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	whiten: function (ratio) {
		this.values.hwb[1] += this.values.hwb[1] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	blacken: function (ratio) {
		this.values.hwb[2] += this.values.hwb[2] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		this.setValues('alpha', this.values.alpha - (this.values.alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		this.setValues('alpha', this.values.alpha + (this.values.alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hue = this.values.hsl[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		this.values.hsl[0] = hue;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		var col = new Color();
		col.values = clone(this.values);
		return col;
	}
};

Color.prototype.getValues = function (space) {
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = this.values[space][i];
	}

	if (this.values.alpha !== 1) {
		vals.a = this.values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var spaces = {
		rgb: ['red', 'green', 'blue'],
		hsl: ['hue', 'saturation', 'lightness'],
		hsv: ['hue', 'saturation', 'value'],
		hwb: ['hue', 'whiteness', 'blackness'],
		cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};

	var maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	};

	var i;
	var alpha = 1;
	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		this.values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	this.values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? this.values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
		this.values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			this.values[sname] = convert[space][sname](this.values[space]);
		}

		// cap values
		for (i = 0; i < sname.length; i++) {
			capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
			this.values[sname][i] = Math.round(capped);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	if (val === undefined) {
		// color.red()
		return this.values[space][index];
	} else if (val === this.values[space][index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	this.values[space][index] = val;
	this.setValues(space, this.values[space]);

	return this;
};

module.exports = Color;


/***/ }),
/* 181 */
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
	"version": "0.39.0"
};

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = require("art-object-tree-factory");

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("caffeine-mc");

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("repl");

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ })
/******/ ]);