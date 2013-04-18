Smalltalk current createPackage: 'Kernel-Objects'!
nil subclass: #Object
	instanceVariableNames: 'dependents'
	package: 'Kernel-Objects'!
!Object commentStamp!
*Object is the root of the Smalltalk class system*. All classes in the system are subclasses of Object.

Object provides default behavior common to all normal objects, such as:

- access
- copying
- comparison
- error handling
- message sending
- reflection

Also utility messages that all objects should respond to are defined here.

Object has no instance variable.

##Access

Instance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `Object >> instanceVariableNames` answers a collection of all instance variable names.
Accessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.

##Copying

Copying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.
The hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.

##Comparison

Objects understand equality `#=` and identity `#==` comparison.

##Error handling

- `#halt` is the typical message to use for inserting breakpoints during debugging.
- `#error:` throws a generic error exception
- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.
	Overriding this message can be useful to implement proxies for example.!

!Object methodsFor: 'accessing'!

basicAt: aString
	<return self[aString]>
!

basicAt: aString put: anObject
	<return self[aString] = anObject>
!

basicDelete: aString
	<delete self[aString]; return aString>
!

class
	<return self.klass>
!

identityHash
	<
	var hash=self.identityHash;
	if (hash) return hash;
	hash=smalltalk.nextId();
	Object.defineProperty(self, 'identityHash', {value:hash});
	return hash;
	>
!

instVarAt: aString
	< return self['@'+aString] >
!

instVarAt: aString put: anObject
	< self['@' + aString] = anObject >
!

size
	self error: 'Object not indexable'
!

value
	<return self.valueOf()>
!

yourself
	^self
! !

!Object methodsFor: 'comparing'!

= anObject
	^self == anObject
!

== anObject
	^self identityHash = anObject identityHash
!

~= anObject
	^(self = anObject) = false
!

~~ anObject
	^(self == anObject) = false
! !

!Object methodsFor: 'converting'!

-> anObject
	^Association key: self value: anObject
!

as: aSimilarClass
	"Create an object of class aSimilarClass that has similar contents to the receiver."

	^ aSimilarClass newFrom: self
!

asJSON
	| variables |
	variables := HashedCollection new.
	self class allInstanceVariableNames do: [:each |
		variables at: each put: (self instVarAt: each) asJSON].
	^variables
!

asJSONString
	^JSON stringify: self asJSON
!

asJavascript
	^self asString
!

asString
	^self printString
!

test
	| a |
	a := 1.
	self halt
! !

!Object methodsFor: 'copying'!

copy
	^self shallowCopy postCopy
!

deepCopy
	<
		var copy = self.klass._new();
		for(var i in self) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i]._deepCopy();
		}
		}
		return copy;
	>
!

postCopy
!

shallowCopy
	<
		var copy = self.klass._new();
		for(var i in self) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i];
		}
		}
		return copy;
	>
! !

!Object methodsFor: 'error handling'!

assert: aBlock
	"Throw an assertion error if aBlock does not evaluates to true."
	
	aBlock value ifFalse: [Error signal: 'Assertion failed']
!

deprecatedAPI
	"Just a simple way to deprecate methods.
	#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,
	but it could in the future."
	console warn: thisContext home asString, ' is deprecated!! (in ', thisContext home home asString, ')'
!

doesNotUnderstand: aMessage
	MessageNotUnderstood new
		receiver: self;
		message: aMessage;
		signal
!

error: aString
	Error signal: aString
!

halt
	self error: 'Halt encountered'
!

shouldNotImplement
	self error: 'This method should not be implemented in ', self class name
!

subclassResponsibility
	self error: 'This method is a responsibility of a subclass'
!

throw: anObject
	< throw anObject >
!

try: aBlock catch: anotherBlock
	<try{return aBlock()} catch(e) {return anotherBlock(e)}>
! !

!Object methodsFor: 'initialization'!

initialize
! !

!Object methodsFor: 'message handling'!

basicPerform: aString
	^self basicPerform: aString withArguments: #()
!

basicPerform: aString withArguments: aCollection
	<return self[aString].apply(self, aCollection);>
!

perform: aString
	^self perform: aString withArguments: #()
!

perform: aString with: argument1
	^self perform: aString withArguments: {argument1}
!

perform: aString withArguments: aCollection
	<return smalltalk.send(self, aString._asSelector(), aCollection)>
! !

!Object methodsFor: 'printing'!

printOn: aStream
	"Append to the aStream, a string representing the receiver."
	
	aStream nextPutAll: (self class name first isVowel
		ifTrue: [ 'an ' ]
		ifFalse: [ 'a ' ]).
	aStream nextPutAll: self class name
!

printString
	"Answer a String representation of the receiver."

	^ String streamContents: [ :stream | self printOn: stream ]
! !

!Object methodsFor: 'ston-core'!

fromSton: stonReader
	"Decode non-variable classes from a map of their instance variables and values.
	Override to customize and add a mathcing #toSton: (see implementors)."
	
	self class isVariable 
		ifTrue: [
			self subclassResponsibility ]
		ifFalse: [
			stonReader parseMapDo: [ :instVarName :value |
				self instVarAt: instVarName put: value ] ]
!

isStonReference
	^ false
!

stonOn: stonWriter
	"Encode non-variable classes with a map of their instance variable and values.
	Override to customize and add a matching #fromSton: (see implementors)."

	self class isVariable 
		ifTrue: [
			self subclassResponsibility ]
		ifFalse: [
			stonWriter writeObject: self streamMap: [ :dictionary |
				self class allInstanceVariableNames do: [ :each |
					dictionary at: each asSymbol put: (self instVarAt: each) ] ] ]
!

stonProcessSubObjects: block
	1 to: self class instSize do: [ :each |
		self instVarAt: each put: (block value: (self instVarAt: each)) ].
	(self class isVariable and: [ self class isBytes not ])
		ifTrue: [
			1 to: self basicSize do: [ :each |
				self basicAt: each put: (block value: (self basicAt: each)) ] ]
