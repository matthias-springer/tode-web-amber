Smalltalk current createPackage: 'Topez-Client-Common'!
Notification subclass: #GsRuntimeExceptionNotification
	instanceVariableNames: 'topez gciErrSType'
	package: 'Topez-Client-Common'!

!GsRuntimeExceptionNotification methodsFor: 'not yet classified'!

contextAsOopType
  ^ self gciErrSType context
!

convertTDEvaluateTokenResponseToText
  ^ Text
    string: self description
    attributes:
      {(TextEmphasis italic).
      (TextEmphasis bold)}
!

customDefaultAction
  | answer process |
  answer := UIManager default
    confirm: self description
    trueChoice: 'Proceed'
    falseChoice: 'Abort'
    cancelChoice: 'Debug'
    default: false.
  answer
    ifNil: [ 
      ^ {#'debug'.
      self} ].
  answer
    ifTrue: [ ^ #'resume' ].
  ^ {#'abort'.
  (STON toString: 'Aborted...')}
!

defaultAction
  self topez exception: self exceptionAsOopType context: self contextAsOopType.
  ^ self customDefaultAction
!

description
  ^ self gciErrSType message
!

errorNumber
  ^ self gciErrSType number
!

exceptionAsOopType
  ^ self gciErrSType exceptionObj
!

gciErrSType
	^ gciErrSType
!

gciErrSType: anObject
	gciErrSType := anObject
!

topez
	^ topez
!

topez: anObject
  topez := anObject
! !

GsRuntimeExceptionNotification subclass: #GsBreakpointNotification
	instanceVariableNames: ''
	package: 'Topez-Client-Common'!

GsRuntimeExceptionNotification subclass: #GsErrorNotification
	instanceVariableNames: ''
	package: 'Topez-Client-Common'!

GsErrorNotification subclass: #GsCompileErrorNotification
	instanceVariableNames: ''
	package: 'Topez-Client-Common'!

GsErrorNotification subclass: #GsTopezCommandErrorNotification
	instanceVariableNames: ''
	package: 'Topez-Client-Common'!

!GsTopezCommandErrorNotification methodsFor: 'not yet classified'!

customDefaultAction
  true
    ifTrue: [ ^ super customDefaultAction ].
  ^ {#'debug'.
  self}
! !

GsRuntimeExceptionNotification subclass: #GsHaltNotification
	instanceVariableNames: ''
	package: 'Topez-Client-Common'!

SystemWindow subclass: #TZSystemWindow
	instanceVariableNames: ''
	package: 'Topez-Client-Common'!

!TZSystemWindow methodsFor: 'keyboard handling'!

handlesKeyboard: evt
    "Return true if the receiver wishes to handle the given keyboard event"

    (super handlesKeyboard: evt)
        ifTrue: [ ^ true ].
    ^ evt keyCharacter = Character escape
!

keyStroke: evt
    "Check for close window."

    evt keyCharacter = Character escape
        ifTrue: [ 
            "switch focus back to topez window"
            ^ self model escapeKeyStroke ].
    ^ super keyStroke: evt
!

minimizeOrRestore
    "TODO: implement"
! !

!TZSystemWindow methodsFor: 'resize-collapse'!

activate
    super activate.
    self model windowActive: self
! !

