smalltalk.addPackage('Topez-Client-GCI');
smalltalk.addClass('GciErrSType', smalltalk.Object, ['library', 'args', 'argsSize', 'category', 'context', 'exceptionObj', 'fatal', 'message', 'number', 'reason', 'address', 'exceptionObjClassName'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "args",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@args"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"args",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "args:",
fn: function (anArray){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
self["@args"]=_st($Array())._new_(_st(self)._argsSize());
_st(_st((1))._to_(_st(self)._argsSize()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
return _st(self["@args"])._at_put_(i,_st($OopType())._fromInteger_(_st(anArray)._at_(i)));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"args:",{anArray:anArray},smalltalk.GciErrSType)})},
messageSends: ["new:", "argsSize", "do:", "at:put:", "fromInteger:", "at:", "to:"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "argsSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st((10)).__lt(self["@argsSize"]);
if(smalltalk.assert($1)){
_st(self)._error_(_st("Argument count too high: ").__comma(_st(self["@argsSize"])._printString()));
};
$2=self["@argsSize"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"argsSize",{},smalltalk.GciErrSType)})},
messageSends: ["ifTrue:", "error:", ",", "printString", "<"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "argsSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@argsSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"argsSize:",{anInteger:anInteger},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "asGsRuntimeException:",
fn: function (aGciSession){
var self=this;
var notificationClass;
function $GsBreakpointNotification(){return smalltalk.GsBreakpointNotification||(typeof GsBreakpointNotification=="undefined"?nil:GsBreakpointNotification)}
function $GsCompileErrorNotification(){return smalltalk.GsCompileErrorNotification||(typeof GsCompileErrorNotification=="undefined"?nil:GsCompileErrorNotification)}
function $GsTopezCommandErrorNotification(){return smalltalk.GsTopezCommandErrorNotification||(typeof GsTopezCommandErrorNotification=="undefined"?nil:GsTopezCommandErrorNotification)}
function $GsHaltNotification(){return smalltalk.GsHaltNotification||(typeof GsHaltNotification=="undefined"?nil:GsHaltNotification)}
function $GsErrorNotification(){return smalltalk.GsErrorNotification||(typeof GsErrorNotification=="undefined"?nil:GsErrorNotification)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$7,$5;
$1=_st(self)._isBreakpoint();
if(smalltalk.assert($1)){
notificationClass=$GsBreakpointNotification();
} else {
$2=_st(self)._isCompileError();
if(smalltalk.assert($2)){
notificationClass=$GsCompileErrorNotification();
} else {
$3=_st(self["@number"]).__eq((121000));
if(smalltalk.assert($3)){
notificationClass=$GsTopezCommandErrorNotification();
} else {
$4=_st(self)._isHalt();
if(smalltalk.assert($4)){
notificationClass=$GsHaltNotification();
} else {
notificationClass=$GsErrorNotification();
};
};
};
};
$6=_st(notificationClass)._new();
_st($6)._gciErrSType_(self);
_st($6)._topez_(_st(aGciSession)._topez());
$7=_st($6)._yourself();
$5=$7;
return $5;
}, function($ctx1) {$ctx1.fill(self,"asGsRuntimeException:",{aGciSession:aGciSession,notificationClass:notificationClass},smalltalk.GciErrSType)})},
messageSends: ["ifTrue:ifFalse:", "isHalt", "=", "isCompileError", "isBreakpoint", "gciErrSType:", "new", "topez:", "topez", "yourself"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@category"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "category:",
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
self["@category"]=_st($OopType())._fromInteger_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"category:",{anInteger:anInteger},smalltalk.GciErrSType)})},
messageSends: ["fromInteger:"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
self["@context"]=_st($OopType())._fromInteger_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"context:",{anInteger:anInteger},smalltalk.GciErrSType)})},
messageSends: ["fromInteger:"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionObj",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@exceptionObj"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"exceptionObj",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionObj:",
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
self["@exceptionObj"]=_st($OopType())._fromInteger_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"exceptionObj:",{anInteger:anInteger},smalltalk.GciErrSType)})},
messageSends: ["fromInteger:"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionObjClassName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@exceptionObjClassName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"exceptionObjClassName",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "exceptionObjClassName:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@exceptionObjClassName"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"exceptionObjClassName:",{anObject:anObject},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "fatal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fatal"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fatal",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "fatal:",
fn: function (aChar){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fatal"]=aChar;
return self}, function($ctx1) {$ctx1.fill(self,"fatal:",{aChar:aChar},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize:",
fn: function (aGciLibrary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@library"]=aGciLibrary;
$1=_st(aGciLibrary)._apiGciErr_(self);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._readMessage();
self["@library"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize:",{aGciLibrary:aGciLibrary},smalltalk.GciErrSType)})},
messageSends: ["ifFalse:", "apiGciErr:", "readMessage"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeUsingSton:session:",
fn: function (aGciLibrary,aTodeSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self["@library"]=aGciLibrary;
$1=_st(aGciLibrary)._apiGciErr_(self);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._readMessage();
$3=_st(_st(self["@number"]).__eq((4100)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@number"]).__eq((4040));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(self)._readArguments();
} else {
_st(self)._readArgumentsAndExceptionClassUsingStonIn_(aTodeSession);
};
self["@library"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initializeUsingSton:session:",{aGciLibrary:aGciLibrary,aTodeSession:aTodeSession},smalltalk.GciErrSType)})},
messageSends: ["ifFalse:", "apiGciErr:", "readMessage", "ifTrue:ifFalse:", "readArguments", "readArgumentsAndExceptionClassUsingStonIn:", "or:", "="]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "isBreakpoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st([_st(_st(self)._class())._errBreakpoint(),_st(_st(self)._class())._errStackBreakpoint(),_st(_st(self)._class())._errCodeBreakpoint()])._includes_(_st(self)._number());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBreakpoint",{},smalltalk.GciErrSType)})},
messageSends: ["includes:", "number", "errBreakpoint", "class", "errStackBreakpoint", "errCodeBreakpoint"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompileError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._number()).__eq(_st(_st(self)._class())._errCompilerError());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isCompileError",{},smalltalk.GciErrSType)})},
messageSends: ["=", "errCompilerError", "class", "number"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "isHalt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._number()).__eq(_st(_st(self)._class())._errHalt());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHalt",{},smalltalk.GciErrSType)})},
messageSends: ["=", "errHalt", "class", "number"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@message"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@number"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "number:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@number"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"number:",{anInteger:anInteger},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTypeAt:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@library"])._oopTypeAtAddress_offset_(self["@address"],_st(anInteger).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTypeAt:",{anInteger:anInteger},smalltalk.GciErrSType)})},
messageSends: ["oopTypeAtAddress:offset:", "-"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st(_st(_st(_st(_st(_st(self)._class())._name())._asString()).__comma("(err=")).__comma(_st(_st(self)._number())._asString())).__comma(")"));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.GciErrSType)})},
messageSends: ["nextPutAll:", ",", "asString", "number", "name", "class"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "readArguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"readArguments",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "readArgumentsAndExceptionClassUsingStonIn:",
fn: function (aTodeSession){
var self=this;
var pArgsSize,ofs,expressionStream,stonString,answerArray,objectArray,classNameArray,Name,is,exceptionObjInClassNameArray;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $STON(){return smalltalk.STON||(typeof STON=="undefined"?nil:STON)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
pArgsSize=_st(self)._argsSize();
self["@args"]=_st($Array())._new_(pArgsSize);
expressionStream=_st($StringStream())._on_(_st($String())._new());
$1=expressionStream;
_st($1)._nextPutAll_(_st(_st("(").__comma(_st(aTodeSession)._todeServerAccessString())).__comma(" for: "));
_st($1)._nextPutAll_(_st(_st(_st(aTodeSession)._shell())._shellId())._printString());
$2=_st($1)._nextPutAll_(") reifyExceptionArgsForOopList: {");
_st((1))._to_do_(pArgsSize,(function(i){
return smalltalk.withContext(function($ctx2) {
$3=expressionStream;
_st($3)._nextPutAll_(_st(_st(_st(self)._args())._at_(i))._printString());
$4=_st($3)._nextPutAll_(". ");
return $4;
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
exceptionObjInClassNameArray=false;
$5=_st(self)._exceptionObj();
if(($receiver = $5) == nil || $receiver == undefined){
exceptionObjInClassNameArray=true;
exceptionObjInClassNameArray;
$6=expressionStream;
_st($6)._nextPutAll_("} exceptionObjAndClassNameFrom: ");
$7=_st($6)._nextPutAll_(_st(_st(self)._number())._asString());
$7;
} else {
$8=expressionStream;
_st($8)._nextPutAll_("} classNamesForOopList: {");
_st($8)._nextPutAll_(_st(_st(_st(self)._exceptionObj())._asOop())._printString());
$9=_st($8)._nextPut_("}");
$9;
};
_st((function(){
return smalltalk.withContext(function($ctx2) {
stonString=_st(aTodeSession)._executeStringExpectingStringNB_envId_(_st(expressionStream)._contents(),_st(aTodeSession)._environmentId());
return stonString;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
return _st(self)._halt();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
answerArray=_st($STON())._fromString_(stonString);
objectArray=_st(answerArray)._at_((1));
_st((1))._to_do_(pArgsSize,(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(self["@args"])._at_put_(i,_st(objectArray)._at_(i));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
classNameArray=_st(answerArray)._at_((2));
$10=exceptionObjInClassNameArray;
if(smalltalk.assert($10)){
var exceptionObjOop;
exceptionObjOop=_st(classNameArray)._at_((1));
exceptionObjOop;
self["@exceptionObj"]=_st(self["@library"])._oopTypeFromInteger_(exceptionObjOop);
self["@exceptionObj"];
self["@exceptionObjClassName"]=_st(classNameArray)._at_((2));
self["@exceptionObjClassName"];
} else {
$11=_st(_st(classNameArray)._isEmpty())._not();
if(smalltalk.assert($11)){
self["@exceptionObjClassName"]=_st(classNameArray)._at_((1));
self["@exceptionObjClassName"];
};
};
return self}, function($ctx1) {$ctx1.fill(self,"readArgumentsAndExceptionClassUsingStonIn:",{aTodeSession:aTodeSession,pArgsSize:pArgsSize,ofs:ofs,expressionStream:expressionStream,stonString:stonString,answerArray:answerArray,objectArray:objectArray,classNameArray:classNameArray,Name:Name,is:is,exceptionObjInClassNameArray:exceptionObjInClassNameArray},smalltalk.GciErrSType)})},
messageSends: ["argsSize", "new:", "on:", "new", "nextPutAll:", ",", "todeServerAccessString", "printString", "shellId", "shell", "to:do:", "at:", "args", "ifNil:ifNotNil:", "asString", "number", "asOop", "exceptionObj", "nextPut:", "on:do:", "halt", "executeStringExpectingStringNB:envId:", "contents", "environmentId", "fromString:", "at:put:", "ifTrue:ifFalse:", "oopTypeFromInteger:", "ifTrue:", "not", "isEmpty"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "readMessage",
fn: function (){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
return smalltalk.withContext(function($ctx1) { 
self["@message"]=_st(self["@message"])._copyReplaceAll_with_(_st($Character())._lf(),_st($Character())._cr());
return self}, function($ctx1) {$ctx1.fill(self,"readMessage",{},smalltalk.GciErrSType)})},
messageSends: ["copyReplaceAll:with:", "lf", "cr"]}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "reason",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@reason"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"reason",{},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);

smalltalk.addMethod(
smalltalk.method({
selector: "reason:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@reason"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"reason:",{aString:aString},smalltalk.GciErrSType)})},
messageSends: []}),
smalltalk.GciErrSType);


smalltalk.GciErrSType.klass.iVarNames = ['errCompilerError','errError','errHalt','errBreakpoint','errCodeBreakpoint','errStackBreakpoint'];
smalltalk.addMethod(
smalltalk.method({
selector: "errBreakpoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errBreakpoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errBreakpoint",{},smalltalk.GciErrSType.klass)})},
messageSends: []}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errCodeBreakpoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errCodeBreakpoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errCodeBreakpoint",{},smalltalk.GciErrSType.klass)})},
messageSends: []}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errCompilerError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errCompilerError"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errCompilerError",{},smalltalk.GciErrSType.klass)})},
messageSends: []}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errError"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errError",{},smalltalk.GciErrSType.klass)})},
messageSends: []}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errHalt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errHalt"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errHalt",{},smalltalk.GciErrSType.klass)})},
messageSends: []}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errStackBreakpoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errStackBreakpoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errStackBreakpoint",{},smalltalk.GciErrSType.klass)})},
messageSends: []}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@errCompilerError"]=(1001);
self["@errHalt"]=(2709);
self["@errError"]=(2710);
self["@errBreakpoint"]=(6002);
self["@errCodeBreakpoint"]=(6005);
self["@errStackBreakpoint"]=(6006);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GciErrSType.klass)})},
messageSends: []}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "library:",
fn: function (aGciLibrary){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(self)._new();
_st($1)._initialize_(aGciLibrary);
$2=_st($1)._yourself();
instance=$2;
$3=_st(_st(instance)._category())._isNil();
if(smalltalk.assert($3)){
return nil;
};
$4=instance;
return $4;
}, function($ctx1) {$ctx1.fill(self,"library:",{aGciLibrary:aGciLibrary,instance:instance},smalltalk.GciErrSType.klass)})},
messageSends: ["initialize:", "new", "yourself", "ifTrue:", "isNil", "category"]}),
smalltalk.GciErrSType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "library:session:",
fn: function (aGciLibrary,aTodeSession){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(self)._new();
_st($1)._initializeUsingSton_session_(aGciLibrary,aTodeSession);
$2=_st($1)._yourself();
instance=$2;
$3=_st(_st(instance)._category())._isNil();
if(smalltalk.assert($3)){
return nil;
};
$4=instance;
return $4;
}, function($ctx1) {$ctx1.fill(self,"library:session:",{aGciLibrary:aGciLibrary,aTodeSession:aTodeSession,instance:instance},smalltalk.GciErrSType.klass)})},
messageSends: ["initializeUsingSton:session:", "new", "yourself", "ifTrue:", "isNil", "category"]}),
smalltalk.GciErrSType.klass);


