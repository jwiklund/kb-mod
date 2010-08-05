var currentPageEngine = (function($) {
    function goto(key) {
	return $('a[accesskey="' + key + '"]').attr('href')
    }
    return {
	next: function() {
	    return goto('n')
	},
	prev: function() {
	    return goto('p')
	}
    }
})(jQuery)
