Smalltalk current createPackage: 'Topez-Client-Session'!
Object subclass: #GciSession
	instanceVariableNames: 'number gemNRS stoneNRS userID clientForwarderCache'
	package: 'Topez-Client-Session'!

!GciSession methodsFor: 'accessing'!

gemHost

	gemNRS isNil ifTrue: [^''].
	^((gemNRS subStrings: '#') first subStrings: '@') last.
!

gemNRS: aString

	gemNRS := aString.
!

gemType

	^gemNRS isNil
		ifTrue: ['Linked']
		ifFalse: ['Remote'].
!

library

	^ GciLibrary current.
!

number

	^number.
!

stoneHost

	^((stoneNRS subStrings: '#') first subStrings: '@') last.
!

stoneNRS: aString

	stoneNRS := aString.
!

stoneName

	^(stoneNRS subStrings: '!!') last.
!

userID

	^userID.
!

userID: aString

	userID := aString.
! !

!GciSession methodsFor: 'finalization'!

actAsExecutor
	"Prepare the receiver to act as executor for any resources associated with it"

	self release.
	super actAsExecutor
!

clientForwarderCache
    ^ clientForwarderCache
!

clientObjectForwardedFrom: anOopType
    ^ self clientForwarderCache at: anOopType ifAbsent: [ ^ nil ]
!

registerClientObjectForwarder: aClientObject
	| oopType |
	oopType := self rawExecuteStringNB: 'ClientForwarder new' envId: 0.
	self clientForwarderCache at: oopType put: aClientObject.
	^ oopType
!

unregisterClientObjectForwarder: aClientObject
	| oopType |
	oopType := self clientForwarderCache keyAtValue: aClientObject.
	self clientForwarderCache removeKey: oopType.
	^ oopType
! !

!GciSession methodsFor: 'initialize'!

initialize
	number := 0.
	self finalizationRegistry add: self.
	"TODO: why WeakValueDictionary?"
	clientForwarderCache := Dictionary new
!

login: gsPassword 

	^self
		login: gsPassword
		osUser: '' 
		osPassword: ''.
!

login: gsPassword osUser: osUser osPassword: osPassword
	| result |
	result := self library
		apiGciSetNet: stoneNRS
			a: osUser
			a: osPassword
			a: gemNRS;
		apiGciLogin: userID a: gsPassword.
	result ifTrue: [ 
		self class fullCompressionEnabled
			ifTrue: [ self library apiGciEnableFullCompression ].
		number := self library apiGciGetSessionId ] .
  ^ result
! !

!GciSession methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream space; nextPut: '['; nextPutAll: number printString; nextPut: ']'
! !

!GciSession methodsFor: 'private'!

finalize

	self release.
	super finalize.
!

release
    number := nil
! !

!GciSession methodsFor: 'private gci calls'!

getSessionNumber
	number == nil
    	ifTrue: [ ^ self error: 'Session no longer logged in.' ].
	^ number
! !

!GciSession methodsFor: 'public gci calls'!

executeStringExpectingString: aString envId: envId
	"TODO: make non-blocking to support abort from JavaScript"
	^ self library apiGciExecuteStrExpectingStr: aString a: self library oopNil a: envId
! !

!GciSession methodsFor: 'testing'!

isValid

	^number ~~ nil
! !

GciSession class instanceVariableNames: 'fullCompressionEnabled'!

!GciSession class methodsFor: 'accessing'!

disableFullCompression
	"self disableFullCompression"
	"takes effect at next login"

	fullCompressionEnabled := false.
!

enableFullCompression
	"self enableFullCompression"
	"takes effect at next login"

	fullCompressionEnabled := true.
!

fullCompressionEnabled

	fullCompressionEnabled == nil ifTrue: [ fullCompressionEnabled := false ].
	^ fullCompressionEnabled
! !

Error subclass: #GsError
	instanceVariableNames: 'session'
	package: 'Topez-Client-Session'!

!GsError methodsFor: 'accessing'!

session
	^ session
!

session: aGciSession
	session := aGciSession.
! !

GsError subclass: #GsRuntimeError
	instanceVariableNames: ''
	package: 'Topez-Client-Session'!

Object subclass: #OGCustomSessionDescription
	instanceVariableNames: 'name stoneHost stoneName gemHost netLDI gemTask userId password osUserId osPassword dataDirectory backupDirectory gemstoneVersion gciLibraryName adornmentColor'
	package: 'Topez-Client-Session'!

!OGCustomSessionDescription methodsFor: 'accessing'!

adornmentColor
	adornmentColor ifNil: [ adornmentColor := Color lightGreen ].
	^ adornmentColor
!

