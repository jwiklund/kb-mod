(function ($, kbmod, page) {
    $(document).keydown(function(event){
	    // todo smart handling of space, keyCode 32
	    var link = null
	    if (event.keyCode == 39) {        // <- 
		link = page.next()
	    } else if (event.keyCode == 37) { // ->
		link = page.prev()
	    } else if (event.keyCode == 84) { // t
		// kbmod.verify(page)
	    }
	    if (link) {
		window.location = link
		event.preventDefault()
	    }
	})
})(jQuery, lib_kbmod, currentPageEngine)
