smalltalk.addPackage('Kernel-Methods');
smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.BlockClosure.comment="A BlockClosure is a lexical closure.\x0aThe JavaScript representation is a function.\x0a\x0aA BlockClosure is evaluated with the `#value*` methods in the 'evaluating' protocol."
smalltalk.addMethod(
smalltalk.method({
selector: "applyTo:arguments:",
category: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.apply(anObject, aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},smalltalk.BlockClosure)})},
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09<return self.apply(anObject, aCollection)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "asCompiledMethod:",
category: 'converting',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.method({selector:aString, fn:self});;
return self}, function($ctx1) {$ctx1.fill(self,"asCompiledMethod:",{aString:aString},smalltalk.BlockClosure)})},
args: ["aString"],
source: "asCompiledMethod: aString\x0a\x09<return smalltalk.method({selector:aString, fn:self});>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "compiledSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"compiledSource",{},smalltalk.BlockClosure)})},
args: [],
source: "compiledSource\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "cull:",
category: 'evaluating',
fn: function (anArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self)._numArgs()).__eq((0));
if(smalltalk.assert($2)){
$1=_st(self)._value();
} else {
$1=_st(self)._value_(anArg);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cull:",{anArg:anArg},smalltalk.BlockClosure)})},
args: ["anArg"],
source: "cull: anArg\x0a\x09^ self numArgs = 0 \x0a\x09\x09ifTrue: [self value]\x0a\x09\x09ifFalse: [self value: anArg]\x0a\x09",
messageSends: ["ifTrue:ifFalse:", "value", "value:", "=", "numArgs"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "cull:cull:",
category: 'evaluating',
fn: function (firstArg,secondArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self)._numArgs()).__lt((2));
if(smalltalk.assert($2)){
$1=_st(self)._cull_(firstArg);
} else {
$1=_st(self)._value_value_(firstArg,secondArg);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cull:cull:",{firstArg:firstArg,secondArg:secondArg},smalltalk.BlockClosure)})},
args: ["firstArg", "secondArg"],
source: "cull: firstArg cull: secondArg\x0a\x09^ self numArgs < 2 \x0a\x09\x09ifTrue: [self cull: firstArg]\x0a\x09\x09ifFalse: [self value: firstArg value: secondArg]\x0a\x09",
messageSends: ["ifTrue:ifFalse:", "cull:", "value:value:", "<", "numArgs"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "cull:cull:cull:",
category: 'evaluating',
fn: function (firstArg,secondArg,thirdArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self)._numArgs()).__lt((3));
if(smalltalk.assert($2)){
$1=_st(self)._cull_cull_(firstArg,secondArg);
} else {
$1=_st(self)._value_value_value_(firstArg,secondArg,thirdArg);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cull:cull:cull:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg},smalltalk.BlockClosure)})},
args: ["firstArg", "secondArg", "thirdArg"],
source: "cull: firstArg cull: secondArg cull: thirdArg\x0a\x09^self numArgs < 3 \x0a\x09\x09ifTrue: [self cull: firstArg cull: secondArg]\x0a\x09\x09ifFalse: [self value: firstArg value: secondArg value: thirdArg]\x0a\x09",
messageSends: ["ifTrue:ifFalse:", "cull:cull:", "value:value:value:", "<", "numArgs"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "currySelf",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return function () {
			var args = [ this ];
			args.push.apply(args, arguments);
			return self.apply(null, args);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"currySelf",{},smalltalk.BlockClosure)})},