adornmentColor: anObject
	adornmentColor := anObject
!

backupDirectory

	backupDirectory == nil ifTrue: [ backupDirectory := '' ].
	^backupDirectory
!

backupDirectory: aString

	(aString isEmpty or: [ aString last = '/' ])
		ifTrue: [ backupDirectory := aString ]
		ifFalse: [ backupDirectory := aString, '/' ]
!

dataDirectory

	dataDirectory == nil ifTrue: [ dataDirectory := '' ].
	^dataDirectory
!

dataDirectory: aString

	(aString isEmpty or: [ aString last = '/' ])
		ifTrue: [ dataDirectory := aString ]
		ifFalse: [ dataDirectory := aString, '/' ]
!

gciLibrary
	"TODO: think about support for more libraries"
	GciLibrary new
		apiGciInit;
		yourself.
!

gciLibraryName
	^ gciLibraryName
!

gciLibraryName: anObject
	gciLibraryName := anObject
!

gemHost

	gemHost == nil ifTrue: [ gemHost := self defaultGemHost ].
	^gemHost
!

gemHost: aString

	gemHost := aString
!

gemTask

	gemTask == nil ifTrue: [ gemTask := self defaultGemTask ].
	^gemTask
!

gemTask: aString

	gemTask := aString
!

gemstoneVersion
	^ gemstoneVersion
!

gemstoneVersion: anObject
	gemstoneVersion := anObject
!

name

	^name == nil
		ifTrue: [ self class label ]
		ifFalse: [ name ]
!

name: aString

	name := aString
!

netLDI

	netLDI == nil ifTrue: [ netLDI := self defaultNetLDI ].
	^netLDI
!

netLDI: aString

	netLDI := aString
!

osPassword

	osPassword == nil ifTrue: [ osPassword := '' ].
	^osPassword
!

osPassword: aString

	osPassword := aString
!

osUserId

	osUserId == nil ifTrue: [ osUserId := '' ].
	^osUserId
!

osUserId: aString

	osUserId := aString
!

password

	password == nil ifTrue: [ password := self defaultPassword ].
	^password
!

password: aString

	password := aString
!

stoneHost

	stoneHost == nil ifTrue: [ stoneHost := self defaultStoneHost ].
	^stoneHost
!

stoneHost: aString

	stoneHost := aString
!

stoneName

	stoneName == nil ifTrue: [ stoneName := self defaultStoneName ].
	^stoneName
!

stoneName: aString

	stoneName := aString
!

userId

	userId == nil ifTrue: [ userId := self defaultUserId ].
	^userId
!

userId: aString

	userId := aString
! !

!OGCustomSessionDescription methodsFor: 'copying'!

postCopy

	super postCopy.
	self name: self name, ' copy'
! !

!OGCustomSessionDescription methodsFor: 'defaults'!

defaultGemHost

	^'glass'
!

defaultGemTask

	^'gemnetobject'
!

defaultNetLDI

	^'50377'
!

defaultPassword

	^'swordfish'
!

defaultStoneHost

	^'glass'
!

defaultStoneName

	^'seaside'
!

defaultUserId

	^'DataCurator'
! !

!OGCustomSessionDescription methodsFor: 'nrs'!

gemNRS

	^'!!tcp@' , self gemHost, 
		'#netldi:' , self netLDI, 
		'#task!!' , self gemTask.
!

stoneNRS

	^'!!tcp@' , self stoneHost , 
		'#server!!' , self stoneName.
! !

!OGCustomSessionDescription methodsFor: 'template'!

addOptionalTemplateEntriesOn: aStream

	self backupDirectory isEmpty
		ifFalse: [ 
			aStream cr; tab.
			aStream nextPutAll: 'backupDirectory: ', self backupDirectory printString; nextPut: ';' ].
	self dataDirectory isEmpty
		ifFalse: [
			aStream
 				cr; tab;
				nextPutAll: 'dataDirectory: ', self dataDirectory printString; nextPut: ';' ].
!

editTemplate

	| stream |
	stream := WriteStream on: String new.
	stream 
		nextPutAll: self class name asString; nextPutAll: ' new';
		cr; tab;
		nextPutAll: 'name: ', self name printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'stoneHost: ', self stoneHost printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'stoneName: ', self stoneName printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'gemHost: ', self gemHost printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'netLDI: ', self netLDI printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'gemTask: ', self gemTask printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'userId: ', self userId printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'password: ', self password printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'osUserId: ', self osUserId printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'osPassword: ', self osPassword printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'backupDirectory: ', self backupDirectory printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'dataDirectory: ', self dataDirectory printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'yourself.'.
	^stream contents
!

obConfigure

	^self class obConfigureWith: self