! !

!Object methodsFor: 'streaming'!

putOn: aStream
	aStream nextPut: self
! !

!Object methodsFor: 'testing'!

ifNil: aBlock
	"inlined in the Compiler"
	^self
!

ifNil: aBlock ifNotNil: anotherBlock
	"inlined in the Compiler"
	^anotherBlock value: self
!

ifNotNil: aBlock
	"inlined in the Compiler"
	^aBlock value: self
!

ifNotNil: aBlock ifNil: anotherBlock
	"inlined in the Compiler"
	^aBlock value: self
!

isBehavior
	^ false
!

isBoolean
	^ false
!

isCharacter
	^ false
!

isClass
	^false
!

isCompiledMethod
	^ false
!

isImmutable
	^ false
!

isKindOf: aClass
	^(self isMemberOf: aClass)
		ifTrue: [true]
		ifFalse: [self class inheritsFrom: aClass]
!

isMemberOf: aClass
	^self class = aClass
!

isMetaclass
	^false
!

isMorph
	^ false
!

isNil
	^false
!

isNumber
	^false
!

isPackage
	^ false
!

isParseFailure
	^false
!

isStream
	^ false
!

isString
	^false
!

isSymbol
	^false
!

isSystemWindow
	^ false
!

notNil
	^self isNil not
!

respondsTo: aSelector
	^self class canUnderstand: aSelector
! !

!Object methodsFor: 'updating'!

addDependent: anObject
	dependents ifNil: [dependents := OrderedCollection new].
	self dependents add: anObject.
!

changed: aParameter 
	self dependents do: [:aDependent | aDependent update: aParameter]
!

dependents
	^ dependents ifNil: [#()]
!

update: aParameter 
	^ self
! !

!Object class methodsFor: 'initialization'!

initialize
	"no op"
! !

!Object class methodsFor: 'ston-core'!

fromSton: stonReader
	"Create a new instance and delegate decoding to instance side.
	Override only when new instance should be created directly (see implementors). "
	
	^ self new
		fromSton: stonReader;
		yourself
! !

Object subclass: #Boolean
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Boolean commentStamp!
Boolean wraps the JavaScript `Boolean()` constructor. The `true` and `false` objects are the JavaScript boolean objects.

Boolean defines the protocol for logic testing operations and conditional control structures for the logical values.
Boolean instances are weither `true` or `false`.!

!Boolean methodsFor: 'comparing'!

= aBoolean
	<
		if(!! aBoolean._isBoolean || !! aBoolean._isBoolean()) {
			return false;
		}
		return Boolean(self == true) == aBoolean
	>
!

== aBoolean
	^self = aBoolean
! !

!Boolean methodsFor: 'controlling'!

& aBoolean
	<
		if(self == true) {
		return aBoolean;
		} else {
		return false;
		}
	>
!

and: aBlock
	^self = true
		ifTrue: aBlock
		ifFalse: [false]
!

ifFalse: aBlock
	"inlined in the Compiler"
	^self ifTrue: [] ifFalse: aBlock
!

ifFalse: aBlock ifTrue: anotherBlock
	"inlined in the Compiler"
	^self ifTrue: anotherBlock ifFalse: aBlock
!

ifTrue: aBlock
	"inlined in the Compiler"
	^self ifTrue: aBlock ifFalse: []
!

ifTrue: aBlock ifFalse: anotherBlock
	"inlined in the Compiler"
	<
		if(self == true) {
		return aBlock();
		} else {
		return anotherBlock();
		}
	>
!

not
	^self = false
!

or: aBlock
	^self = true
		ifTrue: [true]
		ifFalse: aBlock
!

| aBoolean
	<
		if(self == true) {
		return true;
		} else {
		return aBoolean;
		}
	>
! !

!Boolean methodsFor: 'converting'!

asJSON
	^self
!

asString
	< return self.toString() >
! !

!Boolean methodsFor: 'copying'!

deepCopy
	^self
!

shallowCopy
	^self
! !

!Boolean methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
! !

!Boolean methodsFor: 'ston-core'!

stonOn: stonWriter
	stonWriter writeBoolean: self
!

stonProcessSubObjects: block
! !

!Boolean methodsFor: 'testing'!

isBoolean
	^ true
!

isImmutable
	^ true
! !

Object subclass: #Character
	instanceVariableNames: ''
	package: 'Kernel-Objects'!

!Character methodsFor: 'ston-core'!

stonOn: stonWriter
	stonWriter writeObject: self listSingleton: self asString
! !

!Character class methodsFor: 'characters'!

backspace
	^ self codePoint: 8
!

codePoint: aNumber
	< return String.fromCharCode(aNumber) >
!

cr
	^ self codePoint: 13
!

lf
	^ self codePoint: 10
!

newPage
	^ self codePoint: 12
!

space
	^ ' '
!

tab
	^ self codePoint: 9
! !

!Character class methodsFor: 'ston-core'!

fromSton: stonReader
	^ stonReader parseListSingleton first
! !

Object subclass: #Color
	instanceVariableNames: 'r g b'
	package: 'Kernel-Objects'!

!Color methodsFor: 'accessing'!

blue
	^ b
!

green
	^ g
!

red
	^ r
!

setBlue: blue
	b := blue
!

setGreen: green
	g := green
!

setRed: red
	r := red
! !

!Color class methodsFor: 'instance creation'!

r: r g: g b: b
	^ self basicNew
		setRed: r;
		setGreen: g;
		setBlue: b;
		yourself
! !

!Color class methodsFor: 'named colors'!

black
	^ self r: 0 g: 0 b: 0
!

blue
	^ self r: 0 g: 0 b: 1
!

cyan
	^ self r: 0 g: 1 b: 1
!

gray
	^ self r: 0.5 g: 0.5 b: 0.5
!

green
	^ self r: 0 g: 1 b: 0
!

lightGreen
	^ self r: 0.8 g: 1.0 b: 0.6
!

magenta
	^ self r: 1 g: 0 b: 1
!

red
	^ self r: 1.0 g: 0.0 b: 0.0
!

white
	^ self r: 1 g: 1 b: 1
!

yellow
	^ self r: 1 g: 1 b: 0
! !

Object subclass: #Date
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Date commentStamp!
The Date class is used to work with dates and times. Therefore `Date today` and `Date now` are both valid in
Amber and answer the same date object.

Date wraps the `Date()` JavaScript constructor, and Smalltalk date objects are JavaScript date objects.!

!Date methodsFor: 'accessing'!

day
	^self dayOfWeek
!

day: aNumber
	self dayOfWeek: aNumber
!

dayOfMonth
	<return self.getDate()>
!

dayOfMonth: aNumber
	<self.setDate(aNumber)>
!

dayOfWeek
	<return self.getDay() + 1>
!

dayOfWeek: aNumber
	<return self.setDay(aNumber - 1)>
!

hours
	<return self.getHours()>
!

hours: aNumber
	<self.setHours(aNumber)>
!

milliseconds
	<return self.getMilliseconds()>
!

milliseconds: aNumber
	<self.setMilliseconds(aNumber)>
!

minutes
	<return self.getMinutes()>
!

minutes: aNumber
	<self.setMinutes(aNumber)>
!

month
	<return self.getMonth() + 1>
!

month: aNumber
	<self.setMonth(aNumber - 1)>
!

seconds
	<return self.getSeconds()>
!

seconds: aNumber
	<self.setSeconds(aNumber)>
!

time
	<return self.getTime()>
!

time: aNumber
	<self.setTime(aNumber)>
!

year
	<return self.getFullYear()>
!

year: aNumber
	<self.setFullYear(aNumber)>
! !

!Date methodsFor: 'arithmetic'!

+ aDate
	<return self + aDate>
!

- aDate
	<return self - aDate>
! !

!Date methodsFor: 'comparing'!

< aDate
	<return self < aDate>
!

<= aDate
	<return self <= aDate>
!

> aDate
	<return self >> aDate>
!

>= aDate
	<return self >>= aDate>
! !

!Date methodsFor: 'converting'!

asDateString
	<return self.toDateString()>
!

asLocaleString
	<return self.toLocaleString()>
!

asMilliseconds
	^self time
!

asNumber
	^self asMilliseconds
!

asString
	<return self.toString()>
!

asTimeString
	<return self.toTimeString()>
! !

!Date methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
! !

!Date methodsFor: 'ston-core'!

stonOn: stonWriter
	"Use an ISO style YYYYMMDD representation"
	"TODO: implement yyyymmdd"
	stonWriter writeObject: self listSingleton: self yyyymmdd
!

stonProcessSubObjects: block
! !

!Date class methodsFor: 'instance creation'!

fromMilliseconds: aNumber
	^self new: aNumber
!

fromSeconds: aNumber
	^self fromMilliseconds: aNumber * 1000
!

fromString: aString
	"Example: Date fromString('2011/04/15 00:00:00')"
	^self new: aString
!

millisecondsToRun: aBlock
	| t |
	t := Date now.
	aBlock value.
	^Date now - t
!

new: anObject
	<return new Date(anObject)>
!

now
	^self today
!

today
	^self new
! !

!Date class methodsFor: 'ston-core'!

fromSton: stonReader
	^ self readFrom: stonReader parseListSingleton readStream
! !

Object subclass: #Environment
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Environment commentStamp!
Abstract class defining common behavior for local and remote environments!

!Environment methodsFor: 'accessing'!

allSelectors
	^ (Smalltalk current at: 'allSelectors') value
!

availableClassNames
	^ Smalltalk current classes 
		collect: [ :each | each name ]
!

availablePackageNames
	^ Smalltalk current packages 
		collect: [ :each | each name ]
!

availableProtocolsFor: aClass
	| protocols |
	
	protocols := aClass protocols.
	aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].
	^ protocols asSet asArray
