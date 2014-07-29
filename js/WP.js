$(document).ready(function(){
	if ((navigator.userAgent.indexOf('IEMobile') !== -1) || (navigator.userAgent.indexOf('WPDesktop') !== -1)) {
      	$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: "stylesheets/windowsPhone.css"
		}).appendTo("head");
	} 

});