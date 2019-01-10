"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["merge", "Error", "isString", "mergeInto"],
    [global, require("../StandardImport")],
    (merge, Error, isString, mergeInto) => {
      let UniqueIdentifierHandle;
      UniqueIdentifierHandle = require("./UniqueIdentifierHandle");
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
