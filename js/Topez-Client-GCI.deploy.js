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
var params;
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
return smalltalk.withContext(function($ctx1) { 
var $1;
params=_st(aDictionary)._copy();
_st(params)._at_put_("!session_id",self["@sessionId"]);
$1=_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(params)._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGci:data:",{command:command,aDictionary:aDictionary,params:params},smalltalk.GciLibrary)})},
messageSends: ["copy", "at:put:", "ajaxSync:data:", ",", "asJSON"]}),
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
$1=_st(self)._apiGci_data_("login",_st([_st("user_id").__minus_gt(userName),_st("password").__minus_gt(password)])._asDictionary());
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


