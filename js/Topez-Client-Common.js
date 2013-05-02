smalltalk.addPackage('Topez-Client-Common');
smalltalk.addClass('GsRuntimeExceptionNotification', smalltalk.Notification, ['topez', 'gciErrSType'], 'Topez-Client-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "contextAsOopType",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSType())._context();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contextAsOopType",{},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "contextAsOopType\x0a  ^ self gciErrSType context",
messageSends: ["context", "gciErrSType"],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "convertTDEvaluateTokenResponseToText",
category: 'not yet classified',
fn: function (){
var self=this;
function $TextEmphasis(){return smalltalk.TextEmphasis||(typeof TextEmphasis=="undefined"?nil:TextEmphasis)}
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Text())._string_attributes_(_st(self)._description(),[_st($TextEmphasis())._italic(),_st($TextEmphasis())._bold()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"convertTDEvaluateTokenResponseToText",{},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "convertTDEvaluateTokenResponseToText\x0a  ^ Text\x0a    string: self description\x0a    attributes:\x0a      {(TextEmphasis italic).\x0a      (TextEmphasis bold)}",
messageSends: ["string:attributes:", "description", "italic", "bold"],
referencedClasses: ["TextEmphasis", "Text"]
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "customDefaultAction",
category: 'not yet classified',
fn: function (){
var self=this;
var answer,process;
function $UIManager(){return smalltalk.UIManager||(typeof UIManager=="undefined"?nil:UIManager)}
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
answer=_st(_st($UIManager())._default())._confirm_trueChoice_falseChoice_cancelChoice_default_(_st(self)._description(),"Proceed","Abort","Debug",false);
$1=answer;
if(($receiver = $1) == nil || $receiver == undefined){
$2=["debug",self];
return $2;
} else {
$1;
};
$3=answer;
if(smalltalk.assert($3)){
return "resume";
};
$4=["abort",_st($STON())._toString_("Aborted...")];
return $4;
}, function($ctx1) {$ctx1.fill(self,"customDefaultAction",{answer:answer,process:process},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "customDefaultAction\x0a  | answer process |\x0a  answer := UIManager default\x0a    confirm: self description\x0a    trueChoice: 'Proceed'\x0a    falseChoice: 'Abort'\x0a    cancelChoice: 'Debug'\x0a    default: false.\x0a  answer\x0a    ifNil: [ \x0a      ^ {#'debug'.\x0a      self} ].\x0a  answer\x0a    ifTrue: [ ^ #'resume' ].\x0a  ^ {#'abort'.\x0a  (STON toString: 'Aborted...')}",
messageSends: ["confirm:trueChoice:falseChoice:cancelChoice:default:", "description", "default", "ifNil:", "ifTrue:", "toString:"],
referencedClasses: ["UIManager", "STON"]
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAction",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._topez())._exception_context_(_st(self)._exceptionAsOopType(),_st(self)._contextAsOopType());
$1=_st(self)._customDefaultAction();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultAction",{},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "defaultAction\x0a  self topez exception: self exceptionAsOopType context: self contextAsOopType.\x0a  ^ self customDefaultAction",
messageSends: ["exception:context:", "exceptionAsOopType", "contextAsOopType", "topez", "customDefaultAction"],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSType())._message();
return $1;
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "description\x0a  ^ self gciErrSType message",
messageSends: ["message", "gciErrSType"],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "errorNumber",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSType())._number();
return $1;
}, function($ctx1) {$ctx1.fill(self,"errorNumber",{},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "errorNumber\x0a  ^ self gciErrSType number",
messageSends: ["number", "gciErrSType"],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionAsOopType",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSType())._exceptionObj();
return $1;
}, function($ctx1) {$ctx1.fill(self,"exceptionAsOopType",{},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "exceptionAsOopType\x0a  ^ self gciErrSType exceptionObj",
messageSends: ["exceptionObj", "gciErrSType"],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "gciErrSType",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gciErrSType"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciErrSType",{},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "gciErrSType\x0a\x09^ gciErrSType",
messageSends: [],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "gciErrSType:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gciErrSType"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"gciErrSType:",{anObject:anObject},smalltalk.GsRuntimeExceptionNotification)})},
args: ["anObject"],
source: "gciErrSType: anObject\x0a\x09gciErrSType := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);

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
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.GsRuntimeExceptionNotification)})},
args: [],
source: "topez\x0a\x09^ topez",
messageSends: [],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "topez:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topez"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"topez:",{anObject:anObject},smalltalk.GsRuntimeExceptionNotification)})},
args: ["anObject"],
source: "topez: anObject\x0a  topez := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GsRuntimeExceptionNotification);



