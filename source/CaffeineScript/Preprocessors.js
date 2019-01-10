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
            fixCommentLines,
            getIndentLevel;
          mixedIndentationRegexp = /(^|\n)( +\t|\t+ )/;
          tabIndentationRegexp = /(^|\n)\t/;
          spaceIndentationRegexp = /(^|\n) /;
          this.hasMixedIndentation = source =>
            mixedIndentationRegexp.test(source) ||
            (tabIndentationRegexp.test(source) &&
              spaceIndentationRegexp.test(source));
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
          lineWithOnlyCommentRegexp = /(^|\n) *#([^{\n$\w\u007f-\uffff]+[^\n]*|(?=\n|$))/;
          blockCommentStartRegexp = /(^|\n) *##/;
          nonBlankLineRegexp = /[^ ]/;
          fixCommentLines = function(
            lines,
            indentLevel,
            commentLineIndex,
            stopIndex
          ) {
            let indentChange,
              padding,
              blockCommentIndentLevel,
              inBlockComment,
              i,
              temp;
            return commentLineIndex >= 0
              ? ((indentChange = 0),
                (padding = null),
                (blockCommentIndentLevel = -1),
                (inBlockComment = false),
                (i = commentLineIndex),
                (() => {
                  while (i < stopIndex) {
                    let line, lineIndentLevel, commentOnlyLine;
                    line = lines[i];
                    if (nonBlankLineRegexp.test(line)) {
                      lineIndentLevel = getIndentLevel(line);
                      if (lineIndentLevel <= blockCommentIndentLevel) {
                        inBlockComment = false;
                      }
                      if (!inBlockComment) {
                        if (
                          (commentOnlyLine = lineWithOnlyCommentRegexp.test(
                            line
                          ))
                        ) {
                          indentChange = indentLevel - lineIndentLevel;
                          padding =
                            indentChange > 0 ? getPadding(indentChange) : null;
                        }
                        if (
                          (inBlockComment = blockCommentStartRegexp.test(line))
                        ) {
                          blockCommentIndentLevel = lineIndentLevel;
                        }
                      }
                      if (indentChange !== 0) {
                        lines[i] =
                          indentChange > 0
                            ? padding + line
                            : line.slice(-indentChange, line.length);
                      }
                    }
                    temp = i++;
                  }
                  return temp;
                })())
              : undefined;
          };
          getIndentLevel = function(line) {
            return line.search(/[^\ ]/);
          };
          this.normalizeComments = source => {
            let previousIndentLevel,
              blockCommentIndentLevel,
              lastCommentLineStartIndex,
              inBlockComment,
              lines;
            return lineWithOnlyCommentRegexp.test(source)
              ? ((previousIndentLevel = 0),
                (blockCommentIndentLevel = 0),
                (lastCommentLineStartIndex = -1),
                (inBlockComment = false),
                Caf.each2(
                  (lines = source.split("\n")),
                  (line, i) => {
                    let indentLevel, commentOnlyLine;
                    indentLevel = getIndentLevel(line);
                    if (indentLevel <= blockCommentIndentLevel) {
                      inBlockComment = false;
                    }
                    return !inBlockComment
                      ? (commentOnlyLine = lineWithOnlyCommentRegexp.test(line))
                        ? (!(lastCommentLineStartIndex >= 0)
                            ? (lastCommentLineStartIndex = i)
                            : undefined,
                          (inBlockComment = blockCommentStartRegexp.test(line))
                            ? (blockCommentIndentLevel = indentLevel)
                            : undefined)
                        : (lastCommentLineStartIndex >= 0
                            ? (fixCommentLines(
                                lines,
                                max(indentLevel, previousIndentLevel),
                                lastCommentLineStartIndex,
                                i
                              ),
                              (lastCommentLineStartIndex = -1))
                            : undefined,
                          (previousIndentLevel = indentLevel))
                      : undefined;
                  },
                  (line, i) => nonBlankLineRegexp.test(line)
                ),
                fixCommentLines(
                  lines,
                  previousIndentLevel,
                  lastCommentLineStartIndex,
                  lines.length
                ),
                lines.join("\n"))
              : source;
          };
          this.preprocess = source => this.normalizeIndentation(source);
        }
      ));
    }
  );
});
