let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("./SemanticTree"),
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
