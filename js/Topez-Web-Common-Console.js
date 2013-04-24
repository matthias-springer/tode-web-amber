smalltalk.addPackage('Topez-Web-Common-Console');
smalltalk.addClass('TodeConsole', smalltalk.TextStream, ['cliShell', 'lastPromptString', 'activeController', 'labelStringBlock'], 'Topez-Web-Common-Console');
smalltalk.addMethod(
smalltalk.method({
selector: "activeController",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@activeController"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeController",{},smalltalk.TodeConsole)})},
args: [],
source: "activeController\x0a\x09\x22In Morphic, alway nil. In MVC, the controller that most recently invoked\x0a\x09a command.\x22\x0a\x0a\x09^ activeController",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "activeController:",
category: 'accessing',
fn: function (aController){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@activeController"]=aController;
return self}, function($ctx1) {$ctx1.fill(self,"activeController:",{aController:aController},smalltalk.TodeConsole)})},
args: ["aController"],
source: "activeController: aController\x0a\x09\x22In Morphic, alway nil. In MVC, the controller that most recently invoked\x0a\x09a command.\x22\x0a\x0a\x09activeController := aController",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._adornmentColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"adornmentColor",{},smalltalk.TodeConsole)})},
args: [],
source: "adornmentColor\x0a    ^ self cliShell adornmentColor",
messageSends: ["adornmentColor", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "bs",
category: 'stream extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._position()).__gt((0));
if(smalltalk.assert($1)){
$2=_st(self)._skip_((-1));
return $2;
};
_st(self)._changed_("bs");
return self}, function($ctx1) {$ctx1.fill(self,"bs",{},smalltalk.TodeConsole)})},
args: [],
source: "bs\x0a\x09self position > 0 ifTrue: [^ self skip: -1].\x0a\x09self changed: #bs",
messageSends: ["ifTrue:", "skip:", ">", "position", "changed:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "characterLimit",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(20000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"characterLimit",{},smalltalk.TodeConsole)})},
args: [],
source: "characterLimit\x0a\x09\x22Tell the views how much to retain on screen\x22\x0a\x09^ 20000",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "checkSttyForEvent:",
category: 'input character filtering',
fn: function (keyboardEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._isInterruptEvent_(keyboardEvent);
if(smalltalk.assert($1)){
_st(self)._handleInterruptCharacterEvent();
return nil;
};
$2=_st(self)._isEndOfFileEvent_(keyboardEvent);
if(smalltalk.assert($2)){
_st(_st(self)._cliShell())._doEndOfFile();
return nil;
};
$3=keyboardEvent;
return $3;
}, function($ctx1) {$ctx1.fill(self,"checkSttyForEvent:",{keyboardEvent:keyboardEvent},smalltalk.TodeConsole)})},
args: ["keyboardEvent"],
source: "checkSttyForEvent: keyboardEvent\x0a\x09\x22Check for interrupt characters and such. Consume interrupt character and\x0a\x09answer nil, otherwise answer keyboardEvent.\x22\x0a\x0a\x09(self isInterruptEvent: keyboardEvent)\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[self handleInterruptCharacterEvent.\x0a\x09\x09\x09^ nil].\x0a\x09(self isEndOfFileEvent: keyboardEvent)\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[self cliShell doEndOfFile.\x0a\x09\x09\x09^ nil].\x0a\x09^ keyboardEvent",
messageSends: ["ifTrue:", "handleInterruptCharacterEvent", "isInterruptEvent:", "doEndOfFile", "cliShell", "isEndOfFileEvent:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'stream extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changed_("clearText");
_st(self)._reset();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.TodeConsole)})},
args: [],
source: "clear\x0a\x09\x22Clear all characters and redisplay the view\x22\x0a\x09self changed: #clearText.\x0a\x09self reset",
messageSends: ["changed:", "reset"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "cliShell",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cliShell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cliShell",{},smalltalk.TodeConsole)})},
args: [],
source: "cliShell\x0a\x09^ cliShell",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "cliShell:",
category: 'accessing',
fn: function (commandShell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cliShell"]=commandShell;
return self}, function($ctx1) {$ctx1.fill(self,"cliShell:",{commandShell:commandShell},smalltalk.TodeConsole)})},
args: ["commandShell"],
source: "cliShell: commandShell\x0a\x09cliShell := commandShell.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TextStream.fn.prototype._close.apply(_st(self), []);
_st(_st(self)._cliShell())._windowIsClosing();
_st(self)._changed_("exit");
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.TodeConsole)})},
args: [],
source: "close\x0a  super close.\x0a  self cliShell windowIsClosing.\x0a  self changed: #'exit'",
messageSends: ["close", "windowIsClosing", "cliShell", "changed:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "codePaneMenu:shifted:",
category: 'model protocol',
fn: function (aMenu,shifted){
var self=this;
function $StringHolder(){return smalltalk.StringHolder||(typeof StringHolder=="undefined"?nil:StringHolder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($StringHolder())._basicNew())._codePaneMenu_shifted_(aMenu,shifted);
return $1;
}, function($ctx1) {$ctx1.fill(self,"codePaneMenu:shifted:",{aMenu:aMenu,shifted:shifted},smalltalk.TodeConsole)})},
args: ["aMenu", "shifted"],
source: "codePaneMenu: aMenu shifted: shifted\x0a\x09\x22Note that unless we override perform:orSendTo:, PluggableTextController will respond\x0a\x09to all menu items\x22\x0a\x0a\x09^ StringHolder basicNew codePaneMenu: aMenu shifted: shifted",
messageSends: ["codePaneMenu:shifted:", "basicNew"],
referencedClasses: ["StringHolder"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "consoleWindowMorphClass",
category: 'initialize-release',
fn: function (){
var self=this;
function $TodeConsoleWindowMorph(){return smalltalk.TodeConsoleWindowMorph||(typeof TodeConsoleWindowMorph=="undefined"?nil:TodeConsoleWindowMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TodeConsoleWindowMorph();
return $1;
}, function($ctx1) {$ctx1.fill(self,"consoleWindowMorphClass",{},smalltalk.TodeConsole)})},
args: [],
source: "consoleWindowMorphClass\x0a  ^ TodeConsoleWindowMorph",
messageSends: [],
referencedClasses: ["TodeConsoleWindowMorph"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "controlShiftLKeyStroke",
category: 'command prompt',
fn: function (){
var self=this;
var evaluator,names,ids,namesAndIds,index;
function $UIManager(){return smalltalk.UIManager||(typeof UIManager=="undefined"?nil:UIManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
namesAndIds=_st(_st(_st(self)._topez())._status())._windowNamesAndIds();
names=_st(namesAndIds)._collect_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(_st(assoc)._value())._at_((2));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
ids=_st(namesAndIds)._collect_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(_st(assoc)._value())._at_((1));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
index=_st(_st($UIManager())._default())._chooseFrom_(names);
$1=_st(index).__gt((0));
if(smalltalk.assert($1)){
evaluator=_st(_st(self)._topez())._editorWindowAt_(_st(ids)._at_(index));
evaluator;
_st(evaluator)._activate();
};
return true;
}, function($ctx1) {$ctx1.fill(self,"controlShiftLKeyStroke",{evaluator:evaluator,names:names,ids:ids,namesAndIds:namesAndIds,index:index},smalltalk.TodeConsole)})},
args: [],
source: "controlShiftLKeyStroke\x0a    | evaluator names ids namesAndIds index |\x0a    namesAndIds := self topez status windowNamesAndIds.\x0a    names := namesAndIds collect: [ :assoc | assoc value at: 2 ].\x0a    ids := namesAndIds collect: [ :assoc | assoc value at: 1 ].\x0a    index := UIManager default chooseFrom: names.\x0a    index > 0\x0a        ifTrue: [ \x0a            evaluator := self topez editorWindowAt: (ids at: index).\x0a            evaluator activate ].\x0a    ^ true",
messageSends: ["windowNamesAndIds", "status", "topez", "collect:", "at:", "value", "chooseFrom:", "default", "ifTrue:", "editorWindowAt:", "activate", ">"],
referencedClasses: ["UIManager"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "controlShiftSKeyStroke",
category: 'command prompt',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"controlShiftSKeyStroke",{},smalltalk.TodeConsole)})},
args: [],
source: "controlShiftSKeyStroke\x0a    \x22noop\x22\x0a\x0a    ^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "domTextArea",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("#workspace")._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"domTextArea",{},smalltalk.TodeConsole)})},
args: [],
source: "domTextArea\x0a\x09^ '#workspace' asJQuery",
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "endEntry",
category: 'stream extensions',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st($Transcript())._show_("TodeConsole>>endEntry called.");
_st(self)._changed_("appendEntry");
_st(self)._reset();
return self}, function($ctx1) {$ctx1.fill(self,"endEntry",{},smalltalk.TodeConsole)})},
args: [],
source: "endEntry\x0a  \x22Display all the characters since the last endEntry, and reset the stream\x22\x0a\x09Transcript show: 'TodeConsole>>endEntry called.'.\x0a  self changed: #'appendEntry'.\x0a  self reset",
messageSends: ["show:", "changed:", "reset"],
referencedClasses: ["Transcript"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "escapeKeyStroke",
category: 'accessing',
fn: function (){
var self=this;
var evaluator;
return smalltalk.withContext(function($ctx1) { 
evaluator=_st(_st(self)._topez())._editorWindowNamed_("evaluator");
_st(evaluator)._activate();
return true;
}, function($ctx1) {$ctx1.fill(self,"escapeKeyStroke",{evaluator:evaluator},smalltalk.TodeConsole)})},
args: [],
source: "escapeKeyStroke\x0a    | evaluator |\x0a    evaluator := self topez editorWindowNamed: #'evaluator'.\x0a    evaluator activate.\x0a    ^ true",
messageSends: ["editorWindowNamed:", "topez", "activate"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "filterAndForward:",
category: 'input character filtering',
fn: function (aCharacter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._filterAndForward_(aCharacter);
return $1;
}, function($ctx1) {$ctx1.fill(self,"filterAndForward:",{aCharacter:aCharacter},smalltalk.TodeConsole)})},
args: ["aCharacter"],
source: "filterAndForward: aCharacter\x0a\x09\x22Filter aCharacter, taking special action if needed. If a child process is active,\x0a\x09forward aCharacter to the child and answer nil. Otherwise answer aCharacter.\x22\x0a\x0a\x09^ self cliShell filterAndForward: aCharacter",
messageSends: ["filterAndForward:", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "filterAndForwardEvent:",
category: 'input character filtering',
fn: function (keyboardEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._checkSttyForEvent_(keyboardEvent);
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(_st(self)._cliShell())._filterAndForwardEvent_(keyboardEvent);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"filterAndForwardEvent:",{keyboardEvent:keyboardEvent},smalltalk.TodeConsole)})},
args: ["keyboardEvent"],
source: "filterAndForwardEvent: keyboardEvent \x0a\x09\x22Filter keyboardEvent, taking special action if needed. If a child process\x0a\x09is active, forward keyboardEvent to the child and answer nil. Otherwise\x0a\x09answer keyboardEvent.\x22\x0a\x0a\x09^ (self checkSttyForEvent: keyboardEvent)\x0a\x09\x09ifNotNil: [self cliShell filterAndForwardEvent: keyboardEvent]",
messageSends: ["ifNotNil:", "filterAndForwardEvent:", "cliShell", "checkSttyForEvent:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
category: 'stream extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._endEntry();
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.TodeConsole)})},
args: [],
source: "flush\x0a\x09self endEntry",
messageSends: ["endEntry"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInterruptCharacterEvent",
category: 'input character filtering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"handleInterruptCharacterEvent",{},smalltalk.TodeConsole)})},
args: [],
source: "handleInterruptCharacterEvent\x0a\x09\x22Interrupt character detected, do interrupt stuff.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "isEndOfFileEvent:",
category: 'input character filtering',
fn: function (keystrokeEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
if(smalltalk.assert(true)){
return false;
};
$1=_st(_st(_st(keystrokeEvent)._keyValue()).__eq_eq((4)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(keystrokeEvent)._keyCharacter()).__eq("d"))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(keystrokeEvent)._controlKeyPressed();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEndOfFileEvent:",{keystrokeEvent:keystrokeEvent},smalltalk.TodeConsole)})},
args: ["keystrokeEvent"],
source: "isEndOfFileEvent: keystrokeEvent\x0a  \x22A <ctl>d event, represented either as character value 4, or as $d with\x0a\x09the control or meta key. The actual representation varies on different\x0a\x09versions of Squeak.\x22\x0a\x0a  true\x0a    ifTrue: [ ^ false ].\x0a  ^ keystrokeEvent keyValue == 4\x0a    or: [ keystrokeEvent keyCharacter = 'd' and: [ keystrokeEvent controlKeyPressed ] ]",
messageSends: ["ifTrue:", "or:", "and:", "controlKeyPressed", "=", "keyCharacter", "==", "keyValue"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "isInterruptEvent:",
category: 'input character filtering',
fn: function (keystrokeEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
if(smalltalk.assert(true)){
return false;
};
$1=_st(_st(_st(keystrokeEvent)._keyValue()).__eq_eq((3)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(keystrokeEvent)._keyCharacter()).__eq("c"))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(keystrokeEvent)._controlKeyPressed();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInterruptEvent:",{keystrokeEvent:keystrokeEvent},smalltalk.TodeConsole)})},
args: ["keystrokeEvent"],
source: "isInterruptEvent: keystrokeEvent\x0a  \x22A <ctl>c event, represented either as character value 3, or as $c with\x0a\x09the control or meta key. The actual representation varies on different\x0a\x09versions of Squeak.\x22\x0a\x0a  true\x0a    ifTrue: [ ^ false ].\x0a  ^ keystrokeEvent keyValue == 3\x0a    or: [ keystrokeEvent keyCharacter = 'c' and: [ keystrokeEvent controlKeyPressed ] ]",
messageSends: ["ifTrue:", "or:", "and:", "controlKeyPressed", "=", "keyCharacter", "==", "keyValue"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "isMorphic",
category: 'command prompt',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._respondsTo_("isMorphic"))._not())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Smalltalk())._isMorphic();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMorphic",{},smalltalk.TodeConsole)})},
args: [],
source: "isMorphic\x0a  ^ (Smalltalk respondsTo: #'isMorphic') not or: [ Smalltalk isMorphic ]",
messageSends: ["or:", "isMorphic", "not", "respondsTo:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "keyboardConnector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._keyboardConnector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyboardConnector",{},smalltalk.TodeConsole)})},
args: [],
source: "keyboardConnector\x0a\x0a\x09^ self cliShell keyboardConnector",
messageSends: ["keyboardConnector", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "labelString",
category: 'model protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._labelStringBlock())._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"labelString",{},smalltalk.TodeConsole)})},
args: [],
source: "labelString\x0a\x0a\x09^ self labelStringBlock value",
messageSends: ["value", "labelStringBlock"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "labelStringBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@labelStringBlock"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@labelStringBlock"]=_st(self)._defaultLabelStringBlock();
$1=self["@labelStringBlock"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"labelStringBlock",{},smalltalk.TodeConsole)})},
args: [],
source: "labelStringBlock\x0a\x09\x22Answer a block that when evaluated answers a string to be used\x0a\x09as the window label.\x22\x0a\x0a\x09^ labelStringBlock ifNil: [labelStringBlock := self defaultLabelStringBlock]",
messageSends: ["ifNil:", "defaultLabelStringBlock"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "labelStringBlock:",
category: 'accessing',
fn: function (aBlockAnsweringAString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@labelStringBlock"]=aBlockAnsweringAString;
return self}, function($ctx1) {$ctx1.fill(self,"labelStringBlock:",{aBlockAnsweringAString:aBlockAnsweringAString},smalltalk.TodeConsole)})},
args: ["aBlockAnsweringAString"],
source: "labelStringBlock: aBlockAnsweringAString\x0a\x0a\x09labelStringBlock := aBlockAnsweringAString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "lastPromptString",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@lastPromptString"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@lastPromptString"]=_st(_st(self)._cliShell())._promptString();
$1=self["@lastPromptString"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastPromptString",{},smalltalk.TodeConsole)})},
args: [],
source: "lastPromptString\x0a\x09\x22Answer the value of lastPromptString\x22\x0a\x0a\x09^ lastPromptString ifNil: [lastPromptString := self cliShell promptString]",
messageSends: ["ifNil:", "promptString", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "lastPromptString:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lastPromptString"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"lastPromptString:",{anObject:anObject},smalltalk.TodeConsole)})},
args: ["anObject"],
source: "lastPromptString: anObject\x0a\x09\x22Set the value of lastPromptString\x22\x0a\x0a\x09lastPromptString := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "markInput",
category: 'command prompt',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changed_("markInput");
return self}, function($ctx1) {$ctx1.fill(self,"markInput",{},smalltalk.TodeConsole)})},
args: [],
source: "markInput\x0a  self changed: #'markInput'",
messageSends: ["changed:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "nextHistory",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._nextHistory();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextHistory",{},smalltalk.TodeConsole)})},
args: [],
source: "nextHistory\x0a  ^ self cliShell nextHistory",
messageSends: ["nextHistory", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'stream extensions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TextStream.fn.prototype._nextPut_.apply(_st(self), [anObject]);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.TodeConsole)})},
args: ["anObject"],
source: "nextPut: anObject\x0a  super nextPut: anObject",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
category: 'stream extensions',
fn: function (characters){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(characters)._isEmpty();
if(! smalltalk.assert($1)){
smalltalk.TextStream.fn.prototype._nextPutAll_.apply(_st(self), [_st(characters)._copyReplaceAll_with_(_st($String())._lf(),_st($String())._cr())]);
_st(self)._flush();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{characters:characters},smalltalk.TodeConsole)})},
args: ["characters"],
source: "nextPutAll: characters\x0a  \x22Convert line terminators to cr. Note that #nextPut: does not do this conversion.\x22\x0a\x0a  characters isEmpty\x0a    ifFalse: [ \x0a      super nextPutAll: (characters copyReplaceAll: String lf with: String cr).\x0a      self flush ]",
messageSends: ["ifFalse:", "nextPutAll:", "copyReplaceAll:with:", "lf", "cr", "flush", "isEmpty"],
referencedClasses: ["String"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._openLabel_(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TodeConsole)})},
args: [],
source: "open\x0a\x0a\x09^ self openLabel: nil \x22invoke default label setting block\x22",
messageSends: ["openLabel:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsMorphLabel:",
category: 'initialize-release',
fn: function (labelString){
var self=this;
var window,textMorph;
function $TZSystemWindow(){return smalltalk.TZSystemWindow||(typeof TZSystemWindow=="undefined"?nil:TZSystemWindow)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
window=_st(_st($TZSystemWindow())._labelled_(labelString))._model_(self);
textMorph=_st(_st(self)._consoleWindowMorphClass())._on_text_accept_readSelection_menu_(self,nil,nil,nil,nil);
_st(textMorph)._acceptOnCR_(true);
_st(window)._addMorph_frame_(textMorph,_st(_st((0)).__at((0)))._corner_(_st((1)).__at((1))));
_st(self)._prompt();
if(smalltalk.assert(false)){
$1=labelString;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._labelStringBlock_((function(){
return smalltalk.withContext(function($ctx2) {
return labelString;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
_st(self)._changed_("relabel");
};
$3=window;
_st($3)._openInWorld();
_st($3)._bounds_(_st(_st(_st(_st(self)._cliShell())._topezClientClass())._bounds())._at_("evaluator"));
$4=_st($3)._yourself();
$2=$4;
return $2;
}, function($ctx1) {$ctx1.fill(self,"openAsMorphLabel:",{labelString:labelString,window:window,textMorph:textMorph},smalltalk.TodeConsole)})},
args: ["labelString"],
source: "openAsMorphLabel: labelString\x0a  \x22Build a morph viewing this stream\x22\x0a\x0a  | window textMorph |\x0a  window := (TZSystemWindow labelled: labelString) model: self.\x0a  textMorph := self consoleWindowMorphClass\x0a    on: self\x0a    text: nil\x0a    accept: nil\x0a    readSelection: nil\x0a    menu: nil.\x0a  textMorph acceptOnCR: true.\x0a  window addMorph: textMorph frame: (0 @ 0 corner: 1 @ 1).\x0a  self prompt.\x0a  false\x0a    ifTrue: [ \x0a      labelString ifNotNil: [ self labelStringBlock: [ labelString ] ].\x0a      self changed: #'relabel' ].\x0a  ^ window\x0a    openInWorld;\x0a    bounds: (self cliShell topezClientClass bounds at: #'evaluator');\x0a    yourself",
messageSends: ["model:", "labelled:", "on:text:accept:readSelection:menu:", "consoleWindowMorphClass", "acceptOnCR:", "addMorph:frame:", "corner:", "@", "prompt", "ifTrue:", "ifNotNil:", "labelStringBlock:", "changed:", "openInWorld", "bounds:", "at:", "bounds", "topezClientClass", "cliShell", "yourself"],
referencedClasses: ["TZSystemWindow"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "openLabel:",
category: 'initialize-release',
fn: function (aString){
var self=this;
var topView,controllerClass,codeView;
function $StandardSystemView(){return smalltalk.StandardSystemView||(typeof StandardSystemView=="undefined"?nil:StandardSystemView)}
function $StandardSystemController(){return smalltalk.StandardSystemController||(typeof StandardSystemController=="undefined"?nil:StandardSystemController)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ShellWindowView(){return smalltalk.ShellWindowView||(typeof ShellWindowView=="undefined"?nil:ShellWindowView)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(self)._isMorphic();
if(smalltalk.assert($1)){
$2=_st(self)._openAsMorphLabel_(aString);
return $2;
};
$3=aString;
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(self)._labelStringBlock_((function(){
return smalltalk.withContext(function($ctx2) {
return aString;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
topView=_st($StandardSystemView())._new();
controllerClass=_st($Smalltalk())._at_ifAbsent_("DeferredActionStandardSystemController",(function(){
return smalltalk.withContext(function($ctx2) {
return $StandardSystemController();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=topView;
_st($4)._model_(self);
_st($4)._controller_(_st(controllerClass)._new());
_st($4)._borderWidth_((1));
_st($4)._label_(aString);
$5=_st($4)._minimumSize_(_st((100)).__at((50)));
codeView=_st($ShellWindowView())._on_text_accept_readSelection_menu_(self,nil,nil,nil,"codePaneMenu:shifted:");
_st(codeView)._window_(_st(_st((0)).__at((0)))._extent_(_st((200)).__at((200))));
_st(topView)._addSubView_(codeView);
_st(_st(topView)._controller())._addDeferredUIMessage_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._changed_("relabel");
return _st(self)._prompt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(topView)._controller())._open();
return self}, function($ctx1) {$ctx1.fill(self,"openLabel:",{aString:aString,topView:topView,controllerClass:controllerClass,codeView:codeView},smalltalk.TodeConsole)})},
args: ["aString"],
source: "openLabel: aString\x0a  \x22Open a window on this stream. This is copied from the corresponding method in\x0a\x09TranscriptStream.\x22\x0a\x0a  | topView controllerClass codeView |\x0a  self isMorphic\x0a    ifTrue: [ ^ self openAsMorphLabel: aString ].\x0a  aString ifNotNil: [ self labelStringBlock: [ aString ] ].\x0a  topView := StandardSystemView new.\x0a  controllerClass := Smalltalk\x0a    at: #'DeferredActionStandardSystemController'\x0a    ifAbsent: [ StandardSystemController ].\x0a  topView\x0a    model: self;\x0a    controller: controllerClass new;\x0a    borderWidth: 1;\x0a    label: aString;\x0a    minimumSize: 100 @ 50.\x0a  codeView := ShellWindowView\x0a    on: self\x0a    text: nil\x0a    accept: nil\x0a    readSelection: nil\x0a    menu: #'codePaneMenu:shifted:'.\x0a  codeView window: (0 @ 0 extent: 200 @ 200).\x0a  topView addSubView: codeView.\x0a  topView controller\x0a    addDeferredUIMessage: [ \x0a      self changed: #'relabel'.\x0a      self prompt ].\x0a  topView controller open",
messageSends: ["ifTrue:", "openAsMorphLabel:", "isMorphic", "ifNotNil:", "labelStringBlock:", "new", "at:ifAbsent:", "model:", "controller:", "borderWidth:", "label:", "minimumSize:", "@", "on:text:accept:readSelection:menu:", "window:", "extent:", "addSubView:", "addDeferredUIMessage:", "changed:", "prompt", "controller", "open"],
referencedClasses: ["StandardSystemView", "StandardSystemController", "Smalltalk", "ShellWindowView"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "pastEndPut:",
category: 'stream extensions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._endEntry();
$1=_st(self)._nextPut_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pastEndPut:",{anObject:anObject},smalltalk.TodeConsole)})},
args: ["anObject"],
source: "pastEndPut: anObject\x0a\x09\x22If the stream reaches its limit, just output the contents and reset.\x22\x0a\x09self endEntry.\x0a\x09^ self nextPut: anObject",
messageSends: ["endEntry", "nextPut:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:orSendTo:",
category: 'model protocol',
fn: function (selector,otherTarget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._respondsTo_(selector);
if(smalltalk.assert($1)){
$2=_st(self)._perform_(selector);
return $2;
} else {
$3=_st(otherTarget)._perform_(selector);
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"perform:orSendTo:",{selector:selector,otherTarget:otherTarget},smalltalk.TodeConsole)})},
args: ["selector", "otherTarget"],
source: "perform: selector orSendTo: otherTarget\x0a\x09\x22Selector was just chosen from a menu by a user.  If can respond, then\x0a\x09perform it on myself. If not, send it to otherTarget, presumably the\x0a\x09editPane from which the menu was invoked.\x22\x0a\x0a\x09(self respondsTo: selector)\x0a\x09\x09ifTrue: [^ self perform: selector]\x0a\x09\x09ifFalse: [^ otherTarget perform: selector]",
messageSends: ["ifTrue:ifFalse:", "perform:", "respondsTo:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "previousHistory",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._previousHistory();
return $1;
}, function($ctx1) {$ctx1.fill(self,"previousHistory",{},smalltalk.TodeConsole)})},
args: [],
source: "previousHistory\x0a  ^ self cliShell previousHistory",
messageSends: ["previousHistory", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "processCommand:",
category: 'evaluation',
fn: function (aCommandString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(_st(self)._cliShell())._evaluate_(aCommandString);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var str,outputStringOrText;
outputStringOrText=$receiver;
str=outputStringOrText;
$2=_st(str)._isEmpty();
if(smalltalk.assert($2)){
_st(self)._restoreSelectionMarker();
} else {
$3=self;
_st($3)._show_(outputStringOrText);
$4=_st($3)._cr();
$4;
};
};
_st(self)._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"processCommand:",{aCommandString:aCommandString},smalltalk.TodeConsole)})},
args: ["aCommandString"],
source: "processCommand: aCommandString\x0a  (self cliShell evaluate: aCommandString)\x0a    ifNotNil: [ :outputStringOrText | \x0a      | str |\x0a      (str := outputStringOrText) isEmpty\x0a        ifTrue: [ self restoreSelectionMarker ]\x0a        ifFalse: [ \x0a          self \x0a            show: outputStringOrText;\x0a            cr ] ].\x0a  self prompt",
messageSends: ["ifNotNil:", "ifTrue:ifFalse:", "restoreSelectionMarker", "show:", "cr", "isEmpty", "evaluate:", "cliShell", "prompt"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt",
category: 'command prompt',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._show_(_st(_st(self)._cliShell())._promptString());
_st(self)._markInput();
_st(self)._restoreSelectionMarker();
return self}, function($ctx1) {$ctx1.fill(self,"prompt",{},smalltalk.TodeConsole)})},
args: [],
source: "prompt\x0a  self show: self cliShell promptString.\x0a  self markInput.\x0a  self restoreSelectionMarker",
messageSends: ["show:", "promptString", "cliShell", "markInput", "restoreSelectionMarker"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "promptString",
category: 'command prompt',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._flag_("FIXME");
$1=_st(self)._lastPromptString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"promptString",{},smalltalk.TodeConsole)})},
args: [],
source: "promptString\x0a\x09\x22Dependents call this when restoring the prompt string display\x22\x0a\x0a\x09self flag: #FIXME. \x22change the dependents to call #lastPromptString\x22\x0a\x09^ self lastPromptString",
messageSends: ["flag:", "lastPromptString"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "promptTwo",
category: 'command prompt',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._show_(_st(_st(self)._cliShell())._promptStringTwo());
_st(self)._restoreSelectionMarker();
return self}, function($ctx1) {$ctx1.fill(self,"promptTwo",{},smalltalk.TodeConsole)})},
args: [],
source: "promptTwo\x0a\x0a\x09self show: self cliShell promptStringTwo.\x0a\x09self restoreSelectionMarker",
messageSends: ["show:", "promptStringTwo", "cliShell", "restoreSelectionMarker"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "restorePrompt",
category: 'command prompt',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._flag_("FIXME");
_st(self)._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"restorePrompt",{},smalltalk.TodeConsole)})},
args: [],
source: "restorePrompt\x0a\x0a\x09self flag: #FIXME. \x22remember last prompt string and redisplay it\x22\x0a\x09self prompt",
messageSends: ["flag:", "prompt"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreSelectionMarker",
category: 'command prompt',
fn: function (){
var self=this;
var c;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._isMorphic();
if(! smalltalk.assert($1)){
c=_st(self)._activeController();
c;
_st(self)._scheduleToEvaluate_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(c)._initializeSelection();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"restoreSelectionMarker",{c:c},smalltalk.TodeConsole)})},
args: [],
source: "restoreSelectionMarker\x0a  \x22Restore selection marker in MVC\x22\x0a\x0a  | c |\x0a  self isMorphic\x0a    ifFalse: [ \x0a      c := self activeController.\x0a      self scheduleToEvaluate: [ c initializeSelection ] ]",
messageSends: ["ifFalse:", "activeController", "scheduleToEvaluate:", "initializeSelection", "isMorphic"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "scheduleToEvaluate:",
category: 'evaluation',
fn: function (aBlock){
var self=this;
function $WorldState(){return smalltalk.WorldState||(typeof WorldState=="undefined"?nil:WorldState)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._isMorphic();
if(smalltalk.assert($1)){
_st($WorldState())._addDeferredUIMessage_(aBlock);
} else {
$2=_st(self)._activeController();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self["@activeController"])._addDeferredUIMessage_(aBlock);
};
};
return self}, function($ctx1) {$ctx1.fill(self,"scheduleToEvaluate:",{aBlock:aBlock},smalltalk.TodeConsole)})},
args: ["aBlock"],
source: "scheduleToEvaluate: aBlock\x0a  \x22Evaluate aBlock, typically to create a new scheduled window. Make it work in\x0a\x09both Morphic and MVC. In Morphic, just evaluate aBlock, but in MVC, put it in\x0a\x09a queue for evaluation within a control loop. This method may be sent from\x0a\x09a process running independent of MVC controller scheduling.\x0a\x09\x0a\x09Newer Squeak images implement #addDeferredUIMessage in the current\x0a\x09project, eliminating the need for an #isMorphic test. This mechanism is not\x0a\x09available for older images or for Pharo.\x22\x0a\x0a  self isMorphic\x0a    ifTrue: [ WorldState addDeferredUIMessage: aBlock ]\x0a    ifFalse: [ \x0a      self activeController\x0a        ifNotNil: [ activeController addDeferredUIMessage: aBlock ] ]",
messageSends: ["ifTrue:ifFalse:", "addDeferredUIMessage:", "ifNotNil:", "activeController", "isMorphic"],
referencedClasses: ["WorldState"]
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'stream extensions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_(_st(anObject)._asStringOrText());
$2=_st($1)._endEntry();
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.TodeConsole)})},
args: ["anObject"],
source: "show: anObject\x0a  \x22TextCollector compatibility\x22\x0a\x0a  self\x0a    nextPutAll: anObject asStringOrText;\x0a    endEntry",
messageSends: ["nextPutAll:", "asStringOrText", "endEntry"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "tabCompletion:",
category: 'accessing',
fn: function (commandLine){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._tabCompletion_(commandLine);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabCompletion:",{commandLine:commandLine},smalltalk.TodeConsole)})},
args: ["commandLine"],
source: "tabCompletion: commandLine\x0a  ^ self cliShell tabCompletion: commandLine",
messageSends: ["tabCompletion:", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._topez();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.TodeConsole)})},
args: [],
source: "topez\x0a  ^ self cliShell topez",
messageSends: ["topez", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
category: 'updating',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14;
$1=_st(event).__eq_eq("prompt");
if(smalltalk.assert($1)){
$2=_st(self)._prompt();
return $2;
};
$3=_st(event).__eq_eq("alternatePrompt");
if(smalltalk.assert($3)){
$4=_st(self)._promptTwo();
return $4;
};
$5=_st(event).__eq_eq("restorePrompt");
if(smalltalk.assert($5)){
_st(self)._flag_("FIXME");
$6=_st(self)._prompt();
return $6;
};
$7=_st(event).__eq_eq("exit");
if(smalltalk.assert($7)){
$8=_st(self)._close();
return $8;
};
$9=_st(event).__eq_eq("clearText");
if(smalltalk.assert($9)){
$10=_st(self)._clear();
return $10;
};
$11=_st(event).__eq_eq("interruptCharacter");
if(smalltalk.assert($11)){
$12=_st(self)._handleInterruptCharacterEvent();
return $12;
};
$13=_st(event).__eq_eq("relabel");
if(smalltalk.assert($13)){
$14=_st(self)._changed_(event);
return $14;
};
_st(self)._error_((function(){
return smalltalk.withContext(function($ctx2) {
return "unexpected event";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update:",{event:event},smalltalk.TodeConsole)})},
args: ["event"],
source: "update: event\x0a\x0a\x09event == #prompt\x09\x22display $PS1\x22\x0a\x09\x09ifTrue: [^ self prompt].\x0a\x09event == #alternatePrompt\x09\x22display $PS2\x22\x0a\x09\x09ifTrue: [^ self promptTwo].\x0a\x09event == #restorePrompt\x09\x22restore last prompt display\x22\x0a\x09\x09ifTrue: [self flag: #FIXME. ^ self prompt].\x0a\x09event == #exit\x0a\x09\x09ifTrue: [^ self close].\x0a\x09event == #clearText\x0a\x09\x09ifTrue: [^ self clear].\x0a\x09event == #interruptCharacter\x0a\x09\x09ifTrue: [^ self handleInterruptCharacterEvent].\x0a\x09event == #relabel\x0a\x09\x09ifTrue: [^ self changed: event].\x0a\x09self error: ['unexpected event']",
messageSends: ["ifTrue:", "prompt", "==", "promptTwo", "flag:", "close", "clear", "handleInterruptCharacterEvent", "changed:", "error:"],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "windowActive:",
category: 'updating',
fn: function (aSystemWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"windowActive:",{aSystemWindow:aSystemWindow},smalltalk.TodeConsole)})},
args: ["aSystemWindow"],
source: "windowActive: aSystemWindow\x0a  \x22noop\x22\x0a\x0a  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "windowIsClosing",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._cliShell())._windowIsClosing();
return self}, function($ctx1) {$ctx1.fill(self,"windowIsClosing",{},smalltalk.TodeConsole)})},
args: [],
source: "windowIsClosing\x0a  self cliShell windowIsClosing",
messageSends: ["windowIsClosing", "cliShell"],
referencedClasses: []
}),
smalltalk.TodeConsole);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultWindowName",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tODE Console";
}, function($ctx1) {$ctx1.fill(self,"defaultWindowName",{},smalltalk.TodeConsole.klass)})},
args: [],
source: "defaultWindowName\x0a  ^ 'tODE Console'",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._on_(_st($Text())._new()))._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TodeConsole.klass)})},
args: [],
source: "new\x0a  ^ (self on: Text new) initialize",
messageSends: ["initialize", "on:", "new"],
referencedClasses: ["Text"]
}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TodeConsole.klass)})},
args: [],
source: "open\x0a\x09\x22CommandShell open\x22\x0a\x0a\x09^ self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "openLabel:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._openLabel_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"openLabel:",{aString:aString},smalltalk.TodeConsole.klass)})},
args: ["aString"],
source: "openLabel: aString\x0a\x0a\x09\x22CommandShell openLabel: self defaultWindowName\x22\x0a\x0a\x09^ self new openLabel: aString",
messageSends: ["openLabel:", "new"],
referencedClasses: []
}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "todeConsole:",
category: 'instance creation',
fn: function (cliShell){
var self=this;
var ttyDisplay;
return smalltalk.withContext(function($ctx1) { 
var $1;
ttyDisplay=_st(_st(self)._new())._cliShell_(cliShell);
$1=ttyDisplay;
return $1;
}, function($ctx1) {$ctx1.fill(self,"todeConsole:",{cliShell:cliShell,ttyDisplay:ttyDisplay},smalltalk.TodeConsole.klass)})},
args: ["cliShell"],
source: "todeConsole: cliShell\x0a\x09|ttyDisplay|\x0a\x09ttyDisplay := self new cliShell: cliShell.\x0a\x09^ ttyDisplay",
messageSends: ["cliShell:", "new"],
referencedClasses: []
}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowColorSpecification",
category: 'window color',
fn: function (){
var self=this;
var windowColorSpec;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
windowColorSpec=_st($Smalltalk())._at_ifAbsent_("WindowColorSpec",(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._error_("this image does not support WindowColorSpec");
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st(windowColorSpec)._classSymbol_wording_brightColor_pastelColor_helpMessage_(_st(self)._name(),"Tode Console",_st(_st(_st($Color())._lightGray())._lighter())._paler(),_st(_st(_st(_st(_st($Color())._lightGray())._lighter())._lighter())._paler())._paler(),"Tode Console window for running remote GemStone/S tODE session");
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"windowColorSpecification",{windowColorSpec:windowColorSpec},smalltalk.TodeConsole.klass)})},
args: [],
source: "windowColorSpecification\x0a  \x22Answer a WindowColorSpec object that declares my preference\x22\x0a\x0a  | windowColorSpec |\x0a  windowColorSpec := Smalltalk\x0a    at: #'WindowColorSpec'\x0a    ifAbsent: [ ^ self error: 'this image does not support WindowColorSpec' ].\x0a  ^ windowColorSpec\x0a    classSymbol: self name\x0a    wording: 'Tode Console'\x0a    brightColor: Color lightGray lighter paler\x0a    pastelColor: Color lightGray lighter lighter paler paler\x0a    helpMessage:\x0a      'Tode Console window for running remote GemStone/S tODE session'",
messageSends: ["at:ifAbsent:", "error:", "classSymbol:wording:brightColor:pastelColor:helpMessage:", "name", "paler", "lighter", "lightGray"],
referencedClasses: ["Smalltalk", "Color"]
}),
smalltalk.TodeConsole.klass);


