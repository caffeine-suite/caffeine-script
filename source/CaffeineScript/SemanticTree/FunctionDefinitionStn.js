let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    FunctionDefinitionArgsStn = require("./FunctionDefinitionArgsStn"),
    StatementsStn = require("./StatementsStn"),
    ScopeStnMixin = require("./ScopeStnMixin"),
    BaseStn = require("./BaseStn"),
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
          let cafBase;
          return Caf.exists(cafBase = this.arguments) &&
            cafBase.argumentNames || [];
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
