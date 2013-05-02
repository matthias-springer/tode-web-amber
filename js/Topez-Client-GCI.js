smalltalk.addPackage('Topez-Client-GCI');
smalltalk.addClass('GciErrSType', smalltalk.Object, ['library', 'args', 'argsSize', 'category', 'context', 'exceptionObj', 'fatal', 'message', 'number', 'reason', 'address', 'exceptionObjClassName'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "args",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@args"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"args",{},smalltalk.GciErrSType)})},
args: [],
source: "args\x0a\x09^ args\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "args:",
category: 'accessing',
fn: function (anArray){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
self["@args"]=_st($Array())._new_(_st(self)._argsSize());
_st(_st((1))._to_(_st(self)._argsSize()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
return _st(self["@args"])._at_put_(i,_st($OopType())._fromInteger_(_st(anArray)._at_(i)));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"args:",{anArray:anArray},smalltalk.GciErrSType)})},
args: ["anArray"],
source: "args: anArray\x0a\x09args := Array new: self argsSize.\x0a\x09(1 to: self argsSize) do: [:i |\x0a\x09\x09args at: i put: (OopType fromInteger: (anArray at: i))].",
messageSends: ["new:", "argsSize", "do:", "at:put:", "fromInteger:", "at:", "to:"],
referencedClasses: ["Array", "OopType"]
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "argsSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st((10)).__lt(self["@argsSize"]);
if(smalltalk.assert($1)){
_st(self)._error_(_st("Argument count too high: ").__comma(_st(self["@argsSize"])._printString()));
};
$2=self["@argsSize"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"argsSize",{},smalltalk.GciErrSType)})},
args: [],
source: "argsSize\x0a\x0910 < argsSize\x0a\x09\x09ifTrue: [self error: 'Argument count too high: ' , argsSize printString].\x0a\x09^ argsSize",
messageSends: ["ifTrue:", "error:", ",", "printString", "<"],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "argsSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@argsSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"argsSize:",{anInteger:anInteger},smalltalk.GciErrSType)})},
args: ["anInteger"],
source: "argsSize: anInteger\x0a\x09argsSize := anInteger.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "asGsRuntimeException:",
category: 'topez-common-core',
fn: function (aGciSession){
var self=this;
var notificationClass;
function $GsBreakpointNotification(){return smalltalk.GsBreakpointNotification||(typeof GsBreakpointNotification=="undefined"?nil:GsBreakpointNotification)}
function $GsCompileErrorNotification(){return smalltalk.GsCompileErrorNotification||(typeof GsCompileErrorNotification=="undefined"?nil:GsCompileErrorNotification)}
function $GsTopezCommandErrorNotification(){return smalltalk.GsTopezCommandErrorNotification||(typeof GsTopezCommandErrorNotification=="undefined"?nil:GsTopezCommandErrorNotification)}
function $GsHaltNotification(){return smalltalk.GsHaltNotification||(typeof GsHaltNotification=="undefined"?nil:GsHaltNotification)}
function $GsErrorNotification(){return smalltalk.GsErrorNotification||(typeof GsErrorNotification=="undefined"?nil:GsErrorNotification)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$7,$5;
$1=_st(self)._isBreakpoint();
if(smalltalk.assert($1)){
notificationClass=$GsBreakpointNotification();
} else {
$2=_st(self)._isCompileError();
if(smalltalk.assert($2)){
notificationClass=$GsCompileErrorNotification();
} else {
$3=_st(self["@number"]).__eq((121000));
if(smalltalk.assert($3)){
notificationClass=$GsTopezCommandErrorNotification();
} else {
$4=_st(self)._isHalt();
if(smalltalk.assert($4)){
notificationClass=$GsHaltNotification();
} else {
notificationClass=$GsErrorNotification();
};
};
};
};
$6=_st(notificationClass)._new();
_st($6)._gciErrSType_(self);
_st($6)._topez_(_st(aGciSession)._topez());
$7=_st($6)._yourself();
$5=$7;
return $5;
}, function($ctx1) {$ctx1.fill(self,"asGsRuntimeException:",{aGciSession:aGciSession,notificationClass:notificationClass},smalltalk.GciErrSType)})},
args: ["aGciSession"],
source: "asGsRuntimeException: aGciSession\x0a  | notificationClass |\x0a  notificationClass := self isBreakpoint\x0a    ifTrue: [ GsBreakpointNotification ]\x0a    ifFalse: [ \x0a      self isCompileError\x0a        ifTrue: [ GsCompileErrorNotification ]\x0a        ifFalse: [ \x0a          number = 121000\x0a            ifTrue: [ GsTopezCommandErrorNotification ]\x0a            ifFalse: [ \x0a              self isHalt\x0a                ifTrue: [ GsHaltNotification ]\x0a                ifFalse: [ GsErrorNotification ] ] ] ].\x0a  ^ notificationClass new\x0a    gciErrSType: self;\x0a    topez: aGciSession topez;\x0a    yourself",
messageSends: ["ifTrue:ifFalse:", "isHalt", "=", "isCompileError", "isBreakpoint", "gciErrSType:", "new", "topez:", "topez", "yourself"],
referencedClasses: ["GsBreakpointNotification", "GsCompileErrorNotification", "GsTopezCommandErrorNotification", "GsHaltNotification", "GsErrorNotification"]
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@category"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.GciErrSType)})},
args: [],
source: "category\x0a\x09^ category",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "category:",
category: 'accessing',
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
self["@category"]=_st($OopType())._fromInteger_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"category:",{anInteger:anInteger},smalltalk.GciErrSType)})},
args: ["anInteger"],
source: "category: anInteger\x0a\x09category := OopType fromInteger: anInteger.",
messageSends: ["fromInteger:"],
referencedClasses: ["OopType"]
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.GciErrSType)})},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
self["@context"]=_st($OopType())._fromInteger_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"context:",{anInteger:anInteger},smalltalk.GciErrSType)})},
args: ["anInteger"],
source: "context: anInteger\x0a\x09context := OopType fromInteger: anInteger.",
messageSends: ["fromInteger:"],
referencedClasses: ["OopType"]
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionObj",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@exceptionObj"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"exceptionObj",{},smalltalk.GciErrSType)})},
args: [],
source: "exceptionObj\x0a\x09^ exceptionObj",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionObj:",
category: 'accessing',
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
self["@exceptionObj"]=_st($OopType())._fromInteger_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"exceptionObj:",{anInteger:anInteger},smalltalk.GciErrSType)})},
args: ["anInteger"],
source: "exceptionObj: anInteger\x0a\x09exceptionObj := OopType fromInteger: anInteger.",
messageSends: ["fromInteger:"],
referencedClasses: ["OopType"]
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionObjClassName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@exceptionObjClassName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"exceptionObjClassName",{},smalltalk.GciErrSType)})},
args: [],
source: "exceptionObjClassName\x0a\x09^ exceptionObjClassName",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionObjClassName:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@exceptionObjClassName"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"exceptionObjClassName:",{anObject:anObject},smalltalk.GciErrSType)})},
args: ["anObject"],
source: "exceptionObjClassName: anObject\x0a\x09exceptionObjClassName := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "fatal",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fatal"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fatal",{},smalltalk.GciErrSType)})},
args: [],
source: "fatal\x0a\x09^ fatal",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "fatal:",
category: 'accessing',
fn: function (aChar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fatal"]=aChar;
return self}, function($ctx1) {$ctx1.fill(self,"fatal:",{aChar:aChar},smalltalk.GciErrSType)})},
args: ["aChar"],
source: "fatal: aChar\x0a\x09fatal := aChar.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize:",
category: 'private',
fn: function (aGciLibrary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@library"]=aGciLibrary;
$1=_st(aGciLibrary)._apiGciErr_(self);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._readMessage();
self["@library"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize:",{aGciLibrary:aGciLibrary},smalltalk.GciErrSType)})},
args: ["aGciLibrary"],
source: "initialize: aGciLibrary\x0a\x09library := aGciLibrary.\x0a\x09(aGciLibrary apiGciErr: self)\x0a\x09\x09ifFalse: [^ self].\x0a\x09self readMessage.\x0a\x09library := nil.",
messageSends: ["ifFalse:", "apiGciErr:", "readMessage"],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeUsingSton:session:",
category: 'topez-common-core',
fn: function (aGciLibrary,aTodeSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self["@library"]=aGciLibrary;
$1=_st(aGciLibrary)._apiGciErr_(self);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._readMessage();
$3=_st(_st(self["@number"]).__eq((4100)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@number"]).__eq((4040));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(self)._readArguments();
} else {
_st(self)._readArgumentsAndExceptionClassUsingStonIn_(aTodeSession);
};
self["@library"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initializeUsingSton:session:",{aGciLibrary:aGciLibrary,aTodeSession:aTodeSession},smalltalk.GciErrSType)})},
args: ["aGciLibrary", "aTodeSession"],
source: "initializeUsingSton: aGciLibrary session: aTodeSession\x0a\x09library := aGciLibrary.\x0a\x09(aGciLibrary apiGciErr: self)\x0a\x09\x09ifFalse: [^ self].\x0a\x09self readMessage.\x0a\x09(number = 4100 or: [number = 4040])\x0a\x09\x09ifTrue: [self readArguments]\x0a\x09\x09ifFalse: [self readArgumentsAndExceptionClassUsingStonIn: aTodeSession].\x0a\x09library := nil.",
messageSends: ["ifFalse:", "apiGciErr:", "readMessage", "ifTrue:ifFalse:", "readArguments", "readArgumentsAndExceptionClassUsingStonIn:", "or:", "="],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "isBreakpoint",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st([_st(_st(self)._class())._errBreakpoint(),_st(_st(self)._class())._errStackBreakpoint(),_st(_st(self)._class())._errCodeBreakpoint()])._includes_(_st(self)._number());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBreakpoint",{},smalltalk.GciErrSType)})},
args: [],
source: "isBreakpoint\x0a  ^ {(self class errBreakpoint).\x0a  (self class errStackBreakpoint).\x0a  (self class errCodeBreakpoint)} includes: self number",
messageSends: ["includes:", "number", "errBreakpoint", "class", "errStackBreakpoint", "errCodeBreakpoint"],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompileError",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._number()).__eq(_st(_st(self)._class())._errCompilerError());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isCompileError",{},smalltalk.GciErrSType)})},
args: [],
source: "isCompileError\x0a  ^ self number = self class errCompilerError",
messageSends: ["=", "errCompilerError", "class", "number"],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "isHalt",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._number()).__eq(_st(_st(self)._class())._errHalt());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHalt",{},smalltalk.GciErrSType)})},
args: [],
source: "isHalt\x0a  ^ self number = self class errHalt",
messageSends: ["=", "errHalt", "class", "number"],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@message"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.GciErrSType)})},
args: [],
source: "message\x0a\x09^ message",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},smalltalk.GciErrSType)})},
args: ["aString"],
source: "message: aString\x0a\x09message := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@number"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},smalltalk.GciErrSType)})},
args: [],
source: "number\x0a\x09^ number",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "number:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@number"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"number:",{anInteger:anInteger},smalltalk.GciErrSType)})},
args: ["anInteger"],
source: "number: anInteger\x0a\x09number := anInteger.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTypeAt:",
category: 'private',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@library"])._oopTypeAtAddress_offset_(self["@address"],_st(anInteger).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTypeAt:",{anInteger:anInteger},smalltalk.GciErrSType)})},
args: ["anInteger"],
source: "oopTypeAt: anInteger\x0a\x09\x22Convert offset to zero-based offset\x22\x0a\x0a\x09^library oopTypeAtAddress: address offset: anInteger - 1.",
messageSends: ["oopTypeAtAddress:offset:", "-"],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st(_st(_st(_st(_st(_st(self)._class())._name())._asString()).__comma("(err=")).__comma(_st(_st(self)._number())._asString())).__comma(")"));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.GciErrSType)})},
args: ["aStream"],
source: "printOn: aStream\x0a  aStream\x0a    nextPutAll: self class name asString , '(err=' , self number asString , ')'",
messageSends: ["nextPutAll:", ",", "asString", "number", "name", "class"],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "readArguments",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"readArguments",{},smalltalk.GciErrSType)})},
args: [],
source: "readArguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "readArgumentsAndExceptionClassUsingStonIn:",
category: 'topez-common-core',
fn: function (aTodeSession){
var self=this;
var pArgsSize,ofs,expressionStream,stonString,answerArray,objectArray,classNameArray,Name,is,exceptionObjInClassNameArray;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
pArgsSize=_st(self)._argsSize();
self["@args"]=_st($Array())._new_(pArgsSize);
expressionStream=_st($StringStream())._on_(_st($String())._new());
$1=expressionStream;
_st($1)._nextPutAll_(_st(_st("(").__comma(_st(aTodeSession)._todeServerAccessString())).__comma(" for: "));
_st($1)._nextPutAll_(_st(_st(_st(aTodeSession)._shell())._shellId())._printString());
$2=_st($1)._nextPutAll_(") reifyExceptionArgsForOopList: {");
_st((1))._to_do_(pArgsSize,(function(i){
return smalltalk.withContext(function($ctx2) {
$3=expressionStream;
_st($3)._nextPutAll_(_st(_st(_st(self)._args())._at_(i))._printString());
$4=_st($3)._nextPutAll_(". ");
return $4;
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
exceptionObjInClassNameArray=false;
$5=_st(self)._exceptionObj();
if(($receiver = $5) == nil || $receiver == undefined){
exceptionObjInClassNameArray=true;
exceptionObjInClassNameArray;
$6=expressionStream;
_st($6)._nextPutAll_("} exceptionObjAndClassNameFrom: ");
$7=_st($6)._nextPutAll_(_st(_st(self)._number())._asString());
$7;
} else {
$8=expressionStream;
_st($8)._nextPutAll_("} classNamesForOopList: {");
_st($8)._nextPutAll_(_st(_st(_st(self)._exceptionObj())._asOop())._printString());
$9=_st($8)._nextPut_("}");
$9;
};
_st((function(){
return smalltalk.withContext(function($ctx2) {
stonString=_st(aTodeSession)._executeStringExpectingStringNB_envId_(_st(expressionStream)._contents(),_st(aTodeSession)._environmentId());
return stonString;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
return _st(self)._halt();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
answerArray=_st($STON())._fromString_(stonString);
objectArray=_st(answerArray)._at_((1));
_st((1))._to_do_(pArgsSize,(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(self["@args"])._at_put_(i,_st(objectArray)._at_(i));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
classNameArray=_st(answerArray)._at_((2));
$10=exceptionObjInClassNameArray;
if(smalltalk.assert($10)){
var exceptionObjOop;
exceptionObjOop=_st(classNameArray)._at_((1));
exceptionObjOop;
self["@exceptionObj"]=_st(self["@library"])._oopTypeFromInteger_(exceptionObjOop);
self["@exceptionObj"];
self["@exceptionObjClassName"]=_st(classNameArray)._at_((2));
self["@exceptionObjClassName"];
} else {
$11=_st(_st(classNameArray)._isEmpty())._not();
if(smalltalk.assert($11)){
self["@exceptionObjClassName"]=_st(classNameArray)._at_((1));
self["@exceptionObjClassName"];
};
};
return self}, function($ctx1) {$ctx1.fill(self,"readArgumentsAndExceptionClassUsingStonIn:",{aTodeSession:aTodeSession,pArgsSize:pArgsSize,ofs:ofs,expressionStream:expressionStream,stonString:stonString,answerArray:answerArray,objectArray:objectArray,classNameArray:classNameArray,Name:Name,is:is,exceptionObjInClassNameArray:exceptionObjInClassNameArray},smalltalk.GciErrSType)})},
args: ["aTodeSession"],
source: "readArgumentsAndExceptionClassUsingStonIn: aTodeSession\x0a  | pArgsSize ofs expressionStream stonString answerArray objectArray classNameArray Name is exceptionObjInClassNameArray |\x0a  pArgsSize := self argsSize.\x0a  args := Array new: pArgsSize.\x0a  expressionStream := StringStream on: String new.\x0a  expressionStream\x0a    nextPutAll: '(' , aTodeSession todeServerAccessString , ' for: ';\x0a    nextPutAll: aTodeSession shell shellId printString;\x0a    nextPutAll: ') reifyExceptionArgsForOopList: {'.\x0a  1 to: pArgsSize do: [ :i | \x0a    expressionStream\x0a      nextPutAll: (self args at: i) printString;\x0a      nextPutAll: '. '].\x0a  exceptionObjInClassNameArray := false.\x0a  self exceptionObj\x0a    ifNil: [ \x0a      exceptionObjInClassNameArray := true.\x0a      expressionStream\x0a        nextPutAll: '} exceptionObjAndClassNameFrom: ';\x0a        nextPutAll: self number asString ]\x0a    ifNotNil: [ \x0a      expressionStream\x0a        nextPutAll: '} classNamesForOopList: {';\x0a        nextPutAll: self exceptionObj asOop printString;\x0a        nextPut: '}' ].\x0a  [ \x0a  stonString := aTodeSession\x0a    executeStringExpectingStringNB: expressionStream contents\x0a    envId: aTodeSession environmentId ]\x0a    on: Error\x0a    do: [ :ex | self halt ].\x0a  answerArray := STON fromString: stonString.\x0a  objectArray := answerArray at: 1.\x0a  1 to: pArgsSize do: [ :i | \x0a    args at: i put: (objectArray at: i)].\x0a  classNameArray := answerArray at: 2.\x0a  exceptionObjInClassNameArray\x0a    ifTrue: [ \x0a      | exceptionObjOop |\x0a      exceptionObjOop := classNameArray at: 1.\x0a      exceptionObj := library oopTypeFromInteger: exceptionObjOop.\x0a      exceptionObjClassName := classNameArray at: 2 ]\x0a    ifFalse: [ \x0a      classNameArray isEmpty not\x0a        ifTrue: [ exceptionObjClassName := classNameArray at: 1 ] ]",
messageSends: ["argsSize", "new:", "on:", "new", "nextPutAll:", ",", "todeServerAccessString", "printString", "shellId", "shell", "to:do:", "at:", "args", "ifNil:ifNotNil:", "asString", "number", "asOop", "exceptionObj", "nextPut:", "on:do:", "halt", "executeStringExpectingStringNB:envId:", "contents", "environmentId", "fromString:", "at:put:", "ifTrue:ifFalse:", "oopTypeFromInteger:", "ifTrue:", "not", "isEmpty"],
referencedClasses: ["Array", "String", "StringStream", "Error", "STON"]
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "readMessage",
category: 'private',
fn: function (){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
self["@message"]=_st(self["@message"])._copyReplaceAll_with_(_st($Character())._lf(),_st($Character())._cr());
return self}, function($ctx1) {$ctx1.fill(self,"readMessage",{},smalltalk.GciErrSType)})},
args: [],
source: "readMessage\x0a\x09message := message copyReplaceAll: Character lf with: Character cr.",
messageSends: ["copyReplaceAll:with:", "lf", "cr"],
referencedClasses: ["Character"]
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "reason",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@reason"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"reason",{},smalltalk.GciErrSType)})},
args: [],
source: "reason\x0a\x09^ reason",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "reason:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@reason"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"reason:",{aString:aString},smalltalk.GciErrSType)})},
args: ["aString"],
source: "reason: aString\x0a\x09reason := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType);


smalltalk.GciErrSType.klass.iVarNames = ['errCompilerError','errError','errHalt','errBreakpoint','errCodeBreakpoint','errStackBreakpoint'];
smalltalk.addMethod(
smalltalk.method({
selector: "errBreakpoint",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errBreakpoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errBreakpoint",{},smalltalk.GciErrSType.klass)})},
args: [],
source: "errBreakpoint\x0a  ^ errBreakpoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errCodeBreakpoint",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errCodeBreakpoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errCodeBreakpoint",{},smalltalk.GciErrSType.klass)})},
args: [],
source: "errCodeBreakpoint\x0a  ^ errCodeBreakpoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errCompilerError",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errCompilerError"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errCompilerError",{},smalltalk.GciErrSType.klass)})},
args: [],
source: "errCompilerError\x0a  ^ errCompilerError",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errError",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errError"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errError",{},smalltalk.GciErrSType.klass)})},
args: [],
source: "errError\x0a  ^ errError",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errHalt",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errHalt"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errHalt",{},smalltalk.GciErrSType.klass)})},
args: [],
source: "errHalt\x0a  ^ errHalt",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errStackBreakpoint",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errStackBreakpoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errStackBreakpoint",{},smalltalk.GciErrSType.klass)})},
args: [],
source: "errStackBreakpoint\x0a  ^ errStackBreakpoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@errCompilerError"]=(1001);
self["@errHalt"]=(2709);
self["@errError"]=(2710);
self["@errBreakpoint"]=(6002);
self["@errCodeBreakpoint"]=(6005);
self["@errStackBreakpoint"]=(6006);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GciErrSType.klass)})},
args: [],
source: "initialize\x0a  \x22self initialize\x22\x0a  errCompilerError := 1001.\x0a  errHalt := 2709.\x0a  errError := 2710.\x0a  errBreakpoint := 6002.\x0a  errCodeBreakpoint := 6005.\x0a  errStackBreakpoint := 6006",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "library:",
category: 'instance creation',
fn: function (aGciLibrary){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(self)._new();
_st($1)._initialize_(aGciLibrary);
$2=_st($1)._yourself();
instance=$2;
$3=_st(_st(instance)._category())._isNil();
if(smalltalk.assert($3)){
return nil;
};
$4=instance;
return $4;
}, function($ctx1) {$ctx1.fill(self,"library:",{aGciLibrary:aGciLibrary,instance:instance},smalltalk.GciErrSType.klass)})},
args: ["aGciLibrary"],
source: "library: aGciLibrary\x0a\x0a\x09| instance |\x0a\x09instance := self new\x0a\x09\x09initialize: aGciLibrary;\x0a\x09\x09yourself.\x0a\x09instance category isNil ifTrue: [^nil].\x0a\x09^instance.",
messageSends: ["initialize:", "new", "yourself", "ifTrue:", "isNil", "category"],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "library:session:",
category: 'instance creation',
fn: function (aGciLibrary,aTodeSession){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(self)._new();
_st($1)._initializeUsingSton_session_(aGciLibrary,aTodeSession);
$2=_st($1)._yourself();
instance=$2;
$3=_st(_st(instance)._category())._isNil();
if(smalltalk.assert($3)){
return nil;
};
$4=instance;
return $4;
}, function($ctx1) {$ctx1.fill(self,"library:session:",{aGciLibrary:aGciLibrary,aTodeSession:aTodeSession,instance:instance},smalltalk.GciErrSType.klass)})},
args: ["aGciLibrary", "aTodeSession"],
source: "library: aGciLibrary session: aTodeSession\x0a  | instance |\x0a  instance := self new\x0a    initializeUsingSton: aGciLibrary session: aTodeSession;\x0a    yourself.\x0a  instance category isNil\x0a    ifTrue: [ ^ nil ].\x0a  ^ instance",
messageSends: ["initializeUsingSton:session:", "new", "yourself", "ifTrue:", "isNil", "category"],
referencedClasses: []
}),
smalltalk.GciErrSType.klass);


