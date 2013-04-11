Smalltalk current createPackage: 'STON-Core'!
Object subclass: #STON
	instanceVariableNames: ''
	package: 'STON-Core'!

!STON class methodsFor: 'accessing'!

jsonWriter
	^ STONWriter new
		  jsonMode: true;
		  yourself
!

listClass
	^ Array
!

mapClass
	^ Dictionary
!

reader
	^ STONReader new
!

writer
	^ STONWriter new
! !

!STON class methodsFor: 'convenience'!

fromStream: readStream
	^ (self reader on: readStream) next
!

fromString: string
	^ self fromStream: string readStream
!

put: object asJsonOnStream: stream
	(self jsonWriter on: stream) nextPut: object
!

put: object asJsonOnStreamPretty: stream
	(self jsonWriter on: stream)
		prettyPrint: true; 
		nextPut: object
!

put: object onStream: stream
	(self writer on: stream) nextPut: object
!

put: object onStreamPretty: stream
	(self writer on: stream)
		prettyPrint: true; 
		nextPut: object
!

toJsonString: object
	^ String streamContents: [ :stream |
		self put: object asJsonOnStream: stream ]
!

toJsonStringPretty: object
	^ String streamContents: [ :stream |
		self put: object asJsonOnStreamPretty: stream ]
!

toString: object
	^ String streamContents: [ :stream |
		self put: object onStream: stream ]
!

toStringPretty: object
	^ String streamContents: [ :stream |
		self put: object onStreamPretty: stream ]
! !

Object subclass: #STONReader
	instanceVariableNames: 'readStream objects classes unresolvedReferences stringStream'
	package: 'STON-Core'!

!STONReader methodsFor: 'error handling'!

error: aString
	^ STONReaderError signal: aString
! !

!STONReader methodsFor: 'initialize-release'!

close
	readStream ifNotNil: [
		readStream close.
		readStream := nil ]
!

initialize
	super initialize.
	"TODO: had IdentityDicitionary here before"
	objects := Dictionary new.
	classes := Dictionary new.
	unresolvedReferences := 0
!

on: aReadStream
	readStream := aReadStream
! !

!STONReader methodsFor: 'parsing'!

parseList
	| reference array |
	reference := self newReference.
	array := STON listClass streamContents: [ :stream |
		self parseListDo: [ :each | stream nextPut: each ] ].
	self setReference: reference to: array.
	^ array
!

parseListDo: block
	| index |
	self expectChar: '['.
	(self matchChar: ']') 
		ifTrue: [ ^ self ].
	index := 1.
	[ readStream atEnd ] whileFalse: [
		block cull: self parseValue cull: index.
		(self matchChar: ']') 
			ifTrue: [ ^ self ].
		index := index + 1.
		self expectChar: ',' ].
	self error: 'end of list expected'
!

parseListSingleton
	| value |
	value := nil.
	self parseListDo: [ :each :index |
		index = 1 ifTrue: [ value := each ] ].
	^ value
!

parseMap
	| map |
	map := STON mapClass new.
	self storeReference: map.
	self parseMapDo: [ :key :value |
		map at: key put: value ].
	^ map
!

parseMapDo: block
	self expectChar: '{'.
	(self matchChar: '}')
		ifTrue: [ ^ self ].
	[ readStream atEnd ] whileFalse: [ | name value |
		name := self parseValue.
		(name isString or: [ name isNumber ])
			ifFalse: [ self error: 'unexpected property name type' ].
		self expectChar: ':'.
		value := self parseValue.
		block value: name value: value.
		(self matchChar: '}') 
			ifTrue: [ ^ self ].
		self expectChar: ',' ].
	self error: 'end of map expected'
!

parseObject
	| targetClass reference object |
	targetClass := self parseClass.
	reference := self newReference.
	object := targetClass fromSton: self.
	self setReference: reference to: object.
	^ object
!