! !

!OGCustomSessionDescription methodsFor: 'testing'!

isGuest

	^self osUserId isEmpty
! !

!OGCustomSessionDescription class methodsFor: 'accessing'!

label
	^ 'Custom'
! !

!OGCustomSessionDescription class methodsFor: 'instance creation'!

obConfigure
	^ self obConfigureWith: self new
!

obConfigureWith: aDescription

	| creationString description |
	"TODO: provide editor"
	creationString := OBMultiLineTextRequest prompt: 'Edit template and save' template: aDescription editTemplate.
	(creationString isNil or: [creationString isEmpty]) ifTrue: [ ^nil ].
	description := self readFrom: creationString readStream.
	^description
!

readFrom: textStringOrStream
	"Create an object based on the contents of textStringOrStream."

	| object |
	(Compiler couldEvaluate: textStringOrStream)
		ifFalse: [^ self error: 'expected String, Stream, or Text'].
	object := Compiler evaluate: textStringOrStream.
	(object isKindOf: OGCustomSessionDescription) ifFalse: [self error: self name, ' expected'].
	^ object
! !

!OGCustomSessionDescription class methodsFor: 'testing'!

isValid
	^ true
! !

OGCustomSessionDescription subclass: #OGApplianceSessionDescription
	instanceVariableNames: ''
	package: 'Topez-Client-Session'!

!OGApplianceSessionDescription methodsFor: 'defaults'!

defaultGemHost

	^self stoneHost
! !

!OGApplianceSessionDescription methodsFor: 'template'!

editTemplate

	| stream |
	stream := WriteStream on: String new.
	stream 
		nextPutAll: self class name asString; nextPutAll: ' new';
		cr; tab;
		nextPutAll: 'name: ', self name printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'stoneHost: ', self stoneHost printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'stoneName: ', self stoneName printString; nextPut: ';'.
	self addOptionalTemplateEntriesOn: stream.
	stream 
		cr; tab;
		nextPutAll: 'yourself.'.
	^stream contents
! !

!OGApplianceSessionDescription class methodsFor: 'accessing'!

label
	^ 'Appliance'
! !

OGCustomSessionDescription subclass: #OGFullSessionDescription
	instanceVariableNames: ''
	package: 'Topez-Client-Session'!

!OGFullSessionDescription methodsFor: 'template'!

editTemplate

	| stream |
	stream := WriteStream on: String new.
	stream 
		nextPutAll: self class name asString; nextPutAll: ' new';
		cr; tab;
		nextPutAll: 'name: ', self name printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'stoneHost: ', self stoneHost printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'stoneName: ', self stoneName printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'gemHost: ', self gemHost printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'netLDI: ', self netLDI printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'gemTask: ', self gemTask printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'userId: ', self userId printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'password: ', self password printString; nextPut: ';'.
	self addOptionalTemplateEntriesOn: stream.
	stream 
		cr; tab;
		nextPutAll: 'yourself.'.
	^stream contents
! !

!OGFullSessionDescription class methodsFor: 'accessing'!

label
	^ 'Full'
! !

!OGFullSessionDescription class methodsFor: 'testing'!

isValid
	"Will ultimately get rid of OGFullSessionDescription - won't show up in the choices anymore, to start'"
	^ false
! !

OGCustomSessionDescription subclass: #OGStandardSessionDescription
	instanceVariableNames: ''
	package: 'Topez-Client-Session'!

!OGStandardSessionDescription methodsFor: 'defaults'!

defaultGemHost
	^ self stoneHost
! !

!OGStandardSessionDescription methodsFor: 'template'!

addOptionalTemplateEntriesOn: aStream

	self dataDirectory isEmpty
		ifFalse: [
			aStream
 				cr; tab;
				nextPutAll: 'dataDirectory: ', self dataDirectory printString; nextPut: ';' ].
!

editTemplate

	| stream |
	stream := WriteStream on: String new.
	stream 
		nextPutAll: self class name asString; nextPutAll: ' new';
		cr; tab;
		nextPutAll: 'name: ', self name printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'stoneHost: ', self stoneHost printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'stoneName: ', self stoneName printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'gemHost: ', self gemHost printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'netLDI: ', self netLDI printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'userId: ', self userId printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'password: ', self password printString; nextPut: ';';
		cr; tab;
		nextPutAll: 'backupDirectory: ', self backupDirectory printString; nextPut: ';'.
	self addOptionalTemplateEntriesOn: stream.
	stream 
		cr; tab;
		nextPutAll: 'yourself.'.
	^stream contents
! !

!OGStandardSessionDescription class methodsFor: 'not yet classified'!

label
	^ 'Standard'
! !