smalltalk.addClass('GciLibrary', smalltalk.Object, ['sessionId'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "apiGci:",
fn: function (command){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_(command,_st($Dictionary())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGci:",{command:command},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "new"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGci:data:",
fn: function (command,aDictionary){
var self=this;
var params,result;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
params=_st(aDictionary)._copy();
_st($Transcript())._show_(_st(_st(_st(_st("GciLibrary>>apiGci: ").__comma(_st(command)._asString())).__comma(" data: ")).__comma(_st(params)._asString())).__comma(_st($Character())._cr()));
result=_st(_st(_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(params)._asJSON()))._responseText())._parseJSON();
_st($Transcript())._show_(_st(_st("result: ").__comma(_st(result)._asString())).__comma(_st($Character())._cr()));
$1=_st(result)._success();
if(! smalltalk.assert($1)){
_st($Error())._signal_(_st(_st(command).__comma(" GCI API call failed. ")).__comma(_st(result)._exception()));
};
$2=_st(result)._result();
return $2;
}, function($ctx1) {$ctx1.fill(self,"apiGci:data:",{command:command,aDictionary:aDictionary,params:params,result:result},smalltalk.GciLibrary)})},
messageSends: ["copy", "show:", ",", "cr", "asString", "parseJSON", "responseText", "ajaxSync:data:", "asJSON", "ifFalse:", "signal:", "exception", "success", "result"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciErr:",
fn: function (anErrObj){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=_st(self)._apiGci_("err");
$1=_st(result)._result();
if(smalltalk.assert($1)){
_st(anErrObj)._category_(_st(result)._category());
_st(anErrObj)._context_(_st(result)._context());
_st(anErrObj)._exceptionObj_(_st(result)._exceptionObj());
_st(anErrObj)._argsSize_(_st(result)._argCount());
_st(anErrObj)._args_(_st(result)._args());
_st(anErrObj)._number_(_st(result)._number());
_st(anErrObj)._fatal_(_st(result)._fatal());
_st(anErrObj)._message_(_st(result)._message());
_st(anErrObj)._reason_(_st(result)._reason());
};
$2=_st(result)._result();
return $2;
}, function($ctx1) {$ctx1.fill(self,"apiGciErr:",{anErrObj:anErrObj,result:result},smalltalk.GciLibrary)})},
messageSends: ["apiGci:", "ifTrue:", "category:", "category", "context:", "context", "exceptionObj:", "exceptionObj", "argsSize:", "argCount", "args:", "args", "number:", "number", "fatal:", "fatal", "message:", "message", "reason:", "reason", "result"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStr:a:",
fn: function (aString,anOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger())])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStr:a:",{aString:aString,anOop:anOop},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStr:a:a:",
fn: function (aString,anOop,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger()),_st("envId").__minus_gt(envId)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStr:a:a:",{aString:aString,anOop:anOop,envId:envId},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStrExpectingStr:a:",
fn: function (aString,anOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str_expecting_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger())])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStrExpectingStr:a:",{aString:aString,anOop:anOop},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciExecuteStrExpectingStr:a:a:",
fn: function (aString,anOop,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("execute_str_expecting_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger()),_st("envId").__minus_gt(envId)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciExecuteStrExpectingStr:a:a:",{aString:aString,anOop:anOop,envId:envId},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciGetSessionId",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@sessionId"]=_st(self)._apiNoSessionGci_data_("get_session_id",_st($Dictionary())._new());
$1=self["@sessionId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciGetSessionId",{},smalltalk.GciLibrary)})},
messageSends: ["apiNoSessionGci:data:", "new"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciInit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_("init");
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciInit",{},smalltalk.GciLibrary)})},
messageSends: ["apiGci:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciLogin:a:",
fn: function (userName,password){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sessionId"]=_st(self)._apiGci_data_("login",_st([_st("user_id").__minus_gt(userName),_st("password").__minus_gt(password)])._asDictionary());
return true;
}, function($ctx1) {$ctx1.fill(self,"apiGciLogin:a:",{userName:userName,password:password},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciLongToOop:",
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($OopType())._fromInteger_(_st(self)._apiGci_data_("long_to_oop",_st([_st("integer").__minus_gt(anInteger)])._asDictionary()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciLongToOop:",{anInteger:anInteger},smalltalk.GciLibrary)})},
messageSends: ["fromInteger:", "apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciNbExecuteStr:a:a:",
fn: function (aString,anOop,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("nb_execute_str",_st([_st("string").__minus_gt(aString),_st("oop").__minus_gt(_st(anOop)._asInteger()),_st("envId").__minus_gt(envId)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciNbExecuteStr:a:a:",{aString:aString,anOop:anOop,envId:envId},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciNewString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("new_string",_st([_st("string").__minus_gt(aString)])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciNewString:",{aString:aString},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciPerform:a:a:",
fn: function (aReceiver,aSelector,aListOfArgs){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("perform",_st([_st("receiver").__minus_gt(_st(aReceiver)._asInteger()),_st("selector").__minus_gt(aSelector),_st("args").__minus_gt(_st(self)._prepareListOfArgs_(aListOfArgs))])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciPerform:a:a:",{aReceiver:aReceiver,aSelector:aSelector,aListOfArgs:aListOfArgs},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger", "prepareListOfArgs:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciSetNet:a:a:a:",
fn: function (stoneName,hostUserID,hostPassword,gemService){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"apiGciSetNet:a:a:a:",{stoneName:stoneName,hostUserID:hostUserID,hostPassword:hostPassword,gemService:gemService},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciSetSessionId:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sessionId"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"apiGciSetSessionId:",{aNumber:aNumber},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiGciVersion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_("version");
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiGciVersion",{},smalltalk.GciLibrary)})},
messageSends: ["apiGci:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "apiNoSessionGci:data:",
fn: function (command,aDictionary){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Ajax(){return smalltalk.Ajax||(typeof Ajax=="undefined"?nil:Ajax)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Transcript())._show_(_st(_st(_st(_st("GciLibrary>>apiNoSessionGci: ").__comma(_st(command)._asString())).__comma(" data: ")).__comma(_st(aDictionary)._asString())).__comma(_st($Character())._cr()));
$1=_st($Ajax())._ajaxSync_data_(_st("/gci/").__comma(command),_st(aDictionary)._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"apiNoSessionGci:data:",{command:command,aDictionary:aDictionary},smalltalk.GciLibrary)})},
messageSends: ["show:", ",", "cr", "asString", "ajaxSync:data:", "asJSON"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "fetchChars:",
fn: function (oop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._apiGci_data_("fetch_str",_st([_st("oop").__minus_gt(_st(oop)._asInteger())])._asDictionary());
return $1;
}, function($ctx1) {$ctx1.fill(self,"fetchChars:",{oop:oop},smalltalk.GciLibrary)})},
messageSends: ["apiGci:data:", "asDictionary", "->", "asInteger"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "floatToSmallDouble:",
fn: function (aFloat){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("not implemented yet");
return self}, function($ctx1) {$ctx1.fill(self,"floatToSmallDouble:",{aFloat:aFloat},smalltalk.GciLibrary)})},
messageSends: ["error:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "gciErrSTypeClass",
fn: function (){
var self=this;
function $GciErrSType(){return smalltalk.GciErrSType||(typeof GciErrSType=="undefined"?nil:GciErrSType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$GciErrSType();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciErrSTypeClass",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "getAndClearLastError",
fn: function (){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $GciErrSType(){return smalltalk.GciErrSType||(typeof GciErrSType=="undefined"?nil:GciErrSType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Transcript())._show_(_st("called getAndClearLastError").__comma(_st($Character())._cr()));
$1=_st($GciErrSType())._library_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getAndClearLastError",{},smalltalk.GciLibrary)})},
messageSends: ["show:", ",", "cr", "library:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "getAndClearLastErrorUsingSton:",
fn: function (aTodeSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gciErrSTypeClass())._library_session_(self,aTodeSession);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getAndClearLastErrorUsingSton:",{aTodeSession:aTodeSession},smalltalk.GciLibrary)})},
messageSends: ["library:session:", "gciErrSTypeClass"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopAsciiNul",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(28);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopAsciiNul",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(66817);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassArray",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassByteArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(103425);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassByteArray",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassDoubleByteString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(143873);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassDoubleByteString",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassDoubleByteSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144129);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassDoubleByteSymbol",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassQuadByteString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144385);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassQuadByteString",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassQuadByteSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(144641);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassQuadByteSymbol",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(74753);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassString",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(110849);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassSymbol",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(76033);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassSystem",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode16",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154625);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode16",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode32",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154881);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode32",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopClassUnicode7",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(154369);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopClassUnicode7",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(12);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopFalse",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopFor:",
fn: function (anObject){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Boolean(){return smalltalk.Boolean||(typeof Boolean=="undefined"?nil:Boolean)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$12,$11,$10,$13,$14,$16,$17,$15;
$1=_st(anObject)._isNil();
if(smalltalk.assert($1)){
$2=_st(_st(self)._oopNil())._asOop();
return $2;
};
$3=_st(anObject)._isKindOf_($OopType());
if(smalltalk.assert($3)){
$4=_st(anObject)._asOop();
return $4;
};
$5=_st(anObject)._isInteger();
if(smalltalk.assert($5)){
$6=_st(self)._apiGciLongToOop_(anObject);
return $6;
};
$7=_st(anObject)._isKindOf_($String());
if(smalltalk.assert($7)){
$8=_st(self)._apiGciNewString_(anObject);
return $8;
};
$9=_st(anObject)._isKindOf_($Boolean());
if(smalltalk.assert($9)){
$12=anObject;
if(smalltalk.assert($12)){
$11=_st(self)._oopTrue();
} else {
$11=_st(self)._oopFalse();
};
$10=_st($11)._asOop();
return $10;
};
$13=_st(anObject)._isNumber();
if(smalltalk.assert($13)){
$14=_st(_st(self)._floatToSmallDouble_(anObject))._asOop();
return $14;
};
$16=_st(anObject)._respondsTo_("asOopTypeWith:");
if(smalltalk.assert($16)){
$17=_st(_st(anObject)._asOopTypeWith_(_st(self)._oopTypeClass()))._asOop();
return $17;
} else {
$15=_st(_st(self)._oopNil())._asOop();
};
return $15;
}, function($ctx1) {$ctx1.fill(self,"oopFor:",{anObject:anObject},smalltalk.GciLibrary)})},
messageSends: ["ifTrue:", "asOop", "oopNil", "isNil", "isKindOf:", "apiGciLongToOop:", "isInteger", "apiGciNewString:", "ifTrue:ifFalse:", "oopTrue", "oopFalse", "floatToSmallDouble:", "isNumber", "asOopTypeWith:", "oopTypeClass", "respondsTo:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopGemStoneError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(231169);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopGemStoneError",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopIllegal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopIllegal",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopInvalid",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopInvalid",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMaxSmallInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(9223372036854776000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMaxSmallInteger",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMinSmallInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(9223372036854776000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMinSmallInteger",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopMinusOne",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(18446744073709552000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopMinusOne",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(20);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopNil",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopOne",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(10);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopOne",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopOrValueFor:",
fn: function (anObject){
var self=this;
function $OopOrValue(){return smalltalk.OopOrValue||(typeof OopOrValue=="undefined"?nil:OopOrValue)}
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Boolean(){return smalltalk.Boolean||(typeof Boolean=="undefined"?nil:Boolean)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$13,$12,$15,$16,$17,$14;
$1=_st(anObject)._isNil();
if(smalltalk.assert($1)){
$2=_st($OopOrValue())._forOop_(_st(_st(self)._oopNil())._asOop());
return $2;
};
$3=_st(anObject)._isKindOf_($OopType());
if(smalltalk.assert($3)){
$4=_st($OopOrValue())._forOop_(_st(anObject)._asOop());
return $4;
};
$5=_st(anObject)._isInteger();
if(smalltalk.assert($5)){
$6=_st($OopOrValue())._forInteger_(anObject);
return $6;
};
$7=_st(anObject)._isNumber();
if(smalltalk.assert($7)){
$8=_st($OopOrValue())._forFloat_(anObject);
return $8;
};
$9=_st(anObject)._isKindOf_($String());
if(smalltalk.assert($9)){
$10=_st($OopOrValue())._forString_(anObject);
return $10;
};
$11=_st(anObject)._isKindOf_($Boolean());
if(smalltalk.assert($11)){
$13=anObject;
if(smalltalk.assert($13)){
$12=_st($OopOrValue())._forOop_(_st(_st(self)._oopTrue())._asOop());
} else {
$12=_st($OopOrValue())._forOop_(_st(_st(self)._oopFalse())._asOop());
};
return $12;
};
$15=_st(anObject)._respondsTo_("asOopTypeWith:");
if(smalltalk.assert($15)){
$16=_st($OopOrValue())._forOop_(_st(_st(anObject)._asOopTypeWith_(_st(self)._oopTypeClass()))._asOop());
return $16;
} else {
$17=_st($OopOrValue())._forOop_(_st(_st(self)._oopNil())._asOop());
return $17;
};
return $14;
}, function($ctx1) {$ctx1.fill(self,"oopOrValueFor:",{anObject:anObject},smalltalk.GciLibrary)})},
messageSends: ["ifTrue:", "forOop:", "asOop", "oopNil", "isNil", "isKindOf:", "forInteger:", "isInteger", "forFloat:", "isNumber", "forString:", "ifTrue:ifFalse:", "oopTrue", "oopFalse", "asOopTypeWith:", "oopTypeClass", "respondsTo:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopRemoteNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(276);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopRemoteNil",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(268);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTrue",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTwo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(18);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTwo",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTypeClass",
fn: function (){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$OopType();
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTypeClass",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTypeFromInteger:",
fn: function (anInteger){
var self=this;
function $OopType(){return smalltalk.OopType||(typeof OopType=="undefined"?nil:OopType)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($OopType())._fromInteger_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTypeFromInteger:",{anInteger:anInteger},smalltalk.GciLibrary)})},
messageSends: ["fromInteger:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "oopZero",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopZero",{},smalltalk.GciLibrary)})},
messageSends: []}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "pollForResult",
fn: function (){
var self=this;
function $Character(){return smalltalk.Character||(typeof Character=="undefined"?nil:Character)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st($Transcript())._show_(_st("library: polling for result.").__comma(_st($Character())._cr()));
$1=_st(self)._apiGci_("poll_for_result");
return $1;
}, function($ctx1) {$ctx1.fill(self,"pollForResult",{},smalltalk.GciLibrary)})},
messageSends: ["show:", ",", "cr", "apiGci:"]}),
smalltalk.GciLibrary);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareListOfArgs:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(args)._collect_((function(arg){
return smalltalk.withContext(function($ctx2) {
return _st(self)._oopOrValueFor_(arg);
}, function($ctx2) {$ctx2.fillBlock({arg:arg},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"prepareListOfArgs:",{args:args},smalltalk.GciLibrary)})},
messageSends: ["collect:", "oopOrValueFor:"]}),
smalltalk.GciLibrary);


smalltalk.GciLibrary.klass.iVarNames = ['current','version'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
var library;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=self["@current"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self["@current"];
return $2;
};
$3=_st(self)._new();
_st($3)._apiGciInit();
$4=_st($3)._yourself();
self["@current"]=$4;
self["@version"]=_st(self["@current"])._apiGciVersion();
$5=self["@current"];
return $5;
}, function($ctx1) {$ctx1.fill(self,"current",{library:library},smalltalk.GciLibrary.klass)})},
messageSends: ["ifNotNil:", "apiGciInit", "new", "yourself", "apiGciVersion"]}),
smalltalk.GciLibrary.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "version",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@version"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"version",{},smalltalk.GciLibrary.klass)})},
messageSends: []}),
smalltalk.GciLibrary.klass);


smalltalk.addClass('OopOrValue', smalltalk.Object, ['value', 'type'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st([_st("value").__minus_gt(_st(self)._value()),_st("type").__minus_gt(_st(self)._type())])._asDictionary())._asJSON();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.OopOrValue)})},
messageSends: ["asJSON", "asDictionary", "->", "value", "type"]}),
smalltalk.OopOrValue);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@type"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.OopOrValue)})},
messageSends: []}),
smalltalk.OopOrValue);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@type"]=aSymbol;
return self}, function($ctx1) {$ctx1.fill(self,"type:",{aSymbol:aSymbol},smalltalk.OopOrValue)})},
messageSends: []}),
smalltalk.OopOrValue);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.OopOrValue)})},
messageSends: []}),
smalltalk.OopOrValue);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.OopOrValue)})},
messageSends: []}),
smalltalk.OopOrValue);