parseValue
	| char |
	readStream atEnd ifFalse: [ 
		(self isClassStartChar: (char := readStream peek)) 
			ifTrue: [ ^ self parseObject ].
		char = '{'
			ifTrue: [ ^ self parseMap ].
		char = '['
			ifTrue: [ ^ self parseList ].
		(char = '''' or: [ char = '"' ])
			ifTrue: [ ^ self parseString ].
		char = '#'
			ifTrue: [ ^ self parseSymbol ].
		char = '@'
			ifTrue: [ ^ self parseReference ].
		(char = '-' or: [ char isDigit ])
			ifTrue: [ ^ self parseNumber ].
		self parseConstantDo: [ :value | ^ value ] ].
	self error: 'invalid input'
! !

!STONReader methodsFor: 'parsing-internal'!

parseCharacter
	| char |
	(char := readStream next) = '\' 
		ifFalse: [ ^ char ].
	(#( '''' '"' '/' '\') includes: (char := readStream next))
		ifTrue: [ ^ char ].
	char = 'b'
		ifTrue: [ ^ Character backspace ].
	char = 'f'
		ifTrue: [ ^ Character newPage ].
	char = 'n'
		ifTrue: [ ^ Character lf ].
	char = 'r'
		ifTrue: [ ^ Character cr ].
	char = 't'
		ifTrue: [ ^ Character tab ].
	char = 'u'
		ifTrue: [ ^ self parseCharacterHex ].
	self error: 'invalid escape character \' , (String with: char)
!

parseCharacterHex
	| value |
	value := self parseCharacterHexDigit.
	3 timesRepeat: [ 
		value := (value << 4) + self parseCharacterHexDigit ].
	^ Character codePoint: value
!

parseCharacterHexDigit
	| digit |
	readStream atEnd ifFalse: [ 
		digit := readStream next asciiValue.
		(digit between: "$0" 48 and: "$9" 57)
			ifTrue: [ ^ digit - 48 ].
		(digit between: "$A" 65 and: "$F" 70)
			ifTrue: [ ^ digit - 55 ].
		(digit between: "$a" 97 and: "$f" 102)
			ifTrue: [ ^ digit - 87 ] ].
	self error: 'hex-digit expected'
!

parseClass
	| className |
	className := self stringStreamContents: [ :stream |
		[ readStream atEnd not and: [ self isClassChar: readStream peek ] ] whileTrue: [ 
			stream nextPut: readStream next ] ].
	self consumeWhitespace.
	^ self lookupClass: className asSymbol
!

parseConstantDo: block
	"Parse and consume either true|false|nil|null and execute block 
	or else do nothing (but do not back up).
	Hand written implementation to avoid the use of #position:"
	
	(readStream peek = 't')
		ifTrue: [
			^ self match: 'true' do: [ block value: true ] ].
	(readStream peek = 'f')
		ifTrue: [
			^ self match: 'false' do: [ block value: false ] ].
	(readStream peek = 'n')
		ifTrue: [
			readStream next.
			(readStream peek = 'i')
				ifTrue: [
					self match: 'il' do: [ block value: nil ] ].
			(readStream peek = 'u')
				ifTrue: [
					self match: 'ull' do: [ block value: nil ] ] ]
!

parseNumber
	| negated number |
	negated := readStream peek = '-'.
	negated ifTrue: [ readStream next ].
	number := self parseNumberInteger.
	(readStream peek = '.') ifTrue: [
		readStream next. 
		number := number + self parseNumberFraction ].
	(readStream peek = 'e' or: [ readStream peek = 'E' ]) ifTrue: [
		readStream next.
		number := number * self parseNumberExponent ].
	negated ifTrue: [ number := number negated ].
	self consumeWhitespace.
	^ number
!

parseNumberExponent
	| number negated |
	number := 0.
	negated := readStream peek = '-'.
	(negated or: [ readStream peek = '+' ]) ifTrue: [ readStream next ].
	[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [ 
		number := 10 * number + readStream next digitValue ].
	negated ifTrue: [ number := number negated ].
	^ 10 raisedTo: number
!

parseNumberFraction
	| number power |
	number := 0.
	power := 1.0.
	[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [
		number := 10 * number + readStream next digitValue.
		power := power * 10.0 ].
	^ number / power
!

parseNumberInteger
	| number |
	number := 0.
	[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [ 
		number := 10 * number + readStream next digitValue ].
	^ number
!

parseReference
	| index object |
	self expectChar: '@'.
	index := self parseNumberInteger.
	self consumeWhitespace.
	object := self resolveReferenceIndex: index.
	object isStonReference 
		ifTrue: [ unresolvedReferences := unresolvedReferences + 1 ].
	^ object
!

parseString
	^ self parseStringInternal
!

parseStringInternal
  | result delimiter |
  delimiter := readStream next.
  (delimiter = '''' or: [ delimiter = '"' ])
    ifFalse: [ self error: ''' or " expected' ].
  result := self
    stringStreamContents: [ :stream | [ readStream atEnd or: [ readStream peek = delimiter ] ] whileFalse: [ stream nextPut: self parseCharacter ] ].
  self expectChar: delimiter.
  "TODO: ^ result convertFromEncoding: #'utf-8'"
  ^ result
!

parseSymbol
	| string |
	self expectChar: '#'.
	readStream peek = ''''
		ifTrue: [ ^ self parseStringInternal asSymbol ].
	string := self stringStreamContents: [ :stream |
		[ readStream atEnd not and: [ self isSimpleSymbolChar: readStream peek ] ] whileTrue: [
			stream nextPut: readStream next ] ].
	string isEmpty
		ifFalse: [ 
			self consumeWhitespace.
			^ string asSymbol ].
	self error: 'unexpected input'
! !

!STONReader methodsFor: 'private'!

consumeWhitespace
	"Strip whitespaces from the input stream."

	[ readStream atEnd not and: [ readStream peek isSeparator ] ]
		whileTrue: [ readStream next ]
!

expectChar: character
	"Expect character and consume input and optional whitespace at the end,
	 throw an error otherwise."

	(self matchChar: character)
		ifFalse: [ self error: character asString, ' expected' ]
!

isClassChar: char
	^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' includes: char
!

isClassStartChar: char
	^ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' includes: char
!

isSimpleSymbolChar: char
	^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./' includes: char
!

lookupClass: name
	Smalltalk current 
		at: name 
		ifPresent: [ :cls | ^ cls ].
	^ classes 
		at: name 
		ifAbsentPut: [
			Object allSubclasses 
				detect: [ :cls | cls stonName == name ] 
				ifNone: [ self error: 'Cannot resolve cls named ', name printString ] ]
!

match: string do: block
	"Try to read and consume string and execute block if successful.
	Else do nothing (but do not back up)"
	 
	(string allSatisfy: [ :each | self matchChar: each ] )
		ifTrue: [ block value ]
!

matchChar: character
	"Tries to match character, consume input and 
	answer true if successful and consumes whitespace at the end."
	
	^ readStream peek = character
		ifTrue: [
			readStream next.
			self consumeWhitespace.
			true ]
		ifFalse: [
			false ]
!

newReference
	| index reference |
	index := objects size + 1.
	reference := STONReference index: index.
	objects at: index put: reference.
	^ reference
!

processSubObjectsOf: object
	object stonProcessSubObjects: [ :each |
		each isStonReference 
			ifTrue: [ 
				self resolveReference: each ]
			ifFalse: [
				self processSubObjectsOf: each. 
				each ] ]
!

resolveReference: reference
	^ self resolveReferenceIndex: reference index
!

resolveReferenceIndex: index
	^ objects at: index
!

setReference: reference to: object
	objects at: reference index put: object
!

storeReference: object
	| index |
	index := objects size + 1.
	objects at: index put: object.
	^ index
!

stringStreamContents: block
	stringStream ifNil: [ 
		stringStream := (String new: 32) writeStream ].
	stringStream reset.
	block value: stringStream.
	^ stringStream contents
! !

!STONReader methodsFor: 'public'!

next
	| object |
	self consumeWhitespace.
	object := self parseValue.
	unresolvedReferences > 0
		ifTrue: [ self processSubObjectsOf: object ].
	^ object
! !

!STONReader methodsFor: 'testing'!

atEnd
	^ readStream atEnd
! !

!STONReader class methodsFor: 'instance creation'!

on: readStream
	^ self new
		on: readStream;
		yourself
! !

Error subclass: #STONReaderError
	instanceVariableNames: ''
	package: 'STON-Core'!

Object subclass: #STONReference
	instanceVariableNames: 'index'
	package: 'STON-Core'!

!STONReference methodsFor: 'accessing'!

index
	^ index
!

index: integer
	index := integer
! !

!STONReference methodsFor: 'comparing'!

= anObject
	^ self class == anObject class and: [ self index = anObject index ]
!

hash
	^ index hash
! !

!STONReference methodsFor: 'testing'!

isStonReference
	^ true
! !

!STONReference class methodsFor: 'instance creation'!

index: integer
	^ self new
		index: integer;
		yourself
! !

Object subclass: #STONStreamWriter
	instanceVariableNames: 'writer first'
	package: 'STON-Core'!

!STONStreamWriter methodsFor: 'initialize-release'!

initialize
	super initialize.
	first := true
!

on: stonWriter
	writer := stonWriter
! !

!STONStreamWriter class methodsFor: 'instance creation'!

on: stonWriter
	^ self new
		on: stonWriter;
		yourself
! !

STONStreamWriter subclass: #STONListWriter
	instanceVariableNames: ''
	package: 'STON-Core'!

!STONListWriter methodsFor: 'accessing'!

add: anObject
	first ifTrue: [ first := false ] ifFalse: [ writer listElementSeparator ].
	writer nextPut: anObject
! !

STONListWriter subclass: #STONShortListWriter
	instanceVariableNames: ''
	package: 'STON-Core'!

!STONShortListWriter methodsFor: 'accessing'!

add: anObject
	first ifTrue: [ first := false ] ifFalse: [ writer shortListElementSeparator ].
	writer nextPut: anObject
! !

STONStreamWriter subclass: #STONMapWriter
	instanceVariableNames: ''
	package: 'STON-Core'!

!STONMapWriter methodsFor: 'accessing'!

at: key put: value
	first ifTrue: [ first := false ] ifFalse: [ writer mapElementSeparator ].
	writer encodeKey: key value: value
! !

Object subclass: #STONWriter
	instanceVariableNames: 'writeStream prettyPrint jsonMode referencePolicy level objects'
	package: 'STON-Core'!

!STONWriter methodsFor: 'initialize-release'!

close
	writeStream ifNotNil: [
		writeStream close.
		writeStream := nil ]
!

initialize
	super initialize.
	prettyPrint := false.
	level := 0.
	referencePolicy := #normal.
	jsonMode := false.
	"TODO: objects := IdentityDictionary new"
	objects := Dictionary new
!

jsonMode: boolean
	jsonMode := boolean
!

on: aWriteStream
	writeStream := aWriteStream
!

prettyPrint: boolean
	prettyPrint := boolean
!

referencePolicy: policy
	self assert: ( #(#normal #ignore #error) includes: policy ).
	referencePolicy := policy
!

reset
	objects removeAll
! !

!STONWriter methodsFor: 'private'!

encodeCharacter: char
	| code encoding |
	((code := char codePoint) < 127 and: [ (encoding := self class stonCharacters at: code + 1) notNil ])
		ifTrue: [ 
			encoding = #pass
				ifTrue: [ writeStream nextPut: char ]
				ifFalse: [ writeStream nextPutAll: encoding ] ]
		ifFalse: [ 
			writeStream nextPutAll: '\u'.
			code printOn: writeStream base: 16 nDigits: 4 ]
!

encodeKey: key value: value
	self nextPut: key.
	self prettyPrintSpace.
	writeStream nextPut: ':'.
	self prettyPrintSpace.
	self nextPut: value
!

encodeString: string
  | encodedString |
  "TODO: encodedString := string convertToEncoding: #'utf-8'."
  encodedString := string.
  writeStream
    nextPut:
      (jsonMode
        ifTrue: [ '"' ]
        ifFalse: [ '''' ]).
  encodedString do: [ :each | self encodeCharacter: each ].
  writeStream
    nextPut:
      (jsonMode
        ifTrue: [ '"' ]
        ifFalse: [ '''' ])
!

indentedDo: block
	level := level + 1.
	block value.
	level := level - 1
!

isSimpleSymbol: symbol
	^ (symbol class 
		findFirstInString: symbol 
		inSet: STONSimpleSymbolCharacters 
		startingAt: 1) = 0
!

listElementSeparator
	writeStream nextPut: ','.
	self newlineIndent
!

mapElementSeparator
	writeStream nextPut: ','.
	self newlineIndent
!

newlineIndent
	prettyPrint ifTrue: [ 
		writeStream nextPut: Character cr.
		level timesRepeat: [ writeStream tab ] ]
!

prettyPrintSpace
	prettyPrint ifTrue: [ writeStream space ]
!

shortListElementSeparator
	writeStream nextPut: ','.
	self prettyPrintSpace
!

with: object do: block
	| index |
	referencePolicy = #ignore 
		ifTrue: [ ^ block value ].
	(index := objects at: object ifAbsent: [ nil ]) notNil
		ifTrue: [
			referencePolicy = #error
				ifTrue: [ ^ STONWriterError signal: 'Shared reference detected' ].
			self writeReference: index ]
		ifFalse: [
			index := objects size + 1.
			objects at: object put: index.
			block value ]
! !

!STONWriter methodsFor: 'public'!

nextPut: anObject
	anObject stonOn: self
! !

!STONWriter methodsFor: 'writing'!

encodeList: elements
	writeStream nextPut: '['.
	elements isEmpty
		ifTrue: [
			self prettyPrintSpace ]
		ifFalse: [
			self indentedDo: [
				self newlineIndent.
				elements 
					do: [ :each | self nextPut: each ]
					separatedBy: [ self listElementSeparator ] ].
			self newlineIndent ].
	writeStream nextPut: ']'
!

encodeMap: pairs
	| first |
	first := true.
	writeStream nextPut: '{'.
	pairs isEmpty
		ifTrue: [
			self prettyPrintSpace ]
		ifFalse: [
			self indentedDo: [
				self newlineIndent.
				pairs keysAndValuesDo: [ :key :value |
					first 
						ifTrue: [ first := false ] 
						ifFalse: [ self mapElementSeparator ].
					self encodeKey: key value: value ] ].
			self newlineIndent ].
	writeStream nextPut: '}'
!

writeBoolean: boolean
	writeStream print: boolean
!

writeFloat: float
	writeStream print: float
!

writeInteger: integer
	writeStream print: integer
!

writeList: collection
	self with: collection do: [ 
		self encodeList: collection ]
!

writeMap: hashedCollection
	self with: hashedCollection do: [ 
		self encodeMap: hashedCollection ]
!

writeNull
	jsonMode
		ifTrue: [ writeStream nextPutAll: 'null' ]
		ifFalse: [ writeStream print: nil ]
!

writeObject: anObject do: block
	(jsonMode and: [ anObject class ~= STON listClass and: [ anObject class ~= STON mapClass ] ])
		ifTrue: [ STONWriterError signal: 'Wrong object class for JSON mode' ].
	self with: anObject do: [
		writeStream nextPutAll: anObject class stonName.
		self prettyPrintSpace.
		block value ]
!

writeObject: object listSingleton: element
	self writeObject: object do: [
		writeStream nextPut: '['.
		self 
			prettyPrintSpace;
			nextPut: element;
			prettyPrintSpace.
		writeStream nextPut: ']' ]
!

writeObject: object streamList: block
	self writeObject: object do: [ | listWriter |
		listWriter := STONListWriter on: self.
		writeStream nextPut: '['.
		self indentedDo: [
			self newlineIndent.
			block value: listWriter ].
		self newlineIndent.
		writeStream nextPut: ']' ]
!

writeObject: object streamMap: block
	self writeObject: object do: [ | mapWriter |
		mapWriter := STONMapWriter on: self.
		writeStream nextPut: '{'.
		self indentedDo: [
			self newlineIndent.
			block value: mapWriter ].
		self newlineIndent.
		writeStream nextPut: '}' ]
!

writeObject: object streamShortList: block
	self writeObject: object do: [ | listWriter |
		listWriter := STONShortListWriter on: self.
		writeStream nextPut: '['.
		self indentedDo: [
			self prettyPrintSpace.
			block value: listWriter ].
		self prettyPrintSpace.
		writeStream nextPut: ']' ]
!

writeReference: index
	writeStream
		nextPut: '@';
		print: index
!

writeString: string
	self encodeString: string
!

writeSymbol: symbol
	jsonMode
		ifTrue: [
			self writeString: symbol ]
		ifFalse: [
			writeStream nextPut: '#'.
			(self isSimpleSymbol: symbol)
				ifTrue: [
					writeStream nextPutAll: symbol ]
				ifFalse: [
					self encodeString: symbol ] ]
! !

STONWriter class instanceVariableNames: 'sTONCharacters sTONSimpleSymbolCharacters'!

!STONWriter class methodsFor: 'accessing'!

stonCharacters
	^ sTONCharacters
!

stonSimpleSymbolCharacters
	^ sTONSimpleSymbolCharacters
! !

!STONWriter class methodsFor: 'class initialization'!

initialize
	self initializeSTONCharacters.
	self initializeSTONSimpleSymbolCharacters
!

initializeSTONCharacters
	| escapes |
	sTONCharacters := Array new: 127.
	32 to: 126 do: [ :each | 
		sTONCharacters at: each + 1 put: #pass ].
	escapes := #( 8 '\b' 9 '\t' 10 '\n' 12 '\f' 13 '\r' 34 '\"' 39 '\''' 92 '\\' ).
	1 to: escapes size - 1 by: 2 do: [ :index | 
		sTONCharacters 
			at: (escapes at: index) + 1
			put: (escapes at: index + 1) ]
!

initializeSTONSimpleSymbolCharacters
	"STONSimpleSymbolCharacters asArray collectWithIndex: [ :each :index |
		each isZero ifTrue: [ (index - 1) asCharacter ] ]."
		
	sTONSimpleSymbolCharacters := Array new: 256 withAll: 1.
	1 to: 256 do: [ :each | | char |
		char := (each - 1) asCharacter.
		(self isSimpleSymbolChar: char)
			ifTrue: [ 
				sTONSimpleSymbolCharacters at: each put: 0 ] ]
! !

!STONWriter class methodsFor: 'instance creation'!

on: writeStream
	^ self new
		on: writeStream;
		yourself
! !

!STONWriter class methodsFor: 'private'!

isSimpleSymbolChar: char
	^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./' includes: char
! !

Error subclass: #STONWriterError
	instanceVariableNames: ''
	package: 'STON-Core'!

