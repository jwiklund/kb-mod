(function ($, page) {
    $("body").keydown(function(event){
	    // todo smart handling of space, keyCode 32
	    if (event.keyCode == 39) { 
		page.next()
	    } else if (event.keyCode == 37) {
		page.prev()
	    }
	})
})(jQuery, currentPageEngine)