!

classBuilder
	^ ClassBuilder new
!

classNamed: aString
	^ (Smalltalk current at: aString asSymbol)
		ifNil: [ self error: 'Invalid class name' ]
!

classes
	^ Smalltalk current classes
!

packages
	^ Smalltalk current packages
!

systemAnnouncer
	^ (Smalltalk current at: #SystemAnnouncer) current
! !

!Environment methodsFor: 'actions'!

commitPackage: aPackage
	aPackage commit
!

copyClass: aClass to: aClassName
	(Smalltalk current at: aClassName)
		ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].
		
	ClassBuilder new copyClass: aClass named: aClassName
!

eval: aString on: aReceiver
	| compiler  |
	compiler := Compiler new.
	[ compiler parseExpression: aString ] on: Error do: [ :ex |
		^ window alert: ex messageText ].
	^ compiler evaluateExpression: aString on: aReceiver
!

moveClass: aClass toPackage: aPackageName
	| package |
	
	package := Package named: aPackageName.
	package ifNil: [ self error: 'Invalid package name' ].
	package == aClass package ifTrue: [ ^ self ].
	
	aClass package: package
!

moveMethod: aMethod toClass: aClassName
	| destinationClass |
	
	destinationClass := Smalltalk current at: aClassName asSymbol.
	destinationClass ifNil: [ self error: 'Invalid class name' ].
	destinationClass == aMethod methodClass ifTrue: [ ^ self ].
	
	destinationClass 
		compile: aMethod source
		category: aMethod protocol.
	aMethod methodClass 
		removeCompiledMethod: aMethod
!

moveMethod: aMethod toProtocol: aProtocol
	aMethod category: aProtocol
!

removeClass: aClass
	Smalltalk current removeClass: aClass
!

removeMethod: aMethod
	aMethod methodClass removeCompiledMethod: aMethod
!

removeProtocol: aString from: aClass
	(aClass methods
		select: [ :each | each protocol = aString ])
		do: [ :each | aClass removeCompiledMethod: each ]
