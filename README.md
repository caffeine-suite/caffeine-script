# Programming with Caffeine

CaffeineScript makes programming more wonderful, code more beautiful and programmers more productive. It is a lean, high-level language that empowers you to get the most out of JavaScript.

### It's About Productivity

If you are visual, value reduced syntax and are looking for every productivity advantage, CaffeineScript may be for you.

CaffeineScript, or Caf for short, is built on JavaScript. While JavaScript is a powerful language, it is also low-level. It is effectively the assembly-language of the web. It is excessively verbose and has many ways to shoot yourself in the foot. No-one should have to hand-code assembly-language. Coding in any assembly-language is error-prone and tedious. There is no reason to limit ourselves to only what our assembly language can express. 

### Benefits

* embraces the ideals of JavaScript
 * dynamic typing
 * functional programming
 * object oriented programming
* syntax is beautiful, visual, expressive and minimal
* smooths over many of JavaScript's rough edges
* streamlines CommonJS module definition and usage
* extensible on a per-file or per-project basis with the help of [CaffeineMC](https://github.com/shanebdavis/caffeine-mc)

### Priorities

1. maximize programmer productivity
2. generate fast JavaScript
4. generate lean JavaScript
5. generate human-readable JavaScript

### Wiki and Documentation

Check out the [CaffeineScript Wiki](https://github.com/shanebdavis/caffeine-script/wiki) for documentation and more.

### Status: Alpha

CaffeineScript is working and usable. The semantics are still shifting as I implement the remaining, planned v1 features.

### Example
##### CaffeineScript

```coffeescript
|caffeine-script
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
##### JavaScript

```javascript
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
##### Comparison
* CaffeineScript
  * 28 tokens
  * 0 matching-token-pairs
* JavaScript
  * 71 tokens
  * 11 matching-token-pairs

##### Notes

* The first line, `|caffeine-script`, tells CaffeineMC what compiler/language to use for the rest of the file. This can be set on a per-file or per-project basis. Typically, you'll set it once in your CaffeineMC config file and the rest of your .caf files won't need t specify their language. It is included in the example above to ensure anyone copy-pasting and then compiling the above code will get a working result. This first line is not included in the CaffeineScript token-count since usually it won't be present.
* Tokens - code size is measured in tokens, the smallest semantically meaningful unit. Above all else, CaffeineScript minimizes tokens as much as possible with the goal of increasing clarity.
* Matchings - matching "", /**/, (), {}, [] and others token-pairs demands a cognitive burden far larger than just two tokens. CaffeineScript all but eliminates the need for matching-token-pairs.
* The JavaScript above is hand-coded. It is only roughly equivalent to the actual generated JavaScript. The generated JavaScript is a bit more capable and a bit longer than the JavaScript above.

### Install

```bash
npm install caffeine-script
```
### Use

##### Command
```bash
> caf --help
```


##### Node
```javascript
require('caffeine-mc/register');
```

##### Webpack - webpack.config.js
```javascript
module.exports = {
  module: {
    rules: [{
      test: /\.caf$/,
      use: ['caffeine-mc/webpack-loader']
    }]
  }
}
```

## CaffeineScript and CoffeeScript

I owe a debt of gratitude to Jeremy Ashkenas, the author of CoffeeScript. It is my primary inspiration, and what the CaffeineScript compiler was originally written in. You can read more about how CoffeeScript inspired me to write CaffeineScript in the wiki: [Coming from CoffeeScript](https://github.com/shanebdavis/caffeine-script/wiki/Coming-from-CoffeeScript).