smalltalk.addClass('GsBreakpointNotification', smalltalk.GsRuntimeExceptionNotification, [], 'Topez-Client-Common');


smalltalk.addClass('GsErrorNotification', smalltalk.GsRuntimeExceptionNotification, [], 'Topez-Client-Common');


smalltalk.addClass('GsCompileErrorNotification', smalltalk.GsErrorNotification, [], 'Topez-Client-Common');


smalltalk.addClass('GsTopezCommandErrorNotification', smalltalk.GsErrorNotification, [], 'Topez-Client-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "customDefaultAction",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
if(smalltalk.assert(true)){
$1=smalltalk.GsErrorNotification.fn.prototype._customDefaultAction.apply(_st(self), []);
return $1;
};
$2=["debug",self];
return $2;
}, function($ctx1) {$ctx1.fill(self,"customDefaultAction",{},smalltalk.GsTopezCommandErrorNotification)})},
args: [],
source: "customDefaultAction\x0a  true\x0a    ifTrue: [ ^ super customDefaultAction ].\x0a  ^ {#'debug'.\x0a  self}",
messageSends: ["ifTrue:", "customDefaultAction"],
referencedClasses: []
}),
smalltalk.GsTopezCommandErrorNotification);



smalltalk.addClass('GsHaltNotification', smalltalk.GsRuntimeExceptionNotification, [], 'Topez-Client-Common');


smalltalk.addClass('TZSystemWindow', smalltalk.SystemWindow, [], 'Topez-Client-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
category: 'resize-collapse',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SystemWindow.fn.prototype._activate.apply(_st(self), []);
_st(_st(self)._model())._windowActive_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.TZSystemWindow)})},
args: [],
source: "activate\x0a    super activate.\x0a    self model windowActive: self",
messageSends: ["activate", "windowActive:", "model"],
referencedClasses: []
}),
smalltalk.TZSystemWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesKeyboard:",
category: 'keyboard handling',
fn: function (evt){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=smalltalk.SystemWindow.fn.prototype._handlesKeyboard_.apply(_st(self), [evt]);
if(smalltalk.assert($1)){
return true;
};
$2=_st(_st(evt)._keyCharacter()).__eq(_st($Character())._escape());
return $2;
}, function($ctx1) {$ctx1.fill(self,"handlesKeyboard:",{evt:evt},smalltalk.TZSystemWindow)})},
args: ["evt"],
source: "handlesKeyboard: evt\x0a    \x22Return true if the receiver wishes to handle the given keyboard event\x22\x0a\x0a    (super handlesKeyboard: evt)\x0a        ifTrue: [ ^ true ].\x0a    ^ evt keyCharacter = Character escape",
messageSends: ["ifTrue:", "handlesKeyboard:", "=", "escape", "keyCharacter"],
referencedClasses: ["Character"]
}),
smalltalk.TZSystemWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "keyStroke:",
category: 'keyboard handling',
fn: function (evt){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(evt)._keyCharacter()).__eq(_st($Character())._escape());
if(smalltalk.assert($1)){
$2=_st(_st(self)._model())._escapeKeyStroke();
return $2;
};
$3=smalltalk.SystemWindow.fn.prototype._keyStroke_.apply(_st(self), [evt]);
return $3;
}, function($ctx1) {$ctx1.fill(self,"keyStroke:",{evt:evt},smalltalk.TZSystemWindow)})},
args: ["evt"],
source: "keyStroke: evt\x0a    \x22Check for close window.\x22\x0a\x0a    evt keyCharacter = Character escape\x0a        ifTrue: [ \x0a            \x22switch focus back to topez window\x22\x0a            ^ self model escapeKeyStroke ].\x0a    ^ super keyStroke: evt",
messageSends: ["ifTrue:", "escapeKeyStroke", "model", "=", "escape", "keyCharacter", "keyStroke:"],
referencedClasses: ["Character"]
}),
smalltalk.TZSystemWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "minimizeOrRestore",
category: 'keyboard handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"minimizeOrRestore",{},smalltalk.TZSystemWindow)})},
args: [],
source: "minimizeOrRestore\x0a    \x22TODO: implement\x22\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.TZSystemWindow);



