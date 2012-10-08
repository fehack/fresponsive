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

//-----------------------------------------------------------------------------
// SHOW DRILL
//-----------------------------------------------------------------------------

(function ($) {
	var $sw = $('.wrapper');

	$sw.on('drag', function (event) {
	    event.preventDefault();

	    switch(event.direction){

	        case "right":
	            $('aside').addClass("drill");
	            break;
			case "left":
	            $('aside').removeClass("drill");
	            break;
			case "up":
	            $('aside').removeClass("drill");
	            break;
			case "down":
	            $('aside').removeClass("drill");
	            break;
	    }
	});
}(jQuery));


//-----------------------------------------------------------------------------
//	 SLIDESHOW
//-----------------------------------------------------------------------------

// disable the dragging of images on desktop browsers
$("#slideshow li img").bind( function() {
    return false;
});


/**
* super simple slideshow
* animation between slides happens with css transitions
*/
function Slideshow(container, overview)
{
    container = $(container);
    overview = $(overview);

    var slides = $(">li", container);
    var width = container.parent().width();

    var self = this;
    var current = 0;
    var total_slides = slides.length;

    // overview dots
    overview.click(function(ev) {
        self.slideTo( $(this).index() );
        ev.preventDefault();
    });

    this.updateOverview = function() {
        overview.removeClass("active");
        $(overview.get( current )).addClass('active');
    };
    self.updateOverview();


    // slide to given index
    this.slideTo = function( index ) {
        if(index > total_slides-1) {
            index = total_slides-1;
        }
        else if(index < 0) {
            index = 0;
        }

        if(index == current) {
            return false;
        }

        container.css({ left: 0 - (width * index) });
        current = index;

        self.updateOverview();

        return true;
    };

    this.next = function() {
        return this.slideTo(current+1);
    };

    this.prev = function() {
        return this.slideTo(current-1);
    };

    this.getContainer = function() {
        return container;
    };

    this.getCurrent = function() {
        return $(slides.get(current));
    };
}



var hammer = new Hammer($("#slideshow").get(0));
var slideshow = new Slideshow("#slideshow ul", "#overview li");


// ondrag we preview the next/prev slide
hammer.ondrag = function(ev) {
    var left = 0;

    // determine which direction we need to show the preview
    if(ev.direction == 'left') {
        left = 0 - ev.distance;
    } else if(ev.direction == 'right') {
        left = ev.distance;
    }

    // just move the marginLeft
    slideshow.getContainer().css({ marginLeft: left });
};


// ondragend we will move to the next/prev slide when we have
// opened it more then 100px on the screen
hammer.ondragend = function(ev) {
    // restore the margin
    slideshow.getContainer().css({ marginLeft: 0 });

    // if we moved the slide 100px then navigate
    if(Math.abs(ev.distance) > 100) {
        if(ev.direction == 'right') {
            slideshow.prev();
        } else if(ev.direction == 'left') {
            slideshow.next();
        }
    }
};