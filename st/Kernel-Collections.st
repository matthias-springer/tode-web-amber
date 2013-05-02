Smalltalk current createPackage: 'Kernel-Collections'!
Object subclass: #Association
	instanceVariableNames: 'key value'
	package: 'Kernel-Collections'!
!Association commentStamp!
I represent a pair of associated objects, a key and a value. My instances can serve as entries in a dictionary.

Instances can be created with the class-side method `#key:value:`!

!Association methodsFor: 'accessing'!

key
	^key
!

key: aKey
	key := aKey
!

value
	^value
!

value: aValue
	value := aValue
! !

!Association methodsFor: 'comparing'!

= anAssociation
	^self class = anAssociation class and: [
		self key = anAssociation key and: [
		self value = anAssociation value]]
! !

!Association methodsFor: 'printing'!

printOn: aStream
	self key printOn: aStream.
	aStream nextPutAll: ' -> '.
	self value printOn: aStream
! !

!Association class methodsFor: 'instance creation'!

key: aKey value: aValue
		^self new
		key: aKey;
		value: aValue;
		yourself
! !

Object subclass: #Collection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!Collection commentStamp!
I am the abstract superclass of all classes that represent a group of elements.

I provide a set of useful methods to the Collectiohn hierarchy such as enumerating and converting methods.!

!Collection methodsFor: 'accessing'!

occurrencesOf: anObject
	"Answer how many of the receiver's elements are equal to anObject."

	| tally |
	tally := 0.
	self do: [:each | anObject = each ifTrue: [tally := tally + 1]].
	^tally
!

size
	self subclassResponsibility
! !

!Collection methodsFor: 'adding/removing'!

add: anObject
	self subclassResponsibility
!

addAll: aCollection
	aCollection do: [:each |
		self add: each].
	^aCollection
!

remove: anObject
	^self remove: anObject ifAbsent: [self errorNotFound]
!

remove: anObject ifAbsent: aBlock
	self subclassResponsibility
!

removeAll
	|copy|
	"TODO: provide a more efficient implementation."
	copy := self copy.
	copy do: [:each | self remove: each].
!

removeAllSuchThat: aBlock 
	"Evaluate aBlock for each element and remove all that elements from
	the receiver for that aBlock evaluates to true.  Use a copy to enumerate 
	collections whose order changes when an element is removed (i.e. Sets)."

	self copy do: [:each | (aBlock value: each) ifTrue: [self remove: each]]
! !

!Collection methodsFor: 'converting'!

asArray
	^Array withAll: self
!

asDictionary

	^ self as: Dictionary
!

asJSON
	^self asArray collect: [:each | each asJSON]
!

asOrderedCollection
	^self asArray
!

asSet
	^Set withAll: self
! !

!Collection methodsFor: 'copying'!

, aCollection
	^self copy
		addAll: aCollection;
		yourself
!

copyWith: anObject
	^self copy add: anObject; yourself
!

copyWithAll: aCollection
	^self copy addAll: aCollection; yourself
!

copyWithoutAll: aCollection
	"Answer a copy of the receiver that does not contain any elements
	equal to those in aCollection."

	^ self reject: [:each | aCollection includes: each]
! !

!Collection methodsFor: 'enumerating'!

allSatisfy: aBlock
	"Evaluate aBlock with the elements of the receiver.
	If aBlock returns false for any element return false.
	Otherwise return true."

	self do: [:each | (aBlock value: each) ifFalse: [^ false]].
	^ true
!

associationsDo: aBlock
	"Evaluate aBlock for each of the receiver's elements (key/value 
	associations).  If any non-association is within, the error is not caught now,
	but later, when a key or value message is sent to it."

	self do: aBlock
!

collect: aBlock
	| stream |
	stream := self class new writeStream.
	self do: [ :each |
		stream nextPut: (aBlock value: each) ].
	^stream contents
!

detect: aBlock
	^self detect: aBlock ifNone: [self errorNotFound]
!

detect: aBlock ifNone: anotherBlock
	self subclassResponsibility
!

do: aBlock
	self subclassResponsibility
!

do: aBlock separatedBy: anotherBlock
	| actionBeforeElement |
	actionBeforeElement := [actionBeforeElement := anotherBlock].
	self do: [:each |
		actionBeforeElement value.
		aBlock value: each]
!

inject: anObject into: aBlock
	| result |
	result := anObject.
	self do: [:each |
		result := aBlock value: result value: each].
	^result
!

intersection: aCollection
	"Answer the set theoretic intersection of two collections."

	| set outputSet |
	
	set := self asSet.
	outputSet := Set new.
	
	aCollection do: [ :each |
		((set includes: each) and: [(outputSet includes: each) not])
			ifTrue: [
				outputSet add: each]].
		
	^ self class withAll: outputSet asArray
!

max
	|greatest|
	self size == 0
		ifTrue: [self error: 'collection is empty'].
	self do: [:el |
		(greatest = nil or: [el > greatest])
			ifTrue: [greatest := el]].
	^ greatest
!

min
	|smallest|
	self size == 0
		ifTrue: [self error: 'collection is empty'].
	self do: [:el |
		(smallest = nil or: [el < smallest])
			ifTrue: [smallest := el]].
	^ smallest
!

reject: aBlock
	^self select: [:each | (aBlock value: each) = false]
!

select: aBlock
	| stream |
	stream := self class new writeStream.
	self do: [:each |
		(aBlock value: each) ifTrue: [
		stream nextPut: each]].
	^stream contents
! !

!Collection methodsFor: 'error handling'!

errorNotFound
	self error: 'Object is not in the collection'
! !

!Collection methodsFor: 'printing'!

asCommaString
	"Return collection printed as 'a, b, c' "

	^String streamContents: [:s | self asStringOn: s delimiter: ', ']
!

asCommaStringAnd
	"Return collection printed as 'a, b and c' "

	^String streamContents: [:s | self asStringOn: s delimiter: ', ' last: ' and ']
!

asStringOn: aStream delimiter: delimString
	"Print elements on a stream separated
	with a delimiter String like: 'a, b, c'
	Uses #asString instead of #print:."

	self do: [:elem | aStream nextPutAll: elem asString]
		separatedBy: [aStream nextPutAll: delimString]
!

asStringOn: aStream delimiter: delimString last: lastDelimString
	"Print elements on a stream separated
	with a delimiter between all the elements and with
	a special one before the last like: 'a, b and c'.
	Uses #asString instead of #print:

	Note: Feel free to improve the code to detect the last element."

	| n sz |
	n := 1.
	sz := self size.
	self do: [:elem |
		n := n + 1.
		aStream nextPutAll: elem asString]
	separatedBy: [
		aStream nextPutAll: (n = sz ifTrue: [lastDelimString] ifFalse: [delimString])]
!

printElementsOn: aStream
	"The original code used #skip:, but some streams do not support that,
	 and we don't really need it."

	aStream nextPut: '('.
	self do: [:element | aStream print: element] separatedBy: [aStream space].
	aStream nextPut: ')'
!

printNameOn: aStream
	super printOn: aStream
!

printOn: aStream 
	"Append a sequence of characters that identify the receiver to aStream."

	self printNameOn: aStream.
	self printElementsOn: aStream
!

printOn: aStream delimiter: delimString
	"Print elements on a stream separated
	with a delimiter String like: 'a, b, c' "

	self do: [:elem | aStream print: elem] separatedBy: [aStream print: delimString]
!

printOn: aStream delimiter: delimString last: lastDelimString
	"Print elements on a stream separated
	with a delimiter between all the elements and with
	a special one before the last like: 'a, b and c'

	Note: Feel free to improve the code to detect the last element."

	| n sz |
	n := 1.
	sz := self size.
	self do: [:elem |
		n := n + 1.
		aStream print: elem]
	separatedBy: [
		n = sz
			ifTrue: [aStream print: lastDelimString]
			ifFalse: [aStream print: delimString]]
! !

!Collection methodsFor: 'ston-core'!

stonOn: stonWriter
	stonWriter writeObject: self do: [
		stonWriter encodeList: self ]
! !

!Collection methodsFor: 'streaming'!

putOn: aStream
	self do: [ :each | each putOn: aStream ]
! !

!Collection methodsFor: 'testing'!

ifEmpty: aBlock
	"Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: self classifyMethodAs:
		(myProtocol ifEmpty: ['As yet unclassified'])"
	^ self isEmpty
		ifTrue: [ aBlock value ]
		ifFalse: [ self ]
!

ifNotEmpty: aBlock
	self notEmpty ifTrue: aBlock.
!

includes: anObject
	| sentinel |
	sentinel := Object new.
	^(self detect: [ :each | each = anObject] ifNone: [ sentinel ]) ~= sentinel
!

isEmpty
	^self size = 0
!

notEmpty
	^self isEmpty not
! !

!Collection class methodsFor: 'instance creation'!

new: anInteger
	^self new
!

with: anObject
		^self new
		add: anObject;
		yourself
!

with: anObject with: anotherObject
		^self new
		add: anObject;
		add: anotherObject;
		yourself
!

with: firstObject with: secondObject with: thirdObject
		^self new
		add: firstObject;
		add: secondObject;
		add: thirdObject;
		yourself
!

withAll: aCollection
		^self new
		addAll: aCollection;
		yourself
! !

!Collection class methodsFor: 'ston-core'!

fromSton: stonReader
	| collection |
	collection := self new.
	stonReader parseListDo: [ :each |
		collection add: each ].
	^ collection
! !

Collection subclass: #IndexableCollection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!IndexableCollection commentStamp!
I am a key-value store, that is,
it stores values under indexes.

