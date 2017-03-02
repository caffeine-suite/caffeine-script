let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    Path = require("path"),
    Fs = require("fs"),
    realRequire,
    BaseStn = require("./BaseStn"),
    upperCamelCase,
    dashCase;
  ({ upperCamelCase, dashCase } = Caf.i(["upperCamelCase", "dashCase"], [
    ArtFoundation,
    global
  ]));
  Path;
  Fs;
  realRequire = eval("require");
  return RequireStn = Caf.defClass(
    class RequireStn extends BaseStn {},
    function(RequireStn, classSuper, instanceSuper) {
      this.prototype.updateScope = function(scope) {
        this.scope = scope;
        this.scope.addIdentifierAssigned(
          this.rawIdentifier,
          `require('${this.requireString}')`
        );
        return instanceSuper.updateScope.apply(this, arguments);
      };
      this.getter({
        normalizedIdentifier: function() {
          return upperCamelCase(this.rawIdentifier);
        },
        npmIdentifier: function() {
          let name;
          realRequire.resolve(name = dashCase(this.rawIdentifier));
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
          (sourceFile = Caf.exists(sourceFiles) && sourceFiles[0])) &&
          sourceRoot
          ? ({
              normalizedIdentifier
            } = this, directory = sourceDir = Path.resolve(
              Path.dirname(sourceFile)
            ), sourceRoot = Path.resolve(
              sourceRoot
            ), found = null, shouldContinue = true, (() => {
              while (shouldContinue) {
                found = Caf.ee(files = Fs.readdirSync(directory), undefined, (
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
                        : undefined, relative)
                    : undefined) &&
                    (brk(), _ret);
                });
                if (found || directory === sourceRoot) {
                  shouldContinue = false;
                }
                directory = Path.dirname(directory);
              }
            })(), found)
          : undefined;
      };
      this.prototype.toJs = function() {
        return this.rawIdentifier;
      };
    }
  );
});
