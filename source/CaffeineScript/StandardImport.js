let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtStandardLib = require("art-standard-lib"),
    ArtClassSystem = require("art-class-system");
  return ArtStandardLib.merge(ArtStandardLib, ArtClassSystem);
});
