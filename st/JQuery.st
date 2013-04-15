Smalltalk current createPackage: 'JQuery'!
Object subclass: #Ajax
	instanceVariableNames: ''
	package: 'JQuery'!

!Ajax class methodsFor: 'not yet classified'!

ajaxAsyncOnComplete: aURL data: dataString receiver: anObject selector: selectorString
	< $.ajax({url: aURL, data: dataString, complete: function(response) { amber.perform(anObject, selectorString, response) }}); >
!

ajaxSync: aURL
	< return $.ajax({url: aURL, async: false}); >
!

ajaxSync: aURL data: dataString
	< return $.ajax({url: aURL, data: dataString, async: false}); >
! !

Object subclass: #JQuery
	instanceVariableNames: ''
	package: 'JQuery'!

