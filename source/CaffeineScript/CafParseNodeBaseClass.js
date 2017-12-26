"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StnRegistry, CafParseNodeBaseClass, Nodes, isFunction, RootStn;
  ({ Nodes, isFunction, RootStn } = Caf.import(
    ["Nodes", "isFunction", "RootStn"],
    [
      global,
      require("./StandardImport"),
      require("caffeine-eight"),
      require("./StnRegistry")
    ]
  ));
  StnRegistry = require("./StnRegistry");
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
        return Caf.each(this.matches, [], (m, k, into) => {
          if ((m = Caf.isF(m.getStn) && m.getStn())) {
            into.push(m);
          }
        });
      };
      this.prototype.getStnFactory = function() {
        return StnRegistry.get(this.stnFactory);
      };
      this.prototype.getStnChildren = function(left) {
        return this.stnChildren
          ? isFunction(this.stnChildren) ? this.stnChildren() : this.stnChildren
          : Caf.each(this.nonStnExtensionMatches, [], (m, k, into) => {
              if ((m = m.getStn(left))) {
                into.push(m);
              }
            });
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
              (Caf.isF(this.stnProps) && this.stnProps()) || this.stnProps,
              left,
              this.getStnChildren()
            )
          : ((x = this.getStnChildren(left)),
            x.length === 1 ? x[0] : x.length === 0 ? left : x);
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
  ));
});
