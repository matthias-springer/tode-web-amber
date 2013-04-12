Smalltalk current createPackage: 'Topez-Client-GemStone'!
Object subclass: #TDShell
	instanceVariableNames: 'windowStatus topezClient inputStream actionStack promptString shellWindow shellId autoCommit adornmentColor sessionName history historyIndex'
	package: 'Topez-Client-GemStone'!

!TDShell methodsFor: 'accessing'!

close
	windowStatus ifNil: [ ^ self ].
	windowStatus close
!

collapse
    windowStatus ifNil: [ ^ self ].
    windowStatus collapse
!

expand
    windowStatus ifNil: [ ^ self ].
    windowStatus expand
!

history
	history ifNil: [ history := OrderedCollection new ].
	^ history
!

history: anObject
	history := anObject
!

shellWindow
	^ shellWindow
!

topez
	"tz compat hack"

	^ self topezClient
!

topezClient
	topezClient ifNil: [
		topezClient := self topezClientClass new
			shell: self;
			yourself].
	^ topezClient
! !

!TDShell methodsFor: 'evaluator engine'!

builtIns
	^ #('logout' 'close' 'collapse' 'exit' 'expand')
!

evaluate: aString
  [| line stream result |
  stream := aString readStream.
  [ 
  line := stream nextLine.
  line ~~ nil ]
    whileTrue: [ 
      self actionStack notEmpty
        ifTrue: [ result := self accumulateText: line ]
        ifFalse: [ 
          | isolatedCommands |
          self addToHistory: line.
          isolatedCommands := line findTokens: ';'.
          isolatedCommands
            do: [ :isolatedCommand | 
              | pipedCommands |
              pipedCommands := isolatedCommand findTokens: '|'.
              pipedCommands
                do: [ :pipedCommand | result := self evaluateCommand: pipedCommand ] ] ] ].
  ^ result ]
    on: Error
    do: [ :ex | 
      | errorMessage |
      errorMessage := 'Topez ERROR: ' asText
        ,
          (Text
            string: ex description
            attributes:
              {(TextColor red).
              (TextEmphasis bold)}).
      self class debugMode
        ifTrue: [ self halt: errorMessage asString ].
      self resetStack.
      ^ errorMessage ]
!

evaluateCommand: line
  | tokens |
  (line notEmpty and: [ line first = '#' ])
    ifTrue: [ ^ '' ].
  tokens := line trimBoth findTokens: {(Character space)}.
  tokens isEmpty
    ifTrue: [ ^ '' ].
  (self builtIns includes: (tokens at: 1))
    ifTrue: [ ^ self executeBuiltIn: tokens ].
  ^ (self topezClient evaluateTokens: tokens) convertTDEvaluateTokenResponseToText
!

exception: anException
    self topezClient exception: anException
!

executeBuiltIn: tokens
    self perform: (tokens at: 1) asSymbol.
    ^ tokens at: 1
!

installHistoryEntry: historyLine windowMorph: windowMorph
  | editor |
  editor := windowMorph textMorph editor.
  editor
    selectInvisiblyFrom: windowMorph inputMark + 1
    to: windowMorph text size.
  editor replaceSelectionWith: historyLine
!

nextHistory
  self history size = 0
    ifTrue: [ ^ self ].
  historyIndex <= 1
    ifTrue: [ historyIndex := 2 ].
  history size + 1 <= historyIndex
    ifTrue: [ self installHistoryEntry: '' windowMorph: self shellWindow paneMorphs first ]
    ifFalse: [ 
      self
        installHistoryEntry: (history at: historyIndex)
        windowMorph: self shellWindow paneMorphs first ].
  historyIndex := (historyIndex + 1 max: 1) min: history size + 1
!

previousHistory
  | editor windowMorph |
  self history size = 0
    ifTrue: [ ^ self ].
  historyIndex > history size ifTrue: [ historyIndex := history size].
  self
    installHistoryEntry: (history at: historyIndex)
    windowMorph: self shellWindow paneMorphs first.
  historyIndex := (historyIndex - 1 max: 1) min: history size
