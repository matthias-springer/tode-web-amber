Smalltalk current createPackage: 'Canvas'!
Object subclass: #HTMLCanvas
	instanceVariableNames: 'root'
	package: 'Canvas'!

!HTMLCanvas methodsFor: 'accessing'!

root
	^root
!

root: aTagBrush
	root := aTagBrush
!

snippet: anElement
	"Adds clone of anElement, finds [data-snippet=""*""] subelement
	and returns TagBrush as if that subelement was just added.
	
	Rarely needed to use directly, use `html foo` dynamically installed method
	for a snippet named foo."
	
	| clone caret |
	
	clone := anElement asJQuery clone.
	self with: (TagBrush fromJQuery: clone canvas: self).
	caret := clone find: '[data-snippet="*"]'.
	caret toArray isEmpty ifTrue: [ caret := clone ].
	^TagBrush fromJQuery: (caret removeAttr: 'data-snippet') canvas: self
! !

!HTMLCanvas methodsFor: 'adding'!

entity: aString
	"Adds a character representing html entity, eg.
	html entity: 'copy'
	adds a copyright sign.
	If a name does not represent valid HTML entity, error is raised."
	| result |
	result := ('<span />' asJQuery html: '&', aString, ';') text.
	result size = 1 ifFalse: [ self error: 'Not an HTML entity: ', aString ].
	self with: result
!

with: anObject
	^self root with: anObject
! !

!HTMLCanvas methodsFor: 'initialization'!

initialize
	super initialize.
	root ifNil: [root := TagBrush fromString: 'div' canvas: self]
!

initializeFromJQuery: aJQuery
	root := TagBrush fromJQuery: aJQuery canvas: self
! !

!HTMLCanvas methodsFor: 'tags'!

a
	^self tag: 'a'
!

abbr
	^self tag: 'abbr'
!

address
	^self tag: 'address'
!

area
	^self tag: 'area'
!

article
	^self tag: 'article'
!

aside
	^self tag: 'aside'
!

audio
	^self tag: 'audio'
!

base
	^self tag: 'base'
!

blockquote
	^self tag: 'blockquote'
!

body
	^self tag: 'body'
!

br
	^self tag: 'br'
!

button
	^self tag: 'button'
!

canvas
	^self tag: 'canvas'
!

caption
	^self tag: 'caption'
!

cite
	^self tag: 'cite'
!

code
	^self tag: 'code'
!

col
	^self tag: 'col'
!

colgroup
	^self tag: 'colgroup'
!

command
	^self tag: 'command'
!

datalist
	^self tag: 'datalist'
!

dd
	^self tag: 'dd'
!

del
	^self tag: 'del'
!

details
	^self tag: 'details'
!

div
	^self tag: 'div'
!

div: aBlock
	^self div with: aBlock
!

dl
	^self tag: 'dl'
!

dt
	^self tag: 'dt'
!

em
	^self tag: 'em'
!

embed
	^self tag: 'embed'
!

fieldset
	^self tag: 'fieldset'
!

figcaption
	^self tag: 'figcaption'
!

figure
	^self tag: 'figure'
!

footer
	^self tag: 'footer'
!

form
	^self tag: 'form'
!

h1
	^self tag: 'h1'
!

h1: anObject
	^self h1 with: anObject
!

h2
	^self tag: 'h2'
!

h2: anObject
	^ self h2 with: anObject
!

h3
	^self tag: 'h3'
!

h3: anObject
	^self h3 with: anObject
!

h4
	^self tag: 'h4'
!

h4: anObject
	^self h4 with: anObject
!

h5
	^self tag: 'h5'
!

h5: anObject
	^self h5 with: anObject
!

h6
	^self tag: 'h6'
!

h6: anObject
	^self h6 with: anObject
!

head
	^self tag: 'head'
!

header
	^self tag: 'header'
!

hgroup
	^self tag: 'hgroup'
!

hr
	^self tag: 'hr'
!

html
	^self tag: 'html'
!

iframe
	^self tag: 'iframe'
!

iframe: aString
	^self iframe src: aString
!

img
	^self tag: 'img'
!

img: aString
	^self img src: aString
!

input
	^self tag: 'input'
!

label
	^self tag: 'label'
!

legend
	^self tag: 'legend'
!

li
	^self tag: 'li'
!

li: anObject
	^self li with: anObject
!

link
	^self tag: 'link'
!

map
	^self tag: 'map'
!

mark
	^self tag: 'mark'
!

menu
	^self tag: 'menu'
!

meta
	^self tag: 'meta'
!

nav
	^self tag: 'nav'
!

newTag: aString
	^TagBrush fromString: aString canvas: self
!

noscript
	^self tag: 'noscript'
!

object
	^self tag: 'object'
!

ol
	^self tag: 'ol'
!

ol: anObject
	^self ol with: anObject
!

optgroup
	^self tag: 'optgroup'
!

option
	^self tag: 'option'
!

output
	^self tag: 'output'
!

p
	^self tag: 'p'
!

p: anObject
	^self p with: anObject
!

param
	^self tag: 'param'
!

pre
	^self tag: 'pre'
!

progress
	^self tag: 'progress'
!

script
	^self tag: 'script'
!

section
	^self tag: 'section'
!

select
	^self tag: 'select'
!

small
	^self tag: 'small'
!

source
	^self tag: 'source'
!

span
	^self tag: 'span'
!

span: anObject
	^self span with: anObject
!

strong
	^self tag: 'strong'
!

strong: anObject
	^self strong with: anObject
!

style
	^ root addBrush: (StyleTag canvas: self)
!

style: aString
	^ self style with: aString; yourself
!

sub
	^self tag: 'sub'
!

summary
	^self tag: 'summary'
!

sup
	^self tag: 'sup'
!

table
	^self tag: 'table'
!

tag: aString
	^root addBrush: (self newTag: aString)
!

tbody
	^self tag: 'tbody'
!

td
	^self tag: 'td'
!

textarea
	^self tag: 'textarea'
!

tfoot
	^self tag: 'tfoot'
!

th
	^self tag: 'th'
!

thead
	^self tag: 'thead'
!

time
	^self tag: 'time'
!

title
	^self tag: 'title'
!

tr
	^self tag: 'tr'
!

ul
	^self tag: 'ul'
!

ul: anObject
	^self ul with: anObject
!

video
	^self tag: 'video'
!

workspace
	^ root addBrush: (WorkspaceMorph canvas: self)
!

workspace: aString
	^ self workspace with: aString; yourself
