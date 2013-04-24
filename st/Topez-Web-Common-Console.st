Smalltalk current createPackage: 'Topez-Web-Common-Console'!
TextStream subclass: #TodeConsole
	instanceVariableNames: 'cliShell lastPromptString activeController labelStringBlock'
	package: 'Topez-Web-Common-Console'!

!TodeConsole methodsFor: 'accessing'!

activeController
	"In Morphic, alway nil. In MVC, the controller that most recently invoked
	a command."

	^ activeController
!

activeController: aController
	"In Morphic, alway nil. In MVC, the controller that most recently invoked
	a command."

	activeController := aController
!

adornmentColor
    ^ self cliShell adornmentColor
!

characterLimit
	"Tell the views how much to retain on screen"
	^ 20000
!

cliShell
	^ cliShell
!

cliShell: commandShell
	cliShell := commandShell.
!

escapeKeyStroke
    | evaluator |
    evaluator := self topez editorWindowNamed: #'evaluator'.
    evaluator activate.
    ^ true
!

keyboardConnector

	^ self cliShell keyboardConnector
!

labelStringBlock
	"Answer a block that when evaluated answers a string to be used
	as the window label."

	^ labelStringBlock ifNil: [labelStringBlock := self defaultLabelStringBlock]
!

labelStringBlock: aBlockAnsweringAString

	labelStringBlock := aBlockAnsweringAString
!

lastPromptString
	"Answer the value of lastPromptString"

	^ lastPromptString ifNil: [lastPromptString := self cliShell promptString]
!

lastPromptString: anObject
	"Set the value of lastPromptString"

	lastPromptString := anObject
!

nextHistory
  ^ self cliShell nextHistory
!

previousHistory
  ^ self cliShell previousHistory
!

tabCompletion: commandLine
  ^ self cliShell tabCompletion: commandLine
!

topez
  ^ self cliShell topez
! !

!TodeConsole methodsFor: 'command prompt'!

controlShiftLKeyStroke
    | evaluator names ids namesAndIds index |
    namesAndIds := self topez status windowNamesAndIds.
    names := namesAndIds collect: [ :assoc | assoc value at: 2 ].
    ids := namesAndIds collect: [ :assoc | assoc value at: 1 ].
    index := UIManager default chooseFrom: names.
    index > 0
        ifTrue: [ 
            evaluator := self topez editorWindowAt: (ids at: index).
            evaluator activate ].
    ^ true
!

controlShiftSKeyStroke
    "noop"

    ^ false
!

