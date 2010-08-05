var lib_kbmod = (function($) {
    function notify(title, message) {
	chrome.extension.sendRequest({title: title, message: message})
    }
    function verify(next_link, prev_link) {
	var title = 'Page Test'
	var message = 'Success'
	if (!next_link) {
	     message = 'next link failed'
	}
	if (!prev_link) {
	    var msg = 'prev link failed'
	    if (message == 'Success') {
		message = msg
	    } else {
		message = message + '\n' + msg
	    }
	}
	notify(title, message)
    }
    return {
	verify: function(page) {
	    verify(page.next(), page.prev())
	}
    }
})(jQuery)