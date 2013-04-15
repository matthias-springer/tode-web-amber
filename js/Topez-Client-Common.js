smalltalk.addPackage('Topez-Client-Common');
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



