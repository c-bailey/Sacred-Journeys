$(document).ready(function(){
	console.log('here');
	if ((navigator.userAgent.indexOf('IEMobile') !== -1) || (navigator.userAgent.indexOf('WPDesktop') !== -1)) {
		console.log('if passed');
		$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: "stylesheets/windowsPhone.css"
		}).appendTo("head");
	} 

});