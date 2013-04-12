Smalltalk current createPackage: 'Topez-Client-GemStone'!
Object subclass: #TDShell
	instanceVariableNames: 'shellWindow topezClient'
	package: 'Topez-Client-GemStone'!

!TDShell methodsFor: 'not yet classified'!

evaluate: aString
	"TODO: pipes, isolated commands"
	^ self evaluateCommand: aString
!

evaluateCommand: line
	|tokens|
	(line isEmpty not and: [line first = '#'])
		ifTrue: [^ ''].
	tokens := line trimBoth findTokens: {(Character space)}.
	tokens isEmpty
		ifTrue: [^ ''].
	"TODO: check for builtin commands"
!

open
	shellWindow := TodeConsole todeConsole: self.
!

topezClient
	topezClient ifNil: [
		topezClient := self topezClientClass new
			shell: self;
			yourself].
	^ topezClient
!

topezClientClass
	^ TDTopezClient
! !

!TDShell class methodsFor: 'not yet classified'!

open
	^ self new open
! !

Object subclass: #TDTopezClient
	instanceVariableNames: ''
	package: 'Topez-Client-GemStone'!

GciSession subclass: #TodeSession
	instanceVariableNames: 'topez sessionDescription gciLibrary'
	package: 'Topez-Client-GemStone'!

!TodeSession methodsFor: 'accessing'!

library
	gciLibrary ifNil: [ gciLibrary := self sessionDescription  gciLibrary ].
	^ gciLibrary
!

loginWith: aSessionDescription
	self sessionDescription: aSessionDescription.
	^ self
		login: self sessionDescription password
		osUser:
			(self sessionDescription isGuest
				ifTrue: [ '' ]
				ifFalse: [ self sessionDescription osUserId ])
		osPassword:
			(self sessionDescription isGuest
				ifTrue: [ '' ]
				ifFalse: [ self sessionDescription osPassword ])
!

sessionDescription
	^ sessionDescription
!

sessionDescription: anObject
	sessionDescription := anObject.
	self
		gemNRS: sessionDescription gemNRS;
		stoneNRS: sessionDescription stoneNRS;
		userID: sessionDescription userId;
		yourself
!

shell
	^ self topez shell
!

topez
	^ topez
!

topez: aTopez
	topez := aTopez
! !

!TodeSession methodsFor: 'error handling'!

signalServerError: error
	"This means that errors will only show up in the topez associated with the window that initiated the session ... not quite what we want ... unless the exceptions are shared across topez instances"

	^ (error asGsRuntimeException: self) signal
! !

!TodeSession methodsFor: 'private gci calls'!

debuggerRequested: result
	self topez openDebugger.
	^ result
!

environmentId
	^ self topez environmentId
!

getAndClearLastError
	false
		ifTrue: [ ^ self library getAndClearLastError ].
	topez ifNil: [ ^ self library getAndClearLastError ].
	^ self library getAndClearLastErrorUsingSton: self
!

todeServerAccessString
	^ self topez todeServerAccessString
! !

