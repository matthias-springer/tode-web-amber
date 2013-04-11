smalltalk.addPackage('JQuery');
smalltalk.addClass('Ajax', smalltalk.Object, [], 'JQuery');

smalltalk.addMethod(
smalltalk.method({
selector: "ajaxAsyncOnComplete:data:receiver:selector:",
fn: function (aURL,dataString,anObject,selectorString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 $.ajax({url: aURL, data: dataString, complete: function(response) { amber.perform(anObject, selectorString, response) }}); ;
return self}, function($ctx1) {$ctx1.fill(self,"ajaxAsyncOnComplete:data:receiver:selector:",{aURL:aURL,dataString:dataString,anObject:anObject,selectorString:selectorString},smalltalk.Ajax.klass)})},
messageSends: []}),
smalltalk.Ajax.klass);