smalltalk.addClass('GciLibrary', smalltalk.Object, ['sessionId'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "apiGci:",
category: 'proxy',
fn: function (command){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_(command,_st($Dictionary())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGci:",{command:command},smalltalk.GciLibrary)})},
args: ["command"],
source: "apiGci: command\x0a\x09^ self apiGci: command data: Dictionary new.",
messageSends: ["apiGci:data:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGci:data:",
category: 'proxy',
fn: function (command,aDictionary){
var self=this;
var params,result;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
params=_st(aDictionary)._copy();
_st($Transcript())._show_(_st(_st(_st(_st("GciLibrary>>apiGci: ").__comma(_st(command)._asString())).__comma(" data: ")).__comma(_st(params)._asString())).__comma(_st($Character())._cr()));
result=_st(_st(_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(params)._asJSON()))._responseText())._parseJSON();
_st($Transcript())._show_(_st(_st("result: ").__comma(_st(result)._asString())).__comma(_st($Character())._cr()));
$1=_st(result)._success();
if(! smalltalk.assert($1)){
_st($Error())._signal_(_st(_st(command).__comma(" GCI API call failed. ")).__comma(_st(result)._exception()));
};
$2=_st(result)._result();
return $2;
}, function($ctx1) {$ctx1.fill(self,"apiGci:data:",{command:command,aDictionary:aDictionary,params:params,result:result},smalltalk.GciLibrary)})},
args: ["command", "aDictionary"],
source: "apiGci: command data: aDictionary\x0a\x09|params result|\x0a\x09params := aDictionary copy.\x0a\x09\x22TODO: think about session handling\x22\x0a\x09\x22params at: '!session_id' put: sessionId.\x22\x0a\x09\x0a\x09Transcript show: 'GciLibrary>>apiGci: ', command asString, ' data: ', params asString, Character cr.\x0a\x0a\x09result := (Ajax ajaxSync: '/gci/', command data: params asJSON) responseText parseJSON.\x0a\x09Transcript show: 'result: ', result asString, Character cr.\x0a\x09result success ifFalse: [Error signal: command, ' GCI API call failed. ', result exception].\x0a\x09^ result result",
messageSends: ["copy", "show:", ",", "cr", "asString", "parseJSON", "responseText", "ajaxSync:data:", "asJSON", "ifFalse:", "signal:", "exception", "success", "result"],
referencedClasses: ["Character", "Transcript", "Ajax", "Error"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciErr:",
category: 'API',
fn: function (anErrObj){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=_st(self)._apiGci_("err");
$1=_st(result)._result();
if(smalltalk.assert($1)){
_st(anErrObj)._category_(_st(result)._category());
_st(anErrObj)._context_(_st(result)._context());
_st(anErrObj)._exceptionObj_(_st(result)._exceptionObj());
_st(anErrObj)._argsSize_(_st(result)._argCount());
_st(anErrObj)._args_(_st(result)._args());
_st(anErrObj)._number_(_st(result)._number());
_st(anErrObj)._fatal_(_st(result)._fatal());
_st(anErrObj)._message_(_st(result)._message());
_st(anErrObj)._reason_(_st(result)._reason());
};
$2=_st(result)._result();
return $2;
}, function($ctx1) {$ctx1.fill(self,"apiGciErr:",{anErrObj:anErrObj,result:result},smalltalk.GciLibrary)})},
args: ["anErrObj"],
source: "apiGciErr: anErrObj\x0a\x09|result|\x0a\x09result := self apiGci: 'err'.\x0a\x09result result ifTrue: [\x0a\x09\x09anErrObj category: result category.\x0a\x09\x09anErrObj context: result context.\x0a\x09\x09anErrObj exceptionObj: result exceptionObj.\x0a\x09\x09anErrObj argsSize: result argCount.\x0a\x09\x09anErrObj args: result args.\x0a\x09\x09anErrObj number: result number.\x0a\x09\x09anErrObj fatal: result fatal.\x0a\x09\x09anErrObj message: result message.\x0a\x09\x09anErrObj reason: result reason].\x0a\x09^ result result",
messageSends: ["apiGci:", "ifTrue:", "category:", "category", "context:", "context", "exceptionObj:", "exceptionObj", "argsSize:", "argCount", "args:", "args", "number:", "number", "fatal:", "fatal", "message:", "message", "reason:", "reason", "result"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStr:a:",
category: 'API',
fn: function (aString,anOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger())])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStr:a:",{aString:aString,anOop:anOop},smalltalk.GciLibrary)})},
args: ["aString", "anOop"],
source: "apiGciExecuteStr: aString a: anOop\x0a\x09^ self apiGci: 'execute_str' data: {'string'->aString. 'oop'->anOop asInteger} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStr:a:a:",
category: 'API',
fn: function (aString,anOop,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger()),_st("envId").__minus_gt(envId)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStr:a:a:",{aString:aString,anOop:anOop,envId:envId},smalltalk.GciLibrary)})},
args: ["aString", "anOop", "envId"],
source: "apiGciExecuteStr: aString a: anOop a: envId\x0a\x09^ self apiGci: 'execute_str' data: {'string'->aString. 'oop'->anOop asInteger. 'envId'->envId} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStrExpectingStr:a:",
category: 'API convenience',
fn: function (aString,anOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str_expecting_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger())])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStrExpectingStr:a:",{aString:aString,anOop:anOop},smalltalk.GciLibrary)})},
args: ["aString", "anOop"],
source: "apiGciExecuteStrExpectingStr: aString a: anOop\x0a\x09^ self apiGci: 'execute_str_expecting_str' data: {'string'->aString. 'oop'->anOop asInteger} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStrExpectingStr:a:a:",
category: 'API convenience',
fn: function (aString,anOop,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str_expecting_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger()),_st("envId").__minus_gt(envId)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStrExpectingStr:a:a:",{aString:aString,anOop:anOop,envId:envId},smalltalk.GciLibrary)})},
args: ["aString", "anOop", "envId"],
source: "apiGciExecuteStrExpectingStr: aString a: anOop a: envId\x0a\x09^ self apiGci: 'execute_str_expecting_str' data: {'string'->aString. 'oop'->anOop asInteger. 'envId'->envId} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciGetSessionId",
category: 'API',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@sessionId"]=_st(self)._apiNoSessionGci_data_("get_session_id",_st($Dictionary())._new());
$1=self["@sessionId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciGetSessionId",{},smalltalk.GciLibrary)})},
args: [],
source: "apiGciGetSessionId\x0a\x09sessionId := self apiNoSessionGci: 'get_session_id' data: Dictionary new.\x0a\x09^ sessionId",
messageSends: ["apiNoSessionGci:data:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciInit",
category: 'API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_("init");
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciInit",{},smalltalk.GciLibrary)})},
args: [],
source: "apiGciInit\x0a\x09^ self apiGci: 'init'",
messageSends: ["apiGci:"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciLogin:a:",
category: 'API',
fn: function (userName,password){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sessionId"]=_st(self)._apiGci_data_("login",_st([_st("user_id").__minus_gt(userName),_st("password").__minus_gt(password)])._asDictionary());
return true;
}, function($ctx1) {$ctx1.fill(self,"apiGciLogin:a:",{userName:userName,password:password},smalltalk.GciLibrary)})},
args: ["userName", "password"],
source: "apiGciLogin: userName a: password\x0a\x09\x22TODO: think about return value\x22\x0a\x09sessionId := self apiGci: 'login' data: {'user_id'->userName. 'password'->password} asDictionary.\x0a\x09^ true",
messageSends: ["apiGci:data:", "asDictionary", "->"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciLongToOop:",
category: 'API',
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($OopType())._fromInteger_(_st(self)._apiGci_data_("long_to_oop",_st([_st("integer").__minus_gt(anInteger)])._asDictionary()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciLongToOop:",{anInteger:anInteger},smalltalk.GciLibrary)})},
args: ["anInteger"],
source: "apiGciLongToOop: anInteger\x0a\x09^ OopType fromInteger: (self apiGci: 'long_to_oop' data: {'integer'->anInteger} asDictionary)",
messageSends: ["fromInteger:", "apiGci:data:", "asDictionary", "->"],
referencedClasses: ["OopType"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciNbExecuteStr:a:a:",
category: 'API',
fn: function (aString,anOop,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("nb_execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger()),_st("envId").__minus_gt(envId)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciNbExecuteStr:a:a:",{aString:aString,anOop:anOop,envId:envId},smalltalk.GciLibrary)})},
args: ["aString", "anOop", "envId"],
source: "apiGciNbExecuteStr: aString a: anOop a: envId\x0a\x09^ self apiGci: 'nb_execute_str' data: {'string'->aString. 'oop'->anOop asInteger. 'envId'->envId} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciNewString:",
category: 'API',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("new_string",_st([_st("string").__minus_gt(aString)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciNewString:",{aString:aString},smalltalk.GciLibrary)})},
args: ["aString"],
source: "apiGciNewString: aString\x0a\x09^ self apiGci: 'new_string' data: {'string'->aString} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciPerform:a:a:",
category: 'API',
fn: function (aReceiver,aSelector,aListOfArgs){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("perform",_st([_st("receiver").__minus_gt(_st(aReceiver)._asInteger()),_st("selector").__minus_gt(aSelector),_st("args").__minus_gt(_st(self)._prepareListOfArgs_(aListOfArgs))])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciPerform:a:a:",{aReceiver:aReceiver,aSelector:aSelector,aListOfArgs:aListOfArgs},smalltalk.GciLibrary)})},
args: ["aReceiver", "aSelector", "aListOfArgs"],
source: "apiGciPerform: aReceiver a: aSelector a: aListOfArgs\x0a\x09^ self apiGci: 'perform' data: {'receiver'->aReceiver asInteger. 'selector'->aSelector. 'args'->(self prepareListOfArgs: aListOfArgs)} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger", "prepareListOfArgs:"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciSetNet:a:a:a:",
category: 'API',
fn: function (stoneName,hostUserID,hostPassword,gemService){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"apiGciSetNet:a:a:a:",{stoneName:stoneName,hostUserID:hostUserID,hostPassword:hostPassword,gemService:gemService},smalltalk.GciLibrary)})},
args: ["stoneName", "hostUserID", "hostPassword", "gemService"],
source: "apiGciSetNet: stoneName a: hostUserID a: hostPassword a: gemService\x0a\x09\x22TODO: should probably not be implemented here\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciSetSessionId:",
category: 'API',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sessionId"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"apiGciSetSessionId:",{aNumber:aNumber},smalltalk.GciLibrary)})},
args: ["aNumber"],
source: "apiGciSetSessionId: aNumber\x0a\x09\x22Cache session id locally and update on API calls. This is necessary\x0a\x09because multiple browser session could be connect to the Ruby backend.\x22\x0a\x09\x0a\x09sessionId := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciVersion",
category: 'API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_("version");
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciVersion",{},smalltalk.GciLibrary)})},
args: [],
source: "apiGciVersion\x0a\x09^ self apiGci: 'version'",
messageSends: ["apiGci:"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiNoSessionGci:data:",
category: 'proxy',
fn: function (command,aDictionary){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Transcript())._show_(_st(_st(_st(_st("GciLibrary>>apiNoSessionGci: ").__comma(_st(command)._asString())).__comma(" data: ")).__comma(_st(aDictionary)._asString())).__comma(_st($Character())._cr()));
$1=_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(aDictionary)._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiNoSessionGci:data:",{command:command,aDictionary:aDictionary},smalltalk.GciLibrary)})},
args: ["command", "aDictionary"],
source: "apiNoSessionGci: command data: aDictionary\x0a\x09Transcript show: 'GciLibrary>>apiNoSessionGci: ', command asString, ' data: ', aDictionary asString, Character cr.\x0a\x09^ Ajax ajaxSync: '/gci/', command data: aDictionary asJSON",
messageSends: ["show:", ",", "cr", "asString", "ajaxSync:data:", "asJSON"],
referencedClasses: ["Character", "Transcript", "Ajax"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "fetchChars:",
category: 'wrapper',
fn: function (oop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("fetch_str",_st([_st("oop").__minus_gt(_st(oop)._asInteger())])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"fetchChars:",{oop:oop},smalltalk.GciLibrary)})},
args: ["oop"],
source: "fetchChars: oop\x0a\x09^ self apiGci: 'fetch_str' data: {'oop'->oop asInteger} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "floatToSmallDouble:",
category: 'oop access',
fn: function (aFloat){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("not implemented yet");
return self}, function($ctx1) {$ctx1.fill(self,"floatToSmallDouble:",{aFloat:aFloat},smalltalk.GciLibrary)})},
args: ["aFloat"],
source: "floatToSmallDouble: aFloat\x0a\x09self error: 'not implemented yet'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "gciErrSTypeClass",
category: 'wrapper',
fn: function (){
var self=this;
function $GciErrSType(){return smalltalk.GciErrSType||(typeof GciErrSType=="undefined"?nil:GciErrSType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$GciErrSType();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciErrSTypeClass",{},smalltalk.GciLibrary)})},
args: [],
source: "gciErrSTypeClass\x0a\x09^ GciErrSType",
messageSends: [],
referencedClasses: ["GciErrSType"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "getAndClearLastError",
category: 'wrapper',
fn: function (){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $GciErrSType(){return smalltalk.GciErrSType||(typeof GciErrSType=="undefined"?nil:GciErrSType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Transcript())._show_(_st("called getAndClearLastError").__comma(_st($Character())._cr()));
$1=_st($GciErrSType())._library_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getAndClearLastError",{},smalltalk.GciLibrary)})},
args: [],
source: "getAndClearLastError\x0a\x09Transcript show: 'called getAndClearLastError', Character cr.\x0a\x09^ GciErrSType library: self",
messageSends: ["show:", ",", "cr", "library:"],
referencedClasses: ["Character", "Transcript", "GciErrSType"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "getAndClearLastErrorUsingSton:",
category: 'error handling',
fn: function (aTodeSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSTypeClass())._library_session_(self,aTodeSession);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getAndClearLastErrorUsingSton:",{aTodeSession:aTodeSession},smalltalk.GciLibrary)})},
args: ["aTodeSession"],
source: "getAndClearLastErrorUsingSton: aTodeSession\x0a  ^ self gciErrSTypeClass library: self session: aTodeSession",
messageSends: ["library:session:", "gciErrSTypeClass"],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopAsciiNul",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(28);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopAsciiNul",{},smalltalk.GciLibrary)})},
args: [],
source: "oopAsciiNul\x0a\x09^ 28",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassArray",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(66817);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassArray",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassArray\x0a\x09^ 66817",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassByteArray",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(103425);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassByteArray",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassByteArray\x0a\x09^ 103425",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassDoubleByteString",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(143873);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassDoubleByteString",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassDoubleByteString\x0a\x09^ 143873",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassDoubleByteSymbol",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144129);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassDoubleByteSymbol",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassDoubleByteSymbol\x0a\x09^ 144129",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassQuadByteString",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144385);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassQuadByteString",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassQuadByteString\x0a\x09^ 144385",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassQuadByteSymbol",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144641);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassQuadByteSymbol",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassQuadByteSymbol\x0a\x09^ 144641",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassString",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(74753);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassString",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassString\x0a\x09^ 74753",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassSymbol",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(110849);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassSymbol",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassSymbol\x0a\x09^ 110849",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassSystem",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(76033);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassSystem",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassSystem\x0a\x09^ 76033",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode16",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154625);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode16",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassUnicode16\x0a\x09^ 154625",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode32",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154881);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode32",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassUnicode32\x0a\x09^ 154881",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode7",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154369);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode7",{},smalltalk.GciLibrary)})},
args: [],
source: "oopClassUnicode7\x0a\x09^ 154369",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopFalse",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(12);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopFalse",{},smalltalk.GciLibrary)})},
args: [],
source: "oopFalse\x0a\x09^ 12 \x2216r0C\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopFor:",
category: 'wrapper',
fn: function (anObject){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Boolean(){return smalltalk.Boolean||(typeof Boolean=="undefined"?nil:Boolean)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$12,$11,$10,$13,$14,$16,$17,$15;
$1=_st(anObject)._isNil();
if(smalltalk.assert($1)){
$2=_st(_st(self)._oopNil())._asOop();
return $2;
};
$3=_st(anObject)._isKindOf_($OopType());
if(smalltalk.assert($3)){
$4=_st(anObject)._asOop();
return $4;
};
$5=_st(anObject)._isInteger();
if(smalltalk.assert($5)){
$6=_st(self)._apiGciLongToOop_(anObject);
return $6;
};
$7=_st(anObject)._isKindOf_($String());
if(smalltalk.assert($7)){
$8=_st(self)._apiGciNewString_(anObject);
return $8;
};
$9=_st(anObject)._isKindOf_($Boolean());
if(smalltalk.assert($9)){
$12=anObject;
if(smalltalk.assert($12)){
$11=_st(self)._oopTrue();
} else {
$11=_st(self)._oopFalse();
};
$10=_st($11)._asOop();
return $10;
};
$13=_st(anObject)._isNumber();
if(smalltalk.assert($13)){
$14=_st(_st(self)._floatToSmallDouble_(anObject))._asOop();
return $14;
};
$16=_st(anObject)._respondsTo_("asOopTypeWith:");
if(smalltalk.assert($16)){
$17=_st(_st(anObject)._asOopTypeWith_(_st(self)._oopTypeClass()))._asOop();
return $17;
} else {
$15=_st(_st(self)._oopNil())._asOop();
};
return $15;
}, function($ctx1) {$ctx1.fill(self,"oopFor:",{anObject:anObject},smalltalk.GciLibrary)})},
args: ["anObject"],
source: "oopFor: anObject\x0a  anObject isNil\x0a    ifTrue: [ ^ self oopNil asOop ].\x0a  (anObject isKindOf: OopType)\x0a    ifTrue: [ ^ anObject asOop ].\x0a  (anObject isInteger)\x0a    ifTrue: [ ^ self apiGciLongToOop: anObject ].\x0a  (anObject isKindOf: String)\x09\x22ByteString\x22\x0a    ifTrue: [ ^ self apiGciNewString: anObject ].\x0a  (anObject isKindOf: Boolean)\x0a    ifTrue: [ \x0a      ^ (anObject\x0a        ifTrue: [ self oopTrue ]\x0a        ifFalse: [ self oopFalse ]) asOop ].\x0a  (anObject isNumber)\x0a    ifTrue: [ ^ (self floatToSmallDouble: anObject) asOop ].\x0a  ^ (anObject respondsTo: #'asOopTypeWith:')\x0a    ifTrue: [ ^ (anObject asOopTypeWith: self oopTypeClass) asOop ]\x0a    ifFalse: [ self oopNil asOop ]",
messageSends: ["ifTrue:", "asOop", "oopNil", "isNil", "isKindOf:", "apiGciLongToOop:", "isInteger", "apiGciNewString:", "ifTrue:ifFalse:", "oopTrue", "oopFalse", "floatToSmallDouble:", "isNumber", "asOopTypeWith:", "oopTypeClass", "respondsTo:"],
referencedClasses: ["OopType", "String", "Boolean"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopGemStoneError",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(231169);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopGemStoneError",{},smalltalk.GciLibrary)})},
args: [],
source: "oopGemStoneError\x0a\x09^ 231169",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopIllegal",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopIllegal",{},smalltalk.GciLibrary)})},
args: [],
source: "oopIllegal\x0a\x09^ 1 \x2216r01\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopInvalid",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopInvalid",{},smalltalk.GciLibrary)})},
args: [],
source: "oopInvalid\x0a\x09^ 0 \x2216r0\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMaxSmallInteger",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(9223372036854776000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMaxSmallInteger",{},smalltalk.GciLibrary)})},
args: [],
source: "oopMaxSmallInteger\x0a\x09^ 16r7FFFFFFFFFFFFFFA",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMinSmallInteger",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(9223372036854776000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMinSmallInteger",{},smalltalk.GciLibrary)})},
args: [],
source: "oopMinSmallInteger\x0a\x09^ 16r8000000000000002",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMinusOne",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(18446744073709552000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMinusOne",{},smalltalk.GciLibrary)})},
args: [],
source: "oopMinusOne\x0a\x09^ 16rFFFFFFFFFFFFFFFA",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopNil",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(20);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopNil",{},smalltalk.GciLibrary)})},
args: [],
source: "oopNil\x0a\x09^ 20 \x2216r14\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopOne",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(10);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopOne",{},smalltalk.GciLibrary)})},
args: [],
source: "oopOne\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopOrValueFor:",
category: 'wrapper',
fn: function (anObject){
var self=this;
function $OopOrValue(){return smalltalk.OopOrValue||(typeof OopOrValue=="undefined"?nil:OopOrValue)}
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Boolean(){return smalltalk.Boolean||(typeof Boolean=="undefined"?nil:Boolean)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$13,$12,$15,$16,$17,$14;
$1=_st(anObject)._isNil();
if(smalltalk.assert($1)){
$2=_st($OopOrValue())._forOop_(_st(_st(self)._oopNil())._asOop());
return $2;
};
$3=_st(anObject)._isKindOf_($OopType());
if(smalltalk.assert($3)){
$4=_st($OopOrValue())._forOop_(_st(anObject)._asOop());
return $4;
};
$5=_st(anObject)._isInteger();
if(smalltalk.assert($5)){
$6=_st($OopOrValue())._forInteger_(anObject);
return $6;
};
$7=_st(anObject)._isNumber();
if(smalltalk.assert($7)){
$8=_st($OopOrValue())._forFloat_(anObject);
return $8;
};
$9=_st(anObject)._isKindOf_($String());
if(smalltalk.assert($9)){
$10=_st($OopOrValue())._forString_(anObject);
return $10;
};
$11=_st(anObject)._isKindOf_($Boolean());
if(smalltalk.assert($11)){
$13=anObject;
if(smalltalk.assert($13)){
$12=_st($OopOrValue())._forOop_(_st(_st(self)._oopTrue())._asOop());
} else {
$12=_st($OopOrValue())._forOop_(_st(_st(self)._oopFalse())._asOop());
};
return $12;
};
$15=_st(anObject)._respondsTo_("asOopTypeWith:");
if(smalltalk.assert($15)){
$16=_st($OopOrValue())._forOop_(_st(_st(anObject)._asOopTypeWith_(_st(self)._oopTypeClass()))._asOop());
return $16;
} else {
$17=_st($OopOrValue())._forOop_(_st(_st(self)._oopNil())._asOop());
return $17;
};
return $14;
}, function($ctx1) {$ctx1.fill(self,"oopOrValueFor:",{anObject:anObject},smalltalk.GciLibrary)})},
args: ["anObject"],
source: "oopOrValueFor: anObject\x0a  anObject isNil\x0a    ifTrue: [^ OopOrValue forOop: self oopNil asOop].\x0a  (anObject isKindOf: OopType)\x0a    ifTrue: [^ OopOrValue forOop: anObject asOop].\x0a  (anObject isInteger)\x0a    ifTrue: [^ OopOrValue forInteger: anObject].\x0a  (anObject isNumber)\x0a    ifTrue: [^ OopOrValue forFloat: anObject].\x0a  (anObject isKindOf: String)\x0a    ifTrue: [^ OopOrValue forString: anObject].\x0a  (anObject isKindOf: Boolean)\x0a    ifTrue: [ \x0a      ^ anObject\x0a        ifTrue: [OopOrValue forOop: self oopTrue asOop]\x0a        ifFalse: [OopOrValue forOop: self oopFalse asOop]].\x0a  ^ (anObject respondsTo: #'asOopTypeWith:')\x0a    ifTrue: [^ OopOrValue forOop: (anObject asOopTypeWith: self oopTypeClass) asOop]\x0a    ifFalse: [^ OopOrValue forOop: self oopNil asOop]",
messageSends: ["ifTrue:", "forOop:", "asOop", "oopNil", "isNil", "isKindOf:", "forInteger:", "isInteger", "forFloat:", "isNumber", "forString:", "ifTrue:ifFalse:", "oopTrue", "oopFalse", "asOopTypeWith:", "oopTypeClass", "respondsTo:"],
referencedClasses: ["OopOrValue", "OopType", "String", "Boolean"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopRemoteNil",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(276);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopRemoteNil",{},smalltalk.GciLibrary)})},
args: [],
source: "oopRemoteNil\x0a\x09^ 276 \x2216r114\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTrue",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(268);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTrue",{},smalltalk.GciLibrary)})},
args: [],
source: "oopTrue\x0a\x09^ 268\x09\x2216r10C\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTwo",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(18);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTwo",{},smalltalk.GciLibrary)})},
args: [],
source: "oopTwo\x0a\x09^ 18",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTypeClass",
category: 'constants',
fn: function (){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$OopType();
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTypeClass",{},smalltalk.GciLibrary)})},
args: [],
source: "oopTypeClass\x0a\x09^ OopType\x0a\x09",
messageSends: [],
referencedClasses: ["OopType"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTypeFromInteger:",
category: 'oop access',
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($OopType())._fromInteger_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTypeFromInteger:",{anInteger:anInteger},smalltalk.GciLibrary)})},
args: ["anInteger"],
source: "oopTypeFromInteger: anInteger\x0a\x09^ OopType fromInteger: anInteger",
messageSends: ["fromInteger:"],
referencedClasses: ["OopType"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopZero",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopZero",{},smalltalk.GciLibrary)})},
args: [],
source: "oopZero\x0a\x09^ 2\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "pollForResult",
category: 'wrapper',
fn: function (){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Transcript())._show_(_st("library: polling for result.").__comma(_st($Character())._cr()));
$1=_st(self)._apiGci_("poll_for_result");
return $1;
}, function($ctx1) {$ctx1.fill(self,"pollForResult",{},smalltalk.GciLibrary)})},
args: [],
source: "pollForResult\x0a\x09Transcript show: 'library: polling for result.', Character cr.\x0a\x09^ self apiGci: 'poll_for_result'",
messageSends: ["show:", ",", "cr", "apiGci:"],
referencedClasses: ["Character", "Transcript"]
}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareListOfArgs:",
category: 'wrapper',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(args)._collect_((function(arg){
return smalltalk.withContext(function($ctx2) {
return _st(self)._oopOrValueFor_(arg);
}, function($ctx2) {$ctx2.fillBlock({arg:arg},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"prepareListOfArgs:",{args:args},smalltalk.GciLibrary)})},
args: ["args"],
source: "prepareListOfArgs: args\x0a\x09^ args collect: [:arg | self oopOrValueFor: arg]",
messageSends: ["collect:", "oopOrValueFor:"],
referencedClasses: []
}),
smalltalk.GciLibrary);


