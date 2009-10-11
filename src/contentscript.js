// When the window resizes send a quick message to the extension
window.addEventListener("resize", function() {
	chrome.extension.connect({name: "resize"}).postMessage();
}, false);