smalltalk.addMethod(
smalltalk.method({
selector: "forFloat:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anObject);
_st($2)._type_("float");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forFloat:",{anObject:anObject},smalltalk.OopOrValue.klass)})},
messageSends: ["value:", "new", "type:", "yourself"]}),
smalltalk.OopOrValue.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forInteger:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anObject);
_st($2)._type_("integer");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forInteger:",{anObject:anObject},smalltalk.OopOrValue.klass)})},
messageSends: ["value:", "new", "type:", "yourself"]}),
smalltalk.OopOrValue.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forOop:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anInteger);
_st($2)._type_("oop");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forOop:",{anInteger:anInteger},smalltalk.OopOrValue.klass)})},
messageSends: ["value:", "new", "type:", "yourself"]}),
smalltalk.OopOrValue.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forString:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anObject);
_st($2)._type_("string");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forString:",{anObject:anObject},smalltalk.OopOrValue.klass)})},
messageSends: ["value:", "new", "type:", "yourself"]}),
smalltalk.OopOrValue.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "forValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._value_(anObject);
_st($2)._type_("object");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forValue:",{anObject:anObject},smalltalk.OopOrValue.klass)})},
messageSends: ["value:", "new", "type:", "yourself"]}),
smalltalk.OopOrValue.klass);


