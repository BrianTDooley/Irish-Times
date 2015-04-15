/*
function onRequest(request, sender, callback) {
  chrome.windows.create({"url": "http://www.irishtimes.com", "incognito": true, "focused": true});
}
*/  
// Wire up the listener.
//chrome.extension.onRequest.addListener(onRequest);    


$(document).ready(function() {
   chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
   	 if (tabs[0].url.search('irishtimes.com') > 0) {
	   	 chrome.windows.create({"url": tabs[0].url.substring(0, tabs[0].url.search('mode=sample') - 1), "incognito": true, "focused": true});
	   	}
   	}
  );  
});