smalltalk.GciLibrary.klass.iVarNames = ['current','version'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'singleton',
fn: function (){
var self=this;
var library;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=self["@current"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self["@current"];
return $2;
};
$3=_st(self)._new();
_st($3)._apiGciInit();
$4=_st($3)._yourself();
self["@current"]=$4;
self["@version"]=_st(self["@current"])._apiGciVersion();
$5=self["@current"];
return $5;
}, function($ctx1) {$ctx1.fill(self,"current",{library:library},smalltalk.GciLibrary.klass)})},
args: [],
source: "current\x0a\x09\x22TODO: support for multiple libraries (e.g. in MRI)\x22\x0a\x09|library|\x0a\x09current ifNotNil: [^ current].\x0a\x09current := self new\x0a\x09\x09apiGciInit;\x0a\x09\x09yourself.\x0a\x09version := current apiGciVersion.\x0a\x09^ current",
messageSends: ["ifNotNil:", "apiGciInit", "new", "yourself", "apiGciVersion"],
referencedClasses: []
}),
smalltalk.GciLibrary.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "version",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@version"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"version",{},smalltalk.GciLibrary.klass)})},
args: [],
source: "version\x0a\x09^ version",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciLibrary.klass);


smalltalk.addClass('OopOrValue', smalltalk.Object, ['value', 'type'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st([_st("value").__minus_gt(_st(self)._value()),_st("type").__minus_gt(_st(self)._type())])._asDictionary())._asJSON();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.OopOrValue)})},
args: [],
source: "asJSON\x0a\x09^ {#value -> self value. #type -> self type} asDictionary asJSON",
messageSends: ["asJSON", "asDictionary", "->", "value", "type"],
referencedClasses: []
}),
smalltalk.OopOrValue);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@type"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.OopOrValue)})},
args: [],
source: "type\x0a\x09^ type",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopOrValue);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
category: 'accessing',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@type"]=aSymbol;
return self}, function($ctx1) {$ctx1.fill(self,"type:",{aSymbol:aSymbol},smalltalk.OopOrValue)})},
args: ["aSymbol"],
source: "type: aSymbol\x0a\x09type := aSymbol.",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopOrValue);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.OopOrValue)})},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopOrValue);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.OopOrValue)})},
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopOrValue);


