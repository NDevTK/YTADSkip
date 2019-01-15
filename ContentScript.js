var v = document.querySelector('video')
var v_id = youtube_parser(document.URL);

if (v_id) {
v.currentTime = 1000;
setTimeout(function(){ v.play() }, 100);
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}
