$(document).ready(function() {
	$('.topReturn').css({ left: '-115px'});

	var checkPoint = $('#grid2').offset().top;
	var duration = 500;
	var $root = $('html, body');

	$(window).scroll(function() {
		if ($(this).scrollTop() > checkPoint) {
			$('.topReturn').fadeIn(duration);
		} else {
			$('.topReturn').fadeOut(duration);
		}
	});

	$('.topReturn').click(function(event) {
		event.preventDefault();
		$root.animate({scrollTop:$('#grid').position().top}, duration);
		return false;
	})

	$('.topReturn').hover(function() {
		$(this).stop(true, false).animate({left: -20}, duration);
	}, function() {
		$(this).stop(true, false).animate({left: -115}, duration);
	});

});