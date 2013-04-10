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


