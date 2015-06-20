$(window).load(function() {
	var pause = document.createElement('script');
	pause.src = chrome.extension.getURL('pause.js');
	pause.onload = function() {
		this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(pause);
});


