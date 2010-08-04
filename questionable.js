var currentPageEngine = (function($) {
    return {
	goto: function(key) {
	    var found = $('#comicnav a').filter(function() {
		    return $(this).text() == key
	    }).attr('href')
	    if (found) {
		window.location = found
	    }
	},
	next: function() {
	    this.goto('Next')
	},
	prev: function() {
	    this.goto('Previous')
	}
    }
})(jQuery)
