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
	
    $("body").keydown(function(event){
	    // todo smart handling of space, keyCode 32
	    if (event.keyCode == 39) { 
		xkcd.next()
	    } else if (event.keyCode == 37) {
		xkcd.prev()
	    }
	})
})(jQuery)