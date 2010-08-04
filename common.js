(function ($, page) {
    $("body").keydown(function(event){
	    // todo smart handling of space, keyCode 32
	    var link = null
	    if (event.keyCode == 39) {
		link = page.next()
	    } else if (event.keyCode == 37) {
		link = page.prev()
	    }
	    if (link) {
		window.location = link
		event.preventDefault()
	    }
	})
})(jQuery, currentPageEngine)
