smalltalk.addPackage('Topez-Web-Common-Console');
smalltalk.addClass('TodeConsole', smalltalk.TextStream, ['cliShell', 'lastPromptString', 'activeController', 'labelStringBlock'], 'Topez-Web-Common-Console');
smalltalk.addMethod(
smalltalk.method({
selector: "activeController",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@activeController"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeController",{},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "activeController:",
fn: function (aController){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@activeController"]=aController;
return self}, function($ctx1) {$ctx1.fill(self,"activeController:",{aController:aController},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._adornmentColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"adornmentColor",{},smalltalk.TodeConsole)})},
messageSends: ["adornmentColor", "cliShell"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "bs",
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
messageSends: ["ifTrue:", "skip:", ">", "position", "changed:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "characterLimit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(20000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"characterLimit",{},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "checkSttyForEvent:",
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
messageSends: ["ifTrue:", "handleInterruptCharacterEvent", "isInterruptEvent:", "doEndOfFile", "cliShell", "isEndOfFileEvent:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changed_("clearText");
_st(self)._reset();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.TodeConsole)})},
messageSends: ["changed:", "reset"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "cliShell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cliShell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cliShell",{},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "cliShell:",
fn: function (commandShell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cliShell"]=commandShell;
return self}, function($ctx1) {$ctx1.fill(self,"cliShell:",{commandShell:commandShell},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TextStream.fn.prototype._close.apply(_st(self), []);
_st(_st(self)._cliShell())._windowIsClosing();
_st(self)._changed_("exit");
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.TodeConsole)})},
messageSends: ["close", "windowIsClosing", "cliShell", "changed:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "codePaneMenu:shifted:",
fn: function (aMenu,shifted){
var self=this;
function $StringHolder(){return smalltalk.StringHolder||(typeof StringHolder=="undefined"?nil:StringHolder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($StringHolder())._basicNew())._codePaneMenu_shifted_(aMenu,shifted);
return $1;
}, function($ctx1) {$ctx1.fill(self,"codePaneMenu:shifted:",{aMenu:aMenu,shifted:shifted},smalltalk.TodeConsole)})},
messageSends: ["codePaneMenu:shifted:", "basicNew"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "consoleWindowMorphClass",
fn: function (){
var self=this;
function $TodeConsoleWindowMorph(){return smalltalk.TodeConsoleWindowMorph||(typeof TodeConsoleWindowMorph=="undefined"?nil:TodeConsoleWindowMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TodeConsoleWindowMorph();
return $1;
}, function($ctx1) {$ctx1.fill(self,"consoleWindowMorphClass",{},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "controlShiftLKeyStroke",
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
messageSends: ["windowNamesAndIds", "status", "topez", "collect:", "at:", "value", "chooseFrom:", "default", "ifTrue:", "editorWindowAt:", "activate", ">"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "controlShiftSKeyStroke",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"controlShiftSKeyStroke",{},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "domTextArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("#workspace")._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"domTextArea",{},smalltalk.TodeConsole)})},
messageSends: ["asJQuery"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "endEntry",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changed_("appendEntry");
_st(self)._reset();
return self}, function($ctx1) {$ctx1.fill(self,"endEntry",{},smalltalk.TodeConsole)})},
messageSends: ["changed:", "reset"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "escapeKeyStroke",
fn: function (){
var self=this;
var evaluator;
return smalltalk.withContext(function($ctx1) { 
evaluator=_st(_st(self)._topez())._editorWindowNamed_("evaluator");
_st(evaluator)._activate();
return true;
}, function($ctx1) {$ctx1.fill(self,"escapeKeyStroke",{evaluator:evaluator},smalltalk.TodeConsole)})},
messageSends: ["editorWindowNamed:", "topez", "activate"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "filterAndForward:",
fn: function (aCharacter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._filterAndForward_(aCharacter);
return $1;
}, function($ctx1) {$ctx1.fill(self,"filterAndForward:",{aCharacter:aCharacter},smalltalk.TodeConsole)})},
messageSends: ["filterAndForward:", "cliShell"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "filterAndForwardEvent:",
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
messageSends: ["ifNotNil:", "filterAndForwardEvent:", "cliShell", "checkSttyForEvent:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._endEntry();
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.TodeConsole)})},
messageSends: ["endEntry"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInterruptCharacterEvent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"handleInterruptCharacterEvent",{},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "isEndOfFileEvent:",
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
messageSends: ["ifTrue:", "or:", "and:", "controlKeyPressed", "=", "keyCharacter", "==", "keyValue"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "isInterruptEvent:",
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
messageSends: ["ifTrue:", "or:", "and:", "controlKeyPressed", "=", "keyCharacter", "==", "keyValue"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "isMorphic",
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
messageSends: ["or:", "isMorphic", "not", "respondsTo:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "keyboardConnector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._keyboardConnector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyboardConnector",{},smalltalk.TodeConsole)})},
messageSends: ["keyboardConnector", "cliShell"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "labelString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._labelStringBlock())._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"labelString",{},smalltalk.TodeConsole)})},
messageSends: ["value", "labelStringBlock"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "labelStringBlock",
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
messageSends: ["ifNil:", "defaultLabelStringBlock"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "labelStringBlock:",
fn: function (aBlockAnsweringAString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@labelStringBlock"]=aBlockAnsweringAString;
return self}, function($ctx1) {$ctx1.fill(self,"labelStringBlock:",{aBlockAnsweringAString:aBlockAnsweringAString},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "lastPromptString",
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
messageSends: ["ifNil:", "promptString", "cliShell"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "lastPromptString:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lastPromptString"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"lastPromptString:",{anObject:anObject},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "markInput",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changed_("markInput");
return self}, function($ctx1) {$ctx1.fill(self,"markInput",{},smalltalk.TodeConsole)})},
messageSends: ["changed:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "nextHistory",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._nextHistory();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextHistory",{},smalltalk.TodeConsole)})},
messageSends: ["nextHistory", "cliShell"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TextStream.fn.prototype._nextPut_.apply(_st(self), [anObject]);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.TodeConsole)})},
messageSends: ["nextPut:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
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
messageSends: ["ifFalse:", "nextPutAll:", "copyReplaceAll:with:", "lf", "cr", "flush", "isEmpty"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._openLabel_(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TodeConsole)})},
messageSends: ["openLabel:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsMorphLabel:",
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
messageSends: ["model:", "labelled:", "on:text:accept:readSelection:menu:", "consoleWindowMorphClass", "acceptOnCR:", "addMorph:frame:", "corner:", "@", "prompt", "ifTrue:", "ifNotNil:", "labelStringBlock:", "changed:", "openInWorld", "bounds:", "at:", "bounds", "topezClientClass", "cliShell", "yourself"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "openLabel:",
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
messageSends: ["ifTrue:", "openAsMorphLabel:", "isMorphic", "ifNotNil:", "labelStringBlock:", "new", "at:ifAbsent:", "model:", "controller:", "borderWidth:", "label:", "minimumSize:", "@", "on:text:accept:readSelection:menu:", "window:", "extent:", "addSubView:", "addDeferredUIMessage:", "changed:", "prompt", "controller", "open"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "pastEndPut:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._endEntry();
$1=_st(self)._nextPut_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pastEndPut:",{anObject:anObject},smalltalk.TodeConsole)})},
messageSends: ["endEntry", "nextPut:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:orSendTo:",
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
messageSends: ["ifTrue:ifFalse:", "perform:", "respondsTo:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "previousHistory",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._previousHistory();
return $1;
}, function($ctx1) {$ctx1.fill(self,"previousHistory",{},smalltalk.TodeConsole)})},
messageSends: ["previousHistory", "cliShell"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "processCommand:",
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
messageSends: ["ifNotNil:", "ifTrue:ifFalse:", "restoreSelectionMarker", "show:", "cr", "isEmpty", "evaluate:", "cliShell", "prompt"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "prompt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._show_(_st(_st(self)._cliShell())._promptString());
_st(self)._markInput();
_st(self)._restoreSelectionMarker();
return self}, function($ctx1) {$ctx1.fill(self,"prompt",{},smalltalk.TodeConsole)})},
messageSends: ["show:", "promptString", "cliShell", "markInput", "restoreSelectionMarker"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "promptString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._flag_("FIXME");
$1=_st(self)._lastPromptString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"promptString",{},smalltalk.TodeConsole)})},
messageSends: ["flag:", "lastPromptString"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "promptTwo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._show_(_st(_st(self)._cliShell())._promptStringTwo());
_st(self)._restoreSelectionMarker();
return self}, function($ctx1) {$ctx1.fill(self,"promptTwo",{},smalltalk.TodeConsole)})},
messageSends: ["show:", "promptStringTwo", "cliShell", "restoreSelectionMarker"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "restorePrompt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._flag_("FIXME");
_st(self)._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"restorePrompt",{},smalltalk.TodeConsole)})},
messageSends: ["flag:", "prompt"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "restoreSelectionMarker",
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
messageSends: ["ifFalse:", "activeController", "scheduleToEvaluate:", "initializeSelection", "isMorphic"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "scheduleToEvaluate:",
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
messageSends: ["ifTrue:ifFalse:", "addDeferredUIMessage:", "ifNotNil:", "activeController", "isMorphic"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_(_st(anObject)._asStringOrText());
$2=_st($1)._endEntry();
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.TodeConsole)})},
messageSends: ["nextPutAll:", "asStringOrText", "endEntry"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "tabCompletion:",
fn: function (commandLine){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._tabCompletion_(commandLine);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabCompletion:",{commandLine:commandLine},smalltalk.TodeConsole)})},
messageSends: ["tabCompletion:", "cliShell"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._cliShell())._topez();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.TodeConsole)})},
messageSends: ["topez", "cliShell"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
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
messageSends: ["ifTrue:", "prompt", "==", "promptTwo", "flag:", "close", "clear", "handleInterruptCharacterEvent", "changed:", "error:"]}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "windowActive:",
fn: function (aSystemWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"windowActive:",{aSystemWindow:aSystemWindow},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "windowIsClosing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._cliShell())._windowIsClosing();
return self}, function($ctx1) {$ctx1.fill(self,"windowIsClosing",{},smalltalk.TodeConsole)})},
messageSends: ["windowIsClosing", "cliShell"]}),
smalltalk.TodeConsole);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultWindowName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tODE Console";
}, function($ctx1) {$ctx1.fill(self,"defaultWindowName",{},smalltalk.TodeConsole.klass)})},
messageSends: []}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._on_(_st($Text())._new()))._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TodeConsole.klass)})},
messageSends: ["initialize", "on:", "new"]}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TodeConsole.klass)})},
messageSends: ["open", "new"]}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "openLabel:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._openLabel_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"openLabel:",{aString:aString},smalltalk.TodeConsole.klass)})},
messageSends: ["openLabel:", "new"]}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "todeConsole:",
fn: function (cliShell){
var self=this;
var ttyDisplay;
return smalltalk.withContext(function($ctx1) { 
var $1;
ttyDisplay=_st(_st(self)._new())._cliShell_(cliShell);
$1=ttyDisplay;
return $1;
}, function($ctx1) {$ctx1.fill(self,"todeConsole:",{cliShell:cliShell,ttyDisplay:ttyDisplay},smalltalk.TodeConsole.klass)})},
messageSends: ["cliShell:", "new"]}),
smalltalk.TodeConsole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowColorSpecification",
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
messageSends: ["at:ifAbsent:", "error:", "classSymbol:wording:brightColor:pastelColor:helpMessage:", "name", "paler", "lighter", "lightGray"]}),
smalltalk.TodeConsole.klass);


