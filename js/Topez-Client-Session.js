smalltalk.addPackage('Topez-Client-Session');
smalltalk.addClass('GciSession', smalltalk.Object, ['number'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "executeStringExpectingStringNB:envId:",
category: 'not yet classified',
fn: function (aString,envId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._library())._critical_((function(lib){
return smalltalk.withContext(function($ctx2) {
_st(lib)._apiGciSetSessionId_(_st(self)._getSessionNumber());
return _st(lib)._apiGciNbExecuteStr_a_a_(aString,_st(_st(self)._library())._oopNil(),envId);
}, function($ctx2) {$ctx2.fillBlock({lib:lib},$ctx1)})}));
$1=_st(self)._getNbResultAsString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeStringExpectingStringNB:envId:",{aString:aString,envId:envId},smalltalk.GciSession)})},
args: ["aString", "envId"],
source: "executeStringExpectingStringNB: aString envId: envId\x0a\x09self library\x0a\x09\x09critical: [ :lib | \x0a\x09\x09\x09lib apiGciSetSessionId: self getSessionNumber.\x0a\x09\x09\x09lib apiGciNbExecuteStr: aString a: self library oopNil a: envId ].\x0a      ^ self getNbResultAsString ",
messageSends: ["critical:", "apiGciSetSessionId:", "getSessionNumber", "apiGciNbExecuteStr:a:a:", "oopNil", "library", "getNbResultAsString"],
referencedClasses: []
}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getSessionNumber",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@number"]).__eq_eq(nil);
if(smalltalk.assert($1)){
$2=_st(self)._error_("Session no longer logged in.");
return $2;
};
$3=self["@number"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"getSessionNumber",{},smalltalk.GciSession)})},
args: [],
source: "getSessionNumber\x0a\x09number == nil\x0a    \x09ifTrue: [ ^ self error: 'Session no longer logged in.' ].\x0a\x09^ number",
messageSends: ["ifTrue:", "error:", "=="],
referencedClasses: []
}),
smalltalk.GciSession);