As a rule of thumb, if a collection has at: and at:put:,
it is an IndexableCollection.!

!IndexableCollection methodsFor: 'accessing'!

at: anIndex
	"Lookup the given index in the receiver.
	If it is present, answer the value stored at anIndex.
	Otherwise, raise an error."

	^self at: anIndex ifAbsent: [ self errorNotFound ]
!

at: anIndex ifAbsent: aBlock
	"Lookup the given index in the receiver.
	If it is present, answer the value stored at anIndex.
	Otherwise, answer the value of aBlock."

	self subclassReponsibility
!

at: anIndex ifPresent: aBlock
	"Lookup the given index in the receiver.
	If it is present, answer the value of evaluating aBlock with the value stored at anIndex.
	Otherwise, answer nil."

	^self at: anIndex ifPresent: aBlock ifAbsent: [ nil ]
!

at: anIndex ifPresent: aBlock ifAbsent: anotherBlock
	"Lookup the given index in the receiver.
	If it is present, answer the value of evaluating aBlock with the value stored at anIndex.
	Otherwise, answer the value of anotherBlock."

	self subclassReponsibility
!

at: anIndex put: anObject
	"Store anObject under the given index in the receiver."

	self subclassReponsibility
!

indexOf: anObject
	"Lookup index at which anObject is stored in the receiver.
	If not present, raise an error."

	^self indexOf: anObject ifAbsent: [ self errorNotFound ]
!

indexOf: anObject ifAbsent: aBlock
	"Lookup index at which anObject is stored in the receiver.
	If not present, return value of executing aBlock."

	self subclassResponsibility
! !

!IndexableCollection methodsFor: 'enumarating'!

with: anotherCollection do: aBlock
	"Calls aBlock with every value from self
	and with indetically-indexed value from anotherCollection"

	self withIndexDo: [ :each :index |
		aBlock value: each value: (anotherCollection at: index) ]
!

withIndexDo: aBlock
	"Calls aBlock with every value from self
	and with its index as the second argument"

	self subclassReponsibility
! !

IndexableCollection subclass: #HashedCollection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!HashedCollection commentStamp!
I am a traditional JavaScript object, or a Smalltalk `Dictionary`.

Unlike a `Dictionary`, it can only have strings as keys.!

!HashedCollection methodsFor: 'accessing'!

associations
	| associations |
	associations := #().
	self associationsDo: [:each | associations add: each].
	^associations
!

at: aKey ifAbsent: aBlock
	^(self includesKey: aKey)
		ifTrue: [self basicAt: aKey]
		ifFalse: aBlock
!

at: aKey ifAbsentPut: aBlock
	^self at: aKey ifAbsent: [
		self at: aKey put: aBlock value]
!

at: aKey ifPresent: aBlock ifAbsent: anotherBlock
	"Lookup the given key in the receiver.
	If it is present, answer the value of evaluating the oneArgBlock with the value associated with the key,
	otherwise answer the value of absentBlock."
	^(self includesKey: aKey)
		ifTrue: [ aBlock value: (self at: aKey) ]
		ifFalse: anotherBlock
!

at: aKey put: aValue
	^self basicAt: aKey put: aValue
!

indexOf: anObject ifAbsent: aBlock

	^ self keys detect: [ :each | (self at: each) = anObject ] ifNone: aBlock
!

keys
	<
		if ('function'===typeof Object.keys) return Object.keys(self);
		var keys = [];
		for(var i in self) {
			if(self.hasOwnProperty(i)) {
				keys.push(i);
			}
		};
		return keys;
	>
!

size
	^self keys size
!

values
	^self keys collect: [:each | self at: each]
! !

!HashedCollection methodsFor: 'adding/removing'!

add: anAssociation
	self at: anAssociation key put: anAssociation value
!

addAll: aHashedCollection
	super addAll: aHashedCollection associations.
	^aHashedCollection
!

remove: aKey ifAbsent: aBlock
	^self removeKey: aKey ifAbsent: aBlock
!

removeAll
	self keys do: [:each | self removeKey: each].
!

removeKey: aKey
	^self remove: aKey
!

removeKey: aKey ifAbsent: aBlock
	^(self includesKey: aKey)
		ifFalse: [aBlock value]
		ifTrue: [self basicDelete: aKey]
! !

!HashedCollection methodsFor: 'comparing'!

= aHashedCollection
	self class = aHashedCollection class ifFalse: [^false].
	self size = aHashedCollection size ifFalse: [^false].
	^self associations = aHashedCollection associations
! !

!HashedCollection methodsFor: 'converting'!

asDictionary
	^Dictionary fromPairs: self associations
!

asJSON
	| c |
	c := self class new.
	self keysAndValuesDo: [:key :value |
		c at: key put: value asJSON].
	^c
! !

!HashedCollection methodsFor: 'copying'!

, aCollection
	self shouldNotImplement
!

deepCopy
	| copy |
	copy := self class new.
	self keysAndValuesDo: [:key :value |
		copy at: key put: value deepCopy].
	^copy
!

shallowCopy
	| copy |
	copy := self class new.
	self keysAndValuesDo: [:key :value |
		copy at: key put: value].
	^copy
! !

!HashedCollection methodsFor: 'enumerating'!

associationsDo: aBlock
	self keysAndValuesDo: [:key :value |
		aBlock value: (Association key: key value: value)]
!

collect: aBlock
	| newDict |
	newDict := self class new.
	self keysAndValuesDo: [:key :value |
		newDict at: key put: (aBlock value: value)].
	^newDict
!

detect: aBlock ifNone: anotherBlock
	^self values detect: aBlock ifNone: anotherBlock
!

do: aBlock
	self valuesDo: aBlock
!

includes: anObject
	^self values includes: anObject
!

keysAndValuesDo: aBlock
	self keysDo: [:each |
		aBlock value: each value: (self at: each)]
!

keysDo: aBlock
	self keys do: aBlock
!

select: aBlock
	| newDict |
	newDict := self class new.
	self keysAndValuesDo: [:key :value |
		(aBlock value: value) ifTrue: [newDict at: key put: value]].
	^newDict
!

valuesDo: aBlock
	self keysAndValuesDo: [ :key :value | aBlock value: value ]
!

withIndexDo: aBlock
	self keysAndValuesDo: [ :key :value | aBlock value: value value: key ]
! !

!HashedCollection methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	
	aStream nextPutAll: ' ('.
	self associations
		do: [:each | each printOn: aStream ]
		separatedBy: [ aStream nextPutAll: ' , ' ].
	aStream nextPutAll: ')'
! !

!HashedCollection methodsFor: 'testing'!

includesKey: aKey
	<return self.hasOwnProperty(aKey)>
! !

!HashedCollection class methodsFor: 'instance creation'!

fromPairs: aCollection
	| dict |
	dict := self new.
	aCollection do: [:each | dict add: each].
	^dict
! !

HashedCollection subclass: #Dictionary
	instanceVariableNames: 'keys values'
	package: 'Kernel-Collections'!
!Dictionary commentStamp!
I represent a set of elements that can be viewed from one of two perspectives: a set of associations,
or a container of values that are externally named where the name can be any object that responds to `=`.

The external name is referred to as the key.!

!Dictionary methodsFor: 'accessing'!

at: aKey ifAbsent: aBlock
	<
		var index = self._positionOfKey_(aKey);
		return index >>=0 ? self['@values'][index] : aBlock();
	>
!

at: aKey put: aValue
	<
		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			var keys = self['@keys'];
			index = keys.length;
			keys.push(aKey);
		}

		return self['@values'][index] = aValue;
	>
!

indexOf: anObject ifAbsent: aBlock

	| index |
	index := values indexOf: anObject ifAbsent: [0].
	^ index = 0 ifTrue: [ aBlock value ] ifFalse: [ keys at: index ]
!

keys
	^keys copy
!

values
	^values copy
! !

!Dictionary methodsFor: 'adding/removing'!

removeKey: aKey ifAbsent: aBlock
	<
		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			return aBlock()
		} else {
			var keys = self['@keys'], values = self['@values'];
			var value = values[index], l = keys.length;
			keys[index] = keys[l-1];
			keys.pop();
			values[index] = values[l-1];
			values.pop();
			return value;
		}
	>
! !

!Dictionary methodsFor: 'converting'!

asHashedCollection
	^HashedCollection fromPairs: self associations
!

asJSON
	^self asHashedCollection asJSON
! !

!Dictionary methodsFor: 'enumerating'!

keysAndValuesDo: aBlock
	^keys with: values do: aBlock
!

keysDo: aBlock
	^keys do: aBlock
!

valuesDo: aBlock
	^values do: aBlock
! !

!Dictionary methodsFor: 'initialization'!

initialize
	super initialize.
	keys := #().
	values := #()
! !

!Dictionary methodsFor: 'private'!

positionOfKey: anObject
	<
		var keys = self['@keys'];
		for(var i=0;i<keys.length;i++){
			if(keys[i].__eq(anObject)) { return i;}
		}
		return -1;
	>
! !

!Dictionary methodsFor: 'ston-core'!

stonOn: stonWriter
	"Instances of STON mapClass will be encoded directly, without a class tag.
	Other (sub)classes will be encoded with a class tag and will use a map representation. "
	
	self class == STON mapClass
		ifTrue: [ 
			stonWriter writeMap: self ]
		ifFalse: [ 
			stonWriter 
				writeObject: self 
				do: [ stonWriter encodeMap: self ] ]
! !

!Dictionary methodsFor: 'testing'!

