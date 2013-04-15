Smalltalk current createPackage: 'Topez-Client-Common'!
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

