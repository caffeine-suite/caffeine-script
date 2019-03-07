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
      ({ matchBlock } = Extensions.IndentBlocks);
      upToButNotEol = /[^\n]*/y;
      return function() {
        let oneLessBlockSubparser;
        this.rule({
          lineStartExpression: "multilineImplicitObject",
          implicitArrayOrExpression: [
            "returnStatement",
            "breakStatement",
            "implicitArray",
            "expression"
          ],
          implicitArrayWithoutImplicitObjectsOrExpression: [
            "implicitArrayWithoutImplicitObjects",
            "expression"
          ],
          expression: [
            "binOpExpression",
            "unaryOpExpression",
            "expressionWithoutBinOps"
          ],
          expressionWithoutBinOps: [
            "controlStatement",
            "comprehension",
            "classDefinition",
            "destructuringAssignment",
            "structuredLiteral",
            "incDecUnaryExpression",
            "throwExpression",
            "functionDefinition",
            "extractExpression",
            "value"
          ],
          structuredLiteral: ["object", "array"]
        });
        this.rule({
          incDecUnaryExpression: [
            "prefix:/\\+\\+|--/ assignableValue",
            "assignableValue postfix:/\\+\\+|--/",
            {
              stnFactory: "UnaryOperatorStn",
              stnProps: function() {
                let base;
                return {
                  operand: (this.prefix || this.postfix).toString(),
                  tail: !!(Caf.exists((base = this.postfix)) && base.toString())
                };
              }
            }
          ]
        });
        this.rule(
          { throwExpression: "throw _ expressionWithoutBinOps" },
          { stnFactory: "ThrowStn" }
        );
        oneLessBlockSubparser = rule =>
          function(parentNode) {
            let nextOffset,
              source,
              offset,
              originalOffset,
              match,
              m,
              endOffset,
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
                    offset += match.matchLength;
                  }
                })(),
                (expressionSource = source.slice(originalOffset, endOffset)),
                parentNode.subparse(expressionSource, {
                  allowPartialMatch: true,
                  rule,
                  originalOffset,
                  originalMatchLength: endOffset - originalOffset
                }))
              : undefined;
          };
        return this.rule({
          expressionWithOneLessBlock: {
            parse: oneLessBlockSubparser("implicitArrayOrExpression")
          },
          lineOfStatementsWithOneLessBlock: {
            parse: oneLessBlockSubparser("lineOfStatementsOrBlock")
          },
          keywordLabeledStatementsWithOneLessBlock: [
            "lineOfStatementsWithOneLessBlock",
            "statementBlock"
          ]
        });
      };
    }
  );
});
