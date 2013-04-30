smalltalk.addPackage('Kernel-Collections');
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["and:", "=", "value", "key", "class"]}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@key"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.Association)})},
messageSends: []}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@key"]=aKey;
return self}, function($ctx1) {$ctx1.fill(self,"key:",{aKey:aKey},smalltalk.Association)})},
messageSends: []}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._key())._printOn_(aStream);
_st(aStream)._nextPutAll_(" -> ");
_st(_st(self)._value())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Association)})},
messageSends: ["printOn:", "key", "nextPutAll:", "value"]}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.Association)})},
messageSends: []}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aValue:aValue},smalltalk.Association)})},
messageSends: []}),
smalltalk.Association);


smalltalk.addMethod(
smalltalk.method({
selector: "key:value:",
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
messageSends: ["key:", "new", "value:", "yourself"]}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
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
messageSends: ["addAll:", "copy", "yourself"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
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
messageSends: ["do:", "add:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "allSatisfy:",
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
messageSends: ["do:", "ifFalse:", "value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.Collection)})},
messageSends: ["withAll:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asCommaString",
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
messageSends: ["streamContents:", "asStringOn:delimiter:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asCommaStringAnd",
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
messageSends: ["streamContents:", "asStringOn:delimiter:last:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asDictionary",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._as_($Dictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},smalltalk.Collection)})},
messageSends: ["as:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
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
messageSends: ["collect:", "asJSON", "asArray"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asOrderedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{},smalltalk.Collection)})},
messageSends: ["asArray"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asSet",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Set())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSet",{},smalltalk.Collection)})},
messageSends: ["withAll:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asStringOn:delimiter:",
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
messageSends: ["do:separatedBy:", "nextPutAll:", "asString"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asStringOn:delimiter:last:",
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
messageSends: ["size", "do:separatedBy:", "+", "nextPutAll:", "asString", "ifTrue:ifFalse:", "="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "associationsDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["do:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
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
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWith:",
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
messageSends: ["add:", "copy", "yourself"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithAll:",
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
messageSends: ["addAll:", "copy", "yourself"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithoutAll:",
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
messageSends: ["reject:", "includes:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:",
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
messageSends: ["detect:ifNone:", "errorNotFound"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:separatedBy:",
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
messageSends: ["do:", "value", "value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "errorNotFound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("Object is not in the collection");
return self}, function($ctx1) {$ctx1.fill(self,"errorNotFound",{},smalltalk.Collection)})},
messageSends: ["error:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifEmpty:",
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
messageSends: ["ifTrue:ifFalse:", "value", "isEmpty"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotEmpty:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._notEmpty();
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["ifTrue:", "notEmpty"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
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
messageSends: ["new", "~=", "detect:ifNone:", "="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "inject:into:",
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
messageSends: ["do:", "value:value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "intersection:",
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
messageSends: ["asSet", "new", "do:", "ifTrue:", "add:", "and:", "not", "includes:", "withAll:", "asArray", "class"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},smalltalk.Collection)})},
messageSends: ["=", "size"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "max",
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
messageSends: ["ifTrue:", "error:", "==", "size", "do:", "or:", ">", "="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "min",
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
messageSends: ["ifTrue:", "error:", "==", "size", "do:", "or:", "<", "="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "notEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{},smalltalk.Collection)})},
messageSends: ["not", "isEmpty"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "occurrencesOf:",
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
messageSends: ["do:", "ifTrue:", "+", "="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printElementsOn:",
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
messageSends: ["nextPut:", "do:separatedBy:", "print:", "space"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printNameOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._printOn_.apply(_st(self), [aStream]);
return self}, function($ctx1) {$ctx1.fill(self,"printNameOn:",{aStream:aStream},smalltalk.Collection)})},
messageSends: ["printOn:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._printNameOn_(aStream);
_st(self)._printElementsOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Collection)})},
messageSends: ["printNameOn:", "printElementsOn:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:delimiter:",
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
messageSends: ["do:separatedBy:", "print:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:delimiter:last:",
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
messageSends: ["size", "do:separatedBy:", "+", "print:", "ifTrue:ifFalse:", "="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._putOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.Collection)})},
messageSends: ["do:", "putOn:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "reject:",
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
messageSends: ["select:", "=", "value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
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
messageSends: ["remove:ifAbsent:", "errorNotFound"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
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
messageSends: ["copy", "do:", "remove:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllSuchThat:",
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
messageSends: ["do:", "ifTrue:", "remove:", "value:", "copy"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
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
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "nextPut:", "value:", "contents"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
fn: function (stonWriter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stonWriter)._writeObject_do_(self,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(stonWriter)._encodeList_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},smalltalk.Collection)})},
messageSends: ["writeObject:do:", "encodeList:"]}),
smalltalk.Collection);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
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
messageSends: ["new", "parseListDo:", "add:"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},smalltalk.Collection.klass)})},
messageSends: ["new"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
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
messageSends: ["add:", "new", "yourself"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
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
messageSends: ["add:", "new", "yourself"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
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
messageSends: ["add:", "new", "yourself"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
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
messageSends: ["addAll:", "new", "yourself"]}),
smalltalk.Collection.klass);


smalltalk.addClass('IndexableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
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
messageSends: ["at:ifAbsent:", "errorNotFound"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.IndexableCollection)})},
messageSends: ["subclassReponsibility"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
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
messageSends: ["at:ifPresent:ifAbsent:"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.IndexableCollection)})},
messageSends: ["subclassReponsibility"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.IndexableCollection)})},
messageSends: ["subclassReponsibility"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
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
messageSends: ["indexOf:ifAbsent:", "errorNotFound"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.IndexableCollection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,_st(anotherCollection)._at_(index));
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},smalltalk.IndexableCollection)})},
messageSends: ["withIndexDo:", "value:value:", "at:"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.IndexableCollection)})},
messageSends: ["subclassReponsibility"]}),
smalltalk.IndexableCollection);



