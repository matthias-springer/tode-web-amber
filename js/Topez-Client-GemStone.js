smalltalk.addPackage('Topez-Client-GemStone');
smalltalk.addClass('TDShell', smalltalk.Object, ['windowStatus', 'topezClient', 'inputStream', 'actionStack', 'promptString', 'shellWindow', 'shellId', 'autoCommit', 'adornmentColor', 'sessionName', 'history', 'historyIndex'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "accumulateText:",
category: 'evaluator engine',
fn: function (line){
var self=this;
var actionArray,result,stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(_st(line)._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(line)._beginsWith_("%");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
$2=self["@inputStream"];
_st($2)._nextPutAll_(line);
$3=_st($2)._cr();
$3;
return "";
};
actionArray=_st(_st(self)._actionStack())._removeLast();
stream=self["@inputStream"];
self["@promptString"]=_st(actionArray)._at_((2));
self["@inputStream"]=_st(actionArray)._at_((1));
$4=_st(_st(_st(actionArray)._at_((3)))._value_(stream))._convertTDEvaluateTokenResponseToText();
return $4;
}, function($ctx1) {$ctx1.fill(self,"accumulateText:",{line:line,actionArray:actionArray,result:result,stream:stream},smalltalk.TDShell)})},
args: ["line"],
source: "accumulateText: line\x0a    | actionArray result stream |\x0a    (line isNil or: [ line beginsWith: '%' ])\x0a        ifFalse: [ \x0a            inputStream\x0a                nextPutAll: line;\x0a                cr.\x0a            ^ '' ].\x0a    actionArray := self actionStack removeLast.\x0a    stream := inputStream.\x0a    promptString := actionArray at: 2.\x0a    inputStream := actionArray at: 1.\x0a    ^ ((actionArray at: 3) value: stream) convertTDEvaluateTokenResponseToText",
messageSends: ["ifFalse:", "nextPutAll:", "cr", "or:", "beginsWith:", "isNil", "removeLast", "actionStack", "at:", "convertTDEvaluateTokenResponseToText", "value:"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "accumulateTextAndDo:",
category: 'evaluator engine',
fn: function (resultBlock){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $WriteStream(){return smalltalk.WriteStream||(typeof WriteStream=="undefined"?nil:WriteStream)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._actionStack())._add_([self["@inputStream"],_st(self)._promptString(),(function(input){
return smalltalk.withContext(function($ctx2) {
_st(self)._exception_(nil);
return _st(resultBlock)._value_(input);
}, function($ctx2) {$ctx2.fillBlock({input:input},$ctx1)})})]);
self["@inputStream"]=_st($WriteStream())._on_(_st($String())._new());
self["@promptString"]="";
return self}, function($ctx1) {$ctx1.fill(self,"accumulateTextAndDo:",{resultBlock:resultBlock},smalltalk.TDShell)})},
args: ["resultBlock"],
source: "accumulateTextAndDo: resultBlock\x0a  self actionStack\x0a    add:\x0a      {inputStream.\x0a      (self promptString).\x0a      [ :input | \x0a      self exception: nil.\x0a      resultBlock value: input ]}.\x0a  inputStream := WriteStream on: String new.\x0a  promptString := ''",
messageSends: ["add:", "promptString", "exception:", "value:", "actionStack", "on:", "new"],
referencedClasses: ["String", "WriteStream"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "accumulateTextAndServerDo:",
category: 'evaluator engine',
fn: function (serverBlockOop){
var self=this;
var messageSend;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($TZGsMessageSend())._new();
_st($1)._topez_(_st(self)._topezClient());
_st($1)._receiver_(_st(_st(self)._topezClient())._topezServerProxy());
_st($1)._selector_("serverTextDo:with:");
_st($1)._arguments_([]);
$2=_st($1)._transform_(_st("native").__minus_gt(nil));
messageSend=$2;
_st(self)._accumulateTextAndDo_((function(doitStream){
return smalltalk.withContext(function($ctx2) {
return _st(messageSend)._valueWithArguments_([_st(_st(self)._session())._asOopType_(serverBlockOop),_st(doitStream)._contents()]);
}, function($ctx2) {$ctx2.fillBlock({doitStream:doitStream},$ctx1)})}));
return nil;
}, function($ctx1) {$ctx1.fill(self,"accumulateTextAndServerDo:",{serverBlockOop:serverBlockOop,messageSend:messageSend},smalltalk.TDShell)})},
args: ["serverBlockOop"],
source: "accumulateTextAndServerDo: serverBlockOop\x0a  | messageSend |\x0a  messageSend := TZGsMessageSend new\x0a    topez: self topezClient;\x0a    receiver: self topezClient topezServerProxy;\x0a    selector: 'serverTextDo:with:';\x0a    arguments: #();\x0a    transform: #'native' -> nil.\x0a  self\x0a    accumulateTextAndDo: [ :doitStream | \x0a      messageSend\x0a        valueWithArguments:\x0a          {(self session asOopType: serverBlockOop).\x0a          (doitStream contents)} ].\x0a  ^ nil",
messageSends: ["topez:", "topezClient", "new", "receiver:", "topezServerProxy", "selector:", "arguments:", "transform:", "->", "accumulateTextAndDo:", "valueWithArguments:", "asOopType:", "session", "contents"],
referencedClasses: ["TZGsMessageSend"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "actionStack",
category: 'evaluator engine',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@actionStack"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@actionStack"]=_st($OrderedCollection())._new();
self["@actionStack"];
} else {
$1;
};
$2=self["@actionStack"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"actionStack",{},smalltalk.TDShell)})},
args: [],
source: "actionStack\x0a    actionStack ifNil: [ actionStack := OrderedCollection new ].\x0a    ^ actionStack",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "addToHistory:",
category: 'evaluator engine',
fn: function (line){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._history())._add_(line);
self["@historyIndex"]=_st(_st(self)._history())._size();
return self}, function($ctx1) {$ctx1.fill(self,"addToHistory:",{line:line},smalltalk.TDShell)})},
args: ["line"],
source: "addToHistory: line\x0a  self history add: line.\x0a  historyIndex := self history size",
messageSends: ["add:", "history", "size"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor",
category: 'evaluator engine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@adornmentColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"adornmentColor",{},smalltalk.TDShell)})},
args: [],
source: "adornmentColor\x0a  ^ adornmentColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "autoCommit",
category: 'evaluator engine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@autoCommit"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@autoCommit"]=true;
self["@autoCommit"];
} else {
$1;
};
$2=self["@autoCommit"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"autoCommit",{},smalltalk.TDShell)})},
args: [],
source: "autoCommit\x0a\x09autoCommit ifNil: [ autoCommit := true ].\x0a\x09^ autoCommit",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "autoCommitDisabled",
category: 'evaluator engine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@autoCommit"]=false;
self["@promptString"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"autoCommitDisabled",{},smalltalk.TDShell)})},
args: [],
source: "autoCommitDisabled\x0a  autoCommit := false.\x0a  promptString := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "builtIns",
category: 'evaluator engine',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["logout", "close", "collapse", "exit", "expand"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"builtIns",{},smalltalk.TDShell)})},
args: [],
source: "builtIns\x0a\x09^ #('logout' 'close' 'collapse' 'exit' 'expand')",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'accessing',
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
args: [],
source: "close\x0a\x09windowStatus ifNil: [ ^ self ].\x0a\x09windowStatus close",
messageSends: ["ifNil:", "close"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "collapse",
category: 'accessing',
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
args: [],
source: "collapse\x0a    windowStatus ifNil: [ ^ self ].\x0a    windowStatus collapse",
messageSends: ["ifNil:", "collapse"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "doEndOfFile",
category: 'stash',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doEndOfFile",{},smalltalk.TDShell)})},
args: [],
source: "doEndOfFile\x0a    \x22EOF character detected.\x22\x0a\x0a    ",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:",
category: 'evaluator engine',
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
args: ["aString"],
source: "evaluate: aString\x0a  [| line stream result |\x0a  stream := aString readStream.\x0a  [ \x0a  line := stream nextLine.\x0a  line ~~ nil ]\x0a    whileTrue: [ \x0a      self actionStack notEmpty\x0a        ifTrue: [ result := self accumulateText: line ]\x0a        ifFalse: [ \x0a          | isolatedCommands |\x0a          self addToHistory: line.\x0a          isolatedCommands := line findTokens: ';'.\x0a          isolatedCommands\x0a            do: [ :isolatedCommand | \x0a              | pipedCommands |\x0a              pipedCommands := isolatedCommand findTokens: '|'.\x0a              pipedCommands\x0a                do: [ :pipedCommand | result := self evaluateCommand: pipedCommand ] ] ] ].\x0a  ^ result ]\x0a    on: Error\x0a    do: [ :ex | \x0a      | errorMessage |\x0a      errorMessage := 'Topez ERROR: ' asText\x0a        ,\x0a          (Text\x0a            string: ex description\x0a            attributes:\x0a              {(TextColor red).\x0a              (TextEmphasis bold)}).\x0a      self class debugMode\x0a        ifTrue: [ self halt: errorMessage asString ].\x0a      self resetStack.\x0a      ^ errorMessage ]",
messageSends: ["on:do:", ",", "string:attributes:", "description", "red", "bold", "asText", "ifTrue:", "halt:", "asString", "debugMode", "class", "resetStack", "readStream", "whileTrue:", "ifTrue:ifFalse:", "accumulateText:", "addToHistory:", "findTokens:", "do:", "evaluateCommand:", "notEmpty", "actionStack", "nextLine", "~~"],
referencedClasses: ["Error", "TextColor", "TextEmphasis", "Text"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateCommand:",
category: 'evaluator engine',
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
args: ["line"],
source: "evaluateCommand: line\x0a  | tokens |\x0a  (line notEmpty and: [ line first = '#' ])\x0a    ifTrue: [ ^ '' ].\x0a  tokens := line trimBoth findTokens: {(Character space)}.\x0a  tokens isEmpty\x0a    ifTrue: [ ^ '' ].\x0a  (self builtIns includes: (tokens at: 1))\x0a    ifTrue: [ ^ self executeBuiltIn: tokens ].\x0a  ^ (self topezClient evaluateTokens: tokens) convertTDEvaluateTokenResponseToText",
messageSends: ["ifTrue:", "and:", "=", "first", "notEmpty", "findTokens:", "space", "trimBoth", "isEmpty", "executeBuiltIn:", "includes:", "at:", "builtIns", "convertTDEvaluateTokenResponseToText", "evaluateTokens:", "topezClient"],
referencedClasses: ["Character"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "exception:",
category: 'evaluator engine',
fn: function (anException){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._topezClient())._exception_(anException);
return self}, function($ctx1) {$ctx1.fill(self,"exception:",{anException:anException},smalltalk.TDShell)})},
args: ["anException"],
source: "exception: anException\x0a    self topezClient exception: anException",
messageSends: ["exception:", "topezClient"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "executeBuiltIn:",
category: 'evaluator engine',
fn: function (tokens){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._perform_(_st(_st(tokens)._at_((1)))._asSymbol());
$1=_st(tokens)._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeBuiltIn:",{tokens:tokens},smalltalk.TDShell)})},
args: ["tokens"],
source: "executeBuiltIn: tokens\x0a    self perform: (tokens at: 1) asSymbol.\x0a    ^ tokens at: 1",
messageSends: ["perform:", "asSymbol", "at:"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "exit",
category: 'session management',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._windowIsClosing();
_st(self)._logout();
return self}, function($ctx1) {$ctx1.fill(self,"exit",{},smalltalk.TDShell)})},
args: [],
source: "exit\x0a    self windowIsClosing.\x0a    self logout",
messageSends: ["windowIsClosing", "logout"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "expand",
category: 'accessing',
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
args: [],
source: "expand\x0a    windowStatus ifNil: [ ^ self ].\x0a    windowStatus expand",
messageSends: ["ifNil:", "expand"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "filterAndForwardEvent:",
category: 'stash',
fn: function (keyboardEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=keyboardEvent;
return $1;
}, function($ctx1) {$ctx1.fill(self,"filterAndForwardEvent:",{keyboardEvent:keyboardEvent},smalltalk.TDShell)})},
args: ["keyboardEvent"],
source: "filterAndForwardEvent: keyboardEvent\x0a    \x22Filter keyboardEvent, taking special action if needed. If a child process\x0a\x09is active, forward keyboardEvent to the child and answer nil. Otherwise\x0a\x09answer keyboardEvent.\x22\x0a\x0a    ^ keyboardEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "history",
category: 'accessing',
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
args: [],
source: "history\x0a\x09history ifNil: [ history := OrderedCollection new ].\x0a\x09^ history",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "history:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@history"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"history:",{anObject:anObject},smalltalk.TDShell)})},
args: ["anObject"],
source: "history: anObject\x0a\x09history := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@historyIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TDShell)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09historyIndex := 0",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "installHistoryEntry:windowMorph:",
category: 'evaluator engine',
fn: function (historyLine,windowMorph){
var self=this;
var editor;
return smalltalk.withContext(function($ctx1) { 
editor=_st(_st(windowMorph)._textMorph())._editor();
_st(editor)._selectInvisiblyFrom_to_(_st(_st(windowMorph)._inputMark()).__plus((1)),_st(_st(windowMorph)._text())._size());
_st(editor)._replaceSelectionWith_(historyLine);
return self}, function($ctx1) {$ctx1.fill(self,"installHistoryEntry:windowMorph:",{historyLine:historyLine,windowMorph:windowMorph,editor:editor},smalltalk.TDShell)})},
args: ["historyLine", "windowMorph"],
source: "installHistoryEntry: historyLine windowMorph: windowMorph\x0a  | editor |\x0a  editor := windowMorph textMorph editor.\x0a  editor\x0a    selectInvisiblyFrom: windowMorph inputMark + 1\x0a    to: windowMorph text size.\x0a  editor replaceSelectionWith: historyLine",
messageSends: ["editor", "textMorph", "selectInvisiblyFrom:to:", "+", "inputMark", "size", "text", "replaceSelectionWith:"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'stash',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("GemStone Shell: ").__comma(_st(self)._sessionName());
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.TDShell)})},
args: [],
source: "label\x0a  ^ 'GemStone Shell: ' , self sessionName",
messageSends: [",", "sessionName"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "logout",
category: 'session management',
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
args: [],
source: "logout\x0a    \x22close windows and clean up session state, if any\x22\x0a\x0a    | tpz |\x0a    self close.\x0a    tpz := self topezClient.\x0a    tpz ifNil: [ ^ self ].\x0a    topezClient := nil.\x0a    tpz logout",
messageSends: ["close", "topezClient", "ifNil:", "logout"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "nextHistory",
category: 'evaluator engine',
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
args: [],
source: "nextHistory\x0a  self history size = 0\x0a    ifTrue: [ ^ self ].\x0a  historyIndex <= 1\x0a    ifTrue: [ historyIndex := 2 ].\x0a  history size + 1 <= historyIndex\x0a    ifTrue: [ self installHistoryEntry: '' windowMorph: self shellWindow paneMorphs first ]\x0a    ifFalse: [ \x0a      self\x0a        installHistoryEntry: (history at: historyIndex)\x0a        windowMorph: self shellWindow paneMorphs first ].\x0a  historyIndex := (historyIndex + 1 max: 1) min: history size + 1",
messageSends: ["ifTrue:", "=", "size", "history", "<=", "ifTrue:ifFalse:", "installHistoryEntry:windowMorph:", "first", "paneMorphs", "shellWindow", "at:", "+", "min:", "max:"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "open:adornmentColor:",
category: 'not yet classified',
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
args: ["aString", "aColorOrNil"],
source: "open: aString adornmentColor: aColorOrNil\x0a  aColorOrNil\x0a    ifNil: [ adornmentColor := (self topezClientClass sessionNamed: aString) adornmentColor ]\x0a    ifNotNil: [ :color | adornmentColor := color ].\x0a  sessionName := aString.\x0a  shellWindow := (TodeConsole todeConsole: self)\x0a    openLabel: self shellId asString , ': ' , self label.\x0a  self windowRegistration.\x0a  ^ shellWindow",
messageSends: ["ifNil:ifNotNil:", "adornmentColor", "sessionNamed:", "topezClientClass", "openLabel:", ",", "label", "asString", "shellId", "todeConsole:", "windowRegistration"],
referencedClasses: ["TodeConsole"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "openTodeDebugger:",
category: 'stash',
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
args: ["aDebuggerLabel"],
source: "openTodeDebugger: aDebuggerLabel\x0a   shellWindow := (TodeDebugConsole todeConsole: self)\x0a    openLabel: self shellId asString , ': ' , aDebuggerLabel.\x0a  self windowRegistration.\x0a  ^ shellWindow",
messageSends: ["openLabel:", ",", "asString", "shellId", "todeConsole:", "windowRegistration"],
referencedClasses: ["TodeDebugConsole"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'stash',
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
args: [],
source: "postCopy\x0a  \x22windowStatus is shared\x22\x0a\x0a  shellId := promptString := actionStack := inputStream := shellWindow := nil.\x0a  topezClient := self topezClient copy\x0a    shell: self;\x0a    topezServerProxy;\x0a    yourself",
messageSends: ["shell:", "copy", "topezClient", "topezServerProxy", "yourself"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "previousHistory",
category: 'evaluator engine',
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
args: [],
source: "previousHistory\x0a  | editor windowMorph |\x0a  self history size = 0\x0a    ifTrue: [ ^ self ].\x0a  historyIndex > history size ifTrue: [ historyIndex := history size].\x0a  self\x0a    installHistoryEntry: (history at: historyIndex)\x0a    windowMorph: self shellWindow paneMorphs first.\x0a  historyIndex := (historyIndex - 1 max: 1) min: history size",
messageSends: ["ifTrue:", "=", "size", "history", ">", "installHistoryEntry:windowMorph:", "at:", "first", "paneMorphs", "shellWindow", "min:", "max:", "-"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "promptString",
category: 'stash',
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
args: [],
source: "promptString\x0a  promptString\x0a    ifNil: [ \x0a      self autoCommit\x0a        ifTrue: [ \x0a          promptString := (Text\x0a            string: 'tode ' , self shellId asString , ' >'\x0a            attribute: TextColor gray)\x0a            , (Text string: ' ' attribute: TextEmphasis normal) ]\x0a        ifFalse: [ \x0a          promptString := (Text\x0a            string: 'tode ' , self shellId asString , ' >'\x0a            attribute: TextColor red)\x0a            , (Text string: ' ' attribute: TextEmphasis normal) ] ].\x0a  ^ promptString",
messageSends: ["ifNil:", "ifTrue:ifFalse:", ",", "string:attribute:", "normal", "asString", "shellId", "gray", "red", "autoCommit"],
referencedClasses: ["TextEmphasis", "Text", "TextColor"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "resetStack",
category: 'evaluator engine',
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
args: [],
source: "resetStack\x0a    | actionArray |\x0a    self actionStack isEmpty\x0a        ifTrue: [ ^ self ].\x0a    actionArray := self actionStack removeFirst.\x0a    promptString := actionArray at: 2.\x0a    inputStream := actionArray at: 1",
messageSends: ["ifTrue:", "isEmpty", "actionStack", "removeFirst", "at:"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
category: 'stash',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._session();
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.TDShell)})},
args: [],
source: "session\x0a  ^ self topez session",
messageSends: ["session", "topez"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionName",
category: 'stash',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sessionName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sessionName",{},smalltalk.TDShell)})},
args: [],
source: "sessionName\x0a  ^ sessionName",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "shellId",
category: 'stash',
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
args: [],
source: "shellId\x0a  shellId ifNil: [ shellId := self windowStatus nextShellWindowId ].\x0a  ^ shellId",
messageSends: ["ifNil:", "nextShellWindowId", "windowStatus"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "shellWindow",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shellWindow"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shellWindow",{},smalltalk.TDShell)})},
args: [],
source: "shellWindow\x0a\x09^ shellWindow",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "spawnDebugger:",
category: 'not yet classified',
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
args: ["aDebuggerLabel"],
source: "spawnDebugger: aDebuggerLabel\x0a\x09| spawn |\x0a\x09spawn := self copy.\x0a\x09spawn openTodeDebugger: aDebuggerLabel.\x0a\x09spawn windowRegistration.\x0a\x09^ spawn topezClient topezServerOop",
messageSends: ["copy", "openTodeDebugger:", "windowRegistration", "topezServerOop", "topezClient"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "spawnWindow",
category: 'not yet classified',
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
args: [],
source: "spawnWindow\x0a\x09| spawn |\x0a\x09spawn := self copy.\x0a\x09spawn open: 'spawned' adornmentColor: self adornmentColor.\x0a\x09spawn windowRegistration.\x0a\x09^ spawn topezClient topezServerOop",
messageSends: ["copy", "open:adornmentColor:", "adornmentColor", "windowRegistration", "topezServerOop", "topezClient"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "tabCompletion:",
category: 'evaluator engine',
fn: function (commandLine){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._tabCompletion_(commandLine);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabCompletion:",{commandLine:commandLine},smalltalk.TDShell)})},
args: ["commandLine"],
source: "tabCompletion: commandLine\x0a  ^ self topez tabCompletion: commandLine",
messageSends: ["tabCompletion:", "topez"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._topezClient();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.TDShell)})},
args: [],
source: "topez\x0a\x09\x22tz compat hack\x22\x0a\x0a\x09^ self topezClient",
messageSends: ["topezClient"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "topezClient",
category: 'accessing',
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
category: 'evaluator engine',
fn: function (){
var self=this;
function $TDTopezClient(){return smalltalk.TDTopezClient||(typeof TDTopezClient=="undefined"?nil:TDTopezClient)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TDTopezClient();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topezClientClass",{},smalltalk.TDShell)})},
args: [],
source: "topezClientClass\x0a  ^ TDTopezClient",
messageSends: [],
referencedClasses: ["TDTopezClient"]
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "windowIsClosing",
category: 'not yet classified',
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
args: [],
source: "windowIsClosing\x0a\x09| status |\x0a\x09windowStatus ifNil: [ ^ self ].\x0a\x09windowStatus unregisterShellWindow: self shellWindow.\x0a\x09status := windowStatus.\x0a\x09windowStatus := nil.\x0a\x09status windowIsClosing.\x0a\x09status shellWindows isEmpty\x0a\x09\x09ifTrue: [ self logout ]",
messageSends: ["ifNil:", "unregisterShellWindow:", "shellWindow", "windowIsClosing", "ifTrue:", "logout", "isEmpty", "shellWindows"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "windowRegistration",
category: 'not yet classified',
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
args: [],
source: "windowRegistration\x0a\x09| windowId |\x0a\x09windowId := windowStatus windowIdNamed: #'shell' , self shellId asString.\x0a\x09windowStatus\x0a\x09\x09windowAt: windowId put: self shellWindow;\x0a\x09\x09registerShellWindow: self shellWindow",
messageSends: ["windowIdNamed:", ",", "asString", "shellId", "windowAt:put:", "shellWindow", "registerShellWindow:"],
referencedClasses: []
}),
smalltalk.TDShell);

smalltalk.addMethod(
smalltalk.method({
selector: "windowStatus",
category: 'not yet classified',
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
args: [],
source: "windowStatus\x0a\x09windowStatus ifNil: [ windowStatus := TDWindowStatus new ].\x0a\x09^ windowStatus",
messageSends: ["ifNil:", "new"],
referencedClasses: ["TDWindowStatus"]
}),
smalltalk.TDShell);


smalltalk.TDShell.klass.iVarNames = ['debugMode','enableDebugger'];
smalltalk.addMethod(
smalltalk.method({
selector: "debugMode",
category: 'not yet classified',
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
args: [],
source: "debugMode\x0a    debugMode ifNil: [ debugMode := false ].\x0a    ^ debugMode",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "debugMode:",
category: 'not yet classified',
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@debugMode"]=aBool;
$1=self["@debugMode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"debugMode:",{aBool:aBool},smalltalk.TDShell.klass)})},
args: ["aBool"],
source: "debugMode: aBool\x0a\x09\x22 TODO: really return value?\x22\x0a    ^ debugMode := aBool",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAdornmentColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._lightYellow();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultAdornmentColor",{},smalltalk.TDShell.klass)})},
args: [],
source: "defaultAdornmentColor\x0a\x09^ Color lightYellow",
messageSends: ["lightYellow"],
referencedClasses: ["Color"]
}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "enableDebugger",
category: 'not yet classified',
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
args: [],
source: "enableDebugger\x0a\x09enableDebugger ifNil: [ enableDebugger := false ].\x0a\x09^ enableDebugger",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "enableDebugger:",
category: 'not yet classified',
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@enableDebugger"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"enableDebugger:",{aBool:aBool},smalltalk.TDShell.klass)})},
args: ["aBool"],
source: "enableDebugger: aBool\x0a\x09enableDebugger := aBool",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open:",
category: 'not yet classified',
fn: function (aSessionName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._open_adornmentColor_(aSessionName,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"open:",{aSessionName:aSessionName},smalltalk.TDShell.klass)})},
args: ["aSessionName"],
source: "open: aSessionName\x0a  ^ self open: aSessionName adornmentColor: nil",
messageSends: ["open:adornmentColor:"],
referencedClasses: []
}),
smalltalk.TDShell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open:adornmentColor:",
category: 'not yet classified',
fn: function (aSessionName,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._open_adornmentColor_(aSessionName,aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"open:adornmentColor:",{aSessionName:aSessionName,aColor:aColor},smalltalk.TDShell.klass)})},
args: ["aSessionName", "aColor"],
source: "open: aSessionName adornmentColor: aColor\x0a  ^ self new open: aSessionName adornmentColor: aColor",
messageSends: ["open:adornmentColor:", "new"],
referencedClasses: []
}),
smalltalk.TDShell.klass);


