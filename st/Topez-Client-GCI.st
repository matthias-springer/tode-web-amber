Smalltalk current createPackage: 'Topez-Client-GCI'!
Object subclass: #GciErrSType
	instanceVariableNames: 'library args argsCount category context exceptionObj fatal message number reason address exceptionObjClassName'
	package: 'Topez-Client-GCI'!

!GciErrSType methodsFor: 'accessing'!

argCount
	^ args size
!

args
	^ args
!

argsSize
	10 < argsCount
		ifTrue: [self error: 'Argument count too high: ' , argsCount printString].
	^ argsCount
!

category
	^ category
!

context
	^ context
!

exceptionObj
	^ exceptionObj
!

exceptionObjClassName
	^ exceptionObjClassName
!

fatal
	^ fatal
!

message
	^ message
!

number
	^ number
! !

!GciErrSType methodsFor: 'printing'!

printOn: aStream
  aStream
    nextPutAll: self class name asString , '(err=' , self number asString , ')'
! !

!GciErrSType methodsFor: 'private'!

initialize: aGciLibrary
	library := aGciLibrary.
	(aGciLibrary apiGciErr: self)
		ifFalse: [^ self].
	self readMessage.
	library := nil.
!

oopTypeAt: anInteger
	"Convert offset to zero-based offset"

	^library oopTypeAtAddress: address offset: anInteger - 1.
!

readArguments
  | argsSize ofs |
  argsSize := self argsSize.
  args := Array new: argsSize.
  ofs := self argsOffset.
  1 to: argsSize do: [ :i | 
    args at: i put: (library localFor: (self oopTypeAt: ofs)).
    ofs := ofs + 8 ]
!

readMessage
	message := message copyReplaceAll: Character lf with: Character cr.
! !

!GciErrSType methodsFor: 'testing'!

isBreakpoint
  ^ {(self class errBreakpoint).
  (self class errStackBreakpoint).
  (self class errCodeBreakpoint)} includes: self number
!

isCompileError
  ^ self number = self class errCompilerError
!

isHalt
  ^ self number = self class errHalt
! !

!GciErrSType methodsFor: 'topez-common-core'!

asGsRuntimeException: aGciSession
  | notificationClass |
  notificationClass := self isBreakpoint
    ifTrue: [ GsBreakpointNotification ]
    ifFalse: [ 
      self isCompileError
        ifTrue: [ GsCompileErrorNotification ]
        ifFalse: [ 
          number = 121000
            ifTrue: [ GsTopezCommandErrorNotification ]
            ifFalse: [ 
              self isHalt
                ifTrue: [ GsHaltNotification ]
                ifFalse: [ GsErrorNotification ] ] ] ].
  ^ notificationClass new
    gciErrSType: self;
    topez: aGciSession topez;
    yourself
!

initializeUsingSton: aGciLibrary session: aTodeSession
	library := aGciLibrary.
	(aGciLibrary apiGciErr: self)
		ifFalse: [^ self].
	self readMessage.
	(number = 4100 or: [number = 4040])
		ifTrue: [self readArguments]
		ifFalse: [self readArgumentsAndExceptionClassUsingStonIn: aTodeSession].
	library := nil.
!

readArgumentsAndExceptionClassUsingStonIn: aTodeSession
  | argsSize ofs expressionStream stonString answerArray objectArray classNameArray Name is exceptionObjInClassNameArray |
  argsSize := self argsSize.
  args := Array new: argsSize.
  expressionStream := WriteStream on: String new.
  expressionStream
    nextPutAll: '(' , aTodeSession todeServerAccessString , ' for: ';
    nextPutAll: aTodeSession shell shellId printString;
    nextPutAll: ') reifyExceptionArgsForOopList: {'.
  ofs := self argsOffset.
  1 to: argsSize do: [ :i | 
    expressionStream
      nextPutAll: (self oopTypeAt: ofs) asOop printString;
      nextPutAll: '. '.
    ofs := ofs + 8 ].
  exceptionObjInClassNameArray := false.
  self exceptionObj
    ifNil: [ 
      exceptionObjInClassNameArray := true.
      expressionStream
        nextPutAll: '} exceptionObjAndClassNameFrom: ';
        nextPutAll: self number asString ]
    ifNotNil: [ 
      expressionStream
        nextPutAll: '} classNamesForOopList: {';
        nextPutAll: self exceptionObj asOop printString;
        nextPut: '}' ].
  [ 
  stonString := aTodeSession
    executeStringExpectingStringNB: expressionStream contents
    envId: aTodeSession environmentId ]
    on: Error
    do: [ :ex | self halt ].
  answerArray := STON fromString: stonString.
  objectArray := answerArray at: 1.
  1 to: argsSize do: [ :i | 
    args at: i put: (objectArray at: i).
    ofs := ofs + 8 ].
  classNameArray := answerArray at: 2.
  exceptionObjInClassNameArray
    ifTrue: [ 
      | exceptionObjOop |
      exceptionObjOop := classNameArray at: 1.
      exceptionObj := library oopTypeFromInteger: exceptionObjOop.
      exceptionObjClassName := classNameArray at: 2 ]
    ifFalse: [ 
      classNameArray isEmpty not
        ifTrue: [ exceptionObjClassName := classNameArray at: 1 ] ]
