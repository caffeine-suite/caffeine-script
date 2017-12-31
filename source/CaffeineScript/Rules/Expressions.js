"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [
      global,
      require("../StandardImport"),
      require("caffeine-eight"),
      require("../StnRegistry")
    ],
    Extensions => {
      let matchBlock, upToButNotEol;
      return (
        ({ matchBlock } = Extensions.IndentBlocks),
        (upToButNotEol = /[^\n]*/y),
        function() {
          this.rule({
            lineStartExpression: "multilineImplicitObject",
            implicitArrayOrExpression: ["implicitArray", "expression"],
            expression: [
              "binOpExpression",
              "unaryOpExpression",
              "expressionWithoutBinOps"
            ],
            expressionWithoutBinOps: [
              "incDecUnaryExpression",
              "controlStatement",
              "comprehension",
              "classDefinition",
              "destructuringAssignment",
              "structuredLiteral",
              "throwExpression",
              "newInstance",
              "functionDefinition",
              "value"
            ],
            structuredLiteral: ["object", "array"]
          });
          this.rule(
            { newInstance: "new _ expressionWithoutBinOps" },
            { stnFactory: "NewInstanceStn" }
          );
          this.rule({
            incDecUnaryExpression: [
              "prefix:/\\+\\+|--/ assignableValue",
              "assignableValue postfix:/\\+\\+|--/",
              {
                stnFactory: "UnaryOperatorStn",
                stnProps: function() {
                  let cafBase;
                  return {
                    operand: (this.prefix || this.postfix).toString(),
                    tail: !!(
                      Caf.exists((cafBase = this.postfix)) && cafBase.toString()
                    )
                  };
                }
              }
            ]
          });
          this.rule(
            { throwExpression: "throw _ expressionWithoutBinOps" },
            { stnFactory: "ThrowStn" }
          );
          return this.rule({
            expressionWithOneLessBlock: {
              parse: function(parentNode) {
                let nextOffset,
                  source,
                  offset,
                  originalOffset,
                  match,
                  m,
                  endOffset,
                  matchLength,
                  expressionSource;
                ({ nextOffset, source } = parentNode);
                offset = nextOffset;
                originalOffset = offset;
                upToButNotEol.lastIndex = offset;
                return (match = upToButNotEol.exec(source))
                  ? (([m] = match),
                    (endOffset = offset += m.length),
                    (() => {
                      while ((match = matchBlock(source, offset))) {
                        endOffset = offset;
                        ({ matchLength } = match);
                        offset += matchLength;
                      }
                    })(),
                    (expressionSource = source.slice(
                      originalOffset,
                      endOffset
                    )),
                    parentNode.subparse(expressionSource, {
                      allowPartialMatch: true,
                      rule: "implicitArrayOrExpression",
                      originalOffset,
                      originalMatchLength: endOffset - originalOffset
                    }))
                  : undefined;
              }
            }
          });
        }
      );
    }
  );
});