smalltalk.addClass('TDTopezClient', smalltalk.Object, ['shell', 'session', 'sessionDescription', 'topezServerProxy', 'evaluateTokenMessage', 'setExceptionMessage', 'resetObjInMessage', 'openDebuggerMessage', 'tabCompletionMessage'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "accumulateTextAndServerDo:",
category: 'not yet classified',
fn: function (serverBlockOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._shell())._accumulateTextAndServerDo_(serverBlockOop);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accumulateTextAndServerDo:",{serverBlockOop:serverBlockOop},smalltalk.TDTopezClient)})},
args: ["serverBlockOop"],
source: "accumulateTextAndServerDo: serverBlockOop\x0a  ^ self shell accumulateTextAndServerDo: serverBlockOop",
messageSends: ["accumulateTextAndServerDo:", "shell"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "activeWindowServerModel",
category: 'not yet classified',
fn: function (){
var self=this;
var model,clientElement;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
model=_st(_st(self)._windowStatus())._activeWindowModel();
$1=_st(model).__eq_eq(nil);
if(smalltalk.assert($1)){
return nil;
};
clientElement=_st(_st(model)._activeEditor())._clientElement();
$2=_st(clientElement).__eq_eq(nil);
if(smalltalk.assert($2)){
return nil;
};
$3=_st(clientElement)._clientElementOop();
return $3;
}, function($ctx1) {$ctx1.fill(self,"activeWindowServerModel",{model:model,clientElement:clientElement},smalltalk.TDTopezClient)})},
args: [],
source: "activeWindowServerModel\x0a  | model clientElement |\x0a  model := self windowStatus activeWindowModel.\x0a  model == nil\x0a    ifTrue: [ ^ nil ].\x0a  clientElement := model activeEditor clientElement.\x0a  clientElement == nil\x0a    ifTrue: [ ^ nil ].\x0a  ^ clientElement clientElementOop",
messageSends: ["activeWindowModel", "windowStatus", "ifTrue:", "==", "clientElement", "activeEditor", "clientElementOop"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "adornmentColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._shell())._adornmentColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"adornmentColor",{},smalltalk.TDTopezClient)})},
args: [],
source: "adornmentColor\x0a    ^ self shell adornmentColor",
messageSends: ["adornmentColor", "shell"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "autoCommitDisabled",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._shell())._autoCommitDisabled();
return self}, function($ctx1) {$ctx1.fill(self,"autoCommitDisabled",{},smalltalk.TDTopezClient)})},
args: [],
source: "autoCommitDisabled\x0a  self shell autoCommitDisabled",
messageSends: ["autoCommitDisabled", "shell"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._bounds();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.TDTopezClient)})},
args: [],
source: "bounds\x0a  ^ self class bounds",
messageSends: ["bounds", "class"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "currentWindowId:",
category: 'not yet classified',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st(_st(self)._windowStatus())._windowAt_(anInteger);
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
var window;
window=$receiver;
$3=_st(window)._isActive();
if(! smalltalk.assert($3)){
$4=window;
_st($4)._expand();
$5=_st($4)._makeSecondTopmost();
$5;
};
$1=window;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentWindowId:",{anInteger:anInteger},smalltalk.TDTopezClient)})},
args: ["anInteger"],
source: "currentWindowId: anInteger\x0a  ^ (self windowStatus windowAt: anInteger)\x0a    ifNotNil: [ :window | \x0a      window isActive\x0a        ifFalse: [ \x0a          window\x0a            expand;\x0a            makeSecondTopmost ].\x0a      window ]",
messageSends: ["ifNotNil:", "ifFalse:", "expand", "makeSecondTopmost", "isActive", "windowAt:", "windowStatus"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "dbContinue:",
category: 'not yet classified',
fn: function (processOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._handleDebugExceptionsDuring_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._continue_(_st(_st(self)._session())._asOopType_(processOop));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dbContinue:",{processOop:processOop},smalltalk.TDTopezClient)})},
args: ["processOop"],
source: "dbContinue: processOop\x0a  ^ self\x0a    handleDebugExceptionsDuring: [ self session continue: (self session asOopType: processOop) ]",
messageSends: ["handleDebugExceptionsDuring:", "continue:", "asOopType:", "session"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "dbStep:forProcessOop:",
category: 'not yet classified',
fn: function (level,processOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._handleDebugExceptionsDuring_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._stepWith_level_(_st(_st(self)._session())._asOopType_(processOop),level);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dbStep:forProcessOop:",{level:level,processOop:processOop},smalltalk.TDTopezClient)})},
args: ["level", "processOop"],
source: "dbStep: level forProcessOop: processOop\x0a  ^ self\x0a    handleDebugExceptionsDuring: [ self session stepWith: (self session asOopType: processOop) level: level ]",
messageSends: ["handleDebugExceptionsDuring:", "stepWith:level:", "asOopType:", "session"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "editElement:aspect:label:inWindow:at:",
category: 'not yet classified',
fn: function (aClientElement,aspectSelector,labelString,windowIdOrNil,windowLocation){
var self=this;
var windowId,label,newWindow,win,selectedIndex;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
$1=windowIdOrNil;
if(($receiver = $1) == nil || $receiver == undefined){
windowId=_st(self)._nextAvailableWindowId();
windowId=windowId;
} else {
windowId=$1;
};
$2=_st(windowId).__eq_eq((0));
if(smalltalk.assert($2)){
windowId=_st(self)._nextAvailableWindowId();
windowId;
};
_st(self)._currentWindowId_(windowId);
label=labelString;
newWindow=_st(_st(_st(self)._windowStatus())._windowAt_(windowId))._isNil();
win=_st(self)._editorWindowAt_(windowId);
$3=_st(win)._model();
_st($3)._perform_(aspectSelector);
_st($3)._clientElement_(aClientElement);
_st($3)._windowId_(windowId);
$4=_st($3)._label_(label);
$5=newWindow;
if(smalltalk.assert($5)){
var bounds;
bounds=_st(_st(self)._bounds())._at_ifAbsent_(windowLocation,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._error_(_st("Unknown window location: ").__comma(_st(windowLocation)._printString()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
bounds;
$6=win;
_st($6)._extent_(_st(bounds)._extent());
$7=_st($6)._position_(_st(bounds)._origin());
$7;
};
selectedIndex=_st(aClientElement)._selectedIndex();
$8=selectedIndex;
if(($receiver = $8) == nil || $receiver == undefined){
selectedIndex=(0);
selectedIndex;
} else {
$8;
};
_st(_st(win)._model())._listIndex_(selectedIndex);
$9=_st(selectedIndex).__eq_eq((0));
if(smalltalk.assert($9)){
$10=_st(aClientElement)._highlightedIndex();
if(($receiver = $10) == nil || $receiver == undefined){
$10;
} else {
var highlightedIndex;
highlightedIndex=$receiver;
$11=_st(highlightedIndex).__gt((0));
if(smalltalk.assert($11)){
_st(_st(win)._model())._setListIndex_(highlightedIndex);
};
};
};
_st(aClientElement)._activateElement();
$12=windowId;
return $12;
}, function($ctx1) {$ctx1.fill(self,"editElement:aspect:label:inWindow:at:",{aClientElement:aClientElement,aspectSelector:aspectSelector,labelString:labelString,windowIdOrNil:windowIdOrNil,windowLocation:windowLocation,windowId:windowId,label:label,newWindow:newWindow,win:win,selectedIndex:selectedIndex},smalltalk.TDTopezClient)})},
args: ["aClientElement", "aspectSelector", "labelString", "windowIdOrNil", "windowLocation"],
source: "editElement: aClientElement aspect: aspectSelector label: labelString inWindow: windowIdOrNil at: windowLocation\x0a  | windowId label newWindow win selectedIndex |\x0a  windowId := windowIdOrNil ifNil: [ windowId := self nextAvailableWindowId ].\x0a  windowId == 0\x0a    ifTrue: [ windowId := self nextAvailableWindowId ].\x0a  self currentWindowId: windowId.\x0a  label := labelString.\x0a  newWindow := (self windowStatus windowAt: windowId) isNil.\x0a  (win := self editorWindowAt: windowId) model\x0a    perform: aspectSelector;\x0a    clientElement: aClientElement;\x0a    windowId: windowId;\x0a    label: label.\x0a  newWindow\x0a    ifTrue: [ \x0a      | bounds |\x0a      bounds := self bounds\x0a        at: windowLocation\x0a        ifAbsent: [ self error: 'Unknown window location: ' , windowLocation printString ].\x0a      win\x0a        extent: bounds extent;\x0a        position: bounds origin ].\x0a  selectedIndex := aClientElement selectedIndex.\x0a  selectedIndex ifNil: [ selectedIndex := 0 ].\x0a  win model listIndex: selectedIndex.\x0a  selectedIndex == 0\x0a    ifTrue: [ \x0a      aClientElement highlightedIndex\x0a        ifNotNil: [ :highlightedIndex | \x0a          highlightedIndex > 0\x0a            ifTrue: [ win model setListIndex: highlightedIndex ] ] ].\x0a  aClientElement activateElement.\x0a  ^ windowId",
messageSends: ["ifNil:", "nextAvailableWindowId", "ifTrue:", "==", "currentWindowId:", "isNil", "windowAt:", "windowStatus", "perform:", "model", "editorWindowAt:", "clientElement:", "windowId:", "label:", "at:ifAbsent:", "error:", ",", "printString", "bounds", "extent:", "extent", "position:", "origin", "selectedIndex", "listIndex:", "ifNotNil:", "setListIndex:", ">", "highlightedIndex", "activateElement"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "editStonElement:",
category: 'not yet classified',
fn: function (aStonString){
var self=this;
var clientElement,aWindowId;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
clientElement=_st($STON())._fromString_(aStonString);
_st(clientElement)._topez_(self);
aWindowId=_st(clientElement)._editorWindowId();
$1=_st(_st(aWindowId).__eq_eq(nil))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(clientElement)._editorWindowName()).__tild_tild(nil);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
aWindowId=_st(self)._windowIdNamed_(_st(clientElement)._editorWindowName());
aWindowId;
};
$2=_st(self)._editElement_aspect_label_inWindow_at_(clientElement,_st(clientElement)._editorAspectSelector(),_st(clientElement)._editorWindowLabel(),aWindowId,_st(clientElement)._editorWindowLocation());
return $2;
}, function($ctx1) {$ctx1.fill(self,"editStonElement:",{aStonString:aStonString,clientElement:clientElement,aWindowId:aWindowId},smalltalk.TDTopezClient)})},
args: ["aStonString"],
source: "editStonElement: aStonString\x0a  | clientElement aWindowId |\x0a  clientElement := STON fromString: aStonString.\x0a  clientElement topez: self.\x0a  aWindowId := clientElement editorWindowId.\x0a  (aWindowId == nil and: [ clientElement editorWindowName ~~ nil ])\x0a    ifTrue: [ aWindowId := self windowIdNamed: clientElement editorWindowName ].\x0a  ^ self\x0a    editElement: clientElement\x0a    aspect: clientElement editorAspectSelector\x0a    label: clientElement editorWindowLabel\x0a    inWindow: aWindowId\x0a    at: clientElement editorWindowLocation",
messageSends: ["fromString:", "topez:", "editorWindowId", "ifTrue:", "windowIdNamed:", "editorWindowName", "and:", "~~", "==", "editElement:aspect:label:inWindow:at:", "editorAspectSelector", "editorWindowLabel", "editorWindowLocation"],
referencedClasses: ["STON"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "editorWindowAt:",
category: 'not yet classified',
fn: function (windowId){
var self=this;
var editorWindow;
function $TodeEditor(){return smalltalk.TodeEditor||(typeof TodeEditor=="undefined"?nil:TodeEditor)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
editorWindow=_st(_st(self)._windowStatus())._windowAt_(windowId);
$1=editorWindow;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st($TodeEditor())._new();
_st($2)._topez_(self);
$3=_st($2)._open();
editorWindow=$3;
editorWindow;
_st(_st(self)._windowStatus())._windowAt_put_(windowId,editorWindow);
} else {
$1;
};
$4=editorWindow;
return $4;
}, function($ctx1) {$ctx1.fill(self,"editorWindowAt:",{windowId:windowId,editorWindow:editorWindow},smalltalk.TDTopezClient)})},
args: ["windowId"],
source: "editorWindowAt: windowId\x0a  | editorWindow |\x0a  (editorWindow := self windowStatus windowAt: windowId)\x0a    ifNil: [ \x0a      editorWindow := TodeEditor new\x0a        topez: self;\x0a        open.\x0a      self windowStatus windowAt: windowId put: editorWindow ].\x0a  ^ editorWindow",
messageSends: ["ifNil:", "topez:", "new", "open", "windowAt:put:", "windowStatus", "windowAt:"],
referencedClasses: ["TodeEditor"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "environmentId",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"environmentId",{},smalltalk.TDTopezClient)})},
args: [],
source: "environmentId\x0a  ^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateTokenMessage",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@evaluateTokenMessage"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st($TZGsMessageSend())._new();
_st($2)._topez_(self);
_st($2)._receiver_(_st(_st(self)._session())._asOopType_(_st(self)._topezServerOop()));
_st($2)._selector_("evaluateSTONTokens:");
_st($2)._arguments_([]);
$3=_st($2)._transform_(_st("native").__minus_gt(nil));
self["@evaluateTokenMessage"]=$3;
self["@evaluateTokenMessage"];
} else {
$1;
};
$4=self["@evaluateTokenMessage"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"evaluateTokenMessage",{},smalltalk.TDTopezClient)})},
args: [],
source: "evaluateTokenMessage\x0a  evaluateTokenMessage\x0a    ifNil: [ \x0a      evaluateTokenMessage := TZGsMessageSend new\x0a        topez: self;\x0a        receiver: (self session asOopType: self topezServerOop);\x0a        selector: 'evaluateSTONTokens:';\x0a        arguments: #();\x0a        transform: #'native' -> nil ].\x0a  ^ evaluateTokenMessage",
messageSends: ["ifNil:", "topez:", "new", "receiver:", "asOopType:", "topezServerOop", "session", "selector:", "arguments:", "transform:", "->"],
referencedClasses: ["TZGsMessageSend"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateTokens:",
category: 'not yet classified',
fn: function (tokens){
var self=this;
var stonString;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
stonString=_st($STON())._toString_(tokens);
$1=_st(_st(self)._session())._executeStringExpectingStringNB_envId_(_st(_st(_st(_st(_st("(").__comma(_st(self)._todeServerAccessString())).__comma(" for: ")).__comma(_st(_st(_st(self)._shell())._shellId())._asString())).__comma(") evaluateSTONTokens:")).__comma(_st(stonString)._printString()),_st(self)._environmentId());
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluateTokens:",{tokens:tokens,stonString:stonString},smalltalk.TDTopezClient)})},
args: ["tokens"],
source: "evaluateTokens: tokens\x0a  | stonString |\x0a  stonString := STON toString: tokens.\x0a  ^ self session\x0a    executeStringExpectingStringNB:\x0a      '(' , self todeServerAccessString , ' for: ' , self shell shellId asString\x0a        , ') evaluateSTONTokens:' , stonString printString\x0a    envId: self environmentId",
messageSends: ["toString:", "executeStringExpectingStringNB:envId:", ",", "printString", "asString", "shellId", "shell", "todeServerAccessString", "environmentId", "session"],
referencedClasses: ["STON"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluator",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluator",{},smalltalk.TDTopezClient)})},
args: [],
source: "evaluator\x0a    ^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "exception:",
category: 'not yet classified',
fn: function (anException){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._exception_context_(anException,nil);
return self}, function($ctx1) {$ctx1.fill(self,"exception:",{anException:anException},smalltalk.TDTopezClient)})},
args: ["anException"],
source: "exception: anException\x0a  self exception: anException context: nil",
messageSends: ["exception:context:"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "exception:context:",
category: 'not yet classified',
fn: function (anException,context){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._setExceptionMessage())._valueWithArguments_([anException,context]);
return self}, function($ctx1) {$ctx1.fill(self,"exception:context:",{anException:anException,context:context},smalltalk.TDTopezClient)})},
args: ["anException", "context"],
source: "exception: anException context: context\x0a  self setExceptionMessage\x0a    valueWithArguments:\x0a      {anException.\x0a      context}",
messageSends: ["valueWithArguments:", "setExceptionMessage"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "handleDebugExceptionsDuring:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
var result;
function $GsErrorNotification(){return smalltalk.GsErrorNotification||(typeof GsErrorNotification=="undefined"?nil:GsErrorNotification)}
function $GsHaltNotification(){return smalltalk.GsHaltNotification||(typeof GsHaltNotification=="undefined"?nil:GsHaltNotification)}
function $GsBreakpointNotification(){return smalltalk.GsBreakpointNotification||(typeof GsBreakpointNotification=="undefined"?nil:GsBreakpointNotification)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
var $early={};
try {
_st((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(aBlock)._value();
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_(_st(_st($GsBreakpointNotification()).__comma($GsHaltNotification())).__comma($GsErrorNotification()),(function(ex){
var errorNumber,gciErrorClass;
return smalltalk.withContext(function($ctx2) {
$1=_st(ex)._isKindOf_($GsErrorNotification());
if(smalltalk.assert($1)){
throw $early=["error"];
};
gciErrorClass=_st(_st(_st(self)._session())._library())._gciErrSTypeClass();
gciErrorClass;
errorNumber=_st(ex)._errorNumber();
errorNumber;
$2=_st(errorNumber).__eq((6002));
if(smalltalk.assert($2)){
throw $early=["singleStep"];
};
$3=_st(errorNumber).__eq((6005));
if(smalltalk.assert($3)){
throw $early=["breakpoint"];
};
$4=_st(errorNumber).__eq(_st(gciErrorClass)._errHalt());
if(smalltalk.assert($4)){
throw $early=["halt"];
};
$5=_st(errorNumber).__eq((6006));
if(smalltalk.assert($5)){
throw $early=["blockOrMethodReturn"];
};
return _st(self)._error_("another breakpoint error number?");
}, function($ctx2) {$ctx2.fillBlock({ex:ex,errorNumber:errorNumber,gciErrorClass:gciErrorClass},$ctx1)})}));
$6=result;
return $6;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"handleDebugExceptionsDuring:",{aBlock:aBlock,result:result},smalltalk.TDTopezClient)})},
args: ["aBlock"],
source: "handleDebugExceptionsDuring: aBlock\x0a  \x22if you make changes here (like adding new return values), see TDDebugTool>>debugExceptionSymbols\x22\x0a\x0a  | result |\x0a  [ result := aBlock value ]\x0a    on: GsBreakpointNotification , GsHaltNotification , GsErrorNotification\x0a    do: [ :ex | \x0a      | errorNumber gciErrorClass |\x0a      (ex isKindOf: GsErrorNotification)\x0a        ifTrue: [ \x0a          \x22error occurred during execution\x22\x0a          ^ #'error' ].\x0a      gciErrorClass := self session library gciErrSTypeClass.\x0a      errorNumber := ex errorNumber.\x0a      errorNumber = 6002\x0a        ifTrue: [ \x0a          \x22single step breakpoint ... as expected\x22\x0a          ^ #'singleStep' ].\x0a      errorNumber = 6005\x0a        ifTrue: [ \x0a          \x22method breakpoint\x22\x0a          ^ #'breakpoint' ].\x0a      errorNumber = gciErrorClass errHalt\x0a        ifTrue: [ \x0a          \x22halt occurred during execution\x22\x0a          ^ #'halt' ].\x0a      errorNumber = 6006\x0a        ifTrue: [ \x0a          \x22return from method or block breakpoint ... as expected\x22\x0a          ^ #'blockOrMethodReturn' ].\x0a      self error: 'another breakpoint error number?' ].\x0a  ^ result",
messageSends: ["on:do:", ",", "ifTrue:", "isKindOf:", "gciErrSTypeClass", "library", "session", "errorNumber", "=", "errHalt", "error:", "value"],
referencedClasses: ["GsErrorNotification", "GsHaltNotification", "GsBreakpointNotification"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "informWarning:",
category: 'not yet classified',
fn: function (aDescription){
var self=this;
var answer,process;
function $UIManager(){return smalltalk.UIManager||(typeof UIManager=="undefined"?nil:UIManager)}
function $Processor(){return smalltalk.Processor||(typeof Processor=="undefined"?nil:Processor)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
answer=_st(_st($UIManager())._default())._confirm_trueChoice_falseChoice_cancelChoice_default_(aDescription,"Proceed","Abort","Debug",false);
$1=answer;
if(($receiver = $1) == nil || $receiver == undefined){
return "debug";
} else {
$1;
};
$2=answer;
if(smalltalk.assert($2)){
return "resume";
};
process=_st($Processor())._activeProcess();
_st(_st($UIManager())._default())._spawnNewProcessIfThisIsUI_(process);
_st(process)._terminate();
return self}, function($ctx1) {$ctx1.fill(self,"informWarning:",{aDescription:aDescription,answer:answer,process:process},smalltalk.TDTopezClient)})},
args: ["aDescription"],
source: "informWarning: aDescription\x0a  | answer process |\x0a  answer := UIManager default\x0a    confirm: aDescription\x0a    trueChoice: 'Proceed'\x0a    falseChoice: 'Abort'\x0a    cancelChoice: 'Debug'\x0a    default: false.\x0a  answer ifNil: [ ^ #'debug' ].\x0a  answer\x0a    ifTrue: [ ^ #'resume' ].\x0a  process := Processor activeProcess.\x0a  UIManager default spawnNewProcessIfThisIsUI: process.\x0a  process terminate",
messageSends: ["confirm:trueChoice:falseChoice:cancelChoice:default:", "default", "ifNil:", "ifTrue:", "activeProcess", "spawnNewProcessIfThisIsUI:", "terminate"],
referencedClasses: ["UIManager", "Processor"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "login",
category: 'not yet classified',
fn: function (){
var self=this;
var desc,sess;
function $TZGemStoneProxyBehavior(){return smalltalk.TZGemStoneProxyBehavior||(typeof TZGemStoneProxyBehavior=="undefined"?nil:TZGemStoneProxyBehavior)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
_st($TZGemStoneProxyBehavior())._resetAllGlobalNames();
desc=_st(self)._sessionDescription();
$1=_st(_st(self)._todeSessionClass())._new();
_st($1)._topez_(self);
$2=_st($1)._yourself();
sess=$2;
$3=_st(sess)._loginWith_(_st(self)._sessionDescription());
if(! smalltalk.assert($3)){
var gciError,messageText;
gciError=_st(sess)._getAndClearLastError();
gciError;
messageText=_st(gciError)._message();
messageText;
$4=_st($Error())._signal_(_st(messageText).__comma(" For further information about login failures, check the gem log file"));
return $4;
};
$5=sess;
return $5;
}, function($ctx1) {$ctx1.fill(self,"login",{desc:desc,sess:sess},smalltalk.TDTopezClient)})},
args: [],
source: "login\x0a  | desc sess |\x0a  TZGemStoneProxyBehavior resetAllGlobalNames.\x09\x22reset the cache on login\x22\x0a  desc := self sessionDescription.\x0a  sess := self todeSessionClass new\x0a    topez: self;\x0a    yourself.\x0a  (sess loginWith: self sessionDescription)\x0a    ifFalse: [ \x0a      | gciError messageText |\x0a      gciError := sess getAndClearLastError.\x0a      messageText := gciError message.\x0a      ^ Error\x0a        signal:\x0a          messageText\x0a            ,\x0a              ' For further information about login failures, check the gem log file' ].\x0a  ^ sess",
messageSends: ["resetAllGlobalNames", "sessionDescription", "topez:", "new", "todeSessionClass", "yourself", "ifFalse:", "getAndClearLastError", "message", "signal:", ",", "loginWith:"],
referencedClasses: ["TZGemStoneProxyBehavior", "Error"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "logout",
category: 'not yet classified',
fn: function (){
var self=this;
var sess;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@session"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
sess=self["@session"];
self["@session"]=nil;
_st(sess)._logout();
return self}, function($ctx1) {$ctx1.fill(self,"logout",{sess:sess},smalltalk.TDTopezClient)})},
args: [],
source: "logout\x0a    | sess |\x0a    session ifNil: [ ^ self ].\x0a    sess := session.\x0a    session := nil.\x0a    sess logout",
messageSends: ["ifNil:", "logout"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "nextAvailableWindowId",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._windowStatus())._nextAvailableWindowId();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextAvailableWindowId",{},smalltalk.TDTopezClient)})},
args: [],
source: "nextAvailableWindowId\x0a    ^ self windowStatus nextAvailableWindowId",
messageSends: ["nextAvailableWindowId", "windowStatus"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "openDebugger",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._openDebuggerMessage())._value();
return self}, function($ctx1) {$ctx1.fill(self,"openDebugger",{},smalltalk.TDTopezClient)})},
args: [],
source: "openDebugger\x0a  self openDebuggerMessage value",
messageSends: ["value", "openDebuggerMessage"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "openDebuggerMessage",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@openDebuggerMessage"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st($TZGsMessageSend())._new();
_st($2)._topez_(self);
_st($2)._receiver_(_st(_st(self)._session())._asOopType_(_st(self)._topezServerOop()));
_st($2)._selector_("openDebugger");
_st($2)._arguments_([]);
$3=_st($2)._transform_(_st("raw").__minus_gt(nil));
self["@openDebuggerMessage"]=$3;
self["@openDebuggerMessage"];
} else {
$1;
};
$4=self["@openDebuggerMessage"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"openDebuggerMessage",{},smalltalk.TDTopezClient)})},
args: [],
source: "openDebuggerMessage\x0a  openDebuggerMessage\x0a    ifNil: [ \x0a      openDebuggerMessage := TZGsMessageSend new\x0a        topez: self;\x0a        receiver: (self session asOopType: self topezServerOop);\x0a        selector: 'openDebugger';\x0a        arguments: #();\x0a        transform: #'raw' -> nil ].\x0a  ^ openDebuggerMessage",
messageSends: ["ifNil:", "topez:", "new", "receiver:", "asOopType:", "topezServerOop", "session", "selector:", "arguments:", "transform:", "->"],
referencedClasses: ["TZGsMessageSend"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@resetObjInMessage"]=nil;
self["@setExceptionMessage"]=self["@resetObjInMessage"];
self["@evaluateTokenMessage"]=self["@setExceptionMessage"];
self["@topezServerProxy"]=self["@evaluateTokenMessage"];
self["@shell"]=self["@topezServerProxy"];
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.TDTopezClient)})},
args: [],
source: "postCopy\x0a  \x22only the session is shared on copy\x22\x0a\x0a  shell := topezServerProxy := evaluateTokenMessage := setExceptionMessage := resetObjInMessage := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "resetAllGlobalNames",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGemStoneProxyBehavior(){return smalltalk.TZGemStoneProxyBehavior||(typeof TZGemStoneProxyBehavior=="undefined"?nil:TZGemStoneProxyBehavior)}
return smalltalk.withContext(function($ctx1) { 
_st($TZGemStoneProxyBehavior())._resetAllGlobalNames();
return nil;
}, function($ctx1) {$ctx1.fill(self,"resetAllGlobalNames",{},smalltalk.TDTopezClient)})},
args: [],
source: "resetAllGlobalNames\x0a  TZGemStoneProxyBehavior resetAllGlobalNames.\x0a  ^ nil",
messageSends: ["resetAllGlobalNames"],
referencedClasses: ["TZGemStoneProxyBehavior"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "resetObjIn",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._resetObjInMessage())._value();
return self}, function($ctx1) {$ctx1.fill(self,"resetObjIn",{},smalltalk.TDTopezClient)})},
args: [],
source: "resetObjIn\x0a    self resetObjInMessage value",
messageSends: ["value", "resetObjInMessage"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "resetObjInMessage",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@resetObjInMessage"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st($TZGsMessageSend())._new();
_st($2)._topez_(self);
_st($2)._receiver_(_st(_st(self)._session())._asOopType_(_st(self)._topezServerOop()));
_st($2)._selector_("resetObjIn");
_st($2)._arguments_([]);
$3=_st($2)._transform_(_st("raw").__minus_gt(nil));
self["@resetObjInMessage"]=$3;
self["@resetObjInMessage"];
} else {
$1;
};
$4=self["@resetObjInMessage"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"resetObjInMessage",{},smalltalk.TDTopezClient)})},
args: [],
source: "resetObjInMessage\x0a  resetObjInMessage\x0a    ifNil: [ \x0a      resetObjInMessage := TZGsMessageSend new\x0a        topez: self;\x0a        receiver: (self session asOopType: self topezServerOop);\x0a        selector: 'resetObjIn';\x0a        arguments: #();\x0a        transform: #'raw' -> nil ].\x0a  ^ resetObjInMessage",
messageSends: ["ifNil:", "topez:", "new", "receiver:", "asOopType:", "topezServerOop", "session", "selector:", "arguments:", "transform:", "->"],
referencedClasses: ["TZGsMessageSend"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@session"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@session"]=_st(self)._login();
self["@session"];
_st(self)._topezServerProxy();
} else {
$1;
};
$2=self["@session"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.TDTopezClient)})},
args: [],
source: "session\x0a  session\x0a    ifNil: [ \x0a      session := self login.\x0a      self topezServerProxy ].\x0a  ^ session",
messageSends: ["ifNil:", "login", "topezServerProxy"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionDescription",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@sessionDescription"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@sessionDescription"]=_st(_st(self)._class())._sessionNamed_(_st(_st(self)._shell())._sessionName());
self["@sessionDescription"];
} else {
$1;
};
$2=self["@sessionDescription"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"sessionDescription",{},smalltalk.TDTopezClient)})},
args: [],
source: "sessionDescription\x0a  sessionDescription\x0a    ifNil: [ sessionDescription := self class sessionNamed: self shell sessionName ].\x0a  ^ sessionDescription",
messageSends: ["ifNil:", "sessionNamed:", "sessionName", "shell", "class"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionDescription:",
category: 'not yet classified',
fn: function (aSessionDescription){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sessionDescription"]=aSessionDescription;
return self}, function($ctx1) {$ctx1.fill(self,"sessionDescription:",{aSessionDescription:aSessionDescription},smalltalk.TDTopezClient)})},
args: ["aSessionDescription"],
source: "sessionDescription: aSessionDescription\x0a    sessionDescription := aSessionDescription",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "setExceptionMessage",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@setExceptionMessage"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st($TZGsMessageSend())._new();
_st($2)._topez_(self);
_st($2)._receiver_(_st(_st(self)._session())._asOopType_(_st(self)._topezServerOop()));
_st($2)._selector_("exception:process:");
_st($2)._arguments_([]);
$3=_st($2)._transform_(_st("raw").__minus_gt(nil));
self["@setExceptionMessage"]=$3;
self["@setExceptionMessage"];
} else {
$1;
};
$4=self["@setExceptionMessage"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"setExceptionMessage",{},smalltalk.TDTopezClient)})},
args: [],
source: "setExceptionMessage\x0a  setExceptionMessage\x0a    ifNil: [ \x0a      setExceptionMessage := TZGsMessageSend new\x0a        topez: self;\x0a        receiver: (self session asOopType: self topezServerOop);\x0a        selector: 'exception:process:';\x0a        arguments: #();\x0a        transform: #'raw' -> nil ].\x0a  ^ setExceptionMessage",
messageSends: ["ifNil:", "topez:", "new", "receiver:", "asOopType:", "topezServerOop", "session", "selector:", "arguments:", "transform:", "->"],
referencedClasses: ["TZGsMessageSend"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "setFindText:isRegex:",
category: 'not yet classified',
fn: function (aStringOrText,isRegex){
var self=this;
var findText,colonPosition,service;
function $FindReplaceService(){return smalltalk.FindReplaceService||(typeof FindReplaceService=="undefined"?nil:FindReplaceService)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $WriteStream(){return smalltalk.WriteStream||(typeof WriteStream=="undefined"?nil:WriteStream)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
findText=aStringOrText;
service=_st($FindReplaceService())._default();
$1=isRegex;
if(smalltalk.assert($1)){
_st(service)._findText_isRegex_(findText,true);
} else {
colonPosition=_st(aStringOrText)._indexOf_(":");
$2=_st(colonPosition).__gt((0));
if(smalltalk.assert($2)){
var pattern,specials;
pattern=_st($WriteStream())._on_(_st($String())._new());
pattern;
specials="^$:\x5c+*[]()";
specials;
_st(_st(aStringOrText)._keywords())._do_separatedBy_((function(arg){
var convertedArg;
return smalltalk.withContext(function($ctx2) {
convertedArg=_st($String())._streamContents_((function(s){
return smalltalk.withContext(function($ctx3) {
return _st(arg)._do_((function(c){
return smalltalk.withContext(function($ctx4) {
$3=_st(specials)._includes_(c);
if(smalltalk.assert($3)){
_st(s)._nextPut_("\x5c");
};
return _st(s)._nextPut_(c);
}, function($ctx4) {$ctx4.fillBlock({c:c},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({s:s},$ctx1)})}));
convertedArg;
return _st(pattern)._nextPutAll_(convertedArg);
}, function($ctx2) {$ctx2.fillBlock({arg:arg,convertedArg:convertedArg},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(pattern)._nextPutAll_("[^:]+");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(service)._findText_isRegex_(_st(pattern)._contents(),true);
} else {
_st(service)._findText_isRegex_(findText,false);
};
};
_st(service)._changed_("newFinding");
return self}, function($ctx1) {$ctx1.fill(self,"setFindText:isRegex:",{aStringOrText:aStringOrText,isRegex:isRegex,findText:findText,colonPosition:colonPosition,service:service},smalltalk.TDTopezClient)})},
args: ["aStringOrText", "isRegex"],
source: "setFindText: aStringOrText isRegex: isRegex\x0a  | findText colonPosition service |\x0a  findText := aStringOrText.\x0a  service := FindReplaceService default.\x0a  isRegex\x0a    ifTrue: [ service findText: findText isRegex: true ]\x0a    ifFalse: [ \x0a      (colonPosition := aStringOrText indexOf: ':') > 0\x0a        ifTrue: [ \x0a          | pattern specials |\x0a          pattern := WriteStream on: String new.\x0a          specials := '^$:\x5c+*[]()'.\x0a          aStringOrText keywords\x0a            do: [ :arg | \x0a              | convertedArg |\x0a              convertedArg := String\x0a                streamContents: [ :s | \x0a                  arg\x0a                    do: [ :c | \x0a                      (specials includes: c)\x0a                        ifTrue: [ s nextPut: '\x5c' ].\x0a                      s nextPut: c ] ].\x0a              pattern nextPutAll: convertedArg ]\x0a            separatedBy: [ pattern nextPutAll: '[^:]+' ].\x0a          service findText: pattern contents isRegex: true ]\x0a        ifFalse: [ service findText: findText isRegex: false ] ].\x0a  service changed: #'newFinding'",
messageSends: ["default", "ifTrue:ifFalse:", "findText:isRegex:", "on:", "new", "do:separatedBy:", "streamContents:", "do:", "ifTrue:", "nextPut:", "includes:", "nextPutAll:", "keywords", "contents", ">", "indexOf:", "changed:"],
referencedClasses: ["FindReplaceService", "String", "WriteStream"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "shell",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shell",{},smalltalk.TDTopezClient)})},
args: [],
source: "shell\x0a    ^ shell",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "shell:",
category: 'not yet classified',
fn: function (aShell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shell"]=aShell;
return self}, function($ctx1) {$ctx1.fill(self,"shell:",{aShell:aShell},smalltalk.TDTopezClient)})},
args: ["aShell"],
source: "shell: aShell\x0a    shell := aShell",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "shellHistory",
category: 'not yet classified',
fn: function (){
var self=this;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STON())._toString_(_st(_st(_st(self)._shell())._history())._asArray());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shellHistory",{},smalltalk.TDTopezClient)})},
args: [],
source: "shellHistory\x0a  ^ STON toString: self shell history asArray",
messageSends: ["toString:", "asArray", "history", "shell"],
referencedClasses: ["STON"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "spawnDebugger:",
category: 'not yet classified',
fn: function (aDebuggerLabel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._shell())._spawnDebugger_(aDebuggerLabel);
return $1;
}, function($ctx1) {$ctx1.fill(self,"spawnDebugger:",{aDebuggerLabel:aDebuggerLabel},smalltalk.TDTopezClient)})},
args: ["aDebuggerLabel"],
source: "spawnDebugger: aDebuggerLabel\x0a  ^ self shell spawnDebugger: aDebuggerLabel",
messageSends: ["spawnDebugger:", "shell"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "spawnWindow",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._shell())._spawnWindow();
return $1;
}, function($ctx1) {$ctx1.fill(self,"spawnWindow",{},smalltalk.TDTopezClient)})},
args: [],
source: "spawnWindow\x0a  ^ self shell spawnWindow",
messageSends: ["spawnWindow", "shell"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._windowStatus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.TDTopezClient)})},
args: [],
source: "status\x0a    ^ self windowStatus",
messageSends: ["windowStatus"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "stylerClass",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZTextStylerST80(){return smalltalk.TZTextStylerST80||(typeof TZTextStylerST80=="undefined"?nil:TZTextStylerST80)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TZTextStylerST80();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stylerClass",{},smalltalk.TDTopezClient)})},
args: [],
source: "stylerClass\x0a    ^ TZTextStylerST80",
messageSends: [],
referencedClasses: ["TZTextStylerST80"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "tabCompletion:",
category: 'not yet classified',
fn: function (commandLine){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._tabCompletionMessage())._value_(commandLine);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabCompletion:",{commandLine:commandLine},smalltalk.TDTopezClient)})},
args: ["commandLine"],
source: "tabCompletion: commandLine\x0a  ^self tabCompletionMessage value: commandLine",
messageSends: ["value:", "tabCompletionMessage"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "tabCompletionMessage",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@evaluateTokenMessage"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st($TZGsMessageSend())._new();
_st($2)._topez_(self);
_st($2)._receiver_(_st(_st(self)._session())._asOopType_(_st(self)._topezServerOop()));
_st($2)._selector_("tabCompletion:");
_st($2)._arguments_([]);
$3=_st($2)._transform_(_st("native").__minus_gt(nil));
self["@tabCompletionMessage"]=$3;
self["@tabCompletionMessage"];
} else {
$1;
};
$4=self["@tabCompletionMessage"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"tabCompletionMessage",{},smalltalk.TDTopezClient)})},
args: [],
source: "tabCompletionMessage\x0a  evaluateTokenMessage\x0a    ifNil: [ \x0a      tabCompletionMessage := TZGsMessageSend new\x0a        topez: self;\x0a        receiver: (self session asOopType: self topezServerOop);\x0a        selector: 'tabCompletion:';\x0a        arguments: #();\x0a        transform: #'native' -> nil ].\x0a  ^ tabCompletionMessage",
messageSends: ["ifNil:", "topez:", "new", "receiver:", "asOopType:", "topezServerOop", "session", "selector:", "arguments:", "transform:", "->"],
referencedClasses: ["TZGsMessageSend"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "todeServerAccessString",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "TDTopezServer";
}, function($ctx1) {$ctx1.fill(self,"todeServerAccessString",{},smalltalk.TDTopezClient)})},
args: [],
source: "todeServerAccessString\x0a  ^ 'TDTopezServer'",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "todeServerCreationString",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._todeServerAccessString()).__comma(" createFor: ")).__comma(_st(_st(_st(self)._shell())._shellId())._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"todeServerCreationString",{},smalltalk.TDTopezClient)})},
args: [],
source: "todeServerCreationString\x0a  ^ self todeServerAccessString , ' createFor: ' , self shell shellId asString",
messageSends: [",", "asString", "shellId", "shell", "todeServerAccessString"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "todeSessionClass",
category: 'not yet classified',
fn: function (){
var self=this;
function $TodeSession(){return smalltalk.TodeSession||(typeof TodeSession=="undefined"?nil:TodeSession)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TodeSession();
return $1;
}, function($ctx1) {$ctx1.fill(self,"todeSessionClass",{},smalltalk.TDTopezClient)})},
args: [],
source: "todeSessionClass\x0a  ^ TodeSession",
messageSends: [],
referencedClasses: ["TodeSession"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "topezServerOop",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topezServerProxy())._asInteger();
return $1;
}, function($ctx1) {$ctx1.fill(self,"topezServerOop",{},smalltalk.TDTopezClient)})},
args: [],
source: "topezServerOop\x0a    ^ self topezServerProxy asInteger",
messageSends: ["asInteger", "topezServerProxy"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "topezServerProxy",
category: 'not yet classified',
fn: function (){
var self=this;
function $GsErrorNotification(){return smalltalk.GsErrorNotification||(typeof GsErrorNotification=="undefined"?nil:GsErrorNotification)}
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Author(){return smalltalk.Author||(typeof Author=="undefined"?nil:Author)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@topezServerProxy"];
if(($receiver = $1) == nil || $receiver == undefined){
var stonString,transcriptOopType,topezOop,resultArray,topezServerOop,topezClientOopType;
_st((function(){
return smalltalk.withContext(function($ctx2) {
stonString=_st(_st(self)._session())._executeStringExpectingStringNB_envId_(_st(self)._todeServerCreationString(),_st(self)._environmentId());
return stonString;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($GsErrorNotification(),(function(ex){
return smalltalk.withContext(function($ctx2) {
return _st(self)._error_(_st("Unable to log into server:").__comma(_st(ex)._description()));
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
resultArray=_st($STON())._fromString_(stonString);
resultArray;
topezServerOop=_st(resultArray)._at_((1));
topezServerOop;
transcriptOopType=_st(_st(self)._session())._asOopType_(_st(resultArray)._at_((2)));
transcriptOopType;
topezClientOopType=_st(_st(self)._session())._asOopType_(_st(resultArray)._at_((3)));
topezClientOopType;
self["@topezServerProxy"]=_st(_st(self)._session())._asOopType_(topezServerOop);
self["@topezServerProxy"];
_st(_st(_st(self)._session())._clientForwarderCache())._at_put_(transcriptOopType,$Transcript());
_st(_st(_st(self)._session())._clientForwarderCache())._at_put_(topezClientOopType,self);
_st(_st(self)._session())._rawReceiverNB_perform_withArgs_(self["@topezServerProxy"],"authorInitials:",[_st($Author())._fullNamePerSe()]);
} else {
$1;
};
$2=self["@topezServerProxy"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"topezServerProxy",{},smalltalk.TDTopezClient)})},
args: [],
source: "topezServerProxy\x0a  topezServerProxy\x0a    ifNil: [ \x0a      | stonString transcriptOopType topezOop resultArray topezServerOop topezClientOopType |\x0a      [ \x0a      stonString := self session\x0a        executeStringExpectingStringNB: self todeServerCreationString\x0a        envId: self environmentId ]\x0a        on: GsErrorNotification\x0a        do: [ :ex | self error: 'Unable to log into server:' , ex description ].\x0a      resultArray := STON fromString: stonString.\x0a      topezServerOop := resultArray at: 1.\x0a      transcriptOopType := self session asOopType: (resultArray at: 2).\x0a      topezClientOopType := self session asOopType: (resultArray at: 3).\x0a      topezServerProxy := self session asOopType: topezServerOop.\x0a      self session clientForwarderCache at: transcriptOopType put: Transcript.\x0a      self session clientForwarderCache at: topezClientOopType put: self.\x0a      self session\x0a        rawReceiverNB: topezServerProxy\x0a        perform: #'authorInitials:'\x0a        withArgs: {(Author fullNamePerSe)} ].\x0a  ^ topezServerProxy",
messageSends: ["ifNil:", "on:do:", "error:", ",", "description", "executeStringExpectingStringNB:envId:", "todeServerCreationString", "environmentId", "session", "fromString:", "at:", "asOopType:", "at:put:", "clientForwarderCache", "rawReceiverNB:perform:withArgs:", "fullNamePerSe"],
referencedClasses: ["GsErrorNotification", "STON", "Transcript", "Author"]
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "windowActive:",
category: 'not yet classified',
fn: function (aSystemWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._windowStatus())._windowActive_(aSystemWindow);
return self}, function($ctx1) {$ctx1.fill(self,"windowActive:",{aSystemWindow:aSystemWindow},smalltalk.TDTopezClient)})},
args: ["aSystemWindow"],
source: "windowActive: aSystemWindow\x0a    self windowStatus windowActive: aSystemWindow",
messageSends: ["windowActive:", "windowStatus"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "windowIdNamed:",
category: 'not yet classified',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._windowStatus())._windowIdNamed_(aSymbol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"windowIdNamed:",{aSymbol:aSymbol},smalltalk.TDTopezClient)})},
args: ["aSymbol"],
source: "windowIdNamed: aSymbol\x0a    ^ self windowStatus windowIdNamed: aSymbol",
messageSends: ["windowIdNamed:", "windowStatus"],
referencedClasses: []
}),
smalltalk.TDTopezClient);

smalltalk.addMethod(
smalltalk.method({
selector: "windowStatus",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._shell())._windowStatus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"windowStatus",{},smalltalk.TDTopezClient)})},
args: [],
source: "windowStatus\x0a    ^ self shell windowStatus",
messageSends: ["windowStatus", "shell"],
referencedClasses: []
}),
smalltalk.TDTopezClient);