!

resetStack
    | actionArray |
    self actionStack isEmpty
        ifTrue: [ ^ self ].
    actionArray := self actionStack removeFirst.
    promptString := actionArray at: 2.
    inputStream := actionArray at: 1
!

tabCompletion: commandLine
  ^ self topez tabCompletion: commandLine
!

topezClientClass
  ^ TDTopezClient
! !

!TDShell methodsFor: 'initialize'!

initialize
	super initialize.
	historyIndex := 0
! !

!TDShell methodsFor: 'not yet classified'!

open: aString adornmentColor: aColorOrNil
  aColorOrNil
    ifNil: [ adornmentColor := (self topezClientClass sessionNamed: aString) adornmentColor ]
    ifNotNil: [ :color | adornmentColor := color ].
  sessionName := aString.
  shellWindow := (TodeConsole todeConsole: self)
    openLabel: self shellId asString , ': ' , self label.
  self windowRegistration.
  ^ shellWindow
!

spawnDebugger: aDebuggerLabel
	| spawn |
	spawn := self copy.
	spawn openTodeDebugger: aDebuggerLabel.
	spawn windowRegistration.
	^ spawn topezClient topezServerOop
!

spawnWindow
	| spawn |
	spawn := self copy.
	spawn open: 'spawned' adornmentColor: self adornmentColor.
	spawn windowRegistration.
	^ spawn topezClient topezServerOop
!

windowIsClosing
	| status |
	windowStatus ifNil: [ ^ self ].
	windowStatus unregisterShellWindow: self shellWindow.
	status := windowStatus.
	windowStatus := nil.
	status windowIsClosing.
	status shellWindows isEmpty
		ifTrue: [ self logout ]
!

windowRegistration
	| windowId |
	windowId := windowStatus windowIdNamed: #'shell' , self shellId asString.
	windowStatus
		windowAt: windowId put: self shellWindow;
		registerShellWindow: self shellWindow
!

windowStatus
	windowStatus ifNil: [ windowStatus := TDWindowStatus new ].
	^ windowStatus
! !

!TDShell methodsFor: 'session management'!

exit
    self windowIsClosing.
    self logout
!

logout
    "close windows and clean up session state, if any"

    | tpz |
    self close.
    tpz := self topezClient.
    tpz ifNil: [ ^ self ].
    topezClient := nil.
    tpz logout
! !

!TDShell methodsFor: 'stash'!

doEndOfFile
    "EOF character detected."
!

filterAndForwardEvent: keyboardEvent
    "Filter keyboardEvent, taking special action if needed. If a child process
	is active, forward keyboardEvent to the child and answer nil. Otherwise
	answer keyboardEvent."

    ^ keyboardEvent
!

label
  ^ 'GemStone Shell: ' , self sessionName
!

openTodeDebugger: aDebuggerLabel
   shellWindow := (TodeDebugConsole todeConsole: self)
    openLabel: self shellId asString , ': ' , aDebuggerLabel.
  self windowRegistration.
  ^ shellWindow
!

postCopy
  "windowStatus is shared"

  shellId := promptString := actionStack := inputStream := shellWindow := nil.
  topezClient := self topezClient copy
    shell: self;
    topezServerProxy;
    yourself
!

promptString
  promptString
    ifNil: [ 
      self autoCommit
        ifTrue: [ 
          promptString := (Text
            string: 'tode ' , self shellId asString , ' >'
            attribute: TextColor gray)
            , (Text string: ' ' attribute: TextEmphasis normal) ]
        ifFalse: [ 
          promptString := (Text
            string: 'tode ' , self shellId asString , ' >'
            attribute: TextColor red)
            , (Text string: ' ' attribute: TextEmphasis normal) ] ].
  ^ promptString
!

session
  ^ self topez session
!

sessionName
  ^ sessionName
!

shellId
  shellId ifNil: [ shellId := self windowStatus nextShellWindowId ].
  ^ shellId
! !

