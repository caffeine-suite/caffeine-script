![logo](https://raw.githubusercontent.com/wiki/shanebdavis/caffeine-script/CaffeineScriptLogo.png)

### Productivity by Design [![Build Status](https://travis-ci.org/shanebdavis/caffeine-script.svg?branch=master)](https://travis-ci.org/shanebdavis/caffeine-script)

CaffeineScript is a programming language that compiles to JavaScript. The goal is to minimize total effort, over a product's lifetime, for the entire team. I believe design thinking is essential for achieving that goal. That means user-experience and graphic design are as important as computer-science and software engineering. If done right, a well-designed language can make programming more wonderful, code more beautiful and programming more fun. 

CaffeineScript is inspired by CoffeeScript, but it is a ground-up redesign, re-imagining what CoffeeScript or JavaScript might look like if it they were written today. The result is a lean, high-level language that empowers you to get the most out of JavaScript.

### [CaffeineScript Wiki](https://github.com/shanebdavis/caffeine-script/wiki)

Go to the [Wiki](https://github.com/shanebdavis/caffeine-script/wiki) for documentation and more.

### Install

```bash
npm install caffeine-script
```

Next: [Get Started](https://github.com/shanebdavis/caffeine-script/wiki/Get-Started)

Related: [CaffeineMC Wiki](https://github.com/shanebdavis/caffeine-mc/wiki)

### Example

![logo](https://raw.githubusercontent.com/wiki/shanebdavis/caffeine-script/CaffeineScriptDemo.png)

Related: [ArtSuite](https://github.com/imikimi/art-suite)

### Live Demo

A brief, interactive slideshow written in CaffeineScript

* [View the Slideshow](https://shanebdavis.github.io/caffeine-script-demo)
* [View or Clone the Slideshow's Source](https://github.com/shanebdavis/caffeine-script-demo/)

### Status: BETA

CaffeineScript is working and usable. The semantics are still shifting as I implement the remaining, planned v1 features.

### Contribute

* [Discuss on Google Group](https://groups.google.com/d/forum/caffeinescript)
* [Request, Suggest or Report Bugs on Github Issues](https://github.com/shanebdavis/caffeine-script/issues)
* [View source or Fork on Github](https://github.com/shanebdavis/caffeine-script)

### Why Use CaffeineScript?

It maximizes your productivity, blah, blah. But does it really? (yes, I think so)

Who cares! It's lean, agile and fun! And you can do cool things like this:

##### [streamlined modules](https://github.com/shanebdavis/caffeine-script/wiki/Modules-and-CommonJs)

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

##### streamlined [array](https://github.com/shanebdavis/caffeine-script/wiki/Array-Literals) and [object](https://github.com/shanebdavis/caffeine-script/wiki/Object-Literals) literals
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

##### arrays of object literals

```coffeescript
# CaffeineScript - 19 tokens
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

##### powerful comprehensions

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