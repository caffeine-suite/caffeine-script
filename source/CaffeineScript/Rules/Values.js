"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let Extensions;
  ({ Extensions } = Caf.import(
    ["Extensions"],
    [require("../StandardImport"), require("babel-bridge"), global]
  ));
  return function() {
    this.rule({
      value: "valueBase blockValueExtension*",
      valueBase: ["assignableValue assignmentExtension?", "nonAssignableValue"],
      simpleAssignableValue: ["thisProperty", "identifierReference"],
      assignableValue: [
        "simpleAssignableValue assignableValueExtension* !functionInvocationExtension",
        "'(' _? assignableValue _? ')' assignableValueExtension* !functionInvocationExtension",
        "parentheticalExpression assignableValueExtension+",
        "nonAssignableValue assignableValueExtension+"
      ],
      assignableValueExtension: ["dotAccessor", "bracketAccessor"],
      nonAssignableValue: [
        "functionInvocation",
        "parentheticalExpression",
        "simpleNonAssignableValue"
      ],
      simpleValue: ["simpleNonAssignableValue", "simpleAssignableValue"],
      simpleNonAssignableValue: [
        "require",
        "tagMacro",
        "globalIdentifier",
        "this",
        "literal",
        "super"
      ],
      functionInvocation: [
        "simpleValue extendedFunctionInvocationExtension+",
        "parentheticalExpression extendedFunctionInvocationExtension+"
      ],
      extendedFunctionInvocationExtension:
        "assignableValueExtension* functionInvocationExtension"
    });
    this.rule({
      parentheticalExpression: "'(' _? expression _? ')'",
      valueExtension: [
        "dotAccessor",
        "bracketAccessor",
        "functionInvocationExtension",
        "blockValueExtension"
      ]
    });
    this.rule({
      identifierReference: {
        pattern: "!reservedWord identifier",
        stnFactory: "ReferenceStn"
      }
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
        pattern: /(global|require|module|eval|this)\b/,
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
          let statements;
          ({ statements } = this.root);
          return statements.length === 1
            ? statements[0].getStn()
            : require("../StnRegistry").ArrayStn(this.root.getMatchStns());
        }
      }
    });
  };
});
