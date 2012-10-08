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


$(document).ready(function() {
	$('a.colapse').click(function() {
     	$(this).next('.details').slideToggle("slow");
	});
});

//-----------------------------------------------------------------------------
//	 SLIDESHOW
//-----------------------------------------------------------------------------


// slider
var slider = new Swipe(document.getElementById('slider'), {
	callback: function(e, pos) {
		var i = bullets.length;
		while (i--) {
			bullets[i].className = ' ';
		}
		bullets[pos].className = 'on';
	}
}),
bullets = document.getElementById('current-slide').getElementsByTagName('em');