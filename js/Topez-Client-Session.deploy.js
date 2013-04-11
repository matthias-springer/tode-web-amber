smalltalk.addPackage('Topez-Client-Session');
smalltalk.addClass('GciSession', smalltalk.Object, ['number'], 'Topez-Client-Session');
smalltalk.addMethod(
smalltalk.method({
selector: "executeStringExpectingStringNB:envId:",
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
messageSends: ["critical:", "apiGciSetSessionId:", "getSessionNumber", "apiGciNbExecuteStr:a:a:", "oopNil", "library", "getNbResultAsString"]}),
smalltalk.GciSession);

smalltalk.addMethod(
smalltalk.method({
selector: "getSessionNumber",
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
messageSends: ["ifTrue:", "error:", "=="]}),
smalltalk.GciSession);



