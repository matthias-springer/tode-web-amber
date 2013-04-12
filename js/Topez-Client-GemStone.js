smalltalk.addPackage('Topez-Client-GemStone');
smalltalk.addClass('TDShell', smalltalk.Object, ['shellWindow', 'topezClient'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._evaluateCommand_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},smalltalk.TDShell)})},
args: ["aString"],
source: "evaluate: aString\x0a\x09\x22TODO: pipes, isolated commands\x22\x0a\x09^ self evaluateCommand: aString",
messageSends: ["evaluateCommand:"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateCommand:",
category: 'not yet classified',
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
args: ["line"],
source: "evaluateCommand: line\x0a\x09|tokens|\x0a\x09(line isEmpty not and: [line first = '#'])\x0a\x09\x09ifTrue: [^ ''].\x0a\x09tokens := line trimBoth findTokens: {(Character space)}.\x0a\x09tokens isEmpty\x0a\x09\x09ifTrue: [^ ''].\x0a\x09\x22TODO: check for builtin commands\x22\x0a\x09",
messageSends: ["ifTrue:", "and:", "=", "first", "not", "isEmpty", "findTokens:", "space", "trimBoth"],
referencedClasses: ["Character"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'not yet classified',
fn: function (){
var self=this;
function $TodeConsole(){return smalltalk.TodeConsole||(typeof TodeConsole=="undefined"?nil:TodeConsole)}
return smalltalk.withContext(function($ctx1) { 
self["@shellWindow"]=_st($TodeConsole())._todeConsole_(self);
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TDShell)})},
args: [],
source: "open\x0a\x09shellWindow := TodeConsole todeConsole: self.",
messageSends: ["todeConsole:"],
referencedClasses: ["TodeConsole"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "topezClient",
category: 'not yet classified',
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
args: [],
source: "topezClient\x0a\x09topezClient ifNil: [\x0a\x09\x09topezClient := self topezClientClass new\x0a\x09\x09\x09shell: self;\x0a\x09\x09\x09yourself].\x0a\x09^ topezClient",
messageSends: ["ifNil:", "shell:", "new", "topezClientClass", "yourself"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "topezClientClass",
category: 'not yet classified',
fn: function (){
var self=this;
function $TDTopezClient(){return smalltalk.TDTopezClient||(typeof TDTopezClient=="undefined"?nil:TDTopezClient)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TDTopezClient();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topezClientClass",{},smalltalk.TDShell)})},
args: [],
source: "topezClientClass\x0a\x09^ TDTopezClient",
messageSends: [],
referencedClasses: ["TDTopezClient"]
}),
smalltalk.TDShell);


smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TDShell.klass)})},
args: [],
source: "open\x0a\x09^ self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.TDShell.klass);


smalltalk.addClass('TDTopezClient', smalltalk.Object, [], 'Topez-Client-GemStone');


smalltalk.addClass('TodeSession', smalltalk.GciSession, ['topez', 'sessionDescription', 'gciLibrary'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "debuggerRequested:",
category: 'private gci calls',
fn: function (result){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._topez())._openDebugger();
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"debuggerRequested:",{result:result},smalltalk.TodeSession)})},
args: ["result"],
source: "debuggerRequested: result\x0a\x09self topez openDebugger.\x0a\x09^ result",
messageSends: ["openDebugger", "topez"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "environmentId",
category: 'private gci calls',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._environmentId();
return $1;
}, function($ctx1) {$ctx1.fill(self,"environmentId",{},smalltalk.TodeSession)})},
args: [],
source: "environmentId\x0a\x09^ self topez environmentId",
messageSends: ["environmentId", "topez"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getAndClearLastError",
category: 'private gci calls',
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
args: [],
source: "getAndClearLastError\x0a\x09false\x0a\x09\x09ifTrue: [ ^ self library getAndClearLastError ].\x0a\x09topez ifNil: [ ^ self library getAndClearLastError ].\x0a\x09^ self library getAndClearLastErrorUsingSton: self",
messageSends: ["ifTrue:", "getAndClearLastError", "library", "ifNil:", "getAndClearLastErrorUsingSton:"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "library",
category: 'accessing',
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
args: [],
source: "library\x0a\x09gciLibrary ifNil: [ gciLibrary := self sessionDescription  gciLibrary ].\x0a\x09^ gciLibrary",
messageSends: ["ifNil:", "gciLibrary", "sessionDescription"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "loginWith:",
category: 'accessing',
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
args: ["aSessionDescription"],
source: "loginWith: aSessionDescription\x0a\x09self sessionDescription: aSessionDescription.\x0a\x09^ self\x0a\x09\x09login: self sessionDescription password\x0a\x09\x09osUser:\x0a\x09\x09\x09(self sessionDescription isGuest\x0a\x09\x09\x09\x09ifTrue: [ '' ]\x0a\x09\x09\x09\x09ifFalse: [ self sessionDescription osUserId ])\x0a\x09\x09osPassword:\x0a\x09\x09\x09(self sessionDescription isGuest\x0a\x09\x09\x09\x09ifTrue: [ '' ]\x0a\x09\x09\x09\x09ifFalse: [ self sessionDescription osPassword ])",
messageSends: ["sessionDescription:", "login:osUser:osPassword:", "password", "sessionDescription", "ifTrue:ifFalse:", "osUserId", "isGuest", "osPassword"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionDescription",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sessionDescription"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sessionDescription",{},smalltalk.TodeSession)})},
args: [],
source: "sessionDescription\x0a\x09^ sessionDescription",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionDescription:",
category: 'accessing',
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
args: ["anObject"],
source: "sessionDescription: anObject\x0a\x09sessionDescription := anObject.\x0a\x09self\x0a\x09\x09gemNRS: sessionDescription gemNRS;\x0a\x09\x09stoneNRS: sessionDescription stoneNRS;\x0a\x09\x09userID: sessionDescription userId;\x0a\x09\x09yourself",
messageSends: ["gemNRS:", "gemNRS", "stoneNRS:", "stoneNRS", "userID:", "userId", "yourself"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "shell",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._shell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"shell",{},smalltalk.TodeSession)})},
args: [],
source: "shell\x0a\x09^ self topez shell",
messageSends: ["shell", "topez"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "signalServerError:",
category: 'error handling',
fn: function (error){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(error)._asGsRuntimeException_(self))._signal();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signalServerError:",{error:error},smalltalk.TodeSession)})},
args: ["error"],
source: "signalServerError: error\x0a\x09\x22This means that errors will only show up in the topez associated with the window that initiated the session ... not quite what we want ... unless the exceptions are shared across topez instances\x22\x0a\x0a\x09^ (error asGsRuntimeException: self) signal",
messageSends: ["signal", "asGsRuntimeException:"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "todeServerAccessString",
category: 'private gci calls',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._todeServerAccessString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"todeServerAccessString",{},smalltalk.TodeSession)})},
args: [],
source: "todeServerAccessString\x0a\x09^ self topez todeServerAccessString",
messageSends: ["todeServerAccessString", "topez"],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topez"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.TodeSession)})},
args: [],
source: "topez\x0a\x09^ topez",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeSession);

smalltalk.addMethod(
smalltalk.method({
selector: "topez:",
category: 'accessing',
fn: function (aTopez){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topez"]=aTopez;
return self}, function($ctx1) {$ctx1.fill(self,"topez:",{aTopez:aTopez},smalltalk.TodeSession)})},
args: ["aTopez"],
source: "topez: aTopez\x0a\x09topez := aTopez",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeSession);



