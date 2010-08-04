var currentPageEngine = (function($) {
    function goto(key) {
	return $('img[alt="' + key + '"]').parent().attr('href')
    }
    return {
	next: function() {
	    return goto('Next')
	},
	prev: function() {
	    return goto('Previous')
	}
    }
})(jQuery)
