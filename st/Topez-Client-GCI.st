Smalltalk current createPackage: 'Topez-Client-GCI'!
Object subclass: #GciLibrary
	instanceVariableNames: 'sessionId'
	package: 'Topez-Client-GCI'!

!GciLibrary methodsFor: 'API'!

apiGciGetSessionId
	sessionId := self apiNoSessionGci: 'get_session_id' data: Dictionary new.
	^ sessionId
!

apiGciInit
	^ self apiGci: 'init'
!

apiGciLogin: userName a: password
	^ self apiGci: 'login' data: {'user_id'->userName. 'password'->password} asDictionary
!

apiGciSetSessionId: aNumber
	"Cache session id locally and update on API calls. This is necessary
	because multiple browser session could be connect to the Ruby backend."
	
	sessionId := aNumber
!

apiGciVersion
	^ self apiGci: 'version'
! !

!GciLibrary methodsFor: 'proxy'!

apiGci: command
	^ self apiGci: command data: Dictionary new.
!

apiGci: command data: aDictionary
	|params|
	params := aDictionary copy.
	params at: '!!session_id' put: sessionId.
	^ Ajax ajaxSync: '/gci/', command data: params asJSON
!

apiNoSessionGci: command data: aDictionary
	^ Ajax ajaxSync: '/gci/', command data: aDictionary asJSON
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

