//-----------------------------------------------------------------------------
// Conditional CSS - http://adactio.com/journal/5429/
//-----------------------------------------------------------------------------

var screenSize = window.getComputedStyle(document.body,':after').getPropertyValue('content');

if (screenSize == 'tablet') {
	// Load some more content.
	console.log('Everything inside will be loaded on tablet.')
}

if (screenSize == 'desktop') {
	// Load some more content.
	console.log('Everything inside will be loaded on desktop.')
}