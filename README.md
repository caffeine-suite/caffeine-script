## Programming with Caffeine

CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive.

I'm making this language for me, much as Matz did with Ruby. If you agree with the philosophy behind the language, maybe it's for you too.

### What is CaffeineScript?

CaffeineScript is a lean, high-level programming language that compiles to JavaScript. It is inspired by CoffeeScript, Ruby and ES6. It is close to JavaScript in semantics and close to CoffeeScript in syntax.

#### Example

```coffeescript
# CaffeineScript - 28 tokens
import &ArtSuite

class Login extends Component

  render: ->
    Dialog
      TextElement text: :username size: ww: 1 hch: 1

      TextInput
        placeholder: "" enter username here
        size: ww: 1 hch: 1
```

```javascript
// ES6 - 97 tokens
module.exports = (function(){
  var {
    Component = global.Component,
    Dialog = global.Dialog,
    TextElement = global.TextElement,
    TextInput = global.TextInput
  } = require('art-suite');

  return class Login extends Component {
    render() {
      Dialog(
        TextElement({text: 'username', size: {ww: 1, hch: 1}}),
        TextInput({placeholder: 'enter username here', size: {ww: 1, hch: 1}})
      );
    };
  };
})();
```

### Status

CaffeineScript is still a work in progress. I am not using it in any code yet. Progress is very good, though, and it *may* be ready soon. Perhaps it will be ready in November or December for beta use.

## Syntax Matters

I believe syntax matters. Every line of code we write, throughout the product lifecycle, will get edited at least 10 times and read it at least 100 times. Every token costs 10x - 100x more programmer-time down the road than it did to initially add it. (1)

> Code is a liability.

While the product of code is an asset - it creates value in the world, the code itself is a liability. It requires maintenence, reading, understanding, and editing. All of these things *cost* programmer time. A good way to reduce the cost of code is to reduce its size, as long as you can do so without losing clarity. When in doubt, less code is better code.

(1) These are, of course, rough numbers with no study backing them up. They are based on personal experience.

## Good Design and Programming Languages

Good design in programming, just like in anything else, is important. Sadly, good design princinples are rarely applied to programming tools. I'm on a mission to change that. All well-designed things have the following properties. I aim to design CaffeineScript and it's related tools with these in mind:

* beautiful
* pleasurable to use
* discoverable
* singularly focused on minimizing physical and mental effort
  * less is more
  * hide clutter
  * streamline the most common work flows
  * place uncommon work-flows off-screen so they don't distract

I look forward to the day when there are design awards for programing langauges, editors, IDEs, compilers, debuggers, etc.

More on my design philosophy: [Amazingly Great Design @ EssenceAndArtifact.com](http://www.essenceandartifact.com/2014/07/amazingly-great-design-howto.html)

## CaffeineMC (Meta-Compiler)

CoffeeScript is designed to take maximum advantage of CaffeineMC. This means the language is extensible on a per-file or per-project basis.

* Learn more about [CaffeineMC](https://github.com/shanebdavis/caffeine-mc) on github

## CaffeineScript and CoffeeScript

I owe a debt of gratitude to Jeremy Ashkenas, the author of CoffeeScript. It is my primary inspiration, and what the CaffeineScript compiler is currently written in.
