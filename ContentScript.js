chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'ytvideo') {
      SkipAdvert(request.url);
    }
});

function SkipAdvert(){
var v = document.querySelector('video');
v.currentTime = 1000;
setTimeout(function(){ v.play() }, 100);
}
