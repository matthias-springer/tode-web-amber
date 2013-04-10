Smalltalk current createPackage: 'Topez-Web-Common-Console'!
Object subclass: #TodeConsole
	instanceVariableNames: 'cliShell'
	package: 'Topez-Web-Common-Console'!

!TodeConsole methodsFor: 'not yet classified'!

cliShell
	^ cliShell
!

cliShell: commandShell
	cliShell := commandShell.
!

domTextArea
	^ '#workspace' asJQuery
! !

!TodeConsole class methodsFor: 'not yet classified'!

todeConsole: cliShell
	|ttyDisplay|
	ttyDisplay := self new cliShell: cliShell.
	^ ttyDisplay
! !

