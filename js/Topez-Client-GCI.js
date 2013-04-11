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
var params;
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
return smalltalk.withContext(function($ctx1) { 
var $1;
params=_st(aDictionary)._copy();
_st(params)._at_put_("!session_id",self["@sessionId"]);
$1=_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(params)._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGci:data:",{command:command,aDictionary:aDictionary,params:params},smalltalk.GciLibrary)})},
args: ["command", "aDictionary"],
source: "apiGci: command data: aDictionary\x0a\x09|params|\x0a\x09params := aDictionary copy.\x0a\x09params at: '!session_id' put: sessionId.\x0a\x09^ Ajax ajaxSync: '/gci/', command data: params asJSON",
messageSends: ["copy", "at:put:", "ajaxSync:data:", ",", "asJSON"],
referencedClasses: ["Ajax"]
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
$1=_st(self)._apiGci_data_("login",_st([_st("user_id").__minus_gt(userName),_st("password").__minus_gt(password)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciLogin:a:",{userName:userName,password:password},smalltalk.GciLibrary)})},
args: ["userName", "password"],
source: "apiGciLogin: userName a: password\x0a\x09^ self apiGci: 'login' data: {'user_id'->userName. 'password'->password} asDictionary",
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


