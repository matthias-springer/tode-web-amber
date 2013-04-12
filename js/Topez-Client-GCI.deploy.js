smalltalk.addPackage('Topez-Client-GCI');
smalltalk.addClass('GciLibrary', smalltalk.Object, ['sessionId'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "apiGci:",
fn: function (command){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_(command,_st($Dictionary())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGci:",{command:command},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "new"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGci:data:",
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
messageSends: ["copy", "at:put:", "parseJSON", "responseText", "ajaxSync:data:", ",", "asJSON", "ifFalse:", "signal:", "exception", "success", "result"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStr:a:",
fn: function (aString,anOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(anOop)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStr:a:",{aString:aString,anOop:anOop},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStr:a:a:",
fn: function (aString,anOop,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(anOop),_st("envId").__minus_gt(envId)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStr:a:a:",{aString:aString,anOop:anOop,envId:envId},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStrExpectingStr:a:",
fn: function (aString,anOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str_expecting_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(anOop)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStrExpectingStr:a:",{aString:aString,anOop:anOop},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStrExpectingStr:a:a:",
fn: function (aString,anOop,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str_expecting_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(anOop),_st("envId").__minus_gt(envId)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStrExpectingStr:a:a:",{aString:aString,anOop:anOop,envId:envId},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciGetSessionId",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@sessionId"]=_st(self)._apiNoSessionGci_data_("get_session_id",_st($Dictionary())._new());
$1=self["@sessionId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciGetSessionId",{},smalltalk.GciLibrary)})},
messageSends: ["apiNoSessionGci:data:", "new"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciInit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_("init");
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciInit",{},smalltalk.GciLibrary)})},
messageSends: ["apiGci:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciLogin:a:",
fn: function (userName,password){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@sessionId"]=_st(self)._apiGci_data_("login",_st([_st("user_id").__minus_gt(userName),_st("password").__minus_gt(password)])._asDictionary());
$1=self["@sessionId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciLogin:a:",{userName:userName,password:password},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciSetSessionId:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sessionId"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"apiGciSetSessionId:",{aNumber:aNumber},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciVersion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_("version");
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciVersion",{},smalltalk.GciLibrary)})},
messageSends: ["apiGci:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiNoSessionGci:data:",
fn: function (command,aDictionary){
var self=this;
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(aDictionary)._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiNoSessionGci:data:",{command:command,aDictionary:aDictionary},smalltalk.GciLibrary)})},
messageSends: ["ajaxSync:data:", ",", "asJSON"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "fetchChars:",
fn: function (oop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("fetch_str",_st([_st("oop").__minus_gt(oop)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"fetchChars:",{oop:oop},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopAsciiNul",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(28);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopAsciiNul",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(66817);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassArray",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassByteArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(103425);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassByteArray",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassDoubleByteString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(143873);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassDoubleByteString",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassDoubleByteSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144129);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassDoubleByteSymbol",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassQuadByteString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144385);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassQuadByteString",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassQuadByteSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144641);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassQuadByteSymbol",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(74753);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassString",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(110849);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassSymbol",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(76033);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassSystem",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode16",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154625);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode16",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode32",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154881);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode32",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode7",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154369);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode7",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(12);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopFalse",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopGemStoneError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(231169);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopGemStoneError",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopIllegal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopIllegal",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopInvalid",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopInvalid",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMaxSmallInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(9223372036854776000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMaxSmallInteger",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMinSmallInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(9223372036854776000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMinSmallInteger",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMinusOne",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(18446744073709552000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMinusOne",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(20);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopNil",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopOne",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(10);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopOne",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopRemoteNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(276);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopRemoteNil",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(268);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTrue",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTwo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(18);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTwo",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopZero",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopZero",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);


smalltalk.GciLibrary.klass.iVarNames = ['current','version'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
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
messageSends: ["ifNotNil:", "apiGciInit", "new", "yourself", "apiGciVersion"]}),
smalltalk.GciLibrary.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "version",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@version"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"version",{},smalltalk.GciLibrary.klass)})},
messageSends: []}),
smalltalk.GciLibrary.klass);


