![logo](https://raw.githubusercontent.com/wiki/shanebdavis/caffeine-script/CaffeineScriptLogo.png)

### Less Code is Better Code [![Build Status](https://travis-ci.org/caffeine-suite/caffeine-script.svg?branch=master)](https://travis-ci.org/caffeine-suite/caffeine-script) [![NPM version](https://img.shields.io/npm/v/caffeine-script.svg)](https://www.npmjs.com/package/caffeine-script)

I believe less is more. My fundamental guiding principle for programming is "write less code" (WLC). Less code means less to read, less to change and, of course, less to write in the first place. Most software engineering principles boil down to WLC: [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [KISS](https://en.wikipedia.org/wiki/KISS_principle), [ZEN (YAGNI)](http://www.essenceandartifact.com/2016/02/yagni-and-building-in-house-frameworks.html). Blog post: [WLC @ EssenceAndArtifact.com](http://www.essenceandartifact.com/2016/06/write-less-code.html)

If you love concise, bracket-less languages, I've got a beautiful, graphically designed one for you. 

### Inspired by CoffeeScript

I love CoffeeScript. I love the visual blocking of bracket-less blocks. As I used it over the years, though, I started noting it wasn't very consistent. I was always frustrated by all-to-frequent edge cases where I had to use brackets anyway. For example, all array literals still require brackets ([]) in CoffeeScript. Eventually I couldn't stand it anymore. I set out to write a language that could parse bracket-less-blocks *consistently*. The result exceeded my already high expectations.

If you love CoffeeScript, or even if you liked some parts but others drove you crazy, I've got an awesome language for you.

### Introducing CaffeineScript

CaffeineScript is an open-source programming language that compiles to JavaScript. The goal is to minimize total effort, over a product's lifetime, for the entire team. Design thinking is essential for achieving that goal. That means [user-experience](https://github.com/shanebdavis/caffeine-script/wiki/UX-Design-for-Langauges) and [graphic design](https://github.com/shanebdavis/caffeine-script/wiki/Graphic-Design-for-Languages) are as important as computer-science and software engineering. A well-designed language makes code more beautiful, programming more fun, and, ultimately, lets us get more done with less effort.

CaffeineScript starts where CoffeeScripts left off, fixing its shortcomings and taking a big step forward for high-productivity javascript. Two concrete examples: [improved React-style programming](https://github.com/shanebdavis/caffeine-script/wiki/React-with-CaffeineScript) and [90% reduced module-specific code](https://github.com/shanebdavis/caffeine-script/wiki/Streamlined-Modules). The result is a lean, high-level language that empowers you to get the most out of JavaScript.

### Example

![logo](https://raw.githubusercontent.com/wiki/shanebdavis/caffeine-script/CaffeineScriptDemo.png)

Related: [ArtSuite](https://github.com/imikimi/art-suite)

### Live Demo

A brief, interactive slideshow written in CaffeineScript

* [View the Slideshow](https://shanebdavis.github.io/caffeine-script-demo)
* [View or Clone the Slideshow's Source](https://github.com/shanebdavis/caffeine-script-demo/)

### Status: BETA

CaffeineScript is working and usable. The semantics and syntax may shift slightly as I work through the remaining bugs.

### Install

```bash
npm install caffeine-script
```

### Learn More

* [Wiki Home](https://github.com/shanebdavis/caffeine-script/wiki/Home)
* [Get Started](https://github.com/shanebdavis/caffeine-script/wiki/Get-Started)
* [Benefits](https://github.com/shanebdavis/caffeine-script/wiki/Benefits)
* [Highlights](https://github.com/shanebdavis/caffeine-script/wiki/Highlights)
* [Productivity by Design](https://github.com/shanebdavis/caffeine-script/wiki/Productivity-by-Design)
* [CaffeineScript Design](https://github.com/shanebdavis/caffeine-script/wiki/CaffeineScript-Design)
* [What is CaffeineScript Good For?](https://github.com/shanebdavis/caffeine-script/wiki/What-is-CaffeineScript-Good-For%3F)
* [Why CaffeineScript over CoffeeScript?](https://github.com/shanebdavis/caffeine-script/wiki/Why-CaffeineScript-over-CoffeeScript%3F)
* [Why CaffeineScript over JavaScript?](https://github.com/shanebdavis/caffeine-script/wiki/Why-CaffeineScript-over-JavaScript%3F)

### Contribute

* [Discuss on Google Group](https://groups.google.com/d/forum/caffeinescript)
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
# CaffeineScript - 18 tokens
users =
  id: 123 username: :shanebdavis born: 1976 fullName: "" Shane Brinkman-Davis Delamore
  id: 456 username: :alanturing  born: 1912 fullName: "" Alan Turing
```


```JavaScript
// JavaScript - 35 tokens
let users = [
  {id: 123, username: "shanebdavis", born: 1976, "Shane Brinkman-Davis Delamore"},
  {id: 456, username: "alanturing",  born: 1912, "Alan Turing"}
];
```
##### [#hashStrings, :wordStrings, and 10unitStrings](https://github.com/shanebdavis/caffeine-script/wiki/String-Literals)

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

##### [Comprehensions and Iteration](https://github.com/shanebdavis/caffeine-script/wiki/Comprehensions-and-Iteration)

```coffeescript
# CaffeineScript
fontProps = object value, key from allProps when /^font/.test key
```

```javascript
// JavaScript
var fontProps = {}, key, value;

for (key in allProps) {
  value = allProps[key];
  if (/^font/.test(key)) {
    fontProps[key] = value;
  }
}
```

## CaffeineScript and CoffeeScript

I owe a debt of gratitude to Jeremy Ashkenas and the CoffeeScript community. It is my primary inspiration, and what the CaffeineScript compiler was originally written in. More on inspirations from CoffeeScript: [Coming from CoffeeScript](https://github.com/shanebdavis/caffeine-script/wiki/Coming-from-CoffeeScript).