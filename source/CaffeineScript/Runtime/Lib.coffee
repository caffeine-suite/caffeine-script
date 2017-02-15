module.exports =
  in: (a, b) -> a in b
  mod: (a, b) -> a %% b
  div: (a, b) -> a // b
  pow: (a, b) -> a ** b
  existsOr: (a, b) -> a ? b()

  ###
  Implements the 'import' function.

  IN:
    importNamesString: a space-delimited list of identifiers to import
    libs: array of objects to import from, first has highest priority.

  OUT: and object with one property per importName
  ###
  i: (importNamesString, libs) ->
    out = {}
    for importName in importNamesString.split /\s+/
      for lib in libs
        if (v = lib[importName])?
          out[importName] = v
          break
    out

  # CaffeineStyle truth (same as Ruby)

  # returns true if a is anothing other than false, null or undefined
  t: (a) -> a? && a != false

  # returns true if a is false, null or undefined
  f: (a) -> a == false || !a?

  isFunction:       isF = (a) -> typeof a is "function"
  isF:              isF
  isInstance:       isI = (a) -> !isF(o) and _super.constructor == o.constructor
  isI:              isI

  ###
  All about getSuper in ES6 land:

    class A {}
    class B extends A {}
    class C extends B {}

    a = new A
    b = new B
    c = new C

    getSuper(B) == A
    getSuper(C) == B

    getSuper(A.prototype) == Object.prototype
    getSuper(B.prototype) == A.prototype
    getSuper(C.prototype) == B.prototype

    getSuper(b) == A.prototype
    getSuper(c) == B.prototype

  prototype map:

  KEY:
    <->
       <-- .constructor
       --> .prototype
    ^  Object.prototypeOf

  MAP:
    A <-> aPrototype

    ^     ^     ^
    |     |     a
    |     |

    B <-> bPrototype

    ^     ^     ^
    |     |     b
    |     |

    C <-> cPrototype

                ^
                c

  Definition of super:

    if instance then prototype's prototype
    else prototype

  ###
  getSuper: getSuper = (o) ->
    _super = Object.getPrototypeOf o
    _super = Object.getPrototypeOf _super if isI o
    _super

  ###
  IN:
    klass a new class-function object
    init: (klass) -> outKlass

  OUT: if isF outKlass.createWithPostCreate
    outKlass.createWithPostCreate outKlass
  OR
    outKlass (from init)

  EFFECT:
    outKlass.createWithPostCreate?(outKlass) ? outKlass
  ###
  defClass: (klass, init) ->
    outKlass = init.call klass
    outKlass.createWithPostCreate?(outKlass) ? outKlass