!

renameClass: aClass to: aClassName
	(Smalltalk current at: aClassName)
		ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].
		
	ClassBuilder new renameClass: aClass to: aClassName
!

renameProtocol: aString to: anotherString in: aClass
	(aClass methods
		select: [ :each | each protocol = aString ])
		do: [ :each | each protocol: anotherString ]
! !

!Environment methodsFor: 'compiling'!

addInstVarNamed: aString to: aClass
	self classBuilder
		addSubclassOf: aClass superclass 
		named: aClass name 
		instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)
		package: aClass package name
!

compileClassComment: aString for: aClass
	aClass comment: aString
!

compileClassDefinition: aString
	self eval: aString on: DoIt new
!

compileMethod: sourceCode for: class protocol: protocol
	^ class
		compile: sourceCode
		category: protocol
! !

Object subclass: #JSObjectProxy
	instanceVariableNames: 'jsObject'
	package: 'Kernel-Objects'!
!JSObjectProxy commentStamp!
JSObjectProxy handles sending messages to JavaScript object, therefore accessing JavaScript objects from Amber is transparent.
JSOjbectProxy makes intensive use of `#doesNotUnderstand:`.

## Examples

JSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.

	window alert: 'hello world'.
	window inspect.
	(window jQuery: 'body') append: 'hello world'

Smalltalk messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.

## Message conversion rules

- `someUser name` becomes `someUser.name`
- `someUser name: 'John'` becomes `someUser name = "John"`
- `console log: 'hello world'` becomes `console.log('hello world')`
- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`

__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.!

!JSObjectProxy methodsFor: 'accessing'!

at: aString
	<return self['@jsObject'][aString]>
!

at: aString ifAbsent: aBlock
	"return the aString property or evaluate aBlock if the property is not defined on the object"
	<
		var obj = self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock();
	>
!

at: aString ifPresent: aBlock
	"return the evaluation of aBlock with the value if the property is defined or return nil"
	<
		var obj = self['@jsObject'];
		return aString in obj ? aBlock(obj[aString]) : nil;
	>
!

at: aString ifPresent: aBlock ifAbsent: anotherBlock
	"return the evaluation of aBlock with the value if the property is defined
	or return value of anotherBlock"
	<
		var obj = self['@jsObject'];
		return aString in obj ? aBlock(obj[aString]) : anotherBlock();
	>
!

at: aString put: anObject
	<self['@jsObject'][aString] = anObject>
!

jsObject
	^jsObject
!

jsObject: aJSObject
	jsObject := aJSObject
!

lookupProperty: aString
	"Looks up a property in JS object.
	Answer the property if it is present, or nil if it is not present."
	
	<return aString in self._jsObject() ? aString : nil>
!

value
	"if attribute 'value' exists on the JS object return it,
	otherwise return the result of Object>>value."
	
	^ self 
		at: 'value' 
		ifAbsent: [ super value ]
! !

!JSObjectProxy methodsFor: 'enumerating'!

keysAndValuesDo: aBlock
	<
		var o = self['@jsObject'];
		for(var i in o) {
			aBlock(i, o[i]);
		}
	>
! !

!JSObjectProxy methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self jsObject toString
! !

!JSObjectProxy methodsFor: 'proxy'!

addObjectVariablesTo: aDictionary
	<
		for(var i in self['@jsObject']) {
			aDictionary._at_put_(i, self['@jsObject'][i]);
		}
	>
!

doesNotUnderstand: aMessage
	^ (self lookupProperty: aMessage selector asJavaScriptSelector)
		ifNil: [ super doesNotUnderstand: aMessage ]
		ifNotNil: [ :jsSelector | 
			self 
				forwardMessage: jsSelector 
				withArguments: aMessage arguments ]
!

forwardMessage: aString withArguments: anArray
	<
		return smalltalk.send(self._jsObject(), aString, anArray);
	>
!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self jsObject.
	anInspector setLabel: self printString.
	self addObjectVariablesTo: variables.
	anInspector setVariables: variables
! !

!JSObjectProxy class methodsFor: 'instance creation'!

on: aJSObject
	^self new
		jsObject: aJSObject;
		yourself
! !

Object subclass: #Number
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Number commentStamp!
Number holds the most general methods for dealing with numbers.
Number is directly mapped to JavaScript Number.

Most arithmetic methods like `#+` `#/` `#-` `#max:` are directly inlined into javascript.

##Enumerating
A Number can be used to evaluate a Block a fixed number of times:

	5 timesRepeat: [Transcript show: 'This will be printed 5 times'; cr].
	
	1 to: 5 do: [:aNumber| Transcript show: aNumber asString; cr].
	
	1 to: 10 by: 2 do: [:aNumber| Transcript show: aNumber asString; cr].!

!Number methodsFor: 'accessing'!

identityHash
	^self asString, 'n'
! !

!Number methodsFor: 'arithmetic'!

* aNumber
	"Inlined in the Compiler"
	<return self * aNumber>
!

+ aNumber
	"Inlined in the Compiler"
	<return self + aNumber>
!

- aNumber
	"Inlined in the Compiler"
	<return self - aNumber>
!

/ aNumber
	"Inlined in the Compiler"
	<return self / aNumber>
!

// aNumber
	^ (self / aNumber) floor
!

<< aNumber
	aNumber < 0 
		ifTrue: [Error signal: 'negative arg']
		ifFalse: [^ self jsBitShiftLeft: aNumber]
!

>> aNumber
	aNumber < 0 
		ifTrue: [Error signal: 'negative arg']
		ifFalse: [^ self jsBitShiftRight: aNumber]
!

\\ aNumber
	<return self % aNumber>
!

abs
	<return Math.abs(self);>
!

jsBitShiftLeft: aNumber
	"Inlined in the Compiler"
	<return self << aNumber>
!

jsBitShiftRight: aNumber
	"Inlined in the Compiler"
	<return self >> aNumber>