TDShell class instanceVariableNames: 'debugMode enableDebugger'!

!TDShell class methodsFor: 'not yet classified'!

debugMode
    debugMode ifNil: [ debugMode := false ].
    ^ debugMode
!

debugMode: aBool
	" TODO: really return value?"
    ^ debugMode := aBool
!

defaultAdornmentColor
	^ Color lightYellow
!

enableDebugger
	enableDebugger ifNil: [ enableDebugger := false ].
	^ enableDebugger
!

enableDebugger: aBool
	enableDebugger := aBool
!

open: aSessionName
  ^ self open: aSessionName adornmentColor: nil
!

open: aSessionName adornmentColor: aColor
  ^ self new open: aSessionName adornmentColor: aColor
! !

Object subclass: #TDTopezClient
	instanceVariableNames: 'shell session sessionDescription topezServerProxy evaluateTokenMessage setExceptionMessage resetObjInMessage openDebuggerMessage tabCompletionMessage'
	package: 'Topez-Client-GemStone'!

TDTopezClient class instanceVariableNames: 'bounds sessionMap windowOffset codeWindowHeight codeWindowWidth listWindowWidth windowOrigin'!

!TDTopezClient class methodsFor: 'accessing'!

bounds
    ^ bounds
!

codeWindowHeight
  codeWindowHeight ifNil: [ codeWindowHeight := 21 ].
  ^ codeWindowHeight
!

codeWindowHeight: anInteger
  codeWindowHeight := anInteger
!

codeWindowWidth
  codeWindowWidth ifNil: [ codeWindowWidth := 80 ].
  ^ codeWindowWidth
!

codeWindowWidth: anInteger
  codeWindowWidth := anInteger
!

listWindowWidth
  listWindowWidth ifNil: [ listWindowWidth := 24 ].
  ^ listWindowWidth
!

listWindowWidth: anInteger
  "self windowOffset: 1700@0"

  "self windowOffset: o@0"

  "self initialize"

  listWindowWidth := anInteger
!

sessionDescriptionDefault
^ OGCustomSessionDescription new
    name: '3.1.0.2';
    gemstoneVersion: '3.1.0.2';
    gciLibraryName: 'libgcirpc-3.1.0.2-32.so'; "or libgcirpc-3.1.0.1-32.so for Linux"
    adornmentColor: Color lightGreen;
    stoneHost: 'localhost';
    stoneName: 'maglev';
    gemHost: 'localhost';
    netLDI: '50378';
    gemTask: 'gemnetobject';
    userId: 'DataCurator';
    password: 'swordfish';
    osUserId: '';
    osPassword: '';
    backupDirectory: '';
    dataDirectory: '';
    yourself
!

windowOffset
    windowOffset ifNil: [ windowOffset := 0 @ 0 ].
    ^ windowOffset
!

windowOffset: aPoint
  "self windowOffset: 1700@0"

  "self windowOffset: o@0"

  "self initialize"

  windowOffset := aPoint
!

windowOrigin
  windowOrigin ifNil: [ windowOrigin := 5 @ 0.5 ].
  ^ windowOrigin
!

windowOrigin: aPoint
  windowOrigin := aPoint
! !

!TDTopezClient class methodsFor: 'class initialization'!

initialize
	bounds := Dictionary new.
	self initializeBounds.
	bounds := self offsetBounds: self windowOffset.
	self initializeSessionMap
!

initializeSessionMap
  "self initializeSessionMap"

  | dict |
  dict := Dictionary new.
  {(self sessionDescriptionDefault)}
    do: [ :sessionDescription | dict at: sessionDescription name put: sessionDescription ].
  sessionMap := dict
!

offsetBounds: aPoint
    | newBounds |
    newBounds := Dictionary new.
    bounds
        keysAndValuesDo: [ :locationName :rectangle | newBounds at: locationName put: (rectangle translateBy: aPoint) ].
    ^ newBounds
!

sessionMap
	sessionMap ifNil: [ sessionMap := Dictionary new ].
	^ sessionMap