smalltalk.addClass('TodeConsoleWindowMorph', smalltalk.PluggableTextMorph, ['inputMark'], 'Topez-Web-Common-Console');
smalltalk.addMethod(
smalltalk.method({
selector: "accept",
category: 'menu commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._model();
_st($1)._cr();
_st($1)._flush();
$2=_st($1)._processCommand_(_st(_st(self)._commandLineInput())._asString());
return self}, function($ctx1) {$ctx1.fill(self,"accept",{},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "accept\x0a  self model\x0a    cr;\x0a    flush;\x0a    processCommand: self commandLineInput asString",
messageSends: ["cr", "model", "flush", "processCommand:", "asString", "commandLineInput"],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor",
category: 'menu commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._adornmentColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"adornmentColor",{},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "adornmentColor\x0a    ^ self model adornmentColor",
messageSends: ["adornmentColor", "model"],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "appendEntry",
category: 'updating',
fn: function (){
var self=this;
var txt;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st($Transcript())._show_(_st(_st($Character())._cr()).__comma("TodeConsoleWindowMorph>>appendEntry"));
$1=_st(_st(_st(self["@textMorph"])._asText())._size()).__gt(_st(self["@model"])._characterLimit());
if(smalltalk.assert($1)){
_st(self)._selectInvisiblyFrom_to_((1),_st(_st(_st(self["@textMorph"])._asText())._size()).__slash_slash((2)));
_st(self)._replaceSelectionWith_(_st($Text())._new());
};
_st(self)._selectInvisiblyFrom_to_(_st(_st(_st(self["@textMorph"])._asText())._size()).__plus((1)),_st(_st(self["@textMorph"])._asText())._size());
txt=_st(self["@model"])._contents();
_st($Transcript())._show_(_st(_st(_st($Character())._cr()).__comma("model contents: ")).__comma(_st(txt)._asString()));
$2=_st(_st(txt)._size()).__gt((0));
if(smalltalk.assert($2)){
_st(self)._replaceSelectionWith_(txt);
_st(self)._selectInvisiblyFrom_to_(_st(_st(_st(self["@textMorph"])._asText())._size()).__plus((1)),_st(_st(self["@textMorph"])._asText())._size());
_st(self["@model"])._reset();
};
return self}, function($ctx1) {$ctx1.fill(self,"appendEntry",{txt:txt},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "appendEntry\x0a  | txt |\x0a  Transcript show: Character cr, 'TodeConsoleWindowMorph>>appendEntry'.\x0a  \x22Append the text in the model's writeStream to the editable text. \x22\x0a  textMorph asText size > model characterLimit\x0a    ifTrue: [ \x0a      \x22Knock off first half of text\x22\x0a      self selectInvisiblyFrom: 1 to: textMorph asText size // 2.\x0a      self replaceSelectionWith: Text new ].\x0a  self selectInvisiblyFrom: textMorph asText size + 1 to: textMorph asText size.\x0a  txt := model contents.\x0a  Transcript show: Character cr, 'model contents: ', txt asString.\x0a  txt size > 0\x0a    ifTrue: [ \x0a      self replaceSelectionWith: txt.\x0a      self\x0a        selectInvisiblyFrom: textMorph asText size + 1\x0a        to: textMorph asText size.\x0a      model reset ]",
messageSends: ["show:", ",", "cr", "ifTrue:", "selectInvisiblyFrom:to:", "//", "size", "asText", "replaceSelectionWith:", "new", ">", "characterLimit", "+", "contents", "asString", "reset"],
referencedClasses: ["Character", "Transcript", "Text"]
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "commandLineInput",
category: 'command input',
fn: function (){
var self=this;
var start,stop;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
start=_st(self)._positionAfterPromptString();
stop=_st(_st(self)._text())._size();
$1=_st(stop).__lt(start);
if(smalltalk.assert($1)){
return "";
};
$2=_st(_st(_st(self)._text())._copyFrom_to_(start,stop))._asString();
return $2;
}, function($ctx1) {$ctx1.fill(self,"commandLineInput",{start:start,stop:stop},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "commandLineInput\x0a  | start stop |\x0a  start := self positionAfterPromptString.\x0a  stop := self text size.\x0a  stop < start\x0a    ifTrue: [ ^ '' ].\x0a  ^ (self text copyFrom: start to: stop) asString",
messageSends: ["positionAfterPromptString", "size", "text", "ifTrue:", "<", "asString", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'menu commands',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.PluggableTextMorph.fn.prototype._drawOn_.apply(_st(self), [aCanvas]);
if(smalltalk.assert(true)){
_st(_st(self)._theme())._drawTopezAdornmentFor_color_on_(self,_st(self)._adornmentColor(),aCanvas);
};
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{aCanvas:aCanvas},smalltalk.TodeConsoleWindowMorph)})},
args: ["aCanvas"],
source: "drawOn: aCanvas\x0a    \x22Indicate which Evaluator you are running on\x22\x0a\x0a    super drawOn: aCanvas.\x0a    true\x0a        ifTrue: [ self theme drawTopezAdornmentFor: self color: self adornmentColor on: aCanvas ]",
messageSends: ["drawOn:", "ifTrue:", "drawTopezAdornmentFor:color:on:", "adornmentColor", "theme"],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.PluggableTextMorph.fn.prototype._initialize.apply(_st(self), []);
self["@inputMark"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "initialize\x0a  \x22initialize the state of the receiver\x22\x0a\x0a  super initialize.\x0a  inputMark := 1",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "inputMark",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@inputMark"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputMark",{},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "inputMark\x0a  ^ inputMark",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "keyStroke:",
category: 'events',
fn: function (evt){
var self=this;
var interval;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(evt)._altKeyPressed();
if(smalltalk.assert($1)){
$2=smalltalk.PluggableTextMorph.fn.prototype._keyStroke_.apply(_st(self), [evt]);
return $2;
};
interval=_st(_st(_st(self)._textMorph())._editor())._selectionInterval();
$3=_st(_st(_st(interval)._first()).__gt(_st(self)._inputMark()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(interval)._first()).__lt_eq(_st(_st(self)._text())._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
$4=smalltalk.PluggableTextMorph.fn.prototype._keyStroke_.apply(_st(self), [evt]);
return $4;
};
$5=_st(_st(evt)._keyCharacter()).__eq(_st($Character())._tab());
if(smalltalk.assert($5)){
var ans;
ans=_st(_st(self)._model())._tabCompletion_(_st(self)._commandLineInput());
ans;
_st(self["@textMorph"])._selectInvisiblyFrom_to_(_st(self)._positionAfterPromptString(),_st(_st(self)._text())._size());
_st(self["@textMorph"])._replaceSelectionWith_(ans);
_st(self)._selectFrom_to_(_st(_st(_st(self)._text())._size()).__plus((1)),_st(_st(self)._text())._size());
return true;
};
$6=_st(_st(_st(evt)._keyValue()).__eq((30)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(evt)._keyValue()).__eq((11));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($6)){
_st(_st(self)._model())._previousHistory();
_st(self)._selectFrom_to_(_st(_st(_st(self)._text())._size()).__plus((1)),_st(_st(self)._text())._size());
return true;
};
$7=_st(_st(_st(evt)._keyValue()).__eq((31)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(evt)._keyValue()).__eq((12));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($7)){
_st(_st(self)._model())._nextHistory();
_st(self)._selectFrom_to_(_st(_st(_st(self)._text())._size()).__plus((1)),_st(_st(self)._text())._size());
return true;
};
_st(self)._selectFrom_to_(_st(_st(_st(self)._text())._size()).__plus((1)),_st(_st(self)._text())._size());
$8=smalltalk.PluggableTextMorph.fn.prototype._keyStroke_.apply(_st(self), [evt]);
return $8;
}, function($ctx1) {$ctx1.fill(self,"keyStroke:",{evt:evt,interval:interval},smalltalk.TodeConsoleWindowMorph)})},
args: ["evt"],
source: "keyStroke: evt\x0a  | interval |\x0a  evt altKeyPressed\x0a    ifTrue: [ ^ super keyStroke: evt ].\x0a  interval := self textMorph editor selectionInterval.\x0a  (interval first > self inputMark and: [ interval first <= self text size ])\x0a    ifTrue: [ ^ super keyStroke: evt ].\x0a  evt keyCharacter = Character tab\x0a    ifTrue: [ \x0a      | ans |\x0a      ans := self model tabCompletion: self commandLineInput.\x0a      textMorph\x0a        selectInvisiblyFrom: self positionAfterPromptString\x0a        to: self text size.\x0a      textMorph replaceSelectionWith: ans.\x0a      self selectFrom: self text size + 1 to: self text size.\x0a      ^ true ].\x0a  (evt keyValue = 30 or: [ evt keyValue = 11 ])\x0a    ifTrue: [ \x0a      self model previousHistory.\x0a      self selectFrom: self text size + 1 to: self text size.\x0a      ^ true ].\x0a  (evt keyValue = 31 or: [ evt keyValue = 12 ])\x0a    ifTrue: [ \x0a      self model nextHistory.\x0a      self selectFrom: self text size + 1 to: self text size.\x0a      ^ true ].\x0a  self selectFrom: self text size + 1 to: self text size.\x0a  ^ super keyStroke: evt",
messageSends: ["ifTrue:", "keyStroke:", "altKeyPressed", "selectionInterval", "editor", "textMorph", "and:", "<=", "size", "text", "first", ">", "inputMark", "tabCompletion:", "commandLineInput", "model", "selectInvisiblyFrom:to:", "positionAfterPromptString", "replaceSelectionWith:", "selectFrom:to:", "+", "=", "tab", "keyCharacter", "previousHistory", "or:", "keyValue", "nextHistory"],
referencedClasses: ["Character"]
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "markInput",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inputMark"]=_st(_st(self)._text())._size();
return self}, function($ctx1) {$ctx1.fill(self,"markInput",{},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "markInput\x0a  inputMark := self text size",
messageSends: ["size", "text"],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "positionAfterPromptString",
category: 'command input',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._inputMark()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionAfterPromptString",{},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "positionAfterPromptString\x0a  \x22Answer the index of the first character after the last prompt string in my text. If\x0a\x09not found, then assume that the contents of the text are all intended to be command\x0a\x09input.\x22\x0a\x0a  ^ self inputMark + 1",
messageSends: ["+", "inputMark"],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "setText:",
category: 'model access',
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.PluggableTextMorph.fn.prototype._setText_.apply(_st(self), [aText]);
return self}, function($ctx1) {$ctx1.fill(self,"setText:",{aText:aText},smalltalk.TodeConsoleWindowMorph)})},
args: ["aText"],
source: "setText: aText\x0a\x09\x22TODO: method changed\x22\x0a\x09super setText: aText.",
messageSends: ["setText:"],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
category: 'updating',
fn: function (something){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$6,$9;
_st($Transcript())._show_(_st("TodeConsoleWindowMorph>>update:").__comma(something));
$1=_st(something).__eq_eq("markInput");
if(smalltalk.assert($1)){
$2=_st(self)._markInput();
return $2;
};
$3=_st(something).__eq_eq("doCommand");
if(smalltalk.assert($3)){
$4=_st(self)._accept();
return $4;
};
$5=_st(something).__eq_eq("exit");
if(smalltalk.assert($5)){
$7=_st(self)._owner();
_st($7)._release();
$8=_st($7)._delete();
$6=$8;
return $6;
};
$9=smalltalk.PluggableTextMorph.fn.prototype._update_.apply(_st(self), [something]);
return $9;
}, function($ctx1) {$ctx1.fill(self,"update:",{something:something},smalltalk.TodeConsoleWindowMorph)})},
args: ["something"],
source: "update: something\x0a\x09Transcript show: 'TodeConsoleWindowMorph>>update:', something.\x0a\x09\x0a  something == #'markInput'\x0a    ifTrue: [ ^ self markInput ].\x0a  something == #'doCommand'\x0a    ifTrue: [ ^ self accept ].\x0a  something == #'exit'\x0a    ifTrue: [ \x0a      ^ self owner\x0a        release;\x0a        delete ].\x0a  ^ super update: something",
messageSends: ["show:", ",", "ifTrue:", "markInput", "==", "accept", "release", "owner", "delete", "update:"],
referencedClasses: ["Transcript"]
}),
smalltalk.TodeConsoleWindowMorph);

smalltalk.addMethod(
smalltalk.method({
selector: "wantsFrameAdornments",
category: 'menu commands',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"wantsFrameAdornments",{},smalltalk.TodeConsoleWindowMorph)})},
args: [],
source: "wantsFrameAdornments\x0a    \x22nothing to save, nothing to indicate\x22\x0a\x0a    ^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsoleWindowMorph);



