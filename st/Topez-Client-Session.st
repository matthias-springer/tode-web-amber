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
	|result|
	result := self library apiGciExecuteStr: aString a: self library oopNil a: envId.
	^ self library fetchChars: result
! !

!GciSession methodsFor: 'testing'!

isValid

	^number ~~ nil
! !