!

sessionNamed: aString
	^ sessionMap at: aString
! !

!TDTopezClient class methodsFor: 'layout'!

baseWidth
	| font string |
	"font := TextStyle defaultFont.
	string := String new: 80 withAll: 'M'."
	^ 400 @ 25
!

initializeBounds
  "self initialize"

  | base width height classListsOrigin methodOrigin methodListOrigin top listWidth fullHeight halfHeight codeWidth hierarcyOrigin classDefOrigin thirdHeight twoThirdHeight thirdListWindowExtent listWindowExtent codeWindowExtent debuggerWidth |
  base := self baseWidth.	"680"
  width := base x / 80.0 * 1.1.
  height := (base y * 1.30) asInteger.
  codeWidth := (width * self codeWindowWidth) asInteger.	"540 + 180 - 40"
  top := (height * self windowOrigin y) asInteger.	"10"
  classListsOrigin := (self windowOrigin x * width) asInteger.	"35 - 10"
  fullHeight := self codeWindowHeight * height.	"420"
  halfHeight := fullHeight // 2.	"210"
  thirdHeight := fullHeight // 3.	"140"
  twoThirdHeight := 2 * thirdHeight.
  listWidth := (self listWindowWidth * width) asInteger.	"250 - 10"
  debuggerWidth := 2 * listWidth.
  listWindowExtent := listWidth @ twoThirdHeight.
  thirdListWindowExtent := listWidth @ thirdHeight.
  codeWindowExtent := codeWidth @ fullHeight.
  methodOrigin := classListsOrigin + listWidth.
  methodListOrigin := methodOrigin + codeWidth.
  hierarcyOrigin := classListsOrigin + listWidth.
  classDefOrigin := hierarcyOrigin + listWidth.
  bounds
    at: #'configurations'
      put: (classListsOrigin @ top extent: thirdListWindowExtent);
    at: #'packages'
      put:
        (classListsOrigin @ (top + thirdHeight) extent: thirdListWindowExtent);
    at: #'superclasses'
      put: (hierarcyOrigin @ top extent: thirdListWindowExtent);
    at: #'classes'
      put:
        (classListsOrigin @ (top + twoThirdHeight) extent: listWidth @ twoThirdHeight);
    at: #'subclasses'
      put:
        (classListsOrigin @ (top + (thirdHeight + fullHeight))
            extent: thirdListWindowExtent);
    at: #'classDef'
      put: (classDefOrigin @ top extent: codeWidth - listWidth @ thirdHeight);
    at: #'method'
      put: (hierarcyOrigin @ (top + thirdHeight) extent: codeWindowExtent);
    at: #'instanceSelectors'
      put: (hierarcyOrigin + codeWidth @ top extent: listWindowExtent);
    at: #'classSelectors'
      put:
        (hierarcyOrigin + codeWidth + listWidth @ top extent: listWindowExtent);
    at: #'implementors'
      put:
        (hierarcyOrigin + codeWidth @ (top + twoThirdHeight)
            extent: 2 * listWidth @ twoThirdHeight);
    at: #'debugger'
      put:
        (hierarcyOrigin + codeWidth @ (top + twoThirdHeight)
            extent: debuggerWidth @ twoThirdHeight);
    at: #'receiver'
      put:
        (hierarcyOrigin + codeWidth @ (top + thirdHeight + codeWindowExtent y)
            extent: listWidth @ twoThirdHeight);
    at: #'context'
      put:
        (hierarcyOrigin + codeWidth + listWidth
            @ (top + thirdHeight + codeWindowExtent y)
            extent: listWidth @ twoThirdHeight);
    at: #'evaluator'
      put:
        (classListsOrigin @ (top + thirdHeight + codeWindowExtent y)
            extent: codeWidth @ twoThirdHeight);
    at: #'inspector'
      put:
        (classListsOrigin + codeWidth @ (top + thirdHeight + codeWindowExtent y)
            extent: codeWidth @ twoThirdHeight);
    yourself
