"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    Extensions;
  ({ Extensions } = Caf.import(["Extensions"], [
    StandardImport,
    BabelBridge,
    global
  ]));
  return function() {
    this.rule({ value: "simpleValue valueExtension*" });
    this.rule({
      valueExtension: [
        "dotAccessor",
        "bracketAccessor",
        "functionInvocation",
        "blockValueExtension"
      ],
      simpleValue: [
        "require",
        "tagMacro",
        "globalIdentifier",
        "this",
        "thisProperty",
        "literal",
        "super",
        "unqualifiedIdentifier",
        "parentheticalExpression"
      ]
    });
    this.rule({ parentheticalExpression: "'(' _? expression _? ')'" });
    this.rule({
      require: {
        pattern: "/&/ pathedRequire",
        stnProps: function() {
          return { require: this.pathedRequire.text };
        },
        stnFactory: "RequireStn"
      }
    });
    this.rule({
      unqualifiedIdentifier: {
        pattern: "!reservedWord identifierReference assignmentExtension?"
      }
    });
    this.rule({
      identifierReference: { pattern: "identifier", stnFactory: "ReferenceStn" }
    });
    this.rule(
      {
        this: "/@/ !identifier",
        thisProperty: "/@/ identifier assignmentExtension?"
      },
      { stnFactory: "ThisStn" }
    );
    this.rule({
      globalIdentifier: {
        pattern: /(global|require|module|eval)\b/,
        stnFactory: "GlobalIdentifierStn",
        stnProps: function() {
          return { identifier: this.text };
        }
      }
    });
    this.rule({
      super: {
        pattern: "/super\\b/ superFunctionInvocation",
        stnFactory: "SuperStn"
      }
    });
    this.rule({
      super: {
        pattern: /super\b/,
        stnFactory: "SuperStn",
        stnProps: { passArguments: true }
      }
    });
    this.rule({
      blockValueExtension: "_? blockValueExtensionBlock",
      blockValueExtensionBlock: Extensions.IndentBlocks.getPropsToSubparseBlock(
        { rule: "blockValueExtensionSubparse" }
      ),
      blockValueExtensionSubparse: [
        "lineStartComment* &dotOrQuestionDot valueExtension+ binaryOperatorSequenceExtension? newLineStatementExtension* end",
        "lineStartComment* lineStartBinaryOperatorAndExpression newLineStatementExtension* end"
      ],
      dotOrQuestionDot: /\??\./
    });
    return this.rule({
      requiredValue: ["_? _end? implicitArrayOrExpression", "_? rValueBlock"],
      rValueBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
        rule: "rValueBlockSubParse"
      }),
      rValueBlockSubParse: {
        pattern: "root",
        getStn: function() {
          let statements, ArrayStn = require("../SemanticTree/ArrayStn");
          ({ statements } = this.root);
          return statements.length === 1
            ? statements[0].getStn()
            : ArrayStn(this.root.getMatchStns());
        }
      }
    });
  };
});