smalltalk.addMethod(
smalltalk.method({
selector: "forFloat:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anObject);
_st($2)._type_("float");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forFloat:",{anObject:anObject},smalltalk.OopOrValue.klass)})},
args: ["anObject"],
source: "forFloat: anObject\x0a\x09^ self new\x0a\x09\x09value: anObject;\x0a\x09\x09type: #float;\x0a\x09\x09yourself",
messageSends: ["value:", "new", "type:", "yourself"],
referencedClasses: []
}),
smalltalk.OopOrValue.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forInteger:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anObject);
_st($2)._type_("integer");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forInteger:",{anObject:anObject},smalltalk.OopOrValue.klass)})},
args: ["anObject"],
source: "forInteger: anObject\x0a\x09^ self new\x0a\x09\x09value: anObject;\x0a\x09\x09type: #integer;\x0a\x09\x09yourself",
messageSends: ["value:", "new", "type:", "yourself"],
referencedClasses: []
}),
smalltalk.OopOrValue.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forOop:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anInteger);
_st($2)._type_("oop");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forOop:",{anInteger:anInteger},smalltalk.OopOrValue.klass)})},
args: ["anInteger"],
source: "forOop: anInteger\x0a\x09^ self new\x0a\x09\x09value: anInteger;\x0a\x09\x09type: #oop;\x0a\x09\x09yourself",
messageSends: ["value:", "new", "type:", "yourself"],
referencedClasses: []
}),
smalltalk.OopOrValue.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forString:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anObject);
_st($2)._type_("string");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forString:",{anObject:anObject},smalltalk.OopOrValue.klass)})},
args: ["anObject"],
source: "forString: anObject\x0a\x09^ self new\x0a\x09\x09value: anObject;\x0a\x09\x09type: #string;\x0a\x09\x09yourself",
messageSends: ["value:", "new", "type:", "yourself"],
referencedClasses: []
}),
smalltalk.OopOrValue.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forValue:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anObject);
_st($2)._type_("object");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forValue:",{anObject:anObject},smalltalk.OopOrValue.klass)})},
args: ["anObject"],
source: "forValue: anObject\x0a\x09^ self new\x0a\x09\x09value: anObject;\x0a\x09\x09type: #object;\x0a\x09\x09yourself",
messageSends: ["value:", "new", "type:", "yourself"],
referencedClasses: []
}),
smalltalk.OopOrValue.klass);


