"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StnRegistry, FunctionDefinitionStn, compactFlatten;
  ({ compactFlatten } = Caf.import(["compactFlatten"], [
    require("../../StandardImport"),
    global
  ]));
  StnRegistry = require("../../StnRegistry");
  return FunctionDefinitionStn = Caf.defClass(
    class FunctionDefinitionStn
      extends require("../ScopeStnMixin")(require("../BaseStn")) {
      constructor(props, children) {
        let onlyChild;
        if (children.length === 1) {
          [onlyChild] = children;
          if (
            !(onlyChild instanceof StnRegistry.FunctionDefinitionArgsStn.class)
          ) {
            children = [StnRegistry.FunctionDefinitionArgsStn(), children[0]];
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
          StnRegistry.StatementsStn(compactFlatten(statements))
        ]);
      };
      this.getter({
        needsParens: function() {
          return false;
        },
        needsParensAsStatement: function() {
          return !this.props.bound;
        },
        childrenToUpdateScope: function() {
          return compactFlatten([this.statements]);
        }
      });
      this.prototype.updateScope = function() {
        instanceSuper.updateScope.apply(this, arguments);
        return this.arguments
          ? (Caf.each(this.arguments.argumentNameList, {}, (name, k, into) => {
              into[k] = this.addArgumentName(name);
            }), this.arguments.updateScope({
              addIdentifierUsed: identifier => {
                return this.addIdentifierUsed(identifier);
              },
              addIdentifierAssigned: identifier => {
                return this.addArgumentName(identifier);
              }
            }))
          : undefined;
      };
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
          ? (statements = Caf.each(argsDef.children, [], (arg, k, into) => {
              let preBodyStatements;
              if (preBodyStatements = arg.getFunctionPreBodyStatementsJs()) {
                into.push(preBodyStatements);
              }
            }), argsDef.toJs())
          : "()";
        bodyJs = Caf.exists(body) && body.toFunctionBodyJsArray(!returnIgnored);
        if (this.props.isConstructor) {
          constructorSuperIndex = Caf.extendedEach(bodyJs, undefined, (
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
