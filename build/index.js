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
  CaffeineScriptParser: __webpack_require__(/*! ./CaffeineScriptParser */ 91),
  CafParseNodeBaseClass: __webpack_require__(/*! ./CafParseNodeBaseClass */ 93),
  JavaScriptReservedWords: __webpack_require__(/*! ./JavaScriptReservedWords */ 20),
  Lib: __webpack_require__(/*! ./Lib */ 18),
  OperatorHelper: __webpack_require__(/*! ./OperatorHelper */ 38),
  Preprocessors: __webpack_require__(/*! ./Preprocessors */ 121),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 16),
  StnRegistry: __webpack_require__(/*! ./StnRegistry */ 19)
});

__webpack_require__(/*! ./Rules */ 94);

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

module.exports = {"author":"Shane Brinkman-Davis Delamore, Imikimi LLC","config":{"blanket":{"pattern":"source"}},"dependencies":{"art-binary":"*","art-build-configurator":"*","art-object-tree-factory":"*","caffeine-eight":"*","caffeine-mc":"*","caffeine-script-runtime":"*","caffeine-source-map":"*","source-map":"^0.7.2"},"description":"CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that empowers you to get the most out of any JavaScript runtime.","license":"ISC","name":"caffeine-script","repository":{"type":"git","url":"git@github.com:shanebdavis/caffeine-script.git"},"scripts":{"build":"caf -v -p -c cafInCaf -o source","perf":"nn -s;mocha -u tdd --compilers coffee:coffee-script/register perf","start":"webpack-dev-server --hot --inline --progress","test":"nn -s;mocha -u tdd","testInBrowser":"webpack-dev-server --progress"},"version":"0.68.5"};

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
            sourceRoot,
            transformedStn,
            stn,
            parseTree,
            e,
            temp;
          return (() => {
            try {
              ({
                bare,
                inlineMap,
                sourceMap,
                sourceFile,
                sourceRoot
              } = options);
              transformedStn = (stn = (parseTree = __webpack_require__(/*! ./CaffeineScriptParser */ 91).parse(
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
                sourceFile,
                sourceRoot
              });
            } catch (error) {
              e = error;
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
                (temp = e.info) != null ? temp : (e.info = {});
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
  BasicStns: __webpack_require__(/*! ./BasicStns */ 27),
  ScopeStnMixin: __webpack_require__(/*! ./ScopeStnMixin */ 48),
  UniqueIdentifierHandle: __webpack_require__(/*! ./UniqueIdentifierHandle */ 22),
  ValueBaseCaptureStn: __webpack_require__(/*! ./ValueBaseCaptureStn */ 21)
});

__webpack_require__(/*! ./PlaceholderStns */ 28);

__webpack_require__(/*! ./StnsGeneratingJs */ 31);

__webpack_require__(/*! ./TransformOnlyStns */ 85);


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
            let current, accessorChain;
            current = this;
            accessorChain = [];
            while (current && current instanceof AccessorChainStn) {
              let accessor;
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
          return Caf.array(string.split(/((?:\\\\)+)/), (str, i) =>
            Caf.mod(i, 2) === 0 ? str.replace(/\\ /g, " ") : str
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
          return Caf.array(split, (str, i) =>
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
          this.property("scope");
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
            let e, temp, base, temp1, temp2, base1, base2;
            super(...arguments);
            this.children = children;
            this.pretransformedStn = pretransformedStn;
            this.parseTreeNode =
              (temp =
                Caf.exists((base = this.pretransformedStn)) &&
                base.parseTreeNode) != null
                ? temp
                : props.parseTreeNode;
            this.pretransformedStn || (this.pretransformedStn = this);
            this.props = objectWithout(props, "parseTreeNode");
            try {
              (temp1 = this._sourceIndex) != null
                ? temp1
                : (this._sourceIndex =
                    (temp2 =
                      Caf.exists((base1 = this.pretransformedStn)) &&
                      base1.sourceIndex) != null
                      ? temp2
                      : Caf.exists((base2 = this.parseTreeNode)) &&
                        base2.absoluteOffset);
            } catch (error) {
              e = error;
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
            compileTimeValue: function() {
              return undefined;
            },
            parseTreeNode: function() {
              let temp, base;
              return (temp = this._parseTreeNode) != null
                ? temp
                : Caf.exists((base = this.parent)) && base.parseTreeNode;
            }
          });
          this.prototype.initLabeledChildren = function() {
            this.labeledChildren = this.children && {};
            return Caf.each2(this.children, child => {
              let label, pluralLabel, base;
              child.parent = this;
              ({ label, pluralLabel } = child);
              this.labeledChildren[label] = child;
              return pluralLabel
                ? (
                    (base = this.labeledChildren)[pluralLabel] ||
                    (base[pluralLabel] = [])
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
              let temp, base;
              return (temp = Caf.exists((base = this.parent)) && base.root) !=
                null
                ? temp
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
            Caf.each2(this.children, child =>
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
              let temp, base;
              return (temp =
                Caf.exists((base = this.parseTreeNode)) && base.sourceFile) !=
                null
                ? temp
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
            } catch (error) {
              e = error;
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
          this.prototype.updateScope = function(scope, options) {
            this.scope = scope;
            return Caf.each2(this.children, child =>
              child.updateScope(this.scope, options)
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
/*!*********************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/BasicStns.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge"],
    [global, __webpack_require__(/*! ../StandardImport */ 16)],
    merge => {
      return merge(__webpack_require__(/*! ./PlaceholderStns */ 28), __webpack_require__(/*! ./StnsGeneratingJs */ 31));
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
  ArraySpreadElementStn: __webpack_require__(/*! ./ArraySpreadElementStn */ 35),
  ArrayStn: __webpack_require__(/*! ./ArrayStn */ 34),
  AssignmentStn: __webpack_require__(/*! ./AssignmentStn */ 36),
  BinaryOperatorStn: __webpack_require__(/*! ./BinaryOperatorStn */ 37),
  CatchStn: __webpack_require__(/*! ./CatchStn */ 39),
  ClassStn: __webpack_require__(/*! ./ClassStn */ 40),
  ControlOperatorStn: __webpack_require__(/*! ./ControlOperatorStn */ 41),
  DestructuringAssignmentStn: __webpack_require__(/*! ./DestructuringAssignmentStn */ 42),
  DestructuringIdentifierStn: __webpack_require__(/*! ./DestructuringIdentifierStn */ 43),
  DoStn: __webpack_require__(/*! ./DoStn */ 44),
  ForInControlStn: __webpack_require__(/*! ./ForInControlStn */ 45),
  ForStn: __webpack_require__(/*! ./ForStn */ 46),
  FunctionDefinitionArgsStn: __webpack_require__(/*! ./FunctionDefinitionArgsStn */ 49),
  FunctionDefinitionArgStn: __webpack_require__(/*! ./FunctionDefinitionArgStn */ 50),
  FunctionDefinitionStn: __webpack_require__(/*! ./FunctionDefinitionStn */ 51),
  FunctionInvocationStn: __webpack_require__(/*! ./FunctionInvocationStn */ 52),
  GlobalIdentifierStn: __webpack_require__(/*! ./GlobalIdentifierStn */ 53),
  IdentifierStn: __webpack_require__(/*! ./IdentifierStn */ 54),
  IfStn: __webpack_require__(/*! ./IfStn */ 56),
  ImportBodyStn: __webpack_require__(/*! ./ImportBodyStn */ 57),
  ImportStn: __webpack_require__(/*! ./ImportStn */ 58),
  InterpolatedStringStn: __webpack_require__(/*! ./InterpolatedStringStn */ 59),
  LabeledDestructuringTargetStn: __webpack_require__(/*! ./LabeledDestructuringTargetStn */ 60),
  LetStn: __webpack_require__(/*! ./LetStn */ 63),
  NewInstanceStn: __webpack_require__(/*! ./NewInstanceStn */ 64),
  NumberLiteralStn: __webpack_require__(/*! ./NumberLiteralStn */ 65),
  ObjectDestructuringStn: __webpack_require__(/*! ./ObjectDestructuringStn */ 66),
  ObjectLiteralAccessorStn: __webpack_require__(/*! ./ObjectLiteralAccessorStn */ 68),
  ObjectPropNameStn: __webpack_require__(/*! ./ObjectPropNameStn */ 62),
  ObjectPropValueStn: __webpack_require__(/*! ./ObjectPropValueStn */ 61),
  ObjectStn: __webpack_require__(/*! ./ObjectStn */ 67),
  PureJsStn: __webpack_require__(/*! ./PureJsStn */ 69),
  ReferenceStn: __webpack_require__(/*! ./ReferenceStn */ 55),
  RegExpStn: __webpack_require__(/*! ./RegExpStn */ 70),
  RequireStn: __webpack_require__(/*! ./RequireStn */ 71),
  RootStn: __webpack_require__(/*! ./RootStn */ 73),
  SimpleLiteralStn: __webpack_require__(/*! ./SimpleLiteralStn */ 75),
  StatementsStn: __webpack_require__(/*! ./StatementsStn */ 74),
  StringStn: __webpack_require__(/*! ./StringStn */ 76),
  SuperStn: __webpack_require__(/*! ./SuperStn */ 77),
  SwitchStn: __webpack_require__(/*! ./SwitchStn */ 78),
  SwitchWhenStn: __webpack_require__(/*! ./SwitchWhenStn */ 79),
  ThisStn: __webpack_require__(/*! ./ThisStn */ 80),
  ThrowStn: __webpack_require__(/*! ./ThrowStn */ 81),
  TryStn: __webpack_require__(/*! ./TryStn */ 82),
  UnaryOperatorStn: __webpack_require__(/*! ./UnaryOperatorStn */ 83),
  UndefinedStn: __webpack_require__(/*! ./UndefinedStn */ 84),
  WhileStn: __webpack_require__(/*! ./WhileStn */ 47)
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
              : this.createSourceNode(
                  base,
                  "[",
                  this.key.toSourceNode({ expression: true }),
                  "]"
                );
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
        this.getter({
          valueStn: function() {
            return this.structuringStn;
          },
          structuringStn: function() {
            return __webpack_require__(/*! ./ArrayStn */ 34)(
              Caf.array(this.children, child => child.getStructuringStn())
            );
          }
        });
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
/* 35 */
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
  return Caf.importInvoke(
    ["Error", "formattedInspect"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    (Error, formattedInspect) => {
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
            if (!(this.lValue && this.rValue)) {
              throw new Error(
                `AssignmentStn: expected lValue and rValue: ${Caf.toString(
                  formattedInspect({
                    operator: this.operator,
                    lValue: this.lValue,
                    rValue: this.rValue
                  })
                )}`
              );
            }
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
              let base;
              return Caf.exists((base = this.lValue)) && base.propName;
            }
          });
          this.prototype.updateScope = function(scope, options) {
            let base;
            this.scope = scope;
            this.scope.addIdentifierAssigned(
              Caf.exists((base = this.lValue)) && base.explicitIdentifier,
              undefined,
              Caf.exists(options) && options.insideLet
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
    }
  );
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
            this.left = this.children[0];
            this.right = this.children[1];
            if (!(this.left && this.right)) {
              throw new Error(
                `BinaryOperatorStn (${Caf.toString(
                  this.operator
                )}): left and right required: ${Caf.toString(
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
                        parentOperatorPrecidence,
                        subExpression: true,
                        isLeftOperand: true
                      })
                    ),
                    this.right.toSourceNode(
                      merge(commonSubToSourceNodeProps, {
                        parentOperatorPrecidence,
                        subExpression: true,
                        isLeftOperand: false
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
            if (!(operands.length === operators.length + 1)) {
              throw new Error(
                `expecting: operands.length:${Caf.toString(
                  operands.length
                )} == operators.length:${Caf.toString(operators.length)} + 1`
              );
            }
            while (operators.length > 0) {
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
              lowestPrecidence = this.getOpPrecidence(operators[0]);
              firstOccurance = lastOccurance = 0;
              p = null;
              Caf.each2(operators, (op, i) =>
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
            let base;
            return Caf.each2(
              Caf.exists((base = this.body)) && base.children,
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
                  (statementsToCount = Caf.array(body.children, stn =>
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
                                      IdentifierStn({ identifier: propName })
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
            let className, classExtends, body, classBody, temp;
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
              (temp =
                Caf.exists(classExtends) &&
                classExtends.toSourceNode({ expression: true })) != null
                ? temp
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
            let temp, temp1, temp2;
            super(...arguments);
            this.operand = (temp = props.operand) != null ? temp : "if";
            if (this.labeledChildren.expression) {
              this.expression = this.labeledChildren.expression;
              this.body =
                (temp1 = this.labeledChildren.body) != null
                  ? temp1
                  : StnRegistry.UndefinedStn();
              this.elseBody = this.labeledChildren.elseBody;
            } else {
              this.expression = children[0];
              this.body =
                (temp2 = children[1]) != null
                  ? temp2
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
              let temp;
              return (temp = this._whileReturnTempVar) != null
                ? temp
                : (this._whileReturnTempVar = this.scope.uniqueIdentifier);
            }
          });
          this.prototype.validate = function() {
            return (() => {
              switch (this.operand) {
                case "while":
                case "until":
                case "for":
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
              jsKeyword,
              parts,
              tempVarIdentifier,
              base;
            ({ expression, returnValueIsIgnored, noParens } = options);
            ({ operand } = this);
            applyParens = false;
            unaryOperator = "";
            jsKeyword = operand;
            switch (operand) {
              case "for":
                jsKeyword = "for";
                operand = "while";
                break;
              case "until":
              case "unless":
                jsKeyword = operand = operand === "until" ? "while" : "if";
                unaryOperator = "!";
            }
            parts = expression
              ? (() => {
                  switch (operand) {
                    case "while":
                      return returnValueIsIgnored
                        ? this.doSourceNode(
                            jsKeyword,
                            " (",
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
                            jsKeyword,
                            " (",
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
                        (Caf.exists((base = this.elseBody)) &&
                          base.toSourceNode({ expression: true })) ||
                          "undefined"
                      ];
                  }
                })()
              : [
                  jsKeyword,
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
        this.getter({
          structuringStn: function() {
            return this.labeledChildren.structure.getStructuringStn();
          }
        });
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
  return Caf.importInvoke(
    ["JavaScriptReservedWords", "Error"],
    [
      global,
      __webpack_require__(/*! ../../StandardImport */ 16),
      { JavaScriptReservedWords: __webpack_require__(/*! ../../JavaScriptReservedWords */ 20) }
    ],
    (JavaScriptReservedWords, Error) => {
      let DestructuringIdentifierStn;
      return (DestructuringIdentifierStn = Caf.defClass(
        class DestructuringIdentifierStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(DestructuringIdentifierStn, classSuper, instanceSuper) {
          this.prototype.updateScope = function(scope, options) {
            this.scope = scope;
            this.scope.addIdentifierAssigned(
              this.labeledChildren.identifier.identifier,
              undefined,
              Caf.exists(options) && options.insideLet
            );
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.validate = function() {
            return JavaScriptReservedWords[this.identifier]
              ? (() => {
                  throw new Error(
                    `'${Caf.toString(
                      this.identifier
                    )}' is reserved by JavaScript and cannot be used for destructuring.`
                  );
                })()
              : undefined;
          };
          this.getter({
            identifier: function() {
              return this.labeledChildren.identifier.identifier;
            },
            structuringStn: function() {
              return this.labeledChildren.identifier;
            }
          });
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
    }
  );
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
/*!********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ForInControlStn.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let ForInControlStn;
    return (ForInControlStn = Caf.defClass(
      class ForInControlStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(ForInControlStn, classSuper, instanceSuper) {
        this.getter({
          varStn: function() {
            return this.children[0];
          },
          fromStn: function() {
            return this.children[1];
          }
        });
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(
            this.props.let ? "let " : undefined,
            this.varStn.toSourceNode(),
            " in ",
            this.fromStn.toSourceNode({ expression: true })
          );
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 46 */
/*!***********************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/ForStn.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return function(insideForParens, body) {
    return __webpack_require__(/*! ./WhileStn */ 47)({ operand: "for" }, insideForParens, body);
  };
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 47 */
/*!*************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/WhileStn.js ***!
  \*************************************************************************/
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
      let WhileStn;
      return (WhileStn = Caf.defClass(
        class WhileStn extends __webpack_require__(/*! ../ScopeStnMixin */ 48)(
          __webpack_require__(/*! ../BaseStn */ 23)
        ) {
          constructor(props, children) {
            let temp, temp1, temp2;
            super(...arguments);
            this.operand = (temp = props.operand) != null ? temp : "while";
            if (this.labeledChildren.expression) {
              this.expression = this.labeledChildren.expression;
              this.body =
                (temp1 = this.labeledChildren.body) != null
                  ? temp1
                  : StnRegistry.UndefinedStn();
            } else {
              this.expression = children[0];
              this.body =
                (temp2 = children[1]) != null
                  ? temp2
                  : StnRegistry.UndefinedStn();
            }
            if (!(this.body.type === "Statements")) {
              (this.body = StnRegistry.StatementsStn(this.body)).parent = this;
            }
            this.validate();
          }
        },
        function(WhileStn, classSuper, instanceSuper) {
          this.getter({
            autoLetsForSourceNode: function() {
              let lets;
              return (lets = this.getAutoLets()) ? lets + "; " : undefined;
            },
            whileReturnTempVar: function() {
              let temp;
              return (temp = this._whileReturnTempVar) != null
                ? temp
                : (this._whileReturnTempVar = this.scope.uniqueIdentifier);
            },
            unaryOperator: function() {
              return this.operand === "until" ? "!" : undefined;
            },
            jsKeyword: function() {
              return this.operand === "until" ? "while" : this.operand;
            }
          });
          this.prototype.validate = function() {
            return (() => {
              switch (this.operand) {
                case "while":
                case "until":
                case "for":
                  return true;
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
              jsKeyword,
              unaryOperator,
              tempVarIdentifier,
              temp;
            expression = options.expression;
            returnValueIsIgnored = options.returnValueIsIgnored;
            noParens = options.noParens;
            temp = this;
            operand = temp.operand;
            jsKeyword = temp.jsKeyword;
            unaryOperator = temp.unaryOperator;
            return this.createSourceNode(
              expression
                ? returnValueIsIgnored
                  ? this.doSourceNode(
                      jsKeyword,
                      " (",
                      unaryOperator,
                      this.expression.toSourceNode({
                        noParens: true,
                        expression: true,
                        dotBase: !!unaryOperator
                      }),
                      ") {",
                      this.getSourceNodeForAutoLetsWithStatements(this.body),
                      "};"
                    )
                  : ((tempVarIdentifier = this.whileReturnTempVar),
                    this.doSourceNode(
                      jsKeyword,
                      " (",
                      unaryOperator,
                      this.expression.toSourceNode({
                        noParens: true,
                        expression: true,
                        dotBase: !!unaryOperator
                      }),
                      ") {",
                      this.getSourceNodeForAutoLetsWithStatements(this.body, {
                        returnAction: `${Caf.toString(tempVarIdentifier)} =`
                      }),
                      `}; return ${Caf.toString(tempVarIdentifier)};`
                    ))
                : [
                    jsKeyword,
                    " (",
                    unaryOperator,
                    this.expression.toSourceNode({
                      noParens: true,
                      expression: true,
                      dotBase: !!unaryOperator
                    }),
                    ") {",
                    this.getSourceNodeForAutoLetsWithStatements(this.body),
                    "}"
                  ]
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
    ["merge", "Error", "isString", "mergeInto"],
    [global, __webpack_require__(/*! ../StandardImport */ 16)],
    (merge, Error, isString, mergeInto) => {
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
            let normalizePerferredName, addExplicitlyDeclared;
            this.abstractClass();
            this.normalizePerferredName = normalizePerferredName = function(
              preferredName = "temp"
            ) {
              return preferredName;
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
            this.prototype.addExplicitlyDeclared = addExplicitlyDeclared = function(
              identifier
            ) {
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
            this.prototype.addIdentifierLet = function(identifier) {
              return identifier
                ? this.addExplicitlyDeclared(identifier)
                : undefined;
            };
            this.prototype.addIdentifierAssigned = function(
              identifier,
              initializer,
              insideLet
            ) {
              return identifier
                ? insideLet
                  ? this.addIdentifierLet(identifier)
                  : (this._boundUniqueIdentifiers
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
            this.prototype.requireScopeUpdated = function() {
              return !this._scopeUpdated
                ? (() => {
                    throw new Error(
                      `Scope must be fully updated. ${Caf.toString(
                        this.className
                      )}`
                    );
                  })()
                : undefined;
            };
            this.prototype.getAvailableIdentifierName = function(
              preferredName
            ) {
              let blockedIndentifiers, count, name;
              preferredName = normalizePerferredName(preferredName);
              this.requireScopeUpdated();
              blockedIndentifiers = this.identifiersInSelfParentAndChildScopes;
              return !blockedIndentifiers[preferredName]
                ? preferredName
                : ((count = 0),
                  (() => {
                    while (
                      blockedIndentifiers[
                        (name = `${Caf.toString(preferredName)}${Caf.toString(
                          (count += 1)
                        )}`)
                      ]
                    ) {
                      name;
                    }
                  })(),
                  name);
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
            this.prototype.getSourceNodeForAutoLetsWithStatements = function(
              statementsStn,
              toSourceNodeOptions
            ) {
              let returnAction;
              if (Caf.exists(toSourceNodeOptions)) {
                returnAction = toSourceNodeOptions.returnAction;
              }
              return false
                ? undefined
                : [
                    this.autoLetsForSourceNode,
                    statementsStn.toSourceNode(toSourceNodeOptions)
                  ];
            };
            this.getter({
              autoLetsForSourceNode: function() {
                let lets;
                return (lets = this.getAutoLets()) ? lets + "; " : undefined;
              },
              haveAutoLets: function() {
                this.bindAllUniqueIdentifiersRequested();
                return (
                  this._identifiersAssigned &&
                  this.requiredIdentifierLets.length > 0
                );
              },
              autoLets: function() {
                let identifiers;
                this.bindAllUniqueIdentifiersRequested();
                return this._identifiersAssigned &&
                  (identifiers = this.requiredIdentifierLets).length > 0
                  ? `let ${Caf.toString(identifiers.join(", "))}`
                  : undefined;
              }
            });
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
              identifiersInParentScopes: function(out = {}) {
                let scope;
                scope = this.scope;
                while (scope) {
                  mergeInto(out, scope.identifiersInScope);
                  scope = scope.scope !== scope ? scope.scope : null;
                }
                return out;
              },
              identifiersInChildScopes: function(out = {}) {
                return Caf.each2(
                  this._childScopes,
                  childScope => {
                    mergeInto(out, childScope.identifiersInScope);
                    return childScope.getIdentifiersInChildScopes(out);
                  },
                  null,
                  out
                );
              },
              identifiersInSelfParentAndChildScopes: function() {
                return this.getIdentifiersInParentScopes(
                  this.getIdentifiersInChildScopes(
                    merge(this.identifiersInScope)
                  )
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
/* 49 */
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
/* 50 */
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
          identifierStn: function() {
            return this.isSimpleIdentifier ? this.target : undefined;
          },
          argumentName: function() {
            return this.target.name;
          },
          isSimpleIdentifier: function() {
            return this.target.type === "Identifier";
          },
          explicitIdentifier: function() {
            let base;
            return Caf.exists((base = this.target)) && base.explicitIdentifier;
          },
          propName: function() {
            return this.target.name;
          },
          valueStn: function() {
            return this.target.getValueStn();
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
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 51 */
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
        class FunctionDefinitionStn extends __webpack_require__(/*! ../ScopeStnMixin */ 48)(
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
              let base;
              return Caf.exists((base = this.body)) && base.children;
            },
            argumentStns: function() {
              let base;
              return Caf.exists((base = this.args)) && base.children;
            }
          });
          this.prototype.updateScope = function() {
            instanceSuper.updateScope.apply(this, arguments);
            return this.arguments
              ? (Caf.object(this.arguments.argumentNameList, name =>
                  this.addExplicitlyDeclared(name)
                ),
                (this._updatingArgumentScope = true),
                this.arguments.updateScope(this),
                (this._updatingArgumentScope = false))
              : undefined;
          };
          this.prototype.addIdentifierAssigned = function(identifier) {
            return this._updatingArgumentScope
              ? this.addExplicitlyDeclared(identifier)
              : instanceSuper.addIdentifierAssigned.apply(this, arguments);
          };
          this.prototype.postTransform = function() {
            let foundParent, newStatementStns, StatementsStn, base;
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
                  (Caf.exists((base = this.body)) && base.children.length) > 0
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
              temp,
              base,
              base1;
            ({ isConstructor, bound, returnIgnored } = this.props);
            if (options) {
              ({ statement, isOperand } = options);
            }
            returnAction = !(isConstructor || returnIgnored);
            argsSourceNode =
              (temp = Caf.exists((base = this.args)) && base.toSourceNode()) !=
              null
                ? temp
                : "()";
            bodySourceNode = this.simpleBound
              ? this.body.children[0].toSourceNode({ expression: true })
              : Caf.exists((base1 = this.body)) &&
                base1.toSourceNode({ returnAction });
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
/* 52 */
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
            let functionValue, argStns, base, base1, base2;
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
              (Caf.exists((base = this.parseTreeNode)) && base.conditional) ||
              (Caf.exists((base1 = this.parseTreeNode)) && base1.existanceTest)
            ) {
              (base2 = this.props).existanceTest ||
                (base2.existanceTest = true);
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
              let base;
              return Caf.exists((base = this.functionValue)) && base.propName;
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
/* 53 */
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
/* 54 */
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
    ["identifierRegexp", "UniqueIdentifierHandle", "String", "merge"],
    [
      global,
      __webpack_require__(/*! ../../StandardImport */ 16),
      { UniqueIdentifierHandle: __webpack_require__(/*! ../UniqueIdentifierHandle */ 22) }
    ],
    (identifierRegexp, UniqueIdentifierHandle, String, merge) => {
      let IdentifierStn;
      return (IdentifierStn = Caf.defClass(
        class IdentifierStn extends __webpack_require__(/*! ../BaseStn */ 23) {
          constructor(props, children) {
            let identifier, temp, base;
            if (Caf.is((identifier = children[0]), String)) {
              props = merge(props, { identifier });
              children = [];
            }
            super(props, children);
            if (!this.props.identifier) {
              (temp = (base = this.props).identifierHandle) != null
                ? temp
                : (base.identifierHandle = new UniqueIdentifierHandle(
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
            identifierHandle: function() {
              return this.props.identifierHandle;
            },
            isUniqueIdentifier: function() {
              return Caf.is(this.identifierHandle, UniqueIdentifierHandle);
            },
            propName: function() {
              return this.identifier;
            },
            identifier: function() {
              return (this.identifierHandle || this.props).identifier;
            },
            explicitIdentifier: function() {
              return this.props.identifier;
            },
            canBeUsedInES6Structuring: function() {
              return true;
            },
            valueStn: function() {
              return __webpack_require__(/*! ./ReferenceStn */ 55)(this);
            }
          });
          this.prototype.updateScope = function(scope) {
            this.scope = scope;
            if (this.identifierHandle) {
              this.scope.addUniqueIdentifierHandle(this.identifierHandle);
            }
            return instanceSuper.updateScope.apply(this, arguments);
          };
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(
              (this.identifierHandle || this.props).identifier
            );
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 55 */
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
          let base;
          this.scope = scope;
          if (this.props.identifierHandle) {
            this.scope.addUniqueIdentifierHandle(this.props.identifierHandle);
          } else {
            if (
              !(Caf.exists((base = this.identifier)) && base.isUniqueIdentifier)
            ) {
              this.scope.addIdentifierUsed(this.propName);
            }
          }
          return instanceSuper.updateScope.apply(this, arguments);
        };
        this.getter({
          isReference: function() {
            return true;
          },
          identifier: function() {
            return this.labeledChildren.identifier || this.children[0];
          },
          propName: function() {
            let base;
            return (
              (Caf.exists((base = this.props.identifierHandle)) &&
                base.identifier) ||
              this.identifier.propName
            );
          },
          explicitIdentifier: function() {
            let base;
            return (
              Caf.exists((base = this.identifier)) && base.explicitIdentifier
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
/* 56 */
/*!**********************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/IfStn.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return function(test, body, elseClause) {
    return __webpack_require__(/*! ./ControlOperatorStn */ 41)(
      { operand: "if" },
      test,
      body,
      elseClause
    );
  };
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 57 */
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
    ImportStn = __webpack_require__(/*! ./ImportStn */ 58);
    return (ImportBodyStn = Caf.defClass(
      class ImportBodyStn extends __webpack_require__(/*! ../ScopeStnMixin */ 48)(
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
/* 58 */
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
            },
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
/* 59 */
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
            let base;
            return (
              Caf.exists((base = this.children[0])) &&
              (Caf.isF(base.trimLeft) && base.trimLeft())
            );
          };
          this.prototype.trimRight = function() {
            let base;
            return (
              Caf.exists((base = peek(this.children))) &&
              (Caf.isF(base.trimRight) && base.trimRight())
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
/* 60 */
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
        this.getter({
          structuringStn: function() {
            return __webpack_require__(/*! ./ObjectPropValueStn */ 61)(
              __webpack_require__(/*! ./ObjectPropNameStn */ 62)(this.children[0]),
              this.children[1].getValueStn()
            );
          }
        });
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
/* 61 */
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
              let base;
              return Caf.exists((base = this.propNameChild)) && base.isThisProp;
            },
            propName: function() {
              let propNameChild, temp, base, temp1, temp2;
              ({ propNameChild } = this);
              return (temp = (base = this.props).propName) != null
                ? temp
                : (base.propName = (() => {
                    switch (this.children.length) {
                      case 2:
                        return (temp1 = propNameChild.propName) != null
                          ? temp1
                          : propNameChild;
                      case 1:
                        return (temp2 = propNameChild.propName) != null
                          ? temp2
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
/* 62 */
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
/* 63 */
/*!***********************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/LetStn.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return (() => {
    let LetStn;
    return (LetStn = Caf.defClass(
      class LetStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
      function(LetStn, classSuper, instanceSuper) {
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          return Caf.each2(this.children, child =>
            child.updateScope(this.scope, { insideLet: true })
          );
        };
        this.prototype.toSourceNode = function() {
          return this.createSourceNode(
            "let ",
            Caf.array(this.children, (child, i) => {
              let c;
              c = child.toSourceNode();
              return i > 0 ? [", ", c] : c;
            })
          );
        };
      }
    ));
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 64 */
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
/* 65 */
/*!*********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/NumberLiteralStn.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["parseFloat"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    parseFloat => {
      let NumberLiteralStn;
      return (NumberLiteralStn = Caf.defClass(
        class NumberLiteralStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(NumberLiteralStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function(options) {
            let value;
            ({ value } = this.props);
            return this.createSourceNode(
              Caf.exists(options) && options.dotBase
                ? ["(", `${Caf.toString(value)}`, ")"]
                : `${Caf.toString(value)}`
            );
          };
          this.getter({
            propName: function() {
              return this.props.value;
            },
            canBeUsedInES6Structuring: function() {
              return true;
            },
            compileTimeValue: function() {
              return parseFloat(this.props.value);
            }
          });
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 66 */
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
        this.getter({
          valueStn: function() {
            return this.structuringStn;
          },
          structuringStn: function() {
            return __webpack_require__(/*! ./ObjectStn */ 67)(
              Caf.array(this.children, child => child.getStructuringStn())
            );
          }
        });
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
/* 67 */
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
/* 68 */
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
          let base;
          return this.createSourceNode(
            Caf.exists((base = this.value)) &&
              base.toSourceNode({ dotBase: true }),
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
/* 69 */
/*!**************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/StnsGeneratingJs/PureJsStn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["String"],
    [global, __webpack_require__(/*! ../../StandardImport */ 16)],
    String => {
      let PureJsStn;
      return (PureJsStn = Caf.defClass(
        class PureJsStn extends __webpack_require__(/*! ../BaseStn */ 23) {
          constructor(props, children) {
            let js;
            if (Caf.is((js = children[0]), String)) {
              props = { js };
              children = [];
            }
            super(props, children);
          }
        },
        function(PureJsStn, classSuper, instanceSuper) {
          this.prototype.toSourceNode = function() {
            return this.createSourceNode(this.props.js);
          };
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 70 */
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
            let value, modifiers, childrenNodes, hasInterpolation, base;
            ({ value, modifiers } = this.props);
            childrenNodes =
              (Caf.exists((base = this.children)) && base.length) > 0
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
/* 71 */
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
      ({ findModuleSync } = __webpack_require__(/*! caffeine-mc */ 72));
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
/* 72 */
/*!*****************************************************************************!*\
  !*** external "require('caffeine-mc' /* ABC - not inlining fellow NPM *_/)" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('caffeine-mc' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 73 */
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
      StatementsStn = __webpack_require__(/*! ./StatementsStn */ 74);
      return (RootStn = Caf.defClass(
        class RootStn extends __webpack_require__(/*! ../ScopeStnMixin */ 48)(
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
/* 74 */
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
            let returnAction,
              generateStatements,
              expression,
              classBody,
              parentIsStatements,
              out;
            if (options) {
              ({
                returnAction,
                generateStatements,
                expression,
                classBody,
                parentIsStatements
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
                    classBody,
                    parentIsStatements
                  )
            );
            return out;
          };
          this.prototype.toSourceNodeWithCustomChildren = function(
            children,
            options
          ) {
            let oldChildren, out;
            oldChildren = this.children;
            this.children = children;
            out = this.toSourceNode(options);
            this.children = oldChildren;
            return out;
          };
          this.getter({
            statements: function() {
              return this.children;
            },
            compileTimeValue: function() {
              return this.children.length === 1
                ? this.children[0].compileTimeValue
                : undefined;
            }
          });
          this.prototype._getChildrenSourceNodes = function(
            returnAction,
            generateStatements = true,
            classBody,
            parentIsStatements
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
                        generateStatements: true,
                        parentIsStatements: true
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
            if (generateStatements && !parentIsStatements) {
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
/* 75 */
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
/* 76 */
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
/* 77 */
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
/* 78 */
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
              temp;
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
              (temp =
                Caf.exists(condition) &&
                condition.toSourceNode({ expression: true })) != null
                ? temp
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
/* 79 */
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
/* 80 */
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
              let id, base;
              return (id = this.props.identifier)
                ? identifierRegexp.test(id)
                  ? id
                  : escapeJavascriptString(id)
                : Caf.exists((base = peek(this.children))) && base.identifier;
            },
            propName: function() {
              let temp;
              return (temp = this.identifier) != null ? temp : "this";
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
/* 81 */
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
/* 82 */
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
            let temp, base;
            super(...arguments);
            if (!this.labeledChildren.optionalCatch) {
              (this.children[1] =
                (temp = (base = this.labeledChildren).optionalCatch) != null
                  ? temp
                  : (base.optionalCatch = StnRegistry.CatchStn())).parent = this;
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
/* 83 */
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
/* 84 */
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
/* 85 */
/*!***************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/TransformOnlyStns/index.coffee ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./namespace */ 9);

module.exports.addModules({
  CaptureStn: __webpack_require__(/*! ./CaptureStn */ 86),
  ComprehensionStn: __webpack_require__(/*! ./ComprehensionStn */ 87),
  ExtractStn: __webpack_require__(/*! ./ExtractStn */ 89),
  ExtractToIdentifierStn: __webpack_require__(/*! ./ExtractToIdentifierStn */ 90),
  StandardImport: __webpack_require__(/*! ./StandardImport */ 88)
});


/***/ }),
/* 86 */
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
/* 87 */
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
    [
      "Error",
      "lowerCamelCase",
      "Object",
      "FunctionDefinitionStn",
      "String",
      "SimpleLiteralStn",
      "NumberLiteralStn",
      "IdentifierStn",
      "AssignmentStn",
      "PureJsStn",
      "FunctionInvocationStn",
      "AccessorStn",
      "StatementsStn",
      "IfStn",
      "ForStn",
      "WhileStn",
      "BinaryOperatorStn",
      "ForInControlStn",
      "floatEq",
      "Math",
      "UnaryOperatorStn"
    ],
    [global, __webpack_require__(/*! ./StandardImport */ 88)],
    (
      Error,
      lowerCamelCase,
      Object,
      FunctionDefinitionStn,
      String,
      SimpleLiteralStn,
      NumberLiteralStn,
      IdentifierStn,
      AssignmentStn,
      PureJsStn,
      FunctionInvocationStn,
      AccessorStn,
      StatementsStn,
      IfStn,
      ForStn,
      WhileStn,
      BinaryOperatorStn,
      ForInControlStn,
      floatEq,
      Math,
      UnaryOperatorStn
    ) => {
      let ComprehensionStn;
      return (ComprehensionStn = Caf.defClass(
        class ComprehensionStn extends __webpack_require__(/*! ../ScopeStnMixin */ 48)(
          __webpack_require__(/*! ../BaseStn */ 23)
        ) {},
        function(ComprehensionStn, classSuper, instanceSuper) {
          let getComprehensionsFound, clauseAliases;
          getComprehensionsFound = function(labeledClauses) {
            return `(clauses found: ${Caf.toString(
              Caf.array(
                labeledClauses,
                clause => clause.clauseType,
                clause => clause
              ).join(", ")
            )})`;
          };
          this.prototype.validate = function() {
            let valueClauses,
              variableDefinition,
              comprehensionType,
              maxVarDefs,
              isReduce,
              toClause,
              byClause,
              tilClause,
              fromClause,
              fromArrayClause,
              fromObjectClause,
              withKeyClause,
              skipClause,
              shortClause,
              sourceCounts,
              base;
            ({ valueClauses, variableDefinition } = this.labeledChildren);
            ({ comprehensionType } = this);
            if (
              (Caf.exists(variableDefinition) &&
                variableDefinition.children.length) >
              (maxVarDefs = (isReduce = comprehensionType === "reduce") ? 3 : 2)
            ) {
              throw new Error(
                `Can define at most ${Caf.toString(
                  maxVarDefs
                )} variables for ${Caf.toString(
                  comprehensionType
                )} comprehensions. Allowed variables: ${Caf.toString(
                  isReduce ? "accumulator, " : undefined
                )}"value and key", in that order. You defined: ${Caf.toString(
                  Caf.exists((base = variableDefinition.parseTreeNode)) &&
                    base.toString()
                )}."`
              );
            }
            ({
              toClause,
              byClause,
              tilClause,
              fromClause,
              fromArrayClause,
              fromObjectClause,
              withKeyClause,
              skipClause,
              shortClause
            } = this.labeledClauses);
            if (fromArrayClause) {
              switch (comprehensionType) {
                case "array":
                case "object":
                case "each":
                case "find":
                  null;
                  break;
                default:
                  throw new Error(
                    `Invalid Comprehension: The 'from-array' clause is only compatible with 'array' or 'object' comprehensions ${Caf.toString(
                      getComprehensionsFound(this.labeledClauses)
                    )}`
                  );
              }
            }
            if (withKeyClause && comprehensionType !== "object") {
              throw new Error(
                `Invalid Comprehension: The 'with-key' clause is only compatbile with 'object' comprehensions ${Caf.toString(
                  getComprehensionsFound(this.labeledClauses)
                )}`
              );
            }
            sourceCounts = 0;
            if (fromClause || toClause || tilClause) {
              sourceCounts++;
            }
            if (fromArrayClause) {
              sourceCounts++;
            }
            if (fromObjectClause) {
              sourceCounts++;
            }
            if (!(sourceCounts === 1)) {
              throw new Error(
                `Invalid Comprehension: Exactly one 'from/to/til', 'from-array' or 'from-object' clause expected ${Caf.toString(
                  getComprehensionsFound(this.labeledClauses)
                )}`
              );
            }
            if (toClause && tilClause) {
              throw new Error(
                `Invalid Comprehension: only one 'to' or 'til' clause allowed  ${Caf.toString(
                  getComprehensionsFound(this.labeledClauses)
                )}`
              );
            }
            if (
              !(toClause || tilClause) &&
              byClause &&
              !(byClause.compileTimeValue != null)
            ) {
              throw new Error(
                'Comprehension not supported: Non-constant by-clauses with array-iteration are not supported yet. Try making it a range iteration: array i in 0 til myArray.length by myByClause with v = myArray[i]"'
              );
            }
            return (byClause || skipClause || shortClause) &&
              !(tilClause || toClause || fromClause || fromArrayClause)
              ? (() => {
                  throw new Error(
                    `Invalid Comprehension: 'to', 'til', 'from' or 'from-array' clauses required when using 'by', 'skip' or 'short' clauses.  ${Caf.toString(
                      getComprehensionsFound(this.labeledClauses)
                    )}`
                  );
                })()
              : undefined;
          };
          clauseAliases = { returning: "into", in: "from", do: "with" };
          this.getter({
            comprehensionType: function() {
              return this.labeledChildren.outputType.props.token;
            },
            labeledClauses: function() {
              let iterable, body, labeledClauses, temp1, temp2;
              ({ iterable, body } = this.labeledChildren);
              labeledClauses = {};
              Caf.each2(
                this.labeledChildren.valueClauses,
                ({ type, value }) => {
                  let name, temp;
                  type = (temp = clauseAliases[type]) != null ? temp : type;
                  name = lowerCamelCase(type + "Clause");
                  if (labeledClauses[name]) {
                    throw new Error(
                      `no more than one '${Caf.toString(type)}' clause allowed`
                    );
                  }
                  value.clauseType = type;
                  return (labeledClauses[name] = value);
                }
              );
              (temp1 = labeledClauses.fromClause) != null
                ? temp1
                : (labeledClauses.fromClause = iterable);
              (temp2 = labeledClauses.withClause) != null
                ? temp2
                : (labeledClauses.withClause = body);
              return labeledClauses;
            }
          });
          this.prototype.postTransform = function() {
            let labeledClauses,
              comprehensionType,
              byClause,
              shortClause,
              skipClause,
              fromObjectClause,
              toClause,
              tilClause,
              fromArrayClause;
            this.initLabeledChildren();
            ({ labeledClauses, comprehensionType } = this);
            ({
              byClause,
              shortClause,
              skipClause,
              fromObjectClause,
              toClause,
              tilClause,
              fromArrayClause
            } = labeledClauses);
            return byClause ||
              shortClause ||
              skipClause ||
              fromObjectClause ||
              toClause ||
              tilClause ||
              fromArrayClause
              ? this.generateInlineIteration(comprehensionType, labeledClauses)
              : (() => {
                  switch (comprehensionType) {
                    case "each":
                    case "array":
                    case "object":
                    case "reduce":
                      return this.generateRuntimeBackedIteration(
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
            let variableDefinition, lastNonNulIndex, Null;
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
            return Caf.array(params, p =>
              p != null
                ? p
                : Null != null
                ? Null
                : (Null = SimpleLiteralStn({ value: "null" }))
            );
          };
          this.prototype.generateInlineIteration = function(
            comprehensionType,
            {
              fromArrayClause,
              shortClause,
              skipClause,
              fromClause,
              tilClause,
              toClause,
              byClause,
              fromObjectClause,
              intoClause,
              withClause,
              whenClause,
              withKeyClause
            }
          ) {
            let variableDefinition,
              toClauseEquality,
              byClauseCompileTimeValue,
              fromCompileTimeValue,
              toCompileTimeValue,
              shortClauseCompileTimeValue,
              skipClauseCompileTimeValue,
              reverseArray,
              fromId,
              toId,
              byClauseIsNegative,
              byClauseIsPositive,
              byClauseIsZero,
              byId,
              intoId,
              iId,
              valueId,
              withClauseProvided,
              returnNullIfFalse,
              valueStn,
              keyValueStn,
              invokeWithClauseAndPush,
              loopStn,
              positiveByTest,
              negativeByTest,
              temp;
            ({ variableDefinition } = this.labeledChildren);
            variableDefinition =
              Caf.exists(variableDefinition) && variableDefinition.children;
            if (toClause || tilClause) {
              fromClause != null
                ? fromClause
                : (fromClause = NumberLiteralStn({ value: "0" }));
              toClauseEquality = tilClause ? ((toClause = tilClause), "") : "=";
              byClauseCompileTimeValue =
                Caf.exists(byClause) && byClause.compileTimeValue;
              fromCompileTimeValue = fromClause.compileTimeValue;
              toCompileTimeValue = toClause.compileTimeValue;
              if (fromCompileTimeValue != null && toCompileTimeValue != null) {
                if (!byClause) {
                  byClauseCompileTimeValue = (() => {
                    switch (false) {
                      case !(fromCompileTimeValue < toCompileTimeValue):
                        return 1;
                      case !(fromCompileTimeValue > toCompileTimeValue):
                        return -1;
                      default:
                        return 0;
                    }
                  })();
                }
              }
            } else {
              if (byClause || shortClause || skipClause) {
                byClauseCompileTimeValue =
                  Caf.exists(byClause) && byClause.compileTimeValue;
                shortClauseCompileTimeValue =
                  Caf.exists(shortClause) && shortClause.compileTimeValue;
                skipClauseCompileTimeValue =
                  Caf.exists(skipClause) && skipClause.compileTimeValue;
                fromArrayClause != null
                  ? fromArrayClause
                  : (fromArrayClause = fromClause);
                if (
                  byClauseCompileTimeValue != null &&
                  byClauseCompileTimeValue < 0
                ) {
                  if (
                    !(shortClause && !(shortClauseCompileTimeValue != null))
                  ) {
                    toCompileTimeValue =
                      shortClauseCompileTimeValue != null
                        ? shortClauseCompileTimeValue
                        : 0;
                    shortClause = null;
                  }
                  reverseArray = true;
                }
              }
              if (fromArrayClause) {
                if (skipClause) {
                  if (skipClauseCompileTimeValue != null) {
                    skipClause = null;
                    fromCompileTimeValue = skipClauseCompileTimeValue;
                  }
                } else {
                  fromCompileTimeValue = 0;
                }
              }
              fromId = IdentifierStn({ preferredIdentifier: "from" });
            }
            if (!(toCompileTimeValue != null)) {
              toId = IdentifierStn({ preferredIdentifier: "to" });
            }
            if (byClauseCompileTimeValue != null) {
              switch (false) {
                case !(byClauseCompileTimeValue < 0):
                  byClauseIsNegative = true;
                  break;
                case !(byClauseCompileTimeValue > 0):
                  byClauseIsPositive = true;
                  break;
                case !(byClauseCompileTimeValue === 0):
                  byClauseIsZero = true;
              }
            } else {
              if (toClause || byClause) {
                byId = IdentifierStn({ preferredIdentifier: "by" });
              }
            }
            if (!(comprehensionType === "each" && toClause && !intoClause)) {
              intoId = IdentifierStn({ preferredIdentifier: "into" });
            }
            iId = IdentifierStn({
              preferredIdentifier: fromObjectClause ? "k" : "i",
              addToLets: !fromObjectClause
            });
            if (!variableDefinition) {
              variableDefinition = [
                IdentifierStn({ preferredIdentifier: "v" })
              ];
            }
            [valueId] = variableDefinition;
            withClauseProvided = !!withClause;
            returnNullIfFalse = false;
            withClause != null
              ? withClause
              : (withClause = valueStn = valueId.valueStn);
            if (fromObjectClause) {
              keyValueStn != null ? keyValueStn : (keyValueStn = iId.valueStn);
              withKeyClause != null
                ? withKeyClause
                : (withKeyClause = keyValueStn);
            }
            intoId &&
              (intoClause = AssignmentStn(
                intoId,
                intoClause != null
                  ? intoClause
                  : (() => {
                      switch (comprehensionType) {
                        case "object":
                          return PureJsStn("{}");
                        case "each":
                          return fromId || toClause;
                        case "array":
                          return PureJsStn("[]");
                        default:
                          return PureJsStn("null");
                      }
                    })()
              ));
            invokeWithClauseAndPush =
              comprehensionType === "each"
                ? withClause
                : (() => {
                    switch (comprehensionType) {
                      case "array":
                        return FunctionInvocationStn(
                          AccessorStn(intoId, IdentifierStn("push")),
                          withClause
                        );
                      case "object":
                        return AssignmentStn(
                          AccessorStn(
                            intoId,
                            withKeyClause != null ? withKeyClause : valueStn
                          ),
                          withClause
                        );
                      case "find":
                        return whenClause || !withClauseProvided
                          ? (whenClause != null
                              ? whenClause
                              : (whenClause = withClause),
                            StatementsStn(
                              AssignmentStn(intoId, withClause),
                              PureJsStn("break")
                            ))
                          : ((returnNullIfFalse = true),
                            IfStn(
                              AssignmentStn(intoId, withClause),
                              PureJsStn("break")
                            ));
                      default:
                        return (() => {
                          throw new Error(
                            `comprehensionType: ${Caf.toString(
                              comprehensionType
                            )} not supported (yet?) with from-array clauses`
                          );
                        })();
                    }
                  })();
            loopStn = fromObjectClause ? ForStn : WhileStn;
            return StatementsStn(
              fromId &&
                AssignmentStn(
                  fromId,
                  BinaryOperatorStn(
                    { operator: "||" },
                    fromArrayClause != null
                      ? fromArrayClause
                      : fromObjectClause,
                    PureJsStn(fromObjectClause ? "{}" : "[]")
                  )
                ),
              toId &&
                (() => {
                  switch (false) {
                    case !(toCompileTimeValue != null):
                      return AssignmentStn(
                        toId,
                        NumberLiteralStn({ value: toCompileTimeValue })
                      );
                    case !fromObjectClause:
                      return null;
                    case !fromArrayClause:
                      return AssignmentStn(
                        toId,
                        shortClause
                          ? reverseArray
                            ? shortClause
                            : BinaryOperatorStn(
                                { operator: "-" },
                                AccessorStn(fromId, IdentifierStn("length")),
                                shortClause
                              )
                          : AccessorStn(fromId, IdentifierStn("length"))
                      );
                    case !toClause:
                      return AssignmentStn(toId, toClause);
                  }
                })(),
              (() => {
                switch (false) {
                  case !fromArrayClause:
                    return AssignmentStn(
                      iId,
                      reverseArray
                        ? BinaryOperatorStn(
                            { operator: "-" },
                            AccessorStn(fromId, IdentifierStn("length")),
                            skipClause
                              ? BinaryOperatorStn(
                                  { operator: "+" },
                                  skipClause,
                                  NumberLiteralStn({ value: 1 })
                                )
                              : NumberLiteralStn({
                                  value:
                                    1 +
                                    (skipClauseCompileTimeValue != null
                                      ? skipClauseCompileTimeValue
                                      : 0)
                                })
                          )
                        : skipClause != null
                        ? skipClause
                        : NumberLiteralStn({ value: fromCompileTimeValue })
                    );
                  case !toClause:
                    return AssignmentStn(
                      iId,
                      fromClause != null
                        ? fromClause
                        : (fromClause = NumberLiteralStn({ value: "0" }))
                    );
                }
              })(),
              byId &&
                AssignmentStn(
                  byId,
                  byClause ||
                    IfStn(
                      BinaryOperatorStn({ operator: "<" }, iId, toId),
                      NumberLiteralStn({ value: "1" }),
                      NumberLiteralStn({ value: "-1" })
                    )
                ),
              intoClause,
              !byClauseIsZero &&
                loopStn(
                  fromObjectClause
                    ? ForInControlStn(
                        { let: true },
                        keyValueStn != null
                          ? keyValueStn
                          : (keyValueStn = iId.valueStn),
                        fromId
                      )
                    : fromArrayClause
                    ? BinaryOperatorStn(
                        { operator: reverseArray ? ">=" : "<" },
                        iId,
                        toId != null
                          ? toId
                          : NumberLiteralStn({ value: toCompileTimeValue })
                      )
                    : ((positiveByTest = BinaryOperatorStn(
                        { operator: `<${Caf.toString(toClauseEquality)}` },
                        iId,
                        toId || NumberLiteralStn({ value: toCompileTimeValue })
                      )),
                      (negativeByTest = BinaryOperatorStn(
                        { operator: `>${Caf.toString(toClauseEquality)}` },
                        iId,
                        toId || NumberLiteralStn({ value: toCompileTimeValue })
                      )),
                      (() => {
                        switch (false) {
                          case !byClauseIsPositive:
                            return positiveByTest;
                          case !byClauseIsNegative:
                            return negativeByTest;
                          default:
                            return BinaryOperatorStn(
                              { operator: "||" },
                              BinaryOperatorStn(
                                { operator: "&&" },
                                BinaryOperatorStn(
                                  { operator: ">" },
                                  byId,
                                  NumberLiteralStn({ value: "0" })
                                ),
                                positiveByTest
                              ),
                              BinaryOperatorStn(
                                { operator: "&&" },
                                BinaryOperatorStn(
                                  { operator: "<" },
                                  byId,
                                  NumberLiteralStn({ value: "0" })
                                ),
                                negativeByTest
                              )
                            );
                        }
                      })()),
                  StatementsStn(
                    (Caf.exists(variableDefinition) &&
                      variableDefinition.length) > 0
                      ? fromObjectClause
                        ? AssignmentStn(
                            (temp = valueId.identifierStn) != null
                              ? temp
                              : valueId,
                            AccessorStn(fromId, keyValueStn)
                          )
                        : Caf.array(variableDefinition, (v, i) => {
                            let temp1;
                            return AssignmentStn(
                              (temp1 = v.identifierStn) != null ? temp1 : v,
                              !toClause && i === 0
                                ? AccessorStn(fromId, iId.getValueStn())
                                : iId
                            );
                          })
                      : undefined,
                    whenClause
                      ? IfStn(whenClause, invokeWithClauseAndPush)
                      : invokeWithClauseAndPush,
                    !fromObjectClause
                      ? byId ||
                        (byClauseCompileTimeValue != null &&
                          !floatEq(1, Math.abs(byClauseCompileTimeValue)))
                        ? byClauseCompileTimeValue &&
                          byClauseCompileTimeValue < 0
                          ? AssignmentStn(
                              { operator: "-" },
                              iId,
                              NumberLiteralStn({
                                value: Math.abs(byClauseCompileTimeValue)
                              })
                            )
                          : AssignmentStn(
                              { operator: "+" },
                              iId,
                              byId ||
                                NumberLiteralStn({
                                  value: byClauseCompileTimeValue
                                })
                            )
                        : byClauseCompileTimeValue < 0
                        ? UnaryOperatorStn({ operand: "--", tail: true }, iId)
                        : UnaryOperatorStn({ operand: "++", tail: true }, iId)
                      : undefined
                  )
                ),
              returnNullIfFalse
                ? BinaryOperatorStn(
                    { operator: "||" },
                    intoId,
                    PureJsStn("null")
                  )
                : intoId ||
                    toId ||
                    NumberLiteralStn({ value: toCompileTimeValue })
            );
          };
          this.prototype.generateFind = function({
            fromClause,
            withClause,
            whenClause
          }) {
            let iterable, variableDefinition;
            ({ iterable, variableDefinition } = this.labeledChildren);
            return FunctionInvocationStn(
              IdentifierStn({ identifier: "Caf.find" }),
              this.resolveStnParams(
                fromClause,
                { f: withClause },
                { f: whenClause }
              )
            );
          };
          this.prototype.generateRuntimeBackedIteration = function(
            method,
            {
              fromClause,
              intoClause,
              injectClause,
              withClause,
              whenClause,
              withKeyClause
            }
          ) {
            let variableDefinition, base;
            ({ variableDefinition } = this.labeledChildren);
            if (
              (Caf.exists(variableDefinition) &&
                (Caf.exists((base = variableDefinition.children)) &&
                  base.length)) > 0 &&
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
                intoClause != null ? intoClause : injectClause,
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
/* 88 */
/*!********************************************************************************!*\
  !*** ./source/CaffeineScript/SemanticTree/TransformOnlyStns/StandardImport.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return __webpack_require__(/*! ../../StandardImport */ 16).mergeWithSelf(__webpack_require__(/*! ../BasicStns */ 27));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 89 */
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
        this.getter({
          extractSource: function() {
            return this.labeledChildren.extractSource;
          },
          extractActions: function() {
            return this.labeledChildren.extractActions;
          }
        });
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
            captureBase,
            conditionalSource,
            doExtract,
            temp;
          ({
            StatementsStn,
            AssignmentStn,
            AccessorStn,
            IdentifierStn,
            FunctionInvocationStn,
            ControlOperatorStn
          } = SemanticTree);
          temp = this;
          extractSource = temp.extractSource;
          extractActions = temp.extractActions;
          extractSource =
            extractSourceFromParent != null
              ? extractSourceFromParent
              : Caf.exists(extractSource) && extractSource.transform();
          ({ conditional } = this.props);
          return StatementsStn(
            (conditional || extractActions.length > 1) &&
              (extractSource.type !== "Reference" &&
                extractSource.type !== "Identifier")
              ? ((complexSource = extractSource),
                (captureBase = AssignmentStn(
                  (extractSource = IdentifierStn()),
                  complexSource
                )),
                conditional
                  ? ((conditionalSource = captureBase), null)
                  : captureBase)
              : undefined,
            true
              ? ((doExtract = Caf.array(extractActions, (child, i) => {
                  let extractToIdentifier, extractChild, doSingleExtract;
                  extractToIdentifier = Caf.is(child, ExtractStn)
                    ? (extractChild = child).extractSource
                    : child;
                  doSingleExtract = AssignmentStn(
                    extractToIdentifier.assignToIdentifierStn,
                    extractToIdentifier.getTransformedExtractionStns(
                      extractSource
                    )
                  );
                  return extractChild
                    ? [
                        doSingleExtract,
                        extractChild.transform(
                          extractToIdentifier.assignToIdentifierStn
                        )
                      ]
                    : doSingleExtract;
                })),
                conditional
                  ? ControlOperatorStn(
                      FunctionInvocationStn(
                        IdentifierStn({ identifier: "Caf.exists" }),
                        conditionalSource != null
                          ? conditionalSource
                          : extractSource
                      ),
                      StatementsStn(doExtract)
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
/* 90 */
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
    [
      "peek",
      "AccessorStn",
      "ControlOperatorStn",
      "BinaryOperatorStn",
      "UndefinedStn",
      "AssignmentStn",
      "IdentifierStn"
    ],
    [global, __webpack_require__(/*! ./StandardImport */ 88)],
    (
      peek,
      AccessorStn,
      ControlOperatorStn,
      BinaryOperatorStn,
      UndefinedStn,
      AssignmentStn,
      IdentifierStn
    ) => {
      let ExtractToIdentifierStn;
      return (ExtractToIdentifierStn = Caf.defClass(
        class ExtractToIdentifierStn extends __webpack_require__(/*! ../BaseStn */ 23) {},
        function(ExtractToIdentifierStn, classSuper, instanceSuper) {
          this.getter({
            assignToIdentifierStn: function() {
              let temp, temp1;
              return (temp =
                (temp1 = this.extractAs) != null
                  ? temp1
                  : peek(this.extractPathExtensions)) != null
                ? temp
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
            stn = AccessorStn(extractSource, this.bastIdentifier);
            return (extensions = this.extractPathExtensions)
              ? (Caf.each2(
                  extensions,
                  extension => (stn = AccessorStn(stn, extension))
                ),
                stn)
              : stn;
          };
          this.prototype.getTransformedExtractionStns = function(
            extractSource
          ) {
            let tempIdentifierStn;
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
/* 91 */
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
      __webpack_require__(/*! caffeine-eight */ 92),
      __webpack_require__(/*! ./CafParseNodeBaseClass */ 93)
    ],
    (Parser, isFunction) => {
      let CaffeineScriptParser;
      return (CaffeineScriptParser = Caf.defClass(
        class CaffeineScriptParser extends Parser {},
        function(CaffeineScriptParser, classSuper, instanceSuper) {
          this.nodeBaseClass = __webpack_require__(/*! ./CafParseNodeBaseClass */ 93);
          Caf.each2(__webpack_require__(/*! ./Rules */ 94).modules, mod =>
            isFunction(mod) ? mod.call(this) : this.rule(mod)
          );
          this.prototype.parse = function(source, options) {
            return instanceSuper.parse.call(
              this,
              __webpack_require__(/*! ./Preprocessors */ 121).preprocess(source),
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
/* 92 */
/*!********************************************************************************!*\
  !*** external "require('caffeine-eight' /* ABC - not inlining fellow NPM *_/)" ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('caffeine-eight' /* ABC - not inlining fellow NPM */);

/***/ }),
/* 93 */
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
      __webpack_require__(/*! caffeine-eight */ 92),
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
              let base;
              return (
                this.stnExtension ||
                (Caf.exists((base = this.presentMatches[0])) &&
                  base.isStnExtension)
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
/* 94 */
/*!**************************************************!*\
  !*** ./source/CaffeineScript/Rules/index.coffee ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./namespace */ 5);

module.exports.addModules({
  Accessors: __webpack_require__(/*! ./Accessors */ 95),
  ArrayLiterals: __webpack_require__(/*! ./ArrayLiterals */ 96),
  Assignment: __webpack_require__(/*! ./Assignment */ 97),
  Blocks: __webpack_require__(/*! ./Blocks */ 98),
  Classes: __webpack_require__(/*! ./Classes */ 99),
  Comments: __webpack_require__(/*! ./Comments */ 100),
  Comprehensions: __webpack_require__(/*! ./Comprehensions */ 101),
  ControlStructures: __webpack_require__(/*! ./ControlStructures */ 102),
  DestructuringAssignment: __webpack_require__(/*! ./DestructuringAssignment */ 103),
  Expressions: __webpack_require__(/*! ./Expressions */ 104),
  Extract: __webpack_require__(/*! ./Extract */ 105),
  Functions: __webpack_require__(/*! ./Functions */ 106),
  KeywordLiterals: __webpack_require__(/*! ./KeywordLiterals */ 107),
  Literals: __webpack_require__(/*! ./Literals */ 108),
  NumberLiterals: __webpack_require__(/*! ./NumberLiterals */ 109),
  ObjectLiterals: __webpack_require__(/*! ./ObjectLiterals */ 110),
  Operators: __webpack_require__(/*! ./Operators */ 111),
  RegExp: __webpack_require__(/*! ./RegExp */ 112),
  Require: __webpack_require__(/*! ./Require */ 113),
  Root: __webpack_require__(/*! ./Root */ 114),
  Statements: __webpack_require__(/*! ./Statements */ 115),
  StringLiterals: __webpack_require__(/*! ./StringLiterals */ 116),
  TagMacros: __webpack_require__(/*! ./TagMacros */ 117),
  Tokens: __webpack_require__(/*! ./Tokens */ 118),
  ValueLists: __webpack_require__(/*! ./ValueLists */ 119),
  Values: __webpack_require__(/*! ./Values */ 120)
});


/***/ }),
/* 95 */
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
/* 96 */
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
          brackedArray:
            "openBracket_ valueList _comma_optionalNewLine? _closeBracket",
          implicitArray: [
            "start:expression optionalComma simpleValueList _comma_?",
            "start:literal _ simpleValueList _comma_?",
            { stnFactory: "ArrayStn", stnProps: { implicitArray: true } }
          ],
          implicitArrayWithoutImplicitObjects: [
            "start:expression optionalComma simpleValueListWithoutImplicitObjects",
            "start:literal _ simpleValueListWithoutImplicitObjects",
            { stnFactory: "ArrayStn", stnProps: { implicitArray: true } }
          ]
        },
        { stnFactory: "ArrayStn" }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 97 */
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
        {
          assignmentExtension:
            "_? assignmentOperator singleValueOrImplicitArray"
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
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 98 */
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
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 92)],
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
/* 99 */
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
/* 100 */
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
          _OrEnd: ["_", "end"],
          comment: [
            { pattern: "/##[^\n]*/ unparsedBlock*" },
            { pattern: /\ *#([^\n$\w\u007f-\uffff]+[^\n]*|(?=\n|$))/ }
          ],
          _end: /( *(\n|; *|$))+|( *(?=[\)}]))/,
          lineStartComment: ["comment _end", "_end"],
          lineEndComment: "_? comment? _end lineStartComment*"
        },
        {
          getPresent: function() {
            return false;
          }
        },
        { onlyCommentsRemain: "lineEndComment /$/" }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 101 */
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
        comprehensionValueClauseType: /(from|in|into|returning|inject|when|with|to|by|til|do|skip|short)(-[a-z]+)*\b/
      });
      this.rule(
        {
          comprehensionOutputType: /(object|array|reduce|each|find)\b/,
          comprehensionIterationType: /(from|in|to|til)(-[a-z]+)*\b/
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
            "!comprehensionIterationType argDef optionalArg* _ &comprehensionIterationType"
        },
        { stnFactory: "FunctionDefinitionArgsStn" }
      );
      this.rule({
        optionalArg: "_comma_optionalNewLine !withOrDo argDef",
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
/* 102 */
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
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 92)],
    Extensions => {
      return {
        controlStatement: [
          {
            stnFactory: "ControlOperatorStn",
            pattern: [
              "ifUnless _ expression:expressionWithOneLessBlock body:block  elseBody:elseClause?",
              "ifUnless _ expression:expressionWithOneLessBlock body:block? elseBody:elseClause",
              "ifUnless _ expression:expression                 thenClause  elseBody:elseClause?"
            ],
            stnProps: function() {
              return { operand: this.ifUnless.toString() };
            }
          },
          {
            stnFactory: "WhileStn",
            pattern: [
              "whileUntil _ expression:expressionWithOneLessBlock body:block  elseBody:elseClause?",
              "whileUntil _ expression:expressionWithOneLessBlock body:block? elseBody:elseClause",
              "whileUntil _ expression:expression                 thenClause  elseBody:elseClause?"
            ],
            stnProps: function() {
              return { operand: this.whileUntil.toString() };
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
          rule: "switchBodyBlockRule"
        }),
        switchBodyBlockRule: ":switchBody end?",
        switchWhenClause: [
          "end? when _ whenValue:expressionWithOneLessBlock thenDo:block",
          "end? when _ whenValue:implicitArrayOrExpression  thenDo:thenClause",
          { stnFactory: "SwitchWhenStn" }
        ],
        thenClause:
          "controlStructorClauseJoiner thenDo _? body:lineOfStatementsOrBlock",
        elseClause:
          "controlStructorClauseJoiner else   _? lineOfStatementsOrBlock",
        controlStructorClauseJoiner: "_? end?",
        catch: /catch\b/,
        try: /try\b/,
        whileUntil: /(while|until)\b/,
        ifUnless: /(if|unless)\b/,
        thenDo: /(then|do)\b/,
        when: /when\b/,
        else: /else\b/
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 103 */
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
            "structure:destructuringTarget _? '=' _? value:singleValueOrImplicitArray"
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
              "element:arrayDestructuringElement _comma_optionalNewLine arrayDestructuringList"
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
              "element:objectDestructuringElement _comma_optionalNewLine objectDestructuringList"
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
/* 104 */
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
      __webpack_require__(/*! caffeine-eight */ 92),
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
          implicitArrayWithoutImplicitObjectsOrExpression: [
            "implicitArrayWithoutImplicitObjects",
            "expression"
          ],
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
                let base;
                return {
                  operand: (this.prefix || this.postfix).toString(),
                  tail: !!(Caf.exists((base = this.postfix)) && base.toString())
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
                    offset += match.matchLength;
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
/* 105 */
/*!************************************************!*\
  !*** ./source/CaffeineScript/Rules/Extract.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 92)],
    Extensions => {
      return {
        extractExpression: [
          "extractSource:value _ /extract/ conditionalExtract:conditionalExtract? extractActions",
          {
            stnFactory: "ExtractStn",
            stnProps: function() {
              return { conditional: !!this.conditionalExtract };
            }
          }
        ],
        extractActions: ["_ extractionTarget", "_? extractBodyBlock"],
        extractBodyBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
          rule: "extractBody"
        }),
        extractBody: "end* extractBodyLine+",
        extractBodyLine: "extractionTarget end",
        conditionalExtract: /\?/,
        extractionTarget: "objectExtractionList",
        objectExtractionList: [
          "extractAction:extractAction _comma_optionalNewLine objectExtractionList",
          "extractAction:extractAction"
        ],
        extractAction: ["chainExtract", "extractToIdentifier"],
        chainExtract: [
          "extractSource:extractToIdentifier _ /extract/ conditionalExtract:conditionalExtract? extractActions",
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
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 106 */
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
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 92)],
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
          "argDef _comma_optionalNewLine argDefList",
          "argDef _ argDefList",
          "argDef"
        ],
        argDef: [
          "at:/@/? target:identifier argIdentifierExtension?",
          "target:destructuringTarget argIdentifierExtension?",
          {
            stnFactory: "FunctionDefinitionArgStn",
            stnProps: function() {
              let base;
              return {
                rest: !!(
                  Caf.exists((base = this.argIdentifierExtension)) &&
                  base.ellipsis
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
              let base;
              return Caf.exists((base = this.values)) && base.getStn();
            }
          }
        ]
      };
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 107 */
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
/* 108 */
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
/* 109 */
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
            return { value: this.toString().replace(/^(-?)0+(\d)/, "$1$2") };
          }
        }
      );
    };
  })();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ }),
/* 110 */
/*!*******************************************************!*\
  !*** ./source/CaffeineScript/Rules/ObjectLiterals.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
let Caf = __webpack_require__(/*! caffeine-script-runtime */ 12);
Caf.defMod(module, () => {
  let parentImports;
  return Caf.importInvoke(
    ["Extensions"],
    (parentImports = [
      global,
      __webpack_require__(/*! ../StandardImport */ 16),
      __webpack_require__(/*! caffeine-eight */ 92),
      __webpack_require__(/*! ../StnRegistry */ 19)
    ]),
    Extensions => {
      return Caf.importInvoke(
        ["IndentBlocks", "ObjectStn"],
        [parentImports, Extensions],
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
                multilineImplicitObject:
                  "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression multilineImplicitObjectExtension+",
                multilineExplicitObject:
                  "explicitObjectLine multilineExplicitObjectExtension+"
              },
              {
                getStn: function() {
                  let children;
                  children = Caf.array(this.getMatchStns(), m =>
                    m instanceof ObjectStn.class ? m.children : m
                  );
                  return ObjectStn(children);
                }
              }
            );
            this.rule({
              explicitObjectLine: [
                "oneLineExplicitObject",
                "!implicitObjectWithTwoOrMorePropsOnOneLine explicitValuePropWithComplexExpression"
              ],
              multilineImplicitObjectExtension:
                "end+ !implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression",
              multilineExplicitObjectExtension: "end+ explicitObjectLine",
              implicitObjectWithTwoOrMorePropsOnOneLine: [
                "literalProp _ propertyList",
                "valueProp _comma_optionalNewLine propertyList"
              ],
              explicitPropertyList: [
                "valueProp optionalComma explicitPropertyList",
                "structurableProp _comma_optionalNewLine? explicitPropertyList",
                "explicitValuePropWithComplexExpression"
              ],
              propertyList: [
                "valueProp optionalComma propertyList",
                "valuePropWithComplexExpression"
              ],
              implicitObjectStart: "propName _colon_"
            });
            this.rule(
              {
                literalProp: "propName _colon_ propValue:literal",
                valueProp:
                  "propName _colon_ propValue:singleValueOrImplicitArrayWithoutImplicitObjects",
                valuePropWithComplexExpression:
                  "propName _colon_ propValue:singleValueOrImplicitArrayWithoutImplicitObjects"
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
                  "!regExpLiteral !/then\\s/ str:identifier &_colon_",
                  "!regExpLiteral !/then\\s/ str:unquotedString &/:/",
                  "quotedString:stringLiteral &stringLiteralPropNameTail"
                ]
              },
              {
                stnFactory: "ObjectPropNameStn",
                stnProps: function() {
                  let base;
                  return {
                    value: Caf.exists((base = this.str)) && base.toString(),
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
/* 111 */
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
/* 112 */
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
      __webpack_require__(/*! caffeine-eight */ 92),
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
              let base, base1, base2;
              return this.regExpMiddle
                ? {
                    value: this.regExpMiddle.toString(),
                    modifiers:
                      Caf.exists((base = this.regExpModifiers)) &&
                      base.toString()
                  }
                : {
                    modifiers:
                      Caf.exists((base1 = this.regExpBlockModifiers)) &&
                      (Caf.exists((base2 = base1.regExpModifiers)) &&
                        base2.toString())
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
        multilineRegExpComment: { pattern: "/^|\\n|\\s/ comment" },
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
/* 113 */
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
/* 114 */
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
/* 115 */
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
      __webpack_require__(/*! caffeine-eight */ 92),
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
          "implicitArrayOrExpression !tailControlOperator _? comment?",
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
          "end &/\\??\\.(?!\\d)/ valueExtension+ binaryOperatorSequenceExtension?"
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
/* 116 */
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
      __webpack_require__(/*! caffeine-eight */ 92),
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
              pattern: "/\"\"\"|'''/",
              getStn: function() {
                return StringStn({ parseTreeNode: this, value: "" });
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
              let base;
              if (this.mid.matchLength > 0) {
                appendTo.push(
                  StringStn({ parseTreeNode: this, value: this.mid.toString() })
                );
              }
              Caf.exists((base = this.interpolation)) &&
                base.getStnChildren(appendTo);
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
            "interpolationStart interpolationEnd expression:toEolAndBlock",
            "interpolationStart _OrEnd interpolationEnd",
            "interpolationStart _? expression:root interpolationEnd",
            "interpolationStart expression:block end? interpolationEnd"
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
              let expression, base;
              if ((expression = this.interpolation.expression)) {
                appendTo.push(expression.getStn());
              }
              if (this.mid.matchLength > 0) {
                appendTo.push(
                  StringStn({ parseTreeNode: this, value: this.mid.toString() })
                );
              }
              Caf.exists((base = this.interpolationContinues)) &&
                base.getStnChildren(appendTo);
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
/* 117 */
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
/* 118 */
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
      _comma_: /\ *, */,
      _comma_optionalNewLine: /\ *, *\n*/,
      optionalComma: /\ *, *\n*|\ */,
      _arrow: /\ *[-~=]>/,
      openParen_: /\( */,
      _closeParen: /\ *\)/,
      openBracket_: /\[ *(\n*(?!\s))?/,
      _closeBracket: /[ \n]*\]/,
      openCurly_: /\{ */,
      _closeCurly: /\ *\}/,
      _else: /(( *\n)+| +)else/,
      ellipsis: "'...'",
      reservedWord: /(import|true|false|null|undefined|global|require|module|eval|super|class|new|this|delete|instanceof|is|isnt|switch|when|then|else|if|until|while|unless|array|each|find|object|from|in|with|do|into|returning|with-key|to|by|til|try|catch|throw|and|or|not|extract|as|for|return|break|of|yes|on|no|off|typeof|reduce|inject|promise|await|short|skip|mixin|tap)(-[a-z]+)*\b(?![-])/,
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
/* 119 */
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
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 92)],
    Extensions => {
      return function() {
        this.rule({ valueList: ["simpleValueList", "valueListBlock"] });
        this.rule({
          valueListBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
            rule: "valueListBlockSubParse"
          }),
          valueListBlockSubParse: "end* listItemStatement+"
        });
        this.rule({
          simpleValueList: [
            "element:listItemExpression optionalComma simpleValueList",
            "element:listItemExpression _comma_ valueListBlock",
            "element:listItemExpression"
          ],
          simpleValueListWithoutImplicitObjects:
            "!implicitObjectStart simpleValueListWithoutImplicitObjectOptions",
          simpleValueListWithoutImplicitObjectOptions: [
            "element:listItemExpression optionalComma simpleValueListWithoutImplicitObjects",
            "element:listItemExpression _comma_ valueListBlock",
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
                "lineStartStatementWithoutEnd newLineStatementExtension* _comma_? end"
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
/* 120 */
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
    [global, __webpack_require__(/*! ../StandardImport */ 16), __webpack_require__(/*! caffeine-eight */ 92)],
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
          simpleInvocableValue: [
            "require",
            "tagMacro",
            "globalIdentifier",
            "this",
            "super",
            "thisProperty",
            "identifierReference"
          ],
          functionInvocation: [
            "simpleInvocableValue extendedFunctionInvocationExtension+",
            "literal accessorExtension extendedFunctionInvocationExtension+",
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
          singleValueOrImplicitArray: [
            "_? _end? implicitArrayOrExpression",
            "/ */ comment? rValueBlock"
          ],
          singleValueOrImplicitArrayWithoutImplicitObjects: [
            "_? _end? implicitArrayWithoutImplicitObjectsOrExpression",
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
/* 121 */
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
              temp;
            return commentLineIndex >= 0
              ? ((indentChange = 0),
                (padding = null),
                (blockCommentIndentLevel = -1),
                (inBlockComment = false),
                (i = commentLineIndex),
                (() => {
                  while (i < stopIndex) {
                    let line, lineIndentLevel, commentOnlyLine;
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
                    temp = i++;
                  }
                  return temp;
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
          this.preprocess = source => this.normalizeIndentation(source);
        }
      ));
    }
  );
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 11)(module)))

/***/ })
/******/ ]);