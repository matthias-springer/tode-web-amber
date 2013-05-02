smalltalk.addPackage('STON-Core');
smalltalk.addClass('STON', smalltalk.Object, [], 'STON-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "fromStream:",
category: 'convenience',
fn: function (readStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._reader())._on_(readStream))._next();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromStream:",{readStream:readStream},smalltalk.STON.klass)})},
args: ["readStream"],
source: "fromStream: readStream\x0a\x09^ (self reader on: readStream) next",
messageSends: ["next", "on:", "reader"],
referencedClasses: []
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'convenience',
fn: function (string){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._fromStream_(_st(string)._readStream());
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{string:string},smalltalk.STON.klass)})},
args: ["string"],
source: "fromString: string\x0a\x09^ self fromStream: string readStream",
messageSends: ["fromStream:", "readStream"],
referencedClasses: []
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonWriter",
category: 'accessing',
fn: function (){
var self=this;
function $STONWriter(){return smalltalk.STONWriter||(typeof STONWriter=="undefined"?nil:STONWriter)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($STONWriter())._new();
_st($2)._jsonMode_(true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonWriter",{},smalltalk.STON.klass)})},
args: [],
source: "jsonWriter\x0a\x09^ STONWriter new\x0a\x09\x09  jsonMode: true;\x0a\x09\x09  yourself",
messageSends: ["jsonMode:", "new", "yourself"],
referencedClasses: ["STONWriter"]
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listClass",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Array();
return $1;
}, function($ctx1) {$ctx1.fill(self,"listClass",{},smalltalk.STON.klass)})},
args: [],
source: "listClass\x0a\x09^ Array",
messageSends: [],
referencedClasses: ["Array"]
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mapClass",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Dictionary();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapClass",{},smalltalk.STON.klass)})},
args: [],
source: "mapClass\x0a\x09^ Dictionary",
messageSends: [],
referencedClasses: ["Dictionary"]
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "put:asJsonOnStream:",
category: 'convenience',
fn: function (object,stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._jsonWriter())._on_(stream))._nextPut_(object);
return self}, function($ctx1) {$ctx1.fill(self,"put:asJsonOnStream:",{object:object,stream:stream},smalltalk.STON.klass)})},
args: ["object", "stream"],
source: "put: object asJsonOnStream: stream\x0a\x09(self jsonWriter on: stream) nextPut: object",
messageSends: ["nextPut:", "on:", "jsonWriter"],
referencedClasses: []
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "put:asJsonOnStreamPretty:",
category: 'convenience',
fn: function (object,stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._jsonWriter())._on_(stream);
_st($1)._prettyPrint_(true);
$2=_st($1)._nextPut_(object);
return self}, function($ctx1) {$ctx1.fill(self,"put:asJsonOnStreamPretty:",{object:object,stream:stream},smalltalk.STON.klass)})},
args: ["object", "stream"],
source: "put: object asJsonOnStreamPretty: stream\x0a\x09(self jsonWriter on: stream)\x0a\x09\x09prettyPrint: true; \x0a\x09\x09nextPut: object",
messageSends: ["prettyPrint:", "on:", "jsonWriter", "nextPut:"],
referencedClasses: []
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "put:onStream:",
category: 'convenience',
fn: function (object,stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._writer())._on_(stream))._nextPut_(object);
return self}, function($ctx1) {$ctx1.fill(self,"put:onStream:",{object:object,stream:stream},smalltalk.STON.klass)})},
args: ["object", "stream"],
source: "put: object onStream: stream\x0a\x09(self writer on: stream) nextPut: object",
messageSends: ["nextPut:", "on:", "writer"],
referencedClasses: []
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "put:onStreamPretty:",
category: 'convenience',
fn: function (object,stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._writer())._on_(stream);
_st($1)._prettyPrint_(true);
$2=_st($1)._nextPut_(object);
return self}, function($ctx1) {$ctx1.fill(self,"put:onStreamPretty:",{object:object,stream:stream},smalltalk.STON.klass)})},
args: ["object", "stream"],
source: "put: object onStreamPretty: stream\x0a\x09(self writer on: stream)\x0a\x09\x09prettyPrint: true; \x0a\x09\x09nextPut: object",
messageSends: ["prettyPrint:", "on:", "writer", "nextPut:"],
referencedClasses: []
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "reader",
category: 'accessing',
fn: function (){
var self=this;
function $STONReader(){return smalltalk.STONReader||(typeof STONReader=="undefined"?nil:STONReader)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STONReader())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"reader",{},smalltalk.STON.klass)})},
args: [],
source: "reader\x0a\x09^ STONReader new",
messageSends: ["new"],
referencedClasses: ["STONReader"]
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toJsonString:",
category: 'convenience',
fn: function (object){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(self)._put_asJsonOnStream_(object,stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"toJsonString:",{object:object},smalltalk.STON.klass)})},
args: ["object"],
source: "toJsonString: object\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09self put: object asJsonOnStream: stream ]",
messageSends: ["streamContents:", "put:asJsonOnStream:"],
referencedClasses: ["String"]
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toJsonStringPretty:",
category: 'convenience',
fn: function (object){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(self)._put_asJsonOnStreamPretty_(object,stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"toJsonStringPretty:",{object:object},smalltalk.STON.klass)})},
args: ["object"],
source: "toJsonStringPretty: object\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09self put: object asJsonOnStreamPretty: stream ]",
messageSends: ["streamContents:", "put:asJsonOnStreamPretty:"],
referencedClasses: ["String"]
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toString:",
category: 'convenience',
fn: function (object){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(self)._put_onStream_(object,stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"toString:",{object:object},smalltalk.STON.klass)})},
args: ["object"],
source: "toString: object\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09self put: object onStream: stream ]",
messageSends: ["streamContents:", "put:onStream:"],
referencedClasses: ["String"]
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toStringPretty:",
category: 'convenience',
fn: function (object){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(self)._put_onStreamPretty_(object,stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"toStringPretty:",{object:object},smalltalk.STON.klass)})},
args: ["object"],
source: "toStringPretty: object\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09self put: object onStreamPretty: stream ]",
messageSends: ["streamContents:", "put:onStreamPretty:"],
referencedClasses: ["String"]
}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "writer",
category: 'accessing',
fn: function (){
var self=this;
function $STONWriter(){return smalltalk.STONWriter||(typeof STONWriter=="undefined"?nil:STONWriter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STONWriter())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"writer",{},smalltalk.STON.klass)})},
args: [],
source: "writer\x0a\x09^ STONWriter new",
messageSends: ["new"],
referencedClasses: ["STONWriter"]
}),
smalltalk.STON.klass);


