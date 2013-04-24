Smalltalk current createPackage: 'NicEditor'!
Object subclass: #NicEdit
	instanceVariableNames: 'instance morph'
	package: 'NicEditor'!

!NicEdit methodsFor: 'accessing'!

instance
!

morph
	^ morph
!

morph: aMorph
	morph := aMorph
! !

!NicEdit methodsFor: 'initializing'!

applyOn: aJQuery
	< self['@instance'].addInstance(aJQuery) >
!

initialize
	instance := self newInstance.
!

newInstance
	< return new nicEditor() >
! !

!NicEdit methodsFor: 'interactions'!

selectFrom: start to: stop
	"TODO: implement"
!

selectionInterval
	"TODO: implement"
	^ Interval from: 1000 to: 1001
! !

!NicEdit class methodsFor: 'instance creation'!

newOn: aJQuery
	^ self new
		applyOn: aJQuery;
		yourself
!

newOn: aJQuery for: aMorph
	^ self new
		applyOn: aJQuery;
		morph: aMorph;
		yourself
! !

