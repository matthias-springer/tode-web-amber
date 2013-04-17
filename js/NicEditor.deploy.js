smalltalk.addPackage('NicEditor');
smalltalk.addClass('NicEdit', smalltalk.Object, ['instance'], 'NicEditor');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@instance'].addInstance(aJQuery) ;
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aJQuery:aJQuery},smalltalk.NicEdit)})},
messageSends: []}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@instance"]=_st(self)._newInstance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.NicEdit)})},
messageSends: ["newInstance"]}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.NicEdit)})},
messageSends: []}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "newInstance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return new nicEditor() ;
return self}, function($ctx1) {$ctx1.fill(self,"newInstance",{},smalltalk.NicEdit)})},
messageSends: []}),
smalltalk.NicEdit);


smalltalk.addMethod(
smalltalk.method({
selector: "newOn:",
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._applyOn_(aJQuery);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOn:",{aJQuery:aJQuery},smalltalk.NicEdit.klass)})},
messageSends: ["applyOn:", "new", "yourself"]}),
smalltalk.NicEdit.klass);


