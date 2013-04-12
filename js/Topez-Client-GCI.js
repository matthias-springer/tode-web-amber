smalltalk.addPackage('Topez-Client-GCI');
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
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
params=_st(aDictionary)._copy();
_st(params)._at_put_("!session_id",self["@sessionId"]);
result=_st(_st(_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(params)._asJSON()))._responseText())._parseJSON();
$1=_st(result)._success();
if(! smalltalk.assert($1)){
_st($Error())._signal_(_st(_st(command).__comma(" GCI API call failed. ")).__comma(_st(result)._exception()));
};
$2=_st(result)._result();
return $2;
}, function($ctx1) {$ctx1.fill(self,"apiGci:data:",{command:command,aDictionary:aDictionary,params:params,result:result},smalltalk.GciLibrary)})},
args: ["command", "aDictionary"],
source: "apiGci: command data: aDictionary\x0a\x09|params result|\x0a\x09params := aDictionary copy.\x0a\x09params at: '!session_id' put: sessionId.\x0a\x09result := (Ajax ajaxSync: '/gci/', command data: params asJSON) responseText parseJSON.\x0a\x09result success ifFalse: [Error signal: command, ' GCI API call failed. ', result exception].\x0a\x09^ result result",
messageSends: ["copy", "at:put:", "parseJSON", "responseText", "ajaxSync:data:", ",", "asJSON", "ifFalse:", "signal:", "exception", "success", "result"],
referencedClasses: ["Ajax", "Error"]
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
$1=_st(self)._apiGci_data_("execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(anOop)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStr:a:",{aString:aString,anOop:anOop},smalltalk.GciLibrary)})},
args: ["aString", "anOop"],
source: "apiGciExecuteStr: aString a: anOop\x0a\x09^ self apiGci: 'execute_str' data: {'string'->aString. 'oop'->anOop} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->"],
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
var $1;
self["@sessionId"]=_st(self)._apiGci_data_("login",_st([_st("user_id").__minus_gt(userName),_st("password").__minus_gt(password)])._asDictionary());
$1=self["@sessionId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciLogin:a:",{userName:userName,password:password},smalltalk.GciLibrary)})},
args: ["userName", "password"],
source: "apiGciLogin: userName a: password\x0a\x09sessionId := self apiGci: 'login' data: {'user_id'->userName. 'password'->password} asDictionary.\x0a\x09^ sessionId",
messageSends: ["apiGci:data:", "asDictionary", "->"],
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
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(aDictionary)._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiNoSessionGci:data:",{command:command,aDictionary:aDictionary},smalltalk.GciLibrary)})},
args: ["command", "aDictionary"],
source: "apiNoSessionGci: command data: aDictionary\x0a\x09^ Ajax ajaxSync: '/gci/', command data: aDictionary asJSON",
messageSends: ["ajaxSync:data:", ",", "asJSON"],
referencedClasses: ["Ajax"]
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
$1=_st(self)._apiGci_data_("fetch_str",_st([_st("oop").__minus_gt(oop)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"fetchChars:",{oop:oop},smalltalk.GciLibrary)})},
args: ["oop"],
source: "fetchChars: oop\x0a\x09^ self apiGci: 'fetch_str' data: {'oop'->oop} asDictionary",
messageSends: ["apiGci:data:", "asDictionary", "->"],
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