includesKey: aKey
	< return self._positionOfKey_(aKey) >>= 0; >
! !

!Dictionary class methodsFor: 'instance creation'!

newFrom: aDict 
	"Answer an instance of me containing the same associations as aDict.
	 Error if any key appears twice."
	| newDictionary |
	newDictionary := self new: aDict size.
	aDict associationsDo:
		[:x |
		(newDictionary includesKey: x key)
			ifTrue: [self error: 'Duplicate key: ', x key printString]
			ifFalse: [newDictionary add: x]].
	^ newDictionary
! !

!Dictionary class methodsFor: 'ston-core'!

fromSton: stonReader
	"Instances of STON mapClass will be read directly and won't arrive here.
	Other (sub)classes will use this method."
	
	| dictionary |
	dictionary := self new.
	stonReader parseMapDo: [ :key :value |
		dictionary at: key put: value ].
	^ dictionary
! !

IndexableCollection subclass: #SequenceableCollection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!SequenceableCollection commentStamp!
I am an IndexableCollection
with numeric indexes starting with 1.!

!SequenceableCollection methodsFor: 'accessing'!

allButFirst
	^self copyFrom: 2 to: self size
!

allButLast
	^self copyFrom: 1 to: self size - 1
!

atRandom
	^ self at: self size atRandom
!

first
	^self at: 1
!

first: n
	"Answer the first n elements of the receiver.
	Raise an error if there are not enough elements."

	^ self copyFrom: 1 to: n
!

fourth
	^self at: 4
!

indexOf: anObject ifAbsent: aBlock
	<
		for(var i=0;i<self.length;i++) {
			if(self[i].__eq(anObject)) {return i+1}
		};
		return aBlock();
	>
!

indexOf: anObject startingAt: start
	"Answer the index of the first occurence of anElement after start
	within the receiver. If the receiver does not contain anElement,
	answer 0."
	^self indexOf: anObject startingAt: start ifAbsent: [0]
!

indexOf: anObject startingAt: start ifAbsent: aBlock
	<
		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	>
!

last
	^self at: self size
!

second
	^self at: 2
!

third
	^self at: 3
! !

!SequenceableCollection methodsFor: 'adding'!

addLast: anObject
	self add: anObject
!

removeLast
	self remove: self last
! !

!SequenceableCollection methodsFor: 'comparing'!

= aCollection
	(self class = aCollection class and: [
		self size = aCollection size]) ifFalse: [^false].
	self withIndexDo: [:each :i |
				(aCollection at: i) = each ifFalse: [^false]].
	^true
! !

!SequenceableCollection methodsFor: 'converting'!

reversed
	self subclassResponsibility
! !

!SequenceableCollection methodsFor: 'copying'!

copyFrom: anIndex to: anotherIndex
	| range newCollection |
	range := anIndex to: anotherIndex.
	newCollection := self class new: range size.
	range withIndexDo: [:each :i |
		newCollection at: i put: (self at: each)].
	^newCollection
!

copyReplaceFrom: start to: stop with: replacementCollection
	"Answer a copy of the receiver satisfying the following conditions: If 
	stop is less than start, then this is an insertion; stop should be exactly 
	start-1, start = 1 means insert before the first character, start = size+1 
	means append after last character. Otherwise, this is a replacement; start 
	and stop have to be within the receiver's bounds."

	"TODO: think about negative indices"
	^ self class new
		addAll: (self copyFrom: 1 to: start - 1);
		addAll: replacementCollection;
		addAll: (self copyFrom: stop + 1 to: self size);
		yourself
!

deepCopy
	| newCollection |
	newCollection := self class new: self size.
	self withIndexDo: [:each :index |
		newCollection at: index put: each deepCopy].
	^newCollection
!

shallowCopy
	| newCollection |
	newCollection := self class new: self size.
	self withIndexDo: [ :each :index |
		newCollection at: index put: each].
	^newCollection
! !

!SequenceableCollection methodsFor: 'enumerating'!

detect: aBlock ifNone: anotherBlock
	<
		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	>
!

do: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self[i]);}>
!

with: anotherCollection do: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self[i], anotherCollection[i]);}>
!

withIndexDo: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self[i], i+1);}>
! !

!SequenceableCollection methodsFor: 'ston-core'!

stonOn: stonWriter
	self class == STON listClass
		ifTrue: [ stonWriter writeList: self ]
		ifFalse: [ super stonOn: stonWriter ]
! !

!SequenceableCollection methodsFor: 'streaming'!

newStream
	^self streamClass on: self
!

readStream
	"For Pharo compatibility"
	
	^self stream
!

stream
	^self newStream
!

streamClass
	^self class streamClass
!

writeStream
	"For Pharo compatibility"
	
	^self stream
! !

!SequenceableCollection methodsFor: 'testing'!

includes: anObject
	^(self indexOf: anObject ifAbsent: [nil]) notNil
! !

!SequenceableCollection class methodsFor: 'accessing'!

streamClass
		^Stream
! !

!SequenceableCollection class methodsFor: 'ston-core'!

fromSton: stonReader
	^ self streamContents: [ :stream |
		stonReader parseListDo: [ :each |
			stream nextPut: each ] ]
! !

!SequenceableCollection class methodsFor: 'streaming'!

streamContents: aBlock
	| stream |
	stream := (self streamClass on: self new).
	aBlock value: stream.
	^ stream contents
! !

SequenceableCollection subclass: #Array
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!Array commentStamp!
I represent a collection of objects ordered by the collector. The size of arrays is dynamic.
In Amber, OrderedCollection is an alias for Array.!

!Array methodsFor: 'accessing'!

at: anIndex ifAbsent: aBlock
	<
		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	>
!

at: anIndex put: anObject
	<return self[anIndex - 1] = anObject>
!

atAllPut: aValue
	(1 to: self size) do: [:index | 
		self at: index put: aValue].
!

size
	<return self.length>
! !

!Array methodsFor: 'adding/removing'!

add: anObject
	<self.push(anObject); return anObject;>
!

remove: anObject ifAbsent: aBlock
	<
		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				return self;
			}
		};
		aBlock._value();
	>
!

removeAll
	self shouldNotImplement
!

removeFrom: aNumber to: anotherNumber
	<self.splice(aNumber - 1,anotherNumber - 1)>
! !

!Array methodsFor: 'converting'!

asJavascript
	^'[', ((self collect: [:each | each asJavascript]) join: ', '), ']'
!

reversed
	<return self._copy().reverse()>
! !

!Array methodsFor: 'enumerating'!

join: aString
	<return self.join(aString)>
!

sort
	^self basicPerform: 'sort'
!

sort: aBlock
	<
		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	>
!

sorted
	^self copy sort
!

sorted: aBlock
	^self copy sort: aBlock
! !

!Array methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	
	aStream nextPutAll: ' ('.
	self 
		do: [ :each | each printOn: aStream ]
		separatedBy: [ aStream nextPutAll: ' ' ].
	aStream nextPutAll: ')'
!

storeOn: aStream 
	"Use the literal form if possible."

			[aStream nextPut: '#'; nextPut: '('.
			self do: 
				[:element | 
				element storeOn: aStream.
				aStream space].
			aStream nextPut: ')']
! !

!Array class methodsFor: 'instance creation'!

new: anInteger
	<return new Array(anInteger)>
!

new: size withAll: value 
	"Answer an instance of me, with number of elements equal to size, each 
	of which refers to the argument, value."

	^(self new: size) atAllPut: value
!

with: anObject
		^(self new: 1)
		at: 1 put: anObject;
		yourself
!

with: anObject with: anObject2
		^(self new: 2)
		at: 1 put: anObject;
		at: 2 put: anObject2;
		yourself
!

with: anObject with: anObject2 with: anObject3
		^(self new: 3)
		at: 1 put: anObject;
		at: 2 put: anObject2;
		at: 3 put: anObject3;
		yourself
!

withAll: aCollection
	| instance index |
	index := 1.
	instance := self new: aCollection size.
	aCollection do: [:each |
		instance at: index put: each.
		index := index + 1].
	^instance
! !

SequenceableCollection subclass: #CharacterArray
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!CharacterArray commentStamp!
I am the abstract superclass of string-like collections.!

!CharacterArray methodsFor: 'accessing'!

at: anIndex put: anObject
	self errorReadOnly
! !

!CharacterArray methodsFor: 'adding'!

add: anObject
	self errorReadOnly
!

remove: anObject
	self errorReadOnly
! !

!CharacterArray methodsFor: 'converting'!

asLowercase
	^self class fromString: self asString asLowercase
!

asNumber
	^self asString asNumber
!

asString
	^self subclassResponsibility
!

asSymbol
	^self asString
!

asUppercase
	^self class fromString: self asString asUppercase
! !

!CharacterArray methodsFor: 'copying'!

, aString
	^self asString, aString asString
! !

!CharacterArray methodsFor: 'error handling'!

errorReadOnly
	self error: 'Object is read-only'
! !

!CharacterArray methodsFor: 'printing'!

printOn: aStream
	self asString printOn: aStream
! !

!CharacterArray methodsFor: 'streaming'!

putOn: aStream
	aStream nextPutString: self
! !

!CharacterArray class methodsFor: 'instance creation'!

fromString: aString
	self subclassResponsibility
! !

CharacterArray subclass: #String
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!String commentStamp!
I am an indexed collection of Characters. Unlike most Smalltalk dialects, Amber doesn't provide the Character class. Instead, elements of a String are single character strings.

String inherits many useful methods from its hierarchy, such as
	`Collection >> #,`!

