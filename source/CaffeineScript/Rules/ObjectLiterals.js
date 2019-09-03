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
                "valueProp _comma_optionalNewLine propertyList"
              ],
              explicitPropertyList: [
                "valueProp optionalComma explicitPropertyList",
                "structurableProp _comma_optionalNewLine? explicitPropertyList",
                "explicitValuePropWithComplexExpression"
              ],
              propertyList: [
                "valueProp optionalComma propertyList",
                "valuePropWithComplexExpression"
              ],
              implicitObjectStart: "propName propNameEndColon"
            });
            this.rule({ propNameEndColon: ["/:/ _?", "_ /:/ _"] });
            this.rule(
              {
                literalProp: "propName propNameEndColon propValue:literal",
                valueProp:
                  "propName propNameEndColon propValue:singleValueOrImplicitArrayWithoutImplicitObjects",
                valuePropWithComplexExpression:
                  "propName propNameEndColon propValue:singleValueOrImplicitArrayWithoutImplicitObjects"
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
            this.rule(
              { thisPropName: "/@/ propNameExtension*" },
              {
                stnFactory: "ThisStn",
                stnProps: function() {
                  let base;
                  return {
                    identifier:
                      Caf.exists((base = this.propNameExtension)) &&
                      base.toString()
                  };
                }
              }
            );
            this.rule(
              { propName: "!/then\\s/ thisPropName &propNameEndColon" },
              {
                stnFactory: "ObjectPropNameStn",
                stnProps: function() {
                  return { isThisProp: true };
                }
              }
            );
            this.rule({
              propNameExtension: "/:*/ unquotedPropNameToken &propNameEndColon"
            });
            this.rule(
              {
                propName:
                  "!regExpLiteral !/then\\s/ unquotedPropNameToken &propNameEndColon propNameExtension*"
              },
              {
                stnFactory: "ObjectPropNameStn",
                stnProps: function() {
                  return { value: this.toString(), isThisProp: false };
                }
              }
            );
            return this.rule(
              { propName: "quotedString:stringLiteral &propNameEndColon" },
              {
                stnFactory: "ObjectPropNameStn",
                stnProps: function() {
                  return { value: this.toString(), isThisProp: false };
                }
              }
            );
          };
        }
      );
    }
  );
});
