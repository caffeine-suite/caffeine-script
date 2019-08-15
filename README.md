![logo](https://raw.githubusercontent.com/wiki/shanebdavis/caffeine-script/CaffeineScriptLogo.png)
[![Build Status](https://travis-ci.org/caffeine-suite/caffeine-script.svg?branch=master)](https://travis-ci.org/caffeine-suite/caffeine-script) [![NPM version](https://img.shields.io/npm/v/caffeine-script.svg)](https://www.npmjs.com/package/caffeine-script)
## Why CaffeineScript and not JSX, TypeScript, CoffeeScript or JavaScript?

I believe less is more. It is the first principle of design and foundation of just about every good programming practice: [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [KISS](https://en.wikipedia.org/wiki/KISS_principle), [ZEN (YAGNI)](http://www.essenceandartifact.com/2016/02/yagni-and-building-in-house-frameworks.html), [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle), [interface segregation](https://en.wikipedia.org/wiki/Interface_segregation_principle), etc... That's why I wrote CaffeineScript. This info-graphic shows the result:

[![logo](https://raw.githubusercontent.com/wiki/shanebdavis/caffeine-script/Why-CaffeineScript-InfoGraphic.png)](https://raw.githubusercontent.com/wiki/shanebdavis/caffeine-script/Why-CaffeineScript-InfoGraphic-Large.png)

> 2019 UPDATE: I'm using and developing CaffieneScript every day. Progress continues, the above example has been reduced to just 220 tokens. You can see more here: [CaffeineScript TicTacToe](https://github.com/imikimi/art-suite-demos/tree/master/source/Art.SuiteDemos/Demos/TicTacToe)

CaffeineScript, with the help of ArtSuite, takes **3x** less code to write this complete implementation of Tic-Tac-Toe. In general, CaffeineScript is **3-5x** more efficient than JSX, TypeScript or JavaScript. You can see 3x as much code on screen at once, solve problems with 3x less code, and have 3x less code to change when you need to refactor. Perhaps most important of all, you could have 3x less code to debug.

Code size matters. Less is more.

TicTacToe source:
* [CaffeineScript source](https://github.com/imikimi/art-suite-demos/blob/master/source/Art.SuiteDemos/Demos/TicTacToe/Main.caf)
* [React/JSX combined source](https://github.com/imikimi/art-suite-demos/blob/master/source/Art.SuiteDemos/Demos/TicTacToe/TTT_react_comparison.jsx)
* [React/JSX tutorial](https://reactjs.org/tutorial/tutorial.html)

TicTacToe live:
* [ArtSuite/CaffeineScript on github](http://imikimi.github.io/art-suite-demos/?demo=TicTacToe)
* [React/JSX on codepen](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)

Of course, just because CaffeineScript can reduce code-size by 3x doesn't mean you'll be a full 3x faster. CaffeineScript cannot reduce the essential logic of your code. However, it dramatically cuts back the noise so you can see your core logic clearly.

Read more about programming with less:
* [Writing Less Code](http://www.essenceandartifact.com/2016/06/write-less-code.html)

### JavaScript's Golden Heart

JavaScript has a golden heart. At its core, it is a powerful hybrid of object-oriented, functional and dynamically-typed languages. Combined with modern runtimes, world-class garbage collectors and JIT compilers, JavaScript can be a surprisingly good platform for building great applications.

However, JavaScript has an ailing body. Even now, in 2019, JavaScript has major syntax and semantic problems which make it error prone and dangerous. JavaScript's syntax is excessively verbose. Code readability matters, especially for large projects, and JavaScript's syntax is the least readable of any major language. This is easy to fix, and the rewards can be huge.

Further, JavaScript has many dangerous holes in its semantics which can introduce subtle, hard to find bugs. They include [accidental globals](https://github.com/caffeine-suite/caffeine-script/wiki/Globals), [weakly-typed truth](https://github.com/caffeine-suite/caffeine-script/wiki/Caffeine-Truth), [weakly-typed equality](https://github.com/caffeine-suite/caffeine-script/wiki/Equality) and other [weakly-typed operators](https://github.com/caffeine-suite/caffeine-script/wiki/Operator-Overloading). Thankfully, the core JavaScript semantics are good, and these auxiliary semantics can be partially or fully fixed without changing JavaScript.

CaffeineScript's goal is to maximize productivity for JavaScript-based projects. It does this primarily by minimizing syntax and patching the holes in JavaScript's [semantics](https://github.com/caffeine-suite/caffeine-script/wiki/Semantics).

### Inspired by CoffeeScript

I love CoffeeScript. I love the visual blocking of bracket-less blocks. As I used it over the years, though, I started noting it wasn't very consistent. I was frustrated by all-to-frequent edge cases where I had to revert to using brackets. For example, all array literals still require brackets ([]) in CoffeeScript. Eventually I couldn't stand it anymore. I set out to write a language that could parse bracket-less-blocks *consistently*.

If you love CoffeeScript, or even if you liked some parts but others drove you crazy, I've got an awesome language for you.

## Introducing CaffeineScript

CaffeineScript is an open-source programming language that compiles to JavaScript. The goal is to minimize total effort, over a product's lifetime, for the entire team. Design thinking is essential for achieving that goal. That means [user-experience](https://github.com/shanebdavis/caffeine-script/wiki/UX-Design-for-Langauges) and [graphic design](https://github.com/shanebdavis/caffeine-script/wiki/Graphic-Design-for-Languages) are as important as computer-science and software engineering. A well-designed language makes code more beautiful, programming more fun, and, ultimately, lets us get more done with less effort.

CaffeineScript starts where CoffeeScript left off, fixing its shortcomings and taking a big step forward for high-productivity JavaScript. Two concrete examples: [improved React-style programming](https://github.com/shanebdavis/caffeine-script/wiki/React-with-CaffeineScript) and [90% reduced module-specific code](https://github.com/shanebdavis/caffeine-script/wiki/Streamlined-Modules). The result is a lean, high-level language that empowers you to get the most out of JavaScript.

### Example

CaffeineScript:
![logo](https://raw.githubusercontent.com/wiki/shanebdavis/caffeine-script/CaffeineScriptDemo.png)
> 41 tokens in CaffeineScript - GitHub doesn't support custom syntax highlighting, so I've included the image above. You can access the [example source here](example.caf).


Logically equivalent JavaScript:
```JavaScript
let {FluxComponent, Element} = require("art-suite");
let PlayerLine = require("./PlayerLine");

class PlayerList extends FluxComponent {
  render() {
    let
      currentPlayers = this.currentPlayers.sort( (a, b) => b.score - a.score ),
      children = [],
      {length} = currentPlayers;

    for (let i = 0; i < length; i++) {
      let player = currentPlayers[i];
      children.push(PlayerLine(player, { key: player.name }));
    }

    return Element({childrenLayout: "column"}, children);
  }
}

PlayerList.subscriptions("players.currentPlayers");

module.exports = PlayerList;
```
> 130 tokens in JavaScript

Related: [ArtSuite](https://github.com/imikimi/art-suite)

### Live Demo

A brief, interactive slideshow written in CaffeineScript

* [View the Slideshow](https://caffeine-suite.github.io/caffeine-script-demo/)
* [View or Clone the Slideshow's Source](https://github.com/caffeine-suite/caffeine-script-demo/)

### Status: BETA

CaffeineScript is working and usable. The semantics and syntax may shift slightly as I work through the remaining bugs.

### Install

```bash
npm install caffeine-script
```

### Learn More

* [CaffeineScript Documentation Wiki](https://github.com/shanebdavis/caffeine-script/wiki/Home)
* [Get Started](https://github.com/shanebdavis/caffeine-script/wiki/Get-Started)
* [Benefits](https://github.com/shanebdavis/caffeine-script/wiki/Benefits)
* [Highlights](https://github.com/shanebdavis/caffeine-script/wiki/Highlights)
* [Productivity by Design](https://github.com/shanebdavis/caffeine-script/wiki/Productivity-by-Design)
* [CaffeineScript Design](https://github.com/shanebdavis/caffeine-script/wiki/CaffeineScript-Design)
* [What is CaffeineScript Good For?](https://github.com/shanebdavis/caffeine-script/wiki/What-is-CaffeineScript-Good-For%3F)
* [Why CaffeineScript over CoffeeScript?](https://github.com/shanebdavis/caffeine-script/wiki/Why-CaffeineScript-over-CoffeeScript%3F)
* [Why CaffeineScript over JavaScript?](https://github.com/shanebdavis/caffeine-script/wiki/Why-CaffeineScript-over-JavaScript%3F)

### Contribute

* [Discuss on Google Groups](https://groups.google.com/d/forum/caffeinescript)
* [Request, Suggest or Report Bugs on Github Issues](https://github.com/shanebdavis/caffeine-script/issues)
* [View source or Fork on Github](https://github.com/shanebdavis/caffeine-script)

### More Examples

##### [React](https://github.com/shanebdavis/caffeine-script/wiki/React) and [Declarative Programming](https://github.com/shanebdavis/caffeine-script/wiki/Declarative-Programming)
* [streamlined modules](https://github.com/shanebdavis/caffeine-script/wiki/Streamlined-Modules)
* block [function invocation](https://github.com/shanebdavis/caffeine-script/wiki/function-invocation)

```coffeescript
# CaffeineScript - 27 tokens and 0 must-match-tokens
import &ArtSuite

class Login extends Component

  render: ->
    Element
      TextElement
        text: :username
        size: ww: 1, hch: 1

      TextInput
        placeholder: "" enter username here
        size: ww: 1, hch: 1
```

```javascript
// JavaScript - 73 tokens including 28 must-match-tokens
let {
  Component,
  Element,
  TextElement,
  TextInput
} = require('art-suite');

module.exports = class Login extends Component {
  render() {
    return Element(
      TextElement({
        text: 'username',
        size: {ww: 1, hch: 1}
      }),

      TextInput({
        placeholder: 'enter username here',
        size: {ww: 1, hch: 1}
      })
    );
  };
};
```


##### Implicit [Array](https://github.com/shanebdavis/caffeine-script/wiki/Array-Literals) and [Object](https://github.com/shanebdavis/caffeine-script/wiki/Object-Literals) literals
```coffeescript
# CaffeineScript - 20 tokens
1d: 1 2 3 4 5 6 7 8 9

2d:
  1 2 3
  4 5 6
  7 8 9
```

```JavaScript
// JavaScript - 54 tokens
{
  "1d": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2d": [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
};
```

```coffeescript
# CaffeineScript - 18 tokens - 0 must-match-tokens
users =
  id: 123 username: :shanebdavis born: 1976 fullName: "" Shane Brinkman-Davis Delamore
  id: 456 username: :alanturing  born: 1912 fullName: "" Alan Turing
```


```JavaScript
// JavaScript - 35 tokens - 14 must-match tokens
let users = [
  {id: 123, username: "shanebdavis", born: 1976, "Shane Brinkman-Davis Delamore"},
  {id: 456, username: "alanturing",  born: 1912, "Alan Turing"}
];
```
##### [#hashStrings, :wordStrings, and 10unitStrings](https://github.com/shanebdavis/caffeine-script/wiki/String-Literals)

```coffeescript
# CaffeineScript - 15 tokens - 0 must-match-tokens
nameToColor:
  red:   #f00
  green: #0f0

colorToName:
  #f00:  :red
  #0f0:  :green

style:
  fontSize: 12pt
  padding:  25px
```

```JavaScript
// JavaScript - 40 tokens - 24 must-match-tokens
{
  nameToColor: { red:      "#f00", green:   "#0f0"  },
  colorToName: { "#f00":   "red",  "#0f0":  "green" },
  style:       { fontSize: "12pt", padding: "25px"  }
};
```

##### [Comprehensions and Iteration](https://github.com/shanebdavis/caffeine-script/wiki/Comprehensions-and-Iteration)

```coffeescript
# CaffeineScript 15 tokens - 2 must-match tokens
fontProps = object value, key from allProps when /^font/.test key
```

```javascript
// JavaScript 44 tokens - 16 must-match tokens
var fontProps = {}, key, value;

for (key in allProps) {
  value = allProps[key];
  if (/^font/.test(key)) {
    fontProps[key] = value;
  }
}
```

## What about TypeScript?

Is there interest in TypeScript support? If so, with some help, I could add it. CaffeineScript could easily support a modified TypeScript syntax for type annotation and integration into the TypeScript universe.

[More on CaffeineScript and Static Typing](https://github.com/caffeine-suite/caffeine-script/wiki/Static-Typing)

## CaffeineScript and CoffeeScript

I owe a debt of gratitude to Jeremy Ashkenas and the CoffeeScript community. It is my primary inspiration, and what the CaffeineScript compiler was originally written in. More on inspirations from CoffeeScript: [Coming from CoffeeScript](https://github.com/shanebdavis/caffeine-script/wiki/Coming-from-CoffeeScript).