smalltalk.addClass('HashedCollection', smalltalk.IndexableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection},smalltalk.HashedCollection)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifFalse:", "=", "class", "size", "associations"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._at_put_(_st(anAssociation)._key(),_st(anAssociation)._value());
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anAssociation:anAssociation},smalltalk.HashedCollection)})},
messageSends: ["at:put:", "key", "value"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.IndexableCollection.fn.prototype._addAll_.apply(_st(self), [_st(aHashedCollection)._associations()]);
$1=aHashedCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aHashedCollection:aHashedCollection},smalltalk.HashedCollection)})},
messageSends: ["addAll:", "associations"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asDictionary",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Dictionary())._fromPairs_(_st(self)._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},smalltalk.HashedCollection)})},
messageSends: ["fromPairs:", "associations"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
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
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asJSON"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associations",
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
messageSends: ["associationsDo:", "add:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associationsDo:",
fn: function (aBlock){
var self=this;
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st($Association())._key_value_(key,value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["keysAndValuesDo:", "value:", "key:value:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
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
messageSends: ["ifTrue:ifFalse:", "basicAt:", "includesKey:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
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
messageSends: ["at:ifAbsent:", "at:put:", "value"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
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
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "includesKey:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicAt_put_(aKey,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},smalltalk.HashedCollection)})},
messageSends: ["basicAt:put:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
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
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
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
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "deepCopy"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._values())._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.HashedCollection)})},
messageSends: ["detect:ifNone:", "values"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._valuesDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["valuesDo:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._values())._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.HashedCollection)})},
messageSends: ["includes:", "values"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.hasOwnProperty(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.HashedCollection)})},
messageSends: []}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
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
messageSends: ["detect:ifNone:", "=", "at:", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
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
messageSends: []}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._keysDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,_st(self)._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["keysDo:", "value:value:", "at:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._keys())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["do:", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:", "associations"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._removeKey_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["removeKey:ifAbsent:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._keys())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._removeKey_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},smalltalk.HashedCollection)})},
messageSends: ["do:", "removeKey:", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._remove_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aKey:aKey},smalltalk.HashedCollection)})},
messageSends: ["remove:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
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
messageSends: ["ifFalse:ifTrue:", "value", "basicDelete:", "includesKey:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
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
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "at:put:", "value:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
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
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._keys())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.HashedCollection)})},
messageSends: ["size", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
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
messageSends: ["collect:", "at:", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["keysAndValuesDo:", "value:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(value,key);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["keysAndValuesDo:", "value:value:"]}),
smalltalk.HashedCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "fromPairs:",
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
messageSends: ["new", "do:", "add:"]}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "asHashedCollection",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HashedCollection())._fromPairs_(_st(self)._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{},smalltalk.Dictionary)})},
messageSends: ["fromPairs:", "associations"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asHashedCollection())._asJSON();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Dictionary)})},
messageSends: ["asJSON", "asHashedCollection"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		return index >=0 ? self['@values'][index] : aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
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
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._positionOfKey_(aKey) >= 0; ;
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.Dictionary)})},
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
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
messageSends: ["indexOf:ifAbsent:", "ifTrue:ifFalse:", "value", "at:", "="]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HashedCollection.fn.prototype._initialize.apply(_st(self), []);
self["@keys"]=[];
self["@values"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Dictionary)})},
messageSends: ["initialize"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.Dictionary)})},
messageSends: ["copy"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._with_do_(self["@values"],aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: ["with:do:"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: ["do:"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOfKey:",
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
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
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
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
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
messageSends: ["ifTrue:ifFalse:", "writeMap:", "writeObject:do:", "encodeMap:", "==", "mapClass", "class"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.Dictionary)})},
messageSends: ["copy"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: ["do:"]}),
smalltalk.Dictionary);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
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
messageSends: ["new", "parseMapDo:", "at:put:"]}),
smalltalk.Dictionary.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFrom:",
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
messageSends: ["new:", "size", "associationsDo:", "ifTrue:ifFalse:", "error:", ",", "printString", "key", "add:", "includesKey:"]}),
smalltalk.Dictionary.klass);