!

max: aNumber
	<return Math.max(self, aNumber);>
!

min: aNumber
	<return Math.min(self, aNumber);>
!

negated
	^0 - self
!

sqrt
	<return Math.sqrt(self)>
!

squared
	^self * self
! !

!Number methodsFor: 'comparing'!

< aNumber
	"Inlined in the Compiler"
	<return self < aNumber>
!

<= aNumber
	"Inlined in the Compiler"
	<return self <= aNumber>
!

= aNumber
	<
		if(!! aNumber._isNumber || !! aNumber._isNumber()) {
			return false;
		}
		return Number(self) == aNumber
	>
!

> aNumber
	"Inlined in the Compiler"
	<return self >> aNumber>
!

>= aNumber
	"Inlined in the Compiler"
	<return self >>= aNumber>
! !

!Number methodsFor: 'converting'!

& aNumber
	<return self & aNumber>
!

@ aNumber
	^Point x: self y: aNumber
!

asCharacter
	^ Character codePoint: self
!

asInteger
	^ self truncated
!

asJSON
	^self
!

asJavascript
	^'(', self printString, ')'
!

asPoint
	^Point x: self y: self
!

asString
	< return String(self) >
!

atRandom
	^(Random new next * self) truncated + 1
!

floor
	^ self truncated
!

rounded
	<return Math.round(self);>
!

to: aNumber
	| array first last count |
	first := self truncated.
	last := aNumber truncated + 1.
	count := 1.
	array := Array new.
	(last - first) timesRepeat: [
		array at: count put: first.
		count := count + 1.
		first := first + 1].
	^array
!

to: stop by: step
	| array value pos |
	value := self.
	array := Array new.
	pos := 1.
	step = 0 ifTrue: [self error: 'step must be non-zero'].
	step < 0
		ifTrue: [[ value >= stop ] whileTrue: [
					array at: pos put: value.
					pos := pos + 1.
					value := value + step]]
		ifFalse: [[ value <= stop ] whileTrue: [
					array at: pos put: value.
				pos := pos + 1.
					value := value + step]].
	^array
!

truncated
	<
		if(self >>= 0) {
			return Math.floor(self);
		} else {
			return Math.floor(self * (-1)) * (-1);
		};
	>
!

| aNumber
	<return self | aNumber>
! !

!Number methodsFor: 'copying'!

copy
	^self
!

deepCopy
	^self copy
! !

!Number methodsFor: 'enumerating'!

timesRepeat: aBlock
	| count |
	count := 1.
	[count > self] whileFalse: [
		aBlock value.
		count := count + 1]
!

to: stop by: step do: aBlock
	| value |
	value := self.
	step = 0 ifTrue: [self error: 'step must be non-zero'].
	step < 0
		ifTrue: [[ value >= stop ] whileTrue: [
					aBlock value: value.
					value := value + step]]
		ifFalse: [[ value <= stop ] whileTrue: [
					aBlock value: value.
					value := value + step]]
!

to: stop do: aBlock
	"Evaluate aBlock for each number from self to aNumber."
	| nextValue |
	nextValue := self.
	[nextValue <= stop]
		whileTrue:
			[aBlock value: nextValue.
			nextValue := nextValue + 1]
! !

!Number methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
!

printShowingDecimalPlaces: placesDesired
	<return self.toFixed(placesDesired)>
! !

!Number methodsFor: 'ston-core'!

stonOn: stonWriter
	stonWriter writeFloat: self
!

stonProcessSubObjects: block
! !

!Number methodsFor: 'testing'!

IsImmutable
	^ true
!

even
	^ 0 = (self \\ 2)
!

isNumber
	^true
!

isZero
	^self = 0
!

negative
	"Answer whether the receiver is mathematically negative."

	^ self < 0
!

odd
	^ self even not
!

positive
	"Answer whether the receiver is positive or equal to 0. (ST-80 protocol)."

	^ self >= 0
! !

!Number class methodsFor: 'instance creation'!

pi
	<return Math.PI>
! !

Object subclass: #Organizer
	instanceVariableNames: ''
	package: 'Kernel-Objects'!

!Organizer methodsFor: 'accessing'!

addElement: anObject
	<self.elements.addElement(anObject)>
!

elements
	^ (self basicAt: 'elements') copy
!

removeElement: anObject
	<self.elements.removeElement(anObject)>
! !

Organizer subclass: #ClassOrganizer
	instanceVariableNames: ''
	package: 'Kernel-Objects'!

!ClassOrganizer methodsFor: 'accessing'!

addElement: aString
	super addElement: aString.

	SystemAnnouncer current announce: (ProtocolAdded new
		protocol: aString;
		theClass: self theClass;
		yourself)
!

removeElement: aString
	super removeElement: aString.

	SystemAnnouncer current announce: (ProtocolRemoved new
		protocol: aString;
		theClass: self theClass;
		yourself)
!

theClass
	< return self.theClass >
! !

Organizer subclass: #PackageOrganizer
	instanceVariableNames: ''
	package: 'Kernel-Objects'!

Object subclass: #Package
	instanceVariableNames: 'commitPathJs commitPathSt'
	package: 'Kernel-Objects'!
!Package commentStamp!
A Package is similar to a "class category" typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.

A Package has a name, an Array of "requires", a comment and a Dictionary with other optional key value attributes. A Package can also be queried for its classes, but it will then resort to a reverse scan of all classes to find them.
Packages are manipulated through "Smalltalk current", like for example finding one based on a name:

	Smalltalk current packageAt: 'Kernel'

...but you can also use:

	Package named: 'Kernel'

A Package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a Package supports "class extensions" so a Package
can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows. This can easily be seen in for example class
String where the method category "*IDE" defines #inspectOn: which thus is a method belonging to the IDE package.

You can fetch a package from the server:

	Package fetch: 'Additional-Examples'!

!Package methodsFor: 'accessing'!

