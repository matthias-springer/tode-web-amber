smalltalk.addPackage('STON-Core');
smalltalk.addClass('STON', smalltalk.Object, [], 'STON-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "fromStream:",
fn: function (readStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._reader())._on_(readStream))._next();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromStream:",{readStream:readStream},smalltalk.STON.klass)})},
messageSends: ["next", "on:", "reader"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (string){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._fromStream_(_st(string)._readStream());
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{string:string},smalltalk.STON.klass)})},
messageSends: ["fromStream:", "readStream"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonWriter",
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
messageSends: ["jsonMode:", "new", "yourself"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listClass",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Array();
return $1;
}, function($ctx1) {$ctx1.fill(self,"listClass",{},smalltalk.STON.klass)})},
messageSends: []}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "mapClass",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Dictionary();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapClass",{},smalltalk.STON.klass)})},
messageSends: []}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "put:asJsonOnStream:",
fn: function (object,stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._jsonWriter())._on_(stream))._nextPut_(object);
return self}, function($ctx1) {$ctx1.fill(self,"put:asJsonOnStream:",{object:object,stream:stream},smalltalk.STON.klass)})},
messageSends: ["nextPut:", "on:", "jsonWriter"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "put:asJsonOnStreamPretty:",
fn: function (object,stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._jsonWriter())._on_(stream);
_st($1)._prettyPrint_(true);
$2=_st($1)._nextPut_(object);
return self}, function($ctx1) {$ctx1.fill(self,"put:asJsonOnStreamPretty:",{object:object,stream:stream},smalltalk.STON.klass)})},
messageSends: ["prettyPrint:", "on:", "jsonWriter", "nextPut:"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "put:onStream:",
fn: function (object,stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._writer())._on_(stream))._nextPut_(object);
return self}, function($ctx1) {$ctx1.fill(self,"put:onStream:",{object:object,stream:stream},smalltalk.STON.klass)})},
messageSends: ["nextPut:", "on:", "writer"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "put:onStreamPretty:",
fn: function (object,stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._writer())._on_(stream);
_st($1)._prettyPrint_(true);
$2=_st($1)._nextPut_(object);
return self}, function($ctx1) {$ctx1.fill(self,"put:onStreamPretty:",{object:object,stream:stream},smalltalk.STON.klass)})},
messageSends: ["prettyPrint:", "on:", "writer", "nextPut:"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "reader",
fn: function (){
var self=this;
function $STONReader(){return smalltalk.STONReader||(typeof STONReader=="undefined"?nil:STONReader)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STONReader())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"reader",{},smalltalk.STON.klass)})},
messageSends: ["new"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toJsonString:",
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
messageSends: ["streamContents:", "put:asJsonOnStream:"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toJsonStringPretty:",
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
messageSends: ["streamContents:", "put:asJsonOnStreamPretty:"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toString:",
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
messageSends: ["streamContents:", "put:onStream:"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toStringPretty:",
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
messageSends: ["streamContents:", "put:onStreamPretty:"]}),
smalltalk.STON.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "writer",
fn: function (){
var self=this;
function $STONWriter(){return smalltalk.STONWriter||(typeof STONWriter=="undefined"?nil:STONWriter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STONWriter())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"writer",{},smalltalk.STON.klass)})},
messageSends: ["new"]}),
smalltalk.STON.klass);