smalltalk.addClass('OopType', smalltalk.Object, ['handle'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparison',
fn: function (anOopType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class()).__eq_eq(_st(anOopType)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._asOop()).__eq(_st(anOopType)._asOop());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anOopType:anOopType},smalltalk.OopType)})},
args: ["anOopType"],
source: "= anOopType\x0a\x0a\x09^self class == anOopType class and: [\x0a\x09\x09self asOop = anOopType asOop].\x0a\x09",
messageSends: ["and:", "=", "asOop", "==", "class"],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "asInteger",
category: 'converting',
fn: function (){
var self=this;
var int;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
int=_st(self)._getHandle();
$1=_st((0)).__lt_eq(int);
if(smalltalk.assert($1)){
$2=int;
return $2;
};
$3=_st(_st(int)._negated()).__plus((1));
return $3;
}, function($ctx1) {$ctx1.fill(self,"asInteger",{int:int},smalltalk.OopType)})},
args: [],
source: "asInteger\x0a\x0a\x09| int |\x0a\x090 <= (int := self getHandle) ifTrue: [^int].\x0a\x09^int negated + 1.\x0a\x09",
messageSends: ["ifTrue:", "<=", "getHandle", "+", "negated"],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "asOop",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@handle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOop",{},smalltalk.OopType)})},
args: [],
source: "asOop\x0a\x09^ handle",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "asOopTypeWith:",
category: 'converting',
fn: function (anOopTypeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOopTypeWith:",{anOopTypeClass:anOopTypeClass},smalltalk.OopType)})},
args: ["anOopTypeClass"],
source: "asOopTypeWith: anOopTypeClass\x0a    ^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "finalizeForSession:",
category: 'finalization',
fn: function (aGciSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aGciSession)._isValid();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
return self}, function($ctx1) {$ctx1.fill(self,"finalizeForSession:",{aGciSession:aGciSession},smalltalk.OopType)})},
args: ["aGciSession"],
source: "finalizeForSession: aGciSession\x0a\x0a\x09\x22Transcript cr; show: 'finalizeForSession: ', self asInteger printString, ' -> ', aGciSession isValid printString.\x22\x0a\x09aGciSession isValid ifFalse: [ ^self ].\x0a\x09\x22Can't make GCI call at this time ... finalization occuring in separate thread and we could end up making concurrent calls'\x22\x0a\x09\x22aGciSession serverPerform: 'unregisterDependent:' with: self.\x22",
messageSends: ["ifFalse:", "isValid"],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "gciLocalForLibrary:",
category: 'converting',
fn: function (aGciLibrary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aGciLibrary)._localForOopType_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciLocalForLibrary:",{aGciLibrary:aGciLibrary},smalltalk.OopType)})},
args: ["aGciLibrary"],
source: "gciLocalForLibrary: aGciLibrary\x0a  ^ aGciLibrary localForOopType: self",
messageSends: ["localForOopType:"],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "getHandle",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@handle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"getHandle",{},smalltalk.OopType)})},
args: [],
source: "getHandle\x0a\x09\x22Private. Return the handle used to represent the external entitiy.\x22\x0a\x09^handle",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
category: 'comparison',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._getHandle();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.OopType)})},
args: [],
source: "hash\x0a\x0a\x09^ self getHandle\x0a\x09",
messageSends: ["getHandle"],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTypeFor:forGciLibrary:",
category: 'converting',
fn: function (anObject,aGciLibrary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTypeFor:forGciLibrary:",{anObject:anObject,aGciLibrary:aGciLibrary},smalltalk.OopType)})},
args: ["anObject", "aGciLibrary"],
source: "oopTypeFor: anObject forGciLibrary: aGciLibrary\x0a\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("Oop(");
_st(_st(self)._asInteger())._printOn_(aStream);
_st(aStream)._nextPut_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.OopType)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09aStream nextPutAll: 'Oop('.\x0a\x09self asInteger printOn: aStream.\x0a\x09aStream nextPut: ')'.\x0a\x09\x0a\x09\x09",
messageSends: ["nextPutAll:", "printOn:", "asInteger", "nextPut:"],
referencedClasses: []
}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "setHandle:",
category: 'private',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@handle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"setHandle:",{anObject:anObject},smalltalk.OopType)})},
args: ["anObject"],
source: "setHandle: anObject\x0a\x09\x22Private. Set the handle used to represent the external entity.\x22\x0a\x09handle := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.OopType);


smalltalk.addMethod(
smalltalk.method({
selector: "fromHandle:",
category: 'instance creation',
fn: function (aHandle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._basicNew())._setHandle_(aHandle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromHandle:",{aHandle:aHandle},smalltalk.OopType.klass)})},
args: ["aHandle"],
source: "fromHandle: aHandle\x0a\x09^self basicNew setHandle: aHandle",
messageSends: ["setHandle:", "basicNew"],
referencedClasses: []
}),
smalltalk.OopType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromInteger:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._fromHandle_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromInteger:",{anInteger:anInteger},smalltalk.OopType.klass)})},
args: ["anInteger"],
source: "fromInteger: anInteger\x0a\x0a\x09^self fromHandle: anInteger.\x0a\x09",
messageSends: ["fromHandle:"],
referencedClasses: []
}),
smalltalk.OopType.klass);


