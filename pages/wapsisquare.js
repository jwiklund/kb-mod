var currentPageEngine = (function($) {
    function goto(key) {
	return $('a.navi-'+key).attr('href')
    }
    return {
	next: function() {
	    return goto('next')
	},
	prev: function() {
	    return goto('prev')
	}
    }
})(jQuery)
