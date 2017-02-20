let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation");
  return function() {
    return this.rule(
      {
        _: "/ +/ comment*",
        __: "/[ \n]+/ comment*",
        end: "lineCommentEnd+",
        comment: [
          { pattern: "/ *###[^#]((?!###)(.|\n))*###/ *" },
          { pattern: "/ *## */ unparsedBlock+" },
          { pattern: "/ *(\\#[^\n]*)/" }
        ],
        spaceOrEnds: /( *(\n|;|$))+/,
        lineCommentEnd: ["spaceOrEnds? comment+ spaceOrEnds", "spaceOrEnds"]
      },
      {
        getPresent: function() {
          return false;
        }
      }
    );
  };
});
