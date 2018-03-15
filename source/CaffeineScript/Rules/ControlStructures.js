"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    ["Extensions"],
    [global, require("../StandardImport"), require("caffeine-eight")],
    Extensions => {
      return {
        controlStatement: [
          {
            pattern: [
              "ifUnlessWhileUntil _ expression:expressionWithOneLessBlock body:block  elseBody:elseClause?",
              "ifUnlessWhileUntil _ expression:expressionWithOneLessBlock body:block? elseBody:elseClause",
              "ifUnlessWhileUntil _ expression:expression                 thenClause  elseBody:elseClause?"
            ],
            stnFactory: "ControlOperatorStn",
            stnProps: function() {
              let cafBase;
              return {
                operand: this.ifUnlessWhileUntil.toString(),
                joiner:
                  Caf.exists((cafBase = this.thenDo)) && cafBase.toString()
              };
            }
          },
          {
            pattern:
              "try _? body:lineOfStatementsOrBlock optionalCatch:catchClause?",
            stnFactory: "TryStn"
          },
          { pattern: "/do/ _ functionDefinition", stnFactory: "DoStn" },
          {
            pattern: [
              "/switch/ _ condition:expressionWithOneLessBlock? _? switchBodyBlock",
              "/switch/ _ condition:expression? switchBody",
              "/switch/ switchBodyBlock",
              "/switch/ switchBody"
            ],
            stnFactory: "SwitchStn"
          }
        ],
        catchClause: [
          "controlStructorClauseJoiner catch _? errorIdentifier:identifier? body:lineOfStatementsOrBlock?",
          { stnFactory: "CatchStn" }
        ],
        switchBody: "switchWhen:switchWhenClause+ switchElse:elseClause?",
        switchBodyBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
          rule: "switchBody"
        }),
        switchWhenClause: [
          "end? when _ whenValue:expressionWithOneLessBlock thenDo:block",
          "end? when _ whenValue:implicitArrayOrExpression thenDo:thenClause",
          { stnFactory: "SwitchWhenStn" }
        ],
        catch: /catch\b/,
        try: /try\b/,
        ifUnlessWhileUntil: /(if|unless|while|until)\b/,
        thenDo: /(then|do)\b/,
        when: /when\b/,
        else: /else\b/,
        thenClause:
          "controlStructorClauseJoiner thenDo _? body:lineOfStatementsOrBlock",
        elseClause:
          "controlStructorClauseJoiner else   _? lineOfStatementsOrBlock",
        controlStructorClauseJoiner: ["/ +/", "end"]
      };
    }
  );
});