args: [],
source: "currySelf\x0a\x09\x22Transforms [ :selfarg :x :y | stcode ] block\x0a\x09which represents JS function (selfarg, x, y, ...) {jscode}\x0a\x09into function (x, y, ...) {jscode} that takes selfarg from 'this'.\x0a\x09IOW, it is usable as JS method and first arg takes the receiver.\x22\x0a\x09\x0a\x09<\x0a\x09\x09return function () {\x0a\x09\x09\x09var args = [ this ];\x0a\x09\x09\x09args.push.apply(args, arguments);\x0a\x09\x09\x09return self.apply(null, args);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "ensure:",
category: 'evaluating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
try{return self()}finally{aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"ensure:",{aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["aBlock"],
source: "ensure: aBlock\x0a\x09<try{return self()}finally{aBlock._value()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "fork",
category: 'timeout/interval',
fn: function (){
var self=this;
function $ForkPool(){return smalltalk.ForkPool||(typeof ForkPool=="undefined"?nil:ForkPool)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ForkPool())._default())._fork_(self);
return self}, function($ctx1) {$ctx1.fill(self,"fork",{},smalltalk.BlockClosure)})},
args: [],
source: "fork\x0a\x09ForkPool default fork: self",
messageSends: ["fork:", "default"],
referencedClasses: ["ForkPool"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "ifCurtailed:",
category: 'error handling',
fn: function (aBlock){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._on_do_($Error(),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"ifCurtailed:",{aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["aBlock"],
source: "ifCurtailed: aBlock\x0a\x09self on: Error do: [:x | aBlock value].",
messageSends: ["on:do:", "value"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.BlockClosure)})},
args: [],
source: "new\x0a\x09\x22Use the receiver as a JS constructor.\x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:",
category: 'evaluating',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"newValue:",{anObject:anObject},smalltalk.BlockClosure)})},
args: ["anObject"],
source: "newValue: anObject\x0a\x09\x22Use the receiver as a JS constructor.\x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:value:",
category: 'evaluating',
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self(anObject, anObject2);
return self}, function($ctx1) {$ctx1.fill(self,"newValue:value:",{anObject:anObject,anObject2:anObject2},smalltalk.BlockClosure)})},
args: ["anObject", "anObject2"],
source: "newValue: anObject value: anObject2\x0a\x09\x22Use the receiver as a JS constructor.\x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject, anObject2)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:value:value:",
category: 'evaluating',
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self(anObject, anObject2,anObject3);
return self}, function($ctx1) {$ctx1.fill(self,"newValue:value:value:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.BlockClosure)})},
args: ["anObject", "anObject2", "anObject3"],
source: "newValue: anObject value: anObject2 value: anObject3\x0a\x09\x22Use the receiver as a JS constructor.\x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject, anObject2,anObject3)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "numArgs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"numArgs",{},smalltalk.BlockClosure)})},
args: [],
source: "numArgs\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'error handling',
fn: function (anErrorClass,aBlock){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self)._try_catch_(self,(function(error){
var smalltalkError;
return smalltalk.withContext(function($ctx2) {
smalltalkError=_st(_st($Smalltalk())._current())._asSmalltalkException_(error);
smalltalkError;
$2=_st(smalltalkError)._isKindOf_(anErrorClass);
if(smalltalk.assert($2)){
return _st(aBlock)._value_(smalltalkError);
} else {
return _st(smalltalkError)._signal();
};
}, function($ctx2) {$ctx2.fillBlock({error:error,smalltalkError:smalltalkError},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:do:",{anErrorClass:anErrorClass,aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["anErrorClass", "aBlock"],
source: "on: anErrorClass do: aBlock\x0a\x09\x22All exceptions thrown in the Smalltalk stack are cought.\x0a\x09Convert all JS exceptions to JavaScriptException instances.\x22\x0a\x09\x0a\x09^self try: self catch: [ :error | | smalltalkError |\x0a\x09\x09smalltalkError := Smalltalk current asSmalltalkException: error.\x0a\x09\x09(smalltalkError isKindOf: anErrorClass)\x0a\x09\x09ifTrue: [ aBlock value: smalltalkError ]\x0a\x09\x09ifFalse: [ smalltalkError signal ] ]",
messageSends: ["try:catch:", "asSmalltalkException:", "current", "ifTrue:ifFalse:", "value:", "signal", "isKindOf:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "runAfter:",
category: 'evaluating',
fn: function (milliseconds){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var method = self;
	setTimeout(method, milliseconds);
	;
return self}, function($ctx1) {$ctx1.fill(self,"runAfter:",{milliseconds:milliseconds},smalltalk.BlockClosure)})},
args: ["milliseconds"],
source: "runAfter: milliseconds\x0a\x09<\x0a\x09var method = self;\x0a\x09setTimeout(method, milliseconds);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "timeToRun",
category: 'evaluating',
fn: function (){
var self=this;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Date())._millisecondsToRun_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"timeToRun",{},smalltalk.BlockClosure)})},
args: [],
source: "timeToRun\x0a\x09\x22Answer the number of milliseconds taken to execute this block.\x22\x0a\x0a\x09^ Date millisecondsToRun: self",
messageSends: ["millisecondsToRun:"],
referencedClasses: ["Date"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self();;
return self}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.BlockClosure)})},
args: [],
source: "value\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'evaluating',
fn: function (anArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(anArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anArg:anArg},smalltalk.BlockClosure)})},
args: ["anArg"],
source: "value: anArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(anArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
category: 'evaluating',
fn: function (firstArg,secondArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(firstArg, secondArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArg:firstArg,secondArg:secondArg},smalltalk.BlockClosure)})},
args: ["firstArg", "secondArg"],
source: "value: firstArg value: secondArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(firstArg, secondArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
category: 'evaluating',
fn: function (firstArg,secondArg,thirdArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(firstArg, secondArg, thirdArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg},smalltalk.BlockClosure)})},
args: ["firstArg", "secondArg", "thirdArg"],
source: "value: firstArg value: secondArg value: thirdArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(firstArg, secondArg, thirdArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithInterval:",
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var interval = setInterval(self, aNumber);
		return smalltalk.Timeout._on_(interval);
	;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithInterval:",{aNumber:aNumber},smalltalk.BlockClosure)})},