! !

GciErrSType class instanceVariableNames: 'errCompilerError errError errHalt errBreakpoint errCodeBreakpoint errStackBreakpoint'!

!GciErrSType class methodsFor: 'constants'!

errBreakpoint
  ^ errBreakpoint
!

errCodeBreakpoint
  ^ errCodeBreakpoint
!

errCompilerError
  ^ errCompilerError
!

errError
  ^ errError
!

errHalt
  ^ errHalt
!

errStackBreakpoint
  ^ errStackBreakpoint
! !

!GciErrSType class methodsFor: 'initialize-release'!

initialize
  "self initialize"
  errCompilerError := 1001.
  errHalt := 2709.
  errError := 2710.
  errBreakpoint := 6002.
  errCodeBreakpoint := 6005.
  errStackBreakpoint := 6006
! !

!GciErrSType class methodsFor: 'instance creation'!

library: aGciLibrary

	| instance |
	instance := self new
		initialize: aGciLibrary;
		yourself.
	instance category isNil ifTrue: [^nil].
	^instance.
!

library: aGciLibrary session: aTodeSession
  | instance |
  instance := self new
    initializeUsingSton: aGciLibrary session: aTodeSession;
    yourself.
  instance category isNil
    ifTrue: [ ^ nil ].
  ^ instance
! !

Object subclass: #GciLibrary
	instanceVariableNames: 'sessionId'
	package: 'Topez-Client-GCI'!

!GciLibrary methodsFor: 'API'!

apiGciExecuteStr: aString a: anOop
	^ self apiGci: 'execute_str' data: {'string'->aString. 'oop'->anOop} asDictionary
!

apiGciExecuteStr: aString a: anOop a: envId
	^ self apiGci: 'execute_str' data: {'string'->aString. 'oop'->anOop. 'envId'->envId} asDictionary
!

apiGciGetSessionId
	sessionId := self apiNoSessionGci: 'get_session_id' data: Dictionary new.
	^ sessionId
!

apiGciInit
	^ self apiGci: 'init'
!

apiGciLogin: userName a: password
	"TODO: think about return value"
	sessionId := self apiGci: 'login' data: {'user_id'->userName. 'password'->password} asDictionary.
	^ true
!

apiGciLongToOop: anInteger
	^ self apiGci: 'long_to_oop' data: {'integer'->anInteger} asDictionary
!

apiGciNbExecuteStr: aString a: anOop a: envId
	^ self apiGci: 'nb_execute_str' data: {'string'->aString. 'oop'->anOop. 'envId'->envId} asDictionary
!

apiGciNewString: aString
	^ self apiGci: 'new_string' data: {'string'->aString} asDictionary
!

apiGciPerform: aReceiver a: aSelector a: aListOfArgs
	^ self apiGci: 'perform' data: {'receiver'->aReceiver getHandle. 'selector'->aSelector. 'args'->(self prepareListOfArgs: aListOfArgs)} asDictionary
!

apiGciSetNet: stoneName a: hostUserID a: hostPassword a: gemService
	"TODO: should probably not be implemented here"
!

apiGciSetSessionId: aNumber
	"Cache session id locally and update on API calls. This is necessary
	because multiple browser session could be connect to the Ruby backend."
	
	sessionId := aNumber
!

