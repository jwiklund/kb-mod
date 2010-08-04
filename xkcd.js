var currentPageEngine = (function($) {
    return {
	goto: function(key) {
	    var found = $('a[accesskey="' + key + '"]').attr('href')
	    if (found) {
		window.location = found
	    }
	},
	next: function() {
	    this.goto('n')
	},
	prev: function() {
	    this.goto('p')
	}
    }
})(jQuery)