! !

!HTMLCanvas class methodsFor: 'instance creation'!

browserVersion
	^(jQuery at: #browser) version
!

isMSIE
	^((jQuery at: #browser) at: #msie) notNil
!

isMozilla
	^((jQuery at: #browser) at: #mozilla) notNil
!

isOpera
	^((jQuery at: #browser) at: #opera) notNil
!

isWebkit
	^((jQuery at: #browser) at: #webkit) notNil
!

onJQuery: aJQuery
	^self basicNew
		initializeFromJQuery: aJQuery;
		initialize;
		yourself
! !

Object subclass: #HTMLSnippet
	instanceVariableNames: 'snippets'
	package: 'Canvas'!
!HTMLSnippet commentStamp!
HTMLSnippet instance is the registry of html snippets.
HTMLSnippet current is the public singleton instance.

At the beginning, it scans the document for any html elements
with 'data-snippet="foo"' attribute and takes them off the document,
remembering them in the store under the specified name.
It also install method #foo into HTMLCanvas dynamically.

Every html snippet should mark a 'caret', a place where contents
can be inserted, by 'data-snippet="*"' (a special name for caret).
For example:

<li data-snippet='menuelement' class='...'><a data-snippet='*'></a></li>

defines a list element with a link inside; the link itself is marked as a caret.

You can later issue

html menuelement href: '/foo'; with: 'A foo'

to insert the whole snippet and directly manipulate the caret, so it renders:

<li class='...'><a href='/foo'>A foo</a></li>

For a self-careting tags (not very useful, but you do not need to fill class etc.
you can use

<div class='lots of classes' attr1='one' attr2='two' data-snippet='*bar'></div>

and in code later do:

html bar with: [ xxx ]

to render

<div class='lots of classes' attr1='one' attr2='two'>...added by xxx...</div>!

!HTMLSnippet methodsFor: 'accessing'!

snippetAt: aString
	^ self snippets at: aString
!

snippets
	^snippets ifNil: [ snippets := #{} ]
! !

!HTMLSnippet methodsFor: 'initialization'!

initializeFromJQuery: aJQuery
	"Finds and takes out all snippets out of aJQuery.
	Installs it into self."
	
	(self snippetsFromJQuery: aJQuery) do: [ :each |
		self installSnippetFromJQuery: each asJQuery ]
! !

!HTMLSnippet methodsFor: 'method generation'!

snippetAt: aString compile: anElement
	"Method generation for the snippet.
	The selector is aString, the method block uses anElement"
	
	ClassBuilder new
		installMethod: ([ :htmlReceiver | htmlReceiver snippet: anElement ]
			currySelf asCompiledMethod: aString)
		forClass: HTMLCanvas
		category: '**snippets'
! !

!HTMLSnippet methodsFor: 'private'!

snippetsFromJQuery: aJQuery
	^ (aJQuery find: '[data-snippet]') toArray
! !

!HTMLSnippet methodsFor: 'snippet installation'!

installSnippetFromJQuery: element
	| name |
	name := element attr: 'data-snippet'.
	name = '*' ifFalse: [
		('^\*' asRegexp test: name)
			ifTrue: [
				name := name allButFirst.
				element attr: 'data-snippet' put: '*' ]
			ifFalse: [
				element removeAttr: 'data-snippet' ].
		self snippetAt: name install: (element detach get: 0) ]
!

snippetAt: aString install: anElement
	self snippets at: aString put: anElement.
	self snippetAt: aString compile: anElement
! !

HTMLSnippet class instanceVariableNames: 'current'!

!HTMLSnippet class methodsFor: 'initialization'!

ensureCurrent
	current ifNil: [
		current := super new
			initializeFromJQuery: document asJQuery;
			yourself ]
!

initialize
	super initialize.
	self isDOMAvailable ifTrue: [
		self ensureCurrent ]
! !

!HTMLSnippet class methodsFor: 'instance creation'!

current
	^ current
!

isDOMAvailable
	< return typeof document !!== 'undefined' >
!

new
	self shouldNotImplement
! !

Object subclass: #KeyboardEvent
	instanceVariableNames: 'keyValue'
	package: 'Canvas'!

!KeyboardEvent methodsFor: 'accessing'!

keyCharacter
	^ Character codePoint: self keyValue
!

keyValue
	^ keyValue
!

keyValue: anInteger
	keyValue := anInteger.
! !

!KeyboardEvent methodsFor: 'modifier keys'!

altKeyPressed
	^ self commandKeyPressed
!

commandKeyPressed
	"TODO: implement"
	^ false
! !

!KeyboardEvent class methodsFor: 'instance creation'!

value: anInteger
	^ self new
		keyValue: anInteger;
		yourself
! !

nil subclass: #SmalltalkEditor
	instanceVariableNames: ''
	package: 'Canvas'!

Object subclass: #TagBrush
	instanceVariableNames: 'canvas element'
	package: 'Canvas'!

!TagBrush methodsFor: 'accessing'!

element
	^element
! !

!TagBrush methodsFor: 'adding'!

addBrush: aTagBrush
	self appendChild: aTagBrush element.
	^aTagBrush
!

append: anObject
	anObject appendToBrush: self
!

appendBlock: aBlock
	| root |
	root := canvas root.
	canvas root: self.
	aBlock value: canvas.
	canvas root: root
!

appendChild: anElement
	"In IE7 and IE8 appendChild fails on several node types. So we need to check"
	<var element=self['@element'];
	if (null == element.canHaveChildren || element.canHaveChildren) {
		element.appendChild(anElement);
	} else {
		element.text = String(element.text) + anElement.innerHTML;
	} >
!

appendString: aString
	self appendChild: (self createTextNodeFor: aString)
!

appendToBrush: aTagBrush
	aTagBrush addBrush: self
!

contents: anObject
	self
	empty;
	append: anObject
!

empty
	self asJQuery empty
!

with: anObject
	self append: anObject
! !

!TagBrush methodsFor: 'attributes'!

accesskey: aString
	self at: 'accesskey' put: aString
!

action: aString
	self at: 'action' put: aString
!

addClass: aString
	self element asJQuery addClass: aString
!

align: aString
	self at: 'align' put: aString
!

alt: aString
	self at: 'alt' put: aString
!

at: aString put: aValue
	<self['@element'].setAttribute(aString, aValue)>
!

class: aString
	<self['@element'].className = aString>
!

cols: aString
	self at: 'cols' put: aString
!

contentEditable: aBoolean
	self at: 'contenteditable' put: aBoolean asString
!

contenteditable: aString
	self at: 'contenteditable' put: aString
!

contextmenu: aString
	self at: 'contextmenu' put: aString
!

draggable
	< $(self._element()).draggable({cancel: '.drag-stop'}); >
!

draggable: aString
	self at: 'draggable' put: aString
!

for: aString
	self at: 'for' put: aString
!

height: aString
	self at: 'height' put: aString
!

hidden
	self at: 'hidden' put: 'hidden'
!

href: aString
	self at: 'href' put: aString
!

id: aString
	self at: 'id' put: aString
!

media: aString
	self at: 'media' put: aString
!

method: aString
	self at: 'method' put: aString
!

name: aString
	self at: 'name' put: aString
!

placeholder: aString
	self at: 'placeholder' put: aString
!

rel: aString
	self at: 'rel' put: aString
!

removeAt: aString
	<self['@element'].removeAttribute(aString)>
!

removeClass: aString
	self element asJQuery removeClass: aString
!

resizable
	self addClass: 'resizable'.
	self element asJQuery resizable.
!

rows: aString
	self at: 'rows' put: aString
!

selectable
	self addClass: 'selectable'.
	"self element asJQuery selectable."
!

src: aString
	self at: 'src' put: aString
!

style: aString
	self at: 'style' put: aString
!

tabindex: aNumber
	self at: 'tabindex' put: aNumber
!

target: aString
	self at: 'target' put: aString
!

title: aString
	self at: 'title' put: aString
!

type: aString
	self at: 'type' put: aString
!

valign: aString
	self at: 'valign' put: aString
!

value: aString
	self at: 'value' put: aString
!

width: aString
	self at: 'width' put: aString
! !

!TagBrush methodsFor: 'converting'!

asJQuery
	^window jQuery: self element
! !

!TagBrush methodsFor: 'events'!

onArrowKeyDown: aBlock
	self onKeyDown: [:e| e preventDefault. e keyCode = 40 ifTrue:[aBlock value]]
!

onArrowKeyUp: aBlock
	self onKeyDown: [:e| e preventDefault. e keyCode = 38 ifTrue:[aBlock value]]
!

onBlur: aBlock
	self asJQuery bind: 'blur' do: aBlock
!

onChange: aBlock
	self asJQuery bind: 'change' do: aBlock
!

onClick: aBlock
	self asJQuery bind: 'click' do: aBlock
!

onDblClick: aBlock
	self asJQuery bind: 'dblclick' do: aBlock
!

onFocus: aBlock
	self asJQuery bind: 'focus' do: aBlock
!

onFocusIn: aBlock
	self asJQuery bind: 'focusin' do: aBlock
!

onFocusOut: aBlock
	self asJQuery bind: 'focusout' do: aBlock
!

onHover: aBlock
	self asJQuery bind: 'hover' do: aBlock
!

onKeyDown: aBlock
	self asJQuery bind: 'keydown' do: aBlock
!

onKeyPress: aBlock
	self asJQuery bind: 'keypress' do: aBlock
!

onKeyUp: aBlock
	self asJQuery bind: 'keyup' do: aBlock
!

onMouseDown: aBlock
	self asJQuery bind: 'mousedown' do: aBlock
!

onMouseEnter: aBlock
	self asJQuery bind: 'mouseenter' do: aBlock
!

onMouseLeave: aBlock
	self asJQuery bind: 'mouseleave' do: aBlock
!

onMouseMove: aBlock
	self asJQuery bind: 'mousemove' do: aBlock
!

onMouseOut: aBlock
	self asJQuery bind: 'mouseout' do: aBlock
!

onMouseOver: aBlock
	self asJQuery bind: 'mouseover' do: aBlock
!

onMouseUp: aBlock
	self asJQuery bind: 'mouseup' do: aBlock
!

onResize: aBlock
	self asJQuery bind: 'resize' do: aBlock
!

onSelect: aBlock
	self asJQuery bind: 'select' do: aBlock
!

onSelected: aBlock
	self asJQuery bind: 'selectableselected' do: aBlock
!

onStop: aBlock
	self asJQuery bind: 'selectablestop' do: aBlock
!

onSubmit: aBlock
	self asJQuery bind: 'submit' do: aBlock
!

onUnload: aBlock
	self asJQuery bind: 'unload' do: aBlock
!

trigger: anEventString
	self asJQuery trigger: anEventString
! !

!TagBrush methodsFor: 'initialization'!

initializeFromJQuery: aJQuery canvas: aCanvas
	element := aJQuery get: 0.
	canvas := aCanvas
!

initializeFromString: aString canvas: aCanvas
	element := self createElementFor: aString.
	canvas := aCanvas
! !

!TagBrush methodsFor: 'private'!

createElementFor: aString
	<return document.createElement(String(aString))>
!

createTextNodeFor: aString
	<return document.createTextNode(String(aString))>
! !

!TagBrush class methodsFor: 'instance creation'!

fromJQuery: aJQuery canvas: aCanvas
	^self new
	initializeFromJQuery: aJQuery canvas: aCanvas;
	yourself
!

fromString: aString canvas: aCanvas
	^self new
	initializeFromString: aString canvas: aCanvas;
	yourself
! !

TagBrush subclass: #StyleTag
	instanceVariableNames: 'canvas element'
	package: 'Canvas'!
!StyleTag commentStamp!
I'm a <style> tag use to inline CSS or load a stylesheet.

For inlining handle IE compatibility problems.!

!StyleTag methodsFor: 'adding'!

with: aString
	HTMLCanvas isMSIE
		ifTrue: [self element styleSheet cssText: aString ]
		ifFalse: [super with: aString ].
! !

!StyleTag class methodsFor: 'instance creation'!

canvas: aCanvas
	^self new
	initializeFromString: 'style' canvas: aCanvas;
	yourself
! !

Object subclass: #TextMorphForEditView
	instanceVariableNames: 'textMorph'
	package: 'Canvas'!

Object subclass: #Widget
	instanceVariableNames: ''
	package: 'Canvas'!

!Widget methodsFor: 'adding'!

appendToBrush: aTagBrush
	self appendToJQuery: aTagBrush asJQuery
!

appendToJQuery: aJQuery
	self renderOn: (HTMLCanvas onJQuery: aJQuery)
! !

!Widget methodsFor: 'rendering'!

renderOn: html
	self
! !

Widget subclass: #Morph
	instanceVariableNames: 'morphElement submorphs owner adherentToEdge'
	package: 'Canvas'!

!Morph methodsFor: 'accessing'!

adherentToEdge
	^ adherentToEdge
! !

!Morph methodsFor: 'css'!

addClass: aString
	self morphElement asJQuery addClass: aString.
!

removeClass: aString
	self morphElement asJQuery removeClass: aString.
! !

!Morph methodsFor: 'events handling'!

bindEvents
! !

!Morph methodsFor: 'geometry'!

extent: aPoint
	self width: aPoint x.
	self height: aPoint y.
!

height
	^ (self morphElement asJQuery css: 'height') parseFloat
!

height: aNumber
	self morphElement asJQuery css: 'height' a: aNumber asString, 'px'.
!

heightPercent: aNumber
	self morphElement asJQuery css: 'height' a: aNumber asString, '%'.
!

left
	^ (self morphElement asJQuery css: 'left') parseFloat
!

left: aNumber
	self morphElement asJQuery css: 'left' a: aNumber asString, 'px'.
!

overflow
	^ self morphElement asJQuery css: 'overflow'
!

overflow: aString
	self morphElement asJQuery css: 'overflow' a: aString
!

overflowX
	^ self morphElement asJQuery css: 'overflow-x'
!

overflowX: aString
	self morphElement asJQuery css: 'overflow-x' a: aString
!

overflowY
	^ self morphElement asJQuery css: 'overflow-y'
!

overflowY: aString
	self morphElement asJQuery css: 'overflow-y' a: aString
!

ownerPadding
	self owner isMorph
		ifTrue: [^ self owner padding]
		ifFalse: [ ^ 0].
!

padding
	^ (self morphElement asJQuery css: 'padding') parseFloat
!

padding: aNumber
	self morphElement asJQuery css: 'padding' a: aNumber asString, 'px'.
!

paddingTop
	^ (self morphElement asJQuery css: 'padding-top') parseFloat
!

paddingTop: aNumber
	self morphElement asJQuery css: 'padding-top' a: aNumber asString, 'px'.
!

position: aPoint
	self left: aPoint x.
	self top: aPoint y.
!

positionAbsolute
	self morphElement asJQuery css: 'position' a: 'absolute'.
!

positionRelative
	self morphElement asJQuery css: 'position' a: 'relative'.
!

setToAdhereToEdge: anEdge
	self autoPosition.
	self positionAbsolute.
	adherentToEdge := anEdge.
	anEdge = #top ifTrue: [self top: self ownerPadding].
	anEdge = #left ifTrue: [self left: self ownerPadding].
	anEdge = #bottom ifTrue: [self bottomCss: self ownerPadding].
	anEdge = #right ifTrue: [self rightCss: self ownerPadding].
!

top
	^ (self morphElement asJQuery css: 'top') parseFloat
!

top: aNumber
	self morphElement asJQuery css: 'top' a: aNumber asString, 'px'.
!

updateLayout
	self adherentToEdge ~~ #none 
		ifTrue: [self setToAdhereToEdge: self adherentToEdge].
	self submorphsDo: [:morph | morph updateLayout].
!

width
	^ (self morphElement asJQuery css: 'width') parseFloat
!

width: aNumber
	self morphElement asJQuery css: 'width' a: aNumber asString, 'px'.
!

widthPercent: aNumber
	self morphElement asJQuery css: 'width' a: aNumber asString, '%'.
!

windowPadding
	self isSystemWindow
		ifTrue: [^ self padding]
		ifFalse: [
			(self owner ~~ nil and: [self owner isMorph])
				ifTrue: [^ self owner windowPadding]
				ifFalse: [^ 0]].
!

zIndex
	^ (self morphElement asJQuery css: 'zIndex') asNumber
!

zIndex: aNumber
	self morphElement asJQuery css: 'zIndex' a: aNumber
! !

!Morph methodsFor: 'initializing'!

initialize
	super initialize.
	adherentToEdge := #none.
	submorphs := OrderedCollection new.
	self appendToJQuery: self temporaryRenderContainer.
! !

!Morph methodsFor: 'private'!

autoPosition
	self morphElement asJQuery css: 'left' a: 'auto'.
	self morphElement asJQuery css: 'right' a: 'auto'.
	self morphElement asJQuery css: 'top' a: 'auto'.
	self morphElement asJQuery css: 'bottom' a: 'auto'.
!

bottomCss: aNumber
	self morphElement asJQuery css: 'bottom' a: aNumber asString, 'px'.
!

morphElement
	^ morphElement
!

moveToJQuery: aJQuery
	aJQuery append: self morphElement asJQuery.
!

owner: aMorph
	owner := aMorph.
!

rightCss: aNumber
	self morphElement asJQuery css: 'right' a: aNumber asString, 'px'.
!

temporaryRenderContainer
	^ '#temp-render' asJQuery
! !

!Morph methodsFor: 'rendering'!

render: container with: html
!

renderOn: html
	morphElement := html div.
	self render: morphElement with: html.
	self bindEvents.
! !

!Morph methodsFor: 'submorphs'!

addMorph: aMorph
	self submorphs add: aMorph.
	aMorph owner: self.
	aMorph moveToJQuery: self submorphContainer asJQuery.
	aMorph ownerChanged.
!

delete
	self owner isMorph ifTrue: [
		self owner submorphs remove: self.
		self morphElement asJQuery remove].
!

owner
	^ owner
!

ownerChanged
	self updateLayout.
!

removeAllSubmorphs
	self submorphs do: [:m| m delete].
	self updateLayout
!

submorphContainer
	^ self morphElement
!

submorphs
	^ submorphs
!

submorphsDo: aBlock
	self submorphs do: aBlock.
! !

!Morph methodsFor: 'testing'!

isMorph
	^ true
! !

Morph subclass: #BorderedMorph
	instanceVariableNames: 'morphElement borderWidth'
	package: 'Canvas'!

BorderedMorph subclass: #PluggableListMorph
	instanceVariableNames: 'morphElement list listElement getListSelector getListElementSelector getIndexSelector setIndexSelector model listMorph keyStrokeSelector listEntries listIndex xhtml scroll'
	package: 'Canvas'!
!PluggableListMorph commentStamp!
Instance Variables:
	list				holds the list that was retrieved by the model
	listElement		the ul dom element of the list
	model			 e.g.: List is retreived from here!

!PluggableListMorph methodsFor: 'not yet classified'!

clearEntries
	self listEntries do:[:each| each remove]
!

getIndexSelector
	^getIndexSelector
!

getIndexSelector: anObject
	getIndexSelector:= anObject
!

getList
	"Answer the list to be displayed.  Caches the returned list in the 'list' ivar"
	getListSelector == nil ifTrue: [^ #()].
	list := model perform: getListSelector.
	list == nil ifTrue: [^ #()].
	list := list collect: [:each| each asString].
	^ list
!

getListItem: index
	"get the index-th item in the displayed list"
	| element |
	getListElementSelector ifNotNil: [ ^ (self model perform: getListElementSelector with: index) asString].
	list ifNotNil: [ ^ list at: index ].
	
	element := self getList at: index.
	^ self element asString
!

getListSelector
	^ getListSelector
!

getListSelector: sel
	"Set the receiver's getListSelector as indicated, and trigger a recomputation of the list"

	getListSelector := sel.
	self updateList.
!

getListSize
	"return the current number of items in the displayed list"
	^self getList size
!

initialize
	self listEntries: #().
	scroll := 0.
	super initialize
!

list
	^list
!

list: anArray
	list := anArray
!

listElement
	^listElement
!

listElement: anObject
	listElement := anObject
!

listEntries
	^listEntries
!

listEntries: anObject
	listEntries := anObject
!

listIndex
	listIndex ifNil: [listIndex := 0].
	^listIndex
!

listIndex: anObject
	anObject isNumber ifFalse: [self error: 'List index must be numerical'].
	listIndex := anObject
!

model
	^ model
!

model: aModel
	model := aModel
!

moveSelectionDown
	|index element |
	index := self model perform: self getIndexSelector.
	index = self getListSize ifFalse: [ index := index +1].
	element := self listEntries at: index.
	element entry trigger: 'click'.
	(self outOfView: element) ifTrue:[ scroll := self getListSize min: scroll +1.
	((self listElement asJQuery find: 'li.selectee')at: scroll) scrollIntoView]
!

moveSelectionUp
	|index element|
	index := self model perform: self getIndexSelector.
	index = 1 ifFalse: [ index := index - 1].
	element := self listEntries at: index.
	element entry trigger: 'click'.
	(self outOfView: element) ifTrue:[  scroll := 0 max: scroll -1.
	((self listElement asJQuery find: 'li.selectee')at: scroll) scrollIntoView]
!

on: anObject list: getListSel selected: getSelectionSel changeSelected: setSelectionSel
	self model: anObject.
	getListSelector := getListSel.
	getIndexSelector := getSelectionSel.
	setIndexSelector := setSelectionSel.
	self updateList
!

outOfView: element
		^(element entry asJQuery position top + element entry asJQuery height) > self morphElement asJQuery height 
			or: [element entry asJQuery position top  < 0]
!

render: container with: html
	xhtml := html.
	container
		class: 'drag-stop';
		with: [listElement := html ul
			selectable;
			addClass: 'nav nav-pills nav-stacked';
			at: 'tabindex' put: '1';
			onArrowKeyDown:[self moveSelectionDown];
			onArrowKeyUp:[self moveSelectionUp]].
	self overflow: 'auto'.
	self getList.
	self updateContents
!

selected: anObject
	self model perform: setIndexSelector with: anObject index
!

setIndexSelector
	^setIndexSelector
!

setIndexSelector: anObject
	setIndexSelector:= anObject
!

update: aSymbol 
	"Refer to the comment in View|update:."

	(aSymbol == getListSelector or: [ aSymbol == getListElementSelector ]) ifTrue: 
		[self updateList.
		^ self].
	aSymbol == getIndexSelector ifTrue:
		[self selectionIndex: self getCurrentSelectionIndex.
		^ self].
	aSymbol == #allSelections ifTrue:
		[self selectionIndex: self getCurrentSelectionIndex.
		^ self].
!

update: aSymbol with: anObject
	"Refer to the comment in View|update:."
	
	aSymbol == #selected: ifTrue: 
		[self selected: anObject. 
		^self].
	(aSymbol == getListSelector or: [ aSymbol == getListElementSelector ]) ifTrue: 
		[self updateList.
		^ self].
	aSymbol == getIndexSelector ifTrue:
		[self selectionIndex: self getCurrentSelectionIndex.
		^ self].
	aSymbol == #allSelections ifTrue:
		[self selectionIndex: self getCurrentSelectionIndex.
		^ self].
!

updateContents
	|i|
	i := 1.
	self listElement empty.
	self clearEntries.
	self list do:[:each| |element| 
		element := LazyListMorph index: i dependent: self content: each.
		self listEntries add: element.
		element appendToJQuery: self listElement asJQuery.
		i := i +1].
	self updateLayout
!

updateList
	"the list has changed -- update from the model"
	self getList.
	self listElement notNil ifTrue:[self updateContents]
! !

!PluggableListMorph class methodsFor: 'not yet classified'!

on: anObject list: listSel primarySelection: getSelectionSel changePrimarySelection: setSelectionSel listSelection: getListSel changeListSelection: setListSel
	^ self basicNew
			on: anObject
			list: listSel
			primarySelection: getSelectionSel
			changePrimarySelection: setSelectionSel
			listSelection: getListSel
			changeListSelection: setListSel;
		initialize;
		yourself
!

tryList
|listMorph|
	listMorph := self basicNew.
	^listMorph
		list: #(1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22);
		model: listMorph;
		getListSelector: #list;
		getIndexSelector: #listIndex;
		setIndexSelector: #listIndex:;
		initialize;
		yourself
! !

BorderedMorph subclass: #RectangleMorph
	instanceVariableNames: 'morphElement'
	package: 'Canvas'!

RectangleMorph subclass: #AlignmentMorph
	instanceVariableNames: 'morphElement'
	package: 'Canvas'!

AlignmentMorph subclass: #DockingBarMorph
	instanceVariableNames: 'morphElement'
	package: 'Canvas'!

!DockingBarMorph methodsFor: 'accessing'!

adhereToBottom
	"Instract the receiver to adhere to bottom"
	 self adhereTo:#bottom.
	 self width: self owner width - self ownerPadding.
!

adhereToLeft
	"Instract the receiver to adhere to left"
	self adhereTo: #left.
	self height: self owner height - self ownerPadding.
!

adhereToRight
	"Instract the receiver to adhere to right"
	self adhereTo: #right.
	self height: self owner height - self ownerPadding.
!

adhereToTop
	"Instract the receiver to adhere to top"
	self adhereTo: #top.
	self width: self owner width - self ownerPadding.
! !

!DockingBarMorph methodsFor: 'geometry'!

updateLayout
	super updateLayout.
	self adherentToEdge = #left ifTrue: [self adhereToLeft].
	self adherentToEdge = #right ifTrue: [self adhereToRight].
	self adherentToEdge = #top ifTrue: [self adhereToTop].
	self adherentToEdge = #bottom ifTrue: [self adhereToBottom].
! !

!DockingBarMorph methodsFor: 'private'!

adhereTo: edgeSymbol
	"Options: #left #top #right #bottom or #none"
	(#(#left #top #right #bottom #none ) includes: edgeSymbol)
		ifFalse: [^ self error: 'invalid option'].
	self setToAdhereToEdge: edgeSymbol.
! !

!DockingBarMorph methodsFor: 'submorphs'!

ownerChanged
	super ownerChanged.
! !

DockingBarMorph subclass: #NavbarMorph
	instanceVariableNames: 'morphElement'
	package: 'Canvas'!

!NavbarMorph methodsFor: 'rendering'!

render: container with: html
	container
		class: 'window-title'.
! !

RectangleMorph subclass: #TextMorph
	instanceVariableNames: 'morphElement editor readOnly selectionStart selectionEnd selectionText textElement text'
	package: 'Canvas'!

!TextMorph methodsFor: 'accessing'!

contents
	^ self text
!

newContents: stringOrText
	self text: stringOrText.
!

privateText: aText
	text := aText.
!

readOnly
	readOnly ifNil: [readOnly := true].
	^ readOnly
!

readOnly: aBoolean
	readOnly := aBoolean.
	self textElement contentEditable: aBoolean not.
	aBoolean
		ifTrue: [self morphElement removeClass: 'drag-stop']
		ifFalse: [self morphElement addClass: 'drag-stop']
!

text
	text ifNil: [self privateText: Text new].
	^ text
!

text: textOrString
	textOrString isString 
		ifTrue: [self privateText: (Text fromString: textOrString)]
		ifFalse: [self privateText: textOrString].
	self renderText: self text.
!

textElement
	^ textElement
! !

!TextMorph methodsFor: 'converting'!

asText
	^ self text
! !

!TextMorph methodsFor: 'events handlings'!

bindEvents
	super bindEvents.
	self morphElement onKeyPress: [:evt |
		evt preventDefault.
		self performKeyInput: evt charCode].
	self morphElement onKeyDown: [:evt | 
		self performKeySpecial: evt keyCode event: evt.
		self updateCursor].
!

keyBackspace: evt
	|start end len newPos|
	evt preventDefault.
	start := self selectionStart.
	end := self selectionEnd.
	len := self selectionLength.
	len = 0
		ifTrue: [
			self text: (self text replaceFrom: start - 1 to: end with: '').
			newPos := start - 1]
		ifFalse: [
			self text: (self text replaceFrom: start to: end with: '').
			newPos := start].
	self setSelectionFrom: newPos to: newPos - 1.
	self updateCursor.
!

keyDelete: evt
!

keyReturn: evt
	|start end len newPos character|
	start := self selectionStart.
	end := self selectionEnd.
	len := self selectionLength.
	character := String fromCharCode: 13.
	len = 0
		ifTrue: [
			self text: (self text replaceFrom: start - 1 to: end with: character).
			newPos := start + 1]
		ifFalse: [
			self text: (self text replaceFrom: start to: end with: character).
			newPos := start].
	self setSelectionFrom: newPos to: newPos - 1.
	self updateCursor.
!

keyStroke: evt
!

performKeyDefault: anInteger
	^ self class keyDefaultBindings includes: anInteger
!

performKeyInput: anInteger
	|newPos character|
	newPos := self selectionStart + 1.
	character := String fromCharCode: anInteger.
	self text replaceFrom: self selectionStart to: self selectionEnd with: character.
	self text: self text.
	self setSelectionFrom: newPos to: newPos - 1.
	self updateCursor.
!

performKeySpecial: anInteger event: evt
	(self class keySpecialBindings includesKey: anInteger)
		ifTrue: [self perform: (self class keySpecialBindings at: anInteger) withArguments: {evt}. ^ true]
		ifFalse: [^ false].
! !

!TextMorph methodsFor: 'initializing'!

initialize
	super initialize.
	self initializeCallbacks.
!

initializeCallbacks
	self textElement onKeyUp: [self updateCursor].
	self textElement onMouseUp: [self updateCursor].
! !

!TextMorph methodsFor: 'interactions'!

selectionEnd
	^ selectionEnd
!

selectionLength
	^ self selectionEnd -  self selectionStart + 1
!

selectionStart
	^ selectionStart
!

setSelectionFrom: start to: end
	< setSelectionRange(self._textElement()._asJQuery()[0], start - 1, end);	>
!

updateCursor
	< 
	// TODO: only for Chrome
	var range = window.getSelection().getRangeAt(0);
	var preCaretRange = range.cloneRange();
	preCaretRange.selectNodeContents(self._textElement()._asJQuery()[0]);
	preCaretRange.setEnd(range.endContainer, range.endOffset);
	var clonedSelection = preCaretRange.cloneContents();
	var div = document.createElement('div');
	div.appendChild(clonedSelection);
	// workaround: Amber does not support writing the tag brackets in String (syntax error)
	var brTag = String.fromCharCode(60) + 'br' + String.fromCharCode(62);
	var divBrs = div.innerHTML.match(new RegExp(brTag, 'g'));
	var countBrs = divBrs ? divBrs.length : 0;
	self['@selectionEnd'] = preCaretRange.toString().length + countBrs;
	self['@selectionText'] = window.getSelection().toString();
	self['@selectionStart'] = self['@selectionEnd'] + 1 - self['@selectionText'].length
	>
! !

!TextMorph methodsFor: 'pharo compatibility'!

editor
	editor ifNil: [editor := self editorClass forMorph: self].
	^ editor
!

editorClass
	^ SmalltalkEditor
! !

!TextMorph methodsFor: 'rendering'!

render: container with: html
	container 
		with: [textElement := html span].
!

renderText: aText
	self textElement asJQuery empty.
	self textElement
		with: self text string.
! !

TextMorph class instanceVariableNames: 'keySpecialBindings keyDefaultBindings'!

!TextMorph class methodsFor: 'instance creation'!

new: aString
	^ self new
		text: aString;
		yourself
! !

!TextMorph class methodsFor: 'interactions'!

keyDefaultBindings
	keyDefaultBindings ifNil: [
		keyDefaultBindings := Array new
			add: 37; "left arrow"
			add: 39; "right arrow"
			add: 38; "up arrow"
			add: 40; "down arrow"
			yourself].
	^ keyDefaultBindings
!

keySpecialBindings
	keySpecialBindings ifNil: [
		keySpecialBindings := Dictionary new
			at: 8 put: #keyBackspace:;
			at: 46 put: #keyDelete:;
			at: 13 put: #keyReturn:;
			yourself].
	^ keySpecialBindings
! !

Morph subclass: #GlyphIconMorph
	instanceVariableNames: 'morphElement icon spin'
	package: 'Canvas'!

!GlyphIconMorph methodsFor: 'accessing'!

icon
	icon ifNil: [self icon: 'star'].
	^ icon
!

icon: anIcon
	icon ~~ nil ifTrue: [self removeClass: 'icon-', self icon].
	icon := anIcon.
	self addClass: 'icon-', anIcon.
!

spin
	spin ifNil: [self spin: false].
	^ spin
!

spin: aBoolean
	spin := aBoolean.
	spin ifNotNil: [
		spin
			ifTrue: [self addClass: 'icon-spin']
			ifFalse: [self removeClass: 'icon-spin']].
! !

!GlyphIconMorph methodsFor: 'rendering'!

cssClasses
	|str|
	str := 'icon-', self icon.
	self spin ifTrue: [str := str, ' icon-spin'].
	^ str
!

render: container with: html
	container
		class: self cssClasses.
! !

!GlyphIconMorph class methodsFor: 'icons'!

edit
	^ self new
		icon: 'edit';
		yourself
!

home
	^ self new
		icon: 'home';
		yourself
!

ok
	^ self new
		icon: 'ok';
		yourself
!

pencil
	^ self new
		icon: 'pencil';
		yourself
!

refresh
	^ self new
		icon: 'refresh';
		yourself
!

remove
	^ self new
		icon: 'remove';
		yourself
!

wait
	^ self new
		icon: 'refresh';
		spin;
		yourself
! !

Morph subclass: #LazyListMorph
	instanceVariableNames: 'morphElement entry myIndex content'
	package: 'Canvas'!

!LazyListMorph methodsFor: 'not yet classified'!

content
	^content
!

content: anObject
	content := anObject
!

entry
	^entry
!

index
	^myIndex
!

index: aNumber
	aNumber isNumber ifFalse: [self halt].
	myIndex := aNumber
!

renderOn: html
	entry := html li: content.
		entry
			addClass: 'selectee';
			onClick: [entry addClass: 'selected'. entry asJQuery siblings removeClass: 'selected'.
						self selected].
!

selected
	self changed: #selected: with: self
! !

!LazyListMorph class methodsFor: 'not yet classified'!

index: anIndex dependent: aDependent content: aContent
	^self basicNew
		index: anIndex;
		content: aContent;
		addDependent: aDependent;
		owner: aDependent;
		yourself
! !

Morph subclass: #PluggableTextMorph
	instanceVariableNames: 'morphElement textMorph model getTextSelector setTextSelector acceptOnCR'
	package: 'Canvas'!

!PluggableTextMorph methodsFor: 'accessing'!

acceptOnCR
	^ acceptOnCR
!

acceptOnCR: aBoolean
	acceptOnCR := aBoolean.
!

getTextSelector
	^ getTextSelector
!

getTextSelector: aSelector
	getTextSelector := aSelector
!

model
	^ model
!

model: aModel
	model := aModel
!

setTextSelector
	^ setTextSelector
!

setTextSelector: aSelector
	setTextSelector := aSelector
!

text
	^ self textMorph contents
!

textMorph
	^ textMorph
! !

!PluggableTextMorph methodsFor: 'events handling'!

bindEvents
	super bindEvents.
	self textMorph morphElement onKeyPress: [:evt | self keyStroke: (KeyboardEvent value: evt charCode)].
!

keyStroke: evt
	Transcript show: evt keyValue.
! !

!PluggableTextMorph methodsFor: 'geometry'!

height: aNumber
	|textHeight|
	super height: aNumber.
	textHeight := aNumber - (3 * self textMorphPadding) - 1.
	self textMorph height: textHeight.
!

width: aNumber
	|textWidth|
	super width: aNumber.
	textWidth := aNumber - (3 * self textMorphPadding) - 1.
	self textMorph width: textWidth.
! !

!PluggableTextMorph methodsFor: 'initialization'!

on: anObject text: getTextSel accept: setTextSel
	self model: anObject.
	anObject addDependent: self.
	self getTextSelector: getTextSel.
	self setTextSelector: setTextSel.
	self setText: self getText.
! !

!PluggableTextMorph methodsFor: 'interactions'!

selectFrom: start to: stop
	self textMorph editor selectFrom: start to: stop.
! !

!PluggableTextMorph methodsFor: 'model access'!

getText
	| newText |
	getTextSelector ifNil: [^Text new].
	newText := model perform: getTextSelector.
	newText ifNil: [^Text new].
	^ newText copy
!

setText: aText
	self textMorph newContents: aText.
! !

!PluggableTextMorph methodsFor: 'pharo compatibility'!

textMorphClass
	^ TextMorphForEditView
! !

!PluggableTextMorph methodsFor: 'private'!

textMorphPadding
	^ self textMorph padding
! !

!PluggableTextMorph methodsFor: 'rendering'!

drawTextMorph
	textMorph := TextMorph new.
	textMorph overflowY: 'scroll'.
	textMorph readOnly: false.
	self addMorph: textMorph.
!

render: container with: html
	self drawTextMorph.
! !

!PluggableTextMorph methodsFor: 'updating'!

replaceSelectionWith: aText
	"TODO: implement"
	Transcript show: Character cr, 'adding text:', aText.
	self textMorph text: self textMorph text, aText asString
!

selectInvisiblyFrom: start to: stop
	"TODO: implement"
!

update: aSymbol 
	aSymbol ifNil: [^self].
	aSymbol == #flash ifTrue: [^self flash].
	aSymbol == getTextSelector 
		ifTrue: 
			[self setText: self getText.
			^self setSelection: self getSelection].
	aSymbol == #clearUserEdits ifTrue: [^self hasUnacceptedEdits: false].
	aSymbol == #wantToChange 
		ifTrue: 
			[self canDiscardEdits ifFalse: [^self promptForCancel].
			^self].
	aSymbol == #appendEntry 
		ifTrue: 
			[self appendEntry.
			^self ].
	aSymbol == #clearText 
		ifTrue: 
			[self handleEdit: [self changeText: Text new].
			^self ].
	^ self
! !

!PluggableTextMorph class methodsFor: 'instance creation'!

on: anObject text: getTextSel accept: setTextSel
	^ self new
		on: anObject
		text: getTextSel
		accept: setTextSel
!

on: anObject text: getTextSel accept: setTextSel readSelection: rSel menu: menu
	^ self 
		on: anObject
		text: getTextSel
		accept: setTextSel
! !

Morph subclass: #SimpleButtonMorph
	instanceVariableNames: 'morphElement button'
	package: 'Canvas'!

!SimpleButtonMorph methodsFor: 'accessing'!

button
	^ button
!

label
	^ button asJQuery html
!

label: aString
	button with: aString.
!

submorphContainer
	^ self button
! !

!SimpleButtonMorph methodsFor: 'css'!

addClass: aString
	button asJQuery addClass: aString.
! !

!SimpleButtonMorph methodsFor: 'events'!

onClick: aBlock
	button onClick: [aBlock value].
! !

!SimpleButtonMorph methodsFor: 'rendering'!

render: container with: html
	container  
		with: [button := html a class: 'btn'].
! !

Morph subclass: #SystemWindow
	instanceVariableNames: 'morphElement label model morphFrames titlebar'
	package: 'Canvas'!

!SystemWindow methodsFor: 'accessing'!

label
	^ self labelMorph text
!

model: aModel
	model := aModel.
!

setLabel: aString
	self labelMorph text: aString.
! !

!SystemWindow methodsFor: 'constants'!

fullTitleBarHeight
	^ self titleBarHeight + (2 * titlebar padding)
!

titleBarHeight
	^ 30
! !

!SystemWindow methodsFor: 'display'!

openInWorld
	WorkspaceMorph current addMorph: self
! !

!SystemWindow methodsFor: 'geometry'!

bounds: aRectangle
	self position: aRectangle origin.
	self extent: aRectangle extent.
	self updateLayout.
!

contentExtent
	^ Point
		x: self width - self padding
		y: self height - self fullTitleBarHeight - (self padding * 3) - 34.
!

contentOrigin
	^ Point
		x: self padding
		y: self fullTitleBarHeight + (self padding * 2)
!

updateLayout
	super updateLayout.
	self morphFrames keysAndValuesDo: [:morph :frame | 
		morph
			positionAbsolute;
			position: frame origin * self contentExtent + self contentOrigin;
			extent: frame corner * self contentExtent + self contentOrigin].
! !

!SystemWindow methodsFor: 'private'!

labelMorph
	^ label
!

morphFrames
	morphFrames ifNil: [morphFrames := Dictionary new].
	^ morphFrames
!

titlebar
	^ titlebar
! !

!SystemWindow methodsFor: 'rendering'!

drawTitleBar
	titlebar := NavbarMorph new.
	self addMorph: titlebar.
	titlebar
		adhereToTop;
		height: self titleBarHeight.
	titlebar addMorph: (SimpleButtonMorph new
		addMorph: GlyphIconMorph remove;
		setToAdhereToEdge: #right;
		top: titlebar padding;
		onClick: [self delete];
		yourself).
	titlebar addMorph: (label := TextMorph new
		text: 'a SystemWindow';
		setToAdhereToEdge: #left;
		paddingTop: 4;
		yourself).
!

render: container with: html
	container  
		class: 'component window';
		draggable;
		resizable;
		onResize: [self updateLayout].
	self setDefaultSize.
	self drawTitleBar.
!

setDefaultSize
	self height: 250.
	self width: 250.
! !

!SystemWindow methodsFor: 'submorphs'!

addMorph: aMorph frame: aRectangle
	self addMorph: aMorph.
	self morphFrames at: aMorph put: aRectangle.
	self updateLayout.
! !

!SystemWindow methodsFor: 'testing'!

isSystemWindow
	^ true
! !

!SystemWindow class methodsFor: 'instance creation'!

labelled: labelString
	^ self new 
		setLabel: labelString;
		yourself
! !

Morph subclass: #WorkspaceMorph
	instanceVariableNames: 'morphElement'
	package: 'Canvas'!

!WorkspaceMorph methodsFor: 'geometry'!

moveToFront: aMorph
	|zMax zMin|
	zMin := (self submorphs collect: [:morph | morph zIndex]) min.
	zMin > 0 ifTrue: [
		self submorphs do: [:morph | morph zIndex: morph zIndex - zMin]].
	zMax := (self submorphs collect: [:morph | morph zIndex]) max.
	aMorph zIndex: zMax + 1.
! !

!WorkspaceMorph methodsFor: 'rendering'!

render: container with: html
	container
		id: 'workspace'.
! !

!WorkspaceMorph methodsFor: 'submorphs'!

addMorph: aMorph
	super addMorph: aMorph.
	aMorph morphElement onMouseDown: [self moveToFront: aMorph].
! !

WorkspaceMorph class instanceVariableNames: 'workspace'!

!WorkspaceMorph class methodsFor: 'instance creation'!

canvas: aCanvas
	^ self basicNew
	initialize;
	initializeFromString: 'div' canvas: aCanvas;
	yourself
!

containerRoot
	^ 'body' asJQuery
!

new
	Error signal: '#new not allowed for singleton'
!

privateNew
	^ self basicNew
			initialize;
			appendToJQuery: self containerRoot
! !

!WorkspaceMorph class methodsFor: 'singleton'!

current
	workspace ifNil: [workspace := self privateNew].
	^ workspace
! !

!Object methodsFor: '*Canvas'!

appendToBrush: aTagBrush
	aTagBrush append: self asString
!

appendToJQuery: aJQuery
	aJQuery append: self asString
! !

!BlockClosure methodsFor: '*Canvas'!

appendToBrush: aTagBrush
	aTagBrush appendBlock: self
!

appendToJQuery: aJQuery
	self value: (HTMLCanvas onJQuery: aJQuery)
! !

!CharacterArray methodsFor: '*Canvas'!

asSnippet
	^ HTMLSnippet current snippetAt: self asString
! !

!String methodsFor: '*Canvas'!

appendToBrush: aTagBrush
	aTagBrush appendString: self
!

appendToJQuery: aJQuery
	aJQuery append: self
!

asJQuery
	<return jQuery(String(self))>
! !

!JSObjectProxy methodsFor: '*Canvas'!

asJQuery
	<return jQuery(self['@jsObject'])>
! !

