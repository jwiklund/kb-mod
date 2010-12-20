var currentPageEngine = (function($) {
    function goto(key) {
	return $('a').filter(function() { 
	    return $(this).text() == key
	}).attr('href')
    }
    return {
	next: function() {
	    return goto('Next')
	},
	prev: function() {
	    return goto('Back')
	}
    }
})(jQuery)
