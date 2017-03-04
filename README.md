# Programming with Caffeine

CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that compiles to JavaScript.

CaffeineScript, or CafScript for short, is inspired by CoffeeScript and Ruby.

### Wiki and Documentation

Check out the [CaffeineScript Wiki](https://github.com/shanebdavis/caffeine-script/wiki) for documentation and more.

### Status - Alpha

CaffeineScript is now written in itself! (2017-02-26)

That means it is basically real and usable. See the [issues](https://github.com/shanebdavis/caffeine-script/issues) for what is left to take this baby to Beta and finally a release-candidate.

Try it out:

```bash
# SBD: I'll make this try-out script nicer eventually!
git clone https://github.com/shanebdavis/caffeine-script.git
cd caffeine-script
npm install

# ugly little hack
cd node_modules
ln -s ../../caffeine-script
cd ..

# if you install globally, caf will be in your path
node_modules/.bin/caf demo.caf

# you can also run the tests:
npm test
```

### CaffeineScript Example

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
// JavaScript ES6
// - 71 tokens
// - 11 matching-token-pairs
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
* Tokens - code size is measured in tokens, the smallest semantically meaningful unit. Above all else, CaffeineScript minimizes tokens as much as possible with the goal of increasing clarity.
* Matchings - matching "", /**/, (), {}, [] and others token-pairs demands a cognitive burden far larger than just two tokens. CaffeineScript all but eliminates the need for matching-token-pairs.
* The JavaScript above is hand-coded. It is only roughly equivalent to the actual generated JavaScript. The generated JavaScript is a bit more capable and a bit longer than the JavaScript above.

## Maximizing Programmer Productivity

I'm making this language for me, much as Matz did with Ruby. If you agree with the philosophy behind the language, maybe it's for you too.

All my projects are in CoffeeScript. I am maintaining almost 1700 coffee files. It's a great language, but I want more. I've been accumultating notes on how to make a better high-level language for Javascript since 2013. I now have over 200 notes. Most of them are coming to frutition in CaffeineScript.

All these ideas service one primary goal: maximize my productivity. In order to do that, I've ruthlessly reduced syntax, all but elliminated the need for matching-tokens, elliminated the possibilty of certain common bugs, trivialized some common refactors and obessed over language consistency. The result, to my delight, is something beautiful.

## Good Design and Programming Languages

Good design in programming, just like in anything else, is important. Sadly, good design principles are rarely applied to programming tools. I'm on a mission to change that. All well-designed things have the following properties. I aim to design CaffeineScript and it's related tools with these in mind:

* beautiful
* pleasurable to use
* discoverable
* singularly focused on minimizing physical and mental effort
  * less is more
  * hide clutter
  * streamline the most common work flows
  * prioritize common work-flows over uncommon

I look forward to the day when there are design awards for programing languages, editors, IDEs, compilers, debuggers, etc.

More on my design philosophy: [Amazingly Great Design @ EssenceAndArtifact.com](http://www.essenceandartifact.com/2014/07/amazingly-great-design-howto.html)

## CaffeineMC (Meta-Compiler)

CaffeineScript is designed to take maximum advantage of [CaffeineMC](https://github.com/shanebdavis/caffeine-mc). This means the language is extensible on a per-file or per-project basis. CaffeineMC enables this startling concept:

* Any language can change *arbitrarilly* without breaking any existing code.

No language has ever had this, as far as I'm aware. This isn't limited to CaffeineScript. CafScript just takes advantage of CaffeineMC. Let's unlease the power of language evolution!

## CaffeineScript and CoffeeScript

I owe a debt of gratitude to Jeremy Ashkenas, the author of CoffeeScript. It is my primary inspiration, and what the CaffeineScript compiler was originally written in.
