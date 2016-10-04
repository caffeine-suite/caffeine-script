{parseTests} = require '../Helper'

module.exports = suite:
  demos: ->
    parseTests
      "number = 42":      "number = 42;"
      "number = -42":     "number = -42;"
      "opposite = true":  "opposite = true;"

      """
      if opposite
        number = -42
      """: "if (opposite) {number = -42;};"

      "number = -42 if opposite": "if (opposite) {number = -42};"

      "square = (x) -> x * x": "square = (function(x) {return x * x;});"

      "list = [1, 2, 3, 4, 5]": "list = [1, 2, 3, 4, 5];"

      """
      math =
        root:   Math.sqrt
        square: square
        cube:   (x) -> x * square x
      """: "math = {root: Math.sqrt, square: square, cube: (function(x) {return x * square(x);})};"

      # """
      # race = (winner, runners...) ->
      #   print winner, runners
      # """: ""

      'alert "I knew it!" if elvis?' : "if (elvis != null) {alert(\"I knew it!\")};"
      # "cubes = (math.cube num for num in list)" : ""

  functions: ->
    parseTests
      "square = (x) -> x * x": "square = (function(x) {return x * x;});"
      "cube   = (x) -> square(x) * x": "cube = (function(x) {return square(x) * x;});"

      #fill = (container, liquid = "coffee") ->
      #  "Filling the #{container} with #{liquid}..."

  objectsAndArrays: ->
    parseTests
      'song = ["do", "re", "mi", "fa", "so"]':
        "song = [\"do\", \"re\", \"mi\", \"fa\", \"so\"];"

      'singers = {Jagger: "Rock", Elvis: "Roll"}':
        "singers = {Jagger: \"Rock\", Elvis: \"Roll\"};"

      """
      bitlist =
        1, 0, 1,
        0, 0, 1,
        1, 1, 0
      """: "bitlist = [1, 0, 1, 0, 0, 1, 1, 1, 0];"

      """
      kids =
        brother:
          name: "Max"
          age:  11
        sister:
          name: "Ida"
          age:  9
      """: "kids = {brother: {name: \"Max\", age: 11}, sister: {name: \"Ida\", age: 9}};"

  ifElseUnlessAndConditionalAssignment: ->
    parseTests
      "mood = greatlyImproved if singing": "if (singing) {mood = greatlyImproved};"

      """
      if happy and knowsIt
        clapsHands()
        chaChaCha()
      else
        showIt()
      """: "if (happy && knowsIt) {clapsHands(); chaChaCha();} else {showIt();};"

      "date = if friday then sue else jill": "date = friday ? sue : jill;"

  loops: ->
    parseTests
      """
      if this.studyingEconomics
        buy()  while supply > demand
        sell() until supply > demand
      """: "if (this.studyingEconomics)
        {while (supply > demand) {buy()};
        while (!(supply > demand)) {sell()};};"

  operatorsAndAliases: ->
    parseTests
      "-7 % 5 == -2": "(-7 % 5) === -2;"

      "launch() if ignition is on": "if (ignition === true) {launch()};"

      "volume = 10 if band isnt SpinalTap": "if (band !== SpinalTap) {volume = 10};"

      "letTheWildRumpusBegin() unless answer is no": "if (!(answer === false)) {letTheWildRumpusBegin()};"

      "if car.speed < limit then accelerate()": "if (car.speed < limit) {accelerate()};"

      "winner = yes if pick in [47, 92, 13]": "if (Caf.in(pick, [47, 92, 13])) {winner = true};"

      'print inspect "My name is #{@name}"': 'print(inspect(`My name is ${this.name}`));'

  existentialOperator: ->
    parseTests
      "solipsism = true if mind? and not world?": "if ((mind != null) && !(world != null)) {solipsism = true};"
      'footprints = yeti ? "bear"': "footprints = (yeti != null ? yeti : (\"bear\"));"
