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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./index.coffee ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./source/CaffeineScript */ 1);


/***/ }),
/* 1 */
/*!********************************************!*\
  !*** ./source/CaffeineScript/index.coffee ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./namespace */ 2);

module.exports.includeInNamespace(__webpack_require__(/*! ./CaffeineScript */ 10)).addModules({
  CaffeineScriptParser: __webpack_require__(/*! ./CaffeineScriptParser */ 83),
  CafParseNodeBaseClass: __webpack_require__(/*! ./CafParseNodeBaseClass */ 85),
  JavaScriptReservedWords: __webpack_require__(/*! ./JavaScriptReservedWords */ 20),
  Lib: __webpack_require__(/*! ./Lib */ 18),
  OperatorHelper: __webpack_require__(/*! ./OperatorHelper */ 38),
  Preprocessors: __webpack_require__(/*! ./Preprocessors */ 113),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 16),
  StnRegistry: __webpack_require__(/*! ./StnRegistry */ 19)
});

__webpack_require__(/*! ./Rules */ 86);

__webpack_require__(/*! ./SemanticTree */ 14);


/***/ }),
/* 2 */
/*!************************************************!*\
  !*** ./source/CaffeineScript/namespace.coffee ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CaffeineScript,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(/*! neptune-namespaces */ 3)).addNamespace('CaffeineScript', CaffeineScript = (function(superClass) {
  extend(CaffeineScript, superClass);

  function CaffeineScript() {
    return CaffeineScript.__super__.constructor.apply(this, arguments);
  }

  CaffeineScript.version = __webpack_require__(/*! ../../package.json */ 4).version;

  return CaffeineScript;

})(Neptune.PackageNamespace));

__webpack_require__(/*! ./Rules/namespace */ 5);

__webpack_require__(/*! ./SemanticTree/namespace */ 6);


/***/ }),
/* 3 */
/*!************************************************************************************!*\
  !*** external "require('neptune-namespaces' /* ABC - not inlining fellow NPM *_/)" ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('neptune-namespaces' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 4 */
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: author, config, dependencies, description, license, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"author":"Shane Brinkman-Davis Delamore, Imikimi LLC","config":{"blanket":{"pattern":"source"}},"dependencies":{"art-binary":"*","art-build-configurator":"*","art-object-tree-factory":"*","caffeine-eight":"*","caffeine-mc":"*","caffeine-script-runtime":"*","caffeine-source-map":"*","source-map":"^0.7.2"},"description":"CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that empowers you to get the most out of any JavaScript runtime.","license":"ISC","name":"caffeine-script","repository":{"type":"git","url":"git@github.com:shanebdavis/caffeine-script.git"},"scripts":{"build":"caf -v -p -C -c cafInCaf -o source","perf":"nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf","start":"webpack-dev-server --hot --inline --progress","test":"nn -s;mocha -u tdd","testInBrowser":"webpack-dev-server --progress"},"version":"0.58.7"};

/***/ }),
/* 5 */
/*!******************************************************!*\
  !*** ./source/CaffeineScript/Rules/namespace.coffee ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Rules,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(/*! ../namespace */ 2)).addNamespace('Rules', Rules = (function(superClass) {
  extend(Rules, superClass);

  function Rules() {
    return Rules.__super__.constructor.apply(this, arguments);
  }

  return Rules;

})(Neptune.PackageNamespace));


/***/ }),
/* 6 */
/*!*************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/namespace.coffee ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemanticTree,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(/*! ../namespace */ 2)).addNamespace('SemanticTree', SemanticTree = (function(superClass) {
  extend(SemanticTree, superClass);

  function SemanticTree() {
    return SemanticTree.__super__.constructor.apply(this, arguments);
  }

  return SemanticTree;

})(Neptune.PackageNamespace));

__webpack_require__(/*! ./PlaceholderStns/namespace */ 7);

__webpack_require__(/*! ./StnsGeneratingJs/namespace */ 8);

__webpack_require__(/*! ./TransformOnlyStns/namespace */ 9);


/***/ }),
/* 7 */
/*!*****************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/PlaceholderStns/namespace.coffee ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var PlaceholderStns,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(/*! ../namespace */ 6)).addNamespace('PlaceholderStns', PlaceholderStns = (function(superClass) {
  extend(PlaceholderStns, superClass);

  function PlaceholderStns() {
    return PlaceholderStns.__super__.constructor.apply(this, arguments);
  }

  return PlaceholderStns;

})(Neptune.PackageNamespace));


/***/ }),
/* 8 */
/*!******************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/namespace.coffee ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var StnsGeneratingJs,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(/*! ../namespace */ 6)).addNamespace('StnsGeneratingJs', StnsGeneratingJs = (function(superClass) {
  extend(StnsGeneratingJs, superClass);

  function StnsGeneratingJs() {
    return StnsGeneratingJs.__super__.constructor.apply(this, arguments);
  }

  return StnsGeneratingJs;

})(Neptune.PackageNamespace));


/***/ }),
/* 9 */
/*!*******************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/TransformOnlyStns/namespace.coffee ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TransformOnlyStns,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (__webpack_require__(/*! ../namespace */ 6)).addNamespace('TransformOnlyStns', TransformOnlyStns = (function(superClass) {
  extend(TransformOnlyStns, superClass);

  function TransformOnlyStns() {
    return TransformOnlyStns.__super__.constructor.apply(this, arguments);
  }

  return TransformOnlyStns;

})(Neptune.PackageNamespace));


