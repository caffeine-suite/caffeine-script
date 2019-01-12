"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let parentImports;
  return Caf.importInvoke(
    ["Extensions"],
    (parentImports = [
      global,
      require("../StandardImport"),
      require("caffeine-eight"),
      require("../StnRegistry")
    ]),
    Extensions => {
      return Caf.importInvoke(
        ["IndentBlocks", "ObjectStn"],
        [parentImports, Extensions],
        (IndentBlocks, ObjectStn) => {
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
                bracketedObject:
                  "openCurly_ props:explicitPropertyList _closeCurly",
                multilineImplicitObject:
                  "!implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression multilineImplicitObjectExtension+",
                multilineExplicitObject:
                  "explicitObjectLine multilineExplicitObjectExtension+"
              },
              {
                getStn: function() {
                  let children;
                  children = Caf.array(this.getMatchStns(), m =>
                    m instanceof ObjectStn.class ? m.children : m
                  );
                  return ObjectStn(children);
                }
              }
            );
            this.rule({
              explicitObjectLine: [
                "oneLineExplicitObject",
                "!implicitObjectWithTwoOrMorePropsOnOneLine explicitValuePropWithComplexExpression"
              ],
              multilineImplicitObjectExtension:
                "end+ !implicitObjectWithTwoOrMorePropsOnOneLine valuePropWithComplexExpression",
              multilineExplicitObjectExtension: "end+ explicitObjectLine",
              implicitObjectWithTwoOrMorePropsOnOneLine: [
                "literalProp _ propertyList",
                "valueProp _comma_ propertyList"
              ],
              explicitPropertyList: [
                "valueProp optionalComma explicitPropertyList",
                "structurableProp _comma_? explicitPropertyList",
                "explicitValuePropWithComplexExpression"
              ],
              propertyList: [
                "valueProp optionalComma propertyList",
                "valuePropWithComplexExpression"
              ],
              implicitObjectStart: "propName _colon_"
            });
            this.rule(
              {
                literalProp: "propName _colon_ propValue:literal",
                valueProp:
                  "propName _colon_ propValue:singleValueOrImplicitArrayWithoutImplicitObjects",
                valuePropWithComplexExpression:
                  "propName _colon_ propValue:singleValueOrImplicitArrayWithoutImplicitObjects"
              },
              {
                name: "literalObjectProperty",
                stnFactory: "ObjectPropValueStn"
              }
            );
            this.rule({
              explicitValuePropWithComplexExpression: [
                "valuePropWithComplexExpression",
                "structurableProp"
              ],
              structurableProp: [
                "expression",
                { stnFactory: "ObjectPropValueStn" }
              ]
            });
            this.rule({
              propName: "computedPropName",
              computedPropName: {
                pattern: "openBracket_ expression _closeBracket",
                stnFactory: "ObjectLiteralAccessorStn"
              }
            });
            this.rule({
              stringLiteralPropNameTail: ["_ /:/ !unquotedString", "/:/"]
            });
            this.rule(
              { thisPropName: "/@/ unquotedString?" },
              {
                stnFactory: "ThisStn",
                stnProps: function() {
                  return { identifier: this.unquotedString.toString() };
                }
              }
            );
            this.rule(
              { propName: "!/then\\s/ str:thisPropName &_colon_" },
              {
                stnFactory: "ObjectPropNameStn",
                stnProps: function() {
                  return { isThisProp: true };
                }
              }
            );
            return this.rule(
              {
                propName: [
                  "!/then\\s/ str:identifier &_colon_",
                  "!/then\\s/ str:unquotedString &/:/",
                  "quotedString:stringLiteral &stringLiteralPropNameTail"
                ]
              },
              {
                stnFactory: "ObjectPropNameStn",
                stnProps: function() {
                  let base;
                  return {
                    value: Caf.exists((base = this.str)) && base.toString(),
                    isThisProp: false
                  };
                }
              }
            );
          };
        }
      );
    }
  );
});