smalltalk.TDTopezClient.klass.iVarNames = ['bounds','sessionMap','windowOffset','codeWindowHeight','codeWindowWidth','listWindowWidth','windowOrigin'];
smalltalk.addMethod(
smalltalk.method({
selector: "baseWidth",
category: 'layout',
fn: function (){
var self=this;
var font,string;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((400)).__at((25));
return $1;
}, function($ctx1) {$ctx1.fill(self,"baseWidth",{font:font,string:string},smalltalk.TDTopezClient.klass)})},
args: [],
source: "baseWidth\x0a\x09| font string |\x0a\x09\x22font := TextStyle defaultFont.\x0a\x09string := String new: 80 withAll: 'M'.\x22\x0a\x09^ 400 @ 25",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@bounds"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.TDTopezClient.klass)})},
args: [],
source: "bounds\x0a    ^ bounds",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWindowHeight",
category: 'accessing',
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
args: [],
source: "codeWindowHeight\x0a  codeWindowHeight ifNil: [ codeWindowHeight := 21 ].\x0a  ^ codeWindowHeight",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWindowHeight:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@codeWindowHeight"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"codeWindowHeight:",{anInteger:anInteger},smalltalk.TDTopezClient.klass)})},
args: ["anInteger"],
source: "codeWindowHeight: anInteger\x0a  codeWindowHeight := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWindowWidth",
category: 'accessing',
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
args: [],
source: "codeWindowWidth\x0a  codeWindowWidth ifNil: [ codeWindowWidth := 80 ].\x0a  ^ codeWindowWidth",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWindowWidth:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@codeWindowWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"codeWindowWidth:",{anInteger:anInteger},smalltalk.TDTopezClient.klass)})},
args: ["anInteger"],
source: "codeWindowWidth: anInteger\x0a  codeWindowWidth := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'class initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@bounds"]=_st($Dictionary())._new();
_st(self)._initializeBounds();
self["@bounds"]=_st(self)._offsetBounds_(_st(self)._windowOffset());
_st(self)._initializeSessionMap();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TDTopezClient.klass)})},
args: [],
source: "initialize\x0a\x09bounds := Dictionary new.\x0a\x09self initializeBounds.\x0a\x09bounds := self offsetBounds: self windowOffset.\x0a\x09self initializeSessionMap",
messageSends: ["new", "initializeBounds", "offsetBounds:", "windowOffset", "initializeSessionMap"],
referencedClasses: ["Dictionary"]
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeBounds",
category: 'layout',
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
args: [],
source: "initializeBounds\x0a  \x22self initialize\x22\x0a\x0a  | base width height classListsOrigin methodOrigin methodListOrigin top listWidth fullHeight halfHeight codeWidth hierarcyOrigin classDefOrigin thirdHeight twoThirdHeight thirdListWindowExtent listWindowExtent codeWindowExtent debuggerWidth |\x0a  base := self baseWidth.\x09\x22680\x22\x0a  width := base x / 80.0 * 1.1.\x0a  height := (base y * 1.30) asInteger.\x0a  codeWidth := (width * self codeWindowWidth) asInteger.\x09\x22540 + 180 - 40\x22\x0a  top := (height * self windowOrigin y) asInteger.\x09\x2210\x22\x0a  classListsOrigin := (self windowOrigin x * width) asInteger.\x09\x2235 - 10\x22\x0a  fullHeight := self codeWindowHeight * height.\x09\x22420\x22\x0a  halfHeight := fullHeight // 2.\x09\x22210\x22\x0a  thirdHeight := fullHeight // 3.\x09\x22140\x22\x0a  twoThirdHeight := 2 * thirdHeight.\x0a  listWidth := (self listWindowWidth * width) asInteger.\x09\x22250 - 10\x22\x0a  debuggerWidth := 2 * listWidth.\x0a  listWindowExtent := listWidth @ twoThirdHeight.\x0a  thirdListWindowExtent := listWidth @ thirdHeight.\x0a  codeWindowExtent := codeWidth @ fullHeight.\x0a  methodOrigin := classListsOrigin + listWidth.\x0a  methodListOrigin := methodOrigin + codeWidth.\x0a  hierarcyOrigin := classListsOrigin + listWidth.\x0a  classDefOrigin := hierarcyOrigin + listWidth.\x0a  bounds\x0a    at: #'configurations'\x0a      put: (classListsOrigin @ top extent: thirdListWindowExtent);\x0a    at: #'packages'\x0a      put:\x0a        (classListsOrigin @ (top + thirdHeight) extent: thirdListWindowExtent);\x0a    at: #'superclasses'\x0a      put: (hierarcyOrigin @ top extent: thirdListWindowExtent);\x0a    at: #'classes'\x0a      put:\x0a        (classListsOrigin @ (top + twoThirdHeight) extent: listWidth @ twoThirdHeight);\x0a    at: #'subclasses'\x0a      put:\x0a        (classListsOrigin @ (top + (thirdHeight + fullHeight))\x0a            extent: thirdListWindowExtent);\x0a    at: #'classDef'\x0a      put: (classDefOrigin @ top extent: codeWidth - listWidth @ thirdHeight);\x0a    at: #'method'\x0a      put: (hierarcyOrigin @ (top + thirdHeight) extent: codeWindowExtent);\x0a    at: #'instanceSelectors'\x0a      put: (hierarcyOrigin + codeWidth @ top extent: listWindowExtent);\x0a    at: #'classSelectors'\x0a      put:\x0a        (hierarcyOrigin + codeWidth + listWidth @ top extent: listWindowExtent);\x0a    at: #'implementors'\x0a      put:\x0a        (hierarcyOrigin + codeWidth @ (top + twoThirdHeight)\x0a            extent: 2 * listWidth @ twoThirdHeight);\x0a    at: #'debugger'\x0a      put:\x0a        (hierarcyOrigin + codeWidth @ (top + twoThirdHeight)\x0a            extent: debuggerWidth @ twoThirdHeight);\x0a    at: #'receiver'\x0a      put:\x0a        (hierarcyOrigin + codeWidth @ (top + thirdHeight + codeWindowExtent y)\x0a            extent: listWidth @ twoThirdHeight);\x0a    at: #'context'\x0a      put:\x0a        (hierarcyOrigin + codeWidth + listWidth\x0a            @ (top + thirdHeight + codeWindowExtent y)\x0a            extent: listWidth @ twoThirdHeight);\x0a    at: #'evaluator'\x0a      put:\x0a        (classListsOrigin @ (top + thirdHeight + codeWindowExtent y)\x0a            extent: codeWidth @ twoThirdHeight);\x0a    at: #'inspector'\x0a      put:\x0a        (classListsOrigin + codeWidth @ (top + thirdHeight + codeWindowExtent y)\x0a            extent: codeWidth @ twoThirdHeight);\x0a    yourself",
messageSends: ["baseWidth", "*", "/", "x", "asInteger", "y", "codeWindowWidth", "windowOrigin", "codeWindowHeight", "//", "listWindowWidth", "@", "+", "at:put:", "extent:", "-", "yourself"],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSessionMap",
category: 'class initialization',
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
args: [],
source: "initializeSessionMap\x0a  \x22self initializeSessionMap\x22\x0a\x0a  | dict |\x0a  dict := Dictionary new.\x0a  {(self sessionDescriptionDefault)}\x0a    do: [ :sessionDescription | dict at: sessionDescription name put: sessionDescription ].\x0a  sessionMap := dict",
messageSends: ["new", "do:", "at:put:", "name", "sessionDescriptionDefault"],
referencedClasses: ["Dictionary"]
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listWindowWidth",
category: 'accessing',
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
args: [],
source: "listWindowWidth\x0a  listWindowWidth ifNil: [ listWindowWidth := 24 ].\x0a  ^ listWindowWidth",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listWindowWidth:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listWindowWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"listWindowWidth:",{anInteger:anInteger},smalltalk.TDTopezClient.klass)})},
args: ["anInteger"],
source: "listWindowWidth: anInteger\x0a  \x22self windowOffset: 1700@0\x22\x0a\x0a  \x22self windowOffset: o@0\x22\x0a\x0a  \x22self initialize\x22\x0a\x0a  listWindowWidth := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "offsetBounds:",
category: 'class initialization',
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
args: ["aPoint"],
source: "offsetBounds: aPoint\x0a    | newBounds |\x0a    newBounds := Dictionary new.\x0a    bounds\x0a        keysAndValuesDo: [ :locationName :rectangle | newBounds at: locationName put: (rectangle translateBy: aPoint) ].\x0a    ^ newBounds",
messageSends: ["new", "keysAndValuesDo:", "at:put:", "translateBy:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionDescriptionDefault",
category: 'accessing',
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
args: [],
source: "sessionDescriptionDefault\x0a^ OGCustomSessionDescription new\x0a    name: '3.1.0.2';\x0a    gemstoneVersion: '3.1.0.2';\x0a    gciLibraryName: 'libgcirpc-3.1.0.2-32.so'; \x22or libgcirpc-3.1.0.1-32.so for Linux\x22\x0a    adornmentColor: Color lightGreen;\x0a    stoneHost: 'localhost';\x0a    stoneName: 'maglev';\x0a    gemHost: 'localhost';\x0a    netLDI: '50378';\x0a    gemTask: 'gemnetobject';\x0a    userId: 'DataCurator';\x0a    password: 'swordfish';\x0a    osUserId: '';\x0a    osPassword: '';\x0a    backupDirectory: '';\x0a    dataDirectory: '';\x0a    yourself",
messageSends: ["name:", "new", "gemstoneVersion:", "gciLibraryName:", "adornmentColor:", "lightGreen", "stoneHost:", "stoneName:", "gemHost:", "netLDI:", "gemTask:", "userId:", "password:", "osUserId:", "osPassword:", "backupDirectory:", "dataDirectory:", "yourself"],
referencedClasses: ["OGCustomSessionDescription", "Color"]
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionMap",
category: 'class initialization',
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
args: [],
source: "sessionMap\x0a\x09sessionMap ifNil: [ sessionMap := Dictionary new ].\x0a\x09^ sessionMap",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionNamed:",
category: 'class initialization',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@sessionMap"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sessionNamed:",{aString:aString},smalltalk.TDTopezClient.klass)})},
args: ["aString"],
source: "sessionNamed: aString\x0a\x09^ sessionMap at: aString",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowOffset",
category: 'accessing',
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
args: [],
source: "windowOffset\x0a    windowOffset ifNil: [ windowOffset := 0 @ 0 ].\x0a    ^ windowOffset",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowOffset:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@windowOffset"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"windowOffset:",{aPoint:aPoint},smalltalk.TDTopezClient.klass)})},
args: ["aPoint"],
source: "windowOffset: aPoint\x0a  \x22self windowOffset: 1700@0\x22\x0a\x0a  \x22self windowOffset: o@0\x22\x0a\x0a  \x22self initialize\x22\x0a\x0a  windowOffset := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowOrigin",
category: 'accessing',
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
args: [],
source: "windowOrigin\x0a  windowOrigin ifNil: [ windowOrigin := 5 @ 0.5 ].\x0a  ^ windowOrigin",
messageSends: ["ifNil:", "@"],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowOrigin:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@windowOrigin"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"windowOrigin:",{aPoint:aPoint},smalltalk.TDTopezClient.klass)})},
args: ["aPoint"],
source: "windowOrigin: aPoint\x0a  windowOrigin := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDTopezClient.klass);


