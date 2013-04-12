smalltalk.addPackage('Topez-Client-GemStone');
smalltalk.addClass('TDShell', smalltalk.Object, ['windowStatus', 'topezClient', 'inputStream', 'actionStack', 'promptString', 'shellWindow', 'shellId', 'autoCommit', 'adornmentColor', 'sessionName', 'history', 'historyIndex'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "builtIns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["logout", "close", "collapse", "exit", "expand"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"builtIns",{},smalltalk.TDShell)})},
messageSends: []}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@windowStatus"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@windowStatus"])._close();
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.TDShell)})},
messageSends: ["ifNil:", "close"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "collapse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@windowStatus"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@windowStatus"])._collapse();
return self}, function($ctx1) {$ctx1.fill(self,"collapse",{},smalltalk.TDShell)})},
messageSends: ["ifNil:", "collapse"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "doEndOfFile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doEndOfFile",{},smalltalk.TDShell)})},
messageSends: []}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:",
fn: function (aString){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $TextColor(){return smalltalk.TextColor||(typeof TextColor=="undefined"?nil:TextColor)}
function $TextEmphasis(){return smalltalk.TextEmphasis||(typeof TextEmphasis=="undefined"?nil:TextEmphasis)}
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
_st((function(){
var line,stream,result;
return smalltalk.withContext(function($ctx2) {
stream=_st(aString)._readStream();
stream;
_st((function(){
return smalltalk.withContext(function($ctx3) {
line=_st(stream)._nextLine();
line;
return _st(line).__tild_tild(nil);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(self)._actionStack())._notEmpty();
if(smalltalk.assert($1)){
result=_st(self)._accumulateText_(line);
return result;
} else {
var isolatedCommands;
_st(self)._addToHistory_(line);
isolatedCommands=_st(line)._findTokens_(";");
isolatedCommands;
return _st(isolatedCommands)._do_((function(isolatedCommand){
var pipedCommands;
return smalltalk.withContext(function($ctx4) {
pipedCommands=_st(isolatedCommand)._findTokens_("|");
pipedCommands;
return _st(pipedCommands)._do_((function(pipedCommand){
return smalltalk.withContext(function($ctx5) {
result=_st(self)._evaluateCommand_(pipedCommand);
return result;
}, function($ctx5) {$ctx5.fillBlock({pipedCommand:pipedCommand},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({isolatedCommand:isolatedCommand,pipedCommands:pipedCommands},$ctx1)})}));
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2=result;
throw $early=[$2];
}, function($ctx2) {$ctx2.fillBlock({line:line,stream:stream,result:result},$ctx1)})}))._on_do_($Error(),(function(ex){
var errorMessage;
return smalltalk.withContext(function($ctx2) {
errorMessage=_st(_st("Topez ERROR: ")._asText()).__comma(_st($Text())._string_attributes_(_st(ex)._description(),[_st($TextColor())._red(),_st($TextEmphasis())._bold()]));
errorMessage;
$3=_st(_st(self)._class())._debugMode();
if(smalltalk.assert($3)){
_st(self)._halt_(_st(errorMessage)._asString());
};
_st(self)._resetStack();
$4=errorMessage;
throw $early=[$4];
}, function($ctx2) {$ctx2.fillBlock({ex:ex,errorMessage:errorMessage},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},smalltalk.TDShell)})},
messageSends: ["on:do:", ",", "string:attributes:", "description", "red", "bold", "asText", "ifTrue:", "halt:", "asString", "debugMode", "class", "resetStack", "readStream", "whileTrue:", "ifTrue:ifFalse:", "accumulateText:", "addToHistory:", "findTokens:", "do:", "evaluateCommand:", "notEmpty", "actionStack", "nextLine", "~~"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateCommand:",
fn: function (line){
var self=this;
var tokens;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(_st(line)._notEmpty())._and_((function(){
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
$3=_st(_st(self)._builtIns())._includes_(_st(tokens)._at_((1)));
if(smalltalk.assert($3)){
$4=_st(self)._executeBuiltIn_(tokens);
return $4;
};
$5=_st(_st(_st(self)._topezClient())._evaluateTokens_(tokens))._convertTDEvaluateTokenResponseToText();
return $5;
}, function($ctx1) {$ctx1.fill(self,"evaluateCommand:",{line:line,tokens:tokens},smalltalk.TDShell)})},
messageSends: ["ifTrue:", "and:", "=", "first", "notEmpty", "findTokens:", "space", "trimBoth", "isEmpty", "executeBuiltIn:", "includes:", "at:", "builtIns", "convertTDEvaluateTokenResponseToText", "evaluateTokens:", "topezClient"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "exception:",
fn: function (anException){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._topezClient())._exception_(anException);
return self}, function($ctx1) {$ctx1.fill(self,"exception:",{anException:anException},smalltalk.TDShell)})},
messageSends: ["exception:", "topezClient"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "executeBuiltIn:",
fn: function (tokens){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._perform_(_st(_st(tokens)._at_((1)))._asSymbol());
$1=_st(tokens)._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeBuiltIn:",{tokens:tokens},smalltalk.TDShell)})},
messageSends: ["perform:", "asSymbol", "at:"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "exit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._windowIsClosing();
_st(self)._logout();
return self}, function($ctx1) {$ctx1.fill(self,"exit",{},smalltalk.TDShell)})},
messageSends: ["windowIsClosing", "logout"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "expand",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@windowStatus"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@windowStatus"])._expand();
return self}, function($ctx1) {$ctx1.fill(self,"expand",{},smalltalk.TDShell)})},
messageSends: ["ifNil:", "expand"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "filterAndForwardEvent:",
fn: function (keyboardEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=keyboardEvent;
return $1;
}, function($ctx1) {$ctx1.fill(self,"filterAndForwardEvent:",{keyboardEvent:keyboardEvent},smalltalk.TDShell)})},
messageSends: []}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "history",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@history"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@history"]=_st($OrderedCollection())._new();
self["@history"];
} else {
$1;
};
$2=self["@history"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"history",{},smalltalk.TDShell)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "history:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@history"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"history:",{anObject:anObject},smalltalk.TDShell)})},
messageSends: []}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@historyIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TDShell)})},
messageSends: ["initialize"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "installHistoryEntry:windowMorph:",
fn: function (historyLine,windowMorph){
var self=this;
var editor;
return smalltalk.withContext(function($ctx1) { 
editor=_st(_st(windowMorph)._textMorph())._editor();
_st(editor)._selectInvisiblyFrom_to_(_st(_st(windowMorph)._inputMark()).__plus((1)),_st(_st(windowMorph)._text())._size());
_st(editor)._replaceSelectionWith_(historyLine);
return self}, function($ctx1) {$ctx1.fill(self,"installHistoryEntry:windowMorph:",{historyLine:historyLine,windowMorph:windowMorph,editor:editor},smalltalk.TDShell)})},
messageSends: ["editor", "textMorph", "selectInvisiblyFrom:to:", "+", "inputMark", "size", "text", "replaceSelectionWith:"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("GemStone Shell: ").__comma(_st(self)._sessionName());
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.TDShell)})},
messageSends: [",", "sessionName"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "logout",
fn: function (){
var self=this;
var tpz;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._close();
tpz=_st(self)._topezClient();
$1=tpz;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
self["@topezClient"]=nil;
_st(tpz)._logout();
return self}, function($ctx1) {$ctx1.fill(self,"logout",{tpz:tpz},smalltalk.TDShell)})},
messageSends: ["close", "topezClient", "ifNil:", "logout"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "nextHistory",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(_st(_st(self)._history())._size()).__eq((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(self["@historyIndex"]).__lt_eq((1));
if(smalltalk.assert($3)){
self["@historyIndex"]=(2);
self["@historyIndex"];
};
$4=_st(_st(_st(self["@history"])._size()).__plus((1))).__lt_eq(self["@historyIndex"]);
if(smalltalk.assert($4)){
_st(self)._installHistoryEntry_windowMorph_("",_st(_st(_st(self)._shellWindow())._paneMorphs())._first());
} else {
_st(self)._installHistoryEntry_windowMorph_(_st(self["@history"])._at_(self["@historyIndex"]),_st(_st(_st(self)._shellWindow())._paneMorphs())._first());
};
self["@historyIndex"]=_st(_st(_st(self["@historyIndex"]).__plus((1)))._max_((1)))._min_(_st(_st(self["@history"])._size()).__plus((1)));
return self}, function($ctx1) {$ctx1.fill(self,"nextHistory",{},smalltalk.TDShell)})},
messageSends: ["ifTrue:", "=", "size", "history", "<=", "ifTrue:ifFalse:", "installHistoryEntry:windowMorph:", "first", "paneMorphs", "shellWindow", "at:", "+", "min:", "max:"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "open:adornmentColor:",
fn: function (aString,aColorOrNil){
var self=this;
function $TodeConsole(){return smalltalk.TodeConsole||(typeof TodeConsole=="undefined"?nil:TodeConsole)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aColorOrNil;
if(($receiver = $1) == nil || $receiver == undefined){
self["@adornmentColor"]=_st(_st(_st(self)._topezClientClass())._sessionNamed_(aString))._adornmentColor();
self["@adornmentColor"];
} else {
var color;
color=$receiver;
self["@adornmentColor"]=color;
self["@adornmentColor"];
};
self["@sessionName"]=aString;
self["@shellWindow"]=_st(_st($TodeConsole())._todeConsole_(self))._openLabel_(_st(_st(_st(_st(self)._shellId())._asString()).__comma(": ")).__comma(_st(self)._label()));
_st(self)._windowRegistration();
$2=self["@shellWindow"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"open:adornmentColor:",{aString:aString,aColorOrNil:aColorOrNil},smalltalk.TDShell)})},
messageSends: ["ifNil:ifNotNil:", "adornmentColor", "sessionNamed:", "topezClientClass", "openLabel:", ",", "label", "asString", "shellId", "todeConsole:", "windowRegistration"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "openTodeDebugger:",
fn: function (aDebuggerLabel){
var self=this;
function $TodeDebugConsole(){return smalltalk.TodeDebugConsole||(typeof TodeDebugConsole=="undefined"?nil:TodeDebugConsole)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@shellWindow"]=_st(_st($TodeDebugConsole())._todeConsole_(self))._openLabel_(_st(_st(_st(_st(self)._shellId())._asString()).__comma(": ")).__comma(aDebuggerLabel));
_st(self)._windowRegistration();
$1=self["@shellWindow"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"openTodeDebugger:",{aDebuggerLabel:aDebuggerLabel},smalltalk.TDShell)})},
messageSends: ["openLabel:", ",", "asString", "shellId", "todeConsole:", "windowRegistration"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@shellWindow"]=nil;
self["@inputStream"]=self["@shellWindow"];
self["@actionStack"]=self["@inputStream"];
self["@promptString"]=self["@actionStack"];
self["@shellId"]=self["@promptString"];
$1=_st(_st(self)._topezClient())._copy();
_st($1)._shell_(self);
_st($1)._topezServerProxy();
$2=_st($1)._yourself();
self["@topezClient"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.TDShell)})},
messageSends: ["shell:", "copy", "topezClient", "topezServerProxy", "yourself"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "previousHistory",
fn: function (){
var self=this;
var editor,windowMorph;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(_st(self)._history())._size()).__eq((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(self["@historyIndex"]).__gt(_st(self["@history"])._size());
if(smalltalk.assert($3)){
self["@historyIndex"]=_st(self["@history"])._size();
self["@historyIndex"];
};
_st(self)._installHistoryEntry_windowMorph_(_st(self["@history"])._at_(self["@historyIndex"]),_st(_st(_st(self)._shellWindow())._paneMorphs())._first());
self["@historyIndex"]=_st(_st(_st(self["@historyIndex"]).__minus((1)))._max_((1)))._min_(_st(self["@history"])._size());
return self}, function($ctx1) {$ctx1.fill(self,"previousHistory",{editor:editor,windowMorph:windowMorph},smalltalk.TDShell)})},
messageSends: ["ifTrue:", "=", "size", "history", ">", "installHistoryEntry:windowMorph:", "at:", "first", "paneMorphs", "shellWindow", "min:", "max:", "-"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "promptString",
fn: function (){
var self=this;
function $TextEmphasis(){return smalltalk.TextEmphasis||(typeof TextEmphasis=="undefined"?nil:TextEmphasis)}
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
function $TextColor(){return smalltalk.TextColor||(typeof TextColor=="undefined"?nil:TextColor)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@promptString"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._autoCommit();
if(smalltalk.assert($2)){
self["@promptString"]=_st(_st($Text())._string_attribute_(_st(_st("tode ").__comma(_st(_st(self)._shellId())._asString())).__comma(" >"),_st($TextColor())._gray())).__comma(_st($Text())._string_attribute_(" ",_st($TextEmphasis())._normal()));
self["@promptString"];
} else {
self["@promptString"]=_st(_st($Text())._string_attribute_(_st(_st("tode ").__comma(_st(_st(self)._shellId())._asString())).__comma(" >"),_st($TextColor())._red())).__comma(_st($Text())._string_attribute_(" ",_st($TextEmphasis())._normal()));
self["@promptString"];
};
} else {
$1;
};
$3=self["@promptString"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"promptString",{},smalltalk.TDShell)})},
messageSends: ["ifNil:", "ifTrue:ifFalse:", ",", "string:attribute:", "normal", "asString", "shellId", "gray", "red", "autoCommit"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "resetStack",
fn: function (){
var self=this;
var actionArray;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._actionStack())._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
actionArray=_st(_st(self)._actionStack())._removeFirst();
self["@promptString"]=_st(actionArray)._at_((2));
self["@inputStream"]=_st(actionArray)._at_((1));
return self}, function($ctx1) {$ctx1.fill(self,"resetStack",{actionArray:actionArray},smalltalk.TDShell)})},
messageSends: ["ifTrue:", "isEmpty", "actionStack", "removeFirst", "at:"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._session();
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.TDShell)})},
messageSends: ["session", "topez"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sessionName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sessionName",{},smalltalk.TDShell)})},
messageSends: []}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "shellId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@shellId"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@shellId"]=_st(_st(self)._windowStatus())._nextShellWindowId();
self["@shellId"];
} else {
$1;
};
$2=self["@shellId"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"shellId",{},smalltalk.TDShell)})},
messageSends: ["ifNil:", "nextShellWindowId", "windowStatus"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "shellWindow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shellWindow"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shellWindow",{},smalltalk.TDShell)})},
messageSends: []}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "spawnDebugger:",
fn: function (aDebuggerLabel){
var self=this;
var spawn;
return smalltalk.withContext(function($ctx1) { 
var $1;
spawn=_st(self)._copy();
_st(spawn)._openTodeDebugger_(aDebuggerLabel);
_st(spawn)._windowRegistration();
$1=_st(_st(spawn)._topezClient())._topezServerOop();
return $1;
}, function($ctx1) {$ctx1.fill(self,"spawnDebugger:",{aDebuggerLabel:aDebuggerLabel,spawn:spawn},smalltalk.TDShell)})},
messageSends: ["copy", "openTodeDebugger:", "windowRegistration", "topezServerOop", "topezClient"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "spawnWindow",
fn: function (){
var self=this;
var spawn;
return smalltalk.withContext(function($ctx1) { 
var $1;
spawn=_st(self)._copy();
_st(spawn)._open_adornmentColor_("spawned",_st(self)._adornmentColor());
_st(spawn)._windowRegistration();
$1=_st(_st(spawn)._topezClient())._topezServerOop();
return $1;
}, function($ctx1) {$ctx1.fill(self,"spawnWindow",{spawn:spawn},smalltalk.TDShell)})},
messageSends: ["copy", "open:adornmentColor:", "adornmentColor", "windowRegistration", "topezServerOop", "topezClient"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "tabCompletion:",
fn: function (commandLine){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._tabCompletion_(commandLine);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabCompletion:",{commandLine:commandLine},smalltalk.TDShell)})},
messageSends: ["tabCompletion:", "topez"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._topezClient();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.TDShell)})},
messageSends: ["topezClient"]}),
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
selector: "windowIsClosing",
fn: function (){
var self=this;
var status;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@windowStatus"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@windowStatus"])._unregisterShellWindow_(_st(self)._shellWindow());
status=self["@windowStatus"];
self["@windowStatus"]=nil;
_st(status)._windowIsClosing();
$3=_st(_st(status)._shellWindows())._isEmpty();
if(smalltalk.assert($3)){
_st(self)._logout();
};
return self}, function($ctx1) {$ctx1.fill(self,"windowIsClosing",{status:status},smalltalk.TDShell)})},
messageSends: ["ifNil:", "unregisterShellWindow:", "shellWindow", "windowIsClosing", "ifTrue:", "logout", "isEmpty", "shellWindows"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "windowRegistration",
fn: function (){
var self=this;
var windowId;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
windowId=_st(self["@windowStatus"])._windowIdNamed_(_st("shell").__comma(_st(_st(self)._shellId())._asString()));
$1=self["@windowStatus"];
_st($1)._windowAt_put_(windowId,_st(self)._shellWindow());
$2=_st($1)._registerShellWindow_(_st(self)._shellWindow());
return self}, function($ctx1) {$ctx1.fill(self,"windowRegistration",{windowId:windowId},smalltalk.TDShell)})},
messageSends: ["windowIdNamed:", ",", "asString", "shellId", "windowAt:put:", "shellWindow", "registerShellWindow:"]}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "windowStatus",
fn: function (){
var self=this;
function $TDWindowStatus(){return smalltalk.TDWindowStatus||(typeof TDWindowStatus=="undefined"?nil:TDWindowStatus)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@windowStatus"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@windowStatus"]=_st($TDWindowStatus())._new();
self["@windowStatus"];
} else {
$1;
};
$2=self["@windowStatus"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"windowStatus",{},smalltalk.TDShell)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TDShell);


