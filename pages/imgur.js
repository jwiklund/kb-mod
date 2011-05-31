var currentPageEngine = (function($) {
    function goto(key) {
	var js = $('.next-prev .left input').filter(function() {
	    return $(this).attr('value').indexOf(key) >= 0
	}).attr('onclick')
	if (js) {
	    js = js.toString()
	    var first = js.indexOf("'") + 1
	    var second = js.indexOf("'", first)
	    if (second >= 0) {
		return js.substring(first, second)
	    }
	}
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
