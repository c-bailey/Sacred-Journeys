jQuery(document).ready(function() {
	jQuery('.topReturn').css({ left: '-30px'});
	var checkPoint = jQuery('#grid2').offset().top;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > checkPoint) {
			jQuery('.topReturn').fadeIn(duration);
		} else {
			jQuery('.topReturn').fadeOut(duration);
		}
	});

	jQuery('.topReturn').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop:jQuery('#grid').position().top}, duration);
		return false;
	})

	jQuery('.topReturn').hover(function() {
		jQuery(this).stop(true, false).animate({left: 0}, duration);
	}, function() {
		jQuery(this).stop(true, false).animate({left: -30}, duration);
	});

});