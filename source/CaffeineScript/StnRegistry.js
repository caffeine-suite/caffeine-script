"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StnRegistry, BaseClass, isFunction, isString, Error, formattedInspect;
  ({ BaseClass, isFunction, isString, Error, formattedInspect } = Caf.import(
    ["BaseClass", "isFunction", "isString", "Error", "formattedInspect"],
    [require("./StandardImport"), global]
  ));
  return (StnRegistry = Caf.defClass(
    class StnRegistry extends BaseClass {},
    function(StnRegistry, classSuper, instanceSuper) {
      this.register = function(stn) {
        return (this[stn.class.getName()] = stn);
      };
      this.get = function(stnFactoryName) {
        let out;
        return isFunction(stnFactoryName)
          ? stnFactoryName
          : isString(stnFactoryName)
            ? (
                !(out = this[stnFactoryName])
                  ? (() => {
                      throw new Error(
                        `stnFactoryName not found: ${Caf.toString(
                          formattedInspect(stnFactoryName)
                        )}`
                      );
                    })()
                  : undefined,
                out
              )
            : undefined;
      };
    }
  ));
});