!String methodsFor: 'accessing'!

asciiValue
	<return self.charCodeAt(0);>
!

at: anIndex ifAbsent: aBlock
	<return String(self).charAt(anIndex - 1) || aBlock()>
!

charCodeAt: anInteger
	< return self.charCodeAt(anInteger - 1) >
!

codePoint
	self size ~~ 1 ifTrue: [Error signal: 'not a character'].
	^ self asciiValue
!

escaped
	<return escape(self)>
!

size
	<return self.length>
!

unescaped
	<return unescape(self)>
! !

!String methodsFor: 'comparing'!

< aString
	<return String(self) < aString._asString()>
!

<= aString
	<return String(self) <= aString._asString()>
!

= aString
	<
		if(typeof aString === 'undefined') { return false }
		if(!!aString._isString || !! aString._isString()) {
			return false;
		}
		return String(self) === String(aString)
	>
!

== aString
	^self = aString
!

> aString
	<return String(self) >> aString._asString()>
!

>= aString
	<return String(self) >>= aString._asString()>
! !

!String methodsFor: 'converting'!

asJSON
	^self
!

asJavascript
	<
		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	>
!

asLowercase
	<return self.toLowerCase()>
!

asNumber
	<return Number(self)>
!

asRegexp
	^ RegularExpression fromString: self
!

asSelector
	<return smalltalk.selector(self)>
!

asString
	^self
!

asSymbol
	^ self
!

asText
	^ Text fromString: self
!

asUppercase
	<return self.toUpperCase()>
!

crlfSanitized
	^self lines join: String lf
!

digitValue
	|digitValue|
	self size ~~ 1 ifTrue: [Error signal: 'not a character'].
	(digitValue := ('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' indexOf: self) - 1) >= 0
		ifTrue: [^ digitValue ]
		ifFalse: [Error signal: 'not implemented yet'].
!

encodeAsHtml
	< return $(String.fromCharCode(60) + 'div/' + String.fromCharCode(62)).text(self).html(); >
!

parseFloat
	< return parseFloat(self) >
!

parseJSON
	< return $.parseJSON(self) >
!

readStream
	^ self class streamClass on: self
!

reversed
	<return self.split("").reverse().join("")>
!

subStrings: separator
	|tokens|
	tokens := self tokenize: separator.
	tokens removeAllSuchThat: [:x | x = ''].
	^ tokens
!

tokenize: aString
	<return self.split(aString)>
!

writeStream
	^ self class streamClass on: self
! !

!String methodsFor: 'copying'!

, aString
	<return self + aString>
!

copyFrom: anIndex to: anotherIndex
	<return self.substring(anIndex - 1, anotherIndex)>
!

copyReplaceFrom: start to: stop with: replacement
	"Answer a copy of the receiver satisfying the following conditions: If 
	stop is less than start, then this is an insertion; stop should be exactly 
	start-1, start = 1 means insert before the first character, start = size+1 
	means append after last character. Otherwise, this is a replacement; start 
	and stop have to be within the receiver's bounds."

	"TODO: think about negative indices"
	< return self.substr(0, start - 1) + replacement + self.substr(stop) >
!

deepCopy
	^self shallowCopy
!

shallowCopy
	^self class fromString: self
! !

!String methodsFor: 'enumerating'!

do: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self.charAt(i));}>
!

withIndexDo: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);}>
! !

!String methodsFor: 'printing'!

printNl
	<console.log(self)>
!

printOn: aStream
	aStream 
		nextPutAll: '''';
		nextPutAll: self;
		nextPutAll: ''''
! !

!String methodsFor: 'regular expressions'!

copyReplaceAll: aString with: anotherString
	^ self replace: aString with: anotherString
!

match: aRegexp
	<return self.search(aRegexp) !!= -1>
!

matchesOf: aRegularExpression
	<return self.match(aRegularExpression)>
!

replace: aString with: anotherString
	^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString
!

replaceRegexp: aRegexp with: aString
	<return self.replace(aRegexp, aString)>
!

trimBoth
	^self trimBoth: '\s'
!

trimBoth: separators

	^(self trimLeft: separators) trimRight: separators
!

trimLeft
	^self trimLeft: '\s'
!

trimLeft: separators

	^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''
!

trimRight
	^self trimRight: '\s'
!

trimRight: separators

	^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''
! !

!String methodsFor: 'split join'!

findDelimiters: delimiters startingAt: start 
	"Answer the index of the character within the receiver, starting at start, that matches one of the delimiters. If the receiver does not contain any of the delimiters, answer size + 1."

	start to: self size do: [:i |
		delimiters do: [:delim | delim = (self at: i) ifTrue: [^ i]]].
	^ self size + 1
!

findTokens: delimiters
	"Answer the collection of tokens that result from parsing self.  Return strings between the delimiters.  Any character in the Collection delimiters marks a border.  Several delimiters in a row are considered as just one separation.  Also, allow delimiters to be a single character."
	| tokens keyStart keyStop separators |

	tokens := OrderedCollection new.
	separators := delimiters isCharacter 
		ifTrue: [Array with: delimiters]
		ifFalse: [delimiters].
	keyStop := 1.
	[keyStop <= self size] whileTrue:
		[keyStart := self skipDelimiters: separators startingAt: keyStop.
		keyStop := self findDelimiters: separators startingAt: keyStart.
		keyStart < keyStop
			ifTrue: [tokens add: (self copyFrom: keyStart to: (keyStop - 1))]].
	^ tokens
!

join: aCollection
	^ String
		streamContents: [:stream | aCollection
				do: [:each | stream nextPutAll: each asString]
				separatedBy: [stream nextPutAll: self]]
!

lineIndicesDo: aBlock
	"execute aBlock with 3 arguments for each line:
	- start index of line
	- end index of line without line delimiter
	- end index of line including line delimiter(s) CR, LF or CRLF"
	
	| cr lf start sz nextLF nextCR |
	start := 1.
	sz := self size.
	cr := String cr.
	nextCR := self indexOf: cr startingAt: 1.
	lf := String lf.
	nextLF := self indexOf: lf startingAt: 1.
	[ start <= sz ] whileTrue: [
		(nextLF = 0 and: [ nextCR = 0 ])
			ifTrue: [ "No more CR, nor LF, the string is over"
					aBlock value: start value: sz value: sz.
					^self ].
		(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])
			ifTrue: [ "Found a LF"
					aBlock value: start value: nextLF - 1 value: nextLF.
					start := 1 + nextLF.
					nextLF := self indexOf: lf startingAt: start ]
			ifFalse: [ 1 + nextCR = nextLF
				ifTrue: [ "Found a CR-LF pair"
					aBlock value: start value: nextCR - 1 value: nextLF.
					start := 1 + nextLF.
					nextCR := self indexOf: cr startingAt: start.
					nextLF := self indexOf: lf startingAt: start ]
				ifFalse: [ "Found a CR"
					aBlock value: start value: nextCR - 1 value: nextCR.
					start := 1 + nextCR.
					nextCR := self indexOf: cr startingAt: start ]]]
!

lineNumber: anIndex
	"Answer a string containing the characters in the given line number."

	| lineCount |
	lineCount := 0.
	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].
	^nil
!

lines
	"Answer an array of lines composing this receiver without the line ending delimiters."

	| lines |
	lines := Array new.
	self linesDo: [:aLine | lines add: aLine].
	^lines
!

linesDo: aBlock
	"Execute aBlock with each line in this string. The terminating line
	delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock"

	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		aBlock value: (self copyFrom: start to: endWithoutDelimiters)]
!

skipDelimiters: delimiters startingAt: start 
	"Answer the index of the character within the receiver, starting at start, that does NOT match one of the delimiters. If the receiver does not contain any of the delimiters, answer size + 1.  Assumes the delimiters to be a non-empty string."

	start to: self size do: [:i |
		delimiters detect: [:delim | delim = (self at: i)]
				ifNone: [^ i]].
	^ self size + 1
! !

!String methodsFor: 'ston-core'!

stonOn: stonWriter
	stonWriter writeString: self
!

stonProcessSubObjects: block
! !

!String methodsFor: 'testing'!

includesSubString: subString
	< return self.indexOf(subString) !!= -1 >
!

isCharacter
	^ self size = 1
!

isDigit
	self isCharacter ifFalse: [Error signal: 'not a character'].
	^ self asciiValue >= 48 and: [self asciiValue <= 57]
!

isImmutable
	^ true
!

isSeparator
	"Answer whether the receiver is one of the separator characters--space, 
	cr, tab, line feed, or form feed."
	self size ~~ 1 ifTrue: [Error signal: 'not a character'].
	self asciiValue = 32 ifTrue: [^true].	"space"
	self asciiValue = 13 ifTrue: [^true].	"cr"
	self asciiValue = 9 ifTrue: [^true].	"tab"
	self asciiValue = 10 ifTrue: [^true].	"line feed"
	self asciiValue = 12 ifTrue: [^true].	"form feed"
	^false
!

isString
	^true
!

isVowel
	"Answer true if the receiver is a one character string containing a voyel"
	
	^ self size = 1 and: [ 'aeiou' includes: self asLowercase ]
! !

!String class methodsFor: 'accessing'!

cr
	<return '\r'>
!

crlf
	<return '\r\n'>
!

lf
	<return '\n'>
!

space
	<return ' '>
!

streamClass
		^StringStream
!

tab
	<return '\t'>
! !

!String class methodsFor: 'instance creation'!

fromCharCode: anInteger
	<return String.fromCharCode(anInteger)>
!

fromString: aString
		<return String(aString)>