args: ["aNumber"],
source: "valueWithInterval: aNumber\x0a\x09<\x0a\x09\x09var interval = setInterval(self, aNumber);\x0a\x09\x09return smalltalk.Timeout._on_(interval);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
category: 'evaluating',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.apply(null, aCollection);;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},smalltalk.BlockClosure)})},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09<return self.apply(null, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithTimeout:",
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var timeout = setTimeout(self, aNumber);
		return smalltalk.Timeout._on_(timeout);
	;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithTimeout:",{aNumber:aNumber},smalltalk.BlockClosure)})},
args: ["aNumber"],
source: "valueWithTimeout: aNumber\x0a\x09<\x0a\x09\x09var timeout = setTimeout(self, aNumber);\x0a\x09\x09return smalltalk.Timeout._on_(timeout);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileFalse",
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse",{},smalltalk.BlockClosure)})},
args: [],
source: "whileFalse\x0a\x09\x22inlined in the Compiler\x22\x0a\x09self whileFalse: []",
messageSends: ["whileFalse:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileFalse:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
while(!self()) {aBlock()};
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse:",{aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["aBlock"],
source: "whileFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<while(!self()) {aBlock()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTrue",
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue",{},smalltalk.BlockClosure)})},
args: [],
source: "whileTrue\x0a\x09\x22inlined in the Compiler\x22\x0a\x09self whileTrue: []",
messageSends: ["whileTrue:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTrue:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
while(self()) {aBlock()};
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue:",{aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["aBlock"],
source: "whileTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<while(self()) {aBlock()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.CompiledMethod.comment="CompiledMethod hold the source and compiled code of a class method.\x0a\x0aYou can get a CompiledMethod using `Behavior>>methodAt:`\x0a\x0a\x09String methodAt: 'lines'\x0a\x0aand read the source code\x0a\x0a\x09(String methodAt: 'lines') source\x0a\x0aSee referenced classes:\x0a\x0a\x09(String methodAt: 'lines') referencedClasses\x0a\x0aor messages sent from this method:\x0a\x09\x0a\x09(String methodAt: 'lines') messageSends"
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.args || [];
return self}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.CompiledMethod)})},
args: [],
source: "arguments\x0a\x09<return self.args || []>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._basicAt_("category");
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._defaultCategory();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.CompiledMethod)})},
args: [],
source: "category\x0a\x09^(self basicAt: 'category') ifNil: [ self defaultCategory ]",
messageSends: ["ifNil:", "defaultCategory", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "category:",
category: 'accessing',
fn: function (aString){
var self=this;
var oldProtocol;
function $MethodMoved(){return smalltalk.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
oldProtocol=_st(self)._protocol();
_st(self)._basicAt_put_("category",aString);
$1=_st($MethodMoved())._new();
_st($1)._method_(self);
_st($1)._oldProtocol_(oldProtocol);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
$3=_st(self)._methodClass();
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(_st(_st(self)._methodClass())._organization())._addElement_(aString);
_st(_st(_st(_st(self)._methodClass())._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(oldProtocol);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._methodClass())._organization())._removeElement_(oldProtocol);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"category:",{aString:aString,oldProtocol:oldProtocol},smalltalk.CompiledMethod)})},
args: ["aString"],
source: "category: aString\x0a\x09| oldProtocol |\x0a\x09oldProtocol := self protocol.\x0a\x09self basicAt: 'category' put: aString.\x0a\x0a\x09SystemAnnouncer current announce: (MethodMoved new\x0a\x09\x09method: self;\x0a\x09\x09oldProtocol: oldProtocol;\x0a\x09\x09yourself).\x0a\x0a\x09self methodClass ifNotNil: [\x0a\x09\x09self methodClass organization addElement: aString.\x0a\x09\x0a\x09\x09(self methodClass methods\x0a\x09\x09\x09select: [ :each | each protocol = oldProtocol ])\x0a\x09\x09\x09ifEmpty: [ self methodClass organization removeElement: oldProtocol ] ]",
messageSends: ["protocol", "basicAt:put:", "announce:", "method:", "new", "oldProtocol:", "yourself", "current", "ifNotNil:", "addElement:", "organization", "methodClass", "ifEmpty:", "removeElement:", "select:", "=", "methods"],
referencedClasses: ["MethodMoved", "SystemAnnouncer"]
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCategory",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "as yet unclassified";
}, function($ctx1) {$ctx1.fill(self,"defaultCategory",{},smalltalk.CompiledMethod)})},
args: [],
source: "defaultCategory\x0a\x09^ 'as yet unclassified'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fn",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicAt_("fn");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fn",{},smalltalk.CompiledMethod)})},
args: [],
source: "fn\x0a\x09^self basicAt: 'fn'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fn:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicAt_put_("fn",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fn:",{aBlock:aBlock},smalltalk.CompiledMethod)})},
args: ["aBlock"],
source: "fn: aBlock\x0a\x09self basicAt: 'fn' put: aBlock",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompiledMethod",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isCompiledMethod",{},smalltalk.CompiledMethod)})},
args: [],
source: "isCompiledMethod\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden",
category: 'testing',
fn: function (){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
selector=_st(self)._selector();
_st(_st(self)._methodClass())._allSubclassesDo_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._includesSelector_(selector);
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"isOverridden",{selector:selector},smalltalk.CompiledMethod)})},
args: [],
source: "isOverridden\x0a\x09| selector |\x0a    \x0a    selector := self selector.\x0a    self methodClass allSubclassesDo: [ :each |\x0a\x09    (each includesSelector: selector)\x0a        \x09ifTrue: [ ^ true ] ].\x0a\x09^ false",
messageSends: ["selector", "allSubclassesDo:", "ifTrue:", "includesSelector:", "methodClass"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride",
category: 'testing',
fn: function (){
var self=this;
var superclass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
superclass=_st(_st(self)._methodClass())._superclass();
$1=superclass;
if(($receiver = $1) == nil || $receiver == undefined){
return false;
} else {
$1;
};
$2=_st(_st(_st(_st(self)._methodClass())._superclass())._lookupSelector_(_st(self)._selector()))._notNil();
return $2;
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass},smalltalk.CompiledMethod)})},
args: [],
source: "isOverride\x0a\x09| superclass |\x0a    \x0a    superclass := self methodClass superclass.\x0a\x09superclass ifNil: [ ^ false ].\x0a\x09\x0a    ^ (self methodClass superclass lookupSelector: self selector) notNil",
messageSends: ["superclass", "methodClass", "ifNil:", "notNil", "lookupSelector:", "selector"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicAt_("messageSends");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.CompiledMethod)})},
args: [],
source: "messageSends\x0a\x09^self basicAt: 'messageSends'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "methodClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicAt_("methodClass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodClass",{},smalltalk.CompiledMethod)})},
args: [],
source: "methodClass\x0a\x09^self basicAt: 'methodClass'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._category();
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.CompiledMethod)})},
args: [],
source: "protocol\x0a\x09^ self category",
messageSends: ["category"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._category_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString},smalltalk.CompiledMethod)})},
args: ["aString"],
source: "protocol: aString\x0a\x09self category: aString",
messageSends: ["category:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "referencedClasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicAt_("referencedClasses");
return $1;
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},smalltalk.CompiledMethod)})},
args: [],
source: "referencedClasses\x0a\x09^self basicAt: 'referencedClasses'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicAt_("selector");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.CompiledMethod)})},
args: [],
source: "selector\x0a\x09^self basicAt: 'selector'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicAt_put_("selector",aString);
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.CompiledMethod)})},
args: ["aString"],
source: "selector: aString\x0a\x09self basicAt: 'selector' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._basicAt_("source");
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.CompiledMethod)})},
args: [],
source: "source\x0a\x09^(self basicAt: 'source') ifNil: ['']",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicAt_put_("source",aString);
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.CompiledMethod)})},
args: ["aString"],
source: "source: aString\x0a\x09self basicAt: 'source' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);



