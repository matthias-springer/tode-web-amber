smalltalk.addPackage('Kernel-Collections');
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.Association.comment="I represent a pair of associated objects, a key and a value. My instances can serve as entries in a dictionary.\x0a\x0aInstances can be created with the class-side method `#key:value:`"
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class()).__eq(_st(anAssociation)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._key()).__eq(_st(anAssociation)._key()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self)._value()).__eq(_st(anAssociation)._value());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anAssociation:anAssociation},smalltalk.Association)})},
args: ["anAssociation"],
source: "= anAssociation\x0a\x09^self class = anAssociation class and: [\x0a\x09\x09self key = anAssociation key and: [\x0a\x09\x09self value = anAssociation value]]",
messageSends: ["and:", "=", "value", "key", "class"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@key"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.Association)})},
args: [],
source: "key\x0a\x09^key",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@key"]=aKey;
return self}, function($ctx1) {$ctx1.fill(self,"key:",{aKey:aKey},smalltalk.Association)})},
args: ["aKey"],
source: "key: aKey\x0a\x09key := aKey",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._key())._printOn_(aStream);
_st(aStream)._nextPutAll_(" -> ");
_st(_st(self)._value())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Association)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09self key printOn: aStream.\x0a\x09aStream nextPutAll: ' -> '.\x0a\x09self value printOn: aStream",
messageSends: ["printOn:", "key", "nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.Association)})},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aValue:aValue},smalltalk.Association)})},
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);


smalltalk.addMethod(
smalltalk.method({
selector: "key:value:",
category: 'instance creation',
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._key_(aKey);
_st($2)._value_(aValue);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:value:",{aKey:aKey,aValue:aValue},smalltalk.Association.klass)})},
args: ["aKey", "aValue"],
source: "key: aKey value: aValue\x0a\x09\x09^self new\x0a\x09\x09key: aKey;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["key:", "new", "value:", "yourself"],
referencedClasses: []
}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.Collection.comment="I am the abstract superclass of all classes that represent a group of elements.\x0a\x0aI provide a set of useful methods to the Collectiohn hierarchy such as enumerating and converting methods."
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: ", aCollection\x0a\x09^self copy\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Collection)})},
args: ["anObject"],
source: "add: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
category: 'adding/removing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: "addAll: aCollection\x0a\x09aCollection do: [:each |\x0a\x09\x09self add: each].\x0a\x09^aCollection",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "allSatisfy:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(! smalltalk.assert($1)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"allSatisfy:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "allSatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns false for any element return false.\x0a\x09Otherwise return true.\x22\x0a\x0a\x09self do: [:each | (aBlock value: each) ifFalse: [^ false]].\x0a\x09^ true",
messageSends: ["do:", "ifFalse:", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
category: 'converting',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.Collection)})},
args: [],
source: "asArray\x0a\x09^Array withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Array"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asCommaString",
category: 'printing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(self)._asStringOn_delimiter_(s,", ");
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asCommaString",{},smalltalk.Collection)})},
args: [],
source: "asCommaString\x0a\x09\x22Return collection printed as 'a, b, c' \x22\x0a\x0a\x09^String streamContents: [:s | self asStringOn: s delimiter: ', ']\x0a\x09\x09",
messageSends: ["streamContents:", "asStringOn:delimiter:"],
referencedClasses: ["String"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asCommaStringAnd",
category: 'printing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(self)._asStringOn_delimiter_last_(s,", "," and ");
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asCommaStringAnd",{},smalltalk.Collection)})},
args: [],
source: "asCommaStringAnd\x0a\x09\x22Return collection printed as 'a, b and c' \x22\x0a\x0a\x09^String streamContents: [:s | self asStringOn: s delimiter: ', ' last: ' and ']\x0a\x09\x09",
messageSends: ["streamContents:", "asStringOn:delimiter:last:"],
referencedClasses: ["String"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asDictionary",
category: 'converting',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._as_($Dictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},smalltalk.Collection)})},
args: [],
source: "asDictionary\x0a\x0a\x09^ self as: Dictionary",
messageSends: ["as:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asArray())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asJSON();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Collection)})},
args: [],
source: "asJSON\x0a\x09^self asArray collect: [:each | each asJSON]",
messageSends: ["collect:", "asJSON", "asArray"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asOrderedCollection",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{},smalltalk.Collection)})},
args: [],
source: "asOrderedCollection\x0a\x09^self asArray",
messageSends: ["asArray"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asSet",
category: 'converting',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Set())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSet",{},smalltalk.Collection)})},
args: [],
source: "asSet\x0a\x09^Set withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asStringOn:delimiter:",
category: 'printing',
fn: function (aStream,delimString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._do_separatedBy_((function(elem){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(_st(elem)._asString());
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(delimString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"asStringOn:delimiter:",{aStream:aStream,delimString:delimString},smalltalk.Collection)})},
args: ["aStream", "delimString"],
source: "asStringOn: aStream delimiter: delimString\x0a\x09\x22Print elements on a stream separated\x0a\x09with a delimiter String like: 'a, b, c'\x0a\x09Uses #asString instead of #print:.\x22\x0a\x0a\x09self do: [:elem | aStream nextPutAll: elem asString]\x0a\x09\x09separatedBy: [aStream nextPutAll: delimString]",
messageSends: ["do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asStringOn:delimiter:last:",
category: 'printing',
fn: function (aStream,delimString,lastDelimString){
var self=this;
var n,sz;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
n=(1);
sz=_st(self)._size();
_st(self)._do_separatedBy_((function(elem){
return smalltalk.withContext(function($ctx2) {
n=_st(n).__plus((1));
n;
return _st(aStream)._nextPutAll_(_st(elem)._asString());
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$1=aStream;
$3=_st(n).__eq(sz);
if(smalltalk.assert($3)){
$2=lastDelimString;
} else {
$2=delimString;
};
return _st($1)._nextPutAll_($2);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"asStringOn:delimiter:last:",{aStream:aStream,delimString:delimString,lastDelimString:lastDelimString,n:n,sz:sz},smalltalk.Collection)})},
args: ["aStream", "delimString", "lastDelimString"],
source: "asStringOn: aStream delimiter: delimString last: lastDelimString\x0a\x09\x22Print elements on a stream separated\x0a\x09with a delimiter between all the elements and with\x0a\x09a special one before the last like: 'a, b and c'.\x0a\x09Uses #asString instead of #print:\x0a\x0a\x09Note: Feel free to improve the code to detect the last element.\x22\x0a\x0a\x09| n sz |\x0a\x09n := 1.\x0a\x09sz := self size.\x0a\x09self do: [:elem |\x0a\x09\x09n := n + 1.\x0a\x09\x09aStream nextPutAll: elem asString]\x0a\x09separatedBy: [\x0a\x09\x09aStream nextPutAll: (n = sz ifTrue: [lastDelimString] ifFalse: [delimString])]",
messageSends: ["size", "do:separatedBy:", "+", "nextPutAll:", "asString", "ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "associationsDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "associationsDo: aBlock\x0a\x09\x22Evaluate aBlock for each of the receiver's elements (key/value \x0a\x09associations).  If any non-association is within, the error is not caught now,\x0a\x09but later, when a key or value message is sent to it.\x22\x0a\x0a\x09self do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=_st(_st(_st(self)._class())._new())._writeStream();
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPut_(_st(aBlock)._value_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,stream:stream},smalltalk.Collection)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09stream nextPut: (aBlock value: each) ].\x0a\x09^stream contents",
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWith:",
category: 'copying',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWith:",{anObject:anObject},smalltalk.Collection)})},
args: ["anObject"],
source: "copyWith: anObject\x0a\x09^self copy add: anObject; yourself",
messageSends: ["add:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithAll:",
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithAll:",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: "copyWithAll: aCollection\x0a\x09^self copy addAll: aCollection; yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithoutAll:",
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aCollection)._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithoutAll:",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: "copyWithoutAll: aCollection\x0a\x09\x22Answer a copy of the receiver that does not contain any elements\x0a\x09equal to those in aCollection.\x22\x0a\x0a\x09^ self reject: [:each | aCollection includes: each]",
messageSends: ["reject:", "includes:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._detect_ifNone_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^self detect: aBlock ifNone: [self errorNotFound]",
messageSends: ["detect:ifNone:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Collection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:separatedBy:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var actionBeforeElement;
return smalltalk.withContext(function($ctx1) { 
actionBeforeElement=(function(){
return smalltalk.withContext(function($ctx2) {
actionBeforeElement=anotherBlock;
return actionBeforeElement;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(actionBeforeElement)._value();
return _st(aBlock)._value_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:separatedBy:",{aBlock:aBlock,anotherBlock:anotherBlock,actionBeforeElement:actionBeforeElement},smalltalk.Collection)})},
args: ["aBlock", "anotherBlock"],
source: "do: aBlock separatedBy: anotherBlock\x0a\x09| actionBeforeElement |\x0a\x09actionBeforeElement := [actionBeforeElement := anotherBlock].\x0a\x09self do: [:each |\x0a\x09\x09actionBeforeElement value.\x0a\x09\x09aBlock value: each]",
messageSends: ["do:", "value", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "errorNotFound",
category: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("Object is not in the collection");
return self}, function($ctx1) {$ctx1.fill(self,"errorNotFound",{},smalltalk.Collection)})},
args: [],
source: "errorNotFound\x0a\x09self error: 'Object is not in the collection'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifEmpty:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._isEmpty();
if(smalltalk.assert($2)){
$1=_st(aBlock)._value();
} else {
$1=self;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "ifEmpty: aBlock\x0a\x09\x22Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: self classifyMethodAs:\x0a\x09\x09(myProtocol ifEmpty: ['As yet unclassified'])\x22\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: [ aBlock value ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "value", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotEmpty:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._notEmpty();
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "ifNotEmpty: aBlock\x0a\x09self notEmpty ifTrue: aBlock.",
messageSends: ["ifTrue:", "notEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
var sentinel;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1;
sentinel=_st($Object())._new();
$1=_st(_st(self)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return sentinel;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__tild_eq(sentinel);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject,sentinel:sentinel},smalltalk.Collection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09^(self detect: [ :each | each = anObject] ifNone: [ sentinel ]) ~= sentinel",
messageSends: ["new", "~=", "detect:ifNone:", "="],
referencedClasses: ["Object"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "inject:into:",
category: 'enumerating',
fn: function (anObject,aBlock){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=anObject;
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
result=_st(aBlock)._value_value_(result,each);
return result;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inject:into:",{anObject:anObject,aBlock:aBlock,result:result},smalltalk.Collection)})},
args: ["anObject", "aBlock"],
source: "inject: anObject into: aBlock\x0a\x09| result |\x0a\x09result := anObject.\x0a\x09self do: [:each |\x0a\x09\x09result := aBlock value: result value: each].\x0a\x09^result",
messageSends: ["do:", "value:value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "intersection:",
category: 'enumerating',
fn: function (aCollection){
var self=this;
var set,outputSet;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
set=_st(self)._asSet();
outputSet=_st($Set())._new();
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(set)._includes_(each))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(outputSet)._includes_(each))._not();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
return _st(outputSet)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(_st(self)._class())._withAll_(_st(outputSet)._asArray());
return $2;
}, function($ctx1) {$ctx1.fill(self,"intersection:",{aCollection:aCollection,set:set,outputSet:outputSet},smalltalk.Collection)})},
args: ["aCollection"],
source: "intersection: aCollection\x0a\x09\x22Answer the set theoretic intersection of two collections.\x22\x0a\x0a\x09| set outputSet |\x0a\x09\x0a\x09set := self asSet.\x0a\x09outputSet := Set new.\x0a\x09\x0a\x09aCollection do: [ :each |\x0a\x09\x09((set includes: each) and: [(outputSet includes: each) not])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09outputSet add: each]].\x0a\x09\x09\x0a\x09^ self class withAll: outputSet asArray",
messageSends: ["asSet", "new", "do:", "ifTrue:", "add:", "and:", "not", "includes:", "withAll:", "asArray", "class"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},smalltalk.Collection)})},
args: [],
source: "isEmpty\x0a\x09^self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "max",
category: 'enumerating',
fn: function (){
var self=this;
var greatest;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._size()).__eq_eq((0));
if(smalltalk.assert($1)){
_st(self)._error_("collection is empty");
};
_st(self)._do_((function(el){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(greatest).__eq(nil))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(el).__gt(greatest);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
greatest=el;
return greatest;
};
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
$3=greatest;
return $3;
}, function($ctx1) {$ctx1.fill(self,"max",{greatest:greatest},smalltalk.Collection)})},
args: [],
source: "max\x0a\x09|greatest|\x0a\x09self size == 0\x0a\x09\x09ifTrue: [self error: 'collection is empty'].\x0a\x09self do: [:el |\x0a\x09\x09(greatest = nil or: [el > greatest])\x0a\x09\x09\x09ifTrue: [greatest := el]].\x0a\x09^ greatest",
messageSends: ["ifTrue:", "error:", "==", "size", "do:", "or:", ">", "="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "min",
category: 'enumerating',
fn: function (){
var self=this;
var smallest;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._size()).__eq_eq((0));
if(smalltalk.assert($1)){
_st(self)._error_("collection is empty");
};
_st(self)._do_((function(el){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(smallest).__eq(nil))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(el).__lt(smallest);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
smallest=el;
return smallest;
};
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
$3=smallest;
return $3;
}, function($ctx1) {$ctx1.fill(self,"min",{smallest:smallest},smalltalk.Collection)})},
args: [],
source: "min\x0a\x09|smallest|\x0a\x09self size == 0\x0a\x09\x09ifTrue: [self error: 'collection is empty'].\x0a\x09self do: [:el |\x0a\x09\x09(smallest = nil or: [el < smallest])\x0a\x09\x09\x09ifTrue: [smallest := el]].\x0a\x09^ smallest",
messageSends: ["ifTrue:", "error:", "==", "size", "do:", "or:", "<", "="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "notEmpty",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{},smalltalk.Collection)})},
args: [],
source: "notEmpty\x0a\x09^self isEmpty not",
messageSends: ["not", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "occurrencesOf:",
category: 'accessing',
fn: function (anObject){
var self=this;
var tally;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
tally=(0);
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(anObject).__eq(each);
if(smalltalk.assert($1)){
tally=_st(tally).__plus((1));
return tally;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=tally;
return $2;
}, function($ctx1) {$ctx1.fill(self,"occurrencesOf:",{anObject:anObject,tally:tally},smalltalk.Collection)})},
args: ["anObject"],
source: "occurrencesOf: anObject\x0a\x09\x22Answer how many of the receiver's elements are equal to anObject.\x22\x0a\x0a\x09| tally |\x0a\x09tally := 0.\x0a\x09self do: [:each | anObject = each ifTrue: [tally := tally + 1]].\x0a\x09^tally",
messageSends: ["do:", "ifTrue:", "+", "="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printElementsOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPut_("(");
_st(self)._do_separatedBy_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._print_(element);
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._space();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPut_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printElementsOn:",{aStream:aStream},smalltalk.Collection)})},
args: ["aStream"],
source: "printElementsOn: aStream\x0a\x09\x22The original code used #skip:, but some streams do not support that,\x0a\x09 and we don't really need it.\x22\x0a\x0a\x09aStream nextPut: '('.\x0a\x09self do: [:element | aStream print: element] separatedBy: [aStream space].\x0a\x09aStream nextPut: ')'",
messageSends: ["nextPut:", "do:separatedBy:", "print:", "space"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printNameOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._printOn_.apply(_st(self), [aStream]);
return self}, function($ctx1) {$ctx1.fill(self,"printNameOn:",{aStream:aStream},smalltalk.Collection)})},
args: ["aStream"],
source: "printNameOn: aStream\x0a\x09super printOn: aStream",
messageSends: ["printOn:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._printNameOn_(aStream);
_st(self)._printElementsOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Collection)})},
args: ["aStream"],
source: "printOn: aStream \x0a\x09\x22Append a sequence of characters that identify the receiver to aStream.\x22\x0a\x0a\x09self printNameOn: aStream.\x0a\x09self printElementsOn: aStream",
messageSends: ["printNameOn:", "printElementsOn:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:delimiter:",
category: 'printing',
fn: function (aStream,delimString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._do_separatedBy_((function(elem){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._print_(elem);
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._print_(delimString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:delimiter:",{aStream:aStream,delimString:delimString},smalltalk.Collection)})},
args: ["aStream", "delimString"],
source: "printOn: aStream delimiter: delimString\x0a\x09\x22Print elements on a stream separated\x0a\x09with a delimiter String like: 'a, b, c' \x22\x0a\x0a\x09self do: [:elem | aStream print: elem] separatedBy: [aStream print: delimString]\x0a\x09\x09",
messageSends: ["do:separatedBy:", "print:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:delimiter:last:",
category: 'printing',
fn: function (aStream,delimString,lastDelimString){
var self=this;
var n,sz;
return smalltalk.withContext(function($ctx1) { 
var $1;
n=(1);
sz=_st(self)._size();
_st(self)._do_separatedBy_((function(elem){
return smalltalk.withContext(function($ctx2) {
n=_st(n).__plus((1));
n;
return _st(aStream)._print_(elem);
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(n).__eq(sz);
if(smalltalk.assert($1)){
return _st(aStream)._print_(lastDelimString);
} else {
return _st(aStream)._print_(delimString);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:delimiter:last:",{aStream:aStream,delimString:delimString,lastDelimString:lastDelimString,n:n,sz:sz},smalltalk.Collection)})},
args: ["aStream", "delimString", "lastDelimString"],
source: "printOn: aStream delimiter: delimString last: lastDelimString\x0a\x09\x22Print elements on a stream separated\x0a\x09with a delimiter between all the elements and with\x0a\x09a special one before the last like: 'a, b and c'\x0a\x0a\x09Note: Feel free to improve the code to detect the last element.\x22\x0a\x0a\x09| n sz |\x0a\x09n := 1.\x0a\x09sz := self size.\x0a\x09self do: [:elem |\x0a\x09\x09n := n + 1.\x0a\x09\x09aStream print: elem]\x0a\x09separatedBy: [\x0a\x09\x09n = sz\x0a\x09\x09\x09ifTrue: [aStream print: lastDelimString]\x0a\x09\x09\x09ifFalse: [aStream print: delimString]]",
messageSends: ["size", "do:separatedBy:", "+", "print:", "ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
category: 'streaming',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._putOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.Collection)})},
args: ["aStream"],
source: "putOn: aStream\x0a\x09self do: [ :each | each putOn: aStream ]",
messageSends: ["do:", "putOn:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "reject:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aBlock)._value_(each)).__eq(false);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reject:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "reject: aBlock\x0a\x09^self select: [:each | (aBlock value: each) = false]",
messageSends: ["select:", "=", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._remove_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.Collection)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09^self remove: anObject ifAbsent: [self errorNotFound]",
messageSends: ["remove:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Collection)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
category: 'adding/removing',
fn: function (){
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { 
copy=_st(self)._copy();
_st(copy)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._remove_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{copy:copy},smalltalk.Collection)})},
args: [],
source: "removeAll\x0a\x09|copy|\x0a\x09\x22TODO: provide a more efficient implementation.\x22\x0a\x09copy := self copy.\x0a\x09copy do: [:each | self remove: each].",
messageSends: ["copy", "do:", "remove:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllSuchThat:",
category: 'adding/removing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._copy())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
return _st(self)._remove_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeAllSuchThat:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "removeAllSuchThat: aBlock \x0a\x09\x22Evaluate aBlock for each element and remove all that elements from\x0a\x09the receiver for that aBlock evaluates to true.  Use a copy to enumerate \x0a\x09collections whose order changes when an element is removed (i.e. Sets).\x22\x0a\x0a\x09self copy do: [:each | (aBlock value: each) ifTrue: [self remove: each]]",
messageSends: ["do:", "ifTrue:", "remove:", "value:", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
stream=_st(_st(_st(self)._class())._new())._writeStream();
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
return _st(stream)._nextPut_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(stream)._contents();
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,stream:stream},smalltalk.Collection)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [:each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: each]].\x0a\x09^stream contents",
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Collection)})},
args: [],
source: "size\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
category: 'ston-core',
fn: function (stonWriter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stonWriter)._writeObject_do_(self,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(stonWriter)._encodeList_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},smalltalk.Collection)})},
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeObject: self do: [\x0a\x09\x09stonWriter encodeList: self ]",
messageSends: ["writeObject:do:", "encodeList:"],
referencedClasses: []
}),
smalltalk.Collection);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
category: 'ston-core',
fn: function (stonReader){
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { 
var $1;
collection=_st(self)._new();
_st(stonReader)._parseListDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(collection)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=collection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader,collection:collection},smalltalk.Collection.klass)})},
args: ["stonReader"],
source: "fromSton: stonReader\x0a\x09| collection |\x0a\x09collection := self new.\x0a\x09stonReader parseListDo: [ :each |\x0a\x09\x09collection add: each ].\x0a\x09^ collection",
messageSends: ["new", "parseListDo:", "add:"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},smalltalk.Collection.klass)})},
args: ["anInteger"],
source: "new: anInteger\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},smalltalk.Collection.klass)})},
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^self new\x0a\x09\x09add: anObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (anObject,anotherObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(anObject);
_st($2)._add_(anotherObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anotherObject:anotherObject},smalltalk.Collection.klass)})},
args: ["anObject", "anotherObject"],
source: "with: anObject with: anotherObject\x0a\x09\x09^self new\x0a\x09\x09add: anObject;\x0a\x09\x09add: anotherObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
category: 'instance creation',
fn: function (firstObject,secondObject,thirdObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(firstObject);
_st($2)._add_(secondObject);
_st($2)._add_(thirdObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{firstObject:firstObject,secondObject:secondObject,thirdObject:thirdObject},smalltalk.Collection.klass)})},
args: ["firstObject", "secondObject", "thirdObject"],
source: "with: firstObject with: secondObject with: thirdObject\x0a\x09\x09^self new\x0a\x09\x09add: firstObject;\x0a\x09\x09add: secondObject;\x0a\x09\x09add: thirdObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection},smalltalk.Collection.klass)})},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09\x09^self new\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
messageSends: ["addAll:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);


smalltalk.addClass('IndexableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.IndexableCollection.comment="I am a key-value store, that is,\x0ait stores values under indexes.\x0a\x0aAs a rule of thumb, if a collection has at: and at:put:,\x0ait is an IndexableCollection."
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_ifAbsent_(anIndex,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex},smalltalk.IndexableCollection)})},
args: ["anIndex"],
source: "at: anIndex\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, raise an error.\x22\x0a\x0a\x09^self at: anIndex ifAbsent: [ self errorNotFound ]",
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, answer the value of aBlock.\x22\x0a\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_ifPresent_ifAbsent_(anIndex,aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifPresent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer nil.\x22\x0a\x0a\x09^self at: anIndex ifPresent: aBlock ifAbsent: [ nil ]",
messageSends: ["at:ifPresent:ifAbsent:"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.IndexableCollection)})},
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer the value of anotherBlock.\x22\x0a\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.IndexableCollection)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09\x22Store anObject under the given index in the receiver.\x22\x0a\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject},smalltalk.IndexableCollection)})},
args: ["anObject"],
source: "indexOf: anObject\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, raise an error.\x22\x0a\x0a\x09^self indexOf: anObject ifAbsent: [ self errorNotFound ]",
messageSends: ["indexOf:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, return value of executing aBlock.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: 'enumarating',
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,_st(anotherCollection)._at_(index));
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with indetically-indexed value from anotherCollection\x22\x0a\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09aBlock value: each value: (anotherCollection at: index) ]",
messageSends: ["withIndexDo:", "value:value:", "at:"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
category: 'enumarating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with its index as the second argument\x22\x0a\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);



smalltalk.addClass('HashedCollection', smalltalk.IndexableCollection, [], 'Kernel-Collections');
smalltalk.HashedCollection.comment="I am a traditional JavaScript object, or a Smalltalk `Dictionary`.\x0a\x0aUnlike a `Dictionary`, it can only have strings as keys."
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection},smalltalk.HashedCollection)})},
args: ["aCollection"],
source: ", aCollection\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._class()).__eq(_st(aHashedCollection)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(_st(self)._size()).__eq(_st(aHashedCollection)._size());
if(! smalltalk.assert($2)){
return false;
};
$3=_st(_st(self)._associations()).__eq(_st(aHashedCollection)._associations());
return $3;
}, function($ctx1) {$ctx1.fill(self,"=",{aHashedCollection:aHashedCollection},smalltalk.HashedCollection)})},
args: ["aHashedCollection"],
source: "= aHashedCollection\x0a\x09self class = aHashedCollection class ifFalse: [^false].\x0a\x09self size = aHashedCollection size ifFalse: [^false].\x0a\x09^self associations = aHashedCollection associations",
messageSends: ["ifFalse:", "=", "class", "size", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_put_(_st(anAssociation)._key(),_st(anAssociation)._value());
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anAssociation:anAssociation},smalltalk.HashedCollection)})},
args: ["anAssociation"],
source: "add: anAssociation\x0a\x09self at: anAssociation key put: anAssociation value",
messageSends: ["at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
category: 'adding/removing',
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.IndexableCollection.fn.prototype._addAll_.apply(_st(self), [_st(aHashedCollection)._associations()]);
$1=aHashedCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aHashedCollection:aHashedCollection},smalltalk.HashedCollection)})},
args: ["aHashedCollection"],
source: "addAll: aHashedCollection\x0a\x09super addAll: aHashedCollection associations.\x0a\x09^aHashedCollection",
messageSends: ["addAll:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asDictionary",
category: 'converting',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Dictionary())._fromPairs_(_st(self)._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},smalltalk.HashedCollection)})},
args: [],
source: "asDictionary\x0a\x09^Dictionary fromPairs: self associations",
messageSends: ["fromPairs:", "associations"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var c;
return smalltalk.withContext(function($ctx1) { 
var $1;
c=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(c)._at_put_(key,_st(value)._asJSON());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=c;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{c:c},smalltalk.HashedCollection)})},
args: [],
source: "asJSON\x0a\x09| c |\x0a\x09c := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09c at: key put: value asJSON].\x0a\x09^c",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asJSON"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associations",
category: 'accessing',
fn: function (){
var self=this;
var associations;
return smalltalk.withContext(function($ctx1) { 
var $1;
associations=[];
_st(self)._associationsDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(associations)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=associations;
return $1;
}, function($ctx1) {$ctx1.fill(self,"associations",{associations:associations},smalltalk.HashedCollection)})},
args: [],
source: "associations\x0a\x09| associations |\x0a\x09associations := #().\x0a\x09self associationsDo: [:each | associations add: each].\x0a\x09^associations",
messageSends: ["associationsDo:", "add:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associationsDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st($Association())._key_value_(key,value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "associationsDo: aBlock\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09aBlock value: (Association key: key value: value)]",
messageSends: ["keysAndValuesDo:", "value:", "key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._basicAt_(aKey);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [self basicAt: aKey]\x0a\x09\x09ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "basicAt:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._at_put_(aKey,_st(aBlock)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsentPut: aBlock\x0a\x09^self at: aKey ifAbsent: [\x0a\x09\x09self at: aKey put: aBlock value]",
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st(self)._at_(aKey));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aKey:aKey,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock", "anotherBlock"],
source: "at: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given key in the receiver.\x0a\x09If it is present, answer the value of evaluating the oneArgBlock with the value associated with the key,\x0a\x09otherwise answer the value of absentBlock.\x22\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: anotherBlock",
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicAt_put_(aKey,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},smalltalk.HashedCollection)})},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^self basicAt: aKey put: aValue",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
return smalltalk.withContext(function($ctx1) { 
var $1;
newDict=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(newDict)._at_put_(key,_st(aBlock)._value_(value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=newDict;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,newDict:newDict},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09newDict at: key put: (aBlock value: value)].\x0a\x09^newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { 
var $1;
copy=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(copy)._at_put_(key,_st(value)._deepCopy());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=copy;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{copy:copy},smalltalk.HashedCollection)})},
args: [],
source: "deepCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09copy at: key put: value deepCopy].\x0a\x09^copy",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._values())._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.HashedCollection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^self values detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._valuesDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self valuesDo: aBlock",
messageSends: ["valuesDo:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'enumerating',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._values())._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.HashedCollection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^self values includes: anObject",
messageSends: ["includes:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
category: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.hasOwnProperty(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.HashedCollection)})},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return self.hasOwnProperty(aKey)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._keys())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._at_(each)).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x0a\x09^ self keys detect: [ :each | (self at: each) = anObject ] ifNone: aBlock",
messageSends: ["detect:ifNone:", "=", "at:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if ('function'===typeof Object.keys) return Object.keys(self);
		var keys = [];
		for(var i in self) {
			if(self.hasOwnProperty(i)) {
				keys.push(i);
			}
		};
		return keys;
	;
return self}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.HashedCollection)})},
args: [],
source: "keys\x0a\x09<\x0a\x09\x09if ('function'===typeof Object.keys) return Object.keys(self);\x0a\x09\x09var keys = [];\x0a\x09\x09for(var i in self) {\x0a\x09\x09\x09if(self.hasOwnProperty(i)) {\x0a\x09\x09\x09\x09keys.push(i);\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x09\x09return keys;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._keysDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,_st(self)._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09self keysDo: [:each |\x0a\x09\x09aBlock value: each value: (self at: each)]",
messageSends: ["keysDo:", "value:value:", "at:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._keys())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09self keys do: aBlock",
messageSends: ["do:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.IndexableCollection.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_(" (");
_st(_st(self)._associations())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" , ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.HashedCollection)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self associations\x0a\x09\x09do: [:each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' , ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._removeKey_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "remove: aKey ifAbsent: aBlock\x0a\x09^self removeKey: aKey ifAbsent: aBlock",
messageSends: ["removeKey:ifAbsent:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
category: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._keys())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._removeKey_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},smalltalk.HashedCollection)})},
args: [],
source: "removeAll\x0a\x09self keys do: [:each | self removeKey: each].",
messageSends: ["do:", "removeKey:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:",
category: 'adding/removing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._remove_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aKey:aKey},smalltalk.HashedCollection)})},
args: ["aKey"],
source: "removeKey: aKey\x0a\x09^self remove: aKey",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._includesKey_(aKey);
if(smalltalk.assert($2)){
$1=_st(self)._basicDelete_(aKey);
} else {
$1=_st(aBlock)._value();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifFalse: [aBlock value]\x0a\x09\x09ifTrue: [self basicDelete: aKey]",
messageSends: ["ifFalse:ifTrue:", "value", "basicDelete:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
newDict=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(value);
if(smalltalk.assert($1)){
return _st(newDict)._at_put_(key,value);
};
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$2=newDict;
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,newDict:newDict},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09(aBlock value: value) ifTrue: [newDict at: key put: value]].\x0a\x09^newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { 
var $1;
copy=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(copy)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=copy;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{copy:copy},smalltalk.HashedCollection)})},
args: [],
source: "shallowCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09copy at: key put: value].\x0a\x09^copy",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._keys())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.HashedCollection)})},
args: [],
source: "size\x0a\x09^self keys size",
messageSends: ["size", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._keys())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._at_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.HashedCollection)})},
args: [],
source: "values\x0a\x09^self keys collect: [:each | self at: each]",
messageSends: ["collect:", "at:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value | aBlock value: value ]",
messageSends: ["keysAndValuesDo:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(value,key);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value | aBlock value: value value: key ]",
messageSends: ["keysAndValuesDo:", "value:value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "fromPairs:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var dict;
return smalltalk.withContext(function($ctx1) { 
var $1;
dict=_st(self)._new();
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(dict)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=dict;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPairs:",{aCollection:aCollection,dict:dict},smalltalk.HashedCollection.klass)})},
args: ["aCollection"],
source: "fromPairs: aCollection\x0a\x09| dict |\x0a\x09dict := self new.\x0a\x09aCollection do: [:each | dict add: each].\x0a\x09^dict",
messageSends: ["new", "do:", "add:"],
referencedClasses: []
}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.Dictionary.comment="I represent a set of elements that can be viewed from one of two perspectives: a set of associations,\x0aor a container of values that are externally named where the name can be any object that responds to `=`.\x0a\x0aThe external name is referred to as the key."
smalltalk.addMethod(
smalltalk.method({
selector: "asHashedCollection",
category: 'converting',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HashedCollection())._fromPairs_(_st(self)._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{},smalltalk.Dictionary)})},
args: [],
source: "asHashedCollection\x0a\x09^HashedCollection fromPairs: self associations",
messageSends: ["fromPairs:", "associations"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asHashedCollection())._asJSON();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Dictionary)})},
args: [],
source: "asJSON\x0a\x09^self asHashedCollection asJSON",
messageSends: ["asJSON", "asHashedCollection"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		return index >=0 ? self['@values'][index] : aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09return index >>=0 ? self['@values'][index] : aBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			var keys = self['@keys'];
			index = keys.length;
			keys.push(aKey);
		}

		return self['@values'][index] = aValue;
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},smalltalk.Dictionary)})},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09var keys = self['@keys'];\x0a\x09\x09\x09index = keys.length;\x0a\x09\x09\x09keys.push(aKey);\x0a\x09\x09}\x0a\x0a\x09\x09return self['@values'][index] = aValue;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
category: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._positionOfKey_(aKey) >= 0; ;
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.Dictionary)})},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09< return self._positionOfKey_(aKey) >>= 0; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
index=_st(self["@values"])._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st(index).__eq((0));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value();
} else {
$1=_st(self["@keys"])._at_(index);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock,index:index},smalltalk.Dictionary)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x0a\x09| index |\x0a\x09index := values indexOf: anObject ifAbsent: [0].\x0a\x09^ index = 0 ifTrue: [ aBlock value ] ifFalse: [ keys at: index ]",
messageSends: ["indexOf:ifAbsent:", "ifTrue:ifFalse:", "value", "at:", "="],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HashedCollection.fn.prototype._initialize.apply(_st(self), []);
self["@keys"]=[];
self["@values"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Dictionary)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #().\x0a\x09values := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.Dictionary)})},
args: [],
source: "keys\x0a\x09^keys copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._with_do_(self["@values"],aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09^keys with: values do: aBlock",
messageSends: ["with:do:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09^keys do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOfKey:",
category: 'private',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var keys = self['@keys'];
		for(var i=0;i<keys.length;i++){
			if(keys[i].__eq(anObject)) { return i;}
		}
		return -1;
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOfKey:",{anObject:anObject},smalltalk.Dictionary)})},
args: ["anObject"],
source: "positionOfKey: anObject\x0a\x09<\x0a\x09\x09var keys = self['@keys'];\x0a\x09\x09for(var i=0;i<keys.length;i++){\x0a\x09\x09\x09if(keys[i].__eq(anObject)) { return i;}\x0a\x09\x09}\x0a\x09\x09return -1;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			return aBlock()
		} else {
			var keys = self['@keys'], values = self['@values'];
			var value = values[index], l = keys.length;
			keys[index] = keys[l-1];
			keys.pop();
			values[index] = values[l-1];
			values.pop();
			return value;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09return aBlock()\x0a\x09\x09} else {\x0a\x09\x09\x09var keys = self['@keys'], values = self['@values'];\x0a\x09\x09\x09var value = values[index], l = keys.length;\x0a\x09\x09\x09keys[index] = keys[l-1];\x0a\x09\x09\x09keys.pop();\x0a\x09\x09\x09values[index] = values[l-1];\x0a\x09\x09\x09values.pop();\x0a\x09\x09\x09return value;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
category: 'ston-core',
fn: function (stonWriter){
var self=this;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class()).__eq_eq(_st($STON())._mapClass());
if(smalltalk.assert($1)){
_st(stonWriter)._writeMap_(self);
} else {
_st(stonWriter)._writeObject_do_(self,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(stonWriter)._encodeMap_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},smalltalk.Dictionary)})},
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09\x22Instances of STON mapClass will be encoded directly, without a class tag.\x0a\x09Other (sub)classes will be encoded with a class tag and will use a map representation. \x22\x0a\x09\x0a\x09self class == STON mapClass\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09stonWriter writeMap: self ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09stonWriter \x0a\x09\x09\x09\x09writeObject: self \x0a\x09\x09\x09\x09do: [ stonWriter encodeMap: self ] ]",
messageSends: ["ifTrue:ifFalse:", "writeMap:", "writeObject:do:", "encodeMap:", "==", "mapClass", "class"],
referencedClasses: ["STON"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.Dictionary)})},
args: [],
source: "values\x0a\x09^values copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09^values do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Dictionary);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
category: 'ston-core',
fn: function (stonReader){
var self=this;
var dictionary;
return smalltalk.withContext(function($ctx1) { 
var $1;
dictionary=_st(self)._new();
_st(stonReader)._parseMapDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(dictionary)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=dictionary;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader,dictionary:dictionary},smalltalk.Dictionary.klass)})},
args: ["stonReader"],
source: "fromSton: stonReader\x0a\x09\x22Instances of STON mapClass will be read directly and won't arrive here.\x0a\x09Other (sub)classes will use this method.\x22\x0a\x09\x0a\x09| dictionary |\x0a\x09dictionary := self new.\x0a\x09stonReader parseMapDo: [ :key :value |\x0a\x09\x09dictionary at: key put: value ].\x0a\x09^ dictionary",
messageSends: ["new", "parseMapDo:", "at:put:"],
referencedClasses: []
}),
smalltalk.Dictionary.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFrom:",
category: 'instance creation',
fn: function (aDict){
var self=this;
var newDictionary;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
newDictionary=_st(self)._new_(_st(aDict)._size());
_st(aDict)._associationsDo_((function(x){
return smalltalk.withContext(function($ctx2) {
$1=_st(newDictionary)._includesKey_(_st(x)._key());
if(smalltalk.assert($1)){
return _st(self)._error_(_st("Duplicate key: ").__comma(_st(_st(x)._key())._printString()));
} else {
return _st(newDictionary)._add_(x);
};
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=newDictionary;
return $2;
}, function($ctx1) {$ctx1.fill(self,"newFrom:",{aDict:aDict,newDictionary:newDictionary},smalltalk.Dictionary.klass)})},
args: ["aDict"],
source: "newFrom: aDict \x0a\x09\x22Answer an instance of me containing the same associations as aDict.\x0a\x09 Error if any key appears twice.\x22\x0a\x09| newDictionary |\x0a\x09newDictionary := self new: aDict size.\x0a\x09aDict associationsDo:\x0a\x09\x09[:x |\x0a\x09\x09(newDictionary includesKey: x key)\x0a\x09\x09\x09ifTrue: [self error: 'Duplicate key: ', x key printString]\x0a\x09\x09\x09ifFalse: [newDictionary add: x]].\x0a\x09^ newDictionary",
messageSends: ["new:", "size", "associationsDo:", "ifTrue:ifFalse:", "error:", ",", "printString", "key", "add:", "includesKey:"],
referencedClasses: []
}),
smalltalk.Dictionary.klass);