!

value: aUTFCharCode

	<return String.fromCharCode(aUTFCharCode);>
! !

!String class methodsFor: 'random'!

random
	"Returns random alphanumeric string beginning with letter"
	<return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);>
!

randomNotIn: aString
	| result |
    [ result := self random. aString includesSubString: result ] whileTrue.
    ^result
! !

SequenceableCollection subclass: #RunArray
	instanceVariableNames: 'runs values lastIndex lastRun lastOffset'
	package: 'Kernel-Collections'!

!RunArray methodsFor: 'accessing'!

at: index

	self at: index setRunOffsetAndValue: [:run :offset :value | ^value]
!

at: index put: aValue 
	"Set an element of the RunArray"
	| runIndex offsetInRun lastValue runLength runReplacement valueReplacement iStart iStop |
	index isInteger
		ifFalse: [self errorNonIntegerIndex].
	(index >= 1 and: [index <= self size])
		ifFalse: [self errorSubscriptBounds: index].
	self
		at: index
		setRunOffsetAndValue: [:run :offset :value | 
			runIndex := run.
			offsetInRun := offset.
			lastValue := value].
	aValue = lastValue
		ifTrue: [^ aValue].
	runLength := runs at: runIndex.
	runReplacement := Array
				with: offsetInRun
				with: 1
				with: runLength - offsetInRun - 1.
	valueReplacement := Array
				with: lastValue
				with: aValue
				with: lastValue.
	iStart := offsetInRun = 0
				ifTrue: [2]
				ifFalse: [1].
	iStop := offsetInRun = (runLength - 1)
				ifTrue: [2]
				ifFalse: [3].
	self
		setRuns: (runs copyReplaceFrom: runIndex to: runIndex with: (runReplacement copyFrom: iStart to: iStop))
		setValues: (values copyReplaceFrom: runIndex to: runIndex with: (valueReplacement copyFrom: iStart to: iStop)).
	self coalesce.
	^ aValue
!

first
	^values at: 1
!

last
	^values at: values size
!

runLengthAt: index 
	"Answer the length remaining in run beginning at index."

	self at: index 
		setRunOffsetAndValue: [:run :offset :value | ^(runs at: run) - offset]
!

size
	| size |
	size := 0.
	1 to: runs size do: [:i | size := size + (runs at: i)].
	^size
!

withStartStopAndValueDo: aBlock
	| start |
	start := 1.
	runs with: values do:
		[:len : val | | stop |
		stop := start + len - 1.
		aBlock value: start value: stop value: val.
		start := stop + 1]
! !

!RunArray methodsFor: 'adding'!

add: newObject withOccurrences: anInteger
	"Add value as the last element of the receiver, the given number of times"
	anInteger <= 0 ifTrue: [ ^self ].
	lastIndex := nil. "flush access cache"
	(runs size=0 or: [values last ~= newObject])
		ifTrue:
			[runs := runs copyWith: anInteger.
			values := values copyWith: newObject]
		ifFalse:
			[runs at: runs size put: runs last + anInteger]
!

addFirst: value
	"Add value as the first element of the receiver."
	lastIndex := nil. "flush access cache"
	(runs size=0 or: [values first ~= value])
		ifTrue:
			[runs := {1}, runs.
			values := {value}, values]
		ifFalse:
			[runs at: 1 put: runs first+1]
!

addLast: value
	"Add value as the last element of the receiver."
	lastIndex := nil. "flush access cache"
	(runs size=0 or: [values last ~= value])
		ifTrue:
			[runs := runs copyWith: 1.
			values := values copyWith: value]
		ifFalse:
			[runs at: runs size put: runs last+1].
	^value
!

coalesce
	"Try to combine adjacent runs"
	| ind |
	ind := 2.
	[ind > values size] whileFalse: [
		(values at: ind-1) = (values at: ind) 
			ifFalse: [ind := ind + 1]
			ifTrue: ["two are the same, combine them"
				values := values copyReplaceFrom: ind to: ind with: #().
				runs at: ind-1 put: (runs at: ind-1) + (runs at: ind).
				runs := runs copyReplaceFrom: ind to: ind with: #().
				"self error: 'needed to combine runs' "]].
!

rangeOf: attr startingAt: startPos
	"Answer an interval that gives the range of attr at index position startPos. An empty interval with start value startPos is returned when the attribute attr is not present at position startPos. self size > 0 is assumed, it is the responsibility of the caller to test for emptiness of self.
Note that an attribute may span several adjancent runs. "

	self at: startPos 
		setRunOffsetAndValue: 
			[:run :offset :value | 
			^(value includes: attr)
				ifFalse: [startPos to: startPos - 1]
				ifTrue:
					[ | firstRelevantPosition lastRelevantPosition idxOfCandidateRun |
					lastRelevantPosition := startPos - offset + (runs at: run) - 1.
					firstRelevantPosition := startPos - offset.
					idxOfCandidateRun := run + 1.
					[idxOfCandidateRun <= runs size 
							 and: [(values at: idxOfCandidateRun) includes: attr]]
						whileTrue:
							[lastRelevantPosition := lastRelevantPosition + (runs at: idxOfCandidateRun).
							idxOfCandidateRun := idxOfCandidateRun + 1]. 
					idxOfCandidateRun := run - 1.
					[idxOfCandidateRun >= 1 
							 and: [(values at: idxOfCandidateRun) includes: attr]]
						whileTrue:
							[firstRelevantPosition := firstRelevantPosition - (runs at: idxOfCandidateRun).
							idxOfCandidateRun := idxOfCandidateRun - 1]. 
 
					firstRelevantPosition to: lastRelevantPosition]]
!

repeatLast: times ifEmpty: defaultBlock
	"add the last value back again, the given number of times. If we are empty, add (defaultBlock value)"
	times = 0 ifTrue: [^self ].
	lastIndex := nil. "flush access cache"
	(runs size=0)
		ifTrue:
			[runs := runs copyWith: times.
			values := values copyWith: defaultBlock value]
		ifFalse:
			[runs at: runs size put: runs last+times]
!

repeatLastIfEmpty: defaultBlock
	"add the last value back again. If we are empty, add (defaultBlock value)"
	lastIndex := nil. "flush access cache"
	(runs size=0)
		ifTrue:[
			runs := runs copyWith: 1.
			values := values copyWith: defaultBlock value]
		ifFalse:
			[runs at: runs size put: runs last+1]
! !

!RunArray methodsFor: 'comparing'!

= otherArray 
	"Test if all my elements are equal to those of otherArray"

	self == otherArray ifTrue: [^true].
	self species == otherArray species ifFalse: [^ false].
	(otherArray isMemberOf: RunArray) ifFalse: [^ self hasEqualElements: otherArray].

	"Faster test between two RunArrays"
	^ (runs hasEqualElements: otherArray runs)
		and: [values hasEqualElements: otherArray values]
! !

!RunArray methodsFor: 'copying'!

, aRunArray 
	"Answer a new RunArray that is a concatenation of the receiver and
	aRunArray."

	| new newRuns |
	(aRunArray isMemberOf: RunArray)
		ifFalse: 
			[ new := self copy.
			"attempt to be sociable"
			aRunArray do: [:each | new addLast: each].
			^new].
	runs size = 0 ifTrue: [^aRunArray copy].
	aRunArray runs size = 0 ifTrue: [^self copy].
	(values at: values size) ~= (aRunArray values at: 1)
		ifTrue: [^RunArray
					runs: runs , aRunArray runs
					values: values , aRunArray values].
	newRuns := runs
			copyReplaceFrom: runs size
			to: runs size
			with: aRunArray runs.
	newRuns at: runs size put: (runs at: runs size) + (aRunArray runs at: 1).
	^RunArray
		runs: newRuns
		values: 
			(values
				copyReplaceFrom: values size
				to: values size
				with: aRunArray values)
!

copy
	^self class
		runs: runs
		values: values
!

copyFrom: start to: stop
	| newRuns run1 run2 offset1 offset2 | 

	stop < start ifTrue: [ ^RunArray new].
	self at: start setRunOffsetAndValue: [:r :o :value1 | run1 := r. offset1 := o. value1].
	self at: stop setRunOffsetAndValue: [:r :o :value2 | run2 := r. offset2 := o. value2].
	run1 = run2
		ifTrue: 
			[newRuns := Array with: offset2 - offset1 + 1]
		ifFalse: 
			[newRuns := runs copyFrom: run1 to: run2.
			newRuns at: 1 put: (newRuns at: 1) - offset1.
			newRuns at: newRuns size put: offset2 + 1].
	^RunArray runs: newRuns values: (values copyFrom: run1 to: run2)
!

copyReplaceFrom: start to: stop with: replacement

	^(self copyFrom: 1 to: start - 1)
		, replacement 
		, (self copyFrom: stop + 1 to: self size)
!

copyUpThrough: anElement
	"Optimized"

	| newValues |
	newValues := values copyUpThrough: anElement.
	^ self class
		runs: (runs copyFrom: 1 to: newValues size)
		values: newValues
!

copyUpTo: anElement 
	"Optimized"

	| newValues |
	newValues := values copyUpTo: anElement.
	^ self class
		runs: (runs copyFrom: 1 to: newValues size)
		values: newValues
!

copyUpToLast: anElement
	"Optimized"

	| newValues |
	newValues := values copyUpToLast: anElement.
	^ self class
		runs: (runs copyFrom: 1 to: newValues size)
		values: newValues
!

postCopy
	super postCopy.
	runs := runs copy.
	values := values copy
! !

!RunArray methodsFor: 'enumerating'!

