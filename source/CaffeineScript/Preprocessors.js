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
              line,
              lineIndentLevel,
              commentOnlyLine;
            return commentLineIndex >= 0
              ? ((indentChange = 0),
                (padding = null),
                (blockCommentIndentLevel = -1),
                (inBlockComment = false),
                (i = commentLineIndex),
                (() => {
                  while (i < stopIndex) {
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
                    i++;
                  }
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
                Caf.each((lines = source.split("\n")), undefined, (line, i) => {
                  let indentLevel, commentOnlyLine;
                  if (nonBlankLineRegexp.test(line)) {
                    indentLevel = getIndentLevel(line);
                    if (indentLevel <= blockCommentIndentLevel) {
                      inBlockComment = false;
                    }
                    if (!inBlockComment) {
                      if (
                        (commentOnlyLine = lineWithOnlyCommentRegexp.test(line))
                      ) {
                        if (!(lastCommentLineStartIndex >= 0)) {
                          lastCommentLineStartIndex = i;
                        }
                        if (
                          (inBlockComment = blockCommentStartRegexp.test(line))
                        ) {
                          blockCommentIndentLevel = indentLevel;
                        }
                      } else {
                        if (lastCommentLineStartIndex >= 0) {
                          fixCommentLines(
                            lines,
                            max(indentLevel, previousIndentLevel),
                            lastCommentLineStartIndex,
                            i
                          );
                          lastCommentLineStartIndex = -1;
                        }
                        previousIndentLevel = indentLevel;
                      }
                    }
                  }
                }),
                fixCommentLines(
                  lines,
                  previousIndentLevel,
                  lastCommentLineStartIndex,
                  lines.length
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