commitPathJs
	^ commitPathJs ifNil: [self class defaultCommitPathJs]
!

commitPathJs: aString
	commitPathJs := aString
!

commitPathSt
	^ commitPathSt ifNil: [self class defaultCommitPathSt]
!

commitPathSt: aString
	commitPathSt := aString
!

name
	<return self.pkgName>
!

name: aString
	<self.pkgName = aString>
!

organization
	^ self basicAt: 'organization'
! !

!Package methodsFor: 'classes'!

classes
	^ self organization elements
!

setupClasses
	self classes
		do: [ :each | ClassBuilder new setupClass: each ];
		do: [ :each | each initialize ]
!

sortedClasses
	"Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)."

	^self class sortedClasses: self classes
! !

!Package methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream 
		nextPutAll: ' (';
		nextPutAll: self name;
		nextPutAll: ')'
! !

!Package methodsFor: 'testing'!

isPackage
	^ true
! !

Package class instanceVariableNames: 'defaultCommitPathJs defaultCommitPathSt'!

!Package class methodsFor: 'accessing'!

named: aPackageName

	^Smalltalk current packageAt: aPackageName
!

named: aPackageName ifAbsent: aBlock

	^Smalltalk current packageAt: aPackageName ifAbsent: aBlock
! !

!Package class methodsFor: 'commit paths'!

commitPathsFromLoader
	<
		var commitPath = typeof amber !!== 'undefined' && amber.commitPath;
		if (!!commitPath) return;
		if (commitPath.js) self._defaultCommitPathJs_(commitPath.js);
		if (commitPath.st) self._defaultCommitPathSt_(commitPath.st);
	>
!

defaultCommitPathJs
	^ defaultCommitPathJs ifNil: [ defaultCommitPathJs := 'js']
!

defaultCommitPathJs: aString
	defaultCommitPathJs := aString
!

defaultCommitPathSt
	^ defaultCommitPathSt ifNil: [ defaultCommitPathSt := 'st']
!

defaultCommitPathSt: aString
	defaultCommitPathSt := aString
!

resetCommitPaths
		defaultCommitPathJs := nil.
		defaultCommitPathSt := nil.
! !

!Package class methodsFor: 'initialization'!

initialize
	super initialize.
	self commitPathsFromLoader
! !

!Package class methodsFor: 'loading-storing'!

load: aPackageName
	self load: aPackageName prefix: self defaultCommitPathJs, '/'
!

load: aPackageName prefix: aPrefix
	jQuery
		getScript: (aPrefix , aPackageName , '.js')
		onSuccess: [
			(Package named: aPackageName) setupClasses ]
! !

!Package class methodsFor: 'sorting'!

sortedClasses: classes
	"Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)"

	| children others nodes expandedClasses |
	children := #().
	others := #().
	classes do: [:each |
		(classes includes: each superclass)
			ifFalse: [children add: each]
			ifTrue: [others add: each]].
	nodes := children collect: [:each |
		ClassSorterNode on: each classes: others level: 0].
	nodes := nodes sorted: [:a :b | a theClass name <= b theClass name ].
	expandedClasses := Array new.
	nodes do: [:aNode |
		aNode traverseClassesWith: expandedClasses].
	^expandedClasses
! !

Object subclass: #Point
	instanceVariableNames: 'x y'
	package: 'Kernel-Objects'!
!Point commentStamp!
A `Point` represents an x-y pair of numbers usually designating a geometric coordinate.
Points are traditionally created using the binary `#@` message to a number:

	100@120

Points can then be arithmetically manipulated:

	100@100 + (10@10)

...or for example:

	(100@100) * 2

**NOTE:** Creating a Point with a negative y-value will need a space after `@` in order to avoid a parsing error:

	100@ -100 "but 100@-100 would not parse"

Amber does not have much behavior in this class out-of-the-box.!

!Point methodsFor: 'accessing'!

x
	^x
!

x: aNumber
	x := aNumber
!

y
	^y
!

y: aNumber
	y := aNumber
! !

!Point methodsFor: 'arithmetic'!

* aPoint
	^Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y
!

+ aPoint
	^Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y
!

- aPoint
	^Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y
!

/ aPoint
	^Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y
!

= aPoint
	^aPoint class = self class and: [
		(aPoint x = self x) & (aPoint y = self y)]
! !

!Point methodsFor: 'converting'!

asPoint
	^self
!

corner: aPoint 
	"Answer a Rectangle whose origin is the receiver and whose corner is 
	aPoint. This is one of the infix ways of expressing the creation of a 
	rectangle."

	^Rectangle origin: self corner: aPoint
!

extent: aPoint 
	"Answer a Rectangle whose origin is the receiver and whose extent is 
	aPoint. This is one of the infix ways of expressing the creation of a 
	rectangle."

	^ Rectangle origin: self extent: aPoint
! !

!Point methodsFor: 'printing'!

printOn: aStream
	"Print receiver in classic x@y notation."

	x printOn: aStream.
	
	aStream nextPutAll: '@'.
	(y notNil and: [y negative]) ifTrue: [
			"Avoid ambiguous @- construct"
			aStream space ].
	
	y printOn: aStream
! !

!Point methodsFor: 'ston-core'!

fromSton: stonReader
	stonReader parseListDo: [ :each :index |
		index = 1 ifTrue: [ x := each ].
		index = 2 ifTrue: [ y := each ] ]
!

stonOn: stonWriter
	stonWriter writeObject: self streamShortList: [ :array |
		array add: x; add: y ]
! !

!Point methodsFor: 'transforming'!

translateBy: delta
	"Answer a Point translated by delta (an instance of Point)."
	^(delta x + x) @ (delta y + y)
! !

!Point class methodsFor: 'instance creation'!

x: aNumber y: anotherNumber
	^self new
		x: aNumber;
		y: anotherNumber;
		yourself
! !

Object subclass: #Random
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Random commentStamp!
`Random` is a random number generator and is implemented as a trivial wrapper around javascript `Math.random()` and is used like this:

	Random new next