smalltalk.addClass('ForkPool', smalltalk.Object, ['poolSize', 'maxPoolSize', 'queue', 'worker'], 'Kernel-Methods');
smalltalk.ForkPool.comment="A ForkPool is responsible for handling forked blocks.\x0aThe pool size sets the maximum concurrent forked blocks.\x0a\x0aThe default instance is accessed with `ForkPool default`"
smalltalk.addMethod(
smalltalk.method({
selector: "addWorker",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@worker"])._valueWithTimeout_((0));
self["@poolSize"]=_st(self["@poolSize"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"addWorker",{},smalltalk.ForkPool)})},
args: [],
source: "addWorker\x0a\x09worker valueWithTimeout: 0.\x0a\x09poolSize := poolSize + 1",
messageSends: ["valueWithTimeout:", "+"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMaxPoolSize",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._defaultMaxPoolSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},smalltalk.ForkPool)})},
args: [],
source: "defaultMaxPoolSize\x0a\x09^ self class defaultMaxPoolSize",
messageSends: ["defaultMaxPoolSize", "class"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "fork:",
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@poolSize"]).__lt(_st(self)._maxPoolSize());
if(smalltalk.assert($1)){
_st(self)._addWorker();
};
_st(self["@queue"])._nextPut_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fork:",{aBlock:aBlock},smalltalk.ForkPool)})},
args: ["aBlock"],
source: "fork: aBlock\x0a\x09poolSize < self maxPoolSize ifTrue: [ self addWorker ].\x0a\x09queue nextPut: aBlock",
messageSends: ["ifTrue:", "addWorker", "<", "maxPoolSize", "nextPut:"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Queue(){return smalltalk.Queue||(typeof Queue=="undefined"?nil:Queue)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@poolSize"]=(0);
self["@queue"]=_st($Queue())._new();
self["@worker"]=_st(self)._makeWorker();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ForkPool)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09poolSize := 0.\x0a\x09queue := Queue new.\x0a\x09worker := self makeWorker",
messageSends: ["initialize", "new", "makeWorker"],
referencedClasses: ["Queue"]
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "makeWorker",
category: 'initialization',
fn: function (){
var self=this;
var sentinel;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
sentinel=_st($Object())._new();
$1=(function(){
var block;
return smalltalk.withContext(function($ctx2) {
self["@poolSize"]=_st(self["@poolSize"]).__minus((1));
self["@poolSize"];
block=_st(self["@queue"])._nextIfAbsent_((function(){
return smalltalk.withContext(function($ctx3) {
return sentinel;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
block;
$2=_st(block).__eq_eq(sentinel);
if(! smalltalk.assert($2)){
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(block)._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._addWorker();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
};
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeWorker",{sentinel:sentinel},smalltalk.ForkPool)})},
args: [],
source: "makeWorker\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09^[ | block |\x0a\x09\x09poolSize := poolSize - 1.\x0a\x09\x09block := queue nextIfAbsent: [ sentinel ].\x0a\x09\x09block == sentinel ifFalse: [\x0a\x09\x09\x09[ block value ] ensure: [ self addWorker ]]]",
messageSends: ["new", "-", "nextIfAbsent:", "ifFalse:", "ensure:", "addWorker", "value", "=="],
referencedClasses: ["Object"]
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPoolSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@maxPoolSize"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._defaultMaxPoolSize();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxPoolSize",{},smalltalk.ForkPool)})},
args: [],
source: "maxPoolSize\x0a\x09^ maxPoolSize ifNil: [ self defaultMaxPoolSize ]",
messageSends: ["ifNil:", "defaultMaxPoolSize"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPoolSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxPoolSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"maxPoolSize:",{anInteger:anInteger},smalltalk.ForkPool)})},
args: ["anInteger"],
source: "maxPoolSize: anInteger\x0a\x09maxPoolSize := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ForkPool);


smalltalk.ForkPool.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=_st(self)._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ForkPool.klass)})},
args: [],
source: "default\x0a\x09^default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMaxPoolSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(100);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},smalltalk.ForkPool.klass)})},
args: [],
source: "defaultMaxPoolSize\x0a\x09^100",
messageSends: [],
referencedClasses: []
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetDefault",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetDefault",{},smalltalk.ForkPool.klass)})},
args: [],
source: "resetDefault\x0a\x09default := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ForkPool.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.Message.comment="Generally, the system does not use instances of Message for efficiency reasons.\x0aHowever, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission.\x0aThis instance is sent it as an argument with the message `doesNotUnderstand:` to the receiver.\x0a\x0aSee boot.js, `messageNotUnderstood` and its counterpart `Object>>doesNotUnderstand:`"
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@arguments"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.Message)})},
args: [],
source: "arguments\x0a\x09^arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{anArray:anArray},smalltalk.Message)})},
args: ["anArray"],
source: "arguments: anArray\x0a\x09arguments := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Object.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._nextPutAll_("(");
_st($1)._nextPutAll_(_st(self)._selector());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Message)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "selector"],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.Message)})},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.Message)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "sendTo:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_withArguments_(_st(self)._selector(),_st(self)._arguments());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendTo:",{anObject:anObject},smalltalk.Message)})},
args: ["anObject"],
source: "sendTo: anObject\x0a\x09^ anObject perform: self selector withArguments: self arguments",
messageSends: ["perform:withArguments:", "selector", "arguments"],
referencedClasses: []
}),
smalltalk.Message);