smalltalk.addClass('STONReader', smalltalk.Object, ['readStream', 'objects', 'classes', 'unresolvedReferences', 'stringStream'], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@readStream"])._atEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.STONReader)})},
args: [],
source: "atEnd\x0a\x09^ readStream atEnd",
messageSends: ["atEnd"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@readStream"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@readStream"])._close();
self["@readStream"]=nil;
self["@readStream"];
};
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.STONReader)})},
args: [],
source: "close\x0a\x09readStream ifNotNil: [\x0a\x09\x09readStream close.\x0a\x09\x09readStream := nil ]",
messageSends: ["ifNotNil:", "close"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "consumeWhitespace",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@readStream"])._atEnd())._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self["@readStream"])._peek())._isSeparator();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@readStream"])._next();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"consumeWhitespace",{},smalltalk.STONReader)})},
args: [],
source: "consumeWhitespace\x0a\x09\x22Strip whitespaces from the input stream.\x22\x0a\x0a\x09[ readStream atEnd not and: [ readStream peek isSeparator ] ]\x0a\x09\x09whileTrue: [ readStream next ]",
messageSends: ["whileTrue:", "next", "and:", "isSeparator", "peek", "not", "atEnd"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
category: 'error handling',
fn: function (aString){
var self=this;
function $STONReaderError(){return smalltalk.STONReaderError||(typeof STONReaderError=="undefined"?nil:STONReaderError)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STONReaderError())._signal_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},smalltalk.STONReader)})},
args: ["aString"],
source: "error: aString\x0a\x09^ STONReaderError signal: aString",
messageSends: ["signal:"],
referencedClasses: ["STONReaderError"]
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "expectChar:",
category: 'private',
fn: function (character){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._matchChar_(character);
if(! smalltalk.assert($1)){
_st(self)._error_(_st(_st(character)._asString()).__comma(" expected"));
};
return self}, function($ctx1) {$ctx1.fill(self,"expectChar:",{character:character},smalltalk.STONReader)})},
args: ["character"],
source: "expectChar: character\x0a\x09\x22Expect character and consume input and optional whitespace at the end,\x0a\x09 throw an error otherwise.\x22\x0a\x0a\x09(self matchChar: character)\x0a\x09\x09ifFalse: [ self error: character asString, ' expected' ]",
messageSends: ["ifFalse:", "error:", ",", "asString", "matchChar:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@objects"]=_st($Dictionary())._new();
self["@classes"]=_st($Dictionary())._new();
self["@unresolvedReferences"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.STONReader)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22TODO: had IdentityDicitionary here before\x22\x0a\x09objects := Dictionary new.\x0a\x09classes := Dictionary new.\x0a\x09unresolvedReferences := 0",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "isClassChar:",
category: 'private',
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")._includes_(char);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isClassChar:",{char:char},smalltalk.STONReader)})},
args: ["char"],
source: "isClassChar: char\x0a\x09^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' includes: char",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "isClassStartChar:",
category: 'private',
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("ABCDEFGHIJKLMNOPQRSTUVWXYZ")._includes_(char);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isClassStartChar:",{char:char},smalltalk.STONReader)})},
args: ["char"],
source: "isClassStartChar: char\x0a\x09^ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' includes: char",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "isSimpleSymbolChar:",
category: 'private',
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./")._includes_(char);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbolChar:",{char:char},smalltalk.STONReader)})},
args: ["char"],
source: "isSimpleSymbolChar: char\x0a\x09^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./' includes: char",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupClass:",
category: 'private',
fn: function (name){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(_st($Smalltalk())._current())._at_ifPresent_(name,(function(cls){
return smalltalk.withContext(function($ctx2) {
$1=cls;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({cls:cls},$ctx1)})}));
$2=_st(self["@classes"])._at_ifAbsentPut_(name,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Object())._allSubclasses())._detect_ifNone_((function(cls){
return smalltalk.withContext(function($ctx3) {
return _st(_st(cls)._stonName()).__eq_eq(name);
}, function($ctx3) {$ctx3.fillBlock({cls:cls},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._error_(_st("Cannot resolve cls named ").__comma(_st(name)._printString()));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lookupClass:",{name:name},smalltalk.STONReader)})},
args: ["name"],
source: "lookupClass: name\x0a\x09Smalltalk current \x0a\x09\x09at: name \x0a\x09\x09ifPresent: [ :cls | ^ cls ].\x0a\x09^ classes \x0a\x09\x09at: name \x0a\x09\x09ifAbsentPut: [\x0a\x09\x09\x09Object allSubclasses \x0a\x09\x09\x09\x09detect: [ :cls | cls stonName == name ] \x0a\x09\x09\x09\x09ifNone: [ self error: 'Cannot resolve cls named ', name printString ] ]",
messageSends: ["at:ifPresent:", "current", "at:ifAbsentPut:", "detect:ifNone:", "==", "stonName", "error:", ",", "printString", "allSubclasses"],
referencedClasses: ["Smalltalk", "Object"]
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "match:do:",
category: 'private',
fn: function (string,block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(string)._allSatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._matchChar_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
if(smalltalk.assert($1)){
_st(block)._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"match:do:",{string:string,block:block},smalltalk.STONReader)})},
args: ["string", "block"],
source: "match: string do: block\x0a\x09\x22Try to read and consume string and execute block if successful.\x0a\x09Else do nothing (but do not back up)\x22\x0a\x09 \x0a\x09(string allSatisfy: [ :each | self matchChar: each ] )\x0a\x09\x09ifTrue: [ block value ]",
messageSends: ["ifTrue:", "value", "allSatisfy:", "matchChar:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "matchChar:",
category: 'private',
fn: function (character){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self["@readStream"])._peek()).__eq(character);
if(smalltalk.assert($2)){
_st(self["@readStream"])._next();
_st(self)._consumeWhitespace();
$1=true;
} else {
$1=false;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"matchChar:",{character:character},smalltalk.STONReader)})},
args: ["character"],
source: "matchChar: character\x0a\x09\x22Tries to match character, consume input and \x0a\x09answer true if successful and consumes whitespace at the end.\x22\x0a\x09\x0a\x09^ readStream peek = character\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09readStream next.\x0a\x09\x09\x09self consumeWhitespace.\x0a\x09\x09\x09true ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09false ]",
messageSends: ["ifTrue:ifFalse:", "next", "consumeWhitespace", "=", "peek"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "newReference",
category: 'private',
fn: function (){
var self=this;
var index,reference;
function $STONReference(){return smalltalk.STONReference||(typeof STONReference=="undefined"?nil:STONReference)}
return smalltalk.withContext(function($ctx1) { 
var $1;
index=_st(_st(self["@objects"])._size()).__plus((1));
reference=_st($STONReference())._index_(index);
_st(self["@objects"])._at_put_(index,reference);
$1=reference;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newReference",{index:index,reference:reference},smalltalk.STONReader)})},
args: [],
source: "newReference\x0a\x09| index reference |\x0a\x09index := objects size + 1.\x0a\x09reference := STONReference index: index.\x0a\x09objects at: index put: reference.\x0a\x09^ reference",
messageSends: ["+", "size", "index:", "at:put:"],
referencedClasses: ["STONReference"]
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'public',
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._consumeWhitespace();
object=_st(self)._parseValue();
$1=_st(self["@unresolvedReferences"]).__gt((0));
if(smalltalk.assert($1)){
_st(self)._processSubObjectsOf_(object);
};
$2=object;
return $2;
}, function($ctx1) {$ctx1.fill(self,"next",{object:object},smalltalk.STONReader)})},
args: [],
source: "next\x0a\x09| object |\x0a\x09self consumeWhitespace.\x0a\x09object := self parseValue.\x0a\x09unresolvedReferences > 0\x0a\x09\x09ifTrue: [ self processSubObjectsOf: object ].\x0a\x09^ object",
messageSends: ["consumeWhitespace", "parseValue", "ifTrue:", "processSubObjectsOf:", ">"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'initialize-release',
fn: function (aReadStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@readStream"]=aReadStream;
return self}, function($ctx1) {$ctx1.fill(self,"on:",{aReadStream:aReadStream},smalltalk.STONReader)})},
args: ["aReadStream"],
source: "on: aReadStream\x0a\x09readStream := aReadStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseCharacter",
category: 'parsing-internal',
fn: function (){
var self=this;
var char;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
char=_st(self["@readStream"])._next();
$1=_st(char).__eq("\x5c");
if(! smalltalk.assert($1)){
$2=char;
return $2;
};
char=_st(self["@readStream"])._next();
$3=_st(["'", "\x22", "/", "\x5c"])._includes_(char);
if(smalltalk.assert($3)){
$4=char;
return $4;
};
$5=_st(char).__eq("b");
if(smalltalk.assert($5)){
$6=_st($Character())._backspace();
return $6;
};
$7=_st(char).__eq("f");
if(smalltalk.assert($7)){
$8=_st($Character())._newPage();
return $8;
};
$9=_st(char).__eq("n");
if(smalltalk.assert($9)){
$10=_st($Character())._lf();
return $10;
};
$11=_st(char).__eq("r");
if(smalltalk.assert($11)){
$12=_st($Character())._cr();
return $12;
};
$13=_st(char).__eq("t");
if(smalltalk.assert($13)){
$14=_st($Character())._tab();
return $14;
};
$15=_st(char).__eq("u");
if(smalltalk.assert($15)){
$16=_st(self)._parseCharacterHex();
return $16;
};
_st(self)._error_(_st("invalid escape character \x5c").__comma(_st($String())._with_(char)));
return self}, function($ctx1) {$ctx1.fill(self,"parseCharacter",{char:char},smalltalk.STONReader)})},
args: [],
source: "parseCharacter\x0a\x09| char |\x0a\x09(char := readStream next) = '\x5c' \x0a\x09\x09ifFalse: [ ^ char ].\x0a\x09(#( '''' '\x22' '/' '\x5c') includes: (char := readStream next))\x0a\x09\x09ifTrue: [ ^ char ].\x0a\x09char = 'b'\x0a\x09\x09ifTrue: [ ^ Character backspace ].\x0a\x09char = 'f'\x0a\x09\x09ifTrue: [ ^ Character newPage ].\x0a\x09char = 'n'\x0a\x09\x09ifTrue: [ ^ Character lf ].\x0a\x09char = 'r'\x0a\x09\x09ifTrue: [ ^ Character cr ].\x0a\x09char = 't'\x0a\x09\x09ifTrue: [ ^ Character tab ].\x0a\x09char = 'u'\x0a\x09\x09ifTrue: [ ^ self parseCharacterHex ].\x0a\x09self error: 'invalid escape character \x5c' , (String with: char)",
messageSends: ["ifFalse:", "=", "next", "ifTrue:", "includes:", "backspace", "newPage", "lf", "cr", "tab", "parseCharacterHex", "error:", ",", "with:"],
referencedClasses: ["Character", "String"]
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseCharacterHex",
category: 'parsing-internal',
fn: function (){
var self=this;
var value;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self)._parseCharacterHexDigit();
_st((3))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
value=_st(_st(value).__lt_lt((4))).__plus(_st(self)._parseCharacterHexDigit());
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st($Character())._codePoint_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseCharacterHex",{value:value},smalltalk.STONReader)})},
args: [],
source: "parseCharacterHex\x0a\x09| value |\x0a\x09value := self parseCharacterHexDigit.\x0a\x093 timesRepeat: [ \x0a\x09\x09value := (value << 4) + self parseCharacterHexDigit ].\x0a\x09^ Character codePoint: value",
messageSends: ["parseCharacterHexDigit", "timesRepeat:", "+", "<<", "codePoint:"],
referencedClasses: ["Character"]
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseCharacterHexDigit",
category: 'parsing-internal',
fn: function (){
var self=this;
var digit;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(self["@readStream"])._atEnd();
if(! smalltalk.assert($1)){
digit=_st(_st(self["@readStream"])._next())._asciiValue();
digit;
$2=_st(digit)._between_and_((48),(57));
if(smalltalk.assert($2)){
$3=_st(digit).__minus((48));
return $3;
};
$4=_st(digit)._between_and_((65),(70));
if(smalltalk.assert($4)){
$5=_st(digit).__minus((55));
return $5;
};
$6=_st(digit)._between_and_((97),(102));
if(smalltalk.assert($6)){
$7=_st(digit).__minus((87));
return $7;
};
};
_st(self)._error_("hex-digit expected");
return self}, function($ctx1) {$ctx1.fill(self,"parseCharacterHexDigit",{digit:digit},smalltalk.STONReader)})},
args: [],
source: "parseCharacterHexDigit\x0a\x09| digit |\x0a\x09readStream atEnd ifFalse: [ \x0a\x09\x09digit := readStream next asciiValue.\x0a\x09\x09(digit between: \x22$0\x22 48 and: \x22$9\x22 57)\x0a\x09\x09\x09ifTrue: [ ^ digit - 48 ].\x0a\x09\x09(digit between: \x22$A\x22 65 and: \x22$F\x22 70)\x0a\x09\x09\x09ifTrue: [ ^ digit - 55 ].\x0a\x09\x09(digit between: \x22$a\x22 97 and: \x22$f\x22 102)\x0a\x09\x09\x09ifTrue: [ ^ digit - 87 ] ].\x0a\x09self error: 'hex-digit expected'",
messageSends: ["ifFalse:", "asciiValue", "next", "ifTrue:", "-", "between:and:", "atEnd", "error:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseClass",
category: 'parsing-internal',
fn: function (){
var self=this;
var className;
return smalltalk.withContext(function($ctx1) { 
var $1;
className=_st(self)._stringStreamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self["@readStream"])._atEnd())._not())._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self)._isClassChar_(_st(self["@readStream"])._peek());
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPut_(_st(self["@readStream"])._next());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
_st(self)._consumeWhitespace();
$1=_st(self)._lookupClass_(_st(className)._asSymbol());
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseClass",{className:className},smalltalk.STONReader)})},
args: [],
source: "parseClass\x0a\x09| className |\x0a\x09className := self stringStreamContents: [ :stream |\x0a\x09\x09[ readStream atEnd not and: [ self isClassChar: readStream peek ] ] whileTrue: [ \x0a\x09\x09\x09stream nextPut: readStream next ] ].\x0a\x09self consumeWhitespace.\x0a\x09^ self lookupClass: className asSymbol\x0a\x09",
messageSends: ["stringStreamContents:", "whileTrue:", "nextPut:", "next", "and:", "isClassChar:", "peek", "not", "atEnd", "consumeWhitespace", "lookupClass:", "asSymbol"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseConstantDo:",
category: 'parsing-internal',
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(_st(self["@readStream"])._peek()).__eq("t");
if(smalltalk.assert($1)){
$2=_st(self)._match_do_("true",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(block)._value_(true);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
};
$3=_st(_st(self["@readStream"])._peek()).__eq("f");
if(smalltalk.assert($3)){
$4=_st(self)._match_do_("false",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(block)._value_(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $4;
};
$5=_st(_st(self["@readStream"])._peek()).__eq("n");
if(smalltalk.assert($5)){
_st(self["@readStream"])._next();
$6=_st(_st(self["@readStream"])._peek()).__eq("i");
if(smalltalk.assert($6)){
_st(self)._match_do_("il",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(block)._value_(nil);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
$7=_st(_st(self["@readStream"])._peek()).__eq("u");
if(smalltalk.assert($7)){
_st(self)._match_do_("ull",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(block)._value_(nil);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
};
return self}, function($ctx1) {$ctx1.fill(self,"parseConstantDo:",{block:block},smalltalk.STONReader)})},
args: ["block"],
source: "parseConstantDo: block\x0a\x09\x22Parse and consume either true|false|nil|null and execute block \x0a\x09or else do nothing (but do not back up).\x0a\x09Hand written implementation to avoid the use of #position:\x22\x0a\x09\x0a\x09(readStream peek = 't')\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09^ self match: 'true' do: [ block value: true ] ].\x0a\x09(readStream peek = 'f')\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09^ self match: 'false' do: [ block value: false ] ].\x0a\x09(readStream peek = 'n')\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09readStream next.\x0a\x09\x09\x09(readStream peek = 'i')\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09self match: 'il' do: [ block value: nil ] ].\x0a\x09\x09\x09(readStream peek = 'u')\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09self match: 'ull' do: [ block value: nil ] ] ]\x09\x09",
messageSends: ["ifTrue:", "match:do:", "value:", "=", "peek", "next"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseList",
category: 'parsing',
fn: function (){
var self=this;
var reference,array;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
reference=_st(self)._newReference();
array=_st(_st($STON())._listClass())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(self)._parseListDo_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPut_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
_st(self)._setReference_to_(reference,array);
$1=array;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseList",{reference:reference,array:array},smalltalk.STONReader)})},
args: [],
source: "parseList\x0a\x09| reference array |\x0a\x09reference := self newReference.\x0a\x09array := STON listClass streamContents: [ :stream |\x0a\x09\x09self parseListDo: [ :each | stream nextPut: each ] ].\x0a\x09self setReference: reference to: array.\x0a\x09^ array",
messageSends: ["newReference", "streamContents:", "parseListDo:", "nextPut:", "listClass", "setReference:to:"],
referencedClasses: ["STON"]
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseListDo:",
category: 'parsing',
fn: function (block){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
_st(self)._expectChar_("[");
$1=_st(self)._matchChar_("]");
if(smalltalk.assert($1)){
$2=self;
return $2;
};
index=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@readStream"])._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
_st(block)._cull_cull_(_st(self)._parseValue(),index);
$3=_st(self)._matchChar_("]");
if(smalltalk.assert($3)){
$4=self;
throw $early=[$4];
};
index=_st(index).__plus((1));
index;
return _st(self)._expectChar_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._error_("end of list expected");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"parseListDo:",{block:block,index:index},smalltalk.STONReader)})},
args: ["block"],
source: "parseListDo: block\x0a\x09| index |\x0a\x09self expectChar: '['.\x0a\x09(self matchChar: ']') \x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09index := 1.\x0a\x09[ readStream atEnd ] whileFalse: [\x0a\x09\x09block cull: self parseValue cull: index.\x0a\x09\x09(self matchChar: ']') \x0a\x09\x09\x09ifTrue: [ ^ self ].\x0a\x09\x09index := index + 1.\x0a\x09\x09self expectChar: ',' ].\x0a\x09self error: 'end of list expected'",
messageSends: ["expectChar:", "ifTrue:", "matchChar:", "whileFalse:", "cull:cull:", "parseValue", "+", "atEnd", "error:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseListSingleton",
category: 'parsing',
fn: function (){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
value=nil;
_st(self)._parseListDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
$1=_st(index).__eq((1));
if(smalltalk.assert($1)){
value=each;
return value;
};
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
$2=value;
return $2;
}, function($ctx1) {$ctx1.fill(self,"parseListSingleton",{value:value},smalltalk.STONReader)})},
args: [],
source: "parseListSingleton\x0a\x09| value |\x0a\x09value := nil.\x0a\x09self parseListDo: [ :each :index |\x0a\x09\x09index = 1 ifTrue: [ value := each ] ].\x0a\x09^ value",
messageSends: ["parseListDo:", "ifTrue:", "="],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseMap",
category: 'parsing',
fn: function (){
var self=this;
var map;
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
map=_st(_st($STON())._mapClass())._new();
_st(self)._storeReference_(map);
_st(self)._parseMapDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(map)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=map;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseMap",{map:map},smalltalk.STONReader)})},
args: [],
source: "parseMap\x0a\x09| map |\x0a\x09map := STON mapClass new.\x0a\x09self storeReference: map.\x0a\x09self parseMapDo: [ :key :value |\x0a\x09\x09map at: key put: value ].\x0a\x09^ map",
messageSends: ["new", "mapClass", "storeReference:", "parseMapDo:", "at:put:"],
referencedClasses: ["STON"]
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseMapDo:",
category: 'parsing',
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
var $early={};
try {
_st(self)._expectChar_("{");
$1=_st(self)._matchChar_("}");
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@readStream"])._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
var name,value;
return smalltalk.withContext(function($ctx2) {
name=_st(self)._parseValue();
name;
$3=_st(_st(name)._isString())._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(name)._isNumber();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($3)){
_st(self)._error_("unexpected property name type");
};
_st(self)._expectChar_(":");
value=_st(self)._parseValue();
value;
_st(block)._value_value_(name,value);
$4=_st(self)._matchChar_("}");
if(smalltalk.assert($4)){
$5=self;
throw $early=[$5];
};
return _st(self)._expectChar_(",");
}, function($ctx2) {$ctx2.fillBlock({name:name,value:value},$ctx1)})}));
_st(self)._error_("end of map expected");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"parseMapDo:",{block:block},smalltalk.STONReader)})},
args: ["block"],
source: "parseMapDo: block\x0a\x09self expectChar: '{'.\x0a\x09(self matchChar: '}')\x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09[ readStream atEnd ] whileFalse: [ | name value |\x0a\x09\x09name := self parseValue.\x0a\x09\x09(name isString or: [ name isNumber ])\x0a\x09\x09\x09ifFalse: [ self error: 'unexpected property name type' ].\x0a\x09\x09self expectChar: ':'.\x0a\x09\x09value := self parseValue.\x0a\x09\x09block value: name value: value.\x0a\x09\x09(self matchChar: '}') \x0a\x09\x09\x09ifTrue: [ ^ self ].\x0a\x09\x09self expectChar: ',' ].\x0a\x09self error: 'end of map expected'",
messageSends: ["expectChar:", "ifTrue:", "matchChar:", "whileFalse:", "parseValue", "ifFalse:", "error:", "or:", "isNumber", "isString", "value:value:", "atEnd"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseNumber",
category: 'parsing-internal',
fn: function (){
var self=this;
var negated,number;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
negated=_st(_st(self["@readStream"])._peek()).__eq("-");
$1=negated;
if(smalltalk.assert($1)){
_st(self["@readStream"])._next();
};
number=_st(self)._parseNumberInteger();
$2=_st(_st(self["@readStream"])._peek()).__eq(".");
if(smalltalk.assert($2)){
_st(self["@readStream"])._next();
number=_st(number).__plus(_st(self)._parseNumberFraction());
number;
};
$3=_st(_st(_st(self["@readStream"])._peek()).__eq("e"))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@readStream"])._peek()).__eq("E");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(self["@readStream"])._next();
number=_st(number).__star(_st(self)._parseNumberExponent());
number;
};
$4=negated;
if(smalltalk.assert($4)){
number=_st(number)._negated();
number;
};
_st(self)._consumeWhitespace();
$5=number;
return $5;
}, function($ctx1) {$ctx1.fill(self,"parseNumber",{negated:negated,number:number},smalltalk.STONReader)})},
args: [],
source: "parseNumber\x0a\x09| negated number |\x0a\x09negated := readStream peek = '-'.\x0a\x09negated ifTrue: [ readStream next ].\x0a\x09number := self parseNumberInteger.\x0a\x09(readStream peek = '.') ifTrue: [\x0a\x09\x09readStream next. \x0a\x09\x09number := number + self parseNumberFraction ].\x0a\x09(readStream peek = 'e' or: [ readStream peek = 'E' ]) ifTrue: [\x0a\x09\x09readStream next.\x0a\x09\x09number := number * self parseNumberExponent ].\x0a\x09negated ifTrue: [ number := number negated ].\x0a\x09self consumeWhitespace.\x0a\x09^ number",
messageSends: ["=", "peek", "ifTrue:", "next", "parseNumberInteger", "+", "parseNumberFraction", "*", "parseNumberExponent", "or:", "negated", "consumeWhitespace"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseNumberExponent",
category: 'parsing-internal',
fn: function (){
var self=this;
var number,negated;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
number=(0);
negated=_st(_st(self["@readStream"])._peek()).__eq("-");
$1=_st(negated)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@readStream"])._peek()).__eq("+");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self["@readStream"])._next();
};
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@readStream"])._atEnd())._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self["@readStream"])._peek())._isDigit();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
number=_st(_st((10)).__star(number)).__plus(_st(_st(self["@readStream"])._next())._digitValue());
return number;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=negated;
if(smalltalk.assert($2)){
number=_st(number)._negated();
number;
};
$3=_st((10))._raisedTo_(number);
return $3;
}, function($ctx1) {$ctx1.fill(self,"parseNumberExponent",{number:number,negated:negated},smalltalk.STONReader)})},
args: [],
source: "parseNumberExponent\x0a\x09| number negated |\x0a\x09number := 0.\x0a\x09negated := readStream peek = '-'.\x0a\x09(negated or: [ readStream peek = '+' ]) ifTrue: [ readStream next ].\x0a\x09[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [ \x0a\x09\x09number := 10 * number + readStream next digitValue ].\x0a\x09negated ifTrue: [ number := number negated ].\x0a\x09^ 10 raisedTo: number",
messageSends: ["=", "peek", "ifTrue:", "next", "or:", "whileTrue:", "+", "digitValue", "*", "and:", "isDigit", "not", "atEnd", "negated", "raisedTo:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseNumberFraction",
category: 'parsing-internal',
fn: function (){
var self=this;
var number,power;
return smalltalk.withContext(function($ctx1) { 
var $1;
number=(0);
power=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@readStream"])._atEnd())._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self["@readStream"])._peek())._isDigit();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
number=_st(_st((10)).__star(number)).__plus(_st(_st(self["@readStream"])._next())._digitValue());
number;
power=_st(power).__star((10));
return power;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(number).__slash(power);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseNumberFraction",{number:number,power:power},smalltalk.STONReader)})},
args: [],
source: "parseNumberFraction\x0a\x09| number power |\x0a\x09number := 0.\x0a\x09power := 1.0.\x0a\x09[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [\x0a\x09\x09number := 10 * number + readStream next digitValue.\x0a\x09\x09power := power * 10.0 ].\x0a\x09^ number / power",
messageSends: ["whileTrue:", "+", "digitValue", "next", "*", "and:", "isDigit", "peek", "not", "atEnd", "/"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseNumberInteger",
category: 'parsing-internal',
fn: function (){
var self=this;
var number;
return smalltalk.withContext(function($ctx1) { 
var $1;
number=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@readStream"])._atEnd())._not())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self["@readStream"])._peek())._isDigit();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
number=_st(_st((10)).__star(number)).__plus(_st(_st(self["@readStream"])._next())._digitValue());
return number;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=number;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseNumberInteger",{number:number},smalltalk.STONReader)})},
args: [],
source: "parseNumberInteger\x0a\x09| number |\x0a\x09number := 0.\x0a\x09[ readStream atEnd not and: [ readStream peek isDigit ] ] whileTrue: [ \x0a\x09\x09number := 10 * number + readStream next digitValue ].\x0a\x09^ number",
messageSends: ["whileTrue:", "+", "digitValue", "next", "*", "and:", "isDigit", "peek", "not", "atEnd"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseObject",
category: 'parsing',
fn: function (){
var self=this;
var targetClass,reference,object;
return smalltalk.withContext(function($ctx1) { 
var $1;
targetClass=_st(self)._parseClass();
reference=_st(self)._newReference();
object=_st(targetClass)._fromSton_(self);
_st(self)._setReference_to_(reference,object);
$1=object;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseObject",{targetClass:targetClass,reference:reference,object:object},smalltalk.STONReader)})},
args: [],
source: "parseObject\x0a\x09| targetClass reference object |\x0a\x09targetClass := self parseClass.\x0a\x09reference := self newReference.\x0a\x09object := targetClass fromSton: self.\x0a\x09self setReference: reference to: object.\x0a\x09^ object",
messageSends: ["parseClass", "newReference", "fromSton:", "setReference:to:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseReference",
category: 'parsing-internal',
fn: function (){
var self=this;
var index,object;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._expectChar_("@");
index=_st(self)._parseNumberInteger();
_st(self)._consumeWhitespace();
object=_st(self)._resolveReferenceIndex_(index);
$1=_st(object)._isStonReference();
if(smalltalk.assert($1)){
self["@unresolvedReferences"]=_st(self["@unresolvedReferences"]).__plus((1));
self["@unresolvedReferences"];
};
$2=object;
return $2;
}, function($ctx1) {$ctx1.fill(self,"parseReference",{index:index,object:object},smalltalk.STONReader)})},
args: [],
source: "parseReference\x0a\x09| index object |\x0a\x09self expectChar: '@'.\x0a\x09index := self parseNumberInteger.\x0a\x09self consumeWhitespace.\x0a\x09object := self resolveReferenceIndex: index.\x0a\x09object isStonReference \x0a\x09\x09ifTrue: [ unresolvedReferences := unresolvedReferences + 1 ].\x0a\x09^ object",
messageSends: ["expectChar:", "parseNumberInteger", "consumeWhitespace", "resolveReferenceIndex:", "ifTrue:", "+", "isStonReference"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseString",
category: 'parsing-internal',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._parseStringInternal();
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseString",{},smalltalk.STONReader)})},
args: [],
source: "parseString\x0a\x09^ self parseStringInternal",
messageSends: ["parseStringInternal"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseStringInternal",
category: 'parsing-internal',
fn: function (){
var self=this;
var result,delimiter;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
delimiter=_st(self["@readStream"])._next();
$1=_st(_st(delimiter).__eq("'"))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(delimiter).__eq("\x22");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
_st(self)._error_("' or \x22 expected");
};
result=_st(self)._stringStreamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self["@readStream"])._atEnd())._or_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@readStream"])._peek()).__eq(delimiter);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPut_(_st(self)._parseCharacter());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
_st(self)._expectChar_(delimiter);
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"parseStringInternal",{result:result,delimiter:delimiter},smalltalk.STONReader)})},
args: [],
source: "parseStringInternal\x0a  | result delimiter |\x0a  delimiter := readStream next.\x0a  (delimiter = '''' or: [ delimiter = '\x22' ])\x0a    ifFalse: [ self error: ''' or \x22 expected' ].\x0a  result := self\x0a    stringStreamContents: [ :stream | [ readStream atEnd or: [ readStream peek = delimiter ] ] whileFalse: [ stream nextPut: self parseCharacter ] ].\x0a  self expectChar: delimiter.\x0a  \x22TODO: ^ result convertFromEncoding: #'utf-8'\x22\x0a  ^ result",
messageSends: ["next", "ifFalse:", "error:", "or:", "=", "stringStreamContents:", "whileFalse:", "nextPut:", "parseCharacter", "peek", "atEnd", "expectChar:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseSymbol",
category: 'parsing-internal',
fn: function (){
var self=this;
var string;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self)._expectChar_("#");
$1=_st(_st(self["@readStream"])._peek()).__eq("'");
if(smalltalk.assert($1)){
$2=_st(_st(self)._parseStringInternal())._asSymbol();
return $2;
};
string=_st(self)._stringStreamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self["@readStream"])._atEnd())._not())._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self)._isSimpleSymbolChar_(_st(self["@readStream"])._peek());
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPut_(_st(self["@readStream"])._next());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
$3=_st(string)._isEmpty();
if(! smalltalk.assert($3)){
_st(self)._consumeWhitespace();
$4=_st(string)._asSymbol();
return $4;
};
_st(self)._error_("unexpected input");
return self}, function($ctx1) {$ctx1.fill(self,"parseSymbol",{string:string},smalltalk.STONReader)})},
args: [],
source: "parseSymbol\x0a\x09| string |\x0a\x09self expectChar: '#'.\x0a\x09readStream peek = ''''\x0a\x09\x09ifTrue: [ ^ self parseStringInternal asSymbol ].\x0a\x09string := self stringStreamContents: [ :stream |\x0a\x09\x09[ readStream atEnd not and: [ self isSimpleSymbolChar: readStream peek ] ] whileTrue: [\x0a\x09\x09\x09stream nextPut: readStream next ] ].\x0a\x09string isEmpty\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09self consumeWhitespace.\x0a\x09\x09\x09^ string asSymbol ].\x0a\x09self error: 'unexpected input'",
messageSends: ["expectChar:", "ifTrue:", "asSymbol", "parseStringInternal", "=", "peek", "stringStreamContents:", "whileTrue:", "nextPut:", "next", "and:", "isSimpleSymbolChar:", "not", "atEnd", "ifFalse:", "consumeWhitespace", "isEmpty", "error:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseValue",
category: 'parsing',
fn: function (){
var self=this;
var char;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
var $early={};
try {
$1=_st(self["@readStream"])._atEnd();
if(! smalltalk.assert($1)){
char=_st(self["@readStream"])._peek();
$2=_st(self)._isClassStartChar_(char);
if(smalltalk.assert($2)){
$3=_st(self)._parseObject();
return $3;
};
$4=_st(char).__eq("{");
if(smalltalk.assert($4)){
$5=_st(self)._parseMap();
return $5;
};
$6=_st(char).__eq("[");
if(smalltalk.assert($6)){
$7=_st(self)._parseList();
return $7;
};
$8=_st(_st(char).__eq("'"))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(char).__eq("\x22");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($8)){
$9=_st(self)._parseString();
return $9;
};
$10=_st(char).__eq("#");
if(smalltalk.assert($10)){
$11=_st(self)._parseSymbol();
return $11;
};
$12=_st(char).__eq("@");
if(smalltalk.assert($12)){
$13=_st(self)._parseReference();
return $13;
};
$14=_st(_st(char).__eq("-"))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(char)._isDigit();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($14)){
$15=_st(self)._parseNumber();
return $15;
};
_st(self)._parseConstantDo_((function(value){
return smalltalk.withContext(function($ctx2) {
$16=value;
throw $early=[$16];
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
};
_st(self)._error_("invalid input");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"parseValue",{char:char},smalltalk.STONReader)})},
args: [],
source: "parseValue\x0a\x09| char |\x0a\x09readStream atEnd ifFalse: [ \x0a\x09\x09(self isClassStartChar: (char := readStream peek)) \x0a\x09\x09\x09ifTrue: [ ^ self parseObject ].\x0a\x09\x09char = '{'\x0a\x09\x09\x09ifTrue: [ ^ self parseMap ].\x0a\x09\x09char = '['\x0a\x09\x09\x09ifTrue: [ ^ self parseList ].\x0a\x09\x09(char = '''' or: [ char = '\x22' ])\x0a\x09\x09\x09ifTrue: [ ^ self parseString ].\x0a\x09\x09char = '#'\x0a\x09\x09\x09ifTrue: [ ^ self parseSymbol ].\x0a\x09\x09char = '@'\x0a\x09\x09\x09ifTrue: [ ^ self parseReference ].\x0a\x09\x09(char = '-' or: [ char isDigit ])\x0a\x09\x09\x09ifTrue: [ ^ self parseNumber ].\x0a\x09\x09self parseConstantDo: [ :value | ^ value ] ].\x0a\x09self error: 'invalid input'",
messageSends: ["ifFalse:", "ifTrue:", "parseObject", "isClassStartChar:", "peek", "parseMap", "=", "parseList", "parseString", "or:", "parseSymbol", "parseReference", "parseNumber", "isDigit", "parseConstantDo:", "atEnd", "error:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "processSubObjectsOf:",
category: 'private',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(object)._stonProcessSubObjects_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._isStonReference();
if(smalltalk.assert($1)){
return _st(self)._resolveReference_(each);
} else {
_st(self)._processSubObjectsOf_(each);
return each;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"processSubObjectsOf:",{object:object},smalltalk.STONReader)})},
args: ["object"],
source: "processSubObjectsOf: object\x0a\x09object stonProcessSubObjects: [ :each |\x0a\x09\x09each isStonReference \x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09self resolveReference: each ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09self processSubObjectsOf: each. \x0a\x09\x09\x09\x09each ] ]",
messageSends: ["stonProcessSubObjects:", "ifTrue:ifFalse:", "resolveReference:", "processSubObjectsOf:", "isStonReference"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "resolveReference:",
category: 'private',
fn: function (reference){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._resolveReferenceIndex_(_st(reference)._index());
return $1;
}, function($ctx1) {$ctx1.fill(self,"resolveReference:",{reference:reference},smalltalk.STONReader)})},
args: ["reference"],
source: "resolveReference: reference\x0a\x09^ self resolveReferenceIndex: reference index",
messageSends: ["resolveReferenceIndex:", "index"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "resolveReferenceIndex:",
category: 'private',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@objects"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"resolveReferenceIndex:",{index:index},smalltalk.STONReader)})},
args: ["index"],
source: "resolveReferenceIndex: index\x0a\x09^ objects at: index",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "setReference:to:",
category: 'private',
fn: function (reference,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@objects"])._at_put_(_st(reference)._index(),object);
return self}, function($ctx1) {$ctx1.fill(self,"setReference:to:",{reference:reference,object:object},smalltalk.STONReader)})},
args: ["reference", "object"],
source: "setReference: reference to: object\x0a\x09objects at: reference index put: object",
messageSends: ["at:put:", "index"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "storeReference:",
category: 'private',
fn: function (object){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1;
index=_st(_st(self["@objects"])._size()).__plus((1));
_st(self["@objects"])._at_put_(index,object);
$1=index;
return $1;
}, function($ctx1) {$ctx1.fill(self,"storeReference:",{object:object,index:index},smalltalk.STONReader)})},
args: ["object"],
source: "storeReference: object\x0a\x09| index |\x0a\x09index := objects size + 1.\x0a\x09objects at: index put: object.\x0a\x09^ index",
messageSends: ["+", "size", "at:put:"],
referencedClasses: []
}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "stringStreamContents:",
category: 'private',
fn: function (block){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@stringStream"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@stringStream"]=_st(_st($String())._new_((32)))._writeStream();
self["@stringStream"];
} else {
$1;
};
_st(self["@stringStream"])._reset();
_st(block)._value_(self["@stringStream"]);
$2=_st(self["@stringStream"])._contentsToPos();
return $2;
}, function($ctx1) {$ctx1.fill(self,"stringStreamContents:",{block:block},smalltalk.STONReader)})},
args: ["block"],
source: "stringStreamContents: block\x0a\x09stringStream ifNil: [ \x0a\x09\x09stringStream := (String new: 32) writeStream ].\x0a\x09stringStream reset.\x0a\x09block value: stringStream.\x0a\x09^ stringStream contentsToPos",
messageSends: ["ifNil:", "writeStream", "new:", "reset", "value:", "contentsToPos"],
referencedClasses: ["String"]
}),
smalltalk.STONReader);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (readStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._on_(readStream);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{readStream:readStream},smalltalk.STONReader.klass)})},
args: ["readStream"],
source: "on: readStream\x0a\x09^ self new\x0a\x09\x09on: readStream;\x0a\x09\x09yourself",
messageSends: ["on:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.STONReader.klass);


smalltalk.addClass('STONReaderError', smalltalk.Error, [], 'STON-Core');


smalltalk.addClass('STONReference', smalltalk.Object, ['index'], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class()).__eq_eq(_st(anObject)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._index()).__eq(_st(anObject)._index());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},smalltalk.STONReference)})},
args: ["anObject"],
source: "= anObject\x0a\x09^ self class == anObject class and: [ self index = anObject index ]",
messageSends: ["and:", "=", "index", "==", "class"],
referencedClasses: []
}),
smalltalk.STONReference);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
category: 'comparing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@index"])._hash();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.STONReference)})},
args: [],
source: "hash\x0a\x09^ index hash",
messageSends: ["hash"],
referencedClasses: []
}),
smalltalk.STONReference);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.STONReference)})},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONReference);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (integer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=integer;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{integer:integer},smalltalk.STONReference)})},
args: ["integer"],
source: "index: integer\x0a\x09index := integer",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONReference);

