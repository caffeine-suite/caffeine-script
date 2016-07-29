# caffeine-script
CaffeineScript - experimental


# Goals

* CoffeeScript
  * improvements
  * keeping up with ES6

# Language Features Befyond CoffeeScript

* smart function @ binding (select -> or => automatically)
* enhanced blocks
  * array blocks
  * function invocation blocks
* eliminate the need for token matching ([], {}, "", etc)
* 'with'
* improved multi-line binary operator semantics (./+/- etc)
* improved pattern assignment
* real class inheritance
# efficiency
  * use small runtime to reduce overall code-size and increase functionality
  * reduced overhead with @-binding

#### Extended unquoted labels:

```coffeescript
# CoffeeScript
foo: 1
'foo.bar': 2
'foo-bar': 3

# CaffieneScript
foo: 1
foo.bar: 2
foo-bar: 3
```

#### Improved multi-line Binary Operators

```coffeescript
# CoffeeScript
encodedBitmap || if file
  readAsBinaryString file
else if sourceUrl
  RestClient.get sourceUrl

# CaffieneScript
encodedBitmap
|| file && readAsBinaryString file
|| sourceUrl && RestClient.get sourceUrl
```