apiGciVersion
	^ self apiGci: 'version'
! !

!GciLibrary methodsFor: 'API convenience'!

apiGciExecuteStrExpectingStr: aString a: anOop
	^ self apiGci: 'execute_str_expecting_str' data: {'string'->aString. 'oop'->anOop} asDictionary
!

apiGciExecuteStrExpectingStr: aString a: anOop a: envId
	^ self apiGci: 'execute_str_expecting_str' data: {'string'->aString. 'oop'->anOop. 'envId'->envId} asDictionary
! !

!GciLibrary methodsFor: 'constants'!

oopAsciiNul
	^ 28
!

oopClassArray
	^ 66817
!

oopClassByteArray
	^ 103425
!

oopClassDoubleByteString
	^ 143873
!

oopClassDoubleByteSymbol
	^ 144129
!

oopClassQuadByteString
	^ 144385
!

oopClassQuadByteSymbol
	^ 144641
!

oopClassString
	^ 74753
!

oopClassSymbol
	^ 110849
!

oopClassSystem
	^ 76033
!

oopClassUnicode16
	^ 154625
!

oopClassUnicode32
	^ 154881
!

oopClassUnicode7
	^ 154369
!

oopFalse
	^ 12 "16r0C"
!

oopGemStoneError
	^ 231169
!

oopIllegal
	^ 1 "16r01"
!

oopInvalid
	^ 0 "16r0"
!

oopMaxSmallInteger
	^ 16r7FFFFFFFFFFFFFFA
!

oopMinSmallInteger
	^ 16r8000000000000002
!

oopMinusOne
	^ 16rFFFFFFFFFFFFFFFA
!

oopNil
	^ 20 "16r14"
!

oopOne
	^ 10
!

oopRemoteNil
	^ 276 "16r114"
!

oopTrue
	^ 268	"16r10C"
!

oopTwo
	^ 18
!

oopTypeClass
	^ OopType
!

oopZero
	^ 2
! !

!GciLibrary methodsFor: 'error handling'!

getAndClearLastErrorUsingSton: aTodeSession
  ^ self gciErrSTypeClass library: self session: aTodeSession
! !

!GciLibrary methodsFor: 'oop access'!

floatToSmallDouble: aFloat
	self error: 'not implemented yet'.
! !

!GciLibrary methodsFor: 'proxy'!

apiGci: command
	^ self apiGci: command data: Dictionary new.
!

apiGci: command data: aDictionary
	|params result|
	params := aDictionary copy.
	"TODO: think about session handling"
	"params at: '!!session_id' put: sessionId."
	
	Transcript show: 'GciLibrary>>apiGci: ', command asString, ' data: ', params asString.
	
	Transcript show: 'result: ',  (Ajax ajaxSync: '/gci/', command data: params asJSON) responseText asString.
	
	result := (Ajax ajaxSync: '/gci/', command data: params asJSON) responseText parseJSON.
	result success ifFalse: [Error signal: command, ' GCI API call failed. ', result exception].
	^ result result
!

apiNoSessionGci: command data: aDictionary
	Transcript show: 'GciLibrary>>apiNoSessionGci: ', command asString, ' data: ', aDictionary asString.
	^ Ajax ajaxSync: '/gci/', command data: aDictionary asJSON
! !

!GciLibrary methodsFor: 'wrapper'!

fetchChars: oop
	^ self apiGci: 'fetch_str' data: {'oop'->oop} asDictionary
!

gciErrSTypeClass
	^ GciErrSType
!

getAndClearLastError
	Transcript show: 'called getAndClearLastError', Character cr.
	"TODO: implement"
	
	^ false
!