/***/ }),
/* 10 */
/*!*************************************************!*\
  !*** ./source/CaffeineScript/CaffeineScript.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["log", "mergeInto"],
    [global, __webpack_require__(/*! art-standard-lib */ 13)],
    (log, mergeInto) => {
      __webpack_require__(/*! ./SemanticTree */ 14);
      return {
        version: __webpack_require__(/*! ../../package.json */ 4).version,
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
              transformedStn = (stn = (parseTree = __webpack_require__(/*! ./CaffeineScriptParser */ 83).parse(
                source,
                options
              )).getStn())
                .validateAll()
                .transform();
              return transformedStn.toJsUsingSourceNode({
                module: !bare,
                bare,
                inlineMap,
                sourceMap,
                sourceFile
              });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 11 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
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
/* 12 */
/*!*****************************************************************************************!*\
  !*** external "require('caffeine-script-runtime' /* ABC - not inlining fellow NPM *_/)" ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('caffeine-script-runtime' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 13 */
/*!**********************************************************************************!*\
  !*** external "require('art-standard-lib' /* ABC - not inlining fellow NPM *_/)" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-standard-lib' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 14 */
/*!*********************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/index.coffee ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./namespace */ 6);

module.exports.addModules({
  AccessorChainStn: __webpack_require__(/*! ./AccessorChainStn */ 15),
  BaseStn: __webpack_require__(/*! ./BaseStn */ 23),
  ScopeStnMixin: __webpack_require__(/*! ./ScopeStnMixin */ 27),
  UniqueIdentifierHandle: __webpack_require__(/*! ./UniqueIdentifierHandle */ 22),
  ValueBaseCaptureStn: __webpack_require__(/*! ./ValueBaseCaptureStn */ 21)
});

__webpack_require__(/*! ./PlaceholderStns */ 28);

__webpack_require__(/*! ./StnsGeneratingJs */ 31);

__webpack_require__(/*! ./TransformOnlyStns */ 78);


/***/ }),
/* 15 */
/*!****************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/AccessorChainStn.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["mergeInto", "isArray", "compactFlatten"],
    [global, __webpack_require__(/*! ../StandardImport */ 16)],
    (mergeInto, isArray, compactFlatten) => {
      let StnRegistry, AccessorChainStn;
      StnRegistry = __webpack_require__(/*! ../StnRegistry */ 19);
      return (AccessorChainStn = Caf.defClass(
        class AccessorChainStn extends __webpack_require__(/*! ./ValueBaseCaptureStn */ 21) {},
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 16 */
/*!*************************************************!*\
  !*** ./source/CaffeineScript/StandardImport.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return __webpack_require__(/*! art-standard-lib */ 13).merge(
    __webpack_require__(/*! art-class-system */ 17),
    __webpack_require__(/*! ./Lib */ 18),
    __webpack_require__(/*! art-standard-lib */ 13),
    {
      StnRegistry: __webpack_require__(/*! ./StnRegistry */ 19),
      javaScriptReservedWords: __webpack_require__(/*! ./JavaScriptReservedWords */ 20)
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 17 */
/*!**********************************************************************************!*\
  !*** external "require('art-class-system' /* ABC - not inlining fellow NPM *_/)" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-class-system' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 18 */
/*!**************************************!*\
  !*** ./source/CaffeineScript/Lib.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["escapeRegExp", "escapeJavascriptString"],
    [global, __webpack_require__(/*! art-standard-lib */ 13)],
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 19 */
/*!**********************************************!*\
  !*** ./source/CaffeineScript/StnRegistry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "isFunction", "isString", "Error", "formattedInspect"],
    [global, __webpack_require__(/*! art-standard-lib */ 13), __webpack_require__(/*! art-class-system */ 17)],
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 20 */
/*!**********************************************************!*\
  !*** ./source/CaffeineScript/JavaScriptReservedWords.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  let words, out;
  words = __webpack_require__(/*! art-standard-lib */ 13).w(
    "abstract  else        instanceof  super boolean   enum        int         switch break     export      interface   synchronized byte      extends     let         this case      false       long        throw catch     final       native      throws char      finally     new         transient class     float       null        true const     for         package     try continue  function    private     typeof debugger  goto        protected   var default   if          public      void delete    implements  return      volatile do        import      short       while double    in          static      with"
  );
  return Caf.each2(words, word => (out[word] = true), null, (out = {}));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 21 */
/*!*******************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/ValueBaseCaptureStn.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let UniqueIdentifierHandle, StnRegistry, ValueBaseCaptureStn;
    UniqueIdentifierHandle = __webpack_require__(/*! ./UniqueIdentifierHandle */ 22);
    StnRegistry = __webpack_require__(/*! ../StnRegistry */ 19);
    return (ValueBaseCaptureStn = Caf.defClass(
      class ValueBaseCaptureStn extends __webpack_require__(/*! ./BaseStn */ 23) {},
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 22 */
/*!**********************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/UniqueIdentifierHandle.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["BaseClass", "inspectedObjectLiteral", "inspect"],
    [global, __webpack_require__(/*! ../StandardImport */ 16)],
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 23 */
/*!*******************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/BaseStn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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
      "log"
    ],
    [
      global,
      __webpack_require__(/*! ../StandardImport */ 16),
      __webpack_require__(/*! art-object-tree-factory */ 24),
      __webpack_require__(/*! caffeine-source-map */ 25),
      __webpack_require__(/*! art-binary */ 26)
    ],
    (
      BaseClass,
      objectWithout,
      toInspectedObjects,
      objectKeyCount,
      createObjectTreeFactory,
      SourceNode,
      Error,
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
            return __webpack_require__(/*! ../StnRegistry */ 19).register(
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
              sourceRoot,
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
              sourceRoot,
              sourceFile = this.sourceFile
            } = options);
            sourceNode = this.toSourceNode(options);
            out = {
              compiled:
                inlineMap || sourceMap
                  ? (({ js, sourceMap } = sourceNode.generate(source, {
                      sourceFile,
                      sourceRoot,
                      inlineMap
                    })),
                    { js, sourceMap })
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 24 */
/*!*****************************************************************************************!*\
  !*** external "require('art-object-tree-factory' /* ABC - not inlining fellow NPM *_/)" ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-object-tree-factory' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 25 */
/*!*************************************************************************************!*\
  !*** external "require('caffeine-source-map' /* ABC - not inlining fellow NPM *_/)" ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('caffeine-source-map' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 26 */
/*!****************************************************************************!*\
  !*** external "require('art-binary' /* ABC - not inlining fellow NPM *_/)" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('art-binary' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 27 */
/*!*************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/ScopeStnMixin.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["lowerCamelCase", "merge", "Error", "log", "isString", "mergeInto"],
    [global, __webpack_require__(/*! ../StandardImport */ 16)],
    (lowerCamelCase, merge, Error, log, isString, mergeInto) => {
      let UniqueIdentifierHandle;
      UniqueIdentifierHandle = __webpack_require__(/*! ./UniqueIdentifierHandle */ 22);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 28 */
/*!*************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/PlaceholderStns/index.coffee ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./namespace */ 7);

module.exports.addModules({
  ComprehensionValueClauseStn: __webpack_require__(/*! ./ComprehensionValueClauseStn */ 29),
  SemanticTokenStn: __webpack_require__(/*! ./SemanticTokenStn */ 30)
});


/***/ }),
/* 29 */
/*!*******************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/PlaceholderStns/ComprehensionValueClauseStn.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ComprehensionValueClauseStn;
    return (ComprehensionValueClauseStn = Caf.defClass(
      class ComprehensionValueClauseStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 30 */
/*!********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/PlaceholderStns/SemanticTokenStn.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let SemanticTokenStn;
    return (SemanticTokenStn = Caf.defClass(
      class SemanticTokenStn extends __webpack_require__(/*! ../BaseStn */ 23) {
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 31 */
/*!**************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/index.coffee ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./namespace */ 8);

