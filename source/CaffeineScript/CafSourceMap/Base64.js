"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return (() => {
    let vlqBaseShift,
      vlqBase,
      vlqBaseMask,
      vlqContinuationBit,
      intToCharMap,
      charMapToInt,
      getBase64char,
      toVlqSigned,
      fromVlqSigned,
      encodeVlq,
      readVlq,
      readVlqSequence;
    return {
      vlqBaseShift: (vlqBaseShift = 5),
      vlqBase: (vlqBase = 1 << vlqBaseShift),
      vlqBaseMask: (vlqBaseMask = vlqBase - 1),
      vlqContinuationBit: (vlqContinuationBit = vlqBase),
      intToCharMap: (intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        ""
      )),
      charMapToInt: (charMapToInt = Caf.object(intToCharMap, (v, k) => k)),
      getBase64char: (getBase64char = function(number) {
        return intToCharMap[number];
      }),
      toVlqSigned: (toVlqSigned = function(value) {
        return value < 0 ? (-value << 1) + 1 : value << 1;
      }),
      fromVlqSigned: (fromVlqSigned = function(value) {
        return value & 1 ? 0 - (value >> 1) : value >> 1;
      }),
      encodeVlq: (encodeVlq = function(value) {
        let encoded, vlq, digit;
        return value === 0
          ? "A"
          : ((encoded = ""),
            (vlq = toVlqSigned(value)),
            (() => {
              while (vlq > 0) {
                digit = vlq & vlqBaseMask;
                encoded += getBase64char(
                  0 < (vlq >>>= vlqBaseShift)
                    ? digit | vlqContinuationBit
                    : digit
                );
              }
            })(),
            encoded);
      }),
      readVlq: (readVlq = function(string, resultObject = { index: 0 }) {
        let index, number, shiftAmount, read;
        ({ index } = resultObject);
        number = 0;
        shiftAmount = 0;
        return charMapToInt[string[index]] != null
          ? ((() => {
              while (
                vlqContinuationBit & (read = charMapToInt[string[index++]])
              ) {
                number += (read & vlqBaseMask) << shiftAmount;
                shiftAmount += vlqBaseShift;
              }
            })(),
            (resultObject.index = index),
            (resultObject.value = fromVlqSigned(
              number + (read << shiftAmount)
            )),
            resultObject)
          : undefined;
      }),
      readVlqSequence: (readVlqSequence = function(
        string,
        resultObject = { index: 0 }
      ) {
        let out, result;
        out = [];
        while ((result = readVlq(string, resultObject))) {
          out.push(result.value);
        }
        return out;
      })
    };
  })();
});
