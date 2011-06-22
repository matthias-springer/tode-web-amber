Object subclass: #Node
	^nodes ifNil: [nodes := Array new]

	self nodes add: aNode

	nodes := aCollection

	aVisitor visitNode: self

	^selector

	selector := aString

	^arguments ifNil: [#()]

	arguments := aCollection

	^source

	source := aString

	aVisitor visitMethodNode: self

	^selector

	selector := aString

	^arguments ifNil: [arguments := #()]

	arguments := aCollection

	^receiver

	receiver := aNode

	^SendNode new
	    receiver: (self receiver 
		ifNil: [anObject]
		ifNotNil: [self receiver valueForReceiver: anObject]);
	    selector: self selector;
	    arguments: self arguments;
	    yourself

	| first |
	first := SendNode new
	    selector: self selector;
	    arguments: self arguments;
	    yourself.
	^CascadeNode new
	    receiver: self receiver;
	    nodes: (Array with: first), aCollection;
	    yourself

	aVisitor visitSendNode: self

	^receiver

	receiver := aNode

	aVisitor visitCascadeNode: self

	^left

	left := aNode

	^right

	right := aNode

	aVisitor visitAssignmentNode: self

	^parameters ifNil: [parameters := Array new]

	parameters := aCollection

	aVisitor visitBlockNode: self

	^temps ifNil: [#()]

	temps := aCollection

	^BlockSequenceNode new
	    nodes: self nodes;
	    temps: self temps;
	    yourself

	aVisitor visitSequenceNode: self

	aVisitor visitBlockSequenceNode: self

	aVisitor visitReturnNode: self

	^value

	value := anObject

	aVisitor visitValueNode: self

	aVisitor visitVariableNode: self

	aVisitor visitClassReferenceNode: self

	^source ifNil: ['']

	source := aString

	aVisitor visitJSStatementNode: self

	aNode accept: self


	self visitNode: aNode

	self visitNode: aNode

	self visitSequenceNode: aNode

	self visitNode: aNode

	self visitNode: aNode

	self visitNode: aNode

	self visitNode: aNode

	self visitNode: aNode


	self visitNode: aNode

	self 
	    nextPutAll: 'smalltalk.';
	    nextPutAll: aNode value

	self 
	    nextPutAll: 'function(){';
	    nextPutAll: aNode source;
	    nextPutAll: '})()'

	^SmalltalkParser new

	^currentClass

	currentClass := aClass

	^unknownVariables copy
	^#('self' 'super' 'true' 'false' 'nil' 'thisContext')
	^tempVariables copy
	^self pseudoVariables 
		addAll: self tempVariables;
		yourself
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, '.klass']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
	DoIt addCompiledMethod: (self eval: (self compileExpression: aString)).
	^DoIt new doIt

	^self eval: (self compile: aString forClass: aClass)

	self currentClass: aClass.
	^self compile: aString
	self currentClass: DoIt.
	^self compileNode: (self parseExpression: aString)

	{'return eval(aString)'}
	^self compileNode: (self parse: aString)

	stream := '' writeStream.
	self visit: aNode.
	^stream contents

    ^self parser parse: aString readStream

    ^self parse: 'doIt ^[', aString, '] value'

	aClass methodDictionary do: [:each || method |
		method := self load: each source forClass: aClass.
		method category: each category.
		aClass addCompiledMethod: method].
	aClass isMetaclass ifFalse: [self recompile: aClass class]
	Smalltalk current classes do: [:each |
		self recompile: each]
	super initialize.
	stream := '' writeStream.
	unknownVariables := #().
	tempVariables := #().
	messageSends := #().
	classReferenced := #()

	aNode accept: self

	| str currentSelector |
	currentSelector := aNode selector asSelector.
	nestedBlocks := 0.
	earlyReturn := false.
	messageSends := #().
	referencedClasses := #().
	unknownVariables := #().
	tempVariables := #().
	stream 
	    nextPutAll: 'smalltalk.method({', String cr;
	    nextPutAll: 'selector: "', aNode selector, '",', String cr.
	Smalltalk current debugMode ifTrue: [
	    stream nextPutAll: 'source: unescape("', aNode source escaped, '"),', String cr].
	stream nextPutAll: 'fn: function('.
	aNode arguments 
	    do: [:each | 
		tempVariables add: each.
		stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream 
	    nextPutAll: '){', String cr;
	    nextPutAll: 'var self=this;', String cr.
	str := stream.
	stream := '' writeStream.
	aNode nodes do: [:each |
	    self visit: each].
	earlyReturn ifTrue: [
	    str nextPutAll: 'try{'].
	str nextPutAll: stream contents.
	stream := str.
	stream 
	    nextPutAll: String cr; 
	    nextPutAll: 'return self;'.
	earlyReturn ifTrue: [
	    stream nextPutAll: String cr, '} catch(e) {if(e.name === ''stReturn'' && e.selector === ', currentSelector printString, '){return e.fn()} throw(e)}'].
	stream nextPutAll: '}'.
	Smalltalk current debugMode ifTrue: [
		stream 
			nextPutAll: ',', String cr, 'messageSends: ';
			nextPutAll: messageSends asJavascript, ',', String cr;
			nextPutAll: 'referencedClasses: ['.
		referencedClasses 
			do: [:each | stream nextPutAll: each]
			separatedBy: [stream nextPutAll: ','].
		stream nextPutAll: ']'].
	stream nextPutAll: '})'
	stream nextPutAll: '(function('.
	aNode parameters 
	    do: [:each |
		tempVariables add: each.
		stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream nextPutAll: '){'.
	aNode nodes do: [:each | self visit: each].
	stream nextPutAll: '})'

	aNode temps do: [:each |
	    tempVariables add: each.
	    stream nextPutAll: 'var ', each, '=nil;'.
	    stream nextPutAll: String cr].
	aNode nodes do: [:each |
	    self visit: each.
	    stream nextPutAll: ';']
	    separatedBy: [stream nextPutAll: String cr]

	| index |
	nestedBlocks := nestedBlocks + 1.
	aNode nodes isEmpty
	    ifTrue: [
		stream nextPutAll: 'return nil;']
	    ifFalse: [
		aNode temps do: [:each |
		    tempVariables add: each.
		    stream nextPutAll: 'var ', each, '=nil;'.
		    stream nextPutAll: String cr].
		index := 0.
		aNode nodes do: [:each |
		    index := index + 1.
		    index = aNode nodes size ifTrue: [
			stream nextPutAll: 'return '].
		    self visit: each.
		    stream nextPutAll: ';']].
	nestedBlocks := nestedBlocks - 1

	nestedBlocks > 0 ifTrue: [
	    earlyReturn := true].
	earlyReturn
	    ifTrue: [
		stream
		    nextPutAll: '(function(){throw(';
		    nextPutAll: '{name: ''stReturn'', selector: ';
		    nextPutAll: currentSelector printString;
		    nextPutAll: ', fn: function(){return ']
	    ifFalse: [stream nextPutAll: 'return '].
	aNode nodes do: [:each |
	    self visit: each].
	earlyReturn ifTrue: [
	    stream nextPutAll: '}})})()']
	| str receiver superSend |
	str := stream.
	(messageSends includes: aNode selector) ifFalse: [
		messageSends add: aNode selector].
	stream := '' writeStream.
	self visit: aNode receiver.
	superSend := stream contents = 'super'.
	receiver := superSend ifTrue: ['self'] ifFalse: [stream contents].
	str nextPutAll: 'smalltalk.send('.
	str nextPutAll: receiver.
	stream := str.
	stream nextPutAll: ', "', aNode selector asSelector, '", ['.
	aNode arguments 
	    do: [:each | self visit: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream nextPutAll: ']'.
	superSend ifTrue: [
		stream nextPutAll: ', smalltalk.', (self classNameFor: self currentClass superclass)].
	stream nextPutAll: ')'
	| index |
	index := 0.
	(tempVariables includes: '$rec') ifFalse: [
		tempVariables add: '$rec'].
	stream nextPutAll: '(function($rec){'.
	aNode nodes do: [:each |
	    index := index + 1.
	    index = aNode nodes size ifTrue: [
		stream nextPutAll: 'return '].
	    each receiver: (VariableNode new value: '$rec').
	    self visit: each.
	    stream nextPutAll: ';'].
	stream nextPutAll: '})('.
	self visit: aNode receiver.
	stream nextPutAll: ')'

	stream nextPutAll: aNode value asJavascript

	self visit: aNode left.
	stream nextPutAll: '='.
	self visit: aNode right

	| klass |
	klass := 'smalltalk.', aNode value.
	(Smalltalk current at: aNode value) isClass ifTrue: [
		(referencedClasses includes: klass)
			ifFalse: [referencedClasses add: klass]].
	stream nextPutAll: klass
	(self currentClass instanceVariableNames includes: aNode value) 
		ifTrue: [stream nextPutAll: 'self[''@', aNode value, ''']']
		ifFalse: [
			(self knownVariables includes: aNode value) ifFalse: [
				unknownVariables add: aNode value].
			stream nextPutAll: aNode value]

	stream nextPutAll: (aNode source value replace: '''''' with: '''')
	aClass methodDictionary do: [:each || method |
		method := self new load: each source forClass: aClass.
		method category: each category.
		aClass addCompiledMethod: method].
	aClass isMetaclass ifFalse: [self recompile: aClass class]
	Smalltalk current classes do: [:each |
		self recompile: each]