This will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`

	10 atRandom

...and if you want a random number in a specific interval this also works:

	(3 to: 7) atRandom

...but be aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:

	5 atRandom + 2

Since `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:

	#('a' 'b' 'c') atRandom

...or perhaps a letter from a `String`:

	'abc' atRandom

Since Amber does not have Characters this will return a `String` of length 1 like for example `'b'`.!

!Random methodsFor: 'accessing'!

next
	<return Math.random()>
!

next: anInteger
	^(1 to: anInteger) collect: [:each | self next]
! !

Object subclass: #Rectangle
	instanceVariableNames: 'origin corner'
	package: 'Kernel-Objects'!

!Rectangle methodsFor: 'accessing'!

corner
	^ corner
!

corner: aPoint
	corner := aPoint.
!

extent
	^ corner - origin
!

origin
	^ origin
!

origin: aPoint
	origin := aPoint.
! !

!Rectangle methodsFor: 'transforming'!

translateBy: factor 
	"Answer a Rectangle translated by factor, a Point or a scalar."

	^Rectangle origin: origin + factor corner: corner + factor
! !

!Rectangle class methodsFor: 'instance creation'!

origin: originPoint corner: cornerPoint
	^ self new
		origin: originPoint;
		corner: cornerPoint;
		yourself
!

origin: originPoint extent: extentPoint
	^ self new
		origin: originPoint;
		corner: extentPoint + originPoint;
		yourself
! !

Object subclass: #Smalltalk
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Smalltalk commentStamp!
Smalltalk has only one instance, accessed with `Smalltalk current`.
It represents the global JavaScript variable `smalltalk` declared in `js/boot.js`.

The `smalltalk` object holds all class and packages defined in the system.

## Classes

Classes can be accessed using the following methods:

- `#classes` answers the full list of Smalltalk classes in the system
- `#at:` answers a specific class of `nil`

## Packages

Packages can be accessed using the following methods:

- `#packages` answers the full list of packages
- `#packageAt:` answers a specific class of `nil`

__note:__ classes and packages are accessed using strings, not symbols

## Parsing

The `#parse:` method is used to parse Smalltalk source code.
It requires the `Compiler` package and the `js/parser.js` parser file in order to work!

!Smalltalk methodsFor: 'accessing'!

at: aString
	<return self[aString]>
!

at: key ifAbsent: aBlock
	"Answer the value associated with the key or, if key isn't found, answer the result of evaluating aBlock."

	| v |
	(v := self at: key) ifNil: [^ aBlock value].
	^ v
!

at: key ifPresent: aBlock
	"Lookup the given key in the receiver. If it is present, answer the value of evaluating the given block with the value associated with the key. Otherwise, answer nil."

	| v |
	v := self at: key ifAbsent: [^ nil].
	^ aBlock value: v
!

parse: aString
	| result |
	self try: [result := self basicParse: aString] catch: [:ex | (self parseError: ex parsing: aString) signal].
	^result
!

readJSObject: anObject
	<return self.readJSObject(anObject)>
!

reservedWords
	"JavaScript reserved words"
	<return self.reservedWords>
!

version
	"Answer the version string of Amber"
	
	^ '0.10'
! !

!Smalltalk methodsFor: 'classes'!

classes
	<return self.classes()>
!

deleteClass: aClass
	"Deletes a class by deleting its binding only. Use #removeClass instead"
	
	<self.removeClass(aClass)>
!

globals
	|classes|
	classes := Dictionary new.
	Smalltalk current classes do: [:clazz | 
		classes at: clazz name put: clazz].
	^ classes
!

removeClass: aClass
	aClass isMetaclass ifTrue: [self error: aClass asString, ' is a Metaclass and cannot be removed!!'].
	
	self deleteClass: aClass.
	
	SystemAnnouncer current
		announce: (ClassRemoved new
			theClass: aClass;
			yourself)
! !

!Smalltalk methodsFor: 'error handling'!

asSmalltalkException: anObject
	"A JavaScript exception may be thrown.
	We then need to convert it back to a Smalltalk object"
	
	^ ((self isSmalltalkObject: anObject) and: [ anObject isKindOf: Error ])
		ifTrue: [ anObject ]
		ifFalse: [ JavaScriptException on: anObject ]
!

parseError: anException parsing: aString
	^ ParseError new messageText: 'Parse error on line ', (anException basicAt: 'line') ,' column ' , (anException basicAt: 'column') ,' : Unexpected character ', (anException basicAt: 'found')
! !

!Smalltalk methodsFor: 'packages'!

createPackage: packageName
	"Create and bind a new package with given name and return it."
	<return smalltalk.addPackage(packageName)>
!

deletePackage: packageName
	"Deletes a package by deleting its binding, but does not check if it contains classes etc.
	To remove a package, use #removePackage instead."

	<delete smalltalk.packages[packageName]>
!

packageAt: packageName
	<return self.packages[packageName]>
!

packageAt: packageName ifAbsent: aBlock
	^(self packageAt: packageName) ifNil: aBlock
!

packages
	"Return all Package instances in the system."

	<return self.packages.all()>
!

pseudoVariableNames
	^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')
!

removePackage: packageName
	"Removes a package and all its classes."

	| pkg |
	pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].
	pkg classes do: [:each |
			self removeClass: each].
	self deletePackage: packageName
!

renamePackage: packageName to: newName
	"Rename a package."

	| pkg |
	pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].
	(self packageAt: newName) ifNotNil: [self error: 'Already exists a package called: ', newName].
	(self basicAt: 'packages') at: newName put: pkg.
	pkg name: newName.
	self deletePackage: packageName.
! !

!Smalltalk methodsFor: 'private'!

basicParse: aString
	<return smalltalk.parser.parse(aString)>
!

createPackage: packageName properties: aDict
	"Needed to import .st files: they begin with this call."
	self deprecatedAPI.
	
	aDict isEmpty ifFalse: [ self error: 'createPackage:properties: called with nonempty properties' ].
	^ self createPackage: packageName
