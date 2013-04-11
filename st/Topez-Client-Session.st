Smalltalk current createPackage: 'Topez-Client-Session'!
Object subclass: #GciSession
	instanceVariableNames: 'number'
	package: 'Topez-Client-Session'!

!GciSession methodsFor: 'not yet classified'!

executeStringExpectingStringNB: aString envId: envId
	self library
		critical: [ :lib | 
			lib apiGciSetSessionId: self getSessionNumber.
			lib apiGciNbExecuteStr: aString a: self library oopNil a: envId ].
      ^ self getNbResultAsString
!

getSessionNumber
	number == nil
    	ifTrue: [ ^ self error: 'Session no longer logged in.' ].
	^ number
! !