! !

Object subclass: #TDWindowStatus
	instanceVariableNames: 'windows namedWindows activeWindowIndex shellWindowCount shellWindows'
	package: 'Topez-Client-GemStone'!

!TDWindowStatus methodsFor: 'accessing'!

activeWindowIndex
    ^ activeWindowIndex
!

activeWindowModel
    (activeWindowIndex < 1 or: [ activeWindowIndex > windows size ])
        ifTrue: [ ^ nil ].
    ^ (windows at: activeWindowIndex) model
!

close
  (windows select: [ :each | each notNil ])
    do: [ :window | 
      (window model isKindOf: TodeEditor)
        ifTrue: [ 
          window model windowIsClosing.
          window delete ] ]
!

collapse
  (windows select: [ :each | each notNil ])
    do: [ :window | 
      (window model isKindOf: TodeEditor)
        ifTrue: [ window collapse ] ]
!

expand
    (windows select: [ :each | each notNil ]) do: [ :window | window expand ]
!

namedWindows
    namedWindows ifNil: [ namedWindows := Dictionary new ].
    ^ namedWindows
!

namedWindows: anObject
	namedWindows := anObject
!

nextAvailableWindowId
    1 to: windows size do: [ :index | (windows at: index) ifNil: [ ^ index ] ].
    self error: 'No slots available for windows'
!

nextShellWindowId
  ^ shellWindowCount := self shellWindowCount + 1
!

registerShellWindow: aWindow
  self shellWindows add: aWindow
!

shellWindowCount
  shellWindowCount ifNil: [ shellWindowCount := 0 ].
  ^ shellWindowCount
!

shellWindows
  shellWindows ifNil: [ shellWindows := IdentitySet new ].
  ^ shellWindows
!

unregisterShellWindow: aWindow
  | theShell index |
  theShell := aWindow model cliShell.
  self shellWindows remove: aWindow ifAbsent: [  ].
  index := windows indexOf: aWindow.
  index > 0
    ifTrue: [ windows at: index put: nil ].
  windows
    do: [ :window | 
      window ~~ nil
        ifTrue: [ 
          (window ~~ aWindow and: [ window model topez shell == theShell ])
            ifTrue: [ 
              window model windowIsClosing.
              window delete ] ] ]
!

windowActive: aSystemWindow
  | index |
  index := windows indexOf: aSystemWindow.
  index == 0
    ifTrue: [ ^ self ].
  activeWindowIndex := index
!

windowAt: aWindowId
    ^ windows at: aWindowId
!

windowAt: windowId put: window
    (window == nil and: [ windowId == activeWindowIndex ])
        ifTrue: [ activeWindowIndex := 0 ].
    windows at: windowId put: window
!

windowIdNamed: aSymbol
    ^ self namedWindows at: aSymbol ifAbsent: [ self namedWindows at: aSymbol put: self nextAvailableWindowId ]
!

windowIsClosing
  "close all windows when last shell window is closed"

  self shellWindows isEmpty not
    ifTrue: [ ^ self ].
  (windows select: [ :each | each notNil ])
    do: [ :window | 
      window model windowIsClosing.
      window delete ].
  windows detect: [ :window | window notNil ] ifNone: [ ^ self ]
!

windowNamesAndIds
    | namesAndIds |
    namesAndIds := OrderedCollection new.
    1 to: windows size do: [ :windowId | 
        | name |
        (windows at: windowId)
            ifNotNil: [ :win | 
                name := windowId printString , '. ' , (self namedWindows keyAtValue: windowId ifAbsent: [ '' ]).
                namesAndIds
                    add:
                        name
                            ->
                                {windowId.
                                (win label)} ] ].
    ^ namesAndIds sort: [ :a :b | (a value at: 2) <= (b value at: 2) ]
! !

!TDWindowStatus methodsFor: 'initialize-release'!

initialize
	"windows := WeakArray new: 100 withAll: nil."
    windows := Array new: 100 withAll: nil.
    activeWindowIndex := 0
! !

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