smalltalk.addMethod(
smalltalk.method({
selector: "isStonReference",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isStonReference",{},smalltalk.STONReference)})},
args: [],
source: "isStonReference\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONReference);


smalltalk.addMethod(
smalltalk.method({
selector: "index:",
category: 'instance creation',
fn: function (integer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._index_(integer);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"index:",{integer:integer},smalltalk.STONReference.klass)})},
args: ["integer"],
source: "index: integer\x0a\x09^ self new\x0a\x09\x09index: integer;\x0a\x09\x09yourself",
messageSends: ["index:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.STONReference.klass);


smalltalk.addClass('STONStreamWriter', smalltalk.Object, ['writer', 'first'], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@first"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.STONStreamWriter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09first := true",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.STONStreamWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'initialize-release',
fn: function (stonWriter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@writer"]=stonWriter;
return self}, function($ctx1) {$ctx1.fill(self,"on:",{stonWriter:stonWriter},smalltalk.STONStreamWriter)})},
args: ["stonWriter"],
source: "on: stonWriter\x0a\x09writer := stonWriter",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONStreamWriter);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (stonWriter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._on_(stonWriter);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{stonWriter:stonWriter},smalltalk.STONStreamWriter.klass)})},
args: ["stonWriter"],
source: "on: stonWriter\x0a\x09^ self new\x0a\x09\x09on: stonWriter;\x0a\x09\x09yourself",
messageSends: ["on:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.STONStreamWriter.klass);


smalltalk.addClass('STONListWriter', smalltalk.STONStreamWriter, [], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@first"];
if(smalltalk.assert($1)){
self["@first"]=false;
self["@first"];
} else {
_st(self["@writer"])._listElementSeparator();
};
_st(self["@writer"])._nextPut_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.STONListWriter)})},
args: ["anObject"],
source: "add: anObject\x0a\x09first ifTrue: [ first := false ] ifFalse: [ writer listElementSeparator ].\x0a\x09writer nextPut: anObject",
messageSends: ["ifTrue:ifFalse:", "listElementSeparator", "nextPut:"],
referencedClasses: []
}),
smalltalk.STONListWriter);



