let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation"),
    BabelBridge = require("babel-bridge"),
    Extensions;
  ({ Extensions } = Caf.i(["Extensions"], [
    ArtFoundation,
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
      require: { pattern: "/&/ identifier", stnFactory: "RequireStn" }
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
        pattern: /(global|require|module)\b/,
        stnFactory: "GlobalIdentifierStn",
        stnProps: function() {
          return { identifier: this.text };
        }
      }
    });
    this.rule({
      super: {
        pattern: "/super/ superFunctionInvocation",
        stnFactory: "SuperStn"
      }
    });
    this.rule({
      super: {
        pattern: /super/,
        stnFactory: "SuperStn",
        stnProps: { passArguments: true }
      }
    });
    this.rule(
      {
        assignmentExtension: [
          "assignmentOperator:_assignmentOperator_ complexExpression",
          "assignmentOperator:_assignmentOperator_ rValueBlock"
        ]
      },
      {
        stnFactory: "AssignmentStn",
        stnExtension: true,
        stnProps: function() {
          let rawOp, match;
          rawOp = this.assignmentOperator.toString();
          return { operator: (match = rawOp.match(/(\S*)=/)) && match[1] };
        }
      }
    );
    return this.rule({
      blockValueExtension: "_? blockValueExtensionBlock",
      blockValueExtensionBlock: Extensions.IndentBlocks.getPropsToSubparseBlock(
        { rule: "blockValueExtensionSubparse" }
      ),
      blockValueExtensionSubparse: [
        "end? lineStartBinaryOperatorAndExpression newLineStatementExtension* end",
        "end? &dot valueExtension+ binaryOperatorSequenceExtension? newLineStatementExtension* end"
      ]
    });
  };
});