oopFor: anObject
  anObject isNil
    ifTrue: [ ^ self oopNil asOop ].
  (anObject isKindOf: OopType)
    ifTrue: [ ^ anObject asOop ].
  (anObject isInteger)
    ifTrue: [ ^ self apiGciLongToOop: anObject ].
  (anObject isKindOf: String)	"ByteString"
    ifTrue: [ ^ self apiGciNewString: anObject ].
  (anObject isKindOf: Boolean)
    ifTrue: [ 
      ^ (anObject
        ifTrue: [ self oopTrue ]
        ifFalse: [ self oopFalse ]) asOop ].
  (anObject isNumber)
    ifTrue: [ ^ (self floatToSmallDouble: anObject) asOop ].
  ^ (anObject respondsTo: #'asOopTypeWith:')
    ifTrue: [ ^ (anObject asOopTypeWith: self oopTypeClass) asOop ]
    ifFalse: [ self oopNil asOop ]
!

oopOrValueFor: anObject
  anObject isNil
    ifTrue: [^ OopOrValue forOop: self oopNil asOop].
  (anObject isKindOf: OopType)
    ifTrue: [^ OopOrValue forOop: anObject asOop].
  (anObject isInteger)
    ifTrue: [^ OopOrValue forInteger: anObject].
  (anObject isNumber)
    ifTrue: [^ OopOrValue forFloat: anObject].
  (anObject isKindOf: String)
    ifTrue: [^ OopOrValue forString: anObject].
  (anObject isKindOf: Boolean)
    ifTrue: [ 
      ^ anObject
        ifTrue: [OopOrValue forOop: self oopTrue asOop]
        ifFalse: [OopOrValue forOop: self oopFalse asOop]].
  ^ (anObject respondsTo: #'asOopTypeWith:')
    ifTrue: [^ OopOrValue forOop: (anObject asOopTypeWith: self oopTypeClass) asOop]
    ifFalse: [^ OopOrValue forOop: self oopNil asOop]
!

pollForResult
	Transcript show: 'library: polling for result.', Character cr.
	^ self apiGci: 'poll_for_result'
!

prepareListOfArgs: args
	^ args collect: [:arg | self oopOrValueFor: arg]
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

Object subclass: #OopOrValue
	instanceVariableNames: 'value type'
	package: 'Topez-Client-GCI'!

!OopOrValue methodsFor: 'accessing'!

type
	^ type
!

type: aSymbol
	type := aSymbol.
!

value
	^ value
!

value: anObject
	value := anObject.
! !

!OopOrValue methodsFor: 'converting'!

asJSON
	^ {#value -> self value. #type -> self type} asDictionary asJSON
! !

!OopOrValue class methodsFor: 'instance creation'!

forFloat: anObject
	^ self new
		value: anObject;
		type: #float;
		yourself
!

forInteger: anObject
	^ self new
		value: anObject;
		type: #integer;
		yourself
!

forOop: anInteger
	^ self new
		value: anInteger;
		type: #oop;
		yourself
!

forString: anObject
	^ self new
		value: anObject;
		type: #string;
		yourself
!

forValue: anObject
	^ self new
		value: anObject;
		type: #object;
		yourself
! !

Object subclass: #OopType
	instanceVariableNames: 'handle'
	package: 'Topez-Client-GCI'!

!OopType methodsFor: 'comparison'!

= anOopType

	^self class == anOopType class and: [
		self asOop = anOopType asOop].
!

hash

	^ self getHandle
! !

!OopType methodsFor: 'converting'!

asInteger

	| int |
	0 <= (int := self getHandle) ifTrue: [^int].
	^int negated + 1.
!

asOop
	^ handle
!

asOopTypeWith: anOopTypeClass
    ^ self
!

gciLocalForLibrary: aGciLibrary
  ^ aGciLibrary localForOopType: self
!

oopTypeFor: anObject forGciLibrary: aGciLibrary

	^self
! !

!OopType methodsFor: 'finalization'!

finalizeForSession: aGciSession

	"Transcript cr; show: 'finalizeForSession: ', self asInteger printString, ' -> ', aGciSession isValid printString."
	aGciSession isValid ifFalse: [ ^self ].
	"Can't make GCI call at this time ... finalization occuring in separate thread and we could end up making concurrent calls'"
	"aGciSession serverPerform: 'unregisterDependent:' with: self."
! !

!OopType methodsFor: 'printing'!

printOn: aStream

	aStream nextPutAll: 'Oop('.
	self asInteger printOn: aStream.
	aStream nextPut: ')'.
! !

!OopType methodsFor: 'private'!

getHandle
	"Private. Return the handle used to represent the external entitiy."
	^handle
!

setHandle: anObject
	"Private. Set the handle used to represent the external entity."
	handle := anObject
! !

!OopType class methodsFor: 'instance creation'!

fromHandle: aHandle
	^self basicNew setHandle: aHandle
!

fromInteger: anInteger

	^self fromHandle: anInteger.
! !

