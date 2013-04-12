smalltalk.addPackage('Topez-Client-Session');
smalltalk.addClass('GciSession', smalltalk.Object, ['number', 'gemNRS', 'stoneNRS', 'userID', 'clientForwarderCache'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "actAsExecutor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._release();
smalltalk.Object.fn.prototype._actAsExecutor.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"actAsExecutor",{},smalltalk.GciSession)})},
messageSends: ["release", "actAsExecutor"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "clientForwarderCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@clientForwarderCache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"clientForwarderCache",{},smalltalk.GciSession)})},
messageSends: []}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "clientObjectForwardedFrom:",
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
messageSends: ["at:ifAbsent:", "clientForwarderCache"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "executeStringExpectingString:envId:",
fn: function (aString,envId){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=_st(_st(self)._library())._apiGciExecuteStr_a_a_(aString,_st(_st(self)._library())._oopNil(),envId);
$1=_st(_st(self)._library())._fetchChars_(result);
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeStringExpectingString:envId:",{aString:aString,envId:envId,result:result},smalltalk.GciSession)})},
messageSends: ["apiGciExecuteStr:a:a:", "oopNil", "library", "fetchChars:"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "finalize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._release();
smalltalk.Object.fn.prototype._finalize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"finalize",{},smalltalk.GciSession)})},
messageSends: ["release", "finalize"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "gemHost",
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
messageSends: ["ifTrue:", "isNil", "last", "subStrings:", "first"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "gemNRS:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gemNRS"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"gemNRS:",{aString:aString},smalltalk.GciSession)})},
messageSends: []}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "gemType",
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
messageSends: ["ifTrue:ifFalse:", "isNil"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getSessionNumber",
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
messageSends: ["ifTrue:", "error:", "=="]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@number"]=(0);
_st(_st(self)._finalizationRegistry())._add_(self);
self["@clientForwarderCache"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GciSession)})},
messageSends: ["add:", "finalizationRegistry", "new"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "isValid",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@number"]).__tild_tild(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValid",{},smalltalk.GciSession)})},
messageSends: ["~~"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "library",
fn: function (){
var self=this;
function $GciLibrary(){return smalltalk.GciLibrary||(typeof GciLibrary=="undefined"?nil:GciLibrary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($GciLibrary())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"library",{},smalltalk.GciSession)})},
messageSends: ["current"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "login:",
fn: function (gsPassword){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._login_osUser_osPassword_(gsPassword,"","");
return $1;
}, function($ctx1) {$ctx1.fill(self,"login:",{gsPassword:gsPassword},smalltalk.GciSession)})},
messageSends: ["login:osUser:osPassword:"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "login:osUser:osPassword:",
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
messageSends: ["apiGciSetNet:a:a:a:", "library", "apiGciLogin:a:", "ifTrue:", "apiGciEnableFullCompression", "fullCompressionEnabled", "class", "apiGciGetSessionId"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@number"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},smalltalk.GciSession)})},
messageSends: []}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["printOn:", "space", "nextPut:", "nextPutAll:", "printString"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "registerClientObjectForwarder:",
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
messageSends: ["rawExecuteStringNB:envId:", "at:put:", "clientForwarderCache"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@number"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.GciSession)})},
messageSends: []}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneHost",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@stoneNRS"])._subStrings_("#"))._first())._subStrings_("@"))._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stoneHost",{},smalltalk.GciSession)})},
messageSends: ["last", "subStrings:", "first"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneNRS:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stoneNRS"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"stoneNRS:",{aString:aString},smalltalk.GciSession)})},
messageSends: []}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@stoneNRS"])._subStrings_("!"))._last();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stoneName",{},smalltalk.GciSession)})},
messageSends: ["last", "subStrings:"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "unregisterClientObjectForwarder:",
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
messageSends: ["keyAtValue:", "clientForwarderCache", "removeKey:"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "userID",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@userID"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"userID",{},smalltalk.GciSession)})},
messageSends: []}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "userID:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userID"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"userID:",{aString:aString},smalltalk.GciSession)})},
messageSends: []}),
smalltalk.GciSession);



