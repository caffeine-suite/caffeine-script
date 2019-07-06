{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite
  fromObject:
    each: # TODO -- 'k' should only be 'let' once, inside the for-control block; it was wrong before, but benignly; now its broken-wrong
      "each from-object b": basicEach = "
        let from, into; from = b; into = from;
        if (from != null) {for (let k in from)
        {let v; v = from[k]; v;};};
        into;"

    alias:
      "each in-object b": basicEach

  fromArray:
    return:
      "array a in-array b with return a": null

    break:
      """
      each a in-array 1 2
        if a == 2
          break a + 100
      """: "
        let from, into, to, i;
        from = [1, 2];
        into = from;
        if (from != null)
        {to = from.length;
        i = 0;
        while (i < to)
        {let a;
        a = from[i];
        if (a === 2) {into = a + 100; break;};
        i++;};};
        into;"

    array:
      destructuring:
        object:
          "array {myProp} from-array b": "
            let from, into, to, i;
            from = b; into = [];
            if (from != null) {to = from.length; i = 0;
            while (i < to)
            {let myProp; ({myProp} = from[i]); into.push({myProp}); i++;};};
            into;"

        defaults:
          "array {myProp = 123} from-array b": "
            let from, into, to, i;
            from = b; into = [];
            if (from != null) {to = from.length; i = 0;
            while (i < to)
            {let myProp; ({myProp = 123} = from[i]); into.push({myProp}); i++;};};
            into;"

        subObject:
          "array {myProp: {myFoo}} from-array b": "let from, into, to, i;
            from = b; into = [];
            if (from != null) {to = from.length; i = 0;
            while (i < to)
            {let myFoo; ({myProp: {myFoo}} = from[i]); into.push({myProp: {myFoo}}); i++;};};
            into;"

        array:
          "array [myProp] from-array b": "
            let from, into, to, i;
            from = b; into = [];
            if (from != null) {to = from.length; i = 0;
            while (i < to)
            {let myProp; [myProp] = from[i]; into.push([myProp]); i++;};};
            into;
            "


    regressions:
      """
      ->
        array x1 to 1
        -> x1 = 1
      """: "(function() {let into, i; into = []; i = 0; while (i <= 1) {let x1; x1 = i; into.push(x1); i++;}; into; return () => {let x1; return x1 = 1;};});"

  forcedFromArray:
    by:
      "array from a by 2":    "let from, into, to, i; from = a; into = []; if (from != null) {to = from.length; i = 0; while (i < to) {let v; v = from[i]; into.push(v); i += 2;};}; into;"
      "array a by c":         null # NOT SUPPORTED YET "let from, i, into; from = a || []; i = from.length - 1; into = []; while (i >= 0) {let v = from[i]; into.push(v); i--;}; into;"

    skip:
      "array from a skip 1":  "let from, into, to, i; from = a; into = []; if (from != null) {to = from.length; i = 1; while (i < to) {let v; v = from[i]; into.push(v); i++;};}; into;"

    short:
      "array from a short 1": "let from, into, to, i; from = a; into = []; if (from != null) {to = from.length - 1; i = 0; while (i < to) {let v; v = from[i]; into.push(v); i++;};}; into;"

  til:
    each:
      "each a by c":            null # "let from, i, into; from = a || []; i = from.length - 1; into = []; while (i >= 0) {let v = from[i]; into.push(v); i--;}; into;"
      "each til 10":            "let i; i = 0; while (i < 10) {let v; v = i; v; i++;}; 10;"

    regressions:
      """
      import a
      array i til 10
      """: "(() => {let into, i1; return (into = [], i1 = 0, (() => {while (i1 < 10) {let i; i = i1; into.push(i); i1++;};})(), into);})();"

    nameCollisions:
      """
      array i til 10
      """: "let into, i1; into = []; i1 = 0; while (i1 < 10) {let i; i = i1; into.push(i); i1++;}; into;"

      """
      array j til 10
        i = j
      """: "let into, i1; into = []; i1 = 0; while (i1 < 10) {let j, i; j = i1; into.push(i = j); i1++;}; into;"

      """
      array i til 10  # thisone
        a = i
      """: "let into, i1; into = []; i1 = 0; while (i1 < 10) {let i, a; i = i1; into.push(a = i); i1++;}; into;"
