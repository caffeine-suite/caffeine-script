# Improvements

```coffeescript
# in-array should work
array a in-array b
```
---
```coffeescript
  {
    a
    b
  } = myObject

  {
  a
  b
  } = myObject

  {}
    a
    b
  = myObject
```




# Comment Todo

The real solution looks like this: Every block sub-parsed, other than literals
like string-blocks or comment-blocks themselves, needs something akin to the
current preprocess step: Any under-indented comments should be up-indented to
the base of the sub-block. I -think- that'll solve it.




# SEMANTIC TODO

```coffeescript
a = 10
while a > 0
  b = a
  a--
```

This should have "let a" outside the while, but should have "let b" inside, like
all the comprehensions.

---------
```
result extract colorInfo extract colorMap
```

SHOULD extract colorInfo. Notes:

1. ```> result extract colorInfo, colorInfo extract colorMap```
  is just weird
2. ```> (a extract b) ->```
  That sets 'a' even though it is an intermediate value.

However, I'm OK with the following not setting 'b':

```
> a extract b.c
```

--------

### Extract Todo

```coffeescript
# these should all be equivalent
a extract b, c, d
a extract
  b
  c
  d

a extract
  b, c
  d
```

`extract` in comprehensions and function definitions:

```coffeescript
# these should all be equivalent
(a extract b) ->
(extract b) ->

# IDEA
{b} ->

# these should all be equivalent
each a from c with a.b
each a extract b from c
each extract b from c

# IDEA
each a.b from c
each .b from c
```

#### Extract Bug

This:

```coffeescript
@foo extract? a, b
```

Should NOT access `this.foo` over and over; it should store it in a temp. What if `this.foo` is a getter and not simply a prop?

DOH - it's even more wrong than I thought:

```javascript
// current, wrong output:
if (Caf.exists(this.foo)) {
  a = this.foo.a;
} else {
  b = this.foo.b;
}

// should be
if (Caf.exists(temp = this.foo)) {
  a = temp.a;
  b = temp.b;
}
```

# Generates invalid javascript:

```coffeescript
class ImikimiStyles extends &ArtSuite.HotStyleProps || Object
```

---

```coffeescript
import &StandardImport

authorizedSync = (request) ->
  !!if Neptune.Art.Config.configName == "Production"
    request.session.userId in config.curators
  else
    present request.session.userId
```




# SHOULD COMPILE


I think the problem is the trailing comments:

```coffeescript
switch subject
  when :mailbox     then true   # the mailbox is unavailable
  when :mailSystem  then true   # the mail system is unvailable
  when :addressing  then true   # the address is bad (i.e. there is no mailbox)
  when :security    then false  # could just be that the server doesn't like our IP
  when :network     then false  # by definition, temporary failure, probably should never be a clientFailure
  when :protocol    then false  # means the server thinks WE broke protocol
  when :content     then false  # means the server doesn't like our content - since we weren't really sending any, something weird happend
  else false                    # something weird happened
```
---

The trailing space in the interpolation breaks things...

```coffeescript
"#{123 }"
```

---
```coffeescript
switch foo
  when bar
    123
  # comment here fails
```
---

```coffeescript
new class FakeSocket
```

---

```coffeescript
(-> arguments.length)()
```
---
```coffeescript
  [].slice 0, 100
```
---

```coffeescript
  {@getPriority} = options
```




# SHOULD NOT COMPILE

```coffeescript
# simplest example
foo (a)->
  .bar
```

Above one is super tricky! The function def correctly fails to match the indented block starting with a dot-line-start, but then the indented-dot-line-start happilly accepts it. It actaully could be considered legal! However, it's horrific to my eyes. It breaks principle-of-least-surprise badly.

NOTE: It isn't just dot-line-starts. This also failes fore operator-line-starts.

---
```coffeescript
App extends FluxComponent
```
---
'default' is an illegal variable name in JS
```coffeescript
({default, fields}) ->
```





# WRONG COMPILE


```coffeescript
->
  array x1 to 1
  -> x1 = 1
```

The second function should also
have a `"let x1;"` since it is a peer of `array`.

---

```coffeescript
each step from 2 to 6
  myRad = 2 ** step
```

myRad should be "let" inside the loop, not outside.

---


```coffeescript
# THIS:
-a**2

# SHOULD BE:
-(a**2)
```

---

Should just become: -1 (-01 is illegal in JavaScript)

```coffeescript
-01
```


---

```coffeescript
if i == cats.length - 1 then Promise.then -> action event, props else {}
```

`action event, props` should be inside the `.then` funciton. The problem probably comes from this parse error:

```coffeescript
# does not parse!
if a then -> c else d
```



---
```coffeescript
array item in list.sort (a, b) -> b - a when item

# Should NOT be:
Caf.array(list.sort(function(a, b) {})(b - a), null, item => item);

# Should be:
Caf.array(list.sort(function(a, b) {return b - a}), null, item => item);
```

Probably same problem as above:

```coffeescript
# this does not parse!
array item in -> a when item
```

# Should Compile

```coffeescript
"Hi there #{} empty iterpolation should be fine!"
```

```coffeescript
# backward compatible with coffeescript
{
  hi: 1
}

[
  1
]

{
  a
  b
} = foo
```