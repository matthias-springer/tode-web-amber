smalltalk.addPackage('NicEditor');
smalltalk.addClass('NicEdit', smalltalk.Object, ['instance', 'morph'], 'NicEditor');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
category: 'initializing',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@instance'].addInstance(aJQuery) ;
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{aJQuery:aJQuery},smalltalk.NicEdit)})},
args: ["aJQuery"],
source: "applyOn: aJQuery\x0a\x09< self['@instance'].addInstance(aJQuery) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@instance"]=_st(self)._newInstance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.NicEdit)})},
args: [],
source: "initialize\x0a\x09instance := self newInstance.",
messageSends: ["newInstance"],
referencedClasses: []
}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.NicEdit)})},
args: [],
source: "instance",
messageSends: [],
referencedClasses: []
}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "morph",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@morph"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"morph",{},smalltalk.NicEdit)})},
args: [],
source: "morph\x0a\x09^ morph",
messageSends: [],
referencedClasses: []
}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "morph:",
category: 'accessing',
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@morph"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"morph:",{aMorph:aMorph},smalltalk.NicEdit)})},
args: ["aMorph"],
source: "morph: aMorph\x0a\x09morph := aMorph",
messageSends: [],
referencedClasses: []
}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "newInstance",
category: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return new nicEditor() ;
return self}, function($ctx1) {$ctx1.fill(self,"newInstance",{},smalltalk.NicEdit)})},
args: [],
source: "newInstance\x0a\x09< return new nicEditor() >",
messageSends: [],
referencedClasses: []
}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "selectFrom:to:",
category: 'interactions',
fn: function (start,stop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"selectFrom:to:",{start:start,stop:stop},smalltalk.NicEdit)})},
args: ["start", "stop"],
source: "selectFrom: start to: stop\x0a\x09\x22TODO: implement\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionInterval",
category: 'interactions',
fn: function (){
var self=this;
function $Interval(){return smalltalk.Interval||(typeof Interval=="undefined"?nil:Interval)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Interval())._from_to_((1000),(1001));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionInterval",{},smalltalk.NicEdit)})},
args: [],
source: "selectionInterval\x0a\x09\x22TODO: implement\x22\x0a\x09^ Interval from: 1000 to: 1001",
messageSends: ["from:to:"],
referencedClasses: ["Interval"]
}),
smalltalk.NicEdit);


smalltalk.addMethod(
smalltalk.method({
selector: "newOn:",
category: 'instance creation',
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
args: ["aJQuery"],
source: "newOn: aJQuery\x0a\x09^ self new\x0a\x09\x09applyOn: aJQuery;\x0a\x09\x09yourself",
messageSends: ["applyOn:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.NicEdit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newOn:for:",
category: 'instance creation',
fn: function (aJQuery,aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._applyOn_(aJQuery);
_st($2)._morph_(aMorph);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOn:for:",{aJQuery:aJQuery,aMorph:aMorph},smalltalk.NicEdit.klass)})},
args: ["aJQuery", "aMorph"],
source: "newOn: aJQuery for: aMorph\x0a\x09^ self new\x0a\x09\x09applyOn: aJQuery;\x0a\x09\x09morph: aMorph;\x0a\x09\x09yourself",
messageSends: ["applyOn:", "new", "morph:", "yourself"],
referencedClasses: []
}),
smalltalk.NicEdit.klass);


