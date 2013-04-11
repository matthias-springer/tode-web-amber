Smalltalk current createPackage: 'JQuery'!
Object subclass: #Ajax
	instanceVariableNames: ''
	package: 'JQuery'!

!Ajax class methodsFor: 'not yet classified'!

ajaxAsyncOnComplete: aURL data: dataString receiver: anObject selector: selectorString
	< $.ajax({url: aURL, data: dataString, complete: function(response) { amber.perform(anObject, selectorString, response) }}); >
! !

