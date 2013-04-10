smalltalk.addPackage('Topez-Web-Common-Console');
smalltalk.addClass('TodeConsole', smalltalk.Object, ['cliShell'], 'Topez-Web-Common-Console');
smalltalk.addMethod(
smalltalk.method({
selector: "cliShell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cliShell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cliShell",{},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "cliShell:",
fn: function (commandShell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cliShell"]=commandShell;
return self}, function($ctx1) {$ctx1.fill(self,"cliShell:",{commandShell:commandShell},smalltalk.TodeConsole)})},
messageSends: []}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "domTextArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("#workspace")._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"domTextArea",{},smalltalk.TodeConsole)})},
messageSends: ["asJQuery"]}),
smalltalk.TodeConsole);


smalltalk.addMethod(
smalltalk.method({
selector: "todeConsole:",
fn: function (cliShell){
var self=this;
var ttyDisplay;
return smalltalk.withContext(function($ctx1) { 
var $1;
ttyDisplay=_st(_st(self)._new())._cliShell_(cliShell);
$1=ttyDisplay;
return $1;
}, function($ctx1) {$ctx1.fill(self,"todeConsole:",{cliShell:cliShell,ttyDisplay:ttyDisplay},smalltalk.TodeConsole.klass)})},
messageSends: ["cliShell:", "new"]}),
smalltalk.TodeConsole.klass);


