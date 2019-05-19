"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Nodes", "isFunction", "merge", "compactFlattenAllFast", "RootStn"],
    [
      global,
      require("./StandardImport"),
      require("caffeine-eight"),
      require("./StnRegistry")
    ],
    (Nodes, isFunction, merge, compactFlattenAllFast, RootStn) => {
      let StnRegistry, CafParseNodeBaseClass;
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
              ? new factory.class(
                  merge(
                    (Caf.isF(this.stnProps) && this.stnProps()) || this.stnProps
                  ),
                  compactFlattenAllFast(left, this.getStnChildren()),
                  null,
                  this
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