smalltalk.addClass('TDWindowStatus', smalltalk.Object, ['windows', 'namedWindows', 'activeWindowIndex', 'shellWindowCount', 'shellWindows'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "activeWindowIndex",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@activeWindowIndex"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeWindowIndex",{},smalltalk.TDWindowStatus)})},
args: [],
source: "activeWindowIndex\x0a    ^ activeWindowIndex",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "activeWindowModel",
category: 'accessing',
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
args: [],
source: "activeWindowModel\x0a    (activeWindowIndex < 1 or: [ activeWindowIndex > windows size ])\x0a        ifTrue: [ ^ nil ].\x0a    ^ (windows at: activeWindowIndex) model",
messageSends: ["ifTrue:", "or:", ">", "size", "<", "model", "at:"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'accessing',
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
args: [],
source: "close\x0a  (windows select: [ :each | each notNil ])\x0a    do: [ :window | \x0a      (window model isKindOf: TodeEditor)\x0a        ifTrue: [ \x0a          window model windowIsClosing.\x0a          window delete ] ]",
messageSends: ["do:", "ifTrue:", "windowIsClosing", "model", "delete", "isKindOf:", "select:", "notNil"],
referencedClasses: ["TodeEditor"]
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "collapse",
category: 'accessing',
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
args: [],
source: "collapse\x0a  (windows select: [ :each | each notNil ])\x0a    do: [ :window | \x0a      (window model isKindOf: TodeEditor)\x0a        ifTrue: [ window collapse ] ]",
messageSends: ["do:", "ifTrue:", "collapse", "isKindOf:", "model", "select:", "notNil"],
referencedClasses: ["TodeEditor"]
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "expand",
category: 'accessing',
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
args: [],
source: "expand\x0a    (windows select: [ :each | each notNil ]) do: [ :window | window expand ]",
messageSends: ["do:", "expand", "select:", "notNil"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@windows"]=_st($Array())._new_withAll_((100),nil);
self["@activeWindowIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TDWindowStatus)})},
args: [],
source: "initialize\x0a\x09\x22windows := WeakArray new: 100 withAll: nil.\x22\x0a    windows := Array new: 100 withAll: nil.\x0a    activeWindowIndex := 0",
messageSends: ["new:withAll:"],
referencedClasses: ["Array"]
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "namedWindows",
category: 'accessing',
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
args: [],
source: "namedWindows\x0a    namedWindows ifNil: [ namedWindows := Dictionary new ].\x0a    ^ namedWindows",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "namedWindows:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@namedWindows"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"namedWindows:",{anObject:anObject},smalltalk.TDWindowStatus)})},
args: ["anObject"],
source: "namedWindows: anObject\x0a\x09namedWindows := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "nextAvailableWindowId",
category: 'accessing',
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
args: [],
source: "nextAvailableWindowId\x0a    1 to: windows size do: [ :index | (windows at: index) ifNil: [ ^ index ] ].\x0a    self error: 'No slots available for windows'",
messageSends: ["to:do:", "size", "ifNil:", "at:", "error:"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "nextShellWindowId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@shellWindowCount"]=_st(_st(self)._shellWindowCount()).__plus((1));
$1=self["@shellWindowCount"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextShellWindowId",{},smalltalk.TDWindowStatus)})},
args: [],
source: "nextShellWindowId\x0a  ^ shellWindowCount := self shellWindowCount + 1",
messageSends: ["+", "shellWindowCount"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "registerShellWindow:",
category: 'accessing',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._shellWindows())._add_(aWindow);
return self}, function($ctx1) {$ctx1.fill(self,"registerShellWindow:",{aWindow:aWindow},smalltalk.TDWindowStatus)})},
args: ["aWindow"],
source: "registerShellWindow: aWindow\x0a  self shellWindows add: aWindow",
messageSends: ["add:", "shellWindows"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "shellWindowCount",
category: 'accessing',
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
args: [],
source: "shellWindowCount\x0a  shellWindowCount ifNil: [ shellWindowCount := 0 ].\x0a  ^ shellWindowCount",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "shellWindows",
category: 'accessing',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@shellWindows"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@shellWindows"]=_st($Set())._new();
self["@shellWindows"];
} else {
$1;
};
$2=self["@shellWindows"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"shellWindows",{},smalltalk.TDWindowStatus)})},
args: [],
source: "shellWindows\x0a\x09\x22TODO: this was IdentitySet\x22\x0a  shellWindows ifNil: [ shellWindows := Set new ].\x0a  ^ shellWindows",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "unregisterShellWindow:",
category: 'accessing',
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
args: ["aWindow"],
source: "unregisterShellWindow: aWindow\x0a  | theShell index |\x0a  theShell := aWindow model cliShell.\x0a  self shellWindows remove: aWindow ifAbsent: [  ].\x0a  index := windows indexOf: aWindow.\x0a  index > 0\x0a    ifTrue: [ windows at: index put: nil ].\x0a  windows\x0a    do: [ :window | \x0a      window ~~ nil\x0a        ifTrue: [ \x0a          (window ~~ aWindow and: [ window model topez shell == theShell ])\x0a            ifTrue: [ \x0a              window model windowIsClosing.\x0a              window delete ] ] ]",
messageSends: ["cliShell", "model", "remove:ifAbsent:", "shellWindows", "indexOf:", "ifTrue:", "at:put:", ">", "do:", "windowIsClosing", "delete", "and:", "==", "shell", "topez", "~~"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowActive:",
category: 'accessing',
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
args: ["aSystemWindow"],
source: "windowActive: aSystemWindow\x0a  | index |\x0a  index := windows indexOf: aSystemWindow.\x0a  index == 0\x0a    ifTrue: [ ^ self ].\x0a  activeWindowIndex := index",
messageSends: ["indexOf:", "ifTrue:", "=="],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowAt:",
category: 'accessing',
fn: function (aWindowId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@windows"])._at_(aWindowId);
return $1;
}, function($ctx1) {$ctx1.fill(self,"windowAt:",{aWindowId:aWindowId},smalltalk.TDWindowStatus)})},
args: ["aWindowId"],
source: "windowAt: aWindowId\x0a    ^ windows at: aWindowId",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowAt:put:",
category: 'accessing',
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
args: ["windowId", "window"],
source: "windowAt: windowId put: window\x0a    (window == nil and: [ windowId == activeWindowIndex ])\x0a        ifTrue: [ activeWindowIndex := 0 ].\x0a    windows at: windowId put: window",
messageSends: ["ifTrue:", "and:", "==", "at:put:"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowIdNamed:",
category: 'accessing',
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
args: ["aSymbol"],
source: "windowIdNamed: aSymbol\x0a    ^ self namedWindows at: aSymbol ifAbsent: [ self namedWindows at: aSymbol put: self nextAvailableWindowId ]",
messageSends: ["at:ifAbsent:", "at:put:", "nextAvailableWindowId", "namedWindows"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowIsClosing",
category: 'accessing',
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
args: [],
source: "windowIsClosing\x0a  \x22close all windows when last shell window is closed\x22\x0a\x0a  self shellWindows isEmpty not\x0a    ifTrue: [ ^ self ].\x0a  (windows select: [ :each | each notNil ])\x0a    do: [ :window | \x0a      window model windowIsClosing.\x0a      window delete ].\x0a  windows detect: [ :window | window notNil ] ifNone: [ ^ self ]",
messageSends: ["ifTrue:", "not", "isEmpty", "shellWindows", "do:", "windowIsClosing", "model", "delete", "select:", "notNil", "detect:ifNone:"],
referencedClasses: []
}),
smalltalk.TDWindowStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "windowNamesAndIds",
category: 'accessing',
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
args: [],
source: "windowNamesAndIds\x0a    | namesAndIds |\x0a    namesAndIds := OrderedCollection new.\x0a    1 to: windows size do: [ :windowId | \x0a        | name |\x0a        (windows at: windowId)\x0a            ifNotNil: [ :win | \x0a                name := windowId printString , '. ' , (self namedWindows keyAtValue: windowId ifAbsent: [ '' ]).\x0a                namesAndIds\x0a                    add:\x0a                        name\x0a                            ->\x0a                                {windowId.\x0a                                (win label)} ] ].\x0a    ^ namesAndIds sort: [ :a :b | (a value at: 2) <= (b value at: 2) ]",
messageSends: ["new", "to:do:", "size", "ifNotNil:", ",", "keyAtValue:ifAbsent:", "namedWindows", "printString", "add:", "->", "label", "at:", "sort:", "<=", "value"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TDWindowStatus);



