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
                preBodyStatements,
                bodyJsArray,
                constructorSuperIndex,
                beforeSuper,
                afterSuper,
                superJs;
              ({ returnIgnored, isConstructor, bound } = this.props);
              returnIgnored || (returnIgnored = isConstructor);
              [argsDef, body] = this.children;
              statements = [];
              argsDef = argsDef
                ? ((preBodyStatements = Caf.each(
                    argsDef.children,
                    [],
                    (arg, cafK, cafInto) => {
                      cafInto.push(arg.getFunctionPreBodyStatementsJs());
                    }
                  )),
                  argsDef.toJs())
                : "()";
              bodyJsArray =
                Caf.exists(body) && body.toFunctionBodyJsArray(!returnIgnored);
              statements = compactFlatten(
                this.props.isConstructor
                  ? ((constructorSuperIndex = Caf.extendedEach(
                      bodyJsArray,
                      undefined,
                      (v, i, cafInto, cafBrk) => {
                        return v.match(/^super\(/) && (cafBrk(), i);
                      }
                    )),
                    constructorSuperIndex != null && constructorSuperIndex >= 0
                      ? ((beforeSuper = bodyJsArray.slice(
                          0,
                          constructorSuperIndex
                        )),
                        (afterSuper = bodyJsArray.slice(
                          constructorSuperIndex + 1,
                          bodyJsArray.length
                        )),
                        (superJs = bodyJsArray[constructorSuperIndex]),
                        [
                          this.getAutoLets(),
                          beforeSuper,
                          superJs,
                          preBodyStatements,
                          afterSuper
                        ])
                      : [
                          this.getAutoLets(),
                          "super(...arguments)",
                          preBodyStatements,
                          bodyJsArray
                        ])
                  : [this.getAutoLets(), preBodyStatements, bodyJsArray]
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
