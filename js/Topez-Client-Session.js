smalltalk.addPackage('Topez-Client-Session');
smalltalk.addClass('GciSession', smalltalk.Object, ['number', 'gemNRS', 'stoneNRS', 'userID', 'clientForwarderCache'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "actAsExecutor",
category: 'finalization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._release();
smalltalk.Object.fn.prototype._actAsExecutor.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"actAsExecutor",{},smalltalk.GciSession)})},
args: [],
source: "actAsExecutor\x0a\x09\x22Prepare the receiver to act as executor for any resources associated with it\x22\x0a\x0a\x09self release.\x0a\x09super actAsExecutor",
messageSends: ["release", "actAsExecutor"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "asOopType:",
category: 'private gci calls',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._asOopTypeWith_(_st(_st(self)._library())._oopTypeClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOopType:",{anObject:anObject},smalltalk.GciSession)})},
args: ["anObject"],
source: "asOopType: anObject\x0a    ^ anObject asOopTypeWith: self library oopTypeClass",
messageSends: ["asOopTypeWith:", "oopTypeClass", "library"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "clientForwarderCache",
category: 'finalization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@clientForwarderCache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"clientForwarderCache",{},smalltalk.GciSession)})},
args: [],
source: "clientForwarderCache\x0a    ^ clientForwarderCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "clientObjectForwardedFrom:",
category: 'finalization',
fn: function (anOopType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
$1=_st(_st(self)._clientForwarderCache())._at_ifAbsent_(anOopType,(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"clientObjectForwardedFrom:",{anOopType:anOopType},smalltalk.GciSession)})},
args: ["anOopType"],
source: "clientObjectForwardedFrom: anOopType\x0a    ^ self clientForwarderCache at: anOopType ifAbsent: [ ^ nil ]",
messageSends: ["at:ifAbsent:", "clientForwarderCache"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "executeStringExpectingString:envId:",
category: 'public gci calls',
fn: function (aString,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._library())._apiGciExecuteStrExpectingStr_a_a_(aString,_st(_st(self)._library())._oopNil(),envId);
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeStringExpectingString:envId:",{aString:aString,envId:envId},smalltalk.GciSession)})},
args: ["aString", "envId"],
source: "executeStringExpectingString: aString envId: envId\x0a\x09\x22TODO: make non-blocking to support abort from JavaScript\x22\x0a\x09^ self library apiGciExecuteStrExpectingStr: aString a: self library oopNil a: envId",
messageSends: ["apiGciExecuteStrExpectingStr:a:a:", "oopNil", "library"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "executeStringExpectingStringNB:envId:",
category: 'public gci calls',
fn: function (aString,envId){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Transcript())._show_(_st(_st("executeStringExpectingStringNB: ").__comma(aString)).__comma(_st(_st($Character())._cr())._asString()));
_st(_st(self)._library())._apiGciNbExecuteStr_a_a_(aString,_st(_st(self)._library())._oopNil(),envId);
$1=_st(self)._getNbResultAsString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeStringExpectingStringNB:envId:",{aString:aString,envId:envId},smalltalk.GciSession)})},
args: ["aString", "envId"],
source: "executeStringExpectingStringNB: aString envId: envId\x0a\x09Transcript show: 'executeStringExpectingStringNB: ', aString , Character cr asString.\x0a\x09\x22self library apiGciSetSessionId: self getSessionNumber.\x22\x0a\x09self library apiGciNbExecuteStr: aString a: self library oopNil a: envId.\x0a\x09^ self getNbResultAsString",
messageSends: ["show:", ",", "asString", "cr", "apiGciNbExecuteStr:a:a:", "oopNil", "library", "getNbResultAsString"],
referencedClasses: ["Character", "Transcript"]
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "finalize",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._release();
smalltalk.Object.fn.prototype._finalize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"finalize",{},smalltalk.GciSession)})},
args: [],
source: "finalize\x0a\x0a\x09self release.\x0a\x09super finalize.",
messageSends: ["release", "finalize"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "gemHost",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@gemNRS"])._isNil();
if(smalltalk.assert($1)){
return "";
};
$2=_st(_st(_st(_st(self["@gemNRS"])._subStrings_("#"))._first())._subStrings_("@"))._last();
return $2;
}, function($ctx1) {$ctx1.fill(self,"gemHost",{},smalltalk.GciSession)})},
args: [],
source: "gemHost\x0a\x0a\x09gemNRS isNil ifTrue: [^''].\x0a\x09^((gemNRS subStrings: '#') first subStrings: '@') last.\x0a\x09",
messageSends: ["ifTrue:", "isNil", "last", "subStrings:", "first"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "gemNRS:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gemNRS"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"gemNRS:",{aString:aString},smalltalk.GciSession)})},
args: ["aString"],
source: "gemNRS: aString\x0a\x0a\x09gemNRS := aString.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "gemType",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@gemNRS"])._isNil();
if(smalltalk.assert($2)){
$1="Linked";
} else {
$1="Remote";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"gemType",{},smalltalk.GciSession)})},
args: [],
source: "gemType\x0a\x0a\x09^gemNRS isNil\x0a\x09\x09ifTrue: ['Linked']\x0a\x09\x09ifFalse: ['Remote'].\x0a\x09\x09",
messageSends: ["ifTrue:ifFalse:", "isNil"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getAndClearLastError",
category: 'private gci calls',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._library())._getAndClearLastError();
return $1;
}, function($ctx1) {$ctx1.fill(self,"getAndClearLastError",{},smalltalk.GciSession)})},
args: [],
source: "getAndClearLastError\x0a\x0a\x09^self library getAndClearLastError.",
messageSends: ["getAndClearLastError", "library"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getNbResult",
category: 'private gci calls',
fn: function (){
var self=this;
var result,error,actionArgs,continueWith;
function $GsClientForwarderSendNotification(){return smalltalk.GsClientForwarderSendNotification||(typeof GsClientForwarderSendNotification=="undefined"?nil:GsClientForwarderSendNotification)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
_st((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(self)._nbPollForResult();
result;
error=_st(self)._getAndClearLastError();
return error;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ifCurtailed_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._terminateCurrentNbCall();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(error)._isNil();
if(smalltalk.assert($1)){
$2=result;
return $2;
};
$3=_st(_st(error)._number()).__eq_eq((2336));
if(smalltalk.assert($3)){
$4=_st($GsClientForwarderSendNotification())._new();
_st($4)._session_(self);
_st($4)._tag_(error);
$5=_st($4)._signal();
actionArgs=$5;
} else {
$6=_st(_st(error)._number()).__eq_eq((4100));
if(smalltalk.assert($6)){
_st(self)._release();
};
actionArgs=_st(self)._signalServerError_(error);
};
$7=_st(actionArgs)._isArray();
if(smalltalk.assert($7)){
$8=_st(_st(actionArgs)._at_((1))).__eq_eq("debug");
if(smalltalk.assert($8)){
$9=_st(self)._debuggerRequested_(_st(actionArgs)._at_((2)));
return $9;
};
$10=_st(_st(actionArgs)._at_((1))).__eq_eq("abort");
if(smalltalk.assert($10)){
$11=_st(actionArgs)._at_((2));
return $11;
};
$12=_st(_st(actionArgs)._at_((1))).__eq_eq("resume");
if(smalltalk.assert($12)){
continueWith=_st(_st(self)._library())._oopFor_(_st(actionArgs)._at_((2)));
continueWith;
} else {
$13=_st(actionArgs)._halt_("incorrect return value from GsRuntimeError handler");
return $13;
};
} else {
$14=_st(actionArgs).__eq("resume");
if(smalltalk.assert($14)){
continueWith=_st(_st(_st(self)._library())._oopIllegal())._asOop();
continueWith;
} else {
$15=_st(actionArgs)._halt_("incorrect return value from GsRuntimeError handler");
return $15;
};
};
_st(_st(self)._library())._critical_((function(lib){
return smalltalk.withContext(function($ctx2) {
return _st(lib)._apiGciNbContinueWith_a_a_(_st(error)._context(),_st(_st(_st(self)._library())._oopTypeClass())._fromInteger_(continueWith),(1));
}, function($ctx2) {$ctx2.fillBlock({lib:lib},$ctx1)})}));
$16=_st(self)._getNbResult();
return $16;
}, function($ctx1) {$ctx1.fill(self,"getNbResult",{result:result,error:error,actionArgs:actionArgs,continueWith:continueWith},smalltalk.GciSession)})},
args: [],
source: "getNbResult\x0a  \x22The call that initiated the non-blocking call will be one of three types:\x0a\x09\x091. expecting nothing--e.g., GciNbAbort();\x0a\x09\x092. expecting a Boolean--e.g., GciNbCommit();\x0a\x09\x093. expecting an OopType--e.g., GciNbExecuteStr().\x0a\x09Because we don't know how the answer should be interpreted, we simply\x0a\x09return it as an Integer.\x22\x0a\x0a  | result error actionArgs continueWith |\x0a  \x0a  [result := self nbPollForResult.\x0a  error := self getAndClearLastError] \x0a    ifCurtailed: [ self terminateCurrentNbCall ].\x0a  error isNil\x0a    ifTrue: [ ^ result ].\x0a  actionArgs := error number == 2336\x0a    ifTrue: [ \x0a      GsClientForwarderSendNotification new\x0a        session: self;\x0a        tag: error;\x0a        signal ]\x0a    ifFalse: [ \x0a      error number == 4100\x0a        ifTrue: [ \x0a          \x22Session is invalid ... session died out from under us, so clean up session and throw the error\x22\x0a          self release ].\x0a      self signalServerError: error ].\x0a  actionArgs isArray\x0a    ifTrue: [ \x0a      (actionArgs at: 1) == #'debug'\x0a        ifTrue: [ ^ self debuggerRequested: (actionArgs at: 2) ].\x0a      (actionArgs at: 1) == #'abort'\x0a        ifTrue: [ ^ actionArgs at: 2 ].\x0a      (actionArgs at: 1) == #'resume'\x0a        ifTrue: [ continueWith := self library oopFor: (actionArgs at: 2) ]\x0a        ifFalse: [ ^ actionArgs halt: 'incorrect return value from GsRuntimeError handler' ] ]\x0a    ifFalse: [ \x0a      actionArgs = #'resume'\x0a        ifTrue: [ continueWith := self library oopIllegal asOop ]\x0a        ifFalse: [ ^ actionArgs halt: 'incorrect return value from GsRuntimeError handler' ] ].\x0a  self library\x0a    critical: [ :lib | \x0a      lib\x0a        apiGciNbContinueWith: error context\x0a        a: (self library oopTypeClass fromInteger: continueWith)\x0a        a: 1 ].\x0a  ^ self getNbResult",
messageSends: ["ifCurtailed:", "terminateCurrentNbCall", "nbPollForResult", "getAndClearLastError", "ifTrue:", "isNil", "ifTrue:ifFalse:", "session:", "new", "tag:", "signal", "release", "==", "number", "signalServerError:", "debuggerRequested:", "at:", "oopFor:", "library", "halt:", "asOop", "oopIllegal", "=", "isArray", "critical:", "apiGciNbContinueWith:a:a:", "context", "fromInteger:", "oopTypeClass", "getNbResult"],
referencedClasses: ["GsClientForwarderSendNotification"]
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getNbResultAsString",
category: 'private gci calls',
fn: function (){
var self=this;
var result,oopType,x;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
result=_st(self)._getNbResult();
$1=_st(result)._isInteger();
if(! smalltalk.assert($1)){
$2=result;
return $2;
};
oopType=_st(_st(self)._library())._oopTypeFromInteger_(result);
x=_st(_st(self)._library())._fetchChars_(oopType);
_st($Transcript())._show_(_st(_st("getNbResultAsString returns:    ").__comma(x)).__comma(_st(_st($Character())._cr())._asString()));
$3=x;
return $3;
}, function($ctx1) {$ctx1.fill(self,"getNbResultAsString",{result:result,oopType:oopType,x:x},smalltalk.GciSession)})},
args: [],
source: "getNbResultAsString\x0a  | result oopType x |\x0a  result := self getNbResult.\x0a  result isInteger\x0a    ifFalse: [ ^ result ].\x0a  oopType := self library oopTypeFromInteger: result.\x0a   x := self library fetchChars: oopType.\x0aTranscript show: 'getNbResultAsString returns:    ', x, Character cr asString .\x0a^x",
messageSends: ["getNbResult", "ifFalse:", "isInteger", "oopTypeFromInteger:", "library", "fetchChars:", "show:", ",", "asString", "cr"],
referencedClasses: ["Character", "Transcript"]
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getSessionNumber",
category: 'private gci calls',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@number"]).__eq_eq(nil);
if(smalltalk.assert($1)){
$2=_st(self)._error_("Session no longer logged in.");
return $2;
};
$3=self["@number"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"getSessionNumber",{},smalltalk.GciSession)})},
args: [],
source: "getSessionNumber\x0a\x09number == nil\x0a    \x09ifTrue: [ ^ self error: 'Session no longer logged in.' ].\x0a\x09^ number",
messageSends: ["ifTrue:", "error:", "=="],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@number"]=(0);
self["@clientForwarderCache"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GciSession)})},
args: [],
source: "initialize\x0a\x09number := 0.\x0a\x09\x22TODO: think about finalizationRegistry\x22\x0a\x09\x22self finalizationRegistry add: self.\x22\x0a\x09\x22TODO: why WeakValueDictionary?\x22\x0a\x09clientForwarderCache := Dictionary new",
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "isValid",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@number"]).__tild_tild(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValid",{},smalltalk.GciSession)})},
args: [],
source: "isValid\x0a\x0a\x09^number ~~ nil",
messageSends: ["~~"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "library",
category: 'accessing',
fn: function (){
var self=this;
function $GciLibrary(){return smalltalk.GciLibrary||(typeof GciLibrary=="undefined"?nil:GciLibrary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($GciLibrary())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"library",{},smalltalk.GciSession)})},
args: [],
source: "library\x0a\x0a\x09^ GciLibrary current.\x0a\x09",
messageSends: ["current"],
referencedClasses: ["GciLibrary"]
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "login:",
category: 'initialize',
fn: function (gsPassword){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._login_osUser_osPassword_(gsPassword,"","");
return $1;
}, function($ctx1) {$ctx1.fill(self,"login:",{gsPassword:gsPassword},smalltalk.GciSession)})},
args: ["gsPassword"],
source: "login: gsPassword \x0a\x0a\x09^self\x0a\x09\x09login: gsPassword\x0a\x09\x09osUser: '' \x0a\x09\x09osPassword: ''.",
messageSends: ["login:osUser:osPassword:"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "login:osUser:osPassword:",
category: 'initialize',
fn: function (gsPassword,osUser,osPassword){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(self)._library();
_st($1)._apiGciSetNet_a_a_a_(self["@stoneNRS"],osUser,osPassword,self["@gemNRS"]);
$2=_st($1)._apiGciLogin_a_(self["@userID"],gsPassword);
result=$2;
$3=result;
if(smalltalk.assert($3)){
$4=_st(_st(self)._class())._fullCompressionEnabled();
if(smalltalk.assert($4)){
_st(_st(self)._library())._apiGciEnableFullCompression();
};
self["@number"]=_st(_st(self)._library())._apiGciGetSessionId();
self["@number"];
};
$5=result;
return $5;
}, function($ctx1) {$ctx1.fill(self,"login:osUser:osPassword:",{gsPassword:gsPassword,osUser:osUser,osPassword:osPassword,result:result},smalltalk.GciSession)})},
args: ["gsPassword", "osUser", "osPassword"],
source: "login: gsPassword osUser: osUser osPassword: osPassword\x0a\x09| result |\x0a\x09result := self library\x0a\x09\x09apiGciSetNet: stoneNRS\x0a\x09\x09\x09a: osUser\x0a\x09\x09\x09a: osPassword\x0a\x09\x09\x09a: gemNRS;\x0a\x09\x09apiGciLogin: userID a: gsPassword.\x0a\x09result ifTrue: [ \x0a\x09\x09self class fullCompressionEnabled\x0a\x09\x09\x09ifTrue: [ self library apiGciEnableFullCompression ].\x0a\x09\x09number := self library apiGciGetSessionId ] .\x0a  ^ result",
messageSends: ["apiGciSetNet:a:a:a:", "library", "apiGciLogin:a:", "ifTrue:", "apiGciEnableFullCompression", "fullCompressionEnabled", "class", "apiGciGetSessionId"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "nbPollForResult",
category: 'private gci calls',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._library())._pollForResult();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nbPollForResult",{},smalltalk.GciSession)})},
args: [],
source: "nbPollForResult\x0a\x09\x22TODO: abort code\x22\x0a\x09^ self library pollForResult",
messageSends: ["pollForResult", "library"],
referencedClasses: []
}),
smalltalk.GciSession);

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
}, function($ctx1) {$ctx1.fill(self,"number",{},smalltalk.GciSession)})},
args: [],
source: "number\x0a\x0a\x09^number.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Object.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._space();
_st($1)._nextPut_("[");
_st($1)._nextPutAll_(_st(self["@number"])._printString());
$2=_st($1)._nextPut_("]");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.GciSession)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream space; nextPut: '['; nextPutAll: number printString; nextPut: ']'",
messageSends: ["printOn:", "space", "nextPut:", "nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "rawReceiver:perform:withArgs:",
category: 'public gci calls',
fn: function (receiver,aSymbol,argsArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._library())._apiGciPerform_a_a_(_st(self)._asOopType_(_st(_st(self)._library())._oopFor_(receiver)),_st(aSymbol)._asString(),argsArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawReceiver:perform:withArgs:",{receiver:receiver,aSymbol:aSymbol,argsArray:argsArray},smalltalk.GciSession)})},
args: ["receiver", "aSymbol", "argsArray"],
source: "rawReceiver: receiver perform: aSymbol withArgs: argsArray\x0a\x09^ self library\x0a\x09\x09apiGciPerform: (self asOopType: (self library oopFor: receiver))\x0a\x09\x09a: aSymbol asString\x0a\x09\x09a: argsArray",
messageSends: ["apiGciPerform:a:a:", "asOopType:", "oopFor:", "library", "asString"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "rawReceiverNB:perform:withArgs:",
category: 'public gci calls',
fn: function (receiver,aSymbol,argsArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._rawReceiver_perform_withArgs_(receiver,aSymbol,argsArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawReceiverNB:perform:withArgs:",{receiver:receiver,aSymbol:aSymbol,argsArray:argsArray},smalltalk.GciSession)})},
args: ["receiver", "aSymbol", "argsArray"],
source: "rawReceiverNB: receiver perform: aSymbol withArgs: argsArray\x0a\x09\x22TODO: make non-blocking\x22\x0a\x09^ self rawReceiver: receiver perform: aSymbol withArgs: argsArray",
messageSends: ["rawReceiver:perform:withArgs:"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "registerClientObjectForwarder:",
category: 'finalization',
fn: function (aClientObject){
var self=this;
var oopType;
return smalltalk.withContext(function($ctx1) { 
var $1;
oopType=_st(self)._rawExecuteStringNB_envId_("ClientForwarder new",(0));
_st(_st(self)._clientForwarderCache())._at_put_(oopType,aClientObject);
$1=oopType;
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerClientObjectForwarder:",{aClientObject:aClientObject,oopType:oopType},smalltalk.GciSession)})},
args: ["aClientObject"],
source: "registerClientObjectForwarder: aClientObject\x0a\x09| oopType |\x0a\x09oopType := self rawExecuteStringNB: 'ClientForwarder new' envId: 0.\x0a\x09self clientForwarderCache at: oopType put: aClientObject.\x0a\x09^ oopType",
messageSends: ["rawExecuteStringNB:envId:", "at:put:", "clientForwarderCache"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@number"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.GciSession)})},
args: [],
source: "release\x0a    number := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneHost",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@stoneNRS"])._subStrings_("#"))._first())._subStrings_("@"))._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stoneHost",{},smalltalk.GciSession)})},
args: [],
source: "stoneHost\x0a\x0a\x09^((stoneNRS subStrings: '#') first subStrings: '@') last.\x0a\x09",
messageSends: ["last", "subStrings:", "first"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneNRS:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stoneNRS"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"stoneNRS:",{aString:aString},smalltalk.GciSession)})},
args: ["aString"],
source: "stoneNRS: aString\x0a\x0a\x09stoneNRS := aString.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@stoneNRS"])._subStrings_("!"))._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stoneName",{},smalltalk.GciSession)})},
args: [],
source: "stoneName\x0a\x0a\x09^(stoneNRS subStrings: '!') last.\x09",
messageSends: ["last", "subStrings:"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "unregisterClientObjectForwarder:",
category: 'finalization',
fn: function (aClientObject){
var self=this;
var oopType;
return smalltalk.withContext(function($ctx1) { 
var $1;
oopType=_st(_st(self)._clientForwarderCache())._keyAtValue_(aClientObject);
_st(_st(self)._clientForwarderCache())._removeKey_(oopType);
$1=oopType;
return $1;
}, function($ctx1) {$ctx1.fill(self,"unregisterClientObjectForwarder:",{aClientObject:aClientObject,oopType:oopType},smalltalk.GciSession)})},
args: ["aClientObject"],
source: "unregisterClientObjectForwarder: aClientObject\x0a\x09| oopType |\x0a\x09oopType := self clientForwarderCache keyAtValue: aClientObject.\x0a\x09self clientForwarderCache removeKey: oopType.\x0a\x09^ oopType",
messageSends: ["keyAtValue:", "clientForwarderCache", "removeKey:"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "userID",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@userID"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"userID",{},smalltalk.GciSession)})},
args: [],
source: "userID\x0a\x0a\x09^userID.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "userID:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userID"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"userID:",{aString:aString},smalltalk.GciSession)})},
args: ["aString"],
source: "userID: aString\x0a\x0a\x09userID := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession);


smalltalk.GciSession.klass.iVarNames = ['fullCompressionEnabled'];
smalltalk.addMethod(
smalltalk.method({
selector: "disableFullCompression",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fullCompressionEnabled"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"disableFullCompression",{},smalltalk.GciSession.klass)})},
args: [],
source: "disableFullCompression\x0a\x09\x22self disableFullCompression\x22\x0a\x09\x22takes effect at next login\x22\x0a\x0a\x09fullCompressionEnabled := false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "enableFullCompression",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fullCompressionEnabled"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"enableFullCompression",{},smalltalk.GciSession.klass)})},
args: [],
source: "enableFullCompression\x0a\x09\x22self enableFullCompression\x22\x0a\x09\x22takes effect at next login\x22\x0a\x0a\x09fullCompressionEnabled := true.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GciSession.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fullCompressionEnabled",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@fullCompressionEnabled"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@fullCompressionEnabled"]=false;
self["@fullCompressionEnabled"];
};
$2=self["@fullCompressionEnabled"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"fullCompressionEnabled",{},smalltalk.GciSession.klass)})},
args: [],
source: "fullCompressionEnabled\x0a\x0a\x09fullCompressionEnabled == nil ifTrue: [ fullCompressionEnabled := false ].\x0a\x09^ fullCompressionEnabled",
messageSends: ["ifTrue:", "=="],
referencedClasses: []
}),
smalltalk.GciSession.klass);


smalltalk.addClass('GsClientForwarderSendNotification', smalltalk.Notification, ['session'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultAction",
category: 'not yet classified',
fn: function (){
var self=this;
var result,forwarder,clientForwarderOop,selector,args;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
args=_st(_st(self)._tag())._args();
clientForwarderOop=_st(self["@session"])._asOopType_(_st(args)._at_((1)));
forwarder=_st(self["@session"])._clientObjectForwardedFrom_(clientForwarderOop);
$1=_st(forwarder).__eq_eq(nil);
if(smalltalk.assert($1)){
_st(self)._resume_(_st($Array())._with_with_("resume",nil));
};
selector=_st(args)._at_((3));
args=_st(args)._at_((4));
result=_st(forwarder)._performFromServer_with_using_(selector,args,self["@session"]);
_st(self)._resume_(_st($Array())._with_with_("resume",result));
return self}, function($ctx1) {$ctx1.fill(self,"defaultAction",{result:result,forwarder:forwarder,clientForwarderOop:clientForwarderOop,selector:selector,args:args},smalltalk.GsClientForwarderSendNotification)})},
args: [],
source: "defaultAction\x0a  | result forwarder clientForwarderOop selector args |\x0a  args := self tag args.\x0a  clientForwarderOop := session asOopType: (args at: 1).\x0a  forwarder := session clientObjectForwardedFrom: clientForwarderOop.\x0a  forwarder == nil\x0a    ifTrue: [ self resume: (Array with: #'resume' with: nil) ].\x0a  selector := args at: 3.\x0a  args := args at: 4.\x0a  result := forwarder performFromServer: selector with: args using: session.\x0a  self resume: (Array with: #'resume' with: result)",
messageSends: ["args", "tag", "asOopType:", "at:", "clientObjectForwardedFrom:", "ifTrue:", "resume:", "with:with:", "==", "performFromServer:with:using:"],
referencedClasses: ["Array"]
}),
smalltalk.GsClientForwarderSendNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@session"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.GsClientForwarderSendNotification)})},
args: [],
source: "session\x0a    ^ session",
messageSends: [],
referencedClasses: []
}),
smalltalk.GsClientForwarderSendNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "session:",
category: 'not yet classified',
fn: function (aGciSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@session"]=aGciSession;
return self}, function($ctx1) {$ctx1.fill(self,"session:",{aGciSession:aGciSession},smalltalk.GsClientForwarderSendNotification)})},
args: ["aGciSession"],
source: "session: aGciSession\x0a    session := aGciSession",
messageSends: [],
referencedClasses: []
}),
smalltalk.GsClientForwarderSendNotification);



