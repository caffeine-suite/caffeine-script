# ʃnɟıʇnɐǝq / Productive

### Programming with Caffeine

CaffeineScript, or CafScript for short, makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that compiles to JavaScript.

CaffeineScript is obsessivly focused on programmer productivity, the only thing that matters*. My primary inspirations are CoffeeScript, Ruby and ES6.

> WARNING:
> CaffeineScript is a work-in-progress. It isn't ready for use yet, but it is getting close.

(*) Assuming the language + runtime is capable of meeting your requirements, such as performance.

### Maximizing Programmer (My) Productivity

I'm making this language for me, much as Matz did with Ruby. If you agree with the philosophy behind the language, maybe it's for you too.

All my projects are in CoffeeScript. At last count I am maintaining almost 1700 coffee files. It's a great language, but I want more. I've been accumultating notes on how to make a better high-level language for Javascript since 2013. I now have over 200 notes. Most of them are coming to frutition in CaffeineScript.

Really, they all come down to trying to figure out how to maximizing my productivity. To that end, I've found some common themes:

- minimize tokens, and especially tokens which require matching
- maximize use of blocks
- maximize consistency
- maximize elegant, clean OO programming
- maximize elegant, clean functional programming
- minimize Javscript's warts
- streamline npm / CommonJs support
- syntax errors suggest opportunities

### Wiki

After you've read this short intro file, check out the [CaffeineScript Wiki](https://github.com/shanebdavis/caffeine-script/wiki) for more details.

### Example

```coffeescript
# CaffeineScript
# - 28 tokens
# - 0 matching-token-pairs
import &ArtSuite

class Login extends Component

  render: ->
    Element
      TextElement
        text: :username
        size: ww: 1 hch: 1

      TextInput
        placeholder: "" enter username here
        size: ww: 1 hch: 1
```

```javascript
// ES6
// - 70 tokens
// - 11 matching-token-pairs
let {
  Component,
  Element,
  TextElement,
  TextInput
} = require('art-suite');

module.exports = class Login extends Component {
  render() {
    Element(
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

* Tokens - code size is measured in tokens, the smallest semantically meaningful unit. Above all else, CaffeineScript minimizes tokens as much as possible with the goal of increasing clarity.
* Matchings - matching "", /**/, (), {}, [] and others token-pairs demands a cognitive burden far larger than just two tokens. CaffeineScript all but eliminates the need for matching-token-pairs.

* The JavaScript above is hand-coded. It is only roughly equivalent to the actual generated JavaScript. The generated JavaScript is a bit more capable and a bit longer than the JavaScript above.

## Syntax Matters

I believe syntax matters. In my experience every line of code written gets edited at least 10 times and read at least 100 over the product's lifetime. Therefor, every token costs 10x - 100x more programmer-time overall compared to the initial cost of adding it.

### Code is a Liability

While the product of code is an asset - it creates value in the world, code itself is a liability. It requires maintenence, reading, understanding, and editing. All of these things *cost* programmer time. A good way to reduce the cost of code is to reduce its size, as long as you can do so without losing clarity. When in doubt, less code is better code.

## Good Design and Programming Languages

Good design in programming, just like in anything else, is important. Sadly, good design principles are rarely applied to programming tools. I'm on a mission to change that. All well-designed things have the following properties. I aim to design CaffeineScript and it's related tools with these in mind:

* beautiful
* pleasurable to use
* discoverable
* singularly focused on minimizing physical and mental effort
  * less is more
  * hide clutter
  * streamline the most common work flows
  * place uncommon work-flows 'off-screen' so they don't distract

I look forward to the day when there are design awards for programing languages, editors, IDEs, compilers, debuggers, etc.

More on my design philosophy: [Amazingly Great Design @ EssenceAndArtifact.com](http://www.essenceandartifact.com/2014/07/amazingly-great-design-howto.html)

## CaffeineMC (Meta-Compiler)

CoffeeScript is designed to take maximum advantage of CaffeineMC. This means the language is extensible on a per-file or per-project basis. CaffeineMC enables this startling concept:

* Any language can change *arbitrarilly* without breaking any existing code.

No language has ever had this, as far as I'm aware. This isn't limited to CaffeineScript. CafScript just takes advantage of CaffeineMC. Let's unlease the power of language evolution! Learn more: [CaffeineMC](https://github.com/shanebdavis/caffeine-mc).

## CaffeineScript and CoffeeScript

I owe a debt of gratitude to Jeremy Ashkenas, the author of CoffeeScript. It is my primary inspiration, and what the CaffeineScript compiler is currently written in.

## Status

CaffeineScript is still a work in progress. I am not using it in any code yet. Progress is very good, though, and it *may* be ready soon.
