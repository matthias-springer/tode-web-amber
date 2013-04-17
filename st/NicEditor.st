Smalltalk current createPackage: 'NicEditor'!
Object subclass: #NicEdit
	instanceVariableNames: 'instance'
	package: 'NicEditor'!

!NicEdit methodsFor: 'accessing'!

instance
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

!NicEdit class methodsFor: 'instance creation'!

newOn: aJQuery
	^ self new
		applyOn: aJQuery;
		yourself
! !