smalltalk.addClass('STONShortListWriter', smalltalk.STONListWriter, [], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@first"];
if(smalltalk.assert($1)){
self["@first"]=false;
self["@first"];
} else {
_st(self["@writer"])._shortListElementSeparator();
};
_st(self["@writer"])._nextPut_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.STONShortListWriter)})},
args: ["anObject"],
source: "add: anObject\x0a\x09first ifTrue: [ first := false ] ifFalse: [ writer shortListElementSeparator ].\x0a\x09writer nextPut: anObject",
messageSends: ["ifTrue:ifFalse:", "shortListElementSeparator", "nextPut:"],
referencedClasses: []
}),
smalltalk.STONShortListWriter);



smalltalk.addClass('STONMapWriter', smalltalk.STONStreamWriter, [], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (key,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@first"];
if(smalltalk.assert($1)){
self["@first"]=false;
self["@first"];
} else {
_st(self["@writer"])._mapElementSeparator();
};
_st(self["@writer"])._encodeKey_value_(key,value);
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{key:key,value:value},smalltalk.STONMapWriter)})},
args: ["key", "value"],
source: "at: key put: value\x0a\x09first ifTrue: [ first := false ] ifFalse: [ writer mapElementSeparator ].\x0a\x09writer encodeKey: key value: value",
messageSends: ["ifTrue:ifFalse:", "mapElementSeparator", "encodeKey:value:"],
referencedClasses: []
}),
smalltalk.STONMapWriter);



