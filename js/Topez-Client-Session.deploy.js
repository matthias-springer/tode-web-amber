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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._library())._apiGciExecuteStrExpectingStr_a_a_(aString,_st(_st(self)._library())._oopNil(),envId);
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeStringExpectingString:envId:",{aString:aString,envId:envId},smalltalk.GciSession)})},
messageSends: ["apiGciExecuteStrExpectingStr:a:a:", "oopNil", "library"]}),
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


smalltalk.GciSession.klass.iVarNames = ['fullCompressionEnabled'];
smalltalk.addMethod(
smalltalk.method({
selector: "disableFullCompression",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fullCompressionEnabled"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"disableFullCompression",{},smalltalk.GciSession.klass)})},
messageSends: []}),
smalltalk.GciSession.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "enableFullCompression",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fullCompressionEnabled"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"enableFullCompression",{},smalltalk.GciSession.klass)})},
messageSends: []}),
smalltalk.GciSession.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fullCompressionEnabled",
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
messageSends: ["ifTrue:", "=="]}),
smalltalk.GciSession.klass);


smalltalk.addClass('GsError', smalltalk.Error, ['session'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "session",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@session"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.GsError)})},
messageSends: []}),
smalltalk.GsError);

smalltalk.addMethod(
smalltalk.method({
selector: "session:",
fn: function (aGciSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@session"]=aGciSession;
return self}, function($ctx1) {$ctx1.fill(self,"session:",{aGciSession:aGciSession},smalltalk.GsError)})},
messageSends: []}),
smalltalk.GsError);



smalltalk.addClass('GsRuntimeError', smalltalk.GsError, [], 'Topez-Client-Session');


smalltalk.addClass('OGCustomSessionDescription', smalltalk.Object, ['name', 'stoneHost', 'stoneName', 'gemHost', 'netLDI', 'gemTask', 'userId', 'password', 'osUserId', 'osPassword', 'dataDirectory', 'backupDirectory', 'gemstoneVersion', 'gciLibraryName', 'adornmentColor'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "addOptionalTemplateEntriesOn:",
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
messageSends: ["ifFalse:", "cr", "tab", "nextPutAll:", ",", "printString", "backupDirectory", "nextPut:", "isEmpty", "dataDirectory"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor",
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
messageSends: ["ifNil:", "lightGreen"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@adornmentColor"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"adornmentColor:",{anObject:anObject},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "backupDirectory",
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
messageSends: ["ifTrue:", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "backupDirectory:",
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
messageSends: ["ifTrue:ifFalse:", ",", "or:", "=", "last", "isEmpty"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDirectory",
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
messageSends: ["ifTrue:", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "dataDirectory:",
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
messageSends: ["ifTrue:ifFalse:", ",", "or:", "=", "last", "isEmpty"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultGemHost",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "glass";
}, function($ctx1) {$ctx1.fill(self,"defaultGemHost",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultGemTask",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "gemnetobject";
}, function($ctx1) {$ctx1.fill(self,"defaultGemTask",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultNetLDI",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "50377";
}, function($ctx1) {$ctx1.fill(self,"defaultNetLDI",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultPassword",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "swordfish";
}, function($ctx1) {$ctx1.fill(self,"defaultPassword",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultStoneHost",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "glass";
}, function($ctx1) {$ctx1.fill(self,"defaultStoneHost",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultStoneName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "seaside";
}, function($ctx1) {$ctx1.fill(self,"defaultStoneName",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultUserId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "DataCurator";
}, function($ctx1) {$ctx1.fill(self,"defaultUserId",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate",
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
messageSends: ["on:", "new", "nextPutAll:", "asString", "name", "class", "cr", "tab", ",", "printString", "nextPut:", "stoneHost", "stoneName", "gemHost", "netLDI", "gemTask", "userId", "password", "osUserId", "osPassword", "backupDirectory", "dataDirectory", "contents"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gciLibrary",
fn: function (){
var self=this;
function $GciLibrary(){return smalltalk.GciLibrary||(typeof GciLibrary=="undefined"?nil:GciLibrary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($GciLibrary())._new();
_st($1)._apiGciInit();
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"gciLibrary",{},smalltalk.OGCustomSessionDescription)})},
messageSends: ["apiGciInit", "new", "yourself"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gciLibraryName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gciLibraryName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciLibraryName",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gciLibraryName:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gciLibraryName"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"gciLibraryName:",{anObject:anObject},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemHost",
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
messageSends: ["ifTrue:", "defaultGemHost", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemHost:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gemHost"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"gemHost:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemNRS",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st("!tcp@").__comma(_st(self)._gemHost())).__comma("#netldi:")).__comma(_st(self)._netLDI())).__comma("#task!")).__comma(_st(self)._gemTask());
return $1;
}, function($ctx1) {$ctx1.fill(self,"gemNRS",{},smalltalk.OGCustomSessionDescription)})},
messageSends: [",", "gemTask", "netLDI", "gemHost"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemTask",
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
messageSends: ["ifTrue:", "defaultGemTask", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemTask:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gemTask"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"gemTask:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemstoneVersion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gemstoneVersion"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gemstoneVersion",{},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "gemstoneVersion:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gemstoneVersion"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"gemstoneVersion:",{anObject:anObject},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "isGuest",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._osUserId())._isEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isGuest",{},smalltalk.OGCustomSessionDescription)})},
messageSends: ["isEmpty", "osUserId"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
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
messageSends: ["ifTrue:ifFalse:", "label", "class", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "netLDI",
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
messageSends: ["ifTrue:", "defaultNetLDI", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "netLDI:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@netLDI"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"netLDI:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "obConfigure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._obConfigureWith_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"obConfigure",{},smalltalk.OGCustomSessionDescription)})},
messageSends: ["obConfigureWith:", "class"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "osPassword",
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
messageSends: ["ifTrue:", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "osPassword:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@osPassword"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"osPassword:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "osUserId",
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
messageSends: ["ifTrue:", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "osUserId:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@osUserId"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"osUserId:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "password",
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
messageSends: ["ifTrue:", "defaultPassword", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "password:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@password"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"password:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._postCopy.apply(_st(self), []);
_st(self)._name_(_st(_st(self)._name()).__comma(" copy"));
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.OGCustomSessionDescription)})},
messageSends: ["postCopy", "name:", ",", "name"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneHost",
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
messageSends: ["ifTrue:", "defaultStoneHost", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneHost:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stoneHost"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"stoneHost:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneNRS",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st("!tcp@").__comma(_st(self)._stoneHost())).__comma("#server!")).__comma(_st(self)._stoneName());
return $1;
}, function($ctx1) {$ctx1.fill(self,"stoneNRS",{},smalltalk.OGCustomSessionDescription)})},
messageSends: [",", "stoneName", "stoneHost"]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneName",
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
messageSends: ["ifTrue:", "defaultStoneName", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stoneName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"stoneName:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "userId",
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
messageSends: ["ifTrue:", "defaultUserId", "=="]}),
smalltalk.OGCustomSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "userId:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userId"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"userId:",{aString:aString},smalltalk.OGCustomSessionDescription)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription);


smalltalk.addMethod(
smalltalk.method({
selector: "isValid",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isValid",{},smalltalk.OGCustomSessionDescription.klass)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Custom";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.OGCustomSessionDescription.klass)})},
messageSends: []}),
smalltalk.OGCustomSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "obConfigure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._obConfigureWith_(_st(self)._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"obConfigure",{},smalltalk.OGCustomSessionDescription.klass)})},
messageSends: ["obConfigureWith:", "new"]}),
smalltalk.OGCustomSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "obConfigureWith:",
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
messageSends: ["prompt:template:", "editTemplate", "ifTrue:", "or:", "isEmpty", "isNil", "readFrom:", "readStream"]}),
smalltalk.OGCustomSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "readFrom:",
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
messageSends: ["ifFalse:", "error:", "couldEvaluate:", "evaluate:", ",", "name", "isKindOf:"]}),
smalltalk.OGCustomSessionDescription.klass);


