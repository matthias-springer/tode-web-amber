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
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=_st(_st(self)._library())._apiGciExecuteStr_a_a_(aString,_st(_st(self)._library())._oopNil(),envId);
$1=_st(_st(self)._library())._fetchChars_(result);
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeStringExpectingString:envId:",{aString:aString,envId:envId,result:result},smalltalk.GciSession)})},
args: ["aString", "envId"],
source: "executeStringExpectingString: aString envId: envId\x0a\x09|result|\x0a\x09result := self library apiGciExecuteStr: aString a: self library oopNil a: envId.\x0a\x09^ self library fetchChars: result",
messageSends: ["apiGciExecuteStr:a:a:", "oopNil", "library", "fetchChars:"],
referencedClasses: []
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
_st(_st(self)._finalizationRegistry())._add_(self);
self["@clientForwarderCache"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GciSession)})},
args: [],
source: "initialize\x0a\x09number := 0.\x0a\x09self finalizationRegistry add: self.\x0a\x09\x22TODO: why WeakValueDictionary?\x22\x0a\x09clientForwarderCache := Dictionary new",
messageSends: ["add:", "finalizationRegistry", "new"],
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



