"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["compactFlatten"],
    [global, require("../../StandardImport")],
    compactFlatten => {
      let StnRegistry, FunctionDefinitionStn;
      return (
        (StnRegistry = require("../../StnRegistry")),
        (FunctionDefinitionStn = Caf.defClass(
          class FunctionDefinitionStn extends require("../ScopeStnMixin")(
            require("../BaseStn")
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
              this._updatingArgumentScope = false;
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
                ? (Caf.each(
                    this.arguments.argumentNameList,
                    {},
                    (name, cafK, cafInto) => {
                      cafInto[cafK] = this.addArgumentName(name);
                    }
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
              let foundParent;
              if (this.props.bound === "auto") {
                this.props.bound = (foundParent = this.pretransformedStn.findParent(
                  /Class|FunctionDefinition/
                ))
                  ? foundParent.type === "Class"
                    ? false
                    : true
                  : false;
              }
              return instanceSuper.postTransform.apply(this, arguments);
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
                ? ((statements = Caf.each(
                    argsDef.children,
                    [],
                    (arg, cafK, cafInto) => {
                      let preBodyStatements;
                      if (
                        (preBodyStatements = arg.getFunctionPreBodyStatementsJs())
                      ) {
                        cafInto.push(preBodyStatements);
                      }
                    }
                  )),
                  argsDef.toJs())
                : "()";
              bodyJs =
                Caf.exists(body) && body.toFunctionBodyJsArray(!returnIgnored);
              if (this.props.isConstructor) {
                constructorSuperIndex = Caf.extendedEach(
                  bodyJs,
                  undefined,
                  (v, i, cafInto, cafBrk) => {
                    return v.match(/^super\(/) && (cafBrk(), i);
                  }
                );
              }
              statements = compactFlatten(
                constructorSuperIndex != null && constructorSuperIndex >= 0
                  ? ((beforeSuper = bodyJs.slice(0, constructorSuperIndex)),
                    (afterSuper = bodyJs.slice(
                      constructorSuperIndex + 1,
                      bodyJs.length
                    )),
                    (superJs = bodyJs[constructorSuperIndex]),
                    [
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
              body =
                statements.length > 0
                  ? `{${Caf.toString(statements.join("; "))};}`
                  : "{}";
              return bound
                ? `${Caf.toString(argsDef)} => ${Caf.toString(body)}`
                : `${Caf.toString(
                    isConstructor ? "constructor" : "function"
                  )}${Caf.toString(argsDef)} ${Caf.toString(body)}`;
            };
          }
        ))
      );
    }
  );
});
