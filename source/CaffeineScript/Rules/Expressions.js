let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("../SemanticTree"),
    matchBlock,
    upToButNotEol,
    Extensions,
    ArrayStn;
  ({ Extensions, ArrayStn } = Caf.i(["Extensions", "ArrayStn"], [
    StandardImport,
    BabelBridge,
    SemanticTree,
    global
  ]));
  ({ matchBlock } = Extensions.IndentBlocks);
  upToButNotEol = /[^\n]*/y;
  return function() {
    this.rule({
      lineStartExpression: "multilineImplicitObject",
      complexExpression: [
        { pattern: "implicitArray" },
        { pattern: "expression" }
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
        "throwExpression",
        "newInstance",
        "functionDefinition",
        "value"
      ],
      structuredLiteral: ["object", "array"]
    });
    this.rule({ newInstance: "new _ expressionWithoutBinOps" }, {
      stnFactory: "NewInstanceStn"
    });
    this.rule({ throwExpression: "throw _ expressionWithoutBinOps" }, {
      stnFactory: "ThrowStn"
    });
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
            ? ([m] = match, endOffset = offset += m.length, (() => {
                while (match = matchBlock(source, offset)) {
                  endOffset = offset;
                  ({ matchLength } = match);
                  offset += matchLength;
                }
              })(), expressionSource = source.slice(
                originalOffset,
                endOffset
              ), parentNode.subparse(expressionSource, {
                allowPartialMatch: true,
                rule: "complexExpression",
                originalOffset: originalOffset,
                originalMatchLength: endOffset - originalOffset
              }))
            : undefined;
        }
      },
      rValueBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock({
        rule: "rValueBlockSubParse"
      }),
      rValueBlockSubParse: {
        pattern: "root",
        getStn: function() {
          let statements;
          ({ statements } = this.root);
          return statements.length === 1
            ? statements[0].getStn()
            : ArrayStn(this.root.getMatchStns());
        }
      }
    });
  };
});
