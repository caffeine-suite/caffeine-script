"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let words, out;
  words = require("art-standard-lib").w(
    "abstract  else        instanceof  super boolean   enum        int         switch break     export      interface   synchronized byte      extends     let         this case      false       long        throw catch     final       native      throws char      finally     new         transient class     float       null        true const     for         package     try continue  function    private     typeof debugger  goto        protected   var default   if          public      void delete    implements  return      volatile do        import      short       while double    in          static      with"
  );
  return Caf.each2(words, word => (out[word] = true), null, (out = {}));
});