smalltalk.addMethod(
smalltalk.method({
selector: "selector:arguments:",
category: 'instance creation',
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._selector_(aString);
_st($2)._arguments_(anArray);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:arguments:",{aString:aString,anArray:anArray},smalltalk.Message.klass)})},
args: ["aString", "anArray"],
source: "selector: aString arguments: anArray\x0a\x09^self new\x0a\x09\x09selector: aString;\x0a\x09\x09arguments: anArray;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "arguments:", "yourself"],
referencedClasses: []
}),
smalltalk.Message.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.MethodContext.comment="MethodContext holds all the dynamic state associated with the execution of either a method activation resulting from a message send. That is used to build the call stack while debugging.\x0a\x0aMethodContext instances are JavaScript `SmalltalkMethodContext` objects defined in boot.js"
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._isBlockContext();
if(smalltalk.assert($2)){
$1=_st(_st("a block (in ").__comma(_st(_st(_st(_st(self)._methodContext())._receiver())._class())._printString())).__comma(")");
} else {
$1=_st(_st(_st(_st(_st(self)._receiver())._class())._printString()).__comma(" >> ")).__comma(_st(self)._selector());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.MethodContext)})},
args: [],
source: "asString\x0a\x09^self isBlockContext\x0a\x09\x09ifTrue: [ 'a block (in ', self methodContext receiver class printString, ')' ]\x0a\x09\x09ifFalse: [ self receiver class printString, ' >> ', self selector ]",
messageSends: ["ifTrue:ifFalse:", ",", "printString", "class", "receiver", "methodContext", "selector", "isBlockContext"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "home",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.methodContext || self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"home",{},smalltalk.MethodContext)})},
args: [],
source: "home\x0a\x09<return self.methodContext || self.homeContext>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockContext",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._selector())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},smalltalk.MethodContext)})},
args: [],
source: "isBlockContext\x0a\x09\x22Block context do not have selectors.\x22\x0a\x09\x0a\x09^ self selector isNil",
messageSends: ["isNil", "selector"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.locals;
return self}, function($ctx1) {$ctx1.fill(self,"locals",{},smalltalk.MethodContext)})},
args: [],
source: "locals\x0a\x09<return self.locals>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self)._methodContext())._receiver())._class())._lookupSelector_(_st(_st(self)._methodContext())._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodContext)})},
args: [],
source: "method\x0a\x09^self methodContext receiver class lookupSelector: self methodContext selector",
messageSends: ["lookupSelector:", "selector", "methodContext", "class", "receiver"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._isBlockContext();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(self)._home();
return $3;
}, function($ctx1) {$ctx1.fill(self,"methodContext",{},smalltalk.MethodContext)})},
args: [],
source: "methodContext\x0a\x09self isBlockContext ifFalse: [ ^ self ].\x0a\x09\x0a\x09^ self home",
messageSends: ["ifFalse:", "isBlockContext", "home"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"outerContext",{},smalltalk.MethodContext)})},
args: [],
source: "outerContext\x0a\x09<return self.homeContext>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "pc",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.pc;
return self}, function($ctx1) {$ctx1.fill(self,"pc",{},smalltalk.MethodContext)})},
args: [],
source: "pc\x0a\x09<return self.pc>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Object.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._nextPutAll_("(");
_st($1)._nextPutAll_(_st(self)._asString());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.MethodContext)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self asString;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.receiver;
return self}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.MethodContext)})},
args: [],
source: "receiver\x0a\x09<return self.receiver>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self.selector) {
			return smalltalk.convertSelector(self.selector);
		} else {
			return nil;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.MethodContext)})},
