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

accumulateText: line
    | actionArray result stream |
    (line isNil or: [ line beginsWith: '%' ])
        ifFalse: [ 
            inputStream
                nextPutAll: line;
                cr.
            ^ '' ].
    actionArray := self actionStack removeLast.
    stream := inputStream.
    promptString := actionArray at: 2.
    inputStream := actionArray at: 1.
    ^ ((actionArray at: 3) value: stream) convertTDEvaluateTokenResponseToText
!

accumulateTextAndDo: resultBlock
  self actionStack
    add:
      {inputStream.
      (self promptString).
      [ :input | 
      self exception: nil.
      resultBlock value: input ]}.
  inputStream := WriteStream on: String new.
  promptString := ''
!

accumulateTextAndServerDo: serverBlockOop
  | messageSend |
  messageSend := TZGsMessageSend new
    topez: self topezClient;
    receiver: self topezClient topezServerProxy;
    selector: 'serverTextDo:with:';
    arguments: #();
    transform: #'native' -> nil.
  self
    accumulateTextAndDo: [ :doitStream | 
      messageSend
        valueWithArguments:
          {(self session asOopType: serverBlockOop).
          (doitStream contents)} ].
  ^ nil
!

actionStack
    actionStack ifNil: [ actionStack := OrderedCollection new ].
    ^ actionStack
!

addToHistory: line
  self history add: line.
  historyIndex := self history size
!

adornmentColor
  ^ adornmentColor
!

autoCommit
	autoCommit ifNil: [ autoCommit := true ].
	^ autoCommit
!

autoCommitDisabled
  autoCommit := false.
  promptString := nil
!

builtIns
	^ #('logout' 'close' 'collapse' 'exit' 'expand')
!

evaluate: aString
	  "TODO: error handling"
  "["
	  | line stream result |
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
  ^ result 
"]
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
      ^ errorMessage ]"
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

!TDTopezClient methodsFor: 'not yet classified'!

accumulateTextAndServerDo: serverBlockOop
  ^ self shell accumulateTextAndServerDo: serverBlockOop
!

activeWindowServerModel
  | model clientElement |
  model := self windowStatus activeWindowModel.
  model == nil
    ifTrue: [ ^ nil ].
  clientElement := model activeEditor clientElement.
  clientElement == nil
    ifTrue: [ ^ nil ].
  ^ clientElement clientElementOop
!

adornmentColor
    ^ self shell adornmentColor
!

autoCommitDisabled
  self shell autoCommitDisabled
!

bounds
  ^ self class bounds
!

currentWindowId: anInteger
  ^ (self windowStatus windowAt: anInteger)
    ifNotNil: [ :window | 
      window isActive
        ifFalse: [ 
          window
            expand;
            makeSecondTopmost ].
      window ]
!

dbContinue: processOop
  ^ self
    handleDebugExceptionsDuring: [ self session continue: (self session asOopType: processOop) ]
!

dbStep: level forProcessOop: processOop
  ^ self
    handleDebugExceptionsDuring: [ self session stepWith: (self session asOopType: processOop) level: level ]
!

editElement: aClientElement aspect: aspectSelector label: labelString inWindow: windowIdOrNil at: windowLocation
  | windowId label newWindow win selectedIndex |
  windowId := windowIdOrNil ifNil: [ windowId := self nextAvailableWindowId ].
  windowId == 0
    ifTrue: [ windowId := self nextAvailableWindowId ].
  self currentWindowId: windowId.
  label := labelString.
  newWindow := (self windowStatus windowAt: windowId) isNil.
  (win := self editorWindowAt: windowId) model
    perform: aspectSelector;
    clientElement: aClientElement;
    windowId: windowId;
    label: label.
  newWindow
    ifTrue: [ 
      | bounds |
      bounds := self bounds
        at: windowLocation
        ifAbsent: [ self error: 'Unknown window location: ' , windowLocation printString ].
      win
        extent: bounds extent;
        position: bounds origin ].
  selectedIndex := aClientElement selectedIndex.
  selectedIndex ifNil: [ selectedIndex := 0 ].
  win model listIndex: selectedIndex.
  selectedIndex == 0
    ifTrue: [ 
      aClientElement highlightedIndex
        ifNotNil: [ :highlightedIndex | 
          highlightedIndex > 0
            ifTrue: [ win model setListIndex: highlightedIndex ] ] ].
  aClientElement activateElement.
  ^ windowId
!