smalltalk.addClass('OopType', smalltalk.Object, ['handle'], 'Topez-Client-GCI');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
fn: function (anOopType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._class()).__eq_eq(_st(anOopType)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._asOop()).__eq(_st(anOopType)._asOop());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anOopType:anOopType},smalltalk.OopType)})},
messageSends: ["and:", "=", "asOop", "==", "class"]}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "asInteger",
fn: function (){
var self=this;
var int;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
int=_st(self)._getHandle();
$1=_st((0)).__lt_eq(int);
if(smalltalk.assert($1)){
$2=int;
return $2;
};
$3=_st(_st(int)._negated()).__plus((1));
return $3;
}, function($ctx1) {$ctx1.fill(self,"asInteger",{int:int},smalltalk.OopType)})},
messageSends: ["ifTrue:", "<=", "getHandle", "+", "negated"]}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "asOop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@handle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOop",{},smalltalk.OopType)})},
messageSends: []}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "asOopTypeWith:",
fn: function (anOopTypeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOopTypeWith:",{anOopTypeClass:anOopTypeClass},smalltalk.OopType)})},
messageSends: []}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "finalizeForSession:",
fn: function (aGciSession){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aGciSession)._isValid();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
return self}, function($ctx1) {$ctx1.fill(self,"finalizeForSession:",{aGciSession:aGciSession},smalltalk.OopType)})},
messageSends: ["ifFalse:", "isValid"]}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "gciLocalForLibrary:",
fn: function (aGciLibrary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aGciLibrary)._localForOopType_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"gciLocalForLibrary:",{aGciLibrary:aGciLibrary},smalltalk.OopType)})},
messageSends: ["localForOopType:"]}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "getHandle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@handle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"getHandle",{},smalltalk.OopType)})},
messageSends: []}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._getHandle();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.OopType)})},
messageSends: ["getHandle"]}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "oopTypeFor:forGciLibrary:",
fn: function (anObject,aGciLibrary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"oopTypeFor:forGciLibrary:",{anObject:anObject,aGciLibrary:aGciLibrary},smalltalk.OopType)})},
messageSends: []}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("Oop(");
_st(_st(self)._asInteger())._printOn_(aStream);
_st(aStream)._nextPut_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.OopType)})},
messageSends: ["nextPutAll:", "printOn:", "asInteger", "nextPut:"]}),
smalltalk.OopType);

smalltalk.addMethod(
smalltalk.method({
selector: "setHandle:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@handle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"setHandle:",{anObject:anObject},smalltalk.OopType)})},
messageSends: []}),
smalltalk.OopType);


smalltalk.addMethod(
smalltalk.method({
selector: "fromHandle:",
fn: function (aHandle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._basicNew())._setHandle_(aHandle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromHandle:",{aHandle:aHandle},smalltalk.OopType.klass)})},
messageSends: ["setHandle:", "basicNew"]}),
smalltalk.OopType.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromInteger:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._fromHandle_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromInteger:",{anInteger:anInteger},smalltalk.OopType.klass)})},
messageSends: ["fromHandle:"]}),
smalltalk.OopType.klass);