args: [],
source: "selector\x0a\x09<\x0a\x09\x09if(self.selector) {\x0a\x09\x09\x09return smalltalk.convertSelector(self.selector);\x0a\x09\x09} else {\x0a\x09\x09\x09return nil;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._deprecatedAPI();
$1=_st(self)._locals();
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},smalltalk.MethodContext)})},
args: [],
source: "temps\x0a\x09self deprecatedAPI.\x0a\x09\x0a\x09^ self locals",
messageSends: ["deprecatedAPI", "locals"],
referencedClasses: []
}),
smalltalk.MethodContext);



smalltalk.addClass('NativeFunction', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.NativeFunction.comment="NativeFunction is a wrapper around native functions, such as `WebSocket`.\x0aFor 'normal' functions (whose constructor is the JavaScript `Function` object), use `BlockClosure`.\x0a\x0aSee the class-side `instance creation` methods.\x0a\x0aCreated instances will most probably be instance of `JSObjectProxy`.\x0a\x0aUsage example:\x0a\x0a\x09| ws |\x0a\x09ws := NativeFunction constructor: 'WebSocket' value: 'ws://localhost'.\x0a\x09ws at: 'onopen' put: [ ws send: 'hey there from Amber' ]"

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native();
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:",{aString:aString},smalltalk.NativeFunction.klass)})},
args: ["aString"],
source: "constructor: aString\x0a\x09<\x0a\x09\x09var native=eval(aString);\x0a\x09\x09return new native();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:",
category: 'instance creation',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:",{aString:aString,anObject:anObject},smalltalk.NativeFunction.klass)})},
args: ["aString", "anObject"],
source: "constructor: aString value:anObject\x0a\x09<\x0a\x09\x09var native=eval(aString);\x0a\x09\x09return new native(anObject);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:value:",
category: 'instance creation',
fn: function (aString,anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject,anObject2);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2},smalltalk.NativeFunction.klass)})},
args: ["aString", "anObject", "anObject2"],
source: "constructor: aString value:anObject value: anObject2\x0a\x09<\x0a\x09\x09var native=eval(aString);\x0a\x09\x09return new native(anObject,anObject2);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:value:value:",
category: 'instance creation',
fn: function (aString,anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject,anObject2, anObject3);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.NativeFunction.klass)})},
args: ["aString", "anObject", "anObject2", "anObject3"],
source: "constructor: aString value:anObject value: anObject2 value:anObject3\x0a\x09<\x0a\x09\x09var native=eval(aString);\x0a\x09\x09return new native(anObject,anObject2, anObject3);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exists:",
category: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(aString in window) {
			return true
		} else {
			return false
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"exists:",{aString:aString},smalltalk.NativeFunction.klass)})},
args: ["aString"],
source: "exists: aString\x0a\x09<\x0a\x09\x09if(aString in window) {\x0a\x09\x09\x09return true\x0a\x09\x09} else {\x0a\x09\x09\x09return false\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);