smalltalk.addClass('STONReader', smalltalk.Object, ['readStream', 'objects', 'classes', 'unresolvedReferences', 'stringStream'], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@readStream"])._atEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.STONReader)})},
messageSends: ["atEnd"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
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
messageSends: ["ifNotNil:", "close"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "consumeWhitespace",
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
messageSends: ["whileTrue:", "next", "and:", "isSeparator", "peek", "not", "atEnd"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
fn: function (aString){
var self=this;
function $STONReaderError(){return smalltalk.STONReaderError||(typeof STONReaderError=="undefined"?nil:STONReaderError)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($STONReaderError())._signal_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},smalltalk.STONReader)})},
messageSends: ["signal:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "expectChar:",
fn: function (character){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._matchChar_(character);
if(! smalltalk.assert($1)){
_st(self)._error_(_st(_st(character)._asString()).__comma(" expected"));
};
return self}, function($ctx1) {$ctx1.fill(self,"expectChar:",{character:character},smalltalk.STONReader)})},
messageSends: ["ifFalse:", "error:", ",", "asString", "matchChar:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@objects"]=_st($Dictionary())._new();
self["@classes"]=_st($Dictionary())._new();
self["@unresolvedReferences"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.STONReader)})},
messageSends: ["initialize", "new"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "isClassChar:",
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")._includes_(char);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isClassChar:",{char:char},smalltalk.STONReader)})},
messageSends: ["includes:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "isClassStartChar:",
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("ABCDEFGHIJKLMNOPQRSTUVWXYZ")._includes_(char);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isClassStartChar:",{char:char},smalltalk.STONReader)})},
messageSends: ["includes:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "isSimpleSymbolChar:",
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./")._includes_(char);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbolChar:",{char:char},smalltalk.STONReader)})},
messageSends: ["includes:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupClass:",
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
messageSends: ["at:ifPresent:", "current", "at:ifAbsentPut:", "detect:ifNone:", "==", "stonName", "error:", ",", "printString", "allSubclasses"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "match:do:",
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
messageSends: ["ifTrue:", "value", "allSatisfy:", "matchChar:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "matchChar:",
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
messageSends: ["ifTrue:ifFalse:", "next", "consumeWhitespace", "=", "peek"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "newReference",
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
messageSends: ["+", "size", "index:", "at:put:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
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
messageSends: ["consumeWhitespace", "parseValue", "ifTrue:", "processSubObjectsOf:", ">"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aReadStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@readStream"]=aReadStream;
return self}, function($ctx1) {$ctx1.fill(self,"on:",{aReadStream:aReadStream},smalltalk.STONReader)})},
messageSends: []}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseCharacter",
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
messageSends: ["ifFalse:", "=", "next", "ifTrue:", "includes:", "backspace", "newPage", "lf", "cr", "tab", "parseCharacterHex", "error:", ",", "with:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseCharacterHex",
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
messageSends: ["parseCharacterHexDigit", "timesRepeat:", "+", "<<", "codePoint:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseCharacterHexDigit",
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
messageSends: ["ifFalse:", "asciiValue", "next", "ifTrue:", "-", "between:and:", "atEnd", "error:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseClass",
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
messageSends: ["stringStreamContents:", "whileTrue:", "nextPut:", "next", "and:", "isClassChar:", "peek", "not", "atEnd", "consumeWhitespace", "lookupClass:", "asSymbol"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseConstantDo:",
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
messageSends: ["ifTrue:", "match:do:", "value:", "=", "peek", "next"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseList",
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
messageSends: ["newReference", "streamContents:", "parseListDo:", "nextPut:", "listClass", "setReference:to:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseListDo:",
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
messageSends: ["expectChar:", "ifTrue:", "matchChar:", "whileFalse:", "cull:cull:", "parseValue", "+", "atEnd", "error:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseListSingleton",
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
messageSends: ["parseListDo:", "ifTrue:", "="]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseMap",
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
messageSends: ["new", "mapClass", "storeReference:", "parseMapDo:", "at:put:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseMapDo:",
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
messageSends: ["expectChar:", "ifTrue:", "matchChar:", "whileFalse:", "parseValue", "ifFalse:", "error:", "or:", "isNumber", "isString", "value:value:", "atEnd"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseNumber",
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
messageSends: ["=", "peek", "ifTrue:", "next", "parseNumberInteger", "+", "parseNumberFraction", "*", "parseNumberExponent", "or:", "negated", "consumeWhitespace"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseNumberExponent",
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
messageSends: ["=", "peek", "ifTrue:", "next", "or:", "whileTrue:", "+", "digitValue", "*", "and:", "isDigit", "not", "atEnd", "negated", "raisedTo:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseNumberFraction",
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
messageSends: ["whileTrue:", "+", "digitValue", "next", "*", "and:", "isDigit", "peek", "not", "atEnd", "/"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseNumberInteger",
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
messageSends: ["whileTrue:", "+", "digitValue", "next", "*", "and:", "isDigit", "peek", "not", "atEnd"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseObject",
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
messageSends: ["parseClass", "newReference", "fromSton:", "setReference:to:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseReference",
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
messageSends: ["expectChar:", "parseNumberInteger", "consumeWhitespace", "resolveReferenceIndex:", "ifTrue:", "+", "isStonReference"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._parseStringInternal();
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseString",{},smalltalk.STONReader)})},
messageSends: ["parseStringInternal"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseStringInternal",
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
messageSends: ["next", "ifFalse:", "error:", "or:", "=", "stringStreamContents:", "whileFalse:", "nextPut:", "parseCharacter", "peek", "atEnd", "expectChar:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseSymbol",
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
messageSends: ["expectChar:", "ifTrue:", "asSymbol", "parseStringInternal", "=", "peek", "stringStreamContents:", "whileTrue:", "nextPut:", "next", "and:", "isSimpleSymbolChar:", "not", "atEnd", "ifFalse:", "consumeWhitespace", "isEmpty", "error:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "parseValue",
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
messageSends: ["ifFalse:", "ifTrue:", "parseObject", "isClassStartChar:", "peek", "parseMap", "=", "parseList", "parseString", "or:", "parseSymbol", "parseReference", "parseNumber", "isDigit", "parseConstantDo:", "atEnd", "error:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "processSubObjectsOf:",
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
messageSends: ["stonProcessSubObjects:", "ifTrue:ifFalse:", "resolveReference:", "processSubObjectsOf:", "isStonReference"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "resolveReference:",
fn: function (reference){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._resolveReferenceIndex_(_st(reference)._index());
return $1;
}, function($ctx1) {$ctx1.fill(self,"resolveReference:",{reference:reference},smalltalk.STONReader)})},
messageSends: ["resolveReferenceIndex:", "index"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "resolveReferenceIndex:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@objects"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"resolveReferenceIndex:",{index:index},smalltalk.STONReader)})},
messageSends: ["at:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "setReference:to:",
fn: function (reference,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@objects"])._at_put_(_st(reference)._index(),object);
return self}, function($ctx1) {$ctx1.fill(self,"setReference:to:",{reference:reference,object:object},smalltalk.STONReader)})},
messageSends: ["at:put:", "index"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "storeReference:",
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
messageSends: ["+", "size", "at:put:"]}),
smalltalk.STONReader);

smalltalk.addMethod(
smalltalk.method({
selector: "stringStreamContents:",
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
$2=_st(self["@stringStream"])._contents();
return $2;
}, function($ctx1) {$ctx1.fill(self,"stringStreamContents:",{block:block},smalltalk.STONReader)})},
messageSends: ["ifNil:", "writeStream", "new:", "reset", "value:", "contents"]}),
smalltalk.STONReader);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["on:", "new", "yourself"]}),
smalltalk.STONReader.klass);


smalltalk.addClass('STONReaderError', smalltalk.Error, [], 'STON-Core');


smalltalk.addClass('STONReference', smalltalk.Object, ['index'], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["and:", "=", "index", "==", "class"]}),
smalltalk.STONReference);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@index"])._hash();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.STONReference)})},
messageSends: ["hash"]}),
smalltalk.STONReference);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.STONReference)})},
messageSends: []}),
smalltalk.STONReference);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
fn: function (integer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=integer;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{integer:integer},smalltalk.STONReference)})},
messageSends: []}),
smalltalk.STONReference);

