//Play Video function

var promo = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365284756/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var LourdesVid1 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282833/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var LourdesVid2 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282842/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var ShikoVid1 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282850/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var ShikoVid2 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282857/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var JerusalemVid1 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282864/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var JerusalemVid2 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282872/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var HajjVid1 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282875/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var HajjVid2 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282883/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var KumbhVid1 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282900/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var KumbhVid2 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365288465/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var NigeriaVid1 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282903/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"
var NigeriaVid2 = "<div class='videoContainer'><iframe id='partnerPlayer' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' src='http://video.pbs.org/widget/partnerplayer/2365282904/?w=1383&h=900&chapterbar=true&autoplay=true&endscreen=false'></iframe></div>"

function playVideo(element,video) {
	$(element).empty();
	$(element).append(video);
	$(element).css('background-color','transparent')
};