smalltalk.addClass('SequenceableCollection', smalltalk.IndexableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifFalse:", "and:", "=", "size", "class", "withIndexDo:", "at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addLast:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addLast:",{anObject:anObject},smalltalk.SequenceableCollection)})},
messageSends: ["add:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButFirst",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyFrom_to_((2),_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButFirst",{},smalltalk.SequenceableCollection)})},
messageSends: ["copyFrom:to:", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButLast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyFrom_to_((1),_st(_st(self)._size()).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButLast",{},smalltalk.SequenceableCollection)})},
messageSends: ["copyFrom:to:", "-", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_(_st(_st(self)._size())._atRandom());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:", "atRandom", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
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
messageSends: ["to:", "new:", "size", "class", "withIndexDo:", "at:put:", "at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceFrom:to:with:",
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
messageSends: ["addAll:", "copyFrom:to:", "-", "new", "class", "+", "size", "yourself"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
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
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:", "deepCopy"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first:",
fn: function (n){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyFrom_to_((1),n);
return $1;
}, function($ctx1) {$ctx1.fill(self,"first:",{n:n},smalltalk.SequenceableCollection)})},
messageSends: ["copyFrom:to:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "fourth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fourth",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
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
messageSends: ["notNil", "indexOf:ifAbsent:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=0;i<self.length;i++) {
			if(self[i].__eq(anObject)) {return i+1}
		};
		return aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:",
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
messageSends: ["indexOf:startingAt:ifAbsent:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
fn: function (anObject,start,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "last",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_(_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "newStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newStream",{},smalltalk.SequenceableCollection)})},
messageSends: ["on:", "streamClass"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "readStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"readStream",{},smalltalk.SequenceableCollection)})},
messageSends: ["stream"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeLast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._remove_(_st(self)._last());
return self}, function($ctx1) {$ctx1.fill(self,"removeLast",{},smalltalk.SequenceableCollection)})},
messageSends: ["remove:", "last"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.SequenceableCollection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "second",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"second",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
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
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
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
messageSends: ["ifTrue:ifFalse:", "writeList:", "stonOn:", "==", "listClass", "class"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "stream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stream",{},smalltalk.SequenceableCollection)})},
messageSends: ["newStream"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._streamClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.SequenceableCollection)})},
messageSends: ["streamClass", "class"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "third",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"third",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self[i], anotherCollection[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "writeStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},smalltalk.SequenceableCollection)})},
messageSends: ["stream"]}),
smalltalk.SequenceableCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
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
messageSends: ["streamContents:", "parseListDo:", "nextPut:"]}),
smalltalk.SequenceableCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
function $Stream(){return smalltalk.Stream||(typeof Stream=="undefined"?nil:Stream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.SequenceableCollection.klass)})},
messageSends: []}),
smalltalk.SequenceableCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamContents:",
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
messageSends: ["on:", "new", "streamClass", "value:", "contents"]}),
smalltalk.SequenceableCollection.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.push(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
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
messageSends: [",", "join:", "collect:", "asJavascript"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[anIndex - 1] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "atAllPut:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st((1))._to_(_st(self)._size()))._do_((function(index){
return smalltalk.withContext(function($ctx2) {
return _st(self)._at_put_(index,aValue);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"atAllPut:",{aValue:aValue},smalltalk.Array)})},
messageSends: ["do:", "at:put:", "to:", "size"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.join(aString);
return self}, function($ctx1) {$ctx1.fill(self,"join:",{aString:aString},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
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
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},smalltalk.Array)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFrom:to:",
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.splice(aNumber - 1,anotherNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self._copy().reverse();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicPerform_("sort");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sort",{},smalltalk.Array)})},
messageSends: ["basicPerform:"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self}, function($ctx1) {$ctx1.fill(self,"sort:",{aBlock:aBlock},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._copy())._sort();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted",{},smalltalk.Array)})},
messageSends: ["sort", "copy"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._copy())._sort_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted:",{aBlock:aBlock},smalltalk.Array)})},
messageSends: ["sort:", "copy"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "storeOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
(function(){
return smalltalk.withContext(function($ctx2) {
$1=aStream;
_st($1)._nextPut_("#");
$2=_st($1)._nextPut_("(");
$2;
_st(self)._do_((function(element){
return smalltalk.withContext(function($ctx3) {
_st(element)._storeOn_(aStream);
return _st(aStream)._space();
}, function($ctx3) {$ctx3.fillBlock({element:element},$ctx1)})}));
return _st(aStream)._nextPut_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"storeOn:",{aStream:aStream},smalltalk.Array)})},
messageSends: ["nextPut:", "do:", "storeOn:", "space"]}),
smalltalk.Array);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Array(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},smalltalk.Array.klass)})},
messageSends: []}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:withAll:",
fn: function (size,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new_(size))._atAllPut_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:withAll:",{size:size,value:value},smalltalk.Array.klass)})},
messageSends: ["atAllPut:", "new:"]}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
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
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
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
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
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
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
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
messageSends: ["new:", "size", "do:", "at:put:", "+"]}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asString()).__comma(_st(aString)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},smalltalk.CharacterArray)})},
messageSends: [",", "asString"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.CharacterArray)})},
messageSends: ["errorReadOnly"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._asLowercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},smalltalk.CharacterArray)})},
messageSends: ["fromString:", "asLowercase", "asString", "class"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._asString())._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.CharacterArray)})},
messageSends: ["asNumber", "asString"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.CharacterArray)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},smalltalk.CharacterArray)})},
messageSends: ["asString"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._asUppercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},smalltalk.CharacterArray)})},
messageSends: ["fromString:", "asUppercase", "asString", "class"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.CharacterArray)})},
messageSends: ["errorReadOnly"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "errorReadOnly",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("Object is read-only");
return self}, function($ctx1) {$ctx1.fill(self,"errorReadOnly",{},smalltalk.CharacterArray)})},
messageSends: ["error:"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._asString())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CharacterArray)})},
messageSends: ["printOn:", "asString"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.CharacterArray)})},
messageSends: ["nextPutString:"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.CharacterArray)})},
messageSends: ["errorReadOnly"]}),
smalltalk.CharacterArray);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.CharacterArray.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self + aString;
return self}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) < aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) <= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self).__eq(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString},smalltalk.String)})},
messageSends: ["="]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) > aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) >= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toLowerCase();
return self}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Number(self);
return self}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asRegexp",
fn: function (){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RegularExpression())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asRegexp",{},smalltalk.String)})},
messageSends: ["fromString:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.selector(self);
return self}, function($ctx1) {$ctx1.fill(self,"asSelector",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asText",
fn: function (){
var self=this;
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Text())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asText",{},smalltalk.String)})},
messageSends: ["fromString:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toUpperCase();
return self}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asciiValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.charCodeAt(0);;
return self}, function($ctx1) {$ctx1.fill(self,"asciiValue",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self).charAt(anIndex - 1) || aBlock();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "charCodeAt:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.charCodeAt(anInteger - 1) ;
return self}, function($ctx1) {$ctx1.fill(self,"charCodeAt:",{anInteger:anInteger},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "codePoint",
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
messageSends: ["ifTrue:", "signal:", "~~", "size", "asciiValue"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "convertTDEvaluateTokenResponseToText",
fn: function (){
var self=this;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STON())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"convertTDEvaluateTokenResponseToText",{},smalltalk.String)})},
messageSends: ["fromString:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.substring(anIndex - 1, anotherIndex);
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceAll:with:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._replace_with_(aString,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceAll:with:",{aString:aString,anotherString:anotherString},smalltalk.String)})},
messageSends: ["replace:with:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceFrom:to:with:",
fn: function (start,stop,replacement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.substr(0, start - 1) + replacement + self.substr(stop) ;
return self}, function($ctx1) {$ctx1.fill(self,"copyReplaceFrom:to:with:",{start:start,stop:stop,replacement:replacement},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "crlfSanitized",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._lines())._join_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlfSanitized",{},smalltalk.String)})},
messageSends: ["join:", "lf", "lines"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._shallowCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.String)})},
messageSends: ["shallowCopy"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "digitValue",
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
messageSends: ["ifTrue:", "signal:", "~~", "size", "ifTrue:ifFalse:", ">=", "-", "indexOf:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self.charAt(i));};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeAsHtml",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $(String.fromCharCode(60) + 'div/' + String.fromCharCode(62)).text(self).html(); ;
return self}, function($ctx1) {$ctx1.fill(self,"encodeAsHtml",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "escaped",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return escape(self);
return self}, function($ctx1) {$ctx1.fill(self,"escaped",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "findDelimiters:startingAt:",
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
messageSends: ["to:do:", "size", "do:", "ifTrue:", "=", "at:", "+"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "findTokens:",
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
messageSends: ["new", "ifTrue:ifFalse:", "with:", "isCharacter", "whileTrue:", "skipDelimiters:startingAt:", "findDelimiters:startingAt:", "ifTrue:", "add:", "copyFrom:to:", "-", "<", "<=", "size"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "includesSubString:",
fn: function (subString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.indexOf(subString) != -1 ;
return self}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isCharacter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._size()).__eq((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isCharacter",{},smalltalk.String)})},
messageSends: ["=", "size"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isDigit",
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
messageSends: ["ifFalse:", "signal:", "isCharacter", "and:", "<=", "asciiValue", ">="]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isSeparator",
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
messageSends: ["ifTrue:", "signal:", "~~", "size", "=", "asciiValue"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isString",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isVowel",
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
messageSends: ["and:", "includes:", "asLowercase", "=", "size"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
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
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineIndicesDo:",
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
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "ifTrue:", "value:value:value:", "and:", "=", "ifTrue:ifFalse:", "-", "+", "or:", "<", "<="]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineNumber:",
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
messageSends: ["lineIndicesDo:", "ifTrue:", "copyFrom:to:", "=", "+"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
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
messageSends: ["new", "linesDo:", "add:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "linesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st(self)._copyFrom_to_(start,endWithoutDelimiters));
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock},smalltalk.String)})},
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "match:",
fn: function (aRegexp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.search(aRegexp) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesOf:",
fn: function (aRegularExpression){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.match(aRegularExpression);
return self}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "parseFloat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return parseFloat(self) ;
return self}, function($ctx1) {$ctx1.fill(self,"parseFloat",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $.parseJSON(self) ;
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printNl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
console.log(self);
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["nextPutAll:", "to:do:", "size", "at:", "ifTrue:", "="]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "readStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class())._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"readStream",{},smalltalk.String)})},
messageSends: ["on:", "streamClass", "class"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:with:",
fn: function (aString,anotherString){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(aString,"g"),anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString},smalltalk.String)})},
messageSends: ["replaceRegexp:with:", "fromString:flag:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceRegexp:with:",
fn: function (aRegexp,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.replace(aRegexp, aString);
return self}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split("").reverse().join("");
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.String)})},
messageSends: ["fromString:", "class"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "skipDelimiters:startingAt:",
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
messageSends: ["to:do:", "size", "detect:ifNone:", "=", "at:", "+"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
fn: function (stonWriter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stonWriter)._writeString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"stonOn:",{stonWriter:stonWriter},smalltalk.String)})},
messageSends: ["writeString:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "stonProcessSubObjects:",
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"stonProcessSubObjects:",{block:block},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "subStrings:",
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
messageSends: ["tokenize:", "removeAllSuchThat:", "="]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "tokenize:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split(aString);
return self}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._trimBoth_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{},smalltalk.String)})},
messageSends: ["trimBoth:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth:",
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._trimLeft_(separators))._trimRight_(separators);
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators},smalltalk.String)})},
messageSends: ["trimRight:", "trimLeft:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._trimLeft_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{},smalltalk.String)})},
messageSends: ["trimLeft:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft:",
fn: function (separators){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(_st(_st("^[").__comma(separators)).__comma("]+"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators},smalltalk.String)})},
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._trimRight_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight",{},smalltalk.String)})},
messageSends: ["trimRight:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight:",
fn: function (separators){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(_st(_st("[").__comma(separators)).__comma("]+$"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators},smalltalk.String)})},
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "unescaped",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return unescape(self);
return self}, function($ctx1) {$ctx1.fill(self,"unescaped",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "writeStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class())._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},smalltalk.String)})},
messageSends: ["on:", "streamClass", "class"]}),
smalltalk.String);