! !

!Smalltalk methodsFor: 'testing'!

isSmalltalkObject: anObject
	"Consider anObject a Smalltalk object if it has a 'klass' property.
	Note that this may be unaccurate"
	
	<return typeof anObject.klass !!== 'undefined'>
! !

Smalltalk class instanceVariableNames: 'current'!

!Smalltalk class methodsFor: 'accessing'!

current
	<return smalltalk>
! !

Object subclass: #TextAttribute
	instanceVariableNames: ''
	package: 'Kernel-Objects'!

TextAttribute subclass: #TextColor
	instanceVariableNames: 'color'
	package: 'Kernel-Objects'!

!TextColor methodsFor: 'accessing'!

color
	^ color
!

color: aColor
	color := aColor
! !

!TextColor methodsFor: 'comparing'!

= other 
	^ (other class == self class) 
		and: [other color = color]
! !

!TextColor methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream nextPutAll: ' code: '; print: color
! !

!TextColor methodsFor: 'scanning'!

dominates: other
	^ other class == self class
!

emphasizeScanner: scanner
	"Set the emphasis for text display"
	scanner textColor: color
!

writeScanOn: strm
	"Two formats.  c125000255 or cblue;"

	| nn |
	strm nextPut: 'c'.
	(nn := color name) ifNotNil: [
		(self class respondsTo: nn) ifTrue: [
			^ strm nextPutAll: nn; nextPut: ';']].
	(Array with: color red with: color green with: color blue) do: [:float | | str |
		str := '000', (float * 255) asInteger printString.
		strm nextPutAll: (str copyFrom: str size-2 to: str size)]
! !

!TextColor class methodsFor: 'constants'!

black
	^ self new color: Color black
!

blue
	^ self new color: Color blue
!

cyan
	^ self new color: Color cyan
!

gray
	^ self new color: Color gray
!

green
	^ self new color: Color green
!

magenta
	^ self new color: Color magenta
!

red
	^ self new color: Color red
!

white 
	^ self new color: Color white
!

yellow
	^ self new color: Color yellow
! !

!TextColor class methodsFor: 'instance creation'!

color: aColor
	^ self new color: aColor
!

scanFrom: strm
	"read a color in the funny format used by Text styles on files. c125000255 or cblue;"

	| r g b |
	strm peek isDigit
		ifTrue:
			[r := (strm next: 3) asNumber.
			g := (strm next: 3) asNumber.
			b := (strm next: 3) asNumber.
			^ self color: (Color r: r g: g b: b range: 255)].
	"A name of a color"
	^ self color: (Color perform: (strm upTo: ';') asSymbol)
! !

TextAttribute subclass: #TextEmphasis
	instanceVariableNames: 'emphasisCode setMode'
	package: 'Kernel-Objects'!

!TextEmphasis methodsFor: 'accessing'!

emphasisCode
	^ emphasisCode
!

emphasisCode: int
	emphasisCode := int.
	setMode := true
! !

!TextEmphasis class methodsFor: 'not yet classified'!

bold
	^ self new emphasisCode: 1
!

italic
	^ self new emphasisCode: 2
!

narrow
	^ TextKern kern: -1
!

normal
	^ self new emphasisCode: 0
!

struckOut
	^ self new emphasisCode: 16
!

underlined
	^ self new emphasisCode: 4
! !

Object subclass: #Timeout
	instanceVariableNames: 'rawTimeout'
	package: 'Kernel-Objects'!
!Timeout commentStamp!
I am wrapping the returns from set{Timeout,Interval}.

Number suffices in browsers, but node.js returns an object.!

!Timeout methodsFor: 'accessing'!

rawTimeout: anObject
	rawTimeout := anObject
! !

!Timeout methodsFor: 'timeout/interval'!

clearInterval
	<
		var interval = self["@rawTimeout"];
		clearInterval(interval);
	>
!

clearTimeout
	<
		var timeout = self["@rawTimeout"];
		clearTimeout(timeout);
	>
! !

!Timeout class methodsFor: 'instance creation'!

on: anObject
	^self new rawTimeout: anObject; yourself
! !

Object subclass: #UndefinedObject
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!UndefinedObject commentStamp!
UndefinedObject describes the behavior of its sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.

`nil` is the Smalltalk representation of the `undefined` JavaScript object.!

!UndefinedObject methodsFor: 'class creation'!

subclass: aString instanceVariableNames: anotherString
	^self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for compatibility."
	self deprecatedAPI.
	^self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ClassBuilder new
		superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3
! !

!UndefinedObject methodsFor: 'converting'!

asJSON
	^null
! !

!UndefinedObject methodsFor: 'copying'!

deepCopy
	^self
!

shallowCopy
	^self
! !

!UndefinedObject methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: 'nil'
! !

!UndefinedObject methodsFor: 'ston-core'!

stonOn: stonWriter
	stonWriter writeNull
!

stonProcessSubObjects: block
! !

!UndefinedObject methodsFor: 'testing'!

ifNil: aBlock
	"inlined in the Compiler"
	^self ifNil: aBlock ifNotNil: []
!

ifNil: aBlock ifNotNil: anotherBlock
	"inlined in the Compiler"
	^aBlock value
!

ifNotNil: aBlock
	"inlined in the Compiler"
	^self
!

ifNotNil: aBlock ifNil: anotherBlock
	"inlined in the Compiler"
	^anotherBlock value
!

isImmutable
	^ true
!

isNil
	^true
!

notNil
	^false
! !

!UndefinedObject class methodsFor: 'instance creation'!

new
		self error: 'You cannot create new instances of UndefinedObject. Use nil'
! !

!String methodsFor: '*Kernel-Objects'!

asJavaScriptSelector
	"Return first keyword of the selector, without trailing colon."
	^self replace: '^([a-zA-Z0-9]*).*$' with: '$1'
! !

