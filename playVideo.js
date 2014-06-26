//Play Video function

var Vid1 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var Vid2 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var Vid3 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var Vid4 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var Vid5 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var Vid6 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var Vid7 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var Vid8 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var Vid9 = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var VidA = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var VidB = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"
var VidC = "<div class='videoCell'><div class='cove-box'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365050419/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div></div>"

function playVideo(element,video) {
	$(element).empty();
	$(element).append(video);
	$(element).css('background-color','transparent')
};