smalltalk.addClass('SequenceableCollection', smalltalk.IndexableCollection, [], 'Kernel-Collections');
smalltalk.SequenceableCollection.comment="I am an IndexableCollection\x0awith numeric indexes starting with 1."
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
$1=_st(_st(_st(self)._class()).__eq(_st(aCollection)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._size()).__eq(_st(aCollection)._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
return false;
};
_st(self)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(aCollection)._at_(i)).__eq(each);
if(! smalltalk.assert($2)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection},smalltalk.SequenceableCollection)})},
args: ["aCollection"],
source: "= aCollection\x0a\x09(self class = aCollection class and: [\x0a\x09\x09self size = aCollection size]) ifFalse: [^false].\x0a\x09self withIndexDo: [:each :i |\x0a\x09\x09\x09\x09(aCollection at: i) = each ifFalse: [^false]].\x0a\x09^true",
messageSends: ["ifFalse:", "and:", "=", "size", "class", "withIndexDo:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addLast:",
category: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addLast:",{anObject:anObject},smalltalk.SequenceableCollection)})},
args: ["anObject"],
source: "addLast: anObject\x0a\x09self add: anObject",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButFirst",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyFrom_to_((2),_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButFirst",{},smalltalk.SequenceableCollection)})},
args: [],
source: "allButFirst\x0a\x09^self copyFrom: 2 to: self size",
messageSends: ["copyFrom:to:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButLast",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyFrom_to_((1),_st(_st(self)._size()).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButLast",{},smalltalk.SequenceableCollection)})},
args: [],
source: "allButLast\x0a\x09^self copyFrom: 1 to: self size - 1",
messageSends: ["copyFrom:to:", "-", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "atRandom",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_(_st(_st(self)._size())._atRandom());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},smalltalk.SequenceableCollection)})},
args: [],
source: "atRandom\x0a\x09^ self at: self size atRandom",
messageSends: ["at:", "atRandom", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
var range,newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
range=_st(anIndex)._to_(anotherIndex);
newCollection=_st(_st(self)._class())._new_(_st(range)._size());
_st(range)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(i,_st(self)._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex,range:range,newCollection:newCollection},smalltalk.SequenceableCollection)})},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09| range newCollection |\x0a\x09range := anIndex to: anotherIndex.\x0a\x09newCollection := self class new: range size.\x0a\x09range withIndexDo: [:each :i |\x0a\x09\x09newCollection at: i put: (self at: each)].\x0a\x09^newCollection",
messageSends: ["to:", "new:", "size", "class", "withIndexDo:", "at:put:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceFrom:to:with:",
category: 'copying',
fn: function (start,stop,replacementCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self)._class())._new();
_st($2)._addAll_(_st(self)._copyFrom_to_((1),_st(start).__minus((1))));
_st($2)._addAll_(replacementCollection);
_st($2)._addAll_(_st(self)._copyFrom_to_(_st(stop).__plus((1)),_st(self)._size()));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceFrom:to:with:",{start:start,stop:stop,replacementCollection:replacementCollection},smalltalk.SequenceableCollection)})},
args: ["start", "stop", "replacementCollection"],
source: "copyReplaceFrom: start to: stop with: replacementCollection\x0a\x09\x22Answer a copy of the receiver satisfying the following conditions: If \x0a\x09stop is less than start, then this is an insertion; stop should be exactly \x0a\x09start-1, start = 1 means insert before the first character, start = size+1 \x0a\x09means append after last character. Otherwise, this is a replacement; start \x0a\x09and stop have to be within the receiver's bounds.\x22\x0a\x0a\x09\x22TODO: think about negative indices\x22\x0a\x09^ self class new\x0a\x09\x09addAll: (self copyFrom: 1 to: start - 1);\x0a\x09\x09addAll: replacementCollection;\x0a\x09\x09addAll: (self copyFrom: stop + 1 to: self size);\x0a\x09\x09yourself",
messageSends: ["addAll:", "copyFrom:to:", "-", "new", "class", "+", "size", "yourself"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=_st(_st(self)._class())._new_(_st(self)._size());
_st(self)._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(index,_st(each)._deepCopy());
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{newCollection:newCollection},smalltalk.SequenceableCollection)})},
args: [],
source: "deepCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [:each :index |\x0a\x09\x09newCollection at: index put: each deepCopy].\x0a\x09^newCollection",
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.SequenceableCollection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09<\x0a\x09\x09for(var i = 0; i < self.length; i++)\x0a\x09\x09\x09if(aBlock(self[i]))\x0a\x09\x09\x09\x09return self[i];\x0a\x09\x09return anotherBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self[i]);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.SequenceableCollection)})},
args: [],
source: "first\x0a\x09^self at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first:",
category: 'accessing',
fn: function (n){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyFrom_to_((1),n);
return $1;
}, function($ctx1) {$ctx1.fill(self,"first:",{n:n},smalltalk.SequenceableCollection)})},
args: ["n"],
source: "first: n\x0a\x09\x22Answer the first n elements of the receiver.\x0a\x09Raise an error if there are not enough elements.\x22\x0a\x0a\x09^ self copyFrom: 1 to: n",
messageSends: ["copyFrom:to:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "fourth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fourth",{},smalltalk.SequenceableCollection)})},
args: [],
source: "fourth\x0a\x09^self at: 4",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.SequenceableCollection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^(self indexOf: anObject ifAbsent: [nil]) notNil",
messageSends: ["notNil", "indexOf:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=0;i<self.length;i++) {
			if(self[i].__eq(anObject)) {return i+1}
		};
		return aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=0;i<self.length;i++) {\x0a\x09\x09\x09if(self[i].__eq(anObject)) {return i+1}\x0a\x09\x09};\x0a\x09\x09return aBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:",