smalltalk.addMethod(
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r';
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r\n';
return self}, function($ctx1) {$ctx1.fill(self,"crlf",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromCharCode:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(aString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\n';
return self}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "random",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);;
return self}, function($ctx1) {$ctx1.fill(self,"random",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "randomNotIn:",
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
messageSends: ["whileTrue", "random", "includesSubString:"]}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ' ';
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$StringStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\t';
return self}, function($ctx1) {$ctx1.fill(self,"tab",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(aUTFCharCode);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);


smalltalk.addClass('RunArray', smalltalk.SequenceableCollection, ['runs', 'values', 'lastIndex', 'lastRun', 'lastOffset'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
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
messageSends: ["ifFalse:", "copy", "do:", "addLast:", "isMemberOf:", "ifTrue:", "=", "size", "runs", "runs:values:", ",", "values", "~=", "at:", "copyReplaceFrom:to:with:", "at:put:", "+"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifTrue:", "==", "ifFalse:", "species", "hasEqualElements:", "isMemberOf:", "and:", "values", "runs"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "add:withOccurrences:",
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
messageSends: ["ifTrue:", "<=", "ifTrue:ifFalse:", "copyWith:", "at:put:", "size", "+", "last", "or:", "~=", "="]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "addFirst:",
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
messageSends: ["ifTrue:ifFalse:", ",", "at:put:", "+", "first", "or:", "~=", "=", "size"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "addLast:",
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
messageSends: ["ifTrue:ifFalse:", "copyWith:", "at:put:", "size", "+", "last", "or:", "~=", "="]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "allSatisfy:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._allSatisfy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSatisfy:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["allSatisfy:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "anySatisfy:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._anySatisfy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"anySatisfy:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["anySatisfy:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
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
messageSends: ["at:setRunOffsetAndValue:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
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
messageSends: ["ifFalse:", "errorNonIntegerIndex", "isInteger", "errorSubscriptBounds:", "and:", "<=", "size", ">=", "at:setRunOffsetAndValue:", "ifTrue:", "=", "at:", "with:with:with:", "-", "ifTrue:ifFalse:", "setRuns:setValues:", "copyReplaceFrom:to:with:", "copyFrom:to:", "coalesce"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:setRunOffsetAndValue:",
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
messageSends: ["size", "ifTrue:ifFalse:", "-", "+", "or:", "<", "==", "whileTrue:", "at:", "and:", ">=", "<=", "ifTrue:", ">", "value:value:value:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "coalesce",
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
messageSends: ["whileFalse:", "ifFalse:ifTrue:", "+", "copyReplaceFrom:to:with:", "at:put:", "-", "at:", "=", ">", "size"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class())._runs_values_(_st(_st(self["@runs"])._copy())._contents(),_st(self["@values"])._collect_(aBlock)))._coalesce();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["coalesce", "runs:values:", "contents", "copy", "collect:", "class"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._runs_values_(self["@runs"],self["@values"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copy",{},smalltalk.RunArray)})},
messageSends: ["runs:values:", "class"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
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
messageSends: ["ifTrue:", "new", "<", "at:setRunOffsetAndValue:", "ifTrue:ifFalse:", "with:", "+", "-", "copyFrom:to:", "at:put:", "at:", "size", "=", "runs:values:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceFrom:to:with:",
fn: function (start,stop,replacement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._copyFrom_to_((1),_st(start).__minus((1)))).__comma(replacement)).__comma(_st(self)._copyFrom_to_(_st(stop).__plus((1)),_st(self)._size()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceFrom:to:with:",{start:start,stop:stop,replacement:replacement},smalltalk.RunArray)})},
messageSends: [",", "copyFrom:to:", "+", "size", "-"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyUpThrough:",
fn: function (anElement){
var self=this;
var newValues;
return smalltalk.withContext(function($ctx1) { 
var $1;
newValues=_st(self["@values"])._copyUpThrough_(anElement);
$1=_st(_st(self)._class())._runs_values_(_st(self["@runs"])._copyFrom_to_((1),_st(newValues)._size()),newValues);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyUpThrough:",{anElement:anElement,newValues:newValues},smalltalk.RunArray)})},
messageSends: ["copyUpThrough:", "runs:values:", "copyFrom:to:", "size", "class"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyUpTo:",
fn: function (anElement){
var self=this;
var newValues;
return smalltalk.withContext(function($ctx1) { 
var $1;
newValues=_st(self["@values"])._copyUpTo_(anElement);
$1=_st(_st(self)._class())._runs_values_(_st(self["@runs"])._copyFrom_to_((1),_st(newValues)._size()),newValues);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyUpTo:",{anElement:anElement,newValues:newValues},smalltalk.RunArray)})},
messageSends: ["copyUpTo:", "runs:values:", "copyFrom:to:", "size", "class"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "copyUpToLast:",
fn: function (anElement){
var self=this;
var newValues;
return smalltalk.withContext(function($ctx1) { 
var $1;
newValues=_st(self["@values"])._copyUpToLast_(anElement);
$1=_st(_st(self)._class())._runs_values_(_st(self["@runs"])._copyFrom_to_((1),_st(newValues)._size()),newValues);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyUpToLast:",{anElement:anElement,newValues:newValues},smalltalk.RunArray)})},
messageSends: ["copyUpToLast:", "runs:values:", "copyFrom:to:", "size", "class"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "count:",
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
messageSends: ["runsAndValuesDo:", "ifTrue:", "+", "value:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,exceptionBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._detect_ifNone_(aBlock,exceptionBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,exceptionBlock:exceptionBlock},smalltalk.RunArray)})},
messageSends: ["detect:ifNone:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "detectMax:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._detectMax_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detectMax:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["detectMax:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "detectMin:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._detectMin_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detectMin:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["detectMin:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "detectSum:",
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
messageSends: ["runsAndValuesDo:", "+", "*", "value:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
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
messageSends: ["to:do:", "size", "at:", "whileTrue:", "value:", ">=", "-"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "fillFrom:with:",
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
messageSends: ["writeStream", "new:", "size", "new", "do:", "value:", "ifTrue:ifFalse:", "+", "ifTrue:", "nextPut:", ">", "=", "setRuns:setValues:", "contents"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "findFirst:",
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
messageSends: ["runsAndValuesDo:", "ifTrue:", "value:", "+"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "findLast:",
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
messageSends: ["+", "size", "whileTrue:", "ifTrue:", "detectSum:", "at:", "to:", "value:", ">=", "-"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.RunArray)})},
messageSends: ["at:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
fn: function (stonReader){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stonReader)._parseMapDo_((function(instVarName,value){
return smalltalk.withContext(function($ctx2) {
return _st(self)._instVarNamed_put_(instVarName,value);
}, function($ctx2) {$ctx2.fillBlock({instVarName:instVarName,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"fromSton:",{stonReader:stonReader},smalltalk.RunArray)})},
messageSends: ["parseMapDo:", "instVarNamed:put:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.RunArray)})},
messageSends: ["includes:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "isSorted",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._isSorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSorted",{},smalltalk.RunArray)})},
messageSends: ["isSorted"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "isSortedBy:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._isSortedBy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSortedBy:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["isSortedBy:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "last",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._at_(_st(self["@values"])._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{},smalltalk.RunArray)})},
messageSends: ["at:", "size"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "mapValues:",
fn: function (mapBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@values"]=_st(self["@values"])._collect_(mapBlock);
return self}, function($ctx1) {$ctx1.fill(self,"mapValues:",{mapBlock:mapBlock},smalltalk.RunArray)})},
messageSends: ["collect:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "noneSatisfy:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._noneSatisfy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"noneSatisfy:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["noneSatisfy:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SequenceableCollection.fn.prototype._postCopy.apply(_st(self), []);
self["@runs"]=_st(self["@runs"])._copy();
self["@values"]=_st(self["@values"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RunArray)})},
messageSends: ["postCopy", "copy"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["printNameOn:", "nextPutAll:", "print:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeOf:startingAt:",
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
messageSends: ["at:setRunOffsetAndValue:", "ifFalse:ifTrue:", "to:", "-", "+", "at:", "whileTrue:", "and:", "includes:", "<=", "size", ">="]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
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
messageSends: ["indexOf:ifAbsent:", "value", "ifTrue:ifFalse:", "at:put:", "-", "and:", "=", "at:", "+", "<", "size", ">", "copyWithoutIndex:", "ifTrue:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@runs"]=_st($Array())._new();
self["@values"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},smalltalk.RunArray)})},
messageSends: ["new"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatLast:ifEmpty:",
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
messageSends: ["ifTrue:", "=", "ifTrue:ifFalse:", "copyWith:", "value", "at:put:", "size", "+", "last"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatLastIfEmpty:",
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
messageSends: ["ifTrue:ifFalse:", "copyWith:", "value", "at:put:", "size", "+", "last", "="]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@values"]=_st(self["@values"])._replace_(aBlock);
_st(self)._coalesce();
return self}, function($ctx1) {$ctx1.fill(self,"replace:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["replace:", "coalesce"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseDo:",
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
messageSends: ["size", "whileTrue:", "at:", "-", "value:", ">=", ">"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "runLengthAt:",
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
messageSends: ["at:setRunOffsetAndValue:", "-", "at:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "runs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@runs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"runs",{},smalltalk.RunArray)})},
messageSends: []}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "runsAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@runs"])._with_do_(self["@values"],aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"runsAndValuesDo:",{aBlock:aBlock},smalltalk.RunArray)})},
messageSends: ["with:do:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "runsFrom:to:do:",
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
messageSends: ["ifTrue:", ">", "at:setRunOffsetAndValue:", "-", "+", "at:", "whileTrue:", "value:", "<="]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
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
messageSends: ["writeStream", "new:", "size", "runsAndValuesDo:", "ifTrue:", "add:", "value:", "coalesce", "runs:values:", "contents", "class"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "setRuns:setValues:",
fn: function (newRuns,newValues){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lastIndex"]=nil;
self["@runs"]=_st(newRuns)._asArray();
self["@values"]=_st(newValues)._asArray();
return self}, function($ctx1) {$ctx1.fill(self,"setRuns:setValues:",{newRuns:newRuns,newValues:newValues},smalltalk.RunArray)})},
messageSends: ["asArray"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
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
messageSends: ["to:do:", "size", "+", "at:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "stonOn:",
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
messageSends: ["writeObject:streamMap:", "do:", "at:put:", "asSymbol", "instVarNamed:", "allInstVarNames", "class"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "storeOn:",
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
messageSends: ["nextPut:", "nextPutAll:", "name", "class", "storeOn:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@values"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.RunArray)})},
messageSends: []}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "withStartStopAndValueDo:",
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
messageSends: ["with:do:", "-", "+", "value:value:value:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "writeOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPut_(_st(self["@runs"])._size());
_st((1))._to_do_(_st(self["@runs"])._size(),(function(x){
return smalltalk.withContext(function($ctx2) {
_st(aStream)._nextPut_(_st(self["@runs"])._at_(x));
return _st(aStream)._nextPut_(_st(self["@values"])._at_(x));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeOn:",{aStream:aStream},smalltalk.RunArray)})},
messageSends: ["nextPut:", "size", "to:do:", "at:"]}),
smalltalk.RunArray);

smalltalk.addMethod(
smalltalk.method({
selector: "writeScanOn:",
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
messageSends: ["nextPut:", "do:", "printOn:", "space", "skip:", "writeScanOn:"]}),
smalltalk.RunArray);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
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
messageSends: ["fromSton:", "new", "yourself"]}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._runs_values_(_st($Array())._new(),_st($Array())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.RunArray.klass)})},
messageSends: ["runs:values:", "new"]}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (aSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._new_withAll_(aSize,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aSize:aSize},smalltalk.RunArray.klass)})},
messageSends: ["new:withAll:"]}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:withAll:",
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
messageSends: ["ifTrue:", "new", "=", "runs:values:", "with:"]}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFrom:",
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
messageSends: ["writeStream", "new:", "//", "size", "new", "do:", "ifTrue:ifFalse:", "+", "ifTrue:", "nextPut:", ">", "=", "setRuns:setValues:", "contents", "basicNew"]}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "readFrom:",
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
messageSends: ["nextWord", "new:", "to:do:", "at:put:", "runs:values:"]}),
smalltalk.RunArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "runs:values:",
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
messageSends: ["basicNew", "setRuns:setValues:"]}),
smalltalk.RunArray.klass);


smalltalk.addClass('Text', smalltalk.SequenceableCollection, ['string', 'runs'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
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
messageSends: ["ifTrue:ifFalse:", "string", "asString", "isText", "string:runs:", ","]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifTrue:", "or:", "=", "string", "==", "isText", "isString"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "append:",
fn: function (stringOrText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._replaceFrom_to_with_(_st(_st(self["@string"])._size()).__plus((1)),_st(self["@string"])._size(),stringOrText);
return self}, function($ctx1) {$ctx1.fill(self,"append:",{stringOrText:stringOrText},smalltalk.Text)})},
messageSends: ["replaceFrom:to:with:", "+", "size"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.Text)})},
messageSends: ["asNumber"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@string"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Text)})},
messageSends: []}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "asStringOrText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asStringOrText",{},smalltalk.Text)})},
messageSends: []}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "asText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asText",{},smalltalk.Text)})},
messageSends: []}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index},smalltalk.Text)})},
messageSends: ["at:"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (index,character){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._at_put_(index,character);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{index:index,character:character},smalltalk.Text)})},
messageSends: ["at:put:"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
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
messageSends: ["ifTrue:ifFalse:", "size", ">", "<", "string:runs:", "copyFrom:to:", "class"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceAll:with:",
fn: function (aString,anotherString){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Text(){return smalltalk.Text||(typeof Text=="undefined"?nil:Text)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Text())._string_runs_(_st(_st($String())._fromString_(self["@string"]))._replace_with_(aString,anotherString),self["@runs"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceAll:with:",{aString:aString,anotherString:anotherString},smalltalk.Text)})},
messageSends: ["string:runs:", "replace:with:", "fromString:"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceFrom:to:with:",
fn: function (start,stop,aTextOrString){
var self=this;
var txt;
return smalltalk.withContext(function($ctx1) { 
var $1;
txt=_st(aTextOrString)._asText();
$1=_st(_st(self)._class())._string_runs_(_st(self["@string"])._copyReplaceFrom_to_with_(start,stop,_st(txt)._string()),_st(self["@runs"])._copyReplaceFrom_to_with_(start,stop,_st(txt)._runs()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceFrom:to:with:",{start:start,stop:stop,aTextOrString:aTextOrString,txt:txt},smalltalk.Text)})},
messageSends: ["asText", "string:runs:", "copyReplaceFrom:to:with:", "string", "runs", "class"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceTokens:with:",
fn: function (oldSubstring,newSubstring){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copyReplaceAll_with_asTokens_(oldSubstring,newSubstring,true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceTokens:with:",{oldSubstring:oldSubstring,newSubstring:newSubstring},smalltalk.Text)})},
messageSends: ["copyReplaceAll:with:asTokens:"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Text)})},
messageSends: ["copy"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "findString:startingAt:",
fn: function (aString,start){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._findString_startingAt_(_st(aString)._asString(),start);
return $1;
}, function($ctx1) {$ctx1.fill(self,"findString:startingAt:",{aString:aString,start:start},smalltalk.Text)})},
messageSends: ["findString:startingAt:", "asString"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "findString:startingAt:caseSensitive:",
fn: function (aString,start,caseSensitive){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._findString_startingAt_caseSensitive_(_st(aString)._asString(),start,caseSensitive);
return $1;
}, function($ctx1) {$ctx1.fill(self,"findString:startingAt:caseSensitive:",{aString:aString,start:start,caseSensitive:caseSensitive},smalltalk.Text)})},
messageSends: ["findString:startingAt:caseSensitive:", "asString"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "howManyMatch:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._string())._howManyMatch_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"howManyMatch:",{aString:aString},smalltalk.Text)})},
messageSends: ["howManyMatch:", "string"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "initialStyle",
fn: function (){
var self=this;
function $TextStyle(){return smalltalk.TextStyle||(typeof TextStyle=="undefined"?nil:TextStyle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TextStyle())._default();
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialStyle",{},smalltalk.Text)})},
messageSends: ["default"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "isText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isText",{},smalltalk.Text)})},
messageSends: []}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "lineCount",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._lineCount();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineCount",{},smalltalk.Text)})},
messageSends: ["lineCount"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SequenceableCollection.fn.prototype._postCopy.apply(_st(self), []);
self["@string"]=_st(self["@string"])._copy();
self["@runs"]=_st(self["@runs"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.Text)})},
messageSends: ["postCopy", "copy"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "prepend:",
fn: function (stringOrText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._replaceFrom_to_with_((1),(0),stringOrText);
return self}, function($ctx1) {$ctx1.fill(self,"prepend:",{stringOrText:stringOrText},smalltalk.Text)})},
messageSends: ["replaceFrom:to:with:"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._printNameOn_(aStream);
$1=aStream;
_st($1)._nextPutAll_(" for ");
$2=_st($1)._print_(self["@string"]);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Text)})},
messageSends: ["printNameOn:", "nextPutAll:", "print:"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeOf:startingAt:",
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
messageSends: ["ifTrue:ifFalse:", "to:", "-", "rangeOf:startingAt:", "=", "size"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceFrom:to:with:",
fn: function (start,stop,aText){
var self=this;
var txt;
return smalltalk.withContext(function($ctx1) { 
txt=_st(aText)._asText();
self["@string"]=_st(self["@string"])._copyReplaceFrom_to_with_(start,stop,_st(txt)._string());
self["@runs"]=_st(self["@runs"])._copyReplaceFrom_to_with_(start,stop,_st(txt)._runs());
return self}, function($ctx1) {$ctx1.fill(self,"replaceFrom:to:with:",{start:start,stop:stop,aText:aText,txt:txt},smalltalk.Text)})},
messageSends: ["asText", "copyReplaceFrom:to:with:", "string", "runs"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceFrom:to:with:startingAt:",
fn: function (start,stop,replacement,repStart){
var self=this;
var rep,newRepRuns;
return smalltalk.withContext(function($ctx1) { 
rep=_st(replacement)._asText();
_st(self["@string"])._replaceFrom_to_with_startingAt_(start,stop,_st(rep)._string(),repStart);
newRepRuns=_st(_st(rep)._runs())._copyFrom_to_(repStart,_st(_st(repStart).__plus(stop)).__minus(start));
self["@runs"]=_st(self["@runs"])._copyReplaceFrom_to_with_(start,stop,newRepRuns);
return self}, function($ctx1) {$ctx1.fill(self,"replaceFrom:to:with:startingAt:",{start:start,stop:stop,replacement:replacement,repStart:repStart,rep:rep,newRepRuns:newRepRuns},smalltalk.Text)})},
messageSends: ["asText", "replaceFrom:to:with:startingAt:", "string", "copyFrom:to:", "-", "+", "runs", "copyReplaceFrom:to:with:"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "runs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@runs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"runs",{},smalltalk.Text)})},
messageSends: []}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "runs:",
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
messageSends: ["ifFalse:", "error:", "=", "size"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "setString:setRuns:",
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@string"]=aString;
self["@runs"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"setString:setRuns:",{aString:aString,anArray:anArray},smalltalk.Text)})},
messageSends: []}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "setString:setRunsChecking:",
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
messageSends: ["ifNil:", "asText", "ifFalse:", "isKindOf:", "=", "size", "values", "runs"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@string"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Text)})},
messageSends: ["size"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "storeOn:",
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
messageSends: ["nextPutAll:", "store:", "nextPut:"]}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "string",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@string"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"string",{},smalltalk.Text)})},
messageSends: []}),
smalltalk.Text);

smalltalk.addMethod(
smalltalk.method({
selector: "string:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@string"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"string:",{aString:aString},smalltalk.Text)})},
messageSends: []}),
smalltalk.Text);