smalltalk.addMethod(
smalltalk.method({
selector: "isStonReference",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isStonReference",{},smalltalk.STONReference)})},
messageSends: []}),
smalltalk.STONReference);


smalltalk.addMethod(
smalltalk.method({
selector: "index:",
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
messageSends: ["index:", "new", "yourself"]}),
smalltalk.STONReference.klass);


smalltalk.addClass('STONStreamWriter', smalltalk.Object, ['writer', 'first'], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@first"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.STONStreamWriter)})},
messageSends: ["initialize"]}),
smalltalk.STONStreamWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (stonWriter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@writer"]=stonWriter;
return self}, function($ctx1) {$ctx1.fill(self,"on:",{stonWriter:stonWriter},smalltalk.STONStreamWriter)})},
messageSends: []}),
smalltalk.STONStreamWriter);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["on:", "new", "yourself"]}),
smalltalk.STONStreamWriter.klass);


smalltalk.addClass('STONListWriter', smalltalk.STONStreamWriter, [], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
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
messageSends: ["ifTrue:ifFalse:", "listElementSeparator", "nextPut:"]}),
smalltalk.STONListWriter);



smalltalk.addClass('STONShortListWriter', smalltalk.STONListWriter, [], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
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
messageSends: ["ifTrue:ifFalse:", "shortListElementSeparator", "nextPut:"]}),
smalltalk.STONShortListWriter);



smalltalk.addClass('STONMapWriter', smalltalk.STONStreamWriter, [], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
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
messageSends: ["ifTrue:ifFalse:", "mapElementSeparator", "encodeKey:value:"]}),
smalltalk.STONMapWriter);