smalltalk.addClass('TZGemStoneProxyBehavior', smalltalk.Object, ['behaviorOop', 'topez', 'allInstVarNames', 'allClassVarNames', 'allSharedPoolNames'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "allClassVarNames",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@allClassVarNames"];
if(($receiver = $1) == nil || $receiver == undefined){
var message,list;
$2=_st($TZGsMessageSend())._new();
_st($2)._topez_(_st(self)._topez());
_st($2)._receiver_(_st(_st(self)._session())._asOopType_(_st(self)._behaviorOop()));
_st($2)._selector_("allClassVarNames");
_st($2)._arguments_([]);
$3=_st($2)._transform_(_st("ston").__minus_gt((1)));
message=$3;
message;
_st(self)._critical_((function(){
return smalltalk.withContext(function($ctx2) {
list=_st(message)._value();
list;
self["@allClassVarNames"]=_st(list)._collect_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._asString();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return self["@allClassVarNames"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
$1;
};
$4=self["@allClassVarNames"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"allClassVarNames",{},smalltalk.TZGemStoneProxyBehavior)})},
args: [],
source: "allClassVarNames\x0a  allClassVarNames\x0a    ifNil: [ \x0a      | message list |\x0a      message := TZGsMessageSend new\x0a        topez: self topez;\x0a        receiver: (self session asOopType: self behaviorOop);\x0a        selector: 'allClassVarNames';\x0a        arguments: #();\x0a        transform: #'ston' -> 1.\x0a      self\x0a        critical: [ \x0a          list := message value.\x0a          allClassVarNames := list collect: [ :each | each asString ] ] ].\x0a  ^ allClassVarNames",
messageSends: ["ifNil:", "topez:", "topez", "new", "receiver:", "asOopType:", "behaviorOop", "session", "selector:", "arguments:", "transform:", "->", "critical:", "value", "collect:", "asString"],
referencedClasses: ["TZGsMessageSend"]
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allClassVarNames:",
category: 'not yet classified',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@allClassVarNames"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"allClassVarNames:",{aCollection:aCollection},smalltalk.TZGemStoneProxyBehavior)})},
args: ["aCollection"],
source: "allClassVarNames: aCollection\x0a  allClassVarNames := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allGlobalNames",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsBlockSend(){return smalltalk.TZGsBlockSend||(typeof TZGsBlockSend=="undefined"?nil:TZGsBlockSend)}
function $AllGlobalNames(){return smalltalk.AllGlobalNames||(typeof AllGlobalNames=="undefined"?nil:AllGlobalNames)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=$AllGlobalNames();
if(($receiver = $1) == nil || $receiver == undefined){
var block;
$2=_st($TZGsBlockSend())._new();
_st($2)._topez_(_st(self)._topez());
_st($2)._blockSource_("[| globalNames |\x0aglobalNames := IdentitySet new.\x0aSystem myUserProfile symbolList do: [:symbolDict |\x0a\x09globalNames addAll: symbolDict keys].\x0aglobalNames asArray]");
$3=_st($2)._transform_(_st("ston").__minus_gt((1)));
block=$3;
block;
_st(self)._critical_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._allGlobalNames_(_st(block)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
$1;
};
$4=$AllGlobalNames();
return $4;
}, function($ctx1) {$ctx1.fill(self,"allGlobalNames",{},smalltalk.TZGemStoneProxyBehavior)})},
args: [],
source: "allGlobalNames\x0a  AllGlobalNames\x0a    ifNil: [ \x0a      | block |\x0a      block := TZGsBlockSend new\x0a        topez: self topez;\x0a        blockSource:\x0a            '[| globalNames |\x0aglobalNames := IdentitySet new.\x0aSystem myUserProfile symbolList do: [:symbolDict |\x0a\x09globalNames addAll: symbolDict keys].\x0aglobalNames asArray]';\x0a        transform: #'ston' -> 1.\x0a      self critical: [ self allGlobalNames: block value ] ].\x0a  ^ AllGlobalNames",
messageSends: ["ifNil:", "topez:", "topez", "new", "blockSource:", "transform:", "->", "critical:", "allGlobalNames:", "value"],
referencedClasses: ["TZGsBlockSend", "AllGlobalNames"]
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allInstVarNames",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@allInstVarNames"];
if(($receiver = $1) == nil || $receiver == undefined){
var message,list;
$2=_st($TZGsMessageSend())._new();
_st($2)._topez_(_st(self)._topez());
_st($2)._receiver_(_st(_st(self)._session())._asOopType_(_st(self)._behaviorOop()));
_st($2)._selector_("allInstVarNames");
_st($2)._arguments_([]);
$3=_st($2)._transform_(_st("ston").__minus_gt((1)));
message=$3;
message;
_st(self)._critical_((function(){
return smalltalk.withContext(function($ctx2) {
list=_st(message)._value();
list;
self["@allInstVarNames"]=_st(list)._collect_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._asString();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return self["@allInstVarNames"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
$1;
};
$4=self["@allInstVarNames"];
return $4;
}, function($ctx1) {$ctx1.fill(self,"allInstVarNames",{},smalltalk.TZGemStoneProxyBehavior)})},
args: [],
source: "allInstVarNames\x0a  allInstVarNames\x0a    ifNil: [ \x0a      | message list |\x0a      message := TZGsMessageSend new\x0a        topez: self topez;\x0a        receiver: (self session asOopType: self behaviorOop);\x0a        selector: 'allInstVarNames';\x0a        arguments: #();\x0a        transform: #'ston' -> 1.\x0a      self\x0a        critical: [ \x0a          list := message value.\x0a          allInstVarNames := list collect: [ :each | each asString ] ] ].\x0a  ^ allInstVarNames",
messageSends: ["ifNil:", "topez:", "topez", "new", "receiver:", "asOopType:", "behaviorOop", "session", "selector:", "arguments:", "transform:", "->", "critical:", "value", "collect:", "asString"],
referencedClasses: ["TZGsMessageSend"]
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allInstVarNames:",
category: 'not yet classified',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@allInstVarNames"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"allInstVarNames:",{aCollection:aCollection},smalltalk.TZGemStoneProxyBehavior)})},
args: ["aCollection"],
source: "allInstVarNames: aCollection\x0a  allInstVarNames := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSharedPoolNames",
category: 'not yet classified',
fn: function (){
var self=this;
function $TZGsMessageSend(){return smalltalk.TZGsMessageSend||(typeof TZGsMessageSend=="undefined"?nil:TZGsMessageSend)}
function $TZGsBlockSend(){return smalltalk.TZGsBlockSend||(typeof TZGsBlockSend=="undefined"?nil:TZGsBlockSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=self["@allSharedPoolNames"];
if(($receiver = $1) == nil || $receiver == undefined){
var message,allSharedPoolsOop,block,list;
$2=_st($TZGsMessageSend())._new();
_st($2)._topez_(_st(self)._topez());
_st($2)._receiver_(_st(_st(self)._session())._asOopType_(_st(self)._behaviorOop()));
_st($2)._selector_("allSharedPools");
_st($2)._arguments_([]);
$3=_st($2)._transform_(_st("raw").__minus_gt(nil));
message=$3;
message;
allSharedPoolsOop=_st(self)._critical_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(message)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
allSharedPoolsOop;
$4=_st($TZGsBlockSend())._new();
_st($4)._topez_(_st(self)._topez());
_st($4)._blockSource_("[:allSharedPools | | sharedPoolNames |\x0a\x09\x09\x09\x09\x09\x09sharedPoolNames := IdentitySet new.\x0a\x09\x09\x09\x09\x09\x09allSharedPools do: [:poolDict |\x0a                         \x09\x09sharedPoolNames addAll: poolDict keys].\x0a\x09\x09\x09\x09\x09\x09allSharedPools asArray]");
$5=_st($4)._transform_(_st("ston").__minus_gt((1)));
block=$5;
block;
_st(self)._critical_((function(){
return smalltalk.withContext(function($ctx2) {
list=_st(block)._value_(_st(_st(self)._session())._asOopType_(allSharedPoolsOop));
list;
self["@allSharedPoolNames"]=_st(list)._collect_((function(each){
return smalltalk.withContext(function($ctx3) {
return each;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return self["@allSharedPoolNames"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
$1;
};
$6=self["@allSharedPoolNames"];
return $6;
}, function($ctx1) {$ctx1.fill(self,"allSharedPoolNames",{},smalltalk.TZGemStoneProxyBehavior)})},
args: [],
source: "allSharedPoolNames\x0a  allSharedPoolNames\x0a    ifNil: [ \x0a      | message allSharedPoolsOop block list |\x0a      message := TZGsMessageSend new\x0a        topez: self topez;\x0a        receiver: (self session asOopType: self behaviorOop);\x0a        selector: 'allSharedPools';\x0a        arguments: #();\x0a        transform: #'raw' -> nil.\x0a      allSharedPoolsOop := self critical: [ message value ].\x0a      block := TZGsBlockSend new\x0a        topez: self topez;\x0a        blockSource:\x0a            '[:allSharedPools | | sharedPoolNames |\x0a\x09\x09\x09\x09\x09\x09sharedPoolNames := IdentitySet new.\x0a\x09\x09\x09\x09\x09\x09allSharedPools do: [:poolDict |\x0a                         \x09\x09sharedPoolNames addAll: poolDict keys].\x0a\x09\x09\x09\x09\x09\x09allSharedPools asArray]';\x0a        transform: #'ston' -> 1.\x0a      self\x0a        critical: [ \x0a          list := block value: (self session asOopType: allSharedPoolsOop).\x0a          allSharedPoolNames := list collect: [ :each | each ] ] ].\x0a  ^ allSharedPoolNames",
messageSends: ["ifNil:", "topez:", "topez", "new", "receiver:", "asOopType:", "behaviorOop", "session", "selector:", "arguments:", "transform:", "->", "critical:", "value", "blockSource:", "value:", "collect:"],
referencedClasses: ["TZGsMessageSend", "TZGsBlockSend"]
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSharedPoolNames:",
category: 'not yet classified',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@allSharedPoolNames"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"allSharedPoolNames:",{aCollection:aCollection},smalltalk.TZGemStoneProxyBehavior)})},
args: ["aCollection"],
source: "allSharedPoolNames: aCollection\x0a  allSharedPoolNames := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "behaviorOop",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@behaviorOop"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"behaviorOop",{},smalltalk.TZGemStoneProxyBehavior)})},
args: [],
source: "behaviorOop\x0a    ^ behaviorOop",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "behaviorOop:",
category: 'not yet classified',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@behaviorOop"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"behaviorOop:",{anInteger:anInteger},smalltalk.TZGemStoneProxyBehavior)})},
args: ["anInteger"],
source: "behaviorOop: anInteger\x0a    behaviorOop := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "bindingOfClassPool:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._allClassVarNames())._includes_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingOfClassPool:",{aString:aString},smalltalk.TZGemStoneProxyBehavior)})},
args: ["aString"],
source: "bindingOfClassPool: aString\x0a    ^ self allClassVarNames includes: aString",
messageSends: ["includes:", "allClassVarNames"],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "bindingOfGlobal:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._allGlobalNames())._includes_(_st(aString)._asSymbol());
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingOfGlobal:",{aString:aString},smalltalk.TZGemStoneProxyBehavior)})},
args: ["aString"],
source: "bindingOfGlobal: aString\x0a    ^ self allGlobalNames includes: aString asSymbol",
messageSends: ["includes:", "asSymbol", "allGlobalNames"],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "bindingOfSharedPool:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._allSharedPoolNames())._includes_(_st(aString)._asSymbol());
return $1;
}, function($ctx1) {$ctx1.fill(self,"bindingOfSharedPool:",{aString:aString},smalltalk.TZGemStoneProxyBehavior)})},
args: ["aString"],
source: "bindingOfSharedPool: aString\x0a    ^ self allSharedPoolNames includes: aString asSymbol",
messageSends: ["includes:", "asSymbol", "allSharedPoolNames"],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "critical:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._critical_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"critical:",{aBlock:aBlock},smalltalk.TZGemStoneProxyBehavior)})},
args: ["aBlock"],
source: "critical: aBlock\x0a  ^ self class critical: aBlock",
messageSends: ["critical:", "class"],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._session();
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.TZGemStoneProxyBehavior)})},
args: [],
source: "session\x0a  ^ self topez session",
messageSends: ["session", "topez"],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topez"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.TZGemStoneProxyBehavior)})},
args: [],
source: "topez\x0a    ^ topez",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);

smalltalk.addMethod(
smalltalk.method({
selector: "topez:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topez"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"topez:",{anObject:anObject},smalltalk.TZGemStoneProxyBehavior)})},
args: ["anObject"],
source: "topez: anObject\x0a    topez := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior);


smalltalk.TZGemStoneProxyBehavior.klass.iVarNames = ['allGlobalNames','gciSemaphore'];
smalltalk.addMethod(
smalltalk.method({
selector: "allGlobalNames:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@allGlobalNames"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"allGlobalNames:",{anObject:anObject},smalltalk.TZGemStoneProxyBehavior.klass)})},
args: ["anObject"],
source: "allGlobalNames: anObject\x0a\x09allGlobalNames := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "critical:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._semaphore())._critical_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"critical:",{aBlock:aBlock},smalltalk.TZGemStoneProxyBehavior.klass)})},
args: ["aBlock"],
source: "critical: aBlock\x0a  ^ self semaphore critical: aBlock",
messageSends: ["critical:", "semaphore"],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetAllGlobalNames",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@allGlobalNames"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetAllGlobalNames",{},smalltalk.TZGemStoneProxyBehavior.klass)})},
args: [],
source: "resetAllGlobalNames\x0a    \x22self resetAllGlobalNames\x22\x0a\x0a    allGlobalNames := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGemStoneProxyBehavior.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "semaphore",
category: 'not yet classified',
fn: function (){
var self=this;
function $Semaphore(){return smalltalk.Semaphore||(typeof Semaphore=="undefined"?nil:Semaphore)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@gciSemaphore"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@gciSemaphore"]=_st($Semaphore())._forMutualExclusion();
self["@gciSemaphore"];
} else {
$1;
};
$2=self["@gciSemaphore"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"semaphore",{},smalltalk.TZGemStoneProxyBehavior.klass)})},
args: [],
source: "semaphore\x0a  gciSemaphore ifNil: [ gciSemaphore := Semaphore forMutualExclusion ].\x0a  ^ gciSemaphore",
messageSends: ["ifNil:", "forMutualExclusion"],
referencedClasses: ["Semaphore"]
}),
smalltalk.TZGemStoneProxyBehavior.klass);


