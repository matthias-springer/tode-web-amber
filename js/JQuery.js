smalltalk.addPackage('JQuery');
smalltalk.addClass('Ajax', smalltalk.Object, [], 'JQuery');

smalltalk.addMethod(
smalltalk.method({
selector: "ajaxAsyncOnComplete:data:receiver:selector:",
category: 'not yet classified',
fn: function (aURL,dataString,anObject,selectorString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 $.ajax({url: aURL, data: dataString, complete: function(response) { amber.perform(anObject, selectorString, response) }}); ;
return self}, function($ctx1) {$ctx1.fill(self,"ajaxAsyncOnComplete:data:receiver:selector:",{aURL:aURL,dataString:dataString,anObject:anObject,selectorString:selectorString},smalltalk.Ajax.klass)})},
args: ["aURL", "dataString", "anObject", "selectorString"],
source: "ajaxAsyncOnComplete: aURL data: dataString receiver: anObject selector: selectorString\x0a\x09< $.ajax({url: aURL, data: dataString, complete: function(response) { amber.perform(anObject, selectorString, response) }}); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Ajax.klass);