category: 'accessing',
fn: function (anObject,start){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._indexOf_startingAt_ifAbsent_(anObject,start,(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:",{anObject:anObject,start:start},smalltalk.SequenceableCollection)})},
args: ["anObject", "start"],
source: "indexOf: anObject startingAt: start\x0a\x09\x22Answer the index of the first occurence of anElement after start\x0a\x09within the receiver. If the receiver does not contain anElement,\x0a\x09answer 0.\x22\x0a\x09^self indexOf: anObject startingAt: start ifAbsent: [0]",
messageSends: ["indexOf:startingAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
category: 'accessing',
fn: function (anObject,start,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["anObject", "start", "aBlock"],
source: "indexOf: anObject startingAt: start ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=start-1;i<self.length;i++){\x0a\x09\x09\x09if(self[i].__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "last",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_(_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{},smalltalk.SequenceableCollection)})},
args: [],
source: "last\x0a\x09^self at: self size",
messageSends: ["at:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "newStream",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newStream",{},smalltalk.SequenceableCollection)})},
args: [],
source: "newStream\x0a\x09^self streamClass on: self",
messageSends: ["on:", "streamClass"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "readStream",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"readStream",{},smalltalk.SequenceableCollection)})},
args: [],
source: "readStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^self stream",
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeLast",
category: 'adding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._remove_(_st(self)._last());
return self}, function($ctx1) {$ctx1.fill(self,"removeLast",{},smalltalk.SequenceableCollection)})},
args: [],
source: "removeLast\x0a\x09self remove: self last",
messageSends: ["remove:", "last"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.SequenceableCollection)})},
args: [],
source: "reversed\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "second",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"second",{},smalltalk.SequenceableCollection)})},
args: [],
source: "second\x0a\x09^self at: 2",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=_st(_st(self)._class())._new_(_st(self)._size());
_st(self)._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(index,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{newCollection:newCollection},smalltalk.SequenceableCollection)})},
args: [],
source: "shallowCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09newCollection at: index put: each].\x0a\x09^newCollection",
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
category: 'ston-core',
fn: function (stonWriter){
var self=this;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class()).__eq_eq(_st($STON())._listClass());
if(smalltalk.assert($1)){
_st(stonWriter)._writeList_(self);
} else {
smalltalk.IndexableCollection.fn.prototype._stonOn_.apply(_st(self), [stonWriter]);
};
return self}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},smalltalk.SequenceableCollection)})},
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09self class == STON listClass\x0a\x09\x09ifTrue: [ stonWriter writeList: self ]\x0a\x09\x09ifFalse: [ super stonOn: stonWriter ]",
messageSends: ["ifTrue:ifFalse:", "writeList:", "stonOn:", "==", "listClass", "class"],
referencedClasses: ["STON"]
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "stream",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stream",{},smalltalk.SequenceableCollection)})},
args: [],
source: "stream\x0a\x09^self newStream",
messageSends: ["newStream"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._streamClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.SequenceableCollection)})},
args: [],
source: "streamClass\x0a\x09^self class streamClass",
messageSends: ["streamClass", "class"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "third",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"third",{},smalltalk.SequenceableCollection)})},
args: [],
source: "third\x0a\x09^self at: 3",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: 'enumerating',
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self[i], anotherCollection[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self[i], anotherCollection[i]);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self[i], i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "writeStream",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},smalltalk.SequenceableCollection)})},
args: [],
source: "writeStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^self stream",
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
category: 'ston-core',
fn: function (stonReader){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(stonReader)._parseListDo_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPut_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},smalltalk.SequenceableCollection.klass)})},
args: ["stonReader"],
source: "fromSton: stonReader\x0a\x09^ self streamContents: [ :stream |\x0a\x09\x09stonReader parseListDo: [ :each |\x0a\x09\x09\x09stream nextPut: each ] ]",
messageSends: ["streamContents:", "parseListDo:", "nextPut:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
function $Stream(){return smalltalk.Stream||(typeof Stream=="undefined"?nil:Stream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.SequenceableCollection.klass)})},
args: [],
source: "streamClass\x0a\x09\x09^Stream",
messageSends: [],
referencedClasses: ["Stream"]
}),
smalltalk.SequenceableCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamContents:",
category: 'streaming',
fn: function (aBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=_st(_st(self)._streamClass())._on_(_st(self)._new());
_st(aBlock)._value_(stream);
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{aBlock:aBlock,stream:stream},smalltalk.SequenceableCollection.klass)})},
args: ["aBlock"],
source: "streamContents: aBlock\x0a\x09| stream |\x0a\x09stream := (self streamClass on: self new).\x0a\x09aBlock value: stream.\x0a\x09^ stream contents",
messageSends: ["on:", "new", "streamClass", "value:", "contents"],
referencedClasses: []
}),
smalltalk.SequenceableCollection.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.Array.comment="I represent a collection of objects ordered by the collector. The size of arrays is dynamic.\x0aIn Amber, OrderedCollection is an alias for Array."
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.push(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Array)})},
args: ["anObject"],
source: "add: anObject\x0a\x09<self.push(anObject); return anObject;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st("[").__comma(_st(_st(self)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asJavascript();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._join_(", "))).__comma("]");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Array)})},
args: [],
source: "asJavascript\x0a\x09^'[', ((self collect: [:each | each asJavascript]) join: ', '), ']'",
messageSends: [",", "join:", "collect:", "asJavascript"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.Array)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<\x0a\x09\x09if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};\x0a\x09\x09return self[anIndex - 1];\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[anIndex - 1] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.Array)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09<return self[anIndex - 1] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "atAllPut:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st((1))._to_(_st(self)._size()))._do_((function(index){
return smalltalk.withContext(function($ctx2) {
return _st(self)._at_put_(index,aValue);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"atAllPut:",{aValue:aValue},smalltalk.Array)})},
args: ["aValue"],
source: "atAllPut: aValue\x0a\x09(1 to: self size) do: [:index | \x0a\x09\x09self at: index put: aValue].",
messageSends: ["do:", "at:put:", "to:", "size"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
category: 'enumerating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.join(aString);
return self}, function($ctx1) {$ctx1.fill(self,"join:",{aString:aString},smalltalk.Array)})},
args: ["aString"],
source: "join: aString\x0a\x09<return self.join(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SequenceableCollection.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_(" (");
_st(self)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Array)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				return self;
			}
		};
		aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Array)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=0;i<self.length;i++) {\x0a\x09\x09\x09if(self[i] == anObject) {\x0a\x09\x09\x09\x09self.splice(i,1);\x0a\x09\x09\x09\x09return self;\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x09\x09aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
category: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},smalltalk.Array)})},
args: [],
source: "removeAll\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFrom:to:",
category: 'adding/removing',
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.splice(aNumber - 1,anotherNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber},smalltalk.Array)})},
args: ["aNumber", "anotherNumber"],
source: "removeFrom: aNumber to: anotherNumber\x0a\x09<self.splice(aNumber - 1,anotherNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self._copy().reverse();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.Array)})},
args: [],
source: "reversed\x0a\x09<return self._copy().reverse()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Array)})},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort",
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicPerform_("sort");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sort",{},smalltalk.Array)})},
args: [],
source: "sort\x0a\x09^self basicPerform: 'sort'",
messageSends: ["basicPerform:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self}, function($ctx1) {$ctx1.fill(self,"sort:",{aBlock:aBlock},smalltalk.Array)})},
args: ["aBlock"],
source: "sort: aBlock\x0a\x09<\x0a\x09\x09return self.sort(function(a, b) {\x0a\x09\x09\x09if(aBlock(a,b)) {return -1} else {return 1}\x0a\x09\x09})\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted",
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._copy())._sort();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted",{},smalltalk.Array)})},
args: [],
source: "sorted\x0a\x09^self copy sort",
messageSends: ["sort", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._copy())._sort_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted:",{aBlock:aBlock},smalltalk.Array)})},
args: ["aBlock"],
source: "sorted: aBlock\x0a\x09^self copy sort: aBlock",
messageSends: ["sort:", "copy"],
referencedClasses: []
}),
smalltalk.Array);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Array(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},smalltalk.Array.klass)})},
args: ["anInteger"],
source: "new: anInteger\x0a\x09<return new Array(anInteger)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:withAll:",
category: 'instance creation',
fn: function (size,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new_(size))._atAllPut_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:withAll:",{size:size,value:value},smalltalk.Array.klass)})},
args: ["size", "value"],
source: "new: size withAll: value \x0a\x09\x22Answer an instance of me, with number of elements equal to size, each \x0a\x09of which refers to the argument, value.\x22\x0a\x0a\x09^(self new: size) atAllPut: value",
messageSends: ["atAllPut:", "new:"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new_((1));
_st($2)._at_put_((1),anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},smalltalk.Array.klass)})},
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^(self new: 1)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new_((2));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anObject2:anObject2},smalltalk.Array.klass)})},
args: ["anObject", "anObject2"],
source: "with: anObject with: anObject2\x0a\x09\x09^(self new: 2)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
category: 'instance creation',
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new_((3));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
_st($2)._at_put_((3),anObject3);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.Array.klass)})},
args: ["anObject", "anObject2", "anObject3"],
source: "with: anObject with: anObject2 with: anObject3\x0a\x09\x09^(self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var instance,index;
return smalltalk.withContext(function($ctx1) { 
var $1;
index=(1);
instance=_st(self)._new_(_st(aCollection)._size());
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(instance)._at_put_(index,each);
index=_st(index).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection,instance:instance,index:index},smalltalk.Array.klass)})},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09| instance index |\x0a\x09index := 1.\x0a\x09instance := self new: aCollection size.\x0a\x09aCollection do: [:each |\x0a\x09\x09instance at: index put: each.\x0a\x09\x09index := index + 1].\x0a\x09^instance",
messageSends: ["new:", "size", "do:", "at:put:", "+"],
referencedClasses: []
}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.CharacterArray.comment="I am the abstract superclass of string-like collections."
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asString()).__comma(_st(aString)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},smalltalk.CharacterArray)})},
args: ["aString"],
source: ", aString\x0a\x09^self asString, aString asString",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.CharacterArray)})},
args: ["anObject"],
source: "add: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._asLowercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},smalltalk.CharacterArray)})},
args: [],
source: "asLowercase\x0a\x09^self class fromString: self asString asLowercase",
messageSends: ["fromString:", "asLowercase", "asString", "class"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asString())._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.CharacterArray)})},
args: [],
source: "asNumber\x0a\x09^self asString asNumber",
messageSends: ["asNumber", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.CharacterArray)})},
args: [],
source: "asString\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},smalltalk.CharacterArray)})},
args: [],
source: "asSymbol\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._asUppercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},smalltalk.CharacterArray)})},
args: [],
source: "asUppercase\x0a\x09^self class fromString: self asString asUppercase",
messageSends: ["fromString:", "asUppercase", "asString", "class"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.CharacterArray)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "errorReadOnly",
category: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("Object is read-only");
return self}, function($ctx1) {$ctx1.fill(self,"errorReadOnly",{},smalltalk.CharacterArray)})},
args: [],
source: "errorReadOnly\x0a\x09self error: 'Object is read-only'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asString())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CharacterArray)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09self asString printOn: aStream",
messageSends: ["printOn:", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
category: 'streaming',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.CharacterArray)})},
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutString: self",
messageSends: ["nextPutString:"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'adding',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.CharacterArray)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.CharacterArray.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.String.comment="I am an indexed collection of Characters. Unlike most Smalltalk dialects, Amber doesn't provide the Character class. Instead, elements of a String are single character strings.\x0a\x0aString inherits many useful methods from its hierarchy, such as\x0a\x09`Collection >> #,`"
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self + aString;
return self}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: ", aString\x0a\x09<return self + aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) < aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "< aString\x0a\x09<return String(self) < aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) <= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "<= aString\x0a\x09<return String(self) <= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(typeof aString === 'undefined') { return false }
		if(!aString._isString || ! aString._isString()) {
			return false;
		}
		return String(self) === String(aString)
	;