smalltalk.addClass('GsError', smalltalk.Error, ['session'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "session",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@session"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.GsError)})},
args: [],
source: "session\x0a\x09^ session",
messageSends: [],
referencedClasses: []
}),
smalltalk.GsError);

smalltalk.addMethod(
smalltalk.method({
selector: "session:",
category: 'accessing',
fn: function (aGciSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@session"]=aGciSession;
return self}, function($ctx1) {$ctx1.fill(self,"session:",{aGciSession:aGciSession},smalltalk.GsError)})},
args: ["aGciSession"],
source: "session: aGciSession\x0a\x09session := aGciSession.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GsError);



smalltalk.addClass('GsRuntimeError', smalltalk.GsError, [], 'Topez-Client-Session');


smalltalk.addClass('OGCustomSessionDescription', smalltalk.Object, ['name', 'stoneHost', 'stoneName', 'gemHost', 'netLDI', 'gemTask', 'userId', 'password', 'osUserId', 'osPassword', 'dataDirectory', 'backupDirectory', 'gemstoneVersion', 'gciLibraryName', 'adornmentColor'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "addOptionalTemplateEntriesOn:",
category: 'template',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(_st(self)._backupDirectory())._isEmpty();
if(! smalltalk.assert($1)){
$2=aStream;
_st($2)._cr();
$3=_st($2)._tab();
$3;
$4=aStream;
_st($4)._nextPutAll_(_st("backupDirectory: ").__comma(_st(_st(self)._backupDirectory())._printString()));
$5=_st($4)._nextPut_(";");
$5;
};
$6=_st(_st(self)._dataDirectory())._isEmpty();
if(! smalltalk.assert($6)){
$7=aStream;
_st($7)._cr();
_st($7)._tab();
_st($7)._nextPutAll_(_st("dataDirectory: ").__comma(_st(_st(self)._dataDirectory())._printString()));
$8=_st($7)._nextPut_(";");
$8;
};
return self}, function($ctx1) {$ctx1.fill(self,"addOptionalTemplateEntriesOn:",{aStream:aStream},smalltalk.OGCustomSessionDescription)})},
args: ["aStream"],
source: "addOptionalTemplateEntriesOn: aStream\x0a\x0a\x09self backupDirectory isEmpty\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09aStream cr; tab.\x0a\x09\x09\x09aStream nextPutAll: 'backupDirectory: ', self backupDirectory printString; nextPut: ';' ].\x0a\x09self dataDirectory isEmpty\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aStream\x0a \x09\x09\x09\x09cr; tab;\x0a\x09\x09\x09\x09nextPutAll: 'dataDirectory: ', self dataDirectory printString; nextPut: ';' ].",
messageSends: ["ifFalse:", "cr", "tab", "nextPutAll:", ",", "printString", "backupDirectory", "nextPut:", "isEmpty", "dataDirectory"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor",
category: 'accessing',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@adornmentColor"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@adornmentColor"]=_st($Color())._lightGreen();
self["@adornmentColor"];
} else {
$1;
};
$2=self["@adornmentColor"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"adornmentColor",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "adornmentColor\x0a\x09adornmentColor ifNil: [ adornmentColor := Color lightGreen ].\x0a\x09^ adornmentColor",
messageSends: ["ifNil:", "lightGreen"],
referencedClasses: ["Color"]
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@adornmentColor"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"adornmentColor:",{anObject:anObject},smalltalk.OGCustomSessionDescription)})},
args: ["anObject"],
source: "adornmentColor: anObject\x0a\x09adornmentColor := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "backupDirectory",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@backupDirectory"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@backupDirectory"]="";
self["@backupDirectory"];
};
$2=self["@backupDirectory"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"backupDirectory",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "backupDirectory\x0a\x0a\x09backupDirectory == nil ifTrue: [ backupDirectory := '' ].\x0a\x09^backupDirectory",
messageSends: ["ifTrue:", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "backupDirectory:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._isEmpty())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aString)._last()).__eq("/");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self["@backupDirectory"]=aString;
self["@backupDirectory"];
} else {
self["@backupDirectory"]=_st(aString).__comma("/");
self["@backupDirectory"];
};
return self}, function($ctx1) {$ctx1.fill(self,"backupDirectory:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "backupDirectory: aString\x0a\x0a\x09(aString isEmpty or: [ aString last = '/' ])\x0a\x09\x09ifTrue: [ backupDirectory := aString ]\x0a\x09\x09ifFalse: [ backupDirectory := aString, '/' ]",
messageSends: ["ifTrue:ifFalse:", ",", "or:", "=", "last", "isEmpty"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDirectory",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@dataDirectory"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@dataDirectory"]="";
self["@dataDirectory"];
};
$2=self["@dataDirectory"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"dataDirectory",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "dataDirectory\x0a\x0a\x09dataDirectory == nil ifTrue: [ dataDirectory := '' ].\x0a\x09^dataDirectory",
messageSends: ["ifTrue:", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDirectory:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._isEmpty())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aString)._last()).__eq("/");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self["@dataDirectory"]=aString;
self["@dataDirectory"];
} else {
self["@dataDirectory"]=_st(aString).__comma("/");
self["@dataDirectory"];
};
return self}, function($ctx1) {$ctx1.fill(self,"dataDirectory:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "dataDirectory: aString\x0a\x0a\x09(aString isEmpty or: [ aString last = '/' ])\x0a\x09\x09ifTrue: [ dataDirectory := aString ]\x0a\x09\x09ifFalse: [ dataDirectory := aString, '/' ]",
messageSends: ["ifTrue:ifFalse:", ",", "or:", "=", "last", "isEmpty"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultGemHost",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "glass";
}, function($ctx1) {$ctx1.fill(self,"defaultGemHost",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "defaultGemHost\x0a\x0a\x09^'glass'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultGemTask",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "gemnetobject";
}, function($ctx1) {$ctx1.fill(self,"defaultGemTask",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "defaultGemTask\x0a\x0a\x09^'gemnetobject'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultNetLDI",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "50377";
}, function($ctx1) {$ctx1.fill(self,"defaultNetLDI",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "defaultNetLDI\x0a\x0a\x09^'50377'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultPassword",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "swordfish";
}, function($ctx1) {$ctx1.fill(self,"defaultPassword",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "defaultPassword\x0a\x0a\x09^'swordfish'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultStoneHost",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "glass";
}, function($ctx1) {$ctx1.fill(self,"defaultStoneHost",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "defaultStoneHost\x0a\x0a\x09^'glass'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultStoneName",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "seaside";
}, function($ctx1) {$ctx1.fill(self,"defaultStoneName",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "defaultStoneName\x0a\x0a\x09^'seaside'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultUserId",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "DataCurator";
}, function($ctx1) {$ctx1.fill(self,"defaultUserId",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "defaultUserId\x0a\x0a\x09^'DataCurator'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate",
category: 'template',
fn: function (){
var self=this;
var stream;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $WriteStream(){return smalltalk.WriteStream||(typeof WriteStream=="undefined"?nil:WriteStream)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
stream=_st($WriteStream())._on_(_st($String())._new());
$1=stream;
_st($1)._nextPutAll_(_st(_st(_st(self)._class())._name())._asString());
_st($1)._nextPutAll_(" new");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("name: ").__comma(_st(_st(self)._name())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("stoneHost: ").__comma(_st(_st(self)._stoneHost())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("stoneName: ").__comma(_st(_st(self)._stoneName())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("gemHost: ").__comma(_st(_st(self)._gemHost())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("netLDI: ").__comma(_st(_st(self)._netLDI())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("gemTask: ").__comma(_st(_st(self)._gemTask())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("userId: ").__comma(_st(_st(self)._userId())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("password: ").__comma(_st(_st(self)._password())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("osUserId: ").__comma(_st(_st(self)._osUserId())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("osPassword: ").__comma(_st(_st(self)._osPassword())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("backupDirectory: ").__comma(_st(_st(self)._backupDirectory())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("dataDirectory: ").__comma(_st(_st(self)._dataDirectory())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
$2=_st($1)._nextPutAll_("yourself.");
$3=_st(stream)._contents();
return $3;
}, function($ctx1) {$ctx1.fill(self,"editTemplate",{stream:stream},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "editTemplate\x0a\x0a\x09| stream |\x0a\x09stream := WriteStream on: String new.\x0a\x09stream \x0a\x09\x09nextPutAll: self class name asString; nextPutAll: ' new';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'name: ', self name printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'stoneHost: ', self stoneHost printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'stoneName: ', self stoneName printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'gemHost: ', self gemHost printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'netLDI: ', self netLDI printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'gemTask: ', self gemTask printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'userId: ', self userId printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'password: ', self password printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'osUserId: ', self osUserId printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'osPassword: ', self osPassword printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'backupDirectory: ', self backupDirectory printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'dataDirectory: ', self dataDirectory printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'yourself.'.\x0a\x09^stream contents",
messageSends: ["on:", "new", "nextPutAll:", "asString", "name", "class", "cr", "tab", ",", "printString", "nextPut:", "stoneHost", "stoneName", "gemHost", "netLDI", "gemTask", "userId", "password", "osUserId", "osPassword", "backupDirectory", "dataDirectory", "contents"],
referencedClasses: ["String", "WriteStream"]
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gciLibrary",
category: 'accessing',
fn: function (){
var self=this;
function $GciLibrary(){return smalltalk.GciLibrary||(typeof GciLibrary=="undefined"?nil:GciLibrary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($GciLibrary())._new();
_st($2)._apiGciInit();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciLibrary",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "gciLibrary\x0a\x09\x22TODO: think about support for more libraries\x22\x0a\x09^ GciLibrary new\x0a\x09\x09apiGciInit;\x0a\x09\x09yourself.",
messageSends: ["apiGciInit", "new", "yourself"],
referencedClasses: ["GciLibrary"]
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gciLibraryName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gciLibraryName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciLibraryName",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "gciLibraryName\x0a\x09^ gciLibraryName",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gciLibraryName:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gciLibraryName"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"gciLibraryName:",{anObject:anObject},smalltalk.OGCustomSessionDescription)})},
args: ["anObject"],
source: "gciLibraryName: anObject\x0a\x09gciLibraryName := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemHost",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@gemHost"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@gemHost"]=_st(self)._defaultGemHost();
self["@gemHost"];
};
$2=self["@gemHost"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"gemHost",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "gemHost\x0a\x0a\x09gemHost == nil ifTrue: [ gemHost := self defaultGemHost ].\x0a\x09^gemHost",
messageSends: ["ifTrue:", "defaultGemHost", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemHost:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gemHost"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"gemHost:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "gemHost: aString\x0a\x0a\x09gemHost := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemNRS",
category: 'nrs',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st("!tcp@").__comma(_st(self)._gemHost())).__comma("#netldi:")).__comma(_st(self)._netLDI())).__comma("#task!")).__comma(_st(self)._gemTask());
return $1;
}, function($ctx1) {$ctx1.fill(self,"gemNRS",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "gemNRS\x0a\x0a\x09^'!tcp@' , self gemHost, \x0a\x09\x09'#netldi:' , self netLDI, \x0a\x09\x09'#task!' , self gemTask.",
messageSends: [",", "gemTask", "netLDI", "gemHost"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemTask",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@gemTask"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@gemTask"]=_st(self)._defaultGemTask();
self["@gemTask"];
};
$2=self["@gemTask"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"gemTask",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "gemTask\x0a\x0a\x09gemTask == nil ifTrue: [ gemTask := self defaultGemTask ].\x0a\x09^gemTask",
messageSends: ["ifTrue:", "defaultGemTask", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemTask:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gemTask"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"gemTask:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "gemTask: aString\x0a\x0a\x09gemTask := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemstoneVersion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gemstoneVersion"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gemstoneVersion",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "gemstoneVersion\x0a\x09^ gemstoneVersion",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemstoneVersion:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gemstoneVersion"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"gemstoneVersion:",{anObject:anObject},smalltalk.OGCustomSessionDescription)})},
args: ["anObject"],
source: "gemstoneVersion: anObject\x0a\x09gemstoneVersion := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "isGuest",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._osUserId())._isEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isGuest",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "isGuest\x0a\x0a\x09^self osUserId isEmpty",
messageSends: ["isEmpty", "osUserId"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@name"]).__eq_eq(nil);
if(smalltalk.assert($2)){
$1=_st(_st(self)._class())._label();
} else {
$1=self["@name"];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "name\x0a\x0a\x09^name == nil\x0a\x09\x09ifTrue: [ self class label ]\x0a\x09\x09ifFalse: [ name ]",
messageSends: ["ifTrue:ifFalse:", "label", "class", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "name: aString\x0a\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "netLDI",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@netLDI"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@netLDI"]=_st(self)._defaultNetLDI();
self["@netLDI"];
};
$2=self["@netLDI"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"netLDI",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "netLDI\x0a\x0a\x09netLDI == nil ifTrue: [ netLDI := self defaultNetLDI ].\x0a\x09^netLDI",
messageSends: ["ifTrue:", "defaultNetLDI", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "netLDI:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@netLDI"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"netLDI:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "netLDI: aString\x0a\x0a\x09netLDI := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "obConfigure",
category: 'template',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._obConfigureWith_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"obConfigure",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "obConfigure\x0a\x0a\x09^self class obConfigureWith: self",
messageSends: ["obConfigureWith:", "class"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "osPassword",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@osPassword"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@osPassword"]="";
self["@osPassword"];
};
$2=self["@osPassword"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"osPassword",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "osPassword\x0a\x0a\x09osPassword == nil ifTrue: [ osPassword := '' ].\x0a\x09^osPassword",
messageSends: ["ifTrue:", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "osPassword:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@osPassword"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"osPassword:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "osPassword: aString\x0a\x0a\x09osPassword := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "osUserId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@osUserId"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@osUserId"]="";
self["@osUserId"];
};
$2=self["@osUserId"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"osUserId",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "osUserId\x0a\x0a\x09osUserId == nil ifTrue: [ osUserId := '' ].\x0a\x09^osUserId",
messageSends: ["ifTrue:", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "osUserId:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@osUserId"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"osUserId:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "osUserId: aString\x0a\x0a\x09osUserId := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "password",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@password"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@password"]=_st(self)._defaultPassword();
self["@password"];
};
$2=self["@password"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"password",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "password\x0a\x0a\x09password == nil ifTrue: [ password := self defaultPassword ].\x0a\x09^password",
messageSends: ["ifTrue:", "defaultPassword", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "password:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@password"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"password:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "password: aString\x0a\x0a\x09password := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._postCopy.apply(_st(self), []);
_st(self)._name_(_st(_st(self)._name()).__comma(" copy"));
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "postCopy\x0a\x0a\x09super postCopy.\x0a\x09self name: self name, ' copy'",
messageSends: ["postCopy", "name:", ",", "name"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneHost",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@stoneHost"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@stoneHost"]=_st(self)._defaultStoneHost();
self["@stoneHost"];
};
$2=self["@stoneHost"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"stoneHost",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "stoneHost\x0a\x0a\x09stoneHost == nil ifTrue: [ stoneHost := self defaultStoneHost ].\x0a\x09^stoneHost",
messageSends: ["ifTrue:", "defaultStoneHost", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneHost:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stoneHost"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"stoneHost:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "stoneHost: aString\x0a\x0a\x09stoneHost := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneNRS",
category: 'nrs',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st("!tcp@").__comma(_st(self)._stoneHost())).__comma("#server!")).__comma(_st(self)._stoneName());
return $1;
}, function($ctx1) {$ctx1.fill(self,"stoneNRS",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "stoneNRS\x0a\x0a\x09^'!tcp@' , self stoneHost , \x0a\x09\x09'#server!' , self stoneName.\x0a\x09",
messageSends: [",", "stoneName", "stoneHost"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@stoneName"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@stoneName"]=_st(self)._defaultStoneName();
self["@stoneName"];
};
$2=self["@stoneName"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"stoneName",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "stoneName\x0a\x0a\x09stoneName == nil ifTrue: [ stoneName := self defaultStoneName ].\x0a\x09^stoneName",
messageSends: ["ifTrue:", "defaultStoneName", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stoneName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"stoneName:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "stoneName: aString\x0a\x0a\x09stoneName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "userId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@userId"]).__eq_eq(nil);
if(smalltalk.assert($1)){
self["@userId"]=_st(self)._defaultUserId();
self["@userId"];
};
$2=self["@userId"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"userId",{},smalltalk.OGCustomSessionDescription)})},
args: [],
source: "userId\x0a\x0a\x09userId == nil ifTrue: [ userId := self defaultUserId ].\x0a\x09^userId",
messageSends: ["ifTrue:", "defaultUserId", "=="],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "userId:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userId"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"userId:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
args: ["aString"],
source: "userId: aString\x0a\x0a\x09userId := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription);


smalltalk.addMethod(
smalltalk.method({
selector: "isValid",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isValid",{},smalltalk.OGCustomSessionDescription.klass)})},
args: [],
source: "isValid\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Custom";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.OGCustomSessionDescription.klass)})},
args: [],
source: "label\x0a\x09^ 'Custom'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "obConfigure",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._obConfigureWith_(_st(self)._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"obConfigure",{},smalltalk.OGCustomSessionDescription.klass)})},
args: [],
source: "obConfigure\x0a\x09^ self obConfigureWith: self new",
messageSends: ["obConfigureWith:", "new"],
referencedClasses: []
}),
smalltalk.OGCustomSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "obConfigureWith:",
category: 'instance creation',
fn: function (aDescription){
var self=this;
var creationString,description;
function $OBMultiLineTextRequest(){return smalltalk.OBMultiLineTextRequest||(typeof OBMultiLineTextRequest=="undefined"?nil:OBMultiLineTextRequest)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
creationString=_st($OBMultiLineTextRequest())._prompt_template_("Edit template and save",_st(aDescription)._editTemplate());
$1=_st(_st(creationString)._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(creationString)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
return nil;
};
description=_st(self)._readFrom_(_st(creationString)._readStream());
$2=description;
return $2;
}, function($ctx1) {$ctx1.fill(self,"obConfigureWith:",{aDescription:aDescription,creationString:creationString,description:description},smalltalk.OGCustomSessionDescription.klass)})},
args: ["aDescription"],
source: "obConfigureWith: aDescription\x0a\x0a\x09| creationString description |\x0a\x09\x22TODO: provide editor\x22\x0a\x09creationString := OBMultiLineTextRequest prompt: 'Edit template and save' template: aDescription editTemplate.\x0a\x09(creationString isNil or: [creationString isEmpty]) ifTrue: [ ^nil ].\x0a\x09description := self readFrom: creationString readStream.\x0a\x09^description",
messageSends: ["prompt:template:", "editTemplate", "ifTrue:", "or:", "isEmpty", "isNil", "readFrom:", "readStream"],
referencedClasses: ["OBMultiLineTextRequest"]
}),
smalltalk.OGCustomSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "readFrom:",
category: 'instance creation',
fn: function (textStringOrStream){
var self=this;
var object;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $OGCustomSessionDescription(){return smalltalk.OGCustomSessionDescription||(typeof OGCustomSessionDescription=="undefined"?nil:OGCustomSessionDescription)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($Compiler())._couldEvaluate_(textStringOrStream);
if(! smalltalk.assert($1)){
$2=_st(self)._error_("expected String, Stream, or Text");
return $2;
};
object=_st($Compiler())._evaluate_(textStringOrStream);
$3=_st(object)._isKindOf_($OGCustomSessionDescription());
if(! smalltalk.assert($3)){
_st(self)._error_(_st(_st(self)._name()).__comma(" expected"));
};
$4=object;
return $4;
}, function($ctx1) {$ctx1.fill(self,"readFrom:",{textStringOrStream:textStringOrStream,object:object},smalltalk.OGCustomSessionDescription.klass)})},
args: ["textStringOrStream"],
source: "readFrom: textStringOrStream\x0a\x09\x22Create an object based on the contents of textStringOrStream.\x22\x0a\x0a\x09| object |\x0a\x09(Compiler couldEvaluate: textStringOrStream)\x0a\x09\x09ifFalse: [^ self error: 'expected String, Stream, or Text'].\x0a\x09object := Compiler evaluate: textStringOrStream.\x0a\x09(object isKindOf: OGCustomSessionDescription) ifFalse: [self error: self name, ' expected'].\x0a\x09^ object",
messageSends: ["ifFalse:", "error:", "couldEvaluate:", "evaluate:", ",", "name", "isKindOf:"],
referencedClasses: ["Compiler", "OGCustomSessionDescription"]
}),
smalltalk.OGCustomSessionDescription.klass);


smalltalk.addClass('OGApplianceSessionDescription', smalltalk.OGCustomSessionDescription, [], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultGemHost",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stoneHost();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultGemHost",{},smalltalk.OGApplianceSessionDescription)})},
args: [],
source: "defaultGemHost\x0a\x0a\x09^self stoneHost",
messageSends: ["stoneHost"],
referencedClasses: []
}),
smalltalk.OGApplianceSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate",
category: 'template',
fn: function (){
var self=this;
var stream;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $WriteStream(){return smalltalk.WriteStream||(typeof WriteStream=="undefined"?nil:WriteStream)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
stream=_st($WriteStream())._on_(_st($String())._new());
$1=stream;
_st($1)._nextPutAll_(_st(_st(_st(self)._class())._name())._asString());
_st($1)._nextPutAll_(" new");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("name: ").__comma(_st(_st(self)._name())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("stoneHost: ").__comma(_st(_st(self)._stoneHost())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("stoneName: ").__comma(_st(_st(self)._stoneName())._printString()));
$2=_st($1)._nextPut_(";");
_st(self)._addOptionalTemplateEntriesOn_(stream);
$3=stream;
_st($3)._cr();
_st($3)._tab();
$4=_st($3)._nextPutAll_("yourself.");
$5=_st(stream)._contents();
return $5;
}, function($ctx1) {$ctx1.fill(self,"editTemplate",{stream:stream},smalltalk.OGApplianceSessionDescription)})},
args: [],
source: "editTemplate\x0a\x0a\x09| stream |\x0a\x09stream := WriteStream on: String new.\x0a\x09stream \x0a\x09\x09nextPutAll: self class name asString; nextPutAll: ' new';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'name: ', self name printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'stoneHost: ', self stoneHost printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'stoneName: ', self stoneName printString; nextPut: ';'.\x0a\x09self addOptionalTemplateEntriesOn: stream.\x0a\x09stream \x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'yourself.'.\x0a\x09^stream contents",
messageSends: ["on:", "new", "nextPutAll:", "asString", "name", "class", "cr", "tab", ",", "printString", "nextPut:", "stoneHost", "stoneName", "addOptionalTemplateEntriesOn:", "contents"],
referencedClasses: ["String", "WriteStream"]
}),
smalltalk.OGApplianceSessionDescription);


smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Appliance";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.OGApplianceSessionDescription.klass)})},
args: [],
source: "label\x0a\x09^ 'Appliance'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGApplianceSessionDescription.klass);


smalltalk.addClass('OGFullSessionDescription', smalltalk.OGCustomSessionDescription, [], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate",
category: 'template',
fn: function (){
var self=this;
var stream;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $WriteStream(){return smalltalk.WriteStream||(typeof WriteStream=="undefined"?nil:WriteStream)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
stream=_st($WriteStream())._on_(_st($String())._new());
$1=stream;
_st($1)._nextPutAll_(_st(_st(_st(self)._class())._name())._asString());
_st($1)._nextPutAll_(" new");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("name: ").__comma(_st(_st(self)._name())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("stoneHost: ").__comma(_st(_st(self)._stoneHost())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("stoneName: ").__comma(_st(_st(self)._stoneName())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("gemHost: ").__comma(_st(_st(self)._gemHost())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("netLDI: ").__comma(_st(_st(self)._netLDI())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("gemTask: ").__comma(_st(_st(self)._gemTask())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("userId: ").__comma(_st(_st(self)._userId())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("password: ").__comma(_st(_st(self)._password())._printString()));
$2=_st($1)._nextPut_(";");
_st(self)._addOptionalTemplateEntriesOn_(stream);
$3=stream;
_st($3)._cr();
_st($3)._tab();
$4=_st($3)._nextPutAll_("yourself.");
$5=_st(stream)._contents();
return $5;
}, function($ctx1) {$ctx1.fill(self,"editTemplate",{stream:stream},smalltalk.OGFullSessionDescription)})},
args: [],
source: "editTemplate\x0a\x0a\x09| stream |\x0a\x09stream := WriteStream on: String new.\x0a\x09stream \x0a\x09\x09nextPutAll: self class name asString; nextPutAll: ' new';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'name: ', self name printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'stoneHost: ', self stoneHost printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'stoneName: ', self stoneName printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'gemHost: ', self gemHost printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'netLDI: ', self netLDI printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'gemTask: ', self gemTask printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'userId: ', self userId printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'password: ', self password printString; nextPut: ';'.\x0a\x09self addOptionalTemplateEntriesOn: stream.\x0a\x09stream \x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'yourself.'.\x0a\x09^stream contents",
messageSends: ["on:", "new", "nextPutAll:", "asString", "name", "class", "cr", "tab", ",", "printString", "nextPut:", "stoneHost", "stoneName", "gemHost", "netLDI", "gemTask", "userId", "password", "addOptionalTemplateEntriesOn:", "contents"],
referencedClasses: ["String", "WriteStream"]
}),
smalltalk.OGFullSessionDescription);


smalltalk.addMethod(
smalltalk.method({
selector: "isValid",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isValid",{},smalltalk.OGFullSessionDescription.klass)})},
args: [],
source: "isValid\x0a\x09\x22Will ultimately get rid of OGFullSessionDescription - won't show up in the choices anymore, to start'\x22\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGFullSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Full";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.OGFullSessionDescription.klass)})},
args: [],
source: "label\x0a\x09^ 'Full'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGFullSessionDescription.klass);


smalltalk.addClass('OGStandardSessionDescription', smalltalk.OGCustomSessionDescription, [], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "addOptionalTemplateEntriesOn:",
category: 'template',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._dataDirectory())._isEmpty();
if(! smalltalk.assert($1)){
$2=aStream;
_st($2)._cr();
_st($2)._tab();
_st($2)._nextPutAll_(_st("dataDirectory: ").__comma(_st(_st(self)._dataDirectory())._printString()));
$3=_st($2)._nextPut_(";");
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"addOptionalTemplateEntriesOn:",{aStream:aStream},smalltalk.OGStandardSessionDescription)})},
args: ["aStream"],
source: "addOptionalTemplateEntriesOn: aStream\x0a\x0a\x09self dataDirectory isEmpty\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aStream\x0a \x09\x09\x09\x09cr; tab;\x0a\x09\x09\x09\x09nextPutAll: 'dataDirectory: ', self dataDirectory printString; nextPut: ';' ].",
messageSends: ["ifFalse:", "cr", "tab", "nextPutAll:", ",", "printString", "dataDirectory", "nextPut:", "isEmpty"],
referencedClasses: []
}),
smalltalk.OGStandardSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultGemHost",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stoneHost();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultGemHost",{},smalltalk.OGStandardSessionDescription)})},
args: [],
source: "defaultGemHost\x0a\x09^ self stoneHost",
messageSends: ["stoneHost"],
referencedClasses: []
}),
smalltalk.OGStandardSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate",
category: 'template',
fn: function (){
var self=this;
var stream;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $WriteStream(){return smalltalk.WriteStream||(typeof WriteStream=="undefined"?nil:WriteStream)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
stream=_st($WriteStream())._on_(_st($String())._new());
$1=stream;
_st($1)._nextPutAll_(_st(_st(_st(self)._class())._name())._asString());
_st($1)._nextPutAll_(" new");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("name: ").__comma(_st(_st(self)._name())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("stoneHost: ").__comma(_st(_st(self)._stoneHost())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("stoneName: ").__comma(_st(_st(self)._stoneName())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("gemHost: ").__comma(_st(_st(self)._gemHost())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("netLDI: ").__comma(_st(_st(self)._netLDI())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("userId: ").__comma(_st(_st(self)._userId())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("password: ").__comma(_st(_st(self)._password())._printString()));
_st($1)._nextPut_(";");
_st($1)._cr();
_st($1)._tab();
_st($1)._nextPutAll_(_st("backupDirectory: ").__comma(_st(_st(self)._backupDirectory())._printString()));
$2=_st($1)._nextPut_(";");
_st(self)._addOptionalTemplateEntriesOn_(stream);
$3=stream;
_st($3)._cr();
_st($3)._tab();
$4=_st($3)._nextPutAll_("yourself.");
$5=_st(stream)._contents();
return $5;
}, function($ctx1) {$ctx1.fill(self,"editTemplate",{stream:stream},smalltalk.OGStandardSessionDescription)})},
args: [],
source: "editTemplate\x0a\x0a\x09| stream |\x0a\x09stream := WriteStream on: String new.\x0a\x09stream \x0a\x09\x09nextPutAll: self class name asString; nextPutAll: ' new';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'name: ', self name printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'stoneHost: ', self stoneHost printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'stoneName: ', self stoneName printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'gemHost: ', self gemHost printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'netLDI: ', self netLDI printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'userId: ', self userId printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'password: ', self password printString; nextPut: ';';\x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'backupDirectory: ', self backupDirectory printString; nextPut: ';'.\x0a\x09self addOptionalTemplateEntriesOn: stream.\x0a\x09stream \x0a\x09\x09cr; tab;\x0a\x09\x09nextPutAll: 'yourself.'.\x0a\x09^stream contents",
messageSends: ["on:", "new", "nextPutAll:", "asString", "name", "class", "cr", "tab", ",", "printString", "nextPut:", "stoneHost", "stoneName", "gemHost", "netLDI", "userId", "password", "backupDirectory", "addOptionalTemplateEntriesOn:", "contents"],
referencedClasses: ["String", "WriteStream"]
}),
smalltalk.OGStandardSessionDescription);


smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Standard";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.OGStandardSessionDescription.klass)})},
args: [],
source: "label\x0a\x09^ 'Standard'",
messageSends: [],
referencedClasses: []
}),
smalltalk.OGStandardSessionDescription.klass);