allSatisfy: aBlock 
	"Only evaluate once per run"

	^values allSatisfy: aBlock
!

anySatisfy: aBlock 
	"Only evaluate once per run"

	^values anySatisfy: aBlock
!

collect: aBlock
	"Beware, the block will be evaluated only once per group of values."
	^(self class runs: runs copy contents values: (values collect: aBlock)) coalesce
!

count: aBlock
	"Beware, the block will be evaluated only once per group of values."
	| count |
	count := 0.
	self runsAndValuesDo: [:run :value |
		(aBlock value: value)
			ifTrue:
				[count := count + run]].
	^count
!

detect: aBlock ifNone: exceptionBlock 
	"Only evaluate once per run"

	^values detect: aBlock ifNone: exceptionBlock
!

detectMax: aBlock
	"Only evaluate once per run"

	^values detectMax: aBlock
!

detectMin: aBlock
	"Only evaluate once per run"

	^values detectMin: aBlock
!

detectSum: aBlock
	"Only loop on runs"
	| sum |
	sum := 0.
	self runsAndValuesDo: [:run :value | 
		sum := (aBlock value: value) * run + sum].
	^ sum
!

do: aBlock
	"This is refined for speed"
	
	1 to: runs size do: [:i |
		| r v |
		v := values at: i.
		r := runs at: i.
		[( r := r - 1) >= 0]
			whileTrue: [aBlock value: v]].
!

findFirst: aBlock
	| index |
	index := 1.
	self runsAndValuesDo: [ :run :value |
		(aBlock value: value) ifTrue: [^index].
		index := index + run].
	^0
!

findLast: aBlock
	| index |
	index := values size + 1.
	[(index := index - 1) >= 1] whileTrue:
		[(aBlock value: (values at: index)) ifTrue: [^(1 to: index) detectSum: [:i | runs at: i]]].
	^0
!

noneSatisfy: aBlock 
	"Only evaluate once per run"

	^values noneSatisfy: aBlock
!

replace: aBlock
	"Beware, the block will be evaluated only once per group of values."
	values := values replace: aBlock.
	self coalesce
!

reverseDo: aBlock
	"This is refined for speed"
	
	| i |
	i := runs size.
	[i > 0]
		whileTrue: 
			[ | r v |
			v := values at: i.
			r := runs at: i.
			i := i - 1.
			[( r := r - 1) >= 0]
				whileTrue: [aBlock value: v]].
!

runsAndValuesDo: aBlock
	"Evaluate aBlock with run lengths and values from the receiver"
	^runs with: values do: aBlock.
!

runsFrom: start to: stop do: aBlock
	"Evaluate aBlock with all existing runs in the range from start to stop"
	start > stop ifTrue:[^self].
	self at: start setRunOffsetAndValue:[:firstRun :offset :firstValue|
		| run value index |
		run := firstRun.
		value := firstValue.
		index := start + (runs at: run) - offset.
		[aBlock value: value.
		index <= stop] whileTrue:[
			run := run + 1.
			value := values at: run.
			index := index + (runs at: run)]].
!

select: aBlock
	"Beware, the block will be evaluated only once per group of values."
	| newRuns newValues |
	newRuns := (Array new: runs size) writeStream.
	newValues := (Array new: values size) writeStream.
	self runsAndValuesDo: [:run :value |
		(aBlock value: value)
			ifTrue:
				[newRuns add: run.
				newValues add: value]].
	^(self class runs: newRuns contents values: newValues contents) coalesce
! !

!RunArray methodsFor: 'printing'!

printOn: aStream
	self printNameOn: aStream.
	aStream
		nextPutAll: ' runs: ';
		print: runs;
		nextPutAll: ' values: ';
		print: values
!

storeOn: aStream

	aStream nextPut: '('.
	aStream nextPutAll: self class name.
	aStream nextPutAll: ' runs: '.
	runs storeOn: aStream.
	aStream nextPutAll: ' values: '.
	values storeOn: aStream.
	aStream nextPut: ')'
!

writeOn: aStream

	aStream nextPut: runs size.
	1 to: runs size do:
		[:x |
		aStream nextPut: (runs at: x).
		aStream nextPut: (values at: x)]
!

writeScanOn: strm
	"Write out the format used for text runs in source files. (14 50 312)f1,f1b,f1LInteger +;i"

	strm nextPut: '('.
	runs do: [:rr | rr printOn: strm. strm space].
	strm skip: -1; nextPut: ')'.
	values do: [:vv |
		vv do: [:att | att writeScanOn: strm].
		strm nextPut: ','].
	strm skip: -1. "trailing comma"
! !

!RunArray methodsFor: 'private'!

at: index setRunOffsetAndValue: aBlock 
	"Supply all run information to aBlock."
	"Tolerates index=0 and index=size+1 for copyReplace: "
	| run limit offset |
	limit := runs size.
	(lastIndex == nil or: [index < lastIndex])
		ifTrue: "cache not loaded, or beyond index - start over"
			[run := 1.
			offset := index-1]
		ifFalse: "cache loaded and before index - start at cache"
			[run := lastRun.
			offset := lastOffset + (index-lastIndex)].
	[run <= limit and: [offset >= (runs at: run)]]
		whileTrue: 
			[offset := offset - (runs at: run).
			run := run + 1].
	lastIndex := index. "Load cache for next access"
	lastRun := run.
	lastOffset := offset.
	run > limit
		ifTrue: 
			["adjustment for size+1"
			run := run - 1.
			offset := offset + (runs at: run)].
	^aBlock
		value: run "an index into runs and values"
		value: offset "zero-based offset from beginning of this run"
		value: (values at: run) "value for this run"
!

fillFrom: aCollection with: aBlock
	"Evaluate aBlock with each of aCollection's elements as the argument.
	Collect the resulting values into self. Answer self."

	| newRuns newValues lastLength lastValue |
	newRuns := (Array new: aCollection size) writeStream.
	newValues := (Array new: aCollection size) writeStream.
	lastLength := 0.
	lastValue := Object new.
	aCollection do: [:each | 
		| value |
		value := aBlock value: each.
		lastValue = value
			ifTrue: [lastLength := lastLength + 1]
			ifFalse:
				[lastLength > 0
					ifTrue:
						[newRuns nextPut: lastLength.
						newValues nextPut: lastValue].
				lastLength := 1.
				lastValue := value]].
	lastLength > 0
		ifTrue:
			[newRuns nextPut: lastLength.
			newValues nextPut: lastValue].
	self setRuns: newRuns contents setValues: newValues contents
!

mapValues: mapBlock
	"NOTE: only meaningful to an entire set of runs"

	values := values collect: mapBlock
!

runs

	^runs
!

setRuns: newRuns setValues: newValues
	lastIndex := nil. "flush access cache"
	runs := newRuns asArray.
	values := newValues asArray.
!

values
	"Answer the values in the receiver."

	^values
! !

!RunArray methodsFor: 'removing'!

remove: anObject ifAbsent: exceptionBlock
	| index mustCoalesce run |
	index := values indexOf: anObject ifAbsent: [^exceptionBlock value].
	(run := runs at: index) > 1
		ifTrue: [runs at: index put: run - 1]
		ifFalse:
			[mustCoalesce := index > 1 and: [index < values size and: [(values at: index - 1) = (values at: index + 1)]].
			runs := runs copyWithoutIndex: index.
			values := values copyWithoutIndex: index.
			mustCoalesce
				ifTrue:
					[runs at: index - 1 put: (runs at: index - 1) + (runs at: index).
					runs := runs copyWithoutIndex: index.
					values := values copyWithoutIndex: index]].
	^anObject
!

removeAll
	runs := Array new.
	values := Array new
! !

!RunArray methodsFor: 'testing'!

includes: anObject
	"Answer whether anObject is one of the receiver's elements."

	^values includes: anObject
!

isSorted
	^values isSorted
!

isSortedBy: aBlock
	^values isSortedBy: aBlock
! !

!RunArray methodsFor: 'topez-common-core'!

fromSton: stonReader
    stonReader parseMapDo: [ :instVarName :value | self instVarNamed: instVarName put: value ]
!

stonOn: stonWriter
    "workaround for https://github.com/svenvc/ston/issues/4"

    stonWriter
        writeObject: self
        streamMap: [ :dictionary | self class allInstVarNames do: [ :each | dictionary at: each asSymbol put: (self instVarNamed: each) ] ]
! !

!RunArray class methodsFor: 'instance creation'!

new

	^self runs: Array new values: Array new
!

new: aSize
	^ self new: aSize withAll: nil
!

new: size withAll: value 
	"Answer a new instance of me, whose every element is equal to the
	argument, value."

	size = 0 ifTrue: [^self new].
	^self runs: (Array with: size) values: (Array with: value)
!