smalltalk.addClass('STONWriter', smalltalk.Object, ['writeStream', 'prettyPrint', 'jsonMode', 'referencePolicy', 'level', 'objects'], 'STON-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "close",
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
messageSends: ["ifNotNil:", "close"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeCharacter:",
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
messageSends: ["ifTrue:ifFalse:", "nextPut:", "nextPutAll:", "=", "printOn:base:nDigits:", "and:", "notNil", "at:", "+", "stonCharacters", "class", "<", "codePoint"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeKey:value:",
fn: function (key,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._nextPut_(key);
_st(self)._prettyPrintSpace();
_st(self["@writeStream"])._nextPut_(":");
_st(self)._prettyPrintSpace();
_st(self)._nextPut_(value);
return self}, function($ctx1) {$ctx1.fill(self,"encodeKey:value:",{key:key,value:value},smalltalk.STONWriter)})},
messageSends: ["nextPut:", "prettyPrintSpace"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeList:",
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
messageSends: ["nextPut:", "ifTrue:ifFalse:", "prettyPrintSpace", "indentedDo:", "newlineIndent", "do:separatedBy:", "listElementSeparator", "isEmpty"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeMap:",
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
messageSends: ["nextPut:", "ifTrue:ifFalse:", "prettyPrintSpace", "indentedDo:", "newlineIndent", "keysAndValuesDo:", "mapElementSeparator", "encodeKey:value:", "isEmpty"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeString:",
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
messageSends: ["nextPut:", "ifTrue:ifFalse:", "do:", "encodeCharacter:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "indentedDo:",
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@level"]=_st(self["@level"]).__plus((1));
_st(block)._value();
self["@level"]=_st(self["@level"]).__minus((1));
return self}, function($ctx1) {$ctx1.fill(self,"indentedDo:",{block:block},smalltalk.STONWriter)})},
messageSends: ["+", "value", "-"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "new"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "isSimpleSymbol:",
fn: function (symbol){
var self=this;
function $STONSimpleSymbolCharacters(){return smalltalk.STONSimpleSymbolCharacters||(typeof STONSimpleSymbolCharacters=="undefined"?nil:STONSimpleSymbolCharacters)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(symbol)._class())._findFirstInString_inSet_startingAt_(symbol,$STONSimpleSymbolCharacters(),(1))).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbol:",{symbol:symbol},smalltalk.STONWriter)})},
messageSends: ["=", "findFirstInString:inSet:startingAt:", "class"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonMode:",
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@jsonMode"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"jsonMode:",{boolean:boolean},smalltalk.STONWriter)})},
messageSends: []}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "listElementSeparator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._nextPut_(",");
_st(self)._newlineIndent();
return self}, function($ctx1) {$ctx1.fill(self,"listElementSeparator",{},smalltalk.STONWriter)})},
messageSends: ["nextPut:", "newlineIndent"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "mapElementSeparator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._nextPut_(",");
_st(self)._newlineIndent();
return self}, function($ctx1) {$ctx1.fill(self,"mapElementSeparator",{},smalltalk.STONWriter)})},
messageSends: ["nextPut:", "newlineIndent"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "newlineIndent",
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
messageSends: ["ifTrue:", "nextPut:", "cr", "timesRepeat:", "tab"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._stonOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.STONWriter)})},
messageSends: ["stonOn:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aWriteStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@writeStream"]=aWriteStream;
return self}, function($ctx1) {$ctx1.fill(self,"on:",{aWriteStream:aWriteStream},smalltalk.STONWriter)})},
messageSends: []}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "prettyPrint:",
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@prettyPrint"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"prettyPrint:",{boolean:boolean},smalltalk.STONWriter)})},
messageSends: []}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "prettyPrintSpace",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@prettyPrint"];
if(smalltalk.assert($1)){
_st(self["@writeStream"])._space();
};
return self}, function($ctx1) {$ctx1.fill(self,"prettyPrintSpace",{},smalltalk.STONWriter)})},
messageSends: ["ifTrue:", "space"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "referencePolicy:",
fn: function (policy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._assert_(_st(["normal", "ignore", "error"])._includes_(policy));
self["@referencePolicy"]=policy;
return self}, function($ctx1) {$ctx1.fill(self,"referencePolicy:",{policy:policy},smalltalk.STONWriter)})},
messageSends: ["assert:", "includes:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@objects"])._removeAll();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.STONWriter)})},
messageSends: ["removeAll"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "shortListElementSeparator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._nextPut_(",");
_st(self)._prettyPrintSpace();
return self}, function($ctx1) {$ctx1.fill(self,"shortListElementSeparator",{},smalltalk.STONWriter)})},
messageSends: ["nextPut:", "prettyPrintSpace"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
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
messageSends: ["ifTrue:", "value", "=", "ifTrue:ifFalse:", "signal:", "writeReference:", "+", "size", "at:put:", "notNil", "at:ifAbsent:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeBoolean:",
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._print_(boolean);
return self}, function($ctx1) {$ctx1.fill(self,"writeBoolean:",{boolean:boolean},smalltalk.STONWriter)})},
messageSends: ["print:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeFloat:",
fn: function (float){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._print_(float);
return self}, function($ctx1) {$ctx1.fill(self,"writeFloat:",{float:float},smalltalk.STONWriter)})},
messageSends: ["print:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeInteger:",
fn: function (integer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@writeStream"])._print_(integer);
return self}, function($ctx1) {$ctx1.fill(self,"writeInteger:",{integer:integer},smalltalk.STONWriter)})},
messageSends: ["print:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeList:",
fn: function (collection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._with_do_(collection,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._encodeList_(collection);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeList:",{collection:collection},smalltalk.STONWriter)})},
messageSends: ["with:do:", "encodeList:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeMap:",
fn: function (hashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._with_do_(hashedCollection,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._encodeMap_(hashedCollection);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"writeMap:",{hashedCollection:hashedCollection},smalltalk.STONWriter)})},
messageSends: ["with:do:", "encodeMap:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeNull",
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
messageSends: ["ifTrue:ifFalse:", "nextPutAll:", "print:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:do:",
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
messageSends: ["ifTrue:", "signal:", "and:", "~=", "mapClass", "class", "listClass", "with:do:", "nextPutAll:", "stonName", "prettyPrintSpace", "value"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:listSingleton:",
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
messageSends: ["writeObject:do:", "nextPut:", "prettyPrintSpace"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:streamList:",
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
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "newlineIndent", "value:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:streamMap:",
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
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "newlineIndent", "value:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeObject:streamShortList:",
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
messageSends: ["writeObject:do:", "on:", "nextPut:", "indentedDo:", "prettyPrintSpace", "value:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeReference:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@writeStream"];
_st($1)._nextPut_("@");
$2=_st($1)._print_(index);
return self}, function($ctx1) {$ctx1.fill(self,"writeReference:",{index:index},smalltalk.STONWriter)})},
messageSends: ["nextPut:", "print:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeString:",
fn: function (string){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._encodeString_(string);
return self}, function($ctx1) {$ctx1.fill(self,"writeString:",{string:string},smalltalk.STONWriter)})},
messageSends: ["encodeString:"]}),
smalltalk.STONWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "writeSymbol:",
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
messageSends: ["ifTrue:ifFalse:", "writeString:", "nextPut:", "nextPutAll:", "encodeString:", "isSimpleSymbol:"]}),
smalltalk.STONWriter);


