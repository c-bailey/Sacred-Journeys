//Play Video function

var Vid1 = "<iframe src='http://www.youtube.com/embed/CWhBhuX_ZKU?rel=0&autoplay=1' width='640' height='390' allowfullscreen></iframe>"
var Vid2 = "<iframe src='http://www.youtube.com/embed/CWhBhuX_ZKU?rel=0&autoplay=1' width='640' height='390' allowfullscreen></iframe>"
var Vid3 = "<iframe src='http://www.youtube.com/embed/CWhBhuX_ZKU?rel=0&autoplay=1' width='640' height='390' allowfullscreen></iframe>"
var Vid4 = "<iframe src='http://www.youtube.com/embed/CWhBhuX_ZKU?rel=0&autoplay=1' width='640' height='390' allowfullscreen></iframe>"
var Vid5 = "<iframe src='http://www.youtube.com/embed/CWhBhuX_ZKU?rel=0&autoplay=1' width='640' height='390' allowfullscreen></iframe>"
var Vid6 = "<iframe src='http://www.youtube.com/embed/CWhBhuX_ZKU?rel=0&autoplay=1' width='640' height='390' allowfullscreen></iframe>"

function playVideo(element,video) {
	$(element).empty();
	$(element).append(video);
};
