var currentPageEngine = (function($) {
    function goto(key) {
	return $('#comic_navi a.navi-'+key).attr('href')

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
