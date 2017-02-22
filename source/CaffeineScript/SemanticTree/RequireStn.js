let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    Path = require("path"),
    Fs = require("fs"),
    BaseStn = require("./BaseStn"),
    upperCamelCase,
    dashCase;
  ({ upperCamelCase, dashCase } = Caf.i(["upperCamelCase", "dashCase"], [
    ArtFoundation,
    global
  ]));
  Path;
  Fs;
  return RequireStn = Caf.defClass(
    class RequireStn extends BaseStn {},
    function() {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          this.rawIdentifier,
          `require('${this.requireString}')`
        );
        return Caf.getSuper(this).updateScope.apply(this, arguments);
      };
      this.getter({
        normalizedIdentifier: function() {
          return upperCamelCase(this.rawIdentifier);
        },
        npmIdentifier: function() {
          let name;
          require.resolve(name = dashCase(this.rawIdentifier));
          return name;
        },
        rawIdentifier: function() {
          return this.children[0].props.identifier;
        },
        requireString: function() {
          let relativeFile;
          return (relativeFile = this.findFileInPackage())
            ? relativeFile
            : this.npmIdentifier;
        }
      });
      this.prototype.findFileInPackage = function(
        options = this.parser.options
      ) {
        let sourceFile,
          sourceFiles,
          sourceRoot,
          normalizedIdentifier,
          directory,
          sourceDir,
          found,
          shouldContinue,
          files;
        ({ sourceFile, sourceFiles, sourceRoot } = options);
        return (sourceFile ||
          (sourceFile = sourceFiles != null && sourceFiles[0])) &&
          sourceRoot
          ? ({
              normalizedIdentifier
            } = this, directory = sourceDir = Path.resolve(
              Path.dirname(sourceFile)
            ), sourceRoot = Path.resolve(
              sourceRoot
            ), found = null, shouldContinue = true, (() => {
              while (shouldContinue) {
                found = Caf.ee(files = Fs.readdirSync(directory), null, (
                  name,
                  k,
                  into,
                  brk
                ) => {
                  let baseName, normalizedName, relative, _ret;
                  [baseName] = name.split(".");
                  normalizedName = upperCamelCase(baseName);
                  return (_ret = normalizedName === normalizedIdentifier
                    ? (relative = Path.relative(
                        sourceDir,
                        directory
                      ), relative = Path.join(
                        relative,
                        baseName
                      ), !relative.match(/^\./)
                        ? relative = `./${relative}`
                        : null, relative)
                    : null) &&
                    (brk(), _ret);
                });
                if (found || directory === sourceRoot) {
                  shouldContinue = false;
                }
                directory = Path.dirname(directory);
              }
            })(), found)
          : null;
      };
      this.prototype.toJs = function() {
        return this.rawIdentifier;
      };
      return this;
    }
  );
});
