smalltalk.addPackage('NicEditor');
smalltalk.addClass('NicEdit', smalltalk.Object, ['instance', 'morph'], 'NicEditor');
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
selector: "morph",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@morph"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"morph",{},smalltalk.NicEdit)})},
messageSends: []}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "morph:",
fn: function (aMorph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@morph"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"morph:",{aMorph:aMorph},smalltalk.NicEdit)})},
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
selector: "selectFrom:to:",
fn: function (start,stop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"selectFrom:to:",{start:start,stop:stop},smalltalk.NicEdit)})},
messageSends: []}),
smalltalk.NicEdit);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionInterval",
fn: function (){
var self=this;
function $Interval(){return smalltalk.Interval||(typeof Interval=="undefined"?nil:Interval)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Interval())._from_to_((1000),(1001));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionInterval",{},smalltalk.NicEdit)})},
messageSends: ["from:to:"]}),
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

smalltalk.addMethod(
smalltalk.method({
selector: "newOn:for:",
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
messageSends: ["applyOn:", "new", "morph:", "yourself"]}),
smalltalk.NicEdit.klass);


