"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Error", "getPadding", "max"],
    [global, require("./StandardImport")],
    (Error, getPadding, max) => {
      let Preprocessors;
      return (Preprocessors = Caf.defClass(
        class Preprocessors extends Object {},
        function(Preprocessors, classSuper, instanceSuper) {
          let mixedIndentationRegexp,
            tabIndentationRegexp,
            spaceIndentationRegexp,
            lineWithOnlyCommentRegexp,
            blockCommentStartRegexp,
            nonBlankLineRegexp,
            fixCommentLine;
          mixedIndentationRegexp = /(^|\n)( +\t|\t+ )/;
          tabIndentationRegexp = /(^|\n)\t/;
          spaceIndentationRegexp = /(^|\n) /;
          this.hasMixedIndentation = source => {
            return (
              mixedIndentationRegexp.test(source) ||
              (tabIndentationRegexp.test(source) &&
                spaceIndentationRegexp.test(source))
            );
          };
          this.normalizeIndentation = source => {
            let e;
            if (this.hasMixedIndentation(source)) {
              e = new Error(
                "file must only contain spaces OR tabs for indentation, not both"
              );
              e.failureIndex = 0;
              throw e;
            }
            return source.replace(/\t/g, " ");
          };
          lineWithOnlyCommentRegexp = /(^|\n) +#([^{\n$\w\u007f-\uffff]+[^\n]*|(?=\n|$))/;
          blockCommentStartRegexp = /(^|\n) *##/;
          nonBlankLineRegexp = /[^ ]/;
          fixCommentLine = function(
            lines,
            indentLevel,
            commentLineIndex,
            commentLineIndentLevel
          ) {
            let unindentedComment;
            return commentLineIndex >= 0 &&
              indentLevel !== commentLineIndentLevel
              ? (([unindentedComment] = lines[commentLineIndex].match(
                  /[^\ ].*$/
                )),
                (lines[commentLineIndex] =
                  getPadding(indentLevel) + unindentedComment))
              : undefined;
          };
          this.normalizeComments = source => {
            let previousIndentLevel,
              blockCommentIndentLevel,
              lastCommentLineStartIndex,
              lastCommentLineIndentLevel,
              inBlockComment,
              lines;
            return lineWithOnlyCommentRegexp.test(source)
              ? ((previousIndentLevel = 0),
                (blockCommentIndentLevel = 0),
                (lastCommentLineStartIndex = -1),
                (lastCommentLineIndentLevel = -1),
                (inBlockComment = false),
                Caf.each((lines = source.split("\n")), undefined, (line, i) => {
                  let indentLevel, commentOnlyLine;
                  if (nonBlankLineRegexp.test(line)) {
                    indentLevel = line.search(/[^\ ]/);
                    if (indentLevel <= blockCommentIndentLevel) {
                      inBlockComment = false;
                    }
                    if (!inBlockComment) {
                      if (
                        (commentOnlyLine = lineWithOnlyCommentRegexp.test(line))
                      ) {
                        lastCommentLineStartIndex = i;
                        lastCommentLineIndentLevel = indentLevel;
                        if (
                          (inBlockComment = blockCommentStartRegexp.test(line))
                        ) {
                          blockCommentIndentLevel = indentLevel;
                        }
                      } else {
                        if (lastCommentLineStartIndex >= 0) {
                          fixCommentLine(
                            lines,
                            max(indentLevel, previousIndentLevel),
                            lastCommentLineStartIndex,
                            lastCommentLineIndentLevel
                          );
                          lastCommentLineStartIndex = -1;
                        }
                        previousIndentLevel = indentLevel;
                      }
                    }
                  }
                }),
                fixCommentLine(
                  lines,
                  previousIndentLevel,
                  lastCommentLineStartIndex,
                  lastCommentLineIndentLevel
                ),
                lines.join("\n"))
              : source;
          };
          this.preprocess = source => {
            return this.normalizeComments(this.normalizeIndentation(source));
          };
        }
      ));
    }
  );
});