smalltalk.addClass('STONWriter', smalltalk.Object, ['writeStream', 'prettyPrint', 'jsonMode', 'referencePolicy', 'level', 'objects'], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@writeStream"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@writeStream"])._close();
self["@writeStream"]=nil;
self["@writeStream"];
};
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.STONWriter)})},
args: [],
source: "close\x0a\x09writeStream ifNotNil: [\x0a\x09\x09writeStream close.\x0a\x09\x09writeStream := nil ]",
messageSends: ["ifNotNil:", "close"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeCharacter:",
category: 'private',
fn: function (char){
var self=this;
var code,encoding;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
code=_st(char)._codePoint();
$1=_st(_st(code).__lt((127)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
encoding=_st(_st(_st(self)._class())._stonCharacters())._at_(_st(code).__plus((1)));
return _st(encoding)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=_st(encoding).__eq("pass");
if(smalltalk.assert($2)){
_st(self["@writeStream"])._nextPut_(char);
} else {
_st(self["@writeStream"])._nextPutAll_(encoding);
};
} else {
_st(self["@writeStream"])._nextPutAll_("\x5cu");
_st(code)._printOn_base_nDigits_(self["@writeStream"],(16),(4));
};
return self}, function($ctx1) {$ctx1.fill(self,"encodeCharacter:",{char:char,code:code,encoding:encoding},smalltalk.STONWriter)})},
args: ["char"],
source: "encodeCharacter: char\x0a\x09| code encoding |\x0a\x09((code := char codePoint) < 127 and: [ (encoding := self class stonCharacters at: code + 1) notNil ])\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09encoding = #pass\x0a\x09\x09\x09\x09ifTrue: [ writeStream nextPut: char ]\x0a\x09\x09\x09\x09ifFalse: [ writeStream nextPutAll: encoding ] ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09writeStream nextPutAll: '\x5cu'.\x0a\x09\x09\x09code printOn: writeStream base: 16 nDigits: 4 ] ",
messageSends: ["ifTrue:ifFalse:", "nextPut:", "nextPutAll:", "=", "printOn:base:nDigits:", "and:", "notNil", "at:", "+", "stonCharacters", "class", "<", "codePoint"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeKey:value:",
category: 'private',
fn: function (key,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPut_(key);
_st(self)._prettyPrintSpace();
_st(self["@writeStream"])._nextPut_(":");
_st(self)._prettyPrintSpace();
_st(self)._nextPut_(value);
return self}, function($ctx1) {$ctx1.fill(self,"encodeKey:value:",{key:key,value:value},smalltalk.STONWriter)})},
args: ["key", "value"],
source: "encodeKey: key value: value\x0a\x09self nextPut: key.\x0a\x09self prettyPrintSpace.\x0a\x09writeStream nextPut: ':'.\x0a\x09self prettyPrintSpace.\x0a\x09self nextPut: value",
messageSends: ["nextPut:", "prettyPrintSpace"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeList:",
category: 'writing',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@writeStream"])._nextPut_("[");
$1=_st(elements)._isEmpty();
if(smalltalk.assert($1)){
_st(self)._prettyPrintSpace();
} else {
_st(self)._indentedDo_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._newlineIndent();
return _st(elements)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(self)._nextPut_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._listElementSeparator();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._newlineIndent();
};
_st(self["@writeStream"])._nextPut_("]");
return self}, function($ctx1) {$ctx1.fill(self,"encodeList:",{elements:elements},smalltalk.STONWriter)})},
args: ["elements"],
source: "encodeList: elements\x0a\x09writeStream nextPut: '['.\x0a\x09elements isEmpty\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self prettyPrintSpace ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self indentedDo: [\x0a\x09\x09\x09\x09self newlineIndent.\x0a\x09\x09\x09\x09elements \x0a\x09\x09\x09\x09\x09do: [ :each | self nextPut: each ]\x0a\x09\x09\x09\x09\x09separatedBy: [ self listElementSeparator ] ].\x0a\x09\x09\x09self newlineIndent ].\x0a\x09writeStream nextPut: ']'",
messageSends: ["nextPut:", "ifTrue:ifFalse:", "prettyPrintSpace", "indentedDo:", "newlineIndent", "do:separatedBy:", "listElementSeparator", "isEmpty"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeMap:",
category: 'writing',
fn: function (pairs){
var self=this;
var first;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
first=true;
_st(self["@writeStream"])._nextPut_("{");
$1=_st(pairs)._isEmpty();
if(smalltalk.assert($1)){
_st(self)._prettyPrintSpace();
} else {
_st(self)._indentedDo_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._newlineIndent();
return _st(pairs)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {
$2=first;
if(smalltalk.assert($2)){
first=false;
first;
} else {
_st(self)._mapElementSeparator();
};
return _st(self)._encodeKey_value_(key,value);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._newlineIndent();
};
_st(self["@writeStream"])._nextPut_("}");
return self}, function($ctx1) {$ctx1.fill(self,"encodeMap:",{pairs:pairs,first:first},smalltalk.STONWriter)})},
args: ["pairs"],
source: "encodeMap: pairs\x0a\x09| first |\x0a\x09first := true.\x0a\x09writeStream nextPut: '{'.\x0a\x09pairs isEmpty\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self prettyPrintSpace ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self indentedDo: [\x0a\x09\x09\x09\x09self newlineIndent.\x0a\x09\x09\x09\x09pairs keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09\x09first \x0a\x09\x09\x09\x09\x09\x09ifTrue: [ first := false ] \x0a\x09\x09\x09\x09\x09\x09ifFalse: [ self mapElementSeparator ].\x0a\x09\x09\x09\x09\x09self encodeKey: key value: value ] ].\x0a\x09\x09\x09self newlineIndent ].\x0a\x09writeStream nextPut: '}'",
messageSends: ["nextPut:", "ifTrue:ifFalse:", "prettyPrintSpace", "indentedDo:", "newlineIndent", "keysAndValuesDo:", "mapElementSeparator", "encodeKey:value:", "isEmpty"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeString:",
category: 'private',
fn: function (string){
var self=this;
var encodedString;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5;
encodedString=string;
$1=self["@writeStream"];
$3=self["@jsonMode"];
if(smalltalk.assert($3)){
$2="\x22";
} else {
$2="'";
};
_st($1)._nextPut_($2);
_st(encodedString)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._encodeCharacter_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$4=self["@writeStream"];
$6=self["@jsonMode"];
if(smalltalk.assert($6)){
$5="\x22";
} else {
$5="'";
};
_st($4)._nextPut_($5);
return self}, function($ctx1) {$ctx1.fill(self,"encodeString:",{string:string,encodedString:encodedString},smalltalk.STONWriter)})},
args: ["string"],
source: "encodeString: string\x0a  | encodedString |\x0a  \x22TODO: encodedString := string convertToEncoding: #'utf-8'.\x22\x0a  encodedString := string.\x0a  writeStream\x0a    nextPut:\x0a      (jsonMode\x0a        ifTrue: [ '\x22' ]\x0a        ifFalse: [ '''' ]).\x0a  encodedString do: [ :each | self encodeCharacter: each ].\x0a  writeStream\x0a    nextPut:\x0a      (jsonMode\x0a        ifTrue: [ '\x22' ]\x0a        ifFalse: [ '''' ])",
messageSends: ["nextPut:", "ifTrue:ifFalse:", "do:", "encodeCharacter:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "indentedDo:",
category: 'private',
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@level"]=_st(self["@level"]).__plus((1));
_st(block)._value();
self["@level"]=_st(self["@level"]).__minus((1));
return self}, function($ctx1) {$ctx1.fill(self,"indentedDo:",{block:block},smalltalk.STONWriter)})},
args: ["block"],
source: "indentedDo: block\x0a\x09level := level + 1.\x0a\x09block value.\x0a\x09level := level - 1",
messageSends: ["+", "value", "-"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@prettyPrint"]=false;
self["@level"]=(0);
self["@referencePolicy"]="normal";
self["@jsonMode"]=false;
self["@objects"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.STONWriter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09prettyPrint := false.\x0a\x09level := 0.\x0a\x09referencePolicy := #normal.\x0a\x09jsonMode := false.\x0a\x09\x22TODO: objects := IdentityDictionary new\x22\x0a\x09objects := Dictionary new",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "isSimpleSymbol:",
category: 'private',
fn: function (symbol){
var self=this;
function $STONSimpleSymbolCharacters(){return smalltalk.STONSimpleSymbolCharacters||(typeof STONSimpleSymbolCharacters=="undefined"?nil:STONSimpleSymbolCharacters)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(symbol)._class())._findFirstInString_inSet_startingAt_(symbol,$STONSimpleSymbolCharacters(),(1))).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbol:",{symbol:symbol},smalltalk.STONWriter)})},
args: ["symbol"],
source: "isSimpleSymbol: symbol\x0a\x09^ (symbol class \x0a\x09\x09findFirstInString: symbol \x0a\x09\x09inSet: STONSimpleSymbolCharacters \x0a\x09\x09startingAt: 1) = 0",
messageSends: ["=", "findFirstInString:inSet:startingAt:", "class"],
referencedClasses: ["STONSimpleSymbolCharacters"]
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonMode:",
category: 'initialize-release',
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@jsonMode"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"jsonMode:",{boolean:boolean},smalltalk.STONWriter)})},
args: ["boolean"],
source: "jsonMode: boolean\x0a\x09jsonMode := boolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "listElementSeparator",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._nextPut_(",");
_st(self)._newlineIndent();
return self}, function($ctx1) {$ctx1.fill(self,"listElementSeparator",{},smalltalk.STONWriter)})},
args: [],
source: "listElementSeparator\x0a\x09writeStream nextPut: ','.\x0a\x09self newlineIndent",
messageSends: ["nextPut:", "newlineIndent"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "mapElementSeparator",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._nextPut_(",");
_st(self)._newlineIndent();
return self}, function($ctx1) {$ctx1.fill(self,"mapElementSeparator",{},smalltalk.STONWriter)})},
args: [],
source: "mapElementSeparator\x0a\x09writeStream nextPut: ','.\x0a\x09self newlineIndent",
messageSends: ["nextPut:", "newlineIndent"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "newlineIndent",
category: 'private',
fn: function (){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@prettyPrint"];
if(smalltalk.assert($1)){
_st(self["@writeStream"])._nextPut_(_st($Character())._cr());
_st(self["@level"])._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@writeStream"])._tab();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"newlineIndent",{},smalltalk.STONWriter)})},
args: [],
source: "newlineIndent\x0a\x09prettyPrint ifTrue: [ \x0a\x09\x09writeStream nextPut: Character cr.\x0a\x09\x09level timesRepeat: [ writeStream tab ] ]",
messageSends: ["ifTrue:", "nextPut:", "cr", "timesRepeat:", "tab"],
referencedClasses: ["Character"]
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'public',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._stonOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.STONWriter)})},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09anObject stonOn: self",
messageSends: ["stonOn:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'initialize-release',
fn: function (aWriteStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@writeStream"]=aWriteStream;
return self}, function($ctx1) {$ctx1.fill(self,"on:",{aWriteStream:aWriteStream},smalltalk.STONWriter)})},
args: ["aWriteStream"],
source: "on: aWriteStream\x0a\x09writeStream := aWriteStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "prettyPrint:",
category: 'initialize-release',
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@prettyPrint"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"prettyPrint:",{boolean:boolean},smalltalk.STONWriter)})},
args: ["boolean"],
source: "prettyPrint: boolean\x0a\x09prettyPrint := boolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "prettyPrintSpace",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@prettyPrint"];
if(smalltalk.assert($1)){
_st(self["@writeStream"])._space();
};
return self}, function($ctx1) {$ctx1.fill(self,"prettyPrintSpace",{},smalltalk.STONWriter)})},
args: [],
source: "prettyPrintSpace\x0a\x09prettyPrint ifTrue: [ writeStream space ]",
messageSends: ["ifTrue:", "space"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "referencePolicy:",
category: 'initialize-release',
fn: function (policy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._assert_(_st(["normal", "ignore", "error"])._includes_(policy));
self["@referencePolicy"]=policy;
return self}, function($ctx1) {$ctx1.fill(self,"referencePolicy:",{policy:policy},smalltalk.STONWriter)})},
args: ["policy"],
source: "referencePolicy: policy\x0a\x09self assert: ( #(#normal #ignore #error) includes: policy ).\x0a\x09referencePolicy := policy",
messageSends: ["assert:", "includes:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@objects"])._removeAll();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.STONWriter)})},
args: [],
source: "reset\x0a\x09objects removeAll",
messageSends: ["removeAll"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "shortListElementSeparator",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._nextPut_(",");
_st(self)._prettyPrintSpace();
return self}, function($ctx1) {$ctx1.fill(self,"shortListElementSeparator",{},smalltalk.STONWriter)})},
args: [],
source: "shortListElementSeparator\x0a\x09writeStream nextPut: ','.\x0a\x09self prettyPrintSpace",
messageSends: ["nextPut:", "prettyPrintSpace"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: 'private',
fn: function (object,block){
var self=this;
var index;
function $STONWriterError(){return smalltalk.STONWriterError||(typeof STONWriterError=="undefined"?nil:STONWriterError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(self["@referencePolicy"]).__eq("ignore");
if(smalltalk.assert($1)){
$2=_st(block)._value();
return $2;
};
index=_st(self["@objects"])._at_ifAbsent_(object,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(index)._notNil();
if(smalltalk.assert($3)){
$4=_st(self["@referencePolicy"]).__eq("error");
if(smalltalk.assert($4)){
$5=_st($STONWriterError())._signal_("Shared reference detected");
return $5;
};
_st(self)._writeReference_(index);
} else {
index=_st(_st(self["@objects"])._size()).__plus((1));
index;
_st(self["@objects"])._at_put_(object,index);
_st(block)._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{object:object,block:block,index:index},smalltalk.STONWriter)})},
args: ["object", "block"],
source: "with: object do: block\x0a\x09| index |\x0a\x09referencePolicy = #ignore \x0a\x09\x09ifTrue: [ ^ block value ].\x0a\x09(index := objects at: object ifAbsent: [ nil ]) notNil\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09referencePolicy = #error\x0a\x09\x09\x09\x09ifTrue: [ ^ STONWriterError signal: 'Shared reference detected' ].\x0a\x09\x09\x09self writeReference: index ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09index := objects size + 1.\x0a\x09\x09\x09objects at: object put: index.\x0a\x09\x09\x09block value ]",
messageSends: ["ifTrue:", "value", "=", "ifTrue:ifFalse:", "signal:", "writeReference:", "+", "size", "at:put:", "notNil", "at:ifAbsent:"],
referencedClasses: ["STONWriterError"]
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeBoolean:",
category: 'writing',
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._print_(boolean);
return self}, function($ctx1) {$ctx1.fill(self,"writeBoolean:",{boolean:boolean},smalltalk.STONWriter)})},
args: ["boolean"],
source: "writeBoolean: boolean\x0a\x09writeStream print: boolean",
messageSends: ["print:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeFloat:",
category: 'writing',
fn: function (float){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._print_(float);
return self}, function($ctx1) {$ctx1.fill(self,"writeFloat:",{float:float},smalltalk.STONWriter)})},
args: ["float"],
source: "writeFloat: float\x0a\x09writeStream print: float",
messageSends: ["print:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeInteger:",
category: 'writing',
fn: function (integer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._print_(integer);
return self}, function($ctx1) {$ctx1.fill(self,"writeInteger:",{integer:integer},smalltalk.STONWriter)})},
args: ["integer"],
source: "writeInteger: integer\x0a\x09writeStream print: integer",
messageSends: ["print:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeList:",
category: 'writing',
fn: function (collection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._with_do_(collection,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._encodeList_(collection);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeList:",{collection:collection},smalltalk.STONWriter)})},
args: ["collection"],
source: "writeList: collection\x0a\x09self with: collection do: [ \x0a\x09\x09self encodeList: collection ]",
messageSends: ["with:do:", "encodeList:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeMap:",
category: 'writing',
fn: function (hashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._with_do_(hashedCollection,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._encodeMap_(hashedCollection);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeMap:",{hashedCollection:hashedCollection},smalltalk.STONWriter)})},
args: ["hashedCollection"],
source: "writeMap: hashedCollection\x0a\x09self with: hashedCollection do: [ \x0a\x09\x09self encodeMap: hashedCollection ]",
messageSends: ["with:do:", "encodeMap:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeNull",
category: 'writing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@jsonMode"];
if(smalltalk.assert($1)){
_st(self["@writeStream"])._nextPutAll_("null");
} else {
_st(self["@writeStream"])._print_(nil);
};
return self}, function($ctx1) {$ctx1.fill(self,"writeNull",{},smalltalk.STONWriter)})},
args: [],
source: "writeNull\x0a\x09jsonMode\x0a\x09\x09ifTrue: [ writeStream nextPutAll: 'null' ]\x0a\x09\x09ifFalse: [ writeStream print: nil ]",
messageSends: ["ifTrue:ifFalse:", "nextPutAll:", "print:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:do:",
category: 'writing',
fn: function (anObject,block){
var self=this;
function $STONWriterError(){return smalltalk.STONWriterError||(typeof STONWriterError=="undefined"?nil:STONWriterError)}
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@jsonMode"])._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(anObject)._class()).__tild_eq(_st($STON())._listClass()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(anObject)._class()).__tild_eq(_st($STON())._mapClass());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st($STONWriterError())._signal_("Wrong object class for JSON mode");
};
_st(self)._with_do_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@writeStream"])._nextPutAll_(_st(_st(anObject)._class())._stonName());
_st(self)._prettyPrintSpace();
return _st(block)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeObject:do:",{anObject:anObject,block:block},smalltalk.STONWriter)})},
args: ["anObject", "block"],
source: "writeObject: anObject do: block\x0a\x09(jsonMode and: [ anObject class ~= STON listClass and: [ anObject class ~= STON mapClass ] ])\x0a\x09\x09ifTrue: [ STONWriterError signal: 'Wrong object class for JSON mode' ].\x0a\x09self with: anObject do: [\x0a\x09\x09writeStream nextPutAll: anObject class stonName.\x0a\x09\x09self prettyPrintSpace.\x0a\x09\x09block value ]",
messageSends: ["ifTrue:", "signal:", "and:", "~=", "mapClass", "class", "listClass", "with:do:", "nextPutAll:", "stonName", "prettyPrintSpace", "value"],
referencedClasses: ["STONWriterError", "STON"]
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:listSingleton:",
category: 'writing',
fn: function (object,element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._writeObject_do_(object,(function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@writeStream"])._nextPut_("[");
$1=self;
_st($1)._prettyPrintSpace();
_st($1)._nextPut_(element);
$2=_st($1)._prettyPrintSpace();
$2;
return _st(self["@writeStream"])._nextPut_("]");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeObject:listSingleton:",{object:object,element:element},smalltalk.STONWriter)})},
args: ["object", "element"],
source: "writeObject: object listSingleton: element\x0a\x09self writeObject: object do: [\x0a\x09\x09writeStream nextPut: '['.\x0a\x09\x09self \x0a\x09\x09\x09prettyPrintSpace;\x0a\x09\x09\x09nextPut: element;\x0a\x09\x09\x09prettyPrintSpace.\x0a\x09\x09writeStream nextPut: ']' ]",
messageSends: ["writeObject:do:", "nextPut:", "prettyPrintSpace"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:streamList:",
category: 'writing',
fn: function (object,block){
var self=this;
function $STONListWriter(){return smalltalk.STONListWriter||(typeof STONListWriter=="undefined"?nil:STONListWriter)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._writeObject_do_(object,(function(){
var listWriter;
return smalltalk.withContext(function($ctx2) {
listWriter=_st($STONListWriter())._on_(self);
listWriter;
_st(self["@writeStream"])._nextPut_("[");
_st(self)._indentedDo_((function(){
return smalltalk.withContext(function($ctx3) {
_st(self)._newlineIndent();
return _st(block)._value_(listWriter);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
_st(self)._newlineIndent();
return _st(self["@writeStream"])._nextPut_("]");
}, function($ctx2) {$ctx2.fillBlock({listWriter:listWriter},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeObject:streamList:",{object:object,block:block},smalltalk.STONWriter)})},
args: ["object", "block"],
source: "writeObject: object streamList: block\x0a\x09self writeObject: object do: [ | listWriter |\x0a\x09\x09listWriter := STONListWriter on: self.\x0a\x09\x09writeStream nextPut: '['.\x0a\x09\x09self indentedDo: [\x0a\x09\x09\x09self newlineIndent.\x0a\x09\x09\x09block value: listWriter ].\x0a\x09\x09self newlineIndent.\x0a\x09\x09writeStream nextPut: ']' ]",
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "newlineIndent", "value:"],
referencedClasses: ["STONListWriter"]
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:streamMap:",
category: 'writing',
fn: function (object,block){
var self=this;
function $STONMapWriter(){return smalltalk.STONMapWriter||(typeof STONMapWriter=="undefined"?nil:STONMapWriter)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._writeObject_do_(object,(function(){
var mapWriter;
return smalltalk.withContext(function($ctx2) {
mapWriter=_st($STONMapWriter())._on_(self);
mapWriter;
_st(self["@writeStream"])._nextPut_("{");
_st(self)._indentedDo_((function(){
return smalltalk.withContext(function($ctx3) {
_st(self)._newlineIndent();
return _st(block)._value_(mapWriter);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
_st(self)._newlineIndent();
return _st(self["@writeStream"])._nextPut_("}");
}, function($ctx2) {$ctx2.fillBlock({mapWriter:mapWriter},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeObject:streamMap:",{object:object,block:block},smalltalk.STONWriter)})},
args: ["object", "block"],
source: "writeObject: object streamMap: block\x0a\x09self writeObject: object do: [ | mapWriter |\x0a\x09\x09mapWriter := STONMapWriter on: self.\x0a\x09\x09writeStream nextPut: '{'.\x0a\x09\x09self indentedDo: [\x0a\x09\x09\x09self newlineIndent.\x0a\x09\x09\x09block value: mapWriter ].\x0a\x09\x09self newlineIndent.\x0a\x09\x09writeStream nextPut: '}' ]",
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "newlineIndent", "value:"],
referencedClasses: ["STONMapWriter"]
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:streamShortList:",
category: 'writing',
fn: function (object,block){
var self=this;
function $STONShortListWriter(){return smalltalk.STONShortListWriter||(typeof STONShortListWriter=="undefined"?nil:STONShortListWriter)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._writeObject_do_(object,(function(){
var listWriter;
return smalltalk.withContext(function($ctx2) {
listWriter=_st($STONShortListWriter())._on_(self);
listWriter;
_st(self["@writeStream"])._nextPut_("[");
_st(self)._indentedDo_((function(){
return smalltalk.withContext(function($ctx3) {
_st(self)._prettyPrintSpace();
return _st(block)._value_(listWriter);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
_st(self)._prettyPrintSpace();
return _st(self["@writeStream"])._nextPut_("]");
}, function($ctx2) {$ctx2.fillBlock({listWriter:listWriter},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeObject:streamShortList:",{object:object,block:block},smalltalk.STONWriter)})},
args: ["object", "block"],
source: "writeObject: object streamShortList: block\x0a\x09self writeObject: object do: [ | listWriter |\x0a\x09\x09listWriter := STONShortListWriter on: self.\x0a\x09\x09writeStream nextPut: '['.\x0a\x09\x09self indentedDo: [\x0a\x09\x09\x09self prettyPrintSpace.\x0a\x09\x09\x09block value: listWriter ].\x0a\x09\x09self prettyPrintSpace.\x0a\x09\x09writeStream nextPut: ']' ]",
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "prettyPrintSpace", "value:"],
referencedClasses: ["STONShortListWriter"]
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeReference:",
category: 'writing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@writeStream"];
_st($1)._nextPut_("@");
$2=_st($1)._print_(index);
return self}, function($ctx1) {$ctx1.fill(self,"writeReference:",{index:index},smalltalk.STONWriter)})},
args: ["index"],
source: "writeReference: index\x0a\x09writeStream\x0a\x09\x09nextPut: '@';\x0a\x09\x09print: index",
messageSends: ["nextPut:", "print:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeString:",
category: 'writing',
fn: function (string){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._encodeString_(string);
return self}, function($ctx1) {$ctx1.fill(self,"writeString:",{string:string},smalltalk.STONWriter)})},
args: ["string"],
source: "writeString: string\x0a\x09self encodeString: string",
messageSends: ["encodeString:"],
referencedClasses: []
}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeSymbol:",
category: 'writing',
fn: function (symbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@jsonMode"];
if(smalltalk.assert($1)){
_st(self)._writeString_(symbol);
} else {
_st(self["@writeStream"])._nextPut_("#");
$2=_st(self)._isSimpleSymbol_(symbol);
if(smalltalk.assert($2)){
_st(self["@writeStream"])._nextPutAll_(symbol);
} else {
_st(self)._encodeString_(symbol);
};
};
return self}, function($ctx1) {$ctx1.fill(self,"writeSymbol:",{symbol:symbol},smalltalk.STONWriter)})},
args: ["symbol"],
source: "writeSymbol: symbol\x0a\x09jsonMode\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self writeString: symbol ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09writeStream nextPut: '#'.\x0a\x09\x09\x09(self isSimpleSymbol: symbol)\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09writeStream nextPutAll: symbol ]\x0a\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09self encodeString: symbol ] ]",
messageSends: ["ifTrue:ifFalse:", "writeString:", "nextPut:", "nextPutAll:", "encodeString:", "isSimpleSymbol:"],
referencedClasses: []
}),
smalltalk.STONWriter);


smalltalk.STONWriter.klass.iVarNames = ['sTONCharacters','sTONSimpleSymbolCharacters'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'class initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initializeSTONCharacters();
_st(self)._initializeSTONSimpleSymbolCharacters();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.STONWriter.klass)})},
args: [],
source: "initialize\x0a\x09self initializeSTONCharacters.\x0a\x09self initializeSTONSimpleSymbolCharacters",
messageSends: ["initializeSTONCharacters", "initializeSTONSimpleSymbolCharacters"],
referencedClasses: []
}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSTONCharacters",
category: 'class initialization',
fn: function (){
var self=this;
var escapes;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@sTONCharacters"]=_st($Array())._new_((127));
_st((32))._to_do_((126),(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@sTONCharacters"])._at_put_(_st(each).__plus((1)),"pass");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
escapes=[(8), "\x5cb", (9), "\x5ct", (10), "\x5cn", (12), "\x5cf", (13), "\x5cr", (34), "\x5c\x22", (39), "\x5c'", (92), "\x5c\x5c"];
_st((1))._to_by_do_(_st(_st(escapes)._size()).__minus((1)),(2),(function(index){
return smalltalk.withContext(function($ctx2) {
return _st(self["@sTONCharacters"])._at_put_(_st(_st(escapes)._at_(index)).__plus((1)),_st(escapes)._at_(_st(index).__plus((1))));
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSTONCharacters",{escapes:escapes},smalltalk.STONWriter.klass)})},
args: [],
source: "initializeSTONCharacters\x0a\x09| escapes |\x0a\x09sTONCharacters := Array new: 127.\x0a\x0932 to: 126 do: [ :each | \x0a\x09\x09sTONCharacters at: each + 1 put: #pass ].\x0a\x09escapes := #( 8 '\x5cb' 9 '\x5ct' 10 '\x5cn' 12 '\x5cf' 13 '\x5cr' 34 '\x5c\x22' 39 '\x5c''' 92 '\x5c\x5c' ).\x0a\x091 to: escapes size - 1 by: 2 do: [ :index | \x0a\x09\x09sTONCharacters \x0a\x09\x09\x09at: (escapes at: index) + 1\x0a\x09\x09\x09put: (escapes at: index + 1) ]\x0a\x09",
messageSends: ["new:", "to:do:", "at:put:", "+", "to:by:do:", "-", "size", "at:"],
referencedClasses: ["Array"]
}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSTONSimpleSymbolCharacters",
category: 'class initialization',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@sTONSimpleSymbolCharacters"]=_st($Array())._new_withAll_((256),(1));
_st((1))._to_do_((256),(function(each){
var char;
return smalltalk.withContext(function($ctx2) {
char=_st(_st(each).__minus((1)))._asCharacter();
char;
$1=_st(self)._isSimpleSymbolChar_(char);
if(smalltalk.assert($1)){
return _st(self["@sTONSimpleSymbolCharacters"])._at_put_(each,(0));
};
}, function($ctx2) {$ctx2.fillBlock({each:each,char:char},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSTONSimpleSymbolCharacters",{},smalltalk.STONWriter.klass)})},
args: [],
source: "initializeSTONSimpleSymbolCharacters\x0a\x09\x22STONSimpleSymbolCharacters asArray collectWithIndex: [ :each :index |\x0a\x09\x09each isZero ifTrue: [ (index - 1) asCharacter ] ].\x22\x0a\x09\x09\x0a\x09sTONSimpleSymbolCharacters := Array new: 256 withAll: 1.\x0a\x091 to: 256 do: [ :each | | char |\x0a\x09\x09char := (each - 1) asCharacter.\x0a\x09\x09(self isSimpleSymbolChar: char)\x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09sTONSimpleSymbolCharacters at: each put: 0 ] ]",
messageSends: ["new:withAll:", "to:do:", "asCharacter", "-", "ifTrue:", "at:put:", "isSimpleSymbolChar:"],
referencedClasses: ["Array"]
}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isSimpleSymbolChar:",
category: 'private',
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./")._includes_(char);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbolChar:",{char:char},smalltalk.STONWriter.klass)})},
args: ["char"],
source: "isSimpleSymbolChar: char\x0a\x09^ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./' includes: char",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (writeStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._on_(writeStream);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{writeStream:writeStream},smalltalk.STONWriter.klass)})},
args: ["writeStream"],
source: "on: writeStream\x0a\x09^ self new\x0a\x09\x09on: writeStream;\x0a\x09\x09yourself",
messageSends: ["on:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stonCharacters",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sTONCharacters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stonCharacters",{},smalltalk.STONWriter.klass)})},
args: [],
source: "stonCharacters\x0a\x09^ sTONCharacters",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stonSimpleSymbolCharacters",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sTONSimpleSymbolCharacters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stonSimpleSymbolCharacters",{},smalltalk.STONWriter.klass)})},
args: [],
source: "stonSimpleSymbolCharacters\x0a\x09^ sTONSimpleSymbolCharacters",
messageSends: [],
referencedClasses: []
}),
smalltalk.STONWriter.klass);


smalltalk.addClass('STONWriterError', smalltalk.Error, [], 'STON-Core');


