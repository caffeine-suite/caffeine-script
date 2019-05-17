{CaffeineScript} = Neptune
{log, formattedInspect} = Neptune.Art.StandardLib
{Parser} = CaffeineScript

{parseTests, parseTestSuite} = require '../Helper'

module.exports = suite: parseTestSuite
  fromObject:
    each: # TODO -- 'k' should only be 'let' once, inside the for-control block; it was wrong before, but benignly; now its broken-wrong
      "each from-object b": basicEach = "
        let from, into;
        from = b || {};
        into = from;
        for (let k in from)
        {let v; v = from[k]; v;};
        into;"

    alias:
      "each in-object b": basicEach

    find:
      "find from-object b": "
        let from, into;
        from = b || {};
        into = null;
        for (let k in from)
        {let v; v = from[k]; if (v) {into = v; break;};};
        into;"

    array:
      "array from-object b": "
        let from, into;
        from = b || {};
        into = [];
        for (let k in from)
        {let v; v = from[k]; into.push(v);};
        into;"

    object:
      "object from-object b": "
        let from, into;
        from = b || {};
        into = {};
        for (let k in from)
        {let v; v = from[k]; into[k] = v;};
        into;"
    regressions:
      "object myV from-object b with myV": "
        let from, into;
        from = b || {};
        into = {};
        for (let k in from)
        {let myV; myV = from[k]; into[k] = myV;};
        into;"

      "object myV, myK from-object b with myV + myK": "
        let from, into;
        from = b || {};
        into = {};
        for (let k in from)
        {let myV, myK; myV = from[k]; myK = k; into[k] = myV + myK;};
        into;"


  fromArray:
    each:
      "each from-array b": basicEach = "
        let from, to, i, into;
        from = b || [];
        to = from.length;
        i = 0;
        into = from;
        while (i < to)
        {let v; v = from[i]; v; i++;};
        into;"

    alias:
      "each in-array b": basicEach

    expression: # NOTE - JavaScript REQUIRES the function-wrap around while if it's in a comma-list
      "out = each in-array a": "
        let out, from, to, i, into; out =
        (from = a || [],
        to = from.length,
        i = 0,
        into = from,
        (() => {while (i < to) {let v; v = from[i]; v; i++;};})(),
        into);"

    break:
      "out = each a in-array b with break a": "
        let out, from, to, i, into;
        out = (from = b || [],
        to = from.length,
        i = 0,
        into = from,
        (() => {while (i < to) {let a; a = from[i]; into = a; break; i++;};})(),
        into);"

      # "-> each in-array b with return foo": "ok"

    find:
      basic:
        "find from-array b": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = null;
          while (i < to)
          {let v; v = from[i]; if (v) {into = v; break;}; i++;};
          into;"

      withClause:
        "find myValue from-array b with myValue && 10": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = null;
          while (i < to)
          {let myValue; myValue = from[i]; if (into = myValue && 10) {break;}; i++;};
          into || null;"

      whenClause:
        "find myValue from-array b when myValue < 10": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = null;
          while (i < to)
          {let myValue; myValue = from[i]; if (myValue < 10) {into = myValue; break;}; i++;};
          into;"

      withClause:
        "find myValue from-array b when myValue < 10 with myValue + 7": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = null;
          while (i < to)
          {let myValue; myValue = from[i]; if (myValue < 10) {into = myValue + 7; break;}; i++;};
          into;"

    array:
      basic:
        "array from-array b": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = [];
          while (i < to)
          {let v; v = from[i]; into.push(v); i++;};
          into;"

      with:
        "array myValue from-array b with myValue + 1": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = [];
          while (i < to)
          {let myValue; myValue = from[i]; into.push(myValue + 1); i++;};
          into;"

      into:
        "array from-array b into [] 1": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = [1];
          while (i < to)
          {let v; v = from[i]; into.push(v); i++;};
          into;"

      when:
        "array myValue from-array b when myValue > 1": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = [];
          while (i < to)
          {let myValue; myValue = from[i]; if (myValue > 1) {into.push(myValue);}; i++;};
          into;"

      destructuring:
        object:
          "array {myProp} from-array b": "
            let from, to, i, into;
            from = b || [];
            to = from.length;
            i = 0;
            into = [];
            while (i < to)
            {let myProp; {myProp} = from[i]; into.push({myProp}); i++;};
            into;"

        defaults:
          "array {myProp = 123} from-array b": "
            let from, to, i, into;
            from = b || [];
            to = from.length;
            i = 0;
            into = [];
            while (i < to)
            {let myProp; {myProp = 123} = from[i]; into.push({myProp}); i++;};
            into;"

        subObject:
          # "a = b: c": "
          "array {myProp: {myFoo}} from-array b": "
            let from, to, i, into;
            from = b || [];
            to = from.length;
            i = 0;
            into = [];
            while (i < to)
            {let myFoo; {myProp: {myFoo}} = from[i]; into.push({myProp: {myFoo}}); i++;};
            into;"

        array:
          "array [myProp] from-array b": "
            let from, to, i, into;
            from = b || [];
            to = from.length;
            i = 0;
            into = [];
            while (i < to)
            {let myProp; [myProp] = from[i]; into.push([myProp]); i++;};
            into;"

    object:
      basic:
        "object from-array b": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = {};
          while (i < to)
          {let v; v = from[i]; into[v] = v; i++;};
          into;"

      customNames:
        "object myValue, myKey from-array b": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = {};
          while (i < to)
          {let myValue, myKey; myValue = from[i]; myKey = i; into[myValue] = myValue; i++;};
          into;"

      withKey:
        "object myValue, myKey from-array b with-key myKey + '1'": "
          let from, to, i, into;
          from = b || [];
          to = from.length;
          i = 0;
          into = {};
          while (i < to)
          {let myValue, myKey; myValue = from[i]; myKey = i; into[myKey + \"1\"] = myValue; i++;};
          into;"

    regressions:
      """
      ->
        array x1 to 1
        -> x1 = 1
      """: "(function() {let i, into; i = 0; into = []; while (i <= 1) {let x1; x1 = i; into.push(x1); i++;}; into; return () => {let x1; return x1 = 1;};});"
  forcedFromArray:
    by:
      "array from a by 2": "let from, to, i, into; from = a || []; to = from.length; i = 0; into = []; while (i < to) {let v; v = from[i]; into.push(v); i += 2;}; into;"
      "array a by -1": "let from, i, into; from = a || []; i = from.length - 1; into = []; while (i >= 0) {let v; v = from[i]; into.push(v); i--;}; into;"
      "array a by c":   null # "let from, i, into; from = a || []; i = from.length - 1; into = []; while (i >= 0) {let v = from[i]; into.push(v); i--;}; into;"

    skip:
      "array from a skip 1":        "let from, to, i, into; from = a || []; to = from.length; i = 1; into = []; while (i < to) {let v; v = from[i]; into.push(v); i++;}; into;"
      "array from a skip b":        "let from, to, i, into; from = a || []; to = from.length; i = b; into = []; while (i < to) {let v; v = from[i]; into.push(v); i++;}; into;"
      "array from a skip 1 by -1":  "let from, i, into; from = a || []; i = from.length - 2; into = []; while (i >= 0) {let v; v = from[i]; into.push(v); i--;}; into;"
      "array from a skip b by -1":  "let from, i, into; from = a || []; i = from.length - (b + 1); into = []; while (i >= 0) {let v; v = from[i]; into.push(v); i--;}; into;"

    short:
      "array from a short 1":       "let from, to, i, into; from = a || []; to = from.length - 1; i = 0; into = []; while (i < to) {let v; v = from[i]; into.push(v); i++;}; into;"
      "array from a short b":       "let from, to, i, into; from = a || []; to = from.length - b; i = 0; into = []; while (i < to) {let v; v = from[i]; into.push(v); i++;}; into;"
      "array a short 1 by -1":      "let from, i, into; from = a || []; i = from.length - 1; into = []; while (i >= 1) {let v; v = from[i]; into.push(v); i--;}; into;"
      "array a short b by -1":      "let from, to, i, into; from = a || []; to = b; i = from.length - 1; into = []; while (i >= to) {let v; v = from[i]; into.push(v); i--;}; into;"

  til:
    each:
      "each a by c":            null # "let from, i, into; from = a || []; i = from.length - 1; into = []; while (i >= 0) {let v = from[i]; into.push(v); i--;}; into;"
      "each til 10":            "let i; i = 0; while (i < 10) {let v; v = i; v; i++;}; 10;"
      "each a til 10":          "let i; i = 0; while (i < 10) {let a; a = i; a; i++;}; 10;"
      "each til 10 with 1":     "let i; i = 0; while (i < 10) {let v; v = i; 1; i++;}; 10;"
      "each to 10":             "let i; i = 0; while (i <= 10) {let v; v = i; v; i++;}; 10;"
      "each from a to b by c":  "let to, i, by; to = b; i = a; by = c; while (by > 0 && i <= to || by < 0 && i >= to) {let v; v = i; v; i += by;}; to;"
      "each to 10 by -1":       "let i; i = 0; while (i >= 10) {let v; v = i; v; i--;}; 10;"
      "each to 10 by 0":        "let i; i = 0; 10;"

      "each from 2 til 10":     "let i; i = 2; while (i < 10) {let v; v = i; v; i++;}; 10;"
      "each from 10 til 2":     "let i; i = 10; while (i > 2) {let v; v = i; v; i--;}; 2;"
      "each til 10 by 2":       "let i; i = 0; while (i < 10) {let v; v = i; v; i += 2;}; 10;"

    array:
      "array til 10":           "let i, into; i = 0; into = []; while (i < 10) {let v; v = i; into.push(v); i++;}; into;"
      "array til 10 with 1":    "let i, into; i = 0; into = []; while (i < 10) {let v; v = i; into.push(1); i++;}; into;"
      "array to 1 by .25":      "let i, into; i = 0; into = []; while (i <= 1) {let v; v = i; into.push(v); i += 0.25;}; into;"

      "array a til 10 when a %% 2 == 0":      "let i, into; i = 0; into = []; while (i < 10) {let a; a = i; if (Caf.mod(a, 2) === 0) {into.push(a);}; i++;}; into;"
      "array myV, myK til 10 with myV * myK": "let i, into; i = 0; into = []; while (i < 10) {let myV, myK; myV = i; myK = i; into.push(myV * myK); i++;}; into;"

    object:
      "object til 10": "let i, into; i = 0; into = {}; while (i < 10) {let v; v = i; into[v] = v; i++;}; into;"

    find:
      "find v til 10 when v > 4": "let i, into; i = 0; into = null; while (i < 10) {let v; v = i; if (v > 4) {into = v; break;}; i++;}; into;"

    regressions:
      """
      import a
      array i til 10
      """: "(() => {let i1, into; return (i1 = 0, into = [], (() => {while (i1 < 10) {let i; i = i1; into.push(i); i1++;};})(), into);})();"

    nameCollisions:
      """
      array i til 10
      """: "let i1, into; i1 = 0; into = []; while (i1 < 10) {let i; i = i1; into.push(i); i1++;}; into;"

      """
      array j til 10
        i = j
      """: "let i1, into; i1 = 0; into = []; while (i1 < 10) {let j, i; j = i1; into.push(i = j); i1++;}; into;"

      """
      array i til 10  # thisone
        a = i
      """: "let i1, into; i1 = 0; into = []; while (i1 < 10) {let i, a; i = i1; into.push(a = i); i1++;}; into;"
