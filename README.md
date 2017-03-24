# Programming with Caffeine

CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that empowers you to get the most out of JavaScript.

### [CaffeineScript Wiki](https://github.com/shanebdavis/caffeine-script/wiki)

Go to the [Wiki](https://github.com/shanebdavis/caffeine-script/wiki) for documentation and more.

### Install

```bash
npm install caffeine-script
```

Next: [Get Started](https://github.com/shanebdavis/caffeine-script/wiki/Get-Started)

### [Productivity is *Everything*](https://github.com/shanebdavis/caffeine-script/wiki/Programmer-Productivity)

I believe productivity matters more than anything else in programming. Programming is the most powerful tool ever invented. It is the only true meta-tool. It is a tool that allows you to create *any other tool*. With any [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) programming-language, you can create any possible program including *any other programming language*, Turing-complete or not. 

The meta-nature of programming means any improvement in productivity creates a virtuous feedback loop. When you can write programs faster, you can write tools faster that in turn help you be even more productive. In other words, productivity improvements are exponential. 

### [Good Design and Programming Languages](https://github.com/shanebdavis/caffeine-script/wiki/Good-Design-and-Programming-Languages)

Design matters. 

So why is design-thinking rarely applied to programming languages and tools? Apple has finally convinced the world that end-user apps and devices need to be obsessively designed. It matters. A lot. But, the tools we use to write those apps are anything but well designed, even Apple's.

Design thinking is ultimately about productivity. It's about designing a tool to get the job done in the most efficient way possible over all possible metrics. That includes mental effort and physical effort, but it also includes emotional effort and other esthetics.

I believe programming languages and tools should be beautifully designed. I believe the most productive tools are also the most beautiful ones. Flow is the most productive state possible for programming, but any little thing can trip you out of flow. That is why beautiful design is essential to entering and maintaining the flow state and, ultimately, programmer productivity.

### [CaffeineScript's Design](https://github.com/shanebdavis/caffeine-script/wiki/Design)

> CaffeineScript's sole goal is to maximize productivity. Every design decision must (a) minimize the total effort (b) over a product's lifetime (c) for everyone working on it.

If you are visual, value reduced syntax and are looking for every productivity advantage, CaffeineScript may be for you.

CaffeineScript, or Caf for short, is built on JavaScript. While JavaScript is a powerful language, it is also low-level. It is effectively the assembly-language of the web. It is excessively verbose and has many ways to shoot yourself in the foot. No-one should have to hand-code assembly-language. Coding in any assembly-language is error-prone and tedious. There is no reason to limit ourselves to only what our assembly language can express. 

### Key Benefits

* Designed to take maximum advantage of the best parts of JavaScript:
  * [Dynamic Typing]()
  * [Functional Programming]()
  * [Object Oriented Programming]()
* Beautiful, visual, expressive, minimal syntax
  * more than 60% less syntax than JavaScript
  * more than 10% less syntax than CoffeeScript
* Eliminates most of [JavaScript's rough edges](https://github.com/shanebdavis/caffeine-script/wiki/Coming-from-JavaScript), so you no longer have to feel like you're in a [SpaceQuest Adventure](https://www.youtube.com/watch?v=z2fmsXzXYA4).
* 90%+ reduction in [CommonJS-specific code](https://github.com/shanebdavis/caffeine-script/wiki/Modules-and-CommonJs) so you can take maximum advantage of modules and NPMs.
* CaffeineScript, the language itself, is extensible on a per-file or per-project basis with the help of [CaffeineMC](https://github.com/shanebdavis/caffeine-mc).

### Status: Alpha

CaffeineScript is working and usable. The semantics are still shifting as I implement the remaining, planned v1 features.

### Why Use CaffeineScript?

It maximizes your productivity, blah, blah. But does it really? (yes, I think so) 

Who cares! It's lean, agile and fun! And you can do cool things like this:

##### streamlined modules

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

##### streamlined arrays and object property names
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

##### #hashStrings, :wordStrings, and 10unitStrings

```coffeescript
# CaffeineScript - 15 tokens
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
// JavaScript - 40 tokens
{
  nameToColor: { red:      "#f00", green:   "#0f0"  },
  colorToName: { "#f00":   "red",  "#0f0":  "green" },
  style:       { fontSize: "12pt", padding: "25px"  }
};
```

##### arrays of object literals

```coffeescript
# CaffeineScript - 25 tokens
users = 
  id: 123, username: :shanebdavis, age: 41, fullName: "" Shane Brinkman-Davis Delamore
  id: 456, username: :george123,   age: 23, fullName: "" George Washington
```


```JavaScript
// JavaScript - 35 tokens
let users = [
  {id: 123, username: "shanebdavis", age: 41, "Shane Brinkman-Davis Delamore"},
  {id: 456, username: "george123",   age: 23, "George Washington"}
];
```

## CaffeineScript and CoffeeScript

I owe a debt of gratitude to Jeremy Ashkenas, the author of CoffeeScript. It is my primary inspiration, and what the CaffeineScript compiler was originally written in. More on inspirations from CoffeeScript: [Coming from CoffeeScript](https://github.com/shanebdavis/caffeine-script/wiki/Coming-from-CoffeeScript).