smalltalk.TDShell.klass.iVarNames = ['debugMode','enableDebugger'];
smalltalk.addMethod(
smalltalk.method({
selector: "debugMode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@debugMode"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@debugMode"]=false;
self["@debugMode"];
} else {
$1;
};
$2=self["@debugMode"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"debugMode",{},smalltalk.TDShell.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "debugMode:",
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@debugMode"]=aBool;
$1=self["@debugMode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"debugMode:",{aBool:aBool},smalltalk.TDShell.klass)})},
messageSends: []}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAdornmentColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._lightYellow();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultAdornmentColor",{},smalltalk.TDShell.klass)})},
messageSends: ["lightYellow"]}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "enableDebugger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@enableDebugger"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@enableDebugger"]=false;
self["@enableDebugger"];
} else {
$1;
};
$2=self["@enableDebugger"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"enableDebugger",{},smalltalk.TDShell.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "enableDebugger:",
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@enableDebugger"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"enableDebugger:",{aBool:aBool},smalltalk.TDShell.klass)})},
messageSends: []}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open:",
fn: function (aSessionName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._open_adornmentColor_(aSessionName,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"open:",{aSessionName:aSessionName},smalltalk.TDShell.klass)})},
messageSends: ["open:adornmentColor:"]}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open:adornmentColor:",
fn: function (aSessionName,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._open_adornmentColor_(aSessionName,aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"open:adornmentColor:",{aSessionName:aSessionName,aColor:aColor},smalltalk.TDShell.klass)})},
messageSends: ["open:adornmentColor:", "new"]}),
smalltalk.TDShell.klass);