smalltalk.addClass('TZGsExecutable', smalltalk.Object, ['topez', 'transform'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "environmentId",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._environmentId();
return $1;
}, function($ctx1) {$ctx1.fill(self,"environmentId",{},smalltalk.TZGsExecutable)})},
args: [],
source: "environmentId\x0a  ^ self topez environmentId",
messageSends: ["environmentId", "topez"],
referencedClasses: []
}),
smalltalk.TZGsExecutable);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluator",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._evaluator();
return $1;
}, function($ctx1) {$ctx1.fill(self,"evaluator",{},smalltalk.TZGsExecutable)})},
args: [],
source: "evaluator\x0a    ^ self topez evaluator",
messageSends: ["evaluator", "topez"],
referencedClasses: []
}),
smalltalk.TZGsExecutable);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:",
category: 'not yet classified',
fn: function (actionBlock){
var self=this;
var rawOopType;
return smalltalk.withContext(function($ctx1) { 
var $1;
rawOopType=_st(actionBlock)._value();
$1=_st(self)._performTransformOn_(rawOopType);
return $1;
}, function($ctx1) {$ctx1.fill(self,"perform:",{actionBlock:actionBlock,rawOopType:rawOopType},smalltalk.TZGsExecutable)})},
args: ["actionBlock"],
source: "perform: actionBlock\x0a  | rawOopType |\x0a  rawOopType := actionBlock value.\x0a  ^ self performTransformOn: rawOopType",
messageSends: ["value", "performTransformOn:"],
referencedClasses: []
}),
smalltalk.TZGsExecutable);

