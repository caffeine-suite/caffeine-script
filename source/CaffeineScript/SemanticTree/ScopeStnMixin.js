let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    StatementsStn = require("./StatementsStn"),
    LetStn = require("./LetStn"),
    UniqueIdentifierHandle = require("./UniqueIdentifierHandle"),
    Error,
    log,
    isString,
    merge,
    mergeInto,
    arrayToTruthMap;
  ({ Error, log, isString, merge, mergeInto, arrayToTruthMap } = Caf.i(
    ["Error", "log", "isString", "merge", "mergeInto", "arrayToTruthMap"],
    [ArtFoundation, global]
  ));
  StatementsStn;
  LetStn;
  UniqueIdentifierHandle;
  return function(toExtend) {
    return ScopeStnMixin = Caf.defClass(
      class ScopeStnMixin extends toExtend {
        constructor() {
          super(...arguments);
          this._uniqueIdentifierHandles = this._boundUniqueIdentifiers = null;
          this._scopeUpdated = false;
        }
      },
      function() {
        this.abstractClass();
        this.prototype.addIdentifierUsed = function(identifier) {
          if (this._boundUniqueIdentifiers) {
            throw new Error(
              "bindUniqueIdentifier must be called AFTER all calls to addIdentifierUsed"
            );
          }
          return this.identifiersUsed[identifier] = true;
        };
        this.prototype.addIdentifierAssigned = function(
          identifier,
          initializer
        ) {
          return identifier
            ? (this._boundUniqueIdentifiers
                ? (() => {
                    throw new Error(
                      "bindUniqueIdentifier must be called AFTER all calls to addIdentifierAssigned"
                    );
                  })()
                : undefined, this.identifiersAssigned[
                identifier
              ] = initializer || true)
            : undefined;
        };
        this.getter({
          uniqueIdentifier: function(preferredName = "_temp") {
            return this.getUniqueIdentifierHandle(preferredName).identifier;
          },
          uniqueIdentifierHandle: function(preferredName = "_temp") {
            return this.addUniqueIdentifierHandle(
              new UniqueIdentifierHandle(preferredName)
            );
          }
        });
        this.prototype.addUniqueIdentifierHandle = function(uih) {
          return !uih.scope
            ? (uih.scope = this, this.uniqueIdentifierHandles.push(uih), uih)
            : undefined;
        };
        this.prototype.bindUniqueIdentifier = function(
          preferredName,
          uniqueIdentifierHandle
        ) {
          let identifier;
          identifier = this.getAvailableIdentifierName(preferredName);
          this.boundUniqueIdentifiers[identifier] = uniqueIdentifierHandle;
          this.identifiersAssigned[identifier] = true;
          return identifier;
        };
        this.prototype.getAvailableIdentifierName = function(preferredName) {
          let identifiersUsed, count, name;
          return !this._scopeUpdated
            ? log.error({
                ScopeStnMixin: {
                  getAvailableIdentifierName: [
                    `cannot be called before updateScope completes: ${this.className}`,
                    new Error()
                  ]
                }
              })
            : (identifiersUsed = this.identifiersUsedOrAssigned, !identifiersUsed[
                preferredName
              ]
                ? preferredName
                : (count = 0, (() => {
                    while (
                      identifiersUsed[name = `${preferredName}${count += 1}`]
                    ) {
                      name;
                    }
                  })(), name));
        };
        this.prototype.addChildScope = function(child) {
          return !(child === this)
            ? (this.childScopes || (this.childScopes = [])).push(child)
            : undefined;
        };
        this.prototype.bindAllUniqueIdentifiersRequested = function() {
          return this._uniqueIdentifierHandles
            ? Caf.e(this._uniqueIdentifierHandles, undefined, (
                uniqueIdentifierHandle,
                k,
                into
              ) => {
                uniqueIdentifierHandle.identifier;
              })
            : undefined;
        };
        this.prototype.getAutoLets = function() {
          let identifiers;
          this.bindAllUniqueIdentifiersRequested();
          return this.props.identifiersAssigned &&
            (identifiers = this.requiredIdentifierLets).length > 0
            ? `let ${identifiers.join(", ")}`
            : undefined;
        };
        this.prototype.updateScope = function(scope) {
          this.scope = scope;
          this.bindAllUniqueIdentifiersRequested();
          this.scope.addChildScope(this);
          Caf.e(this.children, undefined, (child, k, into) => {
            child.updateScope(this);
          });
          return this._scopeUpdated = true;
        };
        this.getter({
          argumentNames: function() {
            return [];
          },
          uniqueIdentifierHandles: function() {
            return this._uniqueIdentifierHandles ||
              (this._uniqueIdentifierHandles = []);
          },
          boundUniqueIdentifiers: function() {
            return this._boundUniqueIdentifiers ||
              (this._boundUniqueIdentifiers = {});
          },
          requiredIdentifierLets: function() {
            let identifiersAssignedInParentScopes;
            ({ identifiersAssignedInParentScopes } = this);
            return Caf.e(this.identifiersAssigned, [], (
              initializer,
              identifier,
              into
            ) => {
              if (
                !identifiersAssignedInParentScopes ||
                !identifiersAssignedInParentScopes[identifier]
              ) {
                into.push(
                  isString(initializer)
                    ? `${identifier} = ${initializer}`
                    : initializer.toJsExpression != null
                        ? `${identifier} = ${initializer.toJsExpression()}`
                        : identifier
                );
              }
            });
          },
          identifiersUsed: function() {
            let base;
            return (base = this.props).identifiersUsed ||
              (base.identifiersUsed = {});
          },
          identifiersAssigned: function() {
            let base;
            return (base = this.props).identifiersAssigned ||
              (base.identifiersAssigned = {});
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
            ret = Caf.e(this.identifiersUsed, {}, (v, k, into) => {
              if (!assigned[k]) {
                into[k] = true;
              }
            });
            Caf.e(this.childScopes, undefined, (childScope, k, into) => {
              mergeInto(ret, childScope.identifiersUsedButNotAssigned);
            });
            return this.props.identifiersUsedButNotAssigned = ret;
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
                  arrayToTruthMap(this.argumentNames)
                )
              : undefined;
          }
        });
        return this;
      }
    );
  };
});
