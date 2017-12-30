"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let IndentBlocks, ObjectStn, Extensions, cafParentImports;
  ({ Extensions } = Caf.import(
    ["Extensions"],
    (cafParentImports = [
      global,
      require("../StandardImport"),
      require("caffeine-eight"),
      require("../StnRegistry")
    ])
  ));
  ({ IndentBlocks, ObjectStn } = Caf.import(
    ["IndentBlocks", "ObjectStn"],
    [cafParentImports, Extensions]
  ));
  return function() {
    this.rule({
      object: ["implicitObject", "explicitObject"],
      objectLiteralBlock: IndentBlocks.getPropsToSubparseToEolAndBlock({
        rule: "explicitObjectBlock"
      }),
      explicitObjectBlock: "end* singleOrMultilineExplicitObject end*",
      singleOrMultilineExplicitObject: [
        "multilineExplicitObject",
        "oneLineExplicitObject"
      ]
    });
    this.rule(
      {
        implicitObject: "props:propertyList",
        oneLineExplicitObject: "props:explicitPropertyList",
        explicitObject: [
          "'{}' _? props:explicitPropertyList",
          "'{}' _? props:objectLiteralBlock",
          "'{}'"
        ],
        bracketedObject: "openCurly_ props:explicitPropertyList _closeCurly",
        multilineImplicitObject: {
          pattern:
            "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression multilineImplicitObjectExtension+"
        },
        multilineExplicitObject: {
          pattern:
            '!implicitObjectWithTwoOrMorePropsOnOneLine explicitValuePropWithComplexExpression multilineExplicitObjectExtension+"'
        }
      },
      {
        getStn: function() {
          let children;
          children = Caf.each(this.getMatchStns(), [], (m, cafK, cafInto) => {
            cafInto.push(m instanceof ObjectStn.class ? m.children : m);
          });
          return ObjectStn(children);
        }
      }
    );
    this.rule({
      multilineImplicitObjectExtension:
        "end+ !implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression",
      multilineExplicitObjectExtension:
        "end+ !implicitObjectWithTwoOrMorePropsOnOneLine explicitValuePropWithComplexExpression",
      implicitObjectWithTwoOrMorePropsOnOneLine: [
        "literalProp _ propertyList",
        "valueProp _comma_ propertyList"
      ],
      explicitPropertyList: [
        "valueProp _comma_ explicitPropertyList",
        "literalProp _ explicitPropertyList",
        "structurableProp _comma_ explicitPropertyList",
        "explicitValuePropWithComplexExpression"
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
        valuePropWithComplexExpression:
          "propName _colon_ propValue:requiredValue"
      },
      { name: "literalObjectProperty", stnFactory: "ObjectPropValueStn" }
    );
    this.rule({
      explicitValuePropWithComplexExpression: [
        "valuePropWithComplexExpression",
        "structurableProp"
      ],
      structurableProp: ["expression", { stnFactory: "ObjectPropValueStn" }]
    });
    this.rule({
      propName: "computedPropName",
      computedPropName: {
        pattern: "openBracket_ expression _closeBracket",
        stnFactory: "ObjectLiteralAccessorStn"
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
