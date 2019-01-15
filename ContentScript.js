chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'ytvideo') {
	setTimeout(function(){ SkipAdvert() }, 1400);
    }
});

function SkipAdvert(){
if(document.getElementsByClassName("ytp-ad-player-overlay").length == 1){
var v = document.querySelector('video');
v.currentTime = 1000
setTimeout(function(){ v.play() }, 100);
}}
