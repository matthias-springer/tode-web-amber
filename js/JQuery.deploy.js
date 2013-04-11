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

smalltalk.addMethod(
smalltalk.method({
selector: "ajaxSync:",
fn: function (aURL){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $.ajax({url: aURL, async: false}); ;
return self}, function($ctx1) {$ctx1.fill(self,"ajaxSync:",{aURL:aURL},smalltalk.Ajax.klass)})},
messageSends: []}),
smalltalk.Ajax.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ajaxSync:data:",
fn: function (aURL,dataString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $.ajax({url: aURL, data: dataString, async: false}); ;
return self}, function($ctx1) {$ctx1.fill(self,"ajaxSync:data:",{aURL:aURL,dataString:dataString},smalltalk.Ajax.klass)})},
messageSends: []}),
smalltalk.Ajax.klass);


