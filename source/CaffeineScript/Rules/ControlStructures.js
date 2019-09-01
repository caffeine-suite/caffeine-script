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
              "ifUnless _ expression:expressionWithOneLessBlock body:block  elseBody:elseClause?",
              "ifUnless _ expression:expressionWithOneLessBlock body:block? elseBody:elseClause",
              "ifUnless _ expression:expression                 thenClause  elseBody:elseClause?"
            ],
            stnProps: function() {
              return { operand: this.ifUnless.toString() };
            }
          },
          {
            stnFactory: "WhileStn",
            pattern: [
              "whileUntil _ expression:expressionWithOneLessBlock body:block  elseBody:elseClause?",
              "whileUntil _ expression:expressionWithOneLessBlock body:block? elseBody:elseClause",
              "whileUntil _ expression:expression                 thenClause  elseBody:elseClause?"
            ],
            stnProps: function() {
              return { operand: this.whileUntil.toString() };
            }
          },
          {
            stnFactory: "TryStn",
            pattern:
              "try _? body:lineOfStatementsOrBlock optionalCatch:catchClause? optionalFinally:finallyClause?"
          },
          { stnFactory: "DoStn", pattern: "/do/ _ functionDefinition" },
          {
            stnFactory: "SwitchStn",
            pattern: [
              "switch _ condition:expressionWithOneLessBlock? _? switchBodyBlock",
              "switch _ condition:expression? switchBody",
              "switch switchBodyBlock",
              "switch switchBody"
            ]
          }
        ],
        catchClause: [
          "controlStructorClauseJoiner catch _? errorIdentifier:identifier? body:lineOfStatementsOrBlock?",
          { stnFactory: "CatchStn" }
        ],
        finallyClause: [
          "controlStructorClauseJoiner finally _? body:lineOfStatementsOrBlock?",
          { stnFactory: "FinallyStn" }
        ],
        switchBody: "switchWhen:switchWhenClause* switchElse:elseClause?",
        switchBodyBlock: Extensions.IndentBlocks.getPropsToSubparseBlock({
          rule: "switchBodyBlockRule"
        }),
        switchBodyBlockRule: ":switchBody end?",
        switchWhenClause: [
          "end? when _ whenValue:expressionWithOneLessBlock thenDo:block",
          "end? when _ whenValue:implicitArrayOrExpression  thenDo:thenClause",
          { stnFactory: "SwitchWhenStn" }
        ],
        thenClause:
          "controlStructorClauseJoiner thenDo _? body:lineOfStatementsOrBlock?",
        elseClause:
          "controlStructorClauseJoiner else   _? lineOfStatementsOrBlock?",
        controlStructorClauseJoiner: "_? end?",
        switch: /switch\b/,
        catch: /catch\b/,
        finally: /finally\b/,
        try: /try\b/,
        whileUntil: /(while|until)\b/,
        ifUnless: /(if|unless)\b/,
        thenDo: /(then|do)\b/,
        when: /when\b/,
        else: /else\b/
      };
    }
  );
});