return self}, function($ctx1) {$ctx1.fill(self,"=",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "= aString\x0a\x09<\x0a\x09\x09if(typeof aString === 'undefined') { return false }\x0a\x09\x09if(!aString._isString || ! aString._isString()) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09return String(self) === String(aString)\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self).__eq(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "== aString\x0a\x09^self = aString",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) > aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "> aString\x0a\x09<return String(self) >> aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) >= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: ">= aString\x0a\x09<return String(self) >>= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.String)})},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.String)})},
args: [],
source: "asJavascript\x0a\x09<\x0a\x09\x09if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self + \x22\x5c\x22\x22;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toLowerCase();
return self}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},smalltalk.String)})},
args: [],
source: "asLowercase\x0a\x09<return self.toLowerCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Number(self);
return self}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.String)})},
args: [],
source: "asNumber\x0a\x09<return Number(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asRegexp",
category: 'converting',
fn: function (){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RegularExpression())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asRegexp",{},smalltalk.String)})},
args: [],
source: "asRegexp\x0a\x09^ RegularExpression fromString: self",
messageSends: ["fromString:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSelector",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.selector(self);
return self}, function($ctx1) {$ctx1.fill(self,"asSelector",{},smalltalk.String)})},
args: [],
source: "asSelector\x0a\x09<return smalltalk.selector(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.String)})},
args: [],
source: "asString\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},smalltalk.String)})},
args: [],
source: "asSymbol\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asText",
category: 'converting',
fn: function (){
var self=this;
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Text())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asText",{},smalltalk.String)})},
args: [],
source: "asText\x0a\x09^ Text fromString: self",
messageSends: ["fromString:"],
referencedClasses: ["Text"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toUpperCase();
return self}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},smalltalk.String)})},
args: [],
source: "asUppercase\x0a\x09<return self.toUpperCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asciiValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.charCodeAt(0);;
return self}, function($ctx1) {$ctx1.fill(self,"asciiValue",{},smalltalk.String)})},
args: [],
source: "asciiValue\x0a\x09<return self.charCodeAt(0);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self).charAt(anIndex - 1) || aBlock();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.String)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<return String(self).charAt(anIndex - 1) || aBlock()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "charCodeAt:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.charCodeAt(anInteger - 1) ;
return self}, function($ctx1) {$ctx1.fill(self,"charCodeAt:",{anInteger:anInteger},smalltalk.String)})},
args: ["anInteger"],
source: "charCodeAt: anInteger\x0a\x09< return self.charCodeAt(anInteger - 1) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "codePoint",
category: 'accessing',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._size()).__tild_tild((1));
if(smalltalk.assert($1)){
_st($Error())._signal_("not a character");
};
$2=_st(self)._asciiValue();
return $2;
}, function($ctx1) {$ctx1.fill(self,"codePoint",{},smalltalk.String)})},
args: [],
source: "codePoint\x0a\x09self size ~~ 1 ifTrue: [Error signal: 'not a character'].\x0a\x09^ self asciiValue",
messageSends: ["ifTrue:", "signal:", "~~", "size", "asciiValue"],
referencedClasses: ["Error"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "convertTDEvaluateTokenResponseToText",
category: 'topez-common-core',
fn: function (){
var self=this;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STON())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"convertTDEvaluateTokenResponseToText",{},smalltalk.String)})},
args: [],
source: "convertTDEvaluateTokenResponseToText\x0a    \x22expected response is a String, but could be a TZProxyNotification\x22\x0a\x0a    ^ STON fromString: self",
messageSends: ["fromString:"],
referencedClasses: ["STON"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.substring(anIndex - 1, anotherIndex);
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex},smalltalk.String)})},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09<return self.substring(anIndex - 1, anotherIndex)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceAll:with:",
category: 'regular expressions',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._replace_with_(aString,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceAll:with:",{aString:aString,anotherString:anotherString},smalltalk.String)})},
args: ["aString", "anotherString"],
source: "copyReplaceAll: aString with: anotherString\x0a\x09^ self replace: aString with: anotherString",
messageSends: ["replace:with:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceFrom:to:with:",
category: 'copying',
fn: function (start,stop,replacement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.substr(0, start - 1) + replacement + self.substr(stop) ;
return self}, function($ctx1) {$ctx1.fill(self,"copyReplaceFrom:to:with:",{start:start,stop:stop,replacement:replacement},smalltalk.String)})},
args: ["start", "stop", "replacement"],
source: "copyReplaceFrom: start to: stop with: replacement\x0a\x09\x22Answer a copy of the receiver satisfying the following conditions: If \x0a\x09stop is less than start, then this is an insertion; stop should be exactly \x0a\x09start-1, start = 1 means insert before the first character, start = size+1 \x0a\x09means append after last character. Otherwise, this is a replacement; start \x0a\x09and stop have to be within the receiver's bounds.\x22\x0a\x0a\x09\x22TODO: think about negative indices\x22\x0a\x09< return self.substr(0, start - 1) + replacement + self.substr(stop) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "crlfSanitized",
category: 'converting',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._lines())._join_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlfSanitized",{},smalltalk.String)})},
args: [],
source: "crlfSanitized\x0a\x09^self lines join: String lf",
messageSends: ["join:", "lf", "lines"],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._shallowCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.String)})},
args: [],
source: "deepCopy\x0a\x09^self shallowCopy",
messageSends: ["shallowCopy"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "digitValue",
category: 'converting',
fn: function (){
var self=this;
var digitValue;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._size()).__tild_tild((1));
if(smalltalk.assert($1)){
_st($Error())._signal_("not a character");
};
digitValue=_st(_st("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")._indexOf_(self)).__minus((1));
$2=_st(digitValue).__gt_eq((0));
if(smalltalk.assert($2)){
$3=digitValue;
return $3;
} else {
_st($Error())._signal_("not implemented yet");
};
return self}, function($ctx1) {$ctx1.fill(self,"digitValue",{digitValue:digitValue},smalltalk.String)})},
args: [],
source: "digitValue\x0a\x09|digitValue|\x0a\x09self size ~~ 1 ifTrue: [Error signal: 'not a character'].\x0a\x09(digitValue := ('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' indexOf: self) - 1) >= 0\x0a\x09\x09ifTrue: [^ digitValue ]\x0a\x09\x09ifFalse: [Error signal: 'not implemented yet'].",
messageSends: ["ifTrue:", "signal:", "~~", "size", "ifTrue:ifFalse:", ">=", "-", "indexOf:"],
referencedClasses: ["Error"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self.charAt(i));};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.String)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self.charAt(i));}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeAsHtml",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $(String.fromCharCode(60) + 'div/' + String.fromCharCode(62)).text(self).html(); ;
return self}, function($ctx1) {$ctx1.fill(self,"encodeAsHtml",{},smalltalk.String)})},
args: [],
source: "encodeAsHtml\x0a\x09< return $(String.fromCharCode(60) + 'div/' + String.fromCharCode(62)).text(self).html(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "escaped",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return escape(self);
return self}, function($ctx1) {$ctx1.fill(self,"escaped",{},smalltalk.String)})},
args: [],
source: "escaped\x0a\x09<return escape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "findDelimiters:startingAt:",
category: 'split join',
fn: function (delimiters,start){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
_st(start)._to_do_(_st(self)._size(),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(delimiters)._do_((function(delim){
return smalltalk.withContext(function($ctx3) {
$1=_st(delim).__eq(_st(self)._at_(i));
if(smalltalk.assert($1)){
$2=i;
throw $early=[$2];
};
}, function($ctx3) {$ctx3.fillBlock({delim:delim},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
$3=_st(_st(self)._size()).__plus((1));
return $3;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"findDelimiters:startingAt:",{delimiters:delimiters,start:start},smalltalk.String)})},
args: ["delimiters", "start"],
source: "findDelimiters: delimiters startingAt: start \x0a\x09\x22Answer the index of the character within the receiver, starting at start, that matches one of the delimiters. If the receiver does not contain any of the delimiters, answer size + 1.\x22\x0a\x0a\x09start to: self size do: [:i |\x0a\x09\x09delimiters do: [:delim | delim = (self at: i) ifTrue: [^ i]]].\x0a\x09^ self size + 1",
messageSends: ["to:do:", "size", "do:", "ifTrue:", "=", "at:", "+"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "findTokens:",
category: 'split join',
fn: function (delimiters){
var self=this;
var tokens,keyStart,keyStop,separators;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
tokens=_st($OrderedCollection())._new();
$1=_st(delimiters)._isCharacter();
if(smalltalk.assert($1)){
separators=_st($Array())._with_(delimiters);
} else {
separators=delimiters;
};
keyStop=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(keyStop).__lt_eq(_st(self)._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
keyStart=_st(self)._skipDelimiters_startingAt_(separators,keyStop);
keyStart;
keyStop=_st(self)._findDelimiters_startingAt_(separators,keyStart);
keyStop;
$2=_st(keyStart).__lt(keyStop);
if(smalltalk.assert($2)){
return _st(tokens)._add_(_st(self)._copyFrom_to_(keyStart,_st(keyStop).__minus((1))));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=tokens;
return $3;
}, function($ctx1) {$ctx1.fill(self,"findTokens:",{delimiters:delimiters,tokens:tokens,keyStart:keyStart,keyStop:keyStop,separators:separators},smalltalk.String)})},
args: ["delimiters"],
source: "findTokens: delimiters\x0a\x09\x22Answer the collection of tokens that result from parsing self.  Return strings between the delimiters.  Any character in the Collection delimiters marks a border.  Several delimiters in a row are considered as just one separation.  Also, allow delimiters to be a single character.\x22\x0a\x09| tokens keyStart keyStop separators |\x0a\x0a\x09tokens := OrderedCollection new.\x0a\x09separators := delimiters isCharacter \x0a\x09\x09ifTrue: [Array with: delimiters]\x0a\x09\x09ifFalse: [delimiters].\x0a\x09keyStop := 1.\x0a\x09[keyStop <= self size] whileTrue:\x0a\x09\x09[keyStart := self skipDelimiters: separators startingAt: keyStop.\x0a\x09\x09keyStop := self findDelimiters: separators startingAt: keyStart.\x0a\x09\x09keyStart < keyStop\x0a\x09\x09\x09ifTrue: [tokens add: (self copyFrom: keyStart to: (keyStop - 1))]].\x0a\x09^ tokens",
messageSends: ["new", "ifTrue:ifFalse:", "with:", "isCharacter", "whileTrue:", "skipDelimiters:startingAt:", "findDelimiters:startingAt:", "ifTrue:", "add:", "copyFrom:to:", "-", "<", "<=", "size"],
referencedClasses: ["OrderedCollection", "Array"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "includesSubString:",
category: 'testing',
fn: function (subString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.indexOf(subString) != -1 ;
return self}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString},smalltalk.String)})},
args: ["subString"],
source: "includesSubString: subString\x0a\x09< return self.indexOf(subString) != -1 >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isCharacter",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._size()).__eq((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isCharacter",{},smalltalk.String)})},
args: [],
source: "isCharacter\x0a\x09^ self size = 1",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isDigit",
category: 'testing',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._isCharacter();
if(! smalltalk.assert($1)){
_st($Error())._signal_("not a character");
};
$2=_st(_st(_st(self)._asciiValue()).__gt_eq((48)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._asciiValue()).__lt_eq((57));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"isDigit",{},smalltalk.String)})},
args: [],
source: "isDigit\x0a\x09self isCharacter ifFalse: [Error signal: 'not a character'].\x0a\x09^ self asciiValue >= 48 and: [self asciiValue <= 57]",
messageSends: ["ifFalse:", "signal:", "isCharacter", "and:", "<=", "asciiValue", ">="],
referencedClasses: ["Error"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.String)})},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isSeparator",
category: 'testing',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(_st(self)._size()).__tild_tild((1));
if(smalltalk.assert($1)){
_st($Error())._signal_("not a character");
};
$2=_st(_st(self)._asciiValue()).__eq((32));
if(smalltalk.assert($2)){
return true;
};
$3=_st(_st(self)._asciiValue()).__eq((13));
if(smalltalk.assert($3)){
return true;
};
$4=_st(_st(self)._asciiValue()).__eq((9));
if(smalltalk.assert($4)){
return true;
};
$5=_st(_st(self)._asciiValue()).__eq((10));
if(smalltalk.assert($5)){
return true;
};
$6=_st(_st(self)._asciiValue()).__eq((12));
if(smalltalk.assert($6)){
return true;
};
return false;
}, function($ctx1) {$ctx1.fill(self,"isSeparator",{},smalltalk.String)})},
args: [],
source: "isSeparator\x0a\x09\x22Answer whether the receiver is one of the separator characters--space, \x0a\x09cr, tab, line feed, or form feed.\x22\x0a\x09self size ~~ 1 ifTrue: [Error signal: 'not a character'].\x0a\x09self asciiValue = 32 ifTrue: [^true].\x09\x22space\x22\x0a\x09self asciiValue = 13 ifTrue: [^true].\x09\x22cr\x22\x0a\x09self asciiValue = 9 ifTrue: [^true].\x09\x22tab\x22\x0a\x09self asciiValue = 10 ifTrue: [^true].\x09\x22line feed\x22\x0a\x09self asciiValue = 12 ifTrue: [^true].\x09\x22form feed\x22\x0a\x09^false",
messageSends: ["ifTrue:", "signal:", "~~", "size", "=", "asciiValue"],
referencedClasses: ["Error"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isString",{},smalltalk.String)})},
args: [],
source: "isString\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isVowel",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._size()).__eq((1)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st("aeiou")._includes_(_st(self)._asLowercase());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVowel",{},smalltalk.String)})},
args: [],
source: "isVowel\x0a\x09\x22Answer true if the receiver is a one character string containing a voyel\x22\x0a\x09\x0a\x09^ self size = 1 and: [ 'aeiou' includes: self asLowercase ]",
messageSends: ["and:", "includes:", "asLowercase", "=", "size"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
category: 'split join',
fn: function (aCollection){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(aCollection)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(_st(each)._asString());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(self);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"join:",{aCollection:aCollection},smalltalk.String)})},
args: ["aCollection"],
source: "join: aCollection\x0a\x09^ String\x0a\x09\x09streamContents: [:stream | aCollection\x0a\x09\x09\x09\x09do: [:each | stream nextPutAll: each asString]\x0a\x09\x09\x09\x09separatedBy: [stream nextPutAll: self]]",
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineIndicesDo:",
category: 'split join',
fn: function (aBlock){
var self=this;
var cr,lf,start,sz,nextLF,nextCR;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
start=(1);
sz=_st(self)._size();
cr=_st($String())._cr();
nextCR=_st(self)._indexOf_startingAt_(cr,(1));
lf=_st($String())._lf();
nextLF=_st(self)._indexOf_startingAt_(lf,(1));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(start).__lt_eq(sz);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(nextLF).__eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextCR).__eq((0));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(aBlock)._value_value_value_(start,sz,sz);
$2=self;
throw $early=[$2];
};
$3=_st(_st(nextCR).__eq((0)))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st((0)).__lt(nextLF))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(nextLF).__lt(nextCR);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(aBlock)._value_value_value_(start,_st(nextLF).__minus((1)),nextLF);
start=_st((1)).__plus(nextLF);
start;
nextLF=_st(self)._indexOf_startingAt_(lf,start);
return nextLF;
} else {
$4=_st(_st((1)).__plus(nextCR)).__eq(nextLF);
if(smalltalk.assert($4)){
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextLF);
start=_st((1)).__plus(nextLF);
start;
nextCR=_st(self)._indexOf_startingAt_(cr,start);
nextCR;
nextLF=_st(self)._indexOf_startingAt_(lf,start);
return nextLF;
} else {
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextCR);
start=_st((1)).__plus(nextCR);
start;
nextCR=_st(self)._indexOf_startingAt_(cr,start);
return nextCR;
};
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineIndicesDo:",{aBlock:aBlock,cr:cr,lf:lf,start:start,sz:sz,nextLF:nextLF,nextCR:nextCR},smalltalk.String)})},
args: ["aBlock"],
source: "lineIndicesDo: aBlock\x0a\x09\x22execute aBlock with 3 arguments for each line:\x0a\x09- start index of line\x0a\x09- end index of line without line delimiter\x0a\x09- end index of line including line delimiter(s) CR, LF or CRLF\x22\x0a\x09\x0a\x09| cr lf start sz nextLF nextCR |\x0a\x09start := 1.\x0a\x09sz := self size.\x0a\x09cr := String cr.\x0a\x09nextCR := self indexOf: cr startingAt: 1.\x0a\x09lf := String lf.\x0a\x09nextLF := self indexOf: lf startingAt: 1.\x0a\x09[ start <= sz ] whileTrue: [\x0a\x09\x09(nextLF = 0 and: [ nextCR = 0 ])\x0a\x09\x09\x09ifTrue: [ \x22No more CR, nor LF, the string is over\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: sz value: sz.\x0a\x09\x09\x09\x09\x09^self ].\x0a\x09\x09(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])\x0a\x09\x09\x09ifTrue: [ \x22Found a LF\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextLF - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09ifFalse: [ 1 + nextCR = nextLF\x0a\x09\x09\x09\x09ifTrue: [ \x22Found a CR-LF pair\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09\x09ifFalse: [ \x22Found a CR\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextCR.\x0a\x09\x09\x09\x09\x09start := 1 + nextCR.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start ]]]",
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "ifTrue:", "value:value:value:", "and:", "=", "ifTrue:ifFalse:", "-", "+", "or:", "<", "<="],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineNumber:",
category: 'split join',
fn: function (anIndex){
var self=this;
var lineCount;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
lineCount=(0);
_st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
lineCount=_st(lineCount).__plus((1));
$1=_st(lineCount).__eq(anIndex);
if(smalltalk.assert($1)){
$2=_st(self)._copyFrom_to_(start,endWithoutDelimiters);
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineNumber:",{anIndex:anIndex,lineCount:lineCount},smalltalk.String)})},
args: ["anIndex"],
source: "lineNumber: anIndex\x0a\x09\x22Answer a string containing the characters in the given line number.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].\x0a\x09^nil",
messageSends: ["lineIndicesDo:", "ifTrue:", "copyFrom:to:", "=", "+"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
category: 'split join',
fn: function (){
var self=this;
var lines;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
lines=_st($Array())._new();
_st(self)._linesDo_((function(aLine){
return smalltalk.withContext(function($ctx2) {
return _st(lines)._add_(aLine);
}, function($ctx2) {$ctx2.fillBlock({aLine:aLine},$ctx1)})}));
$1=lines;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lines",{lines:lines},smalltalk.String)})},
args: [],
source: "lines\x0a\x09\x22Answer an array of lines composing this receiver without the line ending delimiters.\x22\x0a\x0a\x09| lines |\x0a\x09lines := Array new.\x0a\x09self linesDo: [:aLine | lines add: aLine].\x0a\x09^lines",
messageSends: ["new", "linesDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "linesDo:",
category: 'split join',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st(self)._copyFrom_to_(start,endWithoutDelimiters));
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock},smalltalk.String)})},
args: ["aBlock"],
source: "linesDo: aBlock\x0a\x09\x22Execute aBlock with each line in this string. The terminating line\x0a\x09delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock\x22\x0a\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09aBlock value: (self copyFrom: start to: endWithoutDelimiters)]",
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "match:",
category: 'regular expressions',
fn: function (aRegexp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.search(aRegexp) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp},smalltalk.String)})},
args: ["aRegexp"],
source: "match: aRegexp\x0a\x09<return self.search(aRegexp) != -1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesOf:",
category: 'regular expressions',
fn: function (aRegularExpression){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.match(aRegularExpression);
return self}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression},smalltalk.String)})},
args: ["aRegularExpression"],
source: "matchesOf: aRegularExpression\x0a\x09<return self.match(aRegularExpression)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "parseFloat",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseFloat(self) ;
return self}, function($ctx1) {$ctx1.fill(self,"parseFloat",{},smalltalk.String)})},
args: [],
source: "parseFloat\x0a\x09< return parseFloat(self) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $.parseJSON(self) ;
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON",{},smalltalk.String)})},
args: [],
source: "parseJSON\x0a\x09< return $.parseJSON(self) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printNl",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
console.log(self);
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{},smalltalk.String)})},
args: [],
source: "printNl\x0a\x09<console.log(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
var x;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("'");
_st((1))._to_do_(_st(self)._size(),(function(i){
return smalltalk.withContext(function($ctx2) {
x=_st(self)._at_(i);
_st(aStream)._nextPutAll_(x);
$1=_st(x).__eq("'");
if(smalltalk.assert($1)){
return _st(aStream)._nextPutAll_(x);
};
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
_st(aStream)._nextPutAll_("'");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,x:x},smalltalk.String)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22Print inside string quotes, doubling inbedded quotes.\x22\x0a\x09|x|\x0a\x09aStream nextPutAll: ''''.\x0a\x091 to: self size do:\x0a\x09\x09[:i |\x0a\x09\x09aStream nextPutAll: (x := self at: i).\x0a\x09\x09x = '''' ifTrue: [aStream nextPutAll: x]].\x0a\x09aStream nextPutAll: ''''.",
messageSends: ["nextPutAll:", "to:do:", "size", "at:", "ifTrue:", "="],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "readStream",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class())._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readStream",{},smalltalk.String)})},
args: [],
source: "readStream\x0a\x09^ self class streamClass on: self",
messageSends: ["on:", "streamClass", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:with:",
category: 'regular expressions',
fn: function (aString,anotherString){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(aString,"g"),anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString},smalltalk.String)})},
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString",
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceRegexp:with:",
category: 'regular expressions',
fn: function (aRegexp,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.replace(aRegexp, aString);
return self}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString},smalltalk.String)})},
args: ["aRegexp", "aString"],
source: "replaceRegexp: aRegexp with: aString\x0a\x09<return self.replace(aRegexp, aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split("").reverse().join("");
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.String)})},
args: [],
source: "reversed\x0a\x09<return self.split(\x22\x22).reverse().join(\x22\x22)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.String)})},
args: [],
source: "shallowCopy\x0a\x09^self class fromString: self",
messageSends: ["fromString:", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.String)})},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "skipDelimiters:startingAt:",
category: 'split join',
fn: function (delimiters,start){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(start)._to_do_(_st(self)._size(),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(delimiters)._detect_ifNone_((function(delim){
return smalltalk.withContext(function($ctx3) {
return _st(delim).__eq(_st(self)._at_(i));
}, function($ctx3) {$ctx3.fillBlock({delim:delim},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
$1=i;
throw $early=[$1];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
$2=_st(_st(self)._size()).__plus((1));
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"skipDelimiters:startingAt:",{delimiters:delimiters,start:start},smalltalk.String)})},
args: ["delimiters", "start"],
source: "skipDelimiters: delimiters startingAt: start \x0a\x09\x22Answer the index of the character within the receiver, starting at start, that does NOT match one of the delimiters. If the receiver does not contain any of the delimiters, answer size + 1.  Assumes the delimiters to be a non-empty string.\x22\x0a\x0a\x09start to: self size do: [:i |\x0a\x09\x09delimiters detect: [:delim | delim = (self at: i)]\x0a\x09\x09\x09\x09ifNone: [^ i]].\x0a\x09^ self size + 1",
messageSends: ["to:do:", "size", "detect:ifNone:", "=", "at:", "+"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
category: 'ston-core',
fn: function (stonWriter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stonWriter)._writeString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},smalltalk.String)})},
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a\x09stonWriter writeString: self",
messageSends: ["writeString:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "stonProcessSubObjects:",
category: 'ston-core',
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"stonProcessSubObjects:",{block:block},smalltalk.String)})},
args: ["block"],
source: "stonProcessSubObjects: block",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "subStrings:",
category: 'converting',
fn: function (separator){
var self=this;
var tokens;
return smalltalk.withContext(function($ctx1) { 
var $1;
tokens=_st(self)._tokenize_(separator);
_st(tokens)._removeAllSuchThat_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__eq("");
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$1=tokens;
return $1;
}, function($ctx1) {$ctx1.fill(self,"subStrings:",{separator:separator,tokens:tokens},smalltalk.String)})},
args: ["separator"],
source: "subStrings: separator\x0a\x09|tokens|\x0a\x09tokens := self tokenize: separator.\x0a\x09tokens removeAllSuchThat: [:x | x = ''].\x0a\x09^ tokens",
messageSends: ["tokenize:", "removeAllSuchThat:", "="],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "tokenize:",
category: 'converting',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split(aString);
return self}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "tokenize: aString\x0a\x09<return self.split(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth",
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._trimBoth_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{},smalltalk.String)})},
args: [],
source: "trimBoth\x0a\x09^self trimBoth: '\x5cs'",
messageSends: ["trimBoth:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth:",
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._trimLeft_(separators))._trimRight_(separators);
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators},smalltalk.String)})},
args: ["separators"],
source: "trimBoth: separators\x0a\x0a\x09^(self trimLeft: separators) trimRight: separators",
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft",
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._trimLeft_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{},smalltalk.String)})},
args: [],
source: "trimLeft\x0a\x09^self trimLeft: '\x5cs'",
messageSends: ["trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft:",
category: 'regular expressions',
fn: function (separators){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(_st(_st("^[").__comma(separators)).__comma("]+"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators},smalltalk.String)})},
args: ["separators"],
source: "trimLeft: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight",
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._trimRight_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight",{},smalltalk.String)})},
args: [],
source: "trimRight\x0a\x09^self trimRight: '\x5cs'",
messageSends: ["trimRight:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight:",
category: 'regular expressions',
fn: function (separators){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(_st(_st("[").__comma(separators)).__comma("]+$"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators},smalltalk.String)})},
args: ["separators"],
source: "trimRight: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "unescaped",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return unescape(self);
return self}, function($ctx1) {$ctx1.fill(self,"unescaped",{},smalltalk.String)})},
args: [],
source: "unescaped\x0a\x09<return unescape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.String)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "writeStream",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class())._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},smalltalk.String)})},
args: [],
source: "writeStream\x0a\x09^ self class streamClass on: self",
messageSends: ["on:", "streamClass", "class"],
referencedClasses: []
}),
smalltalk.String);


smalltalk.addMethod(
smalltalk.method({
selector: "cr",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r';
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.String.klass)})},
args: [],
source: "cr\x0a\x09<return '\x5cr'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r\n';
return self}, function($ctx1) {$ctx1.fill(self,"crlf",{},smalltalk.String.klass)})},
args: [],
source: "crlf\x0a\x09<return '\x5cr\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromCharCode:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger},smalltalk.String.klass)})},
args: ["anInteger"],
source: "fromCharCode: anInteger\x0a\x09<return String.fromCharCode(anInteger)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(aString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.String.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09\x09<return String(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\n';
return self}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.String.klass)})},
args: [],
source: "lf\x0a\x09<return '\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "random",
category: 'random',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);;
return self}, function($ctx1) {$ctx1.fill(self,"random",{},smalltalk.String.klass)})},
args: [],
source: "random\x0a\x09\x22Returns random alphanumeric string beginning with letter\x22\x0a\x09<return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "randomNotIn:",
category: 'random',
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(self)._random();
result;
return _st(aString)._includesSubString_(result);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue();
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"randomNotIn:",{aString:aString,result:result},smalltalk.String.klass)})},
args: ["aString"],
source: "randomNotIn: aString\x0a\x09| result |\x0a    [ result := self random. aString includesSubString: result ] whileTrue.\x0a    ^result",
messageSends: ["whileTrue", "random", "includesSubString:"],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ' ';
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.String.klass)})},
args: [],
source: "space\x0a\x09<return ' '>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$StringStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.String.klass)})},
args: [],
source: "streamClass\x0a\x09\x09^StringStream",
messageSends: [],
referencedClasses: ["StringStream"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\t';
return self}, function($ctx1) {$ctx1.fill(self,"tab",{},smalltalk.String.klass)})},
args: [],
source: "tab\x0a\x09<return '\x5ct'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(aUTFCharCode);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode},smalltalk.String.klass)})},
args: ["aUTFCharCode"],
source: "value: aUTFCharCode\x0a\x0a\x09<return String.fromCharCode(aUTFCharCode);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);


smalltalk.addClass('RunArray', smalltalk.SequenceableCollection, ['runs', 'values', 'lastIndex', 'lastRun', 'lastOffset'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aRunArray){
var self=this;
var new_,newRuns;
function $RunArray(){return smalltalk.RunArray||(typeof RunArray=="undefined"?nil:RunArray)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
$1=_st(aRunArray)._isMemberOf_($RunArray());
if(! smalltalk.assert($1)){
new_=_st(self)._copy();
new_;
_st(aRunArray)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(new_)._addLast_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=new_;
return $2;
};
$3=_st(_st(self["@runs"])._size()).__eq((0));
if(smalltalk.assert($3)){
$4=_st(aRunArray)._copy();
return $4;
};
$5=_st(_st(_st(aRunArray)._runs())._size()).__eq((0));
if(smalltalk.assert($5)){
$6=_st(self)._copy();
return $6;
};
$7=_st(_st(self["@values"])._at_(_st(self["@values"])._size())).__tild_eq(_st(_st(aRunArray)._values())._at_((1)));
if(smalltalk.assert($7)){
$8=_st($RunArray())._runs_values_(_st(self["@runs"]).__comma(_st(aRunArray)._runs()),_st(self["@values"]).__comma(_st(aRunArray)._values()));
return $8;
};
newRuns=_st(self["@runs"])._copyReplaceFrom_to_with_(_st(self["@runs"])._size(),_st(self["@runs"])._size(),_st(aRunArray)._runs());
_st(newRuns)._at_put_(_st(self["@runs"])._size(),_st(_st(self["@runs"])._at_(_st(self["@runs"])._size())).__plus(_st(_st(aRunArray)._runs())._at_((1))));
$9=_st($RunArray())._runs_values_(newRuns,_st(self["@values"])._copyReplaceFrom_to_with_(_st(self["@values"])._size(),_st(self["@values"])._size(),_st(aRunArray)._values()));
return $9;
}, function($ctx1) {$ctx1.fill(self,",",{aRunArray:aRunArray,new_:new_,newRuns:newRuns},smalltalk.RunArray)})},
args: ["aRunArray"],
source: ", aRunArray \x0a\x09\x22Answer a new RunArray that is a concatenation of the receiver and\x0a\x09aRunArray.\x22\x0a\x0a\x09| new newRuns |\x0a\x09(aRunArray isMemberOf: RunArray)\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[new := self copy.\x0a\x09\x09\x09\x22attempt to be sociable\x22\x0a\x09\x09\x09aRunArray do: [:each | new addLast: each].\x0a\x09\x09\x09^new].\x0a\x09runs size = 0 ifTrue: [^aRunArray copy].\x0a\x09aRunArray runs size = 0 ifTrue: [^self copy].\x0a\x09(values at: values size) ~= (aRunArray values at: 1)\x0a\x09\x09ifTrue: [^RunArray\x0a\x09\x09\x09\x09\x09runs: runs , aRunArray runs\x0a\x09\x09\x09\x09\x09values: values , aRunArray values].\x0a\x09newRuns := runs\x0a\x09\x09\x09copyReplaceFrom: runs size\x0a\x09\x09\x09to: runs size\x0a\x09\x09\x09with: aRunArray runs.\x0a\x09newRuns at: runs size put: (runs at: runs size) + (aRunArray runs at: 1).\x0a\x09^RunArray\x0a\x09\x09runs: newRuns\x0a\x09\x09values: \x0a\x09\x09\x09(values\x0a\x09\x09\x09\x09copyReplaceFrom: values size\x0a\x09\x09\x09\x09to: values size\x0a\x09\x09\x09\x09with: aRunArray values)",
messageSends: ["ifFalse:", "copy", "do:", "addLast:", "isMemberOf:", "ifTrue:", "=", "size", "runs", "runs:values:", ",", "values", "~=", "at:", "copyReplaceFrom:to:with:", "at:put:", "+"],
referencedClasses: ["RunArray"]
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (otherArray){
var self=this;
function $RunArray(){return smalltalk.RunArray||(typeof RunArray=="undefined"?nil:RunArray)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(self).__eq_eq(otherArray);
if(smalltalk.assert($1)){
return true;
};
$2=_st(_st(self)._species()).__eq_eq(_st(otherArray)._species());
if(! smalltalk.assert($2)){
return false;
};
$3=_st(otherArray)._isMemberOf_($RunArray());
if(! smalltalk.assert($3)){
$4=_st(self)._hasEqualElements_(otherArray);
return $4;
};
$5=_st(_st(self["@runs"])._hasEqualElements_(_st(otherArray)._runs()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@values"])._hasEqualElements_(_st(otherArray)._values());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $5;
}, function($ctx1) {$ctx1.fill(self,"=",{otherArray:otherArray},smalltalk.RunArray)})},
args: ["otherArray"],
source: "= otherArray \x0a\x09\x22Test if all my elements are equal to those of otherArray\x22\x0a\x0a\x09self == otherArray ifTrue: [^true].\x0a\x09self species == otherArray species ifFalse: [^ false].\x0a\x09(otherArray isMemberOf: RunArray) ifFalse: [^ self hasEqualElements: otherArray].\x0a\x0a\x09\x22Faster test between two RunArrays\x22\x0a\x09^ (runs hasEqualElements: otherArray runs)\x0a\x09\x09and: [values hasEqualElements: otherArray values]",
messageSends: ["ifTrue:", "==", "ifFalse:", "species", "hasEqualElements:", "isMemberOf:", "and:", "values", "runs"],
referencedClasses: ["RunArray"]
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "add:withOccurrences:",
category: 'adding',
fn: function (newObject,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(anInteger).__lt_eq((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@lastIndex"]=nil;
$3=_st(_st(_st(self["@runs"])._size()).__eq((0)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@values"])._last()).__tild_eq(newObject);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
self["@runs"]=_st(self["@runs"])._copyWith_(anInteger);
self["@runs"];
self["@values"]=_st(self["@values"])._copyWith_(newObject);
self["@values"];
} else {
_st(self["@runs"])._at_put_(_st(self["@runs"])._size(),_st(_st(self["@runs"])._last()).__plus(anInteger));
};
return self}, function($ctx1) {$ctx1.fill(self,"add:withOccurrences:",{newObject:newObject,anInteger:anInteger},smalltalk.RunArray)})},
args: ["newObject", "anInteger"],
source: "add: newObject withOccurrences: anInteger\x0a\x09\x22Add value as the last element of the receiver, the given number of times\x22\x0a\x09anInteger <= 0 ifTrue: [ ^self ].\x0a\x09lastIndex := nil. \x22flush access cache\x22\x0a\x09(runs size=0 or: [values last ~= newObject])\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[runs := runs copyWith: anInteger.\x0a\x09\x09\x09values := values copyWith: newObject]\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[runs at: runs size put: runs last + anInteger]",
messageSends: ["ifTrue:", "<=", "ifTrue:ifFalse:", "copyWith:", "at:put:", "size", "+", "last", "or:", "~=", "="],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "addFirst:",
category: 'adding',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@lastIndex"]=nil;
$1=_st(_st(_st(self["@runs"])._size()).__eq((0)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@values"])._first()).__tild_eq(value);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self["@runs"]=_st([(1)]).__comma(self["@runs"]);
self["@runs"];
self["@values"]=_st([value]).__comma(self["@values"]);
self["@values"];
} else {
_st(self["@runs"])._at_put_((1),_st(_st(self["@runs"])._first()).__plus((1)));
};
return self}, function($ctx1) {$ctx1.fill(self,"addFirst:",{value:value},smalltalk.RunArray)})},
args: ["value"],
source: "addFirst: value\x0a\x09\x22Add value as the first element of the receiver.\x22\x0a\x09lastIndex := nil. \x22flush access cache\x22\x0a\x09(runs size=0 or: [values first ~= value])\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[runs := {1}, runs.\x0a\x09\x09\x09values := {value}, values]\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[runs at: 1 put: runs first+1]",
messageSends: ["ifTrue:ifFalse:", ",", "at:put:", "+", "first", "or:", "~=", "=", "size"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "addLast:",
category: 'adding',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@lastIndex"]=nil;
$1=_st(_st(_st(self["@runs"])._size()).__eq((0)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@values"])._last()).__tild_eq(value);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
self["@runs"]=_st(self["@runs"])._copyWith_((1));
self["@runs"];
self["@values"]=_st(self["@values"])._copyWith_(value);
self["@values"];
} else {
_st(self["@runs"])._at_put_(_st(self["@runs"])._size(),_st(_st(self["@runs"])._last()).__plus((1)));
};
$2=value;
return $2;
}, function($ctx1) {$ctx1.fill(self,"addLast:",{value:value},smalltalk.RunArray)})},
args: ["value"],
source: "addLast: value\x0a\x09\x22Add value as the last element of the receiver.\x22\x0a\x09lastIndex := nil. \x22flush access cache\x22\x0a\x09(runs size=0 or: [values last ~= value])\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[runs := runs copyWith: 1.\x0a\x09\x09\x09values := values copyWith: value]\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[runs at: runs size put: runs last+1].\x0a\x09^value",
messageSends: ["ifTrue:ifFalse:", "copyWith:", "at:put:", "size", "+", "last", "or:", "~=", "="],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "allSatisfy:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._allSatisfy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSatisfy:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "allSatisfy: aBlock \x0a\x09\x22Only evaluate once per run\x22\x0a\x0a\x09^values allSatisfy: aBlock",
messageSends: ["allSatisfy:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "anySatisfy:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._anySatisfy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"anySatisfy:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "anySatisfy: aBlock \x0a\x09\x22Only evaluate once per run\x22\x0a\x0a\x09^values anySatisfy: aBlock",
messageSends: ["anySatisfy:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self)._at_setRunOffsetAndValue_(index,(function(run,offset,value){
return smalltalk.withContext(function($ctx2) {
$1=value;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({run:run,offset:offset,value:value},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index},smalltalk.RunArray)})},
args: ["index"],
source: "at: index\x0a\x0a\x09self at: index setRunOffsetAndValue: [:run :offset :value | ^value]",
messageSends: ["at:setRunOffsetAndValue:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (index,aValue){
var self=this;
var runIndex,offsetInRun,lastValue,runLength,runReplacement,valueReplacement,iStart,iStop;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(index)._isInteger();
if(! smalltalk.assert($1)){
_st(self)._errorNonIntegerIndex();
};
$2=_st(_st(index).__gt_eq((1)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(index).__lt_eq(_st(self)._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($2)){
_st(self)._errorSubscriptBounds_(index);
};
_st(self)._at_setRunOffsetAndValue_(index,(function(run,offset,value){
return smalltalk.withContext(function($ctx2) {
runIndex=run;
runIndex;
offsetInRun=offset;
offsetInRun;
lastValue=value;
return lastValue;
}, function($ctx2) {$ctx2.fillBlock({run:run,offset:offset,value:value},$ctx1)})}));
$3=_st(aValue).__eq(lastValue);
if(smalltalk.assert($3)){
$4=aValue;
return $4;
};
runLength=_st(self["@runs"])._at_(runIndex);
runReplacement=_st($Array())._with_with_with_(offsetInRun,(1),_st(_st(runLength).__minus(offsetInRun)).__minus((1)));
valueReplacement=_st($Array())._with_with_with_(lastValue,aValue,lastValue);
$5=_st(offsetInRun).__eq((0));
if(smalltalk.assert($5)){
iStart=(2);
} else {
iStart=(1);
};
$6=_st(offsetInRun).__eq(_st(runLength).__minus((1)));
if(smalltalk.assert($6)){
iStop=(2);
} else {
iStop=(3);
};
_st(self)._setRuns_setValues_(_st(self["@runs"])._copyReplaceFrom_to_with_(runIndex,runIndex,_st(runReplacement)._copyFrom_to_(iStart,iStop)),_st(self["@values"])._copyReplaceFrom_to_with_(runIndex,runIndex,_st(valueReplacement)._copyFrom_to_(iStart,iStop)));
_st(self)._coalesce();
$7=aValue;
return $7;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{index:index,aValue:aValue,runIndex:runIndex,offsetInRun:offsetInRun,lastValue:lastValue,runLength:runLength,runReplacement:runReplacement,valueReplacement:valueReplacement,iStart:iStart,iStop:iStop},smalltalk.RunArray)})},
args: ["index", "aValue"],
source: "at: index put: aValue \x0a\x09\x22Set an element of the RunArray\x22\x0a\x09| runIndex offsetInRun lastValue runLength runReplacement valueReplacement iStart iStop |\x0a\x09index isInteger\x0a\x09\x09ifFalse: [self errorNonIntegerIndex].\x0a\x09(index >= 1 and: [index <= self size])\x0a\x09\x09ifFalse: [self errorSubscriptBounds: index].\x0a\x09self\x0a\x09\x09at: index\x0a\x09\x09setRunOffsetAndValue: [:run :offset :value | \x0a\x09\x09\x09runIndex := run.\x0a\x09\x09\x09offsetInRun := offset.\x0a\x09\x09\x09lastValue := value].\x0a\x09aValue = lastValue\x0a\x09\x09ifTrue: [^ aValue].\x0a\x09runLength := runs at: runIndex.\x0a\x09runReplacement := Array\x0a\x09\x09\x09\x09with: offsetInRun\x0a\x09\x09\x09\x09with: 1\x0a\x09\x09\x09\x09with: runLength - offsetInRun - 1.\x0a\x09valueReplacement := Array\x0a\x09\x09\x09\x09with: lastValue\x0a\x09\x09\x09\x09with: aValue\x0a\x09\x09\x09\x09with: lastValue.\x0a\x09iStart := offsetInRun = 0\x0a\x09\x09\x09\x09ifTrue: [2]\x0a\x09\x09\x09\x09ifFalse: [1].\x0a\x09iStop := offsetInRun = (runLength - 1)\x0a\x09\x09\x09\x09ifTrue: [2]\x0a\x09\x09\x09\x09ifFalse: [3].\x0a\x09self\x0a\x09\x09setRuns: (runs copyReplaceFrom: runIndex to: runIndex with: (runReplacement copyFrom: iStart to: iStop))\x0a\x09\x09setValues: (values copyReplaceFrom: runIndex to: runIndex with: (valueReplacement copyFrom: iStart to: iStop)).\x0a\x09self coalesce.\x0a\x09^ aValue",
messageSends: ["ifFalse:", "errorNonIntegerIndex", "isInteger", "errorSubscriptBounds:", "and:", "<=", "size", ">=", "at:setRunOffsetAndValue:", "ifTrue:", "=", "at:", "with:with:with:", "-", "ifTrue:ifFalse:", "setRuns:setValues:", "copyReplaceFrom:to:with:", "copyFrom:to:", "coalesce"],
referencedClasses: ["Array"]
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:setRunOffsetAndValue:",
category: 'private',
fn: function (index,aBlock){
var self=this;
var run,limit,offset;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
limit=_st(self["@runs"])._size();
$1=_st(_st(self["@lastIndex"]).__eq_eq(nil))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(index).__lt(self["@lastIndex"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
run=(1);
run;
offset=_st(index).__minus((1));
offset;
} else {
run=self["@lastRun"];
run;
offset=_st(self["@lastOffset"]).__plus(_st(index).__minus(self["@lastIndex"]));
offset;
};
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(run).__lt_eq(limit))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(offset).__gt_eq(_st(self["@runs"])._at_(run));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
offset=_st(offset).__minus(_st(self["@runs"])._at_(run));
offset;
run=_st(run).__plus((1));
return run;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@lastIndex"]=index;
self["@lastRun"]=run;
self["@lastOffset"]=offset;
$2=_st(run).__gt(limit);
if(smalltalk.assert($2)){
run=_st(run).__minus((1));
run;
offset=_st(offset).__plus(_st(self["@runs"])._at_(run));
offset;
};
$3=_st(aBlock)._value_value_value_(run,offset,_st(self["@values"])._at_(run));
return $3;
}, function($ctx1) {$ctx1.fill(self,"at:setRunOffsetAndValue:",{index:index,aBlock:aBlock,run:run,limit:limit,offset:offset},smalltalk.RunArray)})},
args: ["index", "aBlock"],
source: "at: index setRunOffsetAndValue: aBlock \x0a\x09\x22Supply all run information to aBlock.\x22\x0a\x09\x22Tolerates index=0 and index=size+1 for copyReplace: \x22\x0a\x09| run limit offset |\x0a\x09limit := runs size.\x0a\x09(lastIndex == nil or: [index < lastIndex])\x0a\x09\x09ifTrue: \x22cache not loaded, or beyond index - start over\x22\x0a\x09\x09\x09[run := 1.\x0a\x09\x09\x09offset := index-1]\x0a\x09\x09ifFalse: \x22cache loaded and before index - start at cache\x22\x0a\x09\x09\x09[run := lastRun.\x0a\x09\x09\x09offset := lastOffset + (index-lastIndex)].\x0a\x09[run <= limit and: [offset >= (runs at: run)]]\x0a\x09\x09whileTrue: \x0a\x09\x09\x09[offset := offset - (runs at: run).\x0a\x09\x09\x09run := run + 1].\x0a\x09lastIndex := index. \x22Load cache for next access\x22\x0a\x09lastRun := run.\x0a\x09lastOffset := offset.\x0a\x09run > limit\x0a\x09\x09ifTrue: \x0a\x09\x09\x09[\x22adjustment for size+1\x22\x0a\x09\x09\x09run := run - 1.\x0a\x09\x09\x09offset := offset + (runs at: run)].\x0a\x09^aBlock\x0a\x09\x09value: run \x22an index into runs and values\x22\x0a\x09\x09value: offset \x22zero-based offset from beginning of this run\x22\x0a\x09\x09value: (values at: run) \x22value for this run\x22",
messageSends: ["size", "ifTrue:ifFalse:", "-", "+", "or:", "<", "==", "whileTrue:", "at:", "and:", ">=", "<=", "ifTrue:", ">", "value:value:value:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "coalesce",
category: 'adding',
fn: function (){
var self=this;
var ind;
return smalltalk.withContext(function($ctx1) { 
var $1;
ind=(2);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(ind).__gt(_st(self["@values"])._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(self["@values"])._at_(_st(ind).__minus((1)))).__eq(_st(self["@values"])._at_(ind));
if(smalltalk.assert($1)){
self["@values"]=_st(self["@values"])._copyReplaceFrom_to_with_(ind,ind,[]);
self["@values"];
_st(self["@runs"])._at_put_(_st(ind).__minus((1)),_st(_st(self["@runs"])._at_(_st(ind).__minus((1)))).__plus(_st(self["@runs"])._at_(ind)));
self["@runs"]=_st(self["@runs"])._copyReplaceFrom_to_with_(ind,ind,[]);
return self["@runs"];
} else {
ind=_st(ind).__plus((1));
return ind;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"coalesce",{ind:ind},smalltalk.RunArray)})},
args: [],
source: "coalesce\x0a\x09\x22Try to combine adjacent runs\x22\x0a\x09| ind |\x0a\x09ind := 2.\x0a\x09[ind > values size] whileFalse: [\x0a\x09\x09(values at: ind-1) = (values at: ind) \x0a\x09\x09\x09ifFalse: [ind := ind + 1]\x0a\x09\x09\x09ifTrue: [\x22two are the same, combine them\x22\x0a\x09\x09\x09\x09values := values copyReplaceFrom: ind to: ind with: #().\x0a\x09\x09\x09\x09runs at: ind-1 put: (runs at: ind-1) + (runs at: ind).\x0a\x09\x09\x09\x09runs := runs copyReplaceFrom: ind to: ind with: #().\x0a\x09\x09\x09\x09\x22self error: 'needed to combine runs' \x22]].\x0a\x09\x09\x09",
messageSends: ["whileFalse:", "ifFalse:ifTrue:", "+", "copyReplaceFrom:to:with:", "at:put:", "-", "at:", "=", ">", "size"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class())._runs_values_(_st(_st(self["@runs"])._copy())._contents(),_st(self["@values"])._collect_(aBlock)))._coalesce();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09\x22Beware, the block will be evaluated only once per group of values.\x22\x0a\x09^(self class runs: runs copy contents values: (values collect: aBlock)) coalesce",
messageSends: ["coalesce", "runs:values:", "contents", "copy", "collect:", "class"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (start,stop){
var self=this;
var newRuns,run1,run2,offset1,offset2;
function $RunArray(){return smalltalk.RunArray||(typeof RunArray=="undefined"?nil:RunArray)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(stop).__lt(start);
if(smalltalk.assert($1)){
$2=_st($RunArray())._new();
return $2;
};
_st(self)._at_setRunOffsetAndValue_(start,(function(r,o,value1){
return smalltalk.withContext(function($ctx2) {
run1=r;
run1;
offset1=o;
offset1;
return value1;
}, function($ctx2) {$ctx2.fillBlock({r:r,o:o,value1:value1},$ctx1)})}));
_st(self)._at_setRunOffsetAndValue_(stop,(function(r,o,value2){
return smalltalk.withContext(function($ctx2) {
run2=r;
run2;
offset2=o;
offset2;
return value2;
}, function($ctx2) {$ctx2.fillBlock({r:r,o:o,value2:value2},$ctx1)})}));
$3=_st(run1).__eq(run2);
if(smalltalk.assert($3)){
newRuns=_st($Array())._with_(_st(_st(offset2).__minus(offset1)).__plus((1)));
newRuns;
} else {
newRuns=_st(self["@runs"])._copyFrom_to_(run1,run2);
newRuns;
_st(newRuns)._at_put_((1),_st(_st(newRuns)._at_((1))).__minus(offset1));
_st(newRuns)._at_put_(_st(newRuns)._size(),_st(offset2).__plus((1)));
};
$4=_st($RunArray())._runs_values_(newRuns,_st(self["@values"])._copyFrom_to_(run1,run2));
return $4;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{start:start,stop:stop,newRuns:newRuns,run1:run1,run2:run2,offset1:offset1,offset2:offset2},smalltalk.RunArray)})},
args: ["start", "stop"],
source: "copyFrom: start to: stop\x0a\x09| newRuns run1 run2 offset1 offset2 | \x0a\x09stop < start ifTrue: [^RunArray new].\x0a\x09self at: start setRunOffsetAndValue: [:r :o :value1 | run1 := r. offset1 := o. value1].\x0a\x09self at: stop setRunOffsetAndValue: [:r :o :value2 | run2 := r. offset2 := o. value2].\x0a\x09run1 = run2\x0a\x09\x09ifTrue: \x0a\x09\x09\x09[newRuns := Array with: offset2 - offset1 + 1]\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[newRuns := runs copyFrom: run1 to: run2.\x0a\x09\x09\x09newRuns at: 1 put: (newRuns at: 1) - offset1.\x0a\x09\x09\x09newRuns at: newRuns size put: offset2 + 1].\x0a\x09^RunArray runs: newRuns values: (values copyFrom: run1 to: run2)",
messageSends: ["ifTrue:", "new", "<", "at:setRunOffsetAndValue:", "ifTrue:ifFalse:", "with:", "+", "-", "copyFrom:to:", "at:put:", "at:", "size", "=", "runs:values:"],
referencedClasses: ["RunArray", "Array"]
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceFrom:to:with:",
category: 'copying',
fn: function (start,stop,replacement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._copyFrom_to_((1),_st(start).__minus((1)))).__comma(replacement)).__comma(_st(self)._copyFrom_to_(_st(stop).__plus((1)),_st(self)._size()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceFrom:to:with:",{start:start,stop:stop,replacement:replacement},smalltalk.RunArray)})},
args: ["start", "stop", "replacement"],
source: "copyReplaceFrom: start to: stop with: replacement\x0a\x0a\x09^(self copyFrom: 1 to: start - 1)\x0a\x09\x09, replacement \x0a\x09\x09, (self copyFrom: stop + 1 to: self size)",
messageSends: [",", "copyFrom:to:", "+", "size", "-"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyUpThrough:",
category: 'copying',
fn: function (anElement){
var self=this;
var newValues;
return smalltalk.withContext(function($ctx1) { 
var $1;
newValues=_st(self["@values"])._copyUpThrough_(anElement);
$1=_st(_st(self)._class())._runs_values_(_st(self["@runs"])._copyFrom_to_((1),_st(newValues)._size()),newValues);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyUpThrough:",{anElement:anElement,newValues:newValues},smalltalk.RunArray)})},
args: ["anElement"],
source: "copyUpThrough: anElement\x0a\x09\x22Optimized\x22\x0a\x0a\x09| newValues |\x0a\x09newValues := values copyUpThrough: anElement.\x0a\x09^ self class\x0a\x09\x09runs: (runs copyFrom: 1 to: newValues size)\x0a\x09\x09values: newValues",
messageSends: ["copyUpThrough:", "runs:values:", "copyFrom:to:", "size", "class"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyUpTo:",
category: 'copying',
fn: function (anElement){
var self=this;
var newValues;
return smalltalk.withContext(function($ctx1) { 
var $1;
newValues=_st(self["@values"])._copyUpTo_(anElement);
$1=_st(_st(self)._class())._runs_values_(_st(self["@runs"])._copyFrom_to_((1),_st(newValues)._size()),newValues);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyUpTo:",{anElement:anElement,newValues:newValues},smalltalk.RunArray)})},
args: ["anElement"],
source: "copyUpTo: anElement \x0a\x09\x22Optimized\x22\x0a\x0a\x09| newValues |\x0a\x09newValues := values copyUpTo: anElement.\x0a\x09^ self class\x0a\x09\x09runs: (runs copyFrom: 1 to: newValues size)\x0a\x09\x09values: newValues",
messageSends: ["copyUpTo:", "runs:values:", "copyFrom:to:", "size", "class"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyUpToLast:",
category: 'copying',
fn: function (anElement){
var self=this;
var newValues;
return smalltalk.withContext(function($ctx1) { 
var $1;
newValues=_st(self["@values"])._copyUpToLast_(anElement);
$1=_st(_st(self)._class())._runs_values_(_st(self["@runs"])._copyFrom_to_((1),_st(newValues)._size()),newValues);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyUpToLast:",{anElement:anElement,newValues:newValues},smalltalk.RunArray)})},
args: ["anElement"],
source: "copyUpToLast: anElement\x0a\x09\x22Optimized\x22\x0a\x0a\x09| newValues |\x0a\x09newValues := values copyUpToLast: anElement.\x0a\x09^ self class\x0a\x09\x09runs: (runs copyFrom: 1 to: newValues size)\x0a\x09\x09values: newValues",
messageSends: ["copyUpToLast:", "runs:values:", "copyFrom:to:", "size", "class"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "count:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var count;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
count=(0);
_st(self)._runsAndValuesDo_((function(run,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(value);
if(smalltalk.assert($1)){
count=_st(count).__plus(run);
return count;
};
}, function($ctx2) {$ctx2.fillBlock({run:run,value:value},$ctx1)})}));
$2=count;
return $2;
}, function($ctx1) {$ctx1.fill(self,"count:",{aBlock:aBlock,count:count},smalltalk.RunArray)})},
args: ["aBlock"],
source: "count: aBlock\x0a\x09\x22Beware, the block will be evaluated only once per group of values.\x22\x0a\x09| count |\x0a\x09count := 0.\x0a\x09self runsAndValuesDo: [:run :value |\x0a\x09\x09(aBlock value: value)\x0a\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09[count := count + run]].\x0a\x09^count",
messageSends: ["runsAndValuesDo:", "ifTrue:", "+", "value:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,exceptionBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._detect_ifNone_(aBlock,exceptionBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,exceptionBlock:exceptionBlock},smalltalk.RunArray)})},
args: ["aBlock", "exceptionBlock"],
source: "detect: aBlock ifNone: exceptionBlock \x0a\x09\x22Only evaluate once per run\x22\x0a\x0a\x09^values detect: aBlock ifNone: exceptionBlock ",
messageSends: ["detect:ifNone:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "detectMax:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._detectMax_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detectMax:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "detectMax: aBlock\x0a\x09\x22Only evaluate once per run\x22\x0a\x0a\x09^values detectMax: aBlock",
messageSends: ["detectMax:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "detectMin:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._detectMin_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detectMin:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "detectMin: aBlock\x0a\x09\x22Only evaluate once per run\x22\x0a\x0a\x09^values detectMin: aBlock",
messageSends: ["detectMin:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "detectSum:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var sum;
return smalltalk.withContext(function($ctx1) { 
var $1;
sum=(0);
_st(self)._runsAndValuesDo_((function(run,value){
return smalltalk.withContext(function($ctx2) {
sum=_st(_st(_st(aBlock)._value_(value)).__star(run)).__plus(sum);
return sum;
}, function($ctx2) {$ctx2.fillBlock({run:run,value:value},$ctx1)})}));
$1=sum;
return $1;
}, function($ctx1) {$ctx1.fill(self,"detectSum:",{aBlock:aBlock,sum:sum},smalltalk.RunArray)})},
args: ["aBlock"],
source: "detectSum: aBlock\x0a\x09\x22Only loop on runs\x22\x0a\x09| sum |\x0a\x09sum := 0.\x0a\x09self runsAndValuesDo: [:run :value | \x0a\x09\x09sum := (aBlock value: value) * run + sum].\x0a\x09^ sum",
messageSends: ["runsAndValuesDo:", "+", "*", "value:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((1))._to_do_(_st(self["@runs"])._size(),(function(i){
var r,v;
return smalltalk.withContext(function($ctx2) {
v=_st(self["@values"])._at_(i);
v;
r=_st(self["@runs"])._at_(i);
r;
return _st((function(){
return smalltalk.withContext(function($ctx3) {
r=_st(r).__minus((1));
return _st(r).__gt_eq((0));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aBlock)._value_(v);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({i:i,r:r,v:v},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09\x22This is refined for speed\x22\x0a\x09\x0a\x091 to: runs size do: [:i |\x0a\x09\x09| r v |\x0a\x09\x09v := values at: i.\x0a\x09\x09r := runs at: i.\x0a\x09\x09[( r := r - 1) >= 0]\x0a\x09\x09\x09whileTrue: [aBlock value: v]].",
messageSends: ["to:do:", "size", "at:", "whileTrue:", "value:", ">=", "-"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "fillFrom:with:",
category: 'private',
fn: function (aCollection,aBlock){
var self=this;
var newRuns,newValues,lastLength,lastValue;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
newRuns=_st(_st($Array())._new_(_st(aCollection)._size()))._writeStream();
newValues=_st(_st($Array())._new_(_st(aCollection)._size()))._writeStream();
lastLength=(0);
lastValue=_st($Object())._new();
_st(aCollection)._do_((function(each){
var value;
return smalltalk.withContext(function($ctx2) {
value=_st(aBlock)._value_(each);
value;
$1=_st(lastValue).__eq(value);
if(smalltalk.assert($1)){
lastLength=_st(lastLength).__plus((1));
return lastLength;
} else {
$2=_st(lastLength).__gt((0));
if(smalltalk.assert($2)){
_st(newRuns)._nextPut_(lastLength);
_st(newValues)._nextPut_(lastValue);
};
lastLength=(1);
lastLength;
lastValue=value;
return lastValue;
};
}, function($ctx2) {$ctx2.fillBlock({each:each,value:value},$ctx1)})}));
$3=_st(lastLength).__gt((0));
if(smalltalk.assert($3)){
_st(newRuns)._nextPut_(lastLength);
_st(newValues)._nextPut_(lastValue);
};
_st(self)._setRuns_setValues_(_st(newRuns)._contents(),_st(newValues)._contents());
return self}, function($ctx1) {$ctx1.fill(self,"fillFrom:with:",{aCollection:aCollection,aBlock:aBlock,newRuns:newRuns,newValues:newValues,lastLength:lastLength,lastValue:lastValue},smalltalk.RunArray)})},
args: ["aCollection", "aBlock"],
source: "fillFrom: aCollection with: aBlock\x0a\x09\x22Evaluate aBlock with each of aCollection's elements as the argument.\x0a\x09Collect the resulting values into self. Answer self.\x22\x0a\x0a\x09| newRuns newValues lastLength lastValue |\x0a\x09newRuns := (Array new: aCollection size) writeStream.\x0a\x09newValues := (Array new: aCollection size) writeStream.\x0a\x09lastLength := 0.\x0a\x09lastValue := Object new.\x0a\x09aCollection do: [:each | \x0a\x09\x09| value |\x0a\x09\x09value := aBlock value: each.\x0a\x09\x09lastValue = value\x0a\x09\x09\x09ifTrue: [lastLength := lastLength + 1]\x0a\x09\x09\x09ifFalse:\x0a\x09\x09\x09\x09[lastLength > 0\x0a\x09\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09\x09[newRuns nextPut: lastLength.\x0a\x09\x09\x09\x09\x09\x09newValues nextPut: lastValue].\x0a\x09\x09\x09\x09lastLength := 1.\x0a\x09\x09\x09\x09lastValue := value]].\x0a\x09lastLength > 0\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[newRuns nextPut: lastLength.\x0a\x09\x09\x09newValues nextPut: lastValue].\x0a\x09self setRuns: newRuns contents setValues: newValues contents",
messageSends: ["writeStream", "new:", "size", "new", "do:", "value:", "ifTrue:ifFalse:", "+", "ifTrue:", "nextPut:", ">", "=", "setRuns:setValues:", "contents"],
referencedClasses: ["Array", "Object"]
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "findFirst:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
index=(1);
_st(self)._runsAndValuesDo_((function(run,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(value);
if(smalltalk.assert($1)){
$2=index;
throw $early=[$2];
};
index=_st(index).__plus(run);
return index;
}, function($ctx2) {$ctx2.fillBlock({run:run,value:value},$ctx1)})}));
$3=(0);
return $3;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"findFirst:",{aBlock:aBlock,index:index},smalltalk.RunArray)})},
args: ["aBlock"],
source: "findFirst: aBlock\x0a\x09| index |\x0a\x09index := 1.\x0a\x09self runsAndValuesDo: [ :run :value |\x0a\x09\x09(aBlock value: value) ifTrue: [^index].\x0a\x09\x09index := index + run].\x0a\x09^0",
messageSends: ["runsAndValuesDo:", "ifTrue:", "value:", "+"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "findLast:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
index=_st(_st(self["@values"])._size()).__plus((1));
_st((function(){
return smalltalk.withContext(function($ctx2) {
index=_st(index).__minus((1));
return _st(index).__gt_eq((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(_st(self["@values"])._at_(index));
if(smalltalk.assert($1)){
$2=_st(_st((1))._to_(index))._detectSum_((function(i){
return smalltalk.withContext(function($ctx3) {
return _st(self["@runs"])._at_(i);
}, function($ctx3) {$ctx3.fillBlock({i:i},$ctx1)})}));
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=(0);
return $3;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"findLast:",{aBlock:aBlock,index:index},smalltalk.RunArray)})},
args: ["aBlock"],
source: "findLast: aBlock\x0a\x09| index |\x0a\x09index := values size + 1.\x0a\x09[(index := index - 1) >= 1] whileTrue:\x0a\x09\x09[(aBlock value: (values at: index)) ifTrue: [^(1 to: index) detectSum: [:i | runs at: i]]].\x0a\x09^0",
messageSends: ["+", "size", "whileTrue:", "ifTrue:", "detectSum:", "at:", "to:", "value:", ">=", "-"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.RunArray)})},
args: [],
source: "first\x0a\x09^values at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
category: 'topez-common-core',
fn: function (stonReader){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stonReader)._parseMapDo_((function(instVarName,value){
return smalltalk.withContext(function($ctx2) {
return _st(self)._instVarNamed_put_(instVarName,value);
}, function($ctx2) {$ctx2.fillBlock({instVarName:instVarName,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},smalltalk.RunArray)})},
args: ["stonReader"],
source: "fromSton: stonReader\x0a    stonReader parseMapDo: [ :instVarName :value | self instVarNamed: instVarName put: value ]",
messageSends: ["parseMapDo:", "instVarNamed:put:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.RunArray)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09\x22Answer whether anObject is one of the receiver's elements.\x22\x0a\x0a\x09^values includes: anObject",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "isSorted",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._isSorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSorted",{},smalltalk.RunArray)})},
args: [],
source: "isSorted\x0a\x09^values isSorted",
messageSends: ["isSorted"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "isSortedBy:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._isSortedBy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSortedBy:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "isSortedBy: aBlock\x0a\x09^values isSortedBy: aBlock",
messageSends: ["isSortedBy:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "last",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._at_(_st(self["@values"])._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{},smalltalk.RunArray)})},
args: [],
source: "last\x0a\x09^values at: values size",
messageSends: ["at:", "size"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "mapValues:",
category: 'private',
fn: function (mapBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@values"]=_st(self["@values"])._collect_(mapBlock);
return self}, function($ctx1) {$ctx1.fill(self,"mapValues:",{mapBlock:mapBlock},smalltalk.RunArray)})},
args: ["mapBlock"],
source: "mapValues: mapBlock\x0a\x09\x22NOTE: only meaningful to an entire set of runs\x22\x0a\x0a\x09values := values collect: mapBlock",
messageSends: ["collect:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "noneSatisfy:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._noneSatisfy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"noneSatisfy:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "noneSatisfy: aBlock \x0a\x09\x22Only evaluate once per run\x22\x0a\x0a\x09^values noneSatisfy: aBlock",
messageSends: ["noneSatisfy:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SequenceableCollection.fn.prototype._postCopy.apply(_st(self), []);
self["@runs"]=_st(self["@runs"])._copy();
self["@values"]=_st(self["@values"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RunArray)})},
args: [],
source: "postCopy\x0a\x09super postCopy.\x0a\x09runs := runs copy.\x0a\x09values := values copy",
messageSends: ["postCopy", "copy"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._printNameOn_(aStream);
$1=aStream;
_st($1)._nextPutAll_(" runs: ");
_st($1)._print_(self["@runs"]);
_st($1)._nextPutAll_(" values: ");
$2=_st($1)._print_(self["@values"]);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.RunArray)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09self printNameOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: ' runs: ';\x0a\x09\x09print: runs;\x0a\x09\x09nextPutAll: ' values: ';\x0a\x09\x09print: values",
messageSends: ["printNameOn:", "nextPutAll:", "print:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeOf:startingAt:",
category: 'adding',
fn: function (attr,startPos){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
var $early={};
try {
_st(self)._at_setRunOffsetAndValue_(startPos,(function(run,offset,value){
return smalltalk.withContext(function($ctx2) {
$2=_st(value)._includes_(attr);
if(smalltalk.assert($2)){
var firstRelevantPosition,lastRelevantPosition,idxOfCandidateRun;
lastRelevantPosition=_st(_st(_st(startPos).__minus(offset)).__plus(_st(self["@runs"])._at_(run))).__minus((1));
lastRelevantPosition;
firstRelevantPosition=_st(startPos).__minus(offset);
firstRelevantPosition;
idxOfCandidateRun=_st(run).__plus((1));
idxOfCandidateRun;
_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(idxOfCandidateRun).__lt_eq(_st(self["@runs"])._size()))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@values"])._at_(idxOfCandidateRun))._includes_(attr);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
lastRelevantPosition=_st(lastRelevantPosition).__plus(_st(self["@runs"])._at_(idxOfCandidateRun));
lastRelevantPosition;
idxOfCandidateRun=_st(idxOfCandidateRun).__plus((1));
return idxOfCandidateRun;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
idxOfCandidateRun=_st(run).__minus((1));
idxOfCandidateRun;
_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(idxOfCandidateRun).__gt_eq((1)))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@values"])._at_(idxOfCandidateRun))._includes_(attr);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
firstRelevantPosition=_st(firstRelevantPosition).__minus(_st(self["@runs"])._at_(idxOfCandidateRun));
firstRelevantPosition;
idxOfCandidateRun=_st(idxOfCandidateRun).__minus((1));
return idxOfCandidateRun;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$1=_st(firstRelevantPosition)._to_(lastRelevantPosition);
} else {
$1=_st(startPos)._to_(_st(startPos).__minus((1)));
};
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({run:run,offset:offset,value:value},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"rangeOf:startingAt:",{attr:attr,startPos:startPos},smalltalk.RunArray)})},
args: ["attr", "startPos"],
source: "rangeOf: attr startingAt: startPos\x0a\x09\x22Answer an interval that gives the range of attr at index position startPos. An empty interval with start value startPos is returned when the attribute attr is not present at position startPos. self size > 0 is assumed, it is the responsibility of the caller to test for emptiness of self.\x0aNote that an attribute may span several adjancent runs. \x22\x0a\x0a\x09self at: startPos \x0a\x09\x09setRunOffsetAndValue: \x0a\x09\x09\x09[:run :offset :value | \x0a\x09\x09\x09^(value includes: attr)\x0a\x09\x09\x09\x09ifFalse: [startPos to: startPos - 1]\x0a\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09[ | firstRelevantPosition lastRelevantPosition idxOfCandidateRun |\x0a\x09\x09\x09\x09\x09lastRelevantPosition := startPos - offset + (runs at: run) - 1.\x0a\x09\x09\x09\x09\x09firstRelevantPosition := startPos - offset.\x0a\x09\x09\x09\x09\x09idxOfCandidateRun := run + 1.\x0a\x09\x09\x09\x09\x09[idxOfCandidateRun <= runs size \x0a\x09\x09\x09\x09\x09\x09\x09 and: [(values at: idxOfCandidateRun) includes: attr]]\x0a\x09\x09\x09\x09\x09\x09whileTrue:\x0a\x09\x09\x09\x09\x09\x09\x09[lastRelevantPosition := lastRelevantPosition + (runs at: idxOfCandidateRun).\x0a\x09\x09\x09\x09\x09\x09\x09idxOfCandidateRun := idxOfCandidateRun + 1]. \x0a\x09\x09\x09\x09\x09idxOfCandidateRun := run - 1.\x0a\x09\x09\x09\x09\x09[idxOfCandidateRun >= 1 \x0a\x09\x09\x09\x09\x09\x09\x09 and: [(values at: idxOfCandidateRun) includes: attr]]\x0a\x09\x09\x09\x09\x09\x09whileTrue:\x0a\x09\x09\x09\x09\x09\x09\x09[firstRelevantPosition := firstRelevantPosition - (runs at: idxOfCandidateRun).\x0a\x09\x09\x09\x09\x09\x09\x09idxOfCandidateRun := idxOfCandidateRun - 1]. \x0a \x0a\x09\x09\x09\x09\x09firstRelevantPosition to: lastRelevantPosition]]",
messageSends: ["at:setRunOffsetAndValue:", "ifFalse:ifTrue:", "to:", "-", "+", "at:", "whileTrue:", "and:", "includes:", "<=", "size", ">="],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'removing',
fn: function (anObject,exceptionBlock){
var self=this;
var index,mustCoalesce,run;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
index=_st(self["@values"])._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(exceptionBlock)._value();
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
run=_st(self["@runs"])._at_(index);
$2=_st(run).__gt((1));
if(smalltalk.assert($2)){
_st(self["@runs"])._at_put_(index,_st(run).__minus((1)));
} else {
mustCoalesce=_st(_st(index).__gt((1)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(index).__lt(_st(self["@values"])._size()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self["@values"])._at_(_st(index).__minus((1)))).__eq(_st(self["@values"])._at_(_st(index).__plus((1))));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
mustCoalesce;
self["@runs"]=_st(self["@runs"])._copyWithoutIndex_(index);
self["@runs"];
self["@values"]=_st(self["@values"])._copyWithoutIndex_(index);
self["@values"];
$3=mustCoalesce;
if(smalltalk.assert($3)){
_st(self["@runs"])._at_put_(_st(index).__minus((1)),_st(_st(self["@runs"])._at_(_st(index).__minus((1)))).__plus(_st(self["@runs"])._at_(index)));
self["@runs"]=_st(self["@runs"])._copyWithoutIndex_(index);
self["@runs"];
self["@values"]=_st(self["@values"])._copyWithoutIndex_(index);
self["@values"];
};
};
$4=anObject;
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,exceptionBlock:exceptionBlock,index:index,mustCoalesce:mustCoalesce,run:run},smalltalk.RunArray)})},
args: ["anObject", "exceptionBlock"],
source: "remove: anObject ifAbsent: exceptionBlock\x0a\x09| index mustCoalesce run |\x0a\x09index := values indexOf: anObject ifAbsent: [^exceptionBlock value].\x0a\x09(run := runs at: index) > 1\x0a\x09\x09ifTrue: [runs at: index put: run - 1]\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[mustCoalesce := index > 1 and: [index < values size and: [(values at: index - 1) = (values at: index + 1)]].\x0a\x09\x09\x09runs := runs copyWithoutIndex: index.\x0a\x09\x09\x09values := values copyWithoutIndex: index.\x0a\x09\x09\x09mustCoalesce\x0a\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09[runs at: index - 1 put: (runs at: index - 1) + (runs at: index).\x0a\x09\x09\x09\x09\x09runs := runs copyWithoutIndex: index.\x0a\x09\x09\x09\x09\x09values := values copyWithoutIndex: index]].\x0a\x09^anObject",
messageSends: ["indexOf:ifAbsent:", "value", "ifTrue:ifFalse:", "at:put:", "-", "and:", "=", "at:", "+", "<", "size", ">", "copyWithoutIndex:", "ifTrue:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
category: 'removing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@runs"]=_st($Array())._new();
self["@values"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},smalltalk.RunArray)})},
args: [],
source: "removeAll\x0a\x09runs := Array new.\x0a\x09values := Array new",
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatLast:ifEmpty:",
category: 'adding',
fn: function (times,defaultBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(times).__eq((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@lastIndex"]=nil;
$3=_st(_st(self["@runs"])._size()).__eq((0));
if(smalltalk.assert($3)){
self["@runs"]=_st(self["@runs"])._copyWith_(times);
self["@runs"];
self["@values"]=_st(self["@values"])._copyWith_(_st(defaultBlock)._value());
self["@values"];
} else {
_st(self["@runs"])._at_put_(_st(self["@runs"])._size(),_st(_st(self["@runs"])._last()).__plus(times));
};
return self}, function($ctx1) {$ctx1.fill(self,"repeatLast:ifEmpty:",{times:times,defaultBlock:defaultBlock},smalltalk.RunArray)})},
args: ["times", "defaultBlock"],
source: "repeatLast: times ifEmpty: defaultBlock\x0a\x09\x22add the last value back again, the given number of times. If we are empty, add (defaultBlock value)\x22\x0a\x09times = 0 ifTrue: [^self ].\x0a\x09lastIndex := nil. \x22flush access cache\x22\x0a\x09(runs size=0)\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[runs := runs copyWith: times.\x0a\x09\x09\x09values := values copyWith: defaultBlock value]\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[runs at: runs size put: runs last+times] ",
messageSends: ["ifTrue:", "=", "ifTrue:ifFalse:", "copyWith:", "value", "at:put:", "size", "+", "last"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatLastIfEmpty:",
category: 'adding',
fn: function (defaultBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@lastIndex"]=nil;
$1=_st(_st(self["@runs"])._size()).__eq((0));
if(smalltalk.assert($1)){
self["@runs"]=_st(self["@runs"])._copyWith_((1));
self["@runs"];
self["@values"]=_st(self["@values"])._copyWith_(_st(defaultBlock)._value());
self["@values"];
} else {
_st(self["@runs"])._at_put_(_st(self["@runs"])._size(),_st(_st(self["@runs"])._last()).__plus((1)));
};
return self}, function($ctx1) {$ctx1.fill(self,"repeatLastIfEmpty:",{defaultBlock:defaultBlock},smalltalk.RunArray)})},
args: ["defaultBlock"],
source: "repeatLastIfEmpty: defaultBlock\x0a\x09\x22add the last value back again. If we are empty, add (defaultBlock value)\x22\x0a\x09lastIndex := nil. \x22flush access cache\x22\x0a\x09(runs size=0)\x0a\x09\x09ifTrue:[\x0a\x09\x09\x09runs := runs copyWith: 1.\x0a\x09\x09\x09values := values copyWith: defaultBlock value]\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[runs at: runs size put: runs last+1]",
messageSends: ["ifTrue:ifFalse:", "copyWith:", "value", "at:put:", "size", "+", "last", "="],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@values"]=_st(self["@values"])._replace_(aBlock);
_st(self)._coalesce();
return self}, function($ctx1) {$ctx1.fill(self,"replace:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "replace: aBlock\x0a\x09\x22Beware, the block will be evaluated only once per group of values.\x22\x0a\x09values := values replace: aBlock.\x0a\x09self coalesce",
messageSends: ["replace:", "coalesce"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
i=_st(self["@runs"])._size();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(i).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
var r,v;
return smalltalk.withContext(function($ctx2) {
v=_st(self["@values"])._at_(i);
v;
r=_st(self["@runs"])._at_(i);
r;
i=_st(i).__minus((1));
i;
return _st((function(){
return smalltalk.withContext(function($ctx3) {
r=_st(r).__minus((1));
return _st(r).__gt_eq((0));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aBlock)._value_(v);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({r:r,v:v},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reverseDo:",{aBlock:aBlock,i:i},smalltalk.RunArray)})},
args: ["aBlock"],
source: "reverseDo: aBlock\x0a\x09\x22This is refined for speed\x22\x0a\x09\x0a\x09| i |\x0a\x09i := runs size.\x0a\x09[i > 0]\x0a\x09\x09whileTrue: \x0a\x09\x09\x09[ | r v |\x0a\x09\x09\x09v := values at: i.\x0a\x09\x09\x09r := runs at: i.\x0a\x09\x09\x09i := i - 1.\x0a\x09\x09\x09[( r := r - 1) >= 0]\x0a\x09\x09\x09\x09whileTrue: [aBlock value: v]].",
messageSends: ["size", "whileTrue:", "at:", "-", "value:", ">=", ">"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "runLengthAt:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self)._at_setRunOffsetAndValue_(index,(function(run,offset,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(self["@runs"])._at_(run)).__minus(offset);
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({run:run,offset:offset,value:value},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"runLengthAt:",{index:index},smalltalk.RunArray)})},
args: ["index"],
source: "runLengthAt: index \x0a\x09\x22Answer the length remaining in run beginning at index.\x22\x0a\x0a\x09self at: index \x0a\x09\x09setRunOffsetAndValue: [:run :offset :value | ^(runs at: run) - offset]",
messageSends: ["at:setRunOffsetAndValue:", "-", "at:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "runs",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@runs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"runs",{},smalltalk.RunArray)})},
args: [],
source: "runs\x0a\x0a\x09^runs",
messageSends: [],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "runsAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@runs"])._with_do_(self["@values"],aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"runsAndValuesDo:",{aBlock:aBlock},smalltalk.RunArray)})},
args: ["aBlock"],
source: "runsAndValuesDo: aBlock\x0a\x09\x22Evaluate aBlock with run lengths and values from the receiver\x22\x0a\x09^runs with: values do: aBlock.",
messageSends: ["with:do:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "runsFrom:to:do:",
category: 'enumerating',
fn: function (start,stop,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(start).__gt(stop);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._at_setRunOffsetAndValue_(start,(function(firstRun,offset,firstValue){
var run,value,index;
return smalltalk.withContext(function($ctx2) {
run=firstRun;
run;
value=firstValue;
value;
index=_st(_st(start).__plus(_st(self["@runs"])._at_(run))).__minus(offset);
index;
return _st((function(){
return smalltalk.withContext(function($ctx3) {
_st(aBlock)._value_(value);
return _st(index).__lt_eq(stop);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
run=_st(run).__plus((1));
run;
value=_st(self["@values"])._at_(run);
value;
index=_st(index).__plus(_st(self["@runs"])._at_(run));
return index;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({firstRun:firstRun,offset:offset,firstValue:firstValue,run:run,value:value,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"runsFrom:to:do:",{start:start,stop:stop,aBlock:aBlock},smalltalk.RunArray)})},
args: ["start", "stop", "aBlock"],
source: "runsFrom: start to: stop do: aBlock\x0a\x09\x22Evaluate aBlock with all existing runs in the range from start to stop\x22\x0a\x09start > stop ifTrue:[^self].\x0a\x09self at: start setRunOffsetAndValue:[:firstRun :offset :firstValue|\x0a\x09\x09| run value index |\x0a\x09\x09run := firstRun.\x0a\x09\x09value := firstValue.\x0a\x09\x09index := start + (runs at: run) - offset.\x0a\x09\x09[aBlock value: value.\x0a\x09\x09index <= stop] whileTrue:[\x0a\x09\x09\x09run := run + 1.\x0a\x09\x09\x09value := values at: run.\x0a\x09\x09\x09index := index + (runs at: run)]].",
messageSends: ["ifTrue:", ">", "at:setRunOffsetAndValue:", "-", "+", "at:", "whileTrue:", "value:", "<="],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newRuns,newValues;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
newRuns=_st(_st($Array())._new_(_st(self["@runs"])._size()))._writeStream();
newValues=_st(_st($Array())._new_(_st(self["@values"])._size()))._writeStream();
_st(self)._runsAndValuesDo_((function(run,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(value);
if(smalltalk.assert($1)){
_st(newRuns)._add_(run);
return _st(newValues)._add_(value);
};
}, function($ctx2) {$ctx2.fillBlock({run:run,value:value},$ctx1)})}));
$2=_st(_st(_st(self)._class())._runs_values_(_st(newRuns)._contents(),_st(newValues)._contents()))._coalesce();
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,newRuns:newRuns,newValues:newValues},smalltalk.RunArray)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09\x22Beware, the block will be evaluated only once per group of values.\x22\x0a\x09| newRuns newValues |\x0a\x09newRuns := (Array new: runs size) writeStream.\x0a\x09newValues := (Array new: values size) writeStream.\x0a\x09self runsAndValuesDo: [:run :value |\x0a\x09\x09(aBlock value: value)\x0a\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09[newRuns add: run.\x0a\x09\x09\x09\x09newValues add: value]].\x0a\x09^(self class runs: newRuns contents values: newValues contents) coalesce",
messageSends: ["writeStream", "new:", "size", "runsAndValuesDo:", "ifTrue:", "add:", "value:", "coalesce", "runs:values:", "contents", "class"],
referencedClasses: ["Array"]
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "setRuns:setValues:",
category: 'private',
fn: function (newRuns,newValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lastIndex"]=nil;
self["@runs"]=_st(newRuns)._asArray();
self["@values"]=_st(newValues)._asArray();
return self}, function($ctx1) {$ctx1.fill(self,"setRuns:setValues:",{newRuns:newRuns,newValues:newValues},smalltalk.RunArray)})},
args: ["newRuns", "newValues"],
source: "setRuns: newRuns setValues: newValues\x0a\x09lastIndex := nil. \x22flush access cache\x22\x0a\x09runs := newRuns asArray.\x0a\x09values := newValues asArray.",
messageSends: ["asArray"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var size;
return smalltalk.withContext(function($ctx1) { 
var $1;
size=(0);
_st((1))._to_do_(_st(self["@runs"])._size(),(function(i){
return smalltalk.withContext(function($ctx2) {
size=_st(size).__plus(_st(self["@runs"])._at_(i));
return size;
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
$1=size;
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{size:size},smalltalk.RunArray)})},
args: [],
source: "size\x0a\x09| size |\x0a\x09size := 0.\x0a\x091 to: runs size do: [:i | size := size + (runs at: i)].\x0a\x09^size",
messageSends: ["to:do:", "size", "+", "at:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
category: 'topez-common-core',
fn: function (stonWriter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stonWriter)._writeObject_streamMap_(self,(function(dictionary){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._class())._allInstVarNames())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(dictionary)._at_put_(_st(each)._asSymbol(),_st(self)._instVarNamed_(each));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({dictionary:dictionary},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},smalltalk.RunArray)})},
args: ["stonWriter"],
source: "stonOn: stonWriter\x0a    \x22workaround for https://github.com/svenvc/ston/issues/4\x22\x0a\x0a    stonWriter\x0a        writeObject: self\x0a        streamMap: [ :dictionary | self class allInstVarNames do: [ :each | dictionary at: each asSymbol put: (self instVarNamed: each) ] ]",
messageSends: ["writeObject:streamMap:", "do:", "at:put:", "asSymbol", "instVarNamed:", "allInstVarNames", "class"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPut_("(");
_st(aStream)._nextPutAll_(_st(_st(self)._class())._name());
_st(aStream)._nextPutAll_(" runs: ");
_st(self["@runs"])._storeOn_(aStream);
_st(aStream)._nextPutAll_(" values: ");
_st(self["@values"])._storeOn_(aStream);
_st(aStream)._nextPut_(")");
return self}, function($ctx1) {$ctx1.fill(self,"storeOn:",{aStream:aStream},smalltalk.RunArray)})},
args: ["aStream"],
source: "storeOn: aStream\x0a\x0a\x09aStream nextPut: '('.\x0a\x09aStream nextPutAll: self class name.\x0a\x09aStream nextPutAll: ' runs: '.\x0a\x09runs storeOn: aStream.\x0a\x09aStream nextPutAll: ' values: '.\x0a\x09values storeOn: aStream.\x0a\x09aStream nextPut: ')'",
messageSends: ["nextPut:", "nextPutAll:", "name", "class", "storeOn:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@values"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.RunArray)})},
args: [],
source: "values\x0a\x09\x22Answer the values in the receiver.\x22\x0a\x0a\x09^values",
messageSends: [],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "withStartStopAndValueDo:",
category: 'accessing',
fn: function (aBlock){
var self=this;
var start;
return smalltalk.withContext(function($ctx1) { 
start=(1);
_st(self["@runs"])._with_do_(self["@values"],(function(len,val){
var stop;
return smalltalk.withContext(function($ctx2) {
stop=_st(_st(start).__plus(len)).__minus((1));
stop;
_st(aBlock)._value_value_value_(start,stop,val);
start=_st(stop).__plus((1));
return start;
}, function($ctx2) {$ctx2.fillBlock({len:len,val:val,stop:stop},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withStartStopAndValueDo:",{aBlock:aBlock,start:start},smalltalk.RunArray)})},
args: ["aBlock"],
source: "withStartStopAndValueDo: aBlock\x0a\x09| start |\x0a\x09start := 1.\x0a\x09runs with: values do:\x0a\x09\x09[:len : val | | stop |\x0a\x09\x09stop := start + len - 1.\x0a\x09\x09aBlock value: start value: stop value: val.\x0a\x09\x09start := stop + 1]\x0a\x09\x09",
messageSends: ["with:do:", "-", "+", "value:value:value:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "writeOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextWordPut_(_st(self["@runs"])._size());
_st((1))._to_do_(_st(self["@runs"])._size(),(function(x){
return smalltalk.withContext(function($ctx2) {
_st(aStream)._nextWordPut_(_st(self["@runs"])._at_(x));
return _st(aStream)._nextWordPut_(_st(self["@values"])._at_(x));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeOn:",{aStream:aStream},smalltalk.RunArray)})},
args: ["aStream"],
source: "writeOn: aStream\x0a\x0a\x09aStream nextWordPut: runs size.\x0a\x091 to: runs size do:\x0a\x09\x09[:x |\x0a\x09\x09aStream nextWordPut: (runs at: x).\x0a\x09\x09aStream nextWordPut: (values at: x)]",
messageSends: ["nextWordPut:", "size", "to:do:", "at:"],
referencedClasses: []
}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "writeScanOn:",
category: 'printing',
fn: function (strm){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(strm)._nextPut_("(");
_st(self["@runs"])._do_((function(rr){
return smalltalk.withContext(function($ctx2) {
_st(rr)._printOn_(strm);
return _st(strm)._space();
}, function($ctx2) {$ctx2.fillBlock({rr:rr},$ctx1)})}));
$1=strm;
_st($1)._skip_((-1));
$2=_st($1)._nextPut_(")");
_st(self["@values"])._do_((function(vv){
return smalltalk.withContext(function($ctx2) {
_st(vv)._do_((function(att){
return smalltalk.withContext(function($ctx3) {
return _st(att)._writeScanOn_(strm);
}, function($ctx3) {$ctx3.fillBlock({att:att},$ctx1)})}));
return _st(strm)._nextPut_(",");
}, function($ctx2) {$ctx2.fillBlock({vv:vv},$ctx1)})}));
_st(strm)._skip_((-1));
return self}, function($ctx1) {$ctx1.fill(self,"writeScanOn:",{strm:strm},smalltalk.RunArray)})},
args: ["strm"],
source: "writeScanOn: strm\x0a\x09\x22Write out the format used for text runs in source files. (14 50 312)f1,f1b,f1LInteger +;i\x22\x0a\x0a\x09strm nextPut: '('.\x0a\x09runs do: [:rr | rr printOn: strm. strm space].\x0a\x09strm skip: -1; nextPut: ')'.\x0a\x09values do: [:vv |\x0a\x09\x09vv do: [:att | att writeScanOn: strm].\x0a\x09\x09strm nextPut: ','].\x0a\x09strm skip: -1. \x22trailing comma\x22",
messageSends: ["nextPut:", "do:", "printOn:", "space", "skip:", "writeScanOn:"],
referencedClasses: []
}),
smalltalk.RunArray);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
category: 'topez-common-core',
fn: function (stonReader){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._fromSton_(stonReader);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},smalltalk.RunArray.klass)})},
args: ["stonReader"],
source: "fromSton: stonReader\x0a    \x22workaround for https://github.com/svenvc/ston/issues/4\x22\x0a\x0a    ^ self new\x0a        fromSton: stonReader;\x0a        yourself",
messageSends: ["fromSton:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._runs_values_(_st($Array())._new(),_st($Array())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.RunArray.klass)})},
args: [],
source: "new\x0a\x0a\x09^self runs: Array new values: Array new",
messageSends: ["runs:values:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (aSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._new_withAll_(aSize,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aSize:aSize},smalltalk.RunArray.klass)})},
args: ["aSize"],
source: "new: aSize\x0a\x09^ self new: aSize withAll: nil",
messageSends: ["new:withAll:"],
referencedClasses: []
}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:withAll:",
category: 'instance creation',
fn: function (size,value){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(size).__eq((0));
if(smalltalk.assert($1)){
$2=_st(self)._new();
return $2;
};
$3=_st(self)._runs_values_(_st($Array())._with_(size),_st($Array())._with_(value));
return $3;
}, function($ctx1) {$ctx1.fill(self,"new:withAll:",{size:size,value:value},smalltalk.RunArray.klass)})},
args: ["size", "value"],
source: "new: size withAll: value \x0a\x09\x22Answer a new instance of me, whose every element is equal to the\x0a\x09argument, value.\x22\x0a\x0a\x09size = 0 ifTrue: [^self new].\x0a\x09^self runs: (Array with: size) values: (Array with: value)",
messageSends: ["ifTrue:", "new", "=", "runs:values:", "with:"],
referencedClasses: ["Array"]
}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFrom:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var vruns,vvalues,vlastRun,lastValue;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
vruns=_st(_st($Array())._new_(_st(_st(aCollection)._size()).__slash_slash((2))))._writeStream();
vvalues=_st(_st($Array())._new_(_st(_st(aCollection)._size()).__slash_slash((2))))._writeStream();
vlastRun=(0);
lastValue=_st($Object())._new();
_st(aCollection)._do_((function(x){
return smalltalk.withContext(function($ctx2) {
$1=_st(lastValue).__eq(x);
if(smalltalk.assert($1)){
vlastRun=_st(vlastRun).__plus((1));
return vlastRun;
} else {
$2=_st(vlastRun).__gt((0));
if(smalltalk.assert($2)){
_st(vruns)._nextPut_(vlastRun);
_st(vvalues)._nextPut_(lastValue);
};
vlastRun=(1);
vlastRun;
lastValue=x;
return lastValue;
};
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$3=_st(vlastRun).__gt((0));
if(smalltalk.assert($3)){
_st(vruns)._nextPut_(vlastRun);
_st(vvalues)._nextPut_(lastValue);
};
$4=_st(_st(self)._basicNew())._setRuns_setValues_(_st(vruns)._contents(),_st(vvalues)._contents());
return $4;
}, function($ctx1) {$ctx1.fill(self,"newFrom:",{aCollection:aCollection,vruns:vruns,vvalues:vvalues,vlastRun:vlastRun,lastValue:lastValue},smalltalk.RunArray.klass)})},
args: ["aCollection"],
source: "newFrom: aCollection \x0a\x09\x22Answer an instance of me containing the same elements as aCollection.\x22\x0a\x0a\x09| vruns vvalues vlastRun lastValue |\x0a\x09vruns := (Array new: aCollection size // 2) writeStream.\x0a\x09vvalues := (Array new: aCollection size // 2) writeStream.\x0a\x09vlastRun := 0.\x0a\x09lastValue := Object new.\x0a\x09aCollection do: [:x | \x0a\x09\x09lastValue = x\x0a\x09\x09\x09ifTrue: [vlastRun := vlastRun + 1]\x0a\x09\x09\x09ifFalse:\x0a\x09\x09\x09\x09[vlastRun > 0\x0a\x09\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09\x09[vruns nextPut: vlastRun.\x0a\x09\x09\x09\x09\x09\x09vvalues nextPut: lastValue].\x0a\x09\x09\x09\x09vlastRun := 1.\x0a\x09\x09\x09\x09lastValue := x]].\x0a\x09vlastRun > 0\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[vruns nextPut: vlastRun.\x0a\x09\x09\x09vvalues nextPut: lastValue].\x0a\x09^self basicNew setRuns: vruns contents setValues: vvalues contents\x0a\x0a\x22\x09RunArray newFrom: {1. 2. 2. 3}\x0a\x09{1. $a. $a. 3} as: RunArray\x0a\x09({1. $a. $a. 3} as: RunArray) values\x0a\x22",
messageSends: ["writeStream", "new:", "//", "size", "new", "do:", "ifTrue:ifFalse:", "+", "ifTrue:", "nextPut:", ">", "=", "setRuns:setValues:", "contents", "basicNew"],
referencedClasses: ["Array", "Object"]
}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "readFrom:",
category: 'instance creation',
fn: function (aStream){
var self=this;
var size,vruns,vvalues;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
size=_st(aStream)._nextWord();
vruns=_st($Array())._new_(size);
vvalues=_st($Array())._new_(size);
_st((1))._to_do_(size,(function(x){
return smalltalk.withContext(function($ctx2) {
_st(vruns)._at_put_(x,_st(aStream)._nextWord());
return _st(vvalues)._at_put_(x,_st(aStream)._nextWord());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$1=_st(self)._runs_values_(vruns,vvalues);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readFrom:",{aStream:aStream,size:size,vruns:vruns,vvalues:vvalues},smalltalk.RunArray.klass)})},
args: ["aStream"],
source: "readFrom: aStream\x0a\x09\x22Answer an instance of me as described on the stream, aStream.\x22\x0a\x0a\x09| size vruns vvalues |\x0a\x09size := aStream nextWord.\x0a\x09vruns := Array new: size.\x0a\x09vvalues := Array new: size.\x0a\x091 to: size do:\x0a\x09\x09[:x |\x0a\x09\x09vruns at: x put: aStream nextWord.\x0a\x09\x09vvalues at: x put: aStream nextWord].\x0a\x09^ self runs: vruns values: vvalues",
messageSends: ["nextWord", "new:", "to:do:", "at:put:", "runs:values:"],
referencedClasses: ["Array"]
}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "runs:values:",
category: 'instance creation',
fn: function (newRuns,newValues){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1;
instance=_st(self)._basicNew();
_st(instance)._setRuns_setValues_(newRuns,newValues);
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"runs:values:",{newRuns:newRuns,newValues:newValues,instance:instance},smalltalk.RunArray.klass)})},
args: ["newRuns", "newValues"],
source: "runs: newRuns values: newValues \x0a\x09\x22Answer an instance of me with runs and values specified by the \x0a\x09arguments.\x22\x0a\x0a\x09| instance |\x0a\x09instance := self basicNew.\x0a\x09instance setRuns: newRuns setValues: newValues.\x0a\x09^instance",
messageSends: ["basicNew", "setRuns:setValues:"],
referencedClasses: []
}),
smalltalk.RunArray.klass);


smalltalk.addClass('Text', smalltalk.SequenceableCollection, ['string', 'runs'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (anObject){
var self=this;
var aString;
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(anObject)._isText();
if(smalltalk.assert($1)){
aString=_st(anObject)._string();
aString;
} else {
aString=_st(anObject)._asString();
aString;
};
$2=_st($Text())._string_runs_(_st(self["@string"]).__comma(aString),self["@runs"]);
return $2;
}, function($ctx1) {$ctx1.fill(self,",",{anObject:anObject,aString:aString},smalltalk.Text)})},
args: ["anObject"],
source: ", anObject\x0a\x09|aString|\x0a\x09\x22TODO: concatenate runs array.\x22\x0a\x09anObject isText \x0a\x09\x09ifTrue: [aString := anObject string]\x0a\x09\x09ifFalse: [aString := anObject asString].\x0a\x09^ Text string: string, aString runs: runs",
messageSends: ["ifTrue:ifFalse:", "string", "asString", "isText", "string:runs:", ","],
referencedClasses: ["Text"]
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (other){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(other)._isText();
if(smalltalk.assert($1)){
$2=_st(_st(self["@string"]).__eq_eq(_st(other)._string()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@string"]).__eq(_st(other)._string());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
};
$3=_st(other)._isString();
if(smalltalk.assert($3)){
$4=_st(_st(self["@string"]).__eq_eq(other))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@string"]).__eq(other);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $4;
};
return false;
}, function($ctx1) {$ctx1.fill(self,"=",{other:other},smalltalk.Text)})},
args: ["other"],
source: "= other\x0a\x09\x22Am I equal to the other Text or String?  \x0a\x09***** Warning ***** Two Texts are considered equal if they have the same characters in them.  They might have completely different emphasis, fonts, sizes, text actions, or embedded morphs.  If you need to find out if one is a true copy of the other, you must do (text1 = text2 and: [text1 runs = text2 runs]).\x22\x0a\x0a\x09other isText ifTrue:\x09[\x22This is designed to run fast even for megabytes\x22\x0a\x09\x09\x09\x09^ string == other string or: [string = other string]].\x0a\x09other isString ifTrue: [^ string == other or: [string = other]].\x0a\x09^ false",
messageSends: ["ifTrue:", "or:", "=", "string", "==", "isText", "isString"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "append:",
category: 'accessing',
fn: function (stringOrText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._replaceFrom_to_with_(_st(_st(self["@string"])._size()).__plus((1)),_st(self["@string"])._size(),stringOrText);
return self}, function($ctx1) {$ctx1.fill(self,"append:",{stringOrText:stringOrText},smalltalk.Text)})},
args: ["stringOrText"],
source: "append: stringOrText\x0a\x0a\x09self replaceFrom: string size + 1\x0a\x09\x09\x09\x09to: string size with: stringOrText",
messageSends: ["replaceFrom:to:with:", "+", "size"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.Text)})},
args: [],
source: "asNumber\x0a\x09\x22Answer the number created by interpreting the receiver as the textual \x0a\x09representation of a number.\x22\x0a\x0a\x09^string asNumber",
messageSends: ["asNumber"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@string"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Text)})},
args: [],
source: "asString\x0a\x09\x22Answer a String representation of the textual receiver.\x22\x0a\x0a\x09^string",
messageSends: [],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "asStringOrText",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asStringOrText",{},smalltalk.Text)})},
args: [],
source: "asStringOrText\x09\x0a\x09\x22Answer the receiver itself.\x22\x0a\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "asText",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asText",{},smalltalk.Text)})},
args: [],
source: "asText\x09\x0a\x09\x22Answer the receiver itself.\x22\x0a\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index},smalltalk.Text)})},
args: ["index"],
source: "at: index\x0a\x0a\x09^string at: index",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (index,character){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._at_put_(index,character);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{index:index,character:character},smalltalk.Text)})},
args: ["index", "character"],
source: "at: index put: character\x0a\x0a\x09^string at: index put: character",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (start,stop){
var self=this;
var realStart,realStop;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(stop).__gt(_st(self)._size());
if(smalltalk.assert($1)){
realStop=_st(self)._size();
realStop;
} else {
realStop=stop;
realStop;
};
$2=_st(start).__lt((1));
if(smalltalk.assert($2)){
realStart=(1);
realStart;
} else {
realStart=start;
realStart;
};
$3=_st(_st(self)._class())._string_runs_(_st(self["@string"])._copyFrom_to_(realStart,realStop),nil);
return $3;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{start:start,stop:stop,realStart:realStart,realStop:realStop},smalltalk.Text)})},
args: ["start", "stop"],
source: "copyFrom: start to: stop \x0a\x09\x22Answer a copied subrange of the receiver.\x22\x0a\x0a\x09| realStart realStop |\x0a\x09stop > self size\x0a\x09\x09ifTrue: [realStop := self size]\x09\x09\x22handle selection at end of string\x22\x0a\x09\x09ifFalse: [realStop := stop].\x0a\x09start < 1\x0a\x09\x09ifTrue: [realStart := 1]\x09\x09\x09\x22handle selection before start of string\x22\x0a\x09\x09ifFalse: [realStart := start].\x0a\x09^self class \x0a\x09\x09string: (string copyFrom: realStart to: realStop)\x0a\x09\x09runs: nil \x22(runs copyFrom: realStart to: realStop)\x22",
messageSends: ["ifTrue:ifFalse:", "size", ">", "<", "string:runs:", "copyFrom:to:", "class"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceAll:with:",
category: 'copying',
fn: function (aString,anotherString){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Text())._string_runs_(_st(_st($String())._fromString_(self["@string"]))._replace_with_(aString,anotherString),self["@runs"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceAll:with:",{aString:aString,anotherString:anotherString},smalltalk.Text)})},
args: ["aString", "anotherString"],
source: "copyReplaceAll: aString with: anotherString\x0a\x09^ Text string: ((String fromString: string) replace: aString with: anotherString) runs: runs",
messageSends: ["string:runs:", "replace:with:", "fromString:"],
referencedClasses: ["String", "Text"]
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceFrom:to:with:",
category: 'copying',
fn: function (start,stop,aTextOrString){
var self=this;
var txt;
return smalltalk.withContext(function($ctx1) { 
var $1;
txt=_st(aTextOrString)._asText();
$1=_st(_st(self)._class())._string_runs_(_st(self["@string"])._copyReplaceFrom_to_with_(start,stop,_st(txt)._string()),_st(self["@runs"])._copyReplaceFrom_to_with_(start,stop,_st(txt)._runs()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceFrom:to:with:",{start:start,stop:stop,aTextOrString:aTextOrString,txt:txt},smalltalk.Text)})},
args: ["start", "stop", "aTextOrString"],
source: "copyReplaceFrom: start to: stop with: aTextOrString\x0a\x0a\x09| txt |\x0a\x09txt := aTextOrString asText.\x09\x22might be a string\x22\x0a\x09^self class \x0a             string: (string copyReplaceFrom: start to: stop with: txt string)\x0a             runs: (runs copyReplaceFrom: start to: stop with: txt runs)",
messageSends: ["asText", "string:runs:", "copyReplaceFrom:to:with:", "string", "runs", "class"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceTokens:with:",
category: 'copying',
fn: function (oldSubstring,newSubstring){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyReplaceAll_with_asTokens_(oldSubstring,newSubstring,true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceTokens:with:",{oldSubstring:oldSubstring,newSubstring:newSubstring},smalltalk.Text)})},
args: ["oldSubstring", "newSubstring"],
source: "copyReplaceTokens: oldSubstring with: newSubstring \x0a\x09\x22Replace all occurrences of oldSubstring that are surrounded\x0a\x09by non-alphanumeric characters\x22\x0a\x09^ self copyReplaceAll: oldSubstring with: newSubstring asTokens: true\x0a\x09\x22'File asFile Files File''s File' copyReplaceTokens: 'File' with: 'Snick'\x22",
messageSends: ["copyReplaceAll:with:asTokens:"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Text)})},
args: [],
source: "deepCopy\x0a\x0a\x09^ self copy \x22Both string and runs are assumed to be read-only\x22",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "findString:startingAt:",
category: 'accessing',
fn: function (aString,start){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._findString_startingAt_(_st(aString)._asString(),start);
return $1;
}, function($ctx1) {$ctx1.fill(self,"findString:startingAt:",{aString:aString,start:start},smalltalk.Text)})},
args: ["aString", "start"],
source: "findString: aString startingAt: start \x0a\x09\x22Answer the index of subString within the receiver, starting at index \x0a\x09start. If the receiver does not contain subString, answer 0.\x22\x0a\x0a\x09^string findString: aString asString startingAt: start",
messageSends: ["findString:startingAt:", "asString"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "findString:startingAt:caseSensitive:",
category: 'accessing',
fn: function (aString,start,caseSensitive){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._findString_startingAt_caseSensitive_(_st(aString)._asString(),start,caseSensitive);
return $1;
}, function($ctx1) {$ctx1.fill(self,"findString:startingAt:caseSensitive:",{aString:aString,start:start,caseSensitive:caseSensitive},smalltalk.Text)})},
args: ["aString", "start", "caseSensitive"],
source: "findString: aString startingAt: start caseSensitive: caseSensitive\x0a\x09\x22Answer the index of subString within the receiver, starting at index \x0a\x09start. If the receiver does not contain subString, answer 0.\x22\x0a\x0a\x09^string findString: aString asString startingAt: start caseSensitive: caseSensitive",
messageSends: ["findString:startingAt:caseSensitive:", "asString"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "howManyMatch:",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._string())._howManyMatch_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"howManyMatch:",{aString:aString},smalltalk.Text)})},
args: ["aString"],
source: "howManyMatch: aString\x0a\x0a\x09^ self string howManyMatch: aString",
messageSends: ["howManyMatch:", "string"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "initialStyle",
category: 'accessing',
fn: function (){
var self=this;
function $TextStyle(){return smalltalk.TextStyle||(typeof TextStyle=="undefined"?nil:TextStyle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TextStyle())._default();
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialStyle",{},smalltalk.Text)})},
args: [],
source: "initialStyle\x0a\x09^TextStyle default",
messageSends: ["default"],
referencedClasses: ["TextStyle"]
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "isText",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isText",{},smalltalk.Text)})},
args: [],
source: "isText\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "lineCount",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._lineCount();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineCount",{},smalltalk.Text)})},
args: [],
source: "lineCount\x0a\x0a\x09^ string lineCount",
messageSends: ["lineCount"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SequenceableCollection.fn.prototype._postCopy.apply(_st(self), []);
self["@string"]=_st(self["@string"])._copy();
self["@runs"]=_st(self["@runs"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.Text)})},
args: [],
source: "postCopy\x0a\x09super postCopy.\x0a\x09string := string copy.\x0a\x09runs := runs copy",
messageSends: ["postCopy", "copy"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "prepend:",
category: 'accessing',
fn: function (stringOrText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._replaceFrom_to_with_((1),(0),stringOrText);
return self}, function($ctx1) {$ctx1.fill(self,"prepend:",{stringOrText:stringOrText},smalltalk.Text)})},
args: ["stringOrText"],
source: "prepend: stringOrText\x0a\x0a\x09self replaceFrom: 1 to: 0 with: stringOrText",
messageSends: ["replaceFrom:to:with:"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._printNameOn_(aStream);
$1=aStream;
_st($1)._nextPutAll_(" for ");
$2=_st($1)._print_(self["@string"]);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Text)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09self printNameOn: aStream.\x0a\x09aStream nextPutAll: ' for '; print: string",
messageSends: ["printNameOn:", "nextPutAll:", "print:"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeOf:startingAt:",
category: 'accessing',
fn: function (attribute,index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self["@string"])._size()).__eq((0));
if(smalltalk.assert($2)){
$1=_st(index)._to_(_st(index).__minus((1)));
} else {
$1=_st(self["@runs"])._rangeOf_startingAt_(attribute,index);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeOf:startingAt:",{attribute:attribute,index:index},smalltalk.Text)})},
args: ["attribute", "index"],
source: "rangeOf: attribute startingAt: index\x0a\x22Answer an interval that gives the range of attribute at index position  index. An empty interval with start value index is returned when the attribute is not present at position index.  \x22\x0a   ^string size = 0\x0a      ifTrue: [index to: index - 1]\x0a\x09 ifFalse: [runs rangeOf: attribute startingAt: index]",
messageSends: ["ifTrue:ifFalse:", "to:", "-", "rangeOf:startingAt:", "=", "size"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceFrom:to:with:",
category: 'accessing',
fn: function (start,stop,aText){
var self=this;
var txt;
return smalltalk.withContext(function($ctx1) { 
txt=_st(aText)._asText();
self["@string"]=_st(self["@string"])._copyReplaceFrom_to_with_(start,stop,_st(txt)._string());
return self}, function($ctx1) {$ctx1.fill(self,"replaceFrom:to:with:",{start:start,stop:stop,aText:aText,txt:txt},smalltalk.Text)})},
args: ["start", "stop", "aText"],
source: "replaceFrom: start to: stop with: aText\x0a\x0a\x09| txt |\x0a\x09txt := aText asText.\x09\x22might be a string\x22\x0a\x09string := string copyReplaceFrom: start to: stop with: txt string.\x0a\x09\x22TODO: RunArrays\x22\x0a\x09\x22runs := runs copyReplaceFrom: start to: stop with: txt runs\x22",
messageSends: ["asText", "copyReplaceFrom:to:with:", "string"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceFrom:to:with:startingAt:",
category: 'converting',
fn: function (start,stop,replacement,repStart){
var self=this;
var rep,newRepRuns;
return smalltalk.withContext(function($ctx1) { 
rep=_st(replacement)._asText();
_st(self["@string"])._replaceFrom_to_with_startingAt_(start,stop,_st(rep)._string(),repStart);
newRepRuns=_st(_st(rep)._runs())._copyFrom_to_(repStart,_st(_st(repStart).__plus(stop)).__minus(start));
self["@runs"]=_st(self["@runs"])._copyReplaceFrom_to_with_(start,stop,newRepRuns);
return self}, function($ctx1) {$ctx1.fill(self,"replaceFrom:to:with:startingAt:",{start:start,stop:stop,replacement:replacement,repStart:repStart,rep:rep,newRepRuns:newRepRuns},smalltalk.Text)})},
args: ["start", "stop", "replacement", "repStart"],
source: "replaceFrom: start to: stop with: replacement startingAt: repStart \x0a \x09\x22This destructively replaces elements from start to stop in the receiver starting at index, repStart, in replacementCollection. Do it to both the string and the runs.\x22\x0a \x0a \x09| rep newRepRuns |\x0a \x09rep := replacement asText.\x09\x22might be a string\x22\x0a \x09string replaceFrom: start to: stop with: rep string startingAt: repStart.\x0a \x09newRepRuns := rep runs copyFrom: repStart to: repStart + stop - start.\x0a\x09runs := runs copyReplaceFrom: start to: stop with: newRepRuns",
messageSends: ["asText", "replaceFrom:to:with:startingAt:", "string", "copyFrom:to:", "-", "+", "runs", "copyReplaceFrom:to:with:"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "runs",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@runs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"runs",{},smalltalk.Text)})},
args: [],
source: "runs\x0a\x0a\x09^runs",
messageSends: [],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "runs:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(anArray)._size()).__eq(_st(self["@string"])._size());
if(! smalltalk.assert($1)){
$2=_st(self)._error_("Some code is setting text attributes length not matching the string size");
return $2;
};
self["@runs"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"runs:",{anArray:anArray},smalltalk.Text)})},
args: ["anArray"],
source: "runs: anArray\x0a\x09anArray size = string size\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[^self error: 'Some code is setting text attributes length not matching the string size'].\x0a\x09runs := anArray",
messageSends: ["ifFalse:", "error:", "=", "size"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "setString:setRuns:",
category: 'private',
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@string"]=aString;
self["@runs"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"setString:setRuns:",{aString:aString,anArray:anArray},smalltalk.Text)})},
args: ["aString", "anArray"],
source: "setString: aString setRuns: anArray\x0a\x0a\x09string := aString.\x0a\x09runs := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "setString:setRunsChecking:",
category: 'private',
fn: function (aString,aRunArray){
var self=this;
function $RunArray(){return smalltalk.RunArray||(typeof RunArray=="undefined"?nil:RunArray)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
self["@string"]=aString;
$1=aRunArray;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(aString)._asText();
return $2;
} else {
$1;
};
$3=_st(aRunArray)._isKindOf_($RunArray());
if(! smalltalk.assert($3)){
$4=_st(aString)._asText();
return $4;
};
$5=_st(_st(_st(aRunArray)._runs())._size()).__eq(_st(_st(aRunArray)._values())._size());
if(! smalltalk.assert($5)){
$6=_st(aString)._asText();
return $6;
};
$7=_st(_st(aRunArray)._size()).__eq(_st(aString)._size());
if(! smalltalk.assert($7)){
$8=_st(aString)._asText();
return $8;
};
self["@runs"]=aRunArray;
return self}, function($ctx1) {$ctx1.fill(self,"setString:setRunsChecking:",{aString:aString,aRunArray:aRunArray},smalltalk.Text)})},
args: ["aString", "aRunArray"],
source: "setString: aString setRunsChecking: aRunArray\x0a\x09\x22Check runs and do the best you can to make them fit...\x22\x0a\x0a\x09string := aString.\x0a\x09\x22check the runs\x22\x0a\x09aRunArray ifNil: [^ aString asText].\x0a\x09(aRunArray isKindOf: RunArray) ifFalse: [^ aString asText].\x0a\x09aRunArray runs size = aRunArray values size ifFalse: [^ aString asText].\x0a\x09aRunArray size = aString size ifFalse: [^ aString asText].\x0a\x09\x0a\x09runs := aRunArray.",
messageSends: ["ifNil:", "asText", "ifFalse:", "isKindOf:", "=", "size", "values", "runs"],
referencedClasses: ["RunArray"]
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Text)})},
args: [],
source: "size\x0a\x0a\x09^string size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("(Text string: ");
_st($1)._store_(self["@string"]);
_st($1)._nextPutAll_(" runs: ");
_st($1)._store_(self["@runs"]);
$2=_st($1)._nextPut_(")");
return self}, function($ctx1) {$ctx1.fill(self,"storeOn:",{aStream:aStream},smalltalk.Text)})},
args: ["aStream"],
source: "storeOn: aStream\x0a\x0a\x09aStream nextPutAll: '(Text string: ';\x0a\x09\x09store: string;\x0a\x09\x09nextPutAll: ' runs: ';\x0a\x09\x09store: runs;\x0a\x09\x09nextPut: ')'",
messageSends: ["nextPutAll:", "store:", "nextPut:"],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "string",
category: 'comparing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@string"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{},smalltalk.Text)})},
args: [],
source: "string\x0a\x09\x22Answer the string representation of the receiver.\x22\x0a\x0a\x09^string",
messageSends: [],
referencedClasses: []
}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "string:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@string"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString},smalltalk.Text)})},
args: ["aString"],
source: "string: aString\x0a\x09string := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Text);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
category: 'topez-common-core',
fn: function (stonReader){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._fromSton_(stonReader);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},smalltalk.Text.klass)})},
args: ["stonReader"],
source: "fromSton: stonReader\x0a    \x22workaround for https://github.com/svenvc/ston/issues/4\x22\x0a\x0a    ^ self new\x0a        fromSton: stonReader;\x0a        yourself",
messageSends: ["fromSton:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._string_attributes_(aString,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.Text.klass)})},
args: ["aString"],
source: "fromString: aString \x0a  \x22Answer an instance of me whose characters are those of the argument, aString.\x22\x0a  \x22TODO: font style\x22\x0a  ^ self\x0a    string: aString\x0a    attributes:{}",
messageSends: ["string:attributes:"],
referencedClasses: []
}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._new_((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Text.klass)})},
args: [],
source: "new\x0a\x09^ self new: 0",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (stringSize){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._fromString_(_st($String())._new_(stringSize));
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{stringSize:stringSize},smalltalk.Text.klass)})},
args: ["stringSize"],
source: "new: stringSize\x0a\x0a\x09^self fromString: (String new: stringSize)",
messageSends: ["fromString:", "new:"],
referencedClasses: ["String"]
}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamContents:",
category: 'instance creation',
fn: function (blockWithArg){
var self=this;
var stream;
function $TextStream(){return smalltalk.TextStream||(typeof TextStream=="undefined"?nil:TextStream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=_st($TextStream())._on_(_st(self)._new_((400)));
_st(blockWithArg)._value_(stream);
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{blockWithArg:blockWithArg,stream:stream},smalltalk.Text.klass)})},
args: ["blockWithArg"],
source: "streamContents: blockWithArg \x0a\x09| stream |\x0a\x09stream := TextStream on: (self new: 400).\x0a\x09blockWithArg value: stream.\x0a\x09^ stream contents",
messageSends: ["on:", "new:", "value:", "contents"],
referencedClasses: ["TextStream"]
}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "string:attribute:",
category: 'instance creation',
fn: function (aString,att){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._string_attributes_(aString,_st($Array())._with_(att));
return $1;
}, function($ctx1) {$ctx1.fill(self,"string:attribute:",{aString:aString,att:att},smalltalk.Text.klass)})},
args: ["aString", "att"],
source: "string: aString attribute: att\x0a\x09\x22Answer an instance of me whose characters are aString.\x0a\x09att is a TextAttribute.\x22\x0a\x0a\x09^self string: aString attributes: (Array with: att)",
messageSends: ["string:attributes:", "with:"],
referencedClasses: ["Array"]
}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "string:attributes:",
category: 'instance creation',
fn: function (aString,atts){
var self=this;
function $RunArray(){return smalltalk.RunArray||(typeof RunArray=="undefined"?nil:RunArray)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._string_runs_(aString,_st($RunArray())._new_withAll_(_st(aString)._size(),atts));
return $1;
}, function($ctx1) {$ctx1.fill(self,"string:attributes:",{aString:aString,atts:atts},smalltalk.Text.klass)})},
args: ["aString", "atts"],
source: "string: aString attributes: atts\x0a\x09\x22Answer an instance of me whose characters are those of aString.\x0a\x09atts is an array of TextAttributes.\x22\x0a\x0a\x09^self string: aString runs: (RunArray new: aString size withAll: atts)",
messageSends: ["string:runs:", "new:withAll:", "size"],
referencedClasses: ["RunArray"]
}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "string:emphasis:",
category: 'instance creation',
fn: function (aString,emphasis){
var self=this;
function $Halt(){return smalltalk.Halt||(typeof Halt=="undefined"?nil:Halt)}
function $TextFontChange(){return smalltalk.TextFontChange||(typeof TextFontChange=="undefined"?nil:TextFontChange)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $RunArray(){return smalltalk.RunArray||(typeof RunArray=="undefined"?nil:RunArray)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(emphasis)._isNumber();
if(smalltalk.assert($1)){
_st($Halt())._halt_("Numeric emphasis is not supported");
$2=_st(self)._string_runs_(aString,_st($RunArray())._new_withAll_(_st(aString)._size(),_st($Array())._with_(_st(_st($TextFontChange())._new())._fontNumber_(emphasis))));
return $2;
};
$3=_st(self)._string_attributes_(aString,emphasis);
return $3;
}, function($ctx1) {$ctx1.fill(self,"string:emphasis:",{aString:aString,emphasis:emphasis},smalltalk.Text.klass)})},
args: ["aString", "emphasis"],
source: "string: aString emphasis: emphasis\x0a\x09\x22This is an old method that is mainly used by old applications\x22\x0a\x0a\x09emphasis isNumber ifTrue:\x0a\x09\x09[Halt halt: 'Numeric emphasis is not supported'.\x0a\x09\x09\x22But if you proceed, we will do our best to give you what you want...\x22\x0a\x09\x09^ self string: aString runs: (RunArray new: aString size withAll: \x0a\x09\x09\x09(Array with: (TextFontChange new fontNumber: emphasis)))].\x0a\x09^ self string: aString attributes: emphasis",
messageSends: ["ifTrue:", "halt:", "string:runs:", "new:withAll:", "size", "with:", "fontNumber:", "new", "isNumber", "string:attributes:"],
referencedClasses: ["Halt", "TextFontChange", "Array", "RunArray"]
}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "string:runs:",
category: 'instance creation',
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._basicNew())._setString_setRuns_(aString,anArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"string:runs:",{aString:aString,anArray:anArray},smalltalk.Text.klass)})},
args: ["aString", "anArray"],
source: "string: aString runs: anArray\x0a \x0a\x09^self basicNew setString: aString setRuns: anArray",
messageSends: ["setString:setRuns:", "basicNew"],
referencedClasses: []
}),
smalltalk.Text.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.Set.comment="I represent an unordered set of objects without duplicates."
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
$1=_st(_st(self)._class()).__eq(_st(aCollection)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(_st(self)._size()).__eq(_st(aCollection)._size());
if(! smalltalk.assert($2)){
return false;
};
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$3=_st(aCollection)._includes_(each);
if(! smalltalk.assert($3)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection},smalltalk.Set)})},
args: ["aCollection"],
source: "= aCollection\x0a\x09self class = aCollection class ifFalse: [ ^ false ].\x0a\x09self size = aCollection size ifFalse: [ ^ false ].\x0a\x09self do: [:each | (aCollection includes: each) ifFalse: [ ^ false ] ].\x0a\x09^ true",
messageSends: ["ifFalse:", "=", "class", "size", "do:", "includes:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var found;
		for(var i=0; i < self['@elements'].length; i++) {
			if(anObject == self['@elements'][i]) {
				found = true;
				break;
			}
		}
		if(!found) {self['@elements'].push(anObject)}
	;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Set)})},
args: ["anObject"],
source: "add: anObject\x0a\x09<\x0a\x09\x09var found;\x0a\x09\x09for(var i=0; i < self['@elements'].length; i++) {\x0a\x09\x09\x09if(anObject == self['@elements'][i]) {\x0a\x09\x09\x09\x09found = true;\x0a\x09\x09\x09\x09break;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09if(!found) {self['@elements'].push(anObject)}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.Set)})},
args: [],
source: "asArray\x0a\x09^elements copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._withAll_(_st(self["@elements"])._collect_(aBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},smalltalk.Set)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09^self class withAll: (elements collect: aBlock)",
messageSends: ["withAll:", "collect:", "class"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Set)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^elements detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Set)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09elements do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.Set)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^elements includes: anObject",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Collection.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Set)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Collection.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_(" (");
_st(self)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Set)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.Set)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09elements remove: anObject",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
collection=_st(_st(self)._class())._new();
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
return _st(collection)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=collection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,collection:collection},smalltalk.Set)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [:each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09\x09collection add: each]].\x0a\x09^collection",
messageSends: ["new", "class", "do:", "ifTrue:", "add:", "value:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Set)})},
args: [],
source: "size\x0a\x09^elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Set);



smalltalk.addClass('Queue', smalltalk.Object, ['read', 'readIndex', 'write'], 'Kernel-Collections');
smalltalk.Queue.comment="I am a one-sided queue.\x0a\x0a## Usage\x0a\x0aUse `#nextPut:` to add items to the queue.\x0aUse `#next` or `#nextIfAbsent:` to get (and remove) the next item in the queue.\x0a\x0a## Implementation notes\x0a\x0aA Queue uses two OrderedCollections inside,\x0a`read` is at the front, is not modified and only read using `readIndex`.\x0a`write` is at the back and is appended new items.\x0aWhen `read` is exhausted, `write` is promoted to `read` and new `write` is created.\x0a\x0aAs a consequence, no data moving is done by me, write appending may do data moving\x0awhen growing `write`, but this is left to engine to implement as good as it chooses to."
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@read"]=_st($OrderedCollection())._new();
self["@write"]=_st($OrderedCollection())._new();
self["@readIndex"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Queue)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09read := OrderedCollection new.\x0a\x09write := OrderedCollection new.\x0a\x09readIndex := 1",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextIfAbsent_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._error_("Cannot read from empty Queue.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Queue)})},
args: [],
source: "next\x0a\x09^self nextIfAbsent: [ self error: 'Cannot read from empty Queue.' ]",
messageSends: ["nextIfAbsent:", "error:"],
referencedClasses: []
}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextIfAbsent:",
category: 'accessing',
fn: function (aBlock){
var self=this;
var result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
result=_st(self["@read"])._at_ifAbsent_(self["@readIndex"],(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@write"])._isEmpty();
if(smalltalk.assert($1)){
$2=_st(self["@readIndex"]).__gt((1));
if(smalltalk.assert($2)){
self["@read"]=[];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
};
$3=_st(aBlock)._value();
throw $early=[$3];
};
self["@read"]=self["@write"];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
self["@write"]=_st($OrderedCollection())._new();
self["@write"];
return _st(self["@read"])._first();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@read"])._at_put_(self["@readIndex"],nil);
self["@readIndex"]=_st(self["@readIndex"]).__plus((1));
$4=result;
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextIfAbsent:",{aBlock:aBlock,result:result},smalltalk.Queue)})},
args: ["aBlock"],
source: "nextIfAbsent: aBlock\x0a\x09| result |\x0a\x09result := read at: readIndex ifAbsent: [\x0a\x09\x09write isEmpty ifTrue: [\x0a\x09\x09\x09readIndex > 1 ifTrue: [ read := #(). readIndex := 1 ].\x0a\x09\x09\x09^aBlock value ].\x0a\x09\x09read := write.\x0a\x09\x09readIndex := 1.\x0a\x09\x09write := OrderedCollection new.\x0a\x09\x09read first ].\x0a\x09read at: readIndex put: nil.\x0a\x09readIndex := readIndex + 1.\x0a\x09^result",
messageSends: ["at:ifAbsent:", "ifTrue:", ">", "value", "isEmpty", "new", "first", "at:put:", "+"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@write"])._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.Queue)})},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09write add: anObject",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.Queue);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.RegularExpression.comment="I represent a regular expression object. My instances are JavaScript `RegExp` object."
smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
category: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.compile(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.RegularExpression)})},
args: ["aString"],
source: "compile: aString\x0a\x09<return self.compile(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "exec:",
category: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.exec(aString) || nil;
return self}, function($ctx1) {$ctx1.fill(self,"exec:",{aString:aString},smalltalk.RegularExpression)})},
args: ["aString"],
source: "exec: aString\x0a\x09<return self.exec(aString) || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "test:",
category: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.test(aString);
return self}, function($ctx1) {$ctx1.fill(self,"test:",{aString:aString},smalltalk.RegularExpression)})},
args: ["aString"],
source: "test: aString\x0a\x09<return self.test(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._fromString_flag_(aString,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.RegularExpression.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09\x09^self fromString: aString flag: ''",
messageSends: ["fromString:flag:"],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:flag:",
category: 'instance creation',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new RegExp(aString, anotherString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:flag:",{aString:aString,anotherString:anotherString},smalltalk.RegularExpression.klass)})},
args: ["aString", "anotherString"],
source: "fromString: aString flag: anotherString\x0a\x09<return new RegExp(aString, anotherString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.Stream.comment="I represent an accessor for a sequence of objects. This sequence is referred to as my \x22contents\x22.\x0aMy instances are read/write streams to the contents sequence collection."
smalltalk.addMethod(
smalltalk.method({
selector: "<<",
category: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._write_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"<<",{anObject:anObject},smalltalk.Stream)})},
args: ["anObject"],
source: "<< anObject\x0a\x09self write: anObject",
messageSends: ["write:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._position()).__eq(_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.Stream)})},
args: [],
source: "atEnd\x0a\x09^self position = self size",
messageSends: ["=", "size", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atStart",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._position()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atStart",{},smalltalk.Stream)})},
args: [],
source: "atStart\x0a\x09^self position = 0",
messageSends: ["=", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.Stream)})},
args: [],
source: "close",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@collection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.Stream)})},
args: [],
source: "collection\x0a\x09^collection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._collection())._copyFrom_to_((1),_st(self)._streamSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.Stream)})},
args: [],
source: "contents\x0a\x09^self collection\x0a\x09\x09copyFrom: 1\x0a\x09\x09to: self streamSize",
messageSends: ["copyFrom:to:", "streamSize", "collection"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st(self)._next());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Stream)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09[self atEnd] whileFalse: [aBlock value: self next]",
messageSends: ["whileFalse:", "value:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.Stream)})},
args: [],
source: "flush",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},smalltalk.Stream)})},
args: [],
source: "isEmpty\x0a\x09^self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "isStream",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isStream",{},smalltalk.Stream)})},
args: [],
source: "isStream\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'reading',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._atEnd();
if(smalltalk.assert($2)){
$1=nil;
} else {
_st(self)._position_(_st(_st(self)._position()).__plus((1)));
$1=_st(self["@collection"])._at_(_st(self)._position());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Stream)})},
args: [],
source: "next\x0a\x09^self atEnd\x0a\x09\x09ifTrue: [nil]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self position: self position + 1.\x0a\x09\x09\x09collection at: self position]",
messageSends: ["ifTrue:ifFalse:", "position:", "+", "position", "at:", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
tempCollection=_st(_st(_st(self)._collection())._class())._new();
_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._atEnd();
if(! smalltalk.assert($1)){
return _st(tempCollection)._add_(_st(self)._next());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=tempCollection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection},smalltalk.Stream)})},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection add: self next]].\x0a\x09^tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "add:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._position_(_st(_st(self)._position()).__plus((1)));
_st(_st(self)._collection())._at_put_(_st(self)._position(),anObject);
_st(self)._setStreamSize_(_st(_st(self)._streamSize())._max_(_st(self)._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.Stream)})},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self position: self position + 1.\x0a\x09self collection at: self position put: anObject.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
category: 'writing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._nextPut_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aCollection:aCollection},smalltalk.Stream)})},
args: ["aCollection"],
source: "nextPutAll: aCollection\x0a\x09aCollection do: [:each |\x0a\x09\x09self nextPut: each]",
messageSends: ["do:", "nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
category: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPut_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},smalltalk.Stream)})},
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
category: 'reading',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._atEnd();
if(! smalltalk.assert($2)){
$1=_st(_st(self)._collection())._at_(_st(_st(self)._position()).__plus((1)));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"peek",{},smalltalk.Stream)})},
args: [],
source: "peek\x0a\x09^self atEnd ifFalse: [\x0a\x09\x09self collection at: self position + 1]",
messageSends: ["ifFalse:", "at:", "+", "position", "collection", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@position"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@position"]=(0);
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.Stream)})},
args: [],
source: "position\x0a\x09^position ifNil: [position := 0]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{anInteger:anInteger},smalltalk.Stream)})},
args: ["anInteger"],
source: "position: anInteger\x0a\x09position := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "print:",
category: 'reading',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._printOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"print:",{anObject:anObject},smalltalk.Stream)})},
args: ["anObject"],
source: "print: anObject\x0a\x09\x22Have anObject print itself on the receiver.\x22\x0a\x09anObject printOn: self",
messageSends: ["printOn:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._position_((0));
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.Stream)})},
args: [],
source: "reset\x0a\x09self position: 0",
messageSends: ["position:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "resetContents",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._reset();
_st(self)._setStreamSize_((0));
return self}, function($ctx1) {$ctx1.fill(self,"resetContents",{},smalltalk.Stream)})},
args: [],
source: "resetContents\x0a\x09self reset.\x0a\x09self setStreamSize: 0",
messageSends: ["reset", "setStreamSize:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setCollection:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@collection"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"setCollection:",{aCollection:aCollection},smalltalk.Stream)})},
args: ["aCollection"],
source: "setCollection: aCollection\x0a\x09collection := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setStreamSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@streamSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"setStreamSize:",{anInteger:anInteger},smalltalk.Stream)})},
args: ["anInteger"],
source: "setStreamSize: anInteger\x0a\x09streamSize := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setToEnd",
category: 'positioning',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._position_(_st(self)._size());
return self}, function($ctx1) {$ctx1.fill(self,"setToEnd",{},smalltalk.Stream)})},
args: [],
source: "setToEnd\x0a\x09self position: self size",
messageSends: ["position:", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._streamSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Stream)})},
args: [],
source: "size\x0a\x09^self streamSize",
messageSends: ["streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "skip:",
category: 'positioning',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._position_(_st(_st(_st(self)._position()).__plus(anInteger))._min_max_(_st(self)._size(),(0)));
return self}, function($ctx1) {$ctx1.fill(self,"skip:",{anInteger:anInteger},smalltalk.Stream)})},
args: ["anInteger"],
source: "skip: anInteger\x0a\x09self position: ((self position + anInteger) min: self size max: 0)",
messageSends: ["position:", "min:max:", "size", "+", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "streamSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@streamSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamSize",{},smalltalk.Stream)})},
args: [],
source: "streamSize\x0a\x09^streamSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "write:",
category: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._putOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"write:",{anObject:anObject},smalltalk.Stream)})},
args: ["anObject"],
source: "write: anObject\x0a\x09anObject putOn: self",
messageSends: ["putOn:"],
referencedClasses: []
}),
smalltalk.Stream);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._setCollection_(aCollection);
_st($2)._setStreamSize_(_st(aCollection)._size());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.Stream.klass)})},
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x09^self new\x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"],
referencedClasses: []
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.StringStream.comment="I am a Stream specific to `String` objects."
smalltalk.addMethod(
smalltalk.method({
selector: "cr",
category: 'writing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextPutAll_(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.StringStream)})},
args: [],
source: "cr\x0a\x09^self nextPutAll: String cr",
messageSends: ["nextPutAll:", "cr"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
category: 'writing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextPutAll_(_st($String())._crlf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlf",{},smalltalk.StringStream)})},
args: [],
source: "crlf\x0a\x09^self nextPutAll: String crlf",
messageSends: ["nextPutAll:", "crlf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
category: 'writing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextPutAll_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.StringStream)})},
args: [],
source: "lf\x0a\x09^self nextPutAll: String lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
tempCollection=_st(_st(_st(self)._collection())._class())._new();
_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._atEnd();
if(! smalltalk.assert($1)){
tempCollection=_st(tempCollection).__comma(_st(self)._next());
return tempCollection;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=tempCollection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection},smalltalk.StringStream)})},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection := tempCollection, self next]].\x0a\x09^tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", ",", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextLine",
category: 'reading',
fn: function (){
var self=this;
var line,nextChar;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
$1=_st(self)._atEnd();
if(smalltalk.assert($1)){
return nil;
};
line="";
_st((function(){
return smalltalk.withContext(function($ctx2) {
nextChar=_st(self)._next();
nextChar;
return _st(nextChar).__tild_tild(_st($Character())._cr());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
line=_st(line).__comma(nextChar);
line;
$2=_st(self)._atEnd();
if(smalltalk.assert($2)){
$3=line;
throw $early=[$3];
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=line;
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextLine",{line:line,nextChar:nextChar},smalltalk.StringStream)})},
args: [],
source: "nextLine\x0a\x09|line nextChar|\x0a\x09self atEnd ifTrue: [^ nil].\x0a\x09line := ''.\x0a\x09[nextChar := self next.\x0a\x09\x09nextChar ~~ Character cr] whileTrue: [\x0a\x09\x09\x09line := line, nextChar.\x0a\x09\x09\x09self atEnd ifTrue: [^ line]].\x0a\x09^ line",
messageSends: ["ifTrue:", "atEnd", "whileTrue:", ",", "next", "~~", "cr"],
referencedClasses: ["Character"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},smalltalk.StringStream)})},
args: ["aString"],
source: "nextPut: aString\x0a\x09self nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
category: 'writing',
fn: function (aString){
var self=this;
var pre,post;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._atEnd();
if(smalltalk.assert($1)){
_st(self)._setCollection_(_st(_st(self)._collection()).__comma(aString));
} else {
pre=_st(_st(self)._collection())._copyFrom_to_((1),_st(self)._position());
pre;
post=_st(_st(self)._collection())._copyFrom_to_(_st(_st(_st(self)._position()).__plus((1))).__plus(_st(aString)._size()),_st(_st(self)._collection())._size());
post;
_st(self)._setCollection_(_st(_st(pre).__comma(aString)).__comma(post));
};
_st(self)._position_(_st(_st(self)._position()).__plus(_st(aString)._size()));
_st(self)._setStreamSize_(_st(_st(self)._streamSize())._max_(_st(self)._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString,pre:pre,post:post},smalltalk.StringStream)})},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09| pre post |\x0a\x09self atEnd ifTrue: [ self setCollection: self collection, aString ] ifFalse: [\x0a\x09\x09pre := self collection copyFrom: 1 to: self position.\x0a\x09\x09post := self collection copyFrom: (self position + 1 + aString size) to: self collection size.\x0a\x09\x09self setCollection: pre, aString, post\x0a\x09].\x0a\x09self position: self position + aString size.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["ifTrue:ifFalse:", "setCollection:", ",", "collection", "copyFrom:to:", "position", "+", "size", "atEnd", "position:", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
category: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},smalltalk.StringStream)})},
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
category: 'writing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPut_(" ");
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.StringStream)})},
args: [],
source: "space\x0a\x09self nextPut: ' '",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
category: 'writing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextPutAll_(_st($String())._tab());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tab",{},smalltalk.StringStream)})},
args: [],
source: "tab\x0a\x09^self nextPutAll: String tab",
messageSends: ["nextPutAll:", "tab"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);



smalltalk.addClass('TextStream', smalltalk.StringStream, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'not yet classified',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._collection())._setString_setRuns_("",_st($Array())._new());
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.TextStream)})},
args: [],
source: "reset\x0a\x09self collection setString: '' setRuns: Array new.",
messageSends: ["setString:setRuns:", "new", "collection"],
referencedClasses: ["Array"]
}),
smalltalk.TextStream);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._basicNew();
_st($2)._setCollection_(aCollection);
_st($2)._setStreamSize_(_st(aCollection)._size());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.TextStream.klass)})},
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x09^self basicNew\x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
messageSends: ["setCollection:", "basicNew", "setStreamSize:", "size", "yourself"],
referencedClasses: []
}),
smalltalk.TextStream.klass);