smalltalk.addClass('TDTopezClient', smalltalk.Object, ['shell', 'session', 'sessionDescription', 'topezServerProxy', 'evaluateTokenMessage', 'setExceptionMessage', 'resetObjInMessage', 'openDebuggerMessage', 'tabCompletionMessage'], 'Topez-Client-GemStone');

smalltalk.TDTopezClient.klass.iVarNames = ['bounds','sessionMap','windowOffset','codeWindowHeight','codeWindowWidth','listWindowWidth','windowOrigin'];
smalltalk.addMethod(
smalltalk.method({
selector: "baseWidth",
fn: function (){
var self=this;
var font,string;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((400)).__at((25));
return $1;
}, function($ctx1) {$ctx1.fill(self,"baseWidth",{font:font,string:string},smalltalk.TDTopezClient.klass)})},
messageSends: ["@"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@bounds"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.TDTopezClient.klass)})},
messageSends: []}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWindowHeight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@codeWindowHeight"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@codeWindowHeight"]=(21);
self["@codeWindowHeight"];
} else {
$1;
};
$2=self["@codeWindowHeight"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"codeWindowHeight",{},smalltalk.TDTopezClient.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWindowHeight:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@codeWindowHeight"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"codeWindowHeight:",{anInteger:anInteger},smalltalk.TDTopezClient.klass)})},
messageSends: []}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWindowWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@codeWindowWidth"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@codeWindowWidth"]=(80);
self["@codeWindowWidth"];
} else {
$1;
};
$2=self["@codeWindowWidth"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"codeWindowWidth",{},smalltalk.TDTopezClient.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWindowWidth:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@codeWindowWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"codeWindowWidth:",{anInteger:anInteger},smalltalk.TDTopezClient.klass)})},
messageSends: []}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@bounds"]=_st($Dictionary())._new();
_st(self)._initializeBounds();
self["@bounds"]=_st(self)._offsetBounds_(_st(self)._windowOffset());
_st(self)._initializeSessionMap();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TDTopezClient.klass)})},
messageSends: ["new", "initializeBounds", "offsetBounds:", "windowOffset", "initializeSessionMap"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeBounds",
fn: function (){
var self=this;
var base,width,height,classListsOrigin,methodOrigin,methodListOrigin,top,listWidth,fullHeight,halfHeight,codeWidth,hierarcyOrigin,classDefOrigin,thirdHeight,twoThirdHeight,thirdListWindowExtent,listWindowExtent,codeWindowExtent,debuggerWidth;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
base=_st(self)._baseWidth();
width=_st(_st(_st(base)._x()).__slash((80))).__star((1.1));
height=_st(_st(_st(base)._y()).__star((1.3)))._asInteger();
codeWidth=_st(_st(width).__star(_st(self)._codeWindowWidth()))._asInteger();
top=_st(_st(height).__star(_st(_st(self)._windowOrigin())._y()))._asInteger();
classListsOrigin=_st(_st(_st(_st(self)._windowOrigin())._x()).__star(width))._asInteger();
fullHeight=_st(_st(self)._codeWindowHeight()).__star(height);
halfHeight=_st(fullHeight).__slash_slash((2));
thirdHeight=_st(fullHeight).__slash_slash((3));
twoThirdHeight=_st((2)).__star(thirdHeight);
listWidth=_st(_st(_st(self)._listWindowWidth()).__star(width))._asInteger();
debuggerWidth=_st((2)).__star(listWidth);
listWindowExtent=_st(listWidth).__at(twoThirdHeight);
thirdListWindowExtent=_st(listWidth).__at(thirdHeight);
codeWindowExtent=_st(codeWidth).__at(fullHeight);
methodOrigin=_st(classListsOrigin).__plus(listWidth);
methodListOrigin=_st(methodOrigin).__plus(codeWidth);
hierarcyOrigin=_st(classListsOrigin).__plus(listWidth);
classDefOrigin=_st(hierarcyOrigin).__plus(listWidth);
$1=self["@bounds"];
_st($1)._at_put_("configurations",_st(_st(classListsOrigin).__at(top))._extent_(thirdListWindowExtent));
_st($1)._at_put_("packages",_st(_st(classListsOrigin).__at(_st(top).__plus(thirdHeight)))._extent_(thirdListWindowExtent));
_st($1)._at_put_("superclasses",_st(_st(hierarcyOrigin).__at(top))._extent_(thirdListWindowExtent));
_st($1)._at_put_("classes",_st(_st(classListsOrigin).__at(_st(top).__plus(twoThirdHeight)))._extent_(_st(listWidth).__at(twoThirdHeight)));
_st($1)._at_put_("subclasses",_st(_st(classListsOrigin).__at(_st(top).__plus(_st(thirdHeight).__plus(fullHeight))))._extent_(thirdListWindowExtent));
_st($1)._at_put_("classDef",_st(_st(classDefOrigin).__at(top))._extent_(_st(_st(codeWidth).__minus(listWidth)).__at(thirdHeight)));
_st($1)._at_put_("method",_st(_st(hierarcyOrigin).__at(_st(top).__plus(thirdHeight)))._extent_(codeWindowExtent));
_st($1)._at_put_("instanceSelectors",_st(_st(_st(hierarcyOrigin).__plus(codeWidth)).__at(top))._extent_(listWindowExtent));
_st($1)._at_put_("classSelectors",_st(_st(_st(_st(hierarcyOrigin).__plus(codeWidth)).__plus(listWidth)).__at(top))._extent_(listWindowExtent));
_st($1)._at_put_("implementors",_st(_st(_st(hierarcyOrigin).__plus(codeWidth)).__at(_st(top).__plus(twoThirdHeight)))._extent_(_st(_st((2)).__star(listWidth)).__at(twoThirdHeight)));
_st($1)._at_put_("debugger",_st(_st(_st(hierarcyOrigin).__plus(codeWidth)).__at(_st(top).__plus(twoThirdHeight)))._extent_(_st(debuggerWidth).__at(twoThirdHeight)));
_st($1)._at_put_("receiver",_st(_st(_st(hierarcyOrigin).__plus(codeWidth)).__at(_st(_st(top).__plus(thirdHeight)).__plus(_st(codeWindowExtent)._y())))._extent_(_st(listWidth).__at(twoThirdHeight)));
_st($1)._at_put_("context",_st(_st(_st(_st(hierarcyOrigin).__plus(codeWidth)).__plus(listWidth)).__at(_st(_st(top).__plus(thirdHeight)).__plus(_st(codeWindowExtent)._y())))._extent_(_st(listWidth).__at(twoThirdHeight)));
_st($1)._at_put_("evaluator",_st(_st(classListsOrigin).__at(_st(_st(top).__plus(thirdHeight)).__plus(_st(codeWindowExtent)._y())))._extent_(_st(codeWidth).__at(twoThirdHeight)));
_st($1)._at_put_("inspector",_st(_st(_st(classListsOrigin).__plus(codeWidth)).__at(_st(_st(top).__plus(thirdHeight)).__plus(_st(codeWindowExtent)._y())))._extent_(_st(codeWidth).__at(twoThirdHeight)));
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"initializeBounds",{base:base,width:width,height:height,classListsOrigin:classListsOrigin,methodOrigin:methodOrigin,methodListOrigin:methodListOrigin,top:top,listWidth:listWidth,fullHeight:fullHeight,halfHeight:halfHeight,codeWidth:codeWidth,hierarcyOrigin:hierarcyOrigin,classDefOrigin:classDefOrigin,thirdHeight:thirdHeight,twoThirdHeight:twoThirdHeight,thirdListWindowExtent:thirdListWindowExtent,listWindowExtent:listWindowExtent,codeWindowExtent:codeWindowExtent,debuggerWidth:debuggerWidth},smalltalk.TDTopezClient.klass)})},
messageSends: ["baseWidth", "*", "/", "x", "asInteger", "y", "codeWindowWidth", "windowOrigin", "codeWindowHeight", "//", "listWindowWidth", "@", "+", "at:put:", "extent:", "-", "yourself"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSessionMap",
fn: function (){
var self=this;
var dict;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
dict=_st($Dictionary())._new();
_st([_st(self)._sessionDescriptionDefault()])._do_((function(sessionDescription){
return smalltalk.withContext(function($ctx2) {
return _st(dict)._at_put_(_st(sessionDescription)._name(),sessionDescription);
}, function($ctx2) {$ctx2.fillBlock({sessionDescription:sessionDescription},$ctx1)})}));
self["@sessionMap"]=dict;
return self}, function($ctx1) {$ctx1.fill(self,"initializeSessionMap",{dict:dict},smalltalk.TDTopezClient.klass)})},
messageSends: ["new", "do:", "at:put:", "name", "sessionDescriptionDefault"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listWindowWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@listWindowWidth"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@listWindowWidth"]=(24);
self["@listWindowWidth"];
} else {
$1;
};
$2=self["@listWindowWidth"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"listWindowWidth",{},smalltalk.TDTopezClient.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listWindowWidth:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listWindowWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"listWindowWidth:",{anInteger:anInteger},smalltalk.TDTopezClient.klass)})},
messageSends: []}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "offsetBounds:",
fn: function (aPoint){
var self=this;
var newBounds;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
newBounds=_st($Dictionary())._new();
_st(self["@bounds"])._keysAndValuesDo_((function(locationName,rectangle){
return smalltalk.withContext(function($ctx2) {
return _st(newBounds)._at_put_(locationName,_st(rectangle)._translateBy_(aPoint));
}, function($ctx2) {$ctx2.fillBlock({locationName:locationName,rectangle:rectangle},$ctx1)})}));
$1=newBounds;
return $1;
}, function($ctx1) {$ctx1.fill(self,"offsetBounds:",{aPoint:aPoint,newBounds:newBounds},smalltalk.TDTopezClient.klass)})},
messageSends: ["new", "keysAndValuesDo:", "at:put:", "translateBy:"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionDescriptionDefault",
fn: function (){
var self=this;
function $OGCustomSessionDescription(){return smalltalk.OGCustomSessionDescription||(typeof OGCustomSessionDescription=="undefined"?nil:OGCustomSessionDescription)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($OGCustomSessionDescription())._new();
_st($2)._name_("3.1.0.2");
_st($2)._gemstoneVersion_("3.1.0.2");
_st($2)._gciLibraryName_("libgcirpc-3.1.0.2-32.so");
_st($2)._adornmentColor_(_st($Color())._lightGreen());
_st($2)._stoneHost_("localhost");
_st($2)._stoneName_("maglev");
_st($2)._gemHost_("localhost");
_st($2)._netLDI_("50378");
_st($2)._gemTask_("gemnetobject");
_st($2)._userId_("DataCurator");
_st($2)._password_("swordfish");
_st($2)._osUserId_("");
_st($2)._osPassword_("");
_st($2)._backupDirectory_("");
_st($2)._dataDirectory_("");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sessionDescriptionDefault",{},smalltalk.TDTopezClient.klass)})},
messageSends: ["name:", "new", "gemstoneVersion:", "gciLibraryName:", "adornmentColor:", "lightGreen", "stoneHost:", "stoneName:", "gemHost:", "netLDI:", "gemTask:", "userId:", "password:", "osUserId:", "osPassword:", "backupDirectory:", "dataDirectory:", "yourself"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionMap",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@sessionMap"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@sessionMap"]=_st($Dictionary())._new();
self["@sessionMap"];
} else {
$1;
};
$2=self["@sessionMap"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"sessionMap",{},smalltalk.TDTopezClient.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionNamed:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@sessionMap"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sessionNamed:",{aString:aString},smalltalk.TDTopezClient.klass)})},
messageSends: ["at:"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowOffset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@windowOffset"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@windowOffset"]=_st((0)).__at((0));
self["@windowOffset"];
} else {
$1;
};
$2=self["@windowOffset"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"windowOffset",{},smalltalk.TDTopezClient.klass)})},
messageSends: ["ifNil:", "@"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowOffset:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@windowOffset"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"windowOffset:",{aPoint:aPoint},smalltalk.TDTopezClient.klass)})},
messageSends: []}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowOrigin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@windowOrigin"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@windowOrigin"]=_st((5)).__at((0.5));
self["@windowOrigin"];
} else {
$1;
};
$2=self["@windowOrigin"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"windowOrigin",{},smalltalk.TDTopezClient.klass)})},
messageSends: ["ifNil:", "@"]}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowOrigin:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@windowOrigin"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"windowOrigin:",{aPoint:aPoint},smalltalk.TDTopezClient.klass)})},
messageSends: []}),
smalltalk.TDTopezClient.klass);


