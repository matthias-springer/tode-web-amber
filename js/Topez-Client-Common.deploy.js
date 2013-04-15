smalltalk.addPackage('Topez-Client-Common');
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



