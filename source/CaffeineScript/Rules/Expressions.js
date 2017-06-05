"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let matchBlock, upToButNotEol, Extensions;
  ({ Extensions } = Caf.import(
    ["Extensions"],
    [
      require("../StandardImport"),
      require("babel-bridge"),
      require("../StnRegistry"),
      global
    ]
  ));
  ({ matchBlock } = Extensions.IndentBlocks);
  upToButNotEol = /[^\n]*/y;
  return function() {
    this.rule({
      lineStartExpression: "multilineImplicitObject",
      implicitArrayOrExpression: [
        { pattern: "implicitArray" },
        { pattern: "expression" }
      ],
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
        "prefix:/\\+\\+|--/ value",
        "value postfix:/\\+\\+|--/",
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
            ? (
                ([m] = match),
                (endOffset = offset += m.length),
                (() => {
                  while ((match = matchBlock(source, offset))) {
                    endOffset = offset;
                    ({ matchLength } = match);
                    offset += matchLength;
                  }
                })(),
                (expressionSource = source.slice(originalOffset, endOffset)),
                parentNode.subparse(expressionSource, {
                  allowPartialMatch: true,
                  rule: "implicitArrayOrExpression",
                  originalOffset,
                  originalMatchLength: endOffset - originalOffset
                })
              )
            : undefined;
        }
      }
    });
  };
});
