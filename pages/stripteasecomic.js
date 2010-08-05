var currentPageEngine = (function($) {
    function goto(key) {
	return $('li#'+key+' a').attr('href')
    }
    return {
	next: function() {
	    return goto('next')
	},
	prev: function() {
	    return goto('previous')
	}
    }
})(jQuery)
