"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, require("../StandardImport"), require("caffeine-eight")],
    Extensions => {
      return function() {
        this.rule({
          value: [
            'valueBase blockValueExtension*"',
            "newInstance valueExtension*"
          ],
          valueBase: [
            "nonAssignableValue !accessorExtension",
            "assignableValue assignmentExtension?"
          ],
          simpleAssignableValue: ["thisProperty", "identifierReference"],
          assignableValue: [
            "simpleAssignableValue accessorExtension* !functionInvocationExtension",
            "'(' _? assignableValue _? ')' accessorExtension* !functionInvocationExtension",
            "parentheticalExpression accessorExtension+",
            "nonAssignableValue accessorExtension+"
          ],
          accessorExtension: ["dotAccessor", "bracketAccessor"],
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
          simpleInvocableValue: [
            "require",
            "tagMacro",
            "globalIdentifier",
            "this",
            "super",
            "thisProperty",
            "identifierReference"
          ],
          functionInvocation: [
            "simpleInvocableValue extendedFunctionInvocationExtension+",
            "literal accessorExtension extendedFunctionInvocationExtension+",
            "parentheticalExpression extendedFunctionInvocationExtension+"
          ],
          extendedFunctionInvocationExtension:
            "accessorExtension* functionInvocationExtension"
        });
        this.rule({
          simpleNewValue: [
            "this",
            "thisProperty",
            "globalIdentifier",
            "identifierReference",
            "classDefinition",
            "require"
          ],
          newValue: [
            "simpleNewValue accessorExtension*",
            "parentheticalExpression accessorExtension*"
          ],
          explicitNewFunctionInvocation: "newValue functionInvocationExtension",
          newInstance: [
            "new _ explicitNewFunctionInvocation",
            "new _ newValue",
            { stnFactory: "NewInstanceStn" }
          ]
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
            pattern: /(global|require|module|eval|this|__dirname|__filename)\b/,
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
          singleValueOrImplicitArray: [
            "_? _end? implicitArrayOrExpression",
            "/ */ comment? rValueBlock"
          ],
          singleValueOrImplicitArrayWithoutImplicitObjects: [
            "_? _end? implicitArrayWithoutImplicitObjectsOrExpression",
            "/ */ comment? rValueBlock"
          ],
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
    }
  );
});
