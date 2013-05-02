smalltalk.addPackage('Topez-Client-Common');
smalltalk.addClass('GsRuntimeExceptionNotification', smalltalk.Notification, ['topez', 'gciErrSType'], 'Topez-Client-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "contextAsOopType",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSType())._context();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contextAsOopType",{},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: ["context", "gciErrSType"]}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "convertTDEvaluateTokenResponseToText",
fn: function (){
var self=this;
function $TextEmphasis(){return smalltalk.TextEmphasis||(typeof TextEmphasis=="undefined"?nil:TextEmphasis)}
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Text())._string_attributes_(_st(self)._description(),[_st($TextEmphasis())._italic(),_st($TextEmphasis())._bold()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"convertTDEvaluateTokenResponseToText",{},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: ["string:attributes:", "description", "italic", "bold"]}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "customDefaultAction",
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
messageSends: ["confirm:trueChoice:falseChoice:cancelChoice:default:", "description", "default", "ifNil:", "ifTrue:", "toString:"]}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultAction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._topez())._exception_context_(_st(self)._exceptionAsOopType(),_st(self)._contextAsOopType());
$1=_st(self)._customDefaultAction();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultAction",{},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: ["exception:context:", "exceptionAsOopType", "contextAsOopType", "topez", "customDefaultAction"]}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSType())._message();
return $1;
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: ["message", "gciErrSType"]}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "errorNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSType())._number();
return $1;
}, function($ctx1) {$ctx1.fill(self,"errorNumber",{},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: ["number", "gciErrSType"]}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionAsOopType",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSType())._exceptionObj();
return $1;
}, function($ctx1) {$ctx1.fill(self,"exceptionAsOopType",{},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: ["exceptionObj", "gciErrSType"]}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "gciErrSType",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gciErrSType"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciErrSType",{},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: []}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "gciErrSType:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gciErrSType"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"gciErrSType:",{anObject:anObject},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: []}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "topez",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topez"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topez",{},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: []}),
smalltalk.GsRuntimeExceptionNotification);

smalltalk.addMethod(
smalltalk.method({
selector: "topez:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topez"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"topez:",{anObject:anObject},smalltalk.GsRuntimeExceptionNotification)})},
messageSends: []}),
smalltalk.GsRuntimeExceptionNotification);



smalltalk.addClass('GsBreakpointNotification', smalltalk.GsRuntimeExceptionNotification, [], 'Topez-Client-Common');


smalltalk.addClass('GsErrorNotification', smalltalk.GsRuntimeExceptionNotification, [], 'Topez-Client-Common');


smalltalk.addClass('GsCompileErrorNotification', smalltalk.GsErrorNotification, [], 'Topez-Client-Common');


smalltalk.addClass('GsTopezCommandErrorNotification', smalltalk.GsErrorNotification, [], 'Topez-Client-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "customDefaultAction",
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
messageSends: ["ifTrue:", "customDefaultAction"]}),
smalltalk.GsTopezCommandErrorNotification);



smalltalk.addClass('GsHaltNotification', smalltalk.GsRuntimeExceptionNotification, [], 'Topez-Client-Common');


smalltalk.addClass('TZSystemWindow', smalltalk.SystemWindow, [], 'Topez-Client-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SystemWindow.fn.prototype._activate.apply(_st(self), []);
_st(_st(self)._model())._windowActive_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.TZSystemWindow)})},
messageSends: ["activate", "windowActive:", "model"]}),
smalltalk.TZSystemWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesKeyboard:",
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
messageSends: ["ifTrue:", "handlesKeyboard:", "=", "escape", "keyCharacter"]}),
smalltalk.TZSystemWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "keyStroke:",
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
messageSends: ["ifTrue:", "escapeKeyStroke", "model", "=", "escape", "keyCharacter", "keyStroke:"]}),
smalltalk.TZSystemWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "minimizeOrRestore",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"minimizeOrRestore",{},smalltalk.TZSystemWindow)})},
messageSends: []}),
smalltalk.TZSystemWindow);



