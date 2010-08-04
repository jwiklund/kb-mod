(function($) {
    var xkcd = {
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
    window.currentPageEngine = xkcd
})(jQuery)