smalltalk.addMethod(
smalltalk.method({
selector: "performTransformOn:",
category: 'not yet classified',
fn: function (anOoptype){
var self=this;
function $STONReader(){return smalltalk.STONReader||(typeof STONReader=="undefined"?nil:STONReader)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(_st(_st(self)._transform())._key()).__eq_eq("ston");
if(smalltalk.assert($1)){
var stonString;
stonString=_st(_st(self)._session())._receiverNB_perform_withArgs_envId_(_st(_st(self)._topez())._topezServerProxy(),"toString:",[anOoptype],_st(self)._environmentId());
stonString;
$2=_st(_st($STONReader())._on_(_st(stonString)._readStream()))._next();
return $2;
};
$3=_st(_st(_st(self)._transform())._key()).__eq_eq("native");
if(smalltalk.assert($3)){
$4=_st(_st(_st(self)._session())._library())._localFor_(anOoptype);
return $4;
};
$5=anOoptype;
return $5;
}, function($ctx1) {$ctx1.fill(self,"performTransformOn:",{anOoptype:anOoptype},smalltalk.TZGsExecutable)})},
args: ["anOoptype"],
source: "performTransformOn: anOoptype\x0a  self transform key == #'ston'\x0a    ifTrue: [ \x0a      | stonString |\x0a      stonString := self session\x0a        receiverNB: self topez topezServerProxy\x0a        perform: #'toString:'\x0a        withArgs: {anOoptype}\x0a        envId: self environmentId.\x0a      ^ (STONReader on: stonString readStream) next ].\x0a  self transform key == #'native'\x0a    ifTrue: [ ^ self session library localFor: anOoptype ].\x0a  ^ anOoptype\x09\x22self transform key == #'raw'\x22",
messageSends: ["ifTrue:", "receiverNB:perform:withArgs:envId:", "topezServerProxy", "topez", "environmentId", "session", "next", "on:", "readStream", "==", "key", "transform", "localFor:", "library"],
referencedClasses: ["STONReader"]
}),
smalltalk.TZGsExecutable);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._topez())._session();
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},smalltalk.TZGsExecutable)})},
args: [],
source: "session\x0a    ^ self topez session",
messageSends: ["session", "topez"],
referencedClasses: []
}),
smalltalk.TZGsExecutable);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topez"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.TZGsExecutable)})},
args: [],
source: "topez\x0a    ^ topez",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsExecutable);

