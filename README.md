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
* use small runtime to reduce overall code-size and increase functionality

#### Extended unquoted labels:

```coffeescript
# CoffeeScript
foo: 1
'foo.bar': 2
'foo-bar': 3
```

```coffeescript
# CaffieneScript
foo: 1
foo.bar: 2
foo-bar: 3
```
