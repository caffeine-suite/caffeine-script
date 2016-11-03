(function() {
  var BabelBridge, BaseObject, Extensions, Foundation, Nodes, Parser, RootStn, RuleNode, Rules, SemanticTree, a, compactFlatten, defineModule, inspect, isFunction, isString, log, m, present, w,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Foundation = require('art-foundation');

  BabelBridge = require('babel-bridge');

  log = Foundation.log, a = Foundation.a, w = Foundation.w, m = Foundation.m, defineModule = Foundation.defineModule, compactFlatten = Foundation.compactFlatten, present = Foundation.present, isFunction = Foundation.isFunction, BaseObject = Foundation.BaseObject, inspect = Foundation.inspect, isString = Foundation.isString;

  Parser = BabelBridge.Parser, Nodes = BabelBridge.Nodes, Extensions = BabelBridge.Extensions;

  RuleNode = Nodes.RuleNode;

  Rules = require('./Rules');

  SemanticTree = require("./SemanticTree");


  /*
  Eventualy I want all AstNodes to respond to:
  
  initially we should do:
    toJsExpression - no need for parens because it is either inside brackets already or the end of an expression.
    toStatement - no return-value needed; generate the nicest JS you can.
  
  eventually we should also do:
    toJsExpressionInList - add parens if a following comma would confusing things
    toJsExpression(operatorBefore, operatorAfter) - add parens if needed to ensure operator precidence
   */

  RootStn = require('./SemanticTree').RootStn;

  defineModule(module, function() {
    var CafParseNodeBaseClass;
    return CafParseNodeBaseClass = (function(superClass) {
      extend(CafParseNodeBaseClass, superClass);

      function CafParseNodeBaseClass() {
        return CafParseNodeBaseClass.__super__.constructor.apply(this, arguments);
      }

      CafParseNodeBaseClass.prototype.isImplicitArray = function() {
        return !!this.getImplicitArray();
      };

      CafParseNodeBaseClass.prototype.getImplicitArray = function() {
        var i, len, match, ref, ret;
        ref = this.matches;
        for (i = 0, len = ref.length; i < len; i++) {
          match = ref[i];
          if (ret = typeof match.getImplicitArray === "function" ? match.getImplicitArray() : void 0) {
            return ret;
          }
        }
        return false;
      };

      CafParseNodeBaseClass.prototype.getMatchStns = function() {
        var i, len, ref, results, v;
        ref = this.matches;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          m = ref[i];
          if (v = typeof m.getStn === "function" ? m.getStn() : void 0) {
            results.push(v);
          }
        }
        return results;
      };

      CafParseNodeBaseClass.prototype.getStnFactory = function() {
        if (isString(this.stnFactory) && !SemanticTree[this.stnFactory]) {
          throw new Error("stnFactory not found: " + (inspect(this.stnFactory)));
        }
        return SemanticTree[this.stnFactory] || this.stnFactory;
      };

      CafParseNodeBaseClass.prototype.getStnChildren = function(left) {
        var i, len, ref, results, v;
        if (this.stnChildren) {
          if (isFunction(this.stnChildren)) {
            return this.stnChildren();
          } else {
            return this.stnChildren;
          }
        } else {
          ref = this.nonStnExtensionMatches;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            m = ref[i];
            if (v = m.getStn(left)) {
              results.push(v);
            }
          }
          return results;
        }
      };

      CafParseNodeBaseClass.getter({
        isStnExtension: function() {
          var p;
          return this.stnExtension || ((p = this.presentMatches).length >= 1 && p[0].isStnExtension);
        },
        stnExtensionMatches: function() {
          var i, len, ref, results;
          ref = this.presentMatches;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            m = ref[i];
            if (m.getStn && m.isStnExtension) {
              results.push(m);
            }
          }
          return results;
        },
        nonStnExtensionMatches: function() {
          var i, len, ref, results;
          ref = this.presentMatches;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            m = ref[i];
            if (m.getStn && !m.isStnExtension) {
              results.push(m);
            }
          }
          return results;
        }
      });

      CafParseNodeBaseClass.prototype.getStn = function(left) {
        var currentStnLabel, extension, factory, i, label, len, pluralLabel, pluralRuleName, ref, ref1, ruleName, stn, x;
        stn = (factory = this.getStnFactory()) ? factory({
          parseTreeNode: this
        }, (typeof this.stnProps === "function" ? this.stnProps() : void 0) || this.stnProps, left, this.getStnChildren()) : (x = this.getStnChildren(left), x.length === 1 ? x[0] : x.length === 0 ? left : x);
        ref = this.stnExtensionMatches;
        for (i = 0, len = ref.length; i < len; i++) {
          extension = ref[i];
          stn = extension.getStn(stn);
        }
        if (stn != null ? stn.props : void 0) {
          currentStnLabel = stn.props.label;
          if (!currentStnLabel || this.label) {
            ref1 = this, label = ref1.label, ruleName = ref1.ruleName, pluralLabel = ref1.pluralLabel, pluralRuleName = ref1.pluralRuleName;
            stn.props.label = label || ruleName;
            stn.props.pluralLabel = pluralLabel || pluralRuleName;
          }
        }
        if (this.isRoot) {
          return RootStn(stn);
        } else {
          return stn;
        }
      };

      CafParseNodeBaseClass.prototype.getTransformedSemanticTree = function() {
        return this.getStn().transform();
      };

      CafParseNodeBaseClass.prototype.toJs = function() {
        return this.getTransformedSemanticTree().toJs();
      };

      return CafParseNodeBaseClass;

    })(Nodes.Node);
  });

}).call(this);