newFrom: aCollection 
	"Answer an instance of me containing the same elements as aCollection."

	| vruns vvalues vlastRun lastValue |
	vruns := (Array new: aCollection size // 2) writeStream.
	vvalues := (Array new: aCollection size // 2) writeStream.
	vlastRun := 0.
	lastValue := Object new.
	aCollection do: [:x | 
		lastValue = x
			ifTrue: [vlastRun := vlastRun + 1]
			ifFalse:
				[vlastRun > 0
					ifTrue:
						[vruns nextPut: vlastRun.
						vvalues nextPut: lastValue].
				vlastRun := 1.
				lastValue := x]].
	vlastRun > 0
		ifTrue:
			[vruns nextPut: vlastRun.
			vvalues nextPut: lastValue].
	^self basicNew setRuns: vruns contents setValues: vvalues contents

"	RunArray newFrom: {1. 2. 2. 3}
	{1. $a. $a. 3} as: RunArray
	({1. $a. $a. 3} as: RunArray) values
"
!

readFrom: aStream
	"Answer an instance of me as described on the stream, aStream."

	| size vruns vvalues |
	size := aStream nextWord.
	vruns := Array new: size.
	vvalues := Array new: size.
	1 to: size do:
		[:x |
		vruns at: x put: aStream nextWord.
		vvalues at: x put: aStream nextWord].
	^ self runs: vruns values: vvalues
!

runs: newRuns values: newValues 
	"Answer an instance of me with runs and values specified by the 
	arguments."

	| instance |
	instance := self basicNew.
	instance setRuns: newRuns setValues: newValues.
	^instance
! !

!RunArray class methodsFor: 'topez-common-core'!

fromSton: stonReader
    "workaround for https://github.com/svenvc/ston/issues/4"

    ^ self new
        fromSton: stonReader;
        yourself
! !

SequenceableCollection subclass: #Text
	instanceVariableNames: 'string runs'
	package: 'Kernel-Collections'!

!Text methodsFor: 'accessing'!

append: stringOrText

	self replaceFrom: string size + 1
				to: string size with: stringOrText
!

at: index

	^string at: index
!

at: index put: character

	^string at: index put: character
!

findString: aString startingAt: start 
	"Answer the index of subString within the receiver, starting at index 
	start. If the receiver does not contain subString, answer 0."

	^string findString: aString asString startingAt: start
!

findString: aString startingAt: start caseSensitive: caseSensitive
	"Answer the index of subString within the receiver, starting at index 
	start. If the receiver does not contain subString, answer 0."

	^string findString: aString asString startingAt: start caseSensitive: caseSensitive
!

initialStyle
	^TextStyle default
!

lineCount

	^ string lineCount
!

prepend: stringOrText

	self replaceFrom: 1 to: 0 with: stringOrText
!

rangeOf: attribute startingAt: index
"Answer an interval that gives the range of attribute at index position  index. An empty interval with start value index is returned when the attribute is not present at position index.  "
   ^string size = 0
      ifTrue: [index to: index - 1]
	 ifFalse: [runs rangeOf: attribute startingAt: index]
!

replaceFrom: start to: stop with: aText

	| txt |
	txt := aText asText.	"might be a string"
	string := string copyReplaceFrom: start to: stop with: txt string.
	runs := runs copyReplaceFrom: start to: stop with: txt runs
!

runs: anArray
	anArray size = string size
		ifFalse:
			[^self error: 'Some code is setting text attributes length not matching the string size'].
	runs := anArray
!

size

	^string size
! !

!Text methodsFor: 'comparing'!

= other
	"Am I equal to the other Text or String?  
	***** Warning ***** Two Texts are considered equal if they have the same characters in them.  They might have completely different emphasis, fonts, sizes, text actions, or embedded morphs.  If you need to find out if one is a true copy of the other, you must do (text1 = text2 and: [text1 runs = text2 runs])."

	other isText ifTrue:	["This is designed to run fast even for megabytes"
				^ string == other string or: [string = other string]].
	other isString ifTrue: [^ string == other or: [string = other]].
	^ false
!

howManyMatch: aString

	^ self string howManyMatch: aString
!

string
	"Answer the string representation of the receiver."

	^string
! !

!Text methodsFor: 'converting'!

asNumber
	"Answer the number created by interpreting the receiver as the textual 
	representation of a number."

	^string asNumber
!

asString
	"Answer a String representation of the textual receiver."

	^string
!

asStringOrText	
	"Answer the receiver itself."

	^self
!

asText	
	"Answer the receiver itself."

	^self
!

replaceFrom: start to: stop with: replacement startingAt: repStart 
 	"This destructively replaces elements from start to stop in the receiver starting at index, repStart, in replacementCollection. Do it to both the string and the runs."
 
 	| rep newRepRuns |
 	rep := replacement asText.	"might be a string"
 	string replaceFrom: start to: stop with: rep string startingAt: repStart.
 	newRepRuns := rep runs copyFrom: repStart to: repStart + stop - start.
	runs := runs copyReplaceFrom: start to: stop with: newRepRuns
! !

!Text methodsFor: 'copying'!

, anObject
	|aText|
	aText := anObject.
	anObject isText 
		ifFalse: [aText := anObject asText].
	^ Text string: string, aText runs: runs, aText runs
!

copyFrom: start to: stop 
	"Answer a copied subrange of the receiver."

	| realStart realStop |
	stop > self size
		ifTrue: [realStop := self size]		"handle selection at end of string"
		ifFalse: [realStop := stop].
	start < 1
		ifTrue: [realStart := 1]			"handle selection before start of string"
		ifFalse: [realStart := start].
	^self class 
		string: (string copyFrom: realStart to: realStop)
		runs: nil "(runs copyFrom: realStart to: realStop)"
!

copyReplaceAll: aString with: anotherString
	^ Text string: ((String fromString: string) replace: aString with: anotherString) runs: runs
!

copyReplaceFrom: start to: stop with: aTextOrString

	| txt |
	txt := aTextOrString asText.	"might be a string"
	^self class 
             string: (string copyReplaceFrom: start to: stop with: txt string)
             runs: (runs copyReplaceFrom: start to: stop with: txt runs)
!

copyReplaceTokens: oldSubstring with: newSubstring 
	"Replace all occurrences of oldSubstring that are surrounded
	by non-alphanumeric characters"
	^ self copyReplaceAll: oldSubstring with: newSubstring asTokens: true
	"'File asFile Files File''s File' copyReplaceTokens: 'File' with: 'Snick'"
!

deepCopy

	^ self copy "Both string and runs are assumed to be read-only"
!

postCopy
	super postCopy.
	string := string copy.
	runs := runs copy
! !

!Text methodsFor: 'printing'!

printOn: aStream
	self printNameOn: aStream.
	aStream nextPutAll: ' for '; print: string
!

storeOn: aStream

	aStream nextPutAll: '(Text string: ';
		store: string;
		nextPutAll: ' runs: ';
		store: runs;
		nextPut: ')'
! !

!Text methodsFor: 'private'!

runs

	^runs
!

setString: aString setRuns: anArray

	string := aString.
	runs := anArray
!

setString: aString setRunsChecking: aRunArray
	"Check runs and do the best you can to make them fit..."

	string := aString.
	"check the runs"
	aRunArray ifNil: [^ aString asText].
	(aRunArray isKindOf: RunArray) ifFalse: [^ aString asText].
	aRunArray runs size = aRunArray values size ifFalse: [^ aString asText].
	aRunArray size = aString size ifFalse: [^ aString asText].
	
	runs := aRunArray.
!

string: aString
	string := aString.
! !

!Text methodsFor: 'testing'!

isText
	^ true
! !

!Text class methodsFor: 'instance creation'!

fromString: aString 
  "Answer an instance of me whose characters are those of the argument, aString."
  "TODO: font style"
  ^ self
    string: aString
    attributes:{}
!

new
	^ self new: 0
!

new: stringSize

	^self fromString: (String new: stringSize)
!

streamContents: blockWithArg 
	| stream |
	stream := TextStream on: (self new: 400).
	blockWithArg value: stream.
	^ stream contents
!

string: aString attribute: att
	"Answer an instance of me whose characters are aString.
	att is a TextAttribute."

	^self string: aString attributes: (Array with: att)
!

string: aString attributes: atts
	"Answer an instance of me whose characters are those of aString.
	atts is an array of TextAttributes."

	^self string: aString runs: (RunArray new: aString size withAll: atts)
!

string: aString emphasis: emphasis
	"This is an old method that is mainly used by old applications"

	emphasis isNumber ifTrue:
		[Halt halt: 'Numeric emphasis is not supported'.
		"But if you proceed, we will do our best to give you what you want..."
		^ self string: aString runs: (RunArray new: aString size withAll: 
			(Array with: (TextFontChange new fontNumber: emphasis)))].
	^ self string: aString attributes: emphasis
!

string: aString runs: anArray
 
	^self basicNew setString: aString setRuns: anArray
! !

!Text class methodsFor: 'topez-common-core'!

fromSton: stonReader
    "workaround for https://github.com/svenvc/ston/issues/4"

    ^ self new
        fromSton: stonReader;
        yourself
! !

Collection subclass: #Set
	instanceVariableNames: 'elements'
	package: 'Kernel-Collections'!
!Set commentStamp!
I represent an unordered set of objects without duplicates.!

!Set methodsFor: 'accessing'!

size
	^elements size
! !

!Set methodsFor: 'adding/removing'!

add: anObject
	<
		var found;
		for(var i=0; i < self['@elements'].length; i++) {
			if(anObject == self['@elements'][i]) {
				found = true;
				break;
			}
		}
		if(!!found) {self['@elements'].push(anObject)}
	>
!

remove: anObject
	elements remove: anObject
! !

!Set methodsFor: 'comparing'!

= aCollection
	self class = aCollection class ifFalse: [ ^ false ].
	self size = aCollection size ifFalse: [ ^ false ].
	self do: [:each | (aCollection includes: each) ifFalse: [ ^ false ] ].
	^ true
! !

!Set methodsFor: 'converting'!

asArray
	^elements copy
! !

!Set methodsFor: 'enumerating'!

collect: aBlock
	^self class withAll: (elements collect: aBlock)
!

detect: aBlock ifNone: anotherBlock
	^elements detect: aBlock ifNone: anotherBlock
!

do: aBlock
	elements do: aBlock
!

select: aBlock
	| collection |
	collection := self class new.
	self do: [:each |
		(aBlock value: each) ifTrue: [
			collection add: each]].
	^collection
! !

!Set methodsFor: 'initialization'!

initialize
	super initialize.
	elements := #()
! !

!Set methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	
	aStream nextPutAll: ' ('.
	self 
		do: [ :each | each printOn: aStream ]
		separatedBy: [ aStream nextPutAll: ' ' ].
	aStream nextPutAll: ')'
! !

!Set methodsFor: 'testing'!

includes: anObject
	^elements includes: anObject
! !

Object subclass: #Queue
	instanceVariableNames: 'read readIndex write'
	package: 'Kernel-Collections'!
!Queue commentStamp!
I am a one-sided queue.

## Usage

Use `#nextPut:` to add items to the queue.
Use `#next` or `#nextIfAbsent:` to get (and remove) the next item in the queue.

## Implementation notes

A Queue uses two OrderedCollections inside,
`read` is at the front, is not modified and only read using `readIndex`.
`write` is at the back and is appended new items.
When `read` is exhausted, `write` is promoted to `read` and new `write` is created.

As a consequence, no data moving is done by me, write appending may do data moving
when growing `write`, but this is left to engine to implement as good as it chooses to.!

!Queue methodsFor: 'accessing'!

next
	^self nextIfAbsent: [ self error: 'Cannot read from empty Queue.' ]
!

nextIfAbsent: aBlock
	| result |
	result := read at: readIndex ifAbsent: [
		write isEmpty ifTrue: [
			readIndex > 1 ifTrue: [ read := #(). readIndex := 1 ].
			^aBlock value ].
		read := write.
		readIndex := 1.
		write := OrderedCollection new.
		read first ].
	read at: readIndex put: nil.
	readIndex := readIndex + 1.
	^result
!

nextPut: anObject
	write add: anObject
! !

!Queue methodsFor: 'initialization'!

initialize
	super initialize.
	read := OrderedCollection new.
	write := OrderedCollection new.
	readIndex := 1
! !

Object subclass: #RegularExpression
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!RegularExpression commentStamp!
I represent a regular expression object. My instances are JavaScript `RegExp` object.!

!RegularExpression methodsFor: 'evaluating'!

compile: aString
	<return self.compile(aString)>
!

exec: aString
	<return self.exec(aString) || nil>
!

test: aString
	<return self.test(aString)>
! !

!RegularExpression class methodsFor: 'instance creation'!

fromString: aString
		^self fromString: aString flag: ''
!

fromString: aString flag: anotherString
	<return new RegExp(aString, anotherString)>
! !

Object subclass: #Stream
	instanceVariableNames: 'collection position streamSize'
	package: 'Kernel-Collections'!
!Stream commentStamp!
I represent an accessor for a sequence of objects. This sequence is referred to as my "contents".
My instances are read/write streams to the contents sequence collection.!

!Stream methodsFor: 'accessing'!

collection
	^collection
!

contents
	^self collection
		copyFrom: 1
		to: self streamSize
!

position
	^position ifNil: [position := 0]
!

position: anInteger
	position := anInteger
!

setCollection: aCollection
	collection := aCollection
!

setStreamSize: anInteger
	streamSize := anInteger
!

size
	^self streamSize
!

streamSize
	^streamSize
! !

!Stream methodsFor: 'actions'!

close
!

flush
!

reset
	self position: 0
!

resetContents
	self reset.
	self setStreamSize: 0
! !

!Stream methodsFor: 'enumerating'!

do: aBlock
	[self atEnd] whileFalse: [aBlock value: self next]
! !

!Stream methodsFor: 'positioning'!

setToEnd
	self position: self size
!

skip: anInteger
	self position: ((self position + anInteger) min: self size max: 0)
! !

!Stream methodsFor: 'reading'!

next
	^self atEnd
		ifTrue: [nil]
		ifFalse: [
			self position: self position + 1.
			collection at: self position]
!

next: anInteger
	| tempCollection |
	tempCollection := self collection class new.
	anInteger timesRepeat: [
		self atEnd ifFalse: [
		tempCollection add: self next]].
	^tempCollection
!

peek
	^self atEnd ifFalse: [
		self collection at: self position + 1]
!

print: anObject
	"Have anObject print itself on the receiver."
	anObject printOn: self
! !

!Stream methodsFor: 'testing'!

atEnd
	^self position = self size
!

atStart
	^self position = 0
!

isEmpty
	^self size = 0
!

isStream
	^ true
! !

!Stream methodsFor: 'writing'!

<< anObject
	self write: anObject
!

nextPut: anObject
	self position: self position + 1.
	self collection at: self position put: anObject.
	self setStreamSize: (self streamSize max: self position)
!

nextPutAll: aCollection
	aCollection do: [:each |
		self nextPut: each]
!

nextPutString: aString
	self nextPut: aString
!

write: anObject
	anObject putOn: self
! !

!Stream class methodsFor: 'instance creation'!

on: aCollection
		^self new
		setCollection: aCollection;
		setStreamSize: aCollection size;
		yourself
! !

Stream subclass: #StringStream
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!StringStream commentStamp!
I am a Stream specific to `String` objects.!

!StringStream methodsFor: 'reading'!

next: anInteger
	| tempCollection |
	tempCollection := self collection class new.
	anInteger timesRepeat: [
		self atEnd ifFalse: [
		tempCollection := tempCollection, self next]].
	^tempCollection
!

nextLine
	|line nextChar|
	self atEnd ifTrue: [^ nil].
	line := ''.
	[nextChar := self next.
		nextChar ~~ Character cr] whileTrue: [
			line := line, nextChar.
			self atEnd ifTrue: [^ line]].
	^ line
! !

!StringStream methodsFor: 'writing'!

cr
	^self nextPutAll: String cr
!

crlf
	^self nextPutAll: String crlf
!

lf
	^self nextPutAll: String lf
!

nextPut: aString
	self nextPutAll: aString
!

nextPutAll: aString
	| pre post |
	self atEnd ifTrue: [ self setCollection: self collection, aString ] ifFalse: [
		pre := self collection copyFrom: 1 to: self position.
		post := self collection copyFrom: (self position + 1 + aString size) to: self collection size.
		self setCollection: pre, aString, post
	].
	self position: self position + aString size.
	self setStreamSize: (self streamSize max: self position)
!

nextPutString: aString
	self nextPutAll: aString
!

space
	self nextPut: ' '
!

tab
	^self nextPutAll: String tab
! !

StringStream subclass: #TextStream
	instanceVariableNames: ''
	package: 'Kernel-Collections'!

!TextStream methodsFor: 'not yet classified'!

reset
	self collection setString: '' setRuns: Array new.
! !

!TextStream class methodsFor: 'instance creation'!

on: aCollection
		^self basicNew
		setCollection: aCollection;
		setStreamSize: aCollection size;
		yourself
! !

Object subclass: #TextAttribute
	instanceVariableNames: ''
	package: 'Kernel-Collections'!

!TextAttribute methodsFor: 'not yet classified'!

dominates: another
	"Subclasses may override condense multiple attributes"
	^ false
!

emphasisCode
	"Subclasses may override to add bold, italic, etc"
	^ 0
!

emphasizeScanner: scanner
	"Subclasses may override to set, eg, font, color, etc"
!

reset
	"Allow subclasses to prepare themselves for merging attributes"
!

set
	"Respond true to include this attribute (as opposed to, eg, a bold
	emphasizer that is clearing the property"
	^ true
! !

TextAttribute subclass: #TextColor
	instanceVariableNames: 'color'
	package: 'Kernel-Collections'!

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
	package: 'Kernel-Collections'!

!TextEmphasis methodsFor: 'accessing'!

dominates: other
	(emphasisCode = 0 and: [other dominatedByCmd0]) ifTrue: [^ true].
	^ (other class == self class)
		and: [emphasisCode = other emphasisCode]
!

emphasisCode
	^ emphasisCode
!

emphasisCode: int
	emphasisCode := int.
	setMode := true
!

set
	^ setMode and: [emphasisCode ~= 0]
!

turnOff
	setMode := false
! !

!TextEmphasis methodsFor: 'comparing'!

= other 
	^ (other class == self class) 
		and: [other emphasisCode = emphasisCode]
!

hash
	"#hash is re-implemented because #= is re-implemented"
	^emphasisCode hash
! !

!TextEmphasis methodsFor: 'printing'!

printOn: strm
	super printOn: strm.
	strm nextPutAll: ' code: '; print: emphasisCode
! !

!TextEmphasis methodsFor: 'styling'!

emphasizeScanner: scanner
	"Set the emphasist for text scanning"
	scanner addEmphasis: emphasisCode
!

writeScanOn: strm

	emphasisCode = 1 ifTrue: [strm nextPut: 'b'].
	emphasisCode = 2 ifTrue: [strm nextPut: 'i'].
	emphasisCode = 0 ifTrue: [strm nextPut: 'n'].
	emphasisCode = 16 ifTrue: [strm nextPut: '='].
	emphasisCode = 4 ifTrue: [strm nextPut: 'u'].
! !

!TextEmphasis methodsFor: 'testing'!

dominatedByCmd0
	"Cmd-0 should turn off emphasis"
	^ true
! !

!TextEmphasis class methodsFor: 'not yet classified'!

bold
	^ self new emphasisCode: 1
!

italic
	^ self new emphasisCode: 2
!

narrow
	"^ TextKern kern: -1" "TextKern is not yet implemented"
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

