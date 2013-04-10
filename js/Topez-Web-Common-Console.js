smalltalk.addPackage('Topez-Web-Common-Console');
smalltalk.addClass('TodeConsole', smalltalk.Object, ['cliShell'], 'Topez-Web-Common-Console');
smalltalk.addMethod(
smalltalk.method({
selector: "cliShell",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cliShell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cliShell",{},smalltalk.TodeConsole)})},
args: [],
source: "cliShell\x0a\x09^ cliShell",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "cliShell:",
category: 'not yet classified',
fn: function (commandShell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cliShell"]=commandShell;
return self}, function($ctx1) {$ctx1.fill(self,"cliShell:",{commandShell:commandShell},smalltalk.TodeConsole)})},
args: ["commandShell"],
source: "cliShell: commandShell\x0a\x09cliShell := commandShell.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TodeConsole);

smalltalk.addMethod(
smalltalk.method({
selector: "domTextArea",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("#workspace")._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"domTextArea",{},smalltalk.TodeConsole)})},
args: [],
source: "domTextArea\x0a\x09^ '#workspace' asJQuery",
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.TodeConsole);


smalltalk.addMethod(
smalltalk.method({
selector: "todeConsole:",
category: 'not yet classified',
fn: function (cliShell){
var self=this;
var ttyDisplay;
return smalltalk.withContext(function($ctx1) { 
var $1;
ttyDisplay=_st(_st(self)._new())._cliShell_(cliShell);
$1=ttyDisplay;
return $1;
}, function($ctx1) {$ctx1.fill(self,"todeConsole:",{cliShell:cliShell,ttyDisplay:ttyDisplay},smalltalk.TodeConsole.klass)})},
args: ["cliShell"],
source: "todeConsole: cliShell\x0a\x09|ttyDisplay|\x0a\x09ttyDisplay := self new cliShell: cliShell.\x0a\x09^ ttyDisplay",
messageSends: ["cliShell:", "new"],
referencedClasses: []
}),
smalltalk.TodeConsole.klass);


