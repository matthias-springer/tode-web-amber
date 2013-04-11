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

smalltalk.addMethod(
smalltalk.method({
selector: "ajaxSync:",
category: 'not yet classified',
fn: function (aURL){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $.ajax({url: aURL, async: false}); ;
return self}, function($ctx1) {$ctx1.fill(self,"ajaxSync:",{aURL:aURL},smalltalk.Ajax.klass)})},
args: ["aURL"],
source: "ajaxSync: aURL\x0a\x09< return $.ajax({url: aURL, async: false}); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Ajax.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ajaxSync:data:",
category: 'not yet classified',
fn: function (aURL,dataString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $.ajax({url: aURL, data: dataString, async: false}); ;
return self}, function($ctx1) {$ctx1.fill(self,"ajaxSync:data:",{aURL:aURL,dataString:dataString},smalltalk.Ajax.klass)})},
args: ["aURL", "dataString"],
source: "ajaxSync: aURL data: dataString\x0a\x09< return $.ajax({url: aURL, data: dataString, async: false}); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Ajax.klass);