smalltalk.STONWriter.klass.iVarNames = ['sTONCharacters','sTONSimpleSymbolCharacters'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._initializeSTONCharacters();
_st(self)._initializeSTONSimpleSymbolCharacters();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.STONWriter.klass)})},
messageSends: ["initializeSTONCharacters", "initializeSTONSimpleSymbolCharacters"]}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSTONCharacters",
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
messageSends: ["new:", "to:do:", "at:put:", "+", "to:by:do:", "-", "size", "at:"]}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSTONSimpleSymbolCharacters",
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
messageSends: ["new:withAll:", "to:do:", "asCharacter", "-", "ifTrue:", "at:put:", "isSimpleSymbolChar:"]}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isSimpleSymbolChar:",
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_./")._includes_(char);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSimpleSymbolChar:",{char:char},smalltalk.STONWriter.klass)})},
messageSends: ["includes:"]}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["on:", "new", "yourself"]}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stonCharacters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sTONCharacters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stonCharacters",{},smalltalk.STONWriter.klass)})},
messageSends: []}),
smalltalk.STONWriter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stonSimpleSymbolCharacters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sTONSimpleSymbolCharacters"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stonSimpleSymbolCharacters",{},smalltalk.STONWriter.klass)})},
messageSends: []}),
smalltalk.STONWriter.klass);


smalltalk.addClass('STONWriterError', smalltalk.Error, [], 'STON-Core');