smalltalk.addMethod(
smalltalk.method({
selector: "topez:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topez"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"topez:",{anObject:anObject},smalltalk.TZGsExecutable)})},
args: ["anObject"],
source: "topez: anObject\x0a    topez := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsExecutable);

smalltalk.addMethod(
smalltalk.method({
selector: "transform",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@transform"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@transform"]=_st("ston").__minus_gt((1));
self["@transform"];
} else {
$1;
};
$2=self["@transform"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"transform",{},smalltalk.TZGsExecutable)})},
args: [],
source: "transform\x0a    transform ifNil: [ transform := #'ston' -> 1 ].\x0a    ^ transform",
messageSends: ["ifNil:", "->"],
referencedClasses: []
}),
smalltalk.TZGsExecutable);

smalltalk.addMethod(
smalltalk.method({
selector: "transform:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@transform"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"transform:",{anObject:anObject},smalltalk.TZGsExecutable)})},
args: ["anObject"],
source: "transform: anObject\x0a\x09transform := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsExecutable);



smalltalk.addClass('TZGsBlockSend', smalltalk.TZGsExecutable, ['blockOopType', 'numArgs', 'blockSource'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "blockOopType",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@blockOopType"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@blockOopType"]=_st(_st(self)._session())._rawExecuteStringNB_envId_(_st(self)._blockSource(),_st(self)._environmentId());
self["@blockOopType"];
} else {
$1;
};
$2=self["@blockOopType"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"blockOopType",{},smalltalk.TZGsBlockSend)})},
args: [],
source: "blockOopType\x0a  blockOopType\x0a    ifNil: [ \x0a      blockOopType := self session\x0a        rawExecuteStringNB: self blockSource\x0a        envId: self environmentId ].\x0a  ^ blockOopType",
messageSends: ["ifNil:", "rawExecuteStringNB:envId:", "blockSource", "environmentId", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "blockSource",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@blockSource"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"blockSource",{},smalltalk.TZGsBlockSend)})},
args: [],
source: "blockSource\x0a    ^ blockSource",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "blockSource:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@numArgs"]=nil;
self["@blockOopType"]=self["@numArgs"];
self["@blockSource"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"blockSource:",{aString:aString},smalltalk.TZGsBlockSend)})},
args: ["aString"],
source: "blockSource: aString\x0a    blockOopType := numArgs := nil.\x0a    blockSource := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "cull:",
category: 'not yet classified',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"cull:",[arg]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cull:",{arg:arg},smalltalk.TZGsBlockSend)})},
args: ["arg"],
source: "cull: arg\x0a  ^ self perform: [ self session rawReceiverNB: self blockOopType perform: #'cull:' withArgs: {arg} ]",
messageSends: ["perform:", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "cull:cull:",
category: 'not yet classified',
fn: function (arg1,arg2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"cull:cull:",[arg1,arg2]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cull:cull:",{arg1:arg1,arg2:arg2},smalltalk.TZGsBlockSend)})},
args: ["arg1", "arg2"],
source: "cull: arg1 cull: arg2\x0a  ^ self\x0a    perform: [ \x0a      self session\x0a        rawReceiverNB: self blockOopType\x0a        perform: #'cull:cull:'\x0a        withArgs:\x0a          {arg1.\x0a          arg2} ]",
messageSends: ["perform:", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "cull:cull:cull:",
category: 'not yet classified',
fn: function (arg1,arg2,arg3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"cull:cull:cull:",[arg1,arg2,arg3]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cull:cull:cull:",{arg1:arg1,arg2:arg2,arg3:arg3},smalltalk.TZGsBlockSend)})},
args: ["arg1", "arg2", "arg3"],
source: "cull: arg1 cull: arg2 cull: arg3\x0a  ^ self\x0a    perform: [ \x0a      self session\x0a        rawReceiverNB: self blockOopType\x0a        perform: #'cull:cull:cull:'\x0a        withArgs:\x0a          {arg1.\x0a          arg2.\x0a          arg3} ]",
messageSends: ["perform:", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "cull:cull:cull:cull:",
category: 'not yet classified',
fn: function (arg1,arg2,arg3,arg4){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"cull:cull:cull:cull:",[arg1,arg2,arg3,arg4]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cull:cull:cull:cull:",{arg1:arg1,arg2:arg2,arg3:arg3,arg4:arg4},smalltalk.TZGsBlockSend)})},
args: ["arg1", "arg2", "arg3", "arg4"],
source: "cull: arg1 cull: arg2 cull: arg3 cull: arg4\x0a  ^ self\x0a    perform: [ \x0a      self session\x0a        rawReceiverNB: self blockOopType\x0a        perform: #'cull:cull:cull:cull:'\x0a        withArgs:\x0a          {arg1.\x0a          arg2.\x0a          arg3.\x0a          arg4} ]",
messageSends: ["perform:", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "numArgs",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@numArgs"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@numArgs"]=_st(_st(self)._session())._receiverNB_perform_withArgs_envId_(_st(self)._blockOopType(),"numArgs",[],_st(self)._environmentId());
self["@numArgs"];
} else {
$1;
};
$2=self["@numArgs"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"numArgs",{},smalltalk.TZGsBlockSend)})},
args: [],
source: "numArgs\x0a  numArgs\x0a    ifNil: [ \x0a      numArgs := self session\x0a        receiverNB: self blockOopType\x0a        perform: #'numArgs'\x0a        withArgs: #()\x0a        envId: self environmentId ].\x0a  ^ numArgs",
messageSends: ["ifNil:", "receiverNB:perform:withArgs:envId:", "blockOopType", "environmentId", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
var $early={};
try {
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(self)._numArgs()).__tild_eq((0));
if(smalltalk.assert($2)){
$3=_st(self)._error_("incorrect block args");
throw $early=[$3];
};
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"value",[]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.TZGsBlockSend)})},
args: [],
source: "value\x0a  ^ self\x0a    perform: [ \x0a      self numArgs ~= 0\x0a        ifTrue: [ ^ self error: 'incorrect block args' ].\x0a      self session rawReceiverNB: self blockOopType perform: #'value' withArgs: #() ]",
messageSends: ["perform:", "ifTrue:", "error:", "~=", "numArgs", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'not yet classified',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
var $early={};
try {
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(self)._numArgs()).__tild_eq((1));
if(smalltalk.assert($2)){
$3=_st(self)._error_("incorrect block args");
throw $early=[$3];
};
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"value:",[arg]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"value:",{arg:arg},smalltalk.TZGsBlockSend)})},
args: ["arg"],
source: "value: arg\x0a  ^ self\x0a    perform: [ \x0a      self numArgs ~= 1\x0a        ifTrue: [ ^ self error: 'incorrect block args' ].\x0a      self session rawReceiverNB: self blockOopType perform: #'value:' withArgs: {arg} ]",
messageSends: ["perform:", "ifTrue:", "error:", "~=", "numArgs", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
category: 'not yet classified',
fn: function (arg1,arg2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
var $early={};
try {
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(self)._numArgs()).__tild_eq((2));
if(smalltalk.assert($2)){
$3=_st(self)._error_("incorrect block args");
throw $early=[$3];
};
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"value:value:",[arg1,arg2]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"value:value:",{arg1:arg1,arg2:arg2},smalltalk.TZGsBlockSend)})},
args: ["arg1", "arg2"],
source: "value: arg1 value: arg2\x0a  ^ self\x0a    perform: [ \x0a      self numArgs ~= 2\x0a        ifTrue: [ ^ self error: 'incorrect block args' ].\x0a      self session\x0a        rawReceiverNB: self blockOopType\x0a        perform: #'value:value:'\x0a        withArgs:\x0a          {arg1.\x0a          arg2} ]",
messageSends: ["perform:", "ifTrue:", "error:", "~=", "numArgs", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
category: 'not yet classified',
fn: function (arg1,arg2,arg3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
var $early={};
try {
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(self)._numArgs()).__tild_eq((3));
if(smalltalk.assert($2)){
$3=_st(self)._error_("incorrect block args");
throw $early=[$3];
};
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"value:value:value:",[arg1,arg2,arg3]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{arg1:arg1,arg2:arg2,arg3:arg3},smalltalk.TZGsBlockSend)})},
args: ["arg1", "arg2", "arg3"],
source: "value: arg1 value: arg2 value: arg3\x0a  ^ self\x0a    perform: [ \x0a      self numArgs ~= 3\x0a        ifTrue: [ ^ self error: 'incorrect block args' ].\x0a      self session\x0a        rawReceiverNB: self blockOopType\x0a        perform: #'value:value:value:'\x0a        withArgs:\x0a          {arg1.\x0a          arg2.\x0a          arg3} ]",
messageSends: ["perform:", "ifTrue:", "error:", "~=", "numArgs", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:value:",
category: 'not yet classified',
fn: function (arg1,arg2,arg3,arg4){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
var $early={};
try {
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(self)._numArgs()).__tild_eq((4));
if(smalltalk.assert($2)){
$3=_st(self)._error_("incorrect block args");
throw $early=[$3];
};
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"value:value:value:value:",[arg1,arg2,arg3,arg4]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"value:value:value:value:",{arg1:arg1,arg2:arg2,arg3:arg3,arg4:arg4},smalltalk.TZGsBlockSend)})},
args: ["arg1", "arg2", "arg3", "arg4"],
source: "value: arg1 value: arg2 value: arg3 value: arg4\x0a  ^ self\x0a    perform: [ \x0a      self numArgs ~= 4\x0a        ifTrue: [ ^ self error: 'incorrect block args' ].\x0a      self session\x0a        rawReceiverNB: self blockOopType\x0a        perform: #'value:value:value:value:'\x0a        withArgs:\x0a          {arg1.\x0a          arg2.\x0a          arg3.\x0a          arg4} ]",
messageSends: ["perform:", "ifTrue:", "error:", "~=", "numArgs", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithArguments:",
category: 'not yet classified',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
var $early={};
try {
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(self)._numArgs()).__tild_eq(_st(args)._size());
if(smalltalk.assert($2)){
$3=_st(self)._error_("incorrect block args");
throw $early=[$3];
};
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._blockOopType(),"valueWithArguments:",args);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"valueWithArguments:",{args:args},smalltalk.TZGsBlockSend)})},
args: ["args"],
source: "valueWithArguments: args\x0a  ^ self\x0a    perform: [ \x0a      self numArgs ~= args size\x0a        ifTrue: [ ^ self error: 'incorrect block args' ].\x0a      self session rawReceiverNB: self blockOopType perform: #'valueWithArguments:' withArgs: args ]",
messageSends: ["perform:", "ifTrue:", "error:", "~=", "size", "numArgs", "rawReceiverNB:perform:withArgs:", "blockOopType", "session"],
referencedClasses: []
}),
smalltalk.TZGsBlockSend);



smalltalk.addClass('TZGsMessageSend', smalltalk.TZGsExecutable, ['receiver', 'selector', 'arguments'], 'Topez-Client-GemStone');
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@arguments"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.TZGsMessageSend)})},
args: [],
source: "arguments\x0a\x09^ arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{anObject:anObject},smalltalk.TZGsMessageSend)})},
args: ["anObject"],
source: "arguments: anObject\x0a\x09arguments := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.TZGsMessageSend)})},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.TZGsMessageSend)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.TZGsMessageSend)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{anObject:anObject},smalltalk.TZGsMessageSend)})},
args: ["anObject"],
source: "selector: anObject\x0a\x09selector := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._receiver(),_st(self)._selector(),[]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.TZGsMessageSend)})},
args: [],
source: "value\x0a  ^ self perform: [ self session rawReceiverNB: self receiver perform: self selector withArgs: {} ]",
messageSends: ["perform:", "rawReceiverNB:perform:withArgs:", "receiver", "selector", "session"],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'not yet classified',
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._receiver(),_st(self)._selector(),[arg]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{arg:arg},smalltalk.TZGsMessageSend)})},
args: ["arg"],
source: "value: arg\x0a  ^ self perform: [ self session rawReceiverNB: self receiver perform: self selector withArgs: {arg} ]",
messageSends: ["perform:", "rawReceiverNB:perform:withArgs:", "receiver", "selector", "session"],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithArguments:",
category: 'not yet classified',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._perform_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._session())._rawReceiverNB_perform_withArgs_(_st(self)._receiver(),_st(self)._selector(),_st(args)._asArray());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueWithArguments:",{args:args},smalltalk.TZGsMessageSend)})},
args: ["args"],
source: "valueWithArguments: args\x0a  ^ self perform: [ self session rawReceiverNB: self receiver perform: self selector withArgs: args asArray ]",
messageSends: ["perform:", "rawReceiverNB:perform:withArgs:", "receiver", "selector", "asArray", "session"],
referencedClasses: []
}),
smalltalk.TZGsMessageSend);



smalltalk.addClass('TodeSession', smalltalk.nil, ['topez', 'sessionDescription', 'gciLibrary'], 'Topez-Client-GemStone');
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



