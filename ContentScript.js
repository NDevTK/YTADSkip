function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}
if (youtube_parser(document.URL)) {
document.querySelector('video').currentTime = 1000;
setTimeout(function(){ document.querySelector('video').play() }, 100);
}
