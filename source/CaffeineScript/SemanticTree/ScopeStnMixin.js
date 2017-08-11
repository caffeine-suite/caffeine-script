"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let UniqueIdentifierHandle,
    lowerCamelCase,
    Error,
    log,
    isString,
    merge,
    mergeInto;
  ({ lowerCamelCase, Error, log, isString, merge, mergeInto } = Caf.import(
    ["lowerCamelCase", "Error", "log", "isString", "merge", "mergeInto"],
    [global, require("../StandardImport")]
  ));
  UniqueIdentifierHandle = require("./UniqueIdentifierHandle");
  return function(toExtend) {
    let ScopeStnMixin;
    return (ScopeStnMixin = Caf.defClass(
      class ScopeStnMixin extends toExtend {
        constructor() {
          super(...arguments);
          this._uniqueIdentifierHandles = this._boundUniqueIdentifiers = null;
          this._scopeUpdated = false;
        }
      },
      function(ScopeStnMixin, classSuper, instanceSuper) {
        let normalizePerferredName;
        this.abstractClass();
        this.normalizePerferredName = normalizePerferredName = function(
          preferredName = "temp"
        ) {
          return lowerCamelCase(
            preferredName.match(/^caf/i)
              ? preferredName
              : `caf ${Caf.toString(preferredName)}`
          );
        };
        this.prototype.addIdentifierUsed = function(identifier) {
          if (this._boundUniqueIdentifiers) {
            throw new Error(
              "bindUniqueIdentifier must be called AFTER all calls to addIdentifierUsed"
            );
          }
          return (this.identifiersUsed[identifier] = true);
        };
        this.prototype.addArgumentName = function(identifier) {
          return (this.argumentNames[identifier] = true);
        };
        this.prototype.addIdentifierAssigned = function(
          identifier,
          initializer
        ) {
          return identifier
            ? (
                this._boundUniqueIdentifiers
                  ? (() => {
                      throw new Error(
                        "bindUniqueIdentifier must be called AFTER all calls to addIdentifierAssigned"
                      );
                    })()
                  : undefined,
                (this.identifiersAssigned[identifier] = initializer || true)
              )
            : undefined;
        };
        this.getter({
          uniqueIdentifier: function(preferredName) {
            preferredName = normalizePerferredName(preferredName);
            return this.getUniqueIdentifierHandle(preferredName).identifier;
          },
          uniqueIdentifierHandle: function(preferredName) {
            preferredName = normalizePerferredName(preferredName);
            return this.addUniqueIdentifierHandle(
              new UniqueIdentifierHandle(preferredName)
            );
          }
        });
        this.prototype.addUniqueIdentifierHandle = function(uih) {
          return !uih.scope
            ? ((uih.scope = this), this.uniqueIdentifierHandles.push(uih), uih)
            : undefined;
        };
        this.prototype.bindUniqueIdentifier = function(
          preferredName,
          uniqueIdentifierHandle
        ) {
          let identifier;
          preferredName = normalizePerferredName(preferredName);
          identifier = this.getAvailableIdentifierName(preferredName);
          this.boundUniqueIdentifiers[identifier] = uniqueIdentifierHandle;
          this.identifiersAssigned[identifier] = true;
          return identifier;
        };
        this.prototype.getAvailableIdentifierName = function(preferredName) {
          let identifiersUsed, count, name;
          preferredName = normalizePerferredName(preferredName);
          return !this._scopeUpdated
            ? log.error({
                ScopeStnMixin: {
                  getAvailableIdentifierName: [
                    `cannot be called before updateScope completes: ${Caf.toString(
                      this.className
                    )}`,
                    new Error()
                  ]
                }
              })
            : (
                (identifiersUsed = this.identifiersUsedOrAssigned),
                !identifiersUsed[preferredName]
                  ? preferredName
                  : (
                      (count = 0),
                      (() => {
                        while (
                          identifiersUsed[
                            (name = `${Caf.toString(
                              preferredName
                            )}${Caf.toString((count += 1))}`)
                          ]
                        ) {
                          name;
                        }
                      })(),
                      name
                    )
              );
        };
        this.prototype.addChildScope = function(child) {
          return !(child === this)
            ? (this.childScopes || (this.childScopes = [])).push(child)
            : undefined;
        };
        this.prototype.bindAllUniqueIdentifiersRequested = function() {
          return this._uniqueIdentifierHandles
            ? Caf.each(
                this._uniqueIdentifierHandles,
                undefined,
                (uniqueIdentifierHandle, k, into) => {
                  uniqueIdentifierHandle.identifier;
                }
              )
            : undefined;
        };
        this.prototype.getAutoLets = function() {
          let identifiers;
          this.bindAllUniqueIdentifiersRequested();
          return this.props.identifiersAssigned &&
            (identifiers = this.requiredIdentifierLets).length > 0
            ? `let ${Caf.toString(identifiers.join(", "))}`
            : undefined;
        };
        this.prototype.getBareInitializers = function() {
          let identifiers;
          this.bindAllUniqueIdentifiersRequested();
          return this.props.identifiersAssigned &&
            (identifiers = this.requiredIdentifierLets).length > 0
            ? (
                (identifiers = Caf.each(
                  identifiers,
                  [],
                  (identifier, k, into) => {
                    if (identifier.match(/=/)) {
                      into.push(identifier);
                    }
                  }
                )),
                identifiers.length > 0
                  ? `${Caf.toString(identifiers.join("; "))}`
                  : undefined
              )
            : undefined;
        };
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          this.bindAllUniqueIdentifiersRequested();
          this.scope.addChildScope(this);
          Caf.each(
            this.getChildrenToUpdateScope(),
            undefined,
            (child, k, into) => {
              child.updateScope(this);
            }
          );
          return (this._scopeUpdated = true);
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
            return Caf.each(
              this.identifiersAssigned,
              [],
              (initializer, identifier, into) => {
                if (
                  !identifiersAssignedInParentScopes ||
                  !identifiersAssignedInParentScopes[identifier]
                ) {
                  into.push(
                    isString(initializer)
                      ? `${Caf.toString(identifier)} = ${Caf.toString(
                          initializer
                        )}`
                      : initializer.toJsExpression != null
                        ? `${Caf.toString(identifier)} = ${Caf.toString(
                            initializer.toJsExpression()
                          )}`
                        : identifier
                  );
                }
              }
            );
          },
          argumentNames: function() {
            let cafBase;
            return (
              (cafBase = this.props).argumentNames ||
              (cafBase.argumentNames = {})
            );
          },
          identifiersUsed: function() {
            let cafBase;
            return (
              (cafBase = this.props).identifiersUsed ||
              (cafBase.identifiersUsed = {})
            );
          },
          identifiersAssigned: function() {
            let cafBase;
            return (
              (cafBase = this.props).identifiersAssigned ||
              (cafBase.identifiersAssigned = {})
            );
          },
          identifiersUsedOrAssigned: function() {
            let out, scope, notDone;
            out = merge(this.identifiersUsed, this.identifiersAssigned);
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
          identifiersUsedButNotAssigned: function() {
            let assigned, ret;
            assigned = this.identifiersAssignedInParentThisOrChildrenScopes;
            ret = Caf.each(this.identifiersUsed, {}, (v, k, into) => {
              if (!assigned[k]) {
                into[k] = true;
              }
            });
            Caf.each(this.childScopes, undefined, (childScope, k, into) => {
              mergeInto(ret, childScope.identifiersUsedButNotAssigned);
            });
            return (this.props.identifiersUsedButNotAssigned = ret);
          },
          identifiersAssignedInParentThisOrChildrenScopes: function() {
            return merge(
              this.identifiersAssigned,
              this.identifiersAssignedInParentScopes
            );
          },
          identifiersAssignedInParentScopes: function() {
            return this.scope && this.scope !== this
              ? merge(
                  this.scope.identifiersAssignedInParentScopes,
                  this.scope.identifiersAssigned,
                  this.argumentNames
                )
              : undefined;
          }
        });
      }
    ));
  };
});
