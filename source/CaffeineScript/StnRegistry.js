"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StnRegistry,
    BaseClass,
    isFunction,
    isString,
    Error,
    formattedInspect,
    log;
  ({
    BaseClass,
    isFunction,
    isString,
    Error,
    formattedInspect,
    log
  } = Caf.import(
    ["BaseClass", "isFunction", "isString", "Error", "formattedInspect", "log"],
    [require("./StandardImport"), global]
  ));
  return StnRegistry = Caf.defClass(
    class StnRegistry extends BaseClass {
      constructor() {
        super(...arguments);
        this.registered = {};
      }
    },
    function(StnRegistry, classSuper, instanceSuper) {
      this.singletonClass();
      this.register = function(stn) {
        return this.singleton.register(stn);
      };
      this.get = function(stnFactoryName) {
        let out;
        return isFunction(stnFactoryName)
          ? stnFactoryName
          : isString(stnFactoryName)
              ? (!(out = this.singleton.registered[stnFactoryName])
                  ? (() => {
                      throw new Error(
                        `stnFactoryName not found: ${Caf.toString(
                          formattedInspect(stnFactoryName)
                        )}`
                      );
                    })()
                  : undefined, out)
              : undefined;
      };
      this.prototype.register = function(stn) {
        log(`register: ${Caf.toString(stn.class.getName())}`);
        return this.registered[stn.class.getName()] = stn;
      };
    }
  );
});