module.exports.addModules({
  AccessorStn: __webpack_require__(/*! ./AccessorStn */ 32),
  ArrayDestructuringStn: __webpack_require__(/*! ./ArrayDestructuringStn */ 33),
  ArraySpreadElementStn: __webpack_require__(/*! ./ArraySpreadElementStn */ 34),
  ArrayStn: __webpack_require__(/*! ./ArrayStn */ 35),
  AssignmentStn: __webpack_require__(/*! ./AssignmentStn */ 36),
  BinaryOperatorStn: __webpack_require__(/*! ./BinaryOperatorStn */ 37),
  CatchStn: __webpack_require__(/*! ./CatchStn */ 39),
  ClassStn: __webpack_require__(/*! ./ClassStn */ 40),
  ControlOperatorStn: __webpack_require__(/*! ./ControlOperatorStn */ 41),
  DestructuringAssignmentStn: __webpack_require__(/*! ./DestructuringAssignmentStn */ 42),
  DestructuringIdentifierStn: __webpack_require__(/*! ./DestructuringIdentifierStn */ 43),
  DoStn: __webpack_require__(/*! ./DoStn */ 44),
  FunctionDefinitionArgsStn: __webpack_require__(/*! ./FunctionDefinitionArgsStn */ 45),
  FunctionDefinitionArgStn: __webpack_require__(/*! ./FunctionDefinitionArgStn */ 46),
  FunctionDefinitionStn: __webpack_require__(/*! ./FunctionDefinitionStn */ 47),
  FunctionInvocationStn: __webpack_require__(/*! ./FunctionInvocationStn */ 48),
  GlobalIdentifierStn: __webpack_require__(/*! ./GlobalIdentifierStn */ 49),
  IdentifierStn: __webpack_require__(/*! ./IdentifierStn */ 50),
  ImportBodyStn: __webpack_require__(/*! ./ImportBodyStn */ 51),
  ImportStn: __webpack_require__(/*! ./ImportStn */ 52),
  InterpolatedStringStn: __webpack_require__(/*! ./InterpolatedStringStn */ 53),
  LabeledDestructuringTargetStn: __webpack_require__(/*! ./LabeledDestructuringTargetStn */ 54),
  NewInstanceStn: __webpack_require__(/*! ./NewInstanceStn */ 55),
  NumberLiteralStn: __webpack_require__(/*! ./NumberLiteralStn */ 56),
  ObjectDestructuringStn: __webpack_require__(/*! ./ObjectDestructuringStn */ 57),
  ObjectLiteralAccessorStn: __webpack_require__(/*! ./ObjectLiteralAccessorStn */ 58),
  ObjectPropNameStn: __webpack_require__(/*! ./ObjectPropNameStn */ 59),
  ObjectPropValueStn: __webpack_require__(/*! ./ObjectPropValueStn */ 60),
  ObjectStn: __webpack_require__(/*! ./ObjectStn */ 61),
  ReferenceStn: __webpack_require__(/*! ./ReferenceStn */ 62),
  RegExpStn: __webpack_require__(/*! ./RegExpStn */ 63),
  RequireStn: __webpack_require__(/*! ./RequireStn */ 64),
  RootStn: __webpack_require__(/*! ./RootStn */ 66),
  SimpleLiteralStn: __webpack_require__(/*! ./SimpleLiteralStn */ 68),
  StatementsStn: __webpack_require__(/*! ./StatementsStn */ 67),
  StringStn: __webpack_require__(/*! ./StringStn */ 69),
  SuperStn: __webpack_require__(/*! ./SuperStn */ 70),
  SwitchStn: __webpack_require__(/*! ./SwitchStn */ 71),
  SwitchWhenStn: __webpack_require__(/*! ./SwitchWhenStn */ 72),
  ThisStn: __webpack_require__(/*! ./ThisStn */ 73),
  ThrowStn: __webpack_require__(/*! ./ThrowStn */ 74),
  TryStn: __webpack_require__(/*! ./TryStn */ 75),
  UnaryOperatorStn: __webpack_require__(/*! ./UnaryOperatorStn */ 76),
  UndefinedStn: __webpack_require__(/*! ./UndefinedStn */ 77)
});


