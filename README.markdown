SJS
===
Or, affectionately, “Tilty-Head JavaScript.”

The transpiler accepts an existing JavaScript file, and transpiles it into SJS to `stdout`. In fact,
the transpiler is self-hosting:

```sh
./compiler.sjs my_awesome_app.sjs > my_awesome_app.js
./compiler.sjs compiler.sjs > compiler.js
```

It's even easier, however, to directly invoke the JavaScript-native interpreter when developing SJS
apps:

```sh
./interpreter.js my_awesome_app.sjs
./interpreter.js compiler.sjs my_awesome_app.sjs > my_awesome_app.js
```

The Language
------------
Onwards to the goodies! In fact, I'll let you figure it out for yourself from some example-code! As
a working example, the following JavaScript code ...

```js
var a = 123
  , b = 456

console.log(a + b)
```

... might be easier written in SJS, as the following:

    v  c 
    a  o 
    r, n 
       s 
    ab o 
       l 
    == e 
       . 
    14 l 
    25 o 
    36 g 
       ( 
       a 
         
       + 
         
       b 
       ) 