smalltalk.addClass('OGApplianceSessionDescription', smalltalk.OGCustomSessionDescription, [], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultGemHost",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stoneHost();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultGemHost",{},smalltalk.OGApplianceSessionDescription)})},
messageSends: ["stoneHost"]}),
smalltalk.OGApplianceSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate",
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
messageSends: ["on:", "new", "nextPutAll:", "asString", "name", "class", "cr", "tab", ",", "printString", "nextPut:", "stoneHost", "stoneName", "addOptionalTemplateEntriesOn:", "contents"]}),
smalltalk.OGApplianceSessionDescription);


smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Appliance";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.OGApplianceSessionDescription.klass)})},
messageSends: []}),
smalltalk.OGApplianceSessionDescription.klass);


smalltalk.addClass('OGFullSessionDescription', smalltalk.OGCustomSessionDescription, [], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate",
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
messageSends: ["on:", "new", "nextPutAll:", "asString", "name", "class", "cr", "tab", ",", "printString", "nextPut:", "stoneHost", "stoneName", "gemHost", "netLDI", "gemTask", "userId", "password", "addOptionalTemplateEntriesOn:", "contents"]}),
smalltalk.OGFullSessionDescription);


smalltalk.addMethod(
smalltalk.method({
selector: "isValid",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isValid",{},smalltalk.OGFullSessionDescription.klass)})},
messageSends: []}),
smalltalk.OGFullSessionDescription.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Full";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.OGFullSessionDescription.klass)})},
messageSends: []}),
smalltalk.OGFullSessionDescription.klass);


smalltalk.addClass('OGStandardSessionDescription', smalltalk.OGCustomSessionDescription, [], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "addOptionalTemplateEntriesOn:",
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
messageSends: ["ifFalse:", "cr", "tab", "nextPutAll:", ",", "printString", "dataDirectory", "nextPut:", "isEmpty"]}),
smalltalk.OGStandardSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultGemHost",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stoneHost();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultGemHost",{},smalltalk.OGStandardSessionDescription)})},
messageSends: ["stoneHost"]}),
smalltalk.OGStandardSessionDescription);

smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate",
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
messageSends: ["on:", "new", "nextPutAll:", "asString", "name", "class", "cr", "tab", ",", "printString", "nextPut:", "stoneHost", "stoneName", "gemHost", "netLDI", "userId", "password", "backupDirectory", "addOptionalTemplateEntriesOn:", "contents"]}),
smalltalk.OGStandardSessionDescription);


smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Standard";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.OGStandardSessionDescription.klass)})},
messageSends: []}),
smalltalk.OGStandardSessionDescription.klass);