/***/ }),
/* 32 */
/*!****************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/AccessorStn.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    Error => {
      let AccessorStn;
      return (AccessorStn = Caf.defClass(
        class AccessorStn extends __webpack_require__(/*! ../AccessorChainStn */ 15) {
          constructor(props, children) {
            super(...arguments);
            if (!(children.length === 2)) {
              throw new Error("expecting 2 children");
            }
            this.value = children[0];
            this.key = children[1];
            if (!this.key) {
              throw new Error("expecting second child to be a key");
            }
          }
        },
        function(AccessorStn, classSuper, instanceSuper) {
          this.getter({
            existanceTest: function() {
              return this.props.existanceTest;
            },
            isAccessor: function() {
              return true;
            },
            propName: function() {
              return this.key.identifier;
            }
          });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 33 */
/*!**************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ArrayDestructuringStn.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ArrayDestructuringStn;
    return (ArrayDestructuringStn = Caf.defClass(
      class ArrayDestructuringStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 34 */
/*!**************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ArraySpreadElementStn.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ArraySpreadElementStn;
    return (ArraySpreadElementStn = Caf.defClass(
      class ArraySpreadElementStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(ArraySpreadElementStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function() {
          return this.createSourceNode("...", this.childrenToSourceNodes());
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 35 */
/*!*************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ArrayStn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ArrayStn;
    return (ArrayStn = Caf.defClass(
      class ArrayStn extends __webpack_require__(/*! ../BaseStn */ 23) {
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 36 */
/*!******************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/AssignmentStn.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, supportedOperatorsRegExp, AssignmentStn;
    SemanticTree = __webpack_require__(/*! ../../StnRegistry */ 19);
    supportedOperatorsRegExp = /^([-+*\/%^|]|<<|>>|>>>|)$/;
    return (AssignmentStn = Caf.defClass(
      class AssignmentStn extends __webpack_require__(/*! ../AccessorChainStn */ 15) {
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 37 */
/*!**********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/BinaryOperatorStn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "operatorIsInfixJs",
      "binaryOperatorToSourceNodeArray",
      "getOpPrecidence",
      "merge",
      "getPrecidenceLevelIsLeftAssociative",
      "Error",
      "formattedInspect"
    ],
    [global, __webpack_require__(/*! ../../StandardImport */ 16), __webpack_require__(/*! ../../OperatorHelper */ 38)],
    (
      operatorIsInfixJs,
      binaryOperatorToSourceNodeArray,
      getOpPrecidence,
      merge,
      getPrecidenceLevelIsLeftAssociative,
      Error,
      formattedInspect
    ) => {
      let BinaryOperatorStn;
      return (BinaryOperatorStn = Caf.defClass(
        class BinaryOperatorStn extends __webpack_require__(/*! ../BaseStn */ 23) {
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
            let commonSubToSourceNodeProps,
              out,
              identifier,
              parentOperatorPrecidence;
            commonSubToSourceNodeProps = { expression: true, isOperand: true };
            out = (() => {
              switch (false) {
                case !(this.operator === "?" && this.uniqueIdentifierHandle):
                  ({ identifier } = this.uniqueIdentifierHandle);
                  return [
                    "((",
                    identifier,
                    " = ",
                    this.left.toSourceNode(commonSubToSourceNodeProps),
                    ") != null ? ",
                    identifier,
                    " : ",
                    this.right.toSourceNode(commonSubToSourceNodeProps),
                    ")"
                  ];
                case !!operatorIsInfixJs(this.operator):
                  return binaryOperatorToSourceNodeArray(
                    this.operator,
                    this.left.toSourceNode(commonSubToSourceNodeProps),
                    this.right.toSourceNode(commonSubToSourceNodeProps),
                    this.left
                  );
                default:
                  parentOperatorPrecidence = getOpPrecidence(this.operator);
                  return binaryOperatorToSourceNodeArray(
                    this.operator,
                    this.left.toSourceNode(
                      merge(commonSubToSourceNodeProps, {
                        subExpression: true,
                        isLeftOperand: true,
                        parentOperatorPrecidence
                      })
                    ),
                    this.right.toSourceNode(
                      merge(commonSubToSourceNodeProps, {
                        subExpression: true,
                        isLeftOperand: false,
                        parentOperatorPrecidence
                      })
                    ),
                    this.left
                  );
              }
            })();
            return options && this._needsParens(options)
              ? this.createSourceNode("(", out, ")")
              : this.createSourceNode(out);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 38 */
/*!*************************************************!*\
  !*** ./source/CaffeineScript/OperatorHelper.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "arrayWithout"],
    [global, __webpack_require__(/*! ./StandardImport */ 16)],
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 39 */
/*!*************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/CatchStn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let CatchStn;
    return (CatchStn = Caf.defClass(
      class CatchStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 40 */
/*!*************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ClassStn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "merge", "Error"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (compactFlatten, merge, Error) => {
      let SemanticTree, ClassStn;
      SemanticTree = __webpack_require__(/*! ../../StnRegistry */ 19);
      return (ClassStn = Caf.defClass(
        class ClassStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
                    propNameStn.propName === "constructor"
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
            className = classNameStn.identifier;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 41 */
/*!***********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ControlOperatorStn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "formattedInspect", "StnRegistry"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (Error, formattedInspect, StnRegistry) => {
      let ControlOperatorStn;
      return (ControlOperatorStn = Caf.defClass(
        class ControlOperatorStn extends __webpack_require__(/*! ../BaseStn */ 23) {
          constructor(props, children) {
            let cafTemp, cafTemp1, cafTemp2;
            super(...arguments);
            this.operand = (cafTemp = props.operand) != null ? cafTemp : "if";
            if (this.labeledChildren.expression) {
              this.expression = this.labeledChildren.expression;
              this.body =
                (cafTemp1 = this.labeledChildren.body) != null
                  ? cafTemp1
                  : StnRegistry.UndefinedStn();
              this.elseBody = this.labeledChildren.elseBody;
            } else {
              this.expression = children[0];
              this.body =
                (cafTemp2 = children[1]) != null
                  ? cafTemp2
                  : StnRegistry.UndefinedStn();
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
                  return this.elseBody
                    ? (() => {
                        throw new Error(
                          `else not expected after ${Caf.toString(
                            this.operand
                          )}`
                        );
                      })()
                    : undefined;
                case "if":
                case "unless":
                  return null;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 42 */
/*!*******************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/DestructuringAssignmentStn.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let DestructuringAssignmentStn;
    return (DestructuringAssignmentStn = Caf.defClass(
      class DestructuringAssignmentStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 43 */
/*!*******************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/DestructuringIdentifierStn.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let DestructuringIdentifierStn;
    return (DestructuringIdentifierStn = Caf.defClass(
      class DestructuringIdentifierStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(DestructuringIdentifierStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          this.scope.addIdentifierAssigned(
            this.labeledChildren.identifier.identifier
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 44 */
/*!**********************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/DoStn.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Object"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    Object => {
      let DoStn;
      return (DoStn = Caf.defClass(
        class DoStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(DoStn, classSuper, instanceSuper) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 45 */
/*!******************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/FunctionDefinitionArgsStn.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let FunctionDefinitionArgsStn;
    return (FunctionDefinitionArgsStn = Caf.defClass(
      class FunctionDefinitionArgsStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 46 */
/*!*****************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/FunctionDefinitionArgStn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let FunctionDefinitionArgStn;
    return (FunctionDefinitionArgStn = Caf.defClass(
      class FunctionDefinitionArgStn extends __webpack_require__(/*! ../BaseStn */ 23) {
        constructor(props, children) {
          super(...arguments);
          this.assignThisProperty = props.assignThisProperty;
          this.rest = props.rest;
          this.target = this.labeledChildren.target || children[0];
          this.defaultValue = children[1];
        }
      },
      function(FunctionDefinitionArgStn, classSuper, instanceSuper) {
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
              } = __webpack_require__(/*! ../../StnRegistry */ 19)),
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 47 */
/*!**************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/FunctionDefinitionStn.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "merge", "Error"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (compactFlatten, merge, Error) => {
      let StnRegistry, FunctionDefinitionStn;
      StnRegistry = __webpack_require__(/*! ../../StnRegistry */ 19);
      return (FunctionDefinitionStn = Caf.defClass(
        class FunctionDefinitionStn extends __webpack_require__(/*! ../ScopeStnMixin */ 27)(
          __webpack_require__(/*! ../BaseStn */ 23)
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
                } = __webpack_require__(/*! ../../StnRegistry */ 19)),
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
            } = __webpack_require__(/*! ../../StnRegistry */ 19));
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
              isOperand,
              returnAction,
              argsSourceNode,
              bodySourceNode,
              cafTemp,
              cafBase,
              cafBase1;
            ({ isConstructor, bound, returnIgnored } = this.props);
            if (options) {
              ({ statement, isOperand } = options);
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
                ? this.createSourceNode(
                    isOperand ? "(" : undefined,
                    argsSourceNode,
                    " => ",
                    bodySourceNode,
                    isOperand ? ")" : undefined
                  )
                : this.createSourceNode(
                    isOperand ? "(" : undefined,
                    argsSourceNode,
                    " => {",
                    this.autoLetsForSourceNode,
                    bodySourceNode,
                    "}",
                    isOperand ? ")" : undefined
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
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 48 */
/*!**************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/FunctionInvocationStn.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    Error => {
      let SemanticTree, FunctionInvocationStn;
      SemanticTree = __webpack_require__(/*! ./namespace */ 8);
      return (FunctionInvocationStn = Caf.defClass(
        class FunctionInvocationStn extends __webpack_require__(/*! ../AccessorChainStn */ 15) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 49 */
/*!************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/GlobalIdentifierStn.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let GlobalIdentifierStn;
    return (GlobalIdentifierStn = Caf.defClass(
      class GlobalIdentifierStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(GlobalIdentifierStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(this.props.identifier);
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 50 */
/*!******************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/IdentifierStn.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    identifierRegexp => {
      let IdentifierStn;
      return (IdentifierStn = Caf.defClass(
        class IdentifierStn extends __webpack_require__(/*! ../BaseStn */ 23) {
          constructor() {
            let cafTemp, cafBase;
            super(...arguments);
            if (!this.props.identifier) {
              (cafTemp = (cafBase = this.props).identifierHandle) != null
                ? cafTemp
                : (cafBase.identifierHandle = new (__webpack_require__(/*! ../UniqueIdentifierHandle */ 22))(
                    this.props.preferredIdentifier,
                    this.props.addToLets
                  ));
            }
          }
        },
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
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              (this.props.identifierHandle || this.props).identifier
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 51 */
/*!******************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ImportBodyStn.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ImportStn, ImportBodyStn;
    ImportStn = __webpack_require__(/*! ./ImportStn */ 52);
    return (ImportBodyStn = Caf.defClass(
      class ImportBodyStn extends __webpack_require__(/*! ../ScopeStnMixin */ 27)(
        __webpack_require__(/*! ../BaseStn */ 23)
      ) {},
      function(ImportBodyStn, classSuper, instanceSuper) {
        this.prototype.isImports = true;
        this.prototype.toSourceNode = function(options) {
          return this.children[0].toSourceNode(options);
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 52 */
/*!**************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ImportStn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["arrayWithoutLast", "Object", "compactFlatten"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (arrayWithoutLast, Object, compactFlatten) => {
      let ImportStn;
      return (ImportStn = Caf.defClass(
        class ImportStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 53 */
/*!**************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/InterpolatedStringStn.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    peek => {
      let InterpolatedStringStn;
      return (InterpolatedStringStn = Caf.defClass(
        class InterpolatedStringStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
              Caf.array(this.children, c => c.toInterpolatedBodySourceNode()),
              "`"
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 54 */
/*!**********************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/LabeledDestructuringTargetStn.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let LabeledDestructuringTargetStn;
    return (LabeledDestructuringTargetStn = Caf.defClass(
      class LabeledDestructuringTargetStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(LabeledDestructuringTargetStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function(options) {
          return Caf.exists(options) && options.restructuring
            ? this.children[1].toSourceNode(options)
            : this.childrenToSourceNodes(": ");
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 55 */
/*!*******************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/NewInstanceStn.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let NewInstanceStn;
    return (NewInstanceStn = Caf.defClass(
      class NewInstanceStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(NewInstanceStn, classSuper, instanceSuper) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 56 */
/*!*********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/NumberLiteralStn.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  let NumberLiteralStn;
  return (NumberLiteralStn = Caf.defClass(
    class NumberLiteralStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
    }
  ));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 57 */
/*!***************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ObjectDestructuringStn.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ObjectDestructuringStn;
    return (ObjectDestructuringStn = Caf.defClass(
      class ObjectDestructuringStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 58 */
/*!*****************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ObjectLiteralAccessorStn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ObjectLiteralAccessorStn;
    return (ObjectLiteralAccessorStn = Caf.defClass(
      class ObjectLiteralAccessorStn extends __webpack_require__(/*! ../BaseStn */ 23) {
        constructor(props, children) {
          super(...arguments);
          this.key = children[0];
        }
      },
      function(ObjectLiteralAccessorStn, classSuper, instanceSuper) {
        this.getter({
          existanceTest: function() {
            return this.props.existanceTest;
          },
          isAccessor: function() {
            return true;
          }
        });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 59 */
/*!**********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ObjectPropNameStn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp", "peek", "escapePropName"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (identifierRegexp, peek, escapePropName) => {
      let ObjectPropNameStn;
      return (ObjectPropNameStn = Caf.defClass(
        class ObjectPropNameStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 60 */
/*!***********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ObjectPropValueStn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "peek",
      "Error",
      "javaScriptReservedWords",
      "identifierRegexp",
      "present",
      "isString"
    ],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (
      peek,
      Error,
      javaScriptReservedWords,
      identifierRegexp,
      present,
      isString
    ) => {
      let ObjectPropValueStn;
      return (ObjectPropValueStn = Caf.defClass(
        class ObjectPropValueStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 61 */
/*!**************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ObjectStn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let StnRegistry, ObjectStn;
    StnRegistry = __webpack_require__(/*! ../../StnRegistry */ 19);
    return (ObjectStn = Caf.defClass(
      class ObjectStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(ObjectStn, classSuper, instanceSuper) {
        let splitObjectsAtSameProps;
        this.getter({
          isEmptyObjectLiteral: function() {
            return !this.children || this.children.length === 0;
          }
        });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 62 */
/*!*****************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ReferenceStn.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ReferenceStn;
    return (ReferenceStn = Caf.defClass(
      class ReferenceStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(ReferenceStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          if (this.props.identifierHandle) {
            this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
          } else {
            this.scope.addIdentifierUsed(this.propName);
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
        this.prototype.toSourceNode = function(options) {
          return this.createSourceNode(this.propName);
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 63 */
/*!**************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/RegExpStn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["isString"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16), __webpack_require__(/*! ../../Lib */ 18)],
    isString => {
      let RegExpStn;
      return (RegExpStn = Caf.defClass(
        class RegExpStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(RegExpStn, classSuper, instanceSuper) {
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
                      : child.toInterpolatedBodySourceNode();
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 64 */
/*!***************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/RequireStn.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    peek => {
      let findModuleSync, RequireStn;
      ({ findModuleSync } = __webpack_require__(/*! caffeine-mc */ 65));
      return (RequireStn = Caf.defClass(
        class RequireStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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
          this.prototype.toSourceNode = function() {
            let requireString;
            ({ requireString } = this);
            return this.createSourceNode(
              `require('${Caf.toString(requireString)}')`
            ).withProps({
              moduleDependencies: {
                [`${Caf.toString(this.rawRequireString)}`]: requireString
              }
            });
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 65 */
/*!*****************************************************************************!*\
  !*** external "require('caffeine-mc' /* ABC - not inlining fellow NPM *_/)" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('caffeine-mc' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 66 */
/*!************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/RootStn.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten", "present"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (compactFlatten, present) => {
      let StatementsStn, RootStn;
      StatementsStn = __webpack_require__(/*! ./StatementsStn */ 67);
      return (RootStn = Caf.defClass(
        class RootStn extends __webpack_require__(/*! ../ScopeStnMixin */ 27)(
          __webpack_require__(/*! ../BaseStn */ 23)
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
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 67 */
/*!******************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/StatementsStn.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16), __webpack_require__(/*! ../../Lib */ 18)],
    Error => {
      let StatementsStn;
      return (StatementsStn = Caf.defClass(
        class StatementsStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(StatementsStn, classSuper, instanceSuper) {
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
              : (generateStatements = !expression);
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
                      ? ((childExpression = c.toSourceNode({
                          expression: true
                        })),
                        returnAction.length > 0
                          ? [returnAction, " ", childExpression]
                          : childExpression)
                      : ((() => {
                          throw new Error("what uses this conditional branch?");
                        })(),
                        c.toSourceNode({ generateReturnStatement: true }))
                    : generateStatements
                      ? c.toSourceNode({
                          statement: !classBody,
                          generateStatements: false
                        })
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
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 68 */
/*!*********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/SimpleLiteralStn.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  let SimpleLiteralStn;
  return (SimpleLiteralStn = Caf.defClass(
    class SimpleLiteralStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
    function(SimpleLiteralStn, classSuper, instanceSuper) {
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
    }
  ));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 69 */
/*!**************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/StringStn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["deescapeSpaces", "escapeUnescaped", "escapeMustEscapes"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16), __webpack_require__(/*! ../../Lib */ 18)],
    (deescapeSpaces, escapeUnescaped, escapeMustEscapes) => {
      let StringStn;
      return (StringStn = Caf.defClass(
        class StringStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(StringStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function(options) {
            return this.createSourceNode(this.getJsLiteral(options));
          };
          this.getter({
            propName: function() {
              return this.jsLiteral;
            },
            jsLiteral: function(options) {
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
            }
          });
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
          this.prototype.toInterpolatedBodySourceNode = function() {
            return deescapeSpaces(
              escapeUnescaped(escapeMustEscapes(this.value), "`$\n")
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 70 */
/*!*************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/SuperStn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "isString", "merge"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (Error, isString, merge) => {
      let SuperStn;
      return (SuperStn = Caf.defClass(
        class SuperStn extends __webpack_require__(/*! ../BaseStn */ 23) {
          constructor(props, args) {
            super(...arguments);
            this.args = args;
            if (this.args.length === 1 && this.args[0].props.implicitArray) {
              this.args = this.args[0].children;
            }
          }
        },
        function(SuperStn, classSuper, instanceSuper) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 71 */
/*!**************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/SwitchStn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["arrayBetweenEach"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    arrayBetweenEach => {
      let SwitchStn;
      return (SwitchStn = Caf.defClass(
        class SwitchStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(SwitchStn, classSuper, instanceSuper) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 72 */
/*!******************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/SwitchWhenStn.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let SwitchWhenStn;
    return (SwitchWhenStn = Caf.defClass(
      class SwitchWhenStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(SwitchWhenStn, classSuper, instanceSuper) {
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 73 */
/*!************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ThisStn.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["identifierRegexp", "escapeJavascriptString", "peek"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (identifierRegexp, escapeJavascriptString, peek) => {
      let ThisStn;
      return (ThisStn = Caf.defClass(
        class ThisStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(ThisStn, classSuper, instanceSuper) {
          this.getter({
            identifier: function() {
              let id, cafBase;
              return (id = this.props.identifier)
                ? identifierRegexp.test(id)
                  ? id
                  : escapeJavascriptString(id)
                : Caf.exists((cafBase = peek(this.children))) &&
                    cafBase.identifier;
            },
            propName: function() {
              let cafTemp;
              return (cafTemp = this.identifier) != null ? cafTemp : "this";
            }
          });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 74 */
/*!*************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ThrowStn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ThrowStn;
    return (ThrowStn = Caf.defClass(
      class ThrowStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(ThrowStn, classSuper, instanceSuper) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 75 */
/*!***********************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/TryStn.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["StnRegistry"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    StnRegistry => {
      let TryStn;
      return (TryStn = Caf.defClass(
        class TryStn extends __webpack_require__(/*! ../BaseStn */ 23) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 76 */
/*!*********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/UnaryOperatorStn.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let UnaryOperatorStn;
    return (UnaryOperatorStn = Caf.defClass(
      class UnaryOperatorStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 77 */
/*!*****************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/UndefinedStn.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let UndefinedStn;
    return (UndefinedStn = Caf.defClass(
      class UndefinedStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(UndefinedStn, classSuper, instanceSuper) {
        this.prototype.toSourceNode = function() {
          return this.createSourceNode("undefined");
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 78 */
/*!***************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/TransformOnlyStns/index.coffee ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./namespace */ 9);

module.exports.addModules({
  CaptureStn: __webpack_require__(/*! ./CaptureStn */ 79),
  ComprehensionStn: __webpack_require__(/*! ./ComprehensionStn */ 80),
  ExtractStn: __webpack_require__(/*! ./ExtractStn */ 81),
  ExtractToIdentifierStn: __webpack_require__(/*! ./ExtractToIdentifierStn */ 82)
});


/***/ }),
/* 79 */
/*!****************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/TransformOnlyStns/CaptureStn.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, CaptureStn;
    SemanticTree = __webpack_require__(/*! ../../StnRegistry */ 19);
    return (CaptureStn = Caf.defClass(
      class CaptureStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 80 */
/*!**********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/TransformOnlyStns/ComprehensionStn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "lowerCamelCase", "StnRegistry", "Object", "String"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (Error, lowerCamelCase, StnRegistry, Object, String) => {
      let SemanticTree, ComprehensionStn;
      SemanticTree = __webpack_require__(/*! ../../StnRegistry */ 19);
      return (ComprehensionStn = Caf.defClass(
        class ComprehensionStn extends __webpack_require__(/*! ../ScopeStnMixin */ 27)(
          __webpack_require__(/*! ../BaseStn */ 23)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 81 */
/*!****************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/TransformOnlyStns/ExtractStn.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let SemanticTree, ExtractStn;
    SemanticTree = __webpack_require__(/*! ../../StnRegistry */ 19);
    return (ExtractStn = Caf.defClass(
      class ExtractStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(ExtractStn, classSuper, instanceSuper) {
        this.prototype.transform = function(extractSourceFromParent) {
          let StatementsStn,
            AssignmentStn,
            AccessorStn,
            IdentifierStn,
            FunctionInvocationStn,
            ControlOperatorStn,
            extractSource,
            extractActions,
            conditional,
            complexSource,
            doExtract;
          ({
            StatementsStn,
            AssignmentStn,
            AccessorStn,
            IdentifierStn,
            FunctionInvocationStn,
            ControlOperatorStn
          } = SemanticTree);
          ({ extractSource, extractActions } = this.labeledChildren);
          extractSource =
            extractSourceFromParent != null
              ? extractSourceFromParent
              : extractSource;
          ({ conditional } = this.props);
          return StatementsStn(
            !(
              conditional ||
              extractSource.type === "Reference" ||
              extractSource.type === "Identifier"
            )
              ? ((complexSource = extractSource),
                AssignmentStn((extractSource = IdentifierStn()), complexSource))
              : undefined,
            true
              ? ((doExtract = Caf.array(extractActions, (child, i) => {
                  let extractChild, uniqueIdentifier;
                  return Caf.is((extractChild = child), ExtractStn)
                    ? [
                        AssignmentStn(
                          (uniqueIdentifier = IdentifierStn()),
                          extractChild.labeledChildren.extractSource.getTransformedExtractionStns(
                            extractSource
                          )
                        ),
                        extractChild.transform(uniqueIdentifier)
                      ]
                    : AssignmentStn(
                        child.assignToIdentifierStn,
                        child.getTransformedExtractionStns(extractSource)
                      );
                })),
                conditional
                  ? ControlOperatorStn(
                      FunctionInvocationStn(
                        IdentifierStn({ identifier: "Caf.exists" }),
                        extractSource
                      ),
                      doExtract
                    )
                  : doExtract)
              : undefined
          );
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 82 */
/*!****************************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/TransformOnlyStns/ExtractToIdentifierStn.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["peek"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    peek => {
      let SemanticTree, ExtractToIdentifierStn;
      SemanticTree = __webpack_require__(/*! ../../StnRegistry */ 19);
      return (ExtractToIdentifierStn = Caf.defClass(
        class ExtractToIdentifierStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(ExtractToIdentifierStn, classSuper, instanceSuper) {
          this.getter({
            assignToIdentifierStn: function() {
              let cafTemp, cafTemp1;
              return (cafTemp =
                (cafTemp1 = this.extractAs) != null
                  ? cafTemp1
                  : peek(this.extractPathExtensions)) != null
                ? cafTemp
                : this.bastIdentifier;
            },
            extractAs: function() {
              return this.labeledChildren.extractAs;
            },
            extractDefault: function() {
              return this.labeledChildren.extractDefault;
            },
            bastIdentifier: function() {
              return this.labeledChildren.bastIdentifier;
            },
            extractPathExtensions: function() {
              let extractPathExtensions, extractPathExtension;
              ({
                extractPathExtensions,
                extractPathExtension
              } = this.labeledChildren);
              return extractPathExtensions != null
                ? extractPathExtensions
                : extractPathExtension && [extractPathExtension];
            }
          });
          this.prototype.getSourceValueStn = function(extractSource) {
            let stn, extensions;
            stn = SemanticTree.AccessorStn(extractSource, this.bastIdentifier);
            return (extensions = this.extractPathExtensions)
              ? (Caf.each2(
                  extensions,
                  extension => (stn = SemanticTree.AccessorStn(stn, extension))
                ),
                stn)
              : stn;
          };
          this.prototype.getTransformedExtractionStns = function(
            extractSource
          ) {
            let AccessorStn,
              AssignmentStn,
              IdentifierStn,
              BinaryOperatorStn,
              UndefinedStn,
              ControlOperatorStn,
              tempIdentifierStn;
            ({
              AccessorStn,
              AssignmentStn,
              IdentifierStn,
              BinaryOperatorStn,
              UndefinedStn,
              ControlOperatorStn
            } = SemanticTree);
            return this.extractDefault
              ? ControlOperatorStn(
                  BinaryOperatorStn(
                    UndefinedStn(),
                    { operator: "!==" },
                    AssignmentStn(
                      (tempIdentifierStn = IdentifierStn()),
                      this.getSourceValueStn(extractSource)
                    )
                  ),
                  tempIdentifierStn,
                  this.extractDefault.transform()
                )
              : this.getSourceValueStn(extractSource);
          };
          this.prototype.updateScope = function(scope) {
            this.scope = scope;
            this.scope.addIdentifierAssigned(this.children[0].identifier);
            return instanceSuper.updateScope.apply(this, arguments);
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 83 */
/*!*******************************************************!*\
  !*** ./source/CaffeineScript/CaffeineScriptParser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Parser", "isFunction"],
    [
      global,
      __webpack_require__(/*! ./StandardImport */ 16),
      __webpack_require__(/*! caffeine-eight */ 84),
      __webpack_require__(/*! ./CafParseNodeBaseClass */ 85)
    ],
    (Parser, isFunction) => {
      let CaffeineScriptParser;
      return (CaffeineScriptParser = Caf.defClass(
        class CaffeineScriptParser extends Parser {},
        function(CaffeineScriptParser, classSuper, instanceSuper) {
          this.nodeBaseClass = __webpack_require__(/*! ./CafParseNodeBaseClass */ 85);
          Caf.each2(
            __webpack_require__(/*! ./Rules */ 86).modules,
            mod => (isFunction(mod) ? mod.call(this) : this.rule(mod))
          );
          this.prototype.parse = function(source, options) {
            return instanceSuper.parse.call(
              this,
              __webpack_require__(/*! ./Preprocessors */ 113).preprocess(source),
              options
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 84 */
/*!********************************************************************************!*\
  !*** external "require('caffeine-eight' /* ABC - not inlining fellow NPM *_/)" ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('caffeine-eight' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 85 */
/*!********************************************************!*\
  !*** ./source/CaffeineScript/CafParseNodeBaseClass.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Nodes", "isFunction", "RootStn"],
    [
      global,
      __webpack_require__(/*! ./StandardImport */ 16),
      __webpack_require__(/*! caffeine-eight */ 84),
      __webpack_require__(/*! ./StnRegistry */ 19)
    ],
    (Nodes, isFunction, RootStn) => {
      let StnRegistry, CafParseNodeBaseClass;
      StnRegistry = __webpack_require__(/*! ./StnRegistry */ 19);
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
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 86 */
/*!**************************************************!*\
  !*** ./source/CaffeineScript/Rules/index.coffee ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./namespace */ 5);

module.exports.addModules({
  Accessors: __webpack_require__(/*! ./Accessors */ 87),
  ArrayLiterals: __webpack_require__(/*! ./ArrayLiterals */ 88),
  Assignment: __webpack_require__(/*! ./Assignment */ 89),
  Blocks: __webpack_require__(/*! ./Blocks */ 90),
  Classes: __webpack_require__(/*! ./Classes */ 91),
  Comments: __webpack_require__(/*! ./Comments */ 92),
  Comprehensions: __webpack_require__(/*! ./Comprehensions */ 93),
  ControlStructures: __webpack_require__(/*! ./ControlStructures */ 94),
  DestructuringAssignment: __webpack_require__(/*! ./DestructuringAssignment */ 95),
  Expressions: __webpack_require__(/*! ./Expressions */ 96),
  Extract: __webpack_require__(/*! ./Extract */ 97),
  Functions: __webpack_require__(/*! ./Functions */ 98),
  KeywordLiterals: __webpack_require__(/*! ./KeywordLiterals */ 99),
  Literals: __webpack_require__(/*! ./Literals */ 100),
  NumberLiterals: __webpack_require__(/*! ./NumberLiterals */ 101),
  ObjectLiterals: __webpack_require__(/*! ./ObjectLiterals */ 102),
  Operators: __webpack_require__(/*! ./Operators */ 103),
  RegExp: __webpack_require__(/*! ./RegExp */ 104),
  Require: __webpack_require__(/*! ./Require */ 105),
  Root: __webpack_require__(/*! ./Root */ 106),
  Statements: __webpack_require__(/*! ./Statements */ 107),
  StringLiterals: __webpack_require__(/*! ./StringLiterals */ 108),
  TagMacros: __webpack_require__(/*! ./TagMacros */ 109),
  Tokens: __webpack_require__(/*! ./Tokens */ 110),
  ValueLists: __webpack_require__(/*! ./ValueLists */ 111),
  Values: __webpack_require__(/*! ./Values */ 112)
});


/***/ }),
/* 87 */
/*!**************************************************!*\
  !*** ./source/CaffeineScript/Rules/Accessors.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 88 */
/*!******************************************************!*\
  !*** ./source/CaffeineScript/Rules/ArrayLiterals.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 89 */
/*!***************************************************!*\
  !*** ./source/CaffeineScript/Rules/Assignment.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 90 */
/*!***********************************************!*\
  !*** ./source/CaffeineScript/Rules/Blocks.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 84)],
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 91 */
/*!************************************************!*\
  !*** ./source/CaffeineScript/Rules/Classes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    return {
      classDefinition: {
        pattern:
          "/class/ _ className:identifier classExtends:_extendsClause? _? body:actualBlockEmptyOk?",
        stnFactory: "ClassStn"
      },
      _extendsClause: { pattern: "_ /extends/ _ expressionWithOneLessBlock" }
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 92 */
/*!*************************************************!*\
  !*** ./source/CaffeineScript/Rules/Comments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 93 */
/*!*******************************************************!*\
  !*** ./source/CaffeineScript/Rules/Comprehensions.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 94 */
/*!**********************************************************!*\
  !*** ./source/CaffeineScript/Rules/ControlStructures.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 84)],
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
              return { operand: this.ifUnlessWhileUntil.toString() };
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 95 */
/*!****************************************************************!*\
  !*** ./source/CaffeineScript/Rules/DestructuringAssignment.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 96 */
/*!****************************************************!*\
  !*** ./source/CaffeineScript/Rules/Expressions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [
      global,
      __webpack_require__(/*! ../StandardImport */ 16),
      __webpack_require__(/*! caffeine-eight */ 84),
      __webpack_require__(/*! ../StnRegistry */ 19)
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
            "extractExpression",
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 97 */
/*!************************************************!*\
  !*** ./source/CaffeineScript/Rules/Extract.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    return {
      extractExpression: [
        "extractSource:value _ /extract/ conditionalExtract:conditionalExtract? _ extractionTarget",
        {
          stnFactory: "ExtractStn",
          stnProps: function() {
            return { conditional: !!this.conditionalExtract };
          }
        }
      ],
      conditionalExtract: /\?/,
      extractionTarget: "objectExtractionList",
      objectExtractionList: [
        "extractAction:extractAction _comma_ objectExtractionList",
        "extractAction:extractAction"
      ],
      extractAction: ["chainExtract", "extractToIdentifier"],
      chainExtract: [
        "extractSource:extractToIdentifier _ /extract/ conditionalExtract:conditionalExtract? _ extractionTarget",
        {
          stnFactory: "ExtractStn",
          stnProps: function() {
            return { conditional: !!this.conditionalExtract };
          }
        }
      ],
      extractDefault: "_? '=' _? expression",
      extractAs: "_ 'as' _ identifier",
      extractPathExtension: "dot extractPathExtension:identifier",
      extractToIdentifier: [
        "bastIdentifier:identifier extractPathExtension* extractAs:extractAs? extractDefault:extractDefault?",
        { stnFactory: "ExtractToIdentifierStn" }
      ]
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 98 */
/*!**************************************************!*\
  !*** ./source/CaffeineScript/Rules/Functions.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions", "Error"],
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 84)],
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 99 */
/*!********************************************************!*\
  !*** ./source/CaffeineScript/Rules/KeywordLiterals.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 100 */
/*!*************************************************!*\
  !*** ./source/CaffeineScript/Rules/Literals.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 101 */
/*!*******************************************************!*\
  !*** ./source/CaffeineScript/Rules/NumberLiterals.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 102 */
/*!*******************************************************!*\
  !*** ./source/CaffeineScript/Rules/ObjectLiterals.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  let cafParentImports;
  return Caf.importInvoke(
    ["Extensions"],
    (cafParentImports = [
      global,
      __webpack_require__(/*! ../StandardImport */ 16),
      __webpack_require__(/*! caffeine-eight */ 84),
      __webpack_require__(/*! ../StnRegistry */ 19)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 103 */
/*!**************************************************!*\
  !*** ./source/CaffeineScript/Rules/Operators.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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
      __webpack_require__(/*! ../StandardImport */ 16),
      __webpack_require__(/*! ../OperatorHelper */ 38),
      __webpack_require__(/*! ../StnRegistry */ 19)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 104 */
/*!***********************************************!*\
  !*** ./source/CaffeineScript/Rules/RegExp.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [
      global,
      __webpack_require__(/*! ../StandardImport */ 16),
      __webpack_require__(/*! caffeine-eight */ 84),
      __webpack_require__(/*! ../StnRegistry */ 19)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 105 */
/*!************************************************!*\
  !*** ./source/CaffeineScript/Rules/Require.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 106 */
/*!*********************************************!*\
  !*** ./source/CaffeineScript/Rules/Root.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 107 */
/*!***************************************************!*\
  !*** ./source/CaffeineScript/Rules/Statements.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["ControlOperatorStn"],
    [
      global,
      __webpack_require__(/*! ../StandardImport */ 16),
      __webpack_require__(/*! caffeine-eight */ 84),
      __webpack_require__(/*! ../StnRegistry */ 19)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 108 */
/*!*******************************************************!*\
  !*** ./source/CaffeineScript/Rules/StringLiterals.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions", "StringStn", "InterpolatedStringStn"],
    [
      global,
      __webpack_require__(/*! ../StandardImport */ 16),
      __webpack_require__(/*! caffeine-eight */ 84),
      __webpack_require__(/*! ../StnRegistry */ 19),
      __webpack_require__(/*! ../Lib */ 18)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 109 */
/*!**************************************************!*\
  !*** ./source/CaffeineScript/Rules/TagMacros.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["upperCamelCase", "Error"],
    [global, __webpack_require__(/*! ../StandardImport */ 16)],
    (upperCamelCase, Error) => {
      let StnRegistry;
      StnRegistry = __webpack_require__(/*! ../StnRegistry */ 19);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 110 */
/*!***********************************************!*\
  !*** ./source/CaffeineScript/Rules/Tokens.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
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
      reservedWord: /(import|true|false|null|undefined|global|require|module|eval|super|class|new|this|delete|instanceof|is|isnt|switch|when|then|else|if|until|while|unless|array|each|find|object|from|in|with|do|into|returning|with-key|to|by|til|try|catch|throw|and|or|not|extract|as|for|return|break|of|yes|on|no|off|typeof|reduce|inject|promise|await|short|skip|mixin)\b(?![-])/,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 111 */
/*!***************************************************!*\
  !*** ./source/CaffeineScript/Rules/ValueLists.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 84)],
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 112 */
/*!***********************************************!*\
  !*** ./source/CaffeineScript/Rules/Values.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 84)],
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
                : __webpack_require__(/*! ../StnRegistry */ 19).ArrayStn(this.root.getMatchStns());
            }
          }
        });
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 113 */
/*!************************************************!*\
  !*** ./source/CaffeineScript/Preprocessors.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "getPadding", "max"],
    [global, __webpack_require__(/*! ./StandardImport */ 16)],
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ })
/******/ ]);