editStonElement: aStonString
  | clientElement aWindowId |
  clientElement := STON fromString: aStonString.
  clientElement topez: self.
  aWindowId := clientElement editorWindowId.
  (aWindowId == nil and: [ clientElement editorWindowName ~~ nil ])
    ifTrue: [ aWindowId := self windowIdNamed: clientElement editorWindowName ].
  ^ self
    editElement: clientElement
    aspect: clientElement editorAspectSelector
    label: clientElement editorWindowLabel
    inWindow: aWindowId
    at: clientElement editorWindowLocation
!

editorWindowAt: windowId
  | editorWindow |
  (editorWindow := self windowStatus windowAt: windowId)
    ifNil: [ 
      editorWindow := TodeEditor new
        topez: self;
        open.
      self windowStatus windowAt: windowId put: editorWindow ].
  ^ editorWindow
!

environmentId
  ^ 0
!

evaluateTokenMessage
  evaluateTokenMessage
    ifNil: [ 
      evaluateTokenMessage := TZGsMessageSend new
        topez: self;
        receiver: (self session asOopType: self topezServerOop);
        selector: 'evaluateSTONTokens:';
        arguments: #();
        transform: #'native' -> nil ].
  ^ evaluateTokenMessage
!

evaluateTokens: tokens
  | stonString |
  stonString := STON toString: tokens.
  ^ self session
    executeStringExpectingStringNB:
      '(' , self todeServerAccessString , ' for: ' , self shell shellId asString
        , ') evaluateSTONTokens:' , stonString printString
    envId: self environmentId
!

evaluator
    ^ self
!

exception: anException
  self exception: anException context: nil
!

exception: anException context: context
  self setExceptionMessage
    valueWithArguments:
      {anException.
      context}
!

handleDebugExceptionsDuring: aBlock
  "if you make changes here (like adding new return values), see TDDebugTool>>debugExceptionSymbols"

  | result |
  [ result := aBlock value ]
    on: GsBreakpointNotification , GsHaltNotification , GsErrorNotification
    do: [ :ex | 
      | errorNumber gciErrorClass |
      (ex isKindOf: GsErrorNotification)
        ifTrue: [ 
          "error occurred during execution"
          ^ #'error' ].
      gciErrorClass := self session library gciErrSTypeClass.
      errorNumber := ex errorNumber.
      errorNumber = 6002
        ifTrue: [ 
          "single step breakpoint ... as expected"
          ^ #'singleStep' ].
      errorNumber = 6005
        ifTrue: [ 
          "method breakpoint"
          ^ #'breakpoint' ].
      errorNumber = gciErrorClass errHalt
        ifTrue: [ 
          "halt occurred during execution"
          ^ #'halt' ].
      errorNumber = 6006
        ifTrue: [ 
          "return from method or block breakpoint ... as expected"
          ^ #'blockOrMethodReturn' ].
      self error: 'another breakpoint error number?' ].
  ^ result
!

informWarning: aDescription
  | answer process |
  answer := UIManager default
    confirm: aDescription
    trueChoice: 'Proceed'
    falseChoice: 'Abort'
    cancelChoice: 'Debug'
    default: false.
  answer ifNil: [ ^ #'debug' ].
  answer
    ifTrue: [ ^ #'resume' ].
  process := Processor activeProcess.
  UIManager default spawnNewProcessIfThisIsUI: process.
  process terminate
!

login
  | desc sess |
  TZGemStoneProxyBehavior resetAllGlobalNames.	"reset the cache on login"
  desc := self sessionDescription.
  sess := self todeSessionClass new
    topez: self;
    yourself.
  (sess loginWith: self sessionDescription)
    ifFalse: [ 
      | gciError messageText |
      gciError := sess getAndClearLastError.
      messageText := gciError message.
      ^ Error
        signal:
          messageText
            ,
              ' For further information about login failures, check the gem log file' ].
  ^ sess
!

logout
    | sess |
    session ifNil: [ ^ self ].
    sess := session.
    session := nil.
    sess logout
!

nextAvailableWindowId
    ^ self windowStatus nextAvailableWindowId
!

openDebugger
  self openDebuggerMessage value
!

openDebuggerMessage
  openDebuggerMessage
    ifNil: [ 
      openDebuggerMessage := TZGsMessageSend new
        topez: self;
        receiver: (self session asOopType: self topezServerOop);
        selector: 'openDebugger';
        arguments: #();
        transform: #'raw' -> nil ].
  ^ openDebuggerMessage
!

postCopy
  "only the session is shared on copy"

  shell := topezServerProxy := evaluateTokenMessage := setExceptionMessage := resetObjInMessage := nil
!

resetAllGlobalNames
  TZGemStoneProxyBehavior resetAllGlobalNames.
  ^ nil
!

resetObjIn
    self resetObjInMessage value
!

resetObjInMessage
  resetObjInMessage
    ifNil: [ 
      resetObjInMessage := TZGsMessageSend new
        topez: self;
        receiver: (self session asOopType: self topezServerOop);
        selector: 'resetObjIn';
        arguments: #();
        transform: #'raw' -> nil ].
  ^ resetObjInMessage
!

session
  session
    ifNil: [ 
      session := self login.
      self topezServerProxy ].
  ^ session
!

sessionDescription
  sessionDescription
    ifNil: [ sessionDescription := self class sessionNamed: self shell sessionName ].
  ^ sessionDescription
!

sessionDescription: aSessionDescription
    sessionDescription := aSessionDescription
!

setExceptionMessage
  setExceptionMessage
    ifNil: [ 
      setExceptionMessage := TZGsMessageSend new
        topez: self;
        receiver: (self session asOopType: self topezServerOop);
        selector: 'exception:process:';
        arguments: #();
        transform: #'raw' -> nil ].
  ^ setExceptionMessage
!

setFindText: aStringOrText isRegex: isRegex
  | findText colonPosition service |
  findText := aStringOrText.
  service := FindReplaceService default.
  isRegex
    ifTrue: [ service findText: findText isRegex: true ]
    ifFalse: [ 
      (colonPosition := aStringOrText indexOf: ':') > 0
        ifTrue: [ 
          | pattern specials |
          pattern := WriteStream on: String new.
          specials := '^$:\+*[]()'.
          aStringOrText keywords
            do: [ :arg | 
              | convertedArg |
              convertedArg := String
                streamContents: [ :s | 
                  arg
                    do: [ :c | 
                      (specials includes: c)
                        ifTrue: [ s nextPut: '\' ].
                      s nextPut: c ] ].
              pattern nextPutAll: convertedArg ]
            separatedBy: [ pattern nextPutAll: '[^:]+' ].
          service findText: pattern contents isRegex: true ]
        ifFalse: [ service findText: findText isRegex: false ] ].
  service changed: #'newFinding'
!

shell
    ^ shell
!

shell: aShell
    shell := aShell
!

shellHistory
  ^ STON toString: self shell history asArray
!

spawnDebugger: aDebuggerLabel
  ^ self shell spawnDebugger: aDebuggerLabel
!

spawnWindow
  ^ self shell spawnWindow
!

status
    ^ self windowStatus
!

stylerClass
    ^ TZTextStylerST80
!

tabCompletion: commandLine
  ^self tabCompletionMessage value: commandLine
!

tabCompletionMessage
  evaluateTokenMessage
    ifNil: [ 
      tabCompletionMessage := TZGsMessageSend new
        topez: self;
        receiver: (self session asOopType: self topezServerOop);
        selector: 'tabCompletion:';
        arguments: #();
        transform: #'native' -> nil ].
  ^ tabCompletionMessage
!

todeServerAccessString
  ^ 'TDTopezServer'
!

todeServerCreationString
  ^ self todeServerAccessString , ' createFor: ' , self shell shellId asString
!

todeSessionClass
  ^ TodeSession
!

topezServerOop
    ^ self topezServerProxy asInteger
!

topezServerProxy
  topezServerProxy
    ifNil: [ 
      | stonString transcriptOopType topezOop resultArray topezServerOop topezClientOopType |
      [ 
      stonString := self session
        executeStringExpectingStringNB: self todeServerCreationString
        envId: self environmentId ]
        on: GsErrorNotification
        do: [ :ex | self error: 'Unable to log into server:' , ex description ].
      resultArray := STON fromString: stonString.
      topezServerOop := resultArray at: 1.
      transcriptOopType := self session asOopType: (resultArray at: 2).
      topezClientOopType := self session asOopType: (resultArray at: 3).
      topezServerProxy := self session asOopType: topezServerOop.
      self session clientForwarderCache at: transcriptOopType put: Transcript.
      self session clientForwarderCache at: topezClientOopType put: self.
	  "TODO: ask for initials"
      self session
        rawReceiverNB: topezServerProxy
        perform: #'authorInitials:'
        withArgs: {('MatSpr')} ].
  ^ topezServerProxy
!

windowActive: aSystemWindow
    self windowStatus windowActive: aSystemWindow
!

windowIdNamed: aSymbol
    ^ self windowStatus windowIdNamed: aSymbol
!

windowStatus
    ^ self shell windowStatus
! !

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
	"TODO: this was IdentitySet"
  shellWindows ifNil: [ shellWindows := Set new ].
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

Object subclass: #TZGemStoneProxyBehavior
	instanceVariableNames: 'behaviorOop topez allInstVarNames allClassVarNames allSharedPoolNames'
	package: 'Topez-Client-GemStone'!

!TZGemStoneProxyBehavior methodsFor: 'not yet classified'!

allClassVarNames
  allClassVarNames
    ifNil: [ 
      | message list |
      message := TZGsMessageSend new
        topez: self topez;
        receiver: (self session asOopType: self behaviorOop);
        selector: 'allClassVarNames';
        arguments: #();
        transform: #'ston' -> 1.
      self
        critical: [ 
          list := message value.
          allClassVarNames := list collect: [ :each | each asString ] ] ].
  ^ allClassVarNames
!

allClassVarNames: aCollection
  allClassVarNames := aCollection
!

allGlobalNames
  AllGlobalNames
    ifNil: [ 
      | block |
      block := TZGsBlockSend new
        topez: self topez;
        blockSource:
            '[| globalNames |
globalNames := IdentitySet new.
System myUserProfile symbolList do: [:symbolDict |
	globalNames addAll: symbolDict keys].
globalNames asArray]';
        transform: #'ston' -> 1.
      self critical: [ self allGlobalNames: block value ] ].
  ^ AllGlobalNames
!

allInstVarNames
  allInstVarNames
    ifNil: [ 
      | message list |
      message := TZGsMessageSend new
        topez: self topez;
        receiver: (self session asOopType: self behaviorOop);
        selector: 'allInstVarNames';
        arguments: #();
        transform: #'ston' -> 1.
      self
        critical: [ 
          list := message value.
          allInstVarNames := list collect: [ :each | each asString ] ] ].
  ^ allInstVarNames
!

allInstVarNames: aCollection
  allInstVarNames := aCollection
!

allSharedPoolNames
  allSharedPoolNames
    ifNil: [ 
      | message allSharedPoolsOop block list |
      message := TZGsMessageSend new
        topez: self topez;
        receiver: (self session asOopType: self behaviorOop);
        selector: 'allSharedPools';
        arguments: #();
        transform: #'raw' -> nil.
      allSharedPoolsOop := self critical: [ message value ].
      block := TZGsBlockSend new
        topez: self topez;
        blockSource:
            '[:allSharedPools | | sharedPoolNames |
						sharedPoolNames := IdentitySet new.
						allSharedPools do: [:poolDict |
                         		sharedPoolNames addAll: poolDict keys].
						allSharedPools asArray]';
        transform: #'ston' -> 1.
      self
        critical: [ 
          list := block value: (self session asOopType: allSharedPoolsOop).
          allSharedPoolNames := list collect: [ :each | each ] ] ].
  ^ allSharedPoolNames
!

allSharedPoolNames: aCollection
  allSharedPoolNames := aCollection
!

behaviorOop
    ^ behaviorOop
!

behaviorOop: anInteger
    behaviorOop := anInteger
!

bindingOfClassPool: aString
    ^ self allClassVarNames includes: aString
!

bindingOfGlobal: aString
    ^ self allGlobalNames includes: aString asSymbol
!

bindingOfSharedPool: aString
    ^ self allSharedPoolNames includes: aString asSymbol
!

critical: aBlock
  ^ self class critical: aBlock
!

session
  ^ self topez session
!

topez
    ^ topez
!

topez: anObject
    topez := anObject
! !

TZGemStoneProxyBehavior class instanceVariableNames: 'allGlobalNames gciSemaphore'!

!TZGemStoneProxyBehavior class methodsFor: 'not yet classified'!

allGlobalNames: anObject
	allGlobalNames := anObject.
!

critical: aBlock
  ^ self semaphore critical: aBlock
!

resetAllGlobalNames
    "self resetAllGlobalNames"

    allGlobalNames := nil
!

semaphore
  gciSemaphore ifNil: [ gciSemaphore := Semaphore forMutualExclusion ].
  ^ gciSemaphore
! !

Object subclass: #TZGsExecutable
	instanceVariableNames: 'topez transform'
	package: 'Topez-Client-GemStone'!

!TZGsExecutable methodsFor: 'not yet classified'!

environmentId
  ^ self topez environmentId
!

evaluator
    ^ self topez evaluator
!

perform: actionBlock
  | rawOopType |
  rawOopType := actionBlock value.
  ^ self performTransformOn: rawOopType
!

performTransformOn: anOoptype
  self transform key == #'ston'
    ifTrue: [ 
      | stonString |
      stonString := self session
        receiverNB: self topez topezServerProxy
        perform: #'toString:'
        withArgs: {anOoptype}
        envId: self environmentId.
      ^ (STONReader on: stonString readStream) next ].
  self transform key == #'native'
    ifTrue: [ ^ self session library localFor: anOoptype ].
  ^ anOoptype	"self transform key == #'raw'"
!

session
    ^ self topez session
!

topez
    ^ topez
!

topez: anObject
    topez := anObject
!

transform
    transform ifNil: [ transform := #'ston' -> 1 ].
    ^ transform
!

transform: anObject
	transform := anObject
! !

TZGsExecutable subclass: #TZGsBlockSend
	instanceVariableNames: 'blockOopType numArgs blockSource'
	package: 'Topez-Client-GemStone'!

!TZGsBlockSend methodsFor: 'not yet classified'!

blockOopType
  blockOopType
    ifNil: [ 
      blockOopType := self session
        rawExecuteStringNB: self blockSource
        envId: self environmentId ].
  ^ blockOopType
!

blockSource
    ^ blockSource
!

blockSource: aString
    blockOopType := numArgs := nil.
    blockSource := aString
!

cull: arg
  ^ self perform: [ self session rawReceiverNB: self blockOopType perform: #'cull:' withArgs: {arg} ]
!

cull: arg1 cull: arg2
  ^ self
    perform: [ 
      self session
        rawReceiverNB: self blockOopType
        perform: #'cull:cull:'
        withArgs:
          {arg1.
          arg2} ]
!

cull: arg1 cull: arg2 cull: arg3
  ^ self
    perform: [ 
      self session
        rawReceiverNB: self blockOopType
        perform: #'cull:cull:cull:'
        withArgs:
          {arg1.
          arg2.
          arg3} ]
!

cull: arg1 cull: arg2 cull: arg3 cull: arg4
  ^ self
    perform: [ 
      self session
        rawReceiverNB: self blockOopType
        perform: #'cull:cull:cull:cull:'
        withArgs:
          {arg1.
          arg2.
          arg3.
          arg4} ]
!

numArgs
  numArgs
    ifNil: [ 
      numArgs := self session
        receiverNB: self blockOopType
        perform: #'numArgs'
        withArgs: #()
        envId: self environmentId ].
  ^ numArgs
!

value
  ^ self
    perform: [ 
      self numArgs ~= 0
        ifTrue: [ ^ self error: 'incorrect block args' ].
      self session rawReceiverNB: self blockOopType perform: #'value' withArgs: #() ]
!

value: arg
  ^ self
    perform: [ 
      self numArgs ~= 1
        ifTrue: [ ^ self error: 'incorrect block args' ].
      self session rawReceiverNB: self blockOopType perform: #'value:' withArgs: {arg} ]
!

value: arg1 value: arg2
  ^ self
    perform: [ 
      self numArgs ~= 2
        ifTrue: [ ^ self error: 'incorrect block args' ].
      self session
        rawReceiverNB: self blockOopType
        perform: #'value:value:'
        withArgs:
          {arg1.
          arg2} ]
!

value: arg1 value: arg2 value: arg3
  ^ self
    perform: [ 
      self numArgs ~= 3
        ifTrue: [ ^ self error: 'incorrect block args' ].
      self session
        rawReceiverNB: self blockOopType
        perform: #'value:value:value:'
        withArgs:
          {arg1.
          arg2.
          arg3} ]
!

value: arg1 value: arg2 value: arg3 value: arg4
  ^ self
    perform: [ 
      self numArgs ~= 4
        ifTrue: [ ^ self error: 'incorrect block args' ].
      self session
        rawReceiverNB: self blockOopType
        perform: #'value:value:value:value:'
        withArgs:
          {arg1.
          arg2.
          arg3.
          arg4} ]
!

valueWithArguments: args
  ^ self
    perform: [ 
      self numArgs ~= args size
        ifTrue: [ ^ self error: 'incorrect block args' ].
      self session rawReceiverNB: self blockOopType perform: #'valueWithArguments:' withArgs: args ]
! !

TZGsExecutable subclass: #TZGsMessageSend
	instanceVariableNames: 'receiver selector arguments'
	package: 'Topez-Client-GemStone'!

!TZGsMessageSend methodsFor: 'not yet classified'!

arguments
	^ arguments
!

arguments: anObject
	arguments := anObject
!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
!

selector
	^ selector
!

selector: anObject
	selector := anObject
!

value
  ^ self perform: [ self session rawReceiverNB: self receiver perform: self selector withArgs: {} ]
!

value: arg
  ^ self perform: [ self session rawReceiverNB: self receiver perform: self selector withArgs: {arg} ]
!

valueWithArguments: args
  ^ self perform: [ self session rawReceiverNB: self receiver perform: self selector withArgs: args asArray ]
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

