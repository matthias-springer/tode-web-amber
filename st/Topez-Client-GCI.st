Smalltalk current createPackage: 'Topez-Client-GCI'!
Object subclass: #GciLibrary
	instanceVariableNames: 'sessionId'
	package: 'Topez-Client-GCI'!

!GciLibrary methodsFor: 'API'!

apiGciExecuteStr: aString a: anOop
	^ self apiGci: 'execute_str' data: {'string'->aString. 'oop'->anOop} asDictionary
!

apiGciGetSessionId
	sessionId := self apiNoSessionGci: 'get_session_id' data: Dictionary new.
	^ sessionId
!

apiGciInit
	^ self apiGci: 'init'
!

apiGciLogin: userName a: password
	sessionId := self apiGci: 'login' data: {'user_id'->userName. 'password'->password} asDictionary.
	^ sessionId
!

apiGciSetSessionId: aNumber
	"Cache session id locally and update on API calls. This is necessary
	because multiple browser session could be connect to the Ruby backend."
	
	sessionId := aNumber
!

apiGciVersion
	^ self apiGci: 'version'
! !

!GciLibrary methodsFor: 'constants'!

oopAsciiNul
	^ 28
!

oopClassArray
	^ 66817
!

oopClassByteArray
	^ 103425
!

oopClassDoubleByteString
	^ 143873
!

oopClassDoubleByteSymbol
	^ 144129
!

oopClassQuadByteString
	^ 144385
!

oopClassQuadByteSymbol
	^ 144641
!

oopClassString
	^ 74753
!

oopClassSymbol
	^ 110849
!

oopClassSystem
	^ 76033
!

oopClassUnicode16
	^ 154625
!

oopClassUnicode32
	^ 154881
!

oopClassUnicode7
	^ 154369
!

oopFalse
	^ 12 "16r0C"
!

oopGemStoneError
	^ 231169
!

oopIllegal
	^ 1 "16r01"
!

oopInvalid
	^ 0 "16r0"
!

oopMaxSmallInteger
	^ 16r7FFFFFFFFFFFFFFA
!

oopMinSmallInteger
	^ 16r8000000000000002
!

oopMinusOne
	^ 16rFFFFFFFFFFFFFFFA
!

oopNil
	^ 20 "16r14"
!

oopOne
	^ 10
!

oopRemoteNil
	^ 276 "16r114"
!

oopTrue
	^ 268	"16r10C"
!

oopTwo
	^ 18
!

oopZero
	^ 2
! !

!GciLibrary methodsFor: 'proxy'!

apiGci: command
	^ self apiGci: command data: Dictionary new.
!

apiGci: command data: aDictionary
	|params result|
	params := aDictionary copy.
	params at: '!!session_id' put: sessionId.
	result := (Ajax ajaxSync: '/gci/', command data: params asJSON) responseText parseJSON.
	result success ifFalse: [Error signal: command, ' GCI API call failed. ', result exception].
	^ result result
!

apiNoSessionGci: command data: aDictionary
	^ Ajax ajaxSync: '/gci/', command data: aDictionary asJSON
! !

!GciLibrary methodsFor: 'wrapper'!

fetchChars: oop
	^ self apiGci: 'fetch_str' data: {'oop'->oop} asDictionary
! !

GciLibrary class instanceVariableNames: 'current version'!

!GciLibrary class methodsFor: 'accessing'!

version
	^ version
! !

!GciLibrary class methodsFor: 'singleton'!

current
	"TODO: support for multiple libraries (e.g. in MRI)"
	|library|
	current ifNotNil: [^ current].
	current := self new
		apiGciInit;
		yourself.
	version := current apiGciVersion.
	^ current
! !