smalltalk.addMethod(
smalltalk.method({
selector: "fromSton:",
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
messageSends: ["fromSton:", "new", "yourself"]}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._string_attributes_(aString,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.Text.klass)})},
messageSends: ["string:attributes:"]}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._new_((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Text.klass)})},
messageSends: ["new:"]}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (stringSize){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._fromString_(_st($String())._new_(stringSize));
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{stringSize:stringSize},smalltalk.Text.klass)})},
messageSends: ["fromString:", "new:"]}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamContents:",
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
messageSends: ["on:", "new:", "value:", "contents"]}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "string:attribute:",
fn: function (aString,att){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._string_attributes_(aString,_st($Array())._with_(att));
return $1;
}, function($ctx1) {$ctx1.fill(self,"string:attribute:",{aString:aString,att:att},smalltalk.Text.klass)})},
messageSends: ["string:attributes:", "with:"]}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "string:attributes:",
fn: function (aString,atts){
var self=this;
function $RunArray(){return smalltalk.RunArray||(typeof RunArray=="undefined"?nil:RunArray)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._string_runs_(aString,_st($RunArray())._new_withAll_(_st(aString)._size(),atts));
return $1;
}, function($ctx1) {$ctx1.fill(self,"string:attributes:",{aString:aString,atts:atts},smalltalk.Text.klass)})},
messageSends: ["string:runs:", "new:withAll:", "size"]}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "string:emphasis:",
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
messageSends: ["ifTrue:", "halt:", "string:runs:", "new:withAll:", "size", "with:", "fontNumber:", "new", "isNumber", "string:attributes:"]}),
smalltalk.Text.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "string:runs:",
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._basicNew())._setString_setRuns_(aString,anArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"string:runs:",{aString:aString,anArray:anArray},smalltalk.Text.klass)})},
messageSends: ["setString:setRuns:", "basicNew"]}),
smalltalk.Text.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifFalse:", "=", "class", "size", "do:", "includes:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
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
messageSends: []}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.Set)})},
messageSends: ["copy"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._withAll_(_st(self["@elements"])._collect_(aBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},smalltalk.Set)})},
messageSends: ["withAll:", "collect:", "class"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Set)})},
messageSends: ["detect:ifNone:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Set)})},
messageSends: ["do:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.Set)})},
messageSends: ["includes:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Collection.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Set)})},
messageSends: ["initialize"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.Set)})},
messageSends: ["remove:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
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
messageSends: ["new", "class", "do:", "ifTrue:", "add:", "value:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Set)})},
messageSends: ["size"]}),
smalltalk.Set);



