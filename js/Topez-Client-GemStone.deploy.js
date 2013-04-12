smalltalk.addPackage('Topez-Client-GemStone');
smalltalk.addClass('TDShell', smalltalk.Object, ['shellWindow', 'topezClient'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._evaluateCommand_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},smalltalk.TDShell)})},
messageSends: ["evaluateCommand:"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateCommand:",
fn: function (line){
var self=this;
var tokens;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(line)._isEmpty())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(line)._first()).__eq("#");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
return "";
};
tokens=_st(_st(line)._trimBoth())._findTokens_([_st($Character())._space()]);
$2=_st(tokens)._isEmpty();
if(smalltalk.assert($2)){
return "";
};
return self}, function($ctx1) {$ctx1.fill(self,"evaluateCommand:",{line:line,tokens:tokens},smalltalk.TDShell)})},
messageSends: ["ifTrue:", "and:", "=", "first", "not", "isEmpty", "findTokens:", "space", "trimBoth"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
function $TodeConsole(){return smalltalk.TodeConsole||(typeof TodeConsole=="undefined"?nil:TodeConsole)}
return smalltalk.withContext(function($ctx1) { 
self["@shellWindow"]=_st($TodeConsole())._todeConsole_(self);
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TDShell)})},
messageSends: ["todeConsole:"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "topezClient",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@topezClient"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(_st(self)._topezClientClass())._new();
_st($2)._shell_(self);
$3=_st($2)._yourself();
self["@topezClient"]=$3;
self["@topezClient"];
} else {
$1;
};
$4=self["@topezClient"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"topezClient",{},smalltalk.TDShell)})},
messageSends: ["ifNil:", "shell:", "new", "topezClientClass", "yourself"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "topezClientClass",
fn: function (){
var self=this;
function $TDTopezClient(){return smalltalk.TDTopezClient||(typeof TDTopezClient=="undefined"?nil:TDTopezClient)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TDTopezClient();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topezClientClass",{},smalltalk.TDShell)})},
messageSends: []}),
smalltalk.TDShell);


smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TDShell.klass)})},
messageSends: ["open", "new"]}),
smalltalk.TDShell.klass);


smalltalk.addClass('TDTopezClient', smalltalk.Object, [], 'Topez-Client-GemStone');


smalltalk.addClass('TodeSession', smalltalk.GciSession, ['topez', 'sessionDescription', 'gciLibrary'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "debuggerRequested:",
fn: function (result){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._topez())._openDebugger();
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"debuggerRequested:",{result:result},smalltalk.TodeSession)})},
messageSends: ["openDebugger", "topez"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "environmentId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._environmentId();
return $1;
}, function($ctx1) {$ctx1.fill(self,"environmentId",{},smalltalk.TodeSession)})},
messageSends: ["environmentId", "topez"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getAndClearLastError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
if(smalltalk.assert(false)){
$1=_st(_st(self)._library())._getAndClearLastError();
return $1;
};
$2=self["@topez"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st(_st(self)._library())._getAndClearLastError();
return $3;
} else {
$2;
};
$4=_st(_st(self)._library())._getAndClearLastErrorUsingSton_(self);
return $4;
}, function($ctx1) {$ctx1.fill(self,"getAndClearLastError",{},smalltalk.TodeSession)})},
messageSends: ["ifTrue:", "getAndClearLastError", "library", "ifNil:", "getAndClearLastErrorUsingSton:"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "library",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@gciLibrary"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@gciLibrary"]=_st(_st(self)._sessionDescription())._gciLibrary();
self["@gciLibrary"];
} else {
$1;
};
$2=self["@gciLibrary"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"library",{},smalltalk.TodeSession)})},
messageSends: ["ifNil:", "gciLibrary", "sessionDescription"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "loginWith:",
fn: function (aSessionDescription){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$7,$6,$1;
_st(self)._sessionDescription_(aSessionDescription);
$2=self;
$3=_st(_st(self)._sessionDescription())._password();
$5=_st(_st(self)._sessionDescription())._isGuest();
if(smalltalk.assert($5)){
$4="";
} else {
$4=_st(_st(self)._sessionDescription())._osUserId();
};
$7=_st(_st(self)._sessionDescription())._isGuest();
if(smalltalk.assert($7)){
$6="";
} else {
$6=_st(_st(self)._sessionDescription())._osPassword();
};
$1=_st($2)._login_osUser_osPassword_($3,$4,$6);
return $1;
}, function($ctx1) {$ctx1.fill(self,"loginWith:",{aSessionDescription:aSessionDescription},smalltalk.TodeSession)})},
messageSends: ["sessionDescription:", "login:osUser:osPassword:", "password", "sessionDescription", "ifTrue:ifFalse:", "osUserId", "isGuest", "osPassword"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionDescription",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sessionDescription"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sessionDescription",{},smalltalk.TodeSession)})},
messageSends: []}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionDescription:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@sessionDescription"]=anObject;
$1=self;
_st($1)._gemNRS_(_st(self["@sessionDescription"])._gemNRS());
_st($1)._stoneNRS_(_st(self["@sessionDescription"])._stoneNRS());
_st($1)._userID_(_st(self["@sessionDescription"])._userId());
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"sessionDescription:",{anObject:anObject},smalltalk.TodeSession)})},
messageSends: ["gemNRS:", "gemNRS", "stoneNRS:", "stoneNRS", "userID:", "userId", "yourself"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "shell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._shell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"shell",{},smalltalk.TodeSession)})},
messageSends: ["shell", "topez"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "signalServerError:",
fn: function (error){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(error)._asGsRuntimeException_(self))._signal();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signalServerError:",{error:error},smalltalk.TodeSession)})},
messageSends: ["signal", "asGsRuntimeException:"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "todeServerAccessString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._todeServerAccessString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"todeServerAccessString",{},smalltalk.TodeSession)})},
messageSends: ["todeServerAccessString", "topez"]}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topez"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.TodeSession)})},
messageSends: []}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "topez:",
fn: function (aTopez){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topez"]=aTopez;
return self}, function($ctx1) {$ctx1.fill(self,"topez:",{aTopez:aTopez},smalltalk.TodeSession)})},
messageSends: []}),
smalltalk.TodeSession);



