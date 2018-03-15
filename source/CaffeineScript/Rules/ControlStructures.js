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
            stnFactory: "ControlOperatorStn",
            pattern: [
              "ifUnlessWhileUntil _ expression:expressionWithOneLessBlock body:block  elseBody:elseClause?",
              "ifUnlessWhileUntil _ expression:expressionWithOneLessBlock body:block? elseBody:elseClause",
              "ifUnlessWhileUntil _ expression:expression                 thenClause  elseBody:elseClause?"
            ],
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
            stnFactory: "TryStn",
            pattern:
              "try _? body:lineOfStatementsOrBlock optionalCatch:catchClause?"
          },
          { stnFactory: "DoStn", pattern: "/do/ _ functionDefinition" },
          {
            stnFactory: "SwitchStn",
            pattern: [
              "/switch/ _ condition:expressionWithOneLessBlock? _? switchBodyBlock",
              "/switch/ _ condition:expression? switchBody",
              "/switch/ switchBodyBlock",
              "/switch/ switchBody"
            ]
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
          "end? when _ whenValue:implicitArrayOrExpression  thenDo:thenClause",
          { stnFactory: "SwitchWhenStn" }
        ],
        thenClause:
          "controlStructorClauseJoiner thenDo _? body:lineOfStatementsOrBlock",
        elseClause:
          "controlStructorClauseJoiner else   _? lineOfStatementsOrBlock",
        controlStructorClauseJoiner: ["_", "end"],
        catch: /catch\b/,
        try: /try\b/,
        ifUnlessWhileUntil: /(if|unless|while|until)\b/,
        thenDo: /(then|do)\b/,
        when: /when\b/,
        else: /else\b/
      };
    }
  );
});