smalltalk.addClass('Queue', smalltalk.Object, ['read', 'readIndex', 'write'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@read"]=_st($OrderedCollection())._new();
self["@write"]=_st($OrderedCollection())._new();
self["@readIndex"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Queue)})},
messageSends: ["initialize", "new"]}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
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
messageSends: ["nextIfAbsent:", "error:"]}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextIfAbsent:",
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
messageSends: ["at:ifAbsent:", "ifTrue:", ">", "value", "isEmpty", "new", "first", "at:put:", "+"]}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@write"])._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.Queue)})},
messageSends: ["add:"]}),
smalltalk.Queue);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.compile(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.RegularExpression)})},
messageSends: []}),
smalltalk.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "exec:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.exec(aString) || nil;
return self}, function($ctx1) {$ctx1.fill(self,"exec:",{aString:aString},smalltalk.RegularExpression)})},
messageSends: []}),
smalltalk.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "test:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.test(aString);
return self}, function($ctx1) {$ctx1.fill(self,"test:",{aString:aString},smalltalk.RegularExpression)})},
messageSends: []}),
smalltalk.RegularExpression);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._fromString_flag_(aString,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.RegularExpression.klass)})},
messageSends: ["fromString:flag:"]}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:flag:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new RegExp(aString, anotherString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:flag:",{aString:aString,anotherString:anotherString},smalltalk.RegularExpression.klass)})},
messageSends: []}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "<<",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._write_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"<<",{anObject:anObject},smalltalk.Stream)})},
messageSends: ["write:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._position()).__eq(_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.Stream)})},
messageSends: ["=", "size", "position"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._position()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atStart",{},smalltalk.Stream)})},
messageSends: ["=", "position"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@collection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._collection())._copyFrom_to_((1),_st(self)._streamSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.Stream)})},
messageSends: ["copyFrom:to:", "streamSize", "collection"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
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
messageSends: ["whileFalse:", "value:", "next", "atEnd"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},smalltalk.Stream)})},
messageSends: ["=", "size"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "isStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isStream",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
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
messageSends: ["ifTrue:ifFalse:", "position:", "+", "position", "at:", "atEnd"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
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
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "add:", "next", "atEnd"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._position_(_st(_st(self)._position()).__plus((1)));
_st(_st(self)._collection())._at_put_(_st(self)._position(),anObject);
_st(self)._setStreamSize_(_st(_st(self)._streamSize())._max_(_st(self)._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.Stream)})},
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._nextPut_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aCollection:aCollection},smalltalk.Stream)})},
messageSends: ["do:", "nextPut:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPut_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},smalltalk.Stream)})},
messageSends: ["nextPut:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
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
messageSends: ["ifFalse:", "at:", "+", "position", "collection", "atEnd"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
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
messageSends: ["ifNil:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{anInteger:anInteger},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "print:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._printOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"print:",{anObject:anObject},smalltalk.Stream)})},
messageSends: ["printOn:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._position_((0));
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.Stream)})},
messageSends: ["position:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "resetContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._reset();
_st(self)._setStreamSize_((0));
return self}, function($ctx1) {$ctx1.fill(self,"resetContents",{},smalltalk.Stream)})},
messageSends: ["reset", "setStreamSize:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setCollection:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@collection"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"setCollection:",{aCollection:aCollection},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setStreamSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@streamSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"setStreamSize:",{anInteger:anInteger},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setToEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._position_(_st(self)._size());
return self}, function($ctx1) {$ctx1.fill(self,"setToEnd",{},smalltalk.Stream)})},
messageSends: ["position:", "size"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._streamSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Stream)})},
messageSends: ["streamSize"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "skip:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._position_(_st(_st(_st(self)._position()).__plus(anInteger))._min_max_(_st(self)._size(),(0)));
return self}, function($ctx1) {$ctx1.fill(self,"skip:",{anInteger:anInteger},smalltalk.Stream)})},
messageSends: ["position:", "min:max:", "size", "+", "position"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "streamSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@streamSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamSize",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "write:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._putOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"write:",{anObject:anObject},smalltalk.Stream)})},
messageSends: ["putOn:"]}),
smalltalk.Stream);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"]}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextPutAll_(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.StringStream)})},
messageSends: ["nextPutAll:", "cr"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextPutAll_(_st($String())._crlf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlf",{},smalltalk.StringStream)})},
messageSends: ["nextPutAll:", "crlf"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextPutAll_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.StringStream)})},
messageSends: ["nextPutAll:", "lf"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
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
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", ",", "next", "atEnd"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextLine",
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
messageSends: ["ifTrue:", "atEnd", "whileTrue:", ",", "next", "~~", "cr"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},smalltalk.StringStream)})},
messageSends: ["nextPutAll:"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
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
messageSends: ["ifTrue:ifFalse:", "setCollection:", ",", "collection", "copyFrom:to:", "position", "+", "size", "atEnd", "position:", "setStreamSize:", "max:", "streamSize"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},smalltalk.StringStream)})},
messageSends: ["nextPutAll:"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPut_(" ");
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.StringStream)})},
messageSends: ["nextPut:"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._nextPutAll_(_st($String())._tab());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tab",{},smalltalk.StringStream)})},
messageSends: ["nextPutAll:", "tab"]}),
smalltalk.StringStream);