isMorphic
  ^ (Smalltalk respondsTo: #'isMorphic') not or: [ Smalltalk isMorphic ]
!

markInput
  self changed: #'markInput'
!

prompt
  self show: self cliShell promptString.
  self markInput.
  self restoreSelectionMarker
!

promptString
	"Dependents call this when restoring the prompt string display"

	self flag: #FIXME. "change the dependents to call #lastPromptString"
	^ self lastPromptString
!

promptTwo

	self show: self cliShell promptStringTwo.
	self restoreSelectionMarker
!

restorePrompt

	self flag: #FIXME. "remember last prompt string and redisplay it"
	self prompt
!

restoreSelectionMarker
  "Restore selection marker in MVC"

  | c |
  self isMorphic
    ifFalse: [ 
      c := self activeController.
      self scheduleToEvaluate: [ c initializeSelection ] ]
! !

!TodeConsole methodsFor: 'evaluation'!

processCommand: aCommandString
  (self cliShell evaluate: aCommandString)
    ifNotNil: [ :outputStringOrText | 
      | str |
      (str := outputStringOrText) isEmpty
        ifTrue: [ self restoreSelectionMarker ]
        ifFalse: [ 
          self 
            show: outputStringOrText;
            cr ] ].
  self prompt
!

scheduleToEvaluate: aBlock
  "Evaluate aBlock, typically to create a new scheduled window. Make it work in
	both Morphic and MVC. In Morphic, just evaluate aBlock, but in MVC, put it in
	a queue for evaluation within a control loop. This method may be sent from
	a process running independent of MVC controller scheduling.
	
	Newer Squeak images implement #addDeferredUIMessage in the current
	project, eliminating the need for an #isMorphic test. This mechanism is not
	available for older images or for Pharo."

  self isMorphic
    ifTrue: [ WorldState addDeferredUIMessage: aBlock ]
    ifFalse: [ 
      self activeController
        ifNotNil: [ activeController addDeferredUIMessage: aBlock ] ]
! !

!TodeConsole methodsFor: 'initialize-release'!

close
  super close.
  self cliShell windowIsClosing.
  self changed: #'exit'
!

consoleWindowMorphClass
  ^ TodeConsoleWindowMorph
!

open

	^ self openLabel: nil "invoke default label setting block"
!

openAsMorphLabel: labelString
  "Build a morph viewing this stream"

  | window textMorph |
  window := (TZSystemWindow labelled: labelString) model: self.
  textMorph := self consoleWindowMorphClass
    on: self
    text: nil
    accept: nil
    readSelection: nil
    menu: nil.
  textMorph acceptOnCR: true.
  window addMorph: textMorph frame: (0 @ 0 corner: 1 @ 1).
  self prompt.
  false
    ifTrue: [ 
      labelString ifNotNil: [ self labelStringBlock: [ labelString ] ].
      self changed: #'relabel' ].
  ^ window
    openInWorld;
    bounds: (self cliShell topezClientClass bounds at: #'evaluator');
    yourself
!

openLabel: aString
  "Open a window on this stream. This is copied from the corresponding method in
	TranscriptStream."

  | topView controllerClass codeView |
  self isMorphic
    ifTrue: [ ^ self openAsMorphLabel: aString ].
  aString ifNotNil: [ self labelStringBlock: [ aString ] ].
  topView := StandardSystemView new.
  controllerClass := Smalltalk
    at: #'DeferredActionStandardSystemController'
    ifAbsent: [ StandardSystemController ].
  topView
    model: self;
    controller: controllerClass new;
    borderWidth: 1;
    label: aString;
    minimumSize: 100 @ 50.
  codeView := ShellWindowView
    on: self
    text: nil
    accept: nil
    readSelection: nil
    menu: #'codePaneMenu:shifted:'.
  codeView window: (0 @ 0 extent: 200 @ 200).
  topView addSubView: codeView.
  topView controller
    addDeferredUIMessage: [ 
      self changed: #'relabel'.
      self prompt ].
  topView controller open
! !

!TodeConsole methodsFor: 'input character filtering'!

checkSttyForEvent: keyboardEvent
	"Check for interrupt characters and such. Consume interrupt character and
	answer nil, otherwise answer keyboardEvent."

	(self isInterruptEvent: keyboardEvent)
		ifTrue:
			[self handleInterruptCharacterEvent.
			^ nil].
	(self isEndOfFileEvent: keyboardEvent)
		ifTrue:
			[self cliShell doEndOfFile.
			^ nil].
	^ keyboardEvent
!

filterAndForward: aCharacter
	"Filter aCharacter, taking special action if needed. If a child process is active,
	forward aCharacter to the child and answer nil. Otherwise answer aCharacter."

	^ self cliShell filterAndForward: aCharacter
!

filterAndForwardEvent: keyboardEvent 
	"Filter keyboardEvent, taking special action if needed. If a child process
	is active, forward keyboardEvent to the child and answer nil. Otherwise
	answer keyboardEvent."

	^ (self checkSttyForEvent: keyboardEvent)
		ifNotNil: [self cliShell filterAndForwardEvent: keyboardEvent]
!

handleInterruptCharacterEvent
	"Interrupt character detected, do interrupt stuff."
!

isEndOfFileEvent: keystrokeEvent
  "A <ctl>d event, represented either as character value 4, or as $d with
	the control or meta key. The actual representation varies on different
	versions of Squeak."

  true
    ifTrue: [ ^ false ].
  ^ keystrokeEvent keyValue == 4
    or: [ keystrokeEvent keyCharacter = 'd' and: [ keystrokeEvent controlKeyPressed ] ]
!

isInterruptEvent: keystrokeEvent
  "A <ctl>c event, represented either as character value 3, or as $c with
	the control or meta key. The actual representation varies on different
	versions of Squeak."

  true
    ifTrue: [ ^ false ].
  ^ keystrokeEvent keyValue == 3
    or: [ keystrokeEvent keyCharacter = 'c' and: [ keystrokeEvent controlKeyPressed ] ]
! !

!TodeConsole methodsFor: 'model protocol'!

codePaneMenu: aMenu shifted: shifted
	"Note that unless we override perform:orSendTo:, PluggableTextController will respond
	to all menu items"

	^ StringHolder basicNew codePaneMenu: aMenu shifted: shifted
!

labelString

	^ self labelStringBlock value
!

perform: selector orSendTo: otherTarget
	"Selector was just chosen from a menu by a user.  If can respond, then
	perform it on myself. If not, send it to otherTarget, presumably the
	editPane from which the menu was invoked."

	(self respondsTo: selector)
		ifTrue: [^ self perform: selector]
		ifFalse: [^ otherTarget perform: selector]
! !

!TodeConsole methodsFor: 'not yet classified'!

domTextArea
	^ '#workspace' asJQuery
! !

!TodeConsole methodsFor: 'stream extensions'!

bs
	self position > 0 ifTrue: [^ self skip: -1].
	self changed: #bs
!

clear
	"Clear all characters and redisplay the view"
	self changed: #clearText.
	self reset
!

endEntry
  "Display all the characters since the last endEntry, and reset the stream"
	Transcript show: 'TodeConsole>>endEntry called.'.
  self changed: #'appendEntry'.
  self reset
!

flush
	self endEntry
!

nextPut: anObject
  super nextPut: anObject
!

nextPutAll: characters
  "Convert line terminators to cr. Note that #nextPut: does not do this conversion."

  characters isEmpty
    ifFalse: [ 
      super nextPutAll: (characters copyReplaceAll: String lf with: String cr).
      self flush ]
!

pastEndPut: anObject
	"If the stream reaches its limit, just output the contents and reset."
	self endEntry.
	^ self nextPut: anObject
!

show: anObject
  "TextCollector compatibility"

  self
    nextPutAll: anObject asStringOrText;
    endEntry
! !

!TodeConsole methodsFor: 'updating'!

update: event

	event == #prompt	"display $PS1"
		ifTrue: [^ self prompt].
	event == #alternatePrompt	"display $PS2"
		ifTrue: [^ self promptTwo].
	event == #restorePrompt	"restore last prompt display"
		ifTrue: [self flag: #FIXME. ^ self prompt].
	event == #exit
		ifTrue: [^ self close].
	event == #clearText
		ifTrue: [^ self clear].
	event == #interruptCharacter
		ifTrue: [^ self handleInterruptCharacterEvent].
	event == #relabel
		ifTrue: [^ self changed: event].
	self error: ['unexpected event']
!

windowActive: aSystemWindow
  "noop"
!

windowIsClosing
  self cliShell windowIsClosing
! !

!TodeConsole class methodsFor: 'defaults'!

defaultWindowName
  ^ 'tODE Console'
! !

!TodeConsole class methodsFor: 'instance creation'!

new
  ^ (self on: Text new) initialize
!

open
	"CommandShell open"

	^ self new open
!

openLabel: aString

	"CommandShell openLabel: self defaultWindowName"

	^ self new openLabel: aString
!

todeConsole: cliShell
	|ttyDisplay|
	ttyDisplay := self new cliShell: cliShell.
	^ ttyDisplay
! !

!TodeConsole class methodsFor: 'window color'!

windowColorSpecification
  "Answer a WindowColorSpec object that declares my preference"

  | windowColorSpec |
  windowColorSpec := Smalltalk
    at: #'WindowColorSpec'
    ifAbsent: [ ^ self error: 'this image does not support WindowColorSpec' ].
  ^ windowColorSpec
    classSymbol: self name
    wording: 'Tode Console'
    brightColor: Color lightGray lighter paler
    pastelColor: Color lightGray lighter lighter paler paler
    helpMessage:
      'Tode Console window for running remote GemStone/S tODE session'
! !

PluggableTextMorph subclass: #TodeConsoleWindowMorph
	instanceVariableNames: 'inputMark'
	package: 'Topez-Web-Common-Console'!

!TodeConsoleWindowMorph methodsFor: 'accessing'!

inputMark
  ^ inputMark
!

markInput
  inputMark := self text size
! !

!TodeConsoleWindowMorph methodsFor: 'command input'!

commandLineInput
  | start stop |
  start := self positionAfterPromptString.
  stop := self text size.
  stop < start
    ifTrue: [ ^ '' ].
  ^ (self text copyFrom: start to: stop) asString
!

positionAfterPromptString
  "Answer the index of the first character after the last prompt string in my text. If
	not found, then assume that the contents of the text are all intended to be command
	input."

  ^ self inputMark + 1
! !

!TodeConsoleWindowMorph methodsFor: 'events'!

keyStroke: evt
  | interval |
  evt altKeyPressed
    ifTrue: [ ^ super keyStroke: evt ].
  interval := self textMorph editor selectionInterval.
  (interval first > self inputMark and: [ interval first <= self text size ])
    ifTrue: [ ^ super keyStroke: evt ].
  evt keyCharacter = Character tab
    ifTrue: [ 
      | ans |
      ans := self model tabCompletion: self commandLineInput.
      textMorph
        selectInvisiblyFrom: self positionAfterPromptString
        to: self text size.
      textMorph replaceSelectionWith: ans.
      self selectFrom: self text size + 1 to: self text size.
      ^ true ].
  (evt keyValue = 30 or: [ evt keyValue = 11 ])
    ifTrue: [ 
      self model previousHistory.
      self selectFrom: self text size + 1 to: self text size.
      ^ true ].
  (evt keyValue = 31 or: [ evt keyValue = 12 ])
    ifTrue: [ 
      self model nextHistory.
      self selectFrom: self text size + 1 to: self text size.
      ^ true ].
  self selectFrom: self text size + 1 to: self text size.
  ^ super keyStroke: evt
! !

!TodeConsoleWindowMorph methodsFor: 'initializing'!

initialize
  "initialize the state of the receiver"

  super initialize.
  inputMark := 1
! !

!TodeConsoleWindowMorph methodsFor: 'menu commands'!

accept
  self model
    cr;
    flush;
    processCommand: self commandLineInput asString
!

adornmentColor
    ^ self model adornmentColor
!

drawOn: aCanvas
    "Indicate which Evaluator you are running on"

    super drawOn: aCanvas.
    true
        ifTrue: [ self theme drawTopezAdornmentFor: self color: self adornmentColor on: aCanvas ]
!

wantsFrameAdornments
    "nothing to save, nothing to indicate"

    ^ false
! !

!TodeConsoleWindowMorph methodsFor: 'model access'!

setText: aText
	"TODO: method changed"
	super setText: aText.
! !

!TodeConsoleWindowMorph methodsFor: 'updating'!

appendEntry
  | txt |
  Transcript show: Character cr, 'TodeConsoleWindowMorph>>appendEntry'.
  "Append the text in the model's writeStream to the editable text. "
  textMorph asText size > model characterLimit
    ifTrue: [ 
      "Knock off first half of text"
      self selectInvisiblyFrom: 1 to: textMorph asText size // 2.
      self replaceSelectionWith: Text new ].
  self selectInvisiblyFrom: textMorph asText size + 1 to: textMorph asText size.
  txt := model contents.
  Transcript show: Character cr, 'model contents: ', txt asString.
  txt size > 0
    ifTrue: [ 
      self replaceSelectionWith: txt.
      self
        selectInvisiblyFrom: textMorph asText size + 1
        to: textMorph asText size.
      model reset ]
!

update: something
	Transcript show: 'TodeConsoleWindowMorph>>update:', something.
	
  something == #'markInput'
    ifTrue: [ ^ self markInput ].
  something == #'doCommand'
    ifTrue: [ ^ self accept ].
  something == #'exit'
    ifTrue: [ 
      ^ self owner
        release;
        delete ].
  ^ super update: something
! !