smalltalk.addClass('TDWindowStatus', smalltalk.Object, ['windows', 'namedWindows', 'activeWindowIndex', 'shellWindowCount', 'shellWindows'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "activeWindowIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@activeWindowIndex"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeWindowIndex",{},smalltalk.TDWindowStatus)})},
messageSends: []}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "activeWindowModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self["@activeWindowIndex"]).__lt((1)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@activeWindowIndex"]).__gt(_st(self["@windows"])._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
return nil;
};
$2=_st(_st(self["@windows"])._at_(self["@activeWindowIndex"]))._model();
return $2;
}, function($ctx1) {$ctx1.fill(self,"activeWindowModel",{},smalltalk.TDWindowStatus)})},
messageSends: ["ifTrue:", "or:", ">", "size", "<", "model", "at:"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
function $TodeEditor(){return smalltalk.TodeEditor||(typeof TodeEditor=="undefined"?nil:TodeEditor)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self["@windows"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._notNil();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(window){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(window)._model())._isKindOf_($TodeEditor());
if(smalltalk.assert($1)){
_st(_st(window)._model())._windowIsClosing();
return _st(window)._delete();
};
}, function($ctx2) {$ctx2.fillBlock({window:window},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.TDWindowStatus)})},
messageSends: ["do:", "ifTrue:", "windowIsClosing", "model", "delete", "isKindOf:", "select:", "notNil"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "collapse",
fn: function (){
var self=this;
function $TodeEditor(){return smalltalk.TodeEditor||(typeof TodeEditor=="undefined"?nil:TodeEditor)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self["@windows"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._notNil();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(window){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(window)._model())._isKindOf_($TodeEditor());
if(smalltalk.assert($1)){
return _st(window)._collapse();
};
}, function($ctx2) {$ctx2.fillBlock({window:window},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"collapse",{},smalltalk.TDWindowStatus)})},
messageSends: ["do:", "ifTrue:", "collapse", "isKindOf:", "model", "select:", "notNil"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "expand",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@windows"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._notNil();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(window){
return smalltalk.withContext(function($ctx2) {
return _st(window)._expand();
}, function($ctx2) {$ctx2.fillBlock({window:window},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"expand",{},smalltalk.TDWindowStatus)})},
messageSends: ["do:", "expand", "select:", "notNil"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@windows"]=_st($Array())._new_withAll_((100),nil);
self["@activeWindowIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TDWindowStatus)})},
messageSends: ["new:withAll:"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "namedWindows",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@namedWindows"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@namedWindows"]=_st($Dictionary())._new();
self["@namedWindows"];
} else {
$1;
};
$2=self["@namedWindows"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"namedWindows",{},smalltalk.TDWindowStatus)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "namedWindows:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@namedWindows"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"namedWindows:",{anObject:anObject},smalltalk.TDWindowStatus)})},
messageSends: []}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "nextAvailableWindowId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st((1))._to_do_(_st(self["@windows"])._size(),(function(index){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@windows"])._at_(index);
if(($receiver = $1) == nil || $receiver == undefined){
$2=index;
throw $early=[$2];
} else {
return $1;
};
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
_st(self)._error_("No slots available for windows");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextAvailableWindowId",{},smalltalk.TDWindowStatus)})},
messageSends: ["to:do:", "size", "ifNil:", "at:", "error:"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "nextShellWindowId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@shellWindowCount"]=_st(_st(self)._shellWindowCount()).__plus((1));
$1=self["@shellWindowCount"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextShellWindowId",{},smalltalk.TDWindowStatus)})},
messageSends: ["+", "shellWindowCount"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "registerShellWindow:",
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._shellWindows())._add_(aWindow);
return self}, function($ctx1) {$ctx1.fill(self,"registerShellWindow:",{aWindow:aWindow},smalltalk.TDWindowStatus)})},
messageSends: ["add:", "shellWindows"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "shellWindowCount",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@shellWindowCount"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@shellWindowCount"]=(0);
self["@shellWindowCount"];
} else {
$1;
};
$2=self["@shellWindowCount"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"shellWindowCount",{},smalltalk.TDWindowStatus)})},
messageSends: ["ifNil:"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "shellWindows",
fn: function (){
var self=this;
function $IdentitySet(){return smalltalk.IdentitySet||(typeof IdentitySet=="undefined"?nil:IdentitySet)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@shellWindows"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@shellWindows"]=_st($IdentitySet())._new();
self["@shellWindows"];
} else {
$1;
};
$2=self["@shellWindows"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"shellWindows",{},smalltalk.TDWindowStatus)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "unregisterShellWindow:",
fn: function (aWindow){
var self=this;
var theShell,index;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
theShell=_st(_st(aWindow)._model())._cliShell();
_st(_st(self)._shellWindows())._remove_ifAbsent_(aWindow,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
index=_st(self["@windows"])._indexOf_(aWindow);
$1=_st(index).__gt((0));
if(smalltalk.assert($1)){
_st(self["@windows"])._at_put_(index,nil);
};
_st(self["@windows"])._do_((function(window){
return smalltalk.withContext(function($ctx2) {
$2=_st(window).__tild_tild(nil);
if(smalltalk.assert($2)){
$3=_st(_st(window).__tild_tild(aWindow))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(_st(window)._model())._topez())._shell()).__eq_eq(theShell);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(_st(window)._model())._windowIsClosing();
return _st(window)._delete();
};
};
}, function($ctx2) {$ctx2.fillBlock({window:window},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unregisterShellWindow:",{aWindow:aWindow,theShell:theShell,index:index},smalltalk.TDWindowStatus)})},
messageSends: ["cliShell", "model", "remove:ifAbsent:", "shellWindows", "indexOf:", "ifTrue:", "at:put:", ">", "do:", "windowIsClosing", "delete", "and:", "==", "shell", "topez", "~~"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowActive:",
fn: function (aSystemWindow){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
index=_st(self["@windows"])._indexOf_(aSystemWindow);
$1=_st(index).__eq_eq((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@activeWindowIndex"]=index;
return self}, function($ctx1) {$ctx1.fill(self,"windowActive:",{aSystemWindow:aSystemWindow,index:index},smalltalk.TDWindowStatus)})},
messageSends: ["indexOf:", "ifTrue:", "=="]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowAt:",
fn: function (aWindowId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@windows"])._at_(aWindowId);
return $1;
}, function($ctx1) {$ctx1.fill(self,"windowAt:",{aWindowId:aWindowId},smalltalk.TDWindowStatus)})},
messageSends: ["at:"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowAt:put:",
fn: function (windowId,window){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(window).__eq_eq(nil))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(windowId).__eq_eq(self["@activeWindowIndex"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self["@activeWindowIndex"]=(0);
self["@activeWindowIndex"];
};
_st(self["@windows"])._at_put_(windowId,window);
return self}, function($ctx1) {$ctx1.fill(self,"windowAt:put:",{windowId:windowId,window:window},smalltalk.TDWindowStatus)})},
messageSends: ["ifTrue:", "and:", "==", "at:put:"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowIdNamed:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._namedWindows())._at_ifAbsent_(aSymbol,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._namedWindows())._at_put_(aSymbol,_st(self)._nextAvailableWindowId());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"windowIdNamed:",{aSymbol:aSymbol},smalltalk.TDWindowStatus)})},
messageSends: ["at:ifAbsent:", "at:put:", "nextAvailableWindowId", "namedWindows"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowIsClosing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
$1=_st(_st(_st(self)._shellWindows())._isEmpty())._not();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st(self["@windows"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._notNil();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(window){
return smalltalk.withContext(function($ctx2) {
_st(_st(window)._model())._windowIsClosing();
return _st(window)._delete();
}, function($ctx2) {$ctx2.fillBlock({window:window},$ctx1)})}));
_st(self["@windows"])._detect_ifNone_((function(window){
return smalltalk.withContext(function($ctx2) {
return _st(window)._notNil();
}, function($ctx2) {$ctx2.fillBlock({window:window},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$3=self;
throw $early=[$3];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"windowIsClosing",{},smalltalk.TDWindowStatus)})},
messageSends: ["ifTrue:", "not", "isEmpty", "shellWindows", "do:", "windowIsClosing", "model", "delete", "select:", "notNil", "detect:ifNone:"]}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowNamesAndIds",
fn: function (){
var self=this;
var namesAndIds;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
namesAndIds=_st($OrderedCollection())._new();
_st((1))._to_do_(_st(self["@windows"])._size(),(function(windowId){
var name;
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@windows"])._at_(windowId);
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
var win;
win=$receiver;
name=_st(_st(_st(windowId)._printString()).__comma(". ")).__comma(_st(_st(self)._namedWindows())._keyAtValue_ifAbsent_(windowId,(function(){
return smalltalk.withContext(function($ctx3) {
return "";
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})));
name;
return _st(namesAndIds)._add_(_st(name).__minus_gt([windowId,_st(win)._label()]));
};
}, function($ctx2) {$ctx2.fillBlock({windowId:windowId,name:name},$ctx1)})}));
$2=_st(namesAndIds)._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(a)._value())._at_((2))).__lt_eq(_st(_st(b)._value())._at_((2)));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"windowNamesAndIds",{namesAndIds:namesAndIds},smalltalk.TDWindowStatus)})},
messageSends: ["new", "to:do:", "size", "ifNotNil:", ",", "keyAtValue:ifAbsent:", "namedWindows", "printString", "add:", "->", "label", "at:", "sort:", "<=", "value"]}),
smalltalk.TDWindowStatus);



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



