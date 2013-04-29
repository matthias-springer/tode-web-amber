tODE-web-amber
==============

This is a fork of amber-smalltalk/amber that adds additional classes for tODE. It is kept in a separate repository to allow merges from the original repository in the future.

How to use
==========

Here's a short example of how to use our Morphic-like interface. JQuery UI is needed for ```draggable``` windows.

```smalltalk
|win|
win := SystemWindow new.
win addMorph: PluggableTextMorph new frame: (0@0 extent: 1@1).
win openInWorld.
```

Amber 
=====

By Nicolas Petton <petton.nicolas@gmail.com> and [Amber contributors](https://github.com/NicolasPetton/amber/contributors)

Amber is an implementation of the Smalltalk language that runs on top of the JavaScript runtime. It is designed to make client-side development faster and easier.

License
-------

Amber is released under the MIT license. All contributions made for inclusion are considered to be under MIT.