smalltalk.addClass('TextStream', smalltalk.StringStream, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._collection())._setString_setRuns_("",_st($Array())._new());
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.TextStream)})},
messageSends: ["setString:setRuns:", "new", "collection"]}),
smalltalk.TextStream);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["setCollection:", "basicNew", "setStreamSize:", "size", "yourself"]}),
smalltalk.TextStream.klass);


smalltalk.addClass('TextAttribute', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "dominates:",
fn: function (another){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"dominates:",{another:another},smalltalk.TextAttribute)})},
messageSends: []}),
smalltalk.TextAttribute);

smalltalk.addMethod(
smalltalk.method({
selector: "emphasisCode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"emphasisCode",{},smalltalk.TextAttribute)})},
messageSends: []}),
smalltalk.TextAttribute);

smalltalk.addMethod(
smalltalk.method({
selector: "emphasizeScanner:",
fn: function (scanner){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"emphasizeScanner:",{scanner:scanner},smalltalk.TextAttribute)})},
messageSends: []}),
smalltalk.TextAttribute);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.TextAttribute)})},
messageSends: []}),
smalltalk.TextAttribute);

smalltalk.addMethod(
smalltalk.method({
selector: "set",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"set",{},smalltalk.TextAttribute)})},
messageSends: []}),
smalltalk.TextAttribute);



