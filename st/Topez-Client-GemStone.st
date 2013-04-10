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

