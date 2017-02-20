let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BaseObject,
    objectWithout,
    toInspectedObjects,
    objectKeyCount,
    createObjectTreeFactory,
    compactFlatten,
    Error,
    isString,
    arrat,
    child,
    i;
  ({
    BaseObject,
    objectWithout,
    toInspectedObjects,
    objectKeyCount,
    createObjectTreeFactory,
    compactFlatten,
    Error,
    isString,
    arrat,
    child,
    i
  } = Caf.i(
    [
      "BaseObject",
      "objectWithout",
      "toInspectedObjects",
      "objectKeyCount",
      "createObjectTreeFactory",
      "compactFlatten",
      "Error",
      "isString",
      "arrat",
      "child",
      "i"
    ],
    [ArtFoundation, global]
  ));
  return BaseStn = Caf.defClass(
    class BaseStn extends BaseObject {},
    function() {
      let noChildren;
      this.abstractClass();
      noChildren = [];
      this.prototype.constructor = function(props, children = noChildren) {
        this.children = children;
        this.parseTreeNode = props.parseTreeNode;
        this.props = objectWithout(props, "parseTreeNode");
        return this.initLabeledChildren();
      };
      this.prototype.initLabeledChildren = function() {
        this.labeledChildren = {};
        return Caf.e(this.children, undefined, (child, k, into) => {
          let label, pluralLabel, base;
          child.parent = this;
          ({ label, pluralLabel } = child);
          this.labeledChildren[label] = child;
          return pluralLabel
            ? (base[pluralLabel] = (base = this.labeledChildren)[
                pluralLabel
              ] || []).push(child)
            : undefined;
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
            [name]: this.children.length === 0
              ? toInspectedObjects(props)
              : (a = [], objectKeyCount(props) > 0
                  ? a.push(props)
                  : undefined, a.concat(
                  Caf.e(this.children, [], (c, k, into) => {
                    return into.push(c.inspectedObjects);
                  })
                ))
          };
        },
        type: function() {
          return this.class.type;
        }
      });
      this.postCreate = function() {
        let parts;
        parts = this.getName().split(/Stn$/);
        this.type = parts[0];
        return Caf.getSuper().postCreate.apply(this, arguments);
      };
      this.newInstance = function(props, children) {
        return new this(props, children);
      };
      this.postCreateConcreteClass = function(options) {
        let classModuleState, hotReloadEnabled;
        ({ classModuleState, hotReloadEnabled } = options);
        Caf.getSuper().postCreateConcreteClass.apply(this, arguments);
        return createObjectTreeFactory({ class: this }, (props, children) => {
          return this.newInstance(props, children);
        });
      };
      this.prototype.findParent = function(stnTypePattern) {
        let parent, value;
        ({ parent } = this);
        return parent
          ? (value = parent.class.type, value === stnTypePattern ||
              value.match(stnTypePattern)
              ? parent
              : parent.findParent(stnTypePattern))
          : undefined;
      };
      this.prototype.find = function(stnTypePattern) {
        let a;
        a = Caf.e(this.children, [], (child, k, into) => {
          let value;
          value = child.class.type;
          return into.push(
            value === stnTypePattern || value.match(stnTypePattern)
              ? child
              : child.find(stnTypePattern)
          );
        });
        a = compactFlatten(a);
        return a.length === 0 ? null : a;
      };
      this.prototype.childrenToJs = function(joiner = "") {
        return Caf
          .e(this.children, [], (c, k, into) => {
            return into.push(c.toJs());
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
      this.prototype.toFunctionBodyJs = function() {
        return `return ${this.toJsExpression()}`;
      };
      this.prototype.transformChildren = function() {
        let ret, newChild;
        ret = null;
        arrat(
          child,
          Caf.in(
            i,
            this.children(
              child !== (newChild = child.transform())
                ? (ret = ret != null ? ret : this.children.slice(), ret[
                    i
                  ] = newChild)
                : undefined
            )
          )
        );
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
        return `{${this.toJsExpression({ skipParens: true })}}`;
      };
      return this;
    }
  );
});