smalltalk.addClass('TextEmphasis', smalltalk.TextAttribute, ['emphasisCode', 'setMode'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
fn: function (other){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(other)._class()).__eq_eq(_st(self)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(other)._emphasisCode()).__eq(self["@emphasisCode"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{other:other},smalltalk.TextEmphasis)})},
messageSends: ["and:", "=", "emphasisCode", "==", "class"]}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "dominatedByCmd0",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"dominatedByCmd0",{},smalltalk.TextEmphasis)})},
messageSends: []}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "dominates:",
fn: function (other){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self["@emphasisCode"]).__eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(other)._dominatedByCmd0();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
return true;
};
$2=_st(_st(_st(other)._class()).__eq_eq(_st(self)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@emphasisCode"]).__eq(_st(other)._emphasisCode());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"dominates:",{other:other},smalltalk.TextEmphasis)})},
messageSends: ["ifTrue:", "and:", "dominatedByCmd0", "=", "emphasisCode", "==", "class"]}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "emphasisCode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@emphasisCode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"emphasisCode",{},smalltalk.TextEmphasis)})},
messageSends: []}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "emphasisCode:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@emphasisCode"]=int;
self["@setMode"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"emphasisCode:",{int:int},smalltalk.TextEmphasis)})},
messageSends: []}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "emphasizeScanner:",
fn: function (scanner){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(scanner)._addEmphasis_(self["@emphasisCode"]);
return self}, function($ctx1) {$ctx1.fill(self,"emphasizeScanner:",{scanner:scanner},smalltalk.TextEmphasis)})},
messageSends: ["addEmphasis:"]}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@emphasisCode"])._hash();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.TextEmphasis)})},
messageSends: ["hash"]}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (strm){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.TextAttribute.fn.prototype._printOn_.apply(_st(self), [strm]);
$1=strm;
_st($1)._nextPutAll_(" code: ");
$2=_st($1)._print_(self["@emphasisCode"]);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{strm:strm},smalltalk.TextEmphasis)})},
messageSends: ["printOn:", "nextPutAll:", "print:"]}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "set",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@setMode"])._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@emphasisCode"]).__tild_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"set",{},smalltalk.TextEmphasis)})},
messageSends: ["and:", "~="]}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "turnOff",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@setMode"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"turnOff",{},smalltalk.TextEmphasis)})},
messageSends: []}),
smalltalk.TextEmphasis);

smalltalk.addMethod(
smalltalk.method({
selector: "writeScanOn:",
fn: function (strm){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(self["@emphasisCode"]).__eq((1));
if(smalltalk.assert($1)){
_st(strm)._nextPut_("b");
};
$2=_st(self["@emphasisCode"]).__eq((2));
if(smalltalk.assert($2)){
_st(strm)._nextPut_("i");
};
$3=_st(self["@emphasisCode"]).__eq((0));
if(smalltalk.assert($3)){
_st(strm)._nextPut_("n");
};
$4=_st(self["@emphasisCode"]).__eq((16));
if(smalltalk.assert($4)){
_st(strm)._nextPut_("=");
};
$5=_st(self["@emphasisCode"]).__eq((4));
if(smalltalk.assert($5)){
_st(strm)._nextPut_("u");
};
return self}, function($ctx1) {$ctx1.fill(self,"writeScanOn:",{strm:strm},smalltalk.TextEmphasis)})},
messageSends: ["ifTrue:", "nextPut:", "="]}),
smalltalk.TextEmphasis);


smalltalk.addMethod(
smalltalk.method({
selector: "bold",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._emphasisCode_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bold",{},smalltalk.TextEmphasis.klass)})},
messageSends: ["emphasisCode:", "new"]}),
smalltalk.TextEmphasis.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "italic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._emphasisCode_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"italic",{},smalltalk.TextEmphasis.klass)})},
messageSends: ["emphasisCode:", "new"]}),
smalltalk.TextEmphasis.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "narrow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"narrow",{},smalltalk.TextEmphasis.klass)})},
messageSends: []}),
smalltalk.TextEmphasis.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "normal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._emphasisCode_((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"normal",{},smalltalk.TextEmphasis.klass)})},
messageSends: ["emphasisCode:", "new"]}),
smalltalk.TextEmphasis.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "struckOut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._emphasisCode_((16));
return $1;
}, function($ctx1) {$ctx1.fill(self,"struckOut",{},smalltalk.TextEmphasis.klass)})},
messageSends: ["emphasisCode:", "new"]}),
smalltalk.TextEmphasis.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "underlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._emphasisCode_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"underlined",{},smalltalk.TextEmphasis.klass)})},
messageSends: ["emphasisCode:", "new"]}),
smalltalk.TextEmphasis.klass);


