$(document).ready(function() {

	var duration = 1000;
	var $root = $('html, body');

	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		$root.animate({scrollTop:$( $(this).attr('href')).position().top}, duration, 'linear');
		return false;
	});

	$(window).resize(SetAnchors)

	function SetAnchors() {
		if (screen.width<=600) {

		}

		if (screen.width>=601) {

		}
	}

});