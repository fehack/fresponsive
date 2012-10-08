//-----------------------------------------------------------------------------
// Conditional Content Loading with JavaScript (http://adactio.com/journal/5429/)
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

//-----------------------------------------------------------------------------
// SHOW DRILL
//-----------------------------------------------------------------------------

// (function ($) {
// 	var $sw = $('.wrapper');

// 	$sw.on('drag', function (event) {
// 	    event.preventDefault();

// 	    switch(event.direction){

// 	        case "right":
// 	            $('aside').addClass("drill");
// 	            break;
// 			case "left":
// 	            $('aside').removeClass("drill");
// 	            break;
// 			case "up":
// 	            $('aside').removeClass("drill");
// 	            break;
// 			case "down":
// 	            $('aside').removeClass("drill");
// 	            break;
// 	    }
// 	});
// }(jQuery));


//-----------------------------------------------------------------------------
//	 SLIDESHOW
//-----------------------------------------------------------------------------


var slider = new Swipe(document.getElementById('slider'), {
    speed: 400,
    callback: function(event, index, elem) {

      // do something cool

    }
});