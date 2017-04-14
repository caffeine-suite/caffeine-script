"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StandardImport = require("../StandardImport"),
    BabelBridge = require("babel-bridge"),
    SemanticTree = require("../SemanticTree"),
    Extensions,
    ObjectStn;
  ({ Extensions, ObjectStn } = Caf.import(["Extensions", "ObjectStn"], [
    StandardImport,
    BabelBridge,
    SemanticTree,
    global
  ]));
  return function() {
    this.rule({
      singleOrMultilineImplicitObject: ["multilineImplicitObject", "object"]
    });
    this.rule(
      {
        object: [
          "props:implicitObject",
          "'{}' _? props:propertyList",
          "'{}' _? props:objectLiteralBlock",
          "'{}'"
        ],
        bracketedObject: "openCurly_ props:propertyList _closeCurly",
        multilineImplicitObject: {
          pattern: "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression multilineImplicitObjectExtension+"
        }
      },
      {
        getStn: function() {
          let children;
          children = Caf.each(this.getMatchStns(), [], (m, k, into) => {
            into.push(m instanceof ObjectStn.class ? m.children : m);
          });
          return ObjectStn(children);
        }
      }
    );
    this.rule({
      multilineImplicitObjectExtension: "end+ !implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression",
      objectLiteralBlock: Extensions.IndentBlocks.getPropsToSubparseToEolAndBlock(
        { rule: "singleOrMultilineImplicitObject" }
      ),
      implicitObject: { pattern: "propertyList" },
      implicitObjectWithTwoOrMorePropsOnOneLine: [
        "literalProp _ propertyList",
        "valueProp _comma_ propertyList"
      ],
      propertyList: [
        "valueProp _comma_ propertyList",
        "literalProp _ propertyList",
        "valuePropWithComplexExpression"
      ]
    });
    this.rule(
      {
        literalProp: "propName _colon_ propValue:literal",
        valueProp: "propName _colon_ propValue:expression",
        valuePropWithComplexExpression: [
          "propName _colon_ propValue:implicitArrayOrExpression",
          "propName _colon_ propValue:propertyValueBlock"
        ]
      },
      { name: "literalObjectProperty", stnFactory: "ObjectPropValueStn" }
    );
    this.rule({
      propertyValueBlock: "rValueBlock",
      propName: "computedPropName",
      computedPropName: {
        pattern: "openBracket_ expression _closeBracket",
        stnFactory: "AccessorStn"
      }
    });
    this.rule({ stringLiteralPropNameTail: ["_ /:/ !unquotedString", "/:/"] });
    return this.rule(
      {
        propName: [
          "!/then\\s/ str:identifier &_colon_",
          "!/then\\s/ str:unquotedString &/:/",
          "str:stringLiteral &stringLiteralPropNameTail"
        ]
      },
      { stnFactory: "ObjectPropNameStn" }
    );
